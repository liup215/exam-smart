define(['dart_sdk', 'packages/angular/di.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposable_callback.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__utils__browser__dom_service__dom_service_template(dart_sdk, packages__angular__di$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__disposer__disposable_callback$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di$46template = packages__angular__di$46template.di$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const disposable_callback$46template = packages__angular_components__utils__disposer__disposable_callback$46template.utils__disposer__disposable_callback$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var dom_service$46template = Object.create(dart.library);
  const CT = Object.create(null);
  dom_service$46template.initReflector = function initReflector() {
    if (dart.test(dom_service$46template._visited)) {
      return;
    }
    dom_service$46template._visited = true;
    di$46template.initReflector();
    async$46template.initReflector();
    disposable_callback$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(dom_service$46template, {
    /*dom_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service.template", {
    "package:angular_components/utils/browser/dom_service/dom_service.template.dart": dom_service$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,+BAAQ;YAAG","file":"dom_service.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service$46template: dom_service$46template
  };
}));

//# sourceMappingURL=dom_service.template.unsound.ddc.js.map
