define(['dart_sdk'], (function load__packages__angular_components__laminate__overlay__zindexer(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var zindexer = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/overlay/zindexer.dart";
  zindexer.ZIndexer = class ZIndexer extends core.Object {
    static _initZIndex() {
      if (dart.global.acxZIndex == null) {
        dart.global.acxZIndex = 1000;
      }
    }
    static new() {
      let t0;
      t0 = zindexer.ZIndexer._currentInstance;
      return t0 == null ? zindexer.ZIndexer._currentInstance = new zindexer.ZIndexer.__() : t0;
    }
    pop() {
      return dart.global.acxZIndex = dart.notNull(dart.global.acxZIndex) + 1;
    }
    peek() {
      return dart.global.acxZIndex;
    }
  };
  (zindexer.ZIndexer.__ = function() {
    zindexer.ZIndexer._initZIndex();
  }).prototype = zindexer.ZIndexer.prototype;
  dart.addTypeTests(zindexer.ZIndexer);
  dart.addTypeCaches(zindexer.ZIndexer);
  dart.setMethodSignature(zindexer.ZIndexer, () => ({
    __proto__: dart.getMethods(zindexer.ZIndexer.__proto__),
    pop: dart.fnType(dart.legacy(core.int), []),
    peek: dart.fnType(dart.legacy(core.int), [])
  }));
  dart.setLibraryUri(zindexer.ZIndexer, L0);
  dart.defineLazy(zindexer.ZIndexer, {
    /*zindexer.ZIndexer._currentInstance*/get _currentInstance() {
      return null;
    },
    set _currentInstance(_) {}
  }, true);
  dart.defineLazy(zindexer, {
    /*zindexer.hoverableAutoIncrement*/get hoverableAutoIncrement() {
      return 1000;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/overlay/zindexer", {
    "package:angular_components/laminate/overlay/zindexer.dart": zindexer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["zindexer.dart"],"names":[],"mappings":";;;;;;;;;;AA4BI,UAAI,AAAe,yBAAG;AACmB,QAAvC;;IAEJ;;;AAGE,WAAO;0BAAiB,qCAAa;IACvC;;AAOa,YAAE,yBAAF,aAAE,yBAAF;IAAgB;;AAGf;IAAc;;;AAPb,IAAb;EACF;;;;;;;;;;MAdgB,kCAAgB;;;;;;MAPxB,+BAAsB","file":"zindexer.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__zindexer: zindexer
  };
}));

//# sourceMappingURL=zindexer.unsound.ddc.js.map
