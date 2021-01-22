define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template'], (function load__packages__angular_components__mixins__button_wrapper_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__ui__icon$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  var button_wrapper$46template = Object.create(dart.library);
  const CT = Object.create(null);
  button_wrapper$46template.initReflector = function initReflector() {
    if (dart.test(button_wrapper$46template._visited)) {
      return;
    }
    button_wrapper$46template._visited = true;
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    icon$46template.initReflector();
  };
  dart.defineLazy(button_wrapper$46template, {
    /*button_wrapper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/button_wrapper.template", {
    "package:angular_components/mixins/button_wrapper.template.dart": button_wrapper$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_wrapper.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,qCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,kCAAQ;YAAG","file":"button_wrapper.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__button_wrapper$46template: button_wrapper$46template
  };
}));

//# sourceMappingURL=button_wrapper.template.unsound.ddc.js.map
