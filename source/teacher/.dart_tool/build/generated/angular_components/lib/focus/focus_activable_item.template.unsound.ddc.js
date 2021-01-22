define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], (function load__packages__angular_components__focus__focus_activable_item_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__focus__focus$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  var focus_activable_item$46template = Object.create(dart.library);
  const CT = Object.create(null);
  focus_activable_item$46template.initReflector = function initReflector() {
    if (dart.test(focus_activable_item$46template._visited)) {
      return;
    }
    focus_activable_item$46template._visited = true;
    angular$46template.initReflector();
    focus$46template.initReflector();
  };
  dart.defineLazy(focus_activable_item$46template, {
    /*focus_activable_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus_activable_item.template", {
    "package:angular_components/focus/focus_activable_item.template.dart": focus_activable_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_activable_item.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,wCAAQ;YAAG","file":"focus_activable_item.template.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_activable_item$46template: focus_activable_item$46template
  };
}));

//# sourceMappingURL=focus_activable_item.template.unsound.ddc.js.map
