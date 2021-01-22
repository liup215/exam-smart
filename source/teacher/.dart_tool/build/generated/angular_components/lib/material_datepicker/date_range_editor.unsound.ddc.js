define(['dart_sdk', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/model/date/date', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/model/menu/selectable_menu', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/menu/menu', 'packages/angular_components/model/date/date_formatter', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/intl/intl', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/quiver/src/time/clock', 'packages/angular_components/model/observable/observable', 'packages/angular_components/src/material_datepicker/sequential'], (function load__packages__angular_components__material_datepicker__date_range_editor(dart_sdk, packages__angular_components__material_datepicker__preset, packages__angular_components__model__date__date, packages__angular_components__model__selection__selection_model, packages__angular_components__material_datepicker__calendar, packages__angular_components__material_datepicker__range, packages__angular_components__model__menu__selectable_menu, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__menu__menu, packages__angular_components__model__date__date_formatter, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__focus__focus_interface, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__intl__intl, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__material_datepicker__material_month_picker, packages__quiver__src__time__clock, packages__angular_components__model__observable__observable, packages__angular_components__src__material_datepicker__sequential) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const preset = packages__angular_components__material_datepicker__preset.material_datepicker__preset;
  const date = packages__angular_components__model__date__date.model__date__date;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const selectable_menu = packages__angular_components__model__menu__selectable_menu.model__menu__selectable_menu;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const date_formatter = packages__angular_components__model__date__date_formatter.model__date__date_formatter;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const date_range_editor_model = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__date_range_editor_model;
  const intl = packages__intl__intl.intl;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const sequential = packages__angular_components__src__material_datepicker__sequential.src__material_datepicker__sequential;
  var date_range_editor = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $contains = dartx.contains;
  var DatepickerPresetL = () => (DatepickerPresetL = dart.constFn(dart.legacy(preset.DatepickerPreset)))();
  var JSArrayOfDatepickerPresetL = () => (JSArrayOfDatepickerPresetL = dart.constFn(_interceptors.JSArray$(DatepickerPresetL())))();
  var LinkedHashSetOfDatepickerPresetL = () => (LinkedHashSetOfDatepickerPresetL = dart.constFn(collection.LinkedHashSet$(DatepickerPresetL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamControllerOfUIEventL = () => (StreamControllerOfUIEventL = dart.constFn(async.StreamController$(UIEventL())))();
  var SingleSelectionModelOfDatepickerPresetL = () => (SingleSelectionModelOfDatepickerPresetL = dart.constFn(selection_model.SingleSelectionModel$(DatepickerPresetL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var DatepickerDateRangeL = () => (DatepickerDateRangeL = dart.constFn(dart.legacy(range.DatepickerDateRange)))();
  var DatepickerDateRangeLToDatepickerPresetL = () => (DatepickerDateRangeLToDatepickerPresetL = dart.constFn(dart.fnType(DatepickerPresetL(), [DatepickerDateRangeL()])))();
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var SelectableMenuItemOfDatepickerPresetL = () => (SelectableMenuItemOfDatepickerPresetL = dart.constFn(selectable_menu.SelectableMenuItem$(DatepickerPresetL())))();
  var SelectableMenuItemLOfDatepickerPresetL = () => (SelectableMenuItemLOfDatepickerPresetL = dart.constFn(dart.legacy(SelectableMenuItemOfDatepickerPresetL())))();
  var JSArrayOfSelectableMenuItemLOfDatepickerPresetL = () => (JSArrayOfSelectableMenuItemLOfDatepickerPresetL = dart.constFn(_interceptors.JSArray$(SelectableMenuItemLOfDatepickerPresetL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var DatepickerPresetLToStringL = () => (DatepickerPresetLToStringL = dart.constFn(dart.fnType(StringL(), [DatepickerPresetL()])))();
  var MenuItemGroupWithSelectionOfDatepickerPresetL = () => (MenuItemGroupWithSelectionOfDatepickerPresetL = dart.constFn(selectable_menu.MenuItemGroupWithSelection$(DatepickerPresetL())))();
  var MenuItemGroupL = () => (MenuItemGroupL = dart.constFn(dart.legacy(menu.MenuItemGroup)))();
  var JSArrayOfMenuItemGroupL = () => (JSArrayOfMenuItemGroupL = dart.constFn(_interceptors.JSArray$(MenuItemGroupL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ObservableReferenceOfboolL = () => (ObservableReferenceOfboolL = dart.constFn(observable.ObservableReference$(boolL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/date_range_editor.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_range_editor.DateRangeEditorComponent._renderAlternativePreset, DatepickerPresetLToStringL());
    },
    get C1() {
      return C1 = dart.fn(date_range_editor.DateRangeEditorComponent._renderPreset, DatepickerPresetLToStringL());
    }
  }, false);
  var _useMenuForPresets = dart.privateName(date_range_editor, "_useMenuForPresets");
  var _presets = dart.privateName(date_range_editor, "_presets");
  var _validPresets = dart.privateName(date_range_editor, "_validPresets");
  var _minDate = dart.privateName(date_range_editor, "_minDate");
  var _maxDate = dart.privateName(date_range_editor, "_maxDate");
  var _presetsMenu = dart.privateName(date_range_editor, "_presetsMenu");
  var _isCalendarCreated = dart.privateName(date_range_editor, "_isCalendarCreated");
  var _daysToToday = dart.privateName(date_range_editor, "_daysToToday");
  var _daysToYesterday = dart.privateName(date_range_editor, "_daysToYesterday");
  var _clock = dart.privateName(date_range_editor, "_clock");
  var _today = dart.privateName(date_range_editor, "_today");
  var _controller = dart.privateName(date_range_editor, "_controller");
  var _presetSelection = dart.privateName(date_range_editor, "_presetSelection");
  var _monthSelectorState = dart.privateName(date_range_editor, "_monthSelectorState");
  var _visibleMonth = dart.privateName(date_range_editor, "_visibleMonth");
  var _visibleMonthName = dart.privateName(date_range_editor, "_visibleMonthName");
  var _elementRef$ = dart.privateName(date_range_editor, "_elementRef");
  var _domService$ = dart.privateName(date_range_editor, "_domService");
  var _ngZone$ = dart.privateName(date_range_editor, "_ngZone");
  var _updateValidPresets = dart.privateName(date_range_editor, "_updateValidPresets");
  var _parseDaysInput = dart.privateName(date_range_editor, "_parseDaysInput");
  var _createDaysToTodayRange = dart.privateName(date_range_editor, "_createDaysToTodayRange");
  var _createDaysToYesterdayRange = dart.privateName(date_range_editor, "_createDaysToYesterdayRange");
  var _buildMenu = dart.privateName(date_range_editor, "_buildMenu");
  var C0;
  var C1;
  var model = dart.privateName(date_range_editor, "DateRangeEditorComponent.model");
  var allowHighlightUpdates = dart.privateName(date_range_editor, "DateRangeEditorComponent.allowHighlightUpdates");
  var supportsComparison = dart.privateName(date_range_editor, "DateRangeEditorComponent.supportsComparison");
  var compact = dart.privateName(date_range_editor, "DateRangeEditorComponent.compact");
  var movingStartMaintainsLength = dart.privateName(date_range_editor, "DateRangeEditorComponent.movingStartMaintainsLength");
  var supportsDaysInputs = dart.privateName(date_range_editor, "DateRangeEditorComponent.supportsDaysInputs");
  var dateFormat = dart.privateName(date_range_editor, "DateRangeEditorComponent.dateFormat");
  var activeDateFormat = dart.privateName(date_range_editor, "DateRangeEditorComponent.activeDateFormat");
  var supportsClearRange = dart.privateName(date_range_editor, "DateRangeEditorComponent.supportsClearRange");
  var calendarPicker = dart.privateName(date_range_editor, "DateRangeEditorComponent.calendarPicker");
  var monthSelector = dart.privateName(date_range_editor, "DateRangeEditorComponent.monthSelector");
  var supportsCustomRange = dart.privateName(date_range_editor, "DateRangeEditorComponent.supportsCustomRange");
  var supportsMonthSelector = dart.privateName(date_range_editor, "DateRangeEditorComponent.supportsMonthSelector");
  var relativeDaysToToday = dart.privateName(date_range_editor, "DateRangeEditorComponent.relativeDaysToToday");
  var daysToTodayRange = dart.privateName(date_range_editor, "DateRangeEditorComponent.daysToTodayRange");
  var daysToYesterdayRange = dart.privateName(date_range_editor, "DateRangeEditorComponent.daysToYesterdayRange");
  var nextPrevModel = dart.privateName(date_range_editor, "DateRangeEditorComponent.nextPrevModel");
  var showMonthSelector = dart.privateName(date_range_editor, "DateRangeEditorComponent.showMonthSelector");
  date_range_editor.DateRangeEditorComponent = class DateRangeEditorComponent extends core.Object {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get allowHighlightUpdates() {
      return this[allowHighlightUpdates];
    }
    set allowHighlightUpdates(value) {
      this[allowHighlightUpdates] = value;
    }
    get supportsComparison() {
      return this[supportsComparison];
    }
    set supportsComparison(value) {
      this[supportsComparison] = value;
    }
    get compact() {
      return this[compact];
    }
    set compact(value) {
      this[compact] = value;
    }
    get movingStartMaintainsLength() {
      return this[movingStartMaintainsLength];
    }
    set movingStartMaintainsLength(value) {
      this[movingStartMaintainsLength] = value;
    }
    get supportsDaysInputs() {
      return this[supportsDaysInputs];
    }
    set supportsDaysInputs(value) {
      this[supportsDaysInputs] = value;
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
    get supportsClearRange() {
      return this[supportsClearRange];
    }
    set supportsClearRange(value) {
      this[supportsClearRange] = value;
    }
    get calendarPicker() {
      return this[calendarPicker];
    }
    set calendarPicker(value) {
      this[calendarPicker] = value;
    }
    get monthSelector() {
      return this[monthSelector];
    }
    set monthSelector(value) {
      this[monthSelector] = value;
    }
    get supportsCustomRange() {
      return this[supportsCustomRange];
    }
    set supportsCustomRange(value) {
      this[supportsCustomRange] = value;
    }
    get supportsMonthSelector() {
      return this[supportsMonthSelector];
    }
    set supportsMonthSelector(value) {
      this[supportsMonthSelector] = value;
    }
    get relativeDaysToToday() {
      return this[relativeDaysToToday];
    }
    set relativeDaysToToday(value) {
      this[relativeDaysToToday] = value;
    }
    get daysToTodayRange() {
      return this[daysToTodayRange];
    }
    set daysToTodayRange(value) {
      this[daysToTodayRange] = value;
    }
    get daysToYesterdayRange() {
      return this[daysToYesterdayRange];
    }
    set daysToYesterdayRange(value) {
      this[daysToYesterdayRange] = value;
    }
    get nextPrevModel() {
      return this[nextPrevModel];
    }
    set nextPrevModel(value) {
      this[nextPrevModel] = value;
    }
    get showMonthSelector() {
      return this[showMonthSelector];
    }
    set showMonthSelector(value) {
      this[showMonthSelector] = value;
    }
    get useMenuForPresets() {
      return this[_useMenuForPresets];
    }
    set useMenuForPresets(value) {
      this[_useMenuForPresets] = value;
      if (dart.test(value) && this[_presetsMenu] == null) {
        this[_updateValidPresets]();
      }
    }
    get isCustomComparisonValid() {
      return this.model.isCustomComparisonValid;
    }
    set ranges(ranges) {
      this.presets = ranges[$map](DatepickerPresetL(), dart.fn(range => preset.DatepickerPreset.fromRange(range), DatepickerDateRangeLToDatepickerPresetL()))[$toList]();
    }
    get presets() {
      return this[_presets];
    }
    set presets(presets) {
      this[_presets] = presets;
      this[_updateValidPresets]();
    }
    set minDate(d) {
      this[_minDate] = d;
      this[_updateValidPresets]();
      this.nextPrevModel.update(this[_visibleMonth], this.minDate, this.maxDate);
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(d) {
      this[_maxDate] = d;
      this[_updateValidPresets]();
      this.nextPrevModel.update(this[_visibleMonth], this.minDate, this.maxDate);
    }
    get maxDate() {
      return this[_maxDate];
    }
    get isCalendarCreated() {
      let t0;
      t0 = this[_isCalendarCreated];
      return t0 == null ? false : t0;
    }
    set isCalendarCreated(value) {
      this[_isCalendarCreated] = value;
    }
    set daysToToday(value) {
      let numDays = this[_parseDaysInput](value);
      if (numDays == null) return;
      this[_daysToToday] = value;
      this.daysToTodayRange = this[_createDaysToTodayRange](numDays);
      this.model.selectRange(this.daysToTodayRange.clamp({min: this.minDate, max: this.maxDate}));
    }
    get daysToToday() {
      return this[_daysToToday];
    }
    [_createDaysToTodayRange](numDays) {
      return dart.test(this.relativeDaysToToday) ? new range.LastNDaysToTodayRange.beforeToday(this[_clock], numDays) : range.DatepickerDateRange.new(dart.str(numDays) + " " + dart.str(date_range_editor.DateRangeEditorComponent.daysToTodayMsg), this[_today].add({days: -(dart.notNull(numDays) - 1)}), this[_today], {isPredefined: true});
    }
    set daysToYesterday(value) {
      let numDays = this[_parseDaysInput](value);
      if (numDays == null) return;
      this[_daysToYesterday] = value;
      this.daysToYesterdayRange = this[_createDaysToYesterdayRange](numDays);
      this.model.selectRange(this.daysToYesterdayRange.clamp({min: this.minDate, max: this.maxDate}));
    }
    get daysToYesterday() {
      return this[_daysToYesterday];
    }
    get shouldShowCustomDateRangeColumn() {
      return this.model.shouldShowCustomDateRangeColumn;
    }
    get shouldShowPredefinedList() {
      return dart.test(this[_presets][$isNotEmpty]) && dart.test(this.model.shouldShowPredefinedList);
    }
    get isBasic() {
      return this.model.basic;
    }
    [_createDaysToYesterdayRange](numDays) {
      return new range.LastNDaysRange.beforeToday(this[_clock], numDays);
    }
    get maxDaysInputLength() {
      return 4;
    }
    [_parseDaysInput](value) {
      let numDays = null;
      try {
        numDays = core.int.parse(value);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (FormatExceptionL().is(ex)) {
          return null;
        } else
          throw e;
      }
      if (dart.notNull(numDays) < 1 || dart.notNull(numDays) > dart.notNull(date_range_editor.DateRangeEditorComponent._maxDays)) return null;
      return numDays;
    }
    ngOnInit() {
      this.daysToTodayRange = this[_createDaysToTodayRange](30);
      this.daysToYesterdayRange = this[_createDaysToYesterdayRange](30);
      if (dart.test(this.model.basic)) {
        this.model.shouldShowPredefinedList = true;
        this.model.shouldShowCustomDateRangeColumn = false;
      }
    }
    ngAfterViewInit() {
      if (this[_isCalendarCreated] != null) return;
      this[_domService$].nextFrame.then(core.Null, dart.fn(_ => {
        this[_ngZone$].run(core.Null, dart.fn(() => {
          if (this[_isCalendarCreated] != null) return;
          this[_isCalendarCreated] = true;
        }, VoidToNull()));
      }, numLToNull()));
    }
    focus() {
      let t2, t2$;
      if (this[_elementRef$].querySelector(".preset-list") != null) {
        t2 = this[_elementRef$].querySelector(".preset-list material-select-item.selected");
        t2 == null ? null : t2.focus();
      } else {
        t2$ = this[_elementRef$].querySelector("material-input.active input");
        t2$ == null ? null : t2$.focus();
      }
    }
    get presetRangeSelected() {
      return this[_controller].stream;
    }
    static _renderPreset(value) {
      return value.title;
    }
    static _renderAlternativePreset(value) {
      return value.shortTitle;
    }
    [_updateValidPresets]() {
      let t2, t2$;
      this[_validPresets] = LinkedHashSetOfDatepickerPresetL().new();
      for (let preset of this[_presets]) {
        let isValid = preset.range.clamp({min: this.minDate, max: this.maxDate}) != null;
        if (isValid) this[_validPresets].add(preset);
        if (preset.alternatives != null) {
          for (let alternative of preset.alternatives) {
            let isValidAlternative = alternative.range.clamp({min: this.minDate, max: this.maxDate}) != null;
            if (isValidAlternative) this[_validPresets].add(alternative);
          }
        }
        if (dart.equals((t2$ = (t2 = this.model.value, t2 == null ? null : t2.range), t2$ == null ? null : t2$.unclamped()), preset.range)) {
          this[_presetSelection].select(preset);
        }
      }
      if (dart.test(this.useMenuForPresets)) this[_buildMenu]();
    }
    [_buildMenu]() {
      let items = JSArrayOfSelectableMenuItemLOfDatepickerPresetL().of([]);
      for (let preset of this[_presets]) {
        let subMenu = null;
        if (preset.alternatives != null) {
          let subitems = JSArrayOfSelectableMenuItemLOfDatepickerPresetL().of([]);
          for (let alternative of preset.alternatives) {
            let isValid = this[_validPresets].contains(alternative);
            subitems[$add](new (SelectableMenuItemOfDatepickerPresetL()).new({cssClasses: JSArrayOfStringL().of(["preset-dropdown-item"]), value: alternative, action: dart.fn(() => {
                this.onAlternativePresetClicked(null, preset, alternative);
                this[_presetSelection].select(alternative);
              }, VoidToNull()), itemRenderer: C0 || CT.C0, tooltip: dart.test(isValid) ? null : date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip, selectableState: dart.test(isValid) ? selectable.SelectableOption.Selectable : selectable.SelectableOption.Disabled}));
          }
          subMenu = new menu.MenuModel.new(JSArrayOfMenuItemGroupL().of([new (MenuItemGroupWithSelectionOfDatepickerPresetL()).new({items: subitems, selectionModel: this[_presetSelection]})]));
        }
        let isValid = this[_validPresets].contains(preset);
        items[$add](new (SelectableMenuItemOfDatepickerPresetL()).new({value: preset, action: dart.fn(() => {
            this[_presetSelection].select(preset);
            this.onRangeClicked(null, preset.range);
          }, VoidToNull()), itemRenderer: C1 || CT.C1, tooltip: dart.test(isValid) ? null : date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip, selectableState: dart.test(isValid) ? selectable.SelectableOption.Selectable : selectable.SelectableOption.Disabled, subMenu: subMenu}));
      }
      this[_presetsMenu] = new menu.MenuModel.new(JSArrayOfMenuItemGroupL().of([new (MenuItemGroupWithSelectionOfDatepickerPresetL()).new({items: items, selectionModel: this[_presetSelection]})]));
    }
    onRangeClicked(event, range) {
      if (dart.test(this[_presetSelection].isNotEmpty) && !dart.equals(this[_presetSelection].selectedValue.range, range)) {
        this[_presetSelection].clear();
      }
      this.model.selectRange(range.clamp({min: this.minDate, max: this.maxDate}));
      this[_controller].add(event);
    }
    onAlternativePresetClicked(event, parent, alternative) {
      for (let i = 0; i < dart.notNull(this[_presets][$length]); i = i + 1) {
        if (dart.equals(this[_presets][$_get](i), parent)) {
          this[_presets][$_set](i, alternative);
          if (dart.test(this.useMenuForPresets)) this[_updateValidPresets]();
          break;
        }
      }
      this.onRangeClicked(event, alternative.range);
    }
    onClearRangeClicked(event) {
      this.model.selectRange(null);
      this[_controller].add(event);
    }
    get isClearRangeSelected() {
      return dart.test(this.supportsClearRange) && this.model.value != null && this.model.value.range == null && this.model.value.comparison == null;
    }
    onCustomClicked() {
      let t2;
      let oldRange = (t2 = this.model.value, t2 == null ? null : t2.range);
      this[_presetSelection].clear();
      if (oldRange != null) {
        this.model.selectRange(range.DatepickerDateRange.custom(oldRange.start, oldRange.end).clamp({min: this.minDate, max: this.maxDate}));
      }
      if (dart.test(this.model.basic)) {
        this.model.shouldShowPredefinedList = false;
        this.model.shouldShowCustomDateRangeColumn = true;
      }
    }
    disableCustomMode() {
      if (dart.test(this.model.basic)) {
        this.model.shouldShowPredefinedList = true;
        this.model.shouldShowCustomDateRangeColumn = false;
      }
    }
    onMonthSelectorDropdownClicked() {
      this.showMonthSelector = !dart.test(this.showMonthSelector);
      if (dart.test(this.showMonthSelector)) {
        this[_domService$].scheduleWrite(dart.fn(() => {
          this.monthSelector.scrollToYear(this[_visibleMonth].year);
        }, VoidToNull()));
      }
    }
    set monthSelectorState(state) {
      this[_monthSelectorState] = state;
      if (dart.test(state.has(state.currentSelection))) {
        this.showMonthSelector = false;
        this[_monthSelectorState] = new calendar.CalendarState.empty({resolution: calendar.CalendarResolution.months});
        let selectedMonth = state.selection(state.currentSelection);
        this[_domService$].scheduleWrite(dart.fn(() => {
          this.calendarPicker.scrollToDate(selectedMonth.start);
        }, VoidToNull()));
      }
    }
    get monthSelectorState() {
      return this[_monthSelectorState];
    }
    get visibleMonthName() {
      return this[_visibleMonthName];
    }
    onVisibleMonthChange(month) {
      this[_visibleMonth] = month;
      this[_visibleMonthName] = date_range_editor.DateRangeEditorComponent._monthFormatter.format(month.asUtcTime());
      this.nextPrevModel.update(this[_visibleMonth], this.minDate, this.maxDate);
    }
    isSelected(range) {
      let t2, t2$;
      return dart.equals((t2$ = (t2 = this.model.value, t2 == null ? null : t2.range), t2$ == null ? null : t2$.unclamped()), range);
    }
    isValid(preset) {
      return this[_validPresets].contains(preset);
    }
    isAlternativePresetSelected(alternative) {
      return this[_presets][$contains](alternative);
    }
    get isPredefinedRangeSelected() {
      let t2, t2$, t2$0;
      t2$0 = (t2$ = (t2 = this.model.value, t2 == null ? null : t2.range), t2$ == null ? null : t2$.isPredefined);
      return t2$0 == null ? false : t2$0;
    }
    get isCustomRangeSelected() {
      return !dart.test(this.isClearRangeSelected) && !dart.test(this.isPredefinedRangeSelected);
    }
    get rangeTitle() {
      let t2, t2$, t2$0;
      t2$0 = (t2$ = (t2 = this.model.value, t2 == null ? null : t2.range), t2$ == null ? null : t2$.title);
      return t2$0 == null ? "" : t2$0;
    }
    get customRangeDescription() {
      return date_formatter.formatRange(this.model.range.value);
    }
    get presetsMenu() {
      return this[_presetsMenu];
    }
  };
  (date_range_editor.DateRangeEditorComponent.new = function(_elementRef, _domService, _ngZone, editorHost, clock, legacyClock) {
    let t0;
    this[model] = null;
    this[allowHighlightUpdates] = true;
    this[supportsComparison] = true;
    this[_useMenuForPresets] = false;
    this[compact] = false;
    this[movingStartMaintainsLength] = true;
    this[supportsDaysInputs] = true;
    this[_presets] = JSArrayOfDatepickerPresetL().of([]);
    this[_validPresets] = LinkedHashSetOfDatepickerPresetL().new();
    this[_minDate] = new date.Date.new(1000, 1, 1);
    this[_maxDate] = new date.Date.new(9999, 12, 31);
    this[dateFormat] = null;
    this[activeDateFormat] = null;
    this[_presetsMenu] = null;
    this[_isCalendarCreated] = null;
    this[supportsClearRange] = false;
    this[calendarPicker] = null;
    this[monthSelector] = null;
    this[supportsCustomRange] = true;
    this[supportsMonthSelector] = true;
    this[relativeDaysToToday] = false;
    this[_daysToToday] = dart.str(30);
    this[daysToTodayRange] = null;
    this[_daysToYesterday] = dart.str(30);
    this[daysToYesterdayRange] = null;
    this[_clock] = null;
    this[_today] = null;
    this[_controller] = StreamControllerOfUIEventL().broadcast({sync: true});
    this[_presetSelection] = SingleSelectionModelOfDatepickerPresetL().new();
    this[_monthSelectorState] = new calendar.CalendarState.empty({resolution: calendar.CalendarResolution.months});
    this[_visibleMonth] = null;
    this[_visibleMonthName] = "";
    this[nextPrevModel] = null;
    this[showMonthSelector] = false;
    this[_elementRef$] = _elementRef;
    this[_domService$] = _domService;
    this[_ngZone$] = _ngZone;
    this[_clock] == null ? this[_clock] = legacyClock : null;
    this[_today] = date.Date.today(this[_clock]);
    t0 = editorHost;
    t0 == null ? null : t0.dateRangeEditorCreated(this);
    this.nextPrevModel = new date_range_editor.DateRangeEditorNextPrevModel.new({onNext: dart.fn(() => {
        this.calendarPicker.scrollToDate(this[_visibleMonth].add({months: 1}));
      }, VoidToNull()), onPrev: dart.fn(() => {
        this.calendarPicker.scrollToDate(this[_visibleMonth].add({months: -1}));
      }, VoidToNull())});
  }).prototype = date_range_editor.DateRangeEditorComponent.prototype;
  dart.addTypeTests(date_range_editor.DateRangeEditorComponent);
  dart.addTypeCaches(date_range_editor.DateRangeEditorComponent);
  date_range_editor.DateRangeEditorComponent[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.AfterViewInit, focus_interface.Focusable];
  dart.setMethodSignature(date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getMethods(date_range_editor.DateRangeEditorComponent.__proto__),
    [_createDaysToTodayRange]: dart.fnType(dart.legacy(range.DatepickerDateRange), [dart.legacy(core.int)]),
    [_createDaysToYesterdayRange]: dart.fnType(dart.legacy(range.DatepickerDateRange), [dart.legacy(core.int)]),
    [_parseDaysInput]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    [_updateValidPresets]: dart.fnType(dart.void, []),
    [_buildMenu]: dart.fnType(dart.void, []),
    onRangeClicked: dart.fnType(dart.void, [dart.legacy(html.UIEvent), dart.legacy(range.DatepickerDateRange)]),
    onAlternativePresetClicked: dart.fnType(dart.void, [dart.legacy(html.UIEvent), dart.legacy(preset.DatepickerPreset), dart.legacy(preset.DatepickerPreset)]),
    onClearRangeClicked: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    onCustomClicked: dart.fnType(dart.void, []),
    disableCustomMode: dart.fnType(dart.void, []),
    onMonthSelectorDropdownClicked: dart.fnType(dart.void, []),
    onVisibleMonthChange: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    isSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(range.DatepickerDateRange)]),
    isValid: dart.fnType(dart.legacy(core.bool), [dart.legacy(preset.DatepickerPreset)]),
    isAlternativePresetSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(preset.DatepickerPreset)])
  }));
  dart.setGetterSignature(date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getGetters(date_range_editor.DateRangeEditorComponent.__proto__),
    useMenuForPresets: dart.legacy(core.bool),
    isCustomComparisonValid: dart.legacy(core.bool),
    presets: dart.legacy(core.List$(dart.legacy(preset.DatepickerPreset))),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    isCalendarCreated: dart.legacy(core.bool),
    daysToToday: dart.legacy(core.String),
    daysToYesterday: dart.legacy(core.String),
    shouldShowCustomDateRangeColumn: dart.legacy(core.bool),
    shouldShowPredefinedList: dart.legacy(core.bool),
    isBasic: dart.legacy(core.bool),
    maxDaysInputLength: dart.legacy(core.int),
    presetRangeSelected: dart.legacy(async.Stream$(dart.legacy(html.UIEvent))),
    isClearRangeSelected: dart.legacy(core.bool),
    monthSelectorState: dart.legacy(calendar.CalendarState),
    visibleMonthName: dart.legacy(core.String),
    isPredefinedRangeSelected: dart.legacy(core.bool),
    isCustomRangeSelected: dart.legacy(core.bool),
    rangeTitle: dart.legacy(core.String),
    customRangeDescription: dart.legacy(core.String),
    presetsMenu: dart.legacy(menu.MenuModel)
  }));
  dart.setSetterSignature(date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getSetters(date_range_editor.DateRangeEditorComponent.__proto__),
    useMenuForPresets: dart.legacy(core.bool),
    ranges: dart.legacy(core.List$(dart.legacy(range.DatepickerDateRange))),
    presets: dart.legacy(core.List$(dart.legacy(preset.DatepickerPreset))),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    isCalendarCreated: dart.legacy(core.bool),
    daysToToday: dart.legacy(core.String),
    daysToYesterday: dart.legacy(core.String),
    monthSelectorState: dart.legacy(calendar.CalendarState)
  }));
  dart.setLibraryUri(date_range_editor.DateRangeEditorComponent, L0);
  dart.setFieldSignature(date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getFields(date_range_editor.DateRangeEditorComponent.__proto__),
    model: dart.fieldType(dart.legacy(date_range_editor_model.DateRangeEditorModel)),
    allowHighlightUpdates: dart.fieldType(dart.legacy(core.bool)),
    supportsComparison: dart.fieldType(dart.legacy(core.bool)),
    [_useMenuForPresets]: dart.fieldType(dart.legacy(core.bool)),
    compact: dart.fieldType(dart.legacy(core.bool)),
    movingStartMaintainsLength: dart.fieldType(dart.legacy(core.bool)),
    supportsDaysInputs: dart.fieldType(dart.legacy(core.bool)),
    [_presets]: dart.fieldType(dart.legacy(core.List$(dart.legacy(preset.DatepickerPreset)))),
    [_validPresets]: dart.fieldType(dart.legacy(core.Set$(dart.legacy(preset.DatepickerPreset)))),
    [_minDate]: dart.fieldType(dart.legacy(date.Date)),
    [_maxDate]: dart.fieldType(dart.legacy(date.Date)),
    dateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    activeDateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    [_elementRef$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_presetsMenu]: dart.fieldType(dart.legacy(menu.MenuModel)),
    [_isCalendarCreated]: dart.fieldType(dart.legacy(core.bool)),
    supportsClearRange: dart.fieldType(dart.legacy(core.bool)),
    calendarPicker: dart.fieldType(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)),
    monthSelector: dart.fieldType(dart.legacy(material_month_picker.MaterialMonthPickerComponent)),
    supportsCustomRange: dart.fieldType(dart.legacy(core.bool)),
    supportsMonthSelector: dart.fieldType(dart.legacy(core.bool)),
    relativeDaysToToday: dart.fieldType(dart.legacy(core.bool)),
    [_daysToToday]: dart.fieldType(dart.legacy(core.String)),
    daysToTodayRange: dart.fieldType(dart.legacy(range.DatepickerDateRange)),
    [_daysToYesterday]: dart.fieldType(dart.legacy(core.String)),
    daysToYesterdayRange: dart.fieldType(dart.legacy(range.DatepickerDateRange)),
    [_clock]: dart.fieldType(dart.legacy(clock.Clock)),
    [_today]: dart.fieldType(dart.legacy(date.Date)),
    [_controller]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.UIEvent)))),
    [_presetSelection]: dart.finalFieldType(dart.legacy(selection_model.SingleSelectionModel$(dart.legacy(preset.DatepickerPreset)))),
    [_monthSelectorState]: dart.fieldType(dart.legacy(calendar.CalendarState)),
    [_visibleMonth]: dart.fieldType(dart.legacy(date.Date)),
    [_visibleMonthName]: dart.fieldType(dart.legacy(core.String)),
    nextPrevModel: dart.fieldType(dart.legacy(date_range_editor.DateRangeEditorNextPrevModel)),
    showMonthSelector: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(date_range_editor.DateRangeEditorComponent, {
    /*date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg*/get comparisonHeaderMsg() {
      return intl.Intl.message("Compare", {name: "comparisonHeaderMsg", desc: "Label for a toggle that turns time comparison on/off."});
    },
    /*date_range_editor.DateRangeEditorComponent._defaultNumDays*/get _defaultNumDays() {
      return 30;
    },
    /*date_range_editor.DateRangeEditorComponent._maxDaysInputLength*/get _maxDaysInputLength() {
      return 4;
    },
    /*date_range_editor.DateRangeEditorComponent._maxDays*/get _maxDays() {
      return dart.asNullableInt(math.pow(10, 4) - 1);
    },
    /*date_range_editor.DateRangeEditorComponent._monthFormatter*/get _monthFormatter() {
      return new intl.DateFormat.yMMM();
    },
    /*date_range_editor.DateRangeEditorComponent.navigateBeforeMsg*/get navigateBeforeMsg() {
      return intl.Intl.message("Previous date range", {name: "navigateBeforeMsg", meaning: "Update the calendar display to show the previous time period.", desc: "Label for control button which changes the range of dates shown in" + "the calendar to the previous range of dates."});
    },
    /*date_range_editor.DateRangeEditorComponent.navigateNextMsg*/get navigateNextMsg() {
      return intl.Intl.message("Next date range", {name: "navigateNextMsg", meaning: "Update the calendar display to show the next time period", desc: "Label for control button which changes the range of dates shown in" + "the calendar to the next range of dates."});
    },
    /*date_range_editor.DateRangeEditorComponent.clearRangeMsg*/get clearRangeMsg() {
      return intl.Intl.message("Clear date range", {name: "DateRangeEditorComponent_clearRangeMsg", meaning: "Clear the current range.", desc: "Label for an option in the preset list at the left which " + "clears the current selection."});
    },
    /*date_range_editor.DateRangeEditorComponent.customRangeMsg*/get customRangeMsg() {
      return intl.Intl.message("Custom", {name: "DateRangeEditorComponent_customRangeMsg", meaning: "Replace the current range with a Custom range that has the " + "same endpoints.", desc: "Label for an option in the preset list at the left which " + "replaces the current selection with a \"Custom\" range."});
    },
    /*date_range_editor.DateRangeEditorComponent.daysToTodayMsg*/get daysToTodayMsg() {
      return intl.Intl.message("days up to today", {name: "daysToTodayMsg", desc: "Label for number input which changes the range of dates shown in" + " the calendar to [today - number, today]."});
    },
    /*date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg*/get daysToYesterdayMsg() {
      return intl.Intl.message("days up to yesterday", {name: "daysToYesterdayMsg", desc: "Label for number input which changes the range of dates shown in" + " the calendar to [yesterday - number, yesterday]."});
    },
    /*date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip*/get rangeDisabledTooltip() {
      return intl.Intl.message("No days available", {name: "DateRangeEditorComponent_rangeDisabledTooltip", desc: "Message that explains why a date range is invalid."});
    }
  }, true);
  var onNext$ = dart.privateName(date_range_editor, "DateRangeEditorNextPrevModel.onNext");
  var onPrev$ = dart.privateName(date_range_editor, "DateRangeEditorNextPrevModel.onPrev");
  var hasNext = dart.privateName(date_range_editor, "DateRangeEditorNextPrevModel.hasNext");
  var hasPrev = dart.privateName(date_range_editor, "DateRangeEditorNextPrevModel.hasPrev");
  date_range_editor.DateRangeEditorNextPrevModel = class DateRangeEditorNextPrevModel extends core.Object {
    get onNext() {
      return this[onNext$];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onPrev() {
      return this[onPrev$];
    }
    set onPrev(value) {
      super.onPrev = value;
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
    next() {
      return this.onNext();
    }
    prev() {
      return this.onPrev();
    }
    update(visibleMonth, minDate, maxDate) {
      if (visibleMonth == null) return;
      this.hasPrev.value = dart.notNull(calendar.compareDatesAtResolution(visibleMonth, minDate, calendar.CalendarResolution.months)) > 0;
      this.hasNext.value = dart.notNull(calendar.compareDatesAtResolution(visibleMonth, maxDate, calendar.CalendarResolution.months)) < 0;
    }
  };
  (date_range_editor.DateRangeEditorNextPrevModel.new = function(opts) {
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onPrev = opts && 'onPrev' in opts ? opts.onPrev : null;
    this[hasNext] = new (ObservableReferenceOfboolL()).new(false);
    this[hasPrev] = new (ObservableReferenceOfboolL()).new(false);
    this[onNext$] = onNext;
    this[onPrev$] = onPrev;
    ;
  }).prototype = date_range_editor.DateRangeEditorNextPrevModel.prototype;
  dart.addTypeTests(date_range_editor.DateRangeEditorNextPrevModel);
  dart.addTypeCaches(date_range_editor.DateRangeEditorNextPrevModel);
  date_range_editor.DateRangeEditorNextPrevModel[dart.implements] = () => [sequential.Sequential];
  dart.setMethodSignature(date_range_editor.DateRangeEditorNextPrevModel, () => ({
    __proto__: dart.getMethods(date_range_editor.DateRangeEditorNextPrevModel.__proto__),
    next: dart.fnType(dart.void, []),
    prev: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [dart.legacy(date.Date), dart.legacy(date.Date), dart.legacy(date.Date)])
  }));
  dart.setLibraryUri(date_range_editor.DateRangeEditorNextPrevModel, L0);
  dart.setFieldSignature(date_range_editor.DateRangeEditorNextPrevModel, () => ({
    __proto__: dart.getFields(date_range_editor.DateRangeEditorNextPrevModel.__proto__),
    onNext: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
    onPrev: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
    hasNext: dart.fieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool)))),
    hasPrev: dart.fieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool))))
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor", {
    "package:angular_components/material_datepicker/date_range_editor.dart": date_range_editor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.dart"],"names":[],"mappings":"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","file":"date_range_editor.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor: date_range_editor
  };
}));

//# sourceMappingURL=date_range_editor.unsound.ddc.js.map
