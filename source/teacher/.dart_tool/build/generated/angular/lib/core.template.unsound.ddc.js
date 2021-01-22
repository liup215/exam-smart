define(['dart_sdk', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/change_detection/pipe_transform.template'], (function load__packages__angular__core_template(dart_sdk, packages__angular__src__core__application_tokens$46template, packages__angular__src__core__change_detection__pipe_transform$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const application_tokens$46template = packages__angular__src__core__application_tokens$46template.src__core__application_tokens$46template;
  const change_detection$46template = packages__angular__src__core__application_tokens$46template.src__core__change_detection$46template;
  const di$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__core__di$46template;
  const ng_zone$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__core__zone__ng_zone$46template;
  const exception_handler$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__facade__exception_handler$46template;
  var core$46template = Object.create(dart.library);
  const CT = Object.create(null);
  core$46template.initReflector = function initReflector() {
    if (dart.test(core$46template._visited)) {
      return;
    }
    core$46template._visited = true;
    application_tokens$46template.initReflector();
    change_detection$46template.initReflector();
    di$46template.initReflector();
    ng_zone$46template.initReflector();
    exception_handler$46template.initReflector();
  };
  dart.defineLazy(core$46template, {
    /*core$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular/core.template", {
    "package:angular/core.template.dart": core$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["core.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,wBAAQ;YAAG","file":"core.template.unsound.ddc.js"}');
  // Exports:
  return {
    core$46template: core$46template
  };
}));

//# sourceMappingURL=core.template.unsound.ddc.js.map
