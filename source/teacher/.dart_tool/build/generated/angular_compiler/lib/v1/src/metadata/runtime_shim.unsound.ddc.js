define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__runtime_shim(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var runtime_shim = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_compiler/v1/src/metadata/runtime_shim.dart";
  runtime_shim.unsafeCast = function unsafeCast(T, any) {
    return dart.legacy(T).as(any);
  };
  dart.copyProperties(runtime_shim, {
    get _assertionsEnabled() {
      let enabled = false;
      if (!(enabled = true)) dart.assertFailed(null, L0, 15, 10, "enabled = true");
      return enabled;
    },
    get isDevMode() {
      return runtime_shim._assertionsEnabled;
    }
  });
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/runtime_shim", {
    "package:angular_compiler/v1/src/metadata/runtime_shim.dart": runtime_shim
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["runtime_shim.dart"],"names":[],"mappings":";;;;;;;;mDA0CwB;AAAQ,gCAAG;;;;AA7B7B,oBAAU;AACd,YAAO,UAAU;AACjB,YAAO,QAAO;IAChB;;AAUsB;IAAkB","file":"runtime_shim.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__runtime_shim: runtime_shim
  };
}));

//# sourceMappingURL=runtime_shim.unsound.ddc.js.map
