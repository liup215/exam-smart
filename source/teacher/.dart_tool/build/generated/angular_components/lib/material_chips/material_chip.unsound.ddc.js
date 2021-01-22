define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/focus/focus', 'packages/intl/intl', 'packages/angular_components/utils/id_generator/id_generator'], (function load__packages__angular_components__material_chips__material_chip(dart_sdk, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_model, packages__angular_components__focus__focus, packages__intl__intl, packages__angular_components__utils__id_generator__id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const intl = packages__intl__intl.intl;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  var material_chip = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_chips/material_chip.dart";
  var _itemRenderer = dart.privateName(material_chip, "_itemRenderer");
  var _value = dart.privateName(material_chip, "_value");
  var _label = dart.privateName(material_chip, "_label");
  var _remove = dart.privateName(material_chip, "_remove");
  var _uuid = dart.privateName(material_chip, "_uuid");
  var _genLabel = dart.privateName(material_chip, "_genLabel");
  const _is_MaterialChipComponent_default = Symbol('_is_MaterialChipComponent_default');
  var deleteButtonAriaMessage = dart.privateName(material_chip, "MaterialChipComponent.deleteButtonAriaMessage");
  var selectionModel = dart.privateName(material_chip, "MaterialChipComponent.selectionModel");
  var removable = dart.privateName(material_chip, "MaterialChipComponent.removable");
  var hasLeftIcon = dart.privateName(material_chip, "MaterialChipComponent.hasLeftIcon");
  material_chip.MaterialChipComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    class MaterialChipComponent extends focus.RootFocusable {
      get deleteButtonAriaMessage() {
        return this[deleteButtonAriaMessage];
      }
      set deleteButtonAriaMessage(value) {
        this[deleteButtonAriaMessage] = value;
      }
      get selectionModel() {
        return this[selectionModel];
      }
      set selectionModel(value) {
        this[selectionModel] = SelectionModelLOfTL().as(value);
      }
      get removable() {
        return this[removable];
      }
      set removable(value) {
        this[removable] = value;
      }
      get hasLeftIcon() {
        return this[hasLeftIcon];
      }
      set hasLeftIcon(value) {
        this[hasLeftIcon] = value;
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
        this[_genLabel]();
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set value(val) {
        this[_value] = val;
        this[_genLabel]();
      }
      get value() {
        return this[_value];
      }
      [_genLabel]() {
        let t0;
        if (this[_value] == null) {
          this[_label] = null;
        } else if (this[_itemRenderer] != has_renderer.nullRenderer) {
          this[_label] = (t0 = this[_value], this.itemRenderer(TL().as(t0)));
        }
      }
      get label() {
        return this[_label];
      }
      get remove() {
        return this[_remove].stream;
      }
      removeChip(event) {
        let t0;
        t0 = this.selectionModel;
        t0 == null ? null : t0.deselect(TL().as(this.value));
        this[_remove].add(this.value);
        dart.dsend(event, 'preventDefault', []);
        dart.dsend(event, 'stopPropagation', []);
      }
      get uuid() {
        if (this[_uuid] == null) {
          this[_uuid] = material_chip._idGenerator.nextId();
        }
        return this[_uuid];
      }
    }
    (MaterialChipComponent.new = function(root) {
      this[deleteButtonAriaMessage] = material_chip.MaterialChipComponent.chipDeleteButtonMessage;
      this[selectionModel] = null;
      this[removable] = true;
      this[hasLeftIcon] = false;
      this[_itemRenderer] = has_renderer.nullRenderer;
      this[_value] = null;
      this[_label] = null;
      this[_remove] = async.StreamController.new({sync: true});
      this[_uuid] = null;
      MaterialChipComponent.__proto__.new.call(this, root);
      ;
    }).prototype = MaterialChipComponent.prototype;
    dart.addTypeTests(MaterialChipComponent);
    MaterialChipComponent.prototype[_is_MaterialChipComponent_default] = true;
    dart.addTypeCaches(MaterialChipComponent);
    MaterialChipComponent[dart.implements] = () => [has_renderer.HasRenderer$(dart.legacy(T))];
    dart.setMethodSignature(MaterialChipComponent, () => ({
      __proto__: dart.getMethods(MaterialChipComponent.__proto__),
      [_genLabel]: dart.fnType(dart.void, []),
      removeChip: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setGetterSignature(MaterialChipComponent, () => ({
      __proto__: dart.getGetters(MaterialChipComponent.__proto__),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      value: dart.dynamic,
      label: dart.legacy(core.String),
      remove: dart.legacy(async.Stream),
      uuid: dart.legacy(core.String)
    }));
    dart.setSetterSignature(MaterialChipComponent, () => ({
      __proto__: dart.getSetters(MaterialChipComponent.__proto__),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      value: dart.dynamic
    }));
    dart.setLibraryUri(MaterialChipComponent, L0);
    dart.setFieldSignature(MaterialChipComponent, () => ({
      __proto__: dart.getFields(MaterialChipComponent.__proto__),
      deleteButtonAriaMessage: dart.fieldType(dart.legacy(core.String)),
      selectionModel: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      removable: dart.fieldType(dart.legacy(core.bool)),
      hasLeftIcon: dart.fieldType(dart.legacy(core.bool)),
      [_itemRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))),
      [_value]: dart.fieldType(dart.dynamic),
      [_label]: dart.fieldType(dart.legacy(core.String)),
      [_remove]: dart.finalFieldType(dart.legacy(async.StreamController)),
      [_uuid]: dart.fieldType(dart.legacy(core.String))
    }));
    return MaterialChipComponent;
  });
  material_chip.MaterialChipComponent = material_chip.MaterialChipComponent$();
  dart.defineLazy(material_chip.MaterialChipComponent, {
    /*material_chip.MaterialChipComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_chip.MaterialChipComponent.chipDeleteButtonMessage*/get chipDeleteButtonMessage() {
      return intl.Intl.message("Delete", {name: "chipDeleteButtonMessage", desc: "Label for a button which removes the item when clicked.", meaning: "Label for a button which removes the item when clicked."});
    }
  }, true);
  dart.addTypeTests(material_chip.MaterialChipComponent, _is_MaterialChipComponent_default);
  dart.defineLazy(material_chip, {
    /*material_chip._idGenerator*/get _idGenerator() {
      return new id_generator.SequentialIdGenerator.fromUUID();
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_chips/material_chip", {
    "package:angular_components/material_chips/material_chip.dart": material_chip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA6CS;;;;;;MAUW;;;;;;MAIb;;;;;;MAIA;;;;;;uBAW4B;AACV,QAArB,sBAAgB,KAAK;AACV,QAAX;MACF;;AAIoC;MAAa;gBAOvC;AACI,QAAZ,eAAS,GAAG;AACD,QAAX;MACF;;AAGqB;MAAM;;;AAIzB,YAAI,AAAO,gBAAG;AACC,UAAb,eAAS;cACJ,KAAe,uBAAe;AACN,UAA7B,qBAAsB,cAAb,AAAY,kBAAC;;MAE1B;;AAGoB;MAAM;;AAIL,cAAA,AAAQ;MAAM;iBAGc;;AAChB,aAA/B;4BAAgB,oBAAS;AACP,QAAlB,AAAQ,kBAAI;AACU,QAAhB,WAAN,KAAK;AACkB,QAAjB,WAAN,KAAK;MACP;;AAIE,YAAI,AAAM,eAAG;AACkB,UAA7B,cAAQ,AAAa;;AAEvB,cAAO;MACT;;0CA1F8B;MASvB,gCAA0B;MAUf;MAIb,kBAAY;MAIZ,oBAAc;MAgBH,sBAAgB;MAcxB;MAYD;MAMD,gBAAU,kCAAgC;MASzC;AApF+B,qDAAM,IAAI;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAFpC,6CAAS;;;MAIT,2DAAuB;YAAQ,mBAAQ,iBAC1C,iCACA,oEACG;;;;;MAwFT,0BAAY;YAAyB","file":"material_chip.unsound.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip: material_chip
  };
}));

//# sourceMappingURL=material_chip.unsound.ddc.js.map
