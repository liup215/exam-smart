define(['dart_sdk', 'packages/quiver/core', 'packages/collection/src/canonicalized_map', 'packages/quiver/src/collection/bimap'], (function load__packages__built_collection__built_collection(dart_sdk, packages__quiver__core, packages__collection__src__canonicalized_map, packages__quiver__src__collection__bimap) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__core.src__core__hash;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const multimap = packages__quiver__src__collection__bimap.src__collection__multimap;
  var copy_on_write_map = Object.create(dart.library);
  var iterable = Object.create(dart.library);
  var set = Object.create(dart.library);
  var iterables = Object.create(dart.library);
  var copy_on_write_set = Object.create(dart.library);
  var list = Object.create(dart.library);
  var copy_on_write_list = Object.create(dart.library);
  var set_multimap = Object.create(dart.library);
  var built_collection = Object.create(dart.library);
  var map$ = Object.create(dart.library);
  var list_multimap = Object.create(dart.library);
  var $_get = dartx._get;
  var $cast = dartx.cast;
  var $containsKey = dartx.containsKey;
  var $containsValue = dartx.containsValue;
  var $entries = dartx.entries;
  var $forEach = dartx.forEach;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $keys = dartx.keys;
  var $length = dartx.length;
  var $map = dartx.map;
  var $values = dartx.values;
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $addEntries = dartx.addEntries;
  var $clear = dartx.clear;
  var $putIfAbsent = dartx.putIfAbsent;
  var $remove = dartx.remove;
  var $removeWhere = dartx.removeWhere;
  var $toString = dartx.toString;
  var $update = dartx.update;
  var $updateAll = dartx.updateAll;
  var $iterator = dartx.iterator;
  var $hashCode = dartx.hashCode;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $followedBy = dartx.followedBy;
  var $whereType = dartx.whereType;
  var $where = dartx.where;
  var $expand = dartx.expand;
  var $reduce = dartx.reduce;
  var $fold = dartx.fold;
  var $every = dartx.every;
  var $join = dartx.join;
  var $any = dartx.any;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $first = dartx.first;
  var $last = dartx.last;
  var $single = dartx.single;
  var $firstWhere = dartx.firstWhere;
  var $lastWhere = dartx.lastWhere;
  var $singleWhere = dartx.singleWhere;
  var $elementAt = dartx.elementAt;
  var $_equals = dartx._equals;
  var $contains = dartx.contains;
  var $toSet = dartx.toSet;
  var $plus = dartx['+'];
  var $reversed = dartx.reversed;
  var $indexOf = dartx.indexOf;
  var $lastIndexOf = dartx.lastIndexOf;
  var $indexWhere = dartx.indexWhere;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $sublist = dartx.sublist;
  var $getRange = dartx.getRange;
  var $asMap = dartx.asMap;
  var $add = dartx.add;
  var $removeRange = dartx.removeRange;
  var $shuffle = dartx.shuffle;
  var $insert = dartx.insert;
  var $insertAll = dartx.insertAll;
  var $setAll = dartx.setAll;
  var $removeAt = dartx.removeAt;
  var $removeLast = dartx.removeLast;
  var $retainWhere = dartx.retainWhere;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $replaceRange = dartx.replaceRange;
  var $runtimeType = dartx.runtimeType;
  var _BuiltSetL = () => (_BuiltSetL = dart.constFn(dart.legacy(set._BuiltSet)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var BuiltSetL = () => (BuiltSetL = dart.constFn(dart.legacy(set.BuiltSet)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var BuiltIterableL = () => (BuiltIterableL = dart.constFn(dart.legacy(iterable.BuiltIterable)))();
  var SetL = () => (SetL = dart.constFn(dart.legacy(core.Set)))();
  var _BuiltListL = () => (_BuiltListL = dart.constFn(dart.legacy(list._BuiltList)))();
  var BuiltListL = () => (BuiltListL = dart.constFn(dart.legacy(list.BuiltList)))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var _BuiltSetMultimapL = () => (_BuiltSetMultimapL = dart.constFn(dart.legacy(set_multimap._BuiltSetMultimap)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var SetMultimapL = () => (SetMultimapL = dart.constFn(dart.legacy(multimap.SetMultimap)))();
  var BuiltSetMultimapL = () => (BuiltSetMultimapL = dart.constFn(dart.legacy(set_multimap.BuiltSetMultimap)))();
  var _BuiltMapL = () => (_BuiltMapL = dart.constFn(dart.legacy(map$._BuiltMap)))();
  var BuiltMapL = () => (BuiltMapL = dart.constFn(dart.legacy(map$.BuiltMap)))();
  var ObjectLAndObjectLToNull = () => (ObjectLAndObjectLToNull = dart.constFn(dart.fnType(core.Null, [ObjectL(), ObjectL()])))();
  var _BuiltListMultimapL = () => (_BuiltListMultimapL = dart.constFn(dart.legacy(list_multimap._BuiltListMultimap)))();
  var ListMultimapL = () => (ListMultimapL = dart.constFn(dart.legacy(multimap.ListMultimap)))();
  var BuiltListMultimapL = () => (BuiltListMultimapL = dart.constFn(dart.legacy(list_multimap.BuiltListMultimap)))();
  const CT = Object.create(null);
  var L3 = "org-dartlang-app:///packages/built_collection/src/set/set_builder.dart";
  var L9 = "org-dartlang-app:///packages/built_collection/src/map/map_builder.dart";
  var L0 = "package:built_collection/src/internal/copy_on_write_map.dart";
  var L2 = "package:built_collection/src/set.dart";
  var L8 = "package:built_collection/src/map.dart";
  var L5 = "package:built_collection/src/list.dart";
  var L10 = "package:built_collection/src/list_multimap.dart";
  var L7 = "package:built_collection/src/set_multimap.dart";
  var L4 = "package:built_collection/src/internal/copy_on_write_set.dart";
  var L1 = "package:built_collection/src/iterable.dart";
  var L6 = "package:built_collection/src/internal/copy_on_write_list.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.constMap(dart.dynamic, dart.dynamic, []);
    }
  }, false);
  var _map$ = dart.privateName(copy_on_write_map, "_map");
  var _mapFactory$ = dart.privateName(copy_on_write_map, "_mapFactory");
  var _copyBeforeWrite = dart.privateName(copy_on_write_map, "_copyBeforeWrite");
  var _maybeCopyBeforeWrite = dart.privateName(copy_on_write_map, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteMap_default = Symbol('_is_CopyOnWriteMap_default');
  copy_on_write_map.CopyOnWriteMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(KL(), VL())))();
    var MapEntryLOfKL$VL = () => (MapEntryLOfKL$VL = dart.constFn(dart.legacy(MapEntryOfKL$VL())))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryLOfKL$VL())))();
    var IterableLOfMapEntryLOfKL$VL = () => (IterableLOfMapEntryLOfKL$VL = dart.constFn(dart.legacy(IterableOfMapEntryLOfKL$VL())))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(VL(), [KL(), VL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.legacy(KLAndVLToVL())))();
    var LinkedHashMapOfKL$VL = () => (LinkedHashMapOfKL$VL = dart.constFn(collection.LinkedHashMap$(KL(), VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var VLToVL = () => (VLToVL = dart.constFn(dart.fnType(VL(), [VL()])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.legacy(VLToVL())))();
    class CopyOnWriteMap extends core.Object {
      _get(key) {
        return this[_map$][$_get](key);
      }
      cast(K2, V2) {
        return new (copy_on_write_map.CopyOnWriteMap$(dart.legacy(K2), dart.legacy(V2))).new(this[_map$][$cast](dart.legacy(K2), dart.legacy(V2)));
      }
      containsKey(key) {
        return this[_map$][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$][$containsValue](value);
      }
      get entries() {
        return this[_map$][$entries];
      }
      forEach(f) {
        return this[_map$][$forEach](f);
      }
      get isEmpty() {
        return this[_map$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$][$isNotEmpty];
      }
      get keys() {
        return this[_map$][$keys];
      }
      get length() {
        return this[_map$][$length];
      }
      map(K2, V2, f) {
        return this[_map$][$map](dart.legacy(K2), dart.legacy(V2), f);
      }
      get values() {
        return this[_map$][$values];
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        VL().as(value);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$_set](key, value);
        return value$;
      }
      addAll(other) {
        MapLOfKL$VL().as(other);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$addAll](other);
      }
      addEntries(entries) {
        IterableLOfMapEntryLOfKL$VL().as(entries);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$addEntries](entries);
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_map$][$clear]();
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLVL().as(ifAbsent);
        this[_maybeCopyBeforeWrite]();
        return this[_map$][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        this[_maybeCopyBeforeWrite]();
        return this[_map$][$remove](key);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_map$][$removeWhere](test);
      }
      toString() {
        return dart.toString(this[_map$]);
      }
      update(key, update, opts) {
        KL().as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        this[_maybeCopyBeforeWrite]();
        return this[_map$][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$updateAll](update);
      }
      [_maybeCopyBeforeWrite]() {
        let t0;
        if (!dart.test(this[_copyBeforeWrite])) return;
        this[_copyBeforeWrite] = false;
        this[_map$] = this[_mapFactory$] != null ? (t0 = this[_mapFactory$](), (() => {
          t0[$addAll](this[_map$]);
          return t0;
        })()) : LinkedHashMapOfKL$VL().from(this[_map$]);
      }
    }
    (CopyOnWriteMap.new = function(_map, _mapFactory = null) {
      this[_map$] = _map;
      this[_mapFactory$] = _mapFactory;
      this[_copyBeforeWrite] = true;
      ;
    }).prototype = CopyOnWriteMap.prototype;
    CopyOnWriteMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CopyOnWriteMap);
    CopyOnWriteMap.prototype[_is_CopyOnWriteMap_default] = true;
    dart.addTypeCaches(CopyOnWriteMap);
    CopyOnWriteMap[dart.implements] = () => [core.Map$(dart.legacy(K), dart.legacy(V))];
    dart.setMethodSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getMethods(CopyOnWriteMap.__proto__),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      cast: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      [$cast]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      map: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]]),
      [$map]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      putIfAbsent: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$putIfAbsent]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      update: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      [$update]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getGetters(CopyOnWriteMap.__proto__),
      entries: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V))))),
      [$entries]: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V))))),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      [$keys]: dart.legacy(core.Iterable$(dart.legacy(K))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      values: dart.legacy(core.Iterable$(dart.legacy(V))),
      [$values]: dart.legacy(core.Iterable$(dart.legacy(V)))
    }));
    dart.setLibraryUri(CopyOnWriteMap, L0);
    dart.setFieldSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getFields(CopyOnWriteMap.__proto__),
      [_mapFactory$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))), []))),
      [_copyBeforeWrite]: dart.fieldType(dart.legacy(core.bool)),
      [_map$]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))))
    }));
    dart.defineExtensionMethods(CopyOnWriteMap, [
      '_get',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CopyOnWriteMap;
  });
  copy_on_write_map.CopyOnWriteMap = copy_on_write_map.CopyOnWriteMap$();
  dart.addTypeTests(copy_on_write_map.CopyOnWriteMap, _is_CopyOnWriteMap_default);
  const _is_BuiltIterable_default = Symbol('_is_BuiltIterable_default');
  iterable.BuiltIterable$ = dart.generic(E => {
    class BuiltIterable extends core.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (BuiltIterable.new = function() {
      ;
    }).prototype = BuiltIterable.prototype;
    BuiltIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltIterable);
    BuiltIterable.prototype[_is_BuiltIterable_default] = true;
    dart.addTypeCaches(BuiltIterable);
    BuiltIterable[dart.implements] = () => [core.Iterable$(dart.legacy(E))];
    dart.setLibraryUri(BuiltIterable, L1);
    return BuiltIterable;
  });
  iterable.BuiltIterable = iterable.BuiltIterable$();
  dart.addTypeTests(iterable.BuiltIterable, _is_BuiltIterable_default);
  var _overridenHashCode$ = dart.privateName(set, "_overridenHashCode");
  var _set$ = dart.privateName(set, "_set");
  var _hashCode = dart.privateName(set, "_hashCode");
  var _setFactory$ = dart.privateName(set, "_setFactory");
  var C0;
  const _is_BuiltSet_default = Symbol('_is_BuiltSet_default');
  set.BuiltSet$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var SetBuilderOfEL = () => (SetBuilderOfEL = dart.constFn(set.SetBuilder$(EL())))();
    var _BuiltSetOfEL = () => (_BuiltSetOfEL = dart.constFn(set._BuiltSet$(EL())))();
    var _BuiltSetLOfEL = () => (_BuiltSetLOfEL = dart.constFn(dart.legacy(_BuiltSetOfEL())))();
    var BuiltListOfEL = () => (BuiltListOfEL = dart.constFn(list.BuiltList$(EL())))();
    var ELTointL = () => (ELTointL = dart.constFn(dart.fnType(intL(), [EL()])))();
    var UnmodifiableSetViewOfEL = () => (UnmodifiableSetViewOfEL = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(EL())))();
    var BuiltSetOfEL = () => (BuiltSetOfEL = dart.constFn(set.BuiltSet$(EL())))();
    var BuiltSetLOfEL = () => (BuiltSetLOfEL = dart.constFn(dart.legacy(BuiltSetOfEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ELAndELToEL = () => (ELAndELToEL = dart.constFn(dart.fnType(EL(), [EL(), EL()])))();
    var ELAndELToLEL = () => (ELAndELToLEL = dart.constFn(dart.legacy(ELAndELToEL())))();
    var CopyOnWriteSetOfEL = () => (CopyOnWriteSetOfEL = dart.constFn(copy_on_write_set.CopyOnWriteSet$(EL())))();
    var VoidToEL = () => (VoidToEL = dart.constFn(dart.fnType(EL(), [])))();
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.legacy(VoidToEL())))();
    class BuiltSet extends core.Object {
      static new(iterable = C0 || CT.C0) {
        return set.BuiltSet$(dart.legacy(E)).from(iterable);
      }
      static from(iterable) {
        if (_BuiltSetL().is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(dart.legacy(E))))) {
          return dart.legacy(set.BuiltSet$(dart.legacy(E))).as(iterable);
        } else {
          return new (set._BuiltSet$(dart.legacy(E))).copyAndCheckTypes(iterable);
        }
      }
      static of(iterable) {
        if (dart.legacy(set._BuiltSet$(dart.legacy(E))).is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(dart.legacy(E))))) {
          return iterable;
        } else {
          return new (set._BuiltSet$(dart.legacy(E))).copyAndCheckForNull(iterable);
        }
      }
      static build(updates) {
        let t0;
        return (t0 = set.SetBuilder$(dart.legacy(E)).new(), (() => {
          t0.update(updates);
          return t0;
        })()).build();
      }
      toBuilder() {
        return new (SetBuilderOfEL())._fromBuiltSet(_BuiltSetLOfEL().as(this));
      }
      rebuild(updates) {
        let t0;
        return (t0 = this.toBuilder(), (() => {
          t0.update(updates);
          return t0;
        })()).build();
      }
      toBuiltList() {
        return BuiltListOfEL().new(this);
      }
      toBuiltSet() {
        return this;
      }
      get hashCode() {
        let t0;
        this[_hashCode] == null ? this[_hashCode] = hash.hashObjects((t0 = this[_set$][$map](intL(), dart.fn(e => dart.hashCode(e), ELTointL()))[$toList]({growable: false}), (() => {
          t0[$sort]();
          return t0;
        })())) : null;
        return this[_hashCode];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!BuiltSetL().is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        return this.containsAll(IterableLOfObjectL().as(other));
      }
      toString() {
        return dart.toString(this[_set$]);
      }
      asSet() {
        return new (UnmodifiableSetViewOfEL()).new(this[_set$]);
      }
      get length() {
        return this[_set$][$length];
      }
      containsAll(other) {
        return this[_set$].containsAll(other);
      }
      difference(other) {
        return new (_BuiltSetOfEL()).withSafeSet(this[_setFactory$], this[_set$].difference(other[_set$]));
      }
      intersection(other) {
        return new (_BuiltSetOfEL()).withSafeSet(this[_setFactory$], this[_set$].intersection(other[_set$]));
      }
      lookup(object) {
        return this[_set$].lookup(object);
      }
      union(other) {
        BuiltSetLOfEL().as(other);
        return new (_BuiltSetOfEL()).withSafeSet(this[_setFactory$], this[_set$].union(other[_set$]));
      }
      get iterator() {
        return this[_set$].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      cast(T) {
        return core.Iterable.castFrom(EL(), dart.legacy(T), this[_set$]);
      }
      followedBy(other) {
        IterableLOfEL().as(other);
        return this[_set$][$followedBy](other);
      }
      whereType(T) {
        return this[_set$][$whereType](dart.legacy(T));
      }
      map(T, f) {
        return this[_set$][$map](dart.legacy(T), f);
      }
      where(test) {
        return this[_set$][$where](test);
      }
      expand(T, f) {
        return this[_set$][$expand](dart.legacy(T), f);
      }
      contains(element) {
        return this[_set$].contains(element);
      }
      forEach(f) {
        return this[_set$][$forEach](f);
      }
      reduce(combine) {
        ELAndELToLEL().as(combine);
        return this[_set$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_set$][$fold](dart.legacy(T), initialValue, combine);
      }
      every(test) {
        return this[_set$][$every](test);
      }
      join(separator = "") {
        return this[_set$][$join](separator);
      }
      any(test) {
        return this[_set$][$any](test);
      }
      toSet() {
        return new (CopyOnWriteSetOfEL()).new(this[_set$], this[_setFactory$]);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$][$toList]({growable: growable});
      }
      get isEmpty() {
        return this[_set$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$][$isNotEmpty];
      }
      take(n) {
        return this[_set$][$take](n);
      }
      takeWhile(test) {
        return this[_set$][$takeWhile](test);
      }
      skip(n) {
        return this[_set$][$skip](n);
      }
      skipWhile(test) {
        return this[_set$][$skipWhile](test);
      }
      get first() {
        return this[_set$][$first];
      }
      get last() {
        return this[_set$][$last];
      }
      get single() {
        return this[_set$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_set$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_set$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_set$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_set$][$elementAt](index);
      }
    }
    (BuiltSet.__ = function(_setFactory, _set) {
      this[_hashCode] = null;
      this[_setFactory$] = _setFactory;
      this[_set$] = _set;
      if (dart.wrapType(EL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit element type required, for example \"new BuiltSet<int>\""));
      }
    }).prototype = BuiltSet.prototype;
    BuiltSet.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltSet);
    BuiltSet.prototype[_is_BuiltSet_default] = true;
    dart.addTypeCaches(BuiltSet);
    BuiltSet[dart.implements] = () => [core.Iterable$(dart.legacy(E)), iterable.BuiltIterable$(dart.legacy(E))];
    dart.setMethodSignature(BuiltSet, () => ({
      __proto__: dart.getMethods(BuiltSet.__proto__),
      toBuilder: dart.fnType(dart.legacy(set.SetBuilder$(dart.legacy(E))), []),
      rebuild: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(set.SetBuilder$(dart.legacy(E)))]))]),
      toBuiltList: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), []),
      toBuiltSet: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      asSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      containsAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      difference: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), [dart.legacy(set.BuiltSet$(dart.legacy(core.Object)))]),
      intersection: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), [dart.legacy(set.BuiltSet$(dart.legacy(core.Object)))]),
      lookup: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      union: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), [dart.legacy(core.Object)]),
      cast: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      followedBy: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      [$followedBy]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      whereType: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$whereType]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      map: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      [$map]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      where: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$where]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      expand: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      [$expand]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      reduce: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      [$reduce]: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      fold: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      [$fold]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      every: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$every]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      join: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      [$join]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      any: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$any]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      take: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$take]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$takeWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      skip: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$skip]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$skipWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      firstWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$firstWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      lastWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$lastWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      singleWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$singleWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      elementAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$elementAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)])
    }));
    dart.setGetterSignature(BuiltSet, () => ({
      __proto__: dart.getGetters(BuiltSet.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      iterator: dart.legacy(core.Iterator$(dart.legacy(E))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(E))),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      first: dart.legacy(E),
      [$first]: dart.legacy(E),
      last: dart.legacy(E),
      [$last]: dart.legacy(E),
      single: dart.legacy(E),
      [$single]: dart.legacy(E)
    }));
    dart.setLibraryUri(BuiltSet, L2);
    dart.setFieldSignature(BuiltSet, () => ({
      __proto__: dart.getFields(BuiltSet.__proto__),
      [_setFactory$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []))),
      [_set$]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(E)))),
      [_hashCode]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(BuiltSet, [
      '_equals',
      'toString',
      'cast',
      'followedBy',
      'whereType',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toSet',
      'toList',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt'
    ]);
    dart.defineExtensionAccessors(BuiltSet, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltSet;
  });
  set.BuiltSet = set.BuiltSet$();
  dart.addTypeTests(set.BuiltSet, _is_BuiltSet_default);
  const _is__BuiltSet_default = Symbol('_is__BuiltSet_default');
  set._BuiltSet$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var LinkedHashSetOfEL = () => (LinkedHashSetOfEL = dart.constFn(collection.LinkedHashSet$(EL())))();
    class _BuiltSet extends set.BuiltSet$(dart.legacy(E)) {
      hasExactElementType(type) {
        return dart.wrapType(EL())._equals(type);
      }
    }
    (_BuiltSet.withSafeSet = function(setFactory, set) {
      _BuiltSet.__proto__.__.call(this, setFactory, set);
      ;
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheckTypes = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, LinkedHashSetOfEL().new());
      for (let element of iterable) {
        if (EL().is(element)) {
          this[_set$].add(element);
        } else {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
        }
      }
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheckForNull = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, LinkedHashSetOfEL().new());
      for (let element of iterable) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: null"));
        } else {
          this[_set$].add(EL().as(element));
        }
      }
    }).prototype = _BuiltSet.prototype;
    dart.addTypeTests(_BuiltSet);
    _BuiltSet.prototype[_is__BuiltSet_default] = true;
    dart.addTypeCaches(_BuiltSet);
    dart.setMethodSignature(_BuiltSet, () => ({
      __proto__: dart.getMethods(_BuiltSet.__proto__),
      hasExactElementType: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Type)])
    }));
    dart.setLibraryUri(_BuiltSet, L2);
    return _BuiltSet;
  });
  set._BuiltSet = set._BuiltSet$();
  dart.addTypeTests(set._BuiltSet, _is__BuiltSet_default);
  const _is_OverriddenHashcodeBuiltSet_default = Symbol('_is_OverriddenHashcodeBuiltSet_default');
  set.OverriddenHashcodeBuiltSet$ = dart.generic(T => {
    class OverriddenHashcodeBuiltSet extends set._BuiltSet$(dart.legacy(T)) {
      get hashCode() {
        return this[_overridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltSet.new = function(iterable, _overridenHashCode) {
      this[_overridenHashCode$] = _overridenHashCode;
      OverriddenHashcodeBuiltSet.__proto__.copyAndCheckTypes.call(this, iterable);
      ;
    }).prototype = OverriddenHashcodeBuiltSet.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSet);
    OverriddenHashcodeBuiltSet.prototype[_is_OverriddenHashcodeBuiltSet_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltSet);
    dart.setLibraryUri(OverriddenHashcodeBuiltSet, L2);
    dart.setFieldSignature(OverriddenHashcodeBuiltSet, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSet.__proto__),
      [_overridenHashCode$]: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSet, ['hashCode']);
    return OverriddenHashcodeBuiltSet;
  });
  set.OverriddenHashcodeBuiltSet = set.OverriddenHashcodeBuiltSet$();
  dart.addTypeTests(set.OverriddenHashcodeBuiltSet, _is_OverriddenHashcodeBuiltSet_default);
  var _setOwner = dart.privateName(set, "_setOwner");
  var _checkGenericTypeParameter = dart.privateName(set, "_checkGenericTypeParameter");
  var _withOwner = dart.privateName(set, "_withOwner");
  var _createSet = dart.privateName(set, "_createSet");
  var _setSafeSet = dart.privateName(set, "_setSafeSet");
  var _checkElement = dart.privateName(set, "_checkElement");
  var _safeSet = dart.privateName(set, "_safeSet");
  var _checkElements = dart.privateName(set, "_checkElements");
  const _is_SetBuilder_default = Symbol('_is_SetBuilder_default');
  set.SetBuilder$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var _BuiltSetOfEL = () => (_BuiltSetOfEL = dart.constFn(set._BuiltSet$(EL())))();
    var _BuiltSetLOfEL = () => (_BuiltSetLOfEL = dart.constFn(dart.legacy(_BuiltSetOfEL())))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(EL())))();
    var SetLOfEL = () => (SetLOfEL = dart.constFn(dart.legacy(SetOfEL())))();
    var VoidToSetLOfEL = () => (VoidToSetLOfEL = dart.constFn(dart.fnType(SetLOfEL(), [])))();
    var VoidToLSetLOfEL = () => (VoidToLSetLOfEL = dart.constFn(dart.legacy(VoidToSetLOfEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ELToEL = () => (ELToEL = dart.constFn(dart.fnType(EL(), [EL()])))();
    var ELToLEL = () => (ELToLEL = dart.constFn(dart.legacy(ELToEL())))();
    var ELToIterableLOfEL = () => (ELToIterableLOfEL = dart.constFn(dart.fnType(IterableLOfEL(), [EL()])))();
    var ELToLIterableLOfEL = () => (ELToLIterableLOfEL = dart.constFn(dart.legacy(ELToIterableLOfEL())))();
    var LinkedHashSetOfEL = () => (LinkedHashSetOfEL = dart.constFn(collection.LinkedHashSet$(EL())))();
    class SetBuilder extends core.Object {
      static new(iterable = C0 || CT.C0) {
        let t0;
        t0 = new (set.SetBuilder$(dart.legacy(E)))._uninitialized();
        return (() => {
          t0.replace(iterable);
          return t0;
        })();
      }
      build() {
        this[_setOwner] == null ? this[_setOwner] = new (_BuiltSetOfEL()).withSafeSet(this[_setFactory$], this[_set$]) : null;
        return this[_setOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltSetLOfEL().is(iterable) && dart.equals(iterable[_setFactory$], this[_setFactory$])) {
          this[_withOwner](iterable);
        } else {
          let set = this[_createSet]();
          for (let element of iterable) {
            if (EL().is(element)) {
              set.add(element);
            } else {
              dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
            }
          }
          this[_setSafeSet](set);
        }
      }
      withBase(base) {
        let t0;
        VoidToLSetLOfEL().as(base);
        if (base == null) {
          dart.throw(new core.ArgumentError.notNull("base"));
        }
        this[_setFactory$] = base;
        this[_setSafeSet]((t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$]);
          return t0;
        })()));
      }
      withDefaultBase() {
        let t0;
        this[_setFactory$] = null;
        this[_setSafeSet]((t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$]);
          return t0;
        })()));
      }
      get length() {
        return this[_set$][$length];
      }
      get isEmpty() {
        return this[_set$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$][$isNotEmpty];
      }
      add(value) {
        EL().as(value);
        this[_checkElement](value);
        return this[_safeSet].add(value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        iterable = iterables.evaluateIterable(EL(), iterable);
        this[_checkElements](iterable);
        this[_safeSet].addAll(iterable);
      }
      clear() {
        this[_safeSet].clear();
      }
      remove(value) {
        return this[_safeSet].remove(value);
      }
      removeAll(elements) {
        this[_safeSet].removeAll(elements);
      }
      removeWhere(test) {
        this[_safeSet].removeWhere(test);
      }
      retainAll(elements) {
        this[_safeSet].retainAll(elements);
      }
      retainWhere(test) {
        this[_safeSet].retainWhere(test);
      }
      map(f) {
        let t0;
        ELToLEL().as(f);
        let result = (t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$][$map](EL(), f));
          return t0;
        })());
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        let t0;
        ELToLIterableLOfEL().as(f);
        let result = (t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$][$expand](EL(), f));
          return t0;
        })());
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      take(n) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$][$take](n));
          return t0;
        })()));
      }
      takeWhile(test) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$][$takeWhile](test));
          return t0;
        })()));
      }
      skip(n) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$][$skip](n));
          return t0;
        })()));
      }
      skipWhile(test) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), (() => {
          t0.addAll(this[_set$][$skipWhile](test));
          return t0;
        })()));
      }
      [_withOwner](setOwner) {
        if (!dart.equals(setOwner[_setFactory$], this[_setFactory$])) dart.assertFailed("Can't reuse a built set that uses a different base", L3, 205, 12, "setOwner._setFactory == _setFactory");
        this[_set$] = setOwner[_set$];
        this[_setOwner] = setOwner;
      }
      [_setSafeSet](set) {
        this[_setOwner] = null;
        this[_set$] = set;
      }
      get [_safeSet]() {
        let t0;
        if (this[_setOwner] != null) {
          this[_set$] = (t0 = this[_createSet](), (() => {
            t0.addAll(this[_set$]);
            return t0;
          })());
          this[_setOwner] = null;
        }
        return this[_set$];
      }
      [_createSet]() {
        return this[_setFactory$] != null ? this[_setFactory$]() : LinkedHashSetOfEL().new();
      }
      [_checkGenericTypeParameter]() {
        if (dart.wrapType(EL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit element type required, " + "for example \"new SetBuilder<int>\""));
        }
      }
      [_checkElement](element) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("null element"));
        }
      }
      [_checkElements](elements) {
        for (let element of elements) {
          this[_checkElement](element);
        }
      }
    }
    (SetBuilder._uninitialized = function() {
      this[_setOwner] = null;
      this[_set$] = null;
      this[_setFactory$] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = SetBuilder.prototype;
    (SetBuilder._fromBuiltSet = function(set) {
      this[_setFactory$] = set[_setFactory$];
      this[_set$] = set[_set$];
      this[_setOwner] = set;
      ;
    }).prototype = SetBuilder.prototype;
    dart.addTypeTests(SetBuilder);
    SetBuilder.prototype[_is_SetBuilder_default] = true;
    dart.addTypeCaches(SetBuilder);
    dart.setMethodSignature(SetBuilder, () => ({
      __proto__: dart.getMethods(SetBuilder.__proto__),
      build: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), []),
      update: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(set.SetBuilder$(dart.legacy(E)))]))]),
      replace: dart.fnType(dart.void, [dart.legacy(core.Iterable)]),
      withBase: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      withDefaultBase: dart.fnType(dart.void, []),
      add: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      retainAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      map: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      where: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      expand: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      take: dart.fnType(dart.void, [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      skip: dart.fnType(dart.void, [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [_withOwner]: dart.fnType(dart.void, [dart.legacy(set._BuiltSet$(dart.legacy(E)))]),
      [_setSafeSet]: dart.fnType(dart.void, [dart.legacy(core.Set$(dart.legacy(E)))]),
      [_createSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkElement]: dart.fnType(dart.void, [dart.legacy(E)]),
      [_checkElements]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(E)))])
    }));
    dart.setGetterSignature(SetBuilder, () => ({
      __proto__: dart.getGetters(SetBuilder.__proto__),
      length: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [_safeSet]: dart.legacy(core.Set$(dart.legacy(E)))
    }));
    dart.setLibraryUri(SetBuilder, L2);
    dart.setFieldSignature(SetBuilder, () => ({
      __proto__: dart.getFields(SetBuilder.__proto__),
      [_setFactory$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []))),
      [_set$]: dart.fieldType(dart.legacy(core.Set$(dart.legacy(E)))),
      [_setOwner]: dart.fieldType(dart.legacy(set._BuiltSet$(dart.legacy(E))))
    }));
    return SetBuilder;
  });
  set.SetBuilder = set.SetBuilder$();
  dart.addTypeTests(set.SetBuilder, _is_SetBuilder_default);
  set['BuiltSetExtension|build'] = function BuiltSetExtension$124build(T, $this) {
    return new (set._BuiltSet$(dart.legacy(T))).copyAndCheckForNull($this);
  };
  set['BuiltSetExtension|get#build'] = function BuiltSetExtension$124get$35build(T, $this) {
    return dart.fn(() => set['BuiltSetExtension|build'](dart.legacy(T), $this), dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(T))), []));
  };
  set['BuiltSetIterableExtension|toBuiltSet'] = function BuiltSetIterableExtension$124toBuiltSet(E, $this) {
    return set.BuiltSet$(dart.legacy(E)).of($this);
  };
  set['BuiltSetIterableExtension|get#toBuiltSet'] = function BuiltSetIterableExtension$124get$35toBuiltSet(E, $this) {
    return dart.fn(() => set['BuiltSetIterableExtension|toBuiltSet'](dart.legacy(E), $this), dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), []));
  };
  iterables.evaluateIterable = function evaluateIterable(E, iterable) {
    if (!ListL().is(iterable) && !BuiltIterableL().is(iterable) && !SetL().is(iterable)) {
      iterable = iterable[$toList]();
    }
    return iterable;
  };
  var _set$0 = dart.privateName(copy_on_write_set, "_set");
  var _setFactory$0 = dart.privateName(copy_on_write_set, "_setFactory");
  var _copyBeforeWrite$ = dart.privateName(copy_on_write_set, "_copyBeforeWrite");
  var _maybeCopyBeforeWrite$ = dart.privateName(copy_on_write_set, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteSet_default = Symbol('_is_CopyOnWriteSet_default');
  copy_on_write_set.CopyOnWriteSet$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(EL())))();
    var SetLOfEL = () => (SetLOfEL = dart.constFn(dart.legacy(SetOfEL())))();
    var VoidToEL = () => (VoidToEL = dart.constFn(dart.fnType(EL(), [])))();
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.legacy(VoidToEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ELAndELToEL = () => (ELAndELToEL = dart.constFn(dart.fnType(EL(), [EL(), EL()])))();
    var ELAndELToLEL = () => (ELAndELToLEL = dart.constFn(dart.legacy(ELAndELToEL())))();
    var LinkedHashSetOfEL = () => (LinkedHashSetOfEL = dart.constFn(collection.LinkedHashSet$(EL())))();
    class CopyOnWriteSet extends core.Object {
      get length() {
        return this[_set$0][$length];
      }
      lookup(object) {
        return this[_set$0].lookup(object);
      }
      intersection(other) {
        return this[_set$0].intersection(other);
      }
      union(other) {
        SetLOfEL().as(other);
        return this[_set$0].union(other);
      }
      difference(other) {
        return this[_set$0].difference(other);
      }
      containsAll(other) {
        return this[_set$0].containsAll(other);
      }
      any(test) {
        return this[_set$0][$any](test);
      }
      cast(T) {
        return new (copy_on_write_set.CopyOnWriteSet$(dart.legacy(T))).new(this[_set$0].cast(dart.legacy(T)));
      }
      contains(element) {
        return this[_set$0].contains(element);
      }
      elementAt(index) {
        return this[_set$0][$elementAt](index);
      }
      every(test) {
        return this[_set$0][$every](test);
      }
      expand(T, f) {
        return this[_set$0][$expand](dart.legacy(T), f);
      }
      get first() {
        return this[_set$0][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_set$0][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_set$0][$fold](dart.legacy(T), initialValue, combine);
      }
      followedBy(other) {
        IterableLOfEL().as(other);
        return this[_set$0][$followedBy](other);
      }
      forEach(f) {
        return this[_set$0][$forEach](f);
      }
      get isEmpty() {
        return this[_set$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$0][$isNotEmpty];
      }
      get iterator() {
        return this[_set$0].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_set$0][$join](separator);
      }
      get last() {
        return this[_set$0][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_set$0][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_set$0][$map](dart.legacy(T), f);
      }
      reduce(combine) {
        ELAndELToLEL().as(combine);
        return this[_set$0][$reduce](combine);
      }
      get single() {
        return this[_set$0][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_set$0][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_set$0][$skip](count);
      }
      skipWhile(test) {
        return this[_set$0][$skipWhile](test);
      }
      take(count) {
        return this[_set$0][$take](count);
      }
      takeWhile(test) {
        return this[_set$0][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$0][$toList]({growable: growable});
      }
      toSet() {
        return this[_set$0].toSet();
      }
      where(test) {
        return this[_set$0][$where](test);
      }
      whereType(T) {
        return this[_set$0][$whereType](dart.legacy(T));
      }
      add(value) {
        EL().as(value);
        this[_maybeCopyBeforeWrite$]();
        return this[_set$0].add(value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].addAll(iterable);
      }
      clear() {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].clear();
      }
      remove(value) {
        this[_maybeCopyBeforeWrite$]();
        return this[_set$0].remove(value);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].removeWhere(test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].retainWhere(test);
      }
      removeAll(elements) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].removeAll(elements);
      }
      retainAll(elements) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].retainAll(elements);
      }
      toString() {
        return dart.toString(this[_set$0]);
      }
      [_maybeCopyBeforeWrite$]() {
        let t4;
        if (!dart.test(this[_copyBeforeWrite$])) return;
        this[_copyBeforeWrite$] = false;
        this[_set$0] = this[_setFactory$0] != null ? (t4 = this[_setFactory$0](), (() => {
          t4.addAll(this[_set$0]);
          return t4;
        })()) : LinkedHashSetOfEL().from(this[_set$0]);
      }
    }
    (CopyOnWriteSet.new = function(_set, _setFactory = null) {
      this[_set$0] = _set;
      this[_setFactory$0] = _setFactory;
      this[_copyBeforeWrite$] = true;
      ;
    }).prototype = CopyOnWriteSet.prototype;
    dart.addTypeTests(CopyOnWriteSet);
    CopyOnWriteSet.prototype[_is_CopyOnWriteSet_default] = true;
    dart.addTypeCaches(CopyOnWriteSet);
    CopyOnWriteSet[dart.implements] = () => [core.Set$(dart.legacy(E))];
    dart.setMethodSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getMethods(CopyOnWriteSet.__proto__),
      lookup: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      intersection: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      union: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [dart.legacy(core.Object)]),
      difference: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      containsAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      any: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$any]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      cast: dart.gFnType(T => [dart.legacy(core.Set$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.Set$(dart.legacy(T))), []]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      elementAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$elementAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      every: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$every]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      expand: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      [$expand]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      firstWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$firstWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      fold: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      [$fold]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      followedBy: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      [$followedBy]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      join: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      [$join]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      lastWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$lastWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      map: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      [$map]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      reduce: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      [$reduce]: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      singleWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$singleWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      skip: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$skip]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$skipWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      take: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$take]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$takeWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      where: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$where]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      whereType: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$whereType]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      add: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      removeAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      retainAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      [_maybeCopyBeforeWrite$]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getGetters(CopyOnWriteSet.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      first: dart.legacy(E),
      [$first]: dart.legacy(E),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      iterator: dart.legacy(core.Iterator$(dart.legacy(E))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(E))),
      last: dart.legacy(E),
      [$last]: dart.legacy(E),
      single: dart.legacy(E),
      [$single]: dart.legacy(E)
    }));
    dart.setLibraryUri(CopyOnWriteSet, L4);
    dart.setFieldSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getFields(CopyOnWriteSet.__proto__),
      [_setFactory$0]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []))),
      [_copyBeforeWrite$]: dart.fieldType(dart.legacy(core.bool)),
      [_set$0]: dart.fieldType(dart.legacy(core.Set$(dart.legacy(E))))
    }));
    dart.defineExtensionMethods(CopyOnWriteSet, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteSet, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'single'
    ]);
    return CopyOnWriteSet;
  });
  copy_on_write_set.CopyOnWriteSet = copy_on_write_set.CopyOnWriteSet$();
  dart.addTypeTests(copy_on_write_set.CopyOnWriteSet, _is_CopyOnWriteSet_default);
  var _overridenHashCode$0 = dart.privateName(list, "_overridenHashCode");
  var _list$ = dart.privateName(list, "_list");
  var _hashCode$ = dart.privateName(list, "_hashCode");
  const _is_BuiltList_default = Symbol('_is_BuiltList_default');
  list.BuiltList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListBuilderOfEL = () => (ListBuilderOfEL = dart.constFn(list.ListBuilder$(EL())))();
    var BuiltSetOfEL = () => (BuiltSetOfEL = dart.constFn(set.BuiltSet$(EL())))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var BuiltListOfEL = () => (BuiltListOfEL = dart.constFn(list.BuiltList$(EL())))();
    var BuiltListLOfEL = () => (BuiltListLOfEL = dart.constFn(dart.legacy(BuiltListOfEL())))();
    var _BuiltListOfEL = () => (_BuiltListOfEL = dart.constFn(list._BuiltList$(EL())))();
    var ELAndELToEL = () => (ELAndELToEL = dart.constFn(dart.fnType(EL(), [EL(), EL()])))();
    var ELAndELToLEL = () => (ELAndELToLEL = dart.constFn(dart.legacy(ELAndELToEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var CopyOnWriteListOfEL = () => (CopyOnWriteListOfEL = dart.constFn(copy_on_write_list.CopyOnWriteList$(EL())))();
    var VoidToEL = () => (VoidToEL = dart.constFn(dart.fnType(EL(), [])))();
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.legacy(VoidToEL())))();
    class BuiltList extends core.Object {
      static new(iterable = C0 || CT.C0) {
        return list.BuiltList$(dart.legacy(E)).from(iterable);
      }
      static from(iterable) {
        if (_BuiltListL().is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(dart.legacy(E))))) {
          return dart.legacy(list.BuiltList$(dart.legacy(E))).as(iterable);
        } else {
          return new (list._BuiltList$(dart.legacy(E))).copyAndCheckTypes(iterable);
        }
      }
      static of(iterable) {
        if (dart.legacy(list._BuiltList$(dart.legacy(E))).is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(dart.legacy(E))))) {
          return iterable;
        } else {
          return new (list._BuiltList$(dart.legacy(E))).copyAndCheckForNull(iterable);
        }
      }
      static build(updates) {
        let t4;
        return (t4 = list.ListBuilder$(dart.legacy(E)).new(), (() => {
          t4.update(updates);
          return t4;
        })()).build();
      }
      toBuilder() {
        return ListBuilderOfEL().new(this);
      }
      rebuild(updates) {
        let t4;
        return (t4 = this.toBuilder(), (() => {
          t4.update(updates);
          return t4;
        })()).build();
      }
      toBuiltList() {
        return this;
      }
      toBuiltSet() {
        return BuiltSetOfEL().new(this);
      }
      get hashCode() {
        this[_hashCode$] == null ? this[_hashCode$] = hash.hashObjects(this[_list$]) : null;
        return this[_hashCode$];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!BuiltListL().is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let i = 0; i !== this.length; i = i + 1) {
          if (!dart.equals(dart.dsend(other, '_get', [i]), this._get(i))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_list$]);
      }
      asList() {
        return ListOfEL().unmodifiable(this[_list$]);
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      ['+'](other) {
        BuiltListLOfEL().as(other);
        return new (_BuiltListOfEL()).withSafeList(this[_list$][$plus](other[_list$]));
      }
      get length() {
        return this[_list$][$length];
      }
      get reversed() {
        return this[_list$][$reversed];
      }
      indexOf(element, start = 0) {
        EL().as(element);
        return this[_list$][$indexOf](element, start);
      }
      lastIndexOf(element, start = null) {
        EL().as(element);
        return this[_list$][$lastIndexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this[_list$][$indexWhere](test, start);
      }
      lastIndexWhere(test, start = null) {
        return this[_list$][$lastIndexWhere](test, start);
      }
      sublist(start, end = null) {
        return new (_BuiltListOfEL()).withSafeList(this[_list$][$sublist](start, end));
      }
      getRange(start, end) {
        return this[_list$][$getRange](start, end);
      }
      asMap() {
        return this[_list$][$asMap]();
      }
      get iterator() {
        return this[_list$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      map(T, f) {
        return this[_list$][$map](dart.legacy(T), f);
      }
      where(test) {
        return this[_list$][$where](test);
      }
      whereType(T) {
        return this[_list$][$whereType](dart.legacy(T));
      }
      expand(T, f) {
        return this[_list$][$expand](dart.legacy(T), f);
      }
      contains(element) {
        return this[_list$][$contains](element);
      }
      forEach(f) {
        return this[_list$][$forEach](f);
      }
      reduce(combine) {
        ELAndELToLEL().as(combine);
        return this[_list$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_list$][$fold](dart.legacy(T), initialValue, combine);
      }
      followedBy(other) {
        IterableLOfEL().as(other);
        return this[_list$][$followedBy](other);
      }
      every(test) {
        return this[_list$][$every](test);
      }
      join(separator = "") {
        return this[_list$][$join](separator);
      }
      any(test) {
        return this[_list$][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return new (CopyOnWriteListOfEL()).new(this[_list$], growable);
      }
      toSet() {
        return this[_list$][$toSet]();
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      take(n) {
        return this[_list$][$take](n);
      }
      takeWhile(test) {
        return this[_list$][$takeWhile](test);
      }
      skip(n) {
        return this[_list$][$skip](n);
      }
      skipWhile(test) {
        return this[_list$][$skipWhile](test);
      }
      get first() {
        return this[_list$][$first];
      }
      get last() {
        return this[_list$][$last];
      }
      get single() {
        return this[_list$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_list$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_list$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_list$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_list$][$elementAt](index);
      }
      cast(T) {
        return core.Iterable.castFrom(EL(), dart.legacy(T), this[_list$]);
      }
    }
    (BuiltList.__ = function(_list) {
      this[_hashCode$] = null;
      this[_list$] = _list;
      if (dart.wrapType(EL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit element type required, for example \"new BuiltList<int>\""));
      }
    }).prototype = BuiltList.prototype;
    BuiltList.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltList);
    BuiltList.prototype[_is_BuiltList_default] = true;
    dart.addTypeCaches(BuiltList);
    BuiltList[dart.implements] = () => [core.Iterable$(dart.legacy(E)), iterable.BuiltIterable$(dart.legacy(E))];
    dart.setMethodSignature(BuiltList, () => ({
      __proto__: dart.getMethods(BuiltList.__proto__),
      toBuilder: dart.fnType(dart.legacy(list.ListBuilder$(dart.legacy(E))), []),
      rebuild: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(list.ListBuilder$(dart.legacy(E)))]))]),
      toBuiltList: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), []),
      toBuiltSet: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(E))), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      asList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), []),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      '+': dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), [dart.legacy(core.Object)]),
      indexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      lastIndexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      indexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      lastIndexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      sublist: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      getRange: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int), dart.legacy(core.int)]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(E))), []),
      map: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      [$map]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      where: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$where]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      whereType: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$whereType]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      expand: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      [$expand]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      reduce: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      [$reduce]: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      fold: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      [$fold]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      followedBy: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      [$followedBy]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      every: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$every]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      join: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      [$join]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      any: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$any]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      take: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$take]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$takeWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      skip: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$skip]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$skipWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      firstWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$firstWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      lastWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$lastWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      singleWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$singleWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      elementAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$elementAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      cast: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []])
    }));
    dart.setGetterSignature(BuiltList, () => ({
      __proto__: dart.getGetters(BuiltList.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      reversed: dart.legacy(core.Iterable$(dart.legacy(E))),
      iterator: dart.legacy(core.Iterator$(dart.legacy(E))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(E))),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      first: dart.legacy(E),
      [$first]: dart.legacy(E),
      last: dart.legacy(E),
      [$last]: dart.legacy(E),
      single: dart.legacy(E),
      [$single]: dart.legacy(E)
    }));
    dart.setLibraryUri(BuiltList, L5);
    dart.setFieldSignature(BuiltList, () => ({
      __proto__: dart.getFields(BuiltList.__proto__),
      [_list$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(E)))),
      [_hashCode$]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(BuiltList, [
      '_equals',
      'toString',
      'map',
      'where',
      'whereType',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'followedBy',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt',
      'cast'
    ]);
    dart.defineExtensionAccessors(BuiltList, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltList;
  });
  list.BuiltList = list.BuiltList$();
  dart.addTypeTests(list.BuiltList, _is_BuiltList_default);
  const _is__BuiltList_default = Symbol('_is__BuiltList_default');
  list._BuiltList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    class _BuiltList extends list.BuiltList$(dart.legacy(E)) {
      hasExactElementType(type) {
        return dart.wrapType(EL())._equals(type);
      }
    }
    (_BuiltList.withSafeList = function(list) {
      _BuiltList.__proto__.__.call(this, list);
      ;
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheckTypes = function(iterable = C0 || CT.C0) {
      _BuiltList.__proto__.__.call(this, ListOfEL().from(iterable, {growable: false}));
      for (let element of this[_list$]) {
        if (!EL().is(element)) {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
        }
      }
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheckForNull = function(iterable) {
      _BuiltList.__proto__.__.call(this, ListOfEL().from(iterable, {growable: false}));
      for (let element of this[_list$]) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: null"));
        }
      }
    }).prototype = _BuiltList.prototype;
    dart.addTypeTests(_BuiltList);
    _BuiltList.prototype[_is__BuiltList_default] = true;
    dart.addTypeCaches(_BuiltList);
    dart.setMethodSignature(_BuiltList, () => ({
      __proto__: dart.getMethods(_BuiltList.__proto__),
      hasExactElementType: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Type)])
    }));
    dart.setLibraryUri(_BuiltList, L5);
    return _BuiltList;
  });
  list._BuiltList = list._BuiltList$();
  dart.addTypeTests(list._BuiltList, _is__BuiltList_default);
  const _is_OverriddenHashcodeBuiltList_default = Symbol('_is_OverriddenHashcodeBuiltList_default');
  list.OverriddenHashcodeBuiltList$ = dart.generic(T => {
    class OverriddenHashcodeBuiltList extends list._BuiltList$(dart.legacy(T)) {
      get hashCode() {
        return this[_overridenHashCode$0];
      }
    }
    (OverriddenHashcodeBuiltList.new = function(iterable, _overridenHashCode) {
      this[_overridenHashCode$0] = _overridenHashCode;
      OverriddenHashcodeBuiltList.__proto__.copyAndCheckTypes.call(this, iterable);
      ;
    }).prototype = OverriddenHashcodeBuiltList.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltList);
    OverriddenHashcodeBuiltList.prototype[_is_OverriddenHashcodeBuiltList_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltList);
    dart.setLibraryUri(OverriddenHashcodeBuiltList, L5);
    dart.setFieldSignature(OverriddenHashcodeBuiltList, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltList.__proto__),
      [_overridenHashCode$0]: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltList, ['hashCode']);
    return OverriddenHashcodeBuiltList;
  });
  list.OverriddenHashcodeBuiltList = list.OverriddenHashcodeBuiltList$();
  dart.addTypeTests(list.OverriddenHashcodeBuiltList, _is_OverriddenHashcodeBuiltList_default);
  var _listOwner = dart.privateName(list, "_listOwner");
  var _checkGenericTypeParameter$ = dart.privateName(list, "_checkGenericTypeParameter");
  var _setOwner$ = dart.privateName(list, "_setOwner");
  var _setSafeList = dart.privateName(list, "_setSafeList");
  var _checkElement$ = dart.privateName(list, "_checkElement");
  var _safeList = dart.privateName(list, "_safeList");
  var _checkElements$ = dart.privateName(list, "_checkElements");
  const _is_ListBuilder_default = Symbol('_is_ListBuilder_default');
  list.ListBuilder$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var _BuiltListOfEL = () => (_BuiltListOfEL = dart.constFn(list._BuiltList$(EL())))();
    var _BuiltListLOfEL = () => (_BuiltListLOfEL = dart.constFn(dart.legacy(_BuiltListOfEL())))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ELToEL = () => (ELToEL = dart.constFn(dart.fnType(EL(), [EL()])))();
    var ELToLEL = () => (ELToLEL = dart.constFn(dart.legacy(ELToEL())))();
    var ELToIterableLOfEL = () => (ELToIterableLOfEL = dart.constFn(dart.fnType(IterableLOfEL(), [EL()])))();
    var ELToLIterableLOfEL = () => (ELToLIterableLOfEL = dart.constFn(dart.legacy(ELToIterableLOfEL())))();
    class ListBuilder extends core.Object {
      static new(iterable = C0 || CT.C0) {
        let t4;
        t4 = new (list.ListBuilder$(dart.legacy(E)))._uninitialized();
        return (() => {
          t4.replace(iterable);
          return t4;
        })();
      }
      build() {
        if (this[_listOwner] == null) {
          this[_setOwner$](new (_BuiltListOfEL()).withSafeList(this[_list$]));
        }
        return this[_listOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltListLOfEL().is(iterable)) {
          this[_setOwner$](iterable);
        } else {
          this[_setSafeList](ListOfEL().from(iterable));
        }
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      _set(index, element$) {
        let element = element$;
        EL().as(element);
        this[_checkElement$](element);
        this[_safeList][$_set](index, element);
        return element$;
      }
      get first() {
        return this[_list$][$first];
      }
      set first(value) {
        EL().as(value);
        this[_checkElement$](value);
        this[_safeList][$first] = value;
      }
      get last() {
        return this[_list$][$last];
      }
      set last(value) {
        EL().as(value);
        this[_checkElement$](value);
        this[_safeList][$last] = value;
      }
      get length() {
        return this[_list$][$length];
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      add(value) {
        EL().as(value);
        this[_checkElement$](value);
        this[_safeList][$add](value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        let safeList = this[_safeList];
        let lengthBefore = safeList[$length];
        safeList[$addAll](iterable);
        try {
          for (let i = lengthBefore; i != safeList[$length]; i = dart.notNull(i) + 1) {
            this[_checkElement$](safeList[$_get](i));
          }
        } catch (e) {
          let _ = dart.getThrown(e);
          safeList[$removeRange](lengthBefore, safeList[$length]);
          dart.rethrow(e);
        }
      }
      reverse() {
        this[_list$] = this[_list$][$reversed][$toList]({growable: true});
        this[_listOwner] = null;
      }
      sort(compare = null) {
        this[_safeList][$sort](compare);
      }
      shuffle(random = null) {
        this[_safeList][$shuffle](random);
      }
      clear() {
        this[_safeList][$clear]();
      }
      insert(index, element) {
        EL().as(element);
        this[_checkElement$](element);
        this[_safeList][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableLOfEL().as(iterable);
        let safeList = this[_safeList];
        let lengthBefore = safeList[$length];
        safeList[$insertAll](index, iterable);
        let insertedLength = dart.notNull(safeList[$length]) - dart.notNull(lengthBefore);
        try {
          for (let i = index; i !== dart.notNull(index) + insertedLength; i = dart.notNull(i) + 1) {
            this[_checkElement$](safeList[$_get](i));
          }
        } catch (e) {
          let _ = dart.getThrown(e);
          safeList[$removeRange](index, dart.notNull(index) + insertedLength);
          dart.rethrow(e);
        }
      }
      setAll(index, iterable) {
        IterableLOfEL().as(iterable);
        iterable = iterables.evaluateIterable(EL(), iterable);
        this[_checkElements$](iterable);
        this[_safeList][$setAll](index, iterable);
      }
      remove(value) {
        return this[_safeList][$remove](value);
      }
      removeAt(index) {
        return this[_safeList][$removeAt](index);
      }
      removeLast() {
        return this[_safeList][$removeLast]();
      }
      removeWhere(test) {
        this[_safeList][$removeWhere](test);
      }
      retainWhere(test) {
        this[_safeList][$retainWhere](test);
      }
      sublist(start, end = null) {
        this[_setSafeList](this[_list$][$sublist](start, end));
      }
      setRange(start, end, iterable, skipCount = 0) {
        IterableLOfEL().as(iterable);
        iterable = iterables.evaluateIterable(EL(), iterable);
        this[_checkElements$](iterable);
        this[_safeList][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_safeList][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        EL().as(fillValue);
        this[_checkElement$](fillValue);
        this[_safeList][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableLOfEL().as(iterable);
        iterable = iterables.evaluateIterable(EL(), iterable);
        this[_checkElements$](iterable);
        this[_safeList][$replaceRange](start, end, iterable);
      }
      map(f) {
        ELToLEL().as(f);
        let result = this[_list$][$map](EL(), f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        ELToLIterableLOfEL().as(f);
        let result = this[_list$][$expand](EL(), f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      take(n) {
        this[_setSafeList](this[_list$] = this[_list$][$take](n)[$toList]({growable: true}));
      }
      takeWhile(test) {
        this[_setSafeList](this[_list$] = this[_list$][$takeWhile](test)[$toList]({growable: true}));
      }
      skip(n) {
        this[_setSafeList](this[_list$][$skip](n)[$toList]({growable: true}));
      }
      skipWhile(test) {
        this[_setSafeList](this[_list$][$skipWhile](test)[$toList]({growable: true}));
      }
      [_setOwner$](listOwner) {
        this[_list$] = listOwner[_list$];
        this[_listOwner] = listOwner;
      }
      [_setSafeList](list) {
        this[_list$] = list;
        this[_listOwner] = null;
      }
      get [_safeList]() {
        if (this[_listOwner] != null) {
          this[_setSafeList](ListOfEL().from(this[_list$], {growable: true}));
        }
        return this[_list$];
      }
      [_checkGenericTypeParameter$]() {
        if (dart.wrapType(EL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit element type required, " + "for example \"new ListBuilder<int>\""));
        }
      }
      [_checkElement$](element) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("null element"));
        }
      }
      [_checkElements$](elements) {
        for (let element of elements) {
          this[_checkElement$](element);
        }
      }
    }
    (ListBuilder._uninitialized = function() {
      this[_list$] = null;
      this[_listOwner] = null;
      this[_checkGenericTypeParameter$]();
    }).prototype = ListBuilder.prototype;
    dart.addTypeTests(ListBuilder);
    ListBuilder.prototype[_is_ListBuilder_default] = true;
    dart.addTypeCaches(ListBuilder);
    dart.setMethodSignature(ListBuilder, () => ({
      __proto__: dart.getMethods(ListBuilder.__proto__),
      build: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), []),
      update: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(list.ListBuilder$(dart.legacy(E)))]))]),
      replace: dart.fnType(dart.void, [dart.legacy(core.Iterable)]),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      reverse: dart.fnType(dart.void, []),
      sort: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(E), dart.legacy(E)]))]),
      shuffle: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      clear: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      insertAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      setAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      removeLast: dart.fnType(dart.legacy(E), []),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      sublist: dart.fnType(dart.void, [dart.legacy(core.int)], [dart.legacy(core.int)]),
      setRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      removeRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      fillRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      replaceRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      map: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      where: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      expand: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      take: dart.fnType(dart.void, [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      skip: dart.fnType(dart.void, [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [_setOwner$]: dart.fnType(dart.void, [dart.legacy(list._BuiltList$(dart.legacy(E)))]),
      [_setSafeList]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(E)))]),
      [_checkGenericTypeParameter$]: dart.fnType(dart.void, []),
      [_checkElement$]: dart.fnType(dart.void, [dart.legacy(E)]),
      [_checkElements$]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(E)))])
    }));
    dart.setGetterSignature(ListBuilder, () => ({
      __proto__: dart.getGetters(ListBuilder.__proto__),
      first: dart.legacy(E),
      last: dart.legacy(E),
      length: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [_safeList]: dart.legacy(core.List$(dart.legacy(E)))
    }));
    dart.setSetterSignature(ListBuilder, () => ({
      __proto__: dart.getSetters(ListBuilder.__proto__),
      first: dart.legacy(core.Object),
      last: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(ListBuilder, L5);
    dart.setFieldSignature(ListBuilder, () => ({
      __proto__: dart.getFields(ListBuilder.__proto__),
      [_list$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(E)))),
      [_listOwner]: dart.fieldType(dart.legacy(list._BuiltList$(dart.legacy(E))))
    }));
    return ListBuilder;
  });
  list.ListBuilder = list.ListBuilder$();
  dart.addTypeTests(list.ListBuilder, _is_ListBuilder_default);
  list['BuiltListExtension|build'] = function BuiltListExtension$124build(T, $this) {
    return new (list._BuiltList$(dart.legacy(T))).copyAndCheckForNull($this);
  };
  list['BuiltListExtension|get#build'] = function BuiltListExtension$124get$35build(T, $this) {
    return dart.fn(() => list['BuiltListExtension|build'](dart.legacy(T), $this), dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(T))), []));
  };
  list['BuiltListIterableExtension|toBuiltList'] = function BuiltListIterableExtension$124toBuiltList(E, $this) {
    return list.BuiltList$(dart.legacy(E)).of($this);
  };
  list['BuiltListIterableExtension|get#toBuiltList'] = function BuiltListIterableExtension$124get$35toBuiltList(E, $this) {
    return dart.fn(() => list['BuiltListIterableExtension|toBuiltList'](dart.legacy(E), $this), dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(E))), []));
  };
  var _list$0 = dart.privateName(copy_on_write_list, "_list");
  var _growable$ = dart.privateName(copy_on_write_list, "_growable");
  var _copyBeforeWrite$0 = dart.privateName(copy_on_write_list, "_copyBeforeWrite");
  var _maybeCopyBeforeWrite$0 = dart.privateName(copy_on_write_list, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteList_default = Symbol('_is_CopyOnWriteList_default');
  copy_on_write_list.CopyOnWriteList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var ListLOfEL = () => (ListLOfEL = dart.constFn(dart.legacy(ListOfEL())))();
    var VoidToEL = () => (VoidToEL = dart.constFn(dart.fnType(EL(), [])))();
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.legacy(VoidToEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ELAndELToEL = () => (ELAndELToEL = dart.constFn(dart.fnType(EL(), [EL(), EL()])))();
    var ELAndELToLEL = () => (ELAndELToLEL = dart.constFn(dart.legacy(ELAndELToEL())))();
    class CopyOnWriteList extends core.Object {
      get length() {
        return this[_list$0][$length];
      }
      _get(index) {
        return this[_list$0][$_get](index);
      }
      ['+'](other) {
        ListLOfEL().as(other);
        return this[_list$0][$plus](other);
      }
      any(test) {
        return this[_list$0][$any](test);
      }
      asMap() {
        return this[_list$0][$asMap]();
      }
      cast(T) {
        return new (copy_on_write_list.CopyOnWriteList$(dart.legacy(T))).new(this[_list$0][$cast](dart.legacy(T)), this[_growable$]);
      }
      contains(element) {
        return this[_list$0][$contains](element);
      }
      elementAt(index) {
        return this[_list$0][$elementAt](index);
      }
      every(test) {
        return this[_list$0][$every](test);
      }
      expand(T, f) {
        return this[_list$0][$expand](dart.legacy(T), f);
      }
      get first() {
        return this[_list$0][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_list$0][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_list$0][$fold](dart.legacy(T), initialValue, combine);
      }
      followedBy(other) {
        IterableLOfEL().as(other);
        return this[_list$0][$followedBy](other);
      }
      forEach(f) {
        return this[_list$0][$forEach](f);
      }
      getRange(start, end) {
        return this[_list$0][$getRange](start, end);
      }
      indexOf(element, start = 0) {
        EL().as(element);
        return this[_list$0][$indexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this[_list$0][$indexWhere](test, start);
      }
      get isEmpty() {
        return this[_list$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$0][$isNotEmpty];
      }
      get iterator() {
        return this[_list$0][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_list$0][$join](separator);
      }
      get last() {
        return this[_list$0][$last];
      }
      lastIndexOf(element, start = null) {
        EL().as(element);
        return this[_list$0][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start = null) {
        return this[_list$0][$lastIndexWhere](test, start);
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_list$0][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_list$0][$map](dart.legacy(T), f);
      }
      reduce(combine) {
        ELAndELToLEL().as(combine);
        return this[_list$0][$reduce](combine);
      }
      get reversed() {
        return this[_list$0][$reversed];
      }
      get single() {
        return this[_list$0][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this[_list$0][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_list$0][$skip](count);
      }
      skipWhile(test) {
        return this[_list$0][$skipWhile](test);
      }
      sublist(start, end = null) {
        return this[_list$0][$sublist](start, end);
      }
      take(count) {
        return this[_list$0][$take](count);
      }
      takeWhile(test) {
        return this[_list$0][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_list$0][$toList]({growable: growable});
      }
      toSet() {
        return this[_list$0][$toSet]();
      }
      where(test) {
        return this[_list$0][$where](test);
      }
      whereType(T) {
        return this[_list$0][$whereType](dart.legacy(T));
      }
      set length(length) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$length] = length;
      }
      _set(index, element$) {
        let element = element$;
        EL().as(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$_set](index, element);
        return element$;
      }
      set first(element) {
        EL().as(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$first] = element;
      }
      set last(element) {
        EL().as(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$last] = element;
      }
      add(value) {
        EL().as(value);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$add](value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$addAll](iterable);
      }
      sort(compare = null) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$sort](compare);
      }
      shuffle(random = null) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$shuffle](random);
      }
      clear() {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$clear]();
      }
      insert(index, element) {
        EL().as(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableLOfEL().as(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableLOfEL().as(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$setAll](index, iterable);
      }
      remove(value) {
        this[_maybeCopyBeforeWrite$0]();
        return this[_list$0][$remove](value);
      }
      removeAt(index) {
        this[_maybeCopyBeforeWrite$0]();
        return this[_list$0][$removeAt](index);
      }
      removeLast() {
        this[_maybeCopyBeforeWrite$0]();
        return this[_list$0][$removeLast]();
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$removeWhere](test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$retainWhere](test);
      }
      setRange(start, end, iterable, skipCount = 0) {
        IterableLOfEL().as(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$removeRange](start, end);
      }
      fillRange(start, end, fillValue = null) {
        EL().as(fillValue);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableLOfEL().as(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$replaceRange](start, end, iterable);
      }
      toString() {
        return dart.toString(this[_list$0]);
      }
      [_maybeCopyBeforeWrite$0]() {
        if (!dart.test(this[_copyBeforeWrite$0])) return;
        this[_copyBeforeWrite$0] = false;
        this[_list$0] = ListOfEL().from(this[_list$0], {growable: this[_growable$]});
      }
    }
    (CopyOnWriteList.new = function(_list, _growable) {
      this[_list$0] = _list;
      this[_growable$] = _growable;
      this[_copyBeforeWrite$0] = true;
      ;
    }).prototype = CopyOnWriteList.prototype;
    CopyOnWriteList.prototype[dart.isList] = true;
    dart.addTypeTests(CopyOnWriteList);
    CopyOnWriteList.prototype[_is_CopyOnWriteList_default] = true;
    dart.addTypeCaches(CopyOnWriteList);
    CopyOnWriteList[dart.implements] = () => [core.List$(dart.legacy(E))];
    dart.setMethodSignature(CopyOnWriteList, () => ({
      __proto__: dart.getMethods(CopyOnWriteList.__proto__),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      '+': dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.Object)]),
      [$plus]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.Object)]),
      any: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$any]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(E))), []),
      [$asMap]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(E))), []),
      cast: dart.gFnType(T => [dart.legacy(core.List$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.List$(dart.legacy(T))), []]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      elementAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$elementAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      every: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$every]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      expand: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      [$expand]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      firstWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$firstWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      fold: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      [$fold]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(E)]))]]),
      followedBy: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      [$followedBy]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(E)]))]),
      getRange: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int), dart.legacy(core.int)]),
      [$getRange]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int), dart.legacy(core.int)]),
      indexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$indexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      indexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      [$indexWhere]: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      join: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      [$join]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      lastIndexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$lastIndexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      lastIndexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      [$lastIndexWhere]: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      lastWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$lastWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      map: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      [$map]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      reduce: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      [$reduce]: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      singleWhere: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$singleWhere]: dart.fnType(dart.legacy(E), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], {orElse: dart.legacy(core.Object)}, {}),
      skip: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$skip]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$skipWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      sublist: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      [$sublist]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      take: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$take]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$takeWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      where: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$where]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      whereType: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$whereType]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      sort: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(E), dart.legacy(E)]))]),
      [$sort]: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(E), dart.legacy(E)]))]),
      shuffle: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      [$shuffle]: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insert]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      insertAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      setAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$setAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$removeAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      removeLast: dart.fnType(dart.legacy(E), []),
      [$removeLast]: dart.fnType(dart.legacy(E), []),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$retainWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      setRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$setRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      removeRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      [$removeRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      fillRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      [$fillRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      replaceRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      [$replaceRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      [_maybeCopyBeforeWrite$0]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getGetters(CopyOnWriteList.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      first: dart.legacy(E),
      [$first]: dart.legacy(E),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      iterator: dart.legacy(core.Iterator$(dart.legacy(E))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(E))),
      last: dart.legacy(E),
      [$last]: dart.legacy(E),
      reversed: dart.legacy(core.Iterable$(dart.legacy(E))),
      [$reversed]: dart.legacy(core.Iterable$(dart.legacy(E))),
      single: dart.legacy(E),
      [$single]: dart.legacy(E)
    }));
    dart.setSetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getSetters(CopyOnWriteList.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      first: dart.legacy(core.Object),
      [$first]: dart.legacy(core.Object),
      last: dart.legacy(core.Object),
      [$last]: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(CopyOnWriteList, L6);
    dart.setFieldSignature(CopyOnWriteList, () => ({
      __proto__: dart.getFields(CopyOnWriteList.__proto__),
      [_copyBeforeWrite$0]: dart.fieldType(dart.legacy(core.bool)),
      [_growable$]: dart.finalFieldType(dart.legacy(core.bool)),
      [_list$0]: dart.fieldType(dart.legacy(core.List$(dart.legacy(E))))
    }));
    dart.defineExtensionMethods(CopyOnWriteList, [
      '_get',
      '+',
      'any',
      'asMap',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'getRange',
      'indexOf',
      'indexWhere',
      'join',
      'lastIndexOf',
      'lastIndexWhere',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'sublist',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      '_set',
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteList, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'reversed',
      'single'
    ]);
    return CopyOnWriteList;
  });
  copy_on_write_list.CopyOnWriteList = copy_on_write_list.CopyOnWriteList$();
  dart.addTypeTests(copy_on_write_list.CopyOnWriteList, _is_CopyOnWriteList_default);
  var _overridenHashCode$1 = dart.privateName(set_multimap, "_overridenHashCode");
  var _map$0 = dart.privateName(set_multimap, "_map");
  var _emptySet = dart.privateName(set_multimap, "_emptySet");
  var _hashCode$0 = dart.privateName(set_multimap, "_hashCode");
  var _keys = dart.privateName(set_multimap, "_keys");
  var _values = dart.privateName(set_multimap, "_values");
  var C1;
  const _is_BuiltSetMultimap_default = Symbol('_is_BuiltSetMultimap_default');
  set_multimap.BuiltSetMultimap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var SetMultimapBuilderOfKL$VL = () => (SetMultimapBuilderOfKL$VL = dart.constFn(set_multimap.SetMultimapBuilder$(KL(), VL())))();
    var CopyOnWriteMapOfKL$BuiltSetLOfVL = () => (CopyOnWriteMapOfKL$BuiltSetLOfVL = dart.constFn(copy_on_write_map.CopyOnWriteMap$(KL(), BuiltSetLOfVL())))();
    var KLTointL = () => (KLTointL = dart.constFn(dart.fnType(intL(), [KL()])))();
    var MapOfKL$IterableLOfVL = () => (MapOfKL$IterableLOfVL = dart.constFn(core.Map$(KL(), IterableLOfVL())))();
    var KLAndBuiltSetLOfVLToNull = () => (KLAndBuiltSetLOfVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), BuiltSetLOfVL()])))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var BuiltSetOfVL = () => (BuiltSetOfVL = dart.constFn(set.BuiltSet$(VL())))();
    var BuiltSetLOfVL = () => (BuiltSetLOfVL = dart.constFn(dart.legacy(BuiltSetOfVL())))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var VLToNull = () => (VLToNull = dart.constFn(dart.fnType(core.Null, [VL()])))();
    var BuiltSetLOfVLToBuiltSetLOfVL = () => (BuiltSetLOfVLToBuiltSetLOfVL = dart.constFn(dart.fnType(BuiltSetLOfVL(), [BuiltSetLOfVL()])))();
    class BuiltSetMultimap extends core.Object {
      static new(multimap = C1 || CT.C1) {
        if (_BuiltSetMultimapL().is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(dart.legacy(K)), dart.wrapType(dart.legacy(V))))) {
          return dart.legacy(set_multimap.BuiltSetMultimap$(dart.legacy(K), dart.legacy(V))).as(multimap);
        } else if (MapL().is(multimap) || SetMultimapL().is(multimap) || BuiltSetMultimapL().is(multimap)) {
          return new (set_multimap._BuiltSetMultimap$(dart.legacy(K), dart.legacy(V))).copyAndCheck(IterableL().as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, SetMultimap or BuiltSetMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      static build(updates) {
        let t10;
        return (t10 = set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V)).new(), (() => {
          t10.update(updates);
          return t10;
        })()).build();
      }
      toBuilder() {
        return SetMultimapBuilderOfKL$VL().new(this);
      }
      rebuild(updates) {
        let t10;
        return (t10 = this.toBuilder(), (() => {
          t10.update(updates);
          return t10;
        })()).build();
      }
      toMap() {
        return new (CopyOnWriteMapOfKL$BuiltSetLOfVL()).new(this[_map$0]);
      }
      get hashCode() {
        let t10;
        this[_hashCode$0] == null ? this[_hashCode$0] = hash.hashObjects((t10 = this[_map$0][$keys][$map](intL(), dart.fn(key => hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$0][$_get](key))), KLTointL()))[$toList]({growable: false}), (() => {
          t10[$sort]();
          return t10;
        })())) : null;
        return this[_hashCode$0];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!BuiltSetMultimapL().is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) return false;
        }
        return true;
      }
      asMap() {
        return MapOfKL$IterableLOfVL().unmodifiable(this[_map$0]);
      }
      toString() {
        return dart.toString(this[_map$0]);
      }
      _get(key) {
        let result = this[_map$0][$_get](key);
        return result == null ? this[_emptySet] : result;
      }
      containsKey(key) {
        return this[_map$0][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$0][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VLToNull()));
        }, KLAndBuiltSetLOfVLToNull()));
      }
      forEachKey(f) {
        this[_map$0][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KLAndBuiltSetLOfVLToNull()));
      }
      get isEmpty() {
        return this[_map$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$0][$isNotEmpty];
      }
      get keys() {
        this[_keys] == null ? this[_keys] = this[_map$0][$keys] : null;
        return this[_keys];
      }
      get length() {
        return this[_map$0][$length];
      }
      get values() {
        this[_values] == null ? this[_values] = this[_map$0][$values][$expand](VL(), dart.fn(x => x, BuiltSetLOfVLToBuiltSetLOfVL())) : null;
        return this[_values];
      }
    }
    (BuiltSetMultimap.__ = function(_map) {
      this[_emptySet] = BuiltSetOfVL().new();
      this[_hashCode$0] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_map$0] = _map;
      if (dart.wrapType(KL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new BuiltSetMultimap<int, int>\""));
      }
      if (dart.wrapType(VL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit value type required," + " for example \"new BuiltSetMultimap<int, int>\""));
      }
    }).prototype = BuiltSetMultimap.prototype;
    dart.addTypeTests(BuiltSetMultimap);
    BuiltSetMultimap.prototype[_is_BuiltSetMultimap_default] = true;
    dart.addTypeCaches(BuiltSetMultimap);
    dart.setMethodSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(BuiltSetMultimap.__proto__),
      toBuilder: dart.fnType(dart.legacy(set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V))), []),
      rebuild: dart.fnType(dart.legacy(set_multimap.BuiltSetMultimap$(dart.legacy(K), dart.legacy(V))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V)))]))]),
      toMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(set.BuiltSet$(dart.legacy(V))))), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(core.Iterable$(dart.legacy(V))))), []),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _get: dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(V))), [dart.legacy(core.Object)]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      forEachKey: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(core.Iterable$(dart.legacy(V)))]))])
    }));
    dart.setGetterSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getGetters(BuiltSetMultimap.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      length: dart.legacy(core.int),
      values: dart.legacy(core.Iterable$(dart.legacy(V)))
    }));
    dart.setLibraryUri(BuiltSetMultimap, L7);
    dart.setFieldSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getFields(BuiltSetMultimap.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(set.BuiltSet$(dart.legacy(V)))))),
      [_emptySet]: dart.finalFieldType(dart.legacy(set.BuiltSet$(dart.legacy(V)))),
      [_hashCode$0]: dart.fieldType(dart.legacy(core.int)),
      [_keys]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(K)))),
      [_values]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(V))))
    }));
    dart.defineExtensionMethods(BuiltSetMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltSetMultimap, ['hashCode']);
    return BuiltSetMultimap;
  });
  set_multimap.BuiltSetMultimap = set_multimap.BuiltSetMultimap$();
  dart.addTypeTests(set_multimap.BuiltSetMultimap, _is_BuiltSetMultimap_default);
  const _is__BuiltSetMultimap_default = Symbol('_is__BuiltSetMultimap_default');
  set_multimap._BuiltSetMultimap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedMapOfKL$BuiltSetLOfVL = () => (LinkedMapOfKL$BuiltSetLOfVL = dart.constFn(_js_helper.LinkedMap$(KL(), BuiltSetLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var BuiltSetOfVL = () => (BuiltSetOfVL = dart.constFn(set.BuiltSet$(VL())))();
    var BuiltSetLOfVL = () => (BuiltSetLOfVL = dart.constFn(dart.legacy(BuiltSetOfVL())))();
    class _BuiltSetMultimap extends set_multimap.BuiltSetMultimap$(dart.legacy(K), dart.legacy(V)) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(KL())._equals(key) && dart.wrapType(VL())._equals(value);
      }
    }
    (_BuiltSetMultimap.withSafeMap = function(map) {
      _BuiltSetMultimap.__proto__.__.call(this, map);
      ;
    }).prototype = _BuiltSetMultimap.prototype;
    (_BuiltSetMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltSetMultimap.__proto__.__.call(this, new (LinkedMapOfKL$BuiltSetLOfVL()).new());
      for (let key of keys) {
        if (KL().is(key)) {
          this[_map$0][$_set](key, BuiltSetOfVL().new(IterableL().as(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltSetMultimap.prototype;
    dart.addTypeTests(_BuiltSetMultimap);
    _BuiltSetMultimap.prototype[_is__BuiltSetMultimap_default] = true;
    dart.addTypeCaches(_BuiltSetMultimap);
    dart.setMethodSignature(_BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(_BuiltSetMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Type), dart.legacy(core.Type)])
    }));
    dart.setLibraryUri(_BuiltSetMultimap, L7);
    return _BuiltSetMultimap;
  });
  set_multimap._BuiltSetMultimap = set_multimap._BuiltSetMultimap$();
  dart.addTypeTests(set_multimap._BuiltSetMultimap, _is__BuiltSetMultimap_default);
  const _is_OverriddenHashcodeBuiltSetMultimap_default = Symbol('_is_OverriddenHashcodeBuiltSetMultimap_default');
  set_multimap.OverriddenHashcodeBuiltSetMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltSetMultimap extends set_multimap._BuiltSetMultimap$(dart.legacy(K), dart.legacy(V)) {
      get hashCode() {
        return this[_overridenHashCode$1];
      }
    }
    (OverriddenHashcodeBuiltSetMultimap.new = function(map, _overridenHashCode) {
      this[_overridenHashCode$1] = _overridenHashCode;
      OverriddenHashcodeBuiltSetMultimap.__proto__.copyAndCheck.call(this, IterableL().as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltSetMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSetMultimap);
    OverriddenHashcodeBuiltSetMultimap.prototype[_is_OverriddenHashcodeBuiltSetMultimap_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltSetMultimap);
    dart.setLibraryUri(OverriddenHashcodeBuiltSetMultimap, L7);
    dart.setFieldSignature(OverriddenHashcodeBuiltSetMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSetMultimap.__proto__),
      [_overridenHashCode$1]: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSetMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltSetMultimap;
  });
  set_multimap.OverriddenHashcodeBuiltSetMultimap = set_multimap.OverriddenHashcodeBuiltSetMultimap$();
  dart.addTypeTests(set_multimap.OverriddenHashcodeBuiltSetMultimap, _is_OverriddenHashcodeBuiltSetMultimap_default);
  var _builtMap = dart.privateName(set_multimap, "_builtMap");
  var _builtMapOwner = dart.privateName(set_multimap, "_builtMapOwner");
  var _builderMap = dart.privateName(set_multimap, "_builderMap");
  var _checkGenericTypeParameter$0 = dart.privateName(set_multimap, "_checkGenericTypeParameter");
  var _setOwner$0 = dart.privateName(set_multimap, "_setOwner");
  var _setWithCopyAndCheck = dart.privateName(set_multimap, "_setWithCopyAndCheck");
  var _makeWriteableCopy = dart.privateName(set_multimap, "_makeWriteableCopy");
  var _checkKey = dart.privateName(set_multimap, "_checkKey");
  var _checkValue = dart.privateName(set_multimap, "_checkValue");
  var _getValuesBuilder = dart.privateName(set_multimap, "_getValuesBuilder");
  const _is_SetMultimapBuilder_default = Symbol('_is_SetMultimapBuilder_default');
  set_multimap.SetMultimapBuilder$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _BuiltSetMultimapOfKL$VL = () => (_BuiltSetMultimapOfKL$VL = dart.constFn(set_multimap._BuiltSetMultimap$(KL(), VL())))();
    var _BuiltSetMultimapLOfKL$VL = () => (_BuiltSetMultimapLOfKL$VL = dart.constFn(dart.legacy(_BuiltSetMultimapOfKL$VL())))();
    var SetMultimapOfKL$VL = () => (SetMultimapOfKL$VL = dart.constFn(multimap.SetMultimap$(KL(), VL())))();
    var SetMultimapLOfKL$VL = () => (SetMultimapLOfKL$VL = dart.constFn(dart.legacy(SetMultimapOfKL$VL())))();
    var KLAndVLToNull = () => (KLAndVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), VL()])))();
    var LinkedHashMapOfKL$BuiltSetLOfVL = () => (LinkedHashMapOfKL$BuiltSetLOfVL = dart.constFn(collection.LinkedHashMap$(KL(), BuiltSetLOfVL())))();
    var LinkedMapOfKL$SetBuilderLOfVL = () => (LinkedMapOfKL$SetBuilderLOfVL = dart.constFn(_js_helper.LinkedMap$(KL(), SetBuilderLOfVL())))();
    var LinkedMapOfKL$BuiltSetLOfVL = () => (LinkedMapOfKL$BuiltSetLOfVL = dart.constFn(_js_helper.LinkedMap$(KL(), BuiltSetLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var VLToNull = () => (VLToNull = dart.constFn(dart.fnType(core.Null, [VL()])))();
    var SetBuilderOfVL = () => (SetBuilderOfVL = dart.constFn(set.SetBuilder$(VL())))();
    var BuiltSetOfVL = () => (BuiltSetOfVL = dart.constFn(set.BuiltSet$(VL())))();
    var BuiltSetLOfVL = () => (BuiltSetLOfVL = dart.constFn(dart.legacy(BuiltSetOfVL())))();
    var SetBuilderLOfVL = () => (SetBuilderLOfVL = dart.constFn(dart.legacy(SetBuilderOfVL())))();
    class SetMultimapBuilder extends core.Object {
      static new(multimap = C1 || CT.C1) {
        let t10;
        t10 = new (set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V)))._uninitialized();
        return (() => {
          t10.replace(multimap);
          return t10;
        })();
      }
      build() {
        if (this[_builtMapOwner] == null) {
          for (let key of this[_builderMap][$keys]) {
            let builtSet = this[_builderMap][$_get](key).build();
            if (dart.test(builtSet.isEmpty)) {
              this[_builtMap][$remove](key);
            } else {
              this[_builtMap][$_set](key, builtSet);
            }
          }
          this[_builtMapOwner] = new (_BuiltSetMultimapOfKL$VL()).withSafeMap(this[_builtMap]);
        }
        return this[_builtMapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltSetMultimapLOfKL$VL().is(multimap)) {
          this[_setOwner$0](multimap);
        } else if (MapL().is(multimap) || SetMultimapL().is(multimap) || BuiltSetMultimapL().is(multimap)) {
          this[_setWithCopyAndCheck](IterableL().as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, SetMultimap or BuiltSetMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.legacy(dart.fnType(KL(), [dart.legacy(T)])).as(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.legacy(dart.fnType(VL(), [dart.legacy(T)])).as(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.legacy(dart.fnType(IterableLOfVL(), [dart.legacy(T)])).as(values);
        if (value != null && values != null) {
          dart.throw(new core.ArgumentError.new("expected value or values to be set, got both"));
        }
        key == null ? key = dart.fn(x => KL().as(x), dart.fnType(KL(), [dart.legacy(T)])) : null;
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          value == null ? value = dart.fn(x => VL().as(x), dart.fnType(VL(), [dart.legacy(T)])) : null;
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        KL().as(key);
        VL().as(value);
        this[_makeWriteableCopy]();
        this[_checkKey](key);
        this[_checkValue](value);
        this[_getValuesBuilder](key).add(value);
      }
      addValues(key, values) {
        KL().as(key);
        IterableLOfVL().as(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VLToNull()));
      }
      addAll(other) {
        SetMultimapLOfKL$VL().as(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KLAndVLToNull()));
      }
      remove(key, value) {
        VL().as(value);
        if (KL().is(key)) {
          this[_makeWriteableCopy]();
          this[_getValuesBuilder](key).remove(value);
        }
      }
      removeAll(key) {
        if (KL().is(key)) {
          this[_makeWriteableCopy]();
          this[_builtMap] = this[_builtMap];
          this[_builderMap][$_set](key, SetBuilderOfVL().new());
        }
      }
      clear() {
        this[_makeWriteableCopy]();
        this[_builtMap][$clear]();
        this[_builderMap][$clear]();
      }
      [_getValuesBuilder](key) {
        let result = this[_builderMap][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap][$_get](key);
          if (builtValues == null) {
            result = SetBuilderOfVL().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy]() {
        if (this[_builtMapOwner] != null) {
          this[_builtMap] = LinkedHashMapOfKL$BuiltSetLOfVL().from(this[_builtMap]);
          this[_builtMapOwner] = null;
        }
      }
      [_setOwner$0](builtSetMultimap) {
        this[_builtMapOwner] = builtSetMultimap;
        this[_builtMap] = builtSetMultimap[_map$0];
        this[_builderMap] = new (LinkedMapOfKL$SetBuilderLOfVL()).new();
      }
      [_setWithCopyAndCheck](keys, lookup) {
        this[_builtMapOwner] = null;
        this[_builtMap] = new (LinkedMapOfKL$BuiltSetLOfVL()).new();
        this[_builderMap] = new (LinkedMapOfKL$SetBuilderLOfVL()).new();
        for (let key of keys) {
          if (KL().is(key)) {
            for (let value of IterableL().as(dart.dcall(lookup, [key]))) {
              if (VL().is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkGenericTypeParameter$0]() {
        if (dart.wrapType(KL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new SetMultimapBuilder<int, int>\""));
        }
        if (dart.wrapType(VL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit value type required, " + "for example \"new SetMultimapBuilder<int, int>\""));
        }
      }
      [_checkKey](key) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("invalid key: " + dart.str(key)));
        }
      }
      [_checkValue](value) {
        if (value == null) {
          dart.throw(new core.ArgumentError.new("invalid value: " + dart.str(value)));
        }
      }
    }
    (SetMultimapBuilder._uninitialized = function() {
      this[_builtMap] = null;
      this[_builtMapOwner] = null;
      this[_builderMap] = null;
      this[_checkGenericTypeParameter$0]();
    }).prototype = SetMultimapBuilder.prototype;
    dart.addTypeTests(SetMultimapBuilder);
    SetMultimapBuilder.prototype[_is_SetMultimapBuilder_default] = true;
    dart.addTypeCaches(SetMultimapBuilder);
    dart.setMethodSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapBuilder.__proto__),
      build: dart.fnType(dart.legacy(set_multimap.BuiltSetMultimap$(dart.legacy(K), dart.legacy(V))), []),
      update: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V)))]))]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [dart.legacy(core.Iterable$(dart.legacy(T)))], {key: dart.legacy(core.Object), value: dart.legacy(core.Object), values: dart.legacy(core.Object)}, {}]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addValues: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder]: dart.fnType(dart.legacy(set.SetBuilder$(dart.legacy(V))), [dart.legacy(K)]),
      [_makeWriteableCopy]: dart.fnType(dart.void, []),
      [_setOwner$0]: dart.fnType(dart.void, [dart.legacy(set_multimap._BuiltSetMultimap$(dart.legacy(K), dart.legacy(V)))]),
      [_setWithCopyAndCheck]: dart.fnType(dart.void, [dart.legacy(core.Iterable), dart.legacy(core.Function)]),
      [_checkGenericTypeParameter$0]: dart.fnType(dart.void, []),
      [_checkKey]: dart.fnType(dart.void, [dart.legacy(K)]),
      [_checkValue]: dart.fnType(dart.void, [dart.legacy(V)])
    }));
    dart.setLibraryUri(SetMultimapBuilder, L7);
    dart.setFieldSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getFields(SetMultimapBuilder.__proto__),
      [_builtMap]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(set.BuiltSet$(dart.legacy(V)))))),
      [_builtMapOwner]: dart.fieldType(dart.legacy(set_multimap._BuiltSetMultimap$(dart.legacy(K), dart.legacy(V)))),
      [_builderMap]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(set.SetBuilder$(dart.legacy(V))))))
    }));
    return SetMultimapBuilder;
  });
  set_multimap.SetMultimapBuilder = set_multimap.SetMultimapBuilder$();
  dart.addTypeTests(set_multimap.SetMultimapBuilder, _is_SetMultimapBuilder_default);
  var _overrridenHashCode$ = dart.privateName(map$, "_overrridenHashCode");
  var _map$1 = dart.privateName(map$, "_map");
  var _hashCode$1 = dart.privateName(map$, "_hashCode");
  var _keys$ = dart.privateName(map$, "_keys");
  var _values$ = dart.privateName(map$, "_values");
  var _mapFactory$0 = dart.privateName(map$, "_mapFactory");
  const _is_BuiltMap_default = Symbol('_is_BuiltMap_default');
  map$.BuiltMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapBuilderOfKL$VL = () => (MapBuilderOfKL$VL = dart.constFn(map$.MapBuilder$(KL(), VL())))();
    var _BuiltMapOfKL$VL = () => (_BuiltMapOfKL$VL = dart.constFn(map$._BuiltMap$(KL(), VL())))();
    var _BuiltMapLOfKL$VL = () => (_BuiltMapLOfKL$VL = dart.constFn(dart.legacy(_BuiltMapOfKL$VL())))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var CopyOnWriteMapOfKL$VL = () => (CopyOnWriteMapOfKL$VL = dart.constFn(copy_on_write_map.CopyOnWriteMap$(KL(), VL())))();
    var KLTointL = () => (KLTointL = dart.constFn(dart.fnType(intL(), [KL()])))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class BuiltMap extends core.Object {
      static new(map = C1 || CT.C1) {
        if (_BuiltMapL().is(map) && dart.test(map.hasExactKeyAndValueTypes(dart.wrapType(dart.legacy(K)), dart.wrapType(dart.legacy(V))))) {
          return dart.legacy(map$.BuiltMap$(dart.legacy(K), dart.legacy(V))).as(map);
        } else if (MapL().is(map) || BuiltMapL().is(map)) {
          return new (map$._BuiltMap$(dart.legacy(K), dart.legacy(V))).copyAndCheckTypes(IterableL().as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      static from(map) {
        return new (map$._BuiltMap$(dart.legacy(K), dart.legacy(V))).copyAndCheckTypes(map[$keys], dart.fn(k => map[$_get](k), dynamicTodynamic()));
      }
      static of(map) {
        return new (map$._BuiltMap$(dart.legacy(K), dart.legacy(V))).copyAndCheckForNull(map[$keys], dart.fn(k => map[$_get](k), dart.fnType(dart.legacy(V), [dart.legacy(K)])));
      }
      static build(updates) {
        let t10;
        return (t10 = map$.MapBuilder$(dart.legacy(K), dart.legacy(V)).new(), (() => {
          t10.update(updates);
          return t10;
        })()).build();
      }
      toBuilder() {
        return new (MapBuilderOfKL$VL())._fromBuiltMap(_BuiltMapLOfKL$VL().as(this));
      }
      rebuild(updates) {
        let t10;
        return (t10 = this.toBuilder(), (() => {
          t10.update(updates);
          return t10;
        })()).build();
      }
      asMap() {
        return MapOfKL$VL().unmodifiable(this[_map$1]);
      }
      toMap() {
        return new (CopyOnWriteMapOfKL$VL()).new(this[_map$1], this[_mapFactory$0]);
      }
      get hashCode() {
        let t10;
        this[_hashCode$1] == null ? this[_hashCode$1] = hash.hashObjects((t10 = this[_map$1][$keys][$map](intL(), dart.fn(key => hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$1][$_get](key))), KLTointL()))[$toList]({growable: false}), (() => {
          t10[$sort]();
          return t10;
        })())) : null;
        return this[_hashCode$1];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!BuiltMapL().is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map$1]);
      }
      _get(key) {
        return this[_map$1][$_get](key);
      }
      containsKey(key) {
        return this[_map$1][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$1][$containsValue](value);
      }
      forEach(f) {
        this[_map$1][$forEach](f);
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      get keys() {
        this[_keys$] == null ? this[_keys$] = this[_map$1][$keys] : null;
        return this[_keys$];
      }
      get length() {
        return this[_map$1][$length];
      }
      get values() {
        this[_values$] == null ? this[_values$] = this[_map$1][$values] : null;
        return this[_values$];
      }
      get entries() {
        return this[_map$1][$entries];
      }
      map(K2, V2, f) {
        return new (map$._BuiltMap$(dart.legacy(K2), dart.legacy(V2))).withSafeMap(null, this[_map$1][$map](dart.legacy(K2), dart.legacy(V2), f));
      }
    }
    (BuiltMap.__ = function(_mapFactory, _map) {
      this[_hashCode$1] = null;
      this[_keys$] = null;
      this[_values$] = null;
      this[_mapFactory$0] = _mapFactory;
      this[_map$1] = _map;
      if (dart.wrapType(KL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit key type required, for example \"new BuiltMap<int, int>\""));
      }
      if (dart.wrapType(VL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit value type required," + " for example \"new BuiltMap<int, int>\""));
      }
    }).prototype = BuiltMap.prototype;
    dart.addTypeTests(BuiltMap);
    BuiltMap.prototype[_is_BuiltMap_default] = true;
    dart.addTypeCaches(BuiltMap);
    dart.setMethodSignature(BuiltMap, () => ({
      __proto__: dart.getMethods(BuiltMap.__proto__),
      toBuilder: dart.fnType(dart.legacy(map$.MapBuilder$(dart.legacy(K), dart.legacy(V))), []),
      rebuild: dart.fnType(dart.legacy(map$.BuiltMap$(dart.legacy(K), dart.legacy(V))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(map$.MapBuilder$(dart.legacy(K), dart.legacy(V)))]))]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))), []),
      toMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      map: dart.gFnType((K2, V2) => [dart.legacy(map$.BuiltMap$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]])
    }));
    dart.setGetterSignature(BuiltMap, () => ({
      __proto__: dart.getGetters(BuiltMap.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      length: dart.legacy(core.int),
      values: dart.legacy(core.Iterable$(dart.legacy(V))),
      entries: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V)))))
    }));
    dart.setLibraryUri(BuiltMap, L8);
    dart.setFieldSignature(BuiltMap, () => ({
      __proto__: dart.getFields(BuiltMap.__proto__),
      [_mapFactory$0]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))), []))),
      [_map$1]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V)))),
      [_hashCode$1]: dart.fieldType(dart.legacy(core.int)),
      [_keys$]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(K)))),
      [_values$]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(V))))
    }));
    dart.defineExtensionMethods(BuiltMap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltMap, ['hashCode']);
    return BuiltMap;
  });
  map$.BuiltMap = map$.BuiltMap$();
  dart.addTypeTests(map$.BuiltMap, _is_BuiltMap_default);
  const _is__BuiltMap_default = Symbol('_is__BuiltMap_default');
  map$._BuiltMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedMapOfKL$VL = () => (LinkedMapOfKL$VL = dart.constFn(_js_helper.LinkedMap$(KL(), VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class _BuiltMap extends map$.BuiltMap$(dart.legacy(K), dart.legacy(V)) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(KL())._equals(key) && dart.wrapType(VL())._equals(value);
      }
    }
    (_BuiltMap.withSafeMap = function(mapFactory, map) {
      _BuiltMap.__proto__.__.call(this, mapFactory, map);
      ;
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckTypes = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfKL$VL()).new());
      for (let key of keys) {
        if (KL().is(key)) {
          let value = dart.dcall(lookup, [key]);
          if (VL().is(value)) {
            this[_map$1][$_set](key, value);
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value)));
          }
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckForNull = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfKL$VL()).new());
      for (let key of keys) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("map contained invalid key: null"));
        }
        let value = lookup(key);
        if (value == null) {
          dart.throw(new core.ArgumentError.new("map contained invalid value: null"));
        }
        this[_map$1][$_set](key, value);
      }
    }).prototype = _BuiltMap.prototype;
    dart.addTypeTests(_BuiltMap);
    _BuiltMap.prototype[_is__BuiltMap_default] = true;
    dart.addTypeCaches(_BuiltMap);
    dart.setMethodSignature(_BuiltMap, () => ({
      __proto__: dart.getMethods(_BuiltMap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Type), dart.legacy(core.Type)])
    }));
    dart.setLibraryUri(_BuiltMap, L8);
    return _BuiltMap;
  });
  map$._BuiltMap = map$._BuiltMap$();
  dart.addTypeTests(map$._BuiltMap, _is__BuiltMap_default);
  const _is_OverriddenHashcodeBuiltMap_default = Symbol('_is_OverriddenHashcodeBuiltMap_default');
  map$.OverriddenHashcodeBuiltMap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltMap extends map$._BuiltMap$(dart.legacy(K), dart.legacy(V)) {
      get hashCode() {
        return this[_overrridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltMap.new = function(map, _overrridenHashCode) {
      this[_overrridenHashCode$] = _overrridenHashCode;
      OverriddenHashcodeBuiltMap.__proto__.copyAndCheckTypes.call(this, IterableL().as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltMap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltMap);
    OverriddenHashcodeBuiltMap.prototype[_is_OverriddenHashcodeBuiltMap_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltMap);
    dart.setLibraryUri(OverriddenHashcodeBuiltMap, L8);
    dart.setFieldSignature(OverriddenHashcodeBuiltMap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltMap.__proto__),
      [_overrridenHashCode$]: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltMap, ['hashCode']);
    return OverriddenHashcodeBuiltMap;
  });
  map$.OverriddenHashcodeBuiltMap = map$.OverriddenHashcodeBuiltMap$();
  dart.addTypeTests(map$.OverriddenHashcodeBuiltMap, _is_OverriddenHashcodeBuiltMap_default);
  var _mapOwner = dart.privateName(map$, "_mapOwner");
  var _checkGenericTypeParameter$1 = dart.privateName(map$, "_checkGenericTypeParameter");
  var _setOwner$1 = dart.privateName(map$, "_setOwner");
  var _createMap = dart.privateName(map$, "_createMap");
  var _setSafeMap = dart.privateName(map$, "_setSafeMap");
  var _checkKey$ = dart.privateName(map$, "_checkKey");
  var _checkValue$ = dart.privateName(map$, "_checkValue");
  var _safeMap = dart.privateName(map$, "_safeMap");
  var _checkKeys = dart.privateName(map$, "_checkKeys");
  var _checkValues = dart.privateName(map$, "_checkValues");
  const _is_MapBuilder_default = Symbol('_is_MapBuilder_default');
  map$.MapBuilder$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _BuiltMapOfKL$VL = () => (_BuiltMapOfKL$VL = dart.constFn(map$._BuiltMap$(KL(), VL())))();
    var _BuiltMapLOfKL$VL = () => (_BuiltMapLOfKL$VL = dart.constFn(dart.legacy(_BuiltMapOfKL$VL())))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var VoidToMapLOfKL$VL = () => (VoidToMapLOfKL$VL = dart.constFn(dart.fnType(MapLOfKL$VL(), [])))();
    var VoidToLMapLOfKL$VL = () => (VoidToLMapLOfKL$VL = dart.constFn(dart.legacy(VoidToMapLOfKL$VL())))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(KL(), VL())))();
    var MapEntryLOfKL$VL = () => (MapEntryLOfKL$VL = dart.constFn(dart.legacy(MapEntryOfKL$VL())))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryLOfKL$VL())))();
    var IterableLOfMapEntryLOfKL$VL = () => (IterableLOfMapEntryLOfKL$VL = dart.constFn(dart.legacy(IterableOfMapEntryLOfKL$VL())))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(VL(), [KL(), VL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.legacy(KLAndVLToVL())))();
    var LinkedMapOfKL$VL = () => (LinkedMapOfKL$VL = dart.constFn(_js_helper.LinkedMap$(KL(), VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var VLToVL = () => (VLToVL = dart.constFn(dart.fnType(VL(), [VL()])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.legacy(VLToVL())))();
    class MapBuilder extends core.Object {
      static new(map = C1 || CT.C1) {
        let t10;
        t10 = new (map$.MapBuilder$(dart.legacy(K), dart.legacy(V)))._uninitialized();
        return (() => {
          t10.replace(map);
          return t10;
        })();
      }
      build() {
        this[_mapOwner] == null ? this[_mapOwner] = new (_BuiltMapOfKL$VL()).withSafeMap(this[_mapFactory$0], this[_map$1]) : null;
        return this[_mapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(map) {
        if (_BuiltMapLOfKL$VL().is(map) && dart.equals(map[_mapFactory$0], this[_mapFactory$0])) {
          this[_setOwner$1](map);
        } else if (BuiltMapL().is(map)) {
          let replacement = this[_createMap]();
          map.forEach(dart.fn((key, value) => {
            replacement[$_set](KL().as(key), VL().as(value));
          }, ObjectLAndObjectLToNull()));
          this[_setSafeMap](replacement);
        } else if (MapL().is(map)) {
          let replacement = this[_createMap]();
          map[$forEach](dart.fn((key, value) => {
            replacement[$_set](KL().as(key), VL().as(value));
          }, ObjectLAndObjectLToNull()));
          this[_setSafeMap](replacement);
        } else {
          dart.throw(new core.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      withBase(base) {
        let t10;
        VoidToLMapLOfKL$VL().as(base);
        if (base == null) {
          dart.throw(new core.ArgumentError.notNull("base"));
        }
        this[_mapFactory$0] = base;
        this[_setSafeMap]((t10 = this[_createMap](), (() => {
          t10[$addAll](this[_map$1]);
          return t10;
        })()));
      }
      withDefaultBase() {
        let t10;
        this[_mapFactory$0] = null;
        this[_setSafeMap]((t10 = this[_createMap](), (() => {
          t10[$addAll](this[_map$1]);
          return t10;
        })()));
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.legacy(dart.fnType(KL(), [dart.legacy(T)])).as(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.legacy(dart.fnType(VL(), [dart.legacy(T)])).as(value);
        key == null ? key = dart.fn(x => KL().as(x), dart.fnType(KL(), [dart.legacy(T)])) : null;
        value == null ? value = dart.fn(x => VL().as(x), dart.fnType(VL(), [dart.legacy(T)])) : null;
        for (let element of iterable) {
          this._set(key(element), value(element));
        }
      }
      _get(key) {
        return this[_map$1][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        VL().as(value);
        this[_checkKey$](key);
        this[_checkValue$](value);
        this[_safeMap][$_set](key, value);
        return value$;
      }
      get length() {
        return this[_map$1][$length];
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLVL().as(ifAbsent);
        this[_checkKey$](key);
        return this[_safeMap][$putIfAbsent](key, dart.fn(() => {
          let value = ifAbsent();
          this[_checkValue$](value);
          return value;
        }, VoidToVL()));
      }
      addAll(other) {
        MapLOfKL$VL().as(other);
        this[_checkKeys](other[$keys]);
        this[_checkValues](other[$values]);
        this[_safeMap][$addAll](other);
      }
      remove(key) {
        return this[_safeMap][$remove](key);
      }
      removeWhere(predicate) {
        this[_safeMap][$removeWhere](predicate);
      }
      clear() {
        this[_safeMap][$clear]();
      }
      addEntries(newEntries) {
        IterableLOfMapEntryLOfKL$VL().as(newEntries);
        this[_safeMap][$addEntries](newEntries);
      }
      updateValue(key, update, opts) {
        KL().as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        return this[_safeMap][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAllValues(update) {
        KLAndVLToLVL().as(update);
        this[_safeMap][$updateAll](update);
      }
      [_setOwner$1](mapOwner) {
        if (!dart.equals(mapOwner[_mapFactory$0], this[_mapFactory$0])) dart.assertFailed("Can't reuse a built map that uses a different base", L9, 188, 12, "mapOwner._mapFactory == _mapFactory");
        this[_mapOwner] = mapOwner;
        this[_map$1] = mapOwner[_map$1];
      }
      [_setSafeMap](map) {
        this[_mapOwner] = null;
        this[_map$1] = map;
      }
      get [_safeMap]() {
        let t10;
        if (this[_mapOwner] != null) {
          this[_map$1] = (t10 = this[_createMap](), (() => {
            t10[$addAll](this[_map$1]);
            return t10;
          })());
          this[_mapOwner] = null;
        }
        return this[_map$1];
      }
      [_createMap]() {
        return this[_mapFactory$0] != null ? this[_mapFactory$0]() : new (LinkedMapOfKL$VL()).new();
      }
      [_checkGenericTypeParameter$1]() {
        if (dart.wrapType(KL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit key type required, for example \"new MapBuilder<int, int>\""));
        }
        if (dart.wrapType(VL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit value type required, " + "for example \"new MapBuilder<int, int>\""));
        }
      }
      [_checkKey$](key) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("null key"));
        }
      }
      [_checkKeys](keys) {
        for (let key of keys) {
          this[_checkKey$](key);
        }
      }
      [_checkValue$](value) {
        if (value == null) {
          dart.throw(new core.ArgumentError.new("null value"));
        }
      }
      [_checkValues](values) {
        for (let value of values) {
          this[_checkValue$](value);
        }
      }
    }
    (MapBuilder._uninitialized = function() {
      this[_mapOwner] = null;
      this[_map$1] = null;
      this[_mapFactory$0] = null;
      this[_checkGenericTypeParameter$1]();
    }).prototype = MapBuilder.prototype;
    (MapBuilder._fromBuiltMap = function(map) {
      this[_mapFactory$0] = map[_mapFactory$0];
      this[_map$1] = map[_map$1];
      this[_mapOwner] = map;
      ;
    }).prototype = MapBuilder.prototype;
    dart.addTypeTests(MapBuilder);
    MapBuilder.prototype[_is_MapBuilder_default] = true;
    dart.addTypeCaches(MapBuilder);
    dart.setMethodSignature(MapBuilder, () => ({
      __proto__: dart.getMethods(MapBuilder.__proto__),
      build: dart.fnType(dart.legacy(map$.BuiltMap$(dart.legacy(K), dart.legacy(V))), []),
      update: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(map$.MapBuilder$(dart.legacy(K), dart.legacy(V)))]))]),
      replace: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      withBase: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      withDefaultBase: dart.fnType(dart.void, []),
      addIterable: dart.gFnType(T => [dart.void, [dart.legacy(core.Iterable$(dart.legacy(T)))], {key: dart.legacy(core.Object), value: dart.legacy(core.Object)}, {}]),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      putIfAbsent: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      clear: dart.fnType(dart.void, []),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      updateValue: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      updateAllValues: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [_setOwner$1]: dart.fnType(dart.void, [dart.legacy(map$._BuiltMap$(dart.legacy(K), dart.legacy(V)))]),
      [_setSafeMap]: dart.fnType(dart.void, [dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V)))]),
      [_createMap]: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))), []),
      [_checkGenericTypeParameter$1]: dart.fnType(dart.void, []),
      [_checkKey$]: dart.fnType(dart.void, [dart.legacy(K)]),
      [_checkKeys]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(K)))]),
      [_checkValue$]: dart.fnType(dart.void, [dart.legacy(V)]),
      [_checkValues]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(V)))])
    }));
    dart.setGetterSignature(MapBuilder, () => ({
      __proto__: dart.getGetters(MapBuilder.__proto__),
      length: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [_safeMap]: dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V)))
    }));
    dart.setLibraryUri(MapBuilder, L8);
    dart.setFieldSignature(MapBuilder, () => ({
      __proto__: dart.getFields(MapBuilder.__proto__),
      [_mapFactory$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))), []))),
      [_map$1]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V)))),
      [_mapOwner]: dart.fieldType(dart.legacy(map$._BuiltMap$(dart.legacy(K), dart.legacy(V))))
    }));
    return MapBuilder;
  });
  map$.MapBuilder = map$.MapBuilder$();
  dart.addTypeTests(map$.MapBuilder, _is_MapBuilder_default);
  map$['BuiltMapExtension|build'] = function BuiltMapExtension$124build(K, V, $this) {
    return map$.BuiltMap$(dart.legacy(K), dart.legacy(V)).of($this);
  };
  map$['BuiltMapExtension|get#build'] = function BuiltMapExtension$124get$35build(K, V, $this) {
    return dart.fn(() => map$['BuiltMapExtension|build'](dart.legacy(K), dart.legacy(V), $this), dart.fnType(dart.legacy(map$.BuiltMap$(dart.legacy(K), dart.legacy(V))), []));
  };
  var _overridenHashCode$2 = dart.privateName(list_multimap, "_overridenHashCode");
  var _map$2 = dart.privateName(list_multimap, "_map");
  var _emptyList = dart.privateName(list_multimap, "_emptyList");
  var _hashCode$2 = dart.privateName(list_multimap, "_hashCode");
  var _keys$0 = dart.privateName(list_multimap, "_keys");
  var _values$0 = dart.privateName(list_multimap, "_values");
  const _is_BuiltListMultimap_default = Symbol('_is_BuiltListMultimap_default');
  list_multimap.BuiltListMultimap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var ListMultimapBuilderOfKL$VL = () => (ListMultimapBuilderOfKL$VL = dart.constFn(list_multimap.ListMultimapBuilder$(KL(), VL())))();
    var CopyOnWriteMapOfKL$BuiltListLOfVL = () => (CopyOnWriteMapOfKL$BuiltListLOfVL = dart.constFn(copy_on_write_map.CopyOnWriteMap$(KL(), BuiltListLOfVL())))();
    var KLTointL = () => (KLTointL = dart.constFn(dart.fnType(intL(), [KL()])))();
    var MapOfKL$IterableLOfVL = () => (MapOfKL$IterableLOfVL = dart.constFn(core.Map$(KL(), IterableLOfVL())))();
    var KLAndBuiltListLOfVLToNull = () => (KLAndBuiltListLOfVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), BuiltListLOfVL()])))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var BuiltListOfVL = () => (BuiltListOfVL = dart.constFn(list.BuiltList$(VL())))();
    var BuiltListLOfVL = () => (BuiltListLOfVL = dart.constFn(dart.legacy(BuiltListOfVL())))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var VLToNull = () => (VLToNull = dart.constFn(dart.fnType(core.Null, [VL()])))();
    var BuiltListLOfVLToBuiltListLOfVL = () => (BuiltListLOfVLToBuiltListLOfVL = dart.constFn(dart.fnType(BuiltListLOfVL(), [BuiltListLOfVL()])))();
    class BuiltListMultimap extends core.Object {
      static new(multimap = C1 || CT.C1) {
        if (_BuiltListMultimapL().is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(dart.legacy(K)), dart.wrapType(dart.legacy(V))))) {
          return dart.legacy(list_multimap.BuiltListMultimap$(dart.legacy(K), dart.legacy(V))).as(multimap);
        } else if (MapL().is(multimap) || ListMultimapL().is(multimap) || BuiltListMultimapL().is(multimap)) {
          return new (list_multimap._BuiltListMultimap$(dart.legacy(K), dart.legacy(V))).copyAndCheck(IterableL().as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, ListMultimap or BuiltListMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      static build(updates) {
        let t12;
        return (t12 = list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V)).new(), (() => {
          t12.update(updates);
          return t12;
        })()).build();
      }
      toBuilder() {
        return ListMultimapBuilderOfKL$VL().new(this);
      }
      rebuild(updates) {
        let t12;
        return (t12 = this.toBuilder(), (() => {
          t12.update(updates);
          return t12;
        })()).build();
      }
      toMap() {
        return new (CopyOnWriteMapOfKL$BuiltListLOfVL()).new(this[_map$2]);
      }
      get hashCode() {
        let t12;
        this[_hashCode$2] == null ? this[_hashCode$2] = hash.hashObjects((t12 = this[_map$2][$keys][$map](intL(), dart.fn(key => hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$2][$_get](key))), KLTointL()))[$toList]({growable: false}), (() => {
          t12[$sort]();
          return t12;
        })())) : null;
        return this[_hashCode$2];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!BuiltListMultimapL().is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map$2]);
      }
      asMap() {
        return MapOfKL$IterableLOfVL().unmodifiable(this[_map$2]);
      }
      _get(key) {
        let result = this[_map$2][$_get](key);
        return result == null ? this[_emptyList] : result;
      }
      containsKey(key) {
        return this[_map$2][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$2][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VLToNull()));
        }, KLAndBuiltListLOfVLToNull()));
      }
      forEachKey(f) {
        this[_map$2][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KLAndBuiltListLOfVLToNull()));
      }
      get isEmpty() {
        return this[_map$2][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$2][$isNotEmpty];
      }
      get keys() {
        this[_keys$0] == null ? this[_keys$0] = this[_map$2][$keys] : null;
        return this[_keys$0];
      }
      get length() {
        return this[_map$2][$length];
      }
      get values() {
        this[_values$0] == null ? this[_values$0] = this[_map$2][$values][$expand](VL(), dart.fn(x => x, BuiltListLOfVLToBuiltListLOfVL())) : null;
        return this[_values$0];
      }
    }
    (BuiltListMultimap.__ = function(_map) {
      this[_emptyList] = BuiltListOfVL().new();
      this[_hashCode$2] = null;
      this[_keys$0] = null;
      this[_values$0] = null;
      this[_map$2] = _map;
      if (dart.wrapType(KL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new BuiltListMultimap<int, int>\""));
      }
      if (dart.wrapType(VL())._equals(dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit value type required," + " for example \"new BuiltListMultimap<int, int>\""));
      }
    }).prototype = BuiltListMultimap.prototype;
    dart.addTypeTests(BuiltListMultimap);
    BuiltListMultimap.prototype[_is_BuiltListMultimap_default] = true;
    dart.addTypeCaches(BuiltListMultimap);
    dart.setMethodSignature(BuiltListMultimap, () => ({
      __proto__: dart.getMethods(BuiltListMultimap.__proto__),
      toBuilder: dart.fnType(dart.legacy(list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V))), []),
      rebuild: dart.fnType(dart.legacy(list_multimap.BuiltListMultimap$(dart.legacy(K), dart.legacy(V))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V)))]))]),
      toMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(list.BuiltList$(dart.legacy(V))))), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(core.Iterable$(dart.legacy(V))))), []),
      _get: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(V))), [dart.legacy(core.Object)]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      forEachKey: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(core.Iterable$(dart.legacy(V)))]))])
    }));
    dart.setGetterSignature(BuiltListMultimap, () => ({
      __proto__: dart.getGetters(BuiltListMultimap.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      length: dart.legacy(core.int),
      values: dart.legacy(core.Iterable$(dart.legacy(V)))
    }));
    dart.setLibraryUri(BuiltListMultimap, L10);
    dart.setFieldSignature(BuiltListMultimap, () => ({
      __proto__: dart.getFields(BuiltListMultimap.__proto__),
      [_map$2]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(list.BuiltList$(dart.legacy(V)))))),
      [_emptyList]: dart.finalFieldType(dart.legacy(list.BuiltList$(dart.legacy(V)))),
      [_hashCode$2]: dart.fieldType(dart.legacy(core.int)),
      [_keys$0]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(K)))),
      [_values$0]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(V))))
    }));
    dart.defineExtensionMethods(BuiltListMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltListMultimap, ['hashCode']);
    return BuiltListMultimap;
  });
  list_multimap.BuiltListMultimap = list_multimap.BuiltListMultimap$();
  dart.addTypeTests(list_multimap.BuiltListMultimap, _is_BuiltListMultimap_default);
  const _is__BuiltListMultimap_default = Symbol('_is__BuiltListMultimap_default');
  list_multimap._BuiltListMultimap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedMapOfKL$BuiltListLOfVL = () => (LinkedMapOfKL$BuiltListLOfVL = dart.constFn(_js_helper.LinkedMap$(KL(), BuiltListLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var BuiltListOfVL = () => (BuiltListOfVL = dart.constFn(list.BuiltList$(VL())))();
    var BuiltListLOfVL = () => (BuiltListLOfVL = dart.constFn(dart.legacy(BuiltListOfVL())))();
    class _BuiltListMultimap extends list_multimap.BuiltListMultimap$(dart.legacy(K), dart.legacy(V)) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(KL())._equals(key) && dart.wrapType(VL())._equals(value);
      }
    }
    (_BuiltListMultimap.withSafeMap = function(map) {
      _BuiltListMultimap.__proto__.__.call(this, map);
      ;
    }).prototype = _BuiltListMultimap.prototype;
    (_BuiltListMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltListMultimap.__proto__.__.call(this, new (LinkedMapOfKL$BuiltListLOfVL()).new());
      for (let key of keys) {
        if (KL().is(key)) {
          this[_map$2][$_set](key, BuiltListOfVL().new(IterableL().as(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltListMultimap.prototype;
    dart.addTypeTests(_BuiltListMultimap);
    _BuiltListMultimap.prototype[_is__BuiltListMultimap_default] = true;
    dart.addTypeCaches(_BuiltListMultimap);
    dart.setMethodSignature(_BuiltListMultimap, () => ({
      __proto__: dart.getMethods(_BuiltListMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Type), dart.legacy(core.Type)])
    }));
    dart.setLibraryUri(_BuiltListMultimap, L10);
    return _BuiltListMultimap;
  });
  list_multimap._BuiltListMultimap = list_multimap._BuiltListMultimap$();
  dart.addTypeTests(list_multimap._BuiltListMultimap, _is__BuiltListMultimap_default);
  const _is_OverriddenHashcodeBuiltListMultimap_default = Symbol('_is_OverriddenHashcodeBuiltListMultimap_default');
  list_multimap.OverriddenHashcodeBuiltListMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltListMultimap extends list_multimap._BuiltListMultimap$(dart.legacy(K), dart.legacy(V)) {
      get hashCode() {
        return this[_overridenHashCode$2];
      }
    }
    (OverriddenHashcodeBuiltListMultimap.new = function(map, _overridenHashCode) {
      this[_overridenHashCode$2] = _overridenHashCode;
      OverriddenHashcodeBuiltListMultimap.__proto__.copyAndCheck.call(this, IterableL().as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltListMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltListMultimap);
    OverriddenHashcodeBuiltListMultimap.prototype[_is_OverriddenHashcodeBuiltListMultimap_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltListMultimap);
    dart.setLibraryUri(OverriddenHashcodeBuiltListMultimap, L10);
    dart.setFieldSignature(OverriddenHashcodeBuiltListMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltListMultimap.__proto__),
      [_overridenHashCode$2]: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltListMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltListMultimap;
  });
  list_multimap.OverriddenHashcodeBuiltListMultimap = list_multimap.OverriddenHashcodeBuiltListMultimap$();
  dart.addTypeTests(list_multimap.OverriddenHashcodeBuiltListMultimap, _is_OverriddenHashcodeBuiltListMultimap_default);
  var _builtMap$ = dart.privateName(list_multimap, "_builtMap");
  var _builtMapOwner$ = dart.privateName(list_multimap, "_builtMapOwner");
  var _builderMap$ = dart.privateName(list_multimap, "_builderMap");
  var _checkGenericTypeParameter$2 = dart.privateName(list_multimap, "_checkGenericTypeParameter");
  var _setOwner$2 = dart.privateName(list_multimap, "_setOwner");
  var _setWithCopyAndCheck$ = dart.privateName(list_multimap, "_setWithCopyAndCheck");
  var _makeWriteableCopy$ = dart.privateName(list_multimap, "_makeWriteableCopy");
  var _checkKey$0 = dart.privateName(list_multimap, "_checkKey");
  var _checkValue$0 = dart.privateName(list_multimap, "_checkValue");
  var _getValuesBuilder$ = dart.privateName(list_multimap, "_getValuesBuilder");
  const _is_ListMultimapBuilder_default = Symbol('_is_ListMultimapBuilder_default');
  list_multimap.ListMultimapBuilder$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _BuiltListMultimapOfKL$VL = () => (_BuiltListMultimapOfKL$VL = dart.constFn(list_multimap._BuiltListMultimap$(KL(), VL())))();
    var _BuiltListMultimapLOfKL$VL = () => (_BuiltListMultimapLOfKL$VL = dart.constFn(dart.legacy(_BuiltListMultimapOfKL$VL())))();
    var ListMultimapOfKL$VL = () => (ListMultimapOfKL$VL = dart.constFn(multimap.ListMultimap$(KL(), VL())))();
    var ListMultimapLOfKL$VL = () => (ListMultimapLOfKL$VL = dart.constFn(dart.legacy(ListMultimapOfKL$VL())))();
    var KLAndVLToNull = () => (KLAndVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), VL()])))();
    var LinkedHashMapOfKL$BuiltListLOfVL = () => (LinkedHashMapOfKL$BuiltListLOfVL = dart.constFn(collection.LinkedHashMap$(KL(), BuiltListLOfVL())))();
    var LinkedMapOfKL$ListBuilderLOfVL = () => (LinkedMapOfKL$ListBuilderLOfVL = dart.constFn(_js_helper.LinkedMap$(KL(), ListBuilderLOfVL())))();
    var LinkedMapOfKL$BuiltListLOfVL = () => (LinkedMapOfKL$BuiltListLOfVL = dart.constFn(_js_helper.LinkedMap$(KL(), BuiltListLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var VLToNull = () => (VLToNull = dart.constFn(dart.fnType(core.Null, [VL()])))();
    var BuiltListOfVL = () => (BuiltListOfVL = dart.constFn(list.BuiltList$(VL())))();
    var ListBuilderOfVL = () => (ListBuilderOfVL = dart.constFn(list.ListBuilder$(VL())))();
    var BuiltListLOfVL = () => (BuiltListLOfVL = dart.constFn(dart.legacy(BuiltListOfVL())))();
    var ListBuilderLOfVL = () => (ListBuilderLOfVL = dart.constFn(dart.legacy(ListBuilderOfVL())))();
    class ListMultimapBuilder extends core.Object {
      static new(multimap = C1 || CT.C1) {
        let t12;
        t12 = new (list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V)))._uninitialized();
        return (() => {
          t12.replace(multimap);
          return t12;
        })();
      }
      build() {
        if (this[_builtMapOwner$] == null) {
          for (let key of this[_builderMap$][$keys]) {
            let builtList = this[_builderMap$][$_get](key).build();
            if (dart.test(builtList.isEmpty)) {
              this[_builtMap$][$remove](key);
            } else {
              this[_builtMap$][$_set](key, builtList);
            }
          }
          this[_builtMapOwner$] = new (_BuiltListMultimapOfKL$VL()).withSafeMap(this[_builtMap$]);
        }
        return this[_builtMapOwner$];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltListMultimapLOfKL$VL().is(multimap)) {
          this[_setOwner$2](multimap);
        } else if (MapL().is(multimap) || ListMultimapL().is(multimap) || BuiltListMultimapL().is(multimap)) {
          this[_setWithCopyAndCheck$](IterableL().as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, ListMultimap or BuiltListMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.legacy(dart.fnType(KL(), [dart.legacy(T)])).as(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.legacy(dart.fnType(VL(), [dart.legacy(T)])).as(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.legacy(dart.fnType(IterableLOfVL(), [dart.legacy(T)])).as(values);
        if (value != null && values != null) {
          dart.throw(new core.ArgumentError.new("expected value or values to be set, got both"));
        }
        key == null ? key = dart.fn(x => KL().as(x), dart.fnType(KL(), [dart.legacy(T)])) : null;
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          value == null ? value = dart.fn(x => VL().as(x), dart.fnType(VL(), [dart.legacy(T)])) : null;
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        KL().as(key);
        VL().as(value);
        this[_makeWriteableCopy$]();
        this[_checkKey$0](key);
        this[_checkValue$0](value);
        this[_getValuesBuilder$](key).add(value);
      }
      addValues(key, values) {
        KL().as(key);
        IterableLOfVL().as(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VLToNull()));
      }
      addAll(other) {
        ListMultimapLOfKL$VL().as(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KLAndVLToNull()));
      }
      remove(key, value) {
        VL().as(value);
        if (!KL().is(key)) return false;
        this[_makeWriteableCopy$]();
        return this[_getValuesBuilder$](KL().as(key)).remove(value);
      }
      removeAll(key) {
        let t12;
        if (!KL().is(key)) return BuiltListOfVL().new();
        this[_makeWriteableCopy$]();
        let builder = this[_builderMap$][$_get](key);
        if (builder == null) {
          this[_builderMap$][$_set](KL().as(key), ListBuilderOfVL().new());
          t12 = this[_builtMap$][$_get](key);
          return t12 == null ? BuiltListOfVL().new() : t12;
        }
        let old = builder.build();
        builder.clear();
        return old;
      }
      clear() {
        this[_makeWriteableCopy$]();
        this[_builtMap$][$clear]();
        this[_builderMap$][$clear]();
      }
      _get(key) {
        this[_makeWriteableCopy$]();
        return KL().is(key) ? this[_getValuesBuilder$](key) : ListBuilderOfVL().new();
      }
      [_getValuesBuilder$](key) {
        let result = this[_builderMap$][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap$][$_get](key);
          if (builtValues == null) {
            result = ListBuilderOfVL().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap$][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy$]() {
        if (this[_builtMapOwner$] != null) {
          this[_builtMap$] = LinkedHashMapOfKL$BuiltListLOfVL().from(this[_builtMap$]);
          this[_builtMapOwner$] = null;
        }
      }
      [_setOwner$2](builtListMultimap) {
        this[_builtMapOwner$] = builtListMultimap;
        this[_builtMap$] = builtListMultimap[_map$2];
        this[_builderMap$] = new (LinkedMapOfKL$ListBuilderLOfVL()).new();
      }
      [_setWithCopyAndCheck$](keys, lookup) {
        this[_builtMapOwner$] = null;
        this[_builtMap$] = new (LinkedMapOfKL$BuiltListLOfVL()).new();
        this[_builderMap$] = new (LinkedMapOfKL$ListBuilderLOfVL()).new();
        for (let key of keys) {
          if (KL().is(key)) {
            for (let value of IterableL().as(dart.dcall(lookup, [key]))) {
              if (VL().is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkGenericTypeParameter$2]() {
        if (dart.wrapType(KL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new ListMultimapBuilder<int, int>\""));
        }
        if (dart.wrapType(VL())._equals(dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit value type required, " + "for example \"new ListMultimapBuilder<int, int>\""));
        }
      }
      [_checkKey$0](key) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("null key"));
        }
      }
      [_checkValue$0](value) {
        if (value == null) {
          dart.throw(new core.ArgumentError.new("null value"));
        }
      }
    }
    (ListMultimapBuilder._uninitialized = function() {
      this[_builtMap$] = null;
      this[_builtMapOwner$] = null;
      this[_builderMap$] = null;
      this[_checkGenericTypeParameter$2]();
    }).prototype = ListMultimapBuilder.prototype;
    dart.addTypeTests(ListMultimapBuilder);
    ListMultimapBuilder.prototype[_is_ListMultimapBuilder_default] = true;
    dart.addTypeCaches(ListMultimapBuilder);
    dart.setMethodSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapBuilder.__proto__),
      build: dart.fnType(dart.legacy(list_multimap.BuiltListMultimap$(dart.legacy(K), dart.legacy(V))), []),
      update: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V)))]))]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [dart.legacy(core.Iterable$(dart.legacy(T)))], {key: dart.legacy(core.Object), value: dart.legacy(core.Object), values: dart.legacy(core.Object)}, {}]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addValues: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(V))), [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      _get: dart.fnType(dart.legacy(list.ListBuilder$(dart.legacy(V))), [dart.legacy(core.Object)]),
      [_getValuesBuilder$]: dart.fnType(dart.legacy(list.ListBuilder$(dart.legacy(V))), [dart.legacy(K)]),
      [_makeWriteableCopy$]: dart.fnType(dart.void, []),
      [_setOwner$2]: dart.fnType(dart.void, [dart.legacy(list_multimap._BuiltListMultimap$(dart.legacy(K), dart.legacy(V)))]),
      [_setWithCopyAndCheck$]: dart.fnType(dart.void, [dart.legacy(core.Iterable), dart.legacy(core.Function)]),
      [_checkGenericTypeParameter$2]: dart.fnType(dart.void, []),
      [_checkKey$0]: dart.fnType(dart.void, [dart.legacy(K)]),
      [_checkValue$0]: dart.fnType(dart.void, [dart.legacy(V)])
    }));
    dart.setLibraryUri(ListMultimapBuilder, L10);
    dart.setFieldSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getFields(ListMultimapBuilder.__proto__),
      [_builtMap$]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(list.BuiltList$(dart.legacy(V)))))),
      [_builtMapOwner$]: dart.fieldType(dart.legacy(list_multimap._BuiltListMultimap$(dart.legacy(K), dart.legacy(V)))),
      [_builderMap$]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(list.ListBuilder$(dart.legacy(V))))))
    }));
    return ListMultimapBuilder;
  });
  list_multimap.ListMultimapBuilder = list_multimap.ListMultimapBuilder$();
  dart.addTypeTests(list_multimap.ListMultimapBuilder, _is_ListMultimapBuilder_default);
  dart.trackLibraries("packages/built_collection/built_collection", {
    "package:built_collection/src/internal/copy_on_write_map.dart": copy_on_write_map,
    "package:built_collection/src/iterable.dart": iterable,
    "package:built_collection/src/set.dart": set,
    "package:built_collection/src/internal/iterables.dart": iterables,
    "package:built_collection/src/internal/copy_on_write_set.dart": copy_on_write_set,
    "package:built_collection/src/list.dart": list,
    "package:built_collection/src/internal/copy_on_write_list.dart": copy_on_write_list,
    "package:built_collection/src/set_multimap.dart": set_multimap,
    "package:built_collection/built_collection.dart": built_collection,
    "package:built_collection/src/map.dart": map$,
    "package:built_collection/src/list_multimap.dart": list_multimap
  }, {
    "package:built_collection/src/iterable.dart": ["iterable/built_iterable.dart"],
    "package:built_collection/src/set.dart": ["set/built_set.dart", "set/set_builder.dart"],
    "package:built_collection/src/list.dart": ["list/built_list.dart", "list/list_builder.dart"],
    "package:built_collection/src/set_multimap.dart": ["set_multimap/built_set_multimap.dart", "set_multimap/set_multimap_builder.dart"],
    "package:built_collection/src/map.dart": ["map/built_map.dart", "map/map_builder.dart"],
    "package:built_collection/src/list_multimap.dart": ["list_multimap/built_list_multimap.dart", "list_multimap/list_multimap_builder.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/internal/copy_on_write_map.dart","src/iterable/built_iterable.dart","src/set/built_set.dart","src/set.dart","src/set/set_builder.dart","src/internal/iterables.dart","src/internal/copy_on_write_set.dart","src/list/built_list.dart","src/list.dart","src/list/list_builder.dart","src/internal/copy_on_write_list.dart","src/set_multimap/built_set_multimap.dart","src/set_multimap.dart","src/set_multimap/set_multimap_builder.dart","src/map/built_map.dart","src/map.dart","src/map/map_builder.dart","src/list_multimap/built_list_multimap.dart","src/list_multimap.dart","src/list_multimap/list_multimap_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WAgBuB;AAAQ,cAAA,AAAI,oBAAC,GAAG;MAAC;;AAGR,6FAAuB,AAAK;MAAe;kBAGjD;AAAQ,cAAA,AAAK,2BAAY,GAAG;MAAC;oBAG3B;AAAU,cAAA,AAAK,6BAAc,KAAK;MAAC;;AAGrB,cAAA,AAAK;MAAO;cAGnB;AAAM,cAAA,AAAK,uBAAQ,CAAC;MAAC;;AAGlC,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;AAGd,cAAA,AAAK;MAAI;;AAGf,cAAA,AAAK;MAAM;kBAG2B;AAAM,cAAA,AAAK,qDAAI,CAAC;MAAC;;AAG/C,cAAA,AAAK;MAAM;WAKjB;YAAO;gBAAP;gBAAO;AACF,QAAvB;AACiB,QAAjB,AAAI,mBAAC,GAAG,EAAI,KAAK;;MACnB;;yBAGsB;AACG,QAAvB;AACkB,QAAlB,AAAK,qBAAO,KAAK;MACnB;;yCAGyC;AAChB,QAAvB;AACwB,QAAxB,AAAK,yBAAW,OAAO;MACzB;;AAIyB,QAAvB;AACY,QAAZ,AAAK;MACP;kBAGgB,KAAkB;gBAAlB;uBAAkB;AACT,QAAvB;AACA,cAAO,AAAK,2BAAY,GAAG,EAAE,QAAQ;MACvC;aAGgB;AACS,QAAvB;AACA,cAAO,AAAK,sBAAO,GAAG;MACxB;kBAGqC;AACZ,QAAvB;AACsB,QAAtB,AAAK,0BAAY,IAAI;MACvB;;AAGqB,cAAK,eAAL;MAAe;aAGzB,KAAmB;gBAAnB;qBAAmB;YAAsB;;AAC3B,QAAvB;AACA,cAAO,AAAK,sBAAO,GAAG,EAAE,MAAM,aAAY,QAAQ;MACpD;;0BAGgC;AACP,QAAvB;AACsB,QAAtB,AAAK,wBAAU,MAAM;MACvB;;;AAKE,uBAAK,yBAAkB;AACC,QAAxB,yBAAmB;AAGO,QAF1B,cAAO,AAAY,sBAAG,QACf,KAAW,sBAAX;AAAe,sBAAO;;gBACvB,4BAAe;MACvB;;mCA3GoB,MAAY;MAAZ;MAAY;MAAiC,yBAAE;;IAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICEzE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCkB6B;AAAyB,cAAS,oCAAK,QAAQ;MAAC;kBAW5C;AAC7B,YAAa,gBAAT,QAAQ,eAAiB,AAAS,QAAD,qBAAqB;AACxD,gBAAgB,+CAAT,QAAQ;;AAEf,gBAAO,wDAA+B,QAAQ;;MAElD;gBAOgC;AAC9B,YAAa,+CAAT,QAAQ,eAAoB,AAAS,QAAD,qBAAqB;AAC3D,gBAAO,SAAQ;;AAEf,gBAAO,0DAAiC,QAAQ;;MAEpD;mBAG+C;;AAC3C,cAAmC,8CAAlC;AAAiB,oBAAO,OAAO;;;MAAU;;AAKjB,wEAA4B;MAAK;cAGlB;;AACxC,cAA+B,yBAA9B;AAAa,oBAAO,OAAO;;;MAAU;;AAGZ,mCAAa;MAAK;;AAGpB;MAAI;;;AASkC,QADhE,AAAU,mBAAA,OAAV,kBAAc,uBACV,AAAK,AAAuB,0BAAnB,QAAC,KAAQ,cAAF,CAAC,oCAA4B,SAAjB;AAAyB;;iBAD/C;AAEV,cAAO;MACT;;YAOyB;AACvB,YAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,aAAU,eAAN,KAAK,GAAe,MAAO;AAC/B,yBAAU,WAAN,KAAK,aAAW,cAAQ,MAAO;AACnC,YAAU,cAAN,KAAK,KAAa,eAAU,MAAO;AACvC,cAAO,0CAAY,KAAK;MAC1B;;AAGqB,cAAK,eAAL;MAAe;;AAMlB,mDAAuB;MAAK;;AAM5B,cAAA,AAAK;MAAM;kBAGK;AAAU,cAAA,AAAK,yBAAY,KAAK;MAAC;iBAG3B;AACpC,iDAAyB,oBAAa,AAAK,uBAAW,AAAM,KAAD;MAAO;mBAG5B;AACtC,iDAAyB,oBAAa,AAAK,yBAAa,AAAM,KAAD;MAAO;aAGxD;AAAW,cAAA,AAAK,oBAAO,MAAM;MAAC;;2BAGhB;AAC1B,iDAAyB,oBAAa,AAAK,kBAAM,AAAM,KAAD;MAAO;;AAKrC,cAAA,AAAK;MAAQ;;;;;AAGhB,cAAS,8CAAe;MAAK;;2BAGnB;AAAU,cAAA,AAAK,0BAAW,KAAK;MAAC;;AAGrC,cAAA,AAAK;MAAc;aAGhB;AAAM,cAAA,AAAK,mCAAI,CAAC;MAAC;YAGf;AAAS,cAAA,AAAK,qBAAM,IAAI;MAAC;gBAGd;AAAM,cAAA,AAAK,sCAAO,CAAC;MAAC;eAG7C;AAAY,cAAA,AAAK,sBAAS,OAAO;MAAC;cAGzB;AAAM,cAAA,AAAK,uBAAQ,CAAC;MAAC;;0BAGzB;AAAY,cAAA,AAAK,sBAAO,OAAO;MAAC;cAG9C,cAA+B;AACvC,cAAA,AAAK,oCAAK,YAAY,EAAE,OAAO;MAAC;YAGR;AAAS,cAAA,AAAK,qBAAM,IAAI;MAAC;WAGjC;AAAoB,cAAA,AAAK,oBAAK,SAAS;MAAC;UAGlC;AAAS,cAAA,AAAK,mBAAI,IAAI;MAAC;;AAW/B,8CAAkB,aAAM;MAAY;;YAGjC;AAAqB,cAAA,AAAK,iCAAiB,QAAQ;MAAC;;AAGrD,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;WAGjB;AAAM,cAAA,AAAK,oBAAK,CAAC;MAAC;gBAGA;AAAS,cAAA,AAAK,yBAAU,IAAI;MAAC;WAG/C;AAAM,cAAA,AAAK,oBAAK,CAAC;MAAC;gBAGA;AAAS,cAAA,AAAK,yBAAU,IAAI;MAAC;;AAGrD,cAAA,AAAK;MAAK;;AAGX,cAAA,AAAK;MAAI;;AAGP,cAAA,AAAK;MAAM;iBAGG;YAAoB;;AAC9C,cAAA,AAAK,0BAAW,IAAI,WAAU,MAAM;MAAC;gBAGZ;YAAoB;;AAC7C,cAAA,AAAK,yBAAU,IAAI,WAAU,MAAM;MAAC;kBAGT;YAAoB;;AAC/C,cAAA,AAAK,2BAAY,IAAI,WAAU,MAAM;MAAC;gBAG1B;AAAU,cAAA,AAAK,yBAAU,KAAK;MAAC;;4BAI/B,aAAkB;MA9N9B;MA8NY;MAAkB;AAChC,UAAI,AAAE,4BAAG;AAE+D,QADtE,WAAM,8BACF;;IAER;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BA4B8B;AAAS,cAAA,AAAE,6BAAG,IAAI;;;sCAvBX,YAAmB;AAC5C,wCAAE,UAAU,EAAE,GAAG;;IAAC;4CAEO;AAAkB,wCAAE,MAAS;AAChE,eAAS,UAAW,SAAQ;AAC1B,YAAY,QAAR,OAAO;AACQ,UAAjB,AAAK,gBAAI,OAAO;;AAEmD,UAAnE,WAAM,2BAAc,AAA8C,kDAAR,OAAO;;;IAGvE;8CAEuC;AAAkB,wCAAE,MAAS;AAClE,eAAS,UAAW,SAAQ;AAC1B,YAAI,AAAU,OAAO,IAAE;AAC0C,UAA/D,WAAM,2BAAc;;AAEH,UAAjB,AAAK,wBAAI,OAAO;;;IAGtB;;;;;;;;;;;;;;;;;ACvPoB;MAAkB;;+CALF;MAAe;AACvC,wEAAkB,QAAQ;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCMV;;AAC3B,aAAO;;AAAgC,qBAAQ,QAAQ;;;MACzD;;AAO2D,QAAzD,AAAU,mBAAA,OAAV,kBAAc,kCAAyB,oBAAa,eAA1C;AACV,cAAO;MACT;aAGoC;AACrB,QAAb,AAAO,OAAA,CAAC;MACV;cAGsB;AACpB,YAAa,oBAAT,QAAQ,KAAyC,YAArB,AAAS,QAAD,gBAAgB;AAClC,UAApB,iBAAW,QAAQ;;AAGf,oBAAM;AACV,mBAAS,UAAW,SAAQ;AAC1B,gBAAY,QAAR,OAAO;AACO,cAAhB,AAAI,GAAD,KAAK,OAAO;;AAEoD,cAAnE,WAAM,2BAAc,AAA8C,kDAAR,OAAO;;;AAGrD,UAAhB,kBAAY,GAAG;;MAEnB;eAkB6B;;;AAC3B,YAAI,AAAK,IAAD,IAAI;AACyB,UAAnC,WAAoB,+BAAQ;;AAEZ,QAAlB,qBAAc,IAAI;AACqB,QAAvC,4CAAY;AAAc,oBAAO;;;MACnC;;;AAKoB,QAAlB,qBAAc;AACyB,QAAvC,4CAAY;AAAc,oBAAO;;;MACnC;;AAKkB,cAAA,AAAK;MAAM;;AAGT,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;gBAG3B;AACW,QAApB,oBAAc,KAAK;AACnB,cAAO,AAAS,oBAAI,KAAK;MAC3B;;2BAGwB;AACe,QAArC,WAAW,iCAAiB,QAAQ;AACZ,QAAxB,qBAAe,QAAQ;AACE,QAAzB,AAAS,sBAAO,QAAQ;MAC1B;;AAIkB,QAAhB,AAAS;MACX;aAGmB;AAAU,cAAA,AAAS,uBAAO,KAAK;MAAC;gBAGnB;AACF,QAA5B,AAAS,yBAAU,QAAQ;MAC7B;kBAGkC;AACN,QAA1B,AAAS,2BAAY,IAAI;MAC3B;gBAGgC;AACF,QAA5B,AAAS,yBAAU,QAAQ;MAC7B;kBAKkC;AACN,QAA1B,AAAS,2BAAY,IAAI;MAC3B;UAKuB;;;AACjB,+CAAS;AAAc,oBAAO,AAAK,wBAAI,CAAC;;;AACtB,QAAtB,qBAAe,MAAM;AACF,QAAnB,kBAAY,MAAM;MACpB;YAK4B;AAAS,gCAAY,IAAI;MAAC;aAGlB;;;AAC9B,+CAAS;AAAc,oBAAO,AAAK,2BAAO,CAAC;;;AACzB,QAAtB,qBAAe,MAAM;AACF,QAAnB,kBAAY,MAAM;MACpB;WAGc;;AACmC,QAA/C,4CAAY;AAAc,oBAAO,AAAK,mBAAK,CAAC;;;MAC9C;gBAIgC;;AACyB,QAAvD,4CAAY;AAAc,oBAAO,AAAK,wBAAU,IAAI;;;MACtD;WAGc;;AACmC,QAA/C,4CAAY;AAAc,oBAAO,AAAK,mBAAK,CAAC;;;MAC9C;gBAIgC;;AACyB,QAAvD,4CAAY;AAAc,oBAAO,AAAK,wBAAU,IAAI;;;MACtD;mBAa6B;AAC3B,aAA4B,YAArB,AAAS,QAAD,gBAAgB,uCAC3B;AACgB,QAApB,cAAO,AAAS,QAAD;AACK,QAApB,kBAAY,QAAQ;MACtB;oBAEwB;AACN,QAAhB,kBAAY;AACF,QAAV,cAAO,GAAG;MACZ;;;AAGE,YAAI,mBAAa;AACkB,UAAjC,wCAAO;AAAc,sBAAO;;;AACZ,UAAhB,kBAAY;;AAEd,cAAO;MACT;;AAEuB,cAAA,AAAY,uBAAG,OAAO,AAAW,uBAAQ;MAAE;;AAGhE,YAAI,AAAE,4BAAG;AAEiC,UADxC,WAAM,8BAAgB,AAAC,qCACnB;;MAER;sBAEqB;AACnB,YAAI,AAAU,OAAO,IAAE;AACc,UAAnC,WAAM,2BAAc;;MAExB;uBAEgC;AAC9B,iBAAS,UAAW,SAAQ;AACJ,UAAtB,oBAAc,OAAO;;MAEzB;;;;;;AA/C8B,MAA5B;IACF;yCAEsC;MACpB,qBAAE,AAAI,GAAD;MACZ,cAAE,AAAI,GAAD;MACA,kBAAE,GAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AFkFnB,UAAO;EACT;;AAHY;EAGZ;;AAQ4B;EAAoB;;AAApC;EAAoC;4DG3RN;AAC1C,SAAa,WAAT,QAAQ,MAAsB,oBAAT,QAAQ,MAA+B,UAAT,QAAQ;AACjC,MAA5B,WAAW,AAAS,QAAD;;AAErB,UAAO,SAAQ;EACjB;;;;;;;;;;;;;;;;;;;ACEoB,cAAA,AAAK;MAAM;aAGb;AAAW,cAAA,AAAK,qBAAO,MAAM;MAAC;mBAGd;AAAU,cAAA,AAAK,2BAAa,KAAK;MAAC;;sBAG9C;AAAU,cAAA,AAAK,oBAAM,KAAK;MAAC;iBAGjB;AAAU,cAAA,AAAK,yBAAW,KAAK;MAAC;kBAG5B;AAAU,cAAA,AAAK,0BAAY,KAAK;MAAC;UAGzC;AAAS,cAAA,AAAK,oBAAI,IAAI;MAAC;;AAG7B,2EAAkB,AAAK;MAAU;eAGhC;AAAY,cAAA,AAAK,uBAAS,OAAO;MAAC;gBAGvC;AAAU,cAAA,AAAK,0BAAU,KAAK;MAAC;YAGnB;AAAS,cAAA,AAAK,sBAAM,IAAI;MAAC;gBAGP;AAAM,cAAA,AAAK,uCAAO,CAAC;MAAC;;AAGnD,cAAA,AAAK;MAAK;iBAGK;YAAoB;;AAC9C,cAAA,AAAK,2BAAW,IAAI,WAAU,MAAM;MAAC;cAG7B,cAA+B;AACvC,cAAA,AAAK,qCAAK,YAAY,EAAE,OAAO;MAAC;;2BAGD;AAAU,cAAA,AAAK,2BAAW,KAAK;MAAC;cAGrC;AAAM,cAAA,AAAK,wBAAQ,CAAC;MAAC;;AAG/B,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;AAGV,cAAA,AAAK;MAAQ;;;;WAGrB;AAAoB,cAAA,AAAK,qBAAK,SAAS;MAAC;;AAG9C,cAAA,AAAK;MAAI;gBAGM;YAAoB;;AAC7C,cAAA,AAAK,0BAAU,IAAI,WAAU,MAAM;MAAC;aAGP;AAAM,cAAA,AAAK,oCAAI,CAAC;MAAC;;0BAGxB;AAAY,cAAA,AAAK,uBAAO,OAAO;MAAC;;AAG1C,cAAA,AAAK;MAAM;kBAGI;YAAoB;;AAC/C,cAAA,AAAK,4BAAY,IAAI,WAAU,MAAM;MAAC;WAGrB;AAAU,cAAA,AAAK,qBAAK,KAAK;MAAC;gBAGR;AAAS,cAAA,AAAK,0BAAU,IAAI;MAAC;WAG/C;AAAU,cAAA,AAAK,qBAAK,KAAK;MAAC;gBAGR;AAAS,cAAA,AAAK,0BAAU,IAAI;MAAC;;YAG/C;AAAqB,cAAA,AAAK,kCAAiB,QAAQ;MAAC;;AAGvD,cAAA,AAAK;MAAO;YAGK;AAAS,cAAA,AAAK,sBAAM,IAAI;MAAC;;AAG9B,cAAA,AAAK;MAAc;;gBAKtC;AACc,QAAvB;AACA,cAAO,AAAK,kBAAI,KAAK;MACvB;;2BAGwB;AACC,QAAvB;AACqB,QAArB,AAAK,oBAAO,QAAQ;MACtB;;AAIyB,QAAvB;AACY,QAAZ,AAAK;MACP;aAGmB;AACM,QAAvB;AACA,cAAO,AAAK,qBAAO,KAAK;MAC1B;kBAGkC;AACT,QAAvB;AACsB,QAAtB,AAAK,yBAAY,IAAI;MACvB;kBAGkC;AACT,QAAvB;AACsB,QAAtB,AAAK,yBAAY,IAAI;MACvB;gBAGgC;AACP,QAAvB;AACwB,QAAxB,AAAK,uBAAU,QAAQ;MACzB;gBAGgC;AACP,QAAvB;AACwB,QAAxB,AAAK,uBAAU,QAAQ;MACzB;;AAGqB,cAAK,eAAL;MAAe;;;AAKlC,uBAAK,0BAAkB;AACC,QAAxB,0BAAmB;AAEwD,QAD3E,eACI,AAAY,uBAAG,QAAQ,KAAW,uBAAX;AAAe,oBAAO;;gBAAS,yBAAY;MACxE;;mCA7KoB,MAAY;MAAZ;MAAY;MAAiC,0BAAE;;IAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCiB3C;AACxB,oDAAkB,QAAQ;MAAC;kBAWC;AAC9B,YAAa,iBAAT,QAAQ,eAAkB,AAAS,QAAD,qBAAqB;AACzD,gBAAgB,iDAAT,QAAQ;;AAEf,gBAAO,0DAAgC,QAAQ;;MAEnD;gBAOiC;AAC/B,YAAa,iDAAT,QAAQ,eAAqB,AAAS,QAAD,qBAAqB;AAC5D,gBAAO,SAAQ;;AAEf,gBAAO,4DAAkC,QAAQ;;MAErD;mBAGiD;;AAC7C,cAAoC,gDAAnC;AAAkB,oBAAO,OAAO;;;MAAU;;AAKjB,qCAAe;MAAK;cAGJ;;AAC1C,cAA+B,yBAA9B;AAAa,oBAAO,OAAO;;;MAAU;;AAGZ;MAAI;;AAGN,kCAAY;MAAK;;AAQX,QAAhC,AAAU,oBAAA,OAAV,mBAAc,iBAAY,gBAAhB;AACV,cAAO;MACT;;YAOyB;AACvB,YAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,aAAU,gBAAN,KAAK,GAAgB,MAAO;AAChC,yBAAU,WAAN,KAAK,aAAW,cAAQ,MAAO;AACnC,YAAU,cAAN,KAAK,KAAa,eAAU,MAAO;AACvC,iBAAS,IAAI,GAAG,CAAC,KAAI,aAAU,IAAF,AAAE,CAAC,GAAH;AAC3B,2BAAS,WAAL,KAAK,WAAC,CAAC,IAAS,UAAC,CAAC,IAAG,MAAO;;AAElC,cAAO;MACT;;AAGqB,cAAM,eAAN;MAAgB;;AAMjB,uCAAqB;MAAM;WAK7B;AAAU,cAAA,AAAK,qBAAC,KAAK;MAAC;;4BAGH;AACjC,mDAA2B,AAAM,oBAAE,AAAM,KAAD;MAAO;;AAIjC,cAAA,AAAM;MAAM;;AAGF,cAAA,AAAM;MAAQ;cAG5B,SAAc;gBAAd;AAA6B,cAAA,AAAM,wBAAQ,OAAO,EAAE,KAAK;MAAC;kBAGtD,SAAc;gBAAd;AAAyB,cAAA,AAAM,4BAAY,OAAO,EAAE,KAAK;MAAC;iBAG5C,MAAW;AACvC,cAAA,AAAM,2BAAW,IAAI,EAAE,KAAK;MAAC;qBAGG,MAAW;AAC3C,cAAA,AAAM,+BAAe,IAAI,EAAE,KAAK;MAAC;cAGZ,OAAY;AACjC,mDAA2B,AAAM,uBAAQ,KAAK,EAAE,GAAG;MAAE;eAGhC,OAAW;AAAQ,cAAA,AAAM,yBAAS,KAAK,EAAE,GAAG;MAAC;;AAG/C,cAAA,AAAM;MAAO;;AAKR,cAAA,AAAM;MAAQ;;;;aAGT;AAAM,cAAA,AAAM,oCAAI,CAAC;MAAC;YAGhB;AAAS,cAAA,AAAM,sBAAM,IAAI;MAAC;;AAG/B,cAAA,AAAM;MAAc;gBAGJ;AAAM,cAAA,AAAM,uCAAO,CAAC;MAAC;eAG9C;AAAY,cAAA,AAAM,yBAAS,OAAO;MAAC;cAG1B;AAAM,cAAA,AAAM,wBAAQ,CAAC;MAAC;;0BAG1B;AAAY,cAAA,AAAM,uBAAO,OAAO;MAAC;cAG/C,cAA+B;AACvC,cAAA,AAAM,qCAAK,YAAY,EAAE,OAAO;MAAC;;2BAGF;AAAU,cAAA,AAAM,2BAAW,KAAK;MAAC;YAGxC;AAAS,cAAA,AAAM,sBAAM,IAAI;MAAC;WAGlC;AAAoB,cAAA,AAAM,qBAAK,SAAS;MAAC;UAGnC;AAAS,cAAA,AAAM,oBAAI,IAAI;MAAC;;YAW7B;AAAqB,+CAAmB,cAAO,QAAQ;MAAC;;AAG3D,cAAA,AAAM;MAAO;;AAGX,cAAA,AAAM;MAAO;;AAGV,cAAA,AAAM;MAAU;WAGlB;AAAM,cAAA,AAAM,qBAAK,CAAC;MAAC;gBAGD;AAAS,cAAA,AAAM,0BAAU,IAAI;MAAC;WAGhD;AAAM,cAAA,AAAM,qBAAK,CAAC;MAAC;gBAGD;AAAS,cAAA,AAAM,0BAAU,IAAI;MAAC;;AAGtD,cAAA,AAAM;MAAK;;AAGZ,cAAA,AAAM;MAAI;;AAGR,cAAA,AAAM;MAAM;iBAGE;YAAoB;;AAC9C,cAAA,AAAM,2BAAW,IAAI,WAAU,MAAM;MAAC;gBAGb;YAAoB;;AAC7C,cAAA,AAAM,0BAAU,IAAI,WAAU,MAAM;MAAC;kBAGV;YAAoB;;AAC/C,cAAA,AAAM,4BAAY,IAAI,WAAU,MAAM;MAAC;gBAG3B;AAAU,cAAA,AAAM,0BAAU,KAAK;MAAC;;AAGvB,cAAS,8CAAe;MAAM;;6BAItC;MAjPb;MAiPa;AACf,UAAI,AAAE,4BAAG;AAEgE,QADvE,WAAM,8BACF;;IAER;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAyB8B;AAAS,cAAA,AAAE,6BAAG,IAAI;;;wCApBhB;AAAc,yCAAE,IAAI;;IAAC;6CAEd;AAC3B,yCAAE,gBAAa,QAAQ,aAAY;AAC7C,eAAS,UAAW;AAClB,aAAY,QAAR,OAAO;AAC0D,UAAnE,WAAM,2BAAc,AAA8C,kDAAR,OAAO;;;IAGvE;+CAE2C;AAC/B,yCAAE,gBAAa,QAAQ,aAAY;AAC7C,eAAS,UAAW;AAClB,YAAI,AAAU,OAAO,IAAE;AAC0C,UAA/D,WAAM,2BAAc;;;IAG1B;;;;;;;;;;;;;;;;;ACnQoB;MAAkB;;gDALD;MAAe;AACxC,yEAAkB,QAAQ;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCGT;;AAC5B,aAAO;;AAAiC,qBAAQ,QAAQ;;;MAC1D;;AAOE,YAAI,AAAW,oBAAG;AAC4B,UAA5C,iBAAU,oCAA2B;;AAEvC,cAAO;MACT;aAGqC;AACtB,QAAb,AAAO,OAAA,CAAC;MACV;cAGsB;AACpB,YAAa,qBAAT,QAAQ;AACS,UAAnB,iBAAU,QAAQ;;AAEkB,UAApC,mBAAa,gBAAa,QAAQ;;MAEtC;WAKkB;AAAU,cAAA,AAAK,qBAAC,KAAK;MAAC;WAGlB;YAAS;;AACP,QAAtB,qBAAc,OAAO;AACK,QAA1B,AAAS,uBAAC,KAAK,EAAI,OAAO;;MAC5B;;AAGe,cAAA,AAAM;MAAK;;gBAGd;AACU,QAApB,qBAAc,KAAK;AACI,QAAvB,AAAU,0BAAQ,KAAK;MACzB;;AAGc,cAAA,AAAM;MAAI;;gBAGb;AACW,QAApB,qBAAc,KAAK;AACG,QAAtB,AAAU,yBAAO,KAAK;MACxB;;AAGkB,cAAA,AAAM;MAAM;;AAGV,cAAA,AAAM;MAAO;;AAGV,cAAA,AAAM;MAAU;;gBAG5B;AACW,QAApB,qBAAc,KAAK;AACC,QAApB,AAAU,sBAAI,KAAK;MACrB;;2BAGwB;AAGlB,uBAAW;AACX,2BAAe,AAAS,QAAD;AACF,QAAzB,AAAS,QAAD,UAAQ,QAAQ;AACxB;AACE,mBAAS,IAAI,YAAY,EAAE,CAAC,IAAI,AAAS,QAAD,WAAW,IAAF,aAAE,CAAC,IAAH;AACrB,YAA1B,qBAAc,AAAQ,QAAA,QAAC,CAAC;;;cAEnB;AAC4C,UAAnD,AAAS,QAAD,eAAa,YAAY,EAAE,AAAS,QAAD;AACpC,UAAP;;MAEJ;;AAI+C,QAA7C,eAAQ,AAAM,AAAS,4CAAiB;AACvB,QAAjB,mBAAa;MACf;WAG8B;AACL,QAAvB,AAAU,uBAAK,OAAO;MACxB;cAGqB;AACM,QAAzB,AAAU,0BAAQ,MAAM;MAC1B;;AAImB,QAAjB,AAAU;MACZ;aAGgB;gBAAS;AACD,QAAtB,qBAAc,OAAO;AACW,QAAhC,AAAU,yBAAO,KAAK,EAAE,OAAO;MACjC;gBAGmB;2BAAmB;AAGhC,uBAAW;AACX,2BAAe,AAAS,QAAD;AACQ,QAAnC,AAAS,QAAD,aAAW,KAAK,EAAE,QAAQ;AAC9B,6BAAiC,aAAhB,AAAS,QAAD,0BAAU,YAAY;AAEnD;AACE,mBAAS,IAAI,KAAK,EAAE,CAAC,KAAU,aAAN,KAAK,IAAG,cAAc,EAAI,IAAF,aAAE,CAAC,IAAH;AACrB,YAA1B,qBAAc,AAAQ,QAAA,QAAC,CAAC;;;cAEnB;AAC4C,UAAnD,AAAS,QAAD,eAAa,KAAK,EAAQ,aAAN,KAAK,IAAG,cAAc;AAC3C,UAAP;;MAEJ;aAGgB;2BAAmB;AACI,QAArC,WAAW,iCAAiB,QAAQ;AACZ,QAAxB,sBAAe,QAAQ;AACU,QAAjC,AAAU,yBAAO,KAAK,EAAE,QAAQ;MAClC;aAGmB;AAAU,cAAA,AAAU,0BAAO,KAAK;MAAC;eAGrC;AAAU,cAAA,AAAU,4BAAS,KAAK;MAAC;;AAGhC,cAAA,AAAU;MAAY;kBAGN;AACL,QAA3B,AAAU,8BAAY,IAAI;MAC5B;kBAKkC;AACL,QAA3B,AAAU,8BAAY,IAAI;MAC5B;cAGiB,OAAY;AACY,QAAvC,mBAAa,AAAM,uBAAQ,KAAK,EAAE,GAAG;MACvC;eAGkB,OAAW,KAAiB,UAAe;2BAAf;AACP,QAArC,WAAW,iCAAiB,QAAQ;AACZ,QAAxB,sBAAe,QAAQ;AAC4B,QAAnD,AAAU,2BAAS,KAAK,EAAE,GAAG,EAAE,QAAQ,EAAE,SAAS;MACpD;kBAGqB,OAAW;AACG,QAAjC,AAAU,8BAAY,KAAK,EAAE,GAAG;MAClC;gBAGmB,OAAW;gBAAO;AACX,QAAxB,qBAAc,SAAS;AACmB,QAA1C,AAAU,4BAAU,KAAK,EAAE,GAAG,EAAE,SAAS;MAC3C;mBAGsB,OAAW;2BAAiB;AACX,QAArC,WAAW,iCAAiB,QAAQ;AACZ,QAAxB,sBAAe,QAAQ;AACqB,QAA5C,AAAU,+BAAa,KAAK,EAAE,GAAG,EAAE,QAAQ;MAC7C;;qBAKuB;AACjB,qBAAS,AAAM,AAAO,yBAAH,CAAC,sBAAmB;AACrB,QAAtB,sBAAe,MAAM;AACD,QAApB,mBAAa,MAAM;MACrB;YAK4B;AAAS,gCAAY,IAAI;MAAC;;gCAGlB;AAC9B,qBAAS,AAAM,AAAU,4BAAH,CAAC,sBAAmB;AACxB,QAAtB,sBAAe,MAAM;AACD,QAApB,mBAAa,MAAM;MACrB;WAGc;AAC8C,QAA1D,mBAAa,eAAQ,AAAM,AAAQ,oBAAH,CAAC,sBAAmB;MACtD;gBAIgC;AACoC,QAAlE,mBAAa,eAAQ,AAAM,AAAgB,yBAAN,IAAI,sBAAmB;MAC9D;WAGc;AACsC,QAAlD,mBAAa,AAAM,AAAQ,oBAAH,CAAC,sBAAmB;MAC9C;gBAIgC;AAC4B,QAA1D,mBAAa,AAAM,AAAgB,yBAAN,IAAI,sBAAmB;MACtD;mBAQ6B;AACJ,QAAvB,eAAQ,AAAU,SAAD;AACK,QAAtB,mBAAa,SAAS;MACxB;qBAE0B;AACZ,QAAZ,eAAQ,IAAI;AACK,QAAjB,mBAAa;MACf;;AAGE,YAAI,oBAAc;AACiC,UAAjD,mBAAa,gBAAa,yBAAiB;;AAE7C,cAAO;MACT;;AAGE,YAAI,AAAE,4BAAG;AAEkC,UADzC,WAAM,8BAAgB,AAAC,qCACnB;;MAER;uBAEqB;AACnB,YAAI,AAAU,OAAO,IAAE;AACc,UAAnC,WAAM,2BAAc;;MAExB;wBAEgC;AAC9B,iBAAS,UAAW,SAAQ;AACJ,UAAtB,qBAAc,OAAO;;MAEzB;;;MAjSQ;MACM;AA2PgB,MAA5B;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AF6BE,UAAO;EACT;;AAHa;EAGb;;AAQ8B;EAAqB;;AAAtC;EAAsC;;;;;;;;;;;;;;;;;;AGjSjC,cAAA,AAAM;MAAM;WAGZ;AAAU,cAAA,AAAK,sBAAC,KAAK;MAAC;;uBAGb;AAAU,cAAA,AAAM,sBAAE,KAAK;;UAGxB;AAAS,cAAA,AAAM,qBAAI,IAAI;MAAC;;AAG3B,cAAA,AAAM;MAAO;;AAGf,6EAAmB,AAAM,sCAAW;MAAU;eAG9C;AAAY,cAAA,AAAM,0BAAS,OAAO;MAAC;gBAGxC;AAAU,cAAA,AAAM,2BAAU,KAAK;MAAC;YAGpB;AAAS,cAAA,AAAM,uBAAM,IAAI;MAAC;gBAGR;AAAM,cAAA,AAAM,wCAAO,CAAC;MAAC;;AAGpD,cAAA,AAAM;MAAK;iBAGI;YAAoB;;AAC9C,cAAA,AAAM,4BAAW,IAAI,WAAU,MAAM;MAAC;cAG9B,cAA+B;AACvC,cAAA,AAAM,sCAAK,YAAY,EAAE,OAAO;MAAC;;2BAGF;AAAU,cAAA,AAAM,4BAAW,KAAK;MAAC;cAGtC;AAAM,cAAA,AAAM,yBAAQ,CAAC;MAAC;eAG3B,OAAW;AAAQ,cAAA,AAAM,0BAAS,KAAK,EAAE,GAAG;MAAC;cAGxD,SAAc;gBAAd;AAA6B,cAAA,AAAM,yBAAQ,OAAO,EAAE,KAAK;MAAC;iBAGxC,MAAW;AACvC,cAAA,AAAM,4BAAW,IAAI,EAAE,KAAK;MAAC;;AAGb,cAAA,AAAM;MAAO;;AAGV,cAAA,AAAM;MAAU;;AAGX,cAAA,AAAM;MAAQ;;;;WAGtB;AAAoB,cAAA,AAAM,sBAAK,SAAS;MAAC;;AAG/C,cAAA,AAAM;MAAI;kBAGN,SAAc;gBAAd;AAAyB,cAAA,AAAM,6BAAY,OAAO,EAAE,KAAK;MAAC;qBAGxC,MAAW;AAC3C,cAAA,AAAM,gCAAe,IAAI,EAAE,KAAK;MAAC;gBAGR;YAAoB;;AAC7C,cAAA,AAAM,2BAAU,IAAI,WAAU,MAAM;MAAC;aAGR;AAAM,cAAA,AAAM,qCAAI,CAAC;MAAC;;0BAGzB;AAAY,cAAA,AAAM,wBAAO,OAAO;MAAC;;AAG/B,cAAA,AAAM;MAAQ;;AAG1B,cAAA,AAAM;MAAM;kBAGG;YAAoB;;AAC/C,cAAA,AAAM,6BAAY,IAAI,WAAU,MAAM;MAAC;WAGtB;AAAU,cAAA,AAAM,sBAAK,KAAK;MAAC;gBAGT;AAAS,cAAA,AAAM,2BAAU,IAAI;MAAC;cAGjD,OAAY;AAAS,cAAA,AAAM,yBAAQ,KAAK,EAAE,GAAG;MAAC;WAG7C;AAAU,cAAA,AAAM,sBAAK,KAAK;MAAC;gBAGT;AAAS,cAAA,AAAM,2BAAU,IAAI;MAAC;;YAGhD;AAAqB,cAAA,AAAM,mCAAiB,QAAQ;MAAC;;AAGxD,cAAA,AAAM;MAAO;YAGI;AAAS,cAAA,AAAM,uBAAM,IAAI;MAAC;;AAG/B,cAAA,AAAM;MAAc;iBAKnC;AACU,QAAvB;AACqB,QAArB,AAAM,yBAAS,MAAM;MACvB;WAGsB;YAAS;;AACN,QAAvB;AACsB,QAAtB,AAAK,qBAAC,KAAK,EAAI,OAAO;;MACxB;;gBAGY;AACa,QAAvB;AACqB,QAArB,AAAM,wBAAQ,OAAO;MACvB;;gBAGW;AACc,QAAvB;AACoB,QAApB,AAAM,uBAAO,OAAO;MACtB;;gBAGW;AACc,QAAvB;AACgB,QAAhB,AAAM,oBAAI,KAAK;MACjB;;2BAGwB;AACC,QAAvB;AACsB,QAAtB,AAAM,uBAAO,QAAQ;MACvB;WAG8B;AACL,QAAvB;AACmB,QAAnB,AAAM,qBAAK,OAAO;MACpB;cAGqB;AACI,QAAvB;AACqB,QAArB,AAAM,wBAAQ,MAAM;MACtB;;AAIyB,QAAvB;AACa,QAAb,AAAM;MACR;aAGgB;gBAAS;AACA,QAAvB;AAC4B,QAA5B,AAAM,uBAAO,KAAK,EAAE,OAAO;MAC7B;gBAGmB;2BAAmB;AACb,QAAvB;AACgC,QAAhC,AAAM,0BAAU,KAAK,EAAE,QAAQ;MACjC;aAGgB;2BAAmB;AACV,QAAvB;AAC6B,QAA7B,AAAM,uBAAO,KAAK,EAAE,QAAQ;MAC9B;aAGmB;AACM,QAAvB;AACA,cAAO,AAAM,wBAAO,KAAK;MAC3B;eAGe;AACU,QAAvB;AACA,cAAO,AAAM,0BAAS,KAAK;MAC7B;;AAIyB,QAAvB;AACA,cAAO,AAAM;MACf;kBAGkC;AACT,QAAvB;AACuB,QAAvB,AAAM,4BAAY,IAAI;MACxB;kBAGkC;AACT,QAAvB;AACuB,QAAvB,AAAM,4BAAY,IAAI;MACxB;eAGkB,OAAW,KAAiB,UAAe;2BAAf;AACrB,QAAvB;AAC+C,QAA/C,AAAM,yBAAS,KAAK,EAAE,GAAG,EAAE,QAAQ,EAAE,SAAS;MAChD;kBAGqB,OAAW;AACP,QAAvB;AAC6B,QAA7B,AAAM,4BAAY,KAAK,EAAE,GAAG;MAC9B;gBAGmB,OAAW;gBAAQ;AACb,QAAvB;AACsC,QAAtC,AAAM,0BAAU,KAAK,EAAE,GAAG,EAAE,SAAS;MACvC;mBAGsB,OAAW;2BAAiB;AACzB,QAAvB;AACwC,QAAxC,AAAM,6BAAa,KAAK,EAAE,GAAG,EAAE,QAAQ;MACzC;;AAGqB,cAAM,eAAN;MAAgB;;AAKnC,uBAAK,2BAAkB;AACC,QAAxB,2BAAmB;AAC6B,QAAhD,gBAAQ,gBAAa,0BAAiB;MACxC;;oCA3QqB,OAAY;MAAZ;MAAY;MAA8B,2BAAE;;IAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBC2B3C;AACxB,YAAa,wBAAT,QAAQ,eACR,AAAS,QAAD,0BAA0B,+BAAG;AACvC,gBAAgB,gFAAT,QAAQ;cACV,KAAa,UAAT,QAAQ,KACN,kBAAT,QAAQ,KACC,uBAAT,QAAQ;AACV,gBAAO,mGACM,WAAT,QAAQ,YAAO,QAAC,KAAc,WAAR,QAAQ,WAAC,CAAC;;AAGF,UADlC,WAAM,2BAAa,AAAC,oDAChB,kBAAgB,iBAAT,QAAQ;;MAEvB;mBAGkE;;AAC9D,cAA8C,gFAA7C;AAA4B,qBAAO,OAAO;;;MAAU;;AAKjB,+CAAyB;MAAK;cAGJ;;AAC9D,cAA+B,0BAA9B;AAAa,qBAAO,OAAO;;;MAAU;;AAUX,4DAA+B;MAAK;;;AAYlD,QAHf,AAAU,qBAAA,OAAV,oBAAc,wBAAY,AAAK,AAC1B,AACA,kCADI,QAAC,OAAQ,WAAU,cAAJ,GAAG,GAAqB,cAAV,AAAI,oBAAC,GAAG,sCACxB,SAAjB;AACG;;iBAHE;AAIV,cAAO;MACT;;YAOyB;AACvB,YAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,aAAU,uBAAN,KAAK,GAAuB,MAAO;AACvC,yBAAU,WAAN,KAAK,aAAW,cAAQ,MAAO;AACnC,YAAU,cAAN,KAAK,KAAa,eAAU,MAAO;AACvC,iBAAS,MAAO;AACd,2BAAS,WAAL,KAAK,WAAC,GAAG,IAAS,UAAC,GAAG,IAAG,MAAO;;AAEtC,cAAO;MACT;;AAM+B,oDAAiC;MAAK;;AAGhD,cAAK,eAAL;MAAe;WAKL;AACzB,qBAAS,AAAI,oBAAC,GAAG;AACrB,cAAO,AAAU,OAAM,IAAE,OAAQ,kBAAY,MAAM;MACrD;kBAGwB;AAAQ,cAAA,AAAK,4BAAY,GAAG;MAAC;oBAG3B;AAAU,cAAA,AAAO,wBAAS,KAAK;MAAC;cAGzB;AAK7B,QAJF,AAAK,uBAAQ,SAAC,KAAK;AAGf,UAFF,AAAO,MAAD,SAAS,QAAC;AACD,YAAb,AAAC,CAAA,CAAC,GAAG,EAAE,KAAK;;;MAGlB;iBAG8C;AAG1C,QAFF,AAAK,uBAAQ,SAAC,KAAK;AACH,UAAd,AAAC,CAAA,CAAC,GAAG,EAAE,MAAM;;MAEjB;;AAGoB,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;AAKjB,QAAnB,AAAM,eAAA,OAAN,cAAU,AAAK,sBAAT;AACN,cAAO;MACT;;AAGkB,cAAA,AAAK;MAAM;;AAKa,QAAxC,AAAQ,iBAAA,OAAR,gBAAY,AAAK,AAAO,qCAAO,QAAC,KAAM,CAAC,qCAA/B;AACR,cAAO;MACT;;oCAIwB;MAvJN,kBAAY;MAG1B;MACQ;MACA;MAkJY;AACtB,UAAI,AAAE,4BAAG;AAE4C,QADnD,WAAM,8BAAgB,AAAC,iCACnB;;AAEN,UAAI,AAAE,4BAAG;AAE6C,QADpD,WAAM,8BAAgB,AAAC,kCACnB;;IAER;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+BAkBmC,KAAU;AAAU,cAAA,AAAE,AAAO,6BAAJ,GAAG,KAAI,AAAE,4BAAG,KAAK;;;8CAb3B;AAAa,gDAAE,GAAG;;IAAC;+CAE7B,MAAe;AAC3C,gDAAkB;AAC5B,eAAS,MAAO,KAAI;AAClB,YAAQ,QAAJ,GAAG;AAC+B,UAApC,AAAI,oBAAC,GAAG,EAAI,kCAAkB,WAAN,MAAM,GAAC,GAAG;;AAEoB,UAAtD,WAAM,2BAAc,AAAiC,yCAAJ,GAAG;;;IAG1D;;;;;;;;;;;;;;;;;AC1KoB;MAAkB;;uDALH;MAAU;AACjC,0FAAiB,WAAJ,GAAG,YAAO,QAAC,KAAS,WAAH,GAAG,WAAC,CAAC;;IAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCcrB;;AAC1B,cAAO;;AAA2C,sBAAQ,QAAQ;;;MACpE;;AAOE,YAAI,AAAe,wBAAG;AACpB,mBAAS,MAAO,AAAY;AACtB,2BAAW,AAAW,AAAM,yBAAL,GAAG;AAC9B,0BAAI,AAAS,QAAD;AACW,cAArB,AAAU,yBAAO,GAAG;;AAEK,cAAzB,AAAS,uBAAC,GAAG,EAAI,QAAQ;;;AAIkC,UAA/D,uBAAiB,6CAAoC;;AAEvD,cAAO;MACT;aAG+C;AAChC,QAAb,AAAO,OAAA,CAAC;MACV;cAIqB;AACnB,YAAa,+BAAT,QAAQ;AACS,UAAnB,kBAAU,QAAQ;cACb,KAAa,UAAT,QAAQ,KACN,kBAAT,QAAQ,KACC,uBAAT,QAAQ;AAC6C,UAAvD,0CAA8B,WAAT,QAAQ,YAAO,QAAC,KAAc,WAAR,QAAQ,WAAC,CAAC;;AAGnB,UADlC,WAAM,2BAAa,AAAC,oDAChB,kBAAgB,iBAAT,QAAQ;;MAEvB;qBAUgC;YACb;;YACD;;YACU;;AAC1B,YAAI,KAAK,IAAI,QAAQ,MAAM,IAAI;AACsC,UAAnE,WAAM,2BAAc;;AAGC,QAAvB,AAAI,GAAD,IAAC,OAAJ,MAAQ,QAAG,KAAQ,QAAF,CAAC,0CAAd;AAEJ,YAAI,MAAM,IAAI;AACZ,mBAAS,UAAW,SAAQ;AACc,YAAxC,eAAU,AAAG,GAAA,CAAC,OAAO,GAAG,AAAM,MAAA,CAAC,OAAO;;;AAGf,UAAzB,AAAM,KAAD,IAAC,OAAN,QAAU,QAAG,KAAQ,QAAF,CAAC,0CAAd;AACN,mBAAS,UAAW,SAAQ;AACO,YAAjC,SAAI,AAAG,GAAA,CAAC,OAAO,GAAG,AAAK,KAAA,CAAC,OAAO;;;MAGrC;UAKW,KAAO;gBAAP;gBAAO;AACI,QAApB;AACc,QAAd,gBAAU,GAAG;AACK,QAAlB,kBAAY,KAAK;AACgB,QAAjC,AAAuB,wBAAL,GAAG,MAAM,KAAK;MAClC;gBAGiB,KAAiB;gBAAjB;2BAAiB;AAI9B,QAFF,AAAO,MAAD,WAAS,QAAC;AACC,UAAf,SAAI,GAAG,EAAE,KAAK;;MAElB;;iCAG8B;AAI1B,QAFF,AAAM,KAAD,SAAS,SAAC,KAAK;AACH,UAAf,SAAI,GAAG,EAAE,KAAK;;MAElB;aAGmB;gBAAO;AACxB,YAAQ,QAAJ,GAAG;AACe,UAApB;AACoC,UAApC,AAAuB,wBAAL,GAAG,SAAS,KAAK;;MAEvC;gBAGsB;AACpB,YAAQ,QAAJ,GAAG;AACe,UAApB;AAEqB,UAArB,kBAAY;AACsB,UAAlC,AAAW,yBAAC,GAAG,EAAI;;MAEvB;;AAIsB,QAApB;AAEiB,QAAjB,AAAU;AACS,QAAnB,AAAY;MACd;0BAIkC;AAC5B,qBAAS,AAAW,yBAAC,GAAG;AAC5B,YAAI,AAAO,MAAD,IAAI;AACR,4BAAc,AAAS,uBAAC,GAAG;AAC/B,cAAI,AAAY,WAAD,IAAI;AACO,YAAxB,SAAS;;AAEuB,YAAhC,SAAS,AAAY,WAAD;;AAEG,UAAzB,AAAW,yBAAC,GAAG,EAAI,MAAM;;AAE3B,cAAO,OAAM;MACf;;AAGE,YAAI,wBAAkB;AAC2B,UAA/C,kBAAY,uCAAyB;AAChB,UAArB,uBAAiB;;MAErB;oBAMuC;AACJ,QAAjC,uBAAiB,gBAAgB;AACA,QAAjC,kBAAY,AAAiB,gBAAD;AACM,QAAlC,oBAAgC;MAClC;6BAEmC,MAAe;AAC3B,QAArB,uBAAiB;AACa,QAA9B,kBAA4B;AACM,QAAlC,oBAAgC;AAEhC,iBAAS,MAAO,KAAI;AAClB,cAAQ,QAAJ,GAAG;AACL,qBAAS,wBAAe,WAAN,MAAM,GAAC,GAAG;AAC1B,kBAAU,QAAN,KAAK;AACQ,gBAAf,SAAI,GAAG,EAAE,KAAK;;AAG0C,gBADxD,WAAM,2BACF,AAAmD,2CAApB,KAAK,4BAAW,GAAG;;;;AAIJ,YAAtD,WAAM,2BAAc,AAAiC,yCAAJ,GAAG;;;MAG1D;;AAGE,YAAI,AAAE,4BAAG;AAE8C,UADrD,WAAM,8BAAgB,AAAC,iCACnB;;AAEN,YAAI,AAAE,4BAAG;AAE8C,UADrD,WAAM,8BAAgB,AAAC,mCACnB;;MAER;kBAEiB;AACf,YAAI,AAAU,GAAG,IAAE;AACuB,UAAxC,WAAM,2BAAc,AAAmB,2BAAJ,GAAG;;MAE1C;oBAEmB;AACjB,YAAI,AAAU,KAAK,IAAE;AACyB,UAA5C,WAAM,2BAAc,AAAuB,6BAAN,KAAK;;MAE9C;;;MA5NoB;MAGI;MAEF;AAoKQ,MAA5B;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCvJkB;AAChB,YAAQ,gBAAJ,GAAG,eAAiB,AAAI,GAAD,0BAA0B,+BAAG;AACtD,gBAAW,gEAAJ,GAAG;cACL,KAAQ,UAAJ,GAAG,KAAe,eAAJ,GAAG;AAC1B,gBAAO,wFAAsC,WAAJ,GAAG,YAAO,QAAC,KAAS,WAAH,GAAG,WAAC,CAAC;;AAEQ,UAAvE,WAAM,2BAAc,AAAkD,4CAAb,iBAAJ,GAAG;;MAE5D;kBAW0B;AACxB,cAAO,yEAAkC,AAAI,GAAD,SAAO,QAAC,KAAM,AAAG,GAAA,QAAC,CAAC;MACjE;gBAO8B;AAC5B,cAAO,2EAAoC,AAAI,GAAD,SAAO,QAAC,KAAM,AAAG,GAAA,QAAC,CAAC;MACnE;mBAGkD;;AAC9C,cAAsC,gEAArC;AAAoB,qBAAO,OAAO;;;MAAU;;AAKjB,8EAA+B;MAAK;cAGlB;;AAC9C,cAA+B,0BAA9B;AAAa,qBAAO,OAAO;;;MAAU;;AAMrB,yCAAuB;MAAK;;AAU5B,iDAAqB,cAAM;MAAY;;;AAW3C,QAHf,AAAU,qBAAA,OAAV,oBAAc,wBAAY,AAAK,AAC1B,AACA,kCADI,QAAC,OAAQ,WAAU,cAAJ,GAAG,GAAqB,cAAV,AAAI,oBAAC,GAAG,sCACxB,SAAjB;AACG;;iBAHE;AAIV,cAAO;MACT;;YAOyB;AACvB,YAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,aAAU,eAAN,KAAK,GAAe,MAAO;AAC/B,yBAAU,WAAN,KAAK,aAAW,cAAQ,MAAO;AACnC,YAAU,cAAN,KAAK,KAAa,eAAU,MAAO;AACvC,iBAAS,MAAO;AACd,2BAAS,WAAL,KAAK,WAAC,GAAG,IAAS,UAAC,GAAG,IAAG,MAAO;;AAEtC,cAAO;MACT;;AAGqB,cAAK,eAAL;MAAe;WAKf;AAAQ,cAAA,AAAI,qBAAC,GAAG;MAAC;kBAGd;AAAQ,cAAA,AAAK,4BAAY,GAAG;MAAC;oBAG3B;AAAU,cAAA,AAAK,8BAAc,KAAK;MAAC;cAG5B;AAChB,QAAf,AAAK,uBAAQ,CAAC;MAChB;;AAGoB,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;AAIjB,QAAnB,AAAM,gBAAA,OAAN,eAAU,AAAK,sBAAT;AACN,cAAO;MACT;;AAGkB,cAAA,AAAK;MAAM;;AAKJ,QAAvB,AAAQ,kBAAA,OAAR,iBAAY,AAAK,wBAAT;AACR,cAAO;MACT;;AAGwC,cAAA,AAAK;MAAO;kBAGS;AACzD,mFAA8B,MAAM,AAAK,qDAAI,CAAC;MAAE;;4BAIpC,aAAkB;MAzJ9B;MACQ;MACA;MAuJI;MAAkB;AAChC,UAAI,AAAE,4BAAG;AAEgE,QADvE,WAAM,8BACF;;AAEN,UAAI,AAAE,4BAAG;AAEqC,QAD5C,WAAM,8BAAgB,AAAC,kCACnB;;IAER;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+BAsCmC,KAAU;AAAU,cAAA,AAAE,AAAO,6BAAJ,GAAG,KAAI,AAAE,4BAAG,KAAK;;;sCAjCrC,YAAsB;AAClD,wCAAE,UAAU,EAAE,GAAG;;IAAC;4CAEO,MAAe;AACxC,wCAAE,MAAY;AACxB,eAAS,MAAO,KAAI;AAClB,YAAQ,QAAJ,GAAG;AACD,sBAAc,WAAN,MAAM,GAAC,GAAG;AACtB,cAAU,QAAN,KAAK;AACU,YAAjB,AAAI,oBAAC,GAAG,EAAI,KAAK;;AAEyC,YAA1D,WAAM,2BAAc,AAAqC,2CAAN,KAAK;;;AAGJ,UAAtD,WAAM,2BAAc,AAAiC,yCAAJ,GAAG;;;IAG1D;8CAE0C,MAAoB;AAClD,wCAAE,MAAY;AACxB,eAAS,MAAO,KAAI;AAClB,YAAI,AAAU,GAAG,IAAE;AACqC,UAAtD,WAAM,2BAAc;;AAElB,oBAAQ,AAAM,MAAA,CAAC,GAAG;AACtB,YAAI,AAAM,KAAD,IAAI;AAC6C,UAAxD,WAAM,2BAAc;;AAEL,QAAjB,AAAI,oBAAC,GAAG,EAAI,KAAK;;IAErB;;;;;;;;;;;;;;;;;ACtMoB;MAAmB;;+CALZ;MAAU;AACzB,uFAAsB,WAAJ,GAAG,YAAO,QAAC,KAAS,WAAH,GAAG,WAAC,CAAC;;IAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCUlC;;AAClB,cAAO;;AAAmC,sBAAQ,GAAG;;;MACvD;;AAO8D,QAA5D,AAAU,mBAAA,OAAV,kBAAc,qCAA4B,qBAAa,gBAA7C;AACV,cAAO;MACT;aAG+C;AAChC,QAAb,AAAO,OAAA,CAAC;MACV;cAGoB;AAClB,YAAQ,uBAAJ,GAAG,KAAuC,YAAhB,AAAI,GAAD,iBAAgB;AACjC,UAAd,kBAAU,GAAG;cACR,KAAQ,eAAJ,GAAG;AACR,4BAAc;AAGhB,UAFF,AAAI,GAAD,SAAS,SAAQ,KAAY;AACI,YAAlC,AAAW,WAAA,QAAK,QAAJ,GAAG,GAAe,QAAN,KAAK;;AAEP,UAAxB,kBAAY,WAAW;cAClB,KAAQ,UAAJ,GAAG;AACR,4BAAc;AAGhB,UAFF,AAAI,GAAD,WAAS,SAAQ,KAAY;AACI,YAAlC,AAAW,WAAA,QAAK,QAAJ,GAAG,GAAe,QAAN,KAAK;;AAEP,UAAxB,kBAAY,WAAW;;AAEgD,UAAvE,WAAM,2BAAc,AAAkD,4CAAb,iBAAJ,GAAG;;MAE5D;eAkBgC;;;AAC9B,YAAI,AAAK,IAAD,IAAI;AACyB,UAAnC,WAAoB,+BAAQ;;AAEZ,QAAlB,sBAAc,IAAI;AACqB,QAAvC,6CAAY;AAAc,uBAAO;;;MACnC;;;AAKoB,QAAlB,sBAAc;AACyB,QAAvC,6CAAY;AAAc,uBAAO;;;MACnC;qBAKgC;YACb;;YAAmB;;AACb,QAAvB,AAAI,GAAD,IAAC,OAAJ,MAAQ,QAAG,KAAQ,QAAF,CAAC,0CAAd;AACqB,QAAzB,AAAM,KAAD,IAAC,OAAN,QAAU,QAAG,KAAQ,QAAF,CAAC,0CAAd;AACN,iBAAS,UAAW,SAAQ;AACS,UAA/B,UAAC,AAAG,GAAA,CAAC,OAAO,GAAK,AAAK,KAAA,CAAC,OAAO;;MAEtC;WAKqB;AAAQ,cAAA,AAAI,qBAAC,GAAG;MAAC;WAGlB;YAAO;gBAAP;gBAAO;AACX,QAAd,iBAAU,GAAG;AACK,QAAlB,mBAAY,KAAK;AACI,QAArB,AAAQ,sBAAC,GAAG,EAAI,KAAK;;MACvB;;AAGkB,cAAA,AAAK;MAAM;;AAGT,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;kBAGtB,KAAkB;gBAAlB;uBAAkB;AAClB,QAAd,iBAAU,GAAG;AACb,cAAO,AAAS,8BAAY,GAAG,EAAE;AAC3B,sBAAQ,AAAQ,QAAA;AACF,UAAlB,mBAAY,KAAK;AACjB,gBAAO,MAAK;;MAEhB;;yBAGsB;AACE,QAAtB,iBAAW,AAAM,KAAD;AACU,QAA1B,mBAAa,AAAM,KAAD;AACI,QAAtB,AAAS,wBAAO,KAAK;MACvB;aAGgB;AAAQ,cAAA,AAAS,yBAAO,GAAG;MAAC;kBAGP;AACJ,QAA/B,AAAS,6BAAY,SAAS;MAChC;;AAIkB,QAAhB,AAAS;MACX;;yCAGyC;AACR,QAA/B,AAAS,4BAAW,UAAU;MAChC;kBAGgB,KAAmB;gBAAnB;qBAAmB;YAAsB;;AACrD,cAAA,AAAS,yBAAO,GAAG,EAAE,MAAM,aAAY,QAAQ;MAAC;;0BAGd;AACV,QAA1B,AAAS,2BAAU,MAAM;MAC3B;oBAa+B;AAC7B,aAA4B,YAArB,AAAS,QAAD,iBAAgB,wCAC3B;AACgB,QAApB,kBAAY,QAAQ;AACA,QAApB,eAAO,AAAS,QAAD;MACjB;oBAE2B;AACT,QAAhB,kBAAY;AACF,QAAV,eAAO,GAAG;MACZ;;;AAGE,YAAI,mBAAa;AACkB,UAAjC,0CAAO;AAAc,yBAAO;;;AACZ,UAAhB,kBAAY;;AAEd,cAAO;MACT;;AAE0B,cAAA,AAAY,wBAAG,OAAO,AAAW,wBAAW;MAAE;;AAGtE,YAAI,AAAE,4BAAG;AAEkE,UADzE,WAAM,8BACF;;AAEN,YAAI,AAAE,4BAAG;AAEsC,UAD7C,WAAM,8BAAgB,AAAC,mCACnB;;MAER;mBAEiB;AACf,YAAI,AAAU,GAAG,IAAE;AACc,UAA/B,WAAM,2BAAc;;MAExB;mBAE4B;AAC1B,iBAAS,MAAO,KAAI;AACJ,UAAd,iBAAU,GAAG;;MAEjB;qBAEmB;AACjB,YAAI,AAAU,KAAK,IAAE;AACc,UAAjC,WAAM,2BAAc;;MAExB;qBAE8B;AAC5B,iBAAS,QAAS,OAAM;AACJ,UAAlB,mBAAY,KAAK;;MAErB;;;;;;AA/D8B,MAA5B;IACF;yCAEyC;MACvB,sBAAE,AAAI,GAAD;MACZ,eAAE,AAAI,GAAD;MACA,kBAAE,GAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AF4CK;EAAuB;;AAAlC;EAAkC;;;;;;;;;;;;;;;;;;;;;;;iBG7LtB;AACzB,YAAa,yBAAT,QAAQ,eACR,AAAS,QAAD,0BAA0B,+BAAG;AACvC,gBAAgB,kFAAT,QAAQ;cACV,KAAa,UAAT,QAAQ,KACN,mBAAT,QAAQ,KACC,wBAAT,QAAQ;AACV,gBAAO,qGACM,WAAT,QAAQ,YAAO,QAAC,KAAc,WAAR,QAAQ,WAAC,CAAC;;AAGF,UADlC,WAAM,2BAAa,AAAC,sDAChB,kBAAgB,iBAAT,QAAQ;;MAEvB;mBAI4C;;AACxC,cAA+C,kFAA9C;AAA6B,qBAAO,OAAO;;;MAAU;;AAKjB,gDAA0B;MAAK;cAI5B;;AACxC,cAA+B,0BAA9B;AAAa,qBAAO,OAAO;;;MAAU;;AAUV,6DAAgC;MAAK;;;AAYpD,QAHf,AAAU,qBAAA,OAAV,oBAAc,wBAAY,AAAK,AAC1B,AACA,kCADI,QAAC,OAAQ,WAAU,cAAJ,GAAG,GAAqB,cAAV,AAAI,oBAAC,GAAG,sCACxB,SAAjB;AACG;;iBAHE;AAIV,cAAO;MACT;;YAOyB;AACvB,YAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,aAAU,wBAAN,KAAK,GAAwB,MAAO;AACxC,yBAAU,WAAN,KAAK,aAAW,cAAQ,MAAO;AACnC,YAAU,cAAN,KAAK,KAAa,eAAU,MAAO;AACvC,iBAAS,MAAO;AACd,2BAAS,WAAL,KAAK,WAAC,GAAG,IAAS,UAAC,GAAG,IAAG,MAAO;;AAEtC,cAAO;MACT;;AAGqB,cAAK,eAAL;MAAe;;AAML,oDAAiC;MAAK;WAKrC;AAC1B,qBAAS,AAAI,oBAAC,GAAG;AACrB,cAAO,AAAU,OAAM,IAAE,OAAQ,mBAAa,MAAM;MACtD;kBAGwB;AAAQ,cAAA,AAAK,4BAAY,GAAG;MAAC;oBAG3B;AAAU,cAAA,AAAO,wBAAS,KAAK;MAAC;cAGzB;AAK7B,QAJF,AAAK,uBAAQ,SAAC,KAAK;AAGf,UAFF,AAAO,MAAD,SAAS,QAAC;AACD,YAAb,AAAC,CAAA,CAAC,GAAG,EAAE,KAAK;;;MAGlB;iBAG8C;AAG1C,QAFF,AAAK,uBAAQ,SAAC,KAAK;AACH,UAAd,AAAC,CAAA,CAAC,GAAG,EAAE,MAAM;;MAEjB;;AAGoB,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;AAKjB,QAAnB,AAAM,iBAAA,OAAN,gBAAU,AAAK,sBAAT;AACN,cAAO;MACT;;AAGkB,cAAA,AAAK;MAAM;;AAKa,QAAxC,AAAQ,mBAAA,OAAR,kBAAY,AAAK,AAAO,qCAAO,QAAC,KAAM,CAAC,uCAA/B;AACR,cAAO;MACT;;qCAIyB;MAzJN,mBAAa;MAG5B;MACQ;MACA;MAoJa;AACvB,UAAI,AAAE,4BAAG;AAE6C,QADpD,WAAM,8BAAgB,AAAC,iCACnB;;AAEN,UAAI,AAAE,4BAAG;AAE8C,QADrD,WAAM,8BAAgB,AAAC,kCACnB;;IAER;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+BAkBmC,KAAU;AAAU,cAAA,AAAE,AAAO,6BAAJ,GAAG,KAAI,AAAE,4BAAG,KAAK;;;+CAbzB;AAAa,iDAAE,GAAG;;IAAC;gDAE9B,MAAe;AAC5C,iDAAmB;AAC7B,eAAS,MAAO,KAAI;AAClB,YAAQ,QAAJ,GAAG;AACgC,UAArC,AAAI,oBAAC,GAAG,EAAI,mCAAmB,WAAN,MAAM,GAAC,GAAG;;AAEmB,UAAtD,WAAM,2BAAc,AAAiC,yCAAJ,GAAG;;;IAG1D;;;;;;;;;;;;;;;;;AC5KoB;MAAkB;;wDALF;MAAU;AAClC,2FAAiB,WAAJ,GAAG,YAAO,QAAC,KAAS,WAAH,GAAG,WAAC,CAAC;;IAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBCapB;;AAC3B,cAAO;;AAA4C,sBAAQ,QAAQ;;;MACrE;;AAOE,YAAI,AAAe,yBAAG;AACpB,mBAAS,MAAO,AAAY;AACtB,4BAAY,AAAW,AAAM,0BAAL,GAAG;AAC/B,0BAAI,AAAU,SAAD;AACU,cAArB,AAAU,0BAAO,GAAG;;AAEM,cAA1B,AAAS,wBAAC,GAAG,EAAI,SAAS;;;AAIkC,UAAhE,wBAAiB,8CAAqC;;AAExD,cAAO;MACT;aAGgD;AACjC,QAAb,AAAO,OAAA,CAAC;MACV;cAMqB;AACnB,YAAa,gCAAT,QAAQ;AACS,UAAnB,kBAAU,QAAQ;cACb,KAAa,UAAT,QAAQ,KACN,mBAAT,QAAQ,KACC,wBAAT,QAAQ;AAC6C,UAAvD,2CAA8B,WAAT,QAAQ,YAAO,QAAC,KAAc,WAAR,QAAQ,WAAC,CAAC;;AAGnB,UADlC,WAAM,2BAAa,AAAC,sDAChB,kBAAgB,iBAAT,QAAQ;;MAEvB;qBAUgC;YACb;;YACD;;YACU;;AAC1B,YAAI,KAAK,IAAI,QAAQ,MAAM,IAAI;AACsC,UAAnE,WAAM,2BAAc;;AAGC,QAAvB,AAAI,GAAD,IAAC,OAAJ,MAAQ,QAAG,KAAQ,QAAF,CAAC,0CAAd;AAEJ,YAAI,MAAM,IAAI;AACZ,mBAAS,UAAW,SAAQ;AACc,YAAxC,eAAU,AAAG,GAAA,CAAC,OAAO,GAAG,AAAM,MAAA,CAAC,OAAO;;;AAGf,UAAzB,AAAM,KAAD,IAAC,OAAN,QAAU,QAAG,KAAQ,QAAF,CAAC,0CAAd;AACN,mBAAS,UAAW,SAAQ;AACO,YAAjC,SAAI,AAAG,GAAA,CAAC,OAAO,GAAG,AAAK,KAAA,CAAC,OAAO;;;MAGrC;UAKW,KAAO;gBAAP;gBAAO;AACI,QAApB;AACc,QAAd,kBAAU,GAAG;AACK,QAAlB,oBAAY,KAAK;AACgB,QAAjC,AAAuB,yBAAL,GAAG,MAAM,KAAK;MAClC;gBAGiB,KAAiB;gBAAjB;2BAAiB;AAI9B,QAFF,AAAO,MAAD,WAAS,QAAC;AACC,UAAf,SAAI,GAAG,EAAE,KAAK;;MAElB;;kCAG+B;AAI3B,QAFF,AAAM,KAAD,SAAS,SAAC,KAAK;AACH,UAAf,SAAI,GAAG,EAAE,KAAK;;MAElB;aAGmB;gBAAO;AACxB,aAAQ,QAAJ,GAAG,GAAQ,MAAO;AACF,QAApB;AACA,cAAO,AAAuB,kCAAL,GAAG,UAAS,KAAK;MAC5C;gBAG8B;;AAC5B,aAAQ,QAAJ,GAAG,GAAQ,MAAO;AACF,QAApB;AACI,sBAAU,AAAW,0BAAC,GAAG;AAC7B,YAAI,AAAQ,OAAD,IAAI;AACsB,UAAnC,AAAW,kCAAC,GAAG,GAAI;AACnB,gBAAO,AAAS,wBAAC,GAAG;wBAAJ,OAAS;;AAEvB,kBAAM,AAAQ,OAAD;AACF,QAAf,AAAQ,OAAD;AACP,cAAO,IAAG;MACZ;;AAMsB,QAApB;AAEiB,QAAjB,AAAU;AACS,QAAnB,AAAY;MACd;WAGkC;AACZ,QAApB;AACA,cAAW,SAAJ,GAAG,IAAQ,yBAAkB,GAAG,IAAI;MAC7C;2BAImC;AAC7B,qBAAS,AAAW,0BAAC,GAAG;AAC5B,YAAI,AAAO,MAAD,IAAI;AACR,4BAAc,AAAS,wBAAC,GAAG;AAC/B,cAAI,AAAY,WAAD,IAAI;AACQ,YAAzB,SAAS;;AAEuB,YAAhC,SAAS,AAAY,WAAD;;AAEG,UAAzB,AAAW,0BAAC,GAAG,EAAI,MAAM;;AAE3B,cAAO,OAAM;MACf;;AAGE,YAAI,yBAAkB;AAC4B,UAAhD,mBAAY,wCAA0B;AACjB,UAArB,wBAAiB;;MAErB;oBAMwC;AACJ,QAAlC,wBAAiB,iBAAiB;AACA,QAAlC,mBAAY,AAAkB,iBAAD;AACM,QAAnC,qBAAiC;MACnC;8BAEmC,MAAe;AAC3B,QAArB,wBAAiB;AACc,QAA/B,mBAA6B;AACM,QAAnC,qBAAiC;AAEjC,iBAAS,MAAO,KAAI;AAClB,cAAQ,QAAJ,GAAG;AACL,qBAAS,wBAAe,WAAN,MAAM,GAAC,GAAG;AAC1B,kBAAU,QAAN,KAAK;AACQ,gBAAf,SAAI,GAAG,EAAE,KAAK;;AAG0C,gBADxD,WAAM,2BACF,AAAmD,2CAApB,KAAK,4BAAW,GAAG;;;;AAIJ,YAAtD,WAAM,2BAAc,AAAiC,yCAAJ,GAAG;;;MAG1D;;AAGE,YAAI,AAAE,4BAAG;AAE+C,UADtD,WAAM,8BAAgB,AAAC,iCACnB;;AAEN,YAAI,AAAE,4BAAG;AAE+C,UADtD,WAAM,8BAAgB,AAAC,mCACnB;;MAER;oBAEiB;AACf,YAAI,AAAU,GAAG,IAAE;AACc,UAA/B,WAAM,2BAAc;;MAExB;sBAEmB;AACjB,YAAI,AAAU,KAAK,IAAE;AACc,UAAjC,WAAM,2BAAc;;MAExB;;;MAzOqB;MAGI;MAEF;AAiLO,MAA5B;IACF","file":"built_collection.unsound.ddc.js"}');
  // Exports:
  return {
    src__internal__copy_on_write_map: copy_on_write_map,
    src__iterable: iterable,
    src__set: set,
    src__internal__iterables: iterables,
    src__internal__copy_on_write_set: copy_on_write_set,
    src__list: list,
    src__internal__copy_on_write_list: copy_on_write_list,
    src__set_multimap: set_multimap,
    built_collection: built_collection,
    src__map: map$,
    src__list_multimap: list_multimap
  };
}));

//# sourceMappingURL=built_collection.unsound.ddc.js.map
