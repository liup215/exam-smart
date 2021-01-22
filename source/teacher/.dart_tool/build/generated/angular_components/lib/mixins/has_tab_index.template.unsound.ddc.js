define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/properties/properties.template'], (function load__packages__angular_components__mixins__has_tab_index_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__angular__properties__properties$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  var has_tab_index$46template = Object.create(dart.library);
  const CT = Object.create(null);
  has_tab_index$46template.initReflector = function initReflector() {
    if (dart.test(has_tab_index$46template._visited)) {
      return;
    }
    has_tab_index$46template._visited = true;
    angular$46template.initReflector();
    properties$46template.initReflector();
  };
  dart.defineLazy(has_tab_index$46template, {
    /*has_tab_index$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/has_tab_index.template", {
    "package:angular_components/mixins/has_tab_index.template.dart": has_tab_index$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_tab_index.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,iCAAQ;YAAG","file":"has_tab_index.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__has_tab_index$46template: has_tab_index$46template
  };
}));

//# sourceMappingURL=has_tab_index.template.unsound.ddc.js.map
