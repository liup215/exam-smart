define(['dart_sdk', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular/angular.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__content__deferred_content_template(dart_sdk, packages__angular_components__content__deferred_content_aware$46template, packages__angular__angular$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var deferred_content$46template = Object.create(dart.library);
  const CT = Object.create(null);
  deferred_content$46template.initReflector = function initReflector() {
    if (dart.test(deferred_content$46template._visited)) {
      return;
    }
    deferred_content$46template._visited = true;
    deferred_content_aware$46template.initReflector();
    angular$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(deferred_content$46template, {
    /*deferred_content$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/content/deferred_content.template", {
    "package:angular_components/content/deferred_content.template.dart": deferred_content$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["deferred_content.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,oCAAQ;YAAG","file":"deferred_content.template.unsound.ddc.js"}');
  // Exports:
  return {
    content__deferred_content$46template: deferred_content$46template
  };
}));

//# sourceMappingURL=deferred_content.template.unsound.ddc.js.map
