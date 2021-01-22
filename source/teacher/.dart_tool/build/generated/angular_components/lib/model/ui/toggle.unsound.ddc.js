define(['dart_sdk'], (function load__packages__angular_components__model__ui__toggle(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var toggle = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/toggle.dart";
  var isOn = dart.privateName(toggle, "Toggleable.isOn");
  toggle.Toggleable = class Toggleable extends core.Object {
    get isOn() {
      return this[isOn];
    }
    set isOn(value) {
      this[isOn] = value;
    }
    toggle() {
      this.isOn = !dart.test(this.isOn);
    }
  };
  (toggle.Toggleable.new = function() {
    this[isOn] = false;
    ;
  }).prototype = toggle.Toggleable.prototype;
  dart.addTypeTests(toggle.Toggleable);
  dart.addTypeCaches(toggle.Toggleable);
  dart.setMethodSignature(toggle.Toggleable, () => ({
    __proto__: dart.getMethods(toggle.Toggleable.__proto__),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(toggle.Toggleable, L0);
  dart.setFieldSignature(toggle.Toggleable, () => ({
    __proto__: dart.getFields(toggle.Toggleable.__proto__),
    isOn: dart.fieldType(dart.legacy(core.bool))
  }));
  toggle.Toggler = class Toggler extends core.Object {};
  (toggle.Toggler.new = function() {
    ;
  }).prototype = toggle.Toggler.prototype;
  dart.addTypeTests(toggle.Toggler);
  dart.addTypeCaches(toggle.Toggler);
  dart.setLibraryUri(toggle.Toggler, L0);
  dart.trackLibraries("packages/angular_components/model/ui/toggle", {
    "package:angular_components/model/ui/toggle.dart": toggle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["toggle.dart"],"names":[],"mappings":";;;;;;;;;;IAQO;;;;;;;AAGS,MAAZ,YAAO,WAAC;IACV;;;IAJK,aAAO;;EAKd;;;;;;;;;;;;;;;EAKA","file":"toggle.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__toggle: toggle
  };
}));

//# sourceMappingURL=toggle.unsound.ddc.js.map
