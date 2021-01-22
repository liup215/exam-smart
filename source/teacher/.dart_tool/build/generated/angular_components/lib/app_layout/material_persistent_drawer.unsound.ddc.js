define(['dart_sdk', 'packages/angular_components/app_layout/material_drawer_base'], (function load__packages__angular_components__app_layout__material_persistent_drawer(dart_sdk, packages__angular_components__app_layout__material_drawer_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_drawer_base = packages__angular_components__app_layout__material_drawer_base.app_layout__material_drawer_base;
  var material_persistent_drawer = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_persistent_drawer.dart";
  material_persistent_drawer.MaterialPersistentDrawerDirective = class MaterialPersistentDrawerDirective extends material_drawer_base.MaterialDrawerBase {
    get hostMatDrawerCollapsed() {
      return !dart.test(this.visible);
    }
    get hostMatDrawerExpanded() {
      return this.visible;
    }
  };
  (material_persistent_drawer.MaterialPersistentDrawerDirective.new = function() {
    material_persistent_drawer.MaterialPersistentDrawerDirective.__proto__.new.call(this);
    ;
  }).prototype = material_persistent_drawer.MaterialPersistentDrawerDirective.prototype;
  dart.addTypeTests(material_persistent_drawer.MaterialPersistentDrawerDirective);
  dart.addTypeCaches(material_persistent_drawer.MaterialPersistentDrawerDirective);
  dart.setGetterSignature(material_persistent_drawer.MaterialPersistentDrawerDirective, () => ({
    __proto__: dart.getGetters(material_persistent_drawer.MaterialPersistentDrawerDirective.__proto__),
    hostMatDrawerCollapsed: dart.legacy(core.bool),
    hostMatDrawerExpanded: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_persistent_drawer.MaterialPersistentDrawerDirective, L0);
  dart.trackLibraries("packages/angular_components/app_layout/material_persistent_drawer", {
    "package:angular_components/app_layout/material_persistent_drawer.dart": material_persistent_drawer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_persistent_drawer.dart"],"names":[],"mappings":";;;;;;;;;;;AA2BqC,wBAAC;IAAO;;AAGT;IAAO;;;AANH;;EAAO","file":"material_persistent_drawer.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_persistent_drawer: material_persistent_drawer
  };
}));

//# sourceMappingURL=material_persistent_drawer.unsound.ddc.js.map
