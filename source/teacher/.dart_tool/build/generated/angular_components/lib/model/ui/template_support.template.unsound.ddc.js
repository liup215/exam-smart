define(['dart_sdk', 'packages/angular/angular.template'], (function load__packages__angular_components__model__ui__template_support_template(dart_sdk, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var template_support$46template = Object.create(dart.library);
  const CT = Object.create(null);
  template_support$46template.initReflector = function initReflector() {
    if (dart.test(template_support$46template._visited)) {
      return;
    }
    template_support$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(template_support$46template, {
    /*template_support$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/template_support.template", {
    "package:angular_components/model/ui/template_support.template.dart": template_support$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["template_support.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;EACF;;MARI,oCAAQ;YAAG","file":"template_support.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__template_support$46template: template_support$46template
  };
}));

//# sourceMappingURL=template_support.template.unsound.ddc.js.map
