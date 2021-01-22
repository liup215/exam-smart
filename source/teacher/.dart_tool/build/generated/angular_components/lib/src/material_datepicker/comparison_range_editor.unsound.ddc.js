define(['dart_sdk', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/material_datepicker/range', 'packages/intl/intl', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/date/date', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/material_datepicker/sequential'], (function load__packages__angular_components__src__material_datepicker__comparison_range_editor(dart_sdk, packages__angular_components__material_datepicker__comparison_option, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__material_datepicker__range, packages__intl__intl, packages__angular_components__material_datepicker__comparison, packages__angular_components__material_datepicker__calendar, packages__angular_components__model__observable__observable, packages__angular_components__model__date__date, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__material_datepicker__sequential) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const comparison_option = packages__angular_components__material_datepicker__comparison_option.material_datepicker__comparison_option;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const range$ = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const intl = packages__intl__intl.intl;
  const comparison = packages__angular_components__material_datepicker__comparison.material_datepicker__comparison;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const date = packages__angular_components__model__date__date.model__date__date;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const sequential = packages__angular_components__src__material_datepicker__sequential.src__material_datepicker__sequential;
  var comparison_range_editor = Object.create(dart.library);
  var date_range_editor_model = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $contains = dartx.contains;
  var $add = dartx.add;
  var ComparisonOptionL = () => (ComparisonOptionL = dart.constFn(dart.legacy(comparison_option.ComparisonOption)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedMapOfComparisonOptionL$StringL = () => (LinkedMapOfComparisonOptionL$StringL = dart.constFn(_js_helper.LinkedMap$(ComparisonOptionL(), StringL())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ActionL = () => (ActionL = dart.constFn(dart.legacy(date_range_editor_model.Action)))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var ObservableReferenceOfCalendarStateL = () => (ObservableReferenceOfCalendarStateL = dart.constFn(observable.ObservableReference$(CalendarStateL())))();
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date.DateRange)))();
  var ObservableReferenceOfDateRangeL = () => (ObservableReferenceOfDateRangeL = dart.constFn(observable.ObservableReference$(DateRangeL())))();
  var DateRangeChangeL = () => (DateRangeChangeL = dart.constFn(dart.legacy(date_range_editor_model.DateRangeChange)))();
  var StreamControllerOfDateRangeChangeL = () => (StreamControllerOfDateRangeChangeL = dart.constFn(async.StreamController$(DateRangeChangeL())))();
  var JSArrayOfComparisonOptionL = () => (JSArrayOfComparisonOptionL = dart.constFn(_interceptors.JSArray$(ComparisonOptionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ObservableReferenceOfboolL = () => (ObservableReferenceOfboolL = dart.constFn(observable.ObservableReference$(boolL())))();
  var DatepickerComparisonL = () => (DatepickerComparisonL = dart.constFn(dart.legacy(comparison.DatepickerComparison)))();
  var ObservableReferenceOfDatepickerComparisonL = () => (ObservableReferenceOfDatepickerComparisonL = dart.constFn(observable.ObservableReference$(DatepickerComparisonL())))();
  var ChangeOfCalendarStateL = () => (ChangeOfCalendarStateL = dart.constFn(observable.Change$(CalendarStateL())))();
  var ChangeLOfCalendarStateL = () => (ChangeLOfCalendarStateL = dart.constFn(dart.legacy(ChangeOfCalendarStateL())))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/src/material_datepicker/date_range_editor_model.dart";
  var L2 = "org-dartlang-app:///packages/angular_components/src/material_datepicker/date_range_editor_model.dart";
  var L0 = "package:angular_components/src/material_datepicker/comparison_range_editor.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.dragStart",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.drag",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.dragEnd",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.button",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.textEntry",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.click",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.preview",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: date_range_editor_model.Action.prototype,
        [_name$]: "Action.cancel",
        index: 7
      });
    },
    get C8() {
      return C8 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], ActionL());
    }
  }, false);
  var _optionMsgCache = dart.privateName(comparison_range_editor, "_optionMsgCache");
  var _primaryDateRange = dart.privateName(comparison_range_editor, "_primaryDateRange");
  var _ngZone$ = dart.privateName(comparison_range_editor, "_ngZone");
  var _scrollHost$ = dart.privateName(comparison_range_editor, "_scrollHost");
  var _updateOptionMsg = dart.privateName(comparison_range_editor, "_updateOptionMsg");
  var model = dart.privateName(comparison_range_editor, "ComparisonRangeEditorComponent.model");
  comparison_range_editor.ComparisonRangeEditorComponent = class ComparisonRangeEditorComponent extends core.Object {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get comparisonEnabled() {
      return this.model.comparisonEnabled;
    }
    set comparisonEnabled(enabled) {
      this.model.comparisonEnabled = enabled;
      if (dart.test(enabled) && this[_scrollHost$] != null) {
        this[_ngZone$].runAfterChangesObserved(dart.fn(() => {
          let t0;
          t0 = this[_scrollHost$];
          return t0 == null ? null : t0.scrollToPosition(this[_scrollHost$].scrollLength);
        }, VoidTovoid()));
      }
    }
    comparisonOptionMsg(option) {
      if (!dart.equals(this[_primaryDateRange], this.model.primaryRange)) {
        this[_updateOptionMsg]();
        this[_primaryDateRange] = this.model.primaryRange;
      }
      return this[_optionMsgCache][$_get](option);
    }
    [_updateOptionMsg]() {
      let t1, t0, t0$, t0$0;
      for (let option of this.model.validComparisonOptions) {
        this[_optionMsgCache][$_set](option, (t0$0 = (t0$ = (t0 = option, t1 = this.model.primaryRange, t0.computeComparisonRange(t1)), t0$ == null ? null : t0$.title), t0$0 == null ? option.displayName : t0$0));
      }
    }
  };
  (comparison_range_editor.ComparisonRangeEditorComponent.new = function(_ngZone, _scrollHost) {
    this[model] = null;
    this[_optionMsgCache] = new (LinkedMapOfComparisonOptionL$StringL()).new();
    this[_primaryDateRange] = null;
    this[_ngZone$] = _ngZone;
    this[_scrollHost$] = _scrollHost;
    ;
  }).prototype = comparison_range_editor.ComparisonRangeEditorComponent.prototype;
  dart.addTypeTests(comparison_range_editor.ComparisonRangeEditorComponent);
  dart.addTypeCaches(comparison_range_editor.ComparisonRangeEditorComponent);
  dart.setMethodSignature(comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getMethods(comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonOptionMsg: dart.fnType(dart.legacy(core.String), [dart.legacy(comparison_option.ComparisonOption)]),
    [_updateOptionMsg]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getGetters(comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonEnabled: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getSetters(comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    comparisonEnabled: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(comparison_range_editor.ComparisonRangeEditorComponent, L0);
  dart.setFieldSignature(comparison_range_editor.ComparisonRangeEditorComponent, () => ({
    __proto__: dart.getFields(comparison_range_editor.ComparisonRangeEditorComponent.__proto__),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_scrollHost$]: dart.finalFieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    model: dart.fieldType(dart.legacy(date_range_editor_model.HasComparisonRange)),
    [_optionMsgCache]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(comparison_option.ComparisonOption), dart.legacy(core.String)))),
    [_primaryDateRange]: dart.fieldType(dart.legacy(range$.DatepickerDateRange))
  }));
  dart.defineLazy(comparison_range_editor.ComparisonRangeEditorComponent, {
    /*comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg*/get comparisonHeaderMsg() {
      return intl.Intl.message("Compare", {name: "comparisonHeaderMsg", desc: "Label for a toggle that turns time comparison on/off."});
    }
  }, true);
  var _name$ = dart.privateName(date_range_editor_model, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  date_range_editor_model.Action = class Action extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (date_range_editor_model.Action.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = date_range_editor_model.Action.prototype;
  dart.addTypeTests(date_range_editor_model.Action);
  dart.addTypeCaches(date_range_editor_model.Action);
  dart.setMethodSignature(date_range_editor_model.Action, () => ({
    __proto__: dart.getMethods(date_range_editor_model.Action.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(date_range_editor_model.Action, L1);
  dart.setFieldSignature(date_range_editor_model.Action, () => ({
    __proto__: dart.getFields(date_range_editor_model.Action.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(date_range_editor_model.Action, ['toString']);
  date_range_editor_model.Action.dragStart = C0 || CT.C0;
  date_range_editor_model.Action.drag = C1 || CT.C1;
  date_range_editor_model.Action.dragEnd = C2 || CT.C2;
  date_range_editor_model.Action.button = C3 || CT.C3;
  date_range_editor_model.Action.textEntry = C4 || CT.C4;
  date_range_editor_model.Action.click = C5 || CT.C5;
  date_range_editor_model.Action.preview = C6 || CT.C6;
  date_range_editor_model.Action.cancel = C7 || CT.C7;
  date_range_editor_model.Action.values = C8 || CT.C8;
  var comparisonEnabled = dart.privateName(date_range_editor_model, "HasComparisonRange.comparisonEnabled");
  var comparisonOption = dart.privateName(date_range_editor_model, "HasComparisonRange.comparisonOption");
  date_range_editor_model.HasComparisonRange = class HasComparisonRange extends core.Object {
    get comparisonEnabled() {
      return this[comparisonEnabled];
    }
    set comparisonEnabled(value) {
      this[comparisonEnabled] = value;
    }
    get comparisonOption() {
      return this[comparisonOption];
    }
    set comparisonOption(value) {
      this[comparisonOption] = value;
    }
  };
  (date_range_editor_model.HasComparisonRange.new = function() {
    this[comparisonEnabled] = null;
    this[comparisonOption] = null;
    ;
  }).prototype = date_range_editor_model.HasComparisonRange.prototype;
  dart.addTypeTests(date_range_editor_model.HasComparisonRange);
  dart.addTypeCaches(date_range_editor_model.HasComparisonRange);
  dart.setLibraryUri(date_range_editor_model.HasComparisonRange, L1);
  dart.setFieldSignature(date_range_editor_model.HasComparisonRange, () => ({
    __proto__: dart.getFields(date_range_editor_model.HasComparisonRange.__proto__),
    comparisonEnabled: dart.fieldType(dart.legacy(core.bool)),
    comparisonOption: dart.fieldType(dart.legacy(comparison_option.ComparisonOption))
  }));
  var date$ = dart.privateName(date_range_editor_model, "DateRangeChange.date");
  var cause$ = dart.privateName(date_range_editor_model, "DateRangeChange.cause");
  date_range_editor_model.DateRangeChange = class DateRangeChange extends core.Object {
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get cause() {
      return this[cause$];
    }
    set cause(value) {
      super.cause = value;
    }
    toString() {
      return "[" + dart.str(this.date) + "] with cause " + dart.str(this.cause);
    }
  };
  (date_range_editor_model.DateRangeChange.new = function(date, cause) {
    this[date$] = date;
    this[cause$] = cause;
    ;
  }).prototype = date_range_editor_model.DateRangeChange.prototype;
  dart.addTypeTests(date_range_editor_model.DateRangeChange);
  dart.addTypeCaches(date_range_editor_model.DateRangeChange);
  dart.setMethodSignature(date_range_editor_model.DateRangeChange, () => ({
    __proto__: dart.getMethods(date_range_editor_model.DateRangeChange.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(date_range_editor_model.DateRangeChange, L1);
  dart.setFieldSignature(date_range_editor_model.DateRangeChange, () => ({
    __proto__: dart.getFields(date_range_editor_model.DateRangeChange.__proto__),
    date: dart.finalFieldType(dart.legacy(comparison.DatepickerComparison)),
    cause: dart.finalFieldType(dart.legacy(date_range_editor_model.Action))
  }));
  dart.defineExtensionMethods(date_range_editor_model.DateRangeChange, ['toString']);
  var value$ = dart.privateName(date_range_editor_model, "ModelState.value");
  var calendarState$ = dart.privateName(date_range_editor_model, "ModelState.calendarState");
  var comparisonEnabled$ = dart.privateName(date_range_editor_model, "ModelState.comparisonEnabled");
  var comparisonOption$ = dart.privateName(date_range_editor_model, "ModelState.comparisonOption");
  date_range_editor_model.ModelState = class ModelState extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get calendarState() {
      return this[calendarState$];
    }
    set calendarState(value) {
      super.calendarState = value;
    }
    get comparisonEnabled() {
      return this[comparisonEnabled$];
    }
    set comparisonEnabled(value) {
      super.comparisonEnabled = value;
    }
    get comparisonOption() {
      return this[comparisonOption$];
    }
    set comparisonOption(value) {
      super.comparisonOption = value;
    }
  };
  (date_range_editor_model.ModelState.new = function(value, calendarState, comparisonEnabled, comparisonOption) {
    this[value$] = value;
    this[calendarState$] = calendarState;
    this[comparisonEnabled$] = comparisonEnabled;
    this[comparisonOption$] = comparisonOption;
    ;
  }).prototype = date_range_editor_model.ModelState.prototype;
  dart.addTypeTests(date_range_editor_model.ModelState);
  dart.addTypeCaches(date_range_editor_model.ModelState);
  dart.setLibraryUri(date_range_editor_model.ModelState, L1);
  dart.setFieldSignature(date_range_editor_model.ModelState, () => ({
    __proto__: dart.getFields(date_range_editor_model.ModelState.__proto__),
    value: dart.finalFieldType(dart.legacy(comparison.DatepickerComparison)),
    calendarState: dart.finalFieldType(dart.legacy(calendar.CalendarState)),
    comparisonEnabled: dart.finalFieldType(dart.legacy(core.bool)),
    comparisonOption: dart.finalFieldType(dart.legacy(comparison_option.ComparisonOption))
  }));
  var _changes = dart.privateName(date_range_editor_model, "_changes");
  var _disposer = dart.privateName(date_range_editor_model, "_disposer");
  var _comparisonEnabled = dart.privateName(date_range_editor_model, "_comparisonEnabled");
  var _comparisonOption = dart.privateName(date_range_editor_model, "_comparisonOption");
  var _supportedComparisonOptions = dart.privateName(date_range_editor_model, "_supportedComparisonOptions");
  var _customComparisonRange = dart.privateName(date_range_editor_model, "_customComparisonRange");
  var _comparisonTitle = dart.privateName(date_range_editor_model, "_comparisonTitle");
  var _lastCause = dart.privateName(date_range_editor_model, "_lastCause");
  var _validComparisonOptions = dart.privateName(date_range_editor_model, "_validComparisonOptions");
  var _ref = dart.privateName(date_range_editor_model, "_ref");
  var _updateHasNextPrev = dart.privateName(date_range_editor_model, "_updateHasNextPrev");
  var _updateValidComparisonOptions = dart.privateName(date_range_editor_model, "_updateValidComparisonOptions");
  var _setEverything = dart.privateName(date_range_editor_model, "_setEverything");
  var _setPrimaryRange = dart.privateName(date_range_editor_model, "_setPrimaryRange");
  var _setComparisonRange = dart.privateName(date_range_editor_model, "_setComparisonRange");
  var _onCalendarChange = dart.privateName(date_range_editor_model, "_onCalendarChange");
  var _withComparison = dart.privateName(date_range_editor_model, "_withComparison");
  var _changeValue = dart.privateName(date_range_editor_model, "_changeValue");
  var _setComparisonOption = dart.privateName(date_range_editor_model, "_setComparisonOption");
  var _selectionDifferent = dart.privateName(date_range_editor_model, "_selectionDifferent");
  var _buildComparison = dart.privateName(date_range_editor_model, "_buildComparison");
  var _selectionAction = dart.privateName(date_range_editor_model, "_selectionAction");
  var _getValidComparisonOptions = dart.privateName(date_range_editor_model, "_getValidComparisonOptions");
  var rangeId = dart.privateName(date_range_editor_model, "DateRangeEditorModel.rangeId");
  var comparisonId = dart.privateName(date_range_editor_model, "DateRangeEditorModel.comparisonId");
  var calendar$ = dart.privateName(date_range_editor_model, "DateRangeEditorModel.calendar");
  var range = dart.privateName(date_range_editor_model, "DateRangeEditorModel.range");
  var comparison$ = dart.privateName(date_range_editor_model, "DateRangeEditorModel.comparison");
  var minDate$ = dart.privateName(date_range_editor_model, "DateRangeEditorModel.minDate");
  var maxDate$ = dart.privateName(date_range_editor_model, "DateRangeEditorModel.maxDate");
  var requireFullPeriods$ = dart.privateName(date_range_editor_model, "DateRangeEditorModel.requireFullPeriods");
  var basic$ = dart.privateName(date_range_editor_model, "DateRangeEditorModel.basic");
  var shouldShowPredefinedList = dart.privateName(date_range_editor_model, "DateRangeEditorModel.shouldShowPredefinedList");
  var shouldShowCustomDateRangeColumn = dart.privateName(date_range_editor_model, "DateRangeEditorModel.shouldShowCustomDateRangeColumn");
  var hasNext = dart.privateName(date_range_editor_model, "DateRangeEditorModel.hasNext");
  var hasPrev = dart.privateName(date_range_editor_model, "DateRangeEditorModel.hasPrev");
  date_range_editor_model.DateRangeEditorModel = class DateRangeEditorModel extends core.Object {
    get rangeId() {
      return this[rangeId];
    }
    set rangeId(value) {
      super.rangeId = value;
    }
    get comparisonId() {
      return this[comparisonId];
    }
    set comparisonId(value) {
      super.comparisonId = value;
    }
    get calendar() {
      return this[calendar$];
    }
    set calendar(value) {
      super.calendar = value;
    }
    get range() {
      return this[range];
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
    get minDate() {
      return this[minDate$];
    }
    set minDate(value) {
      this[minDate$] = value;
    }
    get maxDate() {
      return this[maxDate$];
    }
    set maxDate(value) {
      this[maxDate$] = value;
    }
    get requireFullPeriods() {
      return this[requireFullPeriods$];
    }
    set requireFullPeriods(value) {
      this[requireFullPeriods$] = value;
    }
    get basic() {
      return this[basic$];
    }
    set basic(value) {
      this[basic$] = value;
    }
    get shouldShowPredefinedList() {
      return this[shouldShowPredefinedList];
    }
    set shouldShowPredefinedList(value) {
      this[shouldShowPredefinedList] = value;
    }
    get shouldShowCustomDateRangeColumn() {
      return this[shouldShowCustomDateRangeColumn];
    }
    set shouldShowCustomDateRangeColumn(value) {
      this[shouldShowCustomDateRangeColumn] = value;
    }
    get hasNext() {
      return this[hasNext];
    }
    set hasNext(value) {
      this[hasNext] = value;
    }
    get hasPrev() {
      return this[hasPrev];
    }
    set hasPrev(value) {
      this[hasPrev] = value;
    }
    get value() {
      return this[_ref].value;
    }
    set value(val) {
      this[_ref].value = val;
      if (dart.test(this[_comparisonEnabled])) {
        this[_updateValidComparisonOptions]();
      }
    }
    get validComparisonOptions() {
      return this[_validComparisonOptions];
    }
    set supportedComparisonOptions(options) {
      if (!dart.equals(options, this[_supportedComparisonOptions])) {
        if (!(options != null && dart.test(options[$isNotEmpty]))) dart.assertFailed(null, L2, 158, 14, "options != null && options.isNotEmpty");
        this[_supportedComparisonOptions] = options;
        this[_comparisonOption] = this[_supportedComparisonOptions][$first];
        this[_updateValidComparisonOptions]();
      }
    }
    get isCustomComparisonValid() {
      return this.validComparisonOptions[$contains](comparison_option.ComparisonOption.custom);
    }
    get changes() {
      return this[_changes].stream;
    }
    get primaryRange() {
      let t0;
      t0 = this.value;
      return t0 == null ? null : t0.range;
    }
    get comparisonEnabled() {
      return this[_comparisonEnabled];
    }
    set comparisonEnabled(enabled) {
      let t0;
      this[_comparisonEnabled] = enabled;
      this.calendar.value = this.calendar.value.select(this.rangeId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
      if ((t0 = this.value, t0 == null ? null : t0.range) != null) {
        this[_changeValue](this[_withComparison](this.value.range), date_range_editor_model.Action.button);
      }
    }
    get comparisonOption() {
      return this[_comparisonOption];
    }
    set comparisonOption(option) {
      if (dart.test(this.basic) && dart.equals(option, comparison_option.ComparisonOption.custom)) {
        this.shouldShowCustomDateRangeColumn = true;
        this.shouldShowPredefinedList = false;
      }
      this[_setComparisonOption](option);
      this.calendar.value = this.calendar.value.select(this.rangeId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
    }
    get comparisonSupported() {
      let t0;
      return date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison((t0 = this.value, t0 == null ? null : t0.range));
    }
    get rangeTitle() {
      let t0, t0$, t0$0;
      t0$0 = (t0$ = (t0 = this.value, t0 == null ? null : t0.range), t0$ == null ? null : t0$.title);
      return t0$0 == null ? "" : t0$0;
    }
    get comparisonTitle() {
      return this[_comparisonTitle];
    }
    save() {
      return new date_range_editor_model.ModelState.new(this.value, this.calendar.value, this.comparisonEnabled, this.comparisonOption);
    }
    restore(state) {
      if (state == null) return;
      this[_changeValue](state.value, date_range_editor_model.Action.cancel);
      this.calendar.value = state.calendarState;
      this.comparisonEnabled = state.comparisonEnabled;
      this.comparisonOption = state.comparisonOption;
    }
    selectRange(range) {
      return this[_changeValue](this[_withComparison](range), date_range_editor_model.Action.button);
    }
    next() {
      let t0, t0$;
      let next = (t0$ = (t0 = this.value, t0 == null ? null : t0.range), t0$ == null ? null : t0$.next);
      if (next == null) return null;
      let amt = date.daysSpanned(this.value.range.start, next.start, {inclusive: false});
      if (this[_customComparisonRange] != null) {
        this[_customComparisonRange] = range$.DatepickerDateRange.custom(this[_customComparisonRange].start.add({days: amt}), this[_customComparisonRange].end.add({days: amt}));
      }
      this[_changeValue](this[_withComparison](next), date_range_editor_model.Action.button);
      return next;
    }
    prev() {
      let t0, t0$;
      let prev = (t0$ = (t0 = this.value, t0 == null ? null : t0.range), t0$ == null ? null : t0$.prev);
      if (prev == null) return null;
      let amt = date.daysSpanned(prev.start, this.value.range.start, {inclusive: false});
      if (this[_customComparisonRange] != null) {
        this[_customComparisonRange] = range$.DatepickerDateRange.custom(this[_customComparisonRange].start.add({days: -dart.notNull(amt)}), this[_customComparisonRange].end.add({days: -dart.notNull(amt)}));
      }
      this[_changeValue](this[_withComparison](prev), date_range_editor_model.Action.button);
      return prev;
    }
    dispose() {
      this[_disposer].dispose();
      this[_ref].dispose();
      this.calendar.dispose();
      this.range.dispose();
      this.comparison.dispose();
    }
    [_changeValue](val, cause) {
      val = new comparison.DatepickerComparison.reclamp(val, this.minDate, this.maxDate);
      if (dart.equals(this.value, val) && (cause == null || cause == this[_lastCause])) return;
      this.value = val;
      this[_lastCause] = cause;
      this[_changes].add(new date_range_editor_model.DateRangeChange.new(val, cause));
    }
    [_updateHasNextPrev](newValue) {
      let t0, t0$, t0$0, t0$1;
      let prevRange = (t0$ = (t0 = newValue, t0 == null ? null : t0.range), t0$ == null ? null : t0$.prev);
      let nextRange = (t0$1 = (t0$0 = newValue, t0$0 == null ? null : t0$0.range), t0$1 == null ? null : t0$1.next);
      if (dart.test(this.requireFullPeriods)) {
        this.hasPrev.value = prevRange != null && dart.test(date.rangeContainsRange(new date.DateRange.new(this.minDate, this.maxDate), prevRange.unclamped()));
        this.hasNext.value = nextRange != null && dart.test(date.rangeContainsRange(new date.DateRange.new(this.minDate, this.maxDate), nextRange.unclamped()));
      } else {
        this.hasPrev.value = prevRange != null;
        this.hasNext.value = nextRange != null;
      }
    }
    [_setEverything](newValue) {
      this[_updateHasNextPrev](newValue);
      if (newValue == null) return;
      let range = newValue.range;
      if (range == null) {
        this.range.value = null;
        this.calendar.value = this.calendar.value.clearCurrentSelection();
      } else {
        this.range.value = range.asPlainRange();
        if (dart.test(this[_selectionDifferent](this.calendar.value, this.rangeId, range)) || !dart.test(this.calendar.value.has(this.rangeId))) {
          this.calendar.value = this.calendar.value.setSelection(new calendar.CalendarSelection.new(this.rangeId, range.start, range.end), {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart, cause: calendar.CausedBy.external});
        }
      }
      let comparison = newValue.comparison;
      if (comparison != null) {
        if (dart.test(this[_selectionDifferent](this.calendar.value, this.comparisonId, comparison)) || !dart.test(this.calendar.value.has(this.comparisonId))) {
          this.calendar.value = this.calendar.value.setSelection(new calendar.CalendarSelection.new(this.comparisonId, comparison.start, comparison.end), {cause: calendar.CausedBy.external});
        }
      } else {
        this.calendar.value = this.calendar.value.clearSelection(this.comparisonId);
      }
      this[_comparisonEnabled] = newValue.isComparisonEnabled;
      if (dart.test(this[_comparisonEnabled])) {
        this[_comparisonOption] = null;
        for (let option of this[_supportedComparisonOptions]) {
          if (dart.test(newValue.comparesTo(option))) {
            this[_comparisonOption] = option;
            break;
          }
        }
        if (this[_comparisonOption] == null && dart.test(this[_supportedComparisonOptions][$contains](comparison_option.ComparisonOption.custom))) {
          this[_comparisonOption] = comparison_option.ComparisonOption.custom;
        }
        this[_updateValidComparisonOptions]();
      }
      let hypotheticalComparison = comparison != null ? comparison : this[_buildComparison](range).comparison;
      if (hypotheticalComparison == null) return;
      this.comparison.value = hypotheticalComparison.asPlainRange();
      this[_customComparisonRange] = range$.DatepickerDateRange.custom(hypotheticalComparison.start, hypotheticalComparison.end);
      this[_comparisonTitle] = hypotheticalComparison.title;
    }
    [_setPrimaryRange](range) {
      let t0, t0$;
      if (dart.equals((t0$ = (t0 = this.value, t0 == null ? null : t0.range), t0$ == null ? null : t0$.asPlainRange()), range)) return;
      this[_changeValue](this[_withComparison](range$.DatepickerDateRange.custom(range.start, range.end)), date_range_editor_model.Action.textEntry);
    }
    [_setComparisonRange](range) {
      let t0, t0$, t0$0, t0$1;
      if (dart.equals((t0 = this[_customComparisonRange], t0 == null ? null : t0.asPlainRange()), range)) return;
      this.comparisonOption = comparison_option.ComparisonOption.custom;
      this[_customComparisonRange] = range$.DatepickerDateRange.custom((t0$ = range, t0$ == null ? null : t0$.start), (t0$0 = range, t0$0 == null ? null : t0$0.end));
      this[_changeValue](this[_withComparison]((t0$1 = this.value, t0$1 == null ? null : t0$1.range)), date_range_editor_model.Action.textEntry);
    }
    [_onCalendarChange](change) {
      let t0;
      let action = this[_selectionAction](change.previous.cause, change.next.cause);
      let newState = change.next;
      let selectedRange = (t0 = this.value, t0 == null ? null : t0.range);
      if (newState.currentSelection == this.rangeId && dart.test(this[_selectionDifferent](newState, this.rangeId, selectedRange))) {
        selectedRange = range$.DatepickerDateRange.custom(newState.selection(this.rangeId).start, newState.selection(this.rangeId).end);
      } else if (newState.currentSelection == this.comparisonId && dart.test(this[_selectionDifferent](newState, this.comparisonId, this[_customComparisonRange]))) {
        this[_setComparisonOption](comparison_option.ComparisonOption.custom);
        this[_customComparisonRange] = range$.DatepickerDateRange.custom(newState.selection(this.comparisonId).start, newState.selection(this.comparisonId).end);
      }
      if (selectedRange != null) {
        this[_changeValue](this[_withComparison](selectedRange), action);
      }
      if (change.next.cause == calendar.CausedBy.rangeConfirm) {
        let selectId = dart.test(this[_comparisonEnabled]) && dart.equals(this[_comparisonOption], comparison_option.ComparisonOption.custom) && this.calendar.value.currentSelection == this.rangeId ? this.comparisonId : this.rangeId;
        this.calendar.value = this.calendar.value.select(selectId, {previewAnchoredAtStart: this.calendar.value.previewAnchoredAtStart});
      }
    }
    [_setComparisonOption](option) {
      let t0;
      if (dart.equals(this[_comparisonOption], option)) return;
      this[_comparisonOption] = option;
      if ((t0 = this.value, t0 == null ? null : t0.range) != null) {
        this[_changeValue](this[_withComparison](this.value.range), date_range_editor_model.Action.button);
        if (!dart.test(this[_comparisonEnabled])) {
          this[_setEverything](this.value);
        }
      }
    }
    [_selectionAction](oldCause, newCause) {
      if (newCause == calendar.CausedBy.preview) {
        return date_range_editor_model.Action.preview;
      } else if (oldCause == calendar.CausedBy.drag && newCause == calendar.CausedBy.drag) {
        return date_range_editor_model.Action.drag;
      } else if (oldCause == calendar.CausedBy.drag && newCause == calendar.CausedBy.rangeConfirm) {
        return date_range_editor_model.Action.dragEnd;
      } else if (newCause == calendar.CausedBy.drag) {
        return date_range_editor_model.Action.dragStart;
      } else if (newCause == calendar.CausedBy.endpointConfirm || newCause == calendar.CausedBy.rangeConfirm) {
        return date_range_editor_model.Action.click;
      }
      return null;
    }
    [_selectionDifferent](state, id, range) {
      if (!dart.test(state.has(id))) return false;
      if (range == null) return true;
      return !dart.equals(range.start, state.selection(id).start) || !dart.equals(range.end, state.selection(id).end);
    }
    [_withComparison](range) {
      return dart.test(this[_comparisonEnabled]) ? this[_buildComparison](range) : new comparison.DatepickerComparison.noComparison(range);
    }
    static _rangeSupportsComparison(range) {
      return range != null && !dart.test(range.isAllTime);
    }
    [_buildComparison](range) {
      let t0, t0$;
      if (!dart.test(date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison(range))) {
        return new comparison.DatepickerComparison.noComparison(range);
      }
      let defaultCustomComparisonRange = range$.DatepickerDateRange.custom(range.start, range.start);
      let validComparisonOptions = this[_getValidComparisonOptions](range);
      if (dart.equals(this[_comparisonOption], comparison_option.ComparisonOption.custom)) {
        return new comparison.DatepickerComparison.custom(range, (t0 = this[_customComparisonRange], t0 == null ? defaultCustomComparisonRange : t0));
      }
      if (dart.test(validComparisonOptions[$contains](this[_comparisonOption]))) {
        return new comparison.DatepickerComparison.new(range, this[_comparisonOption]);
      }
      if (dart.test(this.isCustomComparisonValid)) {
        return new comparison.DatepickerComparison.custom(range, (t0$ = this[_customComparisonRange], t0$ == null ? defaultCustomComparisonRange : t0$));
      }
      return new comparison.DatepickerComparison.noComparison(range);
    }
    [_updateValidComparisonOptions]() {
      let t0, t0$, t0$0;
      if ((t0 = this.value, t0 == null ? null : t0.range) == null || !dart.test(date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison((t0$ = this.value, t0$ == null ? null : t0$.range)))) return;
      this[_validComparisonOptions] = this[_getValidComparisonOptions]((t0$0 = this.value, t0$0 == null ? null : t0$0.range));
      if (!dart.test(this[_validComparisonOptions][$contains](this[_comparisonOption]))) {
        this[_comparisonOption] = comparison_option.ComparisonOption.custom;
      }
    }
    [_getValidComparisonOptions](range) {
      let t1, t0, t0$;
      let validOptions = JSArrayOfComparisonOptionL().of([]);
      if (range == null || !dart.test(date_range_editor_model.DateRangeEditorModel._rangeSupportsComparison(range))) {
        return validOptions;
      }
      for (let option of this[_supportedComparisonOptions]) {
        if (dart.equals(option, comparison_option.ComparisonOption.custom)) {
          validOptions[$add](option);
        } else {
          let comparisonRange = (t0 = option, t1 = range, t0.computeComparisonRange(t1));
          if ((t0$ = comparisonRange, t0$ == null ? null : t0$.clamp({min: this.minDate, max: this.maxDate})) != null) {
            validOptions[$add](option);
          }
        }
      }
      return validOptions;
    }
  };
  (date_range_editor_model.DateRangeEditorModel.new = function(opts) {
    let t0, t0$, t0$0;
    let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
    let minDate = opts && 'minDate' in opts ? opts.minDate : null;
    let maxDate = opts && 'maxDate' in opts ? opts.maxDate : null;
    let requireFullPeriods = opts && 'requireFullPeriods' in opts ? opts.requireFullPeriods : false;
    let basic = opts && 'basic' in opts ? opts.basic : false;
    let supportedComparisonOptions = opts && 'supportedComparisonOptions' in opts ? opts.supportedComparisonOptions : null;
    this[rangeId] = "range";
    this[comparisonId] = "comparison";
    this[calendar$] = new (ObservableReferenceOfCalendarStateL()).new(new calendar.CalendarState.empty({currentSelection: "range"}), {coalesce: true});
    this[range] = new (ObservableReferenceOfDateRangeL()).new(new date.DateRange.new(null, null), {coalesce: true});
    this[comparison$] = new (ObservableReferenceOfDateRangeL()).new(new date.DateRange.new(null, null), {coalesce: true});
    this[_changes] = StreamControllerOfDateRangeChangeL().broadcast({sync: true});
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_comparisonEnabled] = false;
    this[shouldShowPredefinedList] = true;
    this[shouldShowCustomDateRangeColumn] = true;
    this[_comparisonOption] = comparison_option.ComparisonOption.previousPeriod;
    this[_supportedComparisonOptions] = comparison_option.defaultComparisonOptions;
    this[_customComparisonRange] = null;
    this[_comparisonTitle] = "";
    this[_lastCause] = null;
    this[_validComparisonOptions] = JSArrayOfComparisonOptionL().of([]);
    this[hasNext] = new (ObservableReferenceOfboolL()).new(false);
    this[hasPrev] = new (ObservableReferenceOfboolL()).new(false);
    this[minDate$] = minDate;
    this[maxDate$] = maxDate;
    this[requireFullPeriods$] = requireFullPeriods;
    this[basic$] = basic;
    this[_ref] = new (ObservableReferenceOfDatepickerComparisonL()).new(initialValue);
    this.supportedComparisonOptions = dart.test((t0$ = (t0 = supportedComparisonOptions, t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$)) ? supportedComparisonOptions : comparison_option.defaultComparisonOptions;
    this[_updateHasNextPrev](initialValue);
    this[_updateValidComparisonOptions]();
    t0$0 = this[_disposer];
    (() => {
      t0$0.addFunction(dart.bind(this[_changes], 'close'));
      t0$0.addStreamSubscription(DatepickerComparisonL(), this[_ref].stream.listen(dart.bind(this, _setEverything)));
      t0$0.addStreamSubscription(DateRangeL(), this.range.stream.listen(dart.bind(this, _setPrimaryRange)));
      t0$0.addStreamSubscription(DateRangeL(), this.comparison.stream.listen(dart.bind(this, _setComparisonRange)));
      t0$0.addStreamSubscription(ChangeLOfCalendarStateL(), this.calendar.changes.listen(dart.bind(this, _onCalendarChange)));
      return t0$0;
    })();
  }).prototype = date_range_editor_model.DateRangeEditorModel.prototype;
  dart.addTypeTests(date_range_editor_model.DateRangeEditorModel);
  dart.addTypeCaches(date_range_editor_model.DateRangeEditorModel);
  date_range_editor_model.DateRangeEditorModel[dart.implements] = () => [sequential.Sequential$(dart.legacy(range$.DatepickerDateRange)), date_range_editor_model.HasComparisonRange];
  dart.setMethodSignature(date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getMethods(date_range_editor_model.DateRangeEditorModel.__proto__),
    save: dart.fnType(dart.legacy(date_range_editor_model.ModelState), []),
    restore: dart.fnType(dart.void, [dart.legacy(date_range_editor_model.ModelState)]),
    selectRange: dart.fnType(dart.void, [dart.legacy(range$.DatepickerDateRange)]),
    next: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    prev: dart.fnType(dart.legacy(range$.DatepickerDateRange), []),
    dispose: dart.fnType(dart.void, []),
    [_changeValue]: dart.fnType(dart.void, [dart.legacy(comparison.DatepickerComparison), dart.legacy(date_range_editor_model.Action)]),
    [_updateHasNextPrev]: dart.fnType(dart.void, [dart.legacy(comparison.DatepickerComparison)]),
    [_setEverything]: dart.fnType(dart.void, [dart.legacy(comparison.DatepickerComparison)]),
    [_setPrimaryRange]: dart.fnType(dart.void, [dart.legacy(date.DateRange)]),
    [_setComparisonRange]: dart.fnType(dart.void, [dart.legacy(date.DateRange)]),
    [_onCalendarChange]: dart.fnType(dart.void, [dart.legacy(observable.Change$(dart.legacy(calendar.CalendarState)))]),
    [_setComparisonOption]: dart.fnType(dart.void, [dart.legacy(comparison_option.ComparisonOption)]),
    [_selectionAction]: dart.fnType(dart.legacy(date_range_editor_model.Action), [dart.legacy(calendar.CausedBy), dart.legacy(calendar.CausedBy)]),
    [_selectionDifferent]: dart.fnType(dart.legacy(core.bool), [dart.legacy(calendar.CalendarState), dart.legacy(core.String), dart.legacy(date.DateRange)]),
    [_withComparison]: dart.fnType(dart.legacy(comparison.DatepickerComparison), [dart.legacy(range$.DatepickerDateRange)]),
    [_buildComparison]: dart.fnType(dart.legacy(comparison.DatepickerComparison), [dart.legacy(range$.DatepickerDateRange)]),
    [_updateValidComparisonOptions]: dart.fnType(dart.void, []),
    [_getValidComparisonOptions]: dart.fnType(dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption))), [dart.legacy(range$.DatepickerDateRange)])
  }));
  dart.setGetterSignature(date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getGetters(date_range_editor_model.DateRangeEditorModel.__proto__),
    value: dart.legacy(comparison.DatepickerComparison),
    validComparisonOptions: dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption))),
    isCustomComparisonValid: dart.legacy(core.bool),
    changes: dart.legacy(async.Stream$(dart.legacy(date_range_editor_model.DateRangeChange))),
    primaryRange: dart.legacy(range$.DatepickerDateRange),
    comparisonEnabled: dart.legacy(core.bool),
    comparisonOption: dart.legacy(comparison_option.ComparisonOption),
    comparisonSupported: dart.legacy(core.bool),
    rangeTitle: dart.legacy(core.String),
    comparisonTitle: dart.legacy(core.String)
  }));
  dart.setSetterSignature(date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getSetters(date_range_editor_model.DateRangeEditorModel.__proto__),
    value: dart.legacy(comparison.DatepickerComparison),
    supportedComparisonOptions: dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption))),
    comparisonEnabled: dart.legacy(core.bool),
    comparisonOption: dart.legacy(comparison_option.ComparisonOption)
  }));
  dart.setLibraryUri(date_range_editor_model.DateRangeEditorModel, L1);
  dart.setFieldSignature(date_range_editor_model.DateRangeEditorModel, () => ({
    __proto__: dart.getFields(date_range_editor_model.DateRangeEditorModel.__proto__),
    rangeId: dart.finalFieldType(dart.legacy(core.String)),
    comparisonId: dart.finalFieldType(dart.legacy(core.String)),
    [_ref]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(comparison.DatepickerComparison)))),
    calendar: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(calendar.CalendarState)))),
    range: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(date.DateRange)))),
    comparison: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(date.DateRange)))),
    [_changes]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(date_range_editor_model.DateRangeChange)))),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    minDate: dart.fieldType(dart.legacy(date.Date)),
    maxDate: dart.fieldType(dart.legacy(date.Date)),
    requireFullPeriods: dart.fieldType(dart.legacy(core.bool)),
    [_comparisonEnabled]: dart.fieldType(dart.legacy(core.bool)),
    basic: dart.fieldType(dart.legacy(core.bool)),
    shouldShowPredefinedList: dart.fieldType(dart.legacy(core.bool)),
    shouldShowCustomDateRangeColumn: dart.fieldType(dart.legacy(core.bool)),
    [_comparisonOption]: dart.fieldType(dart.legacy(comparison_option.ComparisonOption)),
    [_supportedComparisonOptions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption)))),
    [_customComparisonRange]: dart.fieldType(dart.legacy(range$.DatepickerDateRange)),
    [_comparisonTitle]: dart.fieldType(dart.legacy(core.String)),
    [_lastCause]: dart.fieldType(dart.legacy(date_range_editor_model.Action)),
    [_validComparisonOptions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption)))),
    hasNext: dart.fieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool)))),
    hasPrev: dart.fieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool))))
  }));
  dart.defineLazy(date_range_editor_model, {
    /*date_range_editor_model._rangeId*/get _rangeId() {
      return "range";
    },
    /*date_range_editor_model._comparisonId*/get _comparisonId() {
      return "comparison";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor", {
    "package:angular_components/src/material_datepicker/comparison_range_editor.dart": comparison_range_editor,
    "package:angular_components/src/material_datepicker/date_range_editor_model.dart": date_range_editor_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison_range_editor.dart","date_range_editor_model.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__comparison_range_editor: comparison_range_editor,
    src__material_datepicker__date_range_editor_model: date_range_editor_model
  };
}));

//# sourceMappingURL=comparison_range_editor.unsound.ddc.js.map
