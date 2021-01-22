define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/core/change_detection/pipe_transform.template', 'packages/angular/src/bootstrap/run.template', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular__experimental_template(dart_sdk, packages__angular__angular$46template, packages__angular__src__core__change_detection__pipe_transform$46template, packages__angular__src__bootstrap__run$46template, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const runtime$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__runtime$46template;
  const ng_zone$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__core__zone__ng_zone$46template;
  const injector$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__di__injector__injector$46template;
  const check_binding$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__runtime__check_binding$46template;
  const run$46template = packages__angular__src__bootstrap__run$46template.src__bootstrap__run$46template;
  const component_factory$46template = packages__angular__src__bootstrap__modules.src__core__linker__component_factory$46template;
  const component_resolver$46template = packages__angular__src__bootstrap__modules.src__core__linker__component_resolver$46template;
  const dom_helpers$46template = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers$46template;
  var ng_for_identity$46template = Object.create(dart.library);
  var experimental$46template = Object.create(dart.library);
  const CT = Object.create(null);
  ng_for_identity$46template.initReflector = function initReflector() {
    if (dart.test(ng_for_identity$46template._visited)) {
      return;
    }
    ng_for_identity$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(ng_for_identity$46template, {
    /*ng_for_identity$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  experimental$46template.initReflector = function initReflector$() {
    if (dart.test(experimental$46template._visited)) {
      return;
    }
    experimental$46template._visited = true;
    angular$46template.initReflector();
    runtime$46template.initReflector();
    run$46template.initReflector();
    ng_for_identity$46template.initReflector();
    component_factory$46template.initReflector();
    component_resolver$46template.initReflector();
    ng_zone$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
    check_binding$46template.initReflector();
    dom_helpers$46template.initReflector();
  };
  dart.defineLazy(experimental$46template, {
    /*experimental$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular/experimental.template", {
    "package:angular/src/common/directives/ng_for_identity.template.dart": ng_for_identity$46template,
    "package:angular/experimental.template.dart": experimental$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/common/directives/ng_for_identity.template.dart","experimental.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;EACF;;MARI,mCAAQ;YAAG;;;;;ACYb,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;EACF;;MAlBI,gCAAQ;YAAG","file":"experimental.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_for_identity$46template: ng_for_identity$46template,
    experimental$46template: experimental$46template
  };
}));

//# sourceMappingURL=experimental.template.unsound.ddc.js.map
