define(['dart_sdk'], (function load__packages__angular_components__material_datepicker__config(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var config = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/config.dart";
  var movingStartMaintainsLength$ = dart.privateName(config, "DatepickerConfig.movingStartMaintainsLength");
  config.DatepickerConfig = class DatepickerConfig extends core.Object {
    get movingStartMaintainsLength() {
      return this[movingStartMaintainsLength$];
    }
    set movingStartMaintainsLength(value) {
      super.movingStartMaintainsLength = value;
    }
  };
  (config.DatepickerConfig.new = function(opts) {
    let movingStartMaintainsLength = opts && 'movingStartMaintainsLength' in opts ? opts.movingStartMaintainsLength : true;
    this[movingStartMaintainsLength$] = movingStartMaintainsLength;
    ;
  }).prototype = config.DatepickerConfig.prototype;
  dart.addTypeTests(config.DatepickerConfig);
  dart.addTypeCaches(config.DatepickerConfig);
  dart.setLibraryUri(config.DatepickerConfig, L0);
  dart.setFieldSignature(config.DatepickerConfig, () => ({
    __proto__: dart.getFields(config.DatepickerConfig.__proto__),
    movingStartMaintainsLength: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/config", {
    "package:angular_components/material_datepicker/config.dart": config
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["config.dart"],"names":[],"mappings":";;;;;;;;;;IAUa;;;;;;;;QAEY;;;EAAmC","file":"config.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__config: config
  };
}));

//# sourceMappingURL=config.unsound.ddc.js.map
