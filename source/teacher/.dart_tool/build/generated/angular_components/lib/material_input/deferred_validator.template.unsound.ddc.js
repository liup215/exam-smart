define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_input/deferred_validator', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], (function load__packages__angular_components__material_input__deferred_validator_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_input__deferred_validator, packages__angular__angular$46template, packages__angular_forms__angular_forms$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  var deferred_validator$46template = Object.create(dart.library);
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var VoidToDeferredValidatorL = () => (VoidToDeferredValidatorL = dart.constFn(dart.fnType(DeferredValidatorL(), [])))();
  const CT = Object.create(null);
  deferred_validator$46template.initReflector = function initReflector() {
    if (dart.test(deferred_validator$46template._visited)) {
      return;
    }
    deferred_validator$46template._visited = true;
    reflector.registerFactory(dart.wrapType(DeferredValidatorL()), dart.fn(() => new deferred_validator.DeferredValidator.new(), VoidToDeferredValidatorL()));
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(deferred_validator$46template, {
    /*deferred_validator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/deferred_validator.template", {
    "package:angular_components/material_input/deferred_validator.template.dart": deferred_validator$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["deferred_validator.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAEyD,IAApE,0BAAuB,qCAAmB,cAAM;AAC3B,IAArB;AACqB,IAArB;EACF;;MAVI,sCAAQ;YAAG","file":"deferred_validator.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__deferred_validator$46template: deferred_validator$46template
  };
}));

//# sourceMappingURL=deferred_validator.template.unsound.ddc.js.map
