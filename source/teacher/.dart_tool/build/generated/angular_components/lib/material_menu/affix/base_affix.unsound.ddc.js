define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__material_menu__affix__base_affix(dart_sdk, packages__angular_components__model__ui__has_renderer, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__menu__menu_item_affix, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  var base_affix = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/affix/base_affix.dart";
  const _is_BaseAffixComponent_default = Symbol('_is_BaseAffixComponent_default');
  base_affix.BaseAffixComponent$ = dart.generic(ModelType => {
    class BaseAffixComponent extends core.Object {}
    (BaseAffixComponent.new = function() {
      ;
    }).prototype = BaseAffixComponent.prototype;
    dart.addTypeTests(BaseAffixComponent);
    BaseAffixComponent.prototype[_is_BaseAffixComponent_default] = true;
    dart.addTypeCaches(BaseAffixComponent);
    BaseAffixComponent[dart.implements] = () => [has_renderer.RendersValue$(dart.legacy(ModelType)), has_disabled.HasDisabled];
    dart.setLibraryUri(BaseAffixComponent, L0);
    return BaseAffixComponent;
  });
  base_affix.BaseAffixComponent = base_affix.BaseAffixComponent$();
  dart.addTypeTests(base_affix.BaseAffixComponent, _is_BaseAffixComponent_default);
  base_affix.BaseMenuItemAffixModel = class BaseMenuItemAffixModel extends menu_item_affix.MenuItemAffix$(dart.legacy(component_factory.ComponentFactory$(dart.legacy(base_affix.BaseAffixComponent$(dart.legacy(menu_item_affix.MenuItemAffix)))))) {};
  (base_affix.BaseMenuItemAffixModel.new = function() {
    base_affix.BaseMenuItemAffixModel.__proto__.new.call(this);
    ;
  }).prototype = base_affix.BaseMenuItemAffixModel.prototype;
  dart.addTypeTests(base_affix.BaseMenuItemAffixModel);
  dart.addTypeCaches(base_affix.BaseMenuItemAffixModel);
  dart.setLibraryUri(base_affix.BaseMenuItemAffixModel, L0);
  dart.trackLibraries("packages/angular_components/material_menu/affix/base_affix", {
    "package:angular_components/material_menu/affix/base_affix.dart": base_affix
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_affix.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAaA;;;;;;;;;;;;AAOQ;;EAAwB","file":"base_affix.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__affix__base_affix: base_affix
  };
}));

//# sourceMappingURL=base_affix.unsound.ddc.js.map
