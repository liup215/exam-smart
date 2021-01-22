define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/scroll_host/interface.template', 'packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.template', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template'], (function load__packages__angular_components__utils__angular__scroll_host__angular_2_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__angular__scroll_host__angular_2, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__angular__scroll_host__interface, packages__angular__angular$46template, packages__angular_components__utils__angular__scroll_host__interface$46template, packages__angular_components__src__utils__angular__scroll_host__pan_controller_impl$46template, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const angular_2 = packages__angular_components__utils__angular__scroll_host__angular_2.utils__angular__scroll_host__angular_2;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const gestures$46template = packages__angular_components__utils__angular__scroll_host__interface$46template.src__utils__angular__scroll_host__gestures$46template;
  const interface$46template = packages__angular_components__utils__angular__scroll_host__interface$46template.utils__angular__scroll_host__interface$46template;
  const scroll_host_base$46template = packages__angular_components__src__utils__angular__scroll_host__pan_controller_impl$46template.src__utils__angular__scroll_host__scroll_host_base$46template;
  const scroll_host_interface$46template = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface$46template.src__utils__angular__scroll_host__scroll_host_interface$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  var angular_2$46template$ = Object.create(dart.library);
  var WindowScrollHostL = () => (WindowScrollHostL = dart.constFn(dart.legacy(angular_2.WindowScrollHost)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var GestureListenerFactoryL = () => (GestureListenerFactoryL = dart.constFn(dart.legacy(gestures.GestureListenerFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var DomServiceLAndNgZoneLAndGestureListenerFactoryL__ToWindowScrollHostL = () => (DomServiceLAndNgZoneLAndGestureListenerFactoryL__ToWindowScrollHostL = dart.constFn(dart.fnType(WindowScrollHostL(), [DomServiceL(), NgZoneL(), GestureListenerFactoryL(), WindowL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(DomServiceL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C4() {
      return C4 = dart.wrapType(NgZoneL());
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], ObjectL());
    },
    get C6() {
      return C6 = dart.wrapType(GestureListenerFactoryL());
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], ObjectL());
    },
    get C8() {
      return C8 = dart.wrapType(WindowL());
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C3 || CT.C3, C5 || CT.C5, C7 || CT.C7], ListLOfObjectL());
    }
  }, false);
  var C2;
  var C1;
  var C4;
  var C3;
  var C6;
  var C5;
  var C8;
  var C7;
  var C0;
  angular_2$46template$.initReflector = function initReflector() {
    if (dart.test(angular_2$46template$._visited)) {
      return;
    }
    angular_2$46template$._visited = true;
    reflector.registerFactory(dart.wrapType(WindowScrollHostL()), dart.fn((p0, p1, p2, p3) => new angular_2.WindowScrollHost.new(p0, p1, p2, p3), DomServiceLAndNgZoneLAndGestureListenerFactoryL__ToWindowScrollHostL()));
    reflector.registerDependencies(dart.wrapType(WindowScrollHostL()), C0 || CT.C0);
    angular$46template.initReflector();
    gestures$46template.initReflector();
    scroll_host_base$46template.initReflector();
    scroll_host_interface$46template.initReflector();
    scroll_host_interface$46template.initReflector();
    interface$46template.initReflector();
    angular_2$46template.initReflector();
  };
  dart.defineLazy(angular_2$46template$, {
    /*angular_2$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/angular_2.template", {
    "package:angular_components/utils/angular/scroll_host/angular_2.template.dart": angular_2$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEmJ,IAA9J,0BAAuB,oCAAkB,SAAgB,IAAe,IAA+B,IAAe,OAAO,mCAAiB,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAM1J,IALF,+BAA4B;AAMP,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MArBI,8BAAQ;YAAG","file":"angular_2.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__scroll_host__angular_2$46template: angular_2$46template$
  };
}));

//# sourceMappingURL=angular_2.template.unsound.ddc.js.map
