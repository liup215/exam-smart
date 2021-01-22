define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_datepicker/calendar', 'packages/intl/intl', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_datepicker__date_range_input(dart_sdk, packages__angular_components__model__date__date, packages__angular_components__model__observable__observable, packages__angular_components__material_datepicker__calendar, packages__intl__intl, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date$ = packages__angular_components__model__date__date.model__date__date;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const intl = packages__intl__intl.intl;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var date_range_input = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date$.DateRange)))();
  var StreamControllerOfDateRangeL = () => (StreamControllerOfDateRangeL = dart.constFn(async.StreamController$(DateRangeL())))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var ObservableReferenceOfCalendarStateL = () => (ObservableReferenceOfCalendarStateL = dart.constFn(observable.ObservableReference$(CalendarStateL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/date_range_input.dart";
  var _calendarStream = dart.privateName(date_range_input, "_calendarStream");
  var _controller = dart.privateName(date_range_input, "_controller");
  var _isClearRangeSelected = dart.privateName(date_range_input, "_isClearRangeSelected");
  var _range = dart.privateName(date_range_input, "_range");
  var _model = dart.privateName(date_range_input, "_model");
  var _changeDetector$ = dart.privateName(date_range_input, "_changeDetector");
  var _onCalendarChange = dart.privateName(date_range_input, "_onCalendarChange");
  var disabled = dart.privateName(date_range_input, "DateRangeInputComponent.disabled");
  var rangeId = dart.privateName(date_range_input, "DateRangeInputComponent.rangeId");
  var dateFormat = dart.privateName(date_range_input, "DateRangeInputComponent.dateFormat");
  var activeDateFormat = dart.privateName(date_range_input, "DateRangeInputComponent.activeDateFormat");
  var maxDate = dart.privateName(date_range_input, "DateRangeInputComponent.maxDate");
  var minDate = dart.privateName(date_range_input, "DateRangeInputComponent.minDate");
  var startDateMsg = dart.privateName(date_range_input, "DateRangeInputComponent.startDateMsg");
  var endDateMsg = dart.privateName(date_range_input, "DateRangeInputComponent.endDateMsg");
  date_range_input.DateRangeInputComponent = class DateRangeInputComponent extends core.Object {
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get rangeId() {
      return this[rangeId];
    }
    set rangeId(value) {
      this[rangeId] = value;
    }
    get dateFormat() {
      return this[dateFormat];
    }
    set dateFormat(value) {
      this[dateFormat] = value;
    }
    get activeDateFormat() {
      return this[activeDateFormat];
    }
    set activeDateFormat(value) {
      this[activeDateFormat] = value;
    }
    get maxDate() {
      return this[maxDate];
    }
    set maxDate(value) {
      this[maxDate] = value;
    }
    get minDate() {
      return this[minDate];
    }
    set minDate(value) {
      this[minDate] = value;
    }
    get startDateMsg() {
      return this[startDateMsg];
    }
    set startDateMsg(value) {
      super.startDateMsg = value;
    }
    get endDateMsg() {
      return this[endDateMsg];
    }
    set endDateMsg(value) {
      super.endDateMsg = value;
    }
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_calendarStream];
      t0 == null ? null : t0.cancel();
    }
    [_onCalendarChange](state) {
      this[_changeDetector$].markForCheck();
    }
    onStartFocused() {
      if (dart.test(this.disabled)) {
        return;
      }
      if (this.state.currentSelection == this.rangeId && !dart.test(this.state.previewAnchoredAtStart)) {
        return;
      }
      this[_model].value = this.state.select(this.rangeId, {previewAnchoredAtStart: false});
    }
    onEndFocused() {
      if (dart.test(this.disabled)) {
        return;
      }
      if (this.state.currentSelection == this.rangeId && dart.test(this.state.previewAnchoredAtStart)) {
        return;
      }
      this[_model].value = this.state.select(this.rangeId, {previewAnchoredAtStart: true});
    }
    get isStartActive() {
      return this.state.currentSelection == this.rangeId && dart.test(this.state.selections[$isNotEmpty]) && !dart.test(this.state.previewAnchoredAtStart);
    }
    get isEndActive() {
      return this.state.currentSelection == this.rangeId && dart.test(this.state.selections[$isNotEmpty]) && dart.test(this.state.previewAnchoredAtStart);
    }
    get rangeChange() {
      return this[_controller].stream;
    }
    set range(range) {
      let t0, t0$, t0$0;
      if (!dart.equals(range, this[_range]) && (t0 = range, t0 == null ? null : t0.start) != null && (t0$ = range, t0$ == null ? null : t0$.end) != null) {
        this[_controller].add(range);
      }
      this[_range] = (t0$0 = range, t0$0 == null ? new date$.DateRange.new(null, null) : t0$0);
    }
    set isClearRangeSelected(value) {
      this[_isClearRangeSelected] = value;
    }
    get isDateInputRequired() {
      return !dart.test(this[_isClearRangeSelected]);
    }
    get range() {
      return this[_range];
    }
    set state(state) {
      this[_model].value = state;
      if (this[_calendarStream] == null) this[_onCalendarChange](state);
    }
    get state() {
      return this[_model].value;
    }
    get stateChange() {
      return this[_model].stream;
    }
    get start() {
      return this.range.start;
    }
    set start(date) {
      if (!dart.equals(this.range.start, date)) {
        this.range = new date$.DateRange.new(date, this.range.end);
      }
    }
    get end() {
      return this.range.end;
    }
    set end(date) {
      if (!dart.equals(this.range.end, date)) {
        this.range = new date$.DateRange.new(this.range.start, date);
      }
    }
    get startMaxDate() {
      let t0;
      t0 = this.end;
      return t0 == null ? this.maxDate : t0;
    }
    get endMinDate() {
      let t0;
      t0 = this.start;
      return t0 == null ? this.minDate : t0;
    }
    get startDateFormat() {
      return dart.test(this.isStartActive) ? this.activeDateFormat : this.dateFormat;
    }
    get endDateFormat() {
      return dart.test(this.isEndActive) ? this.activeDateFormat : this.dateFormat;
    }
  };
  (date_range_input.DateRangeInputComponent.new = function(_changeDetector) {
    this[_calendarStream] = null;
    this[disabled] = false;
    this[_controller] = StreamControllerOfDateRangeL().broadcast();
    this[_isClearRangeSelected] = false;
    this[_range] = new date$.DateRange.new(null, null);
    this[_model] = new (ObservableReferenceOfCalendarStateL()).new(new calendar.CalendarState.empty(), {coalesce: true});
    this[rangeId] = null;
    this[dateFormat] = new intl.DateFormat.yMMMd();
    this[activeDateFormat] = new intl.DateFormat.yMd();
    this[maxDate] = new date$.Date.new(9999, 12, 31);
    this[minDate] = new date$.Date.new(1000, 1, 1);
    this[startDateMsg] = intl.Intl.message("Start date", {name: "DateRangeInputComponent_startDateMsg", desc: "ARIA label for the input specifying the start of the date range"});
    this[endDateMsg] = intl.Intl.message("End date", {name: "DateRangeInputComponent_endDateMsg", desc: "ARIA label for the input specifying the end of the date range"});
    this[_changeDetector$] = _changeDetector;
    ;
  }).prototype = date_range_input.DateRangeInputComponent.prototype;
  dart.addTypeTests(date_range_input.DateRangeInputComponent);
  dart.addTypeCaches(date_range_input.DateRangeInputComponent);
  date_range_input.DateRangeInputComponent[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getMethods(date_range_input.DateRangeInputComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    onStartFocused: dart.fnType(dart.void, []),
    onEndFocused: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getGetters(date_range_input.DateRangeInputComponent.__proto__),
    isStartActive: dart.legacy(core.bool),
    isEndActive: dart.legacy(core.bool),
    rangeChange: dart.legacy(async.Stream$(dart.legacy(date$.DateRange))),
    isDateInputRequired: dart.legacy(core.bool),
    range: dart.legacy(date$.DateRange),
    state: dart.legacy(calendar.CalendarState),
    stateChange: dart.legacy(async.Stream$(dart.legacy(calendar.CalendarState))),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date),
    startMaxDate: dart.legacy(date$.Date),
    endMinDate: dart.legacy(date$.Date),
    startDateFormat: dart.legacy(intl.DateFormat),
    endDateFormat: dart.legacy(intl.DateFormat)
  }));
  dart.setSetterSignature(date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getSetters(date_range_input.DateRangeInputComponent.__proto__),
    range: dart.legacy(date$.DateRange),
    isClearRangeSelected: dart.legacy(core.bool),
    state: dart.legacy(calendar.CalendarState),
    start: dart.legacy(date$.Date),
    end: dart.legacy(date$.Date)
  }));
  dart.setLibraryUri(date_range_input.DateRangeInputComponent, L0);
  dart.setFieldSignature(date_range_input.DateRangeInputComponent, () => ({
    __proto__: dart.getFields(date_range_input.DateRangeInputComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_calendarStream]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    [_controller]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(date$.DateRange)))),
    [_isClearRangeSelected]: dart.fieldType(dart.legacy(core.bool)),
    [_range]: dart.fieldType(dart.legacy(date$.DateRange)),
    [_model]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(calendar.CalendarState)))),
    rangeId: dart.fieldType(dart.legacy(core.String)),
    dateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    activeDateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    maxDate: dart.fieldType(dart.legacy(date$.Date)),
    minDate: dart.fieldType(dart.legacy(date$.Date)),
    startDateMsg: dart.finalFieldType(dart.legacy(core.String)),
    endDateMsg: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input", {
    "package:angular_components/material_datepicker/date_range_input.dart": date_range_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmEO;;;;;;IAmGE;;;;;;IA0BI;;;;;;IAMA;;;;;;IAUN;;;;;;IAKA;;;;;;IAEC;;;;;;IAIA;;;;;;;AApJqD,MAAzD,wBAAkB,AAAO,AAAO,qCAAO;IACzC;;;AAI2B,WAAzB;0BAAiB;IACnB;wBAEqC;AACL,MAA9B,AAAgB;IAClB;;AAGE,oBAAI;AACF;;AAEF,UAAI,AAAM,AAAiB,+BAAG,2BAAY,AAAM;AAC9C;;AAEiE,MAAnE,AAAO,qBAAQ,AAAM,kBAAO,uCAAiC;IAC/D;;AAGE,oBAAI;AACF;;AAEF,UAAI,AAAM,AAAiB,+BAAG,0BAAW,AAAM;AAC7C;;AAEgE,MAAlE,AAAO,qBAAQ,AAAM,kBAAO,uCAAiC;IAC/D;;AAGI,YAAA,AAAM,AAAiB,AACK,gCADF,0BAC1B,AAAM,AAAW,kDAChB,AAAM;IAAsB;;AAG7B,YAAA,AAAM,AAAiB,AACK,gCADF,0BAC1B,AAAM,AAAW,iDACjB,AAAM;IAAsB;;AAKK,YAAA,AAAY;IAAM;cAKnC;;AAClB,uBAAI,KAAK,EAAI,uBAAU,KAAK,eAAL,OAAO,aAAS,eAAQ,KAAK,gBAAL,OAAO,YAAO;AAErC,QAAtB,AAAY,sBAAI,KAAK;;AAEgB,MAAvC,gBAAe,OAAN,KAAK,UAAL,OAAS,wBAAU,MAAM;IACpC;6BAQ8B;AACC,MAA7B,8BAAwB,KAAK;IAC/B;;AAKgC,wBAAC;IAAqB;;AAG/B;IAAM;cAKL;AACF,MAApB,AAAO,qBAAQ,KAAK;AACpB,UAAI,AAAgB,yBAAG,MAAM,AAAwB,wBAAN,KAAK;IACtD;;AAE2B,YAAA,AAAO;IAAK;;AAOE,YAAA,AAAO;IAAM;;AAMpC,YAAA,AAAM;IAAK;cACd;AACb,uBAAI,AAAM,kBAAS,IAAI;AACa,QAAlC,aAAQ,wBAAU,IAAI,EAAE,AAAM;;IAElC;;AAEgB,YAAA,AAAM;IAAG;YACZ;AACX,uBAAI,AAAM,gBAAO,IAAI;AACiB,QAApC,aAAQ,wBAAU,AAAM,kBAAO,IAAI;;IAEvC;;;AAMyB;0BAAO;IAAO;;;AAChB;0BAAS;IAAO;;AAcnC,6CAAgB,wBAAmB;IAAU;;AAEjB,2CAAc,wBAAmB;IAAU;;2DA9I9C;IAFV;IAQd,iBAAW;IAkDV,oBAAc;IAYf,8BAAwB;IAenB,eAAS,wBAAU,MAAM;IAYM,eACrC,gDAAkC,+CAAmB;IASlD;IA0BI,mBAAwB;IAMxB,yBAA8B;IAUpC,gBAAU,mBAAK,UAAyB;IAKxC,gBAAU,mBAAK,SAAwB;IAEtC,qBAAoB,kBAAQ,qBACxB,8CACA;IAEJ,mBAAkB,kBAAQ,mBACtB,4CACA;IAhKmB;;EAAgB","file":"date_range_input.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input: date_range_input
  };
}));

//# sourceMappingURL=date_range_input.unsound.ddc.js.map
