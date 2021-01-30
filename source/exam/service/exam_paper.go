package service

import (
	"encoding/json"
	"errors"
	"exam/dao"
	"exam/lib/strings"
	"exam/model"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"github.com/carmel/gooxml/common"
	"github.com/carmel/gooxml/document"
	"github.com/carmel/gooxml/measurement"
	"github.com/carmel/gooxml/schema/soo/wml"
	"io/ioutil"
	"net/http"
	"os"
	gostrings "strings"
	"time"
)

const (
	EXAM_TMP_DIR = "./tmp/exam_paper/"
)

func init() {
	fmt.Println(os.MkdirAll(EXAM_TMP_DIR, os.ModePerm))
}

func (s *Service) SelectExamPaperAllCount() int {
	return s.dao.Count(dao.ExamPaperQuery{})
}

func (s *Service) ExamPaperList(q dao.ExamPaperQuery) ([]model.ExamPaper, int) {
	list := []model.ExamPaper{}
	total := 0

	s.dao.SelectList(&list, &total, q)

	for i, p := range list {
		s.examPaperFormat(&p)
		list[i] = p
	}

	return list, total
}

func (s *Service) ExamPaperById(id uint) (model.ExamPaper, error) {
	if id == uint(0) {
		return model.ExamPaper{}, errors.New("试卷ID不能为空")
	}

	return s.examPaperById(id)
}

func (s *Service) ExamPaperExportToDox(id uint) (string, string, error) {
	if id == uint(0) {
		return "", "", errors.New("试卷ID不能为空")
	}

	paper, err := s.examPaperById(id)
	if err != nil {
		return "", "", err
	}

	//p := s.examPaperFormat(paper)
	s.examPaperFormat(&paper)
	fileName := fmt.Sprintf("exam_paper_%v_%v_%v.docx", int(id), paper.Name, time.Now().Format("20060102150405")+strings.NumRandomStr(4))

	filePath := EXAM_TMP_DIR + fileName

	// 判断有无文件，若有则先删除
	if _, err := os.Stat(filePath); err != nil {
		if err == nil {
			os.Remove(filePath)
		}
	}

	// 写入标题
	doc := document.New()
	t := doc.AddParagraph()
	tRun := t.AddRun()
	t.SetStyle("Heading1")
	tRun.Properties().SetFontFamily("Arial")
	tRun.AddText(paper.Name)

	// 写入题目

	for order, titleItem := range paper.TitleItems {
		item := doc.AddParagraph()
		iRun := item.AddRun()
		item.SetStyle("Heading2")
		iRun.Properties().SetFontFamily("Arial")
		iRun.AddText(fmt.Sprintf("%v. %v", order+1, titleItem.Name))

		// 正式写入题目
		for qOrder, qItem := range titleItem.QuestionItems {
			s.writeQuestionToDoc(doc, qItem.Question, qOrder)
		}

	}

	doc.SaveToFile(filePath)

	return filePath, fileName, nil
}

func (svr *Service) writeQuestionToDoc(doc *document.Document, q model.Question, qOrder int) {
	if doc == nil {
		return
	}
	qTitleP := doc.AddParagraph()
	qTitleRun := qTitleP.AddRun()
	qTitleRun.AddText(fmt.Sprintf("%v. (%v-%v-%v)", qOrder+1, q.YearName, q.SeriesName, q.CodeName))
	qTitleRun.Properties().SetFontFamily("Arial")

	// 添加题目内容
	html := "<div id='qTitle'>" + q.Title + "</div>"

	dom, err := goquery.NewDocumentFromReader(gostrings.NewReader(html))
	if err != nil {
		return
	}

	dom.Find("p").Each(func(i1 int, selection *goquery.Selection) {
		nPara := doc.AddParagraph()
		nRun := nPara.AddRun()
		selection.Find("img").Each(func(i2 int, img *goquery.Selection) {
			src, ok := img.Attr("src")
			if ok {
				res, err := http.Get(src)
				if err != nil {
					return
				}

				defer res.Body.Close()
				imgBytes, err := ioutil.ReadAll(res.Body)
				if err != nil {
					return
				}
				if img0, err := common.ImageFromBytes(imgBytes); err != nil {
					return
				} else {
					img0Ref, err := doc.AddImage(img0)
					if err != nil {
						return
					}

					if inlineDrawing, err := nRun.AddDrawingInline(img0Ref); err != nil {
						return
					} else {
						width := measurement.Distance(0.5 * 210 * measurement.Millimeter)
						height := img0Ref.RelativeHeight(width)
						inlineDrawing.SetSize(width, height)
						nPara.Properties().SetAlignment(wml.ST_JcCenter)
					}
				}
			}
		})

		nRun.AddText(selection.Text())

		nRun.Properties().SetFontFamily("Arial")
	})

	// 如果是单选题，就同时写入选项
	if q.QuestionType == model.QUESTION_TYPE_SINGLE_CHOICE {
		for _, item := range q.Items {
			iPar := doc.AddParagraph()
			iRun := iPar.AddRun()
			iRun.Properties().SetFontFamily("Arial")
			iRun.AddText(item.Prefix + ". " + item.Content)
		}
	}
}

func (s *Service) examPaperById(id uint) (model.ExamPaper, error) {
	if id == uint(0) {
		return model.ExamPaper{}, errors.New("试卷ID不能为空")
	}

	p := model.ExamPaper{}
	err := s.dao.SelectOne(&p, dao.ExamPaperQuery{Model: model.Model{ID: id}})
	s.examPaperFormat(&p)
	return p, err
}

func (svr *Service) examPaperFormat(p *model.ExamPaper) {
	syllabusOption := svr.buildSyllabusOptionById(p.SyllabusId)
	p.SyllabusOption = syllabusOption

	// 格式化创建时间
	p.CreatedAtFormatted = p.CreatedAt.Format("2006-01-02 15:04:05")

	textContent := model.TextContent{}
	svr.dao.SelectOne(&textContent, dao.TextContentQuery{Model: model.Model{ID: p.FrameTexcontentId}})
	examPaperTitleItems := []model.ExamPaperTitleItem{}
	json.Unmarshal([]byte(textContent.Content), &examPaperTitleItems)

	p.TitleItems = examPaperTitleItems
}

func (svr *Service) SavePaper(examPaper model.ExamPaper) (model.ExamPaper, error) {
	titleItemsVM := examPaper.TitleItems

	frameTextContentStrByte, err := json.Marshal(&titleItemsVM)
	if err != nil {
		return model.ExamPaper{}, errors.New("试卷题目信息转换错误, " + err.Error())
	}

	frameTextContentStr := string(frameTextContentStrByte)

	if examPaper.ID == 0 {

		textContext := model.TextContent{Content: frameTextContentStr}
		err := svr.dao.Create(&textContext, dao.TextContentQuery{})
		if err != nil {
			return model.ExamPaper{}, errors.New("题目信息存储失败, " + err.Error())
		}

		examPaper.FrameTexcontentId = textContext.ID
		svr.examPaperFromVM(&examPaper, titleItemsVM)
		if err := svr.dao.Create(&examPaper, dao.ExamPaperQuery{}); err != nil {
			return model.ExamPaper{}, nil
		}
	} else {
		record := model.ExamPaper{}
		if err := svr.dao.SelectOne(&record, dao.ExamPaperQuery{Model: model.Model{ID: examPaper.ID}}); err != nil {
			return model.ExamPaper{}, errors.New("试卷查询失败, " + err.Error())
		}

		record.Name = examPaper.Name
		record.SyllabusId = examPaper.SyllabusId
		record.SuggestTime = examPaper.SuggestTime

		textContent := model.TextContent{}
		if err := svr.dao.SelectOne(&textContent, dao.TextContentQuery{Model: model.Model{ID: examPaper.FrameTexcontentId}}); err != nil {
			return model.ExamPaper{}, errors.New("试卷内容查询失败, " + err.Error())
		}

		textContent.Content = frameTextContentStr
		if svr.dao.Save(&textContent, dao.TextContentQuery{}) != nil {
			return model.ExamPaper{}, errors.New("试卷内容更新失败, " + err.Error())
		}

		svr.examPaperFromVM(&record, titleItemsVM)

		if err := svr.dao.Save(&record, dao.ExamPaperQuery{}); err != nil {
			return model.ExamPaper{}, nil
		}

		examPaper = record
	}

	return examPaper, nil

}

func (svr *Service) examPaperFromVM(examPaper *model.ExamPaper, titleItemsVM []model.ExamPaperTitleItem) {
	questionCount := 0
	score := 0
	for _, titleItems := range titleItemsVM {
		questionCount = questionCount + len(titleItems.QuestionItems)
		for _, q := range titleItems.QuestionItems {
			score = score + q.Question.Score
		}
	}

	examPaper.QuestionCount = questionCount
	examPaper.Score = score
}
