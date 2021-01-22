define(['dart_sdk', 'packages/angular_components/material_datepicker/model.template', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/model/date/time_zone_aware_clock.template'], (function load__packages__angular_components__material_datepicker__module_template(dart_sdk, packages__angular_components__material_datepicker__model$46template, packages__angular__angular$46template, packages__angular_components__laminate__popup__module$46template, packages__angular_components__model__date__time_zone_aware_clock$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model$46template = packages__angular_components__material_datepicker__model$46template.material_datepicker__model$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const module$46template = packages__angular_components__laminate__popup__module$46template.laminate__popup__module$46template;
  const time_zone_aware_clock$46template = packages__angular_components__model__date__time_zone_aware_clock$46template.model__date__time_zone_aware_clock$46template;
  var module$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  module$46template$.initReflector = function initReflector() {
    if (dart.test(module$46template$._visited)) {
      return;
    }
    module$46template$._visited = true;
    model$46template.initReflector();
    angular$46template.initReflector();
    module$46template.initReflector();
    time_zone_aware_clock$46template.initReflector();
  };
  dart.defineLazy(module$46template$, {
    /*module$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/module.template", {
    "package:angular_components/material_datepicker/module.template.dart": module$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,2BAAQ;YAAG","file":"module.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__module$46template: module$46template$
  };
}));

//# sourceMappingURL=module.template.unsound.ddc.js.map
