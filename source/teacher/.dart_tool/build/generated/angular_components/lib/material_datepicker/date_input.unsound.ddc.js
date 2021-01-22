define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/quiver/src/time/clock', 'packages/angular_components/material_input/material_input'], (function load__packages__angular_components__material_datepicker__date_input(dart_sdk, packages__intl__intl, packages__angular_components__model__date__date, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_datepicker__calendar, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__quiver__src__time__clock, packages__angular_components__material_input__material_input) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const date$ = packages__angular_components__model__date__date.model__date__date;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  var date_input = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $trim = dartx.trim;
  var $truncate = dartx.truncate;
  var DateFormatL = () => (DateFormatL = dart.constFn(dart.legacy(intl.DateFormat)))();
  var JSArrayOfDateFormatL = () => (JSArrayOfDateFormatL = dart.constFn(_interceptors.JSArray$(DateFormatL())))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date$.Date)))();
  var StreamControllerOfDateL = () => (StreamControllerOfDateL = dart.constFn(async.StreamController$(DateL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var ArgumentErrorL = () => (ArgumentErrorL = dart.constFn(dart.legacy(core.ArgumentError)))();
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var JSArrayOfDateL = () => (JSArrayOfDateL = dart.constFn(_interceptors.JSArray$(DateL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/date_input.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["minimumDate", "Jan 1, 2005"]);
    },
    get C1() {
      return C1 = dart.constMap(StringL(), ObjectL(), ["maximumDate", "Dec 31, 2025"]);
    }
  }, false);
  var _inputFormats = dart.privateName(date_input, "_inputFormats");
  var _dayInputFormatsWithoutYear = dart.privateName(date_input, "_dayInputFormatsWithoutYear");
  var _monthInputFormatsWithoutDay = dart.privateName(date_input, "_monthInputFormatsWithoutDay");
  var _monthInputFormatsMonthOnly = dart.privateName(date_input, "_monthInputFormatsMonthOnly");
  var _defaultMonthFormat = dart.privateName(date_input, "_defaultMonthFormat");
  var _defaultDayFormat = dart.privateName(date_input, "_defaultDayFormat");
  var _dateFormat = dart.privateName(date_input, "_dateFormat");
  var _maxDate = dart.privateName(date_input, "_maxDate");
  var _minDate = dart.privateName(date_input, "_minDate");
  var _date = dart.privateName(date_input, "_date");
  var _isRangeEnd = dart.privateName(date_input, "_isRangeEnd");
  var _disposer = dart.privateName(date_input, "_disposer");
  var _controller = dart.privateName(date_input, "_controller");
  var _cachedResult = dart.privateName(date_input, "_cachedResult");
  var _cachedInput = dart.privateName(date_input, "_cachedInput");
  var _cachedMinDate = dart.privateName(date_input, "_cachedMinDate");
  var _cachedMaxDate = dart.privateName(date_input, "_cachedMaxDate");
  var _lastParse = dart.privateName(date_input, "_lastParse");
  var _input$ = dart.privateName(date_input, "_input");
  var _clock = dart.privateName(date_input, "_clock");
  var _parseDate = dart.privateName(date_input, "_parseDate");
  var _parseDateCached = dart.privateName(date_input, "_parseDateCached");
  var _trySetDate = dart.privateName(date_input, "_trySetDate");
  var _clampDate = dart.privateName(date_input, "_clampDate");
  var _parseDateUsingFormat = dart.privateName(date_input, "_parseDateUsingFormat");
  var _parseDateUsingFormatList = dart.privateName(date_input, "_parseDateUsingFormatList");
  var _guessYear = dart.privateName(date_input, "_guessYear");
  var _guessCentury = dart.privateName(date_input, "_guessCentury");
  var C0;
  var C1;
  var isMonthInput = dart.privateName(date_input, "DateInputDirective.isMonthInput");
  date_input.DateInputDirective = class DateInputDirective extends core.Object {
    get isMonthInput() {
      return this[isMonthInput];
    }
    set isMonthInput(value) {
      this[isMonthInput] = value;
    }
    set dateFormat(value) {
      let t0, t0$;
      this[_dateFormat] = value;
      this[_input$].inputText = (t0$ = (t0 = this[_date], t0 == null ? null : t0.format(this.dateFormat)), t0$ == null ? "" : t0$);
    }
    get dateFormat() {
      if (this[_dateFormat] != null) {
        return this[_dateFormat];
      } else {
        return dart.test(this.isMonthInput) ? this[_defaultMonthFormat] : this[_defaultDayFormat];
      }
    }
    set maxDate(date) {
      if (date == null || dart.equals(date, this[_maxDate])) return;
      this[_maxDate] = date;
      if (!dart.equals(this[_lastParse], this[_date])) this[_trySetDate](this[_lastParse], {setAsCurrent: true});
    }
    get maxDate() {
      return this[_maxDate];
    }
    set minDate(date) {
      if (date == null || dart.equals(date, this[_minDate])) return;
      this[_minDate] = date;
      if (!dart.equals(this[_lastParse], this[_date])) this[_trySetDate](this[_lastParse], {setAsCurrent: true});
    }
    get minDate() {
      return this[_minDate];
    }
    set date(date) {
      let t0, t0$;
      this[_date] = this[_clampDate](date);
      let text = (t0$ = (t0 = this[_date], t0 == null ? null : t0.format(this.dateFormat)), t0$ == null ? "" : t0$);
      if (this[_input$].inputText != text) {
        let valid = !dart.test(this[_input$].required) || text[$isNotEmpty];
        this[_input$].inputChange(text, valid, valid ? null : date_input.DateInputDirective.invalidDateMsg);
      }
    }
    get date() {
      return this[_date];
    }
    set rangeEnd(isRangeEnd) {
      this[_isRangeEnd] = isRangeEnd;
    }
    get dateChange() {
      return this[_controller].stream;
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    [_clampDate](date) {
      if (date != null && dart.test(this.isMonthInput)) {
        if (dart.test(this[_isRangeEnd])) {
          return calendar.lastDayOfMonth(date);
        } else {
          return calendar.firstDayOfMonth(date);
        }
      }
      return date;
    }
    [_parseDateUsingFormat](input, format) {
      try {
        return this[_clampDate](date$.Date.parseLoose(input, format));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (FormatExceptionL().is(ex)) {
          return null;
        } else if (ArgumentErrorL().is(ex)) {
          return null;
        } else
          throw e;
      }
    }
    [_parseDateUsingFormatList](input, formatList) {
      for (let format of formatList) {
        let d = this[_parseDateUsingFormat](input, format);
        if (d != null) return d;
      }
      return null;
    }
    [_parseDateCached](input) {
      let minOrMaxDateChanged = !dart.equals(this.minDate, this[_cachedMinDate]) || !dart.equals(this.maxDate, this[_cachedMaxDate]);
      if (minOrMaxDateChanged) {
        this[_cachedMinDate] = this.minDate;
        this[_cachedMaxDate] = this.maxDate;
      }
      if (input != this[_cachedInput] || input[$isNotEmpty] && minOrMaxDateChanged) {
        this[_cachedResult] = this[_parseDate](input, {setAsCurrent: false});
        this[_cachedInput] = input;
      }
      return this[_cachedResult];
    }
    [_parseDate](input, opts) {
      let setAsCurrent = opts && 'setAsCurrent' in opts ? opts.setAsCurrent : false;
      if (input[$trim]()[$isEmpty]) {
        this[_lastParse] = null;
        if (dart.test(this[_input$].required)) {
          return date_input.DateInputDirective.invalidDateMsg;
        }
      } else {
        this[_lastParse] = this[_parseDateUsingFormat](input, this.dateFormat);
        if (dart.test(this.isMonthInput)) {
          this[_lastParse] == null ? this[_lastParse] = this[_parseDateUsingFormatList](input, this[_inputFormats]) : null;
          this[_lastParse] == null ? this[_lastParse] = this[_parseDateUsingFormatList](input, this[_monthInputFormatsWithoutDay]) : null;
          this[_lastParse] == null ? this[_lastParse] = this[_guessYear](this[_parseDateUsingFormatList](input, this[_monthInputFormatsMonthOnly])) : null;
        } else {
          this[_lastParse] == null ? this[_lastParse] = this[_parseDateUsingFormatList](input, this[_inputFormats]) : null;
          this[_lastParse] == null ? this[_lastParse] = this[_guessYear](this[_parseDateUsingFormatList](input, this[_dayInputFormatsWithoutYear])) : null;
        }
        if (this[_lastParse] == null) {
          return date_input.DateInputDirective.invalidDateMsg;
        }
      }
      if (this[_lastParse] != null && dart.notNull(this[_lastParse].year) < 100) {
        this[_lastParse] = new date$.Date.new(this[_guessCentury](this[_lastParse].year), this[_lastParse].month, this[_lastParse].day);
      }
      return this[_trySetDate](this[_lastParse], {setAsCurrent: setAsCurrent});
    }
    [_trySetDate](date, opts) {
      let t2, t2$;
      let setAsCurrent = opts && 'setAsCurrent' in opts ? opts.setAsCurrent : false;
      if (dart.test(setAsCurrent)) {
        this[_input$].inputText = (t2$ = (t2 = date, t2 == null ? null : t2.format(this.dateFormat)), t2$ == null ? "" : t2$);
      }
      if (date != null) {
        if (dart.test(date['<'](this.minDate))) {
          return this.dateIsTooEarlyMsg(this.minDate.format(this.dateFormat));
        } else if (dart.test(date['>'](this.maxDate))) {
          return this.dateIsTooLateMsg(this.maxDate.format(this.dateFormat));
        }
      }
      if (dart.test(setAsCurrent)) {
        if (dart.test(this.isMonthInput) && date != null && this[_date] != null && date.month == this[_date].month && date.year == this[_date].year) {
          date = this[_date];
        } else {
          this[_date] = date;
        }
        this[_controller].add(date);
      }
      return null;
    }
    [_guessCentury](year, opts) {
      let lookahead = opts && 'lookahead' in opts ? opts.lookahead : 20;
      let currentYear = this[_clock].now().year;
      let currentCentury = (dart.notNull(currentYear) / 100)[$truncate]();
      let guess = dart.notNull(year) + currentCentury * 100;
      if (guess - dart.notNull(currentYear) > dart.notNull(lookahead)) {
        guess = guess - 100;
      }
      return guess;
    }
    [_guessYear](date) {
      if (date == null) return null;
      let thisYear = new date$.Date.new(this[_clock].now().year, date.month, date.day);
      for (let candidate of JSArrayOfDateL().of([thisYear, thisYear.add({years: 1}), thisYear.add({years: -1})])) {
        if (dart.test(candidate['>='](this.minDate)) && dart.test(candidate['<='](this.maxDate))) {
          return candidate;
        }
      }
      return thisYear;
    }
    dateIsTooEarlyMsg(minimumDate) {
      return intl.Intl.message("Enter " + dart.str(minimumDate) + " or later", {name: "dateIsTooEarlyMsg", args: JSArrayOfObjectL().of([minimumDate]), examples: C0 || CT.C0, meaning: "Error message", desc: "Displayed when the user enters a valid date, but it's before the " + "minimum date accepted by the date input field."});
    }
    dateIsTooLateMsg(maximumDate) {
      return intl.Intl.message("Enter " + dart.str(maximumDate) + " or earlier", {name: "dateIsTooLateMsg", args: JSArrayOfObjectL().of([maximumDate]), examples: C1 || CT.C1, meaning: "Error message", desc: "Displayed when the user enters a valid date, but it's after the " + "maximum date accepted by the date input field."});
    }
  };
  (date_input.DateInputDirective.new = function(clock, legacyClock, _input) {
    let t0;
    this[_inputFormats] = JSArrayOfDateFormatL().of([new intl.DateFormat.yMMMd(), new intl.DateFormat.yMd(), new intl.DateFormat.yMEd(), new intl.DateFormat.yMMMEd(), new intl.DateFormat.yMMMMd(), new intl.DateFormat.yMMMMEEEEd(), new intl.DateFormat.new("yyyy-MM-dd")]);
    this[_dayInputFormatsWithoutYear] = JSArrayOfDateFormatL().of([new intl.DateFormat.MMMd(), new intl.DateFormat.Md(), new intl.DateFormat.MEd(), new intl.DateFormat.MMMEd(), new intl.DateFormat.MMMMd(), new intl.DateFormat.MMMMEEEEd()]);
    this[_monthInputFormatsWithoutDay] = JSArrayOfDateFormatL().of([new intl.DateFormat.yMMM(), new intl.DateFormat.yM(), new intl.DateFormat.yMMMM(), new intl.DateFormat.new("yyyy-MM")]);
    this[_monthInputFormatsMonthOnly] = JSArrayOfDateFormatL().of([new intl.DateFormat.MMM(), new intl.DateFormat.M(), new intl.DateFormat.MMMM()]);
    this[_defaultMonthFormat] = new intl.DateFormat.yMMM();
    this[_defaultDayFormat] = new intl.DateFormat.yMMMd();
    this[_dateFormat] = null;
    this[_maxDate] = new date$.Date.new(9999, 12, 31);
    this[_minDate] = new date$.Date.new(1000, 1, 1);
    this[_date] = null;
    this[_isRangeEnd] = false;
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_controller] = StreamControllerOfDateL().broadcast();
    this[isMonthInput] = false;
    this[_cachedResult] = null;
    this[_cachedInput] = "";
    this[_cachedMinDate] = null;
    this[_cachedMaxDate] = null;
    this[_lastParse] = null;
    this[_input$] = _input;
    this[_clock] = (t0 = clock, t0 == null ? legacyClock : t0);
    this[_disposer].addStreamSubscription(StringL(), this[_input$].onChange.listen(dart.fn(input => this[_parseDate](input, {setAsCurrent: true}), StringLToStringL())));
    this[_input$].checkValid = dart.fn(input => this[_parseDateCached](input), StringLToStringL());
    this[_input$].requiredErrorMsg = date_input.DateInputDirective.invalidDateMsg;
  }).prototype = date_input.DateInputDirective.prototype;
  dart.addTypeTests(date_input.DateInputDirective);
  dart.addTypeCaches(date_input.DateInputDirective);
  date_input.DateInputDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(date_input.DateInputDirective, () => ({
    __proto__: dart.getMethods(date_input.DateInputDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_clampDate]: dart.fnType(dart.legacy(date$.Date), [dart.legacy(date$.Date)]),
    [_parseDateUsingFormat]: dart.fnType(dart.legacy(date$.Date), [dart.legacy(core.String), dart.legacy(intl.DateFormat)]),
    [_parseDateUsingFormatList]: dart.fnType(dart.legacy(date$.Date), [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(intl.DateFormat)))]),
    [_parseDateCached]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    [_parseDate]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)], {setAsCurrent: dart.legacy(core.bool)}, {}),
    [_trySetDate]: dart.fnType(dart.legacy(core.String), [dart.legacy(date$.Date)], {setAsCurrent: dart.legacy(core.bool)}, {}),
    [_guessCentury]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)], {lookahead: dart.legacy(core.int)}, {}),
    [_guessYear]: dart.fnType(dart.legacy(date$.Date), [dart.legacy(date$.Date)]),
    dateIsTooEarlyMsg: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    dateIsTooLateMsg: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(date_input.DateInputDirective, () => ({
    __proto__: dart.getGetters(date_input.DateInputDirective.__proto__),
    dateFormat: dart.legacy(intl.DateFormat),
    maxDate: dart.legacy(date$.Date),
    minDate: dart.legacy(date$.Date),
    date: dart.legacy(date$.Date),
    dateChange: dart.legacy(async.Stream$(dart.legacy(date$.Date)))
  }));
  dart.setSetterSignature(date_input.DateInputDirective, () => ({
    __proto__: dart.getSetters(date_input.DateInputDirective.__proto__),
    dateFormat: dart.legacy(intl.DateFormat),
    maxDate: dart.legacy(date$.Date),
    minDate: dart.legacy(date$.Date),
    date: dart.legacy(date$.Date),
    rangeEnd: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(date_input.DateInputDirective, L0);
  dart.setFieldSignature(date_input.DateInputDirective, () => ({
    __proto__: dart.getFields(date_input.DateInputDirective.__proto__),
    [_inputFormats]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(intl.DateFormat)))),
    [_dayInputFormatsWithoutYear]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(intl.DateFormat)))),
    [_monthInputFormatsWithoutDay]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(intl.DateFormat)))),
    [_monthInputFormatsMonthOnly]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(intl.DateFormat)))),
    [_defaultMonthFormat]: dart.finalFieldType(dart.legacy(intl.DateFormat)),
    [_defaultDayFormat]: dart.finalFieldType(dart.legacy(intl.DateFormat)),
    [_dateFormat]: dart.fieldType(dart.legacy(intl.DateFormat)),
    [_maxDate]: dart.fieldType(dart.legacy(date$.Date)),
    [_minDate]: dart.fieldType(dart.legacy(date$.Date)),
    [_date]: dart.fieldType(dart.legacy(date$.Date)),
    [_isRangeEnd]: dart.fieldType(dart.legacy(core.bool)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_controller]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(date$.Date)))),
    isMonthInput: dart.fieldType(dart.legacy(core.bool)),
    [_clock]: dart.finalFieldType(dart.legacy(clock.Clock)),
    [_input$]: dart.finalFieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_cachedResult]: dart.fieldType(dart.legacy(core.String)),
    [_cachedInput]: dart.fieldType(dart.legacy(core.String)),
    [_cachedMinDate]: dart.fieldType(dart.legacy(date$.Date)),
    [_cachedMaxDate]: dart.fieldType(dart.legacy(date$.Date)),
    [_lastParse]: dart.fieldType(dart.legacy(date$.Date))
  }));
  dart.defineLazy(date_input.DateInputDirective, {
    /*date_input.DateInputDirective.invalidDateMsg*/get invalidDateMsg() {
      return intl.Intl.message("Enter a date", {name: "invalidDateMsg", meaning: "Error message", desc: "Displayed when the user types text into a date input field which " + "isn't recognized as a valid date."});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/date_input", {
    "package:angular_components/material_datepicker/date_input.dart": date_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_input.dart"],"names":[],"mappings":"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","file":"date_input.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_input: date_input
  };
}));

//# sourceMappingURL=date_input.unsound.ddc.js.map
