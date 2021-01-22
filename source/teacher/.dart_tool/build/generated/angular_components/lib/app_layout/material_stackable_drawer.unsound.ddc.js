define(['dart_sdk', 'packages/angular_components/app_layout/material_temporary_drawer'], (function load__packages__angular_components__app_layout__material_stackable_drawer(dart_sdk, packages__angular_components__app_layout__material_temporary_drawer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_temporary_drawer = packages__angular_components__app_layout__material_temporary_drawer.app_layout__material_temporary_drawer;
  var material_stackable_drawer = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_stackable_drawer.dart";
  var parent$ = dart.privateName(material_stackable_drawer, "MaterialStackableDrawerComponent.parent");
  var isExpanded = dart.privateName(material_stackable_drawer, "MaterialStackableDrawerComponent.isExpanded");
  material_stackable_drawer.MaterialStackableDrawerComponent = class MaterialStackableDrawerComponent extends material_temporary_drawer.MaterialTemporaryDrawerComponent {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get isExpanded() {
      return this[isExpanded];
    }
    set isExpanded(value) {
      this[isExpanded] = value;
    }
    set visible(newVisible) {
      let t0;
      super.visible = newVisible;
      t0 = this.parent;
      t0 == null ? null : t0.isExpanded = newVisible;
    }
    get visible() {
      return super.visible;
    }
    get hostMatDrawerCollapsed() {
      return !dart.test(this.visible);
    }
    get hostMatDrawerExpanded() {
      return this.visible;
    }
    toggle() {
      return super.toggle();
    }
  };
  (material_stackable_drawer.MaterialStackableDrawerComponent.new = function(parent) {
    this[isExpanded] = false;
    this[parent$] = parent;
    material_stackable_drawer.MaterialStackableDrawerComponent.__proto__.new.call(this);
    ;
  }).prototype = material_stackable_drawer.MaterialStackableDrawerComponent.prototype;
  dart.addTypeTests(material_stackable_drawer.MaterialStackableDrawerComponent);
  dart.addTypeCaches(material_stackable_drawer.MaterialStackableDrawerComponent);
  dart.setLibraryUri(material_stackable_drawer.MaterialStackableDrawerComponent, L0);
  dart.setFieldSignature(material_stackable_drawer.MaterialStackableDrawerComponent, () => ({
    __proto__: dart.getFields(material_stackable_drawer.MaterialStackableDrawerComponent.__proto__),
    parent: dart.finalFieldType(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)),
    isExpanded: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer", {
    "package:angular_components/app_layout/material_stackable_drawer.dart": material_stackable_drawer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.dart"],"names":[],"mappings":";;;;;;;;;;;;IAyByC;;;;;;IAOlC;;;;;;gBAGY;;AACW,MAApB,gBAAU,UAAU;AAEK,WAA/B;0BAAQ,gBAAa,UAAU;IACjC;;;;;AAGmC,wBAAC;IAAO;;AAGT;IAAO;;AAMxB,YAAM;IAAQ;;6EAxB+B;IAKzD,mBAAa;IAL4C;AACxD;;EAAO","file":"material_stackable_drawer.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer: material_stackable_drawer
  };
}));

//# sourceMappingURL=material_stackable_drawer.unsound.ddc.js.map
