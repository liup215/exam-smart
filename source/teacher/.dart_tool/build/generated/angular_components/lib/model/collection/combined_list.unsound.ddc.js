define(['dart_sdk'], (function load__packages__angular_components__model__collection__combined_list(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var combined_list = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $every = dartx.every;
  var $isNotEmpty = dartx.isNotEmpty;
  var $any = dartx.any;
  var $length = dartx.length;
  var $fold = dartx.fold;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ListLToboolL = () => (ListLToboolL = dart.constFn(dart.fnType(boolL(), [ListL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLAndListLTointL = () => (intLAndListLTointL = dart.constFn(dart.fnType(intL(), [intL(), ListL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/collection/combined_list.dart";
  var _lists$ = dart.privateName(combined_list, "_lists");
  const _is_CombinedList_default = Symbol('_is_CombinedList_default');
  combined_list.CombinedList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    class CombinedList extends collection.ListMixin$(dart.legacy(E)) {
      get isEmpty() {
        return this[_lists$][$every](dart.fn(list => list[$isEmpty], ListLToboolL()));
      }
      get isNotEmpty() {
        return this[_lists$][$any](dart.fn(list => list[$isNotEmpty], ListLToboolL()));
      }
      get length() {
        return this[_lists$][$fold](intL(), 0, dart.fn((sum, list) => dart.notNull(sum) + dart.notNull(list[$length]), intLAndListLTointL()));
      }
      _get(index) {
        for (let i = 0; i < dart.notNull(this[_lists$][$length]); i = i + 1) {
          let list = this[_lists$][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) return list[$_get](index);
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(new core.StateError.new("Index out of range: " + dart.str(index) + " (" + dart.str(this.length) + ")"));
      }
      _set(index, value$) {
        let value = value$;
        EL().as(value);
        for (let i = 0; i < dart.notNull(this[_lists$][$length]); i = i + 1) {
          let list = this[_lists$][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) {
            list[$_set](index, value);
            return value$;
          }
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(new core.StateError.new("Index out of range: " + dart.str(index) + " (" + dart.str(this.length) + ")"));
        return value$;
      }
      set length(newLength) {
        return dart.throw(new core.UnimplementedError.new());
      }
    }
    (CombinedList.new = function(_lists) {
      this[_lists$] = _lists;
      ;
    }).prototype = CombinedList.prototype;
    dart.addTypeTests(CombinedList);
    CombinedList.prototype[_is_CombinedList_default] = true;
    dart.addTypeCaches(CombinedList);
    dart.setMethodSignature(CombinedList, () => ({
      __proto__: dart.getMethods(CombinedList.__proto__),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(CombinedList, () => ({
      __proto__: dart.getGetters(CombinedList.__proto__),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setSetterSignature(CombinedList, () => ({
      __proto__: dart.getSetters(CombinedList.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(CombinedList, L0);
    dart.setFieldSignature(CombinedList, () => ({
      __proto__: dart.getFields(CombinedList.__proto__),
      [_lists$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(E))))))
    }));
    dart.defineExtensionMethods(CombinedList, ['_get', '_set']);
    dart.defineExtensionAccessors(CombinedList, ['isEmpty', 'isNotEmpty', 'length']);
    return CombinedList;
  });
  combined_list.CombinedList = combined_list.CombinedList$();
  dart.addTypeTests(combined_list.CombinedList, _is_CombinedList_default);
  dart.trackLibraries("packages/angular_components/model/collection/combined_list", {
    "package:angular_components/model/collection/combined_list.dart": combined_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["combined_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAasB,cAAA,AAAO,uBAAM,QAAM,QAAS,AAAK,IAAD;MAAS;;AAGtC,cAAA,AAAO,qBAAI,QAAM,QAAS,AAAK,IAAD;MAAY;;AAG/C,cAAA,AAAO,8BAAK,GAAG,SAAK,KAAU,SAAa,aAAJ,GAAG,iBAAG,AAAK,IAAD;MAAQ;WAGzD;AAChB,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAO,yBAAQ,IAAA,AAAC,CAAA;AAC1B,qBAAO,AAAM,qBAAC,CAAC;AACvB,cAAU,aAAN,KAAK,iBAAG,AAAK,IAAD,YAAS,MAAO,AAAI,KAAA,QAAC,KAAK;AACtB,UAApB,QAAM,aAAN,KAAK,iBAAI,AAAK,IAAD;;AAEyC,QAAxD,WAAM,wBAAW,AAAsC,kCAAhB,KAAK,oBAAG,eAAM;MACvD;WAGsB;YAAS;;AAC7B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAO,yBAAQ,IAAA,AAAC,CAAA;AAC1B,qBAAO,AAAM,qBAAC,CAAC;AACvB,cAAU,aAAN,KAAK,iBAAG,AAAK,IAAD;AACK,YAAnB,AAAI,IAAA,QAAC,KAAK,EAAI,KAAK;AACnB;;AAEkB,UAApB,QAAM,aAAN,KAAK,iBAAI,AAAK,IAAD;;AAEyC,QAAxD,WAAM,wBAAW,AAAsC,kCAAhB,KAAK,oBAAG,eAAM;;MACvD;iBAGe;AAAc,0BAAM;MAAoB;;;MAnCrC;;IAAO","file":"combined_list.unsound.ddc.js"}');
  // Exports:
  return {
    model__collection__combined_list: combined_list
  };
}));

//# sourceMappingURL=combined_list.unsound.ddc.js.map
