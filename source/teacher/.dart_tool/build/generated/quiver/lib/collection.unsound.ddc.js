define(['dart_sdk'], (function load__packages__quiver__collection(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var collection = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  const CT = Object.create(null);
  collection.listsEqual = function listsEqual(a, b) {
    if (dart.equals(a, b)) return true;
    if (a == null || b == null) return false;
    if (a[$length] != b[$length]) return false;
    for (let i = 0; i < dart.notNull(a[$length]); i = i + 1) {
      if (!dart.equals(a[$_get](i), b[$_get](i))) return false;
    }
    return true;
  };
  collection.mapsEqual = function mapsEqual(a, b) {
    if (dart.equals(a, b)) return true;
    if (a == null || b == null) return false;
    if (a[$length] != b[$length]) return false;
    for (let k of a[$keys]) {
      let bValue = b[$_get](k);
      if (bValue == null && !dart.test(b[$containsKey](k))) return false;
      if (!dart.equals(bValue, a[$_get](k))) return false;
    }
    return true;
  };
  collection.setsEqual = function setsEqual(a, b) {
    if (dart.equals(a, b)) return true;
    if (a == null || b == null) return false;
    if (a[$length] != b[$length]) return false;
    return a.containsAll(b);
  };
  collection.indexOf = function indexOf(T, elements, predicate) {
    if (dart.legacy(core.List$(dart.legacy(T))).is(elements)) {
      for (let i = 0; i < dart.notNull(elements[$length]); i = i + 1) {
        if (dart.test(predicate(elements[$_get](i)))) return i;
      }
      return -1;
    }
    let i = 0;
    for (let element of elements) {
      if (dart.test(predicate(element))) return i;
      i = i + 1;
    }
    return -1;
  };
  dart.trackLibraries("packages/quiver/collection", {
    "package:quiver/collection.dart": collection
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["collection.dart"],"names":[],"mappings":";;;;;;;;;;;8CAgCqB,GAAQ;AAC3B,QAAM,YAAF,CAAC,EAAI,CAAC,GAAE,MAAO;AACnB,QAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MAAM,MAAO;AACnC,QAAI,AAAE,CAAD,aAAW,AAAE,CAAD,WAAS,MAAO;AAEjC,aAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,CAAD,YAAS,IAAA,AAAC,CAAA;AAC7B,uBAAI,AAAC,CAAA,QAAC,CAAC,GAAK,AAAC,CAAA,QAAC,CAAC,IAAG,MAAO;;AAG3B,UAAO;EACT;4CAMmB,GAAO;AACxB,QAAM,YAAF,CAAC,EAAI,CAAC,GAAE,MAAO;AACnB,QAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MAAM,MAAO;AACnC,QAAI,AAAE,CAAD,aAAW,AAAE,CAAD,WAAS,MAAO;AAEjC,aAAW,IAAK,AAAE,EAAD;AACX,mBAAS,AAAC,CAAA,QAAC,CAAC;AAChB,UAAI,AAAO,MAAD,IAAI,mBAAS,AAAE,CAAD,eAAa,CAAC,IAAG,MAAO;AAChD,uBAAI,MAAM,EAAI,AAAC,CAAA,QAAC,CAAC,IAAG,MAAO;;AAG7B,UAAO;EACT;4CAMmB,GAAO;AACxB,QAAM,YAAF,CAAC,EAAI,CAAC,GAAE,MAAO;AACnB,QAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MAAM,MAAO;AACnC,QAAI,AAAE,CAAD,aAAW,AAAE,CAAD,WAAS,MAAO;AAEjC,UAAO,AAAE,EAAD,aAAa,CAAC;EACxB;2CAM2B,UAAe;AACxC,QAAa,2CAAT,QAAQ;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAS,QAAD,YAAS,IAAA,AAAC,CAAA;AACpC,sBAAI,AAAS,SAAA,CAAC,AAAQ,QAAA,QAAC,CAAC,KAAI,MAAO,EAAC;;AAEtC,YAAO,EAAC;;AAGN,YAAI;AACR,aAAW,UAAW,SAAQ;AAC5B,oBAAI,AAAS,SAAA,CAAC,OAAO,IAAG,MAAO,EAAC;AAC7B,MAAH,IAAA,AAAC,CAAA;;AAEH,UAAO,EAAC;EACV","file":"collection.unsound.ddc.js"}');
  // Exports:
  return {
    collection: collection
  };
}));

//# sourceMappingURL=collection.unsound.ddc.js.map
