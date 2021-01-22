define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__scorecard__scorecard_bar_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var scorecard_bar$46template = Object.create(dart.library);
  const CT = Object.create(null);
  scorecard_bar$46template.initReflector = function initReflector() {
    if (dart.test(scorecard_bar$46template._visited)) {
      return;
    }
    scorecard_bar$46template._visited = true;
    angular$46template.initReflector();
    rtl_annotation$46template.initReflector();
    angular_2$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(scorecard_bar$46template, {
    /*scorecard_bar$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/scorecard/scorecard_bar.template", {
    "package:angular_components/scorecard/scorecard_bar.template.dart": scorecard_bar$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scorecard_bar.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,iCAAQ;YAAG","file":"scorecard_bar.template.unsound.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard_bar$46template: scorecard_bar$46template
  };
}));

//# sourceMappingURL=scorecard_bar.template.unsound.ddc.js.map
