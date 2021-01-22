define(['dart_sdk', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__material_select__material_select(dart_sdk, packages__angular_components__model__ui__template_support, packages__angular_components__model__selection__selection_options, packages__angular_components__model__selection__selection_model, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__selection__selection_container, packages__angular_components__material_select__material_select_base, packages__angular_components__interfaces__has_disabled, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const template_support = packages__angular_components__model__ui__template_support.model__ui__template_support;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const material_select_base = packages__angular_components__material_select__material_select_base.material_select__material_select_base;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  var material_select = Object.create(dart.library);
  var $first = dartx.first;
  var $indexOf = dartx.indexOf;
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select.dart";
  var _selectItems = dart.privateName(material_select, "_selectItems");
  var _listAutoFocus = dart.privateName(material_select, "_listAutoFocus");
  var _autoFocusIndex = dart.privateName(material_select, "_autoFocusIndex");
  var _itemRenderer = dart.privateName(material_select, "_itemRenderer");
  var _refreshItems = dart.privateName(material_select, "_refreshItems");
  const _is_MaterialSelectComponent_default = Symbol('_is_MaterialSelectComponent_default');
  var trackByIndexFn = dart.privateName(material_select, "MaterialSelectComponent.trackByIndexFn");
  var ariaLabelledBy = dart.privateName(material_select, "MaterialSelectComponent.ariaLabelledBy");
  var ariaDescribedBy = dart.privateName(material_select, "MaterialSelectComponent.ariaDescribedBy");
  var disabled = dart.privateName(material_select, "MaterialSelectComponent.disabled");
  material_select.MaterialSelectComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionItemOfTL = () => (SelectionItemOfTL = dart.constFn(selection_container.SelectionItem$(TL())))();
    var SelectionItemLOfTL = () => (SelectionItemLOfTL = dart.constFn(dart.legacy(SelectionItemOfTL())))();
    var ListOfSelectionItemLOfTL = () => (ListOfSelectionItemLOfTL = dart.constFn(core.List$(SelectionItemLOfTL())))();
    var ListLOfSelectionItemLOfTL = () => (ListLOfSelectionItemLOfTL = dart.constFn(dart.legacy(ListOfSelectionItemLOfTL())))();
    class MaterialSelectComponent extends material_select_base.MaterialSelectBase$(dart.legacy(T)) {
      get trackByIndexFn() {
        return this[trackByIndexFn];
      }
      set trackByIndexFn(value) {
        super.trackByIndexFn = value;
      }
      get ariaLabelledBy() {
        return this[ariaLabelledBy];
      }
      set ariaLabelledBy(value) {
        this[ariaLabelledBy] = value;
      }
      get ariaDescribedBy() {
        return this[ariaDescribedBy];
      }
      set ariaDescribedBy(value) {
        this[ariaDescribedBy] = value;
      }
      get disabled() {
        return this[disabled];
      }
      set disabled(value) {
        this[disabled] = value;
      }
      get isMultiSelect() {
        return super.isMultiSelect;
      }
      set options(value) {
        SelectionOptionsLOfTL().as(value);
        super.options = value;
      }
      get options() {
        return super.options;
      }
      set width(value) {
        super.width = value;
      }
      get width() {
        return super.width;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set selection(value) {
        SelectionModelLOfTL().as(value);
        super.selection = value;
        this[_refreshItems]();
      }
      get selection() {
        return super.selection;
      }
      isOptionDisabled(item) {
        TL().as(item);
        return !dart.test(selectable.Selectable.isSelectableIn(TL(), this.options, item, true));
      }
      get disabledStr() {
        return dart.str(this.disabled);
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(renderer) {
        this[_itemRenderer] = renderer;
        this[_refreshItems]();
      }
      set listAutoFocus(value) {
        this[_listAutoFocus] = value;
      }
      get autoFocusIndex() {
        return this[_autoFocusIndex];
      }
      set selectItems(value) {
        ListLOfSelectionItemLOfTL().as(value);
        if (value != null) {
          async.scheduleMicrotask(dart.fn(() => {
            this[_selectItems] = value;
            this[_refreshItems]();
          }, VoidToNull()));
        }
      }
      ngOnInit() {
        if (!dart.test(this[_listAutoFocus]) || this.options == null) return;
        this[_autoFocusIndex] = dart.test(this.selection.isNotEmpty) ? this.options.optionsList[$indexOf](this.selection.selectedValues[$first]) : 0;
      }
      [_refreshItems]() {
        if (this[_selectItems] == null) return;
        if (this.selection != null) {
          for (let item of this[_selectItems]) {
            item.selection = this.selection;
          }
        }
        if (this.itemRenderer != null) {
          for (let item of this[_selectItems]) {
            item.itemRenderer = this.itemRenderer;
          }
        }
      }
    }
    (MaterialSelectComponent.new = function() {
      this[_selectItems] = null;
      this[trackByIndexFn] = template_support.indexIdentityFn;
      this[_listAutoFocus] = false;
      this[_autoFocusIndex] = null;
      this[ariaLabelledBy] = null;
      this[ariaDescribedBy] = null;
      this[disabled] = false;
      this[_itemRenderer] = null;
      MaterialSelectComponent.__proto__.new.call(this);
      ;
    }).prototype = MaterialSelectComponent.prototype;
    dart.addTypeTests(MaterialSelectComponent);
    MaterialSelectComponent.prototype[_is_MaterialSelectComponent_default] = true;
    dart.addTypeCaches(MaterialSelectComponent);
    MaterialSelectComponent[dart.implements] = () => [has_disabled.HasDisabled, lifecycle_hooks.OnInit];
    dart.setMethodSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectComponent.__proto__),
      isOptionDisabled: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      ngOnInit: dart.fnType(dart.void, []),
      [_refreshItems]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectComponent.__proto__),
      selection: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      disabledStr: dart.legacy(core.String),
      autoFocusIndex: dart.legacy(core.int)
    }));
    dart.setSetterSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectComponent.__proto__),
      options: dart.legacy(core.Object),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])),
      selection: dart.legacy(core.Object),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      listAutoFocus: dart.legacy(core.bool),
      selectItems: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(MaterialSelectComponent, L0);
    dart.setFieldSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getFields(MaterialSelectComponent.__proto__),
      [_selectItems]: dart.fieldType(dart.legacy(core.List$(dart.legacy(selection_container.SelectionItem$(dart.legacy(T)))))),
      trackByIndexFn: dart.finalFieldType(dart.legacy(core.Function)),
      [_listAutoFocus]: dart.fieldType(dart.legacy(core.bool)),
      [_autoFocusIndex]: dart.fieldType(dart.legacy(core.int)),
      ariaLabelledBy: dart.fieldType(dart.legacy(core.String)),
      ariaDescribedBy: dart.fieldType(dart.legacy(core.String)),
      disabled: dart.fieldType(dart.legacy(core.bool)),
      [_itemRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])))
    }));
    return MaterialSelectComponent;
  });
  material_select.MaterialSelectComponent = material_select.MaterialSelectComponent$();
  dart.defineLazy(material_select.MaterialSelectComponent, {
    /*material_select.MaterialSelectComponent.hostRole*/get hostRole() {
      return "listbox";
    }
  }, true);
  dart.addTypeTests(material_select.MaterialSelectComponent, _is_MaterialSelectComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select", {
    "package:angular_components/material_select/material_select.dart": material_select
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA0DiB;;;;;;MAyBR;;;;;;MAIA;;;;;;MA2CF;;;;;;;AAjEqB,cAAM;MAAa;;mCAKb;AACT,QAAf,gBAAU,KAAK;MACvB;;;;gBAKU;AACW,QAAb,cAAQ,KAAK;MACrB;;;;4BAawC;AACP,QAAzB,0BAAoB,KAAK;MACjC;;;;0BAMqD;AACtB,QAAvB,wBAAkB,KAAK;MAC/B;;;;;iCAKgC;AACP,QAAjB,kBAAY,KAAK;AACR,QAAf;MACF;;AAGmC,cAAM;MAAS;;gBAI1B;AAMtB,cAAO,YAAY,2CAAe,cAAS,IAAI,EAAE;MACnD;;AAS0B,cAAW,UAAT;MAAS;;AAGD;MAAa;uBAMhB;AACP,QAAxB,sBAAgB,QAAQ;AACT,QAAf;MACF;wBAQuB;AACC,QAAtB,uBAAiB,KAAK;MACxB;;AAE0B;MAAe;;uCAGF;AACrC,YAAI,KAAK,IAAI;AAMT,UAHF,wBAAkB;AACI,YAApB,qBAAe,KAAK;AACL,YAAf;;;MAGN;;AAIE,uBAAK,yBAAkB,AAAQ,gBAAG,MAAM;AAGjC,QAFP,kCAAkB,AAAU,6BACtB,AAAQ,AAAY,mCAAQ,AAAU,AAAe,yCACrD;MACR;;AAGE,YAAI,AAAa,sBAAG,MAAM;AAC1B,YAAI,kBAAa;AACf,mBAAsB,OAAQ;AACF,YAA1B,AAAK,IAAD,aAAa;;;AAGrB,YAAI,qBAAgB;AAClB,mBAAsB,OAAQ;AACI,YAAhC,AAAK,IAAD,gBAAgB;;;MAG1B;;;MAzIuB;MAIR,uBAAiB;MAE3B,uBAAiB;MAClB;MAsBG;MAIA;MA2CF,iBAAW;MAOA;;;IAuDlB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA5Ie,gDAAQ","file":"material_select.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select: material_select
  };
}));

//# sourceMappingURL=material_select.unsound.ddc.js.map
