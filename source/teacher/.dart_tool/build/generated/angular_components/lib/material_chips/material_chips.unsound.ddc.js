define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_chips__material_chips(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__selection__selection_model, packages__angular_components__model__ui__has_renderer, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_chips = Object.create(dart.library);
  var $toString = dartx.toString;
  var _NoopSelectionModelImplOfNull = () => (_NoopSelectionModelImplOfNull = dart.constFn(selection_model._NoopSelectionModelImpl$(core.Null)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLToStringL = () => (ObjectLToStringL = dart.constFn(dart.fnType(StringL(), [ObjectL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_chips/material_chips.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], core.Null);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: _NoopSelectionModelImplOfNull().prototype,
        [_NoopSelectionModelImpl_selectedValues]: C1 || CT.C1,
        [_NoopSelectionModelImpl_selectedValue]: null,
        [_NoopSelectionModelImpl_isNotEmpty]: false,
        [_NoopSelectionModelImpl_isEmpty]: true,
        [_NoopSelectionModelImpl_hasObservers]: false,
        [_NoopSelectionModelImpl_hasSelectionObservers]: false,
        [_NoopSelectionModelImpl_isSingleSelect]: null
      });
    },
    get C2() {
      return C2 = dart.fn(material_chips.MaterialChipsComponent._defaultItemRenderer, ObjectLToStringL());
    }
  }, false);
  var _disposer = dart.privateName(material_chips, "_disposer");
  var _selectionModel = dart.privateName(material_chips, "_selectionModel");
  var C1;
  var _NoopSelectionModelImpl_selectedValues = dart.privateName(selection_model, "_NoopSelectionModelImpl.selectedValues");
  var _NoopSelectionModelImpl_selectedValue = dart.privateName(selection_model, "_NoopSelectionModelImpl.selectedValue");
  var _NoopSelectionModelImpl_isNotEmpty = dart.privateName(selection_model, "_NoopSelectionModelImpl.isNotEmpty");
  var _NoopSelectionModelImpl_isEmpty = dart.privateName(selection_model, "_NoopSelectionModelImpl.isEmpty");
  var _NoopSelectionModelImpl_hasObservers = dart.privateName(selection_model, "_NoopSelectionModelImpl.hasObservers");
  var _NoopSelectionModelImpl_hasSelectionObservers = dart.privateName(selection_model, "_NoopSelectionModelImpl.hasSelectionObservers");
  var _NoopSelectionModelImpl_isSingleSelect = dart.privateName(selection_model, "_NoopSelectionModelImpl.isSingleSelect");
  var C0;
  var C2;
  var _changeDetector$ = dart.privateName(material_chips, "_changeDetector");
  const _is_MaterialChipsComponent_default = Symbol('_is_MaterialChipsComponent_default');
  var removable = dart.privateName(material_chips, "MaterialChipsComponent.removable");
  var itemRenderer = dart.privateName(material_chips, "MaterialChipsComponent.itemRenderer");
  material_chips.MaterialChipsComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var StreamSubscriptionOfListLOfSelectionChangeRecordLOfTL = () => (StreamSubscriptionOfListLOfSelectionChangeRecordLOfTL = dart.constFn(async.StreamSubscription$(ListLOfSelectionChangeRecordLOfTL())))();
    var StreamSubscriptionLOfListLOfSelectionChangeRecordLOfTL = () => (StreamSubscriptionLOfListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(StreamSubscriptionOfListLOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNull = () => (ListLOfSelectionChangeRecordLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    class MaterialChipsComponent extends core.Object {
      get removable() {
        return this[removable];
      }
      set removable(value) {
        this[removable] = value;
      }
      get itemRenderer() {
        return this[itemRenderer];
      }
      set itemRenderer(value) {
        this[itemRenderer] = value;
      }
      set selectionModel(model) {
        let t0;
        SelectionModelLOfTL().as(model);
        this[_selectionModel] = model;
        t0 = this[_disposer];
        (() => {
          t0.dispose();
          t0.addDisposable(StreamSubscriptionLOfListLOfSelectionChangeRecordLOfTL(), this[_selectionModel].selectionChanges.listen(dart.fn(_ => {
            this[_changeDetector$].markForCheck();
          }, ListLOfSelectionChangeRecordLOfTLToNull())));
          return t0;
        })();
      }
      get selectionModel() {
        return this[_selectionModel];
      }
      get selectedItems() {
        return this.selectionModel.selectedValues;
      }
      static _defaultItemRenderer(value) {
        let t0;
        t0 = value;
        return t0 == null ? null : dart.toString(t0);
      }
      ngOnDestroy() {
        this[_disposer].dispose();
      }
    }
    (MaterialChipsComponent.new = function(_changeDetector) {
      this[_disposer] = new disposer.Disposer.multi();
      this[removable] = true;
      this[_selectionModel] = C0 || CT.C0;
      this[itemRenderer] = C2 || CT.C2;
      this[_changeDetector$] = _changeDetector;
      ;
    }).prototype = MaterialChipsComponent.prototype;
    dart.addTypeTests(MaterialChipsComponent);
    MaterialChipsComponent.prototype[_is_MaterialChipsComponent_default] = true;
    dart.addTypeCaches(MaterialChipsComponent);
    MaterialChipsComponent[dart.implements] = () => [has_renderer.HasRenderer$(dart.legacy(T)), lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getMethods(MaterialChipsComponent.__proto__),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getGetters(MaterialChipsComponent.__proto__),
      selectionModel: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      selectedItems: dart.legacy(core.Iterable$(dart.legacy(T)))
    }));
    dart.setSetterSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getSetters(MaterialChipsComponent.__proto__),
      selectionModel: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(MaterialChipsComponent, L0);
    dart.setFieldSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getFields(MaterialChipsComponent.__proto__),
      [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
      [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
      removable: dart.fieldType(dart.legacy(core.bool)),
      [_selectionModel]: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      itemRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])))
    }));
    return MaterialChipsComponent;
  });
  material_chips.MaterialChipsComponent = material_chips.MaterialChipsComponent$();
  dart.addTypeTests(material_chips.MaterialChipsComponent, _is_MaterialChipsComponent_default);
  dart.trackLibraries("packages/angular_components/material_chips/material_chips", {
    "package:angular_components/material_chips/material_chips.dart": material_chips
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4BO;;;;;;MA+BW;;;;;;yBAtBqB;;;AACZ,QAAvB,wBAAkB,KAAK;AAKlB,aAJL;;AACI;AACA,qFAAc,AAAgB,AAAiB,8CAAO,QAAC;AACzB,YAA9B,AAAgB;;;;MAEtB;;AAEwC;MAAe;;AAetB,cAAA,AAAe;MAAc;kCAGpB;;AAAU,kBAAK;4BAAL,OAAO;MAAU;;AAMhD,QAAnB,AAAU;MACZ;;2CAL4B;MA1Cb,kBAAqB;MAI/B,kBAAY;MAKC;MA0BF;MAOY;;IAAgB","file":"material_chips.unsound.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips: material_chips
  };
}));

//# sourceMappingURL=material_chips.unsound.ddc.js.map
