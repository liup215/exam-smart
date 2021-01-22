define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], (function load__packages__angular_components__focus__keyboard_only_focus_indicator_template(dart_sdk, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  var keyboard_only_focus_indicator$46template = Object.create(dart.library);
  const CT = Object.create(null);
  keyboard_only_focus_indicator$46template.initReflector = function initReflector() {
    if (dart.test(keyboard_only_focus_indicator$46template._visited)) {
      return;
    }
    keyboard_only_focus_indicator$46template._visited = true;
    angular$46template.initReflector();
    meta$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(keyboard_only_focus_indicator$46template, {
    /*keyboard_only_focus_indicator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/keyboard_only_focus_indicator.template", {
    "package:angular_components/focus/keyboard_only_focus_indicator.template.dart": keyboard_only_focus_indicator$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_only_focus_indicator.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,oDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,iDAAQ;YAAG","file":"keyboard_only_focus_indicator.template.unsound.ddc.js"}');
  // Exports:
  return {
    focus__keyboard_only_focus_indicator$46template: keyboard_only_focus_indicator$46template
  };
}));

//# sourceMappingURL=keyboard_only_focus_indicator.template.unsound.ddc.js.map
