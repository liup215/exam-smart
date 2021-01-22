define(['dart_sdk', 'packages/collection/src/comparators', 'packages/collection/src/canonicalized_map', 'packages/quiver/core', 'packages/dart_internal/extract_type_arguments'], (function load__packages__observable__observable(dart_sdk, packages__collection__src__comparators, packages__collection__src__canonicalized_map, packages__quiver__core, packages__dart_internal__extract_type_arguments) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality$ = packages__collection__src__comparators.src__equality;
  const wrappers = packages__collection__src__canonicalized_map.src__wrappers;
  const hash = packages__quiver__core.src__core__hash;
  const extract_type_arguments = packages__dart_internal__extract_type_arguments.extract_type_arguments;
  var differs = Object.create(dart.library);
  var internal = Object.create(dart.library);
  var records$ = Object.create(dart.library);
  var to_observable = Object.create(dart.library);
  var observable_map = Object.create(dart.library);
  var observable = Object.create(dart.library);
  var change_notifier = Object.create(dart.library);
  var observable_list = Object.create(dart.library);
  var observable$ = Object.create(dart.library);
  var $length = dartx.length;
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $_set = dartx._set;
  var $reversed = dartx.reversed;
  var $sublist = dartx.sublist;
  var $removeAt = dartx.removeAt;
  var $toList = dartx.toList;
  var $getRange = dartx.getRange;
  var $insertAll = dartx.insertAll;
  var $addAll = dartx.addAll;
  var $insert = dartx.insert;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $removeRange = dartx.removeRange;
  var $remove = dartx.remove;
  var $cast = dartx.cast;
  var $keys = dartx.keys;
  var $values = dartx.values;
  var $containsValue = dartx.containsValue;
  var $putIfAbsent = dartx.putIfAbsent;
  var $clear = dartx.clear;
  var $entries = dartx.entries;
  var $addEntries = dartx.addEntries;
  var $map = dartx.map;
  var $update = dartx.update;
  var $updateAll = dartx.updateAll;
  var $removeWhere = dartx.removeWhere;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $setAll = dartx.setAll;
  var $setRange = dartx.setRange;
  var $replaceRange = dartx.replaceRange;
  var DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality$.DefaultEquality$(core.Null)))();
  var IdentityEqualityOfNull = () => (IdentityEqualityOfNull = dart.constFn(equality$.IdentityEquality$(core.Null)))();
  var _EditL = () => (_EditL = dart.constFn(dart.legacy(differs._Edit)))();
  var MapChangeRecordOfNull$Null = () => (MapChangeRecordOfNull$Null = dart.constFn(records$.MapChangeRecord$(core.Null, core.Null)))();
  var MapChangeRecordLOfNull$Null = () => (MapChangeRecordLOfNull$Null = dart.constFn(dart.legacy(MapChangeRecordOfNull$Null())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var ListOfListLOfintL = () => (ListOfListLOfintL = dart.constFn(core.List$(ListLOfintL())))();
  var JSArrayOf_EditL = () => (JSArrayOf_EditL = dart.constFn(_interceptors.JSArray$(_EditL())))();
  var ListChangeRecordOfNull = () => (ListChangeRecordOfNull = dart.constFn(records$.ListChangeRecord$(core.Null)))();
  var ListChangeRecordLOfNull = () => (ListChangeRecordLOfNull = dart.constFn(dart.legacy(ListChangeRecordOfNull())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var ChangeRecordL = () => (ChangeRecordL = dart.constFn(dart.legacy(records$.ChangeRecord)))();
  var ChangeRecordsOfChangeRecordL = () => (ChangeRecordsOfChangeRecordL = dart.constFn(records$.ChangeRecords$(ChangeRecordL())))();
  var ChangeRecordsLOfChangeRecordL = () => (ChangeRecordsLOfChangeRecordL = dart.constFn(dart.legacy(ChangeRecordsOfChangeRecordL())))();
  var ListEqualityOfChangeRecordL = () => (ListEqualityOfChangeRecordL = dart.constFn(equality$.ListEquality$(ChangeRecordL())))();
  var ListChangeRecordL = () => (ListChangeRecordL = dart.constFn(dart.legacy(records$.ListChangeRecord)))();
  var PropertyChangeRecordL = () => (PropertyChangeRecordL = dart.constFn(dart.legacy(records$.PropertyChangeRecord)))();
  var ObservableOfChangeRecordL = () => (ObservableOfChangeRecordL = dart.constFn(observable.Observable$(ChangeRecordL())))();
  var ObservableLOfChangeRecordL = () => (ObservableLOfChangeRecordL = dart.constFn(dart.legacy(ObservableOfChangeRecordL())))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var VoidToObservableMapLOfKL$VL = () => (VoidToObservableMapLOfKL$VL = dart.constFn(dart.gFnType((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var ObservableMapOfKL$VL = () => (ObservableMapOfKL$VL = dart.constFn(observable_map.ObservableMap$(KL(), VL())))();
    var ObservableMapLOfKL$VL = () => (ObservableMapLOfKL$VL = dart.constFn(dart.legacy(ObservableMapOfKL$VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    return [ObservableMapLOfKL$VL(), []];
  })))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var VoidToObservableListLOfTL = () => (VoidToObservableListLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ObservableListOfTL = () => (ObservableListOfTL = dart.constFn(observable_list.ObservableList$(TL())))();
    var ObservableListLOfTL = () => (ObservableListLOfTL = dart.constFn(dart.legacy(ObservableListOfTL())))();
    return [ObservableListLOfTL(), []];
  })))();
  var dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var ObservableMapL = () => (ObservableMapL = dart.constFn(dart.legacy(observable_map.ObservableMap)))();
  var ObservableListL = () => (ObservableListL = dart.constFn(dart.legacy(observable_list.ObservableList)))();
  var SplayTreeMapL = () => (SplayTreeMapL = dart.constFn(dart.legacy(collection.SplayTreeMap)))();
  var LinkedHashMapL = () => (LinkedHashMapL = dart.constFn(dart.legacy(collection.LinkedHashMap)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var PropertyChangeRecordOfNull = () => (PropertyChangeRecordOfNull = dart.constFn(records$.PropertyChangeRecord$(core.Null)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var SetL = () => (SetL = dart.constFn(dart.legacy(core.Set)))();
  const CT = Object.create(null);
  var L3 = "package:observable/src/records.dart";
  var L7 = "package:observable/src/change_notifier.dart";
  var L5 = "package:observable/src/observable.dart";
  var L6 = "package:observable/src/observable_map.dart";
  var L1 = "org-dartlang-app:///packages/observable/src/differs/list_differ.dart";
  var L4 = "org-dartlang-app:///packages/observable/src/records/list_change_record.dart";
  var L2 = "org-dartlang-app:///packages/observable/src/internal.dart";
  var L8 = "package:observable/src/observable_list.dart";
  var L0 = "package:observable/src/differs.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: IdentityEqualityOfNull().prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: differs._Edit.prototype,
        [_name$]: "_Edit.leave",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: differs._Edit.prototype,
        [_name$]: "_Edit.update",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: differs._Edit.prototype,
        [_name$]: "_Edit.add",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: differs._Edit.prototype,
        [_name$]: "_Edit.delete",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], _EditL());
    },
    get C7() {
      return C7 = dart.constList([], MapChangeRecordLOfNull$Null());
    },
    get C8() {
      return C8 = dart.constList([], ListChangeRecordLOfNull());
    },
    get C9() {
      return C9 = dart.constList([], core.Null);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ChangeRecordsOfChangeRecordL().prototype,
        [DelegatingIterable__base]: C9 || CT.C9,
        [ChangeRecords__delegate]: C9 || CT.C9,
        [ChangeRecords__isAny]: true
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ChangeRecordsOfChangeRecordL().prototype,
        [DelegatingIterable__base]: C9 || CT.C9,
        [ChangeRecords__delegate]: C9 || CT.C9,
        [ChangeRecords__isAny]: false
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ListEqualityOfChangeRecordL().prototype,
        [ListEquality__elementEquality]: C0 || CT.C0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: equality$.ListEquality.prototype,
        [ListEquality__elementEquality]: C0 || CT.C0
      });
    },
    get C14() {
      return C14 = dart.const(new _internal.Symbol.new('length'));
    },
    get C15() {
      return C15 = dart.const(new _internal.Symbol.new('keys'));
    },
    get C16() {
      return C16 = dart.const(new _internal.Symbol.new('values'));
    },
    get C17() {
      return C17 = dart.const(new _js_helper.PrivateSymbol.new('_isNotGeneric', _isNotGeneric$));
    },
    get C18() {
      return C18 = dart.const(new _js_helper.PrivateSymbol.new('_delegate', _delegate$0));
    },
    get C19() {
      return C19 = dart.const(new _internal.Symbol.new('isEmpty'));
    },
    get C20() {
      return C20 = dart.const(new _internal.Symbol.new('isNotEmpty'));
    }
  }, false);
  const _is_Differ_default = Symbol('_is_Differ_default');
  differs.Differ$ = dart.generic(E => {
    class Differ extends core.Object {}
    (Differ.new = function() {
      ;
    }).prototype = Differ.prototype;
    dart.addTypeTests(Differ);
    Differ.prototype[_is_Differ_default] = true;
    dart.addTypeCaches(Differ);
    dart.setLibraryUri(Differ, L0);
    return Differ;
  });
  differs.Differ = differs.Differ$();
  dart.addTypeTests(differs.Differ, _is_Differ_default);
  var C0;
  var C1;
  var _equality = dart.privateName(differs, "_equality");
  const _is_EqualityDiffer_default = Symbol('_is_EqualityDiffer_default');
  var _equality$ = dart.privateName(differs, "EqualityDiffer._equality");
  differs.EqualityDiffer$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    class EqualityDiffer extends core.Object {
      get [_equality]() {
        return this[_equality$];
      }
      set [_equality](value) {
        super[_equality] = value;
      }
      diff(oldValue, newValue) {
        EL().as(oldValue);
        EL().as(newValue);
        return dart.test(this[_equality].equals(oldValue, newValue)) ? records$.ChangeRecord.NONE : records$.ChangeRecord.ANY;
      }
    }
    (EqualityDiffer.new = function(_equality = C0 || CT.C0) {
      this[_equality$] = _equality;
      ;
    }).prototype = EqualityDiffer.prototype;
    (EqualityDiffer.identity = function() {
      this[_equality$] = C1 || CT.C1;
      ;
    }).prototype = EqualityDiffer.prototype;
    dart.addTypeTests(EqualityDiffer);
    EqualityDiffer.prototype[_is_EqualityDiffer_default] = true;
    dart.addTypeCaches(EqualityDiffer);
    EqualityDiffer[dart.implements] = () => [differs.Differ$(dart.legacy(E))];
    dart.setMethodSignature(EqualityDiffer, () => ({
      __proto__: dart.getMethods(EqualityDiffer.__proto__),
      diff: dart.fnType(dart.legacy(core.List$(dart.legacy(records$.ChangeRecord))), [dart.legacy(core.Object), dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(EqualityDiffer, L0);
    dart.setFieldSignature(EqualityDiffer, () => ({
      __proto__: dart.getFields(EqualityDiffer.__proto__),
      [_equality]: dart.finalFieldType(dart.legacy(equality$.Equality$(dart.legacy(E))))
    }));
    return EqualityDiffer;
  });
  differs.EqualityDiffer = differs.EqualityDiffer$();
  dart.addTypeTests(differs.EqualityDiffer, _is_EqualityDiffer_default);
  const _is_ListDiffer_default = Symbol('_is_ListDiffer_default');
  var _equality$0 = dart.privateName(differs, "ListDiffer._equality");
  differs.ListDiffer$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var ListLOfEL = () => (ListLOfEL = dart.constFn(dart.legacy(ListOfEL())))();
    class ListDiffer extends core.Object {
      get [_equality]() {
        return this[_equality$0];
      }
      set [_equality](value) {
        super[_equality] = value;
      }
      diff(e1, e2) {
        ListLOfEL().as(e1);
        ListLOfEL().as(e2);
        return differs._calcSplices(EL(), e2, this[_equality], 0, e2[$length], e1, 0, e1[$length]);
      }
    }
    (ListDiffer.new = function(_equality = C0 || CT.C0) {
      this[_equality$0] = _equality;
      ;
    }).prototype = ListDiffer.prototype;
    dart.addTypeTests(ListDiffer);
    ListDiffer.prototype[_is_ListDiffer_default] = true;
    dart.addTypeCaches(ListDiffer);
    ListDiffer[dart.implements] = () => [differs.Differ$(dart.legacy(core.List$(dart.legacy(E))))];
    dart.setMethodSignature(ListDiffer, () => ({
      __proto__: dart.getMethods(ListDiffer.__proto__),
      diff: dart.fnType(dart.legacy(core.List$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E))))), [dart.legacy(core.Object), dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(ListDiffer, L0);
    dart.setFieldSignature(ListDiffer, () => ({
      __proto__: dart.getFields(ListDiffer.__proto__),
      [_equality]: dart.finalFieldType(dart.legacy(equality$.Equality$(dart.legacy(E))))
    }));
    return ListDiffer;
  });
  differs.ListDiffer = differs.ListDiffer$();
  dart.addTypeTests(differs.ListDiffer, _is_ListDiffer_default);
  var _name$ = dart.privateName(differs, "_name");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  differs._Edit = class _Edit extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (differs._Edit.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = differs._Edit.prototype;
  dart.addTypeTests(differs._Edit);
  dart.addTypeCaches(differs._Edit);
  dart.setMethodSignature(differs._Edit, () => ({
    __proto__: dart.getMethods(differs._Edit.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(differs._Edit, L0);
  dart.setFieldSignature(differs._Edit, () => ({
    __proto__: dart.getFields(differs._Edit.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(differs._Edit, ['toString']);
  differs._Edit.leave = C2 || CT.C2;
  differs._Edit.update = C3 || CT.C3;
  differs._Edit.add = C4 || CT.C4;
  differs._Edit.delete = C5 || CT.C5;
  differs._Edit.values = C6 || CT.C6;
  var C7;
  const _is_MapDiffer_default = Symbol('_is_MapDiffer_default');
  differs.MapDiffer$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var MapChangeRecordOfKL$VL = () => (MapChangeRecordOfKL$VL = dart.constFn(records$.MapChangeRecord$(KL(), VL())))();
    var MapChangeRecordLOfKL$VL = () => (MapChangeRecordLOfKL$VL = dart.constFn(dart.legacy(MapChangeRecordOfKL$VL())))();
    var JSArrayOfMapChangeRecordLOfKL$VL = () => (JSArrayOfMapChangeRecordLOfKL$VL = dart.constFn(_interceptors.JSArray$(MapChangeRecordLOfKL$VL())))();
    var KLAndVLToNull = () => (KLAndVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), VL()])))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class MapDiffer extends core.Object {
      diff(oldValue, newValue) {
        MapLOfKL$VL().as(oldValue);
        MapLOfKL$VL().as(newValue);
        if (oldValue == newValue) {
          return C7 || CT.C7;
        }
        let changes = JSArrayOfMapChangeRecordLOfKL$VL().of([]);
        oldValue[$forEach](dart.fn((oldK, oldV) => {
          let newV = newValue[$_get](oldK);
          if (newV == null && !dart.test(newValue[$containsKey](oldK))) {
            changes[$add](new (MapChangeRecordOfKL$VL()).remove(oldK, oldV));
          } else if (!dart.equals(newV, oldV)) {
            changes[$add](new (MapChangeRecordOfKL$VL()).new(oldK, oldV, newV));
          }
        }, KLAndVLToNull()));
        newValue[$forEach](dart.fn((newK, newV) => {
          if (!dart.test(oldValue[$containsKey](newK))) {
            changes[$add](new (MapChangeRecordOfKL$VL()).insert(newK, newV));
          }
        }, KLAndVLToNull()));
        return internal.freezeInDevMode(MapChangeRecordLOfKL$VL(), changes);
      }
    }
    (MapDiffer.new = function() {
      ;
    }).prototype = MapDiffer.prototype;
    dart.addTypeTests(MapDiffer);
    MapDiffer.prototype[_is_MapDiffer_default] = true;
    dart.addTypeCaches(MapDiffer);
    MapDiffer[dart.implements] = () => [differs.Differ$(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))))];
    dart.setMethodSignature(MapDiffer, () => ({
      __proto__: dart.getMethods(MapDiffer.__proto__),
      diff: dart.fnType(dart.legacy(core.List$(dart.legacy(records$.MapChangeRecord$(dart.legacy(K), dart.legacy(V))))), [dart.legacy(core.Object), dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(MapDiffer, L0);
    return MapDiffer;
  });
  differs.MapDiffer = differs.MapDiffer$();
  dart.addTypeTests(differs.MapDiffer, _is_MapDiffer_default);
  var C8;
  differs._calcEditDistance = function _calcEditDistance(E, current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let rowCount = dart.notNull(oldEnd) - dart.notNull(oldStart) + 1;
    let columnCount = dart.notNull(currentEnd) - dart.notNull(currentStart) + 1;
    let distances = ListOfListLOfintL().new(rowCount);
    for (let i = 0; i < rowCount; i = i + 1) {
      distances[$_set](i, ListOfintL().new(columnCount));
      distances[$_get](i)[$_set](0, i);
    }
    for (let j = 0; j < columnCount; j = j + 1) {
      distances[$_get](0)[$_set](j, j);
    }
    for (let i = 1; i < rowCount; i = i + 1) {
      for (let j = 1; j < columnCount; j = j + 1) {
        if (dart.equals(old[$_get](dart.notNull(oldStart) + i - 1), current[$_get](dart.notNull(currentStart) + j - 1))) {
          distances[$_get](i)[$_set](j, distances[$_get](i - 1)[$_get](j - 1));
        } else {
          let north = dart.notNull(distances[$_get](i - 1)[$_get](j)) + 1;
          let west = dart.notNull(distances[$_get](i)[$_get](j - 1)) + 1;
          distances[$_get](i)[$_set](j, math.min(intL(), north, west));
        }
      }
    }
    return distances;
  };
  differs._spliceOperationsFromEditDistances = function _spliceOperationsFromEditDistances(distances) {
    let i = dart.notNull(distances[$length]) - 1;
    let j = dart.notNull(distances[$_get](0)[$length]) - 1;
    let current = distances[$_get](i)[$_get](j);
    let edits = JSArrayOf_EditL().of([]);
    while (i > 0 || j > 0) {
      if (i === 0) {
        edits[$add](differs._Edit.add);
        j = j - 1;
        continue;
      }
      if (j === 0) {
        edits[$add](differs._Edit.delete);
        i = i - 1;
        continue;
      }
      let northWest = distances[$_get](i - 1)[$_get](j - 1);
      let west = distances[$_get](i - 1)[$_get](j);
      let north = distances[$_get](i)[$_get](j - 1);
      let min = math.min(intL(), math.min(intL(), west, north), northWest);
      if (min === northWest) {
        if (northWest == current) {
          edits[$add](differs._Edit.leave);
        } else {
          edits[$add](differs._Edit.update);
          current = northWest;
        }
        i = i - 1;
        j = j - 1;
      } else if (min === west) {
        edits[$add](differs._Edit.delete);
        i = i - 1;
        current = west;
      } else {
        edits[$add](differs._Edit.add);
        j = j - 1;
        current = north;
      }
    }
    return edits[$reversed];
  };
  differs._sharedPrefix = function _sharedPrefix(E, equality, e1, e2, searchLength) {
    for (let i = 0; i < dart.notNull(searchLength); i = i + 1) {
      if (!dart.test(equality.equals(e1[$_get](i), e2[$_get](i)))) {
        return i;
      }
    }
    return searchLength;
  };
  differs._sharedSuffix = function _sharedSuffix(E, equality, e1, e2, searchLength) {
    let index1 = e1[$length];
    let index2 = e2[$length];
    let count = 0;
    while (count < dart.notNull(searchLength) && dart.test(equality.equals(e1[$_get](index1 = dart.notNull(index1) - 1), e2[$_get](index2 = dart.notNull(index2) - 1)))) {
      count = count + 1;
    }
    return count;
  };
  differs._calcSplices = function _calcSplices(E, current, equality, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    let minLength = math.min(intL(), dart.notNull(currentEnd) - dart.notNull(currentStart), dart.notNull(oldEnd) - dart.notNull(oldStart));
    if (currentStart === 0 && oldStart === 0) {
      prefixCount = differs._sharedPrefix(dart.legacy(E), equality, current, old, minLength);
    }
    if (currentEnd == current[$length] && oldEnd == old[$length]) {
      suffixCount = differs._sharedSuffix(dart.legacy(E), equality, current, old, minLength - dart.notNull(prefixCount));
    }
    currentStart = dart.notNull(currentStart) + dart.notNull(prefixCount);
    oldStart = dart.notNull(oldStart) + dart.notNull(prefixCount);
    currentEnd = dart.notNull(currentEnd) - dart.notNull(suffixCount);
    oldEnd = dart.notNull(oldEnd) - dart.notNull(suffixCount);
    if (dart.notNull(currentEnd) - dart.notNull(currentStart) === 0 && dart.notNull(oldEnd) - dart.notNull(oldStart) === 0) {
      return C8 || CT.C8;
    }
    if (currentStart == currentEnd) {
      let spliceRemoved = old[$sublist](oldStart, oldEnd);
      return _interceptors.JSArray$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))).of([new (records$.ListChangeRecord$(dart.legacy(E))).remove(current, currentStart, spliceRemoved)]);
    }
    if (oldStart == oldEnd) {
      return _interceptors.JSArray$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))).of([new (records$.ListChangeRecord$(dart.legacy(E))).add(current, currentStart, dart.notNull(currentEnd) - dart.notNull(currentStart))]);
    }
    let ops = differs._spliceOperationsFromEditDistances(differs._calcEditDistance(dart.legacy(E), current, currentStart, currentEnd, old, oldStart, oldEnd));
    let spliceIndex = -1;
    let spliceRemovals = _interceptors.JSArray$(dart.legacy(E)).of([]);
    let spliceAddedCount = 0;
    function hasSplice() {
      return spliceIndex !== -1;
    }
    dart.fn(hasSplice, VoidToboolL());
    function resetSplice() {
      spliceIndex = -1;
      spliceRemovals = _interceptors.JSArray$(dart.legacy(E)).of([]);
      spliceAddedCount = 0;
    }
    dart.fn(resetSplice, VoidTovoid());
    let splices = _interceptors.JSArray$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))).of([]);
    let index = currentStart;
    let oldIndex = oldStart;
    for (let op of ops) {
      switch (op) {
        case C2 || CT.C2:
        {
          if (dart.test(hasSplice())) {
            splices[$add](records$.ListChangeRecord$(dart.legacy(E)).new(current, spliceIndex, {removed: spliceRemovals, addedCount: spliceAddedCount}));
            resetSplice();
          }
          index = dart.notNull(index) + 1;
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
        case C3 || CT.C3:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceAddedCount = spliceAddedCount + 1;
          index = dart.notNull(index) + 1;
          spliceRemovals[$add](old[$_get](oldIndex));
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
        case C4 || CT.C4:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceAddedCount = spliceAddedCount + 1;
          index = dart.notNull(index) + 1;
          break;
        }
        case C5 || CT.C5:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceRemovals[$add](old[$_get](oldIndex));
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
      }
    }
    if (dart.test(hasSplice())) {
      splices[$add](records$.ListChangeRecord$(dart.legacy(E)).new(current, spliceIndex, {removed: spliceRemovals, addedCount: spliceAddedCount}));
    }
    if (!dart.test(dart.fn(() => {
      splices = core.List$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))).unmodifiable(splices);
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L1, 306, 10, "() {\n    splices = new List<ListChangeRecord<E>>.unmodifiable(splices);\n    return true;\n  }()");
    return splices;
  };
  differs._intersect = function _intersect(start1, end1, start2, end2) {
    return dart.asNullableInt(math.min(intL(), end1, end2) - math.max(numL(), start1, start2));
  };
  differs._mergeSplices = function _mergeSplices(E, splices, record) {
    let t2, t1, t0, t2$, t1$, t0$;
    let spliceIndex = record.index;
    let spliceRemoved = record.removed;
    let spliceAdded = record.addedCount;
    let inserted = false;
    let insertionOffset = 0;
    for (let i = 0; i < dart.notNull(splices[$length]); i = i + 1) {
      let current = splices[$_get](i);
      current = (t0 = splices, t1 = i, t2 = records$.ListChangeRecord$(dart.legacy(E)).new(current.object, dart.notNull(current.index) + insertionOffset, {removed: current.removed, addedCount: current.addedCount}), t0[$_set](t1, t2), t2);
      if (inserted) continue;
      let intersectCount = differs._intersect(spliceIndex, dart.notNull(spliceIndex) + dart.notNull(spliceRemoved[$length]), current.index, dart.notNull(current.index) + dart.notNull(current.addedCount));
      if (dart.notNull(intersectCount) >= 0) {
        splices[$removeAt](i);
        i = i - 1;
        insertionOffset = insertionOffset - (dart.notNull(current.addedCount) - dart.notNull(current.removed[$length]));
        spliceAdded = dart.notNull(spliceAdded) + (dart.notNull(current.addedCount) - dart.notNull(intersectCount));
        let deleteCount = dart.notNull(spliceRemoved[$length]) + dart.notNull(current.removed[$length]) - dart.notNull(intersectCount);
        if (spliceAdded === 0 && deleteCount === 0) {
          inserted = true;
        } else {
          let removed = current.removed[$toList]();
          if (dart.notNull(spliceIndex) < dart.notNull(current.index)) {
            removed[$insertAll](0, spliceRemoved[$getRange](0, dart.notNull(current.index) - dart.notNull(spliceIndex)));
          }
          if (dart.notNull(spliceIndex) + dart.notNull(spliceRemoved[$length]) > dart.notNull(current.index) + dart.notNull(current.addedCount)) {
            removed[$addAll](spliceRemoved[$getRange](dart.notNull(current.index) + dart.notNull(current.addedCount) - dart.notNull(spliceIndex), spliceRemoved[$length]));
          }
          spliceRemoved = removed;
          if (dart.notNull(current.index) < dart.notNull(spliceIndex)) {
            spliceIndex = current.index;
          }
        }
      } else if (dart.notNull(spliceIndex) < dart.notNull(current.index)) {
        inserted = true;
        splices[$insert](i, records$.ListChangeRecord$(dart.legacy(E)).new(record.object, spliceIndex, {removed: spliceRemoved, addedCount: spliceAdded}));
        i = i + 1;
        let offset = dart.notNull(spliceAdded) - dart.notNull(spliceRemoved[$length]);
        current = (t0$ = splices, t1$ = i, t2$ = records$.ListChangeRecord$(dart.legacy(E)).new(current.object, dart.notNull(current.index) + offset, {removed: current.removed, addedCount: current.addedCount}), t0$[$_set](t1$, t2$), t2$);
        insertionOffset = insertionOffset + offset;
      }
    }
    if (!inserted) {
      splices[$add](records$.ListChangeRecord$(dart.legacy(E)).new(record.object, spliceIndex, {removed: spliceRemoved, addedCount: spliceAdded}));
    }
  };
  differs._createInitialSplices = function _createInitialSplices(E, list, records) {
    let splices = _interceptors.JSArray$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))).of([]);
    for (let i = 0; i < dart.notNull(records[$length]); i = i + 1) {
      differs._mergeSplices(dart.legacy(E), splices, records[$_get](i));
    }
    return splices;
  };
  differs.projectListSplices = function projectListSplices(E, list, records, equality = null) {
    equality == null ? equality = new (equality$.DefaultEquality$(dart.legacy(E))).new() : null;
    if (dart.notNull(records[$length]) <= 1) return records;
    let splices = _interceptors.JSArray$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))).of([]);
    let initialSplices = differs._createInitialSplices(dart.legacy(E), list, records);
    for (let splice of initialSplices) {
      if (splice.addedCount === 1 && splice.removed[$length] === 1) {
        if (!dart.equals(splice.removed[$_get](0), list[$_get](splice.index))) {
          splices[$add](splice);
        }
        continue;
      }
      splices[$addAll](differs._calcSplices(dart.legacy(E), list, equality, splice.index, dart.notNull(splice.index) + dart.notNull(splice.addedCount), splice.removed, 0, splice.removed[$length]));
    }
    return splices;
  };
  var C9;
  internal.freezeInDevMode = function freezeInDevMode(E, list) {
    if (list == null) return C9 || CT.C9;
    if (!dart.test(dart.fn(() => {
      list = core.List$(dart.legacy(E)).unmodifiable(list);
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L2, 7, 10, "() {\n    list = new List<E>.unmodifiable(list);\n    return true;\n  }()");
    return list;
  };
  var DelegatingIterable__base = dart.privateName(wrappers, "DelegatingIterable._base");
  var ChangeRecords__delegate = dart.privateName(records$, "ChangeRecords._delegate");
  var ChangeRecords__isAny = dart.privateName(records$, "ChangeRecords._isAny");
  var C10;
  var C11;
  records$.ChangeRecord = class ChangeRecord extends core.Object {};
  (records$.ChangeRecord.new = function() {
    ;
  }).prototype = records$.ChangeRecord.prototype;
  dart.addTypeTests(records$.ChangeRecord);
  dart.addTypeCaches(records$.ChangeRecord);
  dart.setLibraryUri(records$.ChangeRecord, L3);
  dart.defineLazy(records$.ChangeRecord, {
    /*records$.ChangeRecord.ANY*/get ANY() {
      return C10 || CT.C10;
    },
    /*records$.ChangeRecord.NONE*/get NONE() {
      return C11 || CT.C11;
    }
  }, true);
  var _isAny = dart.privateName(records$, "_isAny");
  var _delegate = dart.privateName(records$, "_delegate");
  const _is_ChangeRecords_default = Symbol('_is_ChangeRecords_default');
  var ListEquality__elementEquality = dart.privateName(equality$, "ListEquality._elementEquality");
  var C12;
  records$.ChangeRecords$ = dart.generic(RecordType => {
    var RecordTypeL = () => (RecordTypeL = dart.constFn(dart.legacy(RecordType)))();
    var ListOfRecordTypeL = () => (ListOfRecordTypeL = dart.constFn(core.List$(RecordTypeL())))();
    class ChangeRecords extends wrappers.DelegatingList$(dart.legacy(RecordType)) {
      get [_isAny]() {
        return this[_isAny$];
      }
      set [_isAny](value) {
        super[_isAny] = value;
      }
      get [_delegate]() {
        return this[_delegate$];
      }
      set [_delegate](value) {
        super[_delegate] = value;
      }
      get hashCode() {
        return hash.hash2(this[_delegate], this[_isAny]);
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || ChangeRecordsLOfChangeRecordL().is(other) && dart.equals(this.runtimeType, dart.runtimeType(other)) && (dart.test(this[_isAny]) && dart.test(other[_isAny]) || !dart.test(this[_isAny]) && !dart.test(other[_isAny]) && dart.test(records$.ChangeRecords._listEquals.equals(this[_delegate], other[_delegate])));
      }
      toString() {
        return dart.test(this[_isAny]) ? "ChangeRecords.any" : "ChangeRecords(" + dart.str(this[_delegate]) + ")";
      }
    }
    (ChangeRecords.any = function() {
      ChangeRecords.__.call(this, C9 || CT.C9, true);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.none = function() {
      ChangeRecords.__.call(this, C9 || CT.C9, false);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.wrap = function(list) {
      ChangeRecords.__.call(this, list, false);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.fromIterable = function(it) {
      ChangeRecords.__.call(this, ListOfRecordTypeL().unmodifiable(it), false);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.__ = function(_delegate, _isAny) {
      this[_delegate$] = _delegate;
      this[_isAny$] = _isAny;
      ChangeRecords.__proto__.new.call(this, _delegate);
      ;
    }).prototype = ChangeRecords.prototype;
    dart.addTypeTests(ChangeRecords);
    ChangeRecords.prototype[_is_ChangeRecords_default] = true;
    dart.addTypeCaches(ChangeRecords);
    const _isAny$ = ChangeRecords__isAny;
    const _delegate$ = ChangeRecords__delegate;
    dart.setMethodSignature(ChangeRecords, () => ({
      __proto__: dart.getMethods(ChangeRecords.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(ChangeRecords, () => ({
      __proto__: dart.getGetters(ChangeRecords.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(ChangeRecords, L3);
    dart.setFieldSignature(ChangeRecords, () => ({
      __proto__: dart.getFields(ChangeRecords.__proto__),
      [_isAny]: dart.finalFieldType(dart.legacy(core.bool)),
      [_delegate]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(RecordType))))
    }));
    dart.defineExtensionMethods(ChangeRecords, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ChangeRecords, ['hashCode']);
    return ChangeRecords;
  });
  records$.ChangeRecords = records$.ChangeRecords$();
  dart.defineLazy(records$.ChangeRecords, {
    /*records$.ChangeRecords._listEquals*/get _listEquals() {
      return C12 || CT.C12;
    }
  }, true);
  dart.addTypeTests(records$.ChangeRecords, _is_ChangeRecords_default);
  var _assertValidState = dart.privateName(records$, "_assertValidState");
  var C13;
  const _is_ListChangeRecord_default = Symbol('_is_ListChangeRecord_default');
  var addedCount$ = dart.privateName(records$, "ListChangeRecord.addedCount");
  var index$ = dart.privateName(records$, "ListChangeRecord.index");
  var object$ = dart.privateName(records$, "ListChangeRecord.object");
  var removed$ = dart.privateName(records$, "ListChangeRecord.removed");
  records$.ListChangeRecord$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var UnmodifiableListViewOfEL = () => (UnmodifiableListViewOfEL = dart.constFn(collection.UnmodifiableListView$(EL())))();
    var JSArrayOfEL = () => (JSArrayOfEL = dart.constFn(_interceptors.JSArray$(EL())))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var ListLOfEL = () => (ListLOfEL = dart.constFn(dart.legacy(ListOfEL())))();
    var ListChangeRecordOfEL = () => (ListChangeRecordOfEL = dart.constFn(records$.ListChangeRecord$(EL())))();
    var ListChangeRecordLOfEL = () => (ListChangeRecordLOfEL = dart.constFn(dart.legacy(ListChangeRecordOfEL())))();
    class ListChangeRecord extends core.Object {
      get addedCount() {
        return this[addedCount$];
      }
      set addedCount(value) {
        super.addedCount = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get object() {
        return this[object$];
      }
      set object(value) {
        super.object = value;
      }
      get removed() {
        return this[removed$];
      }
      set removed(value) {
        super.removed = value;
      }
      static new(object, index, opts) {
        let t0;
        let removed = opts && 'removed' in opts ? opts.removed : null;
        let addedCount = opts && 'addedCount' in opts ? opts.addedCount : 0;
        return new (records$.ListChangeRecord$(dart.legacy(E))).__(object, index, (t0 = removed, t0 == null ? new (collection.UnmodifiableListView$(dart.legacy(E))).new(_interceptors.JSArray$(dart.legacy(E)).of([])) : t0), addedCount);
      }
      get added() {
        return this.addedCount === 0 ? C9 || CT.C9 : this.object[$getRange](this.index, dart.notNull(this.index) + dart.notNull(this.addedCount));
      }
      apply(list) {
        let t0;
        ListLOfEL().as(list);
        t0 = list;
        (() => {
          t0[$removeRange](this.index, dart.notNull(this.index) + dart.notNull(this.removed[$length]));
          t0[$insertAll](this.index, this.object[$getRange](this.index, dart.notNull(this.index) + dart.notNull(this.addedCount)));
          return t0;
        })();
      }
      [_assertValidState]() {
        if (!dart.test(dart.fn(() => {
          if (this.object == null) {
            dart.throw(new core.ArgumentError.notNull("object"));
          }
          if (this.index == null) {
            dart.throw(new core.ArgumentError.notNull("index"));
          }
          if (this.removed == null) {
            dart.throw(new core.ArgumentError.notNull("removed"));
          }
          if (this.addedCount == null || dart.notNull(this.addedCount) < 0) {
            dart.throw(new core.ArgumentError.new("Invalid `addedCount`: " + dart.str(this.addedCount)));
          }
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L4, 84, 12, "() {\n      if (object == null) {\n        throw new ArgumentError.notNull('object');\n      }\n      if (index == null) {\n        throw new ArgumentError.notNull('index');\n      }\n      if (removed == null) {\n        throw new ArgumentError.notNull('removed');\n      }\n      if (addedCount == null || addedCount < 0) {\n        throw new ArgumentError('Invalid `addedCount`: $addedCount');\n      }\n      return true;\n    }()");
      }
      indexChanged(reference) {
        if (dart.notNull(reference) < dart.notNull(this.index)) return false;
        if (this.addedCount != this.removed[$length]) return true;
        return dart.notNull(reference) < dart.notNull(this.index) + dart.notNull(this.addedCount);
      }
      _equals(o) {
        if (o == null) return false;
        if (ListChangeRecordLOfEL().is(o)) {
          return this.object == o.object && this.index == o.index && this.addedCount == o.addedCount && dart.test((C13 || CT.C13).equals(this.removed, o.removed));
        }
        return false;
      }
      get hashCode() {
        return hash.hash4(this.object, this.index, this.addedCount, (C13 || CT.C13).hash(this.removed));
      }
      toString() {
        return "#<" + dart.str(dart.wrapType(ListChangeRecordL())) + " index: " + dart.str(this.index) + ", " + "removed: " + dart.str(this.removed) + ", " + "addedCount: " + dart.str(this.addedCount) + ">";
      }
    }
    (ListChangeRecord.add = function(object, index, addedCount) {
      this[object$] = object;
      this[index$] = index;
      this[addedCount$] = addedCount;
      this[removed$] = new (UnmodifiableListViewOfEL()).new(JSArrayOfEL().of([]));
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.remove = function(object, index, removed) {
      this[object$] = object;
      this[index$] = index;
      this[removed$] = internal.freezeInDevMode(EL(), removed);
      this[addedCount$] = 0;
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.replace = function(object, index, removed, addedCount = null) {
      let t0;
      this[object$] = object;
      this[index$] = index;
      this[removed$] = internal.freezeInDevMode(EL(), removed);
      this[addedCount$] = (t0 = addedCount, t0 == null ? removed[$length] : t0);
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.__ = function(object, index, removed, addedCount) {
      this[object$] = object;
      this[index$] = index;
      this[removed$] = removed;
      this[addedCount$] = addedCount;
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    dart.addTypeTests(ListChangeRecord);
    ListChangeRecord.prototype[_is_ListChangeRecord_default] = true;
    dart.addTypeCaches(ListChangeRecord);
    ListChangeRecord[dart.implements] = () => [records$.ChangeRecord];
    dart.setMethodSignature(ListChangeRecord, () => ({
      __proto__: dart.getMethods(ListChangeRecord.__proto__),
      apply: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [_assertValidState]: dart.fnType(dart.void, []),
      indexChanged: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(ListChangeRecord, () => ({
      __proto__: dart.getGetters(ListChangeRecord.__proto__),
      added: dart.legacy(core.Iterable$(dart.legacy(E))),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(ListChangeRecord, L3);
    dart.setFieldSignature(ListChangeRecord, () => ({
      __proto__: dart.getFields(ListChangeRecord.__proto__),
      addedCount: dart.finalFieldType(dart.legacy(core.int)),
      index: dart.finalFieldType(dart.legacy(core.int)),
      object: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(E)))),
      removed: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(E))))
    }));
    dart.defineExtensionMethods(ListChangeRecord, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ListChangeRecord, ['hashCode']);
    return ListChangeRecord;
  });
  records$.ListChangeRecord = records$.ListChangeRecord$();
  dart.addTypeTests(records$.ListChangeRecord, _is_ListChangeRecord_default);
  const _is_MapChangeRecord_default = Symbol('_is_MapChangeRecord_default');
  var key$ = dart.privateName(records$, "MapChangeRecord.key");
  var oldValue$ = dart.privateName(records$, "MapChangeRecord.oldValue");
  var newValue$ = dart.privateName(records$, "MapChangeRecord.newValue");
  var isInsert = dart.privateName(records$, "MapChangeRecord.isInsert");
  var isRemove = dart.privateName(records$, "MapChangeRecord.isRemove");
  records$.MapChangeRecord$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var MapChangeRecordOfKL$VL = () => (MapChangeRecordOfKL$VL = dart.constFn(records$.MapChangeRecord$(KL(), VL())))();
    var MapChangeRecordLOfKL$VL = () => (MapChangeRecordLOfKL$VL = dart.constFn(dart.legacy(MapChangeRecordOfKL$VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class MapChangeRecord extends core.Object {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
      get oldValue() {
        return this[oldValue$];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get newValue() {
        return this[newValue$];
      }
      set newValue(value) {
        super.newValue = value;
      }
      get isInsert() {
        return this[isInsert];
      }
      set isInsert(value) {
        super.isInsert = value;
      }
      get isRemove() {
        return this[isRemove];
      }
      set isRemove(value) {
        super.isRemove = value;
      }
      apply(map) {
        MapLOfKL$VL().as(map);
        if (dart.test(this.isRemove)) {
          map[$remove](this.key);
        } else {
          map[$_set](this.key, this.newValue);
        }
      }
      _equals(o) {
        if (o == null) return false;
        if (MapChangeRecordLOfKL$VL().is(o)) {
          return dart.equals(this.key, o.key) && dart.equals(this.oldValue, o.oldValue) && dart.equals(this.newValue, o.newValue) && dart.equals(this.isInsert, o.isInsert) && dart.equals(this.isRemove, o.isRemove);
        }
        return false;
      }
      get hashCode() {
        return hash.hashObjects([this.key, this.oldValue, this.newValue, this.isInsert, this.isRemove]);
      }
      toString() {
        let kind = dart.test(this.isInsert) ? "insert" : dart.test(this.isRemove) ? "remove" : "set";
        return "#<MapChangeRecord " + kind + " " + dart.str(this.key) + " from " + dart.str(this.oldValue) + " to " + dart.str(this.newValue);
      }
    }
    (MapChangeRecord.new = function(key, oldValue, newValue) {
      this[key$] = key;
      this[oldValue$] = oldValue;
      this[newValue$] = newValue;
      this[isInsert] = false;
      this[isRemove] = false;
      ;
    }).prototype = MapChangeRecord.prototype;
    (MapChangeRecord.insert = function(key, newValue) {
      this[key$] = key;
      this[newValue$] = newValue;
      this[isInsert] = true;
      this[isRemove] = false;
      this[oldValue$] = null;
      ;
    }).prototype = MapChangeRecord.prototype;
    (MapChangeRecord.remove = function(key, oldValue) {
      this[key$] = key;
      this[oldValue$] = oldValue;
      this[isInsert] = false;
      this[isRemove] = true;
      this[newValue$] = null;
      ;
    }).prototype = MapChangeRecord.prototype;
    dart.addTypeTests(MapChangeRecord);
    MapChangeRecord.prototype[_is_MapChangeRecord_default] = true;
    dart.addTypeCaches(MapChangeRecord);
    MapChangeRecord[dart.implements] = () => [records$.ChangeRecord];
    dart.setMethodSignature(MapChangeRecord, () => ({
      __proto__: dart.getMethods(MapChangeRecord.__proto__),
      apply: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(MapChangeRecord, () => ({
      __proto__: dart.getGetters(MapChangeRecord.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(MapChangeRecord, L3);
    dart.setFieldSignature(MapChangeRecord, () => ({
      __proto__: dart.getFields(MapChangeRecord.__proto__),
      key: dart.finalFieldType(dart.legacy(K)),
      oldValue: dart.finalFieldType(dart.legacy(V)),
      newValue: dart.finalFieldType(dart.legacy(V)),
      isInsert: dart.finalFieldType(dart.legacy(core.bool)),
      isRemove: dart.finalFieldType(dart.legacy(core.bool))
    }));
    dart.defineExtensionMethods(MapChangeRecord, ['_equals', 'toString']);
    dart.defineExtensionAccessors(MapChangeRecord, ['hashCode']);
    return MapChangeRecord;
  });
  records$.MapChangeRecord = records$.MapChangeRecord$();
  dart.addTypeTests(records$.MapChangeRecord, _is_MapChangeRecord_default);
  const _is_PropertyChangeRecord_default = Symbol('_is_PropertyChangeRecord_default');
  var object$0 = dart.privateName(records$, "PropertyChangeRecord.object");
  var name$ = dart.privateName(records$, "PropertyChangeRecord.name");
  var oldValue$0 = dart.privateName(records$, "PropertyChangeRecord.oldValue");
  var newValue$0 = dart.privateName(records$, "PropertyChangeRecord.newValue");
  records$.PropertyChangeRecord$ = dart.generic(T => {
    class PropertyChangeRecord extends core.Object {
      get object() {
        return this[object$0];
      }
      set object(value) {
        super.object = value;
      }
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get oldValue() {
        return this[oldValue$0];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get newValue() {
        return this[newValue$0];
      }
      set newValue(value) {
        super.newValue = value;
      }
      toString() {
        return "#<" + dart.str(dart.wrapType(PropertyChangeRecordL())) + " " + dart.str(this.name) + " from " + dart.str(this.oldValue) + " to: " + dart.str(this.newValue);
      }
    }
    (PropertyChangeRecord.new = function(object, name, oldValue, newValue) {
      this[object$0] = object;
      this[name$] = name;
      this[oldValue$0] = oldValue;
      this[newValue$0] = newValue;
      ;
    }).prototype = PropertyChangeRecord.prototype;
    dart.addTypeTests(PropertyChangeRecord);
    PropertyChangeRecord.prototype[_is_PropertyChangeRecord_default] = true;
    dart.addTypeCaches(PropertyChangeRecord);
    PropertyChangeRecord[dart.implements] = () => [records$.ChangeRecord];
    dart.setMethodSignature(PropertyChangeRecord, () => ({
      __proto__: dart.getMethods(PropertyChangeRecord.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setLibraryUri(PropertyChangeRecord, L3);
    dart.setFieldSignature(PropertyChangeRecord, () => ({
      __proto__: dart.getFields(PropertyChangeRecord.__proto__),
      object: dart.finalFieldType(dart.legacy(core.Object)),
      name: dart.finalFieldType(dart.legacy(core.Symbol)),
      oldValue: dart.finalFieldType(dart.legacy(T)),
      newValue: dart.finalFieldType(dart.legacy(T))
    }));
    dart.defineExtensionMethods(PropertyChangeRecord, ['toString']);
    return PropertyChangeRecord;
  });
  records$.PropertyChangeRecord = records$.PropertyChangeRecord$();
  dart.addTypeTests(records$.PropertyChangeRecord, _is_PropertyChangeRecord_default);
  to_observable.toObservable = function toObservable(value, opts) {
    let deep = opts && 'deep' in opts ? opts.deep : true;
    return dart.test(deep) ? to_observable._toObservableDeep(value) : to_observable._toObservableShallow(value);
  };
  to_observable.toObservableList = function toObservableList(T, value, opts) {
    let deep = opts && 'deep' in opts ? opts.deep : true;
    if (ObservableLOfChangeRecordL().is(value)) return dart.legacy(observable_list.ObservableList$(dart.legacy(T))).as(value);
    return dart.legacy(observable_list.ObservableList$(dart.legacy(T))).as(dart.test(deep) ? to_observable._toObservableDeepIterable(value) : to_observable._toObservableShallow(value));
  };
  to_observable.toObservableMap = function toObservableMap(K, V, value, opts) {
    let deep = opts && 'deep' in opts ? opts.deep : true;
    if (ObservableLOfChangeRecordL().is(value)) return dart.legacy(observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V))).as(value);
    return dart.legacy(observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V))).as(dart.test(deep) ? to_observable._toObservableDeepMap(value) : to_observable._toObservableShallow(value));
  };
  to_observable._toObservableShallow = function _toObservableShallow(value) {
    if (ObservableLOfChangeRecordL().is(value)) return value;
    if (MapL().is(value)) {
      return extract_type_arguments.extractMapTypeArguments(value, dart.fn((K, V) => observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V)).from(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))).as(value)), VoidToObservableMapLOfKL$VL()));
    }
    if (IterableL().is(value)) {
      return extract_type_arguments.extractIterableTypeArgument(value, dart.fn(T => new (observable_list.ObservableList$(dart.legacy(T))).from(value), VoidToObservableListLOfTL()));
    }
    return value;
  };
  to_observable._toObservableDeep = function _toObservableDeep(value) {
    if (ObservableLOfChangeRecordL().is(value)) return value;
    if (MapL().is(value)) return to_observable._toObservableDeepMap(value);
    if (IterableL().is(value)) return to_observable._toObservableDeepIterable(value);
    return value;
  };
  to_observable._toObservableDeepMap = function _toObservableDeepMap(value) {
    return ObservableMapL().as(extract_type_arguments.extractMapTypeArguments(value, dart.fn((K, V) => {
      let result = observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V)).createFromType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))).as(value));
      value[$forEach](dart.fn((k, v) => {
        result._set(dart.legacy(K).as(to_observable._toObservableDeep(k)), dart.legacy(V).as(to_observable._toObservableDeep(v)));
      }, dynamicAnddynamicToNull()));
      return result;
    }, VoidToObservableMapLOfKL$VL())));
  };
  to_observable._toObservableDeepIterable = function _toObservableDeepIterable(value) {
    return ObservableListL().as(extract_type_arguments.extractIterableTypeArgument(value, dart.fn(T => {
      let result = new (observable_list.ObservableList$(dart.legacy(T))).new();
      for (let element of value) {
        result.add(dart.legacy(T).as(to_observable._toObservableDeep(element)));
      }
      return result;
    }, VoidToObservableListLOfTL())));
  };
  var _map = dart.privateName(observable_map, "_map");
  var C14;
  var _notifyKeysValuesChanged = dart.privateName(observable_map, "_notifyKeysValuesChanged");
  var _notifyValuesChanged = dart.privateName(observable_map, "_notifyValuesChanged");
  var C15;
  var C16;
  var _delegate$ = dart.privateName(observable, "_delegate");
  var _isNotGeneric = dart.privateName(observable, "_isNotGeneric");
  const _is_Observable_default = Symbol('_is_Observable_default');
  observable.Observable$ = dart.generic(C => {
    var CL = () => (CL = dart.constFn(dart.legacy(C)))();
    var ChangeNotifierOfCL = () => (ChangeNotifierOfCL = dart.constFn(change_notifier.ChangeNotifier$(CL())))();
    class Observable extends core.Object {
      get changes() {
        return this[_delegate$].changes;
      }
      observed() {
        return this[_delegate$].observed();
      }
      unobserved() {
        return this[_delegate$].unobserved();
      }
      get hasObservers() {
        return this[_delegate$].hasObservers;
      }
      deliverChanges() {
        return this[_delegate$].deliverChanges();
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        if (dart.test(this.hasObservers) && !dart.equals(oldValue, newValue)) {
          if (dart.test(this[_isNotGeneric])) {
            this.notifyChange(CL().as(new (records$.PropertyChangeRecord$(dart.legacy(T))).new(this, field, oldValue, newValue)));
          } else {
          }
        }
        return newValue;
      }
      notifyChange(change = null) {
        CL().as(change);
        return this[_delegate$].notifyChange(change);
      }
    }
    (Observable.new = function() {
      this[_delegate$] = new (ChangeNotifierOfCL()).new();
      this[_isNotGeneric] = dart.wrapType(CL())._equals(dart.wrapType(dart.dynamic)) || dart.wrapType(CL())._equals(dart.wrapType(ChangeRecordL()));
      ;
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.addTypeCaches(Observable);
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverChanges: dart.fnType(dart.legacy(core.bool), []),
      notifyPropertyChange: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Symbol), dart.legacy(T), dart.legacy(T)]]),
      notifyChange: dart.fnType(dart.void, [], [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      changes: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(C))))),
      hasObservers: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(Observable, L5);
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_delegate$]: dart.finalFieldType(dart.legacy(change_notifier.ChangeNotifier$(dart.legacy(C)))),
      [_isNotGeneric]: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return Observable;
  });
  observable.Observable = observable.Observable$();
  dart.addTypeTests(observable.Observable, _is_Observable_default);
  const _is_ObservableMap_default = Symbol('_is_ObservableMap_default');
  observable_map.ObservableMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedMapOfKL$VL = () => (LinkedMapOfKL$VL = dart.constFn(_js_helper.LinkedMap$(KL(), VL())))();
    var SplayTreeMapOfKL$VL = () => (SplayTreeMapOfKL$VL = dart.constFn(collection.SplayTreeMap$(KL(), VL())))();
    var MapChangeRecordOfKL$VL = () => (MapChangeRecordOfKL$VL = dart.constFn(records$.MapChangeRecord$(KL(), VL())))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var KLAndVLToNull = () => (KLAndVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), VL()])))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(KL(), VL())))();
    var MapEntryLOfKL$VL = () => (MapEntryLOfKL$VL = dart.constFn(dart.legacy(MapEntryOfKL$VL())))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryLOfKL$VL())))();
    var IterableLOfMapEntryLOfKL$VL = () => (IterableLOfMapEntryLOfKL$VL = dart.constFn(dart.legacy(IterableOfMapEntryLOfKL$VL())))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(VL(), [KL(), VL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.legacy(KLAndVLToVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var MapChangeRecordOfObjectL$VL = () => (MapChangeRecordOfObjectL$VL = dart.constFn(records$.MapChangeRecord$(ObjectL(), VL())))();
    var VLToVL = () => (VLToVL = dart.constFn(dart.fnType(VL(), [VL()])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.legacy(VLToVL())))();
    class ObservableMap extends observable.Observable$(dart.legacy(records$.ChangeRecord)) {
      static castFrom(K, V, K2, V2, source) {
        return new (observable_map.ObservableMap$(dart.legacy(K2), dart.legacy(V2))).spy(source[_map][$cast](dart.legacy(K2), dart.legacy(V2)));
      }
      static from(other) {
        let t0;
        t0 = observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V)).createFromType(other);
        return (() => {
          t0.addAll(other);
          return t0;
        })();
      }
      static createFromType(other) {
        let result = null;
        if (SplayTreeMapL().is(other)) {
          result = new (observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V))).sorted();
        } else if (LinkedHashMapL().is(other)) {
          result = new (observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V))).linked();
        } else {
          result = new (observable_map.ObservableMap$(dart.legacy(K), dart.legacy(V))).new();
        }
        return result;
      }
      get keys() {
        return this[_map][$keys];
      }
      get values() {
        return this[_map][$values];
      }
      get length() {
        return this[_map][$length];
      }
      get isEmpty() {
        return this.length === 0;
      }
      get isNotEmpty() {
        return !dart.test(this.isEmpty);
      }
      containsValue(value) {
        return this[_map][$containsValue](value);
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      _get(key) {
        return this[_map][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        VL().as(value);
        if (!dart.test(this.hasObservers)) {
          this[_map][$_set](key, value);
          return value$;
        }
        let len = this[_map][$length];
        let oldValue = this[_map][$_get](key);
        this[_map][$_set](key, value);
        if (len != this[_map][$length]) {
          this.notifyPropertyChange(intL(), C14 || CT.C14, len, this[_map][$length]);
          this.notifyChange(new (MapChangeRecordOfKL$VL()).insert(key, value));
          this[_notifyKeysValuesChanged]();
        } else if (!dart.equals(oldValue, value)) {
          this.notifyChange(new (MapChangeRecordOfKL$VL()).new(key, oldValue, value));
          this[_notifyValuesChanged]();
        }
        return value$;
      }
      addAll(other) {
        MapLOfKL$VL().as(other);
        other[$forEach](dart.fn((key, value) => {
          this._set(key, value);
        }, KLAndVLToNull()));
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLVL().as(ifAbsent);
        let len = this[_map][$length];
        let result = this[_map][$putIfAbsent](key, ifAbsent);
        if (dart.test(this.hasObservers) && len != this[_map][$length]) {
          this.notifyPropertyChange(intL(), C14 || CT.C14, len, this[_map][$length]);
          this.notifyChange(new (MapChangeRecordOfKL$VL()).insert(key, result));
          this[_notifyKeysValuesChanged]();
        }
        return result;
      }
      remove(key) {
        let len = this[_map][$length];
        let result = this[_map][$remove](key);
        if (dart.test(this.hasObservers) && len != this[_map][$length]) {
          this.notifyChange(new (MapChangeRecordOfObjectL$VL()).remove(key, result));
          this.notifyPropertyChange(intL(), C14 || CT.C14, len, this[_map][$length]);
          this[_notifyKeysValuesChanged]();
        }
        return result;
      }
      clear() {
        let len = this[_map][$length];
        if (dart.test(this.hasObservers) && dart.notNull(len) > 0) {
          this[_map][$forEach](dart.fn((key, value) => {
            this.notifyChange(new (MapChangeRecordOfKL$VL()).remove(key, value));
          }, KLAndVLToNull()));
          this.notifyPropertyChange(intL(), C14 || CT.C14, len, 0);
          this[_notifyKeysValuesChanged]();
        }
        this[_map][$clear]();
      }
      forEach(f) {
        return this[_map][$forEach](f);
      }
      toString() {
        return collection.MapBase.mapToString(this);
      }
      cast(K2, V2) {
        return observable_map.ObservableMap.castFrom(KL(), VL(), dart.legacy(K2), dart.legacy(V2), this);
      }
      retype(K2, V2) {
        return observable_map.ObservableMap.castFrom(KL(), VL(), dart.legacy(K2), dart.legacy(V2), this);
      }
      get entries() {
        return this[_map][$entries];
      }
      addEntries(entries) {
        IterableLOfMapEntryLOfKL$VL().as(entries);
        this[_map][$addEntries](entries);
      }
      map(K2, V2, transform) {
        return this[_map][$map](dart.legacy(K2), dart.legacy(V2), transform);
      }
      update(key, update, opts) {
        KL().as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        return this[_map][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        return this[_map][$updateAll](update);
      }
      removeWhere(test) {
        return this[_map][$removeWhere](test);
      }
      [_notifyKeysValuesChanged]() {
        this.notifyChange(new (PropertyChangeRecordOfNull()).new(this, C15 || CT.C15, null, null));
        this[_notifyValuesChanged]();
      }
      [_notifyValuesChanged]() {
        this.notifyChange(new (PropertyChangeRecordOfNull()).new(this, C16 || CT.C16, null, null));
      }
    }
    (ObservableMap.new = function() {
      this[_map] = new (LinkedMapOfKL$VL()).new();
      ObservableMap.__proto__.new.call(this);
      ;
    }).prototype = ObservableMap.prototype;
    (ObservableMap.linked = function() {
      this[_map] = new (LinkedMapOfKL$VL()).new();
      ObservableMap.__proto__.new.call(this);
      ;
    }).prototype = ObservableMap.prototype;
    (ObservableMap.sorted = function() {
      this[_map] = new (SplayTreeMapOfKL$VL()).new();
      ObservableMap.__proto__.new.call(this);
      ;
    }).prototype = ObservableMap.prototype;
    (ObservableMap.spy = function(other) {
      this[_map] = other;
      ObservableMap.__proto__.new.call(this);
      ;
    }).prototype = ObservableMap.prototype;
    ObservableMap.prototype[dart.isMap] = true;
    dart.addTypeTests(ObservableMap);
    ObservableMap.prototype[_is_ObservableMap_default] = true;
    dart.addTypeCaches(ObservableMap);
    ObservableMap[dart.implements] = () => [core.Map$(dart.legacy(K), dart.legacy(V))];
    dart.setMethodSignature(ObservableMap, () => ({
      __proto__: dart.getMethods(ObservableMap.__proto__),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      putIfAbsent: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$putIfAbsent]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      cast: dart.gFnType((K2, V2) => [dart.legacy(observable_map.ObservableMap$(dart.legacy(K2), dart.legacy(V2))), []]),
      [$cast]: dart.gFnType((K2, V2) => [dart.legacy(observable_map.ObservableMap$(dart.legacy(K2), dart.legacy(V2))), []]),
      retype: dart.gFnType((K2, V2) => [dart.legacy(observable_map.ObservableMap$(dart.legacy(K2), dart.legacy(V2))), []]),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      map: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]]),
      [$map]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]]),
      update: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      [$update]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [_notifyKeysValuesChanged]: dart.fnType(dart.void, []),
      [_notifyValuesChanged]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ObservableMap, () => ({
      __proto__: dart.getGetters(ObservableMap.__proto__),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      [$keys]: dart.legacy(core.Iterable$(dart.legacy(K))),
      values: dart.legacy(core.Iterable$(dart.legacy(V))),
      [$values]: dart.legacy(core.Iterable$(dart.legacy(V))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      entries: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V))))),
      [$entries]: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V)))))
    }));
    dart.setLibraryUri(ObservableMap, L6);
    dart.setFieldSignature(ObservableMap, () => ({
      __proto__: dart.getFields(ObservableMap.__proto__),
      [_map]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))))
    }));
    dart.defineExtensionMethods(ObservableMap, [
      'containsValue',
      'containsKey',
      '_get',
      '_set',
      'addAll',
      'putIfAbsent',
      'remove',
      'clear',
      'forEach',
      'toString',
      'cast',
      'addEntries',
      'map',
      'update',
      'updateAll',
      'removeWhere'
    ]);
    dart.defineExtensionAccessors(ObservableMap, [
      'keys',
      'values',
      'length',
      'isEmpty',
      'isNotEmpty',
      'entries'
    ]);
    return ObservableMap;
  });
  observable_map.ObservableMap = observable_map.ObservableMap$();
  dart.addTypeTests(observable_map.ObservableMap, _is_ObservableMap_default);
  var _changes = dart.privateName(change_notifier, "_changes");
  var _scheduled = dart.privateName(change_notifier, "_scheduled");
  var _queue = dart.privateName(change_notifier, "_queue");
  var _isNotGeneric$ = dart.privateName(change_notifier, "_isNotGeneric");
  var C17;
  var _delegate$0 = dart.privateName(change_notifier, "_delegate");
  var C18;
  const _is_ChangeNotifier_default = Symbol('_is_ChangeNotifier_default');
  change_notifier.ChangeNotifier$ = dart.generic(C => {
    var CL = () => (CL = dart.constFn(dart.legacy(C)))();
    var ListOfCL = () => (ListOfCL = dart.constFn(core.List$(CL())))();
    var ListLOfCL = () => (ListLOfCL = dart.constFn(dart.legacy(ListOfCL())))();
    var StreamControllerOfListLOfCL = () => (StreamControllerOfListLOfCL = dart.constFn(async.StreamController$(ListLOfCL())))();
    var ChangeRecordsOfCL = () => (ChangeRecordsOfCL = dart.constFn(records$.ChangeRecords$(CL())))();
    var JSArrayOfCL = () => (JSArrayOfCL = dart.constFn(_interceptors.JSArray$(CL())))();
    var ChangeNotifierOfCL = () => (ChangeNotifierOfCL = dart.constFn(change_notifier.ChangeNotifier$(CL())))();
    var ChangeNotifierLOfCL = () => (ChangeNotifierLOfCL = dart.constFn(dart.legacy(ChangeNotifierOfCL())))();
    class ChangeNotifier extends core.Object {
      get changes() {
        let t0;
        return (t0 = this[_changes], t0 == null ? this[_changes] = StreamControllerOfListLOfCL().broadcast({sync: true, onListen: dart.bind(this, 'observed'), onCancel: dart.bind(this, 'unobserved')}) : t0).stream;
      }
      observed() {
      }
      unobserved() {
        this[_changes] = this[_queue] = null;
      }
      deliverChanges() {
        if (dart.test(this[_scheduled]) && dart.test(this.hasObservers)) {
          let changes = this[_queue] == null ? new (ChangeRecordsOfCL()).any() : new (ChangeRecordsOfCL()).wrap(internal.freezeInDevMode(CL(), this[_queue]));
          this[_queue] = null;
          this[_scheduled] = false;
          this[_changes].add(changes);
          return true;
        }
        return false;
      }
      get hasObservers() {
        let t0;
        return dart.equals((t0 = this[_changes], t0 == null ? null : t0.hasListener), true);
      }
      notifyChange(change = null) {
        let t0;
        CL().as(change);
        if (!dart.test(this.hasObservers)) {
          return;
        }
        if (change != null) {
          (t0 = this[_queue], t0 == null ? this[_queue] = JSArrayOfCL().of([]) : t0)[$add](change);
        }
        if (!dart.test(this[_scheduled])) {
          async.scheduleMicrotask(dart.bind(this, 'deliverChanges'));
          this[_scheduled] = true;
        }
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        dart.throw(new core.UnsupportedError.new("Not supported by ChangeNotifier"));
      }
      get [_isNotGeneric]() {
        return boolL().as(this.noSuchMethod(new core._Invocation.getter(C17 || CT.C17)));
      }
      get [_delegate$]() {
        return ChangeNotifierLOfCL().as(this.noSuchMethod(new core._Invocation.getter(C18 || CT.C18)));
      }
    }
    (ChangeNotifier.new = function() {
      this[_changes] = null;
      this[_scheduled] = false;
      this[_queue] = null;
      ;
    }).prototype = ChangeNotifier.prototype;
    dart.addTypeTests(ChangeNotifier);
    ChangeNotifier.prototype[_is_ChangeNotifier_default] = true;
    dart.addTypeCaches(ChangeNotifier);
    ChangeNotifier[dart.implements] = () => [observable.Observable$(dart.legacy(C))];
    dart.setMethodSignature(ChangeNotifier, () => ({
      __proto__: dart.getMethods(ChangeNotifier.__proto__),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverChanges: dart.fnType(dart.legacy(core.bool), []),
      notifyChange: dart.fnType(dart.void, [], [dart.legacy(core.Object)]),
      notifyPropertyChange: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Symbol), dart.legacy(T), dart.legacy(T)]])
    }));
    dart.setGetterSignature(ChangeNotifier, () => ({
      __proto__: dart.getGetters(ChangeNotifier.__proto__),
      changes: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(C))))),
      hasObservers: dart.legacy(core.bool),
      [_isNotGeneric]: dart.legacy(core.bool),
      [_delegate$]: dart.legacy(change_notifier.ChangeNotifier$(dart.legacy(C)))
    }));
    dart.setLibraryUri(ChangeNotifier, L7);
    dart.setFieldSignature(ChangeNotifier, () => ({
      __proto__: dart.getFields(ChangeNotifier.__proto__),
      [_changes]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(C)))))),
      [_scheduled]: dart.fieldType(dart.legacy(core.bool)),
      [_queue]: dart.fieldType(dart.legacy(core.List$(dart.legacy(C))))
    }));
    return ChangeNotifier;
  });
  change_notifier.ChangeNotifier = change_notifier.ChangeNotifier$();
  dart.addTypeTests(change_notifier.ChangeNotifier, _is_ChangeNotifier_default);
  change_notifier.PropertyChangeNotifier = class PropertyChangeNotifier extends change_notifier.ChangeNotifier$(dart.legacy(records$.ChangeRecord)) {
    notifyPropertyChange(T, field, oldValue, newValue) {
      if (dart.test(this.hasObservers) && !dart.equals(oldValue, newValue)) {
        this.notifyChange(new (records$.PropertyChangeRecord$(dart.legacy(T))).new(this, field, oldValue, newValue));
      }
      return newValue;
    }
  };
  (change_notifier.PropertyChangeNotifier.new = function() {
    change_notifier.PropertyChangeNotifier.__proto__.new.call(this);
    ;
  }).prototype = change_notifier.PropertyChangeNotifier.prototype;
  dart.addTypeTests(change_notifier.PropertyChangeNotifier);
  dart.addTypeCaches(change_notifier.PropertyChangeNotifier);
  dart.setMethodSignature(change_notifier.PropertyChangeNotifier, () => ({
    __proto__: dart.getMethods(change_notifier.PropertyChangeNotifier.__proto__),
    notifyPropertyChange: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Symbol), dart.legacy(T), dart.legacy(T)]])
  }));
  dart.setLibraryUri(change_notifier.PropertyChangeNotifier, L7);
  var _listRecords = dart.privateName(observable_list, "_listRecords");
  var _listChanges = dart.privateName(observable_list, "_listChanges");
  var _list = dart.privateName(observable_list, "_list");
  var _notifyChangeLength = dart.privateName(observable_list, "_notifyChangeLength");
  var _notifyListChange = dart.privateName(observable_list, "_notifyListChange");
  var _rangeCheck = dart.privateName(observable_list, "_rangeCheck");
  var C19;
  var C20;
  const _is_ObservableList_default = Symbol('_is_ObservableList_default');
  observable_list.ObservableList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var JSArrayOfEL = () => (JSArrayOfEL = dart.constFn(_interceptors.JSArray$(EL())))();
    var ListChangeRecordOfEL = () => (ListChangeRecordOfEL = dart.constFn(records$.ListChangeRecord$(EL())))();
    var ListChangeRecordLOfEL = () => (ListChangeRecordLOfEL = dart.constFn(dart.legacy(ListChangeRecordOfEL())))();
    var ListOfListChangeRecordLOfEL = () => (ListOfListChangeRecordLOfEL = dart.constFn(core.List$(ListChangeRecordLOfEL())))();
    var ListLOfListChangeRecordLOfEL = () => (ListLOfListChangeRecordLOfEL = dart.constFn(dart.legacy(ListOfListChangeRecordLOfEL())))();
    var StreamControllerOfListLOfListChangeRecordLOfEL = () => (StreamControllerOfListLOfListChangeRecordLOfEL = dart.constFn(async.StreamController$(ListLOfListChangeRecordLOfEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var JSArrayOfListChangeRecordLOfEL = () => (JSArrayOfListChangeRecordLOfEL = dart.constFn(_interceptors.JSArray$(ListChangeRecordLOfEL())))();
    var UnmodifiableListViewOfListChangeRecordLOfEL = () => (UnmodifiableListViewOfListChangeRecordLOfEL = dart.constFn(collection.UnmodifiableListView$(ListChangeRecordLOfEL())))();
    const ListBase_Observable$36 = class ListBase_Observable extends collection.ListBase$(dart.legacy(E)) {};
    (ListBase_Observable$36.new = function() {
      observable.Observable$(dart.legacy(records$.ChangeRecord)).new.call(this);
    }).prototype = ListBase_Observable$36.prototype;
    dart.applyMixin(ListBase_Observable$36, observable.Observable$(dart.legacy(records$.ChangeRecord)));
    class ObservableList extends ListBase_Observable$36 {
      static castFrom(S, T, source) {
        return new (observable_list.ObservableList$(dart.legacy(T)))._spy(source[_list][$cast](dart.legacy(T)));
      }
      cast(T) {
        return observable_list.ObservableList.castFrom(EL(), dart.legacy(T), this);
      }
      retype(T) {
        return this.cast(dart.legacy(T));
      }
      get listChanges() {
        if (this[_listChanges] == null) {
          this[_listChanges] = StreamControllerOfListLOfListChangeRecordLOfEL().broadcast({sync: true, onCancel: dart.fn(() => {
              this[_listChanges] = null;
            }, VoidToNull())});
        }
        return this[_listChanges].stream;
      }
      get hasListObservers() {
        return this[_listChanges] != null && dart.test(this[_listChanges].hasListener);
      }
      get length() {
        return this[_list][$length];
      }
      set length(value) {
        let len = this[_list][$length];
        if (len == value) return;
        this[_notifyChangeLength](len, value);
        if (dart.test(this.hasListObservers)) {
          if (dart.notNull(value) < dart.notNull(len)) {
            this[_notifyListChange](value, {removed: this[_list][$getRange](value, len)[$toList]()});
          } else {
            this[_notifyListChange](len, {addedCount: dart.notNull(value) - dart.notNull(len)});
          }
        }
        this[_list][$length] = value;
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        EL().as(value);
        let oldValue = this[_list][$_get](index);
        if (dart.test(this.hasListObservers) && !dart.equals(oldValue, value)) {
          this[_notifyListChange](index, {addedCount: 1, removed: JSArrayOfEL().of([oldValue])});
        }
        this[_list][$_set](index, value);
        return value$;
      }
      get isEmpty() {
        return super[$isEmpty];
      }
      get isNotEmpty() {
        return super[$isNotEmpty];
      }
      setAll(index, iterable) {
        IterableLOfEL().as(iterable);
        if (!ListL().is(iterable) && !SetL().is(iterable)) {
          iterable = iterable[$toList]();
        }
        let length = iterable[$length];
        if (dart.test(this.hasListObservers) && dart.notNull(length) > 0) {
          this[_notifyListChange](index, {addedCount: length, removed: this[_list][$sublist](index, length)});
        }
        this[_list][$setAll](index, iterable);
      }
      add(value) {
        EL().as(value);
        let len = this[_list][$length];
        this[_notifyChangeLength](len, dart.notNull(len) + 1);
        if (dart.test(this.hasListObservers)) {
          this[_notifyListChange](len, {addedCount: 1});
        }
        this[_list][$add](value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        let len = this[_list][$length];
        this[_list][$addAll](iterable);
        this[_notifyChangeLength](len, this[_list][$length]);
        let added = dart.notNull(this[_list][$length]) - dart.notNull(len);
        if (dart.test(this.hasListObservers) && added > 0) {
          this[_notifyListChange](len, {addedCount: added});
        }
      }
      remove(element) {
        for (let i = 0; i < dart.notNull(this.length); i = i + 1) {
          if (dart.equals(this._get(i), element)) {
            this.removeRange(i, i + 1);
            return true;
          }
        }
        return false;
      }
      removeRange(start, end) {
        this[_rangeCheck](start, end);
        let rangeLength = dart.notNull(end) - dart.notNull(start);
        let len = this[_list][$length];
        this[_notifyChangeLength](len, dart.notNull(len) - rangeLength);
        if (dart.test(this.hasListObservers) && rangeLength > 0) {
          this[_notifyListChange](start, {removed: this[_list][$getRange](start, end)[$toList]()});
        }
        this[_list][$removeRange](start, end);
      }
      insertAll(index, iterable) {
        let t0;
        IterableLOfEL().as(iterable);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(index, 0, this.length));
        }
        if (!ListL().is(iterable) && !SetL().is(iterable)) {
          iterable = iterable[$toList]();
        }
        let insertionLength = iterable[$length];
        let len = this[_list][$length];
        t0 = this[_list];
        t0[$length] = dart.notNull(t0[$length]) + dart.notNull(insertionLength);
        this[_list][$setRange](dart.notNull(index) + dart.notNull(insertionLength), this.length, this, index);
        this[_list][$setAll](index, iterable);
        this[_notifyChangeLength](len, this[_list][$length]);
        if (dart.test(this.hasListObservers) && dart.notNull(insertionLength) > 0) {
          this[_notifyListChange](index, {addedCount: insertionLength});
        }
      }
      insert(index, element) {
        let t0;
        EL().as(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(index, 0, this.length));
        }
        if (index == this.length) {
          this.add(element);
          return;
        }
        if (!intL().is(index)) dart.throw(new core.ArgumentError.new(index));
        t0 = this[_list];
        t0[$length] = dart.notNull(t0[$length]) + 1;
        this[_list][$setRange](dart.notNull(index) + 1, this.length, this, index);
        this[_notifyChangeLength](dart.notNull(this[_list][$length]) - 1, this[_list][$length]);
        if (dart.test(this.hasListObservers)) {
          this[_notifyListChange](index, {addedCount: 1});
        }
        this[_list][$_set](index, element);
      }
      removeAt(index) {
        let result = this._get(index);
        this.removeRange(index, dart.notNull(index) + 1);
        return result;
      }
      [_rangeCheck](start, end) {
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(start, 0, this.length));
        }
        if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(this.length)) {
          dart.throw(new core.RangeError.range(end, start, this.length));
        }
      }
      [_notifyListChange](index, opts) {
        let removed = opts && 'removed' in opts ? opts.removed : null;
        let addedCount = opts && 'addedCount' in opts ? opts.addedCount : 0;
        if (!dart.test(this.hasListObservers)) return;
        if (this[_listRecords] == null) {
          this[_listRecords] = JSArrayOfListChangeRecordLOfEL().of([]);
          async.scheduleMicrotask(dart.bind(this, 'deliverListChanges'));
        }
        this[_listRecords][$add](ListChangeRecordOfEL().new(this, index, {removed: removed, addedCount: addedCount}));
      }
      [_notifyChangeLength](oldValue, newValue) {
        this.notifyPropertyChange(intL(), C14 || CT.C14, oldValue, newValue);
        this.notifyPropertyChange(boolL(), C19 || CT.C19, oldValue === 0, newValue === 0);
        this.notifyPropertyChange(boolL(), C20 || CT.C20, oldValue !== 0, newValue !== 0);
      }
      discardListChanges() {
        if (this[_listRecords] != null) this[_listRecords] = JSArrayOfListChangeRecordLOfEL().of([]);
      }
      deliverListChanges() {
        if (this[_listRecords] == null) return false;
        let records = differs.projectListSplices(EL(), this, this[_listRecords]);
        this[_listRecords] = null;
        if (dart.test(this.hasListObservers) && dart.test(records[$isNotEmpty])) {
          this[_listChanges].add(new (UnmodifiableListViewOfListChangeRecordLOfEL()).new(records));
          return true;
        }
        return false;
      }
      static calculateChangeRecords(E, oldValue, newValue) {
        return new (differs.ListDiffer$(dart.legacy(E))).new().diff(oldValue, newValue);
      }
      static applyChangeRecords(previous, current, changeRecords) {
        if (previous == current) {
          dart.throw(new core.ArgumentError.new("can't use same list for previous and current"));
        }
        for (let change of changeRecords) {
          let addEnd = dart.notNull(change.index) + dart.notNull(change.addedCount);
          let removeEnd = dart.notNull(change.index) + dart.notNull(change.removed[$length]);
          let addedItems = current[$getRange](change.index, addEnd);
          previous[$replaceRange](change.index, removeEnd, addedItems);
        }
      }
    }
    (ObservableList.new = function(length = null) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = length != null ? ListOfEL().new(length) : JSArrayOfEL().of([]);
      ObservableList.__proto__.new.call(this);
      ;
    }).prototype = ObservableList.prototype;
    (ObservableList.withLength = function(length) {
      ObservableList.new.call(this, length);
    }).prototype = ObservableList.prototype;
    (ObservableList.from = function(other) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = ListOfEL().from(other);
      ObservableList.__proto__.new.call(this);
      ;
    }).prototype = ObservableList.prototype;
    (ObservableList._spy = function(other) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = other;
      ObservableList.__proto__.new.call(this);
      ;
    }).prototype = ObservableList.prototype;
    dart.addTypeTests(ObservableList);
    ObservableList.prototype[_is_ObservableList_default] = true;
    dart.addTypeCaches(ObservableList);
    dart.setMethodSignature(ObservableList, () => ({
      __proto__: dart.getMethods(ObservableList.__proto__),
      cast: dart.gFnType(T => [dart.legacy(observable_list.ObservableList$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(observable_list.ObservableList$(dart.legacy(T))), []]),
      retype: dart.gFnType(T => [dart.legacy(observable_list.ObservableList$(dart.legacy(T))), []]),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      setAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$setAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      [$removeRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      insertAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      insert: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insert]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      removeAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$removeAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [_rangeCheck]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      [_notifyListChange]: dart.fnType(dart.void, [dart.legacy(core.int)], {addedCount: dart.legacy(core.int), removed: dart.legacy(core.List$(dart.legacy(E)))}, {}),
      [_notifyChangeLength]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      discardListChanges: dart.fnType(dart.void, []),
      deliverListChanges: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(ObservableList, () => ({
      __proto__: dart.getGetters(ObservableList.__proto__),
      listChanges: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E))))))),
      hasListObservers: dart.legacy(core.bool),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(ObservableList, () => ({
      __proto__: dart.getSetters(ObservableList.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(ObservableList, L8);
    dart.setFieldSignature(ObservableList, () => ({
      __proto__: dart.getFields(ObservableList.__proto__),
      [_listRecords]: dart.fieldType(dart.legacy(core.List$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))))),
      [_listChanges]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(records$.ListChangeRecord$(dart.legacy(E)))))))),
      [_list]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(E))))
    }));
    dart.defineExtensionMethods(ObservableList, [
      'cast',
      '_get',
      '_set',
      'setAll',
      'add',
      'addAll',
      'remove',
      'removeRange',
      'insertAll',
      'insert',
      'removeAt'
    ]);
    dart.defineExtensionAccessors(ObservableList, ['length', 'isEmpty', 'isNotEmpty']);
    return ObservableList;
  });
  observable_list.ObservableList = observable_list.ObservableList$();
  dart.addTypeTests(observable_list.ObservableList, _is_ObservableList_default);
  dart.trackLibraries("packages/observable/observable", {
    "package:observable/src/differs.dart": differs,
    "package:observable/src/internal.dart": internal,
    "package:observable/src/records.dart": records$,
    "package:observable/src/to_observable.dart": to_observable,
    "package:observable/src/observable_map.dart": observable_map,
    "package:observable/src/observable.dart": observable,
    "package:observable/src/change_notifier.dart": change_notifier,
    "package:observable/src/observable_list.dart": observable_list,
    "package:observable/observable.dart": observable$
  }, {
    "package:observable/src/differs.dart": ["differs/list_differ.dart", "differs/map_differ.dart"],
    "package:observable/src/records.dart": ["records/list_change_record.dart", "records/map_change_record.dart", "records/property_change_record.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/differs.dart","src/differs/list_differ.dart","src/differs/map_differ.dart","src/internal.dart","src/records.dart","src/records/list_change_record.dart","src/records/map_change_record.dart","src/records/property_change_record.dart","src/to_observable.dart","src/observable.dart","src/observable_map.dart","src/change_notifier.dart","src/observable_list.dart"],"names":[],"mappings":"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","file":"observable.unsound.ddc.js"}');
  // Exports:
  return {
    src__differs: differs,
    src__internal: internal,
    src__records: records$,
    src__to_observable: to_observable,
    src__observable_map: observable_map,
    src__observable: observable,
    src__change_notifier: change_notifier,
    src__observable_list: observable_list,
    observable: observable$
  };
}));

//# sourceMappingURL=observable.unsound.ddc.js.map
