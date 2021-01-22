define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__laminate__portal__portal_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__angular__imperative_view__imperative_view$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const imperative_view$46template = packages__angular_components__utils__angular__imperative_view__imperative_view$46template.utils__angular__imperative_view__imperative_view$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var portal$46template = Object.create(dart.library);
  const CT = Object.create(null);
  portal$46template.initReflector = function initReflector() {
    if (dart.test(portal$46template._visited)) {
      return;
    }
    portal$46template._visited = true;
    angular$46template.initReflector();
    imperative_view$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(portal$46template, {
    /*portal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/portal/portal.template", {
    "package:angular_components/laminate/portal/portal.template.dart": portal$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["portal.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,0BAAQ;YAAG","file":"portal.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__portal__portal$46template: portal$46template
  };
}));

//# sourceMappingURL=portal.template.unsound.ddc.js.map
