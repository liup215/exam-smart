define(['dart_sdk'], (function load__packages__angular__src__runtime__queries(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var queries = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  const CT = Object.create(null);
  queries.flattenNodes = function flattenNodes(T, nodes) {
    let result = _interceptors.JSArray$(dart.legacy(T)).of([]);
    for (let i = 0, l = nodes[$length]; i < dart.notNull(l); i = i + 1) {
      let items = nodes[$_get](i);
      for (let j = 0, k = items[$length]; j < dart.notNull(k); j = j + 1) {
        result[$add](items[$_get](j));
      }
    }
    return result;
  };
  queries.firstOrNull = function firstOrNull(T, items) {
    return dart.test(items[$isNotEmpty]) ? items[$first] : null;
  };
  dart.trackLibraries("packages/angular/src/runtime/queries", {
    "package:angular/src/runtime/queries.dart": queries
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["queries.dart"],"names":[],"mappings":";;;;;;;;;;;;;kDAGsC;AAC9B,iBAAY;AAClB,aAAS,IAAI,GAAG,IAAI,AAAM,KAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AAClC,kBAAQ,AAAK,KAAA,QAAC,CAAC;AACrB,eAAS,IAAI,GAAG,IAAI,AAAM,KAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACpB,QAApB,AAAO,MAAD,OAAK,AAAK,KAAA,QAAC,CAAC;;;AAGtB,UAAO,OAAM;EACf;gDAGyB;AAAU,qBAAA,AAAM,KAAD,iBAAc,AAAM,KAAD,WAAS;EAAI","file":"queries.unsound.ddc.js"}');
  // Exports:
  return {
    src__runtime__queries: queries
  };
}));

//# sourceMappingURL=queries.unsound.ddc.js.map
