define(['dart_sdk', 'packages/collection/src/comparators', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_compiler/v1/src/metadata/di_tokens'], (function load__packages__angular__src__core__application_tokens(dart_sdk, packages__collection__src__comparators, packages__angular__src__core__change_detection__pipe_transform, packages__angular_compiler__v1__src__metadata__di_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__comparators.src__equality;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  var lang = Object.create(dart.library);
  var change_detection_util = Object.create(dart.library);
  var default_iterable_differ = Object.create(dart.library);
  var application_tokens = Object.create(dart.library);
  var change_detection = Object.create(dart.library);
  var component_state = Object.create(dart.library);
  var change_detection$ = Object.create(dart.library);
  var default_keyvalue_differ = Object.create(dart.library);
  var change_detector_ref = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var IterableEqualityOfObjectL = () => (IterableEqualityOfObjectL = dart.constFn(equality.IterableEquality$(ObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var CollectionChangeRecordL = () => (CollectionChangeRecordL = dart.constFn(dart.legacy(default_iterable_differ.CollectionChangeRecord)))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var ObjectLToNull = () => (ObjectLToNull = dart.constFn(dart.fnType(core.Null, [ObjectL()])))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var CollectionChangeRecordLTovoid = () => (CollectionChangeRecordLTovoid = dart.constFn(dart.fnType(dart.void, [CollectionChangeRecordL()])))();
  var _DuplicateItemRecordListL = () => (_DuplicateItemRecordListL = dart.constFn(dart.legacy(default_iterable_differ._DuplicateItemRecordList)))();
  var IdentityMapOfdynamic$_DuplicateItemRecordListL = () => (IdentityMapOfdynamic$_DuplicateItemRecordListL = dart.constFn(_js_helper.IdentityMap$(dart.dynamic, _DuplicateItemRecordListL())))();
  var OpaqueTokenOfStringL = () => (OpaqueTokenOfStringL = dart.constFn(di_tokens.OpaqueToken$(StringL())))();
  var KeyValueChangeRecordL = () => (KeyValueChangeRecordL = dart.constFn(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)))();
  var LinkedMapOfdynamic$KeyValueChangeRecordL = () => (LinkedMapOfdynamic$KeyValueChangeRecordL = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, KeyValueChangeRecordL())))();
  var LinkedMapOfObjectL$ObjectL = () => (LinkedMapOfObjectL$ObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ObjectL())))();
  var MapOfObjectL$ObjectL = () => (MapOfObjectL$ObjectL = dart.constFn(core.Map$(ObjectL(), ObjectL())))();
  var MapLOfObjectL$ObjectL = () => (MapLOfObjectL$ObjectL = dart.constFn(dart.legacy(MapOfObjectL$ObjectL())))();
  var ObjectLAndObjectLToNull = () => (ObjectLAndObjectLToNull = dart.constFn(dart.fnType(core.Null, [ObjectL(), ObjectL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular/src/core/change_detection/change_detection_util.dart";
  var L3 = "package:angular/src/core/change_detection/differs/default_keyvalue_differ.dart";
  var L2 = "package:angular/src/core/change_detection/component_state.dart";
  var L4 = "package:angular/src/core/change_detection/change_detector_ref.dart";
  var L1 = "package:angular/src/core/change_detection/differs/default_iterable_differ.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: change_detection_util._DevModeEquality.prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: IterableEqualityOfObjectL().prototype,
        [IterableEquality__elementEquality]: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.fn(default_iterable_differ._trackByIdentity, intLAnddynamicToObjectL());
    },
    get C3() {
      return C3 = dart.constList([], ObjectL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: OpaqueTokenOfStringL().prototype,
        [OpaqueToken__uniqueName]: "APP_ID"
      });
    }
  }, false);
  lang.isPrimitive = function isPrimitive(obj) {
    return numL().is(obj) || boolL().is(obj) || obj == null || StringL().is(obj);
  };
  var C1;
  var IterableEquality__elementEquality = dart.privateName(equality, "IterableEquality._elementEquality");
  var C0;
  change_detection_util._DevModeEquality = class _DevModeEquality extends equality.DefaultEquality$(dart.legacy(core.Object)) {
    equals(a, b) {
      if (IterableLOfObjectL().is(a) && IterableLOfObjectL().is(b)) {
        return (C0 || CT.C0).equals(a, b);
      } else if (!IterableLOfObjectL().is(a) && !dart.test(lang.isPrimitive(a)) && !IterableLOfObjectL().is(b) && !dart.test(lang.isPrimitive(b))) {
        return true;
      } else {
        return core.identical(a, b);
      }
    }
  };
  (change_detection_util._DevModeEquality.new = function() {
    change_detection_util._DevModeEquality.__proto__.new.call(this);
    ;
  }).prototype = change_detection_util._DevModeEquality.prototype;
  dart.addTypeTests(change_detection_util._DevModeEquality);
  dart.addTypeCaches(change_detection_util._DevModeEquality);
  dart.setLibraryUri(change_detection_util._DevModeEquality, L0);
  var previousValue$ = dart.privateName(change_detection_util, "SimpleChange.previousValue");
  var currentValue$ = dart.privateName(change_detection_util, "SimpleChange.currentValue");
  change_detection_util.SimpleChange = class SimpleChange extends core.Object {
    get previousValue() {
      return this[previousValue$];
    }
    set previousValue(value) {
      this[previousValue$] = value;
    }
    get currentValue() {
      return this[currentValue$];
    }
    set currentValue(value) {
      this[currentValue$] = value;
    }
  };
  (change_detection_util.SimpleChange.new = function(previousValue, currentValue) {
    this[previousValue$] = previousValue;
    this[currentValue$] = currentValue;
    ;
  }).prototype = change_detection_util.SimpleChange.prototype;
  dart.addTypeTests(change_detection_util.SimpleChange);
  dart.addTypeCaches(change_detection_util.SimpleChange);
  dart.setLibraryUri(change_detection_util.SimpleChange, L0);
  dart.setFieldSignature(change_detection_util.SimpleChange, () => ({
    __proto__: dart.getFields(change_detection_util.SimpleChange.__proto__),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic)
  }));
  change_detection_util.devModeEqual = function devModeEqual(a, b) {
    return (C1 || CT.C1).equals(a, b);
  };
  var _length = dart.privateName(default_iterable_differ, "_length");
  var _collection = dart.privateName(default_iterable_differ, "_collection");
  var _linkedRecords = dart.privateName(default_iterable_differ, "_linkedRecords");
  var _unlinkedRecords = dart.privateName(default_iterable_differ, "_unlinkedRecords");
  var _previousItHead = dart.privateName(default_iterable_differ, "_previousItHead");
  var _itHead = dart.privateName(default_iterable_differ, "_itHead");
  var _itTail = dart.privateName(default_iterable_differ, "_itTail");
  var _additionsHead = dart.privateName(default_iterable_differ, "_additionsHead");
  var _additionsTail = dart.privateName(default_iterable_differ, "_additionsTail");
  var _movesHead = dart.privateName(default_iterable_differ, "_movesHead");
  var _movesTail = dart.privateName(default_iterable_differ, "_movesTail");
  var _removalsHead = dart.privateName(default_iterable_differ, "_removalsHead");
  var _removalsTail = dart.privateName(default_iterable_differ, "_removalsTail");
  var _identityChangesHead = dart.privateName(default_iterable_differ, "_identityChangesHead");
  var _identityChangesTail = dart.privateName(default_iterable_differ, "_identityChangesTail");
  var _trackByFn = dart.privateName(default_iterable_differ, "_trackByFn");
  var C2;
  var _nextRemoved = dart.privateName(default_iterable_differ, "_nextRemoved");
  var _next = dart.privateName(default_iterable_differ, "_next");
  var _nextAdded = dart.privateName(default_iterable_differ, "_nextAdded");
  var _nextIdentityChange = dart.privateName(default_iterable_differ, "_nextIdentityChange");
  var C3;
  var _reset = dart.privateName(default_iterable_differ, "_reset");
  var _mismatch = dart.privateName(default_iterable_differ, "_mismatch");
  var _verifyReinsertion = dart.privateName(default_iterable_differ, "_verifyReinsertion");
  var _addIdentityChange = dart.privateName(default_iterable_differ, "_addIdentityChange");
  var _truncate = dart.privateName(default_iterable_differ, "_truncate");
  var _nextPrevious = dart.privateName(default_iterable_differ, "_nextPrevious");
  var _nextMoved = dart.privateName(default_iterable_differ, "_nextMoved");
  var _prev = dart.privateName(default_iterable_differ, "_prev");
  var _remove = dart.privateName(default_iterable_differ, "_remove");
  var _moveAfter = dart.privateName(default_iterable_differ, "_moveAfter");
  var _reinsertAfter = dart.privateName(default_iterable_differ, "_reinsertAfter");
  var _addAfter = dart.privateName(default_iterable_differ, "_addAfter");
  var _addToMoves = dart.privateName(default_iterable_differ, "_addToMoves");
  var _unlink = dart.privateName(default_iterable_differ, "_unlink");
  var _addToRemovals = dart.privateName(default_iterable_differ, "_addToRemovals");
  var _prevRemoved = dart.privateName(default_iterable_differ, "_prevRemoved");
  var _insertAfter = dart.privateName(default_iterable_differ, "_insertAfter");
  default_iterable_differ.DefaultIterableDiffer = class DefaultIterableDiffer extends core.Object {
    clone(trackByFn) {
      let t0;
      let differ = new default_iterable_differ.DefaultIterableDiffer.new(trackByFn);
      t0 = differ;
      return (() => {
        t0[_length] = this[_length];
        t0[_collection] = this[_collection];
        t0[_linkedRecords] = this[_linkedRecords];
        t0[_unlinkedRecords] = this[_unlinkedRecords];
        t0[_previousItHead] = this[_previousItHead];
        t0[_itHead] = this[_itHead];
        t0[_itTail] = this[_itTail];
        t0[_additionsHead] = this[_additionsHead];
        t0[_additionsTail] = this[_additionsTail];
        t0[_movesHead] = this[_movesHead];
        t0[_movesTail] = this[_movesTail];
        t0[_removalsHead] = this[_removalsHead];
        t0[_removalsTail] = this[_removalsTail];
        t0[_identityChangesHead] = this[_identityChangesHead];
        t0[_identityChangesTail] = this[_identityChangesTail];
        return t0;
      })();
    }
    get collection() {
      return this[_collection];
    }
    get length() {
      return this[_length];
    }
    forEachOperation(fn) {
      let t2, t1, t0, t2$, t1$, t0$;
      let nextIt = this[_itHead];
      let nextRemove = this[_removalsHead];
      let addRemoveOffset = 0;
      let sizeDeficit = null;
      let moveOffsets = null;
      while (nextIt != null || nextRemove != null) {
        let record = nextRemove == null || nextIt != null && dart.notNull(nextIt.currentIndex) < dart.notNull(default_iterable_differ._getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets)) ? nextIt : nextRemove;
        let adjPreviousIndex = default_iterable_differ._getPreviousIndex(optimizations.unsafeCast(CollectionChangeRecordL(), record), addRemoveOffset, moveOffsets);
        let currentIndex = optimizations.unsafeCast(intL(), dart.dload(record, 'currentIndex'));
        if (core.identical(record, nextRemove)) {
          addRemoveOffset = addRemoveOffset - 1;
          nextRemove = nextRemove[_nextRemoved];
        } else {
          nextIt = nextIt[_next];
          if (dart.dload(record, 'previousIndex') == null) {
            addRemoveOffset = addRemoveOffset + 1;
          } else {
            moveOffsets == null ? moveOffsets = JSArrayOfintL().of([]) : null;
            let localMovePreviousIndex = dart.notNull(adjPreviousIndex) - addRemoveOffset;
            let localCurrentIndex = dart.notNull(currentIndex) - addRemoveOffset;
            if (localMovePreviousIndex !== localCurrentIndex) {
              for (let i = 0; i < localMovePreviousIndex; i = i + 1) {
                let offset = null;
                if (i < dart.notNull(moveOffsets[$length])) {
                  offset = moveOffsets[$_get](i);
                } else {
                  if (dart.notNull(moveOffsets[$length]) > i) {
                    offset = (t0 = moveOffsets, t1 = i, t2 = 0, t0[$_set](t1, t2), t2);
                  } else {
                    sizeDeficit = i - dart.notNull(moveOffsets[$length]) + 1;
                    for (let j = 0; j < dart.notNull(sizeDeficit); j = j + 1) {
                      moveOffsets[$add](null);
                    }
                    offset = (t0$ = moveOffsets, t1$ = i, t2$ = 0, t0$[$_set](t1$, t2$), t2$);
                  }
                }
                let index = dart.notNull(offset) + i;
                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                  moveOffsets[$_set](i, dart.notNull(offset) + 1);
                }
              }
              let previousIndex = optimizations.unsafeCast(intL(), dart.dload(record, 'previousIndex'));
              sizeDeficit = dart.notNull(previousIndex) - dart.notNull(moveOffsets[$length]) + 1;
              for (let j = 0; j < dart.notNull(sizeDeficit); j = j + 1) {
                moveOffsets[$add](null);
              }
              moveOffsets[$_set](previousIndex, localCurrentIndex - localMovePreviousIndex);
            }
          }
        }
        if (adjPreviousIndex != currentIndex) {
          fn(optimizations.unsafeCast(CollectionChangeRecordL(), record), adjPreviousIndex, currentIndex);
        }
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead]; record != null; record = record[_nextAdded]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead]; record != null; record = record[_nextRemoved]) {
        fn(record);
      }
    }
    forEachIdentityChange(fn) {
      for (let record = this[_identityChangesHead]; record != null; record = record[_nextIdentityChange]) {
        fn(record);
      }
    }
    diff(collection) {
      if (collection != null) {
        if (!IterableLOfObjectL().is(collection)) {
          dart.throw(new core.StateError.new("Error trying to diff '" + dart.str(collection) + "'"));
        }
      } else {
        collection = C3 || CT.C3;
      }
      return dart.test(this.check(collection)) ? this : null;
    }
    onDestroy() {
    }
    check(collection) {
      let t2, t1;
      this[_reset]();
      let record = this[_itHead];
      let mayBeDirty = false;
      let index = null;
      let item = null;
      let itemTrackBy = null;
      if (ListLOfObjectL().is(collection)) {
        let list = collection;
        this[_length] = collection[$length];
        for (let t0 = index = 0; dart.notNull(index) < dart.notNull(this[_length]); index = dart.notNull(index) + 1) {
          item = list[$_get](index);
          itemTrackBy = (t1 = index, t2 = item, this[_trackByFn](t1, t2));
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) {
              this[_addIdentityChange](record, item);
            }
          }
          record = record[_next];
        }
      } else {
        index = 0;
        collection[$forEach](dart.fn(item => {
          let t2, t1;
          itemTrackBy = (t1 = index, t2 = item, this[_trackByFn](t1, t2));
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) {
              this[_addIdentityChange](record, item);
            }
          }
          record = record[_next];
          index = dart.notNull(index) + 1;
        }, ObjectLToNull()));
        this[_length] = index;
      }
      this[_truncate](record);
      this[_collection] = collection;
      return this.isDirty;
    }
    get isDirty() {
      return this[_additionsHead] != null || this[_movesHead] != null || this[_removalsHead] != null || this[_identityChangesHead] != null;
    }
    [_reset]() {
      if (dart.test(this.isDirty)) {
        let record = null;
        let nextRecord = null;
        for (let t1 = record = this[_previousItHead] = this[_itHead]; record != null; record = record[_next]) {
          record[_nextPrevious] = record[_next];
        }
        for (let t2 = record = this[_additionsHead]; record != null; record = record[_nextAdded]) {
          record.previousIndex = record.currentIndex;
        }
        this[_additionsHead] = this[_additionsTail] = null;
        for (let t3 = record = this[_movesHead]; record != null; record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record[_nextMoved];
        }
        this[_movesHead] = this[_movesTail] = null;
        this[_removalsHead] = this[_removalsTail] = null;
        this[_identityChangesHead] = this[_identityChangesTail] = null;
      }
    }
    [_mismatch](record, item, itemTrackBy, index) {
      let previousRecord = null;
      if (record == null) {
        previousRecord = this[_itTail];
      } else {
        previousRecord = record[_prev];
        this[_remove](record);
      }
      record = this[_linkedRecords] == null ? null : this[_linkedRecords].get(itemTrackBy, index);
      if (record != null) {
        if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
        this[_moveAfter](record, previousRecord, index);
      } else {
        record = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
        if (record != null) {
          if (!core.identical(record.item, item)) {
            this[_addIdentityChange](record, item);
          }
          this[_reinsertAfter](record, previousRecord, index);
        } else {
          record = this[_addAfter](new default_iterable_differ.CollectionChangeRecord.new(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    }
    [_verifyReinsertion](record, item, itemTrackBy, index) {
      let reinsertRecord = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
      if (reinsertRecord != null) {
        record = this[_reinsertAfter](reinsertRecord, record[_prev], index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this[_addToMoves](record, index);
      }
      return record;
    }
    [_truncate](record) {
      while (record != null) {
        let nextRecord = record[_next];
        this[_addToRemovals](this[_unlink](record));
        record = nextRecord;
      }
      if (this[_unlinkedRecords] != null) {
        this[_unlinkedRecords].clear();
      }
      if (this[_additionsTail] != null) {
        this[_additionsTail][_nextAdded] = null;
      }
      if (this[_movesTail] != null) {
        this[_movesTail][_nextMoved] = null;
      }
      if (this[_itTail] != null) {
        this[_itTail][_next] = null;
      }
      if (this[_removalsTail] != null) {
        this[_removalsTail][_nextRemoved] = null;
      }
      if (this[_identityChangesTail] != null) {
        this[_identityChangesTail][_nextIdentityChange] = null;
      }
    }
    [_reinsertAfter](record, prevRecord, index) {
      if (this[_unlinkedRecords] != null) {
        this[_unlinkedRecords].remove(record);
      }
      let prev = record[_prevRemoved];
      let next = record[_nextRemoved];
      if (prev == null) {
        this[_removalsHead] = next;
      } else {
        prev[_nextRemoved] = next;
      }
      if (next == null) {
        this[_removalsTail] = prev;
      } else {
        next[_prevRemoved] = prev;
      }
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_moveAfter](record, prevRecord, index) {
      this[_unlink](record);
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_addAfter](record, prevRecord, index) {
      this[_insertAfter](record, prevRecord, index);
      if (this[_additionsTail] == null) {
        this[_additionsTail] = this[_additionsHead] = record;
      } else {
        this[_additionsTail] = this[_additionsTail][_nextAdded] = record;
      }
      return record;
    }
    [_insertAfter](record, prevRecord, index) {
      let next = prevRecord == null ? this[_itHead] : prevRecord[_next];
      record[_next] = next;
      record[_prev] = prevRecord;
      if (next == null) {
        this[_itTail] = record;
      } else {
        next[_prev] = record;
      }
      if (prevRecord == null) {
        this[_itHead] = record;
      } else {
        prevRecord[_next] = record;
      }
      this[_linkedRecords] == null ? this[_linkedRecords] = new default_iterable_differ._DuplicateMap.new() : null;
      this[_linkedRecords].put(record);
      record.currentIndex = index;
      return record;
    }
    [_remove](record) {
      return this[_addToRemovals](this[_unlink](record));
    }
    [_unlink](record) {
      let t4;
      t4 = this[_linkedRecords];
      t4 == null ? null : t4.remove(record);
      let prev = record[_prev];
      let next = record[_next];
      if (prev == null) {
        this[_itHead] = next;
      } else {
        prev[_next] = next;
      }
      if (next == null) {
        this[_itTail] = prev;
      } else {
        next[_prev] = prev;
      }
      return record;
    }
    [_addToMoves](record, toIndex) {
      if (record.previousIndex == toIndex) {
        return record;
      }
      if (this[_movesTail] == null) {
        this[_movesTail] = this[_movesHead] = record;
      } else {
        this[_movesTail] = this[_movesTail][_nextMoved] = record;
      }
      return record;
    }
    [_addToRemovals](record) {
      this[_unlinkedRecords] == null ? this[_unlinkedRecords] = new default_iterable_differ._DuplicateMap.new() : null;
      this[_unlinkedRecords].put(record);
      record.currentIndex = null;
      record[_nextRemoved] = null;
      if (this[_removalsTail] == null) {
        this[_removalsTail] = this[_removalsHead] = record;
        record[_prevRemoved] = null;
      } else {
        record[_prevRemoved] = this[_removalsTail];
        this[_removalsTail] = this[_removalsTail][_nextRemoved] = record;
      }
      return record;
    }
    [_addIdentityChange](record, item) {
      record.item = item;
      if (this[_identityChangesTail] == null) {
        this[_identityChangesTail] = this[_identityChangesHead] = record;
      } else {
        this[_identityChangesTail] = this[_identityChangesTail][_nextIdentityChange] = record;
      }
      return record;
    }
    toString() {
      if (dart.test(optimizations.isDevMode)) {
        let list = JSArrayOfObjectL().of([]);
        for (let record = this[_itHead]; record != null; record = record[_next]) {
          list[$add](record);
        }
        let previous = JSArrayOfObjectL().of([]);
        for (let record = this[_previousItHead]; record != null; record = record[_nextPrevious]) {
          previous[$add](record);
        }
        let additions = [];
        this.forEachAddedItem(dart.fn(record => additions[$add](record), CollectionChangeRecordLTovoid()));
        let moves = [];
        for (let record = this[_movesHead]; record != null; record = record[_nextMoved]) {
          moves[$add](record);
        }
        let removals = JSArrayOfObjectL().of([]);
        this.forEachRemovedItem(dart.fn(record => removals[$add](record), CollectionChangeRecordLTovoid()));
        let identityChanges = JSArrayOfObjectL().of([]);
        this.forEachIdentityChange(dart.fn(record => identityChanges[$add](record), CollectionChangeRecordLTovoid()));
        return "collection: " + dart.notNull(list[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "moves: " + dart.notNull(moves[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n" + "identityChanges: " + dart.notNull(identityChanges[$join](", ")) + "\n";
      } else {
        return super[$toString]();
      }
    }
  };
  (default_iterable_differ.DefaultIterableDiffer.new = function(trackByFn = null) {
    let t0;
    this[_length] = null;
    this[_collection] = null;
    this[_linkedRecords] = null;
    this[_unlinkedRecords] = null;
    this[_previousItHead] = null;
    this[_itHead] = null;
    this[_itTail] = null;
    this[_additionsHead] = null;
    this[_additionsTail] = null;
    this[_movesHead] = null;
    this[_movesTail] = null;
    this[_removalsHead] = null;
    this[_removalsTail] = null;
    this[_identityChangesHead] = null;
    this[_identityChangesTail] = null;
    this[_trackByFn] = (t0 = trackByFn, t0 == null ? C2 || CT.C2 : t0);
    ;
  }).prototype = default_iterable_differ.DefaultIterableDiffer.prototype;
  dart.addTypeTests(default_iterable_differ.DefaultIterableDiffer);
  dart.addTypeCaches(default_iterable_differ.DefaultIterableDiffer);
  dart.setMethodSignature(default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getMethods(default_iterable_differ.DefaultIterableDiffer.__proto__),
    clone: dart.fnType(dart.legacy(default_iterable_differ.DefaultIterableDiffer), [dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(core.int), dart.dynamic]))]),
    forEachOperation: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int), dart.legacy(core.int)]))]),
    forEachAddedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]))]),
    forEachRemovedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]))]),
    forEachIdentityChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]))]),
    diff: dart.fnType(dart.legacy(default_iterable_differ.DefaultIterableDiffer), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    onDestroy: dart.fnType(dart.void, []),
    check: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    [_reset]: dart.fnType(dart.void, []),
    [_mismatch]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.dynamic, dart.dynamic, dart.legacy(core.int)]),
    [_verifyReinsertion]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.dynamic, dart.dynamic, dart.legacy(core.int)]),
    [_truncate]: dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_reinsertAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_moveAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_addAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_insertAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_remove]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_unlink]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_addToMoves]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_addToRemovals]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_addIdentityChange]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getGetters(default_iterable_differ.DefaultIterableDiffer.__proto__),
    collection: dart.legacy(core.Iterable$(dart.legacy(core.Object))),
    length: dart.legacy(core.int),
    isDirty: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(default_iterable_differ.DefaultIterableDiffer, L1);
  dart.setFieldSignature(default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getFields(default_iterable_differ.DefaultIterableDiffer.__proto__),
    [_trackByFn]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(core.int), dart.dynamic]))),
    [_length]: dart.fieldType(dart.legacy(core.int)),
    [_collection]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(core.Object)))),
    [_linkedRecords]: dart.fieldType(dart.legacy(default_iterable_differ._DuplicateMap)),
    [_unlinkedRecords]: dart.fieldType(dart.legacy(default_iterable_differ._DuplicateMap)),
    [_previousItHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_itHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_itTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_additionsHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_additionsTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_movesHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_movesTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_removalsHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_removalsTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_identityChangesHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_identityChangesTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord))
  }));
  dart.defineExtensionMethods(default_iterable_differ.DefaultIterableDiffer, ['toString']);
  var _prevDup = dart.privateName(default_iterable_differ, "_prevDup");
  var _nextDup = dart.privateName(default_iterable_differ, "_nextDup");
  var item$ = dart.privateName(default_iterable_differ, "CollectionChangeRecord.item");
  var trackById$ = dart.privateName(default_iterable_differ, "CollectionChangeRecord.trackById");
  var currentIndex = dart.privateName(default_iterable_differ, "CollectionChangeRecord.currentIndex");
  var previousIndex = dart.privateName(default_iterable_differ, "CollectionChangeRecord.previousIndex");
  default_iterable_differ.CollectionChangeRecord = class CollectionChangeRecord extends core.Object {
    get item() {
      return this[item$];
    }
    set item(value) {
      this[item$] = value;
    }
    get trackById() {
      return this[trackById$];
    }
    set trackById(value) {
      this[trackById$] = value;
    }
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    get previousIndex() {
      return this[previousIndex];
    }
    set previousIndex(value) {
      this[previousIndex] = value;
    }
    toString() {
      return this.previousIndex == this.currentIndex ? dart.toString(this.item) : dart.str(this.item) + "[" + dart.str(this.previousIndex) + "->" + dart.str(this.currentIndex) + "]";
    }
  };
  (default_iterable_differ.CollectionChangeRecord.new = function(item, trackById) {
    this[currentIndex] = null;
    this[previousIndex] = null;
    this[_nextPrevious] = null;
    this[_prev] = null;
    this[_next] = null;
    this[_prevDup] = null;
    this[_nextDup] = null;
    this[_prevRemoved] = null;
    this[_nextRemoved] = null;
    this[_nextAdded] = null;
    this[_nextMoved] = null;
    this[_nextIdentityChange] = null;
    this[item$] = item;
    this[trackById$] = trackById;
    ;
  }).prototype = default_iterable_differ.CollectionChangeRecord.prototype;
  dart.addTypeTests(default_iterable_differ.CollectionChangeRecord);
  dart.addTypeCaches(default_iterable_differ.CollectionChangeRecord);
  dart.setMethodSignature(default_iterable_differ.CollectionChangeRecord, () => ({
    __proto__: dart.getMethods(default_iterable_differ.CollectionChangeRecord.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(default_iterable_differ.CollectionChangeRecord, L1);
  dart.setFieldSignature(default_iterable_differ.CollectionChangeRecord, () => ({
    __proto__: dart.getFields(default_iterable_differ.CollectionChangeRecord.__proto__),
    item: dart.fieldType(dart.dynamic),
    trackById: dart.fieldType(dart.dynamic),
    currentIndex: dart.fieldType(dart.legacy(core.int)),
    previousIndex: dart.fieldType(dart.legacy(core.int)),
    [_nextPrevious]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_prev]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_next]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_prevDup]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextDup]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_prevRemoved]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextRemoved]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextAdded]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextMoved]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextIdentityChange]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord))
  }));
  dart.defineExtensionMethods(default_iterable_differ.CollectionChangeRecord, ['toString']);
  var _head = dart.privateName(default_iterable_differ, "_head");
  var _tail = dart.privateName(default_iterable_differ, "_tail");
  default_iterable_differ._DuplicateItemRecordList = class _DuplicateItemRecordList extends core.Object {
    add(record) {
      if (this[_head] == null) {
        this[_head] = this[_tail] = record;
        record[_nextDup] = null;
        record[_prevDup] = null;
      } else {
        this[_tail][_nextDup] = record;
        record[_prevDup] = this[_tail];
        record[_nextDup] = null;
        this[_tail] = record;
      }
    }
    get(trackById, afterIndex) {
      let record = null;
      for (let t4 = record = this[_head]; record != null; record = record[_nextDup]) {
        if ((afterIndex == null || dart.notNull(afterIndex) < dart.notNull(record.currentIndex)) && core.identical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    }
    remove(record) {
      let prev = record[_prevDup];
      let next = record[_nextDup];
      if (prev == null) {
        this[_head] = next;
      } else {
        prev[_nextDup] = next;
      }
      if (next == null) {
        this[_tail] = prev;
      } else {
        next[_prevDup] = prev;
      }
      return this[_head] == null;
    }
  };
  (default_iterable_differ._DuplicateItemRecordList.new = function() {
    this[_head] = null;
    this[_tail] = null;
    ;
  }).prototype = default_iterable_differ._DuplicateItemRecordList.prototype;
  dart.addTypeTests(default_iterable_differ._DuplicateItemRecordList);
  dart.addTypeCaches(default_iterable_differ._DuplicateItemRecordList);
  dart.setMethodSignature(default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getMethods(default_iterable_differ._DuplicateItemRecordList.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    get: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.dynamic, dart.legacy(core.int)]),
    remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(default_iterable_differ.CollectionChangeRecord)])
  }));
  dart.setLibraryUri(default_iterable_differ._DuplicateItemRecordList, L1);
  dart.setFieldSignature(default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getFields(default_iterable_differ._DuplicateItemRecordList.__proto__),
    [_head]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_tail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord))
  }));
  var _map = dart.privateName(default_iterable_differ, "_map");
  default_iterable_differ._DuplicateMap = class _DuplicateMap extends core.Object {
    put(record) {
      let key = record.trackById;
      let duplicates = this[_map][$_get](key);
      if (duplicates == null) {
        duplicates = new default_iterable_differ._DuplicateItemRecordList.new();
        this[_map][$_set](key, duplicates);
      }
      duplicates.add(record);
    }
    get(trackById, afterIndex = null) {
      let recordList = this[_map][$_get](trackById);
      return recordList == null ? null : recordList.get(trackById, afterIndex);
    }
    remove(record) {
      let key = record.trackById;
      let recordList = this[_map][$_get](key);
      if (dart.test(recordList.remove(record))) {
        dart.test(this[_map][$containsKey](key)) && (this[_map][$remove](key) != null || true);
      }
      return record;
    }
    get isEmpty() {
      return this[_map][$length] === 0;
    }
    clear() {
      this[_map][$clear]();
    }
    toString() {
      return "_DuplicateMap(" + dart.str(this[_map]) + ")";
    }
  };
  (default_iterable_differ._DuplicateMap.new = function() {
    this[_map] = new (IdentityMapOfdynamic$_DuplicateItemRecordListL()).new();
    ;
  }).prototype = default_iterable_differ._DuplicateMap.prototype;
  dart.addTypeTests(default_iterable_differ._DuplicateMap);
  dart.addTypeCaches(default_iterable_differ._DuplicateMap);
  dart.setMethodSignature(default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getMethods(default_iterable_differ._DuplicateMap.__proto__),
    put: dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    get: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.dynamic], [dart.legacy(core.int)]),
    remove: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    clear: dart.fnType(dart.void, []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getGetters(default_iterable_differ._DuplicateMap.__proto__),
    isEmpty: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(default_iterable_differ._DuplicateMap, L1);
  dart.setFieldSignature(default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getFields(default_iterable_differ._DuplicateMap.__proto__),
    [_map]: dart.finalFieldType(dart.legacy(core.Map$(dart.dynamic, dart.legacy(default_iterable_differ._DuplicateItemRecordList))))
  }));
  dart.defineExtensionMethods(default_iterable_differ._DuplicateMap, ['toString']);
  default_iterable_differ._trackByIdentity = function _trackByIdentity(index, item) {
    return item;
  };
  default_iterable_differ._getPreviousIndex = function _getPreviousIndex(item, addRemoveOffset, moveOffsets) {
    let previousIndex = item.previousIndex;
    if (previousIndex == null) return previousIndex;
    let moveOffset = 0;
    if (moveOffsets != null && dart.notNull(previousIndex) < dart.notNull(moveOffsets[$length])) {
      moveOffset = moveOffsets[$_get](previousIndex);
    }
    return dart.notNull(previousIndex) + dart.notNull(addRemoveOffset) + dart.notNull(moveOffset);
  };
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C4;
  dart.defineLazy(application_tokens, {
    /*application_tokens.APP_ID*/get APP_ID() {
      return C4 || CT.C4;
    }
  }, true);
  var _onStateChanged = dart.privateName(component_state, "_onStateChanged");
  component_state.ComponentState = class ComponentState extends core.Object {
    setState(scheduleChangeDetectionAfter) {
      scheduleChangeDetectionAfter();
      this.deliverStateChanges();
    }
    deliverStateChanges() {
      let onStateChanged = this[_onStateChanged];
      if (onStateChanged != null) {
        onStateChanged();
      }
    }
  };
  (component_state.ComponentState.new = function() {
    this[_onStateChanged] = null;
    ;
  }).prototype = component_state.ComponentState.prototype;
  dart.addTypeTests(component_state.ComponentState);
  dart.addTypeCaches(component_state.ComponentState);
  dart.setMethodSignature(component_state.ComponentState, () => ({
    __proto__: dart.getMethods(component_state.ComponentState.__proto__),
    setState: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    deliverStateChanges: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(component_state.ComponentState, L2);
  dart.setFieldSignature(component_state.ComponentState, () => ({
    __proto__: dart.getFields(component_state.ComponentState.__proto__),
    [_onStateChanged]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [])))
  }));
  component_state.internalSetStateChanged = function internalSetStateChanged(component, onStateChanged) {
    component[_onStateChanged] = onStateChanged;
  };
  var _records = dart.privateName(default_keyvalue_differ, "_records");
  var _mapHead = dart.privateName(default_keyvalue_differ, "_mapHead");
  var _appendAfter = dart.privateName(default_keyvalue_differ, "_appendAfter");
  var _previousMapHead = dart.privateName(default_keyvalue_differ, "_previousMapHead");
  var _changesHead = dart.privateName(default_keyvalue_differ, "_changesHead");
  var _changesTail = dart.privateName(default_keyvalue_differ, "_changesTail");
  var _additionsHead$ = dart.privateName(default_keyvalue_differ, "_additionsHead");
  var _additionsTail$ = dart.privateName(default_keyvalue_differ, "_additionsTail");
  var _removalsHead$ = dart.privateName(default_keyvalue_differ, "_removalsHead");
  var _nextChanged = dart.privateName(default_keyvalue_differ, "_nextChanged");
  var _nextAdded$ = dart.privateName(default_keyvalue_differ, "_nextAdded");
  var _next$ = dart.privateName(default_keyvalue_differ, "_next");
  var _reset$ = dart.privateName(default_keyvalue_differ, "_reset");
  var _addToAdditions = dart.privateName(default_keyvalue_differ, "_addToAdditions");
  var _prev$ = dart.privateName(default_keyvalue_differ, "_prev");
  var _maybeAddToChanges = dart.privateName(default_keyvalue_differ, "_maybeAddToChanges");
  var _getOrCreateRecord = dart.privateName(default_keyvalue_differ, "_getOrCreateRecord");
  var _insertBeforeOrAppend = dart.privateName(default_keyvalue_differ, "_insertBeforeOrAppend");
  var _addToChanges = dart.privateName(default_keyvalue_differ, "_addToChanges");
  var _nextPrevious$ = dart.privateName(default_keyvalue_differ, "_nextPrevious");
  default_keyvalue_differ.DefaultKeyValueDiffer = class DefaultKeyValueDiffer extends core.Object {
    get isDirty() {
      return this[_additionsHead$] != null || this[_changesHead] != null || this[_removalsHead$] != null;
    }
    forEachChangedItem(fn) {
      for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
        fn(record);
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead$]; record != null; record = record[_nextAdded$]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead$]; record != null; record = record[_next$]) {
        fn(record);
      }
    }
    diff(map) {
      map == null ? map = new (LinkedMapOfObjectL$ObjectL()).new() : null;
      if (!MapLOfObjectL$ObjectL().is(map)) {
        dart.throw(new core.StateError.new("Error trying to diff '" + dart.str(map) + "'"));
      }
      if (dart.test(this.check(map))) {
        return this;
      } else {
        return null;
      }
    }
    check(map) {
      this[_reset$]();
      if (this[_mapHead] == null) {
        map[$forEach](dart.fn((key, value) => {
          let t5;
          let record = (t5 = new default_keyvalue_differ.KeyValueChangeRecord.new(key), (() => {
            t5.currentValue = value;
            return t5;
          })());
          this[_records][$_set](key, record);
          this[_addToAdditions](record);
          if (this[_appendAfter] == null) {
            this[_mapHead] = record;
          } else {
            record[_prev$] = this[_appendAfter];
            this[_appendAfter][_next$] = record;
          }
          this[_appendAfter] = record;
        }, ObjectLAndObjectLToNull()));
        return this[_mapHead] != null;
      }
      let insertBefore = this[_mapHead];
      map[$forEach](dart.fn((key, value) => {
        let t5;
        if (dart.equals((t5 = insertBefore, t5 == null ? null : t5.key), key)) {
          this[_maybeAddToChanges](insertBefore, value);
          this[_appendAfter] = insertBefore;
          insertBefore = insertBefore[_next$];
        } else {
          let record = this[_getOrCreateRecord](key, value);
          insertBefore = this[_insertBeforeOrAppend](insertBefore, record);
        }
      }, ObjectLAndObjectLToNull()));
      if (insertBefore != null) {
        this[_removalsHead$] = insertBefore;
        for (let record = insertBefore; record != null; record = record[_next$]) {
          this[_records][$remove](record.key);
          record.previousValue = record.currentValue;
          record.currentValue = null;
        }
        if (dart.equals(this[_removalsHead$], this[_mapHead])) {
          this[_mapHead] = null;
        } else {
          this[_removalsHead$][_prev$][_next$] = null;
        }
      }
      return this.isDirty;
    }
    [_insertBeforeOrAppend](before, record) {
      let t5;
      if (before != null) {
        record[_next$] = before;
        record[_prev$] = before[_prev$];
        t5 = before[_prev$];
        t5 == null ? null : t5[_next$] = record;
        before[_prev$] = record;
        if (dart.equals(before, this[_mapHead])) {
          this[_mapHead] = record;
        }
        this[_appendAfter] = before;
        return before;
      }
      if (this[_appendAfter] != null) {
        this[_appendAfter][_next$] = record;
        record[_prev$] = this[_appendAfter];
      } else {
        this[_mapHead] = record;
      }
      this[_appendAfter] = record;
      return null;
    }
    [_getOrCreateRecord](key, value) {
      let t5, t5$, t5$0;
      if (dart.test(this[_records][$containsKey](key))) {
        let record = this[_records][$_get](key);
        this[_maybeAddToChanges](record, value);
        t5 = record[_prev$];
        t5 == null ? null : t5[_next$] = record[_next$];
        t5$ = record[_next$];
        t5$ == null ? null : t5$[_prev$] = record[_prev$];
        record[_prev$] = null;
        record[_next$] = null;
        return record;
      }
      let record = (t5$0 = new default_keyvalue_differ.KeyValueChangeRecord.new(key), (() => {
        t5$0.currentValue = value;
        return t5$0;
      })());
      this[_records][$_set](key, record);
      this[_addToAdditions](record);
      return record;
    }
    [_maybeAddToChanges](record, value) {
      if (!core.identical(value, record.currentValue)) {
        record.previousValue = record.currentValue;
        record.currentValue = value;
        this[_addToChanges](record);
      }
    }
    [_reset$]() {
      this[_appendAfter] = null;
      if (dart.test(this.isDirty)) {
        this[_previousMapHead] = this[_mapHead];
        for (let record = this[_previousMapHead]; record != null; record = record[_next$]) {
          record[_nextPrevious$] = record[_next$];
        }
        for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
          record.previousValue = record.currentValue;
        }
        for (let record = this[_additionsHead$]; record != null; record = record[_nextAdded$]) {
          record.previousValue = record.currentValue;
        }
        this[_changesHead] = this[_changesTail] = null;
        this[_additionsHead$] = this[_additionsTail$] = null;
        this[_removalsHead$] = null;
      }
    }
    [_addToAdditions](record) {
      if (this[_additionsHead$] == null) {
        this[_additionsHead$] = this[_additionsTail$] = record;
      } else {
        this[_additionsTail$][_nextAdded$] = record;
        this[_additionsTail$] = record;
      }
    }
    [_addToChanges](record) {
      if (this[_changesHead] == null) {
        this[_changesHead] = this[_changesTail] = record;
      } else {
        this[_changesTail][_nextChanged] = record;
        this[_changesTail] = record;
      }
    }
    toString() {
      let items = JSArrayOfObjectL().of([]);
      let previous = JSArrayOfObjectL().of([]);
      let changes = JSArrayOfObjectL().of([]);
      let additions = JSArrayOfObjectL().of([]);
      let removals = JSArrayOfObjectL().of([]);
      for (let record = this[_mapHead]; record != null; record = record[_next$]) {
        items[$add](record);
      }
      for (let record = this[_previousMapHead]; record != null; record = record[_nextPrevious$]) {
        previous[$add](record);
      }
      for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
        changes[$add](record);
      }
      for (let record = this[_additionsHead$]; record != null; record = record[_nextAdded$]) {
        additions[$add](record);
      }
      for (let record = this[_removalsHead$]; record != null; record = record[_next$]) {
        removals[$add](record);
      }
      return "map: " + dart.notNull(items[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "changes: " + dart.notNull(changes[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n";
    }
  };
  (default_keyvalue_differ.DefaultKeyValueDiffer.new = function() {
    this[_records] = new (LinkedMapOfdynamic$KeyValueChangeRecordL()).new();
    this[_mapHead] = null;
    this[_appendAfter] = null;
    this[_previousMapHead] = null;
    this[_changesHead] = null;
    this[_changesTail] = null;
    this[_additionsHead$] = null;
    this[_additionsTail$] = null;
    this[_removalsHead$] = null;
    ;
  }).prototype = default_keyvalue_differ.DefaultKeyValueDiffer.prototype;
  dart.addTypeTests(default_keyvalue_differ.DefaultKeyValueDiffer);
  dart.addTypeCaches(default_keyvalue_differ.DefaultKeyValueDiffer);
  dart.setMethodSignature(default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getMethods(default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    forEachChangedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]))]),
    forEachAddedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]))]),
    forEachRemovedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]))]),
    diff: dart.fnType(dart.legacy(default_keyvalue_differ.DefaultKeyValueDiffer), [dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(core.Object)))]),
    check: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(core.Object)))]),
    [_insertBeforeOrAppend]: dart.fnType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]),
    [_getOrCreateRecord]: dart.fnType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), [dart.dynamic, dart.dynamic]),
    [_maybeAddToChanges]: dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), dart.dynamic]),
    [_reset$]: dart.fnType(dart.void, []),
    [_addToAdditions]: dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]),
    [_addToChanges]: dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getGetters(default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    isDirty: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(default_keyvalue_differ.DefaultKeyValueDiffer, L3);
  dart.setFieldSignature(default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getFields(default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    [_records]: dart.finalFieldType(dart.legacy(core.Map$(dart.dynamic, dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)))),
    [_mapHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_appendAfter]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_previousMapHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_changesHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_changesTail]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_additionsHead$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_additionsTail$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_removalsHead$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord))
  }));
  dart.defineExtensionMethods(default_keyvalue_differ.DefaultKeyValueDiffer, ['toString']);
  var key$ = dart.privateName(default_keyvalue_differ, "KeyValueChangeRecord.key");
  var previousValue = dart.privateName(default_keyvalue_differ, "KeyValueChangeRecord.previousValue");
  var currentValue = dart.privateName(default_keyvalue_differ, "KeyValueChangeRecord.currentValue");
  default_keyvalue_differ.KeyValueChangeRecord = class KeyValueChangeRecord extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      this[key$] = value;
    }
    get previousValue() {
      return this[previousValue];
    }
    set previousValue(value) {
      this[previousValue] = value;
    }
    get currentValue() {
      return this[currentValue];
    }
    set currentValue(value) {
      this[currentValue] = value;
    }
    toString() {
      return core.identical(this.previousValue, this.currentValue) ? dart.str(this.key) : dart.str(this.key) + "[" + dart.str(this.previousValue) + "->" + dart.str(this.currentValue) + "]";
    }
  };
  (default_keyvalue_differ.KeyValueChangeRecord.new = function(key) {
    this[previousValue] = null;
    this[currentValue] = null;
    this[_nextPrevious$] = null;
    this[_next$] = null;
    this[_prev$] = null;
    this[_nextAdded$] = null;
    this[_nextChanged] = null;
    this[key$] = key;
    ;
  }).prototype = default_keyvalue_differ.KeyValueChangeRecord.prototype;
  dart.addTypeTests(default_keyvalue_differ.KeyValueChangeRecord);
  dart.addTypeCaches(default_keyvalue_differ.KeyValueChangeRecord);
  dart.setMethodSignature(default_keyvalue_differ.KeyValueChangeRecord, () => ({
    __proto__: dart.getMethods(default_keyvalue_differ.KeyValueChangeRecord.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(default_keyvalue_differ.KeyValueChangeRecord, L3);
  dart.setFieldSignature(default_keyvalue_differ.KeyValueChangeRecord, () => ({
    __proto__: dart.getFields(default_keyvalue_differ.KeyValueChangeRecord.__proto__),
    key: dart.fieldType(dart.dynamic),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic),
    [_nextPrevious$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_next$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_prev$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_nextAdded$]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_nextChanged]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord))
  }));
  dart.defineExtensionMethods(default_keyvalue_differ.KeyValueChangeRecord, ['toString']);
  change_detector_ref.ChangeDetectorRef = class ChangeDetectorRef extends core.Object {};
  (change_detector_ref.ChangeDetectorRef.new = function() {
    ;
  }).prototype = change_detector_ref.ChangeDetectorRef.prototype;
  dart.addTypeTests(change_detector_ref.ChangeDetectorRef);
  dart.addTypeCaches(change_detector_ref.ChangeDetectorRef);
  dart.setLibraryUri(change_detector_ref.ChangeDetectorRef, L4);
  dart.trackLibraries("packages/angular/src/core/application_tokens", {
    "package:angular/src/facade/lang.dart": lang,
    "package:angular/src/core/change_detection/change_detection_util.dart": change_detection_util,
    "package:angular/src/core/change_detection/differs/default_iterable_differ.dart": default_iterable_differ,
    "package:angular/src/core/application_tokens.dart": application_tokens,
    "package:angular/src/core/change_detection.dart": change_detection,
    "package:angular/src/core/change_detection/component_state.dart": component_state,
    "package:angular/src/core/change_detection/change_detection.dart": change_detection$,
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.dart": default_keyvalue_differ,
    "package:angular/src/core/change_detection/change_detector_ref.dart": change_detector_ref
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../facade/lang.dart","change_detection/change_detection_util.dart","change_detection/differs/default_iterable_differ.dart","application_tokens.dart","change_detection/component_state.dart","change_detection/differs/default_keyvalue_differ.dart","change_detection/change_detector_ref.dart"],"names":[],"mappings":"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","file":"application_tokens.unsound.ddc.js"}');
  // Exports:
  return {
    src__facade__lang: lang,
    src__core__change_detection__change_detection_util: change_detection_util,
    src__core__change_detection__differs__default_iterable_differ: default_iterable_differ,
    src__core__application_tokens: application_tokens,
    src__core__change_detection: change_detection,
    src__core__change_detection__component_state: component_state,
    src__core__change_detection__change_detection: change_detection$,
    src__core__change_detection__differs__default_keyvalue_differ: default_keyvalue_differ,
    src__core__change_detection__change_detector_ref: change_detector_ref
  };
}));

//# sourceMappingURL=application_tokens.unsound.ddc.js.map
