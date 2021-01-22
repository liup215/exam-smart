define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template'], (function load__packages__angular_components__mixins__material_dropdown_base_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  var material_dropdown_base$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_dropdown_base$46template.initReflector = function initReflector() {
    if (dart.test(material_dropdown_base$46template._visited)) {
      return;
    }
    material_dropdown_base$46template._visited = true;
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
  };
  dart.defineLazy(material_dropdown_base$46template, {
    /*material_dropdown_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/material_dropdown_base.template", {
    "package:angular_components/mixins/material_dropdown_base.template.dart": material_dropdown_base$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_base.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,0CAAQ;YAAG","file":"material_dropdown_base.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__material_dropdown_base$46template: material_dropdown_base$46template
  };
}));

//# sourceMappingURL=material_dropdown_base.template.unsound.ddc.js.map
