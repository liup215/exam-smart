// Copyright 2017 Baliance. All rights reserved.
package main

import (
	"log"

	"github.com/carmel/gooxml/document"
	"github.com/carmel/gooxml/measurement"
	"github.com/carmel/gooxml/schema/soo/wml"
)

func main() {
	doc := document.New()
	lorem := `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis, lectus dictum feugiat tempus, sem neque finibus enim, sed eleifend sem nunc ac diam. Vestibulum tempus sagittis elementum.`

	// single spaced
	para := doc.AddParagraph()
	run := para.AddRun()
	run.AddText(lorem)
	run.AddText(lorem)
	run.AddBreak()

	// double spaced is twice the text height (24 points in this case as the text height is 12 points)
	para = doc.AddParagraph()
	para.Properties().Spacing().SetLineSpacing(24*measurement.Point, wml.ST_LineSpacingRuleAuto)
	run = para.AddRun()
	run.AddText(lorem)
	run.AddText(lorem)
	run.AddBreak()

	if err := doc.Validate(); err != nil {
		log.Fatalf("error during validation: %s", err)
	}
	doc.SaveToFile("line-spacing.docx")
}
