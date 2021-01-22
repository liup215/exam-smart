define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/quiver/src/time/clock', 'packages/angular/angular.template', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__utils__angular__scroll_host__interface_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__angular__scroll_host__interface, packages__quiver__src__time__clock, packages__angular__angular$46template, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const scroll_host_interface$46template = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface$46template.src__utils__angular__scroll_host__scroll_host_interface$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var gestures$46template = Object.create(dart.library);
  var scroll_host_event_impl$46template = Object.create(dart.library);
  var interface$46template = Object.create(dart.library);
  var scroll_observer$46template = Object.create(dart.library);
  var GestureListenerFactoryL = () => (GestureListenerFactoryL = dart.constFn(dart.legacy(gestures.GestureListenerFactory)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var ClockLToGestureListenerFactoryL = () => (ClockLToGestureListenerFactoryL = dart.constFn(dart.fnType(GestureListenerFactoryL(), [ClockL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(ClockL());
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
  gestures$46template.initReflector = function initReflector() {
    if (dart.test(gestures$46template._visited)) {
      return;
    }
    gestures$46template._visited = true;
    reflector.registerFactory(dart.wrapType(GestureListenerFactoryL()), dart.fn(p0 => new gestures.GestureListenerFactory.new(p0), ClockLToGestureListenerFactoryL()));
    reflector.registerDependencies(dart.wrapType(GestureListenerFactoryL()), C0 || CT.C0);
    angular$46template.initReflector();
    scroll_host_event_impl$46template.initReflector();
    scroll_host_interface$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(gestures$46template, {
    /*gestures$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  scroll_host_event_impl$46template.initReflector = function initReflector$() {
    if (dart.test(scroll_host_event_impl$46template._visited)) {
      return;
    }
    scroll_host_event_impl$46template._visited = true;
    interface$46template.initReflector();
  };
  dart.defineLazy(scroll_host_event_impl$46template, {
    /*scroll_host_event_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  interface$46template.initReflector = function initReflector$0() {
    if (dart.test(interface$46template._visited)) {
      return;
    }
    interface$46template._visited = true;
    gestures$46template.initReflector();
    scroll_host_interface$46template.initReflector();
    scroll_observer$46template.initReflector();
  };
  dart.defineLazy(interface$46template, {
    /*interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  scroll_observer$46template.initReflector = function initReflector$1() {
    if (dart.test(scroll_observer$46template._visited)) {
      return;
    }
    scroll_observer$46template._visited = true;
    interface$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(scroll_observer$46template, {
    /*scroll_observer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/interface.template", {
    "package:angular_components/src/utils/angular/scroll_host/gestures.template.dart": gestures$46template,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.template.dart": scroll_host_event_impl$46template,
    "package:angular_components/utils/angular/scroll_host/interface.template.dart": interface$46template,
    "package:angular_components/src/utils/angular/scroll_host/scroll_observer.template.dart": scroll_observer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../../src/utils/angular/scroll_host/gestures.template.dart","../../../src/utils/angular/scroll_host/scroll_host_event_impl.template.dart","interface.template.dart","../../../src/utils/angular/scroll_host/scroll_observer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEiF,IAA5F,0BAAuB,0CAAwB,QAAW,MAAO,wCAAuB,EAAE;AAGxF,IAFF,+BAA4B;AAGP,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,4BAAQ;YAAG;;;;;ACHb,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;EACF;;MARI,0CAAQ;YAAG;;;;;ACIb,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,6BAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,mCAAQ;YAAG","file":"interface.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__gestures$46template: gestures$46template,
    src__utils__angular__scroll_host__scroll_host_event_impl$46template: scroll_host_event_impl$46template,
    utils__angular__scroll_host__interface$46template: interface$46template,
    src__utils__angular__scroll_host__scroll_observer$46template: scroll_observer$46template
  };
}));

//# sourceMappingURL=interface.template.unsound.ddc.js.map
