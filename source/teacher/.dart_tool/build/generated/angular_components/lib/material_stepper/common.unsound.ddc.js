define(['dart_sdk'], (function load__packages__angular_components__material_stepper__common(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var common = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["horizontal", "vertical"], StringL());
    },
    get C1() {
      return C1 = dart.constList(["default", "mini"], StringL());
    },
    get C2() {
      return C2 = dart.constList(["all", "backwards", "none"], StringL());
    }
  }, false);
  var C0;
  var C1;
  var C2;
  dart.defineLazy(common, {
    /*common.horizontal*/get horizontal() {
      return "horizontal";
    },
    /*common.vertical*/get vertical() {
      return "vertical";
    },
    /*common.sizeDefault*/get sizeDefault() {
      return "default";
    },
    /*common.sizeMini*/get sizeMini() {
      return "mini";
    },
    /*common.all*/get all() {
      return "all";
    },
    /*common.backwards*/get backwards() {
      return "backwards";
    },
    /*common.none*/get none() {
      return "none";
    },
    /*common.orientations*/get orientations() {
      return C0 || CT.C0;
    },
    /*common.sizes*/get sizes() {
      return C1 || CT.C1;
    },
    /*common.jumps*/get jumps() {
      return C2 || CT.C2;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_stepper/common", {
    "package:angular_components/material_stepper/common.dart": common
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["common.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;MAIM,iBAAU;;;MACV,eAAQ;;;MACR,kBAAW;;;MACX,eAAQ;;;MACR,UAAG;;;MACH,gBAAS;;;MACT,WAAI;;;MAEJ,mBAAY;;;MAEZ,YAAK;;;MAEL,YAAK","file":"common.unsound.ddc.js"}');
  // Exports:
  return {
    material_stepper__common: common
  };
}));

//# sourceMappingURL=common.unsound.ddc.js.map
