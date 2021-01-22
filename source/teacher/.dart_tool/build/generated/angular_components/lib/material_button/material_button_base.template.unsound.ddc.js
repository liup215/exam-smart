define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template'], (function load__packages__angular_components__material_button__material_button_base_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__button_decorator__button_decorator$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  var material_button_base$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_button_base$46template.initReflector = function initReflector() {
    if (dart.test(material_button_base$46template._visited)) {
      return;
    }
    material_button_base$46template._visited = true;
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
  };
  dart.defineLazy(material_button_base$46template, {
    /*material_button_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_button_base.template", {
    "package:angular_components/material_button/material_button_base.template.dart": material_button_base$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_button_base.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,wCAAQ;YAAG","file":"material_button_base.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_button__material_button_base$46template: material_button_base$46template
  };
}));

//# sourceMappingURL=material_button_base.template.unsound.ddc.js.map
