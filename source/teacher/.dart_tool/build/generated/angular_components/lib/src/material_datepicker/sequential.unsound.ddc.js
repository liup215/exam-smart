define(['dart_sdk'], (function load__packages__angular_components__src__material_datepicker__sequential(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var sequential = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/material_datepicker/sequential.dart";
  const _is_Sequential_default = Symbol('_is_Sequential_default');
  sequential.Sequential$ = dart.generic(T => {
    class Sequential extends core.Object {}
    (Sequential.new = function() {
      ;
    }).prototype = Sequential.prototype;
    dart.addTypeTests(Sequential);
    Sequential.prototype[_is_Sequential_default] = true;
    dart.addTypeCaches(Sequential);
    dart.setLibraryUri(Sequential, L0);
    return Sequential;
  });
  sequential.Sequential = sequential.Sequential$();
  dart.addTypeTests(sequential.Sequential, _is_Sequential_default);
  dart.trackLibraries("packages/angular_components/src/material_datepicker/sequential", {
    "package:angular_components/src/material_datepicker/sequential.dart": sequential
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sequential.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAuBA","file":"sequential.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__sequential: sequential
  };
}));

//# sourceMappingURL=sequential.unsound.ddc.js.map
