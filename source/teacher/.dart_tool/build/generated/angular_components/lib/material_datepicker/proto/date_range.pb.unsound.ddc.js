define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/angular_components/material_datepicker/proto/date.pb'], (function load__packages__angular_components__material_datepicker__proto__date_range_pb(dart_sdk, packages__protobuf__protobuf, packages__angular_components__material_datepicker__proto__date$46pb) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const date$46pb = packages__angular_components__material_datepicker__proto__date$46pb.material_datepicker__proto__date$46pb;
  var date_range$46pb = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var DatepickerDateRange_RelativePresetL = () => (DatepickerDateRange_RelativePresetL = dart.constFn(dart.legacy(date_range$46pb.DatepickerDateRange_RelativePreset)))();
  var DatepickerDateRangeL = () => (DatepickerDateRangeL = dart.constFn(dart.legacy(date_range$46pb.DatepickerDateRange)))();
  var GeneratedMessageL = () => (GeneratedMessageL = dart.constFn(dart.legacy(protobuf.GeneratedMessage)))();
  var GeneratedMessageLTovoid = () => (GeneratedMessageLTovoid = dart.constFn(dart.fnType(dart.void, [GeneratedMessageL()])))();
  var PbListOfDatepickerDateRangeL = () => (PbListOfDatepickerDateRangeL = dart.constFn(protobuf.PbList$(DatepickerDateRangeL())))();
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date_range$46pb.DateRange)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToDateRangeL = () => (VoidToDateRangeL = dart.constFn(dart.fnType(DateRangeL(), [])))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var PbListOfDateRangeL = () => (PbListOfDateRangeL = dart.constFn(protobuf.PbList$(DateRangeL())))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date$46pb.Date)))();
  var VoidToDateL = () => (VoidToDateL = dart.constFn(dart.fnType(DateL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/proto/date_range.pb.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.daysAgo",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.weeksAgo",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.monthsAgo",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.yearsAgo",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.lastNDays",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.allTimeRange",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.broadcastMonthsAgo",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.lastNDaysToToday",
        index: 7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.quartersAgo",
        index: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.nextNDaysFromToday",
        index: 9
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: date_range$46pb.DatepickerDateRange_RelativePreset.prototype,
        [_name$]: "DatepickerDateRange_RelativePreset.notSet",
        index: 10
      });
    },
    get C11() {
      return C11 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], DatepickerDateRange_RelativePresetL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C13() {
      return C13 = dart.constMap(intL(), DatepickerDateRange_RelativePresetL(), [2, C0 || CT.C0, 3, C1 || CT.C1, 4, C2 || CT.C2, 5, C3 || CT.C3, 6, C4 || CT.C4, 7, C5 || CT.C5, 8, C6 || CT.C6, 9, C7 || CT.C7, 10, C8 || CT.C8, 12, C9 || CT.C9, 0, C10 || CT.C10]);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "angular_components.lib.material_datepicker.proto"
      });
    },
    get C15() {
      return C15 = dart.fn(date_range$46pb.DateRange.getDefault, VoidToDateRangeL());
    },
    get C16() {
      return C16 = dart.fn(date_range$46pb.DateRange.create, VoidToDateRangeL());
    },
    get C17() {
      return C17 = dart.fn(date$46pb.Date.getDefault, VoidToDateL());
    },
    get C18() {
      return C18 = dart.fn(date$46pb.Date.create, VoidToDateL());
    }
  }, false);
  var _name$ = dart.privateName(date_range$46pb, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  date_range$46pb.DatepickerDateRange_RelativePreset = class DatepickerDateRange_RelativePreset extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (date_range$46pb.DatepickerDateRange_RelativePreset.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = date_range$46pb.DatepickerDateRange_RelativePreset.prototype;
  dart.addTypeTests(date_range$46pb.DatepickerDateRange_RelativePreset);
  dart.addTypeCaches(date_range$46pb.DatepickerDateRange_RelativePreset);
  dart.setMethodSignature(date_range$46pb.DatepickerDateRange_RelativePreset, () => ({
    __proto__: dart.getMethods(date_range$46pb.DatepickerDateRange_RelativePreset.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(date_range$46pb.DatepickerDateRange_RelativePreset, L0);
  dart.setFieldSignature(date_range$46pb.DatepickerDateRange_RelativePreset, () => ({
    __proto__: dart.getFields(date_range$46pb.DatepickerDateRange_RelativePreset.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(date_range$46pb.DatepickerDateRange_RelativePreset, ['toString']);
  date_range$46pb.DatepickerDateRange_RelativePreset.daysAgo = C0 || CT.C0;
  date_range$46pb.DatepickerDateRange_RelativePreset.weeksAgo = C1 || CT.C1;
  date_range$46pb.DatepickerDateRange_RelativePreset.monthsAgo = C2 || CT.C2;
  date_range$46pb.DatepickerDateRange_RelativePreset.yearsAgo = C3 || CT.C3;
  date_range$46pb.DatepickerDateRange_RelativePreset.lastNDays = C4 || CT.C4;
  date_range$46pb.DatepickerDateRange_RelativePreset.allTimeRange = C5 || CT.C5;
  date_range$46pb.DatepickerDateRange_RelativePreset.broadcastMonthsAgo = C6 || CT.C6;
  date_range$46pb.DatepickerDateRange_RelativePreset.lastNDaysToToday = C7 || CT.C7;
  date_range$46pb.DatepickerDateRange_RelativePreset.quartersAgo = C8 || CT.C8;
  date_range$46pb.DatepickerDateRange_RelativePreset.nextNDaysFromToday = C9 || CT.C9;
  date_range$46pb.DatepickerDateRange_RelativePreset.notSet = C10 || CT.C10;
  date_range$46pb.DatepickerDateRange_RelativePreset.values = C11 || CT.C11;
  var C12;
  var C13;
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  var C14;
  var C15;
  var C16;
  date_range$46pb.DatepickerDateRange = class DatepickerDateRange extends protobuf.GeneratedMessage {
    clone() {
      let t0;
      t0 = new date_range$46pb.DatepickerDateRange.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return DatepickerDateRangeL().as(super.copyWith(dart.fn(message => updates(DatepickerDateRangeL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return date_range$46pb.DatepickerDateRange._i;
    }
    static create() {
      return new date_range$46pb.DatepickerDateRange.new();
    }
    createEmptyInstance() {
      return date_range$46pb.DatepickerDateRange.create();
    }
    static createRepeated() {
      return new (PbListOfDatepickerDateRangeL()).new();
    }
    static getDefault() {
      let t1, t0;
      t0 = date_range$46pb.DatepickerDateRange._defaultInstance;
      return t0 == null ? date_range$46pb.DatepickerDateRange._defaultInstance = (t1 = date_range$46pb.DatepickerDateRange.create(), (() => {
        t1.freeze();
        return t1;
      })()) : t0;
    }
    whichRelativePreset() {
      return date_range$46pb.DatepickerDateRange._DatepickerDateRange_RelativePresetByTag[$_get](this.$_whichOneof(0));
    }
    clearRelativePreset() {
      return this.clearField(this.$_whichOneof(0));
    }
    get dateRange() {
      return this.$_getN(DateRangeL(), 0);
    }
    set dateRange(v) {
      this.setField(1, v);
    }
    hasDateRange() {
      return this.$_has(0);
    }
    clearDateRange() {
      return this.clearField(1);
    }
    get daysAgo() {
      return this.$_get(intL(), 1, 0);
    }
    set daysAgo(v) {
      this.$_setSignedInt32(1, v);
    }
    hasDaysAgo() {
      return this.$_has(1);
    }
    clearDaysAgo() {
      return this.clearField(2);
    }
    get weeksAgo() {
      return this.$_get(intL(), 2, 0);
    }
    set weeksAgo(v) {
      this.$_setSignedInt32(2, v);
    }
    hasWeeksAgo() {
      return this.$_has(2);
    }
    clearWeeksAgo() {
      return this.clearField(3);
    }
    get monthsAgo() {
      return this.$_get(intL(), 3, 0);
    }
    set monthsAgo(v) {
      this.$_setSignedInt32(3, v);
    }
    hasMonthsAgo() {
      return this.$_has(3);
    }
    clearMonthsAgo() {
      return this.clearField(4);
    }
    get yearsAgo() {
      return this.$_get(intL(), 4, 0);
    }
    set yearsAgo(v) {
      this.$_setSignedInt32(4, v);
    }
    hasYearsAgo() {
      return this.$_has(4);
    }
    clearYearsAgo() {
      return this.clearField(5);
    }
    get lastNDays() {
      return this.$_get(intL(), 5, 0);
    }
    set lastNDays(v) {
      this.$_setSignedInt32(5, v);
    }
    hasLastNDays() {
      return this.$_has(5);
    }
    clearLastNDays() {
      return this.clearField(6);
    }
    get allTimeRange() {
      return this.$_get(boolL(), 6, false);
    }
    set allTimeRange(v) {
      this.$_setBool(6, v);
    }
    hasAllTimeRange() {
      return this.$_has(6);
    }
    clearAllTimeRange() {
      return this.clearField(7);
    }
    get broadcastMonthsAgo() {
      return this.$_get(intL(), 7, 0);
    }
    set broadcastMonthsAgo(v) {
      this.$_setSignedInt32(7, v);
    }
    hasBroadcastMonthsAgo() {
      return this.$_has(7);
    }
    clearBroadcastMonthsAgo() {
      return this.clearField(8);
    }
    get lastNDaysToToday() {
      return this.$_get(intL(), 8, 0);
    }
    set lastNDaysToToday(v) {
      this.$_setSignedInt32(8, v);
    }
    hasLastNDaysToToday() {
      return this.$_has(8);
    }
    clearLastNDaysToToday() {
      return this.clearField(9);
    }
    get quartersAgo() {
      return this.$_get(intL(), 9, 0);
    }
    set quartersAgo(v) {
      this.$_setSignedInt32(9, v);
    }
    hasQuartersAgo() {
      return this.$_has(9);
    }
    clearQuartersAgo() {
      return this.clearField(10);
    }
    get startWeekday() {
      return this.$_get(intL(), 10, 0);
    }
    set startWeekday(v) {
      this.$_setSignedInt32(10, v);
    }
    hasStartWeekday() {
      return this.$_has(10);
    }
    clearStartWeekday() {
      return this.clearField(11);
    }
    get nextNDaysFromToday() {
      return this.$_get(intL(), 11, 0);
    }
    set nextNDaysFromToday(v) {
      this.$_setSignedInt32(11, v);
    }
    hasNextNDaysFromToday() {
      return this.$_has(11);
    }
    clearNextNDaysFromToday() {
      return this.clearField(12);
    }
  };
  (date_range$46pb.DatepickerDateRange.new = function() {
    date_range$46pb.DatepickerDateRange.__proto__.new.call(this);
    ;
  }).prototype = date_range$46pb.DatepickerDateRange.prototype;
  (date_range$46pb.DatepickerDateRange.fromBuffer = function(i, r = C12 || CT.C12) {
    date_range$46pb.DatepickerDateRange.__proto__.fromBuffer.call(this, i, r);
    ;
  }).prototype = date_range$46pb.DatepickerDateRange.prototype;
  (date_range$46pb.DatepickerDateRange.fromJson = function(i, r = C12 || CT.C12) {
    date_range$46pb.DatepickerDateRange.__proto__.fromJson.call(this, i, r);
    ;
  }).prototype = date_range$46pb.DatepickerDateRange.prototype;
  dart.addTypeTests(date_range$46pb.DatepickerDateRange);
  dart.addTypeCaches(date_range$46pb.DatepickerDateRange);
  dart.setMethodSignature(date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getMethods(date_range$46pb.DatepickerDateRange.__proto__),
    clone: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    copyWith: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), [dart.legacy(dart.fnType(dart.void, [dart.legacy(date_range$46pb.DatepickerDateRange)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    whichRelativePreset: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange_RelativePreset), []),
    clearRelativePreset: dart.fnType(dart.void, []),
    hasDateRange: dart.fnType(dart.legacy(core.bool), []),
    clearDateRange: dart.fnType(dart.void, []),
    hasDaysAgo: dart.fnType(dart.legacy(core.bool), []),
    clearDaysAgo: dart.fnType(dart.void, []),
    hasWeeksAgo: dart.fnType(dart.legacy(core.bool), []),
    clearWeeksAgo: dart.fnType(dart.void, []),
    hasMonthsAgo: dart.fnType(dart.legacy(core.bool), []),
    clearMonthsAgo: dart.fnType(dart.void, []),
    hasYearsAgo: dart.fnType(dart.legacy(core.bool), []),
    clearYearsAgo: dart.fnType(dart.void, []),
    hasLastNDays: dart.fnType(dart.legacy(core.bool), []),
    clearLastNDays: dart.fnType(dart.void, []),
    hasAllTimeRange: dart.fnType(dart.legacy(core.bool), []),
    clearAllTimeRange: dart.fnType(dart.void, []),
    hasBroadcastMonthsAgo: dart.fnType(dart.legacy(core.bool), []),
    clearBroadcastMonthsAgo: dart.fnType(dart.void, []),
    hasLastNDaysToToday: dart.fnType(dart.legacy(core.bool), []),
    clearLastNDaysToToday: dart.fnType(dart.void, []),
    hasQuartersAgo: dart.fnType(dart.legacy(core.bool), []),
    clearQuartersAgo: dart.fnType(dart.void, []),
    hasStartWeekday: dart.fnType(dart.legacy(core.bool), []),
    clearStartWeekday: dart.fnType(dart.void, []),
    hasNextNDaysFromToday: dart.fnType(dart.legacy(core.bool), []),
    clearNextNDaysFromToday: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getGetters(date_range$46pb.DatepickerDateRange.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    dateRange: dart.legacy(date_range$46pb.DateRange),
    daysAgo: dart.legacy(core.int),
    weeksAgo: dart.legacy(core.int),
    monthsAgo: dart.legacy(core.int),
    yearsAgo: dart.legacy(core.int),
    lastNDays: dart.legacy(core.int),
    allTimeRange: dart.legacy(core.bool),
    broadcastMonthsAgo: dart.legacy(core.int),
    lastNDaysToToday: dart.legacy(core.int),
    quartersAgo: dart.legacy(core.int),
    startWeekday: dart.legacy(core.int),
    nextNDaysFromToday: dart.legacy(core.int)
  }));
  dart.setSetterSignature(date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getSetters(date_range$46pb.DatepickerDateRange.__proto__),
    dateRange: dart.legacy(date_range$46pb.DateRange),
    daysAgo: dart.legacy(core.int),
    weeksAgo: dart.legacy(core.int),
    monthsAgo: dart.legacy(core.int),
    yearsAgo: dart.legacy(core.int),
    lastNDays: dart.legacy(core.int),
    allTimeRange: dart.legacy(core.bool),
    broadcastMonthsAgo: dart.legacy(core.int),
    lastNDaysToToday: dart.legacy(core.int),
    quartersAgo: dart.legacy(core.int),
    startWeekday: dart.legacy(core.int),
    nextNDaysFromToday: dart.legacy(core.int)
  }));
  dart.setLibraryUri(date_range$46pb.DatepickerDateRange, L0);
  dart.defineLazy(date_range$46pb.DatepickerDateRange, {
    /*date_range$46pb.DatepickerDateRange._DatepickerDateRange_RelativePresetByTag*/get _DatepickerDateRange_RelativePresetByTag() {
      return C13 || CT.C13;
    },
    /*date_range$46pb.DatepickerDateRange._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("DatepickerDateRange", {package: C14 || CT.C14}), (() => {
        t0.a(DateRangeL(), 1, "dateRange", 2097152, C15 || CT.C15, C16 || CT.C16);
        t0.a(intL(), 2, "daysAgo", 2048);
        t0.a(intL(), 3, "weeksAgo", 2048);
        t0.a(intL(), 4, "monthsAgo", 2048);
        t0.a(intL(), 5, "yearsAgo", 2048);
        t0.a(intL(), 6, "lastNDays", 2048);
        t0.aOB(7, "allTimeRange");
        t0.a(intL(), 8, "broadcastMonthsAgo", 2048);
        t0.a(intL(), 9, "lastNDaysToToday", 2048);
        t0.a(intL(), 10, "quartersAgo", 2048);
        t0.a(intL(), 11, "startWeekday", 2048);
        t0.a(intL(), 12, "nextNDaysFromToday", 2048);
        t0.oo(0, JSArrayOfintL().of([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*date_range$46pb.DatepickerDateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C17;
  var C18;
  date_range$46pb.DateRange = class DateRange extends protobuf.GeneratedMessage {
    clone() {
      let t0;
      t0 = new date_range$46pb.DateRange.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return DateRangeL().as(super.copyWith(dart.fn(message => updates(DateRangeL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return date_range$46pb.DateRange._i;
    }
    static create() {
      return new date_range$46pb.DateRange.new();
    }
    createEmptyInstance() {
      return date_range$46pb.DateRange.create();
    }
    static createRepeated() {
      return new (PbListOfDateRangeL()).new();
    }
    static getDefault() {
      let t1, t0;
      t0 = date_range$46pb.DateRange._defaultInstance;
      return t0 == null ? date_range$46pb.DateRange._defaultInstance = (t1 = date_range$46pb.DateRange.create(), (() => {
        t1.freeze();
        return t1;
      })()) : t0;
    }
    get start() {
      return this.$_getN(DateL(), 0);
    }
    set start(v) {
      this.setField(1, v);
    }
    hasStart() {
      return this.$_has(0);
    }
    clearStart() {
      return this.clearField(1);
    }
    get end() {
      return this.$_getN(DateL(), 1);
    }
    set end(v) {
      this.setField(2, v);
    }
    hasEnd() {
      return this.$_has(1);
    }
    clearEnd() {
      return this.clearField(2);
    }
  };
  (date_range$46pb.DateRange.new = function() {
    date_range$46pb.DateRange.__proto__.new.call(this);
    ;
  }).prototype = date_range$46pb.DateRange.prototype;
  (date_range$46pb.DateRange.fromBuffer = function(i, r = C12 || CT.C12) {
    date_range$46pb.DateRange.__proto__.fromBuffer.call(this, i, r);
    ;
  }).prototype = date_range$46pb.DateRange.prototype;
  (date_range$46pb.DateRange.fromJson = function(i, r = C12 || CT.C12) {
    date_range$46pb.DateRange.__proto__.fromJson.call(this, i, r);
    ;
  }).prototype = date_range$46pb.DateRange.prototype;
  dart.addTypeTests(date_range$46pb.DateRange);
  dart.addTypeCaches(date_range$46pb.DateRange);
  dart.setMethodSignature(date_range$46pb.DateRange, () => ({
    __proto__: dart.getMethods(date_range$46pb.DateRange.__proto__),
    clone: dart.fnType(dart.legacy(date_range$46pb.DateRange), []),
    copyWith: dart.fnType(dart.legacy(date_range$46pb.DateRange), [dart.legacy(dart.fnType(dart.void, [dart.legacy(date_range$46pb.DateRange)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(date_range$46pb.DateRange), []),
    hasStart: dart.fnType(dart.legacy(core.bool), []),
    clearStart: dart.fnType(dart.void, []),
    hasEnd: dart.fnType(dart.legacy(core.bool), []),
    clearEnd: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(date_range$46pb.DateRange, () => ({
    __proto__: dart.getGetters(date_range$46pb.DateRange.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    start: dart.legacy(date$46pb.Date),
    end: dart.legacy(date$46pb.Date)
  }));
  dart.setSetterSignature(date_range$46pb.DateRange, () => ({
    __proto__: dart.getSetters(date_range$46pb.DateRange.__proto__),
    start: dart.legacy(date$46pb.Date),
    end: dart.legacy(date$46pb.Date)
  }));
  dart.setLibraryUri(date_range$46pb.DateRange, L0);
  dart.defineLazy(date_range$46pb.DateRange, {
    /*date_range$46pb.DateRange._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("DateRange", {package: C14 || CT.C14}), (() => {
        t0.a(DateL(), 1, "start", 2097152, C17 || CT.C17, C18 || CT.C18);
        t0.a(DateL(), 2, "end", 2097152, C17 || CT.C17, C18 || CT.C18);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*date_range$46pb.DateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date_range.pb", {
    "package:angular_components/material_datepicker/proto/date_range.pb.dart": date_range$46pb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range.pb.dart"],"names":[],"mappings":"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","file":"date_range.pb.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date_range$46pb: date_range$46pb
  };
}));

//# sourceMappingURL=date_range.pb.unsound.ddc.js.map
