define(['dart_sdk', 'packages/angular_components/utils/color/color.template'], (function load__packages__angular_components__utils__color__material_template(dart_sdk, packages__angular_components__utils__color__color$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const color$46template = packages__angular_components__utils__color__color$46template.utils__color__color$46template;
  var material$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material$46template.initReflector = function initReflector() {
    if (dart.test(material$46template._visited)) {
      return;
    }
    material$46template._visited = true;
    color$46template.initReflector();
  };
  dart.defineLazy(material$46template, {
    /*material$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/color/material.template", {
    "package:angular_components/utils/color/material.template.dart": material$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;EACF;;MARI,4BAAQ;YAAG","file":"material.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__color__material$46template: material$46template
  };
}));

//# sourceMappingURL=material.template.unsound.ddc.js.map
