define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/di_tokens'], (function load__packages__angular_components__theme__module(dart_sdk, packages__angular_compiler__v1__src__metadata__di_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  var module = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    }
  }, false);
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  dart.defineLazy(module, {
    /*module.darkThemeToken*/get darkThemeToken() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/theme/module", {
    "package:angular_components/theme/module.dart": module
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAOM,qBAAc","file":"module.unsound.ddc.js"}');
  // Exports:
  return {
    theme__module: module
  };
}));

//# sourceMappingURL=module.unsound.ddc.js.map
