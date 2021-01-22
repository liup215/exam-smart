define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__src__utils__angular__managed_zone__managed_zone(dart_sdk, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var managed_zone = Object.create(dart.library);
  var $toString = dartx.toString;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var IdentityMapOfStringL$boolL = () => (IdentityMapOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), boolL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/utils/angular/managed_zone/managed_zone.dart";
  managed_zone.ManagedZone = class ManagedZone extends core.Object {};
  (managed_zone.ManagedZone.new = function() {
    ;
  }).prototype = managed_zone.ManagedZone.prototype;
  dart.addTypeTests(managed_zone.ManagedZone);
  dart.addTypeCaches(managed_zone.ManagedZone);
  managed_zone.ManagedZone[dart.implements] = () => [disposer.Disposable];
  dart.setLibraryUri(managed_zone.ManagedZone, L0);
  var _onTurnDoneController = dart.privateName(managed_zone, "_onTurnDoneController");
  var _onTurnStartController = dart.privateName(managed_zone, "_onTurnStartController");
  var _onEventDoneController = dart.privateName(managed_zone, "_onEventDoneController");
  var _isRunning = dart.privateName(managed_zone, "_isRunning");
  managed_zone.ManagedZoneBase = class ManagedZoneBase extends managed_zone.ManagedZone {
    capturedTurnStart(event) {
      this[_isRunning] = true;
      if (this[_onTurnStartController] != null) {
        this[_onTurnStartController].add(null);
      }
    }
    capturedTurnDone(event) {
      this[_isRunning] = false;
      if (this[_onTurnDoneController] != null) {
        this[_onTurnDoneController].add(null);
      }
    }
    capturedEventDone(event) {
      if (this[_onEventDoneController] != null) {
        this[_onEventDoneController].add(null);
      }
    }
    get isRunning() {
      return this[_isRunning];
    }
    dispose() {
    }
    get inInnerZone() {
      return dart.equals(async.Zone.current, this.innerZone);
    }
    get inOuterZone() {
      return dart.equals(async.Zone.current, this.outerZone);
    }
    get onTurnStart() {
      if (this[_onTurnStartController] == null) {
        this[_onTurnStartController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onTurnStartController].stream;
    }
    get onTurnDone() {
      if (this[_onTurnDoneController] == null) {
        this[_onTurnDoneController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onTurnDoneController].stream;
    }
    get onEventDone() {
      if (this[_onEventDoneController] == null) {
        this[_onEventDoneController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onEventDoneController].stream;
    }
    runInside(T, fn) {
      if (dart.test(this.inInnerZone)) {
        return fn();
      } else {
        return this.innerZone.run(dart.legacy(T), fn);
      }
    }
    runOutside(T, fn) {
      if (dart.test(this.inOuterZone)) {
        return fn();
      } else {
        return this.outerZone.run(dart.legacy(T), fn);
      }
    }
    toString() {
      return "ManagedZone " + dart.notNull(new (IdentityMapOfStringL$boolL()).from(["inInnerZone", this.inInnerZone, "inOuterZone", this.inOuterZone])[$toString]());
    }
  };
  (managed_zone.ManagedZoneBase.new = function() {
    this[_onTurnDoneController] = null;
    this[_onTurnStartController] = null;
    this[_onEventDoneController] = null;
    this[_isRunning] = false;
    ;
  }).prototype = managed_zone.ManagedZoneBase.prototype;
  dart.addTypeTests(managed_zone.ManagedZoneBase);
  dart.addTypeCaches(managed_zone.ManagedZoneBase);
  dart.setMethodSignature(managed_zone.ManagedZoneBase, () => ({
    __proto__: dart.getMethods(managed_zone.ManagedZoneBase.__proto__),
    capturedTurnStart: dart.fnType(dart.void, [dart.dynamic]),
    capturedTurnDone: dart.fnType(dart.void, [dart.dynamic]),
    capturedEventDone: dart.fnType(dart.void, [dart.dynamic]),
    dispose: dart.fnType(dart.void, []),
    runInside: dart.gFnType(T => [dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(T), []))]]),
    runOutside: dart.gFnType(T => [dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(T), []))]]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(managed_zone.ManagedZoneBase, () => ({
    __proto__: dart.getGetters(managed_zone.ManagedZoneBase.__proto__),
    isRunning: dart.legacy(core.bool),
    inInnerZone: dart.legacy(core.bool),
    inOuterZone: dart.legacy(core.bool),
    onTurnStart: dart.legacy(async.Stream),
    onTurnDone: dart.legacy(async.Stream),
    onEventDone: dart.legacy(async.Stream)
  }));
  dart.setLibraryUri(managed_zone.ManagedZoneBase, L0);
  dart.setFieldSignature(managed_zone.ManagedZoneBase, () => ({
    __proto__: dart.getFields(managed_zone.ManagedZoneBase.__proto__),
    [_onTurnDoneController]: dart.fieldType(dart.legacy(async.StreamController)),
    [_onTurnStartController]: dart.fieldType(dart.legacy(async.StreamController)),
    [_onEventDoneController]: dart.fieldType(dart.legacy(async.StreamController)),
    [_isRunning]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(managed_zone.ManagedZoneBase, ['toString']);
  dart.trackLibraries("packages/angular_components/src/utils/angular/managed_zone/managed_zone", {
    "package:angular_components/src/utils/angular/managed_zone/managed_zone.dart": managed_zone
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["managed_zone.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;EA6DA;;;;;;;;;;sBAYiC;AACZ,MAAjB,mBAAa;AACb,UAAI,gCAA0B;AACI,QAAhC,AAAuB,iCAAI;;IAE/B;qBAE8B;AACV,MAAlB,mBAAa;AACb,UAAI,+BAAyB;AACI,QAA/B,AAAsB,gCAAI;;IAE9B;sBAE+B;AAC7B,UAAI,gCAA0B;AACI,QAAhC,AAAuB,iCAAI;;IAE/B;;AAGsB;IAAU;;IAGhB;;AAGQ,YAAa,aAAR,oBAAW;IAAS;;AAGzB,YAAa,aAAR,oBAAW;IAAS;;AAI/C,UAAI,AAAuB,gCAAG;AACmC,QAA/D,+BAA0C,wCAAgB;;AAE5D,YAAO,AAAuB;IAChC;;AAIE,UAAI,AAAsB,+BAAG;AACmC,QAA9D,8BAAyC,wCAAgB;;AAE3D,YAAO,AAAsB;IAC/B;;AAIE,UAAI,AAAuB,gCAAG;AACmC,QAA/D,+BAA0C,wCAAgB;;AAE5D,YAAO,AAAuB;IAChC;iBAGiB;AACf,oBAAI;AACF,cAAO,AAAE,GAAA;;AAET,cAAO,AAAU,oCAAI,EAAE;;IAE3B;kBAGkB;AAChB,oBAAI;AACF,cAAO,AAAE,GAAA;;AAET,cAAO,AAAU,oCAAI,EAAE;;IAE3B;;AAII,YAAA,AAAe,+BACf,AAAyD,yCAAxD,eAAe,kBAAa,eAAe;IAAuB;;;IArFtD;IACA;IACA;IAIZ,mBAAa;;EAgFpB","file":"managed_zone.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__managed_zone__managed_zone: managed_zone
  };
}));

//# sourceMappingURL=managed_zone.unsound.ddc.js.map
