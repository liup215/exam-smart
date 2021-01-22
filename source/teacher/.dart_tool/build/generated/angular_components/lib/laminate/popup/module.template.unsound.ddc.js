define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/src/laminate/popup/dom_popup_source.template'], (function load__packages__angular_components__laminate__popup__module_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__overlay__module$46template, packages__angular_components__src__laminate__popup__dom_popup_source$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const module$46template = packages__angular_components__laminate__overlay__module$46template.laminate__overlay__module$46template;
  const dom_popup_source$46template = packages__angular_components__src__laminate__popup__dom_popup_source$46template.src__laminate__popup__dom_popup_source$46template;
  var module$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  module$46template$.initReflector = function initReflector() {
    if (dart.test(module$46template$._visited)) {
      return;
    }
    module$46template$._visited = true;
    angular$46template.initReflector();
    alignment$46template.initReflector();
    module$46template.initReflector();
    dom_popup_source$46template.initReflector();
  };
  dart.defineLazy(module$46template$, {
    /*module$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/popup/module.template", {
    "package:angular_components/laminate/popup/module.template.dart": module$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,2BAAQ;YAAG","file":"module.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__popup__module$46template: module$46template$
  };
}));

//# sourceMappingURL=module.template.unsound.ddc.js.map
