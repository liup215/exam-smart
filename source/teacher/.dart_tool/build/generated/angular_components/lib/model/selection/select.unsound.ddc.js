define(['dart_sdk', 'packages/angular_components/src/utils/async/async_update_scheduler'], (function load__packages__angular_components__model__selection__select(dart_sdk, packages__angular_components__src__utils__async__async_update_scheduler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposable_future = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__disposable_future;
  var select = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/selection/select.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    }
  }, false);
  select.Filterable = class Filterable extends core.Object {};
  (select.Filterable.new = function() {
    ;
  }).prototype = select.Filterable.prototype;
  dart.addTypeTests(select.Filterable);
  dart.addTypeCaches(select.Filterable);
  dart.setLibraryUri(select.Filterable, L0);
  var C0;
  const _is_Parent_default = Symbol('_is_Parent_default');
  select.Parent$ = dart.generic((P, C) => {
    var PL = () => (PL = dart.constFn(dart.legacy(P)))();
    var CL = () => (CL = dart.constFn(dart.legacy(C)))();
    var DisposableFutureOfCL = () => (DisposableFutureOfCL = dart.constFn(disposable_future.DisposableFuture$(CL())))();
    class Parent extends core.Object {
      hasChildren(item) {
        PL().as(item);
        return false;
      }
      childrenOf(parent, filterQuery = null) {
        PL().as(parent);
        return DisposableFutureOfCL().fromValue(CL().as(C0 || CT.C0));
      }
    }
    (Parent.new = function() {
      ;
    }).prototype = Parent.prototype;
    dart.addTypeTests(Parent);
    Parent.prototype[_is_Parent_default] = true;
    dart.addTypeCaches(Parent);
    dart.setMethodSignature(Parent, () => ({
      __proto__: dart.getMethods(Parent.__proto__),
      hasChildren: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      childrenOf: dart.fnType(dart.legacy(disposable_future.DisposableFuture$(dart.legacy(C))), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(Parent, L0);
    return Parent;
  });
  select.Parent = select.Parent$();
  dart.addTypeTests(select.Parent, _is_Parent_default);
  dart.defineLazy(select, {
    /*select.alwaysTrue*/get alwaysTrue() {
      return dart.fn(_ => true, dynamicToboolL());
    },
    set alwaysTrue(_) {},
    /*select.alwaysFalse*/get alwaysFalse() {
      return dart.fn(_ => false, dynamicToboolL());
    },
    set alwaysFalse(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/selection/select", {
    "package:angular_components/model/selection/select.dart": select
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["select.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;EA6CA;;;;;;;;;;;;gBAIqB;AAAS;MAAK;iBAIA,QAAgB;gBAAhB;AAC7B,cAAiB,kCAAmB;MAAK;;;;IAC/C;;;;;;;;;;;;;;;MAzCU,iBAAU;YAAG,SAAC,KAAM;;;MACpB,kBAAW;YAAG,SAAC,KAAM","file":"select.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__select: select
  };
}));

//# sourceMappingURL=select.unsound.ddc.js.map
