define(['dart_sdk', 'packages/angular_components/material_datepicker/range', 'packages/intl/intl'], (function load__packages__angular_components__material_datepicker__comparison_option(dart_sdk, packages__angular_components__material_datepicker__range, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const range$ = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const intl = packages__intl__intl.intl;
  var comparison_option = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var ComparisonOptionL = () => (ComparisonOptionL = dart.constFn(dart.legacy(comparison_option.ComparisonOption)))();
  var DatepickerDateRangeL = () => (DatepickerDateRangeL = dart.constFn(dart.legacy(range$.DatepickerDateRange)))();
  var DatepickerDateRangeLToDatepickerDateRangeL = () => (DatepickerDateRangeLToDatepickerDateRangeL = dart.constFn(dart.fnType(DatepickerDateRangeL(), [DatepickerDateRangeL()])))();
  var DatepickerDateRangeLToNull = () => (DatepickerDateRangeLToNull = dart.constFn(dart.fnType(core.Null, [DatepickerDateRangeL()])))();
  var JSArrayOfComparisonOptionL = () => (JSArrayOfComparisonOptionL = dart.constFn(_interceptors.JSArray$(ComparisonOptionL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/comparison_option.dart";
  var displayName$ = dart.privateName(comparison_option, "ComparisonOption.displayName");
  var computeComparisonRange$ = dart.privateName(comparison_option, "ComparisonOption.computeComparisonRange");
  comparison_option.ComparisonOption = class ComparisonOption extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get computeComparisonRange() {
      return this[computeComparisonRange$];
    }
    set computeComparisonRange(value) {
      super.computeComparisonRange = value;
    }
    _equals(o) {
      if (o == null) return false;
      return ComparisonOptionL().is(o) && this.displayName == o.displayName && dart.equals(this.computeComparisonRange, o.computeComparisonRange);
    }
    get hashCode() {
      return (dart.hashCode(this.displayName) ^ dart.notNull(dart.hashCode(this.computeComparisonRange))) >>> 0;
    }
    toString() {
      return this.displayName;
    }
  };
  (comparison_option.ComparisonOption.new = function(displayName, computeComparisonRange) {
    this[displayName$] = displayName;
    this[computeComparisonRange$] = computeComparisonRange;
    ;
  }).prototype = comparison_option.ComparisonOption.prototype;
  dart.addTypeTests(comparison_option.ComparisonOption);
  dart.addTypeCaches(comparison_option.ComparisonOption);
  dart.setMethodSignature(comparison_option.ComparisonOption, () => ({
    __proto__: dart.getMethods(comparison_option.ComparisonOption.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(comparison_option.ComparisonOption, () => ({
    __proto__: dart.getGetters(comparison_option.ComparisonOption.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(comparison_option.ComparisonOption, L0);
  dart.setFieldSignature(comparison_option.ComparisonOption, () => ({
    __proto__: dart.getFields(comparison_option.ComparisonOption.__proto__),
    displayName: dart.finalFieldType(dart.legacy(core.String)),
    computeComparisonRange: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(range$.DatepickerDateRange), [dart.legacy(range$.DatepickerDateRange)])))
  }));
  dart.defineExtensionMethods(comparison_option.ComparisonOption, ['_equals', 'toString']);
  dart.defineExtensionAccessors(comparison_option.ComparisonOption, ['hashCode']);
  dart.defineLazy(comparison_option.ComparisonOption, {
    /*comparison_option.ComparisonOption.previousPeriod*/get previousPeriod() {
      return new comparison_option.ComparisonOption.new(comparison_option.ComparisonOption._prevPeriodMsg, dart.fn(range => {
        let prev = range.prev;
        if (prev != null && !dart.test(prev.isPredefined)) {
          return range$.DatepickerDateRange.new(comparison_option.ComparisonOption._prevPeriodMsg, prev.start, prev.end);
        }
        return prev;
      }, DatepickerDateRangeLToDatepickerDateRangeL()));
    },
    /*comparison_option.ComparisonOption.samePeriodLastYear*/get samePeriodLastYear() {
      return new comparison_option.ComparisonOption.new(comparison_option.ComparisonOption._previousYearMsg, dart.fn(range => range$.DatepickerDateRange.new(comparison_option.ComparisonOption._previousYearMsg, range.start.add({years: -1}), range.end.add({years: -1})), DatepickerDateRangeLToDatepickerDateRangeL()));
    },
    /*comparison_option.ComparisonOption.custom*/get custom() {
      return new comparison_option.ComparisonOption.new(comparison_option.ComparisonOption._customMsg, dart.fn(range => null, DatepickerDateRangeLToNull()));
    },
    /*comparison_option.ComparisonOption._prevPeriodMsg*/get _prevPeriodMsg() {
      return intl.Intl.message("Previous period", {name: "_prevPeriodMsg", meaning: "An option name, the date range before the selected date " + "range", desc: "Setting to compare the selected date range with the previous " + "period. E.g. if the selected range were May, this would be April" + "."});
    },
    /*comparison_option.ComparisonOption._previousYearMsg*/get _previousYearMsg() {
      return intl.Intl.message("Previous year", {name: "_previousYearMsg", meaning: "An option name, the same date range in the last year", desc: "Setting to compare the selected date range with the same range " + "last year. E.g. if the selected range were May 2015, this would" + " be May 2014."});
    },
    /*comparison_option.ComparisonOption._customMsg*/get _customMsg() {
      return intl.Intl.message("Custom", {name: "_customMsg", meaning: "An option name, user could enter the date range they want", desc: "Setting to compare the selected date range with another " + "arbitrary user-selected date range."});
    }
  }, true);
  dart.defineLazy(comparison_option, {
    /*comparison_option.defaultComparisonOptions*/get defaultComparisonOptions() {
      return JSArrayOfComparisonOptionL().of([comparison_option.ComparisonOption.previousPeriod, comparison_option.ComparisonOption.samePeriodLastYear, comparison_option.ComparisonOption.custom]);
    },
    set defaultComparisonOptions(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/comparison_option", {
    "package:angular_components/material_datepicker/comparison_option.dart": comparison_option
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison_option.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAsBe;;;;;;IAGM;;;;;;;UAyCF;AACb,YAAE,AACgC,wBADlC,CAAC,KACI,AAAY,oBAAG,AAAE,CAAD,gBACO,YAAvB,6BAA0B,AAAE,CAAD;IAAuB;;AAEvC,YAAqB,EAAT,cAAZ,iCAA8C,cAAvB;IAA+B;;AAErD;IAAW;;qDA9CJ,aAAkB;IAAlB;IAAkB;;EAAuB;;;;;;;;;;;;;;;;;;;;;;;;MAEvC,iDAAc;YACxC,4CAAiB,mDAAgB,QAAqB;AACpD,mBAAO,AAAM,KAAD;AAChB,YAAI,IAAI,IAAI,mBAAS,AAAK,IAAD;AACvB,gBAAO,gCAAoB,mDAAgB,AAAK,IAAD,QAAQ,AAAK,IAAD;;AAE7D,cAAO,KAAI;;;MAGiB,qDAAkB;YAAG,4CAC/C,qDACA,QAAqB,SAAU,+BAAoB,qDAC/C,AAAM,AAAM,KAAP,mBAAkB,CAAC,KAAI,AAAM,AAAI,KAAL,iBAAgB,CAAC;;MAE5B,yCAAM;YAChC,4CAAiB,+CAAY,QAAqB,SAAU;;MAE5C,iDAAc;YAAQ,mBAAQ,0BACxC,2BACC,AAAE,6DACL,eACA,AAAE,kEACF,qEACA;;MACY,mDAAgB;YAAQ,mBAAQ,wBAC1C,6BACG,8DACL,AAAE,oEACF,oEACA;;MAEY,6CAAU;YAAQ,mBAAQ,iBACpC,uBACG,mEACL,AAAE,6DACF;;;;MAnDa,0CAAwB;YAAG,kCAC/B,mDACA,uDACA","file":"comparison_option.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__comparison_option: comparison_option
  };
}));

//# sourceMappingURL=comparison_option.unsound.ddc.js.map
