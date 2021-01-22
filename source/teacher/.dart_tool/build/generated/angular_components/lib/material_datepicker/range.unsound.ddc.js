define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/proto/date_range.pb', 'packages/quiver/src/time/clock', 'packages/intl/intl', 'packages/angular_components/material_datepicker/proto/date.pb'], (function load__packages__angular_components__material_datepicker__range(dart_sdk, packages__angular_components__model__date__date, packages__angular_components__material_datepicker__proto__date_range$46pb, packages__quiver__src__time__clock, packages__intl__intl, packages__angular_components__material_datepicker__proto__date$46pb) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date$ = packages__angular_components__model__date__date.model__date__date;
  const date_range$46pb = packages__angular_components__material_datepicker__proto__date_range$46pb.material_datepicker__proto__date_range$46pb;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const intl = packages__intl__intl.intl;
  const date$46pb = packages__angular_components__material_datepicker__proto__date$46pb.material_datepicker__proto__date$46pb;
  var range$ = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var DatepickerDateRangeL = () => (DatepickerDateRangeL = dart.constFn(dart.legacy(range$.DatepickerDateRange)))();
  var DatepickerDateRangeLToDatepickerDateRangeL = () => (DatepickerDateRangeLToDatepickerDateRangeL = dart.constFn(dart.fnType(DatepickerDateRangeL(), [DatepickerDateRangeL()])))();
  var _ClampedDateRangeL = () => (_ClampedDateRangeL = dart.constFn(dart.legacy(range$._ClampedDateRange)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToStringL = () => (intLToStringL = dart.constFn(dart.fnType(StringL(), [intL()])))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var VoidToDatepickerDateRangeL = () => (VoidToDatepickerDateRangeL = dart.constFn(dart.fnType(DatepickerDateRangeL(), [])))();
  var JSArrayOfDatepickerDateRangeL = () => (JSArrayOfDatepickerDateRangeL = dart.constFn(_interceptors.JSArray$(DatepickerDateRangeL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/range.dart";
  var L1 = "org-dartlang-app:///packages/angular_components/material_datepicker/range.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(range$._genericNext, DatepickerDateRangeLToDatepickerDateRangeL());
    },
    get C1() {
      return C1 = dart.fn(range$._genericPrev, DatepickerDateRangeLToDatepickerDateRangeL());
    },
    get C2() {
      return C2 = dart.fn(range$.SingleDayRange._defaultTitle, intLToStringL());
    },
    get C3() {
      return C3 = dart.constMap(StringL(), ObjectL(), ["daysAgo", 2]);
    },
    get C4() {
      return C4 = dart.constMap(StringL(), ObjectL(), ["daysFromNow", 2]);
    },
    get C5() {
      return C5 = dart.constMap(StringL(), ObjectL(), ["lengthInDays", 7]);
    },
    get C6() {
      return C6 = dart.fn(range$.WeekRange._defaultTitle, intLToStringL());
    },
    get C7() {
      return C7 = dart.constMap(StringL(), ObjectL(), ["weeksAgo", 2]);
    },
    get C8() {
      return C8 = dart.constMap(StringL(), ObjectL(), ["weeksFromNow", 2]);
    },
    get C9() {
      return C9 = dart.fn(range$.MonthRange._defaultTitle, intLToStringL());
    },
    get C10() {
      return C10 = dart.constMap(StringL(), ObjectL(), ["monthsAgo", 2]);
    },
    get C11() {
      return C11 = dart.constMap(StringL(), ObjectL(), ["monthsFromNow", 2]);
    },
    get C12() {
      return C12 = dart.fn(range$.BroadcastMonthRange._defaultTitle, intLToStringL());
    },
    get C13() {
      return C13 = dart.constMap(StringL(), ObjectL(), ["broadcastMonthsAgo", 2]);
    },
    get C14() {
      return C14 = dart.constMap(StringL(), ObjectL(), ["broadcastMonthsFromNow", 2]);
    },
    get C15() {
      return C15 = dart.fn(range$.YearRange._defaultTitle, intLToStringL());
    },
    get C16() {
      return C16 = dart.constMap(StringL(), ObjectL(), ["yearsAgo", 2]);
    },
    get C17() {
      return C17 = dart.constMap(StringL(), ObjectL(), ["yearsFromNow", 2]);
    },
    get C18() {
      return C18 = dart.fn(range$.QuarterRange._defaultTitle, intLToStringL());
    },
    get C19() {
      return C19 = dart.constMap(StringL(), ObjectL(), ["quartersAgo", 2]);
    },
    get C20() {
      return C20 = dart.constMap(StringL(), ObjectL(), ["quartersFromNow", 2]);
    }
  }, false);
  var C0;
  var C1;
  range$.DatepickerDateRange = class DatepickerDateRange extends core.Object {
    static new(title, start, end, opts) {
      let next = opts && 'next' in opts ? opts.next : C0 || CT.C0;
      let prev = opts && 'prev' in opts ? opts.prev : C1 || CT.C1;
      let isPredefined = opts && 'isPredefined' in opts ? opts.isPredefined : false;
      let isAllTime = opts && 'isAllTime' in opts ? opts.isAllTime : false;
      return new range$._BasicDateRange.new(title, start, end, next, prev, isPredefined, isAllTime);
    }
    static custom(start, end) {
      return range$.DatepickerDateRange.new(range$._customDateRangeMsg, start, end);
    }
    static fromProtoBuf(clock, pb) {
      if (dart.test(pb.hasAllTimeRange())) {
        return range$.allTime;
      } else if (dart.test(pb.hasDaysAgo())) {
        return new range$.SingleDayRange.daysAgo(clock, pb.daysAgo);
      } else if (dart.test(pb.hasLastNDays())) {
        return new range$.LastNDaysRange.beforeToday(clock, pb.lastNDays);
      } else if (dart.test(pb.hasLastNDaysToToday())) {
        return new range$.LastNDaysToTodayRange.beforeToday(clock, pb.lastNDaysToToday);
      } else if (dart.test(pb.hasWeeksAgo())) {
        if (dart.test(pb.hasStartWeekday())) {
          return new range$.WeekRange.weeksAgo(clock, pb.weeksAgo, {startWeekday: pb.startWeekday});
        } else {
          return new range$.WeekRange.weeksAgo(clock, pb.weeksAgo);
        }
      } else if (dart.test(pb.hasMonthsAgo())) {
        return new range$.MonthRange.monthsAgo(clock, pb.monthsAgo);
      } else if (dart.test(pb.hasBroadcastMonthsAgo())) {
        return range$.BroadcastMonthRange.monthsAgo(clock, pb.broadcastMonthsAgo);
      } else if (dart.test(pb.hasYearsAgo())) {
        return new range$.YearRange.yearsAgo(clock, pb.yearsAgo);
      }
      return range$.DatepickerDateRange.custom(range$._convertToDate(pb.dateRange.start), range$._convertToDate(pb.dateRange.end));
    }
  };
  (range$.DatepickerDateRange[dart.mixinNew] = function() {
  }).prototype = range$.DatepickerDateRange.prototype;
  dart.addTypeTests(range$.DatepickerDateRange);
  dart.addTypeCaches(range$.DatepickerDateRange);
  range$.DatepickerDateRange[dart.implements] = () => [date$.DateRange];
  dart.setLibraryUri(range$.DatepickerDateRange, L0);
  var _delegate$ = dart.privateName(range$, "_delegate");
  var _min = dart.privateName(range$, "_min");
  var _max = dart.privateName(range$, "_max");
  range$._ClampedDateRange = class _ClampedDateRange extends core.Object {
    get title() {
      return this[_delegate$].title;
    }
    get isPredefined() {
      return this[_delegate$].isPredefined;
    }
    get isAllTime() {
      return this[_delegate$].isAllTime;
    }
    get start() {
      let date = this[_delegate$].start;
      return date == null || this[_min] != null && dart.test(this[_min]['>'](date)) ? this[_min] : date;
    }
    get end() {
      let date = this[_delegate$].end;
      return date == null || this[_max] != null && dart.test(this[_max]['<'](date)) ? this[_max] : date;
    }
    get next() {
      let t0;
      if (this[_max] != null && this[_delegate$].end != null && dart.test(this[_delegate$].end['>'](this[_max]))) {
        return null;
      }
      t0 = this[_delegate$].next;
      return t0 == null ? null : t0.clamp({min: this[_min], max: this[_max]});
    }
    get prev() {
      let t0;
      if (this[_min] != null && this[_delegate$].start != null && dart.test(this[_delegate$].start['<'](this[_min]))) {
        return null;
      }
      t0 = this[_delegate$].prev;
      return t0 == null ? null : t0.clamp({min: this[_min], max: this[_max]});
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this[_delegate$];
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      t0 = this[_delegate$].toProtoBuf();
      return (() => {
        t0.dateRange = range$._makeDateRangeProto(this.start, this.end);
        return t0;
      })();
    }
    _equals(o) {
      if (o == null) return false;
      return dart.test(range$.rangeEqual(this, o)) && _ClampedDateRangeL().is(o) && dart.equals(this[_min], o[_min]) && dart.equals(this[_max], o[_max]);
    }
    get hashCode() {
      return (dart.notNull(range$.rangeHash(this)) ^ dart.notNull(dart.hashCode(this[_min])) ^ dart.notNull(dart.hashCode(this[_max]))) >>> 0;
    }
    toString() {
      return dart.str(range$._rangeString(this)) + " (clamped " + dart.str(this[_min]) + " - " + dart.str(this[_max]) + ")";
    }
  };
  (range$._ClampedDateRange.new = function(_delegate, opts) {
    let min = opts && 'min' in opts ? opts.min : null;
    let max = opts && 'max' in opts ? opts.max : null;
    this[_delegate$] = _delegate;
    this[_min] = min;
    this[_max] = max;
    ;
  }).prototype = range$._ClampedDateRange.prototype;
  dart.addTypeTests(range$._ClampedDateRange);
  dart.addTypeCaches(range$._ClampedDateRange);
  range$._ClampedDateRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$._ClampedDateRange, () => ({
    __proto__: dart.getMethods(range$._ClampedDateRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$._ClampedDateRange, () => ({
    __proto__: dart.getGetters(range$._ClampedDateRange.__proto__),
    title: dart.legacy(core.String),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$._ClampedDateRange, L0);
  dart.setFieldSignature(range$._ClampedDateRange, () => ({
    __proto__: dart.getFields(range$._ClampedDateRange.__proto__),
    [_min]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_max]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_delegate$]: dart.finalFieldType(dart.legacy(range$.DatepickerDateRange))
  }));
  dart.defineExtensionMethods(range$._ClampedDateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$._ClampedDateRange, ['hashCode']);
  var _next$ = dart.privateName(range$, "_next");
  var _prev$ = dart.privateName(range$, "_prev");
  range$._BasicDateRange = class _BasicDateRange extends core.Object {
    get next() {
      return this[_next$](this);
    }
    get prev() {
      return this[_prev$](this);
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      return range$._makeProtoBuf(this);
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
  };
  (range$._BasicDateRange.new = function(title, start, end, _next, _prev, isPredefined, isAllTime) {
    this.title = title;
    this.start = start;
    this.end = end;
    this[_next$] = _next;
    this[_prev$] = _prev;
    this.isPredefined = isPredefined;
    this.isAllTime = isAllTime;
    ;
  }).prototype = range$._BasicDateRange.prototype;
  dart.addTypeTests(range$._BasicDateRange);
  dart.addTypeCaches(range$._BasicDateRange);
  range$._BasicDateRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$._BasicDateRange, () => ({
    __proto__: dart.getMethods(range$._BasicDateRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$._BasicDateRange, () => ({
    __proto__: dart.getGetters(range$._BasicDateRange.__proto__),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$._BasicDateRange, L0);
  dart.setFieldSignature(range$._BasicDateRange, () => ({
    __proto__: dart.getFields(range$._BasicDateRange.__proto__),
    title: dart.finalFieldType(dart.legacy(core.String)),
    start: dart.finalFieldType(dart.legacy(date$.Date)),
    end: dart.finalFieldType(dart.legacy(date$.Date)),
    isPredefined: dart.finalFieldType(dart.legacy(core.bool)),
    isAllTime: dart.finalFieldType(dart.legacy(core.bool)),
    [_next$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(range$.DatepickerDateRange), [dart.legacy(range$.DatepickerDateRange)]))),
    [_prev$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(range$.DatepickerDateRange), [dart.legacy(range$.DatepickerDateRange)])))
  }));
  dart.defineExtensionMethods(range$._BasicDateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$._BasicDateRange, ['hashCode']);
  var C2;
  var _date$ = dart.privateName(range$, "_date");
  var _ago$ = dart.privateName(range$, "_ago");
  var _titleFunction$ = dart.privateName(range$, "_titleFunction");
  var C3;
  var C4;
  range$.SingleDayRange = class SingleDayRange extends core.Object {
    get title() {
      let t0;
      t0 = this[_ago$];
      return this[_titleFunction$](t0);
    }
    get start() {
      return this[_date$];
    }
    get end() {
      return this[_date$];
    }
    get next() {
      return new range$.SingleDayRange.new(this[_date$].add({days: 1}), dart.notNull(this[_ago$]) - 1, this[_titleFunction$]);
    }
    get prev() {
      return new range$.SingleDayRange.new(this[_date$].add({days: -1}), dart.notNull(this[_ago$]) + 1, this[_titleFunction$]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago$];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.daysAgo = this[_ago$];
        return t0;
      })();
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
    static _defaultTitle(daysAgo) {
      return dart.notNull(daysAgo) > 0 ? range$.SingleDayRange._addDaysMsg(daysAgo) : range$.SingleDayRange._daysFromNowMsg(-dart.notNull(daysAgo));
    }
    static _addDaysMsg(daysAgo) {
      return intl.Intl.plural(daysAgo, {zero: "Today", one: "Yesterday", other: dart.str(daysAgo) + " days ago", name: "_addDaysMsg", args: JSArrayOfObjectL().of([daysAgo]), desc: "A date range containing only one day a certain number " + "of days in the past.", examples: C3 || CT.C3});
    }
    static _daysFromNowMsg(daysFromNow) {
      return intl.Intl.plural(daysFromNow, {zero: "Today", one: "Tomorrow", other: dart.str(daysFromNow) + " days from now", name: "_daysFromNowMsg", args: JSArrayOfObjectL().of([daysFromNow]), desc: "A date range containing only one day a certain number " + "of days in the future.", examples: C4 || CT.C4});
    }
  };
  (range$.SingleDayRange.new = function(_date, _ago, _titleFunction = C2 || CT.C2) {
    this[_date$] = _date;
    this[_ago$] = _ago;
    this[_titleFunction$] = _titleFunction;
    ;
  }).prototype = range$.SingleDayRange.prototype;
  (range$.SingleDayRange.daysAgo = function(clock, ago, titleFunction = C2 || CT.C2) {
    range$.SingleDayRange.new.call(this, date$.Date.today(ClockL().as(clock)).add({days: intL().as(dart.dsend(ago, '_negate', []))}), intL().as(ago), titleFunction);
  }).prototype = range$.SingleDayRange.prototype;
  dart.addTypeTests(range$.SingleDayRange);
  dart.addTypeCaches(range$.SingleDayRange);
  range$.SingleDayRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.SingleDayRange, () => ({
    __proto__: dart.getMethods(range$.SingleDayRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.SingleDayRange, () => ({
    __proto__: dart.getGetters(range$.SingleDayRange.__proto__),
    title: dart.legacy(core.String),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    ago: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.SingleDayRange, L0);
  dart.setFieldSignature(range$.SingleDayRange, () => ({
    __proto__: dart.getFields(range$.SingleDayRange.__proto__),
    [_date$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_ago$]: dart.finalFieldType(dart.legacy(core.int)),
    [_titleFunction$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])))
  }));
  dart.defineExtensionMethods(range$.SingleDayRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.SingleDayRange, ['hashCode']);
  var _start$ = dart.privateName(range$, "_start");
  var _lengthInDays$ = dart.privateName(range$, "_lengthInDays");
  var title$ = dart.privateName(range$, "MultipleDaysRange.title");
  range$.MultipleDaysRange = class MultipleDaysRange extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get start() {
      return this[_start$];
    }
    get end() {
      return this[_start$].add({days: dart.notNull(this[_lengthInDays$]) - 1});
    }
    get next() {
      return range$._genericNext(this);
    }
    get prev() {
      return range$._genericPrev(this);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get lengthInDays() {
      return this[_lengthInDays$];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
  };
  (range$.MultipleDaysRange.new = function(_start, _lengthInDays, title) {
    this[_start$] = _start;
    this[_lengthInDays$] = _lengthInDays;
    this[title$] = title;
    ;
  }).prototype = range$.MultipleDaysRange.prototype;
  dart.addTypeTests(range$.MultipleDaysRange);
  dart.addTypeCaches(range$.MultipleDaysRange);
  range$.MultipleDaysRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.MultipleDaysRange, () => ({
    __proto__: dart.getMethods(range$.MultipleDaysRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.MultipleDaysRange, () => ({
    __proto__: dart.getGetters(range$.MultipleDaysRange.__proto__),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    lengthInDays: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.MultipleDaysRange, L0);
  dart.setFieldSignature(range$.MultipleDaysRange, () => ({
    __proto__: dart.getFields(range$.MultipleDaysRange.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_lengthInDays$]: dart.finalFieldType(dart.legacy(core.int)),
    title: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(range$.MultipleDaysRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.MultipleDaysRange, ['hashCode']);
  var C5;
  range$.LastNDaysRange = class LastNDaysRange extends range$.MultipleDaysRange {
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.lastNDays = this[_lengthInDays$];
        return t0;
      })();
    }
    static _lastNDaysMsg(lengthInDays) {
      return intl.Intl.plural(lengthInDays, {one: "Yesterday", other: "Last " + dart.str(lengthInDays) + " days", name: "_lastNDaysMsg", args: JSArrayOfObjectL().of([lengthInDays]), desc: "A date range containing the last \"lengthInDays\" days, " + "not including today.", examples: C5 || CT.C5});
    }
  };
  (range$.LastNDaysRange.new = function(start, lengthInDays, title = null) {
    let t0;
    range$.LastNDaysRange.__proto__.new.call(this, start, lengthInDays, (t0 = title, t0 == null ? range$.LastNDaysRange._lastNDaysMsg(lengthInDays) : t0));
    ;
  }).prototype = range$.LastNDaysRange.prototype;
  (range$.LastNDaysRange.beforeToday = function(clock, lengthInDays, title = null) {
    let t0;
    range$.LastNDaysRange.__proto__.new.call(this, date$.Date.today(ClockL().as(clock)).add({days: intL().as(dart.dsend(lengthInDays, '_negate', []))}), intL().as(lengthInDays), (t0 = title, t0 == null ? range$.LastNDaysRange._lastNDaysMsg(intL().as(lengthInDays)) : t0));
    ;
  }).prototype = range$.LastNDaysRange.prototype;
  dart.addTypeTests(range$.LastNDaysRange);
  dart.addTypeCaches(range$.LastNDaysRange);
  dart.setMethodSignature(range$.LastNDaysRange, () => ({
    __proto__: dart.getMethods(range$.LastNDaysRange.__proto__),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), [])
  }));
  dart.setLibraryUri(range$.LastNDaysRange, L0);
  range$.LastNDaysToTodayRange = class LastNDaysToTodayRange extends range$.MultipleDaysRange {
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.lastNDaysToToday = this[_lengthInDays$];
        return t0;
      })();
    }
    static _lastNDaysToTodayMsg(lengthInDays) {
      return intl.Intl.plural(lengthInDays, {one: "Today", other: dart.str(lengthInDays) + " days to today", name: "_lastNDaysToTodayMsg", args: JSArrayOfObjectL().of([lengthInDays]), desc: "A date range containing the last \"lengthInDays\" days, " + "ending today.", examples: C5 || CT.C5});
    }
  };
  (range$.LastNDaysToTodayRange.new = function(start, lengthInDays, title = null) {
    let t0;
    range$.LastNDaysToTodayRange.__proto__.new.call(this, start, lengthInDays, (t0 = title, t0 == null ? range$.LastNDaysToTodayRange._lastNDaysToTodayMsg(lengthInDays) : t0));
    ;
  }).prototype = range$.LastNDaysToTodayRange.prototype;
  (range$.LastNDaysToTodayRange.beforeToday = function(clock, lengthInDays, title = null) {
    let t0;
    range$.LastNDaysToTodayRange.__proto__.new.call(this, date$.Date.today(ClockL().as(clock)).add({days: intL().as(dart.dsend(dart.dsend(lengthInDays, '-', [1]), '_negate', []))}), intL().as(lengthInDays), (t0 = title, t0 == null ? range$.LastNDaysToTodayRange._lastNDaysToTodayMsg(intL().as(lengthInDays)) : t0));
    ;
  }).prototype = range$.LastNDaysToTodayRange.prototype;
  dart.addTypeTests(range$.LastNDaysToTodayRange);
  dart.addTypeCaches(range$.LastNDaysToTodayRange);
  dart.setMethodSignature(range$.LastNDaysToTodayRange, () => ({
    __proto__: dart.getMethods(range$.LastNDaysToTodayRange.__proto__),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), [])
  }));
  dart.setLibraryUri(range$.LastNDaysToTodayRange, L0);
  range$.NextNDaysFromTodayRange = class NextNDaysFromTodayRange extends range$.MultipleDaysRange {
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.nextNDaysFromToday = this[_lengthInDays$];
        return t0;
      })();
    }
    static _nextNDaysFromTodayMsg(lengthInDays) {
      return intl.Intl.plural(lengthInDays, {one: "Today", other: dart.str(lengthInDays) + " days from today", name: "_nextNDaysFromTodayMsg", args: JSArrayOfObjectL().of([lengthInDays]), desc: "A date range containing the next \"lengthInDays\" days, " + "starting with today. [REL_NOTE:brockschmid/01-01-2019]", examples: C5 || CT.C5});
    }
  };
  (range$.NextNDaysFromTodayRange.new = function(start, lengthInDays, title = null) {
    let t0;
    range$.NextNDaysFromTodayRange.__proto__.new.call(this, start, lengthInDays, (t0 = title, t0 == null ? range$.NextNDaysFromTodayRange._nextNDaysFromTodayMsg(lengthInDays) : t0));
    ;
  }).prototype = range$.NextNDaysFromTodayRange.prototype;
  (range$.NextNDaysFromTodayRange.afterToday = function(clock, lengthInDays, title = null) {
    let t0;
    range$.NextNDaysFromTodayRange.__proto__.new.call(this, date$.Date.today(ClockL().as(clock)), intL().as(lengthInDays), (t0 = title, t0 == null ? range$.NextNDaysFromTodayRange._nextNDaysFromTodayMsg(intL().as(lengthInDays)) : t0));
    ;
  }).prototype = range$.NextNDaysFromTodayRange.prototype;
  dart.addTypeTests(range$.NextNDaysFromTodayRange);
  dart.addTypeCaches(range$.NextNDaysFromTodayRange);
  dart.setMethodSignature(range$.NextNDaysFromTodayRange, () => ({
    __proto__: dart.getMethods(range$.NextNDaysFromTodayRange.__proto__),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), [])
  }));
  dart.setLibraryUri(range$.NextNDaysFromTodayRange, L0);
  var C6;
  var _startWeekday$ = dart.privateName(range$, "_startWeekday");
  var C7;
  var C8;
  range$.WeekRange = class WeekRange extends core.Object {
    static _weekStart(date, startWeekday) {
      return date.add({days: -(dart.notNull(date.weekday) - dart.notNull(startWeekday))[$modulo](7)});
    }
    get title() {
      let t0;
      t0 = this[_ago$];
      return this[_titleFunction$](t0);
    }
    get start() {
      return this[_start$];
    }
    get end() {
      return this[_start$].add({days: 6});
    }
    get next() {
      return new range$.WeekRange.new(this[_start$].add({days: 7}), dart.notNull(this[_ago$]) - 1, this[_titleFunction$]);
    }
    get prev() {
      return new range$.WeekRange.new(this[_start$].add({days: -7}), dart.notNull(this[_ago$]) + 1, this[_titleFunction$]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago$];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      let result = (t0 = range$._makeProtoBuf(this), (() => {
        t0.weeksAgo = this[_ago$];
        return t0;
      })());
      if (this[_startWeekday$] != null) {
        result.startWeekday = this[_startWeekday$];
      }
      return result;
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
    static _defaultTitle(weeksAgo) {
      return dart.notNull(weeksAgo) > 0 ? range$.WeekRange._weeksAgoMsg(weeksAgo) : range$.WeekRange._weeksFromNowMsg(-dart.notNull(weeksAgo));
    }
    static _weeksAgoMsg(weeksAgo) {
      return intl.Intl.plural(weeksAgo, {zero: "This week", one: "Last week", other: dart.str(weeksAgo) + " weeks ago", name: "_weeksAgoMsg", args: JSArrayOfObjectL().of([weeksAgo]), desc: "A date range spanning a single week in the past.", examples: C7 || CT.C7});
    }
    static _weeksFromNowMsg(weeksFromNow) {
      return intl.Intl.plural(weeksFromNow, {zero: "This week", one: "Next week", other: dart.str(weeksFromNow) + " weeks from now", name: "_weeksFromNowMsg", args: JSArrayOfObjectL().of([weeksFromNow]), desc: "A date range spanning a single week in the future.", examples: C8 || CT.C8});
    }
  };
  (range$.WeekRange.new = function(_start, _ago, _titleFunction = C6 || CT.C6, _startWeekday = null) {
    this[_start$] = _start;
    this[_ago$] = _ago;
    this[_titleFunction$] = _titleFunction;
    this[_startWeekday$] = _startWeekday;
    ;
  }).prototype = range$.WeekRange.prototype;
  (range$.WeekRange.weeksAgo = function(clock, ago, opts) {
    let t0;
    let titleFunction = opts && 'titleFunction' in opts ? opts.titleFunction : C6 || CT.C6;
    let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
    range$.WeekRange.new.call(this, range$.WeekRange._weekStart(date$.Date.today(ClockL().as(clock)), (t0 = startWeekday, t0 == null ? dart.notNull(new intl.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK) + 1 : t0)).add({days: dart.asNullableInt(-7 * dart.notNull(core.num.as(ago)))}), intL().as(ago), titleFunction, startWeekday);
  }).prototype = range$.WeekRange.prototype;
  dart.addTypeTests(range$.WeekRange);
  dart.addTypeCaches(range$.WeekRange);
  range$.WeekRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.WeekRange, () => ({
    __proto__: dart.getMethods(range$.WeekRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.WeekRange, () => ({
    __proto__: dart.getGetters(range$.WeekRange.__proto__),
    title: dart.legacy(core.String),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    ago: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.WeekRange, L0);
  dart.setFieldSignature(range$.WeekRange, () => ({
    __proto__: dart.getFields(range$.WeekRange.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_ago$]: dart.finalFieldType(dart.legacy(core.int)),
    [_startWeekday$]: dart.finalFieldType(dart.legacy(core.int)),
    [_titleFunction$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])))
  }));
  dart.defineExtensionMethods(range$.WeekRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.WeekRange, ['hashCode']);
  var C9;
  var C10;
  var C11;
  range$.MonthRange = class MonthRange extends core.Object {
    get title() {
      let t0;
      t0 = this[_ago$];
      return this[_titleFunction$](t0);
    }
    get start() {
      return this[_start$];
    }
    get end() {
      return this[_start$].add({months: 1, days: -1});
    }
    get next() {
      return new range$.MonthRange.new(this[_start$].add({months: 1}), dart.notNull(this[_ago$]) - 1, this[_titleFunction$]);
    }
    get prev() {
      return new range$.MonthRange.new(this[_start$].add({months: -1}), dart.notNull(this[_ago$]) + 1, this[_titleFunction$]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago$];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.monthsAgo = this[_ago$];
        return t0;
      })();
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
    static _defaultTitle(monthsAgo) {
      return dart.notNull(monthsAgo) > 0 ? range$.MonthRange._monthsAgoMsg(monthsAgo) : range$.MonthRange._monthsFromNowMsg(-dart.notNull(monthsAgo));
    }
    static _monthsAgoMsg(monthsAgo) {
      return intl.Intl.plural(monthsAgo, {zero: "This month", one: "Last month", other: dart.str(monthsAgo) + " months ago", name: "_monthsAgoMsg", args: JSArrayOfObjectL().of([monthsAgo]), desc: "A date range spanning a single month in the past.", examples: C10 || CT.C10});
    }
    static _monthsFromNowMsg(monthsFromNow) {
      return intl.Intl.plural(monthsFromNow, {zero: "This month", one: "Next month", other: dart.str(monthsFromNow) + " months from now", name: "_monthsFromNowMsg", args: JSArrayOfObjectL().of([monthsFromNow]), desc: "A date range spanning a single month in the future.", examples: C11 || CT.C11});
    }
  };
  (range$.MonthRange.new = function(start, _ago, _titleFunction = C9 || CT.C9) {
    this[_ago$] = _ago;
    this[_titleFunction$] = _titleFunction;
    this[_start$] = new date$.Date.new(start.year, start.month, 1);
    ;
  }).prototype = range$.MonthRange.prototype;
  (range$.MonthRange.monthsAgo = function(clock, ago, titleFunction = C9 || CT.C9) {
    range$.MonthRange._monthsAgo.call(this, date$.Date.today(clock), ago, titleFunction);
  }).prototype = range$.MonthRange.prototype;
  (range$.MonthRange._monthsAgo = function(today, ago, titleFunction) {
    range$.MonthRange.new.call(this, new date$.Date.new(today.year, dart.notNull(today.month) - dart.notNull(ago), 1), ago, titleFunction);
  }).prototype = range$.MonthRange.prototype;
  dart.addTypeTests(range$.MonthRange);
  dart.addTypeCaches(range$.MonthRange);
  range$.MonthRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.MonthRange, () => ({
    __proto__: dart.getMethods(range$.MonthRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.MonthRange, () => ({
    __proto__: dart.getGetters(range$.MonthRange.__proto__),
    title: dart.legacy(core.String),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    ago: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.MonthRange, L0);
  dart.setFieldSignature(range$.MonthRange, () => ({
    __proto__: dart.getFields(range$.MonthRange.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_ago$]: dart.finalFieldType(dart.legacy(core.int)),
    [_titleFunction$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])))
  }));
  dart.defineExtensionMethods(range$.MonthRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.MonthRange, ['hashCode']);
  var C12;
  var _theFirst$ = dart.privateName(range$, "_theFirst");
  var C13;
  var C14;
  range$.BroadcastMonthRange = class BroadcastMonthRange extends core.Object {
    static _weekStart(date) {
      return date.add({days: 1 - dart.notNull(date.weekday)});
    }
    static _weekEnd(date) {
      return date.add({days: 7 - dart.notNull(date.weekday)});
    }
    static monthsAgo(clock, ago, titleFunction = C12 || CT.C12) {
      let today = date$.Date.today(clock);
      let thisCalendarMonthTheFirst = new date$.Date.new(today.year, today.month, 1);
      let nextCalendarMonthTheFirst = thisCalendarMonthTheFirst.add({months: 1});
      let theFirst = dart.test(nextCalendarMonthTheFirst.isAfter(range$.BroadcastMonthRange._weekEnd(today))) ? thisCalendarMonthTheFirst : nextCalendarMonthTheFirst;
      return new range$.BroadcastMonthRange.__(theFirst.add({months: -dart.notNull(ago)}), ago, titleFunction);
    }
    get title() {
      let t0;
      t0 = this[_ago$];
      return this[_titleFunction$](t0);
    }
    get start() {
      return range$.BroadcastMonthRange._weekStart(this[_theFirst$]);
    }
    get end() {
      return range$.BroadcastMonthRange._weekStart(this[_theFirst$].add({months: 1})).add({days: -1});
    }
    get next() {
      return new range$.BroadcastMonthRange.__(this[_theFirst$].add({months: 1}), dart.notNull(this[_ago$]) - 1, this[_titleFunction$]);
    }
    get prev() {
      return new range$.BroadcastMonthRange.__(this[_theFirst$].add({months: -1}), dart.notNull(this[_ago$]) + 1, this[_titleFunction$]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.broadcastMonthsAgo = this[_ago$];
        return t0;
      })();
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
    static _defaultTitle(broadcastMonthsAgo) {
      return dart.notNull(broadcastMonthsAgo) > 0 ? range$.BroadcastMonthRange._broadcastMonthsAgoMsg(broadcastMonthsAgo) : range$.BroadcastMonthRange._broadcastMonthsFromNowMsg(-dart.notNull(broadcastMonthsAgo));
    }
    static _broadcastMonthsAgoMsg(broadcastMonthsAgo) {
      return intl.Intl.plural(numL().as(broadcastMonthsAgo), {zero: "This broadcast month", one: "Last broadcast month", other: dart.str(broadcastMonthsAgo) + " broadcast months ago", name: "_broadcastMonthsAgoMsg", args: JSArrayOfObjectL().of([broadcastMonthsAgo]), desc: "A date range spanning a single broadcast month in the past.", examples: C13 || CT.C13});
    }
    static _broadcastMonthsFromNowMsg(broadcastMonthsFromNow) {
      return intl.Intl.plural(numL().as(broadcastMonthsFromNow), {zero: "This broadcast month", one: "Next broadcast month", other: dart.str(broadcastMonthsFromNow) + " broadcast months from now", name: "_broadcastMonthsFromNowMsg", args: JSArrayOfObjectL().of([broadcastMonthsFromNow]), desc: "A date range spanning a single broadcast month in the future.", examples: C14 || CT.C14});
    }
  };
  (range$.BroadcastMonthRange.__ = function(_theFirst, _ago, _titleFunction = C12 || CT.C12) {
    this[_theFirst$] = _theFirst;
    this[_ago$] = _ago;
    this[_titleFunction$] = _titleFunction;
    ;
  }).prototype = range$.BroadcastMonthRange.prototype;
  dart.addTypeTests(range$.BroadcastMonthRange);
  dart.addTypeCaches(range$.BroadcastMonthRange);
  range$.BroadcastMonthRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.BroadcastMonthRange, () => ({
    __proto__: dart.getMethods(range$.BroadcastMonthRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.BroadcastMonthRange, () => ({
    __proto__: dart.getGetters(range$.BroadcastMonthRange.__proto__),
    title: dart.legacy(core.String),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.BroadcastMonthRange, L0);
  dart.setFieldSignature(range$.BroadcastMonthRange, () => ({
    __proto__: dart.getFields(range$.BroadcastMonthRange.__proto__),
    [_theFirst$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_ago$]: dart.finalFieldType(dart.legacy(core.int)),
    [_titleFunction$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])))
  }));
  dart.defineExtensionMethods(range$.BroadcastMonthRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.BroadcastMonthRange, ['hashCode']);
  var C15;
  var C16;
  var C17;
  range$.YearRange = class YearRange extends core.Object {
    get title() {
      let t0;
      t0 = this[_ago$];
      return this[_titleFunction$](t0);
    }
    get start() {
      return this[_start$];
    }
    get end() {
      return new date$.Date.new(this[_start$].year, 12, 31);
    }
    get next() {
      return new range$.YearRange.new(this[_start$].add({years: 1}), dart.notNull(this[_ago$]) - 1, this[_titleFunction$]);
    }
    get prev() {
      return new range$.YearRange.new(this[_start$].add({years: -1}), dart.notNull(this[_ago$]) + 1, this[_titleFunction$]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago$];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.yearsAgo = this[_ago$];
        return t0;
      })();
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
    static _defaultTitle(yearsAgo) {
      return dart.notNull(yearsAgo) > 0 ? range$.YearRange._yearsAgoMsg(yearsAgo) : range$.YearRange._yearsFromNowMsg(-dart.notNull(yearsAgo));
    }
    static _yearsAgoMsg(yearsAgo) {
      return intl.Intl.plural(yearsAgo, {zero: "This year", one: "Last year", other: dart.str(yearsAgo) + " years ago", name: "_yearsAgoMsg", args: JSArrayOfObjectL().of([yearsAgo]), desc: "A date range spanning a single year in the past.", examples: C16 || CT.C16});
    }
    static _yearsFromNowMsg(yearsFromNow) {
      return intl.Intl.plural(yearsFromNow, {zero: "This year", one: "Next year", other: dart.str(yearsFromNow) + " years from now", name: "_yearsFromNowMsg", args: JSArrayOfObjectL().of([yearsFromNow]), desc: "A date range spanning a single year in the future.", examples: C17 || CT.C17});
    }
  };
  (range$.YearRange.new = function(start, _ago, _titleFunction = C15 || CT.C15) {
    this[_ago$] = _ago;
    this[_titleFunction$] = _titleFunction;
    this[_start$] = new date$.Date.new(start.year, 1, 1);
    ;
  }).prototype = range$.YearRange.prototype;
  (range$.YearRange.yearsAgo = function(clock, ago, titleFunction = C15 || CT.C15) {
    range$.YearRange.new.call(this, date$.Date.today(ClockL().as(clock)).add({years: intL().as(dart.dsend(ago, '_negate', []))}), intL().as(ago), titleFunction);
  }).prototype = range$.YearRange.prototype;
  dart.addTypeTests(range$.YearRange);
  dart.addTypeCaches(range$.YearRange);
  range$.YearRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.YearRange, () => ({
    __proto__: dart.getMethods(range$.YearRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.YearRange, () => ({
    __proto__: dart.getGetters(range$.YearRange.__proto__),
    title: dart.legacy(core.String),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    ago: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.YearRange, L0);
  dart.setFieldSignature(range$.YearRange, () => ({
    __proto__: dart.getFields(range$.YearRange.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_ago$]: dart.finalFieldType(dart.legacy(core.int)),
    [_titleFunction$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])))
  }));
  dart.defineExtensionMethods(range$.YearRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.YearRange, ['hashCode']);
  var C18;
  var C19;
  var C20;
  var start = dart.privateName(range$, "QuarterRange.start");
  range$.QuarterRange = class QuarterRange extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get title() {
      let t0;
      t0 = this[_ago$];
      return this[_titleFunction$](t0);
    }
    get end() {
      return this.start.add({months: 3, days: -1});
    }
    get next() {
      return new range$.QuarterRange.new(this.start.add({months: 3}), dart.notNull(this[_ago$]) - 1, this[_titleFunction$]);
    }
    get prev() {
      return new range$.QuarterRange.new(this.start.add({months: -3}), dart.notNull(this[_ago$]) + 1, this[_titleFunction$]);
    }
    get isPredefined() {
      return true;
    }
    get isAllTime() {
      return false;
    }
    get ago() {
      return this[_ago$];
    }
    clamp(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      return range$._clamp(this, {min: min, max: max});
    }
    unclamped() {
      return this;
    }
    asPlainRange() {
      return range$._plainRange(this);
    }
    toProtoBuf() {
      let t0;
      t0 = range$._makeProtoBuf(this);
      return (() => {
        t0.quartersAgo = this[_ago$];
        return t0;
      })();
    }
    _equals(o) {
      if (o == null) return false;
      return range$.rangeEqual(this, o);
    }
    get hashCode() {
      return range$.rangeHash(this);
    }
    toString() {
      return range$._rangeString(this);
    }
    static _getStartMonth(start) {
      return ((dart.notNull(start.month) - 1) / 3)[$truncate]() * 3 + 1;
    }
    static _defaultTitle(quartersAgo) {
      return dart.notNull(quartersAgo) > 0 ? range$.QuarterRange._quartersAgoMsg(quartersAgo) : range$.QuarterRange._quartersFromNowMsg(-dart.notNull(quartersAgo));
    }
    static _quartersAgoMsg(quartersAgo) {
      return intl.Intl.plural(quartersAgo, {zero: "This quarter", one: "Last quarter", other: dart.str(quartersAgo) + " quarters ago", name: "_quartersAgoMsg", args: JSArrayOfObjectL().of([quartersAgo]), desc: "A date range spanning a single quarter in the past.", examples: C19 || CT.C19});
    }
    static _quartersFromNowMsg(quartersFromNow) {
      return intl.Intl.plural(quartersFromNow, {zero: "This quarter", one: "Next quarter", other: dart.str(quartersFromNow) + " quarters from now", name: "_quartersFromNowMsg", args: JSArrayOfObjectL().of([quartersFromNow]), desc: "A date range spanning a single quarter in the future.", examples: C20 || CT.C20});
    }
  };
  (range$.QuarterRange.new = function(startDate, _ago, _titleFunction = C18 || CT.C18) {
    this[_ago$] = _ago;
    this[_titleFunction$] = _titleFunction;
    this[start] = new date$.Date.new(startDate.year, range$.QuarterRange._getStartMonth(startDate), 1);
    ;
  }).prototype = range$.QuarterRange.prototype;
  (range$.QuarterRange.quartersAgo = function(clock, ago, titleFunction = C18 || CT.C18) {
    range$.QuarterRange._quartersAgo.call(this, date$.Date.today(clock), ago, titleFunction);
  }).prototype = range$.QuarterRange.prototype;
  (range$.QuarterRange._quartersAgo = function(today, ago, titleFunction) {
    range$.QuarterRange.new.call(this, new date$.Date.new(today.year, dart.notNull(today.month) - dart.notNull(ago) * 3, 1), ago, titleFunction);
  }).prototype = range$.QuarterRange.prototype;
  dart.addTypeTests(range$.QuarterRange);
  dart.addTypeCaches(range$.QuarterRange);
  range$.QuarterRange[dart.implements] = () => [range$.DatepickerDateRange];
  dart.setMethodSignature(range$.QuarterRange, () => ({
    __proto__: dart.getMethods(range$.QuarterRange.__proto__),
    clamp: dart.fnType(dart.legacy(range$.DatepickerDateRange), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    unclamped: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    asPlainRange: dart.fnType(dart.legacy(date$.DateRange), []),
    toProtoBuf: dart.fnType(dart.legacy(date_range$46pb.DatepickerDateRange), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(range$.QuarterRange, () => ({
    __proto__: dart.getGetters(range$.QuarterRange.__proto__),
    title: dart.legacy(core.String),
    end: dart.legacy(date$.Date),
    next: dart.legacy(range$.DatepickerDateRange),
    prev: dart.legacy(range$.DatepickerDateRange),
    isPredefined: dart.legacy(core.bool),
    isAllTime: dart.legacy(core.bool),
    ago: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(range$.QuarterRange, L0);
  dart.setFieldSignature(range$.QuarterRange, () => ({
    __proto__: dart.getFields(range$.QuarterRange.__proto__),
    start: dart.finalFieldType(dart.legacy(date$.Date)),
    [_ago$]: dart.finalFieldType(dart.legacy(core.int)),
    [_titleFunction$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])))
  }));
  dart.defineExtensionMethods(range$.QuarterRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(range$.QuarterRange, ['hashCode']);
  range$._ifValidRange = function _ifValidRange(r, fn) {
    if (r == null || r.start == null || r.end == null) {
      return null;
    }
    return fn();
  };
  range$._genericNext = function _genericNext(r) {
    return range$._ifValidRange(r, dart.fn(() => range$.DatepickerDateRange.custom(r.end.add({days: 1}), r.end.add({days: date$.daysSpanned(r.start, r.end)})), VoidToDatepickerDateRangeL()));
  };
  range$._genericPrev = function _genericPrev(r) {
    return range$._ifValidRange(r, dart.fn(() => range$.DatepickerDateRange.custom(r.start.add({days: -dart.notNull(date$.daysSpanned(r.start, r.end))}), r.start.add({days: -1})), VoidToDatepickerDateRangeL()));
  };
  range$._clamp = function _clamp(range, opts) {
    let min = opts && 'min' in opts ? opts.min : null;
    let max = opts && 'max' in opts ? opts.max : null;
    if (min != null && max != null) if (!dart.test(min['<='](max))) dart.assertFailed(null, L1, 139, 42, "min <= max");
    if ((min == null || range.end == null || dart.test(min['<='](range.end))) && (max == null || range.start == null || dart.test(max['>='](range.start)))) {
      return new range$._ClampedDateRange.new(range, {min: min, max: max});
    }
    return null;
  };
  range$.rangeEqual = function rangeEqual(range, o) {
    return range == null && o == null || DatepickerDateRangeL().is(range) && DatepickerDateRangeL().is(o) && range.title == o.title && dart.equals(range.start, o.start) && dart.equals(range.end, o.end);
  };
  range$.rangeHash = function rangeHash(range) {
    return (dart.hashCode(range.title) ^ dart.notNull(dart.hashCode(range.start)) ^ dart.notNull(dart.hashCode(range.end))) >>> 0;
  };
  range$._rangeString = function _rangeString(range) {
    return dart.str(range.title) + " (" + dart.str(range.start) + ") (" + dart.str(range.end) + ")";
  };
  range$._plainRange = function _plainRange(range) {
    return new date$.DateRange.new(range.start, range.end);
  };
  range$._makeProtoBuf = function _makeProtoBuf(range) {
    let t0, t0$;
    return dart.test(range.isAllTime) ? (t0 = new date_range$46pb.DatepickerDateRange.new(), (() => {
      t0.allTimeRange = true;
      return t0;
    })()) : (t0$ = new date_range$46pb.DatepickerDateRange.new(), (() => {
      t0$.dateRange = range$._makeDateRangeProto(range.start, range.end);
      return t0$;
    })());
  };
  range$._makeDateRangeProto = function _makeDateRangeProto(start, end) {
    let t0;
    t0 = new date_range$46pb.DateRange.new();
    return (() => {
      t0.start = range$._makeDateProto(start);
      t0.end = range$._makeDateProto(end);
      return t0;
    })();
  };
  range$._makeDateProto = function _makeDateProto(date) {
    let t0;
    t0 = new date$46pb.Date.new();
    return (() => {
      t0.year = date.year;
      t0.month = date.month;
      t0.day = date.day;
      return t0;
    })();
  };
  range$._convertToDate = function _convertToDate(date) {
    return new date$.Date.new(date.year, date.month, date.day);
  };
  range$.today = function today(clock) {
    return new range$.SingleDayRange.daysAgo(clock, 0);
  };
  range$.yesterday = function yesterday(clock) {
    return new range$.SingleDayRange.daysAgo(clock, 1);
  };
  range$.thisWeek = function thisWeek(clock) {
    return new range$.WeekRange.weeksAgo(clock, 0);
  };
  range$.lastWeek = function lastWeek(clock) {
    return new range$.WeekRange.weeksAgo(clock, 1);
  };
  range$.last7Days = function last7Days(clock) {
    return new range$.LastNDaysRange.beforeToday(clock, 7);
  };
  range$.last14Days = function last14Days(clock) {
    return new range$.LastNDaysRange.beforeToday(clock, 14);
  };
  range$.thisMonth = function thisMonth(clock) {
    return new range$.MonthRange.monthsAgo(clock, 0);
  };
  range$.lastMonth = function lastMonth(clock) {
    return new range$.MonthRange.monthsAgo(clock, 1);
  };
  range$.thisBroadcastMonth = function thisBroadcastMonth(clock) {
    return range$.BroadcastMonthRange.monthsAgo(clock, 0);
  };
  range$.lastBroadcastMonth = function lastBroadcastMonth(clock) {
    return range$.BroadcastMonthRange.monthsAgo(clock, 1);
  };
  range$.last30Days = function last30Days(clock) {
    return new range$.LastNDaysRange.beforeToday(clock, 30);
  };
  range$.thisYear = function thisYear(clock) {
    return new range$.YearRange.yearsAgo(clock, 0);
  };
  range$.lastYear = function lastYear(clock) {
    return new range$.YearRange.yearsAgo(clock, 1);
  };
  range$.thisQuarter = function thisQuarter(clock) {
    return new range$.QuarterRange.quartersAgo(clock, 0);
  };
  range$.lastQuarter = function lastQuarter(clock) {
    return new range$.QuarterRange.quartersAgo(clock, 1);
  };
  range$.commonRanges = function commonRanges(clock) {
    return JSArrayOfDatepickerDateRangeL().of([range$.today(clock), range$.yesterday(clock), range$.thisWeek(clock), range$.lastWeek(clock), range$.thisMonth(clock), range$.lastMonth(clock), range$.allTime]);
  };
  dart.defineLazy(range$, {
    /*range$.allTime*/get allTime() {
      return range$.DatepickerDateRange.new(range$._allTimeMsg, null, null, {isPredefined: true, isAllTime: true});
    },
    set allTime(_) {},
    /*range$._customDateRangeMsg*/get _customDateRangeMsg() {
      return intl.Intl.message("Custom", {name: "_customDateRangeMsg", meaning: "Name of a date range", desc: "Name of a user-specified date range, as opposed to a predefined " + "date range like \"Last 7 days\""});
    },
    /*range$._allTimeMsg*/get _allTimeMsg() {
      return intl.Intl.message("All time", {name: "_allTimeMsg", desc: "A date range containing the entire lifetime of the account."});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/range", {
    "package:angular_components/material_datepicker/range.dart": range$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["range.dart"],"names":[],"mappings":"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","file":"range.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__range: range$
  };
}));

//# sourceMappingURL=range.unsound.ddc.js.map
