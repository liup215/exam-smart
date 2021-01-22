define(['dart_sdk'], (function load__packages__angular_components__material_select__activation_handler(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var activation_handler = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/activation_handler.dart";
  const _is_ActivationHandler_default = Symbol('_is_ActivationHandler_default');
  activation_handler.ActivationHandler$ = dart.generic(T => {
    class ActivationHandler extends core.Object {}
    (ActivationHandler.new = function() {
      ;
    }).prototype = ActivationHandler.prototype;
    dart.addTypeTests(ActivationHandler);
    ActivationHandler.prototype[_is_ActivationHandler_default] = true;
    dart.addTypeCaches(ActivationHandler);
    dart.setLibraryUri(ActivationHandler, L0);
    return ActivationHandler;
  });
  activation_handler.ActivationHandler = activation_handler.ActivationHandler$();
  dart.addTypeTests(activation_handler.ActivationHandler, _is_ActivationHandler_default);
  dart.trackLibraries("packages/angular_components/material_select/activation_handler", {
    "package:angular_components/material_select/activation_handler.dart": activation_handler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["activation_handler.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAWA","file":"activation_handler.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__activation_handler: activation_handler
  };
}));

//# sourceMappingURL=activation_handler.unsound.ddc.js.map
