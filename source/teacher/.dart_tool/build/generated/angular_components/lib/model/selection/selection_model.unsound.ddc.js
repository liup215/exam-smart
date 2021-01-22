define(['dart_sdk', 'packages/observable/observable'], (function load__packages__angular_components__model__selection__selection_model(dart_sdk, packages__observable__observable) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const records = packages__observable__observable.src__records;
  const observable = packages__observable__observable.src__observable;
  const change_notifier = packages__observable__observable.src__change_notifier;
  var radio_group_single_selection_model = Object.create(dart.library);
  var delegating_selection_model = Object.create(dart.library);
  var selection_model = Object.create(dart.library);
  var $cast = dartx.cast;
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $hashCode = dartx.hashCode;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $where = dartx.where;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $toString = dartx.toString;
  var $first = dartx.first;
  var $clear = dartx.clear;
  var $single = dartx.single;
  var ChangeRecordL = () => (ChangeRecordL = dart.constFn(dart.legacy(records.ChangeRecord)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ChangeNotifierOfChangeRecordL = () => (ChangeNotifierOfChangeRecordL = dart.constFn(change_notifier.ChangeNotifier$(ChangeRecordL())))();
  var ChangeNotifierLOfChangeRecordL = () => (ChangeNotifierLOfChangeRecordL = dart.constFn(dart.legacy(ChangeNotifierOfChangeRecordL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLToObjectL = () => (ObjectLToObjectL = dart.constFn(dart.fnType(ObjectL(), [ObjectL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfChangeRecordL = () => (ListOfChangeRecordL = dart.constFn(core.List$(ChangeRecordL())))();
  var ListLOfChangeRecordL = () => (ListLOfChangeRecordL = dart.constFn(dart.legacy(ListOfChangeRecordL())))();
  var StreamOfListLOfChangeRecordL = () => (StreamOfListLOfChangeRecordL = dart.constFn(async.Stream$(ListLOfChangeRecordL())))();
  var SelectionChangeRecordOfNull = () => (SelectionChangeRecordOfNull = dart.constFn(selection_model.SelectionChangeRecord$(core.Null)))();
  var SelectionChangeRecordLOfNull = () => (SelectionChangeRecordLOfNull = dart.constFn(dart.legacy(SelectionChangeRecordOfNull())))();
  var ListOfSelectionChangeRecordLOfNull = () => (ListOfSelectionChangeRecordLOfNull = dart.constFn(core.List$(SelectionChangeRecordLOfNull())))();
  var ListLOfSelectionChangeRecordLOfNull = () => (ListLOfSelectionChangeRecordLOfNull = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfNull())))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/src/model/selection/delegating_selection_model.dart";
  var L0 = "package:angular_components/model/selection/selection_model.dart";
  var L2 = "package:angular_components/src/model/selection/radio_group_single_selection_model.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_isNotGeneric', _isNotGeneric));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_delegate', _delegate));
    },
    get C3() {
      return C3 = dart.fn(selection_model._defaultKeyProvider, ObjectLToObjectL());
    },
    get C4() {
      return C4 = dart.const(new _internal.Symbol.new('isEmpty'));
    },
    get C5() {
      return C5 = dart.const(new _internal.Symbol.new('isNotEmpty'));
    },
    get C6() {
      return C6 = dart.constList([], ListLOfChangeRecordL());
    },
    get C7() {
      return C7 = dart.constList([], ListLOfSelectionChangeRecordLOfNull());
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_isNotGeneric', _isNotGeneric$0));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_delegate', _delegate$0));
    }
  }, false);
  var _delegateModel$ = dart.privateName(delegating_selection_model, "_delegateModel");
  var C0;
  var _isNotGeneric = dart.privateName(delegating_selection_model, "_isNotGeneric");
  var C1;
  var _isNotGeneric$ = dart.privateName(observable, "_isNotGeneric");
  var _delegate = dart.privateName(delegating_selection_model, "_delegate");
  var C2;
  var _delegate$ = dart.privateName(observable, "_delegate");
  const _is_CastIterable_default = Symbol('_is_CastIterable_default');
  selection_model.CastIterable$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class CastIterable extends core.Object {
      castIterable(values) {
        return values[$cast](TL());
      }
    }
    (CastIterable.new = function() {
      ;
    }).prototype = CastIterable.prototype;
    dart.addTypeTests(CastIterable);
    CastIterable.prototype[_is_CastIterable_default] = true;
    dart.addTypeCaches(CastIterable);
    dart.setMethodSignature(CastIterable, () => ({
      __proto__: dart.getMethods(CastIterable.__proto__),
      castIterable: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(core.Iterable)])
    }));
    dart.setLibraryUri(CastIterable, L0);
    return CastIterable;
  });
  selection_model.CastIterable = selection_model.CastIterable$();
  dart.addTypeTests(selection_model.CastIterable, _is_CastIterable_default);
  const _is_DelegatingSelectionModel_default = Symbol('_is_DelegatingSelectionModel_default');
  var isSingleSelect = dart.privateName(delegating_selection_model, "DelegatingSelectionModel.isSingleSelect");
  delegating_selection_model.DelegatingSelectionModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    const Object_CastIterable$36 = class Object_CastIterable extends core.Object {};
    (Object_CastIterable$36.new = function() {
    }).prototype = Object_CastIterable$36.prototype;
    dart.applyMixin(Object_CastIterable$36, selection_model.CastIterable$(dart.legacy(T)));
    class DelegatingSelectionModel extends Object_CastIterable$36 {
      get isSingleSelect() {
        return this[isSingleSelect];
      }
      set isSingleSelect(value) {
        super.isSingleSelect = value;
      }
      clear() {
        this[_delegateModel$].clear();
      }
      select(value) {
        TL().as(value);
        return this[_delegateModel$].select(value);
      }
      deselect(value) {
        TL().as(value);
        return this[_delegateModel$].deselect(value);
      }
      isSelected(value) {
        TL().as(value);
        return this[_delegateModel$].isSelected(value);
      }
      get isEmpty() {
        return this[_delegateModel$].isEmpty;
      }
      get isNotEmpty() {
        return this[_delegateModel$].isNotEmpty;
      }
      get selectedValues() {
        return this[_delegateModel$].selectedValues;
      }
      get changes() {
        return this[_delegateModel$].changes;
      }
      deliverChanges() {
        return this[_delegateModel$].deliverChanges();
      }
      notifyChange(changeRecord = null) {
        ChangeRecordL().as(changeRecord);
        this[_delegateModel$].notifyChange(changeRecord);
      }
      notifyPropertyChange(S, field, oldValue, newValue) {
        this[_delegateModel$].notifyPropertyChange(dart.legacy(S), field, oldValue, newValue);
        return newValue;
      }
      get hasObservers() {
        return this[_delegateModel$].hasObservers;
      }
      observed() {
        return this[_delegateModel$].observed();
      }
      unobserved() {
        return this[_delegateModel$].unobserved();
      }
      deliverSelectionChanges() {
        return this[_delegateModel$].deliverSelectionChanges();
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : C0 || CT.C0;
        IterableLOfTL().as(added);
        let removed = opts && 'removed' in opts ? opts.removed : C0 || CT.C0;
        IterableLOfTL().as(removed);
        this[_delegateModel$].notifySelectionChange({added: added, removed: removed});
      }
      get hasSelectionObservers() {
        return this[_delegateModel$].hasSelectionObservers;
      }
      get selectionChanges() {
        return this[_delegateModel$].selectionChanges;
      }
      get [_isNotGeneric$]() {
        return boolL().as(this.noSuchMethod(new core._Invocation.getter(C1 || CT.C1)));
      }
      get [_delegate$]() {
        return ChangeNotifierLOfChangeRecordL().as(this.noSuchMethod(new core._Invocation.getter(C2 || CT.C2)));
      }
    }
    (DelegatingSelectionModel.new = function(_delegateModel) {
      this[_delegateModel$] = _delegateModel;
      this[isSingleSelect] = _delegateModel.isSingleSelect;
      ;
    }).prototype = DelegatingSelectionModel.prototype;
    dart.addTypeTests(DelegatingSelectionModel);
    DelegatingSelectionModel.prototype[_is_DelegatingSelectionModel_default] = true;
    dart.addTypeCaches(DelegatingSelectionModel);
    DelegatingSelectionModel[dart.implements] = () => [selection_model.SelectionModel$(dart.legacy(T))];
    dart.setMethodSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getMethods(DelegatingSelectionModel.__proto__),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      deselect: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      deliverChanges: dart.fnType(dart.legacy(core.bool), []),
      notifyChange: dart.fnType(dart.void, [], [dart.legacy(core.Object)]),
      notifyPropertyChange: dart.gFnType(S => [dart.legacy(S), [dart.legacy(core.Symbol), dart.legacy(S), dart.legacy(S)]]),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverSelectionChanges: dart.fnType(dart.legacy(core.bool), []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: dart.legacy(core.Object), removed: dart.legacy(core.Object)}, {})
    }));
    dart.setGetterSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getGetters(DelegatingSelectionModel.__proto__),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      selectedValues: dart.legacy(core.Iterable$(dart.legacy(T))),
      changes: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(records.ChangeRecord))))),
      hasObservers: dart.legacy(core.bool),
      hasSelectionObservers: dart.legacy(core.bool),
      selectionChanges: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T))))))),
      [_isNotGeneric$]: dart.legacy(core.bool),
      [_delegate$]: dart.legacy(change_notifier.ChangeNotifier$(dart.legacy(records.ChangeRecord)))
    }));
    dart.setLibraryUri(DelegatingSelectionModel, L1);
    dart.setFieldSignature(DelegatingSelectionModel, () => ({
      __proto__: dart.getFields(DelegatingSelectionModel.__proto__),
      [_delegateModel$]: dart.finalFieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      isSingleSelect: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return DelegatingSelectionModel;
  });
  delegating_selection_model.DelegatingSelectionModel = delegating_selection_model.DelegatingSelectionModel$();
  dart.addTypeTests(delegating_selection_model.DelegatingSelectionModel, _is_DelegatingSelectionModel_default);
  const _is_DelegatingSingleSelectionModel_default = Symbol('_is_DelegatingSingleSelectionModel_default');
  delegating_selection_model.DelegatingSingleSelectionModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SingleSelectionModelOfTL = () => (SingleSelectionModelOfTL = dart.constFn(selection_model.SingleSelectionModel$(TL())))();
    var SingleSelectionModelLOfTL = () => (SingleSelectionModelLOfTL = dart.constFn(dart.legacy(SingleSelectionModelOfTL())))();
    class DelegatingSingleSelectionModel extends delegating_selection_model.DelegatingSelectionModel$(dart.legacy(T)) {
      get selectedValue() {
        return SingleSelectionModelLOfTL().as(this[_delegateModel$]).selectedValue;
      }
    }
    (DelegatingSingleSelectionModel.new = function(delegateModel) {
      DelegatingSingleSelectionModel.__proto__.new.call(this, delegateModel);
      ;
    }).prototype = DelegatingSingleSelectionModel.prototype;
    dart.addTypeTests(DelegatingSingleSelectionModel);
    DelegatingSingleSelectionModel.prototype[_is_DelegatingSingleSelectionModel_default] = true;
    dart.addTypeCaches(DelegatingSingleSelectionModel);
    DelegatingSingleSelectionModel[dart.implements] = () => [selection_model.SingleSelectionModel$(dart.legacy(T))];
    dart.setGetterSignature(DelegatingSingleSelectionModel, () => ({
      __proto__: dart.getGetters(DelegatingSingleSelectionModel.__proto__),
      selectedValue: dart.legacy(T)
    }));
    dart.setLibraryUri(DelegatingSingleSelectionModel, L1);
    return DelegatingSingleSelectionModel;
  });
  delegating_selection_model.DelegatingSingleSelectionModel = delegating_selection_model.DelegatingSingleSelectionModel$();
  dart.addTypeTests(delegating_selection_model.DelegatingSingleSelectionModel, _is_DelegatingSingleSelectionModel_default);
  const _is_RadioGroupSingleSelectionModel_default = Symbol('_is_RadioGroupSingleSelectionModel_default');
  radio_group_single_selection_model.RadioGroupSingleSelectionModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SingleSelectionModelOfTL = () => (SingleSelectionModelOfTL = dart.constFn(selection_model.SingleSelectionModel$(TL())))();
    var SingleSelectionModelLOfTL = () => (SingleSelectionModelLOfTL = dart.constFn(dart.legacy(SingleSelectionModelOfTL())))();
    class RadioGroupSingleSelectionModel extends delegating_selection_model.DelegatingSingleSelectionModel$(dart.legacy(T)) {
      clear() {
      }
      deselect(value) {
        TL().as(value);
        return false;
      }
    }
    (RadioGroupSingleSelectionModel.new = function(initialValue = null) {
      RadioGroupSingleSelectionModel.__proto__.new.call(this, SingleSelectionModelLOfTL().as(SingleSelectionModelOfTL().new({selected: initialValue == null ? null : initialValue})));
      ;
    }).prototype = RadioGroupSingleSelectionModel.prototype;
    dart.addTypeTests(RadioGroupSingleSelectionModel);
    RadioGroupSingleSelectionModel.prototype[_is_RadioGroupSingleSelectionModel_default] = true;
    dart.addTypeCaches(RadioGroupSingleSelectionModel);
    dart.setLibraryUri(RadioGroupSingleSelectionModel, L2);
    return RadioGroupSingleSelectionModel;
  });
  radio_group_single_selection_model.RadioGroupSingleSelectionModel = radio_group_single_selection_model.RadioGroupSingleSelectionModel$();
  dart.addTypeTests(radio_group_single_selection_model.RadioGroupSingleSelectionModel, _is_RadioGroupSingleSelectionModel_default);
  const _is_DelegatingMultiSelectionModel_default = Symbol('_is_DelegatingMultiSelectionModel_default');
  delegating_selection_model.DelegatingMultiSelectionModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var MultiSelectionModelOfTL = () => (MultiSelectionModelOfTL = dart.constFn(selection_model.MultiSelectionModel$(TL())))();
    var MultiSelectionModelLOfTL = () => (MultiSelectionModelLOfTL = dart.constFn(dart.legacy(MultiSelectionModelOfTL())))();
    class DelegatingMultiSelectionModel extends delegating_selection_model.DelegatingSelectionModel$(dart.legacy(T)) {
      selectAll(values) {
        IterableLOfTL().as(values);
        MultiSelectionModelLOfTL().as(this[_delegateModel$]).selectAll(values);
      }
      deselectAll(values) {
        IterableLOfTL().as(values);
        MultiSelectionModelLOfTL().as(this[_delegateModel$]).deselectAll(values);
      }
    }
    (DelegatingMultiSelectionModel.new = function(delegateModel) {
      DelegatingMultiSelectionModel.__proto__.new.call(this, delegateModel);
      ;
    }).prototype = DelegatingMultiSelectionModel.prototype;
    dart.addTypeTests(DelegatingMultiSelectionModel);
    DelegatingMultiSelectionModel.prototype[_is_DelegatingMultiSelectionModel_default] = true;
    dart.addTypeCaches(DelegatingMultiSelectionModel);
    DelegatingMultiSelectionModel[dart.implements] = () => [selection_model.MultiSelectionModel$(dart.legacy(T))];
    dart.setMethodSignature(DelegatingMultiSelectionModel, () => ({
      __proto__: dart.getMethods(DelegatingMultiSelectionModel.__proto__),
      selectAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      deselectAll: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(DelegatingMultiSelectionModel, L1);
    return DelegatingMultiSelectionModel;
  });
  delegating_selection_model.DelegatingMultiSelectionModel = delegating_selection_model.DelegatingMultiSelectionModel$();
  dart.addTypeTests(delegating_selection_model.DelegatingMultiSelectionModel, _is_DelegatingMultiSelectionModel_default);
  const _is_SelectionModel_default = Symbol('_is_SelectionModel_default');
  selection_model.SelectionModel$ = dart.generic(T => {
    const Object_CastIterable$36 = class Object_CastIterable extends core.Object {};
    (Object_CastIterable$36.new = function() {
    }).prototype = Object_CastIterable$36.prototype;
    dart.applyMixin(Object_CastIterable$36, selection_model.CastIterable$(dart.legacy(T)));
    class SelectionModel extends Object_CastIterable$36 {
      static radio(selected) {
        return new (radio_group_single_selection_model.RadioGroupSingleSelectionModel$(dart.legacy(T))).new(selected);
      }
      static withList(opts) {
        let t0, t0$;
        let selectedValues = opts && 'selectedValues' in opts ? opts.selectedValues : null;
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : null;
        let allowMulti = opts && 'allowMulti' in opts ? opts.allowMulti : false;
        if (dart.test(allowMulti)) {
          return selection_model.MultiSelectionModel$(dart.legacy(T)).new({selectedValues: selectedValues, keyProvider: keyProvider});
        } else {
          return selection_model.SingleSelectionModel$(dart.legacy(T)).new({selected: dart.test((t0$ = (t0 = selectedValues, t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$)) ? selectedValues[$last] : null, keyProvider: keyProvider});
        }
      }
      get isNotEmpty() {
        return !dart.test(this.isEmpty);
      }
    }
    dart.addTypeTests(SelectionModel);
    SelectionModel.prototype[_is_SelectionModel_default] = true;
    dart.addTypeCaches(SelectionModel);
    SelectionModel[dart.implements] = () => [observable.Observable$(dart.legacy(records.ChangeRecord)), selection_model.SelectionObservable$(dart.legacy(T))];
    dart.setGetterSignature(SelectionModel, () => ({
      __proto__: dart.getGetters(SelectionModel.__proto__),
      isNotEmpty: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(SelectionModel, L0);
    return SelectionModel;
  });
  selection_model.SelectionModel = selection_model.SelectionModel$();
  dart.addTypeTests(selection_model.SelectionModel, _is_SelectionModel_default);
  var C3;
  const _is_SingleSelectionModel_default = Symbol('_is_SingleSelectionModel_default');
  selection_model.SingleSelectionModel$ = dart.generic(T => {
    class SingleSelectionModel extends selection_model.SelectionModel$(dart.legacy(T)) {
      static new(opts) {
        let t0;
        let selected = opts && 'selected' in opts ? opts.selected : null;
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : null;
        return new (selection_model._SingleSelectionModelImpl$(dart.legacy(T))).new(selected, (t0 = keyProvider, t0 == null ? C3 || CT.C3 : t0));
      }
    }
    dart.addTypeTests(SingleSelectionModel);
    SingleSelectionModel.prototype[_is_SingleSelectionModel_default] = true;
    dart.addTypeCaches(SingleSelectionModel);
    dart.setLibraryUri(SingleSelectionModel, L0);
    return SingleSelectionModel;
  });
  selection_model.SingleSelectionModel = selection_model.SingleSelectionModel$();
  dart.addTypeTests(selection_model.SingleSelectionModel, _is_SingleSelectionModel_default);
  const _is_NullSelectionModel_default = Symbol('_is_NullSelectionModel_default');
  selection_model.NullSelectionModel$ = dart.generic(T => {
    class NullSelectionModel extends selection_model.SingleSelectionModel$(dart.legacy(T)) {}
    dart.addTypeTests(NullSelectionModel);
    NullSelectionModel.prototype[_is_NullSelectionModel_default] = true;
    dart.addTypeCaches(NullSelectionModel);
    dart.setLibraryUri(NullSelectionModel, L0);
    return NullSelectionModel;
  });
  selection_model.NullSelectionModel = selection_model.NullSelectionModel$();
  dart.addTypeTests(selection_model.NullSelectionModel, _is_NullSelectionModel_default);
  const _is_MultiSelectionModel_default = Symbol('_is_MultiSelectionModel_default');
  selection_model.MultiSelectionModel$ = dart.generic(T => {
    class MultiSelectionModel extends selection_model.SelectionModel$(dart.legacy(T)) {
      static new(opts) {
        let t0, t0$;
        let selectedValues = opts && 'selectedValues' in opts ? opts.selectedValues : null;
        let keyProvider = opts && 'keyProvider' in opts ? opts.keyProvider : null;
        return new (selection_model._MultiSelectionModelImpl$(dart.legacy(T))).new((t0 = selectedValues, t0 == null ? C0 || CT.C0 : t0), (t0$ = keyProvider, t0$ == null ? C3 || CT.C3 : t0$));
      }
    }
    dart.addTypeTests(MultiSelectionModel);
    MultiSelectionModel.prototype[_is_MultiSelectionModel_default] = true;
    dart.addTypeCaches(MultiSelectionModel);
    dart.setLibraryUri(MultiSelectionModel, L0);
    return MultiSelectionModel;
  });
  selection_model.MultiSelectionModel = selection_model.MultiSelectionModel$();
  dart.addTypeTests(selection_model.MultiSelectionModel, _is_MultiSelectionModel_default);
  const _is_SelectionChangeRecord_default = Symbol('_is_SelectionChangeRecord_default');
  selection_model.SelectionChangeRecord$ = dart.generic(T => {
    class SelectionChangeRecord extends records.ChangeRecord {}
    dart.addTypeTests(SelectionChangeRecord);
    SelectionChangeRecord.prototype[_is_SelectionChangeRecord_default] = true;
    dart.addTypeCaches(SelectionChangeRecord);
    dart.setLibraryUri(SelectionChangeRecord, L0);
    return SelectionChangeRecord;
  });
  selection_model.SelectionChangeRecord = selection_model.SelectionChangeRecord$();
  dart.addTypeTests(selection_model.SelectionChangeRecord, _is_SelectionChangeRecord_default);
  var C4;
  var C5;
  var _selectionChangeController = dart.privateName(selection_model, "_selectionChangeController");
  var _selectionChangeRecords = dart.privateName(selection_model, "_selectionChangeRecords");
  const _is_SelectionChangeNotifier_default = Symbol('_is_SelectionChangeNotifier_default');
  selection_model.SelectionChangeNotifier$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var UnmodifiableListViewOfSelectionChangeRecordLOfTL = () => (UnmodifiableListViewOfSelectionChangeRecordLOfTL = dart.constFn(collection.UnmodifiableListView$(SelectionChangeRecordLOfTL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var _SelectionChangeRecordImplOfTL = () => (_SelectionChangeRecordImplOfTL = dart.constFn(selection_model._SelectionChangeRecordImpl$(TL())))();
    var JSArrayOfSelectionChangeRecordLOfTL = () => (JSArrayOfSelectionChangeRecordLOfTL = dart.constFn(_interceptors.JSArray$(SelectionChangeRecordLOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var StreamControllerOfListLOfSelectionChangeRecordLOfTL = () => (StreamControllerOfListLOfSelectionChangeRecordLOfTL = dart.constFn(async.StreamController$(ListLOfSelectionChangeRecordLOfTL())))();
    class SelectionChangeNotifier extends core.Object {
      deliverSelectionChanges() {
        if (dart.test(this.hasSelectionObservers) && this[_selectionChangeRecords] != null && dart.test(this[_selectionChangeRecords][$isNotEmpty])) {
          let records = new (UnmodifiableListViewOfSelectionChangeRecordLOfTL()).new(this[_selectionChangeRecords]);
          this[_selectionChangeRecords] = null;
          this[_selectionChangeController].add(records);
          return true;
        } else {
          return false;
        }
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : C0 || CT.C0;
        IterableLOfTL().as(added);
        let removed = opts && 'removed' in opts ? opts.removed : C0 || CT.C0;
        IterableLOfTL().as(removed);
        if (dart.test(this.hasSelectionObservers)) {
          let record = _SelectionChangeRecordImplOfTL().new({added: added, removed: removed});
          if (this[_selectionChangeRecords] == null) {
            this[_selectionChangeRecords] = JSArrayOfSelectionChangeRecordLOfTL().of([]);
            async.scheduleMicrotask(dart.bind(this, 'deliverSelectionChanges'));
          }
          this[_selectionChangeRecords][$add](record);
        }
      }
      get hasSelectionObservers() {
        return this[_selectionChangeController] != null && dart.test(this[_selectionChangeController].hasListener);
      }
      get selectionChanges() {
        if (this[_selectionChangeController] == null) {
          this[_selectionChangeController] = StreamControllerOfListLOfSelectionChangeRecordLOfTL().broadcast({sync: true});
        }
        return this[_selectionChangeController].stream;
      }
    }
    (SelectionChangeNotifier.new = function() {
      this[_selectionChangeController] = null;
      this[_selectionChangeRecords] = null;
      ;
    }).prototype = SelectionChangeNotifier.prototype;
    dart.addTypeTests(SelectionChangeNotifier);
    SelectionChangeNotifier.prototype[_is_SelectionChangeNotifier_default] = true;
    dart.addTypeCaches(SelectionChangeNotifier);
    SelectionChangeNotifier[dart.implements] = () => [selection_model.SelectionModel$(dart.legacy(T))];
    dart.setMethodSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getMethods(SelectionChangeNotifier.__proto__),
      deliverSelectionChanges: dart.fnType(dart.legacy(core.bool), []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: dart.legacy(core.Object), removed: dart.legacy(core.Object)}, {})
    }));
    dart.setGetterSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getGetters(SelectionChangeNotifier.__proto__),
      hasSelectionObservers: dart.legacy(core.bool),
      selectionChanges: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T)))))))
    }));
    dart.setLibraryUri(SelectionChangeNotifier, L0);
    dart.setFieldSignature(SelectionChangeNotifier, () => ({
      __proto__: dart.getFields(SelectionChangeNotifier.__proto__),
      [_selectionChangeController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T)))))))),
      [_selectionChangeRecords]: dart.fieldType(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T))))))
    }));
    return SelectionChangeNotifier;
  });
  selection_model.SelectionChangeNotifier = selection_model.SelectionChangeNotifier$();
  dart.addTypeTests(selection_model.SelectionChangeNotifier, _is_SelectionChangeNotifier_default);
  const _is__MultiSelectionModelImpl_default = Symbol('_is__MultiSelectionModelImpl_default');
  selection_model._MultiSelectionModelImpl$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var LinkedHashSetOfTL = () => (LinkedHashSetOfTL = dart.constFn(collection.LinkedHashSet$(TL())))();
    var TLAndTLToboolL = () => (TLAndTLToboolL = dart.constFn(dart.fnType(boolL(), [TL(), TL()])))();
    var TLTointL = () => (TLTointL = dart.constFn(dart.fnType(intL(), [TL()])))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var TLToboolL = () => (TLToboolL = dart.constFn(dart.fnType(boolL(), [TL()])))();
    const Observable_SelectionChangeNotifier$36 = class Observable_SelectionChangeNotifier extends observable.Observable$(dart.legacy(records.ChangeRecord)) {};
    (Observable_SelectionChangeNotifier$36.new = function() {
      selection_model.SelectionChangeNotifier$(dart.legacy(T)).new.call(this);
      Observable_SelectionChangeNotifier$36.__proto__.new.call(this);
    }).prototype = Observable_SelectionChangeNotifier$36.prototype;
    dart.applyMixin(Observable_SelectionChangeNotifier$36, selection_model.SelectionChangeNotifier$(dart.legacy(T)));
    const Observable_CastIterable$36 = class Observable_CastIterable extends Observable_SelectionChangeNotifier$36 {};
    (Observable_CastIterable$36.new = function() {
      Observable_CastIterable$36.__proto__.new.call(this);
    }).prototype = Observable_CastIterable$36.prototype;
    dart.applyMixin(Observable_CastIterable$36, selection_model.CastIterable$(dart.legacy(T)));
    class _MultiSelectionModelImpl extends Observable_CastIterable$36 {
      clear() {
        if (dart.test(this.selectedValues[$isNotEmpty])) {
          let removedItems = this.selectedValues[$toList]({growable: false});
          this.selectedValues.clear();
          this.notifyPropertyChange(boolL(), C4 || CT.C4, false, true);
          this.notifyPropertyChange(boolL(), C5 || CT.C5, true, false);
          this.notifySelectionChange({removed: removedItems});
        }
      }
      deselect(value) {
        TL().as(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        if (dart.test(this.selectedValues.remove(value))) {
          if (dart.test(this.isEmpty)) {
            this.notifyPropertyChange(boolL(), C4 || CT.C4, false, true);
            this.notifyPropertyChange(boolL(), C5 || CT.C5, true, false);
          }
          this.notifySelectionChange({removed: JSArrayOfTL().of([value])});
          return true;
        }
        return false;
      }
      select(value) {
        TL().as(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        if (dart.test(this.selectedValues.add(value))) {
          if (this.selectedValues[$length] === 1) {
            this.notifyPropertyChange(boolL(), C4 || CT.C4, true, false);
            this.notifyPropertyChange(boolL(), C5 || CT.C5, false, true);
          }
          this.notifySelectionChange({added: JSArrayOfTL().of([value])});
          return true;
        } else {
          return false;
        }
      }
      selectAll(values) {
        IterableLOfTL().as(values);
        if (values == null) {
          dart.throw(new core.ArgumentError.new());
        }
        let toAdd = values[$where](dart.fn(v => !dart.test(this.selectedValues.contains(v)), TLToboolL()))[$toList]();
        if (dart.test(toAdd[$isEmpty])) return;
        let wasEmpty = this.isEmpty;
        this.selectedValues.addAll(toAdd);
        if (dart.test(wasEmpty) && dart.test(this.isNotEmpty)) {
          this.notifyPropertyChange(boolL(), C4 || CT.C4, true, false);
          this.notifyPropertyChange(boolL(), C5 || CT.C5, false, true);
        }
        this.notifySelectionChange({added: toAdd});
      }
      deselectAll(values) {
        IterableLOfTL().as(values);
        if (values == null) {
          dart.throw(new core.ArgumentError.new());
        }
        let toRemove = values[$where](dart.fn(v => this.selectedValues.contains(v), TLToboolL()))[$toList]();
        if (dart.test(toRemove[$isEmpty])) return;
        let wasNotEmpty = this.isNotEmpty;
        this.selectedValues.removeAll(toRemove);
        if (dart.test(wasNotEmpty) && dart.test(this.isEmpty)) {
          this.notifyPropertyChange(boolL(), C4 || CT.C4, false, true);
          this.notifyPropertyChange(boolL(), C5 || CT.C5, true, false);
        }
        this.notifySelectionChange({removed: toRemove});
      }
      isSelected(value) {
        TL().as(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.new());
        }
        return this.selectedValues.contains(value);
      }
      get isEmpty() {
        return this.selectedValues[$isEmpty];
      }
      get isNotEmpty() {
        return this.selectedValues[$isNotEmpty];
      }
    }
    (_MultiSelectionModelImpl.new = function(initialSelection, keyProvider) {
      let t0;
      this.isSingleSelect = false;
      this.selectedValues = (t0 = LinkedHashSetOfTL().new({equals: dart.fn((a, b) => dart.equals(keyProvider(a), keyProvider(b)), TLAndTLToboolL()), hashCode: dart.fn(o => dart.hashCode(keyProvider(o)), TLTointL())}), (() => {
        t0.addAll(initialSelection);
        return t0;
      })());
      _MultiSelectionModelImpl.__proto__.new.call(this);
      ;
    }).prototype = _MultiSelectionModelImpl.prototype;
    dart.addTypeTests(_MultiSelectionModelImpl);
    _MultiSelectionModelImpl.prototype[_is__MultiSelectionModelImpl_default] = true;
    dart.addTypeCaches(_MultiSelectionModelImpl);
    _MultiSelectionModelImpl[dart.implements] = () => [selection_model.MultiSelectionModel$(dart.legacy(T))];
    dart.setMethodSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_MultiSelectionModelImpl.__proto__),
      clear: dart.fnType(dart.void, []),
      deselect: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      select: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      selectAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      deselectAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      isSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_MultiSelectionModelImpl.__proto__),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(_MultiSelectionModelImpl, L0);
    dart.setFieldSignature(_MultiSelectionModelImpl, () => ({
      __proto__: dart.getFields(_MultiSelectionModelImpl.__proto__),
      isSingleSelect: dart.finalFieldType(dart.legacy(core.bool)),
      selectedValues: dart.finalFieldType(dart.legacy(collection.LinkedHashSet$(dart.legacy(T))))
    }));
    return _MultiSelectionModelImpl;
  });
  selection_model._MultiSelectionModelImpl = selection_model._MultiSelectionModelImpl$();
  dart.addTypeTests(selection_model._MultiSelectionModelImpl, _is__MultiSelectionModelImpl_default);
  var C6;
  var C7;
  var _isNotGeneric$0 = dart.privateName(selection_model, "_isNotGeneric");
  var C8;
  var _delegate$0 = dart.privateName(selection_model, "_delegate");
  var C9;
  const _is__NoopSelectionModelImpl_default = Symbol('_is__NoopSelectionModelImpl_default');
  var isSingleSelect$ = dart.privateName(selection_model, "_NoopSelectionModelImpl.isSingleSelect");
  var hasSelectionObservers = dart.privateName(selection_model, "_NoopSelectionModelImpl.hasSelectionObservers");
  var hasObservers = dart.privateName(selection_model, "_NoopSelectionModelImpl.hasObservers");
  var isEmpty = dart.privateName(selection_model, "_NoopSelectionModelImpl.isEmpty");
  var isNotEmpty = dart.privateName(selection_model, "_NoopSelectionModelImpl.isNotEmpty");
  var selectedValue = dart.privateName(selection_model, "_NoopSelectionModelImpl.selectedValue");
  var selectedValues = dart.privateName(selection_model, "_NoopSelectionModelImpl.selectedValues");
  selection_model._NoopSelectionModelImpl$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var StreamOfListLOfSelectionChangeRecordLOfTL = () => (StreamOfListLOfSelectionChangeRecordLOfTL = dart.constFn(async.Stream$(ListLOfSelectionChangeRecordLOfTL())))();
    class _NoopSelectionModelImpl extends core.Object {
      get isSingleSelect() {
        return this[isSingleSelect$];
      }
      set isSingleSelect(value) {
        super.isSingleSelect = value;
      }
      get hasSelectionObservers() {
        return this[hasSelectionObservers];
      }
      set hasSelectionObservers(value) {
        super.hasSelectionObservers = value;
      }
      get hasObservers() {
        return this[hasObservers];
      }
      set hasObservers(value) {
        super.hasObservers = value;
      }
      get isEmpty() {
        return this[isEmpty];
      }
      set isEmpty(value) {
        super.isEmpty = value;
      }
      get isNotEmpty() {
        return this[isNotEmpty];
      }
      set isNotEmpty(value) {
        super.isNotEmpty = value;
      }
      get selectedValue() {
        return this[selectedValue];
      }
      set selectedValue(value) {
        super.selectedValue = value;
      }
      get selectedValues() {
        return this[selectedValues];
      }
      set selectedValues(value) {
        super.selectedValues = value;
      }
      deliverSelectionChanges() {
        return false;
      }
      notifySelectionChange(opts) {
        let added = opts && 'added' in opts ? opts.added : null;
        IterableLOfTL().as(added);
        let removed = opts && 'removed' in opts ? opts.removed : null;
        IterableLOfTL().as(removed);
      }
      get changes() {
        return StreamOfListLOfChangeRecordL().fromIterable(C6 || CT.C6);
      }
      deliverChanges() {
        return false;
      }
      notifyChange(_ = null) {
        ChangeRecordL().as(_);
      }
      notifyPropertyChange(S, field, oldValue, newValue) {
        return null;
      }
      observed() {
      }
      unobserved() {
      }
      clear() {
      }
      select(_) {
        TL().as(_);
        return false;
      }
      deselect(_) {
        TL().as(_);
        return false;
      }
      isSelected(_) {
        TL().as(_);
        return false;
      }
      get selectionChanges() {
        return StreamOfListLOfSelectionChangeRecordLOfTL().fromIterable(C7 || CT.C7);
      }
      castIterable(values) {
        return values[$cast](TL());
      }
      get [_isNotGeneric$]() {
        return boolL().as(this.noSuchMethod(new core._Invocation.getter(C8 || CT.C8)));
      }
      get [_delegate$]() {
        return ChangeNotifierLOfChangeRecordL().as(this.noSuchMethod(new core._Invocation.getter(C9 || CT.C9)));
      }
    }
    (_NoopSelectionModelImpl.new = function() {
      this[isSingleSelect$] = null;
      this[hasSelectionObservers] = false;
      this[hasObservers] = false;
      this[isEmpty] = true;
      this[isNotEmpty] = false;
      this[selectedValue] = null;
      this[selectedValues] = C0 || CT.C0;
      ;
    }).prototype = _NoopSelectionModelImpl.prototype;
    dart.addTypeTests(_NoopSelectionModelImpl);
    _NoopSelectionModelImpl.prototype[_is__NoopSelectionModelImpl_default] = true;
    dart.addTypeCaches(_NoopSelectionModelImpl);
    _NoopSelectionModelImpl[dart.implements] = () => [selection_model.NullSelectionModel$(dart.legacy(T))];
    dart.setMethodSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_NoopSelectionModelImpl.__proto__),
      deliverSelectionChanges: dart.fnType(dart.legacy(core.bool), []),
      notifySelectionChange: dart.fnType(dart.void, [], {added: dart.legacy(core.Object), removed: dart.legacy(core.Object)}, {}),
      deliverChanges: dart.fnType(dart.legacy(core.bool), []),
      notifyChange: dart.fnType(dart.void, [], [dart.legacy(core.Object)]),
      notifyPropertyChange: dart.gFnType(S => [dart.legacy(S), [dart.legacy(core.Symbol), dart.legacy(S), dart.legacy(S)]]),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      deselect: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      castIterable: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(core.Iterable)])
    }));
    dart.setGetterSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_NoopSelectionModelImpl.__proto__),
      changes: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(records.ChangeRecord))))),
      selectionChanges: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T))))))),
      [_isNotGeneric$]: dart.legacy(core.bool),
      [_delegate$]: dart.legacy(change_notifier.ChangeNotifier$(dart.legacy(records.ChangeRecord)))
    }));
    dart.setLibraryUri(_NoopSelectionModelImpl, L0);
    dart.setFieldSignature(_NoopSelectionModelImpl, () => ({
      __proto__: dart.getFields(_NoopSelectionModelImpl.__proto__),
      isSingleSelect: dart.finalFieldType(dart.legacy(core.bool)),
      hasSelectionObservers: dart.finalFieldType(dart.legacy(core.bool)),
      hasObservers: dart.finalFieldType(dart.legacy(core.bool)),
      isEmpty: dart.finalFieldType(dart.legacy(core.bool)),
      isNotEmpty: dart.finalFieldType(dart.legacy(core.bool)),
      selectedValue: dart.finalFieldType(dart.legacy(T)),
      selectedValues: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(T))))
    }));
    return _NoopSelectionModelImpl;
  });
  selection_model._NoopSelectionModelImpl = selection_model._NoopSelectionModelImpl$();
  dart.addTypeTests(selection_model._NoopSelectionModelImpl, _is__NoopSelectionModelImpl_default);
  const _is_SelectionObservable_default = Symbol('_is_SelectionObservable_default');
  selection_model.SelectionObservable$ = dart.generic(T => {
    class SelectionObservable extends core.Object {}
    (SelectionObservable.new = function() {
      ;
    }).prototype = SelectionObservable.prototype;
    dart.addTypeTests(SelectionObservable);
    SelectionObservable.prototype[_is_SelectionObservable_default] = true;
    dart.addTypeCaches(SelectionObservable);
    dart.setLibraryUri(SelectionObservable, L0);
    return SelectionObservable;
  });
  selection_model.SelectionObservable = selection_model.SelectionObservable$();
  dart.addTypeTests(selection_model.SelectionObservable, _is_SelectionObservable_default);
  const _is__SelectionChangeRecordImpl_default = Symbol('_is__SelectionChangeRecordImpl_default');
  selection_model._SelectionChangeRecordImpl$ = dart.generic(T => {
    class _SelectionChangeRecordImpl extends records.ChangeRecord {
      static new(opts) {
        let added = opts && 'added' in opts ? opts.added : null;
        let removed = opts && 'removed' in opts ? opts.removed : null;
        added = dart.legacy(core.Iterable$(dart.legacy(T))).as(added != null ? new (collection.UnmodifiableListView$(dart.legacy(T))).new(added) : C0 || CT.C0);
        removed = dart.legacy(core.Iterable$(dart.legacy(T))).as(removed != null ? new (collection.UnmodifiableListView$(dart.legacy(T))).new(removed) : C0 || CT.C0);
        return new (selection_model._SelectionChangeRecordImpl$(dart.legacy(T))).__(added, removed);
      }
      toString() {
        return "SelectionChangeRecord{added: " + dart.str(this.added) + ", removed: " + dart.str(this.removed) + "}";
      }
    }
    (_SelectionChangeRecordImpl.__ = function(added, removed) {
      this.added = added;
      this.removed = removed;
      _SelectionChangeRecordImpl.__proto__.new.call(this);
      ;
    }).prototype = _SelectionChangeRecordImpl.prototype;
    dart.addTypeTests(_SelectionChangeRecordImpl);
    _SelectionChangeRecordImpl.prototype[_is__SelectionChangeRecordImpl_default] = true;
    dart.addTypeCaches(_SelectionChangeRecordImpl);
    _SelectionChangeRecordImpl[dart.implements] = () => [selection_model.SelectionChangeRecord$(dart.legacy(T))];
    dart.setMethodSignature(_SelectionChangeRecordImpl, () => ({
      __proto__: dart.getMethods(_SelectionChangeRecordImpl.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setLibraryUri(_SelectionChangeRecordImpl, L0);
    dart.setFieldSignature(_SelectionChangeRecordImpl, () => ({
      __proto__: dart.getFields(_SelectionChangeRecordImpl.__proto__),
      added: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(T)))),
      removed: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(T))))
    }));
    dart.defineExtensionMethods(_SelectionChangeRecordImpl, ['toString']);
    return _SelectionChangeRecordImpl;
  });
  selection_model._SelectionChangeRecordImpl = selection_model._SelectionChangeRecordImpl$();
  dart.addTypeTests(selection_model._SelectionChangeRecordImpl, _is__SelectionChangeRecordImpl_default);
  var _selectedValues = dart.privateName(selection_model, "_selectedValues");
  var _selectedKey = dart.privateName(selection_model, "_selectedKey");
  var _keyOf$ = dart.privateName(selection_model, "_keyOf");
  var _isKeySelected = dart.privateName(selection_model, "_isKeySelected");
  const _is__SingleSelectionModelImpl_default = Symbol('_is__SingleSelectionModelImpl_default');
  selection_model._SingleSelectionModelImpl$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    const Observable_SelectionChangeNotifier$36 = class Observable_SelectionChangeNotifier extends observable.Observable$(dart.legacy(records.ChangeRecord)) {};
    (Observable_SelectionChangeNotifier$36.new = function() {
      selection_model.SelectionChangeNotifier$(dart.legacy(T)).new.call(this);
      Observable_SelectionChangeNotifier$36.__proto__.new.call(this);
    }).prototype = Observable_SelectionChangeNotifier$36.prototype;
    dart.applyMixin(Observable_SelectionChangeNotifier$36, selection_model.SelectionChangeNotifier$(dart.legacy(T)));
    const Observable_CastIterable$36 = class Observable_CastIterable extends Observable_SelectionChangeNotifier$36 {};
    (Observable_CastIterable$36.new = function() {
      Observable_CastIterable$36.__proto__.new.call(this);
    }).prototype = Observable_CastIterable$36.prototype;
    dart.applyMixin(Observable_CastIterable$36, selection_model.CastIterable$(dart.legacy(T)));
    class _SingleSelectionModelImpl extends Observable_CastIterable$36 {
      clear() {
        if (dart.test(this[_selectedValues][$isNotEmpty])) {
          this.deselect(this[_selectedValues][$first]);
        }
      }
      select(value) {
        let t0, t0$;
        TL().as(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull("value"));
        }
        let newKey = (t0 = value, this[_keyOf$](t0));
        if (dart.equals(newKey, this[_selectedKey])) {
          return false;
        }
        let previousValue = dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$first];
        let removedItems = C0 || CT.C0;
        this[_selectedKey] = newKey;
        t0$ = this[_selectedValues];
        (() => {
          t0$[$clear]();
          t0$[$add](value);
          return t0$;
        })();
        if (previousValue == null) {
          this.notifyPropertyChange(boolL(), C4 || CT.C4, true, false);
          this.notifyPropertyChange(boolL(), C5 || CT.C5, false, true);
        } else {
          removedItems = JSArrayOfTL().of([previousValue]);
        }
        this.notifySelectionChange({added: JSArrayOfTL().of([value]), removed: removedItems});
        return true;
      }
      deselect(value) {
        TL().as(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull("value"));
        }
        if (dart.test(this[_selectedValues][$isEmpty]) || !dart.test(this[_isKeySelected](value))) {
          return false;
        }
        let previousValue = dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$first];
        let removedItems = C0 || CT.C0;
        this[_selectedKey] = null;
        this[_selectedValues][$clear]();
        if (previousValue != null) {
          this.notifyPropertyChange(boolL(), C4 || CT.C4, false, true);
          this.notifyPropertyChange(boolL(), C5 || CT.C5, true, false);
          removedItems = JSArrayOfTL().of([previousValue]);
        }
        this.notifySelectionChange({added: JSArrayOfTL().of([]), removed: removedItems});
        return true;
      }
      [_isKeySelected](value) {
        let t0;
        return dart.equals((t0 = value, this[_keyOf$](t0)), this[_selectedKey]);
      }
      isSelected(value) {
        TL().as(value);
        if (value == null) {
          dart.throw(new core.ArgumentError.notNull("value"));
        }
        return this[_isKeySelected](value);
      }
      get isEmpty() {
        return this[_selectedValues][$isEmpty];
      }
      get isNotEmpty() {
        return this[_selectedValues][$isNotEmpty];
      }
      get selectedValues() {
        return this[_selectedValues];
      }
      get selectedValue() {
        return dart.test(this[_selectedValues][$isEmpty]) ? null : this[_selectedValues][$single];
      }
    }
    (_SingleSelectionModelImpl.new = function(selectedValue, _keyOf) {
      let t0;
      this[_selectedValues] = JSArrayOfTL().of([]);
      this.isSingleSelect = true;
      this[_selectedKey] = null;
      this[_keyOf$] = _keyOf;
      _SingleSelectionModelImpl.__proto__.new.call(this);
      if (selectedValue != null) {
        this[_selectedKey] = (t0 = selectedValue, this[_keyOf$](t0));
        this[_selectedValues][$add](selectedValue);
      }
    }).prototype = _SingleSelectionModelImpl.prototype;
    dart.addTypeTests(_SingleSelectionModelImpl);
    _SingleSelectionModelImpl.prototype[_is__SingleSelectionModelImpl_default] = true;
    dart.addTypeCaches(_SingleSelectionModelImpl);
    _SingleSelectionModelImpl[dart.implements] = () => [selection_model.SingleSelectionModel$(dart.legacy(T))];
    dart.setMethodSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getMethods(_SingleSelectionModelImpl.__proto__),
      clear: dart.fnType(dart.void, []),
      select: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      deselect: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [_isKeySelected]: dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]),
      isSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getGetters(_SingleSelectionModelImpl.__proto__),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      selectedValues: dart.legacy(core.Iterable$(dart.legacy(T))),
      selectedValue: dart.legacy(T)
    }));
    dart.setLibraryUri(_SingleSelectionModelImpl, L0);
    dart.setFieldSignature(_SingleSelectionModelImpl, () => ({
      __proto__: dart.getFields(_SingleSelectionModelImpl.__proto__),
      [_keyOf$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(T)]))),
      [_selectedValues]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(T)))),
      isSingleSelect: dart.finalFieldType(dart.legacy(core.bool)),
      [_selectedKey]: dart.fieldType(dart.legacy(core.Object))
    }));
    return _SingleSelectionModelImpl;
  });
  selection_model._SingleSelectionModelImpl = selection_model._SingleSelectionModelImpl$();
  dart.addTypeTests(selection_model._SingleSelectionModelImpl, _is__SingleSelectionModelImpl_default);
  selection_model._defaultKeyProvider = function _defaultKeyProvider(o) {
    return o;
  };
  dart.trackLibraries("packages/angular_components/model/selection/selection_model", {
    "package:angular_components/src/model/selection/radio_group_single_selection_model.dart": radio_group_single_selection_model,
    "package:angular_components/src/model/selection/delegating_selection_model.dart": delegating_selection_model,
    "package:angular_components/model/selection/selection_model.dart": selection_model
  }, {
    "package:angular_components/model/selection/selection_model.dart": ["package:angular_components/src/model/selection/multi_selection_model_impl.dart", "package:angular_components/src/model/selection/noop_selection_model_impl.dart", "package:angular_components/src/model/selection/selection_change_notifier.dart", "package:angular_components/src/model/selection/single_selection_model_impl.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["selection_model.dart","../../src/model/selection/delegating_selection_model.dart","../../src/model/selection/radio_group_single_selection_model.dart","../../src/model/selection/selection_change_notifier.dart","../../src/model/selection/multi_selection_model_impl.dart","../../src/model/selection/noop_selection_model_impl.dart","../../src/model/selection/single_selection_model_impl.dart"],"names":[],"mappings":"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","file":"selection_model.unsound.ddc.js"}');
  // Exports:
  return {
    src__model__selection__radio_group_single_selection_model: radio_group_single_selection_model,
    src__model__selection__delegating_selection_model: delegating_selection_model,
    model__selection__selection_model: selection_model
  };
}));

//# sourceMappingURL=selection_model.unsound.ddc.js.map
