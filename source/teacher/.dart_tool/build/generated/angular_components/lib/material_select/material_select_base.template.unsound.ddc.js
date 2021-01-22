define(['dart_sdk', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/angular/properties/properties.template'], (function load__packages__angular_components__material_select__material_select_base_template(dart_sdk, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__accepts_width$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__angular__properties__properties$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const accepts_width$46template = packages__angular_components__model__ui__accepts_width$46template.model__ui__accepts_width$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  var material_select_base$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_select_base$46template.initReflector = function initReflector() {
    if (dart.test(material_select_base$46template._visited)) {
      return;
    }
    material_select_base$46template._visited = true;
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    accepts_width$46template.initReflector();
    has_renderer$46template.initReflector();
    properties$46template.initReflector();
  };
  dart.defineLazy(material_select_base$46template, {
    /*material_select_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_select_base.template", {
    "package:angular_components/material_select/material_select_base.template.dart": material_select_base$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,wCAAQ;YAAG","file":"material_select_base.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_base$46template: material_select_base$46template
  };
}));

//# sourceMappingURL=material_select_base.template.unsound.ddc.js.map
