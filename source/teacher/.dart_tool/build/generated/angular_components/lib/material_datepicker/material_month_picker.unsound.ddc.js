define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/src/material_datepicker/calendar_listener', 'packages/quiver/src/time/clock', 'packages/angular_components/model/date/date', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/intl/intl'], (function load__packages__angular_components__material_datepicker__material_month_picker(dart_sdk, packages__angular_components__model__observable__observable, packages__angular_components__material_datepicker__calendar, packages__angular_components__src__material_datepicker__calendar_listener, packages__quiver__src__time__clock, packages__angular_components__model__date__date, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const calendar_listener = packages__angular_components__src__material_datepicker__calendar_listener.src__material_datepicker__calendar_listener;
  const enum_parsing = packages__angular_components__src__material_datepicker__calendar_listener.src__material_datepicker__enum_parsing;
  const clock$ = packages__quiver__src__time__clock.src__time__clock;
  const date = packages__angular_components__model__date__date.model__date__date;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const intl = packages__intl__intl.intl;
  var material_month_picker = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $append = dartx.append;
  var $clone = dartx.clone;
  var $setAttribute = dartx.setAttribute;
  var $text = dartx.text;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $isEmpty = dartx.isEmpty;
  var $firstWhere = dartx.firstWhere;
  var $querySelectorAll = dartx.querySelectorAll;
  var $classes = dartx.classes;
  var $parent = dartx.parent;
  var $scrollTop = dartx.scrollTop;
  var $children = dartx.children;
  var $clear = dartx.clear;
  var $first = dartx.first;
  var $addEventListener = dartx.addEventListener;
  var $removeEventListener = dartx.removeEventListener;
  var $target = dartx.target;
  var $getAttribute = dartx.getAttribute;
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var ObservableReferenceOfCalendarStateL = () => (ObservableReferenceOfCalendarStateL = dart.constFn(observable.ObservableReference$(CalendarStateL())))();
  var CalendarSelectionModeL = () => (CalendarSelectionModeL = dart.constFn(dart.legacy(calendar.CalendarSelectionMode)))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var DocumentFragmentL = () => (DocumentFragmentL = dart.constFn(dart.legacy(html.DocumentFragment)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var CalendarSelectionL = () => (CalendarSelectionL = dart.constFn(dart.legacy(calendar.CalendarSelection)))();
  var CalendarSelectionLToboolL = () => (CalendarSelectionLToboolL = dart.constFn(dart.fnType(boolL(), [CalendarSelectionL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_month_picker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["boundary", "start"], StringL());
    },
    get C1() {
      return C1 = dart.constList(["boundary", "end"], StringL());
    }
  }, false);
  var _model = dart.privateName(material_month_picker, "_model");
  var _minDate = dart.privateName(material_month_picker, "_minDate");
  var _maxDate = dart.privateName(material_month_picker, "_maxDate");
  var _mode = dart.privateName(material_month_picker, "_mode");
  var _today = dart.privateName(material_month_picker, "_today");
  var _scroller = dart.privateName(material_month_picker, "_scroller");
  var _container = dart.privateName(material_month_picker, "_container");
  var _isResetNeeded = dart.privateName(material_month_picker, "_isResetNeeded");
  var _inputListener = dart.privateName(material_month_picker, "_inputListener");
  var _calendarStream = dart.privateName(material_month_picker, "_calendarStream");
  var _clickListener = dart.privateName(material_month_picker, "_clickListener");
  var _mouseDownListener = dart.privateName(material_month_picker, "_mouseDownListener");
  var _mouseMoveListener = dart.privateName(material_month_picker, "_mouseMoveListener");
  var _mouseLeaveListener = dart.privateName(material_month_picker, "_mouseLeaveListener");
  var _onCalendarChange = dart.privateName(material_month_picker, "_onCalendarChange");
  var _scrollToSelection = dart.privateName(material_month_picker, "_scrollToSelection");
  var _resetHighlights = dart.privateName(material_month_picker, "_resetHighlights");
  var _renderHighlights = dart.privateName(material_month_picker, "_renderHighlights");
  var _renderHover = dart.privateName(material_month_picker, "_renderHover");
  var _monthSelector = dart.privateName(material_month_picker, "_monthSelector");
  var C0;
  var C1;
  var _highlightElements = dart.privateName(material_month_picker, "_highlightElements");
  var _renderRange = dart.privateName(material_month_picker, "_renderRange");
  var _canSelectDate = dart.privateName(material_month_picker, "_canSelectDate");
  var _resetView = dart.privateName(material_month_picker, "_resetView");
  var _addEventListeners = dart.privateName(material_month_picker, "_addEventListeners");
  var _removeEventListeners = dart.privateName(material_month_picker, "_removeEventListeners");
  var _renderAllYears = dart.privateName(material_month_picker, "_renderAllYears");
  var _onClick = dart.privateName(material_month_picker, "_onClick");
  var _onMouseDown = dart.privateName(material_month_picker, "_onMouseDown");
  var _onMouseMove = dart.privateName(material_month_picker, "_onMouseMove");
  var _onMouseLeave = dart.privateName(material_month_picker, "_onMouseLeave");
  var _extractDate = dart.privateName(material_month_picker, "_extractDate");
  material_month_picker.MaterialMonthPickerComponent = class MaterialMonthPickerComponent extends core.Object {
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
    set minDate(newDate) {
      if (dart.equals(newDate, this[_minDate])) return;
      this[_minDate] = newDate;
      this[_isResetNeeded] = true;
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(newDate) {
      if (dart.equals(newDate, this[_maxDate])) return;
      this[_maxDate] = newDate;
      this[_isResetNeeded] = true;
    }
    get maxDate() {
      return this[_maxDate];
    }
    get mode() {
      return this[_mode];
    }
    static _createYearTemplate() {
      let t0, t0$;
      let template = html.DocumentFragment.new();
      material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer.className = "year";
      template[$append](material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer);
      material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle.className = "year-title";
      material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer[$append](material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle);
      let monthTemplate = (t0 = html.DivElement.new(), (() => {
        t0.className = "month";
        return t0;
      })());
      for (let i = 0; i < 12; i = i + 1) {
        let month = HtmlElementL().as(monthTemplate[$clone](true));
        t0$ = month;
        (() => {
          t0$[$setAttribute]("data-month", dart.str(i + 1));
          t0$[$text] = material_month_picker.MaterialMonthPickerComponent._monthNames[$_get](i);
          return t0$;
        })();
        material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer[$append](month);
      }
      return template;
    }
    static _renderYear(year) {
      material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer[$setAttribute]("data-year", dart.toString(year));
      material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle[$text] = dart.toString(year);
      return DocumentFragmentL().as(material_month_picker.MaterialMonthPickerComponent._yearTemplate[$clone](true));
    }
    [_scrollToSelection]() {
      if (dart.test(this.state.selections[$isEmpty])) return;
      let currentSelection = this.state.selections[$firstWhere](dart.fn(s => s.id == this.state.currentSelection, CalendarSelectionLToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
      if (currentSelection == null) return;
      this.scrollToYear(dart.test(this.state.previewAnchoredAtStart) ? currentSelection.end.year : currentSelection.start.year);
    }
    [_onCalendarChange](state) {
      if (state.cause == calendar.CausedBy.external) {
        this[_scrollToSelection]();
      }
      this[_resetHighlights]();
      this[_renderHighlights]();
      this[_renderHover]();
    }
    [_resetHighlights]() {
      for (let element of this[_container][$querySelectorAll](HtmlElementL(), ".year-title")) {
        element.className = "year-title";
      }
      for (let element of this[_container][$querySelectorAll](HtmlElementL(), ".month:not(.disabled)")) {
        element.className = "month";
      }
    }
    [_renderRange](selection) {
      let t0;
      let start = null;
      let end = null;
      start = HtmlElementL().as(this[_container].querySelector(this[_monthSelector](selection.start)));
      if (start == null) return;
      start[$classes].addAll(C0 || CT.C0);
      end = HtmlElementL().as(this[_container].querySelector(this[_monthSelector](selection.end)));
      if (end == null) return;
      end[$classes].addAll(C1 || CT.C1);
      if (dart.equals(start, end)) return;
      let range = (t0 = html.Range.new(), (() => {
        t0.setStartBefore(start);
        t0.setEndAfter(end);
        return t0;
      })());
      this[_highlightElements](start, HtmlElementL().as(end.nextElementSibling));
      let startContainer = HtmlElementL().as(range.startContainer);
      let endContainer = HtmlElementL().as(range.endContainer);
      for (let year = HtmlElementL().as(startContainer.nextElementSibling); year != null && !dart.equals(year, endContainer.nextElementSibling); year = HtmlElementL().as(year.nextElementSibling)) {
        this[_highlightElements](HtmlElementL().as(year.firstChild), HtmlElementL().as(end.nextElementSibling));
      }
    }
    [_highlightElements](start, end) {
      for (let element = start; element != null && !dart.equals(element, end); element = HtmlElementL().as(element.nextElementSibling)) {
        element[$classes].add("highlight");
      }
    }
    [_renderHighlights]() {
      for (let selection of this.state.selections) {
        this[_renderRange](selection);
      }
    }
    [_renderHover]() {
      let element = HtmlElementL().as(this[_container].querySelector(".month.hover"));
      if (element != null) element[$classes].remove("hover");
      if (this[_model].value.preview != null) {
        element = HtmlElementL().as(this[_container].querySelector(this[_monthSelector](this[_model].value.preview)));
        if (element != null) element[$classes].add("hover");
      }
    }
    [_canSelectDate](date) {
      if (date == null) return false;
      return dart.notNull(calendar.compareDatesAtResolution(date, this.minDate, this.state.resolution)) >= 0 && dart.notNull(calendar.compareDatesAtResolution(date, this.maxDate, this.state.resolution)) <= 0;
    }
    [_monthSelector](date) {
      return ".year[" + "data-year" + "=\"" + dart.str(date.year) + "\"] " + ".month[" + "data-month" + "=\"" + dart.str(date.month) + "\"]";
    }
    set container(container) {
      this[_container] = HtmlElementL().as(container);
      this[_scroller] = HtmlElementL().as(container[$parent]);
    }
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
      if (this[_mode] == calendar.CalendarSelectionMode.SINGLE_DATE) {
        this[_inputListener] = new calendar_listener._DateListener.new(this[_model]);
      } else if (this[_mode] == calendar.CalendarSelectionMode.DATE_RANGE) {
        this[_inputListener] = new calendar_listener._RangeListener.new(this[_model], {movingStartMaintainsLength: true});
      }
    }
    ngAfterChanges() {
      if (dart.test(this[_isResetNeeded])) {
        this[_resetView]();
      }
      this[_isResetNeeded] = false;
    }
    ngAfterViewInit() {
      this[_addEventListeners]();
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_calendarStream];
      t0 == null ? null : t0.cancel();
      this[_removeEventListeners]();
    }
    scrollToYear(year) {
      this[_scroller][$scrollTop] = (dart.notNull(year) - dart.notNull(this.minDate.year)) * 144;
    }
    [_renderAllYears]() {
      this[_container][$children][$clear]();
      for (let i = this.minDate.year; dart.notNull(i) <= dart.notNull(this.maxDate.year); i = dart.notNull(i) + 1) {
        this[_container][$append](material_month_picker.MaterialMonthPickerComponent._renderYear(i));
      }
      let element = null;
      for (let i = 1; i < dart.notNull(this.minDate.month); i = i + 1) {
        element = HtmlElementL().as(this[_container].querySelector(this[_monthSelector](new date.Date.new(this.minDate.year, i, 1))));
        element[$classes].add("disabled");
      }
      for (let i = dart.notNull(this.maxDate.month) + 1; i <= 12; i = i + 1) {
        element = HtmlElementL().as(this[_container].querySelector(this[_monthSelector](new date.Date.new(this.maxDate.year, i, 1))));
        element[$classes].add("disabled");
      }
    }
    [_resetView]() {
      let initialDate = dart.test(this.state.selections[$isEmpty]) ? this[_today] : this.state.selections[$first].start;
      this[_renderAllYears]();
      this.scrollToYear(initialDate.year);
      this[_renderHighlights]();
      this[_renderHover]();
    }
    [_addEventListeners]() {
      let t0;
      t0 = this[_container];
      (() => {
        t0[$addEventListener]("click", this[_clickListener] = dart.bind(this, _onClick));
        t0[$addEventListener]("mousedown", this[_mouseDownListener] = dart.bind(this, _onMouseDown));
        t0[$addEventListener]("mousemove", this[_mouseMoveListener] = dart.bind(this, _onMouseMove));
        t0[$addEventListener]("mouseleave", this[_mouseLeaveListener] = dart.bind(this, _onMouseLeave));
        return t0;
      })();
    }
    [_removeEventListeners]() {
      let t0;
      t0 = this[_container];
      (() => {
        t0[$removeEventListener]("click", this[_clickListener]);
        t0[$removeEventListener]("mousedown", this[_mouseDownListener]);
        t0[$removeEventListener]("mousemove", this[_mouseMoveListener]);
        t0[$removeEventListener]("mouseleave", this[_mouseLeaveListener]);
        return t0;
      })();
    }
    [_extractDate](event) {
      let target = event[$target];
      if (!HtmlElementL().is(target)) return null;
      let monthElement = HtmlElementL().as(target);
      let month = monthElement[$getAttribute]("data-month");
      if (month == null) return null;
      let year = monthElement[$parent][$getAttribute]("data-year");
      if (year == null) return null;
      return new date.Date.new(core.int.parse(year), core.int.parse(month), 1);
    }
    [_onClick](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onClick(date);
      }
    }
    [_onMouseDown](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseDown(date);
      }
    }
    [_onMouseMove](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseMove(date);
      }
    }
    [_onMouseLeave](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseLeave(date);
      }
    }
  };
  (material_month_picker.MaterialMonthPickerComponent.new = function(clock, mode) {
    this[_model] = new (ObservableReferenceOfCalendarStateL()).new(new calendar.CalendarState.empty(), {coalesce: true});
    this[_minDate] = null;
    this[_maxDate] = null;
    this[_mode] = calendar.CalendarSelectionMode.NONE;
    this[_today] = null;
    this[_scroller] = null;
    this[_container] = null;
    this[_isResetNeeded] = true;
    this[_inputListener] = new calendar_listener.CalendarListener.noop();
    this[_calendarStream] = null;
    this[_clickListener] = null;
    this[_mouseDownListener] = null;
    this[_mouseMoveListener] = null;
    this[_mouseLeaveListener] = null;
    clock == null ? clock = new clock$.Clock.new() : null;
    let now = clock.now();
    this.minDate = new date.Date.new(dart.notNull(now.year) - 10, 1, 1);
    this.maxDate = new date.Date.new(dart.notNull(now.year) + 10, 12, 31);
    this[_today] = date.Date.today(clock);
    if (mode != null && mode[$isNotEmpty]) {
      this[_mode] = enum_parsing.fuzzyParseEnum(CalendarSelectionModeL(), calendar.CalendarSelectionMode.values, mode);
    }
  }).prototype = material_month_picker.MaterialMonthPickerComponent.prototype;
  dart.addTypeTests(material_month_picker.MaterialMonthPickerComponent);
  dart.addTypeCaches(material_month_picker.MaterialMonthPickerComponent);
  material_month_picker.MaterialMonthPickerComponent[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.AfterChanges, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getMethods(material_month_picker.MaterialMonthPickerComponent.__proto__),
    [_scrollToSelection]: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    [_resetHighlights]: dart.fnType(dart.void, []),
    [_renderRange]: dart.fnType(dart.void, [dart.legacy(calendar.CalendarSelection)]),
    [_highlightElements]: dart.fnType(dart.void, [dart.legacy(html.HtmlElement), dart.legacy(html.HtmlElement)]),
    [_renderHighlights]: dart.fnType(dart.void, []),
    [_renderHover]: dart.fnType(dart.void, []),
    [_canSelectDate]: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    [_monthSelector]: dart.fnType(dart.legacy(core.String), [dart.legacy(date.Date)]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterChanges: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    scrollToYear: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_renderAllYears]: dart.fnType(dart.void, []),
    [_resetView]: dart.fnType(dart.void, []),
    [_addEventListeners]: dart.fnType(dart.void, []),
    [_removeEventListeners]: dart.fnType(dart.void, []),
    [_extractDate]: dart.fnType(dart.legacy(date.Date), [dart.legacy(html.Event)]),
    [_onClick]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onMouseDown]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onMouseMove]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onMouseLeave]: dart.fnType(dart.void, [dart.legacy(html.Event)])
  }));
  dart.setGetterSignature(material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getGetters(material_month_picker.MaterialMonthPickerComponent.__proto__),
    state: dart.legacy(calendar.CalendarState),
    stateChange: dart.legacy(async.Stream$(dart.legacy(calendar.CalendarState))),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    mode: dart.legacy(calendar.CalendarSelectionMode)
  }));
  dart.setSetterSignature(material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getSetters(material_month_picker.MaterialMonthPickerComponent.__proto__),
    state: dart.legacy(calendar.CalendarState),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    container: dart.legacy(html.Element)
  }));
  dart.setLibraryUri(material_month_picker.MaterialMonthPickerComponent, L0);
  dart.setFieldSignature(material_month_picker.MaterialMonthPickerComponent, () => ({
    __proto__: dart.getFields(material_month_picker.MaterialMonthPickerComponent.__proto__),
    [_model]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(calendar.CalendarState)))),
    [_minDate]: dart.fieldType(dart.legacy(date.Date)),
    [_maxDate]: dart.fieldType(dart.legacy(date.Date)),
    [_mode]: dart.fieldType(dart.legacy(calendar.CalendarSelectionMode)),
    [_today]: dart.fieldType(dart.legacy(date.Date)),
    [_scroller]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_container]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_isResetNeeded]: dart.fieldType(dart.legacy(core.bool)),
    [_inputListener]: dart.fieldType(dart.legacy(calendar_listener.CalendarListener)),
    [_calendarStream]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_clickListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_mouseDownListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_mouseMoveListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_mouseLeaveListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event])))
  }));
  dart.defineLazy(material_month_picker.MaterialMonthPickerComponent, {
    /*material_month_picker.MaterialMonthPickerComponent._monthHeight*/get _monthHeight() {
      return 36;
    },
    /*material_month_picker.MaterialMonthPickerComponent._yearHeight*/get _yearHeight() {
      return 144;
    },
    /*material_month_picker.MaterialMonthPickerComponent._yearAttribute*/get _yearAttribute() {
      return "data-year";
    },
    /*material_month_picker.MaterialMonthPickerComponent._monthAttribute*/get _monthAttribute() {
      return "data-month";
    },
    /*material_month_picker.MaterialMonthPickerComponent._monthNames*/get _monthNames() {
      return new intl.DateFormat.new().dateSymbols.SHORTMONTHS;
    },
    /*material_month_picker.MaterialMonthPickerComponent._yearTemplate*/get _yearTemplate() {
      return material_month_picker.MaterialMonthPickerComponent._createYearTemplate();
    },
    /*material_month_picker.MaterialMonthPickerComponent._yearTemplateContainer*/get _yearTemplateContainer() {
      return html.DivElement.new();
    },
    /*material_month_picker.MaterialMonthPickerComponent._yearTemplateTitle*/get _yearTemplateTitle() {
      return html.HeadingElement.h2();
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker", {
    "package:angular_components/material_datepicker/material_month_picker.dart": material_month_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.dart"],"names":[],"mappings":"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","file":"material_month_picker.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker: material_month_picker
  };
}));

//# sourceMappingURL=material_month_picker.unsound.ddc.js.map
