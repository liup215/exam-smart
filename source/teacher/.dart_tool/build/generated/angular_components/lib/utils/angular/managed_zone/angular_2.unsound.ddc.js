define(['dart_sdk', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/src/core/change_detection/pipe_transform'], (function load__packages__angular_components__utils__angular__managed_zone__angular_2(dart_sdk, packages__angular_components__src__utils__angular__managed_zone__managed_zone, packages__angular__src__core__change_detection__pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const managed_zone = packages__angular_components__src__utils__angular__managed_zone__managed_zone.src__utils__angular__managed_zone__managed_zone;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  var angular_2 = Object.create(dart.library);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/angular/managed_zone/angular_2.dart";
  var _isDisposed = dart.privateName(angular_2, "_isDisposed");
  var _ngZone$ = dart.privateName(angular_2, "_ngZone");
  var innerZone = dart.privateName(angular_2, "Angular2ManagedZone.innerZone");
  var outerZone = dart.privateName(angular_2, "Angular2ManagedZone.outerZone");
  angular_2.Angular2ManagedZone = class Angular2ManagedZone extends managed_zone.ManagedZoneBase {
    get innerZone() {
      return this[innerZone];
    }
    set innerZone(value) {
      this[innerZone] = value;
    }
    get outerZone() {
      return this[outerZone];
    }
    set outerZone(value) {
      this[outerZone] = value;
    }
    capturedTurnDone(event) {
      if (dart.test(this[_isDisposed])) return;
      super.capturedTurnDone(event);
    }
    capturedEventDone(event) {
      if (dart.test(this[_isDisposed])) return;
      super.capturedEventDone(event);
    }
    dispose() {
      this[_isDisposed] = true;
    }
    get inInnerZone() {
      return !dart.test(this.inOuterZone);
    }
    runInside(T, fn) {
      return this[_ngZone$].run(dart.legacy(T), fn);
    }
    runOutside(T, fn) {
      return this[_ngZone$].runOutsideAngular(dart.legacy(T), fn);
    }
  };
  (angular_2.Angular2ManagedZone.new = function(_ngZone) {
    this[_isDisposed] = false;
    this[innerZone] = null;
    this[outerZone] = null;
    this[_ngZone$] = _ngZone;
    angular_2.Angular2ManagedZone.__proto__.new.call(this);
    this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
      this.outerZone = async.Zone.current;
      this[_ngZone$].onTurnStart.listen(dart.bind(this, 'capturedTurnStart'));
      this[_ngZone$].onMicrotaskEmpty.listen(dart.bind(this, 'capturedTurnDone'));
      this[_ngZone$].onTurnDone.listen(dart.bind(this, 'capturedEventDone'));
    }, VoidToNull()));
  }).prototype = angular_2.Angular2ManagedZone.prototype;
  dart.addTypeTests(angular_2.Angular2ManagedZone);
  dart.addTypeCaches(angular_2.Angular2ManagedZone);
  dart.setMethodSignature(angular_2.Angular2ManagedZone, () => ({
    __proto__: dart.getMethods(angular_2.Angular2ManagedZone.__proto__),
    runInside: dart.gFnType(T => [dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(T), []))]]),
    runOutside: dart.gFnType(T => [dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(T), []))]])
  }));
  dart.setLibraryUri(angular_2.Angular2ManagedZone, L0);
  dart.setFieldSignature(angular_2.Angular2ManagedZone, () => ({
    __proto__: dart.getFields(angular_2.Angular2ManagedZone.__proto__),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_isDisposed]: dart.fieldType(dart.legacy(core.bool)),
    innerZone: dart.fieldType(dart.legacy(async.Zone)),
    outerZone: dart.fieldType(dart.legacy(async.Zone))
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/managed_zone/angular_2", {
    "package:angular_components/utils/angular/managed_zone/angular_2.dart": angular_2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAoBO;;;;;;IAGA;;;;;;qBAYyB;AAC5B,oBAAI,oBAAa;AACY,MAAvB,uBAAiB,KAAK;IAC9B;sBAG+B;AAC7B,oBAAI,oBAAa;AACa,MAAxB,wBAAkB,KAAK;IAC/B;;AAIoB,MAAlB,oBAAc;IAChB;;AAGwB,wBAAC;IAAW;iBAGnB;AAAS,YAAA,AAAQ,oCAAI,EAAE;IAAC;kBAGvB;AAAS,YAAA,AAAQ,kDAAkB,EAAE;IAAC;;gDAjC/B;IARpB,oBAAc;IAGd;IAGA;IAEoB;AAAzB;AAMI,IALF,AAAQ,4CAAkB;AACA,MAAxB,iBAAiB;AAC4B,MAA7C,AAAQ,AAAY,4CAAO;AACsB,MAAjD,AAAQ,AAAiB,iDAAO;AACY,MAA5C,AAAQ,AAAW,2CAAO;;EAE9B","file":"angular_2.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__managed_zone__angular_2: angular_2
  };
}));

//# sourceMappingURL=angular_2.unsound.ddc.js.map
