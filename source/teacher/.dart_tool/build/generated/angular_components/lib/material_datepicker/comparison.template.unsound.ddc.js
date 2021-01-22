define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template'], (function load__packages__angular_components__material_datepicker__comparison_template(dart_sdk, packages__angular_components__material_datepicker__comparison_option$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__model__date__date$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const comparison_option$46template = packages__angular_components__material_datepicker__comparison_option$46template.material_datepicker__comparison_option$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  var comparison$46template = Object.create(dart.library);
  const CT = Object.create(null);
  comparison$46template.initReflector = function initReflector() {
    if (dart.test(comparison$46template._visited)) {
      return;
    }
    comparison$46template._visited = true;
    comparison_option$46template.initReflector();
    range$46template.initReflector();
    date$46template.initReflector();
  };
  dart.defineLazy(comparison$46template, {
    /*comparison$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison.template", {
    "package:angular_components/material_datepicker/comparison.template.dart": comparison$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,8BAAQ;YAAG","file":"comparison.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison$46template: comparison$46template
  };
}));

//# sourceMappingURL=comparison.template.unsound.ddc.js.map
