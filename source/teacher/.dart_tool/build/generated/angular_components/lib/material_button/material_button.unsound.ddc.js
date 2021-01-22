define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_button__material_button(dart_sdk, packages__angular_components__material_button__material_button_base, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button_base = packages__angular_components__material_button__material_button_base.material_button__material_button_base;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_button = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_button/material_button.dart";
  var _changeDetector$ = dart.privateName(material_button, "_changeDetector");
  var ariaLabel = dart.privateName(material_button, "MaterialButtonComponent.ariaLabel");
  material_button.MaterialButtonComponent = class MaterialButtonComponent extends material_button_base.MaterialButtonBase {
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      super.ariaLabel = value;
    }
    focusedStateChanged() {
      this[_changeDetector$].markForCheck();
    }
    get hostDisabled() {
      return dart.test(this.disabled) ? "" : null;
    }
    get hostRaised() {
      return dart.test(this.raised) ? "" : null;
    }
    get hostClassIsFocused() {
      return this.visualFocus;
    }
    get hostElevation() {
      return dart.str(this.zElevation);
    }
  };
  (material_button.MaterialButtonComponent.new = function(element, darktheme, _changeDetector, role) {
    this[ariaLabel] = null;
    this[_changeDetector$] = _changeDetector;
    material_button.MaterialButtonComponent.__proto__.new.call(this, element, role);
    if (this[_changeDetector$] == null) dart.throw(core.Exception.new("Expecting change detector"));
    darktheme.themeElement(element);
  }).prototype = material_button.MaterialButtonComponent.prototype;
  dart.addTypeTests(material_button.MaterialButtonComponent);
  dart.addTypeCaches(material_button.MaterialButtonComponent);
  dart.setGetterSignature(material_button.MaterialButtonComponent, () => ({
    __proto__: dart.getGetters(material_button.MaterialButtonComponent.__proto__),
    hostDisabled: dart.legacy(core.String),
    hostRaised: dart.legacy(core.String),
    hostClassIsFocused: dart.legacy(core.bool),
    hostElevation: dart.legacy(core.String)
  }));
  dart.setLibraryUri(material_button.MaterialButtonComponent, L0);
  dart.setFieldSignature(material_button.MaterialButtonComponent, () => ({
    __proto__: dart.getFields(material_button.MaterialButtonComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    ariaLabel: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_button.MaterialButtonComponent, {
    /*material_button.MaterialButtonComponent.hostAnimated*/get hostAnimated() {
      return "true";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_button", {
    "package:angular_components/material_button/material_button.dart": material_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;IA4He;;;;;;;AA/BmB,MAA9B,AAAgB;IAClB;;AAW2B,wCAAW,KAAK;IAAI;;AAItB,sCAAS,KAAK;IAAI;;AAIZ;IAAW;;AAId,YAAa,UAAX;IAAW;;0DArBL,SAAsB,WACjD,iBAA2C;IA2BvC,kBAAY;IA3BhB;AACH,qEAAM,OAAO,EAAE,IAAI;AACvB,QAAI,AAAgB,0BAAG,MAAM,AAA4C,WAAtC,mBAAU;AACd,IAA/B,AAAU,SAAD,cAAc,OAAO;EAChC;;;;;;;;;;;;;;;;;MAoBoB,oDAAY","file":"material_button.unsound.ddc.js"}');
  // Exports:
  return {
    material_button__material_button: material_button
  };
}));

//# sourceMappingURL=material_button.unsound.ddc.js.map
