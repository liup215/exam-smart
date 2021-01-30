package service

import (
	"exam/dao"
	"exam/lib/strings"
	"exam/model"

	"github.com/qiniu/api.v7/v7/auth/qbox"
	"github.com/qiniu/api.v7/v7/storage"

	"github.com/jinzhu/gorm"
)

func (s *Service) NewImage() (*model.Image, error) {
	img := model.Image{}
	name, err := s.generateImageName()
	if err != nil {
		return nil, err
	}

	img.Name = name

	err = s.dao.Create(img, dao.ImageQuery{})
	return &img, err
}

func (s *Service) GenerateImageName() (string, error) {
	return s.generateImageName()
}

func (s *Service) generateImageName() (string, error) {
	prefix := "IMG"
	name := prefix + strings.Random(20)

	for {
		img := model.Image{}
		err := s.dao.SelectOne(&img, dao.ImageQuery{Name: name})
		if err == gorm.ErrRecordNotFound {
			break
		} else if err != nil {
			return "", err
		} else {
			name = prefix + strings.Random(20)
		}
	}

	return name, nil
}

func (s *Service) UploadToken() string {
	qiniu := model.AttachQiniu{
		AccessKey: "3wlUg0ZQpR9d0AF6CnFdgms_kwtcxVGogN2D_M3F",
		SecretKey: "IRaUfenfCGgs_YMbxVv_FXOAXV26Twk3xe0oP0g9",
		Bucket:    "alevel",
		Url:       "http://cdn.alevel.icu",
	}

	mac := qbox.NewMac(qiniu.AccessKey, qiniu.SecretKey)
	putPolicy := storage.PutPolicy{
		Scope: qiniu.Bucket,
	}

	return putPolicy.UploadToken(mac)

}
