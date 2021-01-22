define(['dart_sdk'], (function load__packages__angular__src__meta(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular/src/meta.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: meta._VisibleForTemplate.prototype
      });
    }
  }, false);
  meta._VisibleForTemplate = class _VisibleForTemplate extends core.Object {};
  (meta._VisibleForTemplate.new = function() {
    ;
  }).prototype = meta._VisibleForTemplate.prototype;
  dart.addTypeTests(meta._VisibleForTemplate);
  dart.addTypeCaches(meta._VisibleForTemplate);
  dart.setLibraryUri(meta._VisibleForTemplate, L0);
  var C0;
  dart.defineLazy(meta, {
    /*meta.visibleForTemplate*/get visibleForTemplate() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular/src/meta", {
    "package:angular/src/meta.dart": meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;EAmD6B;;;;;;MAHvB,uBAAkB","file":"meta.unsound.ddc.js"}');
  // Exports:
  return {
    src__meta: meta
  };
}));

//# sourceMappingURL=meta.unsound.ddc.js.map
