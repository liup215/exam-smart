define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_button__material_fab(dart_sdk, packages__angular_components__material_button__material_button_base, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button_base = packages__angular_components__material_button__material_button_base.material_button__material_button_base;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_fab = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_button/material_fab.dart";
  var _changeDetector$ = dart.privateName(material_fab, "_changeDetector");
  material_fab.MaterialFabComponent = class MaterialFabComponent extends material_button_base.MaterialButtonBase {
    get isPressed() {
      return dart.test(this.isMouseDown) || dart.test(this.focused);
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
    get hostClassIsPressed() {
      return this.isPressed;
    }
  };
  (material_fab.MaterialFabComponent.new = function(element, _changeDetector) {
    this[_changeDetector$] = _changeDetector;
    material_fab.MaterialFabComponent.__proto__.new.call(this, element, null);
    ;
  }).prototype = material_fab.MaterialFabComponent.prototype;
  dart.addTypeTests(material_fab.MaterialFabComponent);
  dart.addTypeCaches(material_fab.MaterialFabComponent);
  dart.setGetterSignature(material_fab.MaterialFabComponent, () => ({
    __proto__: dart.getGetters(material_fab.MaterialFabComponent.__proto__),
    isPressed: dart.legacy(core.bool),
    hostDisabled: dart.legacy(core.String),
    hostRaised: dart.legacy(core.String),
    hostClassIsFocused: dart.legacy(core.bool),
    hostClassIsPressed: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_fab.MaterialFabComponent, L0);
  dart.setFieldSignature(material_fab.MaterialFabComponent, () => ({
    __proto__: dart.getFields(material_fab.MaterialFabComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef))
  }));
  dart.defineLazy(material_fab.MaterialFabComponent, {
    /*material_fab.MaterialFabComponent.hostAnimated*/get hostAnimated() {
      return "true";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_fab", {
    "package:angular_components/material_button/material_fab.dart": material_fab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.dart"],"names":[],"mappings":";;;;;;;;;;;;;AA+DwB,YAAY,WAAZ,+BAAe;IAAO;;AAIZ,MAA9B,AAAgB;IAClB;;AAI2B,wCAAW,KAAK;IAAI;;AAItB,sCAAS,KAAK;IAAI;;AAIZ;IAAW;;AAIX;IAAS;;oDAzBP;IAAc;AACzC,+DAAM,OAAO,EAAE;;EAAK;;;;;;;;;;;;;;;;;MA4BN,8CAAY","file":"material_fab.unsound.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab: material_fab
  };
}));

//# sourceMappingURL=material_fab.unsound.ddc.js.map
