define(['dart_sdk'], (function load__packages__angular_components__model__ui__template_support(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var template_support = Object.create(dart.library);
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var numLAnddynamicTonumL = () => (numLAnddynamicTonumL = dart.constFn(dart.fnType(numL(), [numL(), dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(template_support, {
    /*template_support.indexIdentityFn*/get indexIdentityFn() {
      return dart.fn((index, _) => index, numLAnddynamicTonumL());
    }
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/template_support", {
    "package:angular_components/model/ui/template_support.dart": template_support
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["template_support.dart"],"names":[],"mappings":";;;;;;;;;;MAQgB,gCAAe;YAAG,UAAK,OAAe,MAAM,KAAK","file":"template_support.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__template_support: template_support
  };
}));

//# sourceMappingURL=template_support.unsound.ddc.js.map
