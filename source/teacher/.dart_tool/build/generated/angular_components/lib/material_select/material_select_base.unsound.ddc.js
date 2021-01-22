define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/accepts_width'], (function load__packages__angular_components__material_select__material_select_base(dart_sdk, packages__angular_components__model__selection__selection_model, packages__angular_components__utils__angular__properties__properties, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__accepts_width) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const accepts_width = packages__angular_components__model__ui__accepts_width.model__ui__accepts_width;
  var material_select_base = Object.create(dart.library);
  var MultiSelectionModelL = () => (MultiSelectionModelL = dart.constFn(dart.legacy(selection_model.MultiSelectionModel)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_select/material_select_base.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/material_select/material_select_base.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(has_renderer.defaultItemRenderer, dynamicToStringL());
    }
  }, false);
  var _width = dart.privateName(material_select_base, "_width");
  var C0;
  const _is_MaterialSelectBase_default = Symbol('_is_MaterialSelectBase_default');
  material_select_base.MaterialSelectBase$ = dart.generic(T => {
    class MaterialSelectBase extends selection_container.SelectionContainer$(dart.legacy(T)) {
      get isMultiSelect() {
        return MultiSelectionModelL().is(this.selection);
      }
      get isSingleSelect() {
        return !dart.test(this.isMultiSelect);
      }
      get width() {
        return this[_width];
      }
      set width(val) {
        this[_width] = properties.getInt(val, {defaultValue: 0});
        if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed(null, L0, 38, 12, "_width >= 0 && _width <= 5");
      }
      get itemRenderer() {
        let t0;
        t0 = super.itemRenderer;
        return t0 == null ? C0 || CT.C0 : t0;
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
    }
    (MaterialSelectBase.new = function() {
      this[_width] = 0;
      MaterialSelectBase.__proto__.new.call(this);
      ;
    }).prototype = MaterialSelectBase.prototype;
    dart.addTypeTests(MaterialSelectBase);
    MaterialSelectBase.prototype[_is_MaterialSelectBase_default] = true;
    dart.addTypeCaches(MaterialSelectBase);
    MaterialSelectBase[dart.implements] = () => [accepts_width.AcceptsWidth];
    dart.setGetterSignature(MaterialSelectBase, () => ({
      __proto__: dart.getGetters(MaterialSelectBase.__proto__),
      isMultiSelect: dart.legacy(core.bool),
      isSingleSelect: dart.legacy(core.bool),
      width: dart.legacy(core.int),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))
    }));
    dart.setSetterSignature(MaterialSelectBase, () => ({
      __proto__: dart.getSetters(MaterialSelectBase.__proto__),
      width: dart.dynamic
    }));
    dart.setLibraryUri(MaterialSelectBase, L1);
    dart.setFieldSignature(MaterialSelectBase, () => ({
      __proto__: dart.getFields(MaterialSelectBase.__proto__),
      [_width]: dart.fieldType(dart.legacy(core.int))
    }));
    return MaterialSelectBase;
  });
  material_select_base.MaterialSelectBase = material_select_base.MaterialSelectBase$();
  dart.addTypeTests(material_select_base.MaterialSelectBase, _is_MaterialSelectBase_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_base", {
    "package:angular_components/material_select/material_select_base.dart": material_select_base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyB4B,cAAU,2BAAV;MAAgC;;AAC/B,0BAAC;MAAa;;AAQxB;MAAM;gBACb;AAC6B,QAArC,eAAS,kBAAO,GAAG,iBAAgB;AACnC,cAAc,AAAK,aAAZ,iBAAU,KAAY,aAAP,iBAAU;MAClC;;;AAKoC,aAAM;;MAAmC;;;;;;MAHzE,eAAS;;;IAIf","file":"material_select_base.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_base: material_select_base
  };
}));

//# sourceMappingURL=material_select_base.unsound.ddc.js.map
