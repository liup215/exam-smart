define(['dart_sdk', 'packages/quiver/src/time/clock', 'packages/angular_components/utils/comparators/comparators', 'packages/intl/intl', 'packages/quiver/core', 'packages/angular_components/model/observable/observable'], (function load__packages__angular_components__model__date__date(dart_sdk, packages__quiver__src__time__clock, packages__angular_components__utils__comparators__comparators, packages__intl__intl, packages__quiver__core, packages__angular_components__model__observable__observable) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const comparators = packages__angular_components__utils__comparators__comparators.utils__comparators__comparators;
  const intl = packages__intl__intl.intl;
  const hash = packages__quiver__core.src__core__hash;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  var date = Object.create(dart.library);
  var $isNaN = dartx.isNaN;
  var $compareTo = dartx.compareTo;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $round = dartx.round;
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date.DateRange)))();
  var DateRangeComparisonL = () => (DateRangeComparisonL = dart.constFn(dart.legacy(date.DateRangeComparison)))();
  var ObservableReferenceOfDateRangeComparisonL = () => (ObservableReferenceOfDateRangeComparisonL = dart.constFn(observable.ObservableReference$(DateRangeComparisonL())))();
  var SyncIterableOfDateL = () => (SyncIterableOfDateL = dart.constFn(_js_helper.SyncIterable$(DateL())))();
  var JSArrayOfDateL = () => (JSArrayOfDateL = dart.constFn(_interceptors.JSArray$(DateL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/date/date.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C1 || CT.C1
      });
    }
  }, false);
  var _time = dart.privateName(date, "_time");
  var C1;
  var Clock__time = dart.privateName(clock, "Clock._time");
  var C0;
  date.Date = class Date extends comparators.Comparators {
    static fromTime(time, opts) {
      let tzOffset = opts && 'tzOffset' in opts ? opts.tzOffset : null;
      if (time.timeZoneOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.ArgumentError.value(time, "time", "has a NaN time zone offset"));
      }
      tzOffset == null ? tzOffset = time.timeZoneOffset : null;
      if (tzOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.ArgumentError.value(tzOffset, "tzOffset", "has a NaN duration"));
      }
      let localTime = time.add(tzOffset['-'](time.timeZoneOffset));
      return new date.Date.new(localTime.year, localTime.month, localTime.day);
    }
    static fromTimestamp(msSinceEpoch) {
      return date.Date.fromTime(new core.DateTime.fromMillisecondsSinceEpoch(msSinceEpoch));
    }
    static today(clock = null) {
      let t0;
      let now = (t0 = clock, t0 == null ? C0 || CT.C0 : t0).now();
      if (now.timeZoneOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.StateError.new("Clock " + dart.str(clock) + " returned a time with a NaN timezone " + "offset: " + dart.str(now)));
      }
      return date.Date.fromTime(now);
    }
    static parse(input, format) {
      return date.Date.fromTime(format.parse(input));
    }
    static parseStrict(input, format) {
      return date.Date.fromTime(format.parseStrict(input));
    }
    static parseLoose(input, format) {
      return date.Date.fromTime(format.parseLoose(input));
    }
    format(format) {
      return format.format(this.asUtcTime());
    }
    asUtcTime() {
      return this[_time];
    }
    subtract(opts) {
      let years = opts && 'years' in opts ? opts.years : 0;
      let months = opts && 'months' in opts ? opts.months : 0;
      let days = opts && 'days' in opts ? opts.days : 0;
      return this.add({years: -dart.notNull(years), months: -dart.notNull(months), days: -dart.notNull(days)});
    }
    add(opts) {
      let years = opts && 'years' in opts ? opts.years : 0;
      let months = opts && 'months' in opts ? opts.months : 0;
      let days = opts && 'days' in opts ? opts.days : 0;
      return new date.Date.new(dart.notNull(this.year) + dart.notNull(years), dart.notNull(this.month) + dart.notNull(months), dart.notNull(this.day) + dart.notNull(days));
    }
    get year() {
      return this.asUtcTime().year;
    }
    get month() {
      return this.asUtcTime().month;
    }
    get day() {
      return this.asUtcTime().day;
    }
    get weekday() {
      return this.asUtcTime().weekday;
    }
    isBefore(other) {
      return this['<'](other);
    }
    isOnOrBefore(other) {
      return this['<='](other);
    }
    isAfter(other) {
      return this['>'](other);
    }
    isOnOrAfter(other) {
      return this['>='](other);
    }
    compareTo(other) {
      DateL().as(other);
      return this.asUtcTime().compareTo(other.asUtcTime());
    }
    get hashCode() {
      return dart.hashCode(this.asUtcTime());
    }
    toString() {
      return dart.str(this.asUtcTime().year) + "-" + dart.str(this.asUtcTime().month) + "-" + dart.str(this.asUtcTime().day);
    }
  };
  (date.Date.new = function(year, month = 1, day = 1) {
    this[_time] = new core.DateTime.utc(year, month, day);
    ;
  }).prototype = date.Date.prototype;
  dart.addTypeTests(date.Date);
  dart.addTypeCaches(date.Date);
  dart.setMethodSignature(date.Date, () => ({
    __proto__: dart.getMethods(date.Date.__proto__),
    format: dart.fnType(dart.legacy(core.String), [dart.legacy(intl.DateFormat)]),
    asUtcTime: dart.fnType(dart.legacy(core.DateTime), []),
    subtract: dart.fnType(dart.legacy(date.Date), [], {days: dart.legacy(core.int), months: dart.legacy(core.int), years: dart.legacy(core.int)}, {}),
    add: dart.fnType(dart.legacy(date.Date), [], {days: dart.legacy(core.int), months: dart.legacy(core.int), years: dart.legacy(core.int)}, {}),
    isBefore: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    isOnOrBefore: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    isAfter: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    isOnOrAfter: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(date.Date, () => ({
    __proto__: dart.getGetters(date.Date.__proto__),
    year: dart.legacy(core.int),
    month: dart.legacy(core.int),
    day: dart.legacy(core.int),
    weekday: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(date.Date, L0);
  dart.setFieldSignature(date.Date, () => ({
    __proto__: dart.getFields(date.Date.__proto__),
    [_time]: dart.finalFieldType(dart.legacy(core.DateTime))
  }));
  dart.defineExtensionMethods(date.Date, ['compareTo', 'toString']);
  dart.defineExtensionAccessors(date.Date, ['hashCode']);
  var start$ = dart.privateName(date, "DateRange.start");
  var end$ = dart.privateName(date, "DateRange.end");
  date.DateRange = class DateRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    static intersectionOf(a, b) {
      let start = date.DateRange._laterStartDateOf(a.start, b.start);
      let end = date.DateRange._earlierEndDateOf(a.end, b.end);
      if (start != null && end != null && dart.test(start['>'](end))) return null;
      return new date.DateRange.new(start, end);
    }
    static _laterStartDateOf(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return date.laterOf(a, b);
    }
    static _earlierEndDateOf(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return date.earlierOf(a, b);
    }
    _equals(o) {
      if (o == null) return false;
      return DateRangeL().is(o) && dart.equals(this.start, o.start) && dart.equals(this.end, o.end);
    }
    get hashCode() {
      return hash.hash2(this.start, this.end);
    }
    toString() {
      return dart.str(this.start) + " - " + dart.str(this.end);
    }
    asPlainRange() {
      return this;
    }
  };
  (date.DateRange.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
    ;
  }).prototype = date.DateRange.prototype;
  dart.addTypeTests(date.DateRange);
  dart.addTypeCaches(date.DateRange);
  dart.setMethodSignature(date.DateRange, () => ({
    __proto__: dart.getMethods(date.DateRange.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    asPlainRange: dart.fnType(dart.legacy(date.DateRange), [])
  }));
  dart.setGetterSignature(date.DateRange, () => ({
    __proto__: dart.getGetters(date.DateRange.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(date.DateRange, L0);
  dart.setFieldSignature(date.DateRange, () => ({
    __proto__: dart.getFields(date.DateRange.__proto__),
    start: dart.finalFieldType(dart.legacy(date.Date)),
    end: dart.finalFieldType(dart.legacy(date.Date))
  }));
  dart.defineExtensionMethods(date.DateRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(date.DateRange, ['hashCode']);
  var range$ = dart.privateName(date, "DateRangeComparison.range");
  var comparison$ = dart.privateName(date, "DateRangeComparison.comparison");
  date.DateRangeComparison = class DateRangeComparison extends core.Object {
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
  };
  (date.DateRangeComparison.new = function(range, opts) {
    let comparison = opts && 'comparison' in opts ? opts.comparison : null;
    this[range$] = range;
    this[comparison$] = comparison;
    ;
  }).prototype = date.DateRangeComparison.prototype;
  dart.addTypeTests(date.DateRangeComparison);
  dart.addTypeCaches(date.DateRangeComparison);
  dart.setGetterSignature(date.DateRangeComparison, () => ({
    __proto__: dart.getGetters(date.DateRangeComparison.__proto__),
    isComparisonEnabled: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(date.DateRangeComparison, L0);
  dart.setFieldSignature(date.DateRangeComparison, () => ({
    __proto__: dart.getFields(date.DateRangeComparison.__proto__),
    range: dart.finalFieldType(dart.legacy(date.DateRange)),
    comparison: dart.finalFieldType(dart.legacy(date.DateRange))
  }));
  var _ref$ = dart.privateName(date, "_ref");
  date.DatepickerSelection = class DatepickerSelection extends observable.ObservableViewMixin$(dart.legacy(date.DateRangeComparison)) {
    get value() {
      return this[_ref$].value;
    }
    get stream() {
      return this[_ref$].stream;
    }
    dispose() {
    }
  };
  (date.DatepickerSelection.wrap = function(_ref) {
    this[_ref$] = _ref;
    ;
  }).prototype = date.DatepickerSelection.prototype;
  (date.DatepickerSelection.test = function(initialValue = null) {
    this[_ref$] = new (ObservableReferenceOfDateRangeComparisonL()).new(initialValue);
    ;
  }).prototype = date.DatepickerSelection.prototype;
  dart.addTypeTests(date.DatepickerSelection);
  dart.addTypeCaches(date.DatepickerSelection);
  dart.setMethodSignature(date.DatepickerSelection, () => ({
    __proto__: dart.getMethods(date.DatepickerSelection.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(date.DatepickerSelection, () => ({
    __proto__: dart.getGetters(date.DatepickerSelection.__proto__),
    value: dart.legacy(date.DateRangeComparison),
    stream: dart.legacy(async.Stream$(dart.legacy(date.DateRangeComparison)))
  }));
  dart.setLibraryUri(date.DatepickerSelection, L0);
  dart.setFieldSignature(date.DatepickerSelection, () => ({
    __proto__: dart.getFields(date.DatepickerSelection.__proto__),
    [_ref$]: dart.finalFieldType(dart.legacy(observable.ObservableView$(dart.legacy(date.DateRangeComparison))))
  }));
  date.daysSpanned = function daysSpanned(start, end, opts) {
    let inclusive = opts && 'inclusive' in opts ? opts.inclusive : true;
    return (dart.notNull(end.asUtcTime().difference(start.asUtcTime()).inHours) / 24)[$round]() + (dart.test(inclusive) ? 1 : 0);
  };
  date.earlierOf = function earlierOf(a, b) {
    return dart.test(a.isAfter(b)) ? b : a;
  };
  date.laterOf = function laterOf(a, b) {
    return dart.test(a.isAfter(b)) ? a : b;
  };
  date.rangeContains = function rangeContains(range, date) {
    return (range.start == null || dart.test(date['>='](range.start))) && (range.end == null || dart.test(date['<='](range.end)));
  };
  date.rangeContainsRange = function rangeContainsRange(range, subrange) {
    let containsStart = range.start == null && subrange.start == null || subrange.start != null && dart.test(date.rangeContains(range, subrange.start));
    let containsEnd = range.end == null && subrange.end == null || subrange.end != null && dart.test(date.rangeContains(range, subrange.end));
    return containsStart && containsEnd;
  };
  date.enumerateDates = function enumerateDates(start, end) {
    return new (SyncIterableOfDateL()).new(function* enumerateDates() {
      for (let date = start; dart.test(date['<='](end)); date = date.add({days: 1})) {
        yield date;
      }
    });
  };
  date.enumerateRange = function enumerateRange(range) {
    if (range == null) {
      return JSArrayOfDateL().of([]);
    }
    if (range.start == null || range.end == null) {
      dart.throw(new core.ArgumentError.new("Cannot call enumerateRange with a range with a null start or end."));
    }
    return date.enumerateDates(range.start, range.end);
  };
  dart.setBaseClass(date.Date, comparators.Comparators$(date.Date));
  dart.trackLibraries("packages/angular_components/model/date/date", {
    "package:angular_components/model/date/date.dart": date
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date.dart"],"names":[],"mappings":"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","file":"date.unsound.ddc.js"}');
  // Exports:
  return {
    model__date__date: date
  };
}));

//# sourceMappingURL=date.unsound.ddc.js.map
