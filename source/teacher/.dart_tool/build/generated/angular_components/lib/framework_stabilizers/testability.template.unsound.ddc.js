define(['dart_sdk', 'packages/angular_components/framework_stabilizers/framework_stabilizers.template'], (function load__packages__angular_components__framework_stabilizers__testability_template(dart_sdk, packages__angular_components__framework_stabilizers__framework_stabilizers$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework_stabilizers$46template = packages__angular_components__framework_stabilizers__framework_stabilizers$46template.framework_stabilizers__framework_stabilizers$46template;
  var testability$46template = Object.create(dart.library);
  const CT = Object.create(null);
  testability$46template.initReflector = function initReflector() {
    if (dart.test(testability$46template._visited)) {
      return;
    }
    testability$46template._visited = true;
    framework_stabilizers$46template.initReflector();
    framework_stabilizers$46template.initReflector();
  };
  dart.defineLazy(testability$46template, {
    /*testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/framework_stabilizers/testability.template", {
    "package:angular_components/framework_stabilizers/testability.template.dart": testability$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["testability.template.dart"],"names":[],"mappings":";;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,+BAAQ;YAAG","file":"testability.template.unsound.ddc.js"}');
  // Exports:
  return {
    framework_stabilizers__testability$46template: testability$46template
  };
}));

//# sourceMappingURL=testability.template.unsound.ddc.js.map
