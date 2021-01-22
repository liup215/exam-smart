define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template'], (function load__packages__angular_components__stop_propagation__stop_propagation_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__browser__events__events$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  var stop_propagation$46template = Object.create(dart.library);
  const CT = Object.create(null);
  stop_propagation$46template.initReflector = function initReflector() {
    if (dart.test(stop_propagation$46template._visited)) {
      return;
    }
    stop_propagation$46template._visited = true;
    angular$46template.initReflector();
    events$46template.initReflector();
  };
  dart.defineLazy(stop_propagation$46template, {
    /*stop_propagation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/stop_propagation/stop_propagation.template", {
    "package:angular_components/stop_propagation/stop_propagation.template.dart": stop_propagation$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stop_propagation.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,oCAAQ;YAAG","file":"stop_propagation.template.unsound.ddc.js"}');
  // Exports:
  return {
    stop_propagation__stop_propagation$46template: stop_propagation$46template
  };
}));

//# sourceMappingURL=stop_propagation.template.unsound.ddc.js.map
