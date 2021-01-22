define(['dart_sdk', 'packages/angular_components/framework_stabilizers/framework_stabilizers'], (function load__packages__angular_components__framework_stabilizers__testability(dart_sdk, packages__angular_components__framework_stabilizers__framework_stabilizers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework_stabilizers = packages__angular_components__framework_stabilizers__framework_stabilizers.framework_stabilizers__framework_stabilizers;
  var testability = Object.create(dart.library);
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $contains = dartx.contains;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolLAndStringLTovoid = () => (boolLAndStringLTovoid = dart.constFn(dart.fnType(dart.void, [boolL(), StringL()])))();
  var boolLAndStringLToLvoid = () => (boolLAndStringLToLvoid = dart.constFn(dart.legacy(boolLAndStringLTovoid())))();
  var JSArrayOfboolLAndStringLToLvoid = () => (JSArrayOfboolLAndStringLToLvoid = dart.constFn(_interceptors.JSArray$(boolLAndStringLToLvoid())))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/framework_stabilizers/testability.dart";
  testability.Testability = class Testability extends core.Object {};
  (testability.Testability.new = function() {
    ;
  }).prototype = testability.Testability.prototype;
  dart.addTypeTests(testability.Testability);
  dart.addTypeCaches(testability.Testability);
  dart.setLibraryUri(testability.Testability, L0);
  var _callbacks = dart.privateName(testability, "_callbacks");
  var _runCallbacksIfStable = dart.privateName(testability, "_runCallbacksIfStable");
  testability.AbstractTestability = class AbstractTestability extends core.Object {
    register() {
      framework_stabilizers.FrameworkStabilizers.add(dart.bind(this, 'whenStable'));
    }
    whenStable(fn) {
      this[_runCallbacksIfStable]({newCallback: fn});
    }
    checkStable() {
      this[_runCallbacksIfStable]();
    }
    [_runCallbacksIfStable](opts) {
      let newCallback = opts && 'newCallback' in opts ? opts.newCallback : null;
      async.Zone.root.run(core.Null, dart.fn(() => {
        if (!dart.test(this.isStable)) {
          if (newCallback != null) this[_callbacks][$add](newCallback);
          return;
        }
        FutureOfNull().new(dart.fn(() => {
          if (newCallback != null) newCallback(false, this.name);
          while (dart.test(this[_callbacks][$isNotEmpty])) {
            this[_callbacks][$removeLast]()(true, this.name);
          }
        }, VoidToNull()));
      }, VoidToNull()));
    }
    get name() {
      return this.toString();
    }
  };
  (testability.AbstractTestability.new = function() {
    this[_callbacks] = JSArrayOfboolLAndStringLToLvoid().of([]);
    ;
  }).prototype = testability.AbstractTestability.prototype;
  dart.addTypeTests(testability.AbstractTestability);
  dart.addTypeCaches(testability.AbstractTestability);
  testability.AbstractTestability[dart.implements] = () => [testability.Testability];
  dart.setMethodSignature(testability.AbstractTestability, () => ({
    __proto__: dart.getMethods(testability.AbstractTestability.__proto__),
    register: dart.fnType(dart.void, []),
    whenStable: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.String)]))]),
    checkStable: dart.fnType(dart.void, []),
    [_runCallbacksIfStable]: dart.fnType(dart.void, [], {newCallback: dart.legacy(dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.String)]))}, {})
  }));
  dart.setGetterSignature(testability.AbstractTestability, () => ({
    __proto__: dart.getGetters(testability.AbstractTestability.__proto__),
    name: dart.legacy(core.String)
  }));
  dart.setLibraryUri(testability.AbstractTestability, L0);
  dart.setFieldSignature(testability.AbstractTestability, () => ({
    __proto__: dart.getFields(testability.AbstractTestability.__proto__),
    [_callbacks]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.String)])))))
  }));
  testability.NullTestability = class NullTestability extends core.Object {
    register() {
    }
    whenStable(fn) {
      dart.throw(new core.UnsupportedError.new("not supported by NullTestability"));
    }
    get isStable() {
      dart.throw(new core.UnsupportedError.new("not supported by NullTestability"));
    }
    get name() {
      dart.throw(new core.UnsupportedError.new("not supported by NullTestability"));
    }
  };
  (testability.NullTestability.new = function() {
    ;
  }).prototype = testability.NullTestability.prototype;
  dart.addTypeTests(testability.NullTestability);
  dart.addTypeCaches(testability.NullTestability);
  testability.NullTestability[dart.implements] = () => [testability.Testability];
  dart.setMethodSignature(testability.NullTestability, () => ({
    __proto__: dart.getMethods(testability.NullTestability.__proto__),
    register: dart.fnType(dart.void, []),
    whenStable: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.String)]))])
  }));
  dart.setGetterSignature(testability.NullTestability, () => ({
    __proto__: dart.getGetters(testability.NullTestability.__proto__),
    isStable: dart.legacy(core.bool),
    name: dart.legacy(core.String)
  }));
  dart.setLibraryUri(testability.NullTestability, L0);
  dart.defineLazy(testability, {
    /*testability.testabilitiesEnabled*/get testabilitiesEnabled() {
      return dart.global.window.location.href[$contains]("enableTestabilities");
    }
  }, true);
  dart.trackLibraries("packages/angular_components/framework_stabilizers/testability", {
    "package:angular_components/framework_stabilizers/testability.dart": testability
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["testability.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;EA6BA;;;;;;;;AAcwC,MAAf,yDAAI;IAC3B;eAKiC;AACO,MAAtC,0CAAmC,EAAE;IACvC;;AAMyB,MAAvB;IACF;;UAI6C;AAczC,MAZG,AAAK,+BAAI;AACZ,uBAAK;AACH,cAAI,WAAW,IAAI,MAAM,AAAW,AAAgB,uBAAZ,WAAW;AACnD;;AAQA,QALF,mBAAO;AACL,cAAI,WAAW,IAAI,MAAM,AAAW,AAAa,WAAb,CAAC,OAAO;AAC5C,2BAAO,AAAW;AACqB,YAApC,AAAW,AAAa,gCAAC,MAAM;;;;IAIxC;;AAUmB,YAAA,AAAK;IAAU;;;IAlDL,mBAAa;;EAmD5C;;;;;;;;;;;;;;;;;;;;;;IAQE;eAGiC;AAC2B,MAA1D,WAAM,8BAAiB;IACzB;;AAI4D,MAA1D,WAAM,8BAAiB;IACzB;;AAI4D,MAA1D,WAAM,8BAAiB;IACzB;;;;EACF;;;;;;;;;;;;;;;;MA5FW,gCAAoB;YAAG,AAAK,6CAAS","file":"testability.unsound.ddc.js"}');
  // Exports:
  return {
    framework_stabilizers__testability: testability
  };
}));

//# sourceMappingURL=testability.unsound.ddc.js.map
