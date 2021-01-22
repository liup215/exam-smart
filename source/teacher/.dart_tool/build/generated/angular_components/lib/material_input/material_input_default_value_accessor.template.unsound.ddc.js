define(['dart_sdk', 'packages/angular_components/material_input/base_material_input.template', 'packages/angular/angular.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template'], (function load__packages__angular_components__material_input__material_input_default_value_accessor_template(dart_sdk, packages__angular_components__material_input__base_material_input$46template, packages__angular__angular$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_forms__angular_forms$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base_material_input$46template = packages__angular_components__material_input__base_material_input$46template.material_input__base_material_input$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  var material_input_default_value_accessor$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_input_default_value_accessor$46template.initReflector = function initReflector() {
    if (dart.test(material_input_default_value_accessor$46template._visited)) {
      return;
    }
    material_input_default_value_accessor$46template._visited = true;
    base_material_input$46template.initReflector();
    angular$46template.initReflector();
    disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(material_input_default_value_accessor$46template, {
    /*material_input_default_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_input_default_value_accessor.template", {
    "package:angular_components/material_input/material_input_default_value_accessor.template.dart": material_input_default_value_accessor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input_default_value_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,4DAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,yDAAQ;YAAG","file":"material_input_default_value_accessor.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_default_value_accessor$46template: material_input_default_value_accessor$46template
  };
}));

//# sourceMappingURL=material_input_default_value_accessor.template.unsound.ddc.js.map
