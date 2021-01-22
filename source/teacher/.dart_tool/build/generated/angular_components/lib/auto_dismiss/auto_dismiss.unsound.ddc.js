define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/change_detection/pipe_transform'], (function load__packages__angular_components__auto_dismiss__auto_dismiss(dart_sdk, packages__angular_components__utils__browser__events__events, packages__angular__src__core__change_detection__pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  var auto_dismiss = Object.create(dart.library);
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/auto_dismiss/auto_dismiss.dart";
  var _ignoreEvents = dart.privateName(auto_dismiss, "_ignoreEvents");
  var _autoDismissable = dart.privateName(auto_dismiss, "_autoDismissable");
  var _zone$ = dart.privateName(auto_dismiss, "_zone");
  var _dismissEvents = dart.privateName(auto_dismiss, "_dismissEvents");
  var _listenForEvents = dart.privateName(auto_dismiss, "_listenForEvents");
  auto_dismiss.AutoDismissDirective = class AutoDismissDirective extends core.Object {
    get autoDismissable() {
      return this[_autoDismissable];
    }
    set autoDismissable(b) {
      this[_autoDismissable] = b;
      this[_ignoreEvents] = this[_autoDismissable];
      this[_dismissEvents].first.then(dart.void, dart.bind(this, _listenForEvents));
      this[_zone$].runOutsideAngular(dart.void, dart.fn(() => async.Timer.run(dart.bind(this, _listenForEvents)), VoidTovoid()));
    }
    get dismiss() {
      return this[_dismissEvents].where(dart.fn(_ => dart.test(this[_autoDismissable]) && !dart.test(this[_ignoreEvents]), dynamicToboolL()));
    }
    [_listenForEvents](_ = null) {
      return this[_ignoreEvents] = false;
    }
  };
  (auto_dismiss.AutoDismissDirective.new = function(element, _zone) {
    this[_ignoreEvents] = false;
    this[_autoDismissable] = false;
    this[_zone$] = _zone;
    this[_dismissEvents] = events.triggersOutside(element);
    ;
  }).prototype = auto_dismiss.AutoDismissDirective.prototype;
  dart.addTypeTests(auto_dismiss.AutoDismissDirective);
  dart.addTypeCaches(auto_dismiss.AutoDismissDirective);
  dart.setMethodSignature(auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getMethods(auto_dismiss.AutoDismissDirective.__proto__),
    [_listenForEvents]: dart.fnType(dart.void, [], [dart.dynamic])
  }));
  dart.setGetterSignature(auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getGetters(auto_dismiss.AutoDismissDirective.__proto__),
    autoDismissable: dart.legacy(core.bool),
    dismiss: dart.legacy(async.Stream)
  }));
  dart.setSetterSignature(auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getSetters(auto_dismiss.AutoDismissDirective.__proto__),
    autoDismissable: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(auto_dismiss.AutoDismissDirective, L0);
  dart.setFieldSignature(auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getFields(auto_dismiss.AutoDismissDirective.__proto__),
    [_dismissEvents]: dart.finalFieldType(dart.legacy(async.Stream)),
    [_zone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_ignoreEvents]: dart.fieldType(dart.legacy(core.bool)),
    [_autoDismissable]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/auto_dismiss/auto_dismiss", {
    "package:angular_components/auto_dismiss/auto_dismiss.dart": auto_dismiss
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auto_dismiss.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AA2C8B;IAAgB;wBAInB;AACH,MAApB,yBAAmB,CAAC;AAKY,MAAhC,sBAAgB;AAC2B,MAA3C,AAAe,AAAM,qDAAK;AAGgC,MAA1D,AAAM,0CAAkB,cAAY,0BAAI;IAC1C;;AAMI,YAAA,AAAe,4BAAM,QAAC,KAAuB,UAAjB,sCAAqB;IAAc;uBAE5C;AAAO,mCAAgB;IAAK;;oDA5BlB,SAAc;IAG1C,sBAAgB;IAChB,yBAAmB;IAJuB;IAC1B,uBAAE,uBAAgB,OAAO;;EAAC","file":"auto_dismiss.unsound.ddc.js"}');
  // Exports:
  return {
    auto_dismiss__auto_dismiss: auto_dismiss
  };
}));

//# sourceMappingURL=auto_dismiss.unsound.ddc.js.map
