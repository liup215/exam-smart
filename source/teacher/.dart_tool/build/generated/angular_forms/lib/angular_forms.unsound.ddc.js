define(['dart_sdk', 'packages/angular_forms/src/directives'], (function load__packages__angular_forms__angular_forms(dart_sdk, packages__angular_forms__src__directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const radio_control_value_accessor = packages__angular_forms__src__directives.src__directives__radio_control_value_accessor;
  var angular_forms = Object.create(dart.library);
  var RadioControlRegistryL = () => (RadioControlRegistryL = dart.constFn(dart.legacy(radio_control_value_accessor.RadioControlRegistry)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.wrapType(RadioControlRegistryL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], TypeL());
    }
  }, false);
  var C1;
  var C0;
  dart.defineLazy(angular_forms, {
    /*angular_forms.FORM_PROVIDERS*/get FORM_PROVIDERS() {
      return C0 || CT.C0;
    },
    /*angular_forms.FORM_BINDINGS*/get FORM_BINDINGS() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_forms/angular_forms", {
    "package:angular_forms/angular_forms.dart": angular_forms
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_forms.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAiEiB,4BAAc;;;MAGzB,2BAAa","file":"angular_forms.unsound.ddc.js"}');
  // Exports:
  return {
    angular_forms: angular_forms
  };
}));

//# sourceMappingURL=angular_forms.unsound.ddc.js.map
