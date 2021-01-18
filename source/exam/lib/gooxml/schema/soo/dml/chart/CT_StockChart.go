// Copyright 2017 Baliance. All rights reserved.
//
// DO NOT EDIT: generated by gooxml ECMA-376 generator
//
// Use of this source code is governed by the terms of the Affero GNU General
// Public License version 3.0 as published by the Free Software Foundation and
// appearing in the file LICENSE included in the packaging of this file. A
// commercial license can be purchased by contacting sales@baliance.com.

package chart

import (
	"encoding/xml"
	"fmt"

	"github.com/carmel/gooxml"
)

type CT_StockChart struct {
	Ser        []*CT_LineSer
	DLbls      *CT_DLbls
	DropLines  *CT_ChartLines
	HiLowLines *CT_ChartLines
	UpDownBars *CT_UpDownBars
	AxId       []*CT_UnsignedInt
	ExtLst     *CT_ExtensionList
}

func NewCT_StockChart() *CT_StockChart {
	ret := &CT_StockChart{}
	return ret
}

func (m *CT_StockChart) MarshalXML(e *xml.Encoder, start xml.StartElement) error {
	e.EncodeToken(start)
	seser := xml.StartElement{Name: xml.Name{Local: "c:ser"}}
	for _, c := range m.Ser {
		e.EncodeElement(c, seser)
	}
	if m.DLbls != nil {
		sedLbls := xml.StartElement{Name: xml.Name{Local: "c:dLbls"}}
		e.EncodeElement(m.DLbls, sedLbls)
	}
	if m.DropLines != nil {
		sedropLines := xml.StartElement{Name: xml.Name{Local: "c:dropLines"}}
		e.EncodeElement(m.DropLines, sedropLines)
	}
	if m.HiLowLines != nil {
		sehiLowLines := xml.StartElement{Name: xml.Name{Local: "c:hiLowLines"}}
		e.EncodeElement(m.HiLowLines, sehiLowLines)
	}
	if m.UpDownBars != nil {
		seupDownBars := xml.StartElement{Name: xml.Name{Local: "c:upDownBars"}}
		e.EncodeElement(m.UpDownBars, seupDownBars)
	}
	seaxId := xml.StartElement{Name: xml.Name{Local: "c:axId"}}
	for _, c := range m.AxId {
		e.EncodeElement(c, seaxId)
	}
	if m.ExtLst != nil {
		seextLst := xml.StartElement{Name: xml.Name{Local: "c:extLst"}}
		e.EncodeElement(m.ExtLst, seextLst)
	}
	e.EncodeToken(xml.EndElement{Name: start.Name})
	return nil
}

func (m *CT_StockChart) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {
	// initialize to default
lCT_StockChart:
	for {
		tok, err := d.Token()
		if err != nil {
			return err
		}
		switch el := tok.(type) {
		case xml.StartElement:
			switch el.Name {
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "ser"}:
				tmp := NewCT_LineSer()
				if err := d.DecodeElement(tmp, &el); err != nil {
					return err
				}
				m.Ser = append(m.Ser, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "dLbls"}:
				m.DLbls = NewCT_DLbls()
				if err := d.DecodeElement(m.DLbls, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "dropLines"}:
				m.DropLines = NewCT_ChartLines()
				if err := d.DecodeElement(m.DropLines, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "hiLowLines"}:
				m.HiLowLines = NewCT_ChartLines()
				if err := d.DecodeElement(m.HiLowLines, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "upDownBars"}:
				m.UpDownBars = NewCT_UpDownBars()
				if err := d.DecodeElement(m.UpDownBars, &el); err != nil {
					return err
				}
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "axId"}:
				tmp := NewCT_UnsignedInt()
				if err := d.DecodeElement(tmp, &el); err != nil {
					return err
				}
				m.AxId = append(m.AxId, tmp)
			case xml.Name{Space: "http://schemas.openxmlformats.org/drawingml/2006/chart", Local: "extLst"}:
				m.ExtLst = NewCT_ExtensionList()
				if err := d.DecodeElement(m.ExtLst, &el); err != nil {
					return err
				}
			default:
				gooxml.Log("skipping unsupported element on CT_StockChart %v", el.Name)
				if err := d.Skip(); err != nil {
					return err
				}
			}
		case xml.EndElement:
			break lCT_StockChart
		case xml.CharData:
		}
	}
	return nil
}

// Validate validates the CT_StockChart and its children
func (m *CT_StockChart) Validate() error {
	return m.ValidateWithPath("CT_StockChart")
}

// ValidateWithPath validates the CT_StockChart and its children, prefixing error messages with path
func (m *CT_StockChart) ValidateWithPath(path string) error {
	for i, v := range m.Ser {
		if err := v.ValidateWithPath(fmt.Sprintf("%s/Ser[%d]", path, i)); err != nil {
			return err
		}
	}
	if m.DLbls != nil {
		if err := m.DLbls.ValidateWithPath(path + "/DLbls"); err != nil {
			return err
		}
	}
	if m.DropLines != nil {
		if err := m.DropLines.ValidateWithPath(path + "/DropLines"); err != nil {
			return err
		}
	}
	if m.HiLowLines != nil {
		if err := m.HiLowLines.ValidateWithPath(path + "/HiLowLines"); err != nil {
			return err
		}
	}
	if m.UpDownBars != nil {
		if err := m.UpDownBars.ValidateWithPath(path + "/UpDownBars"); err != nil {
			return err
		}
	}
	for i, v := range m.AxId {
		if err := v.ValidateWithPath(fmt.Sprintf("%s/AxId[%d]", path, i)); err != nil {
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
