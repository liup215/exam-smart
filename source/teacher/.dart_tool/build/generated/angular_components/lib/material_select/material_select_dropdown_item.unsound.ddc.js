define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/handles_aria', 'packages/angular_components/material_select/material_select_item', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__material_select__material_select_dropdown_item(dart_sdk, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_select__handles_aria, packages__angular_components__material_select__material_select_item, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const handles_aria = packages__angular_components__material_select__handles_aria.material_select__handles_aria;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var material_select_dropdown_item = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var HandlesAriaL = () => (HandlesAriaL = dart.constFn(dart.legacy(handles_aria.HandlesAria)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_dropdown_item.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(has_renderer.defaultItemRenderer, dynamicToStringL());
    }
  }, false);
  var _id = dart.privateName(material_select_dropdown_item, "_id");
  var _customAriaHandling = dart.privateName(material_select_dropdown_item, "_customAriaHandling");
  var _generatedId = dart.privateName(material_select_dropdown_item, "_generatedId");
  var C0;
  const _is_MaterialSelectDropdownItemComponent_default = Symbol('_is_MaterialSelectDropdownItemComponent_default');
  material_select_dropdown_item.MaterialSelectDropdownItemComponent$ = dart.generic(T => {
    class MaterialSelectDropdownItemComponent extends material_select_item.MaterialSelectItemComponent$(dart.legacy(T)) {
      get id() {
        let t0;
        return dart.test(this[_customAriaHandling]) ? null : (t0 = this[_id], t0 == null ? this[_generatedId] : t0);
      }
      set id(id) {
        this[_id] = id;
      }
      get isSelected() {
        return super.isSelected;
      }
      preventTextSelectionIfShiftKey(e) {
        if (dart.test(e.shiftKey)) e.preventDefault();
      }
      onLoadCustomComponent(ref) {
        let t0;
        this[_customAriaHandling] = HandlesAriaL().is((t0 = ref, t0 == null ? null : t0.instance));
        if (dart.test(this[_customAriaHandling])) this.role = null;
      }
    }
    (MaterialSelectDropdownItemComponent.new = function(element, role, dropdown, activationHandler, idGenerator, cdRef) {
      let t0, t0$;
      this[_id] = null;
      this[_customAriaHandling] = false;
      this[_generatedId] = (t0 = idGenerator, t0 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t0).nextId();
      MaterialSelectDropdownItemComponent.__proto__.new.call(this, element, dropdown, activationHandler, cdRef, (t0$ = role, t0$ == null ? "option" : t0$));
      this.itemRenderer = C0 || CT.C0;
    }).prototype = MaterialSelectDropdownItemComponent.prototype;
    dart.addTypeTests(MaterialSelectDropdownItemComponent);
    MaterialSelectDropdownItemComponent.prototype[_is_MaterialSelectDropdownItemComponent_default] = true;
    dart.addTypeCaches(MaterialSelectDropdownItemComponent);
    MaterialSelectDropdownItemComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectDropdownItemComponent.__proto__),
      preventTextSelectionIfShiftKey: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)])
    }));
    dart.setGetterSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectDropdownItemComponent.__proto__),
      id: dart.legacy(core.String)
    }));
    dart.setSetterSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectDropdownItemComponent.__proto__),
      id: dart.legacy(core.String)
    }));
    dart.setLibraryUri(MaterialSelectDropdownItemComponent, L0);
    dart.setFieldSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getFields(MaterialSelectDropdownItemComponent.__proto__),
      [_generatedId]: dart.finalFieldType(dart.legacy(core.String)),
      [_id]: dart.fieldType(dart.legacy(core.String)),
      [_customAriaHandling]: dart.fieldType(dart.legacy(core.bool))
    }));
    return MaterialSelectDropdownItemComponent;
  });
  material_select_dropdown_item.MaterialSelectDropdownItemComponent = material_select_dropdown_item.MaterialSelectDropdownItemComponent$();
  dart.defineLazy(material_select_dropdown_item.MaterialSelectDropdownItemComponent, {
    /*material_select_dropdown_item.MaterialSelectDropdownItemComponent.hostClass*/get hostClass() {
      return "item";
    }
  }, true);
  dart.addTypeTests(material_select_dropdown_item.MaterialSelectDropdownItemComponent, _is_MaterialSelectDropdownItemComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item", {
    "package:angular_components/material_select/material_select_dropdown_item.dart": material_select_dropdown_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgDmB,sDAAsB,QAAY,sBAAJ,OAAO;MAAa;aAGrD;AACJ,QAAR,YAAM,EAAE;MACV;;AAmBuB,cAAM;MAAU;qCAGQ;AAC7C,sBAAI,AAAE,CAAD,YAAW,AAAE,AAAgB,CAAjB;MACnB;4BAGwC;;AACY,QAAlD,4BAAoC,wBAAd,GAAG,eAAH,OAAK;AAC3B,sBAAI,4BAAqB,AAAW,YAAJ;MAClC;;wDAzBgB,SACc,MACC,UACG,mBACN,aACN;;MAnBf;MAWF,4BAAsB;MASR,qBACyC,CAArC,KAAZ,WAAW,QAAX,OAAqC;AAC1C,mEAAM,OAAO,EAAE,QAAQ,EAAE,iBAAiB,EAAE,KAAK,GAAO,MAAL,IAAI,SAAJ,OAAQ;AACxB,MAAlC;IACP;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA5Ba,2EAAS","file":"material_select_dropdown_item.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item: material_select_dropdown_item
  };
}));

//# sourceMappingURL=material_select_dropdown_item.unsound.ddc.js.map
