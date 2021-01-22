define(['dart_sdk'], (function load__packages__quiver__src__time__clock(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var clock = Object.create(dart.library);
  var util = Object.create(dart.library);
  var duration_unit_constants = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $_get = dartx._get;
  var $clamp = dartx.clamp;
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "package:quiver/src/time/clock.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C1() {
      return C1 = dart.constList([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], intL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 60000000
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3600000000.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 86400000000.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 604800000000.0
      });
    }
  }, false);
  var C0;
  var _time = dart.privateName(clock, "_time");
  var _time$ = dart.privateName(clock, "Clock._time");
  clock.Clock = class Clock extends core.Object {
    get [_time]() {
      return this[_time$];
    }
    set [_time](value) {
      super[_time] = value;
    }
    now() {
      return this[_time]();
    }
    agoBy(duration) {
      return this.now().subtract(duration);
    }
    fromNowBy(duration) {
      return this.now().add(duration);
    }
    ago(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.agoBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    fromNow(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.fromNowBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    microsAgo(micros) {
      return this.ago({microseconds: micros});
    }
    microsFromNow(micros) {
      return this.fromNow({microseconds: micros});
    }
    millisAgo(millis) {
      return this.ago({milliseconds: millis});
    }
    millisFromNow(millis) {
      return this.fromNow({milliseconds: millis});
    }
    secondsAgo(seconds) {
      return this.ago({seconds: seconds});
    }
    secondsFromNow(seconds) {
      return this.fromNow({seconds: seconds});
    }
    minutesAgo(minutes) {
      return this.ago({minutes: minutes});
    }
    minutesFromNow(minutes) {
      return this.fromNow({minutes: minutes});
    }
    hoursAgo(hours) {
      return this.ago({hours: hours});
    }
    hoursFromNow(hours) {
      return this.fromNow({hours: hours});
    }
    daysAgo(days) {
      return this.ago({days: days});
    }
    daysFromNow(days) {
      return this.fromNow({days: days});
    }
    weeksAgo(weeks) {
      return this.ago({days: 7 * dart.notNull(weeks)});
    }
    weeksFromNow(weeks) {
      return this.fromNow({days: 7 * dart.notNull(weeks)});
    }
    monthsAgo(months) {
      let time = this.now();
      let m = (dart.notNull(time.month) - dart.notNull(months) - 1)[$modulo](12) + 1;
      let y = dart.notNull(time.year) - ((dart.notNull(months) + 12 - dart.notNull(time.month)) / 12)[$truncate]();
      let d = util.clampDayOfMonth({year: y, month: m, day: time.day});
      return new core.DateTime.new(y, m, d, time.hour, time.minute, time.second, time.millisecond);
    }
    monthsFromNow(months) {
      let time = this.now();
      let m = (dart.notNull(time.month) + dart.notNull(months) - 1)[$modulo](12) + 1;
      let y = dart.notNull(time.year) + ((dart.notNull(months) + dart.notNull(time.month) - 1) / 12)[$truncate]();
      let d = util.clampDayOfMonth({year: y, month: m, day: time.day});
      return new core.DateTime.new(y, m, d, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsAgo(years) {
      let time = this.now();
      let y = dart.notNull(time.year) - dart.notNull(years);
      let d = util.clampDayOfMonth({year: y, month: time.month, day: time.day});
      return new core.DateTime.new(y, time.month, d, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsFromNow(years) {
      return this.yearsAgo(-dart.notNull(years));
    }
  };
  (clock.Clock.new = function(timeFunc = C0 || CT.C0) {
    this[_time$] = timeFunc;
    ;
  }).prototype = clock.Clock.prototype;
  (clock.Clock.fixed = function(time) {
    this[_time$] = dart.fn(() => time, VoidToDateTimeL());
    ;
  }).prototype = clock.Clock.prototype;
  dart.addTypeTests(clock.Clock);
  dart.addTypeCaches(clock.Clock);
  dart.setMethodSignature(clock.Clock, () => ({
    __proto__: dart.getMethods(clock.Clock.__proto__),
    now: dart.fnType(dart.legacy(core.DateTime), []),
    agoBy: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.Duration)]),
    fromNowBy: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.Duration)]),
    ago: dart.fnType(dart.legacy(core.DateTime), [], {days: dart.legacy(core.int), hours: dart.legacy(core.int), microseconds: dart.legacy(core.int), milliseconds: dart.legacy(core.int), minutes: dart.legacy(core.int), seconds: dart.legacy(core.int)}, {}),
    fromNow: dart.fnType(dart.legacy(core.DateTime), [], {days: dart.legacy(core.int), hours: dart.legacy(core.int), microseconds: dart.legacy(core.int), milliseconds: dart.legacy(core.int), minutes: dart.legacy(core.int), seconds: dart.legacy(core.int)}, {}),
    microsAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    microsFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    millisAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    millisFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    secondsAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    secondsFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    minutesAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    minutesFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    hoursAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    hoursFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    daysAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    daysFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    weeksAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    weeksFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    monthsAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    monthsFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    yearsAgo: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)]),
    yearsFromNow: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(clock.Clock, L0);
  dart.setFieldSignature(clock.Clock, () => ({
    __proto__: dart.getFields(clock.Clock.__proto__),
    [_time]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.DateTime), [])))
  }));
  clock.systemTime = function systemTime() {
    return new core.DateTime.now();
  };
  util.daysInMonth = function daysInMonth(year, month) {
    return month === 2 && dart.test(util.isLeapYear(year)) ? 29 : util._daysInMonth[$_get](month);
  };
  util.isLeapYear = function isLeapYear(year) {
    return year[$modulo](4) === 0 && (year[$modulo](100) !== 0 || year[$modulo](400) === 0);
  };
  util.clampDayOfMonth = function clampDayOfMonth(opts) {
    let year = opts && 'year' in opts ? opts.year : null;
    let month = opts && 'month' in opts ? opts.month : null;
    let day = opts && 'day' in opts ? opts.day : null;
    return dart.asNullableInt(day[$clamp](1, util.daysInMonth(year, month)));
  };
  var C1;
  dart.defineLazy(util, {
    /*util._daysInMonth*/get _daysInMonth() {
      return C1 || CT.C1;
    }
  }, true);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  dart.defineLazy(duration_unit_constants, {
    /*duration_unit_constants.aMicrosecond*/get aMicrosecond() {
      return C2 || CT.C2;
    },
    /*duration_unit_constants.aMillisecond*/get aMillisecond() {
      return C3 || CT.C3;
    },
    /*duration_unit_constants.aSecond*/get aSecond() {
      return C4 || CT.C4;
    },
    /*duration_unit_constants.aMinute*/get aMinute() {
      return C5 || CT.C5;
    },
    /*duration_unit_constants.anHour*/get anHour() {
      return C6 || CT.C6;
    },
    /*duration_unit_constants.aDay*/get aDay() {
      return C7 || CT.C7;
    },
    /*duration_unit_constants.aWeek*/get aWeek() {
      return C8 || CT.C8;
    }
  }, true);
  dart.trackLibraries("packages/quiver/src/time/clock", {
    "package:quiver/src/time/clock.dart": clock,
    "package:quiver/src/time/util.dart": util,
    "package:quiver/src/time/duration_unit_constants.dart": duration_unit_constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clock.dart","util.dart","duration_unit_constants.dart"],"names":[],"mappings":"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","file":"clock.unsound.ddc.js"}');
  // Exports:
  return {
    src__time__clock: clock,
    src__time__util: util,
    src__time__duration_unit_constants: duration_unit_constants
  };
}));

//# sourceMappingURL=clock.unsound.ddc.js.map
