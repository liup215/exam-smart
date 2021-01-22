define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/model/date/date'], (function load__packages__angular_components__material_datepicker__comparison(dart_sdk, packages__angular_components__material_datepicker__comparison_option, packages__angular_components__material_datepicker__range, packages__angular_components__model__date__date) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const comparison_option = packages__angular_components__material_datepicker__comparison_option.material_datepicker__comparison_option;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const date = packages__angular_components__model__date__date.model__date__date;
  var comparison = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var DatepickerComparisonL = () => (DatepickerComparisonL = dart.constFn(dart.legacy(comparison.DatepickerComparison)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/comparison.dart";
  var range$ = dart.privateName(comparison, "DatepickerComparison.range");
  var comparison$ = dart.privateName(comparison, "DatepickerComparison.comparison");
  comparison.DatepickerComparison = class DatepickerComparison extends core.Object {
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get comparison() {
      return this[comparison$];
    }
    set comparison(value) {
      super.comparison = value;
    }
    get isComparisonEnabled() {
      return this.comparison != null;
    }
    comparesTo(option) {
      let t1, t0;
      return this.comparison != null && option != null && this.range != null && dart.equals(this.comparison.unclamped(), (t0 = option, t1 = this.range.unclamped(), t0.computeComparisonRange(t1)));
    }
    _equals(o) {
      if (o == null) return false;
      return DatepickerComparisonL().is(o) && dart.test(range.rangeEqual(this.range, o.range)) && dart.test(range.rangeEqual(this.comparison, o.comparison));
    }
    get hashCode() {
      return dart.test(this.isComparisonEnabled) ? (dart.notNull(range.rangeHash(this.range)) ^ dart.notNull(range.rangeHash(this.comparison))) >>> 0 : range.rangeHash(this.range);
    }
    toString() {
      return "DatepickerComparison -- " + dart.str(this.range) + " / " + dart.str(this.comparison);
    }
  };
  (comparison.DatepickerComparison.new = function(range, option) {
    let t1, t0;
    comparison.DatepickerComparison.custom.call(this, range, (t0 = option, t1 = range, t0.computeComparisonRange(t1)));
  }).prototype = comparison.DatepickerComparison.prototype;
  (comparison.DatepickerComparison.noComparison = function(range) {
    comparison.DatepickerComparison.custom.call(this, range, null);
  }).prototype = comparison.DatepickerComparison.prototype;
  (comparison.DatepickerComparison.previousPeriod = function(range) {
    comparison.DatepickerComparison.new.call(this, range, comparison_option.ComparisonOption.previousPeriod);
  }).prototype = comparison.DatepickerComparison.prototype;
  (comparison.DatepickerComparison.samePeriodLastYear = function(range) {
    comparison.DatepickerComparison.new.call(this, range, comparison_option.ComparisonOption.samePeriodLastYear);
  }).prototype = comparison.DatepickerComparison.prototype;
  (comparison.DatepickerComparison.reclamp = function(orig, min, max) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3;
    comparison.DatepickerComparison.custom.call(this, (t0$0 = (t0$ = (t0 = orig, t0 == null ? null : t0.range), t0$ == null ? null : t0$.unclamped()), t0$0 == null ? null : t0$0.clamp({min: min, max: max})), (t0$3 = (t0$2 = (t0$1 = orig, t0$1 == null ? null : t0$1.comparison), t0$2 == null ? null : t0$2.unclamped()), t0$3 == null ? null : t0$3.clamp({min: min, max: max})));
  }).prototype = comparison.DatepickerComparison.prototype;
  (comparison.DatepickerComparison.custom = function(range, comparison) {
    this[range$] = range;
    this[comparison$] = comparison;
    ;
  }).prototype = comparison.DatepickerComparison.prototype;
  dart.addTypeTests(comparison.DatepickerComparison);
  dart.addTypeCaches(comparison.DatepickerComparison);
  comparison.DatepickerComparison[dart.implements] = () => [date.DateRangeComparison];
  dart.setMethodSignature(comparison.DatepickerComparison, () => ({
    __proto__: dart.getMethods(comparison.DatepickerComparison.__proto__),
    comparesTo: dart.fnType(dart.legacy(core.bool), [dart.legacy(comparison_option.ComparisonOption)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(comparison.DatepickerComparison, () => ({
    __proto__: dart.getGetters(comparison.DatepickerComparison.__proto__),
    isComparisonEnabled: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(comparison.DatepickerComparison, L0);
  dart.setFieldSignature(comparison.DatepickerComparison, () => ({
    __proto__: dart.getFields(comparison.DatepickerComparison.__proto__),
    range: dart.finalFieldType(dart.legacy(range.DatepickerDateRange)),
    comparison: dart.finalFieldType(dart.legacy(range.DatepickerDateRange))
  }));
  dart.defineExtensionMethods(comparison.DatepickerComparison, ['_equals', 'toString']);
  dart.defineExtensionAccessors(comparison.DatepickerComparison, ['hashCode']);
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison", {
    "package:angular_components/material_datepicker/comparison.dart": comparison
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAY4B;;;;;;IAGA;;;;;;;AAsBM,YAAA,AAAW,oBAAG;IAAI;eAGjB;;AAC7B,YAAA,AAEc,oBAFA,QACd,MAAM,IAAI,QACV,cAAS,QACc,YAAvB,AAAW,mCACP,MAAM,OAAwB,AAAM,wBAAP;IAAmB;;UAEvC;AACb,YAAE,AACyB,4BAD3B,CAAC,eACD,iBAAW,YAAO,AAAE,CAAD,sBACnB,iBAAW,iBAAY,AAAE,CAAD;IAAY;;AACpB,mDACG,cAAjB,gBAAU,4BAAS,gBAAU,2BAC7B,gBAAU;IAAM;;AACD,YAAA,AAA8C,uCAApB,cAAK,iBAAI;IAAW;;kDArC1B,OAAwB;;sDAC/C,KAAK,QAAE,MAAM,OAAwB,KAAK,EAAN;EAAQ;2DAER;sDACpC,KAAK,EAAE;EAAK;6DAE0B;mDAC7C,KAAK,EAAmB;EAAe;iEAEU;mDACjD,KAAK,EAAmB;EAAmB;sDAIJ,MAAW,KAAU;;2EACrD,IAAI,eAAJ,OAAM,yBAAN,OAAa,iCAAb,OAA0B,iBAAW,GAAG,OAAO,GAAG,6BAC1D,IAAI,iBAAJ,OAAM,iCAAN,OAAkB,kCAAlB,OAA+B,iBAAW,GAAG,OAAO,GAAG;EAAE;qDAElC,OAAY;IAAZ;IAAY;;EAAW","file":"comparison.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison: comparison
  };
}));

//# sourceMappingURL=comparison.unsound.ddc.js.map
