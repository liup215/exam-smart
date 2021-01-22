define(['dart_sdk'], (function load__packages__quiver__src__iterables__concat(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var merge = Object.create(dart.library);
  var range = Object.create(dart.library);
  var zip = Object.create(dart.library);
  var enumerate = Object.create(dart.library);
  var count = Object.create(dart.library);
  var infinite_iterable = Object.create(dart.library);
  var partition = Object.create(dart.library);
  var concat = Object.create(dart.library);
  var cycle = Object.create(dart.library);
  var generating_iterable = Object.create(dart.library);
  var min_max = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $toString = dartx.toString;
  var $isEmpty = dartx.isEmpty;
  var $every = dartx.every;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $length = dartx.length;
  var $first = dartx.first;
  var $last = dartx.last;
  var $single = dartx.single;
  var $elementAt = dartx.elementAt;
  var $isNotEmpty = dartx.isNotEmpty;
  var $fold = dartx.fold;
  var $forEach = dartx.forEach;
  var $join = dartx.join;
  var $lastWhere = dartx.lastWhere;
  var $reduce = dartx.reduce;
  var $singleWhere = dartx.singleWhere;
  var $toSet = dartx.toSet;
  var $add = dartx.add;
  var $expand = dartx.expand;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ComparableAndComparableToint = () => (ComparableAndComparableToint = dart.constFn(dart.fnType(core.int, [core.Comparable, core.Comparable])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var SyncIterableOfnumL = () => (SyncIterableOfnumL = dart.constFn(_js_helper.SyncIterable$(numL())))();
  var IndexedValueL = () => (IndexedValueL = dart.constFn(dart.legacy(enumerate.IndexedValue)))();
  const CT = Object.create(null);
  var L6 = "package:quiver/src/iterables/generating_iterable.dart";
  var L0 = "package:quiver/src/iterables/merge.dart";
  var L2 = "package:quiver/src/iterables/infinite_iterable.dart";
  var L7 = "package:quiver/src/iterables/min_max.dart";
  var L1 = "package:quiver/src/iterables/enumerate.dart";
  var L3 = "package:quiver/src/iterables/count.dart";
  var L5 = "package:quiver/src/iterables/cycle.dart";
  var L4 = "package:quiver/src/iterables/partition.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    },
    get C1() {
      return C1 = dart.fn(core.Comparable.compare, ComparableAndComparableToint());
    }
  }, false);
  var _iterables$ = dart.privateName(merge, "_iterables");
  var _compare$ = dart.privateName(merge, "_compare");
  const _is__Merge_default = Symbol('_is__Merge_default');
  merge._Merge$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _MergeIteratorOfTL = () => (_MergeIteratorOfTL = dart.constFn(merge._MergeIterator$(TL())))();
    var IteratorOfTL = () => (IteratorOfTL = dart.constFn(core.Iterator$(TL())))();
    var IteratorLOfTL = () => (IteratorLOfTL = dart.constFn(dart.legacy(IteratorOfTL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var IterableLOfTLToIteratorLOfTL = () => (IterableLOfTLToIteratorLOfTL = dart.constFn(dart.fnType(IteratorLOfTL(), [IterableLOfTL()])))();
    class _Merge extends collection.IterableBase$(dart.legacy(T)) {
      get iterator() {
        return new (_MergeIteratorOfTL()).new(this[_iterables$][$map](IteratorLOfTL(), dart.fn(i => i[$iterator], IterableLOfTLToIteratorLOfTL()))[$toList]({growable: false}), this[_compare$]);
      }
      toString() {
        return dart.toString(this.toList());
      }
    }
    (_Merge.new = function(_iterables, _compare) {
      this[_iterables$] = _iterables;
      this[_compare$] = _compare;
      _Merge.__proto__.new.call(this);
      ;
    }).prototype = _Merge.prototype;
    dart.addTypeTests(_Merge);
    _Merge.prototype[_is__Merge_default] = true;
    dart.addTypeCaches(_Merge);
    dart.setMethodSignature(_Merge, () => ({
      __proto__: dart.getMethods(_Merge.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(_Merge, () => ({
      __proto__: dart.getGetters(_Merge.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T)))
    }));
    dart.setLibraryUri(_Merge, L0);
    dart.setFieldSignature(_Merge, () => ({
      __proto__: dart.getFields(_Merge.__proto__),
      [_iterables$]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(core.Iterable$(dart.legacy(T)))))),
      [_compare$]: dart.finalFieldType(dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)])))
    }));
    dart.defineExtensionMethods(_Merge, ['toString']);
    dart.defineExtensionAccessors(_Merge, ['iterator']);
    return _Merge;
  });
  merge._Merge = merge._Merge$();
  dart.addTypeTests(merge._Merge, _is__Merge_default);
  var _iterator = dart.privateName(merge, "_iterator");
  var _hasCurrent = dart.privateName(merge, "_hasCurrent");
  const _is__IteratorPeeker_default = Symbol('_is__IteratorPeeker_default');
  merge._IteratorPeeker$ = dart.generic(T => {
    class _IteratorPeeker extends core.Object {
      moveNext() {
        this[_hasCurrent] = this[_iterator].moveNext();
      }
      get current() {
        return this[_iterator].current;
      }
    }
    (_IteratorPeeker.new = function(iterator) {
      this[_iterator] = iterator;
      this[_hasCurrent] = iterator.moveNext();
      ;
    }).prototype = _IteratorPeeker.prototype;
    dart.addTypeTests(_IteratorPeeker);
    _IteratorPeeker.prototype[_is__IteratorPeeker_default] = true;
    dart.addTypeCaches(_IteratorPeeker);
    dart.setMethodSignature(_IteratorPeeker, () => ({
      __proto__: dart.getMethods(_IteratorPeeker.__proto__),
      moveNext: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_IteratorPeeker, () => ({
      __proto__: dart.getGetters(_IteratorPeeker.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(_IteratorPeeker, L0);
    dart.setFieldSignature(_IteratorPeeker, () => ({
      __proto__: dart.getFields(_IteratorPeeker.__proto__),
      [_iterator]: dart.finalFieldType(dart.legacy(core.Iterator$(dart.legacy(T)))),
      [_hasCurrent]: dart.fieldType(dart.legacy(core.bool))
    }));
    return _IteratorPeeker;
  });
  merge._IteratorPeeker = merge._IteratorPeeker$();
  dart.addTypeTests(merge._IteratorPeeker, _is__IteratorPeeker_default);
  var _current = dart.privateName(merge, "_current");
  var _peekers = dart.privateName(merge, "_peekers");
  const _is__MergeIterator_default = Symbol('_is__MergeIterator_default');
  merge._MergeIterator$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _IteratorPeekerOfTL = () => (_IteratorPeekerOfTL = dart.constFn(merge._IteratorPeeker$(TL())))();
    var _IteratorPeekerLOfTL = () => (_IteratorPeekerLOfTL = dart.constFn(dart.legacy(_IteratorPeekerOfTL())))();
    var IteratorOfTL = () => (IteratorOfTL = dart.constFn(core.Iterator$(TL())))();
    var IteratorLOfTL = () => (IteratorLOfTL = dart.constFn(dart.legacy(IteratorOfTL())))();
    var IteratorLOfTLTo_IteratorPeekerLOfTL = () => (IteratorLOfTLTo_IteratorPeekerLOfTL = dart.constFn(dart.fnType(_IteratorPeekerLOfTL(), [IteratorLOfTL()])))();
    class _MergeIterator extends core.Object {
      moveNext() {
        let t1, t0;
        let minIter = null;
        for (let p of this[_peekers]) {
          if (dart.test(p[_hasCurrent])) {
            if (minIter == null || dart.notNull((t0 = p.current, t1 = minIter.current, this[_compare$](t0, t1))) < 0) {
              minIter = p;
            }
          }
        }
        if (minIter == null) {
          return false;
        }
        this[_current] = minIter.current;
        minIter.moveNext();
        return true;
      }
      get current() {
        return this[_current];
      }
    }
    (_MergeIterator.new = function(iterators, _compare) {
      this[_current] = null;
      this[_compare$] = _compare;
      this[_peekers] = iterators[$map](_IteratorPeekerLOfTL(), dart.fn(i => new (_IteratorPeekerOfTL()).new(i), IteratorLOfTLTo_IteratorPeekerLOfTL()))[$toList]();
      ;
    }).prototype = _MergeIterator.prototype;
    dart.addTypeTests(_MergeIterator);
    _MergeIterator.prototype[_is__MergeIterator_default] = true;
    dart.addTypeCaches(_MergeIterator);
    _MergeIterator[dart.implements] = () => [core.Iterator$(dart.legacy(T))];
    dart.setMethodSignature(_MergeIterator, () => ({
      __proto__: dart.getMethods(_MergeIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_MergeIterator, () => ({
      __proto__: dart.getGetters(_MergeIterator.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(_MergeIterator, L0);
    dart.setFieldSignature(_MergeIterator, () => ({
      __proto__: dart.getFields(_MergeIterator.__proto__),
      [_peekers]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(merge._IteratorPeeker$(dart.legacy(T)))))),
      [_compare$]: dart.finalFieldType(dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)]))),
      [_current]: dart.fieldType(dart.legacy(T))
    }));
    return _MergeIterator;
  });
  merge._MergeIterator = merge._MergeIterator$();
  dart.addTypeTests(merge._MergeIterator, _is__MergeIterator_default);
  var C0;
  var C1;
  merge.merge = function merge$(T, iterables, compare = null) {
    let t0;
    if (dart.test(iterables[$isEmpty])) return C0 || CT.C0;
    if (dart.test(iterables[$every](dart.fn(i => i[$isEmpty], dart.fnType(boolL(), [dart.legacy(core.Iterable$(dart.legacy(T)))]))))) return C0 || CT.C0;
    return new (merge._Merge$(dart.legacy(T))).new(iterables, dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)])).as((t0 = compare, t0 == null ? C1 || CT.C1 : t0)));
  };
  range.range = function range$(startOrStop, stop = null, step = null) {
    return new (SyncIterableOfnumL()).new(() => (function* range(stop, step) {
      let start = stop == null ? 0 : startOrStop;
      stop == null ? stop = startOrStop : null;
      step == null ? step = 1 : null;
      if (step === 0) dart.throw(new core.ArgumentError.new("step cannot be 0"));
      if (dart.notNull(step) > 0 && dart.notNull(stop) < dart.notNull(start)) {
        dart.throw(new core.ArgumentError.new("if step is positive, stop must be greater than start"));
      }
      if (dart.notNull(step) < 0 && dart.notNull(stop) > dart.notNull(start)) {
        dart.throw(new core.ArgumentError.new("if step is negative, stop must be less than start"));
      }
      for (let value = start; dart.notNull(step) < 0 ? dart.notNull(value) > dart.notNull(stop) : dart.notNull(value) < dart.notNull(stop); value = dart.notNull(value) + dart.notNull(step)) {
        yield value;
      }
    })(stop, step));
  };
  zip.zip = function zip$(T, iterables) {
    return new (_js_helper.SyncIterable$(dart.legacy(core.List$(dart.legacy(T))))).new(function* zip() {
      if (dart.test(iterables[$isEmpty])) return;
      let iterators = iterables[$map](dart.legacy(core.Iterator$(dart.legacy(T))), dart.fn(e => e[$iterator], dart.fnType(dart.legacy(core.Iterator$(dart.legacy(T))), [dart.legacy(core.Iterable$(dart.legacy(T)))])))[$toList]({growable: false});
      while (dart.test(iterators[$every](dart.fn(e => e.moveNext(), dart.fnType(boolL(), [dart.legacy(core.Iterator$(dart.legacy(T)))]))))) {
        yield iterators[$map](dart.legacy(T), dart.fn(e => e.current, dart.fnType(dart.legacy(T), [dart.legacy(core.Iterator$(dart.legacy(T)))])))[$toList]({growable: false});
      }
    });
  };
  const _is_IndexedValue_default = Symbol('_is_IndexedValue_default');
  var index$ = dart.privateName(enumerate, "IndexedValue.index");
  var value$ = dart.privateName(enumerate, "IndexedValue.value");
  enumerate.IndexedValue$ = dart.generic(V => {
    class IndexedValue extends core.Object {
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        return IndexedValueL().is(other) && other.index == this.index && dart.equals(other.value, this.value);
      }
      get hashCode() {
        return dart.notNull(this.index) * 31 + dart.notNull(dart.hashCode(this.value));
      }
      toString() {
        return "(" + dart.str(this.index) + ", " + dart.str(this.value) + ")";
      }
    }
    (IndexedValue.new = function(index, value) {
      this[index$] = index;
      this[value$] = value;
      ;
    }).prototype = IndexedValue.prototype;
    dart.addTypeTests(IndexedValue);
    IndexedValue.prototype[_is_IndexedValue_default] = true;
    dart.addTypeCaches(IndexedValue);
    dart.setMethodSignature(IndexedValue, () => ({
      __proto__: dart.getMethods(IndexedValue.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(IndexedValue, () => ({
      __proto__: dart.getGetters(IndexedValue.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(IndexedValue, L1);
    dart.setFieldSignature(IndexedValue, () => ({
      __proto__: dart.getFields(IndexedValue.__proto__),
      index: dart.finalFieldType(dart.legacy(core.int)),
      value: dart.finalFieldType(dart.legacy(V))
    }));
    dart.defineExtensionMethods(IndexedValue, ['_equals', 'toString']);
    dart.defineExtensionAccessors(IndexedValue, ['hashCode']);
    return IndexedValue;
  });
  enumerate.IndexedValue = enumerate.IndexedValue$();
  dart.addTypeTests(enumerate.IndexedValue, _is_IndexedValue_default);
  var _iterable$ = dart.privateName(enumerate, "_iterable");
  const _is_EnumerateIterable_default = Symbol('_is_EnumerateIterable_default');
  enumerate.EnumerateIterable$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var EnumerateIteratorOfVL = () => (EnumerateIteratorOfVL = dart.constFn(enumerate.EnumerateIterator$(VL())))();
    var IndexedValueOfVL = () => (IndexedValueOfVL = dart.constFn(enumerate.IndexedValue$(VL())))();
    class EnumerateIterable extends collection.IterableBase$(dart.legacy(enumerate.IndexedValue$(dart.legacy(V)))) {
      get iterator() {
        return new (EnumerateIteratorOfVL()).new(this[_iterable$][$iterator]);
      }
      get length() {
        return this[_iterable$][$length];
      }
      get isEmpty() {
        return this[_iterable$][$isEmpty];
      }
      get first() {
        return new (IndexedValueOfVL()).new(0, this[_iterable$][$first]);
      }
      get last() {
        return new (IndexedValueOfVL()).new(dart.notNull(this.length) - 1, this[_iterable$][$last]);
      }
      get single() {
        return new (IndexedValueOfVL()).new(0, this[_iterable$][$single]);
      }
      elementAt(index) {
        return new (IndexedValueOfVL()).new(index, this[_iterable$][$elementAt](index));
      }
    }
    (EnumerateIterable.new = function(_iterable) {
      this[_iterable$] = _iterable;
      EnumerateIterable.__proto__.new.call(this);
      ;
    }).prototype = EnumerateIterable.prototype;
    dart.addTypeTests(EnumerateIterable);
    EnumerateIterable.prototype[_is_EnumerateIterable_default] = true;
    dart.addTypeCaches(EnumerateIterable);
    dart.setMethodSignature(EnumerateIterable, () => ({
      __proto__: dart.getMethods(EnumerateIterable.__proto__),
      elementAt: dart.fnType(dart.legacy(enumerate.IndexedValue$(dart.legacy(V))), [dart.legacy(core.int)]),
      [$elementAt]: dart.fnType(dart.legacy(enumerate.IndexedValue$(dart.legacy(V))), [dart.legacy(core.int)])
    }));
    dart.setGetterSignature(EnumerateIterable, () => ({
      __proto__: dart.getGetters(EnumerateIterable.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(enumerate.IndexedValue$(dart.legacy(V))))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(enumerate.IndexedValue$(dart.legacy(V))))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(EnumerateIterable, L1);
    dart.setFieldSignature(EnumerateIterable, () => ({
      __proto__: dart.getFields(EnumerateIterable.__proto__),
      [_iterable$]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(V))))
    }));
    dart.defineExtensionMethods(EnumerateIterable, ['elementAt']);
    dart.defineExtensionAccessors(EnumerateIterable, [
      'iterator',
      'length',
      'isEmpty',
      'first',
      'last',
      'single'
    ]);
    return EnumerateIterable;
  });
  enumerate.EnumerateIterable = enumerate.EnumerateIterable$();
  dart.addTypeTests(enumerate.EnumerateIterable, _is_EnumerateIterable_default);
  var _index = dart.privateName(enumerate, "_index");
  var _current$ = dart.privateName(enumerate, "_current");
  var _iterator$ = dart.privateName(enumerate, "_iterator");
  const _is_EnumerateIterator_default = Symbol('_is_EnumerateIterator_default');
  enumerate.EnumerateIterator$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var IndexedValueOfVL = () => (IndexedValueOfVL = dart.constFn(enumerate.IndexedValue$(VL())))();
    class EnumerateIterator extends core.Iterator$(dart.legacy(enumerate.IndexedValue$(dart.legacy(V)))) {
      get current() {
        return this[_current$];
      }
      moveNext() {
        let t0;
        if (dart.test(this[_iterator$].moveNext())) {
          this[_current$] = new (IndexedValueOfVL()).new((t0 = this[_index], this[_index] = dart.notNull(t0) + 1, t0), this[_iterator$].current);
          return true;
        }
        this[_current$] = null;
        return false;
      }
    }
    (EnumerateIterator.new = function(_iterator) {
      this[_index] = 0;
      this[_current$] = null;
      this[_iterator$] = _iterator;
      ;
    }).prototype = EnumerateIterator.prototype;
    dart.addTypeTests(EnumerateIterator);
    EnumerateIterator.prototype[_is_EnumerateIterator_default] = true;
    dart.addTypeCaches(EnumerateIterator);
    dart.setMethodSignature(EnumerateIterator, () => ({
      __proto__: dart.getMethods(EnumerateIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(EnumerateIterator, () => ({
      __proto__: dart.getGetters(EnumerateIterator.__proto__),
      current: dart.legacy(enumerate.IndexedValue$(dart.legacy(V)))
    }));
    dart.setLibraryUri(EnumerateIterator, L1);
    dart.setFieldSignature(EnumerateIterator, () => ({
      __proto__: dart.getFields(EnumerateIterator.__proto__),
      [_iterator$]: dart.finalFieldType(dart.legacy(core.Iterator$(dart.legacy(V)))),
      [_index]: dart.fieldType(dart.legacy(core.int)),
      [_current$]: dart.fieldType(dart.legacy(enumerate.IndexedValue$(dart.legacy(V))))
    }));
    return EnumerateIterator;
  });
  enumerate.EnumerateIterator = enumerate.EnumerateIterator$();
  dart.addTypeTests(enumerate.EnumerateIterator, _is_EnumerateIterator_default);
  enumerate.enumerate = function enumerate$(E, iterable) {
    return new (enumerate.EnumerateIterable$(dart.legacy(E))).new(iterable);
  };
  const _is_InfiniteIterable_default = Symbol('_is_InfiniteIterable_default');
  infinite_iterable.InfiniteIterable$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var VoidToTL = () => (VoidToTL = dart.constFn(dart.fnType(TL(), [])))();
    var VoidToLTL = () => (VoidToLTL = dart.constFn(dart.legacy(VoidToTL())))();
    var TLAndTLToTL = () => (TLAndTLToTL = dart.constFn(dart.fnType(TL(), [TL(), TL()])))();
    var TLAndTLToLTL = () => (TLAndTLToLTL = dart.constFn(dart.legacy(TLAndTLToTL())))();
    class InfiniteIterable extends collection.IterableBase$(dart.legacy(T)) {
      get isEmpty() {
        return false;
      }
      get isNotEmpty() {
        return true;
      }
      get last() {
        return dart.throw(new core.UnsupportedError.new("last"));
      }
      get length() {
        return dart.throw(new core.UnsupportedError.new("length"));
      }
      get single() {
        return dart.throw(new core.StateError.new("single"));
      }
      every(test) {
        return dart.throw(new core.UnsupportedError.new("every"));
      }
      fold(T1, initialValue, combine) {
        return dart.throw(new core.UnsupportedError.new("fold"));
      }
      forEach(f) {
        return dart.throw(new core.UnsupportedError.new("forEach"));
      }
      join(separator = "") {
        return dart.throw(new core.UnsupportedError.new("join"));
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLTL().as(orElse);
        return dart.throw(new core.UnsupportedError.new("lastWhere"));
      }
      reduce(combine) {
        TLAndTLToLTL().as(combine);
        return dart.throw(new core.UnsupportedError.new("reduce"));
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToLTL().as(orElse);
        return dart.throw(new core.UnsupportedError.new("singleWhere"));
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return dart.throw(new core.UnsupportedError.new("toList"));
      }
      toSet() {
        return dart.throw(new core.UnsupportedError.new("toSet"));
      }
    }
    (InfiniteIterable.new = function() {
      InfiniteIterable.__proto__.new.call(this);
      ;
    }).prototype = InfiniteIterable.prototype;
    dart.addTypeTests(InfiniteIterable);
    InfiniteIterable.prototype[_is_InfiniteIterable_default] = true;
    dart.addTypeCaches(InfiniteIterable);
    dart.setMethodSignature(InfiniteIterable, () => ({
      __proto__: dart.getMethods(InfiniteIterable.__proto__),
      every: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))]),
      [$every]: dart.fnType(dart.legacy(core.bool), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))]),
      fold: dart.gFnType(T1 => [dart.legacy(T1), [dart.legacy(T1), dart.legacy(dart.fnType(dart.legacy(T1), [dart.legacy(T1), dart.legacy(T)]))]]),
      [$fold]: dart.gFnType(T1 => [dart.legacy(T1), [dart.legacy(T1), dart.legacy(dart.fnType(dart.legacy(T1), [dart.legacy(T1), dart.legacy(T)]))]]),
      forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))]),
      [$forEach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))]),
      join: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      [$join]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.String)]),
      lastWhere: dart.fnType(dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$lastWhere]: dart.fnType(dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))], {orElse: dart.legacy(core.Object)}, {}),
      reduce: dart.fnType(dart.legacy(T), [dart.legacy(core.Object)]),
      [$reduce]: dart.fnType(dart.legacy(T), [dart.legacy(core.Object)]),
      singleWhere: dart.fnType(dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))], {orElse: dart.legacy(core.Object)}, {}),
      [$singleWhere]: dart.fnType(dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))], {orElse: dart.legacy(core.Object)}, {}),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [], {growable: dart.legacy(core.bool)}, {}),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(T))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(T))), [])
    }));
    dart.setGetterSignature(InfiniteIterable, () => ({
      __proto__: dart.getGetters(InfiniteIterable.__proto__),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(InfiniteIterable, L2);
    dart.defineExtensionMethods(InfiniteIterable, [
      'every',
      'fold',
      'forEach',
      'join',
      'lastWhere',
      'reduce',
      'singleWhere',
      'toList',
      'toSet'
    ]);
    dart.defineExtensionAccessors(InfiniteIterable, [
      'isEmpty',
      'isNotEmpty',
      'last',
      'length',
      'single'
    ]);
    return InfiniteIterable;
  });
  infinite_iterable.InfiniteIterable = infinite_iterable.InfiniteIterable$();
  dart.addTypeTests(infinite_iterable.InfiniteIterable, _is_InfiniteIterable_default);
  count._Count = class _Count extends infinite_iterable.InfiniteIterable$(dart.legacy(core.num)) {
    get iterator() {
      return new count._CountIterator.new(this.start, this.step);
    }
  };
  (count._Count.new = function(start, step) {
    this.start = start;
    this.step = step;
    count._Count.__proto__.new.call(this);
    ;
  }).prototype = count._Count.prototype;
  dart.addTypeTests(count._Count);
  dart.addTypeCaches(count._Count);
  dart.setGetterSignature(count._Count, () => ({
    __proto__: dart.getGetters(count._Count.__proto__),
    iterator: dart.legacy(core.Iterator$(dart.legacy(core.num))),
    [$iterator]: dart.legacy(core.Iterator$(dart.legacy(core.num)))
  }));
  dart.setLibraryUri(count._Count, L3);
  dart.setFieldSignature(count._Count, () => ({
    __proto__: dart.getFields(count._Count.__proto__),
    start: dart.finalFieldType(dart.legacy(core.num)),
    step: dart.finalFieldType(dart.legacy(core.num))
  }));
  dart.defineExtensionAccessors(count._Count, ['iterator']);
  var _current$0 = dart.privateName(count, "_current");
  var _start$ = dart.privateName(count, "_start");
  var _step$ = dart.privateName(count, "_step");
  count._CountIterator = class _CountIterator extends core.Object {
    get current() {
      return this[_current$0];
    }
    moveNext() {
      this[_current$0] = this[_current$0] == null ? this[_start$] : dart.notNull(this[_current$0]) + dart.notNull(this[_step$]);
      return true;
    }
  };
  (count._CountIterator.new = function(_start, _step) {
    this[_current$0] = null;
    this[_start$] = _start;
    this[_step$] = _step;
    ;
  }).prototype = count._CountIterator.prototype;
  dart.addTypeTests(count._CountIterator);
  dart.addTypeCaches(count._CountIterator);
  count._CountIterator[dart.implements] = () => [core.Iterator$(dart.legacy(core.num))];
  dart.setMethodSignature(count._CountIterator, () => ({
    __proto__: dart.getMethods(count._CountIterator.__proto__),
    moveNext: dart.fnType(dart.legacy(core.bool), [])
  }));
  dart.setGetterSignature(count._CountIterator, () => ({
    __proto__: dart.getGetters(count._CountIterator.__proto__),
    current: dart.legacy(core.num)
  }));
  dart.setLibraryUri(count._CountIterator, L3);
  dart.setFieldSignature(count._CountIterator, () => ({
    __proto__: dart.getFields(count._CountIterator.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(core.num)),
    [_step$]: dart.finalFieldType(dart.legacy(core.num)),
    [_current$0]: dart.fieldType(dart.legacy(core.num))
  }));
  count.count = function count$(start = 0, step = 1) {
    return new count._Count.new(start, step);
  };
  var _iterable$0 = dart.privateName(partition, "_iterable");
  var _size$ = dart.privateName(partition, "_size");
  const _is__Partition_default = Symbol('_is__Partition_default');
  partition._Partition$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _PartitionIteratorOfTL = () => (_PartitionIteratorOfTL = dart.constFn(partition._PartitionIterator$(TL())))();
    class _Partition extends collection.IterableBase$(dart.legacy(core.List$(dart.legacy(T)))) {
      get iterator() {
        return new (_PartitionIteratorOfTL()).new(this[_iterable$0][$iterator], this[_size$]);
      }
    }
    (_Partition.new = function(_iterable, _size) {
      this[_iterable$0] = _iterable;
      this[_size$] = _size;
      _Partition.__proto__.new.call(this);
      if (dart.notNull(this[_size$]) <= 0) dart.throw(new core.ArgumentError.new(this[_size$]));
    }).prototype = _Partition.prototype;
    dart.addTypeTests(_Partition);
    _Partition.prototype[_is__Partition_default] = true;
    dart.addTypeCaches(_Partition);
    dart.setGetterSignature(_Partition, () => ({
      __proto__: dart.getGetters(_Partition.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(core.List$(dart.legacy(T))))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(core.List$(dart.legacy(T)))))
    }));
    dart.setLibraryUri(_Partition, L4);
    dart.setFieldSignature(_Partition, () => ({
      __proto__: dart.getFields(_Partition.__proto__),
      [_iterable$0]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(T)))),
      [_size$]: dart.finalFieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionAccessors(_Partition, ['iterator']);
    return _Partition;
  });
  partition._Partition = partition._Partition$();
  dart.addTypeTests(partition._Partition, _is__Partition_default);
  var _current$1 = dart.privateName(partition, "_current");
  var _iterator$0 = dart.privateName(partition, "_iterator");
  const _is__PartitionIterator_default = Symbol('_is__PartitionIterator_default');
  partition._PartitionIterator$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    class _PartitionIterator extends core.Object {
      get current() {
        return this[_current$1];
      }
      moveNext() {
        let newValue = JSArrayOfTL().of([]);
        let count = 0;
        while (count < dart.notNull(this[_size$]) && dart.test(this[_iterator$0].moveNext())) {
          newValue[$add](this[_iterator$0].current);
          count = count + 1;
        }
        this[_current$1] = count > 0 ? newValue : null;
        return this[_current$1] != null;
      }
    }
    (_PartitionIterator.new = function(_iterator, _size) {
      this[_current$1] = null;
      this[_iterator$0] = _iterator;
      this[_size$] = _size;
      ;
    }).prototype = _PartitionIterator.prototype;
    dart.addTypeTests(_PartitionIterator);
    _PartitionIterator.prototype[_is__PartitionIterator_default] = true;
    dart.addTypeCaches(_PartitionIterator);
    _PartitionIterator[dart.implements] = () => [core.Iterator$(dart.legacy(core.List$(dart.legacy(T))))];
    dart.setMethodSignature(_PartitionIterator, () => ({
      __proto__: dart.getMethods(_PartitionIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_PartitionIterator, () => ({
      __proto__: dart.getGetters(_PartitionIterator.__proto__),
      current: dart.legacy(core.List$(dart.legacy(T)))
    }));
    dart.setLibraryUri(_PartitionIterator, L4);
    dart.setFieldSignature(_PartitionIterator, () => ({
      __proto__: dart.getFields(_PartitionIterator.__proto__),
      [_iterator$0]: dart.finalFieldType(dart.legacy(core.Iterator$(dart.legacy(T)))),
      [_size$]: dart.finalFieldType(dart.legacy(core.int)),
      [_current$1]: dart.fieldType(dart.legacy(core.List$(dart.legacy(T))))
    }));
    return _PartitionIterator;
  });
  partition._PartitionIterator = partition._PartitionIterator$();
  dart.addTypeTests(partition._PartitionIterator, _is__PartitionIterator_default);
  partition.partition = function partition$(T, iterable, size) {
    return dart.test(iterable[$isEmpty]) ? _interceptors.JSArray$(dart.legacy(core.List$(dart.legacy(T)))).of([]) : new (partition._Partition$(dart.legacy(T))).new(iterable, size);
  };
  concat.concat = function concat$(T, iterables) {
    return iterables[$expand](dart.legacy(T), dart.fn(x => x, dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(core.Iterable$(dart.legacy(T)))])));
  };
  var _iterable$1 = dart.privateName(cycle, "_iterable");
  const _is__Cycle_default = Symbol('_is__Cycle_default');
  cycle._Cycle$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _CycleIteratorOfTL = () => (_CycleIteratorOfTL = dart.constFn(cycle._CycleIterator$(TL())))();
    class _Cycle extends infinite_iterable.InfiniteIterable$(dart.legacy(T)) {
      get iterator() {
        return new (_CycleIteratorOfTL()).new(this[_iterable$1]);
      }
      get isEmpty() {
        return this[_iterable$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_iterable$1][$isNotEmpty];
      }
    }
    (_Cycle.new = function(_iterable) {
      this[_iterable$1] = _iterable;
      _Cycle.__proto__.new.call(this);
      ;
    }).prototype = _Cycle.prototype;
    dart.addTypeTests(_Cycle);
    _Cycle.prototype[_is__Cycle_default] = true;
    dart.addTypeCaches(_Cycle);
    dart.setGetterSignature(_Cycle, () => ({
      __proto__: dart.getGetters(_Cycle.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T)))
    }));
    dart.setLibraryUri(_Cycle, L5);
    dart.setFieldSignature(_Cycle, () => ({
      __proto__: dart.getFields(_Cycle.__proto__),
      [_iterable$1]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(T))))
    }));
    dart.defineExtensionAccessors(_Cycle, ['iterator', 'isEmpty', 'isNotEmpty']);
    return _Cycle;
  });
  cycle._Cycle = cycle._Cycle$();
  dart.addTypeTests(cycle._Cycle, _is__Cycle_default);
  var _iterator$1 = dart.privateName(cycle, "_iterator");
  const _is__CycleIterator_default = Symbol('_is__CycleIterator_default');
  cycle._CycleIterator$ = dart.generic(T => {
    class _CycleIterator extends core.Object {
      get current() {
        return this[_iterator$1].current;
      }
      moveNext() {
        if (!dart.test(this[_iterator$1].moveNext())) {
          this[_iterator$1] = this[_iterable$1][$iterator];
          return this[_iterator$1].moveNext();
        }
        return true;
      }
    }
    (_CycleIterator.new = function(_iterable) {
      this[_iterable$1] = _iterable;
      this[_iterator$1] = _iterable[$iterator];
      ;
    }).prototype = _CycleIterator.prototype;
    dart.addTypeTests(_CycleIterator);
    _CycleIterator.prototype[_is__CycleIterator_default] = true;
    dart.addTypeCaches(_CycleIterator);
    _CycleIterator[dart.implements] = () => [core.Iterator$(dart.legacy(T))];
    dart.setMethodSignature(_CycleIterator, () => ({
      __proto__: dart.getMethods(_CycleIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_CycleIterator, () => ({
      __proto__: dart.getGetters(_CycleIterator.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(_CycleIterator, L5);
    dart.setFieldSignature(_CycleIterator, () => ({
      __proto__: dart.getFields(_CycleIterator.__proto__),
      [_iterable$1]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(T)))),
      [_iterator$1]: dart.fieldType(dart.legacy(core.Iterator$(dart.legacy(T))))
    }));
    return _CycleIterator;
  });
  cycle._CycleIterator = cycle._CycleIterator$();
  dart.addTypeTests(cycle._CycleIterator, _is__CycleIterator_default);
  cycle.cycle = function cycle$(T, iterable) {
    return new (cycle._Cycle$(dart.legacy(T))).new(iterable);
  };
  const _is_GeneratingIterable_default = Symbol('_is_GeneratingIterable_default');
  var initial$ = dart.privateName(generating_iterable, "GeneratingIterable.initial");
  var next$ = dart.privateName(generating_iterable, "GeneratingIterable.next");
  generating_iterable.GeneratingIterable$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _GeneratingIteratorOfTL = () => (_GeneratingIteratorOfTL = dart.constFn(generating_iterable._GeneratingIterator$(TL())))();
    class GeneratingIterable extends collection.IterableBase$(dart.legacy(T)) {
      get initial() {
        return this[initial$];
      }
      set initial(value) {
        super.initial = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      get iterator() {
        return new (_GeneratingIteratorOfTL()).new(this.initial(), this.next);
      }
    }
    (GeneratingIterable.new = function(initial, next) {
      this[initial$] = initial;
      this[next$] = next;
      GeneratingIterable.__proto__.new.call(this);
      ;
    }).prototype = GeneratingIterable.prototype;
    dart.addTypeTests(GeneratingIterable);
    GeneratingIterable.prototype[_is_GeneratingIterable_default] = true;
    dart.addTypeCaches(GeneratingIterable);
    dart.setGetterSignature(GeneratingIterable, () => ({
      __proto__: dart.getGetters(GeneratingIterable.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T)))
    }));
    dart.setLibraryUri(GeneratingIterable, L6);
    dart.setFieldSignature(GeneratingIterable, () => ({
      __proto__: dart.getFields(GeneratingIterable.__proto__),
      initial: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(T), []))),
      next: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T)])))
    }));
    dart.defineExtensionAccessors(GeneratingIterable, ['iterator']);
    return GeneratingIterable;
  });
  generating_iterable.GeneratingIterable = generating_iterable.GeneratingIterable$();
  dart.addTypeTests(generating_iterable.GeneratingIterable, _is_GeneratingIterable_default);
  const _is__GeneratingIterator_default = Symbol('_is__GeneratingIterator_default');
  var object$ = dart.privateName(generating_iterable, "_GeneratingIterator.object");
  generating_iterable._GeneratingIterator$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _GeneratingIterator extends core.Object {
      get object() {
        return this[object$];
      }
      set object(value) {
        this[object$] = TL().as(value);
      }
      get current() {
        return dart.test(this.started) ? this.object : null;
      }
      moveNext() {
        let t0;
        if (this.object == null) return false;
        if (dart.test(this.started)) {
          this.object = (t0 = this.object, this.next(t0));
        } else {
          this.started = true;
        }
        return this.object != null;
      }
    }
    (_GeneratingIterator.new = function(object, next) {
      this.started = false;
      this[object$] = object;
      this.next = next;
      ;
    }).prototype = _GeneratingIterator.prototype;
    dart.addTypeTests(_GeneratingIterator);
    _GeneratingIterator.prototype[_is__GeneratingIterator_default] = true;
    dart.addTypeCaches(_GeneratingIterator);
    _GeneratingIterator[dart.implements] = () => [core.Iterator$(dart.legacy(T))];
    dart.setMethodSignature(_GeneratingIterator, () => ({
      __proto__: dart.getMethods(_GeneratingIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_GeneratingIterator, () => ({
      __proto__: dart.getGetters(_GeneratingIterator.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(_GeneratingIterator, L6);
    dart.setFieldSignature(_GeneratingIterator, () => ({
      __proto__: dart.getFields(_GeneratingIterator.__proto__),
      next: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(T)]))),
      object: dart.fieldType(dart.legacy(T)),
      started: dart.fieldType(dart.legacy(core.bool))
    }));
    return _GeneratingIterator;
  });
  generating_iterable._GeneratingIterator = generating_iterable._GeneratingIterator$();
  dart.addTypeTests(generating_iterable._GeneratingIterator, _is__GeneratingIterator_default);
  generating_iterable.generate = function generate(initial, next) {
    return new generating_iterable.GeneratingIterable.new(initial, next);
  };
  const _is_Extent_default = Symbol('_is_Extent_default');
  var min$ = dart.privateName(min_max, "Extent.min");
  var max$ = dart.privateName(min_max, "Extent.max");
  min_max.Extent$ = dart.generic(T => {
    class Extent extends core.Object {
      get min() {
        return this[min$];
      }
      set min(value) {
        super.min = value;
      }
      get max() {
        return this[max$];
      }
      set max(value) {
        super.max = value;
      }
    }
    (Extent.new = function(min, max) {
      this[min$] = min;
      this[max$] = max;
      ;
    }).prototype = Extent.prototype;
    dart.addTypeTests(Extent);
    Extent.prototype[_is_Extent_default] = true;
    dart.addTypeCaches(Extent);
    dart.setLibraryUri(Extent, L7);
    dart.setFieldSignature(Extent, () => ({
      __proto__: dart.getFields(Extent.__proto__),
      min: dart.finalFieldType(dart.legacy(T)),
      max: dart.finalFieldType(dart.legacy(T))
    }));
    return Extent;
  });
  min_max.Extent = min_max.Extent$();
  dart.addTypeTests(min_max.Extent, _is_Extent_default);
  min_max.max = function max(T, i, compare = null) {
    let t0;
    if (dart.test(i[$isEmpty])) return null;
    let _compare = dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)])).as((t0 = compare, t0 == null ? C1 || CT.C1 : t0));
    return i[$reduce](dart.fn((a, b) => dart.notNull(_compare(a, b)) > 0 ? a : b, dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(T)])));
  };
  min_max.min = function min(T, i, compare = null) {
    let t0;
    if (dart.test(i[$isEmpty])) return null;
    let _compare = dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)])).as((t0 = compare, t0 == null ? C1 || CT.C1 : t0));
    return i[$reduce](dart.fn((a, b) => dart.notNull(_compare(a, b)) < 0 ? a : b, dart.fnType(dart.legacy(T), [dart.legacy(T), dart.legacy(T)])));
  };
  min_max.extent = function extent(T, i, compare = null) {
    let t0;
    if (dart.test(i[$isEmpty])) return new (min_max.Extent$(dart.legacy(T))).new(null, null);
    let _compare = dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)])).as((t0 = compare, t0 == null ? C1 || CT.C1 : t0));
    let iterator = i[$iterator];
    let hasNext = iterator.moveNext();
    if (!dart.test(hasNext)) return new (min_max.Extent$(dart.legacy(T))).new(null, null);
    let max = iterator.current;
    let min = iterator.current;
    while (dart.test(iterator.moveNext())) {
      if (dart.notNull(_compare(max, iterator.current)) < 0) max = iterator.current;
      if (dart.notNull(_compare(min, iterator.current)) > 0) min = iterator.current;
    }
    return new (min_max.Extent$(dart.legacy(T))).new(min, max);
  };
  dart.trackLibraries("packages/quiver/src/iterables/concat", {
    "package:quiver/src/iterables/merge.dart": merge,
    "package:quiver/src/iterables/range.dart": range,
    "package:quiver/src/iterables/zip.dart": zip,
    "package:quiver/src/iterables/enumerate.dart": enumerate,
    "package:quiver/src/iterables/count.dart": count,
    "package:quiver/src/iterables/infinite_iterable.dart": infinite_iterable,
    "package:quiver/src/iterables/partition.dart": partition,
    "package:quiver/src/iterables/concat.dart": concat,
    "package:quiver/src/iterables/cycle.dart": cycle,
    "package:quiver/src/iterables/generating_iterable.dart": generating_iterable,
    "package:quiver/src/iterables/min_max.dart": min_max
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["merge.dart","range.dart","zip.dart","enumerate.dart","infinite_iterable.dart","count.dart","partition.dart","concat.dart","cycle.dart","generating_iterable.dart","min_max.dart"],"names":[],"mappings":"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","file":"concat.unsound.ddc.js"}');
  // Exports:
  return {
    src__iterables__merge: merge,
    src__iterables__range: range,
    src__iterables__zip: zip,
    src__iterables__enumerate: enumerate,
    src__iterables__count: count,
    src__iterables__infinite_iterable: infinite_iterable,
    src__iterables__partition: partition,
    src__iterables__concat: concat,
    src__iterables__cycle: cycle,
    src__iterables__generating_iterable: generating_iterable,
    src__iterables__min_max: min_max
  };
}));

//# sourceMappingURL=concat.unsound.ddc.js.map
