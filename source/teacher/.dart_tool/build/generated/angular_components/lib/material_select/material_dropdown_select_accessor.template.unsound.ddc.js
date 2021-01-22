define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_forms/angular_forms.template'], (function load__packages__angular_components__material_select__material_dropdown_select_accessor_template(dart_sdk, packages__angular_components__material_select__material_dropdown_select$46template, packages__angular__angular$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_forms__angular_forms$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dropdown_select$46template = packages__angular_components__material_select__material_dropdown_select$46template.material_select__material_dropdown_select$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  var material_dropdown_select_accessor$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_dropdown_select_accessor$46template.initReflector = function initReflector() {
    if (dart.test(material_dropdown_select_accessor$46template._visited)) {
      return;
    }
    material_dropdown_select_accessor$46template._visited = true;
    material_dropdown_select$46template.initReflector();
    angular$46template.initReflector();
    selection_model$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(material_dropdown_select_accessor$46template, {
    /*material_dropdown_select_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select_accessor.template", {
    "package:angular_components/material_select/material_dropdown_select_accessor.template.dart": material_dropdown_select_accessor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,wDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,qDAAQ;YAAG","file":"material_dropdown_select_accessor.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select_accessor$46template: material_dropdown_select_accessor$46template
  };
}));

//# sourceMappingURL=material_dropdown_select_accessor.template.unsound.ddc.js.map
