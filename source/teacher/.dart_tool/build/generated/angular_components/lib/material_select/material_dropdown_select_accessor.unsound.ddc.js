define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/model/selection/selection_model', 'packages/angular_forms/src/directives', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__material_select__material_dropdown_select_accessor(dart_sdk, packages__angular_components__material_select__material_dropdown_select, packages__angular_components__model__selection__selection_model, packages__angular_forms__src__directives, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var material_dropdown_select_accessor = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $toList = dartx.toList;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_select/material_dropdown_select_accessor.dart";
  var L1 = "package:angular_components/material_select/material_dropdown_select_accessor.dart";
  var _selectionChangesSub = dart.privateName(material_dropdown_select_accessor, "_selectionChangesSub");
  var _visibileSub = dart.privateName(material_dropdown_select_accessor, "_visibileSub");
  var _select$ = dart.privateName(material_dropdown_select_accessor, "_select");
  const _is_BaseDropdownSelectValueAccessor_default = Symbol('_is_BaseDropdownSelectValueAccessor_default');
  var selectionModel$ = dart.privateName(material_dropdown_select_accessor, "BaseDropdownSelectValueAccessor.selectionModel");
  var initialized = dart.privateName(material_dropdown_select_accessor, "BaseDropdownSelectValueAccessor.initialized");
  material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$ = dart.generic(T => {
    class BaseDropdownSelectValueAccessor extends core.Object {
      get selectionModel() {
        return this[selectionModel$];
      }
      set selectionModel(value) {
        super.selectionModel = value;
      }
      get initialized() {
        return this[initialized];
      }
      set initialized(value) {
        this[initialized] = value;
      }
      initializeSelectionModel() {
        if (dart.test(this.initialized)) return;
        this.initialized = true;
        if (!(this[_select$].selection == null)) dart.assertFailed("Cannot set [selection] when using a Dropdown control value accessor.", L0, 118, 12, "_select.selection == null");
        this[_select$].selection = this.selectionModel;
      }
      registerOnTouched(callback) {
        this[_visibileSub] = this[_select$].visibleStream.listen(dart.fn(_ => {
          this[_visibileSub].cancel();
          callback();
        }, boolLToNull()));
      }
      ngOnDestroy() {
        let t0;
        t0 = this[_visibileSub];
        t0 == null ? null : t0.cancel();
      }
      onDisabledChanged(isDisabled) {
      }
    }
    (BaseDropdownSelectValueAccessor.new = function(_select, selectionModel) {
      this[_visibileSub] = null;
      this[initialized] = false;
      this[_select$] = _select;
      this[selectionModel$] = selectionModel;
      ;
    }).prototype = BaseDropdownSelectValueAccessor.prototype;
    dart.addTypeTests(BaseDropdownSelectValueAccessor);
    BaseDropdownSelectValueAccessor.prototype[_is_BaseDropdownSelectValueAccessor_default] = true;
    dart.addTypeCaches(BaseDropdownSelectValueAccessor);
    BaseDropdownSelectValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor, lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(BaseDropdownSelectValueAccessor, () => ({
      __proto__: dart.getMethods(BaseDropdownSelectValueAccessor.__proto__),
      initializeSelectionModel: dart.fnType(dart.void, []),
      registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
      ngOnDestroy: dart.fnType(dart.void, []),
      onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)])
    }));
    dart.setLibraryUri(BaseDropdownSelectValueAccessor, L1);
    dart.setFieldSignature(BaseDropdownSelectValueAccessor, () => ({
      __proto__: dart.getFields(BaseDropdownSelectValueAccessor.__proto__),
      [_select$]: dart.finalFieldType(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))),
      selectionModel: dart.finalFieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      [_visibileSub]: dart.fieldType(dart.legacy(async.StreamSubscription)),
      initialized: dart.fieldType(dart.legacy(core.bool))
    }));
    return BaseDropdownSelectValueAccessor;
  });
  material_dropdown_select_accessor.BaseDropdownSelectValueAccessor = material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$();
  dart.addTypeTests(material_dropdown_select_accessor.BaseDropdownSelectValueAccessor, _is_BaseDropdownSelectValueAccessor_default);
  const _is_DropdownSelectValueAccessor_default = Symbol('_is_DropdownSelectValueAccessor_default');
  material_dropdown_select_accessor.DropdownSelectValueAccessor$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialDropdownSelectComponentOfTL = () => (MaterialDropdownSelectComponentOfTL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(TL())))();
    var MaterialDropdownSelectComponentLOfTL = () => (MaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfTL())))();
    var SingleSelectionModelOfTL = () => (SingleSelectionModelOfTL = dart.constFn(selection_model.SingleSelectionModel$(TL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNull = () => (ListLOfSelectionChangeRecordLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    class DropdownSelectValueAccessor extends material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$(dart.legacy(T)) {
      registerOnChange(callback) {
        this[_selectionChangesSub] = this.selectionModel.selectionChanges.listen(dart.fn(_ => {
          let t0;
          let value = this.selectionModel.selectedValues == null || dart.test(this.selectionModel.selectedValues[$isEmpty]) ? null : (t0 = this.selectionModel.selectedValues, t0 == null ? null : t0[$first]);
          callback(value);
        }, ListLOfSelectionChangeRecordLOfTLToNull()));
      }
      writeValue(newValue) {
        this.initializeSelectionModel();
        if (newValue != null) {
          this.selectionModel.select(TL().as(newValue));
        } else {
          this.selectionModel.clear();
        }
      }
      ngOnDestroy() {
        let t0;
        t0 = this[_selectionChangesSub];
        t0 == null ? null : t0.cancel();
        super.ngOnDestroy();
      }
    }
    (DropdownSelectValueAccessor.new = function(select) {
      this[_selectionChangesSub] = null;
      DropdownSelectValueAccessor.__proto__.new.call(this, MaterialDropdownSelectComponentLOfTL().as(select), SingleSelectionModelOfTL().new());
      ;
    }).prototype = DropdownSelectValueAccessor.prototype;
    dart.addTypeTests(DropdownSelectValueAccessor);
    DropdownSelectValueAccessor.prototype[_is_DropdownSelectValueAccessor_default] = true;
    dart.addTypeCaches(DropdownSelectValueAccessor);
    DropdownSelectValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor, lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(DropdownSelectValueAccessor, () => ({
      __proto__: dart.getMethods(DropdownSelectValueAccessor.__proto__),
      registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: dart.legacy(core.String)}, {}))]),
      writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(DropdownSelectValueAccessor, L1);
    dart.setFieldSignature(DropdownSelectValueAccessor, () => ({
      __proto__: dart.getFields(DropdownSelectValueAccessor.__proto__),
      [_selectionChangesSub]: dart.fieldType(dart.legacy(async.StreamSubscription))
    }));
    return DropdownSelectValueAccessor;
  });
  material_dropdown_select_accessor.DropdownSelectValueAccessor = material_dropdown_select_accessor.DropdownSelectValueAccessor$();
  dart.addTypeTests(material_dropdown_select_accessor.DropdownSelectValueAccessor, _is_DropdownSelectValueAccessor_default);
  const _is_MultiDropdownSelectValueAccessor_default = Symbol('_is_MultiDropdownSelectValueAccessor_default');
  var selectionChangesSub = dart.privateName(material_dropdown_select_accessor, "MultiDropdownSelectValueAccessor.selectionChangesSub");
  material_dropdown_select_accessor.MultiDropdownSelectValueAccessor$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MultiSelectionModelOfTL = () => (MultiSelectionModelOfTL = dart.constFn(selection_model.MultiSelectionModel$(TL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var StreamSubscriptionOfListLOfSelectionChangeRecordLOfTL = () => (StreamSubscriptionOfListLOfSelectionChangeRecordLOfTL = dart.constFn(async.StreamSubscription$(ListLOfSelectionChangeRecordLOfTL())))();
    var StreamSubscriptionLOfListLOfSelectionChangeRecordLOfTL = () => (StreamSubscriptionLOfListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(StreamSubscriptionOfListLOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNull = () => (ListLOfSelectionChangeRecordLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    class MultiDropdownSelectValueAccessor extends material_dropdown_select_accessor.BaseDropdownSelectValueAccessor$(dart.legacy(T)) {
      get selectionChangesSub() {
        return this[selectionChangesSub];
      }
      set selectionChangesSub(value) {
        this[selectionChangesSub] = StreamSubscriptionLOfListLOfSelectionChangeRecordLOfTL().as(value);
      }
      registerOnChange(callback) {
        this.selectionChangesSub = this.selectionModel.selectionChanges.listen(dart.fn(_ => {
          let t0;
          callback((t0 = this.selectionModel.selectedValues, t0 == null ? null : t0[$toList]()));
        }, ListLOfSelectionChangeRecordLOfTLToNull()));
      }
      writeValue(newValue) {
        this.initializeSelectionModel();
        this.selectionModel.clear();
        if (newValue == null) return;
        if (!IterableL().is(newValue)) dart.assertFailed("Multi select must be backed by an iterable", L0, 89, 12, "newValue is Iterable");
        for (let value of IterableL().as(newValue)) {
          this.selectionModel.select(TL().as(value));
        }
      }
      ngOnDestroy() {
        let t0;
        t0 = this.selectionChangesSub;
        t0 == null ? null : t0.cancel();
        super.ngOnDestroy();
      }
    }
    (MultiDropdownSelectValueAccessor.new = function(select) {
      this[selectionChangesSub] = null;
      MultiDropdownSelectValueAccessor.__proto__.new.call(this, select, MultiSelectionModelOfTL().new());
      ;
    }).prototype = MultiDropdownSelectValueAccessor.prototype;
    dart.addTypeTests(MultiDropdownSelectValueAccessor);
    MultiDropdownSelectValueAccessor.prototype[_is_MultiDropdownSelectValueAccessor_default] = true;
    dart.addTypeCaches(MultiDropdownSelectValueAccessor);
    MultiDropdownSelectValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor, lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MultiDropdownSelectValueAccessor, () => ({
      __proto__: dart.getMethods(MultiDropdownSelectValueAccessor.__proto__),
      registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: dart.legacy(core.String)}, {}))]),
      writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(MultiDropdownSelectValueAccessor, L1);
    dart.setFieldSignature(MultiDropdownSelectValueAccessor, () => ({
      __proto__: dart.getFields(MultiDropdownSelectValueAccessor.__proto__),
      selectionChangesSub: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T))))))))
    }));
    return MultiDropdownSelectValueAccessor;
  });
  material_dropdown_select_accessor.MultiDropdownSelectValueAccessor = material_dropdown_select_accessor.MultiDropdownSelectValueAccessor$();
  dart.addTypeTests(material_dropdown_select_accessor.MultiDropdownSelectValueAccessor, _is_MultiDropdownSelectValueAccessor_default);
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select_accessor", {
    "package:angular_components/material_select/material_dropdown_select_accessor.dart": material_dropdown_select_accessor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;MA2G0B;;;;;;MAEnB;;;;;;;AAMH,sBAAI,mBAAa;AACC,QAAlB,mBAAc;AACd,cAAO,AAAQ,AAAU,4BAAG,yBACxB;AAC8B,QAAlC,AAAQ,2BAAY;MACtB;wBAGuB;AAKnB,QAJF,qBAAe,AAAQ,AAAc,oCAAO,QAAC;AAEtB,UAArB,AAAa;AACH,UAAV,AAAQ,QAAA;;MAEZ;;;AAIwB,aAAtB;4BAAc;MAChB;wBAG4B;MAAa;;oDA1BJ,SAAc;MAHhC;MACd,oBAAc;MAEkB;MAAc;;IAAe;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAjF5C;AAOlB,QANF,6BAAuB,AAAe,AAAiB,4CAAO,QAAC;;AACzD,sBAAS,AAAe,AAAe,AAAQ,sCAAL,kBACtC,AAAe,AAAe,gDAChC,aACA,AAAe,iDAAA,OAAgB;AACtB,UAAf,AAAQ,QAAA,CAAC,KAAK;;MAElB;iBAGgB;AACY,QAA1B;AACA,YAAI,QAAQ,IAAI;AACiB,UAA/B,AAAe,mCAAO,QAAQ;;AAER,UAAtB,AAAe;;MAEnB;;;AAIgC,aAA9B;4BAAsB;AACH,QAAb;MACR;;gDA5B4D;MADzC;AAEb,qGAAM,MAAM,GAAiB;;IAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4CO;;;;;;uBAM7B;AAGlB,QAFF,2BAAsB,AAAe,AAAiB,4CAAO,QAAC;;AACX,UAAjD,AAAQ,QAAA,OAAC,AAAe,iDAAA,OAAgB;;MAE5C;iBAGgB;AACY,QAA1B;AACsB,QAAtB,AAAe;AACf,YAAI,AAAS,QAAD,IAAI,MAAM;AACtB,aAAgB,eAAT,QAAQ,qBAAc;AAC7B,iBAAW,wBAAS,QAAQ;AACE,UAA5B,AAAe,mCAAO,KAAK;;MAE/B;;;AAI+B,aAA7B;4BAAqB;AACF,QAAb;MACR;;qDAzBoE;MAFjB;AAG7C,gEAAM,MAAM,EAAE;;IAAyB","file":"material_dropdown_select_accessor.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select_accessor: material_dropdown_select_accessor
  };
}));

//# sourceMappingURL=material_dropdown_select_accessor.unsound.ddc.js.map
