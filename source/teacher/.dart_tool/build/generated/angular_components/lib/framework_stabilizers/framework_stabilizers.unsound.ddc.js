define(['dart_sdk'], (function load__packages__angular_components__framework_stabilizers__framework_stabilizers(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var framework_stabilizers = Object.create(dart.library);
  var $_set = dartx._set;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolLAndStringLTovoid = () => (boolLAndStringLTovoid = dart.constFn(dart.fnType(dart.void, [boolL(), StringL()])))();
  var boolLAndStringLToLvoid = () => (boolLAndStringLToLvoid = dart.constFn(dart.legacy(boolLAndStringLTovoid())))();
  var FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [boolLAndStringLToLvoid()])))();
  var FnToLvoid = () => (FnToLvoid = dart.constFn(dart.legacy(FnTovoid())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IdentityMapOfintL$dynamic = () => (IdentityMapOfintL$dynamic = dart.constFn(_js_helper.IdentityMap$(intL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/framework_stabilizers/framework_stabilizers.dart";
  framework_stabilizers.FrameworkStabilizers = class FrameworkStabilizers extends core.Object {
    static get _frameworkStabilizers() {
      if (dart.global.frameworkStabilizers == null) {
        dart.global.frameworkStabilizers = [];
      }
      return dart.global.frameworkStabilizers;
    }
    static add(fn) {
      let t0;
      let wrappedFn = js.allowInterop(FnToLvoid(), fn);
      let id = (t0 = framework_stabilizers.FrameworkStabilizers._nextId, framework_stabilizers.FrameworkStabilizers._nextId = dart.notNull(t0) + 1, t0);
      framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer[$_set](id, wrappedFn);
      framework_stabilizers.FrameworkStabilizers._frameworkStabilizers[$add](wrappedFn);
      return id;
    }
    static remove(id) {
      let wrappedFn = framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer[$remove](id);
      return wrappedFn == null ? false : framework_stabilizers.FrameworkStabilizers._frameworkStabilizers[$remove](wrappedFn);
    }
    static removeAll() {
      framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer[$clear]();
      framework_stabilizers.FrameworkStabilizers._frameworkStabilizers[$clear]();
    }
  };
  (framework_stabilizers.FrameworkStabilizers.new = function() {
    ;
  }).prototype = framework_stabilizers.FrameworkStabilizers.prototype;
  dart.addTypeTests(framework_stabilizers.FrameworkStabilizers);
  dart.addTypeCaches(framework_stabilizers.FrameworkStabilizers);
  dart.setLibraryUri(framework_stabilizers.FrameworkStabilizers, L0);
  dart.defineLazy(framework_stabilizers.FrameworkStabilizers, {
    /*framework_stabilizers.FrameworkStabilizers._idToFrameworkStabilizer*/get _idToFrameworkStabilizer() {
      return new (IdentityMapOfintL$dynamic()).new();
    },
    /*framework_stabilizers.FrameworkStabilizers._nextId*/get _nextId() {
      return 0;
    },
    set _nextId(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/framework_stabilizers/framework_stabilizers", {
    "package:angular_components/framework_stabilizers/framework_stabilizers.dart": framework_stabilizers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["framework_stabilizers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAmCI,UAAI,AAAwB,oCAAG;AACD,QAA5B,mCAA0B;;AAE5B,YAAO;IACT;eAkBmC;;AAC7B,sBAAY,6BAAa,EAAE;AAC3B,gBAAY,KAAP,4HAAO;AACwB,MAAxC,AAAwB,2EAAC,EAAE,EAAI,SAAS;AACJ,MAApC,AAAsB,uEAAI,SAAS;AACnC,YAAO,GAAE;IACX;kBAGuB;AACjB,sBAAY,AAAyB,6EAAO,EAAE;AAClD,YAAO,AAAU,UAAD,IAAI,OAAO,QAAQ,AAAsB,0EAAO,SAAS;IAC3E;;AAGkC,MAAhC,AAAyB;AACI,MAA7B,AAAsB;IACxB;;;;EACF;;;;;MA5CiC,mEAAwB;YAAG;;MAC/C,kDAAO;YAAG","file":"framework_stabilizers.unsound.ddc.js"}');
  // Exports:
  return {
    framework_stabilizers__framework_stabilizers: framework_stabilizers
  };
}));

//# sourceMappingURL=framework_stabilizers.unsound.ddc.js.map
