define(['dart_sdk', 'packages/angular_components/mixins/material_dropdown_base'], (function load__packages__angular_components__material_menu__common__menu_root(dart_sdk, packages__angular_components__mixins__material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  var menu_root = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/common/menu_root.dart";
  var _dropdown$ = dart.privateName(menu_root, "_dropdown");
  var visible = dart.privateName(menu_root, "MenuRoot.visible");
  menu_root.MenuRoot = class MenuRoot extends core.Object {
    get visible() {
      return this[visible];
    }
    set visible(value) {
      this[visible] = value;
    }
  };
  (menu_root.MenuRoot.new = function() {
    this[visible] = null;
    ;
  }).prototype = menu_root.MenuRoot.prototype;
  dart.addTypeTests(menu_root.MenuRoot);
  dart.addTypeCaches(menu_root.MenuRoot);
  dart.setLibraryUri(menu_root.MenuRoot, L0);
  dart.setFieldSignature(menu_root.MenuRoot, () => ({
    __proto__: dart.getFields(menu_root.MenuRoot.__proto__),
    visible: dart.fieldType(dart.legacy(core.bool))
  }));
  menu_root.MenuRootDirective = class MenuRootDirective extends menu_root.MenuRoot {
    closeHierarchy() {
      let t0;
      this.visible = false;
      t0 = this[_dropdown$];
      t0 == null ? null : t0.close();
    }
  };
  (menu_root.MenuRootDirective.new = function(_dropdown) {
    this[_dropdown$] = _dropdown;
    menu_root.MenuRootDirective.__proto__.new.call(this);
    this.visible = true;
  }).prototype = menu_root.MenuRootDirective.prototype;
  dart.addTypeTests(menu_root.MenuRootDirective);
  dart.addTypeCaches(menu_root.MenuRootDirective);
  dart.setMethodSignature(menu_root.MenuRootDirective, () => ({
    __proto__: dart.getMethods(menu_root.MenuRootDirective.__proto__),
    closeHierarchy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_root.MenuRootDirective, L0);
  dart.setFieldSignature(menu_root.MenuRootDirective, () => ({
    __proto__: dart.getFields(menu_root.MenuRootDirective.__proto__),
    [_dropdown$]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle))
  }));
  dart.trackLibraries("packages/angular_components/material_menu/common/menu_root", {
    "package:angular_components/material_menu/common/menu_root.dart": menu_root
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_root.dart"],"names":[],"mappings":";;;;;;;;;;;;IAkCO;;;;;;;;;;EACP;;;;;;;;;;;AAdmB,MAAf,eAAU;AACQ,WAAlB;0BAAW;IACb;;;IARmC;AAAnC;AACgB,IAAd,eAAU;EACZ","file":"menu_root.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__common__menu_root: menu_root
  };
}));

//# sourceMappingURL=menu_root.unsound.ddc.js.map
