define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template'], (function load__packages__angular_components__auto_dismiss__auto_dismiss_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__browser__events__events$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  var auto_dismiss$46template = Object.create(dart.library);
  const CT = Object.create(null);
  auto_dismiss$46template.initReflector = function initReflector() {
    if (dart.test(auto_dismiss$46template._visited)) {
      return;
    }
    auto_dismiss$46template._visited = true;
    angular$46template.initReflector();
    events$46template.initReflector();
  };
  dart.defineLazy(auto_dismiss$46template, {
    /*auto_dismiss$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/auto_dismiss/auto_dismiss.template", {
    "package:angular_components/auto_dismiss/auto_dismiss.template.dart": auto_dismiss$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auto_dismiss.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,gCAAQ;YAAG","file":"auto_dismiss.template.unsound.ddc.js"}');
  // Exports:
  return {
    auto_dismiss__auto_dismiss$46template: auto_dismiss$46template
  };
}));

//# sourceMappingURL=auto_dismiss.template.unsound.ddc.js.map
