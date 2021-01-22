define(['dart_sdk'], (function load__packages__angular__meta(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta = Object.create(dart.library);
  const CT = Object.create(null);
  meta.castCallback1ForDirective = function castCallback1ForDirective(T, A, callback) {
    return dart.fn(element => callback(dart.legacy(A).as(element)), dart.fnType(dart.legacy(T), [dart.dynamic]));
  };
  dart.trackLibraries("packages/angular/meta", {
    "package:angular/meta.dart": meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;4EA+CgB;AAEd,UAAO,SAAC,WAAY,AAAQ,QAAA,CAAS,kBAAR,OAAO;EACtC","file":"meta.unsound.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
}));

//# sourceMappingURL=meta.unsound.ddc.js.map
