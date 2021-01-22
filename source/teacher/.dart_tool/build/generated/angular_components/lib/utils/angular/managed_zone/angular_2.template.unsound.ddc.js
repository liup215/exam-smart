define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular/di.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone.template'], (function load__packages__angular_components__utils__angular__managed_zone__angular_2_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__angular__managed_zone__angular_2, packages__angular__di$46template, packages__angular_components__src__utils__angular__managed_zone__managed_zone$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const angular_2 = packages__angular_components__utils__angular__managed_zone__angular_2.utils__angular__managed_zone__angular_2;
  const di$46template = packages__angular__di$46template.di$46template;
  const managed_zone$46template = packages__angular_components__src__utils__angular__managed_zone__managed_zone$46template.src__utils__angular__managed_zone__managed_zone$46template;
  var angular_2$46template = Object.create(dart.library);
  var Angular2ManagedZoneL = () => (Angular2ManagedZoneL = dart.constFn(dart.legacy(angular_2.Angular2ManagedZone)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var NgZoneLToAngular2ManagedZoneL = () => (NgZoneLToAngular2ManagedZoneL = dart.constFn(dart.fnType(Angular2ManagedZoneL(), [NgZoneL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(NgZoneL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ListLOfObjectL());
    }
  }, false);
  var C2;
  var C1;
  var C0;
  angular_2$46template.initReflector = function initReflector() {
    if (dart.test(angular_2$46template._visited)) {
      return;
    }
    angular_2$46template._visited = true;
    reflector.registerFactory(dart.wrapType(Angular2ManagedZoneL()), dart.fn(p0 => new angular_2.Angular2ManagedZone.new(p0), NgZoneLToAngular2ManagedZoneL()));
    reflector.registerDependencies(dart.wrapType(Angular2ManagedZoneL()), C0 || CT.C0);
    di$46template.initReflector();
    managed_zone$46template.initReflector();
    managed_zone$46template.initReflector();
  };
  dart.defineLazy(angular_2$46template, {
    /*angular_2$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/managed_zone/angular_2.template", {
    "package:angular_components/utils/angular/managed_zone/angular_2.template.dart": angular_2$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAE4E,IAAvF,0BAAuB,uCAAqB,QAAY,MAAO,sCAAoB,EAAE;AAGnF,IAFF,+BAA4B;AAGP,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,6BAAQ;YAAG","file":"angular_2.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__managed_zone__angular_2$46template: angular_2$46template
  };
}));

//# sourceMappingURL=angular_2.template.unsound.ddc.js.map
