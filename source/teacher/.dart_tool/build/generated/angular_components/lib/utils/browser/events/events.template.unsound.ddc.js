define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], (function load__packages__angular_components__utils__browser__events__events_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  var events$46template = Object.create(dart.library);
  const CT = Object.create(null);
  events$46template.initReflector = function initReflector() {
    if (dart.test(events$46template._visited)) {
      return;
    }
    events$46template._visited = true;
    angular$46template.initReflector();
    feature_detector$46template.initReflector();
  };
  dart.defineLazy(events$46template, {
    /*events$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/events/events.template", {
    "package:angular_components/utils/browser/events/events.template.dart": events$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["events.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,0BAAQ;YAAG","file":"events.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__events__events$46template: events$46template
  };
}));

//# sourceMappingURL=events.template.unsound.ddc.js.map
