define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/utils/angular/css/css', 'packages/quiver/src/time/clock', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_input/material_input'], (function load__packages__angular_components__material_datepicker__material_datepicker(dart_sdk, packages__intl__intl, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__date__date, packages__angular_components__material_datepicker__calendar, packages__angular_components__material_datepicker__range, packages__angular_components__utils__angular__css__css, packages__quiver__src__time__clock, packages__angular_components__mixins__focusable_mixin, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_input__material_input) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const date = packages__angular_components__model__date__date.model__date__date;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const css = packages__angular_components__utils__angular__css__css.utils__angular__css__css;
  const clock$ = packages__quiver__src__time__clock.src__time__clock;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  var material_datepicker = Object.create(dart.library);
  var $classes = dartx.classes;
  var $isEmpty = dartx.isEmpty;
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var StreamControllerOfDateL = () => (StreamControllerOfDateL = dart.constFn(async.StreamController$(DateL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var SingleDayRangeL = () => (SingleDayRangeL = dart.constFn(dart.legacy(range.SingleDayRange)))();
  var JSArrayOfSingleDayRangeL = () => (JSArrayOfSingleDayRangeL = dart.constFn(_interceptors.JSArray$(SingleDayRangeL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_datepicker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: calendar.CausedBy.prototype,
        [_name]: "CausedBy.external",
        index: 0
      });
    }
  }, false);
  var _controller = dart.privateName(material_datepicker, "_controller");
  var _date = dart.privateName(material_datepicker, "_date");
  var _calendar = dart.privateName(material_datepicker, "_calendar");
  var _disabled = dart.privateName(material_datepicker, "_disabled");
  var _popupVisible = dart.privateName(material_datepicker, "_popupVisible");
  var _popupVisibleController = dart.privateName(material_datepicker, "_popupVisibleController");
  var _presetDates = dart.privateName(material_datepicker, "_presetDates");
  var _numCalendarWeekRows = dart.privateName(material_datepicker, "_numCalendarWeekRows");
  var _name = dart.privateName(calendar, "_name");
  var C0;
  var _updateLabel = dart.privateName(material_datepicker, "_updateLabel");
  var _setDateInternal = dart.privateName(material_datepicker, "_setDateInternal");
  var _focusTarget = dart.privateName(material_datepicker, "_focusTarget");
  var popupClassName = dart.privateName(material_datepicker, "MaterialDatepickerComponent.popupClassName");
  var ariaLabelForDropdownButton = dart.privateName(material_datepicker, "MaterialDatepickerComponent.ariaLabelForDropdownButton");
  var outputFormat = dart.privateName(material_datepicker, "MaterialDatepickerComponent.outputFormat");
  var maxDate = dart.privateName(material_datepicker, "MaterialDatepickerComponent.maxDate");
  var minDate = dart.privateName(material_datepicker, "MaterialDatepickerComponent.minDate");
  var compact = dart.privateName(material_datepicker, "MaterialDatepickerComponent.compact");
  var required = dart.privateName(material_datepicker, "MaterialDatepickerComponent.required");
  var preferredPositions = dart.privateName(material_datepicker, "MaterialDatepickerComponent.preferredPositions");
  var dropdownButton = dart.privateName(material_datepicker, "MaterialDatepickerComponent.dropdownButton");
  var textInput = dart.privateName(material_datepicker, "MaterialDatepickerComponent.textInput");
  var selectDatePlaceHolderMsg = dart.privateName(material_datepicker, "MaterialDatepickerComponent.selectDatePlaceHolderMsg");
  var placeholderMsg = dart.privateName(material_datepicker, "MaterialDatepickerComponent.placeholderMsg");
  var labelMsg = dart.privateName(material_datepicker, "MaterialDatepickerComponent.labelMsg");
  var error = dart.privateName(material_datepicker, "MaterialDatepickerComponent.error");
  const Object_FocusableMixin$36 = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$36.new = function() {
    focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$36.prototype;
  dart.applyMixin(Object_FocusableMixin$36, focusable_mixin.FocusableMixin);
  const Object_KeyboardHandlerMixin$36 = class Object_KeyboardHandlerMixin extends Object_FocusableMixin$36 {};
  (Object_KeyboardHandlerMixin$36.new = function() {
    keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    Object_KeyboardHandlerMixin$36.__proto__.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$36.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
  material_datepicker.MaterialDatepickerComponent = class MaterialDatepickerComponent extends Object_KeyboardHandlerMixin$36 {
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get ariaLabelForDropdownButton() {
      return this[ariaLabelForDropdownButton];
    }
    set ariaLabelForDropdownButton(value) {
      this[ariaLabelForDropdownButton] = value;
    }
    get outputFormat() {
      return this[outputFormat];
    }
    set outputFormat(value) {
      this[outputFormat] = value;
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
    get compact() {
      return this[compact];
    }
    set compact(value) {
      this[compact] = value;
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get dropdownButton() {
      return this[dropdownButton];
    }
    set dropdownButton(value) {
      this[dropdownButton] = value;
    }
    get textInput() {
      return this[textInput];
    }
    set textInput(value) {
      this[textInput] = value;
    }
    get selectDatePlaceHolderMsg() {
      return this[selectDatePlaceHolderMsg];
    }
    set selectDatePlaceHolderMsg(value) {
      this[selectDatePlaceHolderMsg] = value;
    }
    get placeholderMsg() {
      return this[placeholderMsg];
    }
    set placeholderMsg(value) {
      this[placeholderMsg] = value;
    }
    get labelMsg() {
      return this[labelMsg];
    }
    set labelMsg(value) {
      this[labelMsg] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get dateChange() {
      return this[_controller].stream;
    }
    [_setDateInternal](date, opts) {
      let cause = opts && 'cause' in opts ? opts.cause : C0 || CT.C0;
      let closePopup = opts && 'closePopup' in opts ? opts.closePopup : true;
      if (dart.equals(date, this[_date])) return;
      this[_controller].add(date);
      this[_date] = date;
      this[_calendar] = date != null ? this[_calendar].setCurrentSelection(date, date, {cause: cause}) : this[_calendar].clearCurrentSelection();
      this[_updateLabel]();
      if (dart.test(closePopup)) {
        this.popupVisible = false;
      }
    }
    set date(date) {
      this[_setDateInternal](date, {closePopup: false});
    }
    get date() {
      return this[_date];
    }
    get calendar() {
      return this[_calendar];
    }
    set calendar(state) {
      this[_calendar] = state;
      if (!dart.test(state.has(state.currentSelection))) return;
      this[_setDateInternal](state.selection(state.currentSelection).start, {cause: calendar.CausedBy.rangeConfirm});
    }
    set disabled(value) {
      this[_disabled] = value;
      this[_popupVisible] = dart.test(this[_popupVisible]) && !dart.test(this.disabled);
    }
    get disabled() {
      return this[_disabled];
    }
    get popupVisible() {
      return this[_popupVisible];
    }
    get popupVisibleChange() {
      return this[_popupVisibleController].stream;
    }
    set popupVisible(visible) {
      this[_popupVisible] = dart.test(visible) && !dart.test(this.disabled);
      this[_popupVisibleController].add(this[_popupVisible]);
      this.focusable = this[_focusTarget];
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
    }
    handleEscapeKey(event) {
      this.dropdownButton.focus();
    }
    get [_focusTarget]() {
      return dart.test(this.disabled) ? null : dart.test(this[_popupVisible]) ? this.textInput : this.dropdownButton;
    }
    get formattedDate() {
      return this.date != null ? this.date.format(this.outputFormat) : this.selectDatePlaceHolderMsg;
    }
    onTrigger() {
      this.popupVisible = !dart.test(this.disabled);
    }
    get presetDates() {
      return this[_presetDates];
    }
    set presetDates(preset) {
      this[_presetDates] = preset;
      this[_updateLabel]();
    }
    isPresetDateSelected(presetDate) {
      return dart.equals(this.date, presetDate.start);
    }
    [_updateLabel]() {
      if (dart.test(this.presetDates[$isEmpty])) return;
      this.labelMsg = material_datepicker.MaterialDatepickerComponent.customDateMsg;
      for (let presetDate of this.presetDates) {
        if (dart.equals(this.date, presetDate.start)) {
          this.labelMsg = presetDate.title;
          break;
        }
      }
    }
    onPresetClicked(selected) {
      this[_setDateInternal](selected.start);
    }
    setDateFromInput(newDate) {
      this[_setDateInternal](newDate);
    }
    set numCalendarWeekRows(value) {
      this[_numCalendarWeekRows] = value;
    }
    get calendarWeekRowsStyle() {
      return this[_numCalendarWeekRows] != null ? "num-week-rows-" + dart.str(this[_numCalendarWeekRows]) : "";
    }
  };
  (material_datepicker.MaterialDatepickerComponent.new = function(element, popupClass, clock) {
    this[ariaLabelForDropdownButton] = null;
    this[outputFormat] = new intl.DateFormat.yMMMd();
    this[maxDate] = null;
    this[minDate] = null;
    this[compact] = !dart.test(html.window.matchMedia("(pointer: coarse)").matches);
    this[required] = true;
    this[preferredPositions] = alignment.RelativePosition.overlapAlignments;
    this[_controller] = StreamControllerOfDateL().broadcast();
    this[_date] = null;
    this[_calendar] = new calendar.CalendarState.empty();
    this[_disabled] = false;
    this[_popupVisible] = false;
    this[_popupVisibleController] = StreamControllerOfboolL().broadcast();
    this[dropdownButton] = null;
    this[textInput] = null;
    this[selectDatePlaceHolderMsg] = intl.Intl.message("Select a date", {name: "selectDatePlaceHolderMsg", desc: "Placeholder text for datepicker with an empty date."});
    this[placeholderMsg] = intl.Intl.message("Enter date", {name: "placeholderMsg", desc: "Placeholder text for an empty date picker text box."});
    this[_presetDates] = JSArrayOfSingleDayRangeL().of([]);
    this[labelMsg] = null;
    this[_numCalendarWeekRows] = null;
    this[error] = null;
    this[popupClassName] = css.constructEncapsulatedCss(popupClass, element[$classes]);
    material_datepicker.MaterialDatepickerComponent.__proto__.new.call(this);
    clock == null ? clock = new clock$.Clock.new() : null;
    let now = clock.now();
    this.minDate = new date.Date.new(dart.notNull(now.year) - 10, 1, 1);
    this.maxDate = new date.Date.new(dart.notNull(now.year) + 10, 12, 31);
  }).prototype = material_datepicker.MaterialDatepickerComponent.prototype;
  dart.addTypeTests(material_datepicker.MaterialDatepickerComponent);
  dart.addTypeCaches(material_datepicker.MaterialDatepickerComponent);
  material_datepicker.MaterialDatepickerComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit, has_disabled.HasDisabled];
  dart.setMethodSignature(material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getMethods(material_datepicker.MaterialDatepickerComponent.__proto__),
    [_setDateInternal]: dart.fnType(dart.void, [dart.legacy(date.Date)], {cause: dart.legacy(calendar.CausedBy), closePopup: dart.legacy(core.bool)}, {}),
    ngAfterViewInit: dart.fnType(dart.void, []),
    onTrigger: dart.fnType(dart.void, []),
    isPresetDateSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(range.SingleDayRange)]),
    [_updateLabel]: dart.fnType(dart.void, []),
    onPresetClicked: dart.fnType(dart.void, [dart.legacy(range.SingleDayRange)]),
    setDateFromInput: dart.fnType(dart.void, [dart.legacy(date.Date)])
  }));
  dart.setGetterSignature(material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getGetters(material_datepicker.MaterialDatepickerComponent.__proto__),
    dateChange: dart.legacy(async.Stream$(dart.legacy(date.Date))),
    date: dart.legacy(date.Date),
    calendar: dart.legacy(calendar.CalendarState),
    disabled: dart.legacy(core.bool),
    popupVisible: dart.legacy(core.bool),
    popupVisibleChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    [_focusTarget]: dart.legacy(focus_interface.Focusable),
    formattedDate: dart.legacy(core.String),
    presetDates: dart.legacy(core.List$(dart.legacy(range.SingleDayRange))),
    calendarWeekRowsStyle: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getSetters(material_datepicker.MaterialDatepickerComponent.__proto__),
    date: dart.legacy(date.Date),
    calendar: dart.legacy(calendar.CalendarState),
    disabled: dart.legacy(core.bool),
    popupVisible: dart.legacy(core.bool),
    presetDates: dart.legacy(core.List$(dart.legacy(range.SingleDayRange))),
    numCalendarWeekRows: dart.legacy(core.int)
  }));
  dart.setLibraryUri(material_datepicker.MaterialDatepickerComponent, L0);
  dart.setFieldSignature(material_datepicker.MaterialDatepickerComponent, () => ({
    __proto__: dart.getFields(material_datepicker.MaterialDatepickerComponent.__proto__),
    popupClassName: dart.finalFieldType(dart.legacy(core.String)),
    ariaLabelForDropdownButton: dart.fieldType(dart.legacy(core.String)),
    outputFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    maxDate: dart.fieldType(dart.legacy(date.Date)),
    minDate: dart.fieldType(dart.legacy(date.Date)),
    compact: dart.fieldType(dart.legacy(core.bool)),
    required: dart.fieldType(dart.legacy(core.bool)),
    preferredPositions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    [_controller]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(date.Date)))),
    [_date]: dart.fieldType(dart.legacy(date.Date)),
    [_calendar]: dart.fieldType(dart.legacy(calendar.CalendarState)),
    [_disabled]: dart.fieldType(dart.legacy(core.bool)),
    [_popupVisible]: dart.fieldType(dart.legacy(core.bool)),
    [_popupVisibleController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    dropdownButton: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    textInput: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    selectDatePlaceHolderMsg: dart.fieldType(dart.legacy(core.String)),
    placeholderMsg: dart.fieldType(dart.legacy(core.String)),
    [_presetDates]: dart.fieldType(dart.legacy(core.List$(dart.legacy(range.SingleDayRange)))),
    labelMsg: dart.fieldType(dart.legacy(core.String)),
    [_numCalendarWeekRows]: dart.fieldType(dart.legacy(core.int)),
    error: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_datepicker.MaterialDatepickerComponent, {
    /*material_datepicker.MaterialDatepickerComponent.customDateMsg*/get customDateMsg() {
      return intl.Intl.message("Custom", {name: "customDateMsg", desc: "Indicates that a single custom date is selected"});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_datepicker", {
    "package:angular_components/material_datepicker/material_datepicker.dart": material_datepicker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_datepicker.dart"],"names":[],"mappings":"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","file":"material_datepicker.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_datepicker: material_datepicker
  };
}));

//# sourceMappingURL=material_datepicker.unsound.ddc.js.map
