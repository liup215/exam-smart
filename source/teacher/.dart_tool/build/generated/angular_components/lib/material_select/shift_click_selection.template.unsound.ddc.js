define(['dart_sdk', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template'], (function load__packages__angular_components__material_select__shift_click_selection_template(dart_sdk, packages__angular_components__material_select__activation_handler$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const activation_handler$46template = packages__angular_components__material_select__activation_handler$46template.material_select__activation_handler$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  var shift_click_selection$46template = Object.create(dart.library);
  const CT = Object.create(null);
  shift_click_selection$46template.initReflector = function initReflector() {
    if (dart.test(shift_click_selection$46template._visited)) {
      return;
    }
    shift_click_selection$46template._visited = true;
    activation_handler$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
  };
  dart.defineLazy(shift_click_selection$46template, {
    /*shift_click_selection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/shift_click_selection.template", {
    "package:angular_components/material_select/shift_click_selection.template.dart": shift_click_selection$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shift_click_selection.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,yCAAQ;YAAG","file":"shift_click_selection.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__shift_click_selection$46template: shift_click_selection$46template
  };
}));

//# sourceMappingURL=shift_click_selection.template.unsound.ddc.js.map
