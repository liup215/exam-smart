define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_datepicker/comparison'], (function load__packages__angular_components__material_datepicker__model(dart_sdk, packages__angular_components__model__observable__observable, packages__angular_components__material_datepicker__comparison) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const comparison = packages__angular_components__material_datepicker__comparison.material_datepicker__comparison;
  var model = Object.create(dart.library);
  var $toString = dartx.toString;
  var DateRangePickerConfigurationL = () => (DateRangePickerConfigurationL = dart.constFn(dart.legacy(model.DateRangePickerConfiguration)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/model.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: model.DateRangePickerConfiguration.prototype,
        [_name$]: "DateRangePickerConfiguration.basic",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: model.DateRangePickerConfiguration.prototype,
        [_name$]: "DateRangePickerConfiguration.predefinedRangesOnly",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: model.DateRangePickerConfiguration.prototype,
        [_name$]: "DateRangePickerConfiguration.fullyLoaded",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], DateRangePickerConfigurationL());
    }
  }, false);
  model.DatepickerModel = class DatepickerModel extends observable.ObservableReference$(dart.legacy(comparison.DatepickerComparison)) {};
  (model.DatepickerModel.new = function(value = null) {
    model.DatepickerModel.__proto__.new.call(this, value);
    ;
  }).prototype = model.DatepickerModel.prototype;
  dart.addTypeTests(model.DatepickerModel);
  dart.addTypeCaches(model.DatepickerModel);
  dart.setLibraryUri(model.DatepickerModel, L0);
  var _name$ = dart.privateName(model, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  model.DateRangePickerConfiguration = class DateRangePickerConfiguration extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (model.DateRangePickerConfiguration.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = model.DateRangePickerConfiguration.prototype;
  dart.addTypeTests(model.DateRangePickerConfiguration);
  dart.addTypeCaches(model.DateRangePickerConfiguration);
  dart.setMethodSignature(model.DateRangePickerConfiguration, () => ({
    __proto__: dart.getMethods(model.DateRangePickerConfiguration.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(model.DateRangePickerConfiguration, L0);
  dart.setFieldSignature(model.DateRangePickerConfiguration, () => ({
    __proto__: dart.getFields(model.DateRangePickerConfiguration.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(model.DateRangePickerConfiguration, ['toString']);
  model.DateRangePickerConfiguration.basic = C0 || CT.C0;
  model.DateRangePickerConfiguration.predefinedRangesOnly = C1 || CT.C1;
  model.DateRangePickerConfiguration.fullyLoaded = C2 || CT.C2;
  model.DateRangePickerConfiguration.values = C3 || CT.C3;
  dart.trackLibraries("packages/angular_components/material_datepicker/model", {
    "package:angular_components/material_datepicker/model.dart": model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wCAiBwC;AAAU,mDAAM,KAAK;;EAAC;;;;;;;;;;;;IAgB9D;;4DAZK;;;;EAYL","file":"model.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__model: model
  };
}));

//# sourceMappingURL=model.unsound.ddc.js.map
