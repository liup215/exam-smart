package document

import (
	"bytes"
	"encoding/xml"
	"fmt"
	"os"
	"testing"

	"github.com/carmel/gooxml/schema/soo/wml"
	"github.com/carmel/gooxml/testhelper"
	"github.com/carmel/gooxml/zippkg"
)

func TestSettingsUnmarshal(t *testing.T) {
	f, err := os.Open("testdata/settings.xml")
	if err != nil {
		t.Fatalf("error reading settings file")
	}
	dec := xml.NewDecoder(f)
	stng := wml.NewSettings()
	if err := dec.Decode(stng); err != nil {
		t.Errorf("error decoding settings: %s", err)
	}
	got := &bytes.Buffer{}
	fmt.Fprintf(got, zippkg.XMLHeader)
	enc := xml.NewEncoder(zippkg.SelfClosingWriter{W: got})
	if err := enc.Encode(stng); err != nil {
		t.Errorf("error encoding settings: %s", err)
	}

	testhelper.CompareGoldenXML(t, "settings.xml", got.Bytes())
}
