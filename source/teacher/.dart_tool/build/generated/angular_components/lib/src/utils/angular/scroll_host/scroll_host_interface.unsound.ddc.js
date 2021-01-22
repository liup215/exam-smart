define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface(dart_sdk, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var scroll_host_interface = Object.create(dart.library);
  var $toString = dartx.toString;
  var StickyPositionL = () => (StickyPositionL = dart.constFn(dart.legacy(scroll_host_interface.StickyPosition)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scroll_host_interface.StickyPosition.prototype,
        [_name$]: "StickyPosition.NONE",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: scroll_host_interface.StickyPosition.prototype,
        [_name$]: "StickyPosition.TOP",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: scroll_host_interface.StickyPosition.prototype,
        [_name$]: "StickyPosition.BOTTOM",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], StickyPositionL());
    }
  }, false);
  scroll_host_interface.ScrollHostEvent = class ScrollHostEvent extends core.Object {};
  (scroll_host_interface.ScrollHostEvent.new = function() {
    ;
  }).prototype = scroll_host_interface.ScrollHostEvent.prototype;
  dart.addTypeTests(scroll_host_interface.ScrollHostEvent);
  dart.addTypeCaches(scroll_host_interface.ScrollHostEvent);
  dart.setLibraryUri(scroll_host_interface.ScrollHostEvent, L0);
  scroll_host_interface.ScrollHost = class ScrollHost extends core.Object {
    startNativeScrollListener() {
    }
  };
  (scroll_host_interface.ScrollHost.new = function() {
    ;
  }).prototype = scroll_host_interface.ScrollHost.prototype;
  dart.addTypeTests(scroll_host_interface.ScrollHost);
  dart.addTypeCaches(scroll_host_interface.ScrollHost);
  scroll_host_interface.ScrollHost[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(scroll_host_interface.ScrollHost, () => ({
    __proto__: dart.getMethods(scroll_host_interface.ScrollHost.__proto__),
    startNativeScrollListener: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scroll_host_interface.ScrollHost, L0);
  var _name$ = dart.privateName(scroll_host_interface, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  scroll_host_interface.StickyPosition = class StickyPosition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (scroll_host_interface.StickyPosition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = scroll_host_interface.StickyPosition.prototype;
  dart.addTypeTests(scroll_host_interface.StickyPosition);
  dart.addTypeCaches(scroll_host_interface.StickyPosition);
  dart.setMethodSignature(scroll_host_interface.StickyPosition, () => ({
    __proto__: dart.getMethods(scroll_host_interface.StickyPosition.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(scroll_host_interface.StickyPosition, L0);
  dart.setFieldSignature(scroll_host_interface.StickyPosition, () => ({
    __proto__: dart.getFields(scroll_host_interface.StickyPosition.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(scroll_host_interface.StickyPosition, ['toString']);
  scroll_host_interface.StickyPosition.NONE = C0 || CT.C0;
  scroll_host_interface.StickyPosition.TOP = C1 || CT.C1;
  scroll_host_interface.StickyPosition.BOTTOM = C2 || CT.C2;
  scroll_host_interface.StickyPosition.values = C3 || CT.C3;
  var enableSmoothPushing = dart.privateName(scroll_host_interface, "StickyController.enableSmoothPushing");
  scroll_host_interface.StickyController = class StickyController extends core.Object {
    get enableSmoothPushing() {
      return this[enableSmoothPushing];
    }
    set enableSmoothPushing(value) {
      this[enableSmoothPushing] = value;
    }
  };
  (scroll_host_interface.StickyController.new = function() {
    this[enableSmoothPushing] = null;
    ;
  }).prototype = scroll_host_interface.StickyController.prototype;
  dart.addTypeTests(scroll_host_interface.StickyController);
  dart.addTypeCaches(scroll_host_interface.StickyController);
  scroll_host_interface.StickyController[dart.implements] = () => [disposer.Disposable];
  dart.setLibraryUri(scroll_host_interface.StickyController, L0);
  dart.setFieldSignature(scroll_host_interface.StickyController, () => ({
    __proto__: dart.getFields(scroll_host_interface.StickyController.__proto__),
    enableSmoothPushing: dart.fieldType(dart.legacy(core.bool))
  }));
  scroll_host_interface.PanController = class PanController extends core.Object {};
  (scroll_host_interface.PanController.new = function() {
    ;
  }).prototype = scroll_host_interface.PanController.prototype;
  dart.addTypeTests(scroll_host_interface.PanController);
  dart.addTypeCaches(scroll_host_interface.PanController);
  scroll_host_interface.PanController[dart.implements] = () => [disposer.Disposable];
  dart.setLibraryUri(scroll_host_interface.PanController, L0);
  scroll_host_interface.PanEvent = class PanEvent extends scroll_host_interface.ScrollHostEvent {};
  (scroll_host_interface.PanEvent.new = function() {
    ;
  }).prototype = scroll_host_interface.PanEvent.prototype;
  dart.addTypeTests(scroll_host_interface.PanEvent);
  dart.addTypeCaches(scroll_host_interface.PanEvent);
  dart.setLibraryUri(scroll_host_interface.PanEvent, L0);
  dart.defineLazy(scroll_host_interface, {
    /*scroll_host_interface.stickyControllerZIndex*/get stickyControllerZIndex() {
      return 100;
    },
    set stickyControllerZIndex(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface", {
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.dart": scroll_host_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_host_interface.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmBA;;;;;;IAgCoC;;;;EAwCpC;;;;;;;;;;;;;;;;;IAGwC;;8DAAnC;;;;EAAmC;;;;;;;;;;;;;;;;;;;;;IA2DjC;;;;;;;;;;EACP;;;;;;;;;;;;EAaA;;;;;;;;EAkBA;;;;;MA5BI,4CAAsB;YAAG","file":"scroll_host_interface.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__scroll_host_interface: scroll_host_interface
  };
}));

//# sourceMappingURL=scroll_host_interface.unsound.ddc.js.map
