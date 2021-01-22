define(['dart_sdk', 'packages/angular/angular.template'], (function load__packages__angular_components__utils__angular__reference__reference_template(dart_sdk, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var reference$46template = Object.create(dart.library);
  const CT = Object.create(null);
  reference$46template.initReflector = function initReflector() {
    if (dart.test(reference$46template._visited)) {
      return;
    }
    reference$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(reference$46template, {
    /*reference$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/reference/reference.template", {
    "package:angular_components/utils/angular/reference/reference.template.dart": reference$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reference.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;EACF;;MARI,6BAAQ;YAAG","file":"reference.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__reference__reference$46template: reference$46template
  };
}));

//# sourceMappingURL=reference.template.unsound.ddc.js.map
