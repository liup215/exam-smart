define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/mixins/material_dropdown_base'], (function load__packages__angular_components__material_list__material_list_item(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__button_decorator__button_decorator, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__mixins__material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  var material_list_item = Object.create(dart.library);
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfUIEventL = () => (StreamSubscriptionOfUIEventL = dart.constFn(async.StreamSubscription$(UIEventL())))();
  var StreamSubscriptionLOfUIEventL = () => (StreamSubscriptionLOfUIEventL = dart.constFn(dart.legacy(StreamSubscriptionOfUIEventL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list_item.dart";
  var _disposer = dart.privateName(material_list_item, "_disposer");
  var _dropdown$ = dart.privateName(material_list_item, "_dropdown");
  var hostTabIndex = dart.privateName(material_list_item, "MaterialListItemComponent.hostTabIndex");
  var element$ = dart.privateName(material_list_item, "MaterialListItemComponent.element");
  var closeOnActivate = dart.privateName(material_list_item, "MaterialListItemComponent.closeOnActivate");
  material_list_item.MaterialListItemComponent = class MaterialListItemComponent extends button_decorator.ButtonDirective {
    get hostTabIndex() {
      return this[hostTabIndex];
    }
    set hostTabIndex(value) {
      super.hostTabIndex = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
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
      return super.disabled = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    handleActivate(_) {
      let t0;
      if (dart.test(this.closeOnActivate)) {
        t0 = this[_dropdown$];
        t0 == null ? null : t0.close();
      }
    }
  };
  (material_list_item.MaterialListItemComponent.new = function(element, _dropdown, tabIndex, role) {
    let t0, t0$;
    this[_disposer] = new disposer.Disposer.oneShot();
    this[closeOnActivate] = true;
    this[element$] = element;
    this[_dropdown$] = _dropdown;
    this[hostTabIndex] = (t0 = tabIndex, t0 == null ? "0" : t0);
    material_list_item.MaterialListItemComponent.__proto__.new.call(this, element, (t0$ = role, t0$ == null ? "listitem" : t0$));
    if (this[_dropdown$] != null) {
      this[_disposer].addDisposable(StreamSubscriptionLOfUIEventL(), this.trigger.listen(dart.bind(this, 'handleActivate')));
    }
  }).prototype = material_list_item.MaterialListItemComponent.prototype;
  dart.addTypeTests(material_list_item.MaterialListItemComponent);
  dart.addTypeCaches(material_list_item.MaterialListItemComponent);
  material_list_item.MaterialListItemComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getMethods(material_list_item.MaterialListItemComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    handleActivate: dart.fnType(dart.void, [dart.legacy(html.UIEvent)])
  }));
  dart.setGetterSignature(material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getGetters(material_list_item.MaterialListItemComponent.__proto__),
    disabled: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getSetters(material_list_item.MaterialListItemComponent.__proto__),
    disabled: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_list_item.MaterialListItemComponent, L0);
  dart.setFieldSignature(material_list_item.MaterialListItemComponent, () => ({
    __proto__: dart.getFields(material_list_item.MaterialListItemComponent.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_dropdown$]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
    hostTabIndex: dart.finalFieldType(dart.legacy(core.String)),
    element: dart.fieldType(dart.legacy(html.HtmlElement)),
    closeOnActivate: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_list_item.MaterialListItemComponent, {
    /*material_list_item.MaterialListItemComponent.hostClass*/get hostClass() {
      return "item";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_list/material_list_item", {
    "package:angular_components/material_list/material_list_item.dart": material_list_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAqCe;;;;;;IAEG;;;;;;IAwBX;;;;;;;AAXgB,YAAM;IAAQ;iBAMjB;AAAU,YAAM,kBAAW,KAAK;;;AAS7B,MAAnB,AAAU;IACZ;mBAEgC;;AAC9B,oBAAI,uBAAmC;aAAlB;4BAAW;;IAClC;;+DA/B+B,SAA0B,WACvB,UAAoC;;IAThE,kBAAqB;IA8BtB,wBAAkB;IAtBQ;IAA0B;IAEtC,sBAAW,KAAT,QAAQ,QAAR,OAAY;AAC3B,0EAAM,OAAO,GAAO,MAAL,IAAI,SAAJ,OAAQ;AAC3B,QAAI,oBAAa;AACwC,MAAvD,AAAU,+DAAc,AAAQ,8BAAO;;EAE3C;;;;;;;;;;;;;;;;;;;;;;;;;;;MAjBa,sDAAS","file":"material_list_item.unsound.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item: material_list_item
  };
}));

//# sourceMappingURL=material_list_item.unsound.ddc.js.map
