define(['dart_sdk', 'packages/angular_components/framework_stabilizers/testability.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], (function load__packages__angular_components__utils__browser__dom_service__dom_service_webdriver_testability_template(dart_sdk, packages__angular_components__framework_stabilizers__testability$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const testability$46template = packages__angular_components__framework_stabilizers__testability$46template.framework_stabilizers__testability$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  var dom_service_webdriver_testability$46template = Object.create(dart.library);
  const CT = Object.create(null);
  dom_service_webdriver_testability$46template.initReflector = function initReflector() {
    if (dart.test(dom_service_webdriver_testability$46template._visited)) {
      return;
    }
    dom_service_webdriver_testability$46template._visited = true;
    testability$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(dom_service_webdriver_testability$46template, {
    /*dom_service_webdriver_testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template", {
    "package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template.dart": dom_service_webdriver_testability$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_service_webdriver_testability.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,wDAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,qDAAQ;YAAG","file":"dom_service_webdriver_testability.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service_webdriver_testability$46template: dom_service_webdriver_testability$46template
  };
}));

//# sourceMappingURL=dom_service_webdriver_testability.template.unsound.ddc.js.map
