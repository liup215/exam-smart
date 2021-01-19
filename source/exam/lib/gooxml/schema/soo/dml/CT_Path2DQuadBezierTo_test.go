// Copyright 2017 Baliance. All rights reserved.
//
// DO NOT EDIT: generated by gooxml ECMA-376 generator
//
// Use of this source code is governed by the terms of the Affero GNU General
// Public License version 3.0 as published by the Free Software Foundation and
// appearing in the file LICENSE included in the packaging of this file. A
// commercial license can be purchased by contacting sales@baliance.com.

package dml_test

import (
	"encoding/xml"
	"testing"

	"github.com/carmel/gooxml/schema/soo/dml"
)

func TestCT_Path2DQuadBezierToConstructor(t *testing.T) {
	v := dml.NewCT_Path2DQuadBezierTo()
	if v == nil {
		t.Errorf("dml.NewCT_Path2DQuadBezierTo must return a non-nil value")
	}
	if err := v.Validate(); err != nil {
		t.Errorf("newly constructed dml.CT_Path2DQuadBezierTo should validate: %s", err)
	}
}

func TestCT_Path2DQuadBezierToMarshalUnmarshal(t *testing.T) {
	v := dml.NewCT_Path2DQuadBezierTo()
	buf, _ := xml.Marshal(v)
	v2 := dml.NewCT_Path2DQuadBezierTo()
	xml.Unmarshal(buf, v2)
}
