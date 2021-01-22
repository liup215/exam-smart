define(['dart_sdk', 'packages/angular_components/laminate/enums/position.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], (function load__packages__angular_components__src__laminate__ruler__ruler_interface_template(dart_sdk, packages__angular_components__laminate__enums__position$46template, packages__angular_components__laminate__enums__visibility$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const position$46template = packages__angular_components__laminate__enums__position$46template.laminate__enums__position$46template;
  const visibility$46template = packages__angular_components__laminate__enums__visibility$46template.laminate__enums__visibility$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  var ruler_interface$46template = Object.create(dart.library);
  const CT = Object.create(null);
  ruler_interface$46template.initReflector = function initReflector() {
    if (dart.test(ruler_interface$46template._visited)) {
      return;
    }
    ruler_interface$46template._visited = true;
    position$46template.initReflector();
    visibility$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(ruler_interface$46template, {
    /*ruler_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/laminate/ruler/ruler_interface.template", {
    "package:angular_components/src/laminate/ruler/ruler_interface.template.dart": ruler_interface$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ruler_interface.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,mCAAQ;YAAG","file":"ruler_interface.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__ruler__ruler_interface$46template: ruler_interface$46template
  };
}));

//# sourceMappingURL=ruler_interface.template.unsound.ddc.js.map
