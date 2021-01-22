define(['dart_sdk'], (function load__packages__angular_components__material_list__material_list_size(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var material_list_size = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list_size.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["auto", "x-small", "small", "medium", "large", "x-large"], StringL());
    }
  }, false);
  var C0;
  material_list_size.MaterialListSize = class MaterialListSize extends core.Object {
    static get values() {
      return C0 || CT.C0;
    }
  };
  (material_list_size.MaterialListSize.new = function() {
    ;
  }).prototype = material_list_size.MaterialListSize.prototype;
  dart.addTypeTests(material_list_size.MaterialListSize);
  dart.addTypeCaches(material_list_size.MaterialListSize);
  dart.setLibraryUri(material_list_size.MaterialListSize, L0);
  dart.defineLazy(material_list_size.MaterialListSize, {
    /*material_list_size.MaterialListSize.auto*/get auto() {
      return "auto";
    },
    /*material_list_size.MaterialListSize.xSmall*/get xSmall() {
      return "x-small";
    },
    /*material_list_size.MaterialListSize.small*/get small() {
      return "small";
    },
    /*material_list_size.MaterialListSize.medium*/get medium() {
      return "medium";
    },
    /*material_list_size.MaterialListSize.large*/get large() {
      return "large";
    },
    /*material_list_size.MaterialListSize.xLarge*/get xLarge() {
      return "x-large";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_list/material_list_size", {
    "package:angular_components/material_list/material_list_size.dart": material_list_size
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAcM;IAA0D;;;;EAChE;;;;;MARsB,wCAAI;;;MACJ,0CAAM;;;MACN,yCAAK;;;MACL,0CAAM;;;MACN,yCAAK;;;MACL,0CAAM","file":"material_list_size.unsound.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_size: material_list_size
  };
}));

//# sourceMappingURL=material_list_size.unsound.ddc.js.map
