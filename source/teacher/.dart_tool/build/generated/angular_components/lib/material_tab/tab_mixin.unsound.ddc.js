define(['dart_sdk'], (function load__packages__angular_components__material_tab__tab_mixin(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var tab_mixin = Object.create(dart.library);
  var $offsetWidth = dartx.offsetWidth;
  var $offsetLeft = dartx.offsetLeft;
  var $width = dartx.width;
  var $isNotEmpty = dartx.isNotEmpty;
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/tab_mixin.dart";
  var _label = dart.privateName(tab_mixin, "_label");
  var _textWidth = dart.privateName(tab_mixin, "_textWidth");
  tab_mixin.TabMixin = class TabMixin extends core.Object {
    get label() {
      return this[_label];
    }
    set label(label) {
      this[_textWidth] = 0;
      this[_label] = label;
    }
    get offsetWidth() {
      return this.nativeElement[$offsetWidth];
    }
    get offsetLeft() {
      return this.nativeElement[$offsetLeft];
    }
    get width() {
      return this.nativeElement.style[$width];
    }
    set width(width) {
      return this.nativeElement.style[$width] = width;
    }
    get textWidth() {
      return this[_textWidth];
    }
    updateTextWidth() {
      if (this[_textWidth] === 0) {
        this[_textWidth] = this.offsetWidth;
      }
    }
    tryClearWidth() {
      if (this[_textWidth] === 0 && this.width[$isNotEmpty]) {
        this.width = "";
      }
    }
  };
  (tab_mixin.TabMixin.new = function() {
    this[_label] = null;
    this[_textWidth] = 0;
    ;
  }).prototype = tab_mixin.TabMixin.prototype;
  dart.addTypeTests(tab_mixin.TabMixin);
  dart.addTypeCaches(tab_mixin.TabMixin);
  dart.setMethodSignature(tab_mixin.TabMixin, () => ({
    __proto__: dart.getMethods(tab_mixin.TabMixin.__proto__),
    updateTextWidth: dart.fnType(dart.void, []),
    tryClearWidth: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(tab_mixin.TabMixin, () => ({
    __proto__: dart.getGetters(tab_mixin.TabMixin.__proto__),
    label: dart.legacy(core.String),
    offsetWidth: dart.legacy(core.int),
    offsetLeft: dart.legacy(core.int),
    width: dart.legacy(core.String),
    textWidth: dart.legacy(core.int)
  }));
  dart.setSetterSignature(tab_mixin.TabMixin, () => ({
    __proto__: dart.getSetters(tab_mixin.TabMixin.__proto__),
    label: dart.legacy(core.String),
    width: dart.legacy(core.String)
  }));
  dart.setLibraryUri(tab_mixin.TabMixin, L0);
  dart.setFieldSignature(tab_mixin.TabMixin, () => ({
    __proto__: dart.getFields(tab_mixin.TabMixin.__proto__),
    [_label]: dart.fieldType(dart.legacy(core.String)),
    [_textWidth]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.trackLibraries("packages/angular_components/material_tab/tab_mixin", {
    "package:angular_components/material_tab/tab_mixin.dart": tab_mixin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAoBsB;IAAM;cAET;AACD,MAAd,mBAAa;AACC,MAAd,eAAS,KAAK;IAChB;;AAIuB,YAAA,AAAc;IAAW;;AAG1B,YAAA,AAAc;IAAU;;AAG1B,YAAA,AAAc,AAAM;IAAK;cAC5B;AAAU,YAAA,AAAc,AAAM,oCAAQ,KAAK;;;AAGvC;IAAU;;AAM7B,UAAI,AAAW,qBAAG;AACQ,QAAxB,mBAAa;;IAEjB;;AAME,UAAI,AAAW,qBAAG,KAAK,AAAM;AACjB,QAAV,aAAQ;;IAEZ;;;IA/CO;IACH,mBAAa;;EA+CnB","file":"tab_mixin.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_mixin: tab_mixin
  };
}));

//# sourceMappingURL=tab_mixin.unsound.ddc.js.map
