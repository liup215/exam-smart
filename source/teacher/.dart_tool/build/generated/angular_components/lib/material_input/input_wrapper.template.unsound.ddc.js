define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template'], (function load__packages__angular_components__material_input__input_wrapper_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  var input_wrapper$46template = Object.create(dart.library);
  const CT = Object.create(null);
  input_wrapper$46template.initReflector = function initReflector() {
    if (dart.test(input_wrapper$46template._visited)) {
      return;
    }
    input_wrapper$46template._visited = true;
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
  };
  dart.defineLazy(input_wrapper$46template, {
    /*input_wrapper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/input_wrapper.template", {
    "package:angular_components/material_input/input_wrapper.template.dart": input_wrapper$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_wrapper.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,iCAAQ;YAAG","file":"input_wrapper.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__input_wrapper$46template: input_wrapper$46template
  };
}));

//# sourceMappingURL=input_wrapper.template.unsound.ddc.js.map
