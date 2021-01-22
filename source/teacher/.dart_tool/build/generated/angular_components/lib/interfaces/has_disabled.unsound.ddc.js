define(['dart_sdk'], (function load__packages__angular_components__interfaces__has_disabled(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var has_disabled = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/interfaces/has_disabled.dart";
  var disabled = dart.privateName(has_disabled, "HasDisabled.disabled");
  has_disabled.HasDisabled = class HasDisabled extends core.Object {
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
  };
  (has_disabled.HasDisabled.new = function() {
    this[disabled] = null;
    ;
  }).prototype = has_disabled.HasDisabled.prototype;
  dart.addTypeTests(has_disabled.HasDisabled);
  dart.addTypeCaches(has_disabled.HasDisabled);
  dart.setLibraryUri(has_disabled.HasDisabled, L0);
  dart.setFieldSignature(has_disabled.HasDisabled, () => ({
    __proto__: dart.getFields(has_disabled.HasDisabled.__proto__),
    disabled: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/interfaces/has_disabled", {
    "package:angular_components/interfaces/has_disabled.dart": has_disabled
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_disabled.dart"],"names":[],"mappings":";;;;;;;;;;IAMO;;;;;;;;;;EACP","file":"has_disabled.unsound.ddc.js"}');
  // Exports:
  return {
    interfaces__has_disabled: has_disabled
  };
}));

//# sourceMappingURL=has_disabled.unsound.ddc.js.map
