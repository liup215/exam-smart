define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/date/date', 'packages/angular_components/src/material_datepicker/calendar_listener', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/intl/intl'], (function load__packages__angular_components__material_datepicker__material_calendar_picker(dart_sdk, packages__angular_components__model__observable__observable, packages__angular_components__material_datepicker__calendar, packages__angular_components__model__date__date, packages__angular_components__src__material_datepicker__calendar_listener, packages__angular_components__utils__browser__feature_detector__feature_detector, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const date = packages__angular_components__model__date__date.model__date__date;
  const calendar_listener = packages__angular_components__src__material_datepicker__calendar_listener.src__material_datepicker__calendar_listener;
  const enum_parsing = packages__angular_components__src__material_datepicker__calendar_listener.src__material_datepicker__enum_parsing;
  const feature_detector = packages__angular_components__utils__browser__feature_detector__feature_detector.utils__browser__feature_detector__feature_detector;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const intl = packages__intl__intl.intl;
  var material_calendar_picker = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $remainder = dartx.remainder;
  var $append = dartx.append;
  var $appendText = dartx.appendText;
  var $clone = dartx.clone;
  var $ceil = dartx.ceil;
  var $target = dartx.target;
  var $getAttribute = dartx.getAttribute;
  var $split = dartx.split;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $height = dartx.height;
  var $scrollTop = dartx.scrollTop;
  var $parent = dartx.parent;
  var $text = dartx.text;
  var $toString = dartx.toString;
  var $setAttribute = dartx.setAttribute;
  var $isEmpty = dartx.isEmpty;
  var $contains = dartx.contains;
  var $where = dartx.where;
  var $clear = dartx.clear;
  var $first = dartx.first;
  var $last = dartx.last;
  var $classes = dartx.classes;
  var $querySelectorAll = dartx.querySelectorAll;
  var $length = dartx.length;
  var $firstWhere = dartx.firstWhere;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $removeEventListener = dartx.removeEventListener;
  var $children = dartx.children;
  var $addEventListener = dartx.addEventListener;
  var $sublist = dartx.sublist;
  var $addAll = dartx.addAll;
  var $replaceFirst = dartx.replaceFirst;
  var $_equals = dartx._equals;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $truncate = dartx.truncate;
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var ObservableReferenceOfCalendarStateL = () => (ObservableReferenceOfCalendarStateL = dart.constFn(observable.ObservableReference$(CalendarStateL())))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var StreamControllerOfDateL = () => (StreamControllerOfDateL = dart.constFn(async.StreamController$(DateL())))();
  var _MonthL = () => (_MonthL = dart.constFn(dart.legacy(material_calendar_picker._Month)))();
  var JSArrayOf_MonthL = () => (JSArrayOf_MonthL = dart.constFn(_interceptors.JSArray$(_MonthL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var CalendarSelectionModeL = () => (CalendarSelectionModeL = dart.constFn(dart.legacy(calendar.CalendarSelectionMode)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var _MonthLToboolL = () => (_MonthLToboolL = dart.constFn(dart.fnType(boolL(), [_MonthL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var CalendarSelectionL = () => (CalendarSelectionL = dart.constFn(dart.legacy(calendar.CalendarSelection)))();
  var JSArrayOfCalendarSelectionL = () => (JSArrayOfCalendarSelectionL = dart.constFn(_interceptors.JSArray$(CalendarSelectionL())))();
  var CalendarSelectionLToboolL = () => (CalendarSelectionLToboolL = dart.constFn(dart.fnType(boolL(), [CalendarSelectionL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var intLTointL = () => (intLTointL = dart.constFn(dart.fnType(intL(), [intL()])))();
  var intLToStringL = () => (intLToStringL = dart.constFn(dart.fnType(StringL(), [intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_calendar_picker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4], intL());
    }
  }, false);
  var _model = dart.privateName(material_calendar_picker, "_model");
  var _visibleMonthController = dart.privateName(material_calendar_picker, "_visibleMonthController");
  var _allowHighlightUpdates = dart.privateName(material_calendar_picker, "_allowHighlightUpdates");
  var _minDate = dart.privateName(material_calendar_picker, "_minDate");
  var _minMonth = dart.privateName(material_calendar_picker, "_minMonth");
  var _maxDate = dart.privateName(material_calendar_picker, "_maxDate");
  var _maxMonth = dart.privateName(material_calendar_picker, "_maxMonth");
  var _compact = dart.privateName(material_calendar_picker, "_compact");
  var _movingStartMaintainsLength = dart.privateName(material_calendar_picker, "_movingStartMaintainsLength");
  var _mode = dart.privateName(material_calendar_picker, "_mode");
  var _today = dart.privateName(material_calendar_picker, "_today");
  var _isRenderScheduled = dart.privateName(material_calendar_picker, "_isRenderScheduled");
  var _isResetNeeded = dart.privateName(material_calendar_picker, "_isResetNeeded");
  var _isInitialized = dart.privateName(material_calendar_picker, "_isInitialized");
  var _renderedMonths = dart.privateName(material_calendar_picker, "_renderedMonths");
  var _renderedOffsets = dart.privateName(material_calendar_picker, "_renderedOffsets");
  var _scroller = dart.privateName(material_calendar_picker, "_scroller");
  var _container = dart.privateName(material_calendar_picker, "_container");
  var _scrollTop = dart.privateName(material_calendar_picker, "_scrollTop");
  var _inputListener = dart.privateName(material_calendar_picker, "_inputListener");
  var _calendarStream = dart.privateName(material_calendar_picker, "_calendarStream");
  var _scrollListener = dart.privateName(material_calendar_picker, "_scrollListener");
  var _clickListener = dart.privateName(material_calendar_picker, "_clickListener");
  var _mouseDownListener = dart.privateName(material_calendar_picker, "_mouseDownListener");
  var _mouseMoveListener = dart.privateName(material_calendar_picker, "_mouseMoveListener");
  var _mouseOutListener = dart.privateName(material_calendar_picker, "_mouseOutListener");
  var _onCalendarChange = dart.privateName(material_calendar_picker, "_onCalendarChange");
  var _initInputListener = dart.privateName(material_calendar_picker, "_initInputListener");
  var _rowHeightPx = dart.privateName(material_calendar_picker, "_rowHeightPx");
  var _monthHeight = dart.privateName(material_calendar_picker, "_monthHeight");
  var _rangeHeight = dart.privateName(material_calendar_picker, "_rangeHeight");
  var _monthAtOffset = dart.privateName(material_calendar_picker, "_monthAtOffset");
  var _canSelectDate = dart.privateName(material_calendar_picker, "_canSelectDate");
  var _extractDate = dart.privateName(material_calendar_picker, "_extractDate");
  var _monthsSurrounding = dart.privateName(material_calendar_picker, "_monthsSurrounding");
  var _resetContainerHeight = dart.privateName(material_calendar_picker, "_resetContainerHeight");
  var _scrollToMonth = dart.privateName(material_calendar_picker, "_scrollToMonth");
  var _setText = dart.privateName(material_calendar_picker, "_setText");
  var _dateAttributeValue = dart.privateName(material_calendar_picker, "_dateAttributeValue");
  var _renderMonth = dart.privateName(material_calendar_picker, "_renderMonth");
  var _renderHighlights = dart.privateName(material_calendar_picker, "_renderHighlights");
  var _renderToday = dart.privateName(material_calendar_picker, "_renderToday");
  var _renderHover = dart.privateName(material_calendar_picker, "_renderHover");
  var _renderVisible = dart.privateName(material_calendar_picker, "_renderVisible");
  var _slotSelector = dart.privateName(material_calendar_picker, "_slotSelector");
  var _highlightElements = dart.privateName(material_calendar_picker, "_highlightElements");
  var _renderRange = dart.privateName(material_calendar_picker, "_renderRange");
  var _highlightElement = dart.privateName(material_calendar_picker, "_highlightElement");
  var _resetHighlights = dart.privateName(material_calendar_picker, "_resetHighlights");
  var _ensureSelectionIsVisible = dart.privateName(material_calendar_picker, "_ensureSelectionIsVisible");
  var _initialDate = dart.privateName(material_calendar_picker, "_initialDate");
  var _resetView = dart.privateName(material_calendar_picker, "_resetView");
  var _initializeEvents = dart.privateName(material_calendar_picker, "_initializeEvents");
  var _initializePanels = dart.privateName(material_calendar_picker, "_initializePanels");
  var _onScroll = dart.privateName(material_calendar_picker, "_onScroll");
  var _onClick = dart.privateName(material_calendar_picker, "_onClick");
  var _onMouseDown = dart.privateName(material_calendar_picker, "_onMouseDown");
  var _onMouseMove = dart.privateName(material_calendar_picker, "_onMouseMove");
  var _onMouseOut = dart.privateName(material_calendar_picker, "_onMouseOut");
  material_calendar_picker.MaterialCalendarPickerComponent = class MaterialCalendarPickerComponent extends core.Object {
    static _rotateDayOfWeek(numDays, dayOfWeek) {
      return dart.asNullableInt((dart.notNull(dayOfWeek) + dart.notNull(numDays))[$remainder](7));
    }
    static _dayOfWeekIndex(dayOfWeek) {
      return material_calendar_picker.MaterialCalendarPickerComponent._rotateDayOfWeek(-dart.notNull(material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek), dayOfWeek);
    }
    static _createMonthTemplate() {
      let t0, t0$, t0$0;
      let template = html.DocumentFragment.new();
      let container = (t0 = html.DivElement.new(), (() => {
        t0.className = "month";
        return t0;
      })());
      template[$append](container);
      let title = (t0$ = html.HeadingElement.h2(), (() => {
        t0$.className = "month-title";
        t0$[$appendText]("");
        return t0$;
      })());
      container[$append](title);
      let slotTemplate = (t0$0 = html.DivElement.new(), (() => {
        t0$0.className = "day-slot";
        t0$0[$appendText]("");
        return t0$0;
      })());
      let slot = null;
      for (let i = 0; i < 6 * 7; i = i + 1) {
        slot = DivElementL().as(slotTemplate[$clone](true));
        container[$append](slot);
      }
      return template;
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
    get visibleMonth() {
      return this[_visibleMonthController].stream;
    }
    set allowHighlightUpdates(value) {
      let nowAllowed = value;
      if (!dart.equals(this[_allowHighlightUpdates], nowAllowed)) {
        this[_allowHighlightUpdates] = nowAllowed;
        if (dart.test(nowAllowed)) this[_onCalendarChange](this[_model].value);
      }
    }
    get allowHighlightUpdates() {
      return this[_allowHighlightUpdates];
    }
    set minDate(newDate) {
      if (dart.equals(newDate, this[_minDate])) return;
      this[_minDate] = newDate;
      this[_minMonth] = new material_calendar_picker._Month.fromDate(this[_minDate]);
      this[_isResetNeeded] = true;
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(newDate) {
      if (dart.equals(newDate, this[_maxDate])) return;
      this[_maxDate] = newDate;
      this[_maxMonth] = new material_calendar_picker._Month.fromDate(this[_maxDate]);
      this[_isResetNeeded] = true;
    }
    get maxDate() {
      return this[_maxDate];
    }
    set compact(value) {
      this[_compact] = value;
      this[_isResetNeeded] = true;
    }
    get compact() {
      return this[_compact];
    }
    set movingStartMaintainsLength(value) {
      this[_movingStartMaintainsLength] = value;
      if (this[_inputListener] != null) {
        this[_initInputListener]();
      }
    }
    get mode() {
      return this[_mode];
    }
    get dayNames() {
      return material_calendar_picker.MaterialCalendarPickerComponent._dayNames;
    }
    get [_rowHeightPx]() {
      return dart.test(this.compact) ? 36 : 48;
    }
    [_monthHeight](month) {
      let startOffset = material_calendar_picker.MaterialCalendarPickerComponent._dayOfWeekIndex(month.startDay);
      if (dart.notNull(startOffset) < 3) startOffset = dart.notNull(startOffset) + 7;
      let slots = dart.notNull(startOffset) + dart.notNull(month.days);
      let rows = (slots / 7)[$ceil]();
      return rows * dart.notNull(this[_rowHeightPx]);
    }
    [_rangeHeight](start, end) {
      if (dart.test(end['<'](start))) return -dart.notNull(this[_rangeHeight](end, start));
      let total = 0;
      for (let month = start.copy(); dart.test(month['<'](end)); month.next()) {
        total = total + dart.notNull(this[_monthHeight](month));
      }
      return total;
    }
    [_monthAtOffset](offset) {
      let month = null;
      let total = 0;
      for (let t0 = month = this[_minMonth].copy(); total < dart.notNull(offset) && dart.test(month['<'](this[_maxMonth])); month.next()) {
        total = total + dart.notNull(this[_monthHeight](month));
      }
      let previousMonthVisiblePx = total - dart.notNull(offset);
      if (previousMonthVisiblePx / dart.notNull(this[_monthHeight](month.add(-1))) > 0.5) {
        month.prev();
      }
      return month;
    }
    [_canSelectDate](date) {
      if (date == null) return false;
      return dart.test(date['>='](this.minDate)) && dart.test(date['<='](this.maxDate));
    }
    [_extractDate](event) {
      let slot = event[$target];
      if (!HtmlElementL().is(slot)) return null;
      let dateText = HtmlElementL().as(slot)[$getAttribute]("data-date");
      if (dateText == null) return null;
      let parts = dateText[$split]("-");
      let year = core.int.parse(parts[$_get](0));
      let month = core.int.parse(parts[$_get](1));
      let day = core.int.parse(parts[$_get](2));
      return new date.Date.new(year, month, day);
    }
    [_monthsSurrounding](baseline) {
      let start = baseline.add(-2);
      let end = baseline.add(2);
      let result = JSArrayOf_MonthL().of([]);
      for (let month = start; dart.test(month['<='](end)); month.next()) {
        result[$add](month.copy());
      }
      return result;
    }
    [_resetContainerHeight]() {
      let totalHeight = dart.notNull(this[_rangeHeight](this[_minMonth], this[_maxMonth])) + dart.notNull(this[_monthHeight](this[_maxMonth]));
      this[_container].style[$height] = dart.str(totalHeight) + "px";
    }
    [_scrollToMonth](month) {
      this[_container][$parent][$scrollTop] = this[_rangeHeight](this[_minMonth], month);
    }
    scrollToDate(date) {
      this[_scrollToMonth](new material_calendar_picker._Month.fromDate(date));
    }
    [_setText](slot, text) {
      if (dart.test(feature_detector.isEdge)) {
        slot[$text] = text;
      } else {
        js_util.setProperty(slot.firstChild, "nodeValue", text);
      }
    }
    [_renderMonth](month, container) {
      let startIndex = material_calendar_picker.MaterialCalendarPickerComponent._dayOfWeekIndex(month.startDay);
      if (dart.notNull(startIndex) < 3) startIndex = dart.notNull(startIndex) + 7;
      let daysInMonth = month.days;
      let title = HtmlElementL().as(container.firstChild);
      this[_setText](title, month.title);
      let isFirstMonth = dart.equals(month, this[_minMonth]);
      let isLastMonth = dart.equals(month, this[_maxMonth]);
      let slot = HtmlElementL().as(title.nextElementSibling);
      for (let i = 1; i <= 7 * 6; i = i + 1) {
        let day = i - dart.notNull(startIndex);
        if (day <= 0 || day > dart.notNull(daysInMonth)) {
          slot.className = "day-slot invisible";
        } else if (isFirstMonth && day < dart.notNull(this[_minDate].day) || isLastMonth && day > dart.notNull(this[_maxDate].day)) {
          slot.className = "day-slot disabled";
          if (dart.test(feature_detector.isFirefox)) {
            this[_setText](slot, day[$toString]());
          }
        } else {
          slot.className = "day-slot visible";
          slot[$setAttribute]("data-date", this[_dateAttributeValue](month.year, month.month, day));
          if (dart.test(feature_detector.isFirefox)) {
            this[_setText](slot, day[$toString]());
          }
        }
        slot = HtmlElementL().as(slot.nextElementSibling);
      }
    }
    [_renderVisible]() {
      let baseline = null;
      let offset = null;
      if (dart.test(this[_renderedMonths][$isEmpty])) {
        baseline = this[_monthAtOffset](this[_scrollTop]);
        offset = this[_rangeHeight](this[_minMonth], baseline.add(-2));
      } else {
        offset = this[_renderedOffsets][$_get](2);
        if (dart.notNull(offset) >= dart.notNull(this[_scrollTop])) {
          baseline = this[_renderedMonths][$_get](2).copy();
          while (dart.notNull(offset) >= dart.notNull(this[_scrollTop]) && dart.test(baseline['>='](this[_minMonth]))) {
            baseline.prev();
            offset = dart.notNull(offset) - dart.notNull(this[_monthHeight](baseline));
          }
        }
        for (let t1 = baseline == null ? baseline = this[_renderedMonths][$_get](2).copy() : null; dart.notNull(offset) < dart.notNull(this[_scrollTop]) && dart.test(baseline['<'](this[_maxMonth])); baseline.next()) {
          offset = dart.notNull(offset) + dart.notNull(this[_monthHeight](baseline));
        }
        let previousMonthVisiblePx = dart.notNull(offset) - dart.notNull(this[_scrollTop]);
        let previousMonthHeight = this[_monthHeight](baseline.add(-1));
        if (previousMonthVisiblePx / dart.notNull(previousMonthHeight) > 0.5) {
          offset = dart.notNull(offset) - dart.notNull(previousMonthHeight);
          baseline.prev();
        }
        offset = dart.notNull(offset) + dart.notNull(this[_rangeHeight](baseline, baseline.add(-2)));
      }
      let visibleMonths = this[_monthsSurrounding](baseline);
      let neededMonths = visibleMonths[$where](dart.fn(m => !dart.test(this[_renderedMonths][$contains](m)), _MonthLToboolL()));
      if (dart.test(neededMonths[$isEmpty])) return;
      this[_renderedOffsets][$clear]();
      let panel = HtmlElementL().as(this[_container].firstChild);
      for (let month of visibleMonths) {
        this[_renderMonth](month, panel);
        panel.style.cssText = "transform: translateY(" + dart.str(offset) + "px)";
        this[_renderedOffsets][$add](offset);
        panel = HtmlElementL().as(panel.nextElementSibling);
        offset = dart.notNull(offset) + dart.notNull(this[_monthHeight](month));
      }
      if (dart.test(feature_detector.isEdge)) {
        let fragment = html.DocumentFragment.new();
        for (let month = HtmlElementL().as(this[_container].firstChild); month != null; month = HtmlElementL().as(this[_container].firstChild)) {
          fragment[$append](month);
        }
        this[_container][$append](fragment);
      }
      this[_renderedMonths] = visibleMonths;
      this[_renderHighlights]();
      this[_renderToday]();
      this[_renderHover]();
      this[_visibleMonthController].add(baseline.start);
    }
    [_slotSelector](date) {
      let value = this[_dateAttributeValue](date.year, date.month, date.day);
      return ".day-slot.visible[" + "data-date" + "=\"" + dart.str(value) + "\"]";
    }
    [_dateAttributeValue](year, month, day) {
      return dart.str(year) + "-" + dart.str(month) + "-" + dart.str(day);
    }
    [_renderRange](selection) {
      let t2;
      if (dart.test(selection.start['>'](selection.end))) return;
      let start = null;
      let end = null;
      let startMonth = new material_calendar_picker._Month.fromDate(selection.start);
      let endMonth = new material_calendar_picker._Month.fromDate(selection.end);
      let highlightClass = "highlight-" + dart.str(selection.id);
      let boundaryClass = "boundary-" + dart.str(selection.id);
      if (dart.test(startMonth['>='](this[_renderedMonths][$first])) && dart.test(startMonth['<='](this[_renderedMonths][$last]))) {
        start = HtmlElementL().as(this[_container].querySelector(this[_slotSelector](selection.start)));
        if (start == null) return;
        start[$classes].add("boundary");
        start[$classes].add(boundaryClass);
        start[$classes].add("start");
      } else if (dart.test(startMonth['<'](this[_renderedMonths][$first])) && dart.test(endMonth['>='](this[_renderedMonths][$first]))) {
        start = HtmlElementL().as(this[_container].querySelector(".month:first-of-type .day-slot:first-of-type"));
      }
      if (dart.test(endMonth['>='](this[_renderedMonths][$first])) && dart.test(endMonth['<='](this[_renderedMonths][$last]))) {
        end = HtmlElementL().as(this[_container].querySelector(this[_slotSelector](selection.end)));
        if (end == null) return;
        end[$classes].add("boundary");
        end[$classes].add(boundaryClass);
        end[$classes].add("end");
      } else if (dart.test(startMonth['<='](this[_renderedMonths][$last])) && dart.test(endMonth['>'](this[_renderedMonths][$last]))) {
        end = HtmlElementL().as(this[_container].querySelector(".month:last-of-type .day-slot:last-of-type"));
      }
      if (start == null && end == null) return;
      if (selection.id == this.state.currentSelection) {
        if (dart.test(this.state.previewAnchoredAtStart) && end != null) {
          end[$classes].add("active");
        } else if (start != null) {
          start[$classes].add("active");
        }
      }
      let range = (t2 = html.Range.new(), (() => {
        t2.setStartBefore(start);
        t2.setEndAfter(end);
        return t2;
      })());
      this[_highlightElements](start, HtmlElementL().as(end.nextElementSibling), highlightClass);
      let startContainer = HtmlElementL().as(range.startContainer);
      let endContainer = HtmlElementL().as(range.endContainer);
      for (let month = HtmlElementL().as(startContainer.nextElementSibling); month != null && !dart.equals(month, endContainer.nextElementSibling); month = HtmlElementL().as(month.nextElementSibling)) {
        this[_highlightElements](HtmlElementL().as(month.firstChild), HtmlElementL().as(end.nextElementSibling), highlightClass);
      }
    }
    [_highlightElements](start, end, highlightClass) {
      for (let current = start; current != null && !dart.equals(current, end); current = HtmlElementL().as(current.nextElementSibling)) {
        this[_highlightElement](current, highlightClass);
      }
    }
    [_highlightElement](el, highlightClass) {
      el[$classes].add("highlight");
      el[$classes].add(highlightClass);
    }
    [_resetHighlights]() {
      let classes = JSArrayOfStringL().of(["visible", "invisible", "hidden"]);
      for (let className of classes) {
        let selector = ".day-slot." + dart.str(className);
        for (let el of this[_container][$querySelectorAll](HtmlElementL(), selector)) {
          el.className = "day-slot " + dart.str(className);
        }
      }
    }
    [_renderHighlights]() {
      let selections = JSArrayOfCalendarSelectionL().of([]);
      for (let selection of this.state.selections) {
        selections[$add](selection.clamp({min: this.minDate, max: this.maxDate}));
      }
      if (this.state.preview != null && dart.test(this.state.has(this.state.currentSelection))) {
        let previewState = this.state.confirmPreview({movingStartMaintainsLength: this[_movingStartMaintainsLength]});
        let previewRange = previewState.selection(previewState.currentSelection).clamp({min: this.minDate, max: this.maxDate});
        selections[$add](new calendar.CalendarSelection.new("preview", previewRange.start, previewRange.end));
      }
      for (let selection of selections) {
        this[_renderRange](selection);
      }
      if (dart.notNull(selections[$length]) <= 1) return;
      for (let i = 0; i < dart.notNull(selections[$length]); i = i + 1) {
        for (let j = 0; j < dart.notNull(selections[$length]); j = j + 1) {
          if (i === j) continue;
          let a = selections[$_get](i);
          let b = selections[$_get](j);
          if (dart.test(a.contains(b.start)) && dart.test(a.start['<'](b.start))) {
            let start = HtmlElementL().as(this[_container].querySelector(this[_slotSelector](b.start)));
            if (start != null) {
              start[$classes].add("left");
              start[$classes].add("left-" + dart.str(a.id));
            }
          }
          if (dart.test(a.contains(b.end)) && dart.test(a.end['>'](b.end))) {
            let end = HtmlElementL().as(this[_container].querySelector(this[_slotSelector](b.end)));
            if (end != null) {
              end[$classes].add("right");
              end[$classes].add("right-" + dart.str(a.id));
            }
          }
        }
      }
    }
    [_renderToday]() {
      let el = HtmlElementL().as(this[_container].querySelector(".day-slot.today"));
      if (el != null) el[$classes].remove("today");
      el = HtmlElementL().as(this[_container].querySelector(this[_slotSelector](this[_today])));
      if (el != null) el[$classes].add("today");
    }
    [_renderHover]() {
      let el = HtmlElementL().as(this[_container].querySelector(".day-slot.hover"));
      if (el != null) el[$classes].remove("hover");
      if (this[_model].value.preview != null) {
        el = HtmlElementL().as(this[_container].querySelector(this[_slotSelector](this[_model].value.preview)));
        if (el != null) el[$classes].add("hover");
      }
    }
    [_ensureSelectionIsVisible]() {
      if (dart.test(this[_renderedMonths][$isEmpty])) return;
      if (dart.test(this.state.selections[$isEmpty])) return;
      let currentSelection = this.state.selections[$firstWhere](dart.fn(s => s.id == this.state.currentSelection, CalendarSelectionLToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
      if (currentSelection == null) return;
      let startMonth = new material_calendar_picker._Month.fromDate(currentSelection.start);
      let endMonth = new material_calendar_picker._Month.fromDate(currentSelection.end);
      let middleMonth = this[_renderedMonths][$_get](2);
      if (dart.test(startMonth['>'](middleMonth)) || dart.test(endMonth['<'](middleMonth))) {
        this[_scrollToMonth](dart.test(this.state.previewAnchoredAtStart) ? endMonth : startMonth);
      }
    }
    [_onCalendarChange](state) {
      if (dart.test(this.allowHighlightUpdates)) {
        if (state.cause == calendar.CausedBy.external) {
          this[_ensureSelectionIsVisible]();
        }
        if (!dart.test(this[_isRenderScheduled])) {
          html.window[$requestAnimationFrame](dart.fn(_ => {
            this[_resetHighlights]();
            this[_renderHighlights]();
            this[_renderToday]();
            this[_renderHover]();
          }, numLToNull()));
        }
      }
    }
    get [_initialDate]() {
      return dart.test(this.state.selections[$isEmpty]) ? this[_today] : this.state.selections[$_get](0).start;
    }
    set container(container) {
      this[_container] = container;
      this[_scroller] = HtmlElementL().as(container[$parent]);
    }
    ngOnInit() {
      this[_calendarStream] = this[_model].stream.listen(dart.bind(this, _onCalendarChange));
      this[_initInputListener]();
    }
    [_initInputListener]() {
      if (this[_mode] == calendar.CalendarSelectionMode.SINGLE_DATE) {
        this[_inputListener] = new calendar_listener._DateListener.new(this[_model]);
      }
      if (this[_mode] == calendar.CalendarSelectionMode.DATE_RANGE) {
        this[_inputListener] = new calendar_listener._RangeListener.new(this[_model], {movingStartMaintainsLength: this[_movingStartMaintainsLength]});
      }
    }
    ngAfterChanges() {
      if (dart.test(this[_isInitialized]) && dart.test(this[_isResetNeeded])) {
        this[_resetView]();
      }
      this[_isResetNeeded] = false;
    }
    ngAfterViewInit() {
      this[_initializeEvents]();
      this[_resetView]();
      this[_isInitialized] = true;
    }
    ngOnDestroy() {
      let t2, t2$;
      t2 = this[_calendarStream];
      t2 == null ? null : t2.cancel();
      this[_scroller][$removeEventListener]("scroll", this[_scrollListener]);
      t2$ = this[_container];
      (() => {
        t2$[$removeEventListener]("click", this[_clickListener]);
        t2$[$removeEventListener]("mousedown", this[_mouseDownListener]);
        t2$[$removeEventListener]("mousemove", this[_mouseMoveListener]);
        t2$[$removeEventListener]("mouseout", this[_mouseOutListener]);
        return t2$;
      })();
    }
    [_initializePanels]() {
      if (!dart.test(feature_detector.isFirefox)) {
        this[_container][$classes].add("not-firefox");
      }
      this[_container][$children][$clear]();
      this[_renderedMonths][$clear]();
      this[_renderedOffsets][$clear]();
      for (let i = -2; i <= 2; i = i + 1) {
        this[_container][$append](material_calendar_picker.MaterialCalendarPickerComponent._monthTemplate[$clone](true));
      }
      this[_renderVisible]();
    }
    [_resetView]() {
      this[_isRenderScheduled] = true;
      this[_resetContainerHeight]();
      this[_scrollToMonth](new material_calendar_picker._Month.fromDate(this[_initialDate]));
      html.window[$requestAnimationFrame](dart.fn(_ => {
        this[_initializePanels]();
        this[_isRenderScheduled] = false;
      }, numLToNull()));
    }
    [_initializeEvents]() {
      let t2;
      this[_scroller][$addEventListener]("scroll", this[_scrollListener] = dart.bind(this, _onScroll));
      t2 = this[_container];
      (() => {
        t2[$addEventListener]("click", this[_clickListener] = dart.bind(this, _onClick));
        t2[$addEventListener]("mousedown", this[_mouseDownListener] = dart.bind(this, _onMouseDown));
        t2[$addEventListener]("mousemove", this[_mouseMoveListener] = dart.bind(this, _onMouseMove));
        t2[$addEventListener]("mouseout", this[_mouseOutListener] = dart.bind(this, _onMouseOut));
        return t2;
      })();
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
    [_onMouseOut](event) {
      let date = this[_extractDate](event);
      if (dart.test(this[_canSelectDate](date))) {
        this[_inputListener].onMouseLeave(date);
      }
    }
    [_onScroll](event) {
      this[_scrollTop] = this[_scroller][$scrollTop];
      if (dart.test(this[_isRenderScheduled])) return;
      this[_isRenderScheduled] = true;
      html.window[$requestAnimationFrame](dart.fn(_ => {
        this[_renderVisible]();
        this[_isRenderScheduled] = false;
      }, numLToNull()));
    }
  };
  (material_calendar_picker.MaterialCalendarPickerComponent.new = function(clock, legacyClock, mode) {
    this[_model] = new (ObservableReferenceOfCalendarStateL()).new(new calendar.CalendarState.empty(), {coalesce: true});
    this[_visibleMonthController] = StreamControllerOfDateL().broadcast();
    this[_allowHighlightUpdates] = true;
    this[_minDate] = null;
    this[_minMonth] = null;
    this[_maxDate] = null;
    this[_maxMonth] = null;
    this[_compact] = false;
    this[_movingStartMaintainsLength] = true;
    this[_mode] = calendar.CalendarSelectionMode.NONE;
    this[_today] = null;
    this[_isRenderScheduled] = true;
    this[_isResetNeeded] = false;
    this[_isInitialized] = false;
    this[_renderedMonths] = JSArrayOf_MonthL().of([]);
    this[_renderedOffsets] = JSArrayOfintL().of([]);
    this[_scroller] = null;
    this[_container] = null;
    this[_scrollTop] = 0;
    this[_inputListener] = new calendar_listener.CalendarListener.noop();
    this[_calendarStream] = null;
    this[_scrollListener] = null;
    this[_clickListener] = null;
    this[_mouseDownListener] = null;
    this[_mouseMoveListener] = null;
    this[_mouseOutListener] = null;
    clock == null ? clock = legacyClock : null;
    this[_today] = date.Date.today(clock);
    let now = clock.now();
    this.minDate = new date.Date.new(dart.notNull(now.year) - 10, 1, 1);
    this.maxDate = new date.Date.new(dart.notNull(now.year) + 10, 12, 31);
    if (mode != null && mode[$isNotEmpty]) {
      this[_mode] = enum_parsing.fuzzyParseEnum(CalendarSelectionModeL(), calendar.CalendarSelectionMode.values, mode);
    }
  }).prototype = material_calendar_picker.MaterialCalendarPickerComponent.prototype;
  dart.addTypeTests(material_calendar_picker.MaterialCalendarPickerComponent);
  dart.addTypeCaches(material_calendar_picker.MaterialCalendarPickerComponent);
  material_calendar_picker.MaterialCalendarPickerComponent[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.AfterChanges, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getMethods(material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    [_monthHeight]: dart.fnType(dart.legacy(core.int), [dart.legacy(material_calendar_picker._Month)]),
    [_rangeHeight]: dart.fnType(dart.legacy(core.int), [dart.legacy(material_calendar_picker._Month), dart.legacy(material_calendar_picker._Month)]),
    [_monthAtOffset]: dart.fnType(dart.legacy(material_calendar_picker._Month), [dart.legacy(core.int)]),
    [_canSelectDate]: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    [_extractDate]: dart.fnType(dart.legacy(date.Date), [dart.legacy(html.Event)]),
    [_monthsSurrounding]: dart.fnType(dart.legacy(core.List$(dart.legacy(material_calendar_picker._Month))), [dart.legacy(material_calendar_picker._Month)]),
    [_resetContainerHeight]: dart.fnType(dart.void, []),
    [_scrollToMonth]: dart.fnType(dart.void, [dart.legacy(material_calendar_picker._Month)]),
    scrollToDate: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    [_setText]: dart.fnType(dart.void, [dart.legacy(html.HtmlElement), dart.legacy(core.String)]),
    [_renderMonth]: dart.fnType(dart.void, [dart.legacy(material_calendar_picker._Month), dart.legacy(html.HtmlElement)]),
    [_renderVisible]: dart.fnType(dart.void, []),
    [_slotSelector]: dart.fnType(dart.legacy(core.String), [dart.legacy(date.Date)]),
    [_dateAttributeValue]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.int)]),
    [_renderRange]: dart.fnType(dart.void, [dart.legacy(calendar.CalendarSelection)]),
    [_highlightElements]: dart.fnType(dart.void, [dart.legacy(html.HtmlElement), dart.legacy(html.HtmlElement), dart.legacy(core.String)]),
    [_highlightElement]: dart.fnType(dart.void, [dart.legacy(html.HtmlElement), dart.legacy(core.String)]),
    [_resetHighlights]: dart.fnType(dart.void, []),
    [_renderHighlights]: dart.fnType(dart.void, []),
    [_renderToday]: dart.fnType(dart.void, []),
    [_renderHover]: dart.fnType(dart.void, []),
    [_ensureSelectionIsVisible]: dart.fnType(dart.void, []),
    [_onCalendarChange]: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    ngOnInit: dart.fnType(dart.void, []),
    [_initInputListener]: dart.fnType(dart.void, []),
    ngAfterChanges: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_initializePanels]: dart.fnType(dart.void, []),
    [_resetView]: dart.fnType(dart.void, []),
    [_initializeEvents]: dart.fnType(dart.void, []),
    [_onClick]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onMouseDown]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onMouseMove]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onMouseOut]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onScroll]: dart.fnType(dart.void, [dart.legacy(html.Event)])
  }));
  dart.setGetterSignature(material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getGetters(material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    state: dart.legacy(calendar.CalendarState),
    stateChange: dart.legacy(async.Stream$(dart.legacy(calendar.CalendarState))),
    visibleMonth: dart.legacy(async.Stream$(dart.legacy(date.Date))),
    allowHighlightUpdates: dart.legacy(core.bool),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    compact: dart.legacy(core.bool),
    mode: dart.legacy(calendar.CalendarSelectionMode),
    dayNames: dart.legacy(core.List$(dart.legacy(core.String))),
    [_rowHeightPx]: dart.legacy(core.int),
    [_initialDate]: dart.legacy(date.Date)
  }));
  dart.setSetterSignature(material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getSetters(material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    state: dart.legacy(calendar.CalendarState),
    allowHighlightUpdates: dart.legacy(core.bool),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    compact: dart.legacy(core.bool),
    movingStartMaintainsLength: dart.legacy(core.bool),
    container: dart.legacy(html.HtmlElement)
  }));
  dart.setLibraryUri(material_calendar_picker.MaterialCalendarPickerComponent, L0);
  dart.setFieldSignature(material_calendar_picker.MaterialCalendarPickerComponent, () => ({
    __proto__: dart.getFields(material_calendar_picker.MaterialCalendarPickerComponent.__proto__),
    [_model]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(calendar.CalendarState)))),
    [_visibleMonthController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(date.Date)))),
    [_allowHighlightUpdates]: dart.fieldType(dart.legacy(core.bool)),
    [_minDate]: dart.fieldType(dart.legacy(date.Date)),
    [_minMonth]: dart.fieldType(dart.legacy(material_calendar_picker._Month)),
    [_maxDate]: dart.fieldType(dart.legacy(date.Date)),
    [_maxMonth]: dart.fieldType(dart.legacy(material_calendar_picker._Month)),
    [_compact]: dart.fieldType(dart.legacy(core.bool)),
    [_movingStartMaintainsLength]: dart.fieldType(dart.legacy(core.bool)),
    [_mode]: dart.fieldType(dart.legacy(calendar.CalendarSelectionMode)),
    [_today]: dart.fieldType(dart.legacy(date.Date)),
    [_isRenderScheduled]: dart.fieldType(dart.legacy(core.bool)),
    [_isResetNeeded]: dart.fieldType(dart.legacy(core.bool)),
    [_isInitialized]: dart.fieldType(dart.legacy(core.bool)),
    [_renderedMonths]: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_calendar_picker._Month)))),
    [_renderedOffsets]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_scroller]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_container]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_scrollTop]: dart.fieldType(dart.legacy(core.int)),
    [_inputListener]: dart.fieldType(dart.legacy(calendar_listener.CalendarListener)),
    [_calendarStream]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_scrollListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_clickListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_mouseDownListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_mouseMoveListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_mouseOutListener]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event])))
  }));
  dart.defineLazy(material_calendar_picker.MaterialCalendarPickerComponent, {
    /*material_calendar_picker.MaterialCalendarPickerComponent.DATE_HEIGHT_PX*/get DATE_HEIGHT_PX() {
      return 48;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent.DATE_COMPACT_HEIGHT_PX*/get DATE_COMPACT_HEIGHT_PX() {
      return 36;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent.WEEK_ROWS_IN_MONTH*/get WEEK_ROWS_IN_MONTH() {
      return 6;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._overdraw*/get _overdraw() {
      return 2;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._inViewThreshold*/get _inViewThreshold() {
      return 0.5;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._monthTitleWidth*/get _monthTitleWidth() {
      return 3;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._dateAttribute*/get _dateAttribute() {
      return "data-date";
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._dateSeparator*/get _dateSeparator() {
      return "-";
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek*/get _firstDayOfWeek() {
      return material_calendar_picker.MaterialCalendarPickerComponent._rotateDayOfWeek(1, new intl.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK);
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._defaultDayNames*/get _defaultDayNames() {
      return new intl.DateFormat.new().dateSymbols.STANDALONENARROWWEEKDAYS;
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._dayNames*/get _dayNames() {
      let t2;
      return t2 = material_calendar_picker.MaterialCalendarPickerComponent._defaultDayNames[$sublist](material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek), (() => {
        t2[$addAll](material_calendar_picker.MaterialCalendarPickerComponent._defaultDayNames[$sublist](0, material_calendar_picker.MaterialCalendarPickerComponent._firstDayOfWeek));
        return t2;
      })();
    },
    /*material_calendar_picker.MaterialCalendarPickerComponent._monthTemplate*/get _monthTemplate() {
      return material_calendar_picker.MaterialCalendarPickerComponent._createMonthTemplate();
    }
  }, true);
  material_calendar_picker._Month = class _Month extends core.Object {
    next() {
      if ((this.month = dart.notNull(this.month) + 1) > 12) {
        this.year = dart.notNull(this.year) + 1;
        this.month = 1;
      }
    }
    prev() {
      if ((this.month = dart.notNull(this.month) - 1) < 1) {
        this.year = dart.notNull(this.year) - 1;
        this.month = 12;
      }
    }
    copy() {
      return new material_calendar_picker._Month.new(this.year, this.month);
    }
    add(months) {
      let result = this.copy();
      let increment = dart.bind(result, 'next');
      if (dart.notNull(months) < 0) {
        months = -dart.notNull(months);
        increment = dart.bind(result, 'prev');
      }
      for (let i = 0; i < dart.notNull(months); i = i + 1) {
        increment();
      }
      return result;
    }
    get title() {
      return material_calendar_picker._Month._monthNames[$_get](dart.notNull(this.month) - 1)[$replaceFirst](dart.str(9999), dart.str(this.year));
    }
    get startDay() {
      return material_calendar_picker._dayOfWeek(this.year, this.month, 1);
    }
    get days() {
      if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
        return 30;
      } else if (this.month === 2) {
        let isLeapYear = this.year[$remainder](4) === 0 && this.year[$remainder](100) !== 0 || this.year[$remainder](400) === 0;
        return isLeapYear ? 29 : 28;
      } else {
        return 31;
      }
    }
    get start() {
      return new date.Date.new(this.year, this.month, 1);
    }
    get end() {
      return new date.Date.new(this.year, this.month, this.days);
    }
    _equals(o) {
      if (o == null) return false;
      return core.identical(this.year, dart.dload(o, 'year')) && core.identical(this.month, dart.dload(o, 'month'));
    }
    ['<'](o) {
      return dart.notNull(this.year) < dart.notNull(core.num.as(dart.dload(o, 'year'))) || core.identical(this.year, dart.dload(o, 'year')) && dart.notNull(this.month) < dart.notNull(core.num.as(dart.dload(o, 'month')));
    }
    ['>'](o) {
      return dart.notNull(this.year) > dart.notNull(core.num.as(dart.dload(o, 'year'))) || core.identical(this.year, dart.dload(o, 'year')) && dart.notNull(this.month) > dart.notNull(core.num.as(dart.dload(o, 'month')));
    }
    ['<='](o) {
      return this._equals(o) || dart.test(this['<'](o));
    }
    ['>='](o) {
      return this._equals(o) || dart.test(this['>'](o));
    }
    toString() {
      return dart.str(this.year) + "-" + dart.str(this.month);
    }
  };
  (material_calendar_picker._Month.new = function(year, month) {
    this.year = year;
    this.month = month;
    ;
  }).prototype = material_calendar_picker._Month.prototype;
  (material_calendar_picker._Month.fromDate = function(date) {
    this.year = date.year;
    this.month = date.month;
    ;
  }).prototype = material_calendar_picker._Month.prototype;
  dart.addTypeTests(material_calendar_picker._Month);
  dart.addTypeCaches(material_calendar_picker._Month);
  dart.setMethodSignature(material_calendar_picker._Month, () => ({
    __proto__: dart.getMethods(material_calendar_picker._Month.__proto__),
    next: dart.fnType(dart.void, []),
    prev: dart.fnType(dart.void, []),
    copy: dart.fnType(dart.legacy(material_calendar_picker._Month), []),
    add: dart.fnType(dart.legacy(material_calendar_picker._Month), [dart.legacy(core.int)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '<': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '<=': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>=': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(material_calendar_picker._Month, () => ({
    __proto__: dart.getGetters(material_calendar_picker._Month.__proto__),
    title: dart.legacy(core.String),
    startDay: dart.legacy(core.int),
    days: dart.legacy(core.int),
    start: dart.legacy(date.Date),
    end: dart.legacy(date.Date)
  }));
  dart.setLibraryUri(material_calendar_picker._Month, L0);
  dart.setFieldSignature(material_calendar_picker._Month, () => ({
    __proto__: dart.getFields(material_calendar_picker._Month.__proto__),
    year: dart.fieldType(dart.legacy(core.int)),
    month: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(material_calendar_picker._Month, ['_equals', 'toString']);
  dart.defineLazy(material_calendar_picker._Month, {
    /*material_calendar_picker._Month._yearPlaceholder*/get _yearPlaceholder() {
      return 9999;
    },
    /*material_calendar_picker._Month._monthFormatter*/get _monthFormatter() {
      return new intl.DateFormat.yMMM();
    },
    /*material_calendar_picker._Month._monthNames*/get _monthNames() {
      return ListOfintL().generate(12, dart.fn(i => dart.notNull(i) + 1, intLTointL()))[$map](StringL(), dart.fn(i => material_calendar_picker._Month._monthFormatter.format(new core.DateTime.new(9999, i)), intLToStringL()))[$toList]();
    }
  }, true);
  material_calendar_picker._dayOfWeek = function _dayOfWeek(year, month, day) {
    if (dart.notNull(month) < 3) {
      year = dart.notNull(year) - 1;
    }
    year = 65535 & dart.notNull(year);
    return dart.asNullableInt((dart.notNull(year) + (dart.notNull(year) / 4)[$truncate]() - (dart.notNull(year) / 100)[$truncate]() + (dart.notNull(year) / 400)[$truncate]() + dart.notNull(material_calendar_picker._dayOfWeekTable[$_get](dart.notNull(month) - 1)) + dart.notNull(day))[$remainder](7));
  };
  var C0;
  dart.defineLazy(material_calendar_picker, {
    /*material_calendar_picker._dayOfWeekTable*/get _dayOfWeekTable() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker", {
    "package:angular_components/material_datepicker/material_calendar_picker.dart": material_calendar_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker: material_calendar_picker
  };
}));

//# sourceMappingURL=material_calendar_picker.unsound.ddc.js.map
