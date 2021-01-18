// Copyright 2017 Baliance. All rights reserved.
//
// DO NOT EDIT: generated by gooxml ECMA-376 generator
//
// Use of this source code is governed by the terms of the Affero GNU General
// Public License version 3.0 as published by the Free Software Foundation and
// appearing in the file LICENSE included in the packaging of this file. A
// commercial license can be purchased by contacting sales@baliance.com.

package sml

import (
	"encoding/xml"
	"fmt"

	"github.com/carmel/gooxml"
)

type CT_SheetData struct {
	// Row
	Row []*CT_Row
}

func NewCT_SheetData() *CT_SheetData {
	ret := &CT_SheetData{}
	return ret
}

func (m *CT_SheetData) MarshalXML(e *xml.Encoder, start xml.StartElement) error {
	e.EncodeToken(start)
	if m.Row != nil {
		serow := xml.StartElement{Name: xml.Name{Local: "ma:row"}}
		for _, c := range m.Row {
			e.EncodeElement(c, serow)
		}
	}
	e.EncodeToken(xml.EndElement{Name: start.Name})
	return nil
}

func (m *CT_SheetData) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {
	// initialize to default
lCT_SheetData:
	for {
		tok, err := d.Token()
		if err != nil {
			return err
		}
		switch el := tok.(type) {
		case xml.StartElement:
			switch el.Name {
			case xml.Name{Space: "http://schemas.openxmlformats.org/spreadsheetml/2006/main", Local: "row"}:
				tmp := NewCT_Row()
				if err := d.DecodeElement(tmp, &el); err != nil {
					return err
				}
				m.Row = append(m.Row, tmp)
			default:
				gooxml.Log("skipping unsupported element on CT_SheetData %v", el.Name)
				if err := d.Skip(); err != nil {
					return err
				}
			}
		case xml.EndElement:
			break lCT_SheetData
		case xml.CharData:
		}
	}
	return nil
}

// Validate validates the CT_SheetData and its children
func (m *CT_SheetData) Validate() error {
	return m.ValidateWithPath("CT_SheetData")
}

// ValidateWithPath validates the CT_SheetData and its children, prefixing error messages with path
func (m *CT_SheetData) ValidateWithPath(path string) error {
	for i, v := range m.Row {
		if err := v.ValidateWithPath(fmt.Sprintf("%s/Row[%d]", path, i)); err != nil {
			return err
		}
	}
	return nil
}
