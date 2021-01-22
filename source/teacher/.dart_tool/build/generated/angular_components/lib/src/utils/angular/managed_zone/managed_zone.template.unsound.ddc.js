define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__src__utils__angular__managed_zone__managed_zone_template(dart_sdk, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var managed_zone$46template = Object.create(dart.library);
  const CT = Object.create(null);
  managed_zone$46template.initReflector = function initReflector() {
    if (dart.test(managed_zone$46template._visited)) {
      return;
    }
    managed_zone$46template._visited = true;
    disposer$46template.initReflector();
  };
  dart.defineLazy(managed_zone$46template, {
    /*managed_zone$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/utils/angular/managed_zone/managed_zone.template", {
    "package:angular_components/src/utils/angular/managed_zone/managed_zone.template.dart": managed_zone$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["managed_zone.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;EACF;;MARI,gCAAQ;YAAG","file":"managed_zone.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__managed_zone__managed_zone$46template: managed_zone$46template
  };
}));

//# sourceMappingURL=managed_zone.template.unsound.ddc.js.map
