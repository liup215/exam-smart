define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], (function load__packages__angular_components__mixins__focusable_mixin_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__focus__focus$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  var focusable_mixin$46template = Object.create(dart.library);
  const CT = Object.create(null);
  focusable_mixin$46template.initReflector = function initReflector() {
    if (dart.test(focusable_mixin$46template._visited)) {
      return;
    }
    focusable_mixin$46template._visited = true;
    angular$46template.initReflector();
    focus$46template.initReflector();
  };
  dart.defineLazy(focusable_mixin$46template, {
    /*focusable_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/focusable_mixin.template", {
    "package:angular_components/mixins/focusable_mixin.template.dart": focusable_mixin$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focusable_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,mCAAQ;YAAG","file":"focusable_mixin.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__focusable_mixin$46template: focusable_mixin$46template
  };
}));

//# sourceMappingURL=focusable_mixin.template.unsound.ddc.js.map
