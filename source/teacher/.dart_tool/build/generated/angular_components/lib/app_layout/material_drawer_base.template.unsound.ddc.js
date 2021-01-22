define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], (function load__packages__angular_components__app_layout__material_drawer_base_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  var material_drawer_base$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_drawer_base$46template.initReflector = function initReflector() {
    if (dart.test(material_drawer_base$46template._visited)) {
      return;
    }
    material_drawer_base$46template._visited = true;
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.defineLazy(material_drawer_base$46template, {
    /*material_drawer_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_drawer_base.template", {
    "package:angular_components/app_layout/material_drawer_base.template.dart": material_drawer_base$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_drawer_base.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,wCAAQ;YAAG","file":"material_drawer_base.template.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_drawer_base$46template: material_drawer_base$46template
  };
}));

//# sourceMappingURL=material_drawer_base.template.unsound.ddc.js.map
