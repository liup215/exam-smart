// Copyright 2017 Baliance. All rights reserved.
//
// DO NOT EDIT: generated by gooxml ECMA-376 generator
//
// Use of this source code is governed by the terms of the Affero GNU General
// Public License version 3.0 as published by the Free Software Foundation and
// appearing in the file LICENSE included in the packaging of this file. A
// commercial license can be purchased by contacting sales@baliance.com.

package wml

import (
	"encoding/xml"
	"fmt"

	"github.com/carmel/gooxml"
	"github.com/carmel/gooxml/schema/soo/dml"
)

type WdCT_WordprocessingGroup struct {
	CNvPr      *dml.CT_NonVisualDrawingProps
	CNvGrpSpPr *dml.CT_NonVisualGroupDrawingShapeProps
	GrpSpPr    *dml.CT_GroupShapeProperties
	Choice     []*WdCT_WordprocessingGroupChoice
	ExtLst     *dml.CT_OfficeArtExtensionList
}

func NewWdCT_WordprocessingGroup() *WdCT_WordprocessingGroup {
	ret := &WdCT_WordprocessingGroup{}
	ret.CNvGrpSpPr = dml.NewCT_NonVisualGroupDrawingShapeProps()
	ret.GrpSpPr = dml.NewCT_GroupShapeProperties()
	return ret
}

func (m *WdCT_WordprocessingGroup) MarshalXML(e *xml.Encoder, start xml.StartElement) error {
	e.EncodeToken(start)
	if m.CNvPr != nil {
		secNvPr := xml.StartElement{Name: xml.Name{Local: "wp:cNvPr"}}
		e.EncodeElement(m.CNvPr, secNvPr)
	}
	secNvGrpSpPr := xml.StartElement{Name: xml.Name{Local: "wp:cNvGrpSpPr"}}
	e.EncodeElement(m.CNvGrpSpPr, secNvGrpSpPr)
	segrpSpPr := xml.StartElement{Name: xml.Name{Local: "wp:grpSpPr"}}
	e.EncodeElement(m.GrpSpPr, segrpSpPr)
	if m.Choice != nil {
		for _, c := range m.Choice {
			c.MarshalXML(e, xml.StartElement{})
		}
	}
	if m.ExtLst != nil {
		seextLst := xml.StartElement{Name: xml.Name{Local: "wp:extLst"}}
		e.EncodeElement(m.ExtLst, seextLst)
	}
	e.EncodeToken(xml.EndElement{Name: start.Name})
	return nil
}

func (m *WdCT_WordprocessingGroup) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {
	// initialize to default
	m.CNvGrpSpPr = dml.NewCT_NonVisualGroupDrawingShapeProps()
	m.GrpSpPr = dml.NewCT_GroupShapeProperties()
lWdCT_WordprocessingGroup:
	for {
		tok, err := d.Token()
		if err != nil {
			return err
		}
		switch el := tok.(type) {
		case xml.StartElement:
			switch el.Name {
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "cNvPr"}:
				m.CNvPr = dml.NewCT_NonVisualDrawingProps()
				if err := d.DecodeElement(m.CNvPr, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "cNvGrpSpPr"}:
				if err := d.DecodeElement(m.CNvGrpSpPr, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "grpSpPr"}:
				if err := d.DecodeElement(m.GrpSpPr, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "wsp"}:
				tmp := NewWdCT_WordprocessingGroupChoice()
				if err := d.DecodeElement(&tmp.Wsp, &el); err != nil {
					return err
				}
				m.Choice = append(m.Choice, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "grpSp"}:
				tmp := NewWdCT_WordprocessingGroupChoice()
				if err := d.DecodeElement(&tmp.GrpSp, &el); err != nil {
					return err
				}
				m.Choice = append(m.Choice, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "graphicFrame"}:
				tmp := NewWdCT_WordprocessingGroupChoice()
				if err := d.DecodeElement(&tmp.GraphicFrame, &el); err != nil {
					return err
				}
				m.Choice = append(m.Choice, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/picture", Local: "pic"}:
				tmp := NewWdCT_WordprocessingGroupChoice()
				if err := d.DecodeElement(&tmp.Pic, &el); err != nil {
					return err
				}
				m.Choice = append(m.Choice, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "contentPart"}:
				tmp := NewWdCT_WordprocessingGroupChoice()
				if err := d.DecodeElement(&tmp.ContentPart, &el); err != nil {
					return err
				}
				m.Choice = append(m.Choice, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", Local: "extLst"}:
				m.ExtLst = dml.NewCT_OfficeArtExtensionList()
				if err := d.DecodeElement(m.ExtLst, &el); err != nil {
					return err
				}
			default:
				gooxml.Log("skipping unsupported element on WdCT_WordprocessingGroup %v", el.Name)
				if err := d.Skip(); err != nil {
					return err
				}
			}
		case xml.EndElement:
			break lWdCT_WordprocessingGroup
		case xml.CharData:
		}
	}
	return nil
}

// Validate validates the WdCT_WordprocessingGroup and its children
func (m *WdCT_WordprocessingGroup) Validate() error {
	return m.ValidateWithPath("WdCT_WordprocessingGroup")
}

// ValidateWithPath validates the WdCT_WordprocessingGroup and its children, prefixing error messages with path
func (m *WdCT_WordprocessingGroup) ValidateWithPath(path string) error {
	if m.CNvPr != nil {
		if err := m.CNvPr.ValidateWithPath(path + "/CNvPr"); err != nil {
			return err
		}
	}
	if err := m.CNvGrpSpPr.ValidateWithPath(path + "/CNvGrpSpPr"); err != nil {
		return err
	}
	if err := m.GrpSpPr.ValidateWithPath(path + "/GrpSpPr"); err != nil {
		return err
	}
	for i, v := range m.Choice {
		if err := v.ValidateWithPath(fmt.Sprintf("%s/Choice[%d]", path, i)); err != nil {
			return err
		}
	}
	if m.ExtLst != nil {
		if err := m.ExtLst.ValidateWithPath(path + "/ExtLst"); err != nil {
			return err
		}
	}
	return nil
}
