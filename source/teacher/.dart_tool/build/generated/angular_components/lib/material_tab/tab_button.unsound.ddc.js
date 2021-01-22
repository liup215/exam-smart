define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular_components/material_tab/tab_mixin'], (function load__packages__angular_components__material_tab__tab_button(dart_sdk, packages__angular_components__material_button__material_button_base, packages__angular_components__material_tab__tab_mixin) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button_base = packages__angular_components__material_button__material_button_base.material_button__material_button_base;
  const tab_mixin = packages__angular_components__material_tab__tab_mixin.material_tab__tab_mixin;
  var tab_button = Object.create(dart.library);
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/tab_button.dart";
  var _nativeElement$ = dart.privateName(tab_button, "_nativeElement");
  var isActive = dart.privateName(tab_button, "TabButtonComponent.isActive");
  const MaterialButtonBase_TabMixin$36 = class MaterialButtonBase_TabMixin extends material_button_base.MaterialButtonBase {};
  (MaterialButtonBase_TabMixin$36.new = function(element, role, opts) {
    tab_mixin.TabMixin.new.call(this);
    MaterialButtonBase_TabMixin$36.__proto__.new.call(this, element, role, opts);
  }).prototype = MaterialButtonBase_TabMixin$36.prototype;
  dart.applyMixin(MaterialButtonBase_TabMixin$36, tab_mixin.TabMixin);
  tab_button.TabButtonComponent = class TabButtonComponent extends MaterialButtonBase_TabMixin$36 {
    get isActive() {
      return this[isActive];
    }
    set isActive(value) {
      this[isActive] = value;
    }
    get nativeElement() {
      return this[_nativeElement$];
    }
    get hostClassFocus() {
      return this.visualFocus;
    }
    get hostClassActive() {
      return dart.test(this.isActive) || dart.test(this.isMouseDown);
    }
    get hostDisabled() {
      return dart.test(this.disabled) ? "" : null;
    }
  };
  (tab_button.TabButtonComponent.new = function(_nativeElement) {
    this[isActive] = false;
    this[_nativeElement$] = _nativeElement;
    tab_button.TabButtonComponent.__proto__.new.call(this, HtmlElementL().as(_nativeElement), "tab");
    ;
  }).prototype = tab_button.TabButtonComponent.prototype;
  dart.addTypeTests(tab_button.TabButtonComponent);
  dart.addTypeCaches(tab_button.TabButtonComponent);
  dart.setGetterSignature(tab_button.TabButtonComponent, () => ({
    __proto__: dart.getGetters(tab_button.TabButtonComponent.__proto__),
    nativeElement: dart.legacy(html.Element),
    hostClassFocus: dart.legacy(core.bool),
    hostClassActive: dart.legacy(core.bool),
    hostDisabled: dart.legacy(core.String)
  }));
  dart.setLibraryUri(tab_button.TabButtonComponent, L0);
  dart.setFieldSignature(tab_button.TabButtonComponent, () => ({
    __proto__: dart.getFields(tab_button.TabButtonComponent.__proto__),
    [_nativeElement$]: dart.finalFieldType(dart.legacy(html.Element)),
    isActive: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/material_tab/tab_button", {
    "package:angular_components/material_tab/tab_button.dart": tab_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAkCO;;;;;;;AAJwB;IAAc;;AAOhB;IAAW;;AAGV,YAAS,WAAT,4BAAY;IAAW;;AAGxB,wCAAW,KAAK;IAAI;;gDAhBvB;IAOnB,iBAAW;IAPQ;AAAkB,6EAAM,cAAc,GAAE;;EAAM","file":"tab_button.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button: tab_button
  };
}));

//# sourceMappingURL=tab_button.unsound.ddc.js.map
