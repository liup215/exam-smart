define(['dart_sdk', 'packages/angular_components/utils/browser/events/events.template'], (function load__packages__angular_components__model__a11y__keyboard_handler_mixin_template(dart_sdk, packages__angular_components__utils__browser__events__events$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  var keyboard_handler_mixin$46template = Object.create(dart.library);
  const CT = Object.create(null);
  keyboard_handler_mixin$46template.initReflector = function initReflector() {
    if (dart.test(keyboard_handler_mixin$46template._visited)) {
      return;
    }
    keyboard_handler_mixin$46template._visited = true;
    events$46template.initReflector();
  };
  dart.defineLazy(keyboard_handler_mixin$46template, {
    /*keyboard_handler_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/a11y/keyboard_handler_mixin.template", {
    "package:angular_components/model/a11y/keyboard_handler_mixin.template.dart": keyboard_handler_mixin$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_handler_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;EACF;;MARI,0CAAQ;YAAG","file":"keyboard_handler_mixin.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__a11y__keyboard_handler_mixin$46template: keyboard_handler_mixin$46template
  };
}));

//# sourceMappingURL=keyboard_handler_mixin.template.unsound.ddc.js.map
