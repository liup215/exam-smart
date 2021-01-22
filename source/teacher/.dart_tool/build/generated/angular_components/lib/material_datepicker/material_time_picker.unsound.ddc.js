define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/intl/intl', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/quiver/src/time/clock', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/string_selection_options'], (function load__packages__angular_components__material_datepicker__material_time_picker(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__intl__intl, packages__angular_components__model__selection__selection_model, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_components__interfaces__has_disabled, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__quiver__src__time__clock, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__selection__string_selection_options) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const intl = packages__intl__intl.intl;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const string_selection_options = packages__angular_components__model__selection__string_selection_options.model__selection__string_selection_options;
  var material_time_picker = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $first = dartx.first;
  var $trim = dartx.trim;
  var $isEmpty = dartx.isEmpty;
  var $where = dartx.where;
  var $addAll = dartx.addAll;
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var StreamControllerOfDateTimeL = () => (StreamControllerOfDateTimeL = dart.constFn(async.StreamController$(DateTimeL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var SingleSelectionModelOfDateTimeL = () => (SingleSelectionModelOfDateTimeL = dart.constFn(selection_model.SingleSelectionModel$(DateTimeL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLAndintLToDateTimeL = () => (intLAndintLToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [intL()], [intL()])))();
  var dynamicToDateTimeL = () => (dynamicToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [dart.dynamic])))();
  var ListOfDateTimeL = () => (ListOfDateTimeL = dart.constFn(core.List$(DateTimeL())))();
  var intLToDateTimeL = () => (intLToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [intL()])))();
  var SelectionChangeRecordOfDateTimeL = () => (SelectionChangeRecordOfDateTimeL = dart.constFn(selection_model.SelectionChangeRecord$(DateTimeL())))();
  var SelectionChangeRecordLOfDateTimeL = () => (SelectionChangeRecordLOfDateTimeL = dart.constFn(dart.legacy(SelectionChangeRecordOfDateTimeL())))();
  var ListOfSelectionChangeRecordLOfDateTimeL = () => (ListOfSelectionChangeRecordLOfDateTimeL = dart.constFn(core.List$(SelectionChangeRecordLOfDateTimeL())))();
  var ListLOfSelectionChangeRecordLOfDateTimeL = () => (ListLOfSelectionChangeRecordLOfDateTimeL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfDateTimeL())))();
  var ListLOfSelectionChangeRecordLOfDateTimeLToNull = () => (ListLOfSelectionChangeRecordLOfDateTimeLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfDateTimeL()])))();
  var DateFormatL = () => (DateFormatL = dart.constFn(dart.legacy(intl.DateFormat)))();
  var JSArrayOfDateFormatL = () => (JSArrayOfDateFormatL = dart.constFn(_interceptors.JSArray$(DateFormatL())))();
  var DateFormatLToboolL = () => (DateFormatLToboolL = dart.constFn(dart.fnType(boolL(), [DateFormatL()])))();
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_time_picker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_time_picker.MaterialTimePickerComponent._utcTime, intLAndintLToDateTimeL());
    },
    get C1() {
      return C1 = dart.fn(material_time_picker.MaterialTimePickerComponent._localTime, intLAndintLToDateTimeL());
    },
    get C2() {
      return C2 = dart.constMap(StringL(), ObjectL(), ["minimumTime", "13:35"]);
    },
    get C3() {
      return C3 = dart.constMap(StringL(), ObjectL(), ["maximumTime", "23:59"]);
    }
  }, false);
  var _disposer = dart.privateName(material_time_picker, "_disposer");
  var _timeChangeController = dart.privateName(material_time_picker, "_timeChangeController");
  var _time = dart.privateName(material_time_picker, "_time");
  var _utc = dart.privateName(material_time_picker, "_utc");
  var _popupVisibleController = dart.privateName(material_time_picker, "_popupVisibleController");
  var _popupVisible = dart.privateName(material_time_picker, "_popupVisible");
  var _maxTime = dart.privateName(material_time_picker, "_maxTime");
  var _minTime = dart.privateName(material_time_picker, "_minTime");
  var _increment = dart.privateName(material_time_picker, "_increment");
  var _clock$ = dart.privateName(material_time_picker, "_clock");
  var C0;
  var C1;
  var _validateTime = dart.privateName(material_time_picker, "_validateTime");
  var _parseAndTrySetTime = dart.privateName(material_time_picker, "_parseAndTrySetTime");
  var _parseTime = dart.privateName(material_time_picker, "_parseTime");
  var _parseTimeOfFormats = dart.privateName(material_time_picker, "_parseTimeOfFormats");
  var C2;
  var C3;
  var displayErrorPanel = dart.privateName(material_time_picker, "MaterialTimePickerComponent.displayErrorPanel");
  var inputError = dart.privateName(material_time_picker, "MaterialTimePickerComponent.inputError");
  var outputFormat = dart.privateName(material_time_picker, "MaterialTimePickerComponent.outputFormat");
  var error = dart.privateName(material_time_picker, "MaterialTimePickerComponent.error");
  var disabled = dart.privateName(material_time_picker, "MaterialTimePickerComponent.disabled");
  var required = dart.privateName(material_time_picker, "MaterialTimePickerComponent.required");
  var timeOptions = dart.privateName(material_time_picker, "MaterialTimePickerComponent.timeOptions");
  var selectedTime = dart.privateName(material_time_picker, "MaterialTimePickerComponent.selectedTime");
  var timeInputText = dart.privateName(material_time_picker, "MaterialTimePickerComponent.timeInputText");
  material_time_picker.MaterialTimePickerComponent = class MaterialTimePickerComponent extends keyboard_handler_mixin.KeyboardHandlerMixin {
    get displayErrorPanel() {
      return this[displayErrorPanel];
    }
    set displayErrorPanel(value) {
      this[displayErrorPanel] = value;
    }
    get inputError() {
      return this[inputError];
    }
    set inputError(value) {
      this[inputError] = value;
    }
    get outputFormat() {
      return this[outputFormat];
    }
    set outputFormat(value) {
      this[outputFormat] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get timeOptions() {
      return this[timeOptions];
    }
    set timeOptions(value) {
      this[timeOptions] = value;
    }
    get selectedTime() {
      return this[selectedTime];
    }
    set selectedTime(value) {
      this[selectedTime] = value;
    }
    get timeInputText() {
      return this[timeInputText];
    }
    set timeInputText(value) {
      this[timeInputText] = value;
    }
    static _utcTime(hour, minute = 0) {
      return new core.DateTime.utc(material_time_picker.MaterialTimePickerComponent._unixEpoch.year, material_time_picker.MaterialTimePickerComponent._unixEpoch.month, material_time_picker.MaterialTimePickerComponent._unixEpoch.day, hour, minute);
    }
    static _localTime(hour, minute = 0) {
      return new core.DateTime.new(material_time_picker.MaterialTimePickerComponent._unixEpoch.year, material_time_picker.MaterialTimePickerComponent._unixEpoch.month, material_time_picker.MaterialTimePickerComponent._unixEpoch.day, hour, minute);
    }
    static _withEpochDate(input) {
      if (input == null) return null;
      return dart.test(input.isUtc) ? material_time_picker.MaterialTimePickerComponent._utcTime(input.hour, input.minute) : material_time_picker.MaterialTimePickerComponent._localTime(input.hour, input.minute);
    }
    static _generateTimeOptions(increment, opts) {
      let utc = opts && 'utc' in opts ? opts.utc : false;
      let time = dart.test(utc) ? C0 || CT.C0 : C1 || CT.C1;
      let minutesToTime = dart.fn(minutes => time(intL().as(dart.dsend(minutes, '~/', [60])), intL().as(dart.dsend(minutes, '%', [60]))), dynamicToDateTimeL());
      return ListOfDateTimeL().generate((1440 / dart.notNull(increment))[$truncate](), dart.fn(index => minutesToTime(dart.notNull(index) * dart.notNull(increment)), intLToDateTimeL()));
    }
    set time(value) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      value = dart.test(this.utc) ? (t0 = value, t0 == null ? null : t0.toUtc()) : (t0$ = value, t0$ == null ? null : t0$.toLocal());
      if ((t0$0 = value, t0$0 == null ? null : t0$0.hour) != (t0$1 = this[_time], t0$1 == null ? null : t0$1.hour) || (t0$2 = value, t0$2 == null ? null : t0$2.minute) != (t0$3 = this[_time], t0$3 == null ? null : t0$3.minute) || !dart.equals((t0$4 = value, t0$4 == null ? null : t0$4.isUtc), (t0$5 = this[_time], t0$5 == null ? null : t0$5.isUtc))) {
        this[_time] = value;
        if (this.time != null) {
          this.selectedTime.select(this.time);
        } else {
          this.selectedTime.clear();
        }
        this[_timeChangeController].add(this.time);
      }
      this.setInputErrorText(this[_validateTime](this.time));
      this.timeInputText = this.time == null ? "" : this.renderTime(this.time);
    }
    get time() {
      return material_time_picker.MaterialTimePickerComponent._withEpochDate(this[_time]);
    }
    get utc() {
      return this[_utc];
    }
    set utc(value) {
      this[_utc] = value;
      this.timeOptions = new material_time_picker.TimeSelectionOptions.new(material_time_picker.MaterialTimePickerComponent._generateTimeOptions(this[_increment], {utc: this[_utc]}));
      this.time = this[_time];
    }
    get popupVisibleChange() {
      return this[_popupVisibleController].stream;
    }
    get popupVisible() {
      return this[_popupVisible];
    }
    set popupVisible(visible) {
      this[_popupVisible] = dart.test(visible) && !dart.test(this.disabled);
      this[_popupVisibleController].add(this[_popupVisible]);
    }
    get maxTime() {
      return material_time_picker.MaterialTimePickerComponent._withEpochDate(this[_maxTime]);
    }
    set maxTime(value) {
      this[_maxTime] = value;
      this.timeOptions.maxTime = this[_maxTime];
      if (this[_validateTime](this.time) != null) {
        this.time = null;
      }
    }
    get minTime() {
      return material_time_picker.MaterialTimePickerComponent._withEpochDate(this[_minTime]);
    }
    set minTime(value) {
      this[_minTime] = material_time_picker.MaterialTimePickerComponent._withEpochDate(value);
      this.timeOptions.minTime = this[_minTime];
      if (this[_validateTime](this.time) != null) {
        this.time = null;
      }
    }
    set increment(value) {
      if (dart.notNull(value) < 1) {
        dart.throw(new core.ArgumentError.new("increment must not be less than 1 minute"));
      } else if ((1440)[$modulo](value) !== 0) {
        dart.throw(new core.ArgumentError.new("day divided by increment must not be fractional"));
      } else if ((1440 / dart.notNull(value))[$truncate]() < 2) {
        dart.throw(new core.ArgumentError.new("increment must not be greater than 12 hours"));
      }
      this[_increment] = value;
      this.timeOptions = new material_time_picker.TimeSelectionOptions.new(material_time_picker.MaterialTimePickerComponent._generateTimeOptions(this[_increment], {utc: this[_utc]}));
    }
    get timeChange() {
      return this[_timeChangeController].stream;
    }
    get dropdownText() {
      return this.time != null ? this.renderTime(this.time) : material_time_picker.MaterialTimePickerComponent.dropdownPlaceholderMsg;
    }
    renderTime(time) {
      return this.outputFormat.format(time);
    }
    ngOnInit() {
      this[_disposer].addStreamSubscription(ListLOfSelectionChangeRecordLOfDateTimeL(), this.selectedTime.selectionChanges.listen(dart.fn(change => {
        if (dart.test(change[$last].added[$isNotEmpty])) {
          this.time = this.selectedTime.selectedValues[$first];
        }
      }, ListLOfSelectionChangeRecordLOfDateTimeLToNull())));
    }
    setTimeToNowIfUnset() {
      if (!dart.test(this.disabled) && this.time == null) {
        this.time = material_time_picker.MaterialTimePickerComponent._withEpochDate(this[_clock$].now());
      }
    }
    onTextChange(text) {
      this[_parseAndTrySetTime](text);
      this.selectedTime.clear();
    }
    onBlur() {
      this[_parseAndTrySetTime](this.timeInputText[$trim](), {setAsCurrent: true});
    }
    setInputErrorText(errorText) {
      this.displayErrorPanel = errorText != null;
      this.inputError = errorText;
    }
    [_parseAndTrySetTime](timeText, opts) {
      let setAsCurrent = opts && 'setAsCurrent' in opts ? opts.setAsCurrent : false;
      let parsed = this[_parseTime](timeText);
      if (dart.test(setAsCurrent)) {
        this.time = this.inputError == null ? parsed : this[_time];
      }
      return this.time;
    }
    [_parseTime](timeText) {
      if (timeText[$trim]()[$isEmpty]) {
        this.setInputErrorText(dart.test(this.required) ? material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg : null);
        return null;
      }
      let formatsToParse = JSArrayOfDateFormatL().of([this.outputFormat]);
      formatsToParse[$addAll](material_time_picker.MaterialTimePickerComponent._supportedTimeFormats[$where](dart.fn(f => this.outputFormat.pattern != f.pattern, DateFormatLToboolL())));
      let parsed = this[_parseTimeOfFormats](timeText, formatsToParse);
      if (parsed == null) {
        this.setInputErrorText(material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg);
      } else {
        this.setInputErrorText(this[_validateTime](parsed));
      }
      return parsed;
    }
    [_parseTimeOfFormats](timeText, formats) {
      let trimmed = timeText[$trim]();
      for (let format of formats) {
        try {
          let parsed = format.parseLoose(trimmed, this.utc);
          if (parsed != null) {
            return material_time_picker.MaterialTimePickerComponent._withEpochDate(parsed);
          }
        } catch (e) {
          let ex = dart.getThrown(e);
          if (FormatExceptionL().is(ex)) {
          } else
            throw e;
        }
      }
      return null;
    }
    [_validateTime](value) {
      if (value == null) {
        return dart.test(this.required) ? material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg : null;
      }
      if (this.minTime != null && dart.test(value.isBefore(this.minTime))) {
        return this.timeIsTooEarlyMsg(this.renderTime(this.minTime));
      } else if (this.maxTime != null && dart.test(value.isAfter(this.maxTime))) {
        return this.timeIsTooLateMsg(this.renderTime(this.maxTime));
      }
      return null;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    onInputBoxKeyDown(event) {
      event.stopPropagation();
    }
    handleSpaceKey(event) {
      event.stopPropagation();
    }
    handleEnterKey(event) {
      this.popupVisible = false;
      event.stopPropagation();
    }
    timeIsTooEarlyMsg(minimumTime) {
      return intl.Intl.message("Enter " + dart.str(minimumTime) + " or later", {name: "timeIsTooEarlyMsg", args: JSArrayOfObjectL().of([minimumTime]), examples: C2 || CT.C2, meaning: "Error message", desc: "Displayed when the user enters a valid time, but it's before the " + "minimum time accepted by the time input field."});
    }
    timeIsTooLateMsg(maximumTime) {
      return intl.Intl.message("Enter " + dart.str(maximumTime) + " or earlier", {name: "timeIsTooLateMsg", args: JSArrayOfObjectL().of([maximumTime]), examples: C3 || CT.C3, meaning: "Error message", desc: "Displayed when the user enters a valid time, but it's after the " + "maximum time accepted by the time input field."});
    }
  };
  (material_time_picker.MaterialTimePickerComponent.new = function(_clock) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_timeChangeController] = StreamControllerOfDateTimeL().broadcast();
    this[_time] = null;
    this[displayErrorPanel] = null;
    this[inputError] = null;
    this[outputFormat] = new intl.DateFormat.jm();
    this[error] = null;
    this[disabled] = false;
    this[required] = false;
    this[_utc] = false;
    this[_popupVisibleController] = StreamControllerOfboolL().broadcast();
    this[_popupVisible] = false;
    this[_maxTime] = null;
    this[_minTime] = null;
    this[_increment] = 60;
    this[timeOptions] = null;
    this[selectedTime] = SingleSelectionModelOfDateTimeL().new();
    this[timeInputText] = "";
    this[_clock$] = _clock;
    material_time_picker.MaterialTimePickerComponent.__proto__.new.call(this);
    this.timeOptions = new material_time_picker.TimeSelectionOptions.new(material_time_picker.MaterialTimePickerComponent._generateTimeOptions(this[_increment], {utc: this[_utc]}));
  }).prototype = material_time_picker.MaterialTimePickerComponent.prototype;
  dart.addTypeTests(material_time_picker.MaterialTimePickerComponent);
  dart.addTypeCaches(material_time_picker.MaterialTimePickerComponent);
  material_time_picker.MaterialTimePickerComponent[dart.implements] = () => [has_disabled.HasDisabled, lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getMethods(material_time_picker.MaterialTimePickerComponent.__proto__),
    renderTime: dart.fnType(dart.legacy(core.String), [dart.legacy(core.DateTime)]),
    ngOnInit: dart.fnType(dart.void, []),
    setTimeToNowIfUnset: dart.fnType(dart.void, []),
    onTextChange: dart.fnType(dart.void, [dart.legacy(core.String)]),
    onBlur: dart.fnType(dart.void, []),
    setInputErrorText: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_parseAndTrySetTime]: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.String)], {setAsCurrent: dart.legacy(core.bool)}, {}),
    [_parseTime]: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.String)]),
    [_parseTimeOfFormats]: dart.fnType(dart.legacy(core.DateTime), [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(intl.DateFormat)))]),
    [_validateTime]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.DateTime)]),
    ngOnDestroy: dart.fnType(dart.void, []),
    onInputBoxKeyDown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    timeIsTooEarlyMsg: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    timeIsTooLateMsg: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getGetters(material_time_picker.MaterialTimePickerComponent.__proto__),
    time: dart.legacy(core.DateTime),
    utc: dart.legacy(core.bool),
    popupVisibleChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    popupVisible: dart.legacy(core.bool),
    maxTime: dart.legacy(core.DateTime),
    minTime: dart.legacy(core.DateTime),
    timeChange: dart.legacy(async.Stream$(dart.legacy(core.DateTime))),
    dropdownText: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getSetters(material_time_picker.MaterialTimePickerComponent.__proto__),
    time: dart.legacy(core.DateTime),
    utc: dart.legacy(core.bool),
    popupVisible: dart.legacy(core.bool),
    maxTime: dart.legacy(core.DateTime),
    minTime: dart.legacy(core.DateTime),
    increment: dart.legacy(core.int)
  }));
  dart.setLibraryUri(material_time_picker.MaterialTimePickerComponent, L0);
  dart.setFieldSignature(material_time_picker.MaterialTimePickerComponent, () => ({
    __proto__: dart.getFields(material_time_picker.MaterialTimePickerComponent.__proto__),
    [_clock$]: dart.finalFieldType(dart.legacy(clock.Clock)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_timeChangeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.DateTime)))),
    [_time]: dart.fieldType(dart.legacy(core.DateTime)),
    displayErrorPanel: dart.fieldType(dart.legacy(core.bool)),
    inputError: dart.fieldType(dart.legacy(core.String)),
    outputFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    error: dart.fieldType(dart.legacy(core.String)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    required: dart.fieldType(dart.legacy(core.bool)),
    [_utc]: dart.fieldType(dart.legacy(core.bool)),
    [_popupVisibleController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_popupVisible]: dart.fieldType(dart.legacy(core.bool)),
    [_maxTime]: dart.fieldType(dart.legacy(core.DateTime)),
    [_minTime]: dart.fieldType(dart.legacy(core.DateTime)),
    [_increment]: dart.fieldType(dart.legacy(core.int)),
    timeOptions: dart.fieldType(dart.legacy(material_time_picker.TimeSelectionOptions)),
    selectedTime: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(core.DateTime)))),
    timeInputText: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_time_picker.MaterialTimePickerComponent, {
    /*material_time_picker.MaterialTimePickerComponent.minutesInDay*/get minutesInDay() {
      return 1440;
    },
    /*material_time_picker.MaterialTimePickerComponent._unixEpoch*/get _unixEpoch() {
      return new core.DateTime.new(1970, 1, 1, 0, 0);
    },
    /*material_time_picker.MaterialTimePickerComponent._supportedTimeFormats*/get _supportedTimeFormats() {
      return JSArrayOfDateFormatL().of([new intl.DateFormat.jm(), new intl.DateFormat.Hm(), new intl.DateFormat.jms(), new intl.DateFormat.Hms()]);
    },
    /*material_time_picker.MaterialTimePickerComponent.dropdownPlaceholderMsg*/get dropdownPlaceholderMsg() {
      return intl.Intl.message("Select time", {name: "MaterialTimePickerComponent_dropdownPlaceholderMsg", desc: "Placeholder text for an empty time picker dropdown button."});
    },
    /*material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg*/get inputPlaceholderMsg() {
      return intl.Intl.message("Enter time", {name: "MaterialTimePickerComponent_inputPlaceholderMsg", desc: "Placeholder text for an empty time picker input box."});
    }
  }, true);
  material_time_picker.TimeSelectionOptions = class TimeSelectionOptions extends string_selection_options.StringSelectionOptions$(dart.legacy(core.DateTime)) {
    set minTime(time) {
      return this[_minTime] = time;
    }
    set maxTime(time) {
      return this[_maxTime] = time;
    }
    getSelectable(item) {
      DateTimeL().as(item);
      return DateTimeL().is(item) && (this[_minTime] != null && dart.test(item.isBefore(this[_minTime])) || this[_maxTime] != null && dart.test(item.isAfter(this[_maxTime]))) ? selectable.SelectableOption.Disabled : selectable.SelectableOption.Selectable;
    }
  };
  (material_time_picker.TimeSelectionOptions.new = function(options) {
    this[_minTime] = null;
    this[_maxTime] = null;
    material_time_picker.TimeSelectionOptions.__proto__.new.call(this, options);
    ;
  }).prototype = material_time_picker.TimeSelectionOptions.prototype;
  dart.addTypeTests(material_time_picker.TimeSelectionOptions);
  dart.addTypeCaches(material_time_picker.TimeSelectionOptions);
  material_time_picker.TimeSelectionOptions[dart.implements] = () => [selectable.Selectable$(dart.legacy(core.DateTime))];
  dart.setMethodSignature(material_time_picker.TimeSelectionOptions, () => ({
    __proto__: dart.getMethods(material_time_picker.TimeSelectionOptions.__proto__),
    getSelectable: dart.fnType(dart.legacy(selectable.SelectableOption), [dart.legacy(core.Object)])
  }));
  dart.setSetterSignature(material_time_picker.TimeSelectionOptions, () => ({
    __proto__: dart.getSetters(material_time_picker.TimeSelectionOptions.__proto__),
    minTime: dart.legacy(core.DateTime),
    maxTime: dart.legacy(core.DateTime)
  }));
  dart.setLibraryUri(material_time_picker.TimeSelectionOptions, L0);
  dart.setFieldSignature(material_time_picker.TimeSelectionOptions, () => ({
    __proto__: dart.getFields(material_time_picker.TimeSelectionOptions.__proto__),
    [_minTime]: dart.fieldType(dart.legacy(core.DateTime)),
    [_maxTime]: dart.fieldType(dart.legacy(core.DateTime))
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker", {
    "package:angular_components/material_datepicker/material_time_picker.dart": material_time_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.dart"],"names":[],"mappings":"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","file":"material_time_picker.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker: material_time_picker
  };
}));

//# sourceMappingURL=material_time_picker.unsound.ddc.js.map
