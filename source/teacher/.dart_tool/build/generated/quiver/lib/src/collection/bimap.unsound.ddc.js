define(['dart_sdk', 'packages/quiver/src/iterables/concat'], (function load__packages__quiver__src__collection__bimap(dart_sdk, packages__quiver__src__iterables__concat) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const generating_iterable = packages__quiver__src__iterables__concat.src__iterables__generating_iterable;
  var lru_map = Object.create(dart.library);
  var queue = Object.create(dart.library);
  var iterable = Object.create(dart.library);
  var map = Object.create(dart.library);
  var treeset = Object.create(dart.library);
  var list = Object.create(dart.library);
  var multimap = Object.create(dart.library);
  var bimap = Object.create(dart.library);
  var set = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $containsKey = dartx.containsKey;
  var $contains = dartx.contains;
  var $values = dartx.values;
  var $map = dartx.map;
  var $length = dartx.length;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $putIfAbsent = dartx.putIfAbsent;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $add = dartx.add;
  var $last = dartx.last;
  var $removeLast = dartx.removeLast;
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $addEntries = dartx.addEntries;
  var $cast = dartx.cast;
  var $containsValue = dartx.containsValue;
  var $entries = dartx.entries;
  var $keys = dartx.keys;
  var $removeWhere = dartx.removeWhere;
  var $toString = dartx.toString;
  var $update = dartx.update;
  var $updateAll = dartx.updateAll;
  var $any = dartx.any;
  var $elementAt = dartx.elementAt;
  var $every = dartx.every;
  var $expand = dartx.expand;
  var $first = dartx.first;
  var $firstWhere = dartx.firstWhere;
  var $fold = dartx.fold;
  var $followedBy = dartx.followedBy;
  var $iterator = dartx.iterator;
  var $join = dartx.join;
  var $lastWhere = dartx.lastWhere;
  var $reduce = dartx.reduce;
  var $single = dartx.single;
  var $singleWhere = dartx.singleWhere;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $toList = dartx.toList;
  var $toSet = dartx.toSet;
  var $where = dartx.where;
  var $whereType = dartx.whereType;
  var $abs = dartx.abs;
  var $plus = dartx['+'];
  var $asMap = dartx.asMap;
  var $fillRange = dartx.fillRange;
  var $getRange = dartx.getRange;
  var $indexOf = dartx.indexOf;
  var $indexWhere = dartx.indexWhere;
  var $insert = dartx.insert;
  var $insertAll = dartx.insertAll;
  var $lastIndexOf = dartx.lastIndexOf;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $removeAt = dartx.removeAt;
  var $removeRange = dartx.removeRange;
  var $replaceRange = dartx.replaceRange;
  var $retainWhere = dartx.retainWhere;
  var $reversed = dartx.reversed;
  var $setAll = dartx.setAll;
  var $setRange = dartx.setRange;
  var $shuffle = dartx.shuffle;
  var $sort = dartx.sort;
  var $sublist = dartx.sublist;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var TreeSearchL = () => (TreeSearchL = dart.constFn(dart.legacy(treeset.TreeSearch)))();
  var TreeSetL = () => (TreeSetL = dart.constFn(dart.legacy(treeset.TreeSet)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var dynamicToTL = () => (dynamicToTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    return [TL(), [dart.dynamic]];
  })))();
  const CT = Object.create(null);
  var L4 = "package:quiver/src/collection/delegates/map.dart";
  var L8 = "package:quiver/src/collection/bimap.dart";
  var L9 = "package:quiver/src/collection/delegates/set.dart";
  var L0 = "package:quiver/src/collection/lru_map.dart";
  var L5 = "package:quiver/src/collection/treeset.dart";
  var L3 = "package:quiver/src/collection/delegates/queue.dart";
  var L2 = "package:quiver/src/collection/delegates/iterable.dart";
  var L6 = "package:quiver/src/collection/delegates/list.dart";
  var L1 = "org-dartlang-app:///packages/quiver/src/collection/lru_map.dart";
  var L7 = "package:quiver/src/collection/multimap.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: treeset.TreeSearch.prototype,
        [_name$]: "TreeSearch.LESS_THAN",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: treeset.TreeSearch.prototype,
        [_name$]: "TreeSearch.NEAREST",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: treeset.TreeSearch.prototype,
        [_name$]: "TreeSearch.GREATER_THAN",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], TreeSearchL());
    },
    get C4() {
      return C4 = dart.fn(multimap._BaseMultimap._id, dynamicToTL());
    }
  }, false);
  const _is_LruMap_default = Symbol('_is_LruMap_default');
  var maximumSize = dart.privateName(lru_map, "LruMap.maximumSize");
  lru_map.LruMap$ = dart.generic((K, V) => {
    class LruMap extends core.Object {
      get maximumSize() {
        return this[maximumSize];
      }
      set maximumSize(value) {
        this[maximumSize] = value;
      }
    }
    (LruMap[dart.mixinNew] = function() {
      this[maximumSize] = null;
    }).prototype = LruMap.prototype;
    LruMap.prototype[dart.isMap] = true;
    dart.addTypeTests(LruMap);
    LruMap.prototype[_is_LruMap_default] = true;
    dart.addTypeCaches(LruMap);
    LruMap[dart.implements] = () => [core.Map$(dart.legacy(K), dart.legacy(V))];
    dart.setLibraryUri(LruMap, L0);
    dart.setFieldSignature(LruMap, () => ({
      __proto__: dart.getFields(LruMap.__proto__),
      maximumSize: dart.fieldType(dart.legacy(core.int))
    }));
    return LruMap;
  });
  lru_map.LruMap = lru_map.LruMap$();
  dart.addTypeTests(lru_map.LruMap, _is_LruMap_default);
  const _is__LinkedEntry_default = Symbol('_is__LinkedEntry_default');
  var key$ = dart.privateName(lru_map, "_LinkedEntry.key");
  var value$ = dart.privateName(lru_map, "_LinkedEntry.value");
  var next = dart.privateName(lru_map, "_LinkedEntry.next");
  var previous = dart.privateName(lru_map, "_LinkedEntry.previous");
  lru_map._LinkedEntry$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _LinkedEntryOfKL$VL = () => (_LinkedEntryOfKL$VL = dart.constFn(lru_map._LinkedEntry$(KL(), VL())))();
    var _LinkedEntryLOfKL$VL = () => (_LinkedEntryLOfKL$VL = dart.constFn(dart.legacy(_LinkedEntryOfKL$VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class _LinkedEntry extends core.Object {
      get key() {
        return this[key$];
      }
      set key(value) {
        this[key$] = KL().as(value);
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = VL().as(value);
      }
      get next() {
        return this[next];
      }
      set next(value) {
        this[next] = _LinkedEntryLOfKL$VL().as(value);
      }
      get previous() {
        return this[previous];
      }
      set previous(value) {
        this[previous] = _LinkedEntryLOfKL$VL().as(value);
      }
    }
    (_LinkedEntry.new = function(key = null, value = null) {
      this[next] = null;
      this[previous] = null;
      this[key$] = key;
      this[value$] = value;
      ;
    }).prototype = _LinkedEntry.prototype;
    dart.addTypeTests(_LinkedEntry);
    _LinkedEntry.prototype[_is__LinkedEntry_default] = true;
    dart.addTypeCaches(_LinkedEntry);
    dart.setLibraryUri(_LinkedEntry, L0);
    dart.setFieldSignature(_LinkedEntry, () => ({
      __proto__: dart.getFields(_LinkedEntry.__proto__),
      key: dart.fieldType(dart.legacy(K)),
      value: dart.fieldType(dart.legacy(V)),
      next: dart.fieldType(dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V)))),
      previous: dart.fieldType(dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V))))
    }));
    return _LinkedEntry;
  });
  lru_map._LinkedEntry = lru_map._LinkedEntry$();
  dart.addTypeTests(lru_map._LinkedEntry, _is__LinkedEntry_default);
  var _head = dart.privateName(lru_map, "_head");
  var _tail = dart.privateName(lru_map, "_tail");
  var _entries$ = dart.privateName(lru_map, "_entries");
  var _maximumSize = dart.privateName(lru_map, "_maximumSize");
  var _iterable = dart.privateName(lru_map, "_iterable");
  var _removeLru = dart.privateName(lru_map, "_removeLru");
  var _createEntry = dart.privateName(lru_map, "_createEntry");
  var _promoteEntry = dart.privateName(lru_map, "_promoteEntry");
  var _insertMru = dart.privateName(lru_map, "_insertMru");
  const _is_LinkedLruHashMap_default = Symbol('_is_LinkedLruHashMap_default');
  lru_map.LinkedLruHashMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(VL(), [KL(), VL()])))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(KL(), VL())))();
    var MapEntryLOfKL$VL = () => (MapEntryLOfKL$VL = dart.constFn(dart.legacy(MapEntryOfKL$VL())))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryLOfKL$VL())))();
    var IterableLOfMapEntryLOfKL$VL = () => (IterableLOfMapEntryLOfKL$VL = dart.constFn(dart.legacy(IterableOfMapEntryLOfKL$VL())))();
    var _LinkedEntryOfKL$VL = () => (_LinkedEntryOfKL$VL = dart.constFn(lru_map._LinkedEntry$(KL(), VL())))();
    var _LinkedEntryLOfKL$VL = () => (_LinkedEntryLOfKL$VL = dart.constFn(dart.legacy(_LinkedEntryOfKL$VL())))();
    var _LinkedEntryLOfKL$VLToMapEntryLOfKL$VL = () => (_LinkedEntryLOfKL$VLToMapEntryLOfKL$VL = dart.constFn(dart.fnType(MapEntryLOfKL$VL(), [_LinkedEntryLOfKL$VL()])))();
    var GeneratingIterableOf_LinkedEntryLOfKL$VL = () => (GeneratingIterableOf_LinkedEntryLOfKL$VL = dart.constFn(generating_iterable.GeneratingIterable$(_LinkedEntryLOfKL$VL())))();
    var VoidTo_LinkedEntryLOfKL$VL = () => (VoidTo_LinkedEntryLOfKL$VL = dart.constFn(dart.fnType(_LinkedEntryLOfKL$VL(), [])))();
    var _LinkedEntryLOfKL$VLTo_LinkedEntryLOfKL$VL = () => (_LinkedEntryLOfKL$VLTo_LinkedEntryLOfKL$VL = dart.constFn(dart.fnType(_LinkedEntryLOfKL$VL(), [_LinkedEntryLOfKL$VL()])))();
    var _LinkedEntryLOfKL$VLToKL = () => (_LinkedEntryLOfKL$VLToKL = dart.constFn(dart.fnType(KL(), [_LinkedEntryLOfKL$VL()])))();
    var _LinkedEntryLOfKL$VLToVL = () => (_LinkedEntryLOfKL$VLToVL = dart.constFn(dart.fnType(VL(), [_LinkedEntryLOfKL$VL()])))();
    var JSArrayOfKL = () => (JSArrayOfKL = dart.constFn(_interceptors.JSArray$(KL())))();
    var KLAnd_LinkedEntryLOfKL$VLToNull = () => (KLAnd_LinkedEntryLOfKL$VLToNull = dart.constFn(dart.fnType(core.Null, [KL(), _LinkedEntryLOfKL$VL()])))();
    var KLAndVLToNull = () => (KLAndVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), VL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.legacy(KLAndVLToVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var VLToVL = () => (VLToVL = dart.constFn(dart.fnType(VL(), [VL()])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.legacy(VLToVL())))();
    class LinkedLruHashMap extends core.Object {
      static new(opts) {
        let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
        return new (lru_map.LinkedLruHashMap$(dart.legacy(K), dart.legacy(V)))._fromMap(new (_js_helper.LinkedMap$(dart.legacy(K), dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V))))).new(), {maximumSize: maximumSize});
      }
      addAll(other) {
        MapLOfKL$VL().as(other);
        return other[$forEach](dart.fn((k, v) => {
          let t1, t0;
          t0 = k;
          t1 = v;
          this._set(t0, t1);
          return t1;
        }, KLAndVLToVL()));
      }
      addEntries(entries) {
        IterableLOfMapEntryLOfKL$VL().as(entries);
        for (let entry of entries) {
          this._set(entry.key, entry.value);
        }
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_entries$][$clear]();
        this[_head] = this[_tail] = null;
      }
      containsKey(key) {
        return this[_entries$][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      get entries() {
        return this[_entries$][$values][$map](MapEntryLOfKL$VL(), dart.fn(entry => new (MapEntryOfKL$VL()).__(entry.key, entry.value), _LinkedEntryLOfKL$VLToMapEntryLOfKL$VL()));
      }
      forEach(action) {
        let head = this[_head];
        while (head != null) {
          action(head.key, head.value);
          head = head.next;
        }
      }
      get length() {
        return this[_entries$][$length];
      }
      get isEmpty() {
        return this[_entries$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_entries$][$isNotEmpty];
      }
      [_iterable]() {
        return new (GeneratingIterableOf_LinkedEntryLOfKL$VL()).new(dart.fn(() => this[_head], VoidTo_LinkedEntryLOfKL$VL()), dart.fn(n => n.next, _LinkedEntryLOfKL$VLTo_LinkedEntryLOfKL$VL()));
      }
      get keys() {
        return this[_iterable]()[$map](KL(), dart.fn(e => e.key, _LinkedEntryLOfKL$VLToKL()));
      }
      get values() {
        return this[_iterable]()[$map](VL(), dart.fn(e => e.value, _LinkedEntryLOfKL$VLToVL()));
      }
      map(K2, V2, transform) {
        dart.throw(new core.UnimplementedError.new("map"));
      }
      get maximumSize() {
        return this[_maximumSize];
      }
      set maximumSize(maximumSize) {
        if (maximumSize == null) dart.throw(new core.ArgumentError.notNull("maximumSize"));
        while (dart.notNull(this.length) > dart.notNull(maximumSize)) {
          this[_removeLru]();
        }
        this[_maximumSize] = maximumSize;
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLVL().as(ifAbsent);
        let entry = this[_entries$][$putIfAbsent](key, dart.fn(() => this[_createEntry](key, ifAbsent()), VoidTo_LinkedEntryLOfKL$VL()));
        if (dart.notNull(this.length) > dart.notNull(this.maximumSize)) {
          this[_removeLru]();
        }
        this[_promoteEntry](entry);
        return entry.value;
      }
      _get(key) {
        let entry = this[_entries$][$_get](key);
        if (entry != null) {
          this[_promoteEntry](entry);
          return entry.value;
        } else {
          return null;
        }
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        VL().as(value);
        this[_insertMru](this[_createEntry](key, value));
        if (dart.notNull(this.length) > dart.notNull(this.maximumSize)) {
          if (!(this.length === dart.notNull(this.maximumSize) + 1)) dart.assertFailed(null, L1, 219, 14, "length == maximumSize + 1");
          this[_removeLru]();
        }
        return value$;
      }
      remove(key) {
        let t0, t0$;
        let entry = this[_entries$][$remove](key);
        if (entry != null) {
          if (dart.equals(entry, this[_head]) && dart.equals(entry, this[_tail])) {
            this[_head] = this[_tail] = null;
          } else if (dart.equals(entry, this[_head])) {
            this[_head] = this[_head].next;
            t0 = this[_head];
            t0 == null ? null : t0.previous = null;
          } else if (dart.equals(entry, this[_tail])) {
            this[_tail] = this[_tail].previous;
            t0$ = this[_tail];
            t0$ == null ? null : t0$.next = null;
          } else {
            entry.previous.next = entry.next;
            entry.next.previous = entry.previous;
          }
          return entry.value;
        }
        return null;
      }
      removeWhere(test) {
        let keysToRemove = JSArrayOfKL().of([]);
        this[_entries$][$forEach](dart.fn((key, entry) => {
          if (dart.test(test(key, entry.value))) keysToRemove[$add](key);
        }, KLAnd_LinkedEntryLOfKL$VLToNull()));
        keysToRemove[$forEach](dart.bind(this, 'remove'));
      }
      toString() {
        if (dart.test(lru_map._isToStringVisiting(this))) {
          return "{...}";
        }
        let result = new core.StringBuffer.new();
        try {
          lru_map._toStringVisiting[$add](this);
          result.write("{");
          let first = true;
          this.forEach(dart.fn((k, v) => {
            if (!first) {
              result.write(", ");
            }
            first = false;
            result.write(dart.str(k) + ": " + dart.str(v));
          }, KLAndVLToNull()));
          result.write("}");
        } finally {
          if (!(lru_map._toStringVisiting[$last] === this)) dart.assertFailed(null, L1, 277, 14, "identical(_toStringVisiting.last, this)");
          lru_map._toStringVisiting[$removeLast]();
        }
        return result.toString();
      }
      update(key, update, opts) {
        KL().as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        let newValue = null;
        if (dart.test(this.containsKey(key))) {
          newValue = update(this._get(key));
        } else {
          if (ifAbsent == null) {
            dart.throw(new core.ArgumentError.value(key, "key", "Key not in map"));
          }
          newValue = ifAbsent();
        }
        this[_insertMru](this[_createEntry](key, newValue));
        if (dart.notNull(this.length) > dart.notNull(this.maximumSize)) {
          if (!(this.length === dart.notNull(this.maximumSize) + 1)) dart.assertFailed(null, L1, 301, 14, "length == maximumSize + 1");
          this[_removeLru]();
        }
        return newValue;
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        this[_entries$][$forEach](dart.fn((key, entry) => {
          let newValue = this[_createEntry](key, update(key, entry.value));
          this[_entries$][$_set](key, newValue);
        }, KLAnd_LinkedEntryLOfKL$VLToNull()));
      }
      [_promoteEntry](entry) {
        if (dart.equals(entry, this[_head])) {
          return;
        }
        if (entry.previous != null) {
          entry.previous.next = entry.next;
          if (dart.equals(this[_tail], entry)) {
            this[_tail] = entry.previous;
          }
        }
        if (entry.next != null) {
          entry.next.previous = entry.previous;
        }
        if (this[_head] != null) {
          this[_head].previous = entry;
        }
        entry.previous = null;
        entry.next = this[_head];
        this[_head] = entry;
        if (this[_tail] == null) {
          if (!(this.length === 1)) dart.assertFailed(null, L1, 346, 14, "length == 1");
          this[_tail] = this[_head];
        }
      }
      [_createEntry](key, value) {
        return new (_LinkedEntryOfKL$VL()).new(key, value);
      }
      [_insertMru](entry) {
        let t0;
        let value = entry.value;
        this[_promoteEntry]((t0 = this[_entries$][$putIfAbsent](entry.key, dart.fn(() => entry, VoidTo_LinkedEntryLOfKL$VL())), (() => {
          t0.value = value;
          return t0;
        })()));
      }
      [_removeLru]() {
        let t0;
        this[_entries$][$remove](this[_tail].key);
        this[_tail] = this[_tail].previous;
        t0 = this[_tail];
        t0 == null ? null : t0.next = null;
        if (this[_tail] == null) {
          this[_head] = null;
        }
      }
    }
    (LinkedLruHashMap._fromMap = function(_entries, opts) {
      let t0;
      let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
      this[_head] = null;
      this[_tail] = null;
      this[_entries$] = _entries;
      this[_maximumSize] = (t0 = maximumSize, t0 == null ? 100 : t0);
      ;
    }).prototype = LinkedLruHashMap.prototype;
    dart.addTypeTests(LinkedLruHashMap);
    LinkedLruHashMap.prototype[_is_LinkedLruHashMap_default] = true;
    dart.addTypeCaches(LinkedLruHashMap);
    LinkedLruHashMap[dart.implements] = () => [lru_map.LruMap$(dart.legacy(K), dart.legacy(V))];
    dart.setMethodSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getMethods(LinkedLruHashMap.__proto__),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType((K2, V2) => [dart.legacy(lru_map.LinkedLruHashMap$(dart.legacy(K2), dart.legacy(V2))), []]),
      [$cast]: dart.gFnType((K2, V2) => [dart.legacy(lru_map.LinkedLruHashMap$(dart.legacy(K2), dart.legacy(V2))), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      [_iterable]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V))))), []),
      map: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(K), dart.legacy(V)]))]]),
      [$map]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(K), dart.legacy(V)]))]]),
      putIfAbsent: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$putIfAbsent]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
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
      [_promoteEntry]: dart.fnType(dart.void, [dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V)))]),
      [_createEntry]: dart.fnType(dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V))), [dart.legacy(K), dart.legacy(V)]),
      [_insertMru]: dart.fnType(dart.void, [dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V)))]),
      [_removeLru]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getGetters(LinkedLruHashMap.__proto__),
      entries: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V))))),
      [$entries]: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V))))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      [$keys]: dart.legacy(core.Iterable$(dart.legacy(K))),
      values: dart.legacy(core.Iterable$(dart.legacy(V))),
      [$values]: dart.legacy(core.Iterable$(dart.legacy(V))),
      maximumSize: dart.legacy(core.int)
    }));
    dart.setSetterSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getSetters(LinkedLruHashMap.__proto__),
      maximumSize: dart.legacy(core.int)
    }));
    dart.setLibraryUri(LinkedLruHashMap, L0);
    dart.setFieldSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getFields(LinkedLruHashMap.__proto__),
      [_entries$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V)))))),
      [_maximumSize]: dart.fieldType(dart.legacy(core.int)),
      [_head]: dart.fieldType(dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V)))),
      [_tail]: dart.fieldType(dart.legacy(lru_map._LinkedEntry$(dart.legacy(K), dart.legacy(V))))
    }));
    dart.defineExtensionMethods(LinkedLruHashMap, [
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      '_get',
      '_set',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(LinkedLruHashMap, [
      'entries',
      'length',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'values'
    ]);
    return LinkedLruHashMap;
  });
  lru_map.LinkedLruHashMap = lru_map.LinkedLruHashMap$();
  dart.defineLazy(lru_map.LinkedLruHashMap, {
    /*lru_map.LinkedLruHashMap._DEFAULT_MAXIMUM_SIZE*/get _DEFAULT_MAXIMUM_SIZE() {
      return 100;
    }
  }, true);
  dart.addTypeTests(lru_map.LinkedLruHashMap, _is_LinkedLruHashMap_default);
  lru_map._isToStringVisiting = function _isToStringVisiting(o) {
    return lru_map._toStringVisiting[$any](dart.fn(e => core.identical(o, e), dynamicToboolL()));
  };
  dart.defineLazy(lru_map, {
    /*lru_map._toStringVisiting*/get _toStringVisiting() {
      return [];
    }
  }, true);
  const _is_DelegatingIterable_default = Symbol('_is_DelegatingIterable_default');
  iterable.DelegatingIterable$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var VoidToEL = () => (VoidToEL = dart.constFn(dart.fnType(EL(), [])))();
    var VoidToLEL = () => (VoidToLEL = dart.constFn(dart.legacy(VoidToEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ELAndELToEL = () => (ELAndELToEL = dart.constFn(dart.fnType(EL(), [EL(), EL()])))();
    var ELAndELToLEL = () => (ELAndELToLEL = dart.constFn(dart.legacy(ELAndELToEL())))();
    class DelegatingIterable extends core.Object {
      any(test) {
        return this.delegate[$any](test);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      contains(element) {
        return this.delegate[$contains](element);
      }
      elementAt(index) {
        return this.delegate[$elementAt](index);
      }
      every(test) {
        return this.delegate[$every](test);
      }
      expand(T, f) {
        return this.delegate[$expand](dart.legacy(T), f);
      }
      get first() {
        return this.delegate[$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this.delegate[$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this.delegate[$fold](dart.legacy(T), initialValue, combine);
      }
      followedBy(other) {
        IterableLOfEL().as(other);
        return this.delegate[$followedBy](other);
      }
      forEach(f) {
        return this.delegate[$forEach](f);
      }
      get isEmpty() {
        return this.delegate[$isEmpty];
      }
      get isNotEmpty() {
        return this.delegate[$isNotEmpty];
      }
      get iterator() {
        return this.delegate[$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this.delegate[$join](separator);
      }
      get last() {
        return this.delegate[$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this.delegate[$lastWhere](test, {orElse: orElse});
      }
      get length() {
        return this.delegate[$length];
      }
      map(T, f) {
        return this.delegate[$map](dart.legacy(T), f);
      }
      reduce(combine) {
        ELAndELToLEL().as(combine);
        return this.delegate[$reduce](combine);
      }
      get single() {
        return this.delegate[$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLEL().as(orElse);
        return this.delegate[$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        return this.delegate[$skip](n);
      }
      skipWhile(test) {
        return this.delegate[$skipWhile](test);
      }
      take(n) {
        return this.delegate[$take](n);
      }
      takeWhile(test) {
        return this.delegate[$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this.delegate[$toList]({growable: growable});
      }
      toSet() {
        return this.delegate[$toSet]();
      }
      where(test) {
        return this.delegate[$where](test);
      }
      whereType(T) {
        dart.throw(new core.UnimplementedError.new("whereType"));
      }
    }
    (DelegatingIterable.new = function() {
      ;
    }).prototype = DelegatingIterable.prototype;
    DelegatingIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(DelegatingIterable);
    DelegatingIterable.prototype[_is_DelegatingIterable_default] = true;
    dart.addTypeCaches(DelegatingIterable);
    DelegatingIterable[dart.implements] = () => [core.Iterable$(dart.legacy(E))];
    dart.setMethodSignature(DelegatingIterable, () => ({
      __proto__: dart.getMethods(DelegatingIterable.__proto__),
      any: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$any]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      cast: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
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
      [$whereType]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []])
    }));
    dart.setGetterSignature(DelegatingIterable, () => ({
      __proto__: dart.getGetters(DelegatingIterable.__proto__),
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
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      single: dart.legacy(E),
      [$single]: dart.legacy(E)
    }));
    dart.setLibraryUri(DelegatingIterable, L2);
    dart.defineExtensionMethods(DelegatingIterable, [
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
      'whereType'
    ]);
    dart.defineExtensionAccessors(DelegatingIterable, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return DelegatingIterable;
  });
  iterable.DelegatingIterable = iterable.DelegatingIterable$();
  dart.addTypeTests(iterable.DelegatingIterable, _is_DelegatingIterable_default);
  const _is_DelegatingQueue_default = Symbol('_is_DelegatingQueue_default');
  queue.DelegatingQueue$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    class DelegatingQueue extends iterable.DelegatingIterable$(dart.legacy(E)) {
      add(value) {
        EL().as(value);
        return this.delegate.add(value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        return this.delegate.addAll(iterable);
      }
      addFirst(value) {
        EL().as(value);
        return this.delegate.addFirst(value);
      }
      addLast(value) {
        EL().as(value);
        return this.delegate.addLast(value);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        return this.delegate.clear();
      }
      remove(object) {
        return this.delegate.remove(object);
      }
      removeFirst() {
        return this.delegate.removeFirst();
      }
      removeLast() {
        return this.delegate.removeLast();
      }
      removeWhere(test) {
        return this.delegate.removeWhere(test);
      }
      retainWhere(test) {
        return this.delegate.retainWhere(test);
      }
    }
    (DelegatingQueue.new = function() {
      ;
    }).prototype = DelegatingQueue.prototype;
    dart.addTypeTests(DelegatingQueue);
    DelegatingQueue.prototype[_is_DelegatingQueue_default] = true;
    dart.addTypeCaches(DelegatingQueue);
    DelegatingQueue[dart.implements] = () => [collection.Queue$(dart.legacy(E))];
    dart.setMethodSignature(DelegatingQueue, () => ({
      __proto__: dart.getMethods(DelegatingQueue.__proto__),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType(T => [dart.legacy(queue.DelegatingQueue$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(queue.DelegatingQueue$(dart.legacy(T))), []]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeFirst: dart.fnType(dart.legacy(E), []),
      removeLast: dart.fnType(dart.legacy(E), []),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))])
    }));
    dart.setLibraryUri(DelegatingQueue, L3);
    dart.defineExtensionMethods(DelegatingQueue, ['cast']);
    return DelegatingQueue;
  });
  queue.DelegatingQueue = queue.DelegatingQueue$();
  dart.addTypeTests(queue.DelegatingQueue, _is_DelegatingQueue_default);
  const _is_DelegatingMap_default = Symbol('_is_DelegatingMap_default');
  map.DelegatingMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(VL(), [KL(), VL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.legacy(KLAndVLToVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var VLToVL = () => (VLToVL = dart.constFn(dart.fnType(VL(), [VL()])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.legacy(VLToVL())))();
    class DelegatingMap extends core.Object {
      _get(key) {
        return this.delegate[$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        VL().as(value);
        this.delegate[$_set](key, value);
        return value$;
      }
      addAll(other) {
        MapLOfKL$VL().as(other);
        return this.delegate[$addAll](other);
      }
      addEntries(entries) {
        IterableLOfObjectL().as(entries);
        dart.throw(new core.UnimplementedError.new("addEntries"));
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        return this.delegate[$clear]();
      }
      containsKey(key) {
        return this.delegate[$containsKey](key);
      }
      containsValue(value) {
        return this.delegate[$containsValue](value);
      }
      get entries() {
        dart.throw(new core.UnimplementedError.new("entries"));
      }
      forEach(f) {
        return this.delegate[$forEach](f);
      }
      get isEmpty() {
        return this.delegate[$isEmpty];
      }
      get isNotEmpty() {
        return this.delegate[$isNotEmpty];
      }
      get keys() {
        return this.delegate[$keys];
      }
      get length() {
        return this.delegate[$length];
      }
      map(K2, V2, transform) {
        dart.throw(new core.UnimplementedError.new("map"));
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLVL().as(ifAbsent);
        return this.delegate[$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        return this.delegate[$remove](key);
      }
      removeWhere(test) {
        dart.throw(new core.UnimplementedError.new("removeWhere"));
      }
      update(key, update, opts) {
        KL().as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        dart.throw(new core.UnimplementedError.new("update"));
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        dart.throw(new core.UnimplementedError.new("updateAll"));
      }
      get values() {
        return this.delegate[$values];
      }
    }
    (DelegatingMap.new = function() {
      ;
    }).prototype = DelegatingMap.prototype;
    DelegatingMap.prototype[dart.isMap] = true;
    dart.addTypeTests(DelegatingMap);
    DelegatingMap.prototype[_is_DelegatingMap_default] = true;
    dart.addTypeCaches(DelegatingMap);
    DelegatingMap[dart.implements] = () => [core.Map$(dart.legacy(K), dart.legacy(V))];
    dart.setMethodSignature(DelegatingMap, () => ({
      __proto__: dart.getMethods(DelegatingMap.__proto__),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      [$cast]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      map: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(K), dart.legacy(V)]))]]),
      [$map]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(K), dart.legacy(V)]))]]),
      putIfAbsent: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$putIfAbsent]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      update: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      [$update]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(DelegatingMap, () => ({
      __proto__: dart.getGetters(DelegatingMap.__proto__),
      entries: dart.legacy(core.Iterable$(core.Null)),
      [$entries]: dart.legacy(core.Iterable$(core.Null)),
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
    dart.setLibraryUri(DelegatingMap, L4);
    dart.defineExtensionMethods(DelegatingMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(DelegatingMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return DelegatingMap;
  });
  map.DelegatingMap = map.DelegatingMap$();
  dart.addTypeTests(map.DelegatingMap, _is_DelegatingMap_default);
  const _is_TreeSet_default = Symbol('_is_TreeSet_default');
  var comparator$ = dart.privateName(treeset, "TreeSet.comparator");
  treeset.TreeSet$ = dart.generic(V => {
    class TreeSet extends collection.IterableBase$(dart.legacy(V)) {
      get comparator() {
        return this[comparator$];
      }
      set comparator(value) {
        super.comparator = value;
      }
      static new(opts) {
        let comparator = opts && 'comparator' in opts ? opts.comparator : null;
        comparator == null ? comparator = dart.fn((a, b) => core.int.as(dart.dsend(a, 'compareTo', [b])), dart.fnType(intL(), [dart.legacy(V), dart.legacy(V)])) : null;
        return new (treeset.AvlTreeSet$(dart.legacy(V))).new({comparator: comparator});
      }
      get isEmpty() {
        return this.length === 0;
      }
      get isNotEmpty() {
        return this.length !== 0;
      }
    }
    (TreeSet.__ = function(comparator) {
      this[comparator$] = comparator;
      TreeSet.__proto__.new.call(this);
      ;
    }).prototype = TreeSet.prototype;
    dart.addTypeTests(TreeSet);
    TreeSet.prototype[_is_TreeSet_default] = true;
    dart.addTypeCaches(TreeSet);
    TreeSet[dart.implements] = () => [core.Set$(dart.legacy(V))];
    dart.setGetterSignature(TreeSet, () => ({
      __proto__: dart.getGetters(TreeSet.__proto__),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(TreeSet, L5);
    dart.setFieldSignature(TreeSet, () => ({
      __proto__: dart.getFields(TreeSet.__proto__),
      comparator: dart.finalFieldType(dart.legacy(dart.fnType(core.int, [dart.legacy(V), dart.legacy(V)])))
    }));
    dart.defineExtensionAccessors(TreeSet, ['isEmpty', 'isNotEmpty']);
    return TreeSet;
  });
  treeset.TreeSet = treeset.TreeSet$();
  dart.addTypeTests(treeset.TreeSet, _is_TreeSet_default);
  var _name$ = dart.privateName(treeset, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  treeset.TreeSearch = class TreeSearch extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (treeset.TreeSearch.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = treeset.TreeSearch.prototype;
  dart.addTypeTests(treeset.TreeSearch);
  dart.addTypeCaches(treeset.TreeSearch);
  dart.setMethodSignature(treeset.TreeSearch, () => ({
    __proto__: dart.getMethods(treeset.TreeSearch.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(treeset.TreeSearch, L5);
  dart.setFieldSignature(treeset.TreeSearch, () => ({
    __proto__: dart.getFields(treeset.TreeSearch.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(treeset.TreeSearch, ['toString']);
  treeset.TreeSearch.LESS_THAN = C0 || CT.C0;
  treeset.TreeSearch.NEAREST = C1 || CT.C1;
  treeset.TreeSearch.GREATER_THAN = C2 || CT.C2;
  treeset.TreeSearch.values = C3 || CT.C3;
  const _is__TreeNode_default = Symbol('_is__TreeNode_default');
  var object$ = dart.privateName(treeset, "_TreeNode.object");
  treeset._TreeNode$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class _TreeNode extends core.Object {
      get object() {
        return this[object$];
      }
      set object(value) {
        this[object$] = VL().as(value);
      }
      get minimumNode() {
        let node = this;
        while (node.left != null) {
          node = node.left;
        }
        return node;
      }
      get maximumNode() {
        let node = this;
        while (node.right != null) {
          node = node.right;
        }
        return node;
      }
      get successor() {
        let node = this;
        if (node.right != null) {
          return node.right.minimumNode;
        }
        while (node.parent != null && dart.equals(node, node.parent.right)) {
          node = node.parent;
        }
        return node.parent;
      }
      get predecessor() {
        let node = this;
        if (node.left != null) {
          return node.left.maximumNode;
        }
        while (node.parent != null && dart.equals(node.parent.left, node)) {
          node = node.parent;
        }
        return node.parent;
      }
    }
    (_TreeNode.new = function(opts) {
      let object = opts && 'object' in opts ? opts.object : null;
      this[object$] = object;
      ;
    }).prototype = _TreeNode.prototype;
    dart.addTypeTests(_TreeNode);
    _TreeNode.prototype[_is__TreeNode_default] = true;
    dart.addTypeCaches(_TreeNode);
    dart.setGetterSignature(_TreeNode, () => ({
      __proto__: dart.getGetters(_TreeNode.__proto__),
      minimumNode: dart.legacy(treeset._TreeNode$(dart.legacy(V))),
      maximumNode: dart.legacy(treeset._TreeNode$(dart.legacy(V))),
      successor: dart.legacy(treeset._TreeNode$(dart.legacy(V))),
      predecessor: dart.legacy(treeset._TreeNode$(dart.legacy(V)))
    }));
    dart.setLibraryUri(_TreeNode, L5);
    dart.setFieldSignature(_TreeNode, () => ({
      __proto__: dart.getFields(_TreeNode.__proto__),
      object: dart.fieldType(dart.legacy(V))
    }));
    return _TreeNode;
  });
  treeset._TreeNode = treeset._TreeNode$();
  dart.addTypeTests(treeset._TreeNode, _is__TreeNode_default);
  var _length = dart.privateName(treeset, "_length");
  var _root = dart.privateName(treeset, "_root");
  var _modCount = dart.privateName(treeset, "_modCount");
  var _left = dart.privateName(treeset, "_left");
  var _parent = dart.privateName(treeset, "_parent");
  var _balanceFactor = dart.privateName(treeset, "_balanceFactor");
  var _right = dart.privateName(treeset, "_right");
  var _rotateLeft = dart.privateName(treeset, "_rotateLeft");
  var _rotateRightLeft = dart.privateName(treeset, "_rotateRightLeft");
  var _rotateRight = dart.privateName(treeset, "_rotateRight");
  var _rotateLeftRight = dart.privateName(treeset, "_rotateLeftRight");
  var _getNode = dart.privateName(treeset, "_getNode");
  var _removeNode = dart.privateName(treeset, "_removeNode");
  var _searchNearest = dart.privateName(treeset, "_searchNearest");
  const _is_AvlTreeSet_default = Symbol('_is_AvlTreeSet_default');
  treeset.AvlTreeSet$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var AvlNodeOfVL = () => (AvlNodeOfVL = dart.constFn(treeset.AvlNode$(VL())))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var AvlNodeLOfVL = () => (AvlNodeLOfVL = dart.constFn(dart.legacy(AvlNodeOfVL())))();
    var JSArrayOfVL = () => (JSArrayOfVL = dart.constFn(_interceptors.JSArray$(VL())))();
    var _AvlTreeIteratorOfVL = () => (_AvlTreeIteratorOfVL = dart.constFn(treeset._AvlTreeIterator$(VL())))();
    var TreeSetOfVL = () => (TreeSetOfVL = dart.constFn(treeset.TreeSet$(VL())))();
    var TreeSetLOfVL = () => (TreeSetLOfVL = dart.constFn(dart.legacy(TreeSetOfVL())))();
    var SetOfVL = () => (SetOfVL = dart.constFn(core.Set$(VL())))();
    var SetLOfVL = () => (SetLOfVL = dart.constFn(dart.legacy(SetOfVL())))();
    var BidirectionalIteratorOfVL = () => (BidirectionalIteratorOfVL = dart.constFn(core.BidirectionalIterator$(VL())))();
    var BidirectionalIteratorLOfVL = () => (BidirectionalIteratorLOfVL = dart.constFn(dart.legacy(BidirectionalIteratorOfVL())))();
    class AvlTreeSet extends treeset.TreeSet$(dart.legacy(V)) {
      get length() {
        return this[_length];
      }
      add(element) {
        let t1, t0, t0$, t1$, t0$0, t0$1, t1$0, t0$2, t0$3, t0$4;
        VL().as(element);
        if (this[_root] == null) {
          let node = new (AvlNodeOfVL()).new({object: element});
          this[_root] = node;
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_modCount] = dart.notNull(this[_modCount]) + 1;
          return true;
        }
        let x = this[_root];
        while (true) {
          let compare = (t0 = element, t1 = x.object, this.comparator(t0, t1));
          if (compare === 0) {
            return false;
          } else if (dart.notNull(compare) < 0) {
            if (x[_left] == null) {
              let node = (t0$ = new (AvlNodeOfVL()).new({object: element}), (() => {
                t0$[_parent] = x;
                return t0$;
              })());
              t0$0 = x;
              (() => {
                t0$0[_left] = node;
                t1$ = t0$0;
                t1$[_balanceFactor] = dart.notNull(t1$[_balanceFactor]) - 1;
                return t0$0;
              })();
              break;
            }
            x = x.left;
          } else {
            if (x[_right] == null) {
              let node = (t0$1 = new (AvlNodeOfVL()).new({object: element}), (() => {
                t0$1[_parent] = x;
                return t0$1;
              })());
              t0$2 = x;
              (() => {
                t0$2[_right] = node;
                t1$0 = t0$2;
                t1$0[_balanceFactor] = dart.notNull(t1$0[_balanceFactor]) + 1;
                return t0$2;
              })();
              break;
            }
            x = x.right;
          }
        }
        this[_modCount] = dart.notNull(this[_modCount]) + 1;
        let node = x;
        while (node[_balanceFactor] !== 0 && node.parent != null) {
          if (dart.equals(node.parent[_left], node)) {
            t0$3 = node.parent;
            t0$3[_balanceFactor] = dart.notNull(t0$3[_balanceFactor]) - 1;
          } else {
            t0$4 = node.parent;
            t0$4[_balanceFactor] = dart.notNull(t0$4[_balanceFactor]) + 1;
          }
          node = node.parent;
          if (node[_balanceFactor] === 2) {
            if (node.right[_balanceFactor] === 1) {
              this[_rotateLeft](node);
              node[_balanceFactor] = node.parent[_balanceFactor] = 0;
              node = node.parent;
            } else {
              this[_rotateRightLeft](node);
              node = node.parent;
              if (node[_balanceFactor] === 1) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              }
              node[_balanceFactor] = 0;
            }
            break;
          } else if (node[_balanceFactor] === -2) {
            if (node.left[_balanceFactor] === -1) {
              this[_rotateRight](node);
              node[_balanceFactor] = node.parent[_balanceFactor] = 0;
              node = node.parent;
            } else {
              this[_rotateLeftRight](node);
              node = node.parent;
              if (node[_balanceFactor] === -1) {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              }
              node[_balanceFactor] = 0;
            }
            break;
          }
        }
        this[_length] = dart.notNull(this[_length]) + 1;
        return true;
      }
      [_getNode](element) {
        let t1, t0;
        if (element == null) return null;
        let x = this[_root];
        while (x != null) {
          let compare = (t0 = element, t1 = x.object, this.comparator(t0, t1));
          if (compare === 0) {
            return x;
          } else if (dart.notNull(compare) < 0) {
            x = x.left;
          } else {
            x = x.right;
          }
        }
        return null;
      }
      [_rotateRight](node) {
        let y = node.left;
        if (y == null) dart.throw(new core.AssertionError.new());
        node[_left] = y.right;
        if (node.left != null) {
          node.left[_parent] = node;
        }
        y[_parent] = node.parent;
        if (y[_parent] == null) {
          this[_root] = y;
        } else {
          if (dart.equals(node.parent[_left], node)) {
            node.parent[_left] = y;
          } else {
            node.parent[_right] = y;
          }
        }
        y[_right] = node;
        node[_parent] = y;
      }
      [_rotateLeft](node) {
        let y = node.right;
        if (y == null) dart.throw(new core.AssertionError.new());
        node[_right] = y.left;
        if (node.right != null) {
          node.right[_parent] = node;
        }
        y[_parent] = node.parent;
        if (y[_parent] == null) {
          this[_root] = y;
        } else {
          if (dart.equals(node.parent[_left], node)) {
            y.parent[_left] = y;
          } else {
            y.parent[_right] = y;
          }
        }
        y[_left] = node;
        node[_parent] = y;
      }
      [_rotateRightLeft](node) {
        this[_rotateRight](node.right);
        this[_rotateLeft](node);
      }
      [_rotateLeftRight](node) {
        this[_rotateLeft](node.left);
        this[_rotateRight](node);
      }
      addAll(items) {
        IterableLOfVL().as(items);
        let modified = false;
        for (let item of items) {
          if (dart.test(this.add(item))) {
            modified = true;
          }
        }
        return modified;
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_length] = 0;
        this[_root] = null;
        this[_modCount] = dart.notNull(this[_modCount]) + 1;
      }
      containsAll(items) {
        for (let item of items) {
          if (!dart.test(this.contains(item))) return false;
        }
        return true;
      }
      remove(item) {
        if (!VL().is(item)) return false;
        let x = this[_getNode](VL().as(item));
        if (x != null) {
          this[_removeNode](x);
          return true;
        }
        return false;
      }
      [_removeNode](node) {
        let t0, t0$, t0$0, t0$1, t0$2;
        let y = null;
        let w = null;
        this[_modCount] = dart.notNull(this[_modCount]) + 1;
        this[_length] = dart.notNull(this[_length]) - 1;
        if (node[_right] == null || node.right[_left] == null) {
          if (node.right != null) {
            y = node.right;
            y[_parent] = node.parent;
            y[_balanceFactor] = dart.notNull(node[_balanceFactor]) - 1;
            y[_left] = node.left;
            if (y.left != null) {
              y.left[_parent] = y;
            }
          } else if (node.left != null) {
            y = node.left;
            y[_parent] = node.parent;
            y[_balanceFactor] = dart.notNull(node[_balanceFactor]) + 1;
          } else {
            y = null;
          }
          if (dart.equals(this[_root], node)) {
            this[_root] = y;
          } else if (dart.equals(node.parent[_left], node)) {
            node.parent[_left] = y;
            if (y == null) {
              t0 = node.parent;
              t0[_balanceFactor] = dart.notNull(t0[_balanceFactor]) + 1;
              y = node.parent;
            }
          } else {
            node.parent[_right] = y;
            if (y == null) {
              t0$ = node.parent;
              t0$[_balanceFactor] = dart.notNull(t0$[_balanceFactor]) - 1;
              y = node.parent;
            }
          }
          w = y;
        } else {
          y = AvlNodeLOfVL().as(node.successor);
          y[_left] = node.left;
          if (y.left != null) {
            y.left[_parent] = y;
          }
          w = y.parent;
          w[_left] = y.right;
          if (w.left != null) {
            w.left[_parent] = w;
          }
          t0$0 = w;
          t0$0[_balanceFactor] = dart.notNull(t0$0[_balanceFactor]) + 1;
          y[_right] = node.right;
          y.right[_parent] = y;
          y[_balanceFactor] = node[_balanceFactor];
          y[_parent] = node.parent;
          if (dart.equals(this[_root], node)) {
            this[_root] = y;
          } else if (dart.equals(node.parent[_left], node)) {
            node.parent[_left] = y;
          } else {
            node.parent[_right] = y;
          }
        }
        node[_balanceFactor] = 0;
        node[_left] = node[_right] = node[_parent] = null;
        node.object = null;
        node = w;
        while (node != null) {
          node = node.parent;
        }
        node = w;
        while (node != null) {
          if (node[_balanceFactor] === -1 || node[_balanceFactor] === 1) {
            break;
          }
          if (node[_balanceFactor] === 2) {
            if (node.right[_balanceFactor] === -1) {
              this[_rotateRightLeft](node);
              node = node.parent;
              if (node[_balanceFactor] === 1) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              }
              node[_balanceFactor] = 0;
            } else {
              this[_rotateLeft](node);
              if (node.parent[_balanceFactor] === 0) {
                node.parent[_balanceFactor] = -1;
                node[_balanceFactor] = 1;
                break;
              } else {
                node.parent[_balanceFactor] = 0;
                node[_balanceFactor] = 0;
                node = node.parent;
                continue;
              }
            }
          } else if (node[_balanceFactor] === -2) {
            if (node.left[_balanceFactor] === 1) {
              this[_rotateLeftRight](node);
              node = node.parent;
              if (node[_balanceFactor] === -1) {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              }
              node[_balanceFactor] = 0;
            } else {
              this[_rotateRight](node);
              if (node.parent[_balanceFactor] === 0) {
                node.parent[_balanceFactor] = 1;
                node[_balanceFactor] = -1;
                break;
              } else {
                node.parent[_balanceFactor] = 0;
                node[_balanceFactor] = 0;
                node = node.parent;
                continue;
              }
            }
          }
          if (node.parent != null) {
            if (dart.equals(node.parent.left, node)) {
              t0$1 = node.parent;
              t0$1[_balanceFactor] = dart.notNull(t0$1[_balanceFactor]) + 1;
            } else {
              t0$2 = node.parent;
              t0$2[_balanceFactor] = dart.notNull(t0$2[_balanceFactor]) - 1;
            }
          }
          node = node.parent;
        }
      }
      removeAll(items) {
        items[$forEach](dart.bind(this, 'remove'));
      }
      retainAll(elements) {
        let chosen = JSArrayOfVL().of([]);
        for (let target of elements) {
          if (VL().is(target) && dart.test(this.contains(target))) {
            chosen[$add](target);
          }
        }
        this.clear();
        this.addAll(chosen);
      }
      retainWhere(test) {
        let chosen = JSArrayOfVL().of([]);
        for (let target of this) {
          if (dart.test(test(target))) {
            chosen[$add](target);
          }
        }
        this.clear();
        this.addAll(chosen);
      }
      removeWhere(test) {
        let damned = JSArrayOfVL().of([]);
        for (let target of this) {
          if (dart.test(test(target))) {
            damned[$add](target);
          }
        }
        this.removeAll(damned);
      }
      get first() {
        if (this[_root] == null) return null;
        let min = AvlNodeLOfVL().as(this[_root].minimumNode);
        return min != null ? min.object : null;
      }
      get last() {
        if (this[_root] == null) return null;
        let max = AvlNodeLOfVL().as(this[_root].maximumNode);
        return max != null ? max.object : null;
      }
      lookup(element) {
        let t1, t0;
        if (!VL().is(element) || this[_root] == null) return null;
        let x = this[_root];
        let compare = 0;
        while (x != null) {
          compare = (t0 = element, t1 = x.object, this.comparator(VL().as(t0), t1));
          if (compare === 0) {
            return x.object;
          } else if (dart.notNull(compare) < 0) {
            x = x.left;
          } else {
            x = x.right;
          }
        }
        return null;
      }
      nearest(object, opts) {
        VL().as(object);
        let nearestOption = opts && 'nearestOption' in opts ? opts.nearestOption : C1 || CT.C1;
        let found = this[_searchNearest](object, {option: nearestOption});
        return found != null ? found.object : null;
      }
      [_searchNearest](element, opts) {
        let t1, t0, t1$, t0$;
        VL().as(element);
        let option = opts && 'option' in opts ? opts.option : C1 || CT.C1;
        if (element == null || this[_root] == null) {
          return null;
        }
        let x = this[_root];
        let previous = null;
        let compare = 0;
        while (x != null) {
          previous = x;
          compare = (t0 = element, t1 = x.object, this.comparator(t0, t1));
          if (compare === 0) {
            return x;
          } else if (dart.notNull(compare) < 0) {
            x = x.left;
          } else {
            x = x.right;
          }
        }
        if (option == treeset.TreeSearch.GREATER_THAN) {
          return AvlNodeLOfVL().as(dart.notNull(compare) < 0 ? previous : previous.successor);
        } else if (option == treeset.TreeSearch.LESS_THAN) {
          return AvlNodeLOfVL().as(dart.notNull(compare) < 0 ? previous.predecessor : previous);
        }
        x = AvlNodeLOfVL().as(dart.notNull(compare) < 0 ? previous.predecessor : previous.successor);
        if (x == null) {
          return previous;
        }
        let otherCompare = (t0$ = element, t1$ = x.object, this.comparator(t0$, t1$));
        if (dart.notNull(compare) < 0) {
          return compare[$abs]() < dart.notNull(otherCompare) ? previous : x;
        }
        return otherCompare[$abs]() < dart.notNull(compare) ? x : previous;
      }
      get iterator() {
        return new (_AvlTreeIteratorOfVL()).__(this);
      }
      get reverseIterator() {
        return new (_AvlTreeIteratorOfVL()).__(this, {reversed: true});
      }
      fromIterator(anchor, opts) {
        VL().as(anchor);
        let reversed = opts && 'reversed' in opts ? opts.reversed : false;
        let inclusive = opts && 'inclusive' in opts ? opts.inclusive : true;
        return new (_AvlTreeIteratorOfVL()).__(this, {anchorObject: anchor, reversed: reversed, inclusive: inclusive});
      }
      contains(object) {
        let x = this[_getNode](VL().as(object));
        return x != null;
      }
      intersection(other) {
        let t1, t0;
        let set = TreeSetOfVL().new({comparator: this.comparator});
        if (TreeSetLOfVL().is(other)) {
          let i1 = this.iterator;
          let i2 = other.iterator;
          let hasMore1 = i1.moveNext();
          let hasMore2 = i2.moveNext();
          while (dart.test(hasMore1) && dart.test(hasMore2)) {
            let c = (t0 = i1.current, t1 = i2.current, this.comparator(t0, t1));
            if (c === 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
              hasMore2 = i2.moveNext();
            } else if (dart.notNull(c) < 0) {
              hasMore1 = i1.moveNext();
            } else {
              hasMore2 = i2.moveNext();
            }
          }
          return set;
        }
        for (let target of this) {
          if (dart.test(other.contains(target))) {
            set.add(target);
          }
        }
        return set;
      }
      union(other) {
        let t1, t0, t0$;
        SetLOfVL().as(other);
        let set = TreeSetOfVL().new({comparator: this.comparator});
        if (TreeSetL().is(other)) {
          let i1 = this.iterator;
          let i2 = other.iterator;
          let hasMore1 = i1.moveNext();
          let hasMore2 = i2.moveNext();
          while (dart.test(hasMore1) && dart.test(hasMore2)) {
            let c = (t0 = i1.current, t1 = i2.current, this.comparator(t0, t1));
            if (c === 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
              hasMore2 = i2.moveNext();
            } else if (dart.notNull(c) < 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
            } else {
              set.add(i2.current);
              hasMore2 = i2.moveNext();
            }
          }
          if (dart.test(hasMore1) || dart.test(hasMore2)) {
            i1 = BidirectionalIteratorLOfVL().as(dart.test(hasMore1) ? i1 : i2);
            do {
              set.add(i1.current);
            } while (dart.test(i1.moveNext()));
          }
          return set;
        }
        t0$ = set;
        return (() => {
          t0$.addAll(this);
          t0$.addAll(other);
          return t0$;
        })();
      }
      difference(other) {
        let t1, t0;
        let set = TreeSetOfVL().new({comparator: this.comparator});
        if (TreeSetL().is(other)) {
          let i1 = this.iterator;
          let i2 = other.iterator;
          let hasMore1 = i1.moveNext();
          let hasMore2 = i2.moveNext();
          while (dart.test(hasMore1) && dart.test(hasMore2)) {
            let c = (t0 = i1.current, t1 = i2.current, this.comparator(t0, VL().as(t1)));
            if (c === 0) {
              hasMore1 = i1.moveNext();
              hasMore2 = i2.moveNext();
            } else if (dart.notNull(c) < 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
            } else {
              hasMore2 = i2.moveNext();
            }
          }
          if (dart.test(hasMore1)) {
            do {
              set.add(i1.current);
            } while (dart.test(i1.moveNext()));
          }
          return set;
        }
        for (let target of this) {
          if (!dart.test(other.contains(target))) {
            set.add(target);
          }
        }
        return set;
      }
      getNode(object) {
        VL().as(object);
        return this[_getNode](object);
      }
    }
    (AvlTreeSet.new = function(opts) {
      let comparator = opts && 'comparator' in opts ? opts.comparator : null;
      this[_length] = 0;
      this[_root] = null;
      this[_modCount] = 0;
      AvlTreeSet.__proto__.__.call(this, comparator);
      ;
    }).prototype = AvlTreeSet.prototype;
    dart.addTypeTests(AvlTreeSet);
    AvlTreeSet.prototype[_is_AvlTreeSet_default] = true;
    dart.addTypeCaches(AvlTreeSet);
    dart.setMethodSignature(AvlTreeSet, () => ({
      __proto__: dart.getMethods(AvlTreeSet.__proto__),
      add: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [_getNode]: dart.fnType(dart.legacy(treeset.AvlNode$(dart.legacy(V))), [dart.legacy(V)]),
      [_rotateRight]: dart.fnType(dart.void, [dart.legacy(treeset.AvlNode$(dart.legacy(V)))]),
      [_rotateLeft]: dart.fnType(dart.void, [dart.legacy(treeset.AvlNode$(dart.legacy(V)))]),
      [_rotateRightLeft]: dart.fnType(dart.void, [dart.legacy(treeset.AvlNode$(dart.legacy(V)))]),
      [_rotateLeftRight]: dart.fnType(dart.void, [dart.legacy(treeset.AvlNode$(dart.legacy(V)))]),
      addAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      cast: dart.gFnType(T => [dart.legacy(treeset.AvlTreeSet$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(treeset.AvlTreeSet$(dart.legacy(T))), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [_removeNode]: dart.fnType(dart.void, [dart.legacy(treeset.AvlNode$(dart.legacy(V)))]),
      removeAll: dart.fnType(dart.void, [dart.legacy(core.Iterable)]),
      retainAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      lookup: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      nearest: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)], {nearestOption: dart.legacy(treeset.TreeSearch)}, {}),
      [_searchNearest]: dart.fnType(dart.legacy(treeset.AvlNode$(dart.legacy(V))), [dart.legacy(core.Object)], {option: dart.legacy(treeset.TreeSearch)}, {}),
      fromIterator: dart.fnType(dart.legacy(core.BidirectionalIterator$(dart.legacy(V))), [dart.legacy(core.Object)], {inclusive: dart.legacy(core.bool), reversed: dart.legacy(core.bool)}, {}),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      intersection: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      union: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Object)]),
      difference: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      getNode: dart.fnType(dart.legacy(treeset.AvlNode$(dart.legacy(V))), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(AvlTreeSet, () => ({
      __proto__: dart.getGetters(AvlTreeSet.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      iterator: dart.legacy(core.BidirectionalIterator$(dart.legacy(V))),
      [$iterator]: dart.legacy(core.BidirectionalIterator$(dart.legacy(V))),
      reverseIterator: dart.legacy(core.BidirectionalIterator$(dart.legacy(V)))
    }));
    dart.setLibraryUri(AvlTreeSet, L5);
    dart.setFieldSignature(AvlTreeSet, () => ({
      __proto__: dart.getFields(AvlTreeSet.__proto__),
      [_length]: dart.fieldType(dart.legacy(core.int)),
      [_root]: dart.fieldType(dart.legacy(treeset.AvlNode$(dart.legacy(V)))),
      [_modCount]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(AvlTreeSet, ['cast', 'contains']);
    dart.defineExtensionAccessors(AvlTreeSet, ['length', 'first', 'last', 'iterator']);
    return AvlTreeSet;
  });
  treeset.AvlTreeSet = treeset.AvlTreeSet$();
  dart.addTypeTests(treeset.AvlTreeSet, _is_AvlTreeSet_default);
  var _moveNext = dart.privateName(treeset, "_moveNext");
  var _movePrevious = dart.privateName(treeset, "_movePrevious");
  var _current = dart.privateName(treeset, "_current");
  var _modCountGuard = dart.privateName(treeset, "_modCountGuard");
  var _movePreviousNormal = dart.privateName(treeset, "_movePreviousNormal");
  var _moveNextNormal = dart.privateName(treeset, "_moveNextNormal");
  const _is__AvlTreeIterator_default = Symbol('_is__AvlTreeIterator_default');
  treeset._AvlTreeIterator$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VLAndVLToint = () => (VLAndVLToint = dart.constFn(dart.fnType(core.int, [VL(), VL()])))();
    var VLAndVLToLint = () => (VLAndVLToLint = dart.constFn(dart.legacy(VLAndVLToint())))();
    class _AvlTreeIterator extends core.Object {
      get current() {
        return this.state !== 0 || this[_current] == null ? null : this[_current].object;
      }
      moveNext() {
        return this[_moveNext]();
      }
      movePrevious() {
        return this[_movePrevious]();
      }
      [_moveNextNormal]() {
        if (this[_modCountGuard] != this.tree[_modCount]) {
          dart.throw(new core.ConcurrentModificationError.new(this.tree));
        }
        if (this.state === 1 || dart.test(this.tree.isEmpty)) return false;
        switch (this.state) {
          case -1:
          {
            this[_current] = this.tree[_root].minimumNode;
            this.state = 0;
            return true;
          }
          case 0:
          default:
          {
            this[_current] = this[_current].successor;
            if (this[_current] == null) {
              this.state = 1;
            }
            return this.state === 0;
          }
        }
      }
      [_movePreviousNormal]() {
        if (this[_modCountGuard] != this.tree[_modCount]) {
          dart.throw(new core.ConcurrentModificationError.new(this.tree));
        }
        if (this.state === -1 || dart.test(this.tree.isEmpty)) return false;
        switch (this.state) {
          case 1:
          {
            this[_current] = this.tree[_root].maximumNode;
            this.state = 0;
            return true;
          }
          case 0:
          default:
          {
            this[_current] = this[_current].predecessor;
            if (this[_current] == null) {
              this.state = -1;
            }
            return this.state === 0;
          }
        }
      }
    }
    (_AvlTreeIterator.__ = function(tree, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      let inclusive = opts && 'inclusive' in opts ? opts.inclusive : true;
      let anchorObject = opts && 'anchorObject' in opts ? opts.anchorObject : null;
      this[_moveNext] = null;
      this[_movePrevious] = null;
      this.state = null;
      this[_current] = null;
      this.tree = tree;
      this.reversed = reversed;
      this.inclusive = inclusive;
      this.anchorObject = anchorObject;
      this[_modCountGuard] = tree[_modCount];
      if (this.anchorObject == null || dart.test(this.tree.isEmpty)) {
        this.state = dart.test(this.reversed) ? 1 : -1;
        this[_moveNext] = dart.test(this.reversed) ? dart.bind(this, _movePreviousNormal) : dart.bind(this, _moveNextNormal);
        this[_movePrevious] = dart.test(this.reversed) ? dart.bind(this, _moveNextNormal) : dart.bind(this, _movePreviousNormal);
        return;
      }
      this.state = 0;
      this[_moveNext] = dart.fn(() => {
        let t2, t1, t0;
        this[_current] = this.tree[_searchNearest](this.anchorObject, {option: dart.test(this.reversed) ? treeset.TreeSearch.LESS_THAN : treeset.TreeSearch.GREATER_THAN});
        this[_moveNext] = dart.test(this.reversed) ? dart.bind(this, _movePreviousNormal) : dart.bind(this, _moveNextNormal);
        this[_movePrevious] = dart.test(this.reversed) ? dart.bind(this, _moveNextNormal) : dart.bind(this, _movePreviousNormal);
        if (this[_current] == null) {
          this.state = dart.test(this.reversed) ? -1 : 1;
        } else if ((t0 = this.tree, t1 = this[_current].object, t2 = this.anchorObject, VLAndVLToLint().as(t0.comparator)(t1, t2)) === 0 && !dart.test(this.inclusive)) {
          this[_moveNext]();
        }
        return this.state === 0;
      }, VoidToboolL());
      this[_movePrevious] = dart.fn(() => {
        let t2, t1, t0;
        this[_current] = this.tree[_searchNearest](this.anchorObject, {option: dart.test(this.reversed) ? treeset.TreeSearch.GREATER_THAN : treeset.TreeSearch.LESS_THAN});
        this[_moveNext] = dart.test(this.reversed) ? dart.bind(this, _movePreviousNormal) : dart.bind(this, _moveNextNormal);
        this[_movePrevious] = dart.test(this.reversed) ? dart.bind(this, _moveNextNormal) : dart.bind(this, _movePreviousNormal);
        if (this[_current] == null) {
          this.state = dart.test(this.reversed) ? 1 : -1;
        } else if ((t0 = this.tree, t1 = this[_current].object, t2 = this.anchorObject, VLAndVLToLint().as(t0.comparator)(t1, t2)) === 0 && !dart.test(this.inclusive)) {
          this[_movePrevious]();
        }
        return this.state === 0;
      }, VoidToboolL());
    }).prototype = _AvlTreeIterator.prototype;
    dart.addTypeTests(_AvlTreeIterator);
    _AvlTreeIterator.prototype[_is__AvlTreeIterator_default] = true;
    dart.addTypeCaches(_AvlTreeIterator);
    _AvlTreeIterator[dart.implements] = () => [core.BidirectionalIterator$(dart.legacy(V))];
    dart.setMethodSignature(_AvlTreeIterator, () => ({
      __proto__: dart.getMethods(_AvlTreeIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), []),
      movePrevious: dart.fnType(dart.legacy(core.bool), []),
      [_moveNextNormal]: dart.fnType(dart.legacy(core.bool), []),
      [_movePreviousNormal]: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_AvlTreeIterator, () => ({
      __proto__: dart.getGetters(_AvlTreeIterator.__proto__),
      current: dart.legacy(V)
    }));
    dart.setLibraryUri(_AvlTreeIterator, L5);
    dart.setFieldSignature(_AvlTreeIterator, () => ({
      __proto__: dart.getFields(_AvlTreeIterator.__proto__),
      reversed: dart.finalFieldType(dart.legacy(core.bool)),
      tree: dart.finalFieldType(dart.legacy(treeset.AvlTreeSet$(dart.legacy(V)))),
      [_modCountGuard]: dart.finalFieldType(dart.legacy(core.int)),
      anchorObject: dart.finalFieldType(dart.legacy(V)),
      inclusive: dart.finalFieldType(dart.legacy(core.bool)),
      [_moveNext]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), []))),
      [_movePrevious]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), []))),
      state: dart.fieldType(dart.legacy(core.int)),
      [_current]: dart.fieldType(dart.legacy(treeset._TreeNode$(dart.legacy(V))))
    }));
    return _AvlTreeIterator;
  });
  treeset._AvlTreeIterator = treeset._AvlTreeIterator$();
  dart.defineLazy(treeset._AvlTreeIterator, {
    /*treeset._AvlTreeIterator.LEFT*/get LEFT() {
      return -1;
    },
    /*treeset._AvlTreeIterator.WALK*/get WALK() {
      return 0;
    },
    /*treeset._AvlTreeIterator.RIGHT*/get RIGHT() {
      return 1;
    }
  }, true);
  dart.addTypeTests(treeset._AvlTreeIterator, _is__AvlTreeIterator_default);
  const _is_AvlNode_default = Symbol('_is_AvlNode_default');
  var _left$ = dart.privateName(treeset, "AvlNode._left");
  var _right$ = dart.privateName(treeset, "AvlNode._right");
  var _parent$ = dart.privateName(treeset, "AvlNode._parent");
  treeset.AvlNode$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var AvlNodeOfVL = () => (AvlNodeOfVL = dart.constFn(treeset.AvlNode$(VL())))();
    var AvlNodeLOfVL = () => (AvlNodeLOfVL = dart.constFn(dart.legacy(AvlNodeOfVL())))();
    class AvlNode extends treeset._TreeNode$(dart.legacy(V)) {
      get [_left]() {
        return this[_left$];
      }
      set [_left](value) {
        this[_left$] = AvlNodeLOfVL().as(value);
      }
      get [_right]() {
        return this[_right$];
      }
      set [_right](value) {
        this[_right$] = AvlNodeLOfVL().as(value);
      }
      get [_parent]() {
        return this[_parent$];
      }
      set [_parent](value) {
        this[_parent$] = AvlNodeLOfVL().as(value);
      }
      get left() {
        return this[_left];
      }
      get right() {
        return this[_right];
      }
      get parent() {
        return this[_parent];
      }
      get balance() {
        return this[_balanceFactor];
      }
      toString() {
        return "(b:" + dart.str(this.balance) + " o: " + dart.str(this.object) + " l:" + dart.str(this.left != null) + " r:" + dart.str(this.right != null) + ")";
      }
    }
    (AvlNode.new = function(opts) {
      let object = opts && 'object' in opts ? opts.object : null;
      this[_left$] = null;
      this[_right$] = null;
      this[_parent$] = null;
      this[_balanceFactor] = 0;
      AvlNode.__proto__.new.call(this, {object: object});
      ;
    }).prototype = AvlNode.prototype;
    dart.addTypeTests(AvlNode);
    AvlNode.prototype[_is_AvlNode_default] = true;
    dart.addTypeCaches(AvlNode);
    dart.setMethodSignature(AvlNode, () => ({
      __proto__: dart.getMethods(AvlNode.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(AvlNode, () => ({
      __proto__: dart.getGetters(AvlNode.__proto__),
      left: dart.legacy(treeset.AvlNode$(dart.legacy(V))),
      right: dart.legacy(treeset.AvlNode$(dart.legacy(V))),
      parent: dart.legacy(treeset.AvlNode$(dart.legacy(V))),
      balance: dart.legacy(core.int)
    }));
    dart.setLibraryUri(AvlNode, L5);
    dart.setFieldSignature(AvlNode, () => ({
      __proto__: dart.getFields(AvlNode.__proto__),
      [_left]: dart.fieldType(dart.legacy(treeset.AvlNode$(dart.legacy(V)))),
      [_right]: dart.fieldType(dart.legacy(treeset.AvlNode$(dart.legacy(V)))),
      [_parent]: dart.fieldType(dart.legacy(treeset.AvlNode$(dart.legacy(V)))),
      [_balanceFactor]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(AvlNode, ['toString']);
    return AvlNode;
  });
  treeset.AvlNode = treeset.AvlNode$();
  dart.addTypeTests(treeset.AvlNode, _is_AvlNode_default);
  const _is_DelegatingList_default = Symbol('_is_DelegatingList_default');
  list.DelegatingList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var ListLOfEL = () => (ListLOfEL = dart.constFn(dart.legacy(ListOfEL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    class DelegatingList extends iterable.DelegatingIterable$(dart.legacy(E)) {
      _get(index) {
        return this.delegate[$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        EL().as(value);
        this.delegate[$_set](index, value);
        return value$;
      }
      ['+'](other) {
        ListLOfEL().as(other);
        return this.delegate[$plus](other);
      }
      add(value) {
        EL().as(value);
        return this.delegate[$add](value);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        return this.delegate[$addAll](iterable);
      }
      asMap() {
        return this.delegate[$asMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        return this.delegate[$clear]();
      }
      fillRange(start, end, fillValue = null) {
        EL().as(fillValue);
        return this.delegate[$fillRange](start, end, fillValue);
      }
      set first(element) {
        EL().as(element);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(0, element);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        return this.delegate[$getRange](start, end);
      }
      indexOf(element, start = 0) {
        EL().as(element);
        return this.delegate[$indexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this.delegate[$indexWhere](test, start);
      }
      insert(index, element) {
        EL().as(element);
        return this.delegate[$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableLOfEL().as(iterable);
        return this.delegate[$insertAll](index, iterable);
      }
      set last(element) {
        EL().as(element);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(dart.notNull(this.length) - 1, element);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start = null) {
        EL().as(element);
        return this.delegate[$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start = null) {
        return this.delegate[$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this.delegate[$length] = newLength;
      }
      get length() {
        return super.length;
      }
      remove(value) {
        return this.delegate[$remove](value);
      }
      removeAt(index) {
        return this.delegate[$removeAt](index);
      }
      removeLast() {
        return this.delegate[$removeLast]();
      }
      removeRange(start, end) {
        return this.delegate[$removeRange](start, end);
      }
      removeWhere(test) {
        return this.delegate[$removeWhere](test);
      }
      replaceRange(start, end, iterable) {
        IterableLOfEL().as(iterable);
        return this.delegate[$replaceRange](start, end, iterable);
      }
      retainWhere(test) {
        return this.delegate[$retainWhere](test);
      }
      get reversed() {
        return this.delegate[$reversed];
      }
      setAll(index, iterable) {
        IterableLOfEL().as(iterable);
        return this.delegate[$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount = 0) {
        IterableLOfEL().as(iterable);
        return this.delegate[$setRange](start, end, iterable, skipCount);
      }
      shuffle(random = null) {
        return this.delegate[$shuffle](random);
      }
      sort(compare = null) {
        return this.delegate[$sort](compare);
      }
      sublist(start, end = null) {
        return this.delegate[$sublist](start, end);
      }
    }
    (DelegatingList.new = function() {
      ;
    }).prototype = DelegatingList.prototype;
    DelegatingList.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingList);
    DelegatingList.prototype[_is_DelegatingList_default] = true;
    dart.addTypeCaches(DelegatingList);
    DelegatingList[dart.implements] = () => [core.List$(dart.legacy(E))];
    dart.setMethodSignature(DelegatingList, () => ({
      __proto__: dart.getMethods(DelegatingList.__proto__),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      '+': dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.Object)]),
      [$plus]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.Object)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(E))), []),
      [$asMap]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(E))), []),
      cast: dart.gFnType(T => [dart.legacy(list.DelegatingList$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(list.DelegatingList$(dart.legacy(T))), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      [$fillRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      getRange: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int), dart.legacy(core.int)]),
      [$getRange]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int), dart.legacy(core.int)]),
      indexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$indexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      indexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      [$indexWhere]: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      insert: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insert]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      insertAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      lastIndexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$lastIndexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      lastIndexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      [$lastIndexWhere]: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))], [dart.legacy(core.int)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAt: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$removeAt]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      removeLast: dart.fnType(dart.legacy(E), []),
      [$removeLast]: dart.fnType(dart.legacy(E), []),
      removeRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      [$removeRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      replaceRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      [$replaceRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$retainWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      setAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$setAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      setRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$setRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      shuffle: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      [$shuffle]: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      sort: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(E), dart.legacy(E)]))]),
      [$sort]: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(E), dart.legacy(E)]))]),
      sublist: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      [$sublist]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.int)], [dart.legacy(core.int)])
    }));
    dart.setGetterSignature(DelegatingList, () => ({
      __proto__: dart.getGetters(DelegatingList.__proto__),
      reversed: dart.legacy(core.Iterable$(dart.legacy(E))),
      [$reversed]: dart.legacy(core.Iterable$(dart.legacy(E)))
    }));
    dart.setSetterSignature(DelegatingList, () => ({
      __proto__: dart.getSetters(DelegatingList.__proto__),
      first: dart.legacy(core.Object),
      [$first]: dart.legacy(core.Object),
      last: dart.legacy(core.Object),
      [$last]: dart.legacy(core.Object),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(DelegatingList, L6);
    dart.defineExtensionMethods(DelegatingList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(DelegatingList, ['first', 'last', 'length', 'reversed']);
    return DelegatingList;
  });
  list.DelegatingList = list.DelegatingList$();
  dart.addTypeTests(list.DelegatingList, _is_DelegatingList_default);
  const _is_Multimap_default = Symbol('_is_Multimap_default');
  multimap.Multimap$ = dart.generic((K, V) => {
    class Multimap extends core.Object {
      static new() {
        return new (multimap.ListMultimap$(dart.legacy(K), dart.legacy(V))).new();
      }
    }
    (Multimap[dart.mixinNew] = function() {
    }).prototype = Multimap.prototype;
    dart.addTypeTests(Multimap);
    Multimap.prototype[_is_Multimap_default] = true;
    dart.addTypeCaches(Multimap);
    dart.setLibraryUri(Multimap, L7);
    return Multimap;
  });
  multimap.Multimap = multimap.Multimap$();
  dart.addTypeTests(multimap.Multimap, _is_Multimap_default);
  var _map$ = dart.privateName(multimap, "_map");
  var C4;
  var _create = dart.privateName(multimap, "_create");
  var _wrap = dart.privateName(multimap, "_wrap");
  var _add = dart.privateName(multimap, "_add");
  var _addAll = dart.privateName(multimap, "_addAll");
  var _remove = dart.privateName(multimap, "_remove");
  var _removeWhere = dart.privateName(multimap, "_removeWhere");
  var _clear = dart.privateName(multimap, "_clear");
  var _groupedValues = dart.privateName(multimap, "_groupedValues");
  const _is__BaseMultimap_default = Symbol('_is__BaseMultimap_default');
  multimap._BaseMultimap$ = dart.generic((K, V, C) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedMapOfKL$CL = () => (LinkedMapOfKL$CL = dart.constFn(_js_helper.LinkedMap$(KL(), CL())))();
    var MultimapOfKL$VL = () => (MultimapOfKL$VL = dart.constFn(multimap.Multimap$(KL(), VL())))();
    var MultimapLOfKL$VL = () => (MultimapLOfKL$VL = dart.constFn(dart.legacy(MultimapOfKL$VL())))();
    var _HashSetOfKL = () => (_HashSetOfKL = dart.constFn(collection._HashSet$(KL())))();
    var KLAndIterableLOfVLToNull = () => (KLAndIterableLOfVLToNull = dart.constFn(dart.fnType(core.Null, [KL(), IterableLOfVL()])))();
    var KLAndIterableLOfVLTovoid = () => (KLAndIterableLOfVLTovoid = dart.constFn(dart.fnType(dart.void, [KL(), IterableLOfVL()])))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var CL = () => (CL = dart.constFn(dart.legacy(C)))();
    var CLToCL = () => (CLToCL = dart.constFn(dart.fnType(CL(), [CL()])))();
    class _BaseMultimap extends core.Object {
      static _id(T, x) {
        return dart.legacy(T).as(x);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      containsKey(key) {
        return this[_map$][$keys][$contains](key);
      }
      contains(key, value) {
        let t0;
        return dart.equals((t0 = this[_map$][$_get](key), t0 == null ? null : t0[$contains](value)), true);
      }
      _get(key) {
        let t0;
        return this[_wrap](key, (t0 = this[_map$][$_get](key), t0 == null ? this[_create]() : t0));
      }
      add(key, value) {
        KL().as(key);
        VL().as(value);
        this[_map$][$putIfAbsent](key, dart.bind(this, _create));
        this[_add](this[_map$][$_get](key), value);
      }
      addValues(key, values) {
        KL().as(key);
        IterableLOfVL().as(values);
        this[_map$][$putIfAbsent](key, dart.bind(this, _create));
        this[_addAll](this[_map$][$_get](key), values);
      }
      addAll(other) {
        MultimapLOfKL$VL().as(other);
        return other.forEachKey(dart.bind(this, 'addValues'));
      }
      remove(key, value) {
        VL().as(value);
        if (!dart.test(this[_map$][$containsKey](key))) return false;
        let removed = this[_remove](this[_map$][$_get](key), value);
        if (dart.test(removed) && dart.test(this[_map$][$_get](key)[$isEmpty])) this[_map$][$remove](key);
        return removed;
      }
      removeAll(key) {
        let values = this[_map$][$remove](key);
        let retValues = this[_create]();
        if (values != null) {
          dart.dsend(retValues, 'addAll', [values]);
          dart.dsend(values, 'clear', []);
        }
        return IterableLOfVL().as(retValues);
      }
      removeWhere(predicate) {
        let emptyKeys = new (_HashSetOfKL()).new();
        this[_map$][$forEach](dart.fn((key, values) => {
          this[_removeWhere](CL().as(values), key, predicate);
          if (dart.test(this[_map$][$_get](key)[$isEmpty])) emptyKeys.add(key);
        }, KLAndIterableLOfVLToNull()));
        emptyKeys[$forEach](dart.bind(this[_map$], $remove));
      }
      clear() {
        this[_map$][$forEach](dart.fn((key, value) => this[_clear](CL().as(value)), KLAndIterableLOfVLTovoid()));
        this[_map$][$clear]();
      }
      forEachKey(f) {
        return this[_map$][$forEach](f);
      }
      forEach(f) {
        this[_map$][$forEach](dart.fn((key, values) => {
          for (let value of values) {
            f(key, value);
          }
        }, KLAndIterableLOfVLToNull()));
      }
      get keys() {
        return this[_map$][$keys];
      }
      get values() {
        return this[_map$][$values][$expand](VL(), dart.fn(x => x, CLToCL()));
      }
      get [_groupedValues]() {
        return this[_map$][$values];
      }
      get length() {
        return this[_map$][$length];
      }
      get isEmpty() {
        return this[_map$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$][$isNotEmpty];
      }
    }
    (_BaseMultimap.new = function() {
      this[_map$] = new (LinkedMapOfKL$CL()).new();
      ;
    }).prototype = _BaseMultimap.prototype;
    (_BaseMultimap.fromIterable = function(iterable, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      this[_map$] = new (LinkedMapOfKL$CL()).new();
      key == null ? key = dart.gbind(C4 || CT.C4, KL()) : null;
      value == null ? value = dart.gbind(C4 || CT.C4, VL()) : null;
      for (let element of iterable) {
        this.add(key(element), value(element));
      }
    }).prototype = _BaseMultimap.prototype;
    dart.addTypeTests(_BaseMultimap);
    _BaseMultimap.prototype[_is__BaseMultimap_default] = true;
    dart.addTypeCaches(_BaseMultimap);
    _BaseMultimap[dart.implements] = () => [multimap.Multimap$(dart.legacy(K), dart.legacy(V))];
    dart.setMethodSignature(_BaseMultimap, () => ({
      __proto__: dart.getMethods(_BaseMultimap.__proto__),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      _get: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.Object)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addValues: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      clear: dart.fnType(dart.void, []),
      forEachKey: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(C)]))]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))])
    }));
    dart.setGetterSignature(_BaseMultimap, () => ({
      __proto__: dart.getGetters(_BaseMultimap.__proto__),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      values: dart.legacy(core.Iterable$(dart.legacy(V))),
      [_groupedValues]: dart.legacy(core.Iterable$(dart.legacy(core.Iterable$(dart.legacy(V))))),
      length: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(_BaseMultimap, L7);
    dart.setFieldSignature(_BaseMultimap, () => ({
      __proto__: dart.getFields(_BaseMultimap.__proto__),
      [_map$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(C))))
    }));
    return _BaseMultimap;
  });
  multimap._BaseMultimap = multimap._BaseMultimap$();
  dart.addTypeTests(multimap._BaseMultimap, _is__BaseMultimap_default);
  const _is_ListMultimap_default = Symbol('_is_ListMultimap_default');
  multimap.ListMultimap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _WrappedMapOfKL$VL$ListLOfVL = () => (_WrappedMapOfKL$VL$ListLOfVL = dart.constFn(multimap._WrappedMap$(KL(), VL(), ListLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var JSArrayOfVL = () => (JSArrayOfVL = dart.constFn(_interceptors.JSArray$(VL())))();
    var VLToboolL = () => (VLToboolL = dart.constFn(dart.fnType(boolL(), [VL()])))();
    var _WrappedListOfObjectL$VL = () => (_WrappedListOfObjectL$VL = dart.constFn(multimap._WrappedList$(ObjectL(), VL())))();
    var ListOfVL = () => (ListOfVL = dart.constFn(core.List$(VL())))();
    var ListLOfVL = () => (ListLOfVL = dart.constFn(dart.legacy(ListOfVL())))();
    class ListMultimap extends multimap._BaseMultimap$(dart.legacy(K), dart.legacy(V), dart.legacy(core.List$(dart.legacy(V)))) {
      [_create]() {
        return JSArrayOfVL().of([]);
      }
      [_add](iterable, value) {
        iterable[$add](value);
      }
      [_addAll](iterable, value) {
        return iterable[$addAll](value);
      }
      [_clear](iterable) {
        return iterable[$clear]();
      }
      [_remove](iterable, value) {
        return iterable[$remove](value);
      }
      [_removeWhere](iterable, key, predicate) {
        return iterable[$removeWhere](dart.fn(value => predicate(key, value), VLToboolL()));
      }
      [_wrap](key, iterable) {
        return new (_WrappedListOfObjectL$VL()).new(this[_map$], key, iterable);
      }
      _get(key) {
        return ListLOfVL().as(super._get(key));
      }
      removeAll(key) {
        return ListLOfVL().as(super.removeAll(key));
      }
      asMap() {
        return new (_WrappedMapOfKL$VL$ListLOfVL()).new(this);
      }
    }
    (ListMultimap.new = function() {
      ListMultimap.__proto__.new.call(this);
      ;
    }).prototype = ListMultimap.prototype;
    (ListMultimap.fromIterable = function(iterable, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      ListMultimap.__proto__.fromIterable.call(this, iterable, {key: key, value: value});
      ;
    }).prototype = ListMultimap.prototype;
    dart.addTypeTests(ListMultimap);
    ListMultimap.prototype[_is_ListMultimap_default] = true;
    dart.addTypeCaches(ListMultimap);
    dart.setMethodSignature(ListMultimap, () => ({
      __proto__: dart.getMethods(ListMultimap.__proto__),
      [_create]: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), []),
      [_add]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(V))), dart.legacy(V)]),
      [_addAll]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(V))), dart.legacy(core.Iterable$(dart.legacy(V)))]),
      [_clear]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(V)))]),
      [_remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.List$(dart.legacy(V))), dart.legacy(core.Object)]),
      [_removeWhere]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(V))), dart.legacy(K), dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [_wrap]: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.Object), dart.legacy(core.List$(dart.legacy(V)))]),
      _get: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.Object)]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(core.List$(dart.legacy(V))))), [])
    }));
    dart.setLibraryUri(ListMultimap, L7);
    return ListMultimap;
  });
  multimap.ListMultimap = multimap.ListMultimap$();
  dart.addTypeTests(multimap.ListMultimap, _is_ListMultimap_default);
  const _is_SetMultimap_default = Symbol('_is_SetMultimap_default');
  multimap.SetMultimap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _WrappedMapOfKL$VL$SetLOfVL = () => (_WrappedMapOfKL$VL$SetLOfVL = dart.constFn(multimap._WrappedMap$(KL(), VL(), SetLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var _HashSetOfVL = () => (_HashSetOfVL = dart.constFn(collection._HashSet$(VL())))();
    var VLToboolL = () => (VLToboolL = dart.constFn(dart.fnType(boolL(), [VL()])))();
    var _WrappedSetOfObjectL$VL = () => (_WrappedSetOfObjectL$VL = dart.constFn(multimap._WrappedSet$(ObjectL(), VL())))();
    var SetOfVL = () => (SetOfVL = dart.constFn(core.Set$(VL())))();
    var SetLOfVL = () => (SetLOfVL = dart.constFn(dart.legacy(SetOfVL())))();
    class SetMultimap extends multimap._BaseMultimap$(dart.legacy(K), dart.legacy(V), dart.legacy(core.Set$(dart.legacy(V)))) {
      [_create]() {
        return new (_HashSetOfVL()).new();
      }
      [_add](iterable, value) {
        iterable.add(value);
      }
      [_addAll](iterable, value) {
        return iterable.addAll(value);
      }
      [_clear](iterable) {
        return iterable.clear();
      }
      [_remove](iterable, value) {
        return iterable.remove(value);
      }
      [_removeWhere](iterable, key, predicate) {
        return iterable.removeWhere(dart.fn(value => predicate(key, value), VLToboolL()));
      }
      [_wrap](key, iterable) {
        return new (_WrappedSetOfObjectL$VL()).new(this[_map$], key, iterable);
      }
      _get(key) {
        return SetLOfVL().as(super._get(key));
      }
      removeAll(key) {
        return SetLOfVL().as(super.removeAll(key));
      }
      asMap() {
        return new (_WrappedMapOfKL$VL$SetLOfVL()).new(this);
      }
    }
    (SetMultimap.new = function() {
      SetMultimap.__proto__.new.call(this);
      ;
    }).prototype = SetMultimap.prototype;
    (SetMultimap.fromIterable = function(iterable, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      SetMultimap.__proto__.fromIterable.call(this, iterable, {key: key, value: value});
      ;
    }).prototype = SetMultimap.prototype;
    dart.addTypeTests(SetMultimap);
    SetMultimap.prototype[_is_SetMultimap_default] = true;
    dart.addTypeCaches(SetMultimap);
    dart.setMethodSignature(SetMultimap, () => ({
      __proto__: dart.getMethods(SetMultimap.__proto__),
      [_create]: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), []),
      [_add]: dart.fnType(dart.void, [dart.legacy(core.Set$(dart.legacy(V))), dart.legacy(V)]),
      [_addAll]: dart.fnType(dart.void, [dart.legacy(core.Set$(dart.legacy(V))), dart.legacy(core.Iterable$(dart.legacy(V)))]),
      [_clear]: dart.fnType(dart.void, [dart.legacy(core.Set$(dart.legacy(V)))]),
      [_remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Set$(dart.legacy(V))), dart.legacy(core.Object)]),
      [_removeWhere]: dart.fnType(dart.void, [dart.legacy(core.Set$(dart.legacy(V))), dart.legacy(K), dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [_wrap]: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Object), dart.legacy(core.Iterable$(dart.legacy(V)))]),
      _get: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Object)]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(core.Set$(dart.legacy(V))))), [])
    }));
    dart.setLibraryUri(SetMultimap, L7);
    return SetMultimap;
  });
  multimap.SetMultimap = multimap.SetMultimap$();
  dart.addTypeTests(multimap.SetMultimap, _is_SetMultimap_default);
  var _multimap$ = dart.privateName(multimap, "_multimap");
  const _is__WrappedMap_default = Symbol('_is__WrappedMap_default');
  multimap._WrappedMap$ = dart.generic((K, V, C) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$CL = () => (MapOfKL$CL = dart.constFn(core.Map$(KL(), CL())))();
    var MapLOfKL$CL = () => (MapLOfKL$CL = dart.constFn(dart.legacy(MapOfKL$CL())))();
    var MapEntryOfKL$CL = () => (MapEntryOfKL$CL = dart.constFn(core.MapEntry$(KL(), CL())))();
    var MapEntryLOfKL$CL = () => (MapEntryLOfKL$CL = dart.constFn(dart.legacy(MapEntryOfKL$CL())))();
    var IterableOfMapEntryLOfKL$CL = () => (IterableOfMapEntryLOfKL$CL = dart.constFn(core.Iterable$(MapEntryLOfKL$CL())))();
    var IterableLOfMapEntryLOfKL$CL = () => (IterableLOfMapEntryLOfKL$CL = dart.constFn(dart.legacy(IterableOfMapEntryLOfKL$CL())))();
    var KLAndCLToCL = () => (KLAndCLToCL = dart.constFn(dart.fnType(CL(), [KL(), CL()])))();
    var KLAndCLToLCL = () => (KLAndCLToLCL = dart.constFn(dart.legacy(KLAndCLToCL())))();
    var JSArrayOfKL = () => (JSArrayOfKL = dart.constFn(_interceptors.JSArray$(KL())))();
    var CL = () => (CL = dart.constFn(dart.legacy(C)))();
    var VoidToCL = () => (VoidToCL = dart.constFn(dart.fnType(CL(), [])))();
    var VoidToLCL = () => (VoidToLCL = dart.constFn(dart.legacy(VoidToCL())))();
    var IterableOfCL = () => (IterableOfCL = dart.constFn(core.Iterable$(CL())))();
    var IterableLOfCL = () => (IterableLOfCL = dart.constFn(dart.legacy(IterableOfCL())))();
    var CLToCL = () => (CLToCL = dart.constFn(dart.fnType(CL(), [CL()])))();
    var CLToLCL = () => (CLToLCL = dart.constFn(dart.legacy(CLToCL())))();
    class _WrappedMap extends core.Object {
      _get(key) {
        return CL().as(this[_multimap$]._get(key));
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        CL().as(value);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
        return value$;
      }
      addAll(other) {
        MapLOfKL$CL().as(other);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLCL().as(ifAbsent);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
      }
      clear() {
        return this[_multimap$].clear();
      }
      containsKey(key) {
        return this[_multimap$].containsKey(key);
      }
      containsValue(value) {
        return this[_multimap$].containsValue(value);
      }
      forEach(f) {
        return this[_multimap$].forEachKey(f);
      }
      get isEmpty() {
        return this[_multimap$].isEmpty;
      }
      get isNotEmpty() {
        return this[_multimap$].isNotEmpty;
      }
      get keys() {
        return this[_multimap$].keys;
      }
      get length() {
        return this[_multimap$].length;
      }
      remove(key) {
        return CL().as(this[_multimap$].removeAll(key));
      }
      get values() {
        return IterableLOfCL().as(this[_multimap$][_groupedValues]);
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      get entries() {
        return this[_multimap$][_map$][$entries];
      }
      addEntries(entries) {
        IterableLOfMapEntryLOfKL$CL().as(entries);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
      }
      map(K2, C2, transform) {
        return this[_multimap$][_map$][$map](dart.legacy(K2), dart.legacy(C2), transform);
      }
      update(key, update, opts) {
        KL().as(key);
        CLToLCL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLCL().as(ifAbsent);
        dart.throw(new core.UnsupportedError.new("Update unsupported on map view"));
      }
      updateAll(update) {
        KLAndCLToLCL().as(update);
        dart.throw(new core.UnsupportedError.new("Update unsupported on map view"));
      }
      removeWhere(test) {
        let keysToRemove = JSArrayOfKL().of([]);
        for (let key of this.keys) {
          if (dart.test(test(key, this._get(key)))) keysToRemove[$add](key);
        }
        keysToRemove[$forEach](dart.bind(this[_multimap$], 'removeAll'));
      }
    }
    (_WrappedMap.new = function(_multimap) {
      this[_multimap$] = _multimap;
      ;
    }).prototype = _WrappedMap.prototype;
    _WrappedMap.prototype[dart.isMap] = true;
    dart.addTypeTests(_WrappedMap);
    _WrappedMap.prototype[_is__WrappedMap_default] = true;
    dart.addTypeCaches(_WrappedMap);
    _WrappedMap[dart.implements] = () => [core.Map$(dart.legacy(K), dart.legacy(C))];
    dart.setMethodSignature(_WrappedMap, () => ({
      __proto__: dart.getMethods(_WrappedMap.__proto__),
      _get: dart.fnType(dart.legacy(C), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(C), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      putIfAbsent: dart.fnType(dart.legacy(C), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$putIfAbsent]: dart.fnType(dart.legacy(C), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(C)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(C)]))]),
      remove: dart.fnType(dart.legacy(C), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(C), [dart.legacy(core.Object)]),
      cast: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      [$cast]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      map: dart.gFnType((K2, C2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(C2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(C2))), [dart.legacy(K), dart.legacy(C)]))]]),
      [$map]: dart.gFnType((K2, C2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(C2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(C2))), [dart.legacy(K), dart.legacy(C)]))]]),
      update: dart.fnType(dart.legacy(C), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      [$update]: dart.fnType(dart.legacy(C), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(C)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(C)]))])
    }));
    dart.setGetterSignature(_WrappedMap, () => ({
      __proto__: dart.getGetters(_WrappedMap.__proto__),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      [$keys]: dart.legacy(core.Iterable$(dart.legacy(K))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      values: dart.legacy(core.Iterable$(dart.legacy(C))),
      [$values]: dart.legacy(core.Iterable$(dart.legacy(C))),
      entries: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(C))))),
      [$entries]: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(C)))))
    }));
    dart.setLibraryUri(_WrappedMap, L7);
    dart.setFieldSignature(_WrappedMap, () => ({
      __proto__: dart.getFields(_WrappedMap.__proto__),
      [_multimap$]: dart.finalFieldType(dart.legacy(multimap._BaseMultimap$(dart.legacy(K), dart.legacy(V), dart.legacy(C))))
    }));
    dart.defineExtensionMethods(_WrappedMap, [
      '_get',
      '_set',
      'addAll',
      'putIfAbsent',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'remove',
      'cast',
      'addEntries',
      'map',
      'update',
      'updateAll',
      'removeWhere'
    ]);
    dart.defineExtensionAccessors(_WrappedMap, [
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values',
      'entries'
    ]);
    return _WrappedMap;
  });
  multimap._WrappedMap = multimap._WrappedMap$();
  dart.addTypeTests(multimap._WrappedMap, _is__WrappedMap_default);
  var _key$ = dart.privateName(multimap, "_key");
  var _delegate$ = dart.privateName(multimap, "_delegate");
  var _addToMap = dart.privateName(multimap, "_addToMap");
  var _syncDelegate = dart.privateName(multimap, "_syncDelegate");
  const _is__WrappedIterable_default = Symbol('_is__WrappedIterable_default');
  multimap._WrappedIterable$ = dart.generic((K, V, C) => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    var VLAndVLToVL = () => (VLAndVLToVL = dart.constFn(dart.fnType(VL(), [VL(), VL()])))();
    var VLAndVLToLVL = () => (VLAndVLToLVL = dart.constFn(dart.legacy(VLAndVLToVL())))();
    class _WrappedIterable extends core.Object {
      [_addToMap]() {
        let t2, t1, t0;
        t0 = this[_map$];
        t1 = this[_key$];
        t2 = this[_delegate$];
        t0[$_set](t1, t2);
        return t2;
      }
      [_syncDelegate]() {
        if (dart.test(this[_delegate$][$isEmpty])) {
          let updated = this[_map$][$_get](this[_key$]);
          if (updated != null) {
            this[_delegate$] = updated;
          }
        }
      }
      any(test) {
        this[_syncDelegate]();
        return this[_delegate$][$any](test);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      contains(element) {
        this[_syncDelegate]();
        return this[_delegate$][$contains](element);
      }
      elementAt(index) {
        this[_syncDelegate]();
        return this[_delegate$][$elementAt](index);
      }
      every(test) {
        this[_syncDelegate]();
        return this[_delegate$][$every](test);
      }
      expand(T, f) {
        this[_syncDelegate]();
        return this[_delegate$][$expand](dart.legacy(T), f);
      }
      get first() {
        this[_syncDelegate]();
        return this[_delegate$][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLVL().as(orElse);
        this[_syncDelegate]();
        return this[_delegate$][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        this[_syncDelegate]();
        return this[_delegate$][$fold](dart.legacy(T), initialValue, combine);
      }
      followedBy(other) {
        IterableLOfVL().as(other);
        this[_syncDelegate]();
        return this[_delegate$][$followedBy](other);
      }
      forEach(f) {
        this[_syncDelegate]();
        this[_delegate$][$forEach](f);
      }
      get isEmpty() {
        this[_syncDelegate]();
        return this[_delegate$][$isEmpty];
      }
      get isNotEmpty() {
        this[_syncDelegate]();
        return this[_delegate$][$isNotEmpty];
      }
      get iterator() {
        this[_syncDelegate]();
        return this[_delegate$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        this[_syncDelegate]();
        return this[_delegate$][$join](separator);
      }
      get last() {
        this[_syncDelegate]();
        return this[_delegate$][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLVL().as(orElse);
        this[_syncDelegate]();
        return this[_delegate$][$lastWhere](test, {orElse: orElse});
      }
      get length() {
        this[_syncDelegate]();
        return this[_delegate$][$length];
      }
      map(T, f) {
        this[_syncDelegate]();
        return this[_delegate$][$map](dart.legacy(T), f);
      }
      reduce(combine) {
        VLAndVLToLVL().as(combine);
        this[_syncDelegate]();
        return this[_delegate$][$reduce](combine);
      }
      get single() {
        this[_syncDelegate]();
        return this[_delegate$][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLVL().as(orElse);
        this[_syncDelegate]();
        return this[_delegate$][$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        this[_syncDelegate]();
        return this[_delegate$][$skip](n);
      }
      skipWhile(test) {
        this[_syncDelegate]();
        return this[_delegate$][$skipWhile](test);
      }
      take(n) {
        this[_syncDelegate]();
        return this[_delegate$][$take](n);
      }
      takeWhile(test) {
        this[_syncDelegate]();
        return this[_delegate$][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_syncDelegate]();
        return this[_delegate$][$toList]({growable: growable});
      }
      toSet() {
        this[_syncDelegate]();
        return this[_delegate$][$toSet]();
      }
      toString() {
        this[_syncDelegate]();
        return dart.toString(this[_delegate$]);
      }
      where(test) {
        this[_syncDelegate]();
        return this[_delegate$][$where](test);
      }
      whereType(T) {
        dart.throw(new core.UnimplementedError.new("whereType"));
      }
    }
    (_WrappedIterable.new = function(_map, _key, _delegate) {
      this[_map$] = _map;
      this[_key$] = _key;
      this[_delegate$] = _delegate;
      ;
    }).prototype = _WrappedIterable.prototype;
    _WrappedIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(_WrappedIterable);
    _WrappedIterable.prototype[_is__WrappedIterable_default] = true;
    dart.addTypeCaches(_WrappedIterable);
    _WrappedIterable[dart.implements] = () => [core.Iterable$(dart.legacy(V))];
    dart.setMethodSignature(_WrappedIterable, () => ({
      __proto__: dart.getMethods(_WrappedIterable.__proto__),
      [_addToMap]: dart.fnType(dart.void, []),
      [_syncDelegate]: dart.fnType(dart.void, []),
      any: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$any]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      cast: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      elementAt: dart.fnType(dart.legacy(V), [dart.legacy(core.int)]),
      [$elementAt]: dart.fnType(dart.legacy(V), [dart.legacy(core.int)]),
      every: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$every]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      expand: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(V)]))]]),
      [$expand]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(V)]))]]),
      firstWhere: dart.fnType(dart.legacy(V), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$firstWhere]: dart.fnType(dart.legacy(V), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], {orElse: dart.legacy(core.Object)}, {}),
      fold: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(V)]))]]),
      [$fold]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T), dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(V)]))]]),
      followedBy: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.Object)]),
      [$followedBy]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(V)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(V)]))]),
      join: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      [$join]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      lastWhere: dart.fnType(dart.legacy(V), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$lastWhere]: dart.fnType(dart.legacy(V), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], {orElse: dart.legacy(core.Object)}, {}),
      map: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(V)]))]]),
      [$map]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(V)]))]]),
      reduce: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$reduce]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      singleWhere: dart.fnType(dart.legacy(V), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$singleWhere]: dart.fnType(dart.legacy(V), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], {orElse: dart.legacy(core.Object)}, {}),
      skip: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.int)]),
      [$skip]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$skipWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      take: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.int)]),
      [$take]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$takeWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [], {growable: dart.legacy(core.bool)}, {}),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), []),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      where: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$where]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      whereType: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []]),
      [$whereType]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), []])
    }));
    dart.setGetterSignature(_WrappedIterable, () => ({
      __proto__: dart.getGetters(_WrappedIterable.__proto__),
      first: dart.legacy(V),
      [$first]: dart.legacy(V),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      iterator: dart.legacy(core.Iterator$(dart.legacy(V))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(V))),
      last: dart.legacy(V),
      [$last]: dart.legacy(V),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      single: dart.legacy(V),
      [$single]: dart.legacy(V)
    }));
    dart.setLibraryUri(_WrappedIterable, L7);
    dart.setFieldSignature(_WrappedIterable, () => ({
      __proto__: dart.getFields(_WrappedIterable.__proto__),
      [_key$]: dart.finalFieldType(dart.legacy(K)),
      [_map$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(C)))),
      [_delegate$]: dart.fieldType(dart.legacy(C))
    }));
    dart.defineExtensionMethods(_WrappedIterable, [
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
      'toString',
      'where',
      'whereType'
    ]);
    dart.defineExtensionAccessors(_WrappedIterable, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return _WrappedIterable;
  });
  multimap._WrappedIterable = multimap._WrappedIterable$();
  dart.addTypeTests(multimap._WrappedIterable, _is__WrappedIterable_default);
  const _is__WrappedList_default = Symbol('_is__WrappedList_default');
  multimap._WrappedList$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$ListLOfVL = () => (MapOfKL$ListLOfVL = dart.constFn(core.Map$(KL(), ListLOfVL())))();
    var MapLOfKL$ListLOfVL = () => (MapLOfKL$ListLOfVL = dart.constFn(dart.legacy(MapOfKL$ListLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var ListOfVL = () => (ListOfVL = dart.constFn(core.List$(VL())))();
    var ListLOfVL = () => (ListLOfVL = dart.constFn(dart.legacy(ListOfVL())))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    class _WrappedList extends multimap._WrappedIterable$(dart.legacy(K), dart.legacy(V), dart.legacy(core.List$(dart.legacy(V)))) {
      _get(index) {
        return this.elementAt(index);
      }
      _set(index, value$) {
        let value = value$;
        VL().as(value);
        this[_syncDelegate]();
        this[_delegate$][$_set](index, value);
        return value$;
      }
      ['+'](other) {
        ListLOfVL().as(other);
        this[_syncDelegate]();
        return this[_delegate$][$plus](other);
      }
      add(value) {
        VL().as(value);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$add](value);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      addAll(iterable) {
        IterableLOfVL().as(iterable);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$addAll](iterable);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      asMap() {
        this[_syncDelegate]();
        return this[_delegate$][$asMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_syncDelegate]();
        this[_delegate$][$clear]();
        this[_map$][$remove](this[_key$]);
      }
      fillRange(start, end, fillValue = null) {
        VL().as(fillValue);
        this[_syncDelegate]();
        this[_delegate$][$fillRange](start, end, fillValue);
      }
      set first(value) {
        VL().as(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(0, value);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        this[_syncDelegate]();
        return this[_delegate$][$getRange](start, end);
      }
      indexOf(element, start = 0) {
        VL().as(element);
        this[_syncDelegate]();
        return this[_delegate$][$indexOf](element, start);
      }
      indexWhere(test, start = 0) {
        this[_syncDelegate]();
        return this[_delegate$][$indexWhere](test, start);
      }
      insert(index, element) {
        VL().as(element);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$insert](index, element);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      insertAll(index, iterable) {
        IterableLOfVL().as(iterable);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$insertAll](index, iterable);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      set last(value) {
        VL().as(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(dart.notNull(this.length) - 1, value);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start = null) {
        VL().as(element);
        this[_syncDelegate]();
        return this[_delegate$][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start = null) {
        this[_syncDelegate]();
        return this[_delegate$][$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$length] = newLength;
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      get length() {
        return super.length;
      }
      remove(value) {
        this[_syncDelegate]();
        let removed = this[_delegate$][$remove](value);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeAt(index) {
        this[_syncDelegate]();
        let removed = this[_delegate$][$removeAt](index);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeLast() {
        this[_syncDelegate]();
        let removed = this[_delegate$][$removeLast]();
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeRange(start, end) {
        this[_syncDelegate]();
        this[_delegate$][$removeRange](start, end);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      removeWhere(test) {
        this[_syncDelegate]();
        this[_delegate$][$removeWhere](test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      replaceRange(start, end, iterable) {
        IterableLOfVL().as(iterable);
        this[_syncDelegate]();
        this[_delegate$][$replaceRange](start, end, iterable);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retainWhere(test) {
        this[_syncDelegate]();
        this[_delegate$][$retainWhere](test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      get reversed() {
        this[_syncDelegate]();
        return this[_delegate$][$reversed];
      }
      setAll(index, iterable) {
        IterableLOfVL().as(iterable);
        this[_syncDelegate]();
        this[_delegate$][$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount = 0) {
        IterableLOfVL().as(iterable);
        this[_syncDelegate]();
      }
      shuffle(random = null) {
        this[_syncDelegate]();
        this[_delegate$][$shuffle](random);
      }
      sort(compare = null) {
        this[_syncDelegate]();
        this[_delegate$][$sort](compare);
      }
      sublist(start, end = null) {
        this[_syncDelegate]();
        return this[_delegate$][$sublist](start, end);
      }
    }
    (_WrappedList.new = function(map, key, delegate) {
      _WrappedList.__proto__.new.call(this, MapLOfKL$ListLOfVL().as(map), key, delegate);
      ;
    }).prototype = _WrappedList.prototype;
    _WrappedList.prototype[dart.isList] = true;
    dart.addTypeTests(_WrappedList);
    _WrappedList.prototype[_is__WrappedList_default] = true;
    dart.addTypeCaches(_WrappedList);
    _WrappedList[dart.implements] = () => [core.List$(dart.legacy(V))];
    dart.setMethodSignature(_WrappedList, () => ({
      __proto__: dart.getMethods(_WrappedList.__proto__),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      '+': dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.Object)]),
      [$plus]: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.Object)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      asMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(V))), []),
      [$asMap]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(V))), []),
      cast: dart.gFnType(T => [dart.legacy(core.List$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.List$(dart.legacy(T))), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      [$fillRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      getRange: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.int), dart.legacy(core.int)]),
      [$getRange]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(V))), [dart.legacy(core.int), dart.legacy(core.int)]),
      indexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$indexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      indexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], [dart.legacy(core.int)]),
      [$indexWhere]: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], [dart.legacy(core.int)]),
      insert: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insert]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      insertAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      lastIndexOf: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$lastIndexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)], [dart.legacy(core.int)]),
      lastIndexWhere: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], [dart.legacy(core.int)]),
      [$lastIndexWhere]: dart.fnType(dart.legacy(core.int), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))], [dart.legacy(core.int)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAt: dart.fnType(dart.legacy(V), [dart.legacy(core.int)]),
      [$removeAt]: dart.fnType(dart.legacy(V), [dart.legacy(core.int)]),
      removeLast: dart.fnType(dart.legacy(V), []),
      [$removeLast]: dart.fnType(dart.legacy(V), []),
      removeRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      [$removeRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      replaceRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      [$replaceRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      [$retainWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      setAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$setAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      setRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$setRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      shuffle: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      [$shuffle]: dart.fnType(dart.void, [], [dart.legacy(math.Random)]),
      sort: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(V), dart.legacy(V)]))]),
      [$sort]: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(V), dart.legacy(V)]))]),
      sublist: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      [$sublist]: dart.fnType(dart.legacy(core.List$(dart.legacy(V))), [dart.legacy(core.int)], [dart.legacy(core.int)])
    }));
    dart.setGetterSignature(_WrappedList, () => ({
      __proto__: dart.getGetters(_WrappedList.__proto__),
      reversed: dart.legacy(core.Iterable$(dart.legacy(V))),
      [$reversed]: dart.legacy(core.Iterable$(dart.legacy(V)))
    }));
    dart.setSetterSignature(_WrappedList, () => ({
      __proto__: dart.getSetters(_WrappedList.__proto__),
      first: dart.legacy(core.Object),
      [$first]: dart.legacy(core.Object),
      last: dart.legacy(core.Object),
      [$last]: dart.legacy(core.Object),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(_WrappedList, L7);
    dart.defineExtensionMethods(_WrappedList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_WrappedList, ['first', 'last', 'length', 'reversed']);
    return _WrappedList;
  });
  multimap._WrappedList = multimap._WrappedList$();
  dart.addTypeTests(multimap._WrappedList, _is__WrappedList_default);
  const _is__WrappedSet_default = Symbol('_is__WrappedSet_default');
  multimap._WrappedSet$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var MapOfKL$SetLOfVL = () => (MapOfKL$SetLOfVL = dart.constFn(core.Map$(KL(), SetLOfVL())))();
    var MapLOfKL$SetLOfVL = () => (MapLOfKL$SetLOfVL = dart.constFn(dart.legacy(MapOfKL$SetLOfVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var SetOfVL = () => (SetOfVL = dart.constFn(core.Set$(VL())))();
    var SetLOfVL = () => (SetLOfVL = dart.constFn(dart.legacy(SetOfVL())))();
    var IterableOfVL = () => (IterableOfVL = dart.constFn(core.Iterable$(VL())))();
    var IterableLOfVL = () => (IterableLOfVL = dart.constFn(dart.legacy(IterableOfVL())))();
    class _WrappedSet extends multimap._WrappedIterable$(dart.legacy(K), dart.legacy(V), dart.legacy(core.Set$(dart.legacy(V)))) {
      add(value) {
        VL().as(value);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        let wasAdded = this[_delegate$].add(value);
        if (dart.test(wasEmpty)) this[_addToMap]();
        return wasAdded;
      }
      addAll(elements) {
        IterableLOfVL().as(elements);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$].addAll(elements);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_syncDelegate]();
        this[_delegate$].clear();
        this[_map$][$remove](this[_key$]);
      }
      containsAll(other) {
        this[_syncDelegate]();
        return this[_delegate$].containsAll(other);
      }
      difference(other) {
        this[_syncDelegate]();
        return this[_delegate$].difference(other);
      }
      intersection(other) {
        this[_syncDelegate]();
        return this[_delegate$].intersection(other);
      }
      lookup(object) {
        this[_syncDelegate]();
        return this[_delegate$].lookup(object);
      }
      remove(value) {
        this[_syncDelegate]();
        let removed = this[_delegate$].remove(value);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeAll(elements) {
        this[_syncDelegate]();
        this[_delegate$].removeAll(elements);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      removeWhere(test) {
        this[_syncDelegate]();
        this[_delegate$].removeWhere(test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retainAll(elements) {
        this[_syncDelegate]();
        this[_delegate$].retainAll(elements);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retainWhere(test) {
        this[_syncDelegate]();
        this[_delegate$].retainWhere(test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      union(other) {
        SetLOfVL().as(other);
        this[_syncDelegate]();
        return this[_delegate$].union(other);
      }
    }
    (_WrappedSet.new = function(map, key, delegate) {
      _WrappedSet.__proto__.new.call(this, MapLOfKL$SetLOfVL().as(map), key, SetLOfVL().as(delegate));
      ;
    }).prototype = _WrappedSet.prototype;
    dart.addTypeTests(_WrappedSet);
    _WrappedSet.prototype[_is__WrappedSet_default] = true;
    dart.addTypeCaches(_WrappedSet);
    _WrappedSet[dart.implements] = () => [core.Set$(dart.legacy(V))];
    dart.setMethodSignature(_WrappedSet, () => ({
      __proto__: dart.getMethods(_WrappedSet.__proto__),
      add: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType(T => [dart.legacy(core.Set$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(core.Set$(dart.legacy(T))), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      difference: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      intersection: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      lookup: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      retainAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(V)]))]),
      union: dart.fnType(dart.legacy(core.Set$(dart.legacy(V))), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(_WrappedSet, L7);
    dart.defineExtensionMethods(_WrappedSet, ['cast']);
    return _WrappedSet;
  });
  multimap._WrappedSet = multimap._WrappedSet$();
  dart.addTypeTests(multimap._WrappedSet, _is__WrappedSet_default);
  const _is_BiMap_default = Symbol('_is_BiMap_default');
  bimap.BiMap$ = dart.generic((K, V) => {
    class BiMap extends core.Object {
      static new() {
        return new (bimap.HashBiMap$(dart.legacy(K), dart.legacy(V))).new();
      }
    }
    (BiMap[dart.mixinNew] = function() {
    }).prototype = BiMap.prototype;
    BiMap.prototype[dart.isMap] = true;
    dart.addTypeTests(BiMap);
    BiMap.prototype[_is_BiMap_default] = true;
    dart.addTypeCaches(BiMap);
    BiMap[dart.implements] = () => [core.Map$(dart.legacy(K), dart.legacy(V))];
    dart.setLibraryUri(BiMap, L8);
    return BiMap;
  });
  bimap.BiMap = bimap.BiMap$();
  dart.addTypeTests(bimap.BiMap, _is_BiMap_default);
  var _cached = dart.privateName(bimap, "_cached");
  var _map$0 = dart.privateName(bimap, "_map");
  var _inverse$ = dart.privateName(bimap, "_inverse");
  var _add$ = dart.privateName(bimap, "_add");
  const _is_HashBiMap_default = Symbol('_is_HashBiMap_default');
  bimap.HashBiMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedMapOfKL$VL = () => (LinkedMapOfKL$VL = dart.constFn(_js_helper.LinkedMap$(KL(), VL())))();
    var LinkedMapOfVL$KL = () => (LinkedMapOfVL$KL = dart.constFn(_js_helper.LinkedMap$(VL(), KL())))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var KLAndVLToVL = () => (KLAndVLToVL = dart.constFn(dart.fnType(VL(), [KL(), VL()])))();
    var HashBiMapOfVL$KL = () => (HashBiMapOfVL$KL = dart.constFn(bimap.HashBiMap$(VL(), KL())))();
    var MapEntryOfKL$VL = () => (MapEntryOfKL$VL = dart.constFn(core.MapEntry$(KL(), VL())))();
    var MapEntryLOfKL$VL = () => (MapEntryLOfKL$VL = dart.constFn(dart.legacy(MapEntryOfKL$VL())))();
    var IterableOfMapEntryLOfKL$VL = () => (IterableOfMapEntryLOfKL$VL = dart.constFn(core.Iterable$(MapEntryLOfKL$VL())))();
    var IterableLOfMapEntryLOfKL$VL = () => (IterableLOfMapEntryLOfKL$VL = dart.constFn(dart.legacy(IterableOfMapEntryLOfKL$VL())))();
    var VLAndKLToboolL = () => (VLAndKLToboolL = dart.constFn(dart.fnType(boolL(), [VL(), KL()])))();
    var KLAndVLToLVL = () => (KLAndVLToLVL = dart.constFn(dart.legacy(KLAndVLToVL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var VoidToVL = () => (VoidToVL = dart.constFn(dart.fnType(VL(), [])))();
    var VoidToLVL = () => (VoidToLVL = dart.constFn(dart.legacy(VoidToVL())))();
    var VLToVL = () => (VLToVL = dart.constFn(dart.fnType(VL(), [VL()])))();
    var VLToLVL = () => (VLToLVL = dart.constFn(dart.legacy(VLToVL())))();
    class HashBiMap extends core.Object {
      _get(key) {
        return this[_map$0][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        KL().as(key);
        VL().as(value);
        this[_add$](key, value, false);
        return value$;
      }
      replace(key, value) {
        KL().as(key);
        VL().as(value);
        this[_add$](key, value, true);
      }
      addAll(other) {
        MapLOfKL$VL().as(other);
        return other[$forEach](dart.fn((k, v) => this[_add$](k, v, false), KLAndVLToVL()));
      }
      containsKey(key) {
        return this[_map$0][$containsKey](key);
      }
      containsValue(value) {
        return this[_inverse$][$containsKey](value);
      }
      forEach(f) {
        return this[_map$0][$forEach](f);
      }
      get isEmpty() {
        return this[_map$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$0][$isNotEmpty];
      }
      get keys() {
        return this[_map$0][$keys];
      }
      get length() {
        return this[_map$0][$length];
      }
      get values() {
        return this[_inverse$][$keys];
      }
      get inverse() {
        let t0;
        t0 = this[_cached];
        return t0 == null ? this[_cached] = new (HashBiMapOfVL$KL())._from(this[_inverse$], this[_map$0]) : t0;
      }
      addEntries(entries) {
        IterableLOfMapEntryLOfKL$VL().as(entries);
        for (let entry of entries) {
          this[_add$](entry.key, entry.value, false);
        }
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      get entries() {
        return this[_map$0][$entries];
      }
      map(K2, V2, transform) {
        return this[_map$0][$map](dart.legacy(K2), dart.legacy(V2), transform);
      }
      putIfAbsent(key, ifAbsent) {
        KL().as(key);
        VoidToLVL().as(ifAbsent);
        let value = this[_map$0][$_get](key);
        if (value != null) return value;
        if (!dart.test(this[_map$0][$containsKey](key))) return this[_add$](key, ifAbsent(), false);
        return null;
      }
      remove(key) {
        this[_inverse$][$remove](this[_map$0][$_get](key));
        return this[_map$0][$remove](key);
      }
      removeWhere(test) {
        this[_inverse$][$removeWhere](dart.fn((v, k) => test(k, v), VLAndKLToboolL()));
        this[_map$0][$removeWhere](test);
      }
      update(key, update, opts) {
        KL().as(key);
        VLToLVL().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToLVL().as(ifAbsent);
        let value = this[_map$0][$_get](key);
        if (value != null) {
          return this[_add$](key, update(value), true);
        } else {
          if (ifAbsent == null) {
            dart.throw(new core.ArgumentError.value(key, "key", "Key not in map"));
          }
          return this[_add$](key, ifAbsent(), false);
        }
      }
      updateAll(update) {
        KLAndVLToLVL().as(update);
        for (let key of this.keys) {
          this[_add$](key, update(key, this[_map$0][$_get](key)), true);
        }
      }
      clear() {
        this[_map$0][$clear]();
        this[_inverse$][$clear]();
      }
      [_add$](key, value, replace) {
        if (key == null) dart.throw(new core.ArgumentError.new("null key"));
        if (value == null) dart.throw(new core.ArgumentError.new("null value"));
        let oldValue = this[_map$0][$_get](key);
        if (dart.equals(oldValue, value)) return value;
        if (dart.test(this[_inverse$][$containsKey](value))) {
          if (!dart.test(replace)) dart.throw(new core.ArgumentError.new("Mapping for " + dart.str(value) + " exists"));
          this[_map$0][$remove](this[_inverse$][$_get](value));
        }
        this[_inverse$][$remove](oldValue);
        this[_map$0][$_set](key, value);
        this[_inverse$][$_set](value, key);
        return value;
      }
    }
    (HashBiMap.new = function() {
      HashBiMap._from.call(this, new (LinkedMapOfKL$VL()).new(), new (LinkedMapOfVL$KL()).new());
    }).prototype = HashBiMap.prototype;
    (HashBiMap._from = function(_map, _inverse) {
      this[_cached] = null;
      this[_map$0] = _map;
      this[_inverse$] = _inverse;
      ;
    }).prototype = HashBiMap.prototype;
    dart.addTypeTests(HashBiMap);
    HashBiMap.prototype[_is_HashBiMap_default] = true;
    dart.addTypeCaches(HashBiMap);
    HashBiMap[dart.implements] = () => [bimap.BiMap$(dart.legacy(K), dart.legacy(V))];
    dart.setMethodSignature(HashBiMap, () => ({
      __proto__: dart.getMethods(HashBiMap.__proto__),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      replace: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(K), dart.legacy(V)]))]),
      addEntries: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      [$cast]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), []]),
      map: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]]),
      [$map]: dart.gFnType((K2, V2) => [dart.legacy(core.Map$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(dart.fnType(dart.legacy(core.MapEntry$(dart.legacy(K2), dart.legacy(V2))), [dart.legacy(K), dart.legacy(V)]))]]),
      putIfAbsent: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [$putIfAbsent]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(K), dart.legacy(V)]))]),
      update: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      [$update]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object), dart.legacy(core.Object)], {ifAbsent: dart.legacy(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      [_add$]: dart.fnType(dart.legacy(V), [dart.legacy(K), dart.legacy(V), dart.legacy(core.bool)])
    }));
    dart.setGetterSignature(HashBiMap, () => ({
      __proto__: dart.getGetters(HashBiMap.__proto__),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      [$keys]: dart.legacy(core.Iterable$(dart.legacy(K))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      values: dart.legacy(core.Iterable$(dart.legacy(V))),
      [$values]: dart.legacy(core.Iterable$(dart.legacy(V))),
      inverse: dart.legacy(bimap.BiMap$(dart.legacy(V), dart.legacy(K))),
      entries: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V))))),
      [$entries]: dart.legacy(core.Iterable$(dart.legacy(core.MapEntry$(dart.legacy(K), dart.legacy(V)))))
    }));
    dart.setLibraryUri(HashBiMap, L8);
    dart.setFieldSignature(HashBiMap, () => ({
      __proto__: dart.getFields(HashBiMap.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V)))),
      [_inverse$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(V), dart.legacy(K)))),
      [_cached]: dart.fieldType(dart.legacy(bimap.BiMap$(dart.legacy(V), dart.legacy(K))))
    }));
    dart.defineExtensionMethods(HashBiMap, [
      '_get',
      '_set',
      'addAll',
      'containsKey',
      'containsValue',
      'forEach',
      'addEntries',
      'cast',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll',
      'clear'
    ]);
    dart.defineExtensionAccessors(HashBiMap, [
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values',
      'entries'
    ]);
    return HashBiMap;
  });
  bimap.HashBiMap = bimap.HashBiMap$();
  dart.addTypeTests(bimap.HashBiMap, _is_HashBiMap_default);
  const _is_DelegatingSet_default = Symbol('_is_DelegatingSet_default');
  set.DelegatingSet$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(EL())))();
    var SetLOfEL = () => (SetLOfEL = dart.constFn(dart.legacy(SetOfEL())))();
    class DelegatingSet extends iterable.DelegatingIterable$(dart.legacy(E)) {
      add(value) {
        EL().as(value);
        return this.delegate.add(value);
      }
      addAll(elements) {
        IterableLOfEL().as(elements);
        return this.delegate.addAll(elements);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        return this.delegate.clear();
      }
      containsAll(other) {
        return this.delegate.containsAll(other);
      }
      difference(other) {
        return this.delegate.difference(other);
      }
      intersection(other) {
        return this.delegate.intersection(other);
      }
      lookup(object) {
        return this.delegate.lookup(object);
      }
      remove(value) {
        return this.delegate.remove(value);
      }
      removeAll(elements) {
        return this.delegate.removeAll(elements);
      }
      removeWhere(test) {
        return this.delegate.removeWhere(test);
      }
      retainAll(elements) {
        return this.delegate.retainAll(elements);
      }
      retainWhere(test) {
        return this.delegate.retainWhere(test);
      }
      union(other) {
        SetLOfEL().as(other);
        return this.delegate.union(other);
      }
    }
    (DelegatingSet.new = function() {
      ;
    }).prototype = DelegatingSet.prototype;
    dart.addTypeTests(DelegatingSet);
    DelegatingSet.prototype[_is_DelegatingSet_default] = true;
    dart.addTypeCaches(DelegatingSet);
    DelegatingSet[dart.implements] = () => [core.Set$(dart.legacy(E))];
    dart.setMethodSignature(DelegatingSet, () => ({
      __proto__: dart.getMethods(DelegatingSet.__proto__),
      add: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType(T => [dart.legacy(set.DelegatingSet$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(set.DelegatingSet$(dart.legacy(T))), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      difference: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      intersection: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
      lookup: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      retainAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      union: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(DelegatingSet, L9);
    dart.defineExtensionMethods(DelegatingSet, ['cast']);
    return DelegatingSet;
  });
  set.DelegatingSet = set.DelegatingSet$();
  dart.addTypeTests(set.DelegatingSet, _is_DelegatingSet_default);
  dart.trackLibraries("packages/quiver/src/collection/bimap", {
    "package:quiver/src/collection/lru_map.dart": lru_map,
    "package:quiver/src/collection/delegates/queue.dart": queue,
    "package:quiver/src/collection/delegates/iterable.dart": iterable,
    "package:quiver/src/collection/delegates/map.dart": map,
    "package:quiver/src/collection/treeset.dart": treeset,
    "package:quiver/src/collection/delegates/list.dart": list,
    "package:quiver/src/collection/multimap.dart": multimap,
    "package:quiver/src/collection/bimap.dart": bimap,
    "package:quiver/src/collection/delegates/set.dart": set
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lru_map.dart","delegates/iterable.dart","delegates/queue.dart","delegates/map.dart","treeset.dart","delegates/list.dart","multimap.dart","bimap.dart","delegates/set.dart"],"names":[],"mappings":"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","file":"bimap.unsound.ddc.js"}');
  // Exports:
  return {
    src__collection__lru_map: lru_map,
    src__collection__delegates__queue: queue,
    src__collection__delegates__iterable: iterable,
    src__collection__delegates__map: map,
    src__collection__treeset: treeset,
    src__collection__delegates__list: list,
    src__collection__multimap: multimap,
    src__collection__bimap: bimap,
    src__collection__delegates__set: set
  };
}));

//# sourceMappingURL=bimap.unsound.ddc.js.map
