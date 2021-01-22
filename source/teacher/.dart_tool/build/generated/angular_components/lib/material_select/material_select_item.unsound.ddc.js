define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/activation_handler', 'packages/angular/src/core/application_tokens', 'packages/angular_components/mixins/material_dropdown_base'], (function load__packages__angular_components__material_select__material_select_item(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_model, packages__angular_components__button_decorator__button_decorator, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_factory, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__activation_handler, packages__angular__src__core__application_tokens, packages__angular_components__mixins__material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  var material_select_item = Object.create(dart.library);
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var VoidToFutureLOfvoid = () => (VoidToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_item.dart";
  var _disposer = dart.privateName(material_select_item, "_disposer");
  var _selectionChangeStreamSub = dart.privateName(material_select_item, "_selectionChangeStreamSub");
  var _supportsMultiSelect = dart.privateName(material_select_item, "_supportsMultiSelect");
  var _selectOnActivate = dart.privateName(material_select_item, "_selectOnActivate");
  var _deselectOnActivate = dart.privateName(material_select_item, "_deselectOnActivate");
  var _selection = dart.privateName(material_select_item, "_selection");
  var _dropdown$ = dart.privateName(material_select_item, "_dropdown");
  var _activationHandler$ = dart.privateName(material_select_item, "_activationHandler");
  var _cdRef$ = dart.privateName(material_select_item, "_cdRef");
  var _isMarkedSelected = dart.privateName(material_select_item, "_isMarkedSelected");
  var _isSelectedInSelectionModel = dart.privateName(material_select_item, "_isSelectedInSelectionModel");
  const _is_MaterialSelectItemComponent_default = Symbol('_is_MaterialSelectItemComponent_default');
  var element$ = dart.privateName(material_select_item, "MaterialSelectItemComponent.element");
  var isHidden = dart.privateName(material_select_item, "MaterialSelectItemComponent.isHidden");
  var value$ = dart.privateName(material_select_item, "MaterialSelectItemComponent.value");
  var hideCheckbox = dart.privateName(material_select_item, "MaterialSelectItemComponent.hideCheckbox");
  var itemRenderer = dart.privateName(material_select_item, "MaterialSelectItemComponent.itemRenderer");
  var componentRenderer = dart.privateName(material_select_item, "MaterialSelectItemComponent.componentRenderer");
  var factoryRenderer = dart.privateName(material_select_item, "MaterialSelectItemComponent.factoryRenderer");
  var useCheckMarks = dart.privateName(material_select_item, "MaterialSelectItemComponent.useCheckMarks");
  var selected = dart.privateName(material_select_item, "MaterialSelectItemComponent.selected");
  var closeOnActivate = dart.privateName(material_select_item, "MaterialSelectItemComponent.closeOnActivate");
  material_select_item.MaterialSelectItemComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var MultiSelectionModelOfTL = () => (MultiSelectionModelOfTL = dart.constFn(selection_model.MultiSelectionModel$(TL())))();
    var MultiSelectionModelLOfTL = () => (MultiSelectionModelLOfTL = dart.constFn(dart.legacy(MultiSelectionModelOfTL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNull = () => (ListLOfSelectionChangeRecordLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    class MaterialSelectItemComponent extends button_decorator.ButtonDirective {
      get element() {
        return this[element$];
      }
      set element(value) {
        super.element = value;
      }
      get isHidden() {
        return this[isHidden];
      }
      set isHidden(value) {
        this[isHidden] = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = TL().as(value);
      }
      get hideCheckbox() {
        return this[hideCheckbox];
      }
      set hideCheckbox(value) {
        this[hideCheckbox] = value;
      }
      get itemRenderer() {
        return this[itemRenderer];
      }
      set itemRenderer(value) {
        this[itemRenderer] = value;
      }
      get componentRenderer() {
        return this[componentRenderer];
      }
      set componentRenderer(value) {
        this[componentRenderer] = value;
      }
      get factoryRenderer() {
        return this[factoryRenderer];
      }
      set factoryRenderer(value) {
        this[factoryRenderer] = value;
      }
      get useCheckMarks() {
        return this[useCheckMarks];
      }
      set useCheckMarks(value) {
        this[useCheckMarks] = value;
      }
      get selected() {
        return this[selected];
      }
      set selected(value) {
        this[selected] = value;
      }
      get closeOnActivate() {
        return this[closeOnActivate];
      }
      set closeOnActivate(value) {
        this[closeOnActivate] = value;
      }
      get disabled() {
        return super.disabled;
      }
      set disabled(value) {
        super.disabled = value;
      }
      get supportsMultiSelect() {
        return this[_supportsMultiSelect];
      }
      set selectOnActivate(value) {
        this[_selectOnActivate] = value;
      }
      set deselectOnActivate(value) {
        this[_deselectOnActivate] = value;
      }
      get valueHasLabel() {
        return this.valueLabel != null;
      }
      get valueLabel() {
        let t0;
        if (this.value == null) {
          return null;
        } else if (this.componentRenderer == null && this.factoryRenderer == null && this.itemRenderer != has_renderer.nullRenderer) {
          t0 = this.value;
          return this.itemRenderer(t0);
        }
        return null;
      }
      get selection() {
        return this[_selection];
      }
      set selection(sel) {
        let t0;
        SelectionModelLOfTL().as(sel);
        this[_selection] = sel;
        this[_supportsMultiSelect] = MultiSelectionModelLOfTL().is(sel);
        t0 = this[_selectionChangeStreamSub];
        t0 == null ? null : t0.cancel();
        this[_selectionChangeStreamSub] = sel.selectionChanges.listen(dart.fn(_ => {
          this[_cdRef$].markForCheck();
        }, ListLOfSelectionChangeRecordLOfTLToNull()));
      }
      get componentType() {
        let t0;
        return this.componentRenderer != null ? (t0 = this.value, this.componentRenderer(t0)) : null;
      }
      get componentFactory() {
        let t0;
        return this.factoryRenderer != null ? (t0 = this.value, this.factoryRenderer(t0)) : null;
      }
      get isAriaChecked() {
        return !dart.test(this.supportsMultiSelect) || dart.test(this.hideCheckbox) ? null : this.isSelected;
      }
      get isSelected() {
        return dart.test(this[_isMarkedSelected]) || dart.test(this[_isSelectedInSelectionModel]);
      }
      get [_isMarkedSelected]() {
        return this.selected != null && dart.test(this.selected);
      }
      get [_isSelectedInSelectionModel]() {
        let t0, t0$;
        return this.value != null && dart.test((t0$ = (t0 = this[_selection], t0 == null ? null : t0.isSelected(this.value)), t0$ == null ? false : t0$));
      }
      handleActivate(e) {
        let t0, t0$;
        let hasCheckbox = dart.test(this.supportsMultiSelect) && !dart.test(this.hideCheckbox);
        if (this[_dropdown$] != null && dart.test(this.closeOnActivate) && !hasCheckbox) {
          this[_dropdown$].close();
          if (KeyboardEventL().is(e)) {
            e.stopPropagation();
          }
        }
        if (dart.test((t0$ = (t0 = this[_activationHandler$], t0 == null ? null : t0.handle(e, this.value)), t0$ == null ? false : t0$))) return;
        if (dart.test(this[_selectOnActivate]) && this[_selection] != null && this.value != null) {
          if (!dart.test(this[_selection].isSelected(this.value))) {
            this[_selection].select(this.value);
          } else if (dart.test(this[_deselectOnActivate])) {
            this[_selection].deselect(this.value);
          }
        }
      }
      onLoadCustomComponent(ref) {
      }
      ngOnDestroy() {
        this[_disposer].dispose();
      }
    }
    (MaterialSelectItemComponent.new = function(element, _dropdown, _activationHandler, _cdRef, role, opts) {
      let t0, t0$;
      let addTabIndexWhenNonTabbable = opts && 'addTabIndexWhenNonTabbable' in opts ? opts.addTabIndexWhenNonTabbable : false;
      this[_disposer] = new disposer.Disposer.oneShot();
      this[_selectionChangeStreamSub] = null;
      this[isHidden] = false;
      this[value$] = null;
      this[_supportsMultiSelect] = false;
      this[hideCheckbox] = false;
      this[itemRenderer] = has_renderer.nullRenderer;
      this[componentRenderer] = null;
      this[factoryRenderer] = null;
      this[useCheckMarks] = false;
      this[_selectOnActivate] = true;
      this[_deselectOnActivate] = true;
      this[_selection] = null;
      this[selected] = false;
      this[closeOnActivate] = true;
      this[element$] = element;
      this[_dropdown$] = _dropdown;
      this[_activationHandler$] = _activationHandler;
      this[_cdRef$] = _cdRef;
      MaterialSelectItemComponent.__proto__.new.call(this, element, (t0 = role, t0 == null ? "option" : t0), {addTabIndexWhenNonTabbable: addTabIndexWhenNonTabbable});
      t0$ = this[_disposer];
      (() => {
        t0$.addStreamSubscription(UIEventL(), this.trigger.listen(dart.bind(this, 'handleActivate')));
        t0$.addFunction(dart.fn(() => {
          let t1;
          t1 = this[_selectionChangeStreamSub];
          return t1 == null ? null : t1.cancel();
        }, VoidToFutureLOfvoid()));
        return t0$;
      })();
    }).prototype = MaterialSelectItemComponent.prototype;
    dart.addTypeTests(MaterialSelectItemComponent);
    MaterialSelectItemComponent.prototype[_is_MaterialSelectItemComponent_default] = true;
    dart.addTypeCaches(MaterialSelectItemComponent);
    MaterialSelectItemComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy, selection_container.SelectionItem$(dart.legacy(T)), has_renderer.HasRenderer$(dart.legacy(T)), has_renderer.HasComponentRenderer$(dart.legacy(has_renderer.RendersValue), dart.dynamic), has_factory.HasFactoryRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(T))];
    dart.setMethodSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectItemComponent.__proto__),
      handleActivate: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
      onLoadCustomComponent: dart.fnType(dart.void, [dart.legacy(component_factory.ComponentRef)]),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectItemComponent.__proto__),
      disabled: dart.legacy(core.bool),
      supportsMultiSelect: dart.legacy(core.bool),
      valueHasLabel: dart.legacy(core.bool),
      valueLabel: dart.legacy(core.String),
      selection: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      componentType: dart.legacy(core.Type),
      componentFactory: dart.legacy(component_factory.ComponentFactory),
      isAriaChecked: dart.legacy(core.bool),
      isSelected: dart.legacy(core.bool),
      [_isMarkedSelected]: dart.legacy(core.bool),
      [_isSelectedInSelectionModel]: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectItemComponent.__proto__),
      selectOnActivate: dart.legacy(core.bool),
      deselectOnActivate: dart.legacy(core.bool),
      selection: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(MaterialSelectItemComponent, L0);
    dart.setFieldSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getFields(MaterialSelectItemComponent.__proto__),
      [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
      [_activationHandler$]: dart.finalFieldType(dart.legacy(activation_handler.ActivationHandler)),
      [_cdRef$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
      [_dropdown$]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
      element: dart.finalFieldType(dart.legacy(html.HtmlElement)),
      [_selectionChangeStreamSub]: dart.fieldType(dart.legacy(async.StreamSubscription)),
      isHidden: dart.fieldType(dart.legacy(core.bool)),
      value: dart.fieldType(dart.legacy(T)),
      [_supportsMultiSelect]: dart.fieldType(dart.legacy(core.bool)),
      hideCheckbox: dart.fieldType(dart.legacy(core.bool)),
      itemRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))),
      componentRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic]))),
      factoryRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)]))),
      useCheckMarks: dart.fieldType(dart.legacy(core.bool)),
      [_selectOnActivate]: dart.fieldType(dart.legacy(core.bool)),
      [_deselectOnActivate]: dart.fieldType(dart.legacy(core.bool)),
      [_selection]: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      selected: dart.fieldType(dart.legacy(core.bool)),
      closeOnActivate: dart.fieldType(dart.legacy(core.bool))
    }));
    return MaterialSelectItemComponent;
  });
  material_select_item.MaterialSelectItemComponent = material_select_item.MaterialSelectItemComponent$();
  dart.defineLazy(material_select_item.MaterialSelectItemComponent, {
    /*material_select_item.MaterialSelectItemComponent.hostClass*/get hostClass() {
      return "item";
    }
  }, true);
  dart.addTypeTests(material_select_item.MaterialSelectItemComponent, _is_MaterialSelectItemComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_item", {
    "package:angular_components/material_select/material_select_item.dart": material_select_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA0DoB;;;;;;MA2Bb;;;;;;MAUH;;;;;;MAYG;;;;;;MAUW;;;;;;MAME;;;;;;MAUe;;;;;;MAQ5B;;;;;;MAuDA;;;;;;MAMA;;;;;;;AA5HgB,cAAM;MAAQ;;;;;AAuBH;MAAoB;2BA6C1B;AACC,QAAzB,0BAAoB,KAAK;MAC3B;6BAQ4B;AACC,QAA3B,4BAAsB,KAAK;MAC7B;;AAI0B,cAAA,AAAW,oBAAG;MAAI;;;AAE1C,YAAI,AAAM,cAAG;AACX,gBAAO;cACF,KAAI,AAAkB,0BAAG,QAC5B,AAAgB,wBAAG,QACR,qBAAc;AAC3B,eAAoB;gBAAb,AAAY;;AAErB,cAAO;MACT;;AAImC;MAAU;oBAKb;;;AACd,QAAhB,mBAAa,GAAG;AACoC,QAApD,6BAA2B,8BAAJ,GAAG;AAKS,aAAnC;4BAA2B;AAGzB,QAFF,kCAA4B,AAAI,AAAiB,GAAlB,yBAAyB,QAAC;AAClC,UAArB,AAAO;;MAEX;;;AAcI,cAAA,AAAkB,2BAAG,aAAyB,YAAlB,AAAiB,8BAAU;MAAI;;;AAG3D,cAAA,AAAgB,yBAAG,aAAuB,YAAhB,AAAe,4BAAU;MAAI;;AAIvD,cAAqB,YAApB,uCAAuB,qBAAe,OAAO;MAAU;;AAIrC,cAAkB,WAAlB,sCAAqB;MAA2B;;AAEzC,cAAA,AAAiB,kBAAL,kBAAQ;MAAQ;;;AAEtD,cAAA,AAAc,eAAL,mBAAuC,2CAA9B,OAAY,cAAW,qBAAvB,OAAiC;MAAM;qBAEjC;;AACtB,0BAAkC,UAApB,wCAAwB;AAC1C,YAAI,oBAAa,kBAAQ,0BAAoB,WAAW;AACrC,UAAjB,AAAU;AACV,cAAM,oBAAF,CAAC;AACgB,YAAnB,AAAE,CAAD;;;AAIL,uBAAyC,oDAArC,OAAoB,UAAO,CAAC,EAAE,qBAA9B,OAAwC,eAAO;AACnD,sBAAI,4BAAqB,oBAAc,QAAQ,cAAS;AACtD,yBAAK,AAAW,4BAAW;AACD,YAAxB,AAAW,wBAAO;gBACb,eAAI;AACiB,YAA1B,AAAW,0BAAS;;;MAG1B;4BAGwC;MAAM;;AAIzB,QAAnB,AAAU;MACZ;;gDAzLS,SACY,WACA,oBACZ,QACqB;;UACpB;MAfJ,kBAAqB;MAOR;MAyBd,iBAAW;MAUd;MAEG,6BAAuB;MAUvB,qBAAe;MAUJ,qBAAe;MAMb;MAUe;MAQ5B,sBAAgB;MAShB,0BAAoB;MAUpB,4BAAsB;MAcT;MAsBb,iBAAW;MAMX,wBAAkB;MA3Id;MACY;MACA;MACZ;AAGH,2DAAM,OAAO,GAAO,KAAL,IAAI,QAAJ,OAAQ,6CACS,0BAA0B;AAGJ,YAF1D;;AACI,8CAAsB,AAAQ,8BAAO;AACrC,wBAAY;;AAAM;qCAA2B;;;;IACnD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvBa,0DAAS","file":"material_select_item.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_item: material_select_item
  };
}));

//# sourceMappingURL=material_select_item.unsound.ddc.js.map
