define(['dart_sdk', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/material_list/material_list_size', 'packages/angular_components/model/ui/accepts_width'], (function load__packages__angular_components__material_list__material_list(dart_sdk, packages__angular_components__utils__angular__properties__properties, packages__angular_components__material_list__material_list_size, packages__angular_components__model__ui__accepts_width) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const material_list_size = packages__angular_components__material_list__material_list_size.material_list__material_list_size;
  const accepts_width = packages__angular_components__model__ui__accepts_width.model__ui__accepts_width;
  var material_list = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list.dart";
  var size = dart.privateName(material_list, "MaterialListComponent.size");
  var role = dart.privateName(material_list, "MaterialListComponent.role");
  material_list.MaterialListComponent = class MaterialListComponent extends core.Object {
    get size() {
      return this[size];
    }
    set size(value) {
      this[size] = value;
    }
    get role() {
      return this[role];
    }
    set role(value) {
      this[role] = value;
    }
    set width(val) {
      val = properties.getInt(val);
      if (dart.dtest(dart.dsend(val, '>=', [0])) && dart.dtest(dart.dsend(val, '<', [material_list_size.MaterialListSize.values[$length]]))) {
        this.size = material_list_size.MaterialListSize.values[$_get](core.int.as(val));
      }
    }
  };
  (material_list.MaterialListComponent.new = function() {
    this[size] = "auto";
    this[role] = "list";
    ;
  }).prototype = material_list.MaterialListComponent.prototype;
  dart.addTypeTests(material_list.MaterialListComponent);
  dart.addTypeCaches(material_list.MaterialListComponent);
  material_list.MaterialListComponent[dart.implements] = () => [accepts_width.AcceptsWidth];
  dart.setSetterSignature(material_list.MaterialListComponent, () => ({
    __proto__: dart.getSetters(material_list.MaterialListComponent.__proto__),
    width: dart.dynamic
  }));
  dart.setLibraryUri(material_list.MaterialListComponent, L0);
  dart.setFieldSignature(material_list.MaterialListComponent, () => ({
    __proto__: dart.getFields(material_list.MaterialListComponent.__proto__),
    size: dart.fieldType(dart.legacy(core.String)),
    role: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/material_list/material_list", {
    "package:angular_components/material_list/material_list.dart": material_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IA4CS;;;;;;IAgBA;;;;;;cAZG;AACS,MAAjB,MAAM,kBAAO,GAAG;AAChB,qBAAQ,WAAJ,GAAG,SAAI,mBAAS,WAAJ,GAAG,QAAoB,AAAO;AACT,QAAnC,YAAwB,AAAM,8DAAC,GAAG;;IAEtC;;;IATO;IAgBA,aAAO;;EAChB","file":"material_list.unsound.ddc.js"}');
  // Exports:
  return {
    material_list__material_list: material_list
  };
}));

//# sourceMappingURL=material_list.unsound.ddc.js.map
