define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_datepicker/model', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular/di.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_datepicker/range.template'], (function load__packages__angular_components__material_datepicker__model_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_datepicker__model, packages__angular_components__material_datepicker__comparison$46template, packages__angular__di$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_datepicker__range$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const model = packages__angular_components__material_datepicker__model.material_datepicker__model;
  const comparison$46template = packages__angular_components__material_datepicker__comparison$46template.material_datepicker__comparison$46template;
  const di$46template = packages__angular__di$46template.di$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  var model$46template = Object.create(dart.library);
  var DatepickerModelL = () => (DatepickerModelL = dart.constFn(dart.legacy(model.DatepickerModel)))();
  var VoidToDatepickerModelL = () => (VoidToDatepickerModelL = dart.constFn(dart.fnType(DatepickerModelL(), [])))();
  const CT = Object.create(null);
  model$46template.initReflector = function initReflector() {
    if (dart.test(model$46template._visited)) {
      return;
    }
    model$46template._visited = true;
    reflector.registerFactory(dart.wrapType(DatepickerModelL()), dart.fn(() => new model.DatepickerModel.new(), VoidToDatepickerModelL()));
    comparison$46template.initReflector();
    comparison$46template.initReflector();
    di$46template.initReflector();
    observable$46template.initReflector();
    range$46template.initReflector();
  };
  dart.defineLazy(model$46template, {
    /*model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/model.template", {
    "package:angular_components/material_datepicker/model.template.dart": model$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["model.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAEqD,IAAhE,0BAAuB,mCAAiB,cAAM;AACzB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,yBAAQ;YAAG","file":"model.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__model$46template: model$46template
  };
}));

//# sourceMappingURL=model.template.unsound.ddc.js.map
