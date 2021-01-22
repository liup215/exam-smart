define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template'], (function load__packages__angular_components__utils__showhide__showhide_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  var showhide$46template = Object.create(dart.library);
  const CT = Object.create(null);
  showhide$46template.initReflector = function initReflector() {
    if (dart.test(showhide$46template._visited)) {
      return;
    }
    showhide$46template._visited = true;
    angular$46template.initReflector();
    angular_2$46template.initReflector();
  };
  dart.defineLazy(showhide$46template, {
    /*showhide$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/showhide/showhide.template", {
    "package:angular_components/utils/showhide/showhide.template.dart": showhide$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["showhide.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,4BAAQ;YAAG","file":"showhide.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__showhide__showhide$46template: showhide$46template
  };
}));

//# sourceMappingURL=showhide.template.unsound.ddc.js.map
