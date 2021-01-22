define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_datepicker/model', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_datepicker/comparison', 'packages/angular_components/model/date/date_formatter', 'packages/angular_components/model/date/date', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_datepicker/config', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/material_datepicker/comparison_option', 'packages/intl/intl', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_popup/material_popup'], (function load__packages__angular_components__material_datepicker__material_date_range_picker(dart_sdk, packages__angular_components__laminate__enums__alignment, packages__angular_components__material_datepicker__preset, packages__angular_components__material_datepicker__model, packages__angular_components__model__observable__observable, packages__angular_components__material_datepicker__comparison, packages__angular_components__model__date__date_formatter, packages__angular_components__model__date__date, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_datepicker__config, packages__angular_components__utils__angular__css__css, packages__angular_components__material_datepicker__range, packages__angular_components__material_datepicker__comparison_option, packages__intl__intl, packages__angular_components__mixins__focusable_mixin, packages__angular_components__interfaces__has_disabled, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__material_datepicker__date_range_editor_host, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__focus_interface, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_popup__material_popup) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const preset = packages__angular_components__material_datepicker__preset.material_datepicker__preset;
  const model = packages__angular_components__material_datepicker__model.material_datepicker__model;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const comparison = packages__angular_components__material_datepicker__comparison.material_datepicker__comparison;
  const date_formatter = packages__angular_components__model__date__date_formatter.model__date__date_formatter;
  const date = packages__angular_components__model__date__date.model__date__date;
  const date_range_editor_model = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__date_range_editor_model;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const config$ = packages__angular_components__material_datepicker__config.material_datepicker__config;
  const css = packages__angular_components__utils__angular__css__css.utils__angular__css__css;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const comparison_option = packages__angular_components__material_datepicker__comparison_option.material_datepicker__comparison_option;
  const intl = packages__intl__intl.intl;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  var material_date_range_picker = Object.create(dart.library);
  var $classes = dartx.classes;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isNotEmpty = dartx.isNotEmpty;
  var $contains = dartx.contains;
  var $any = dartx.any;
  var DatepickerPresetL = () => (DatepickerPresetL = dart.constFn(dart.legacy(preset.DatepickerPreset)))();
  var JSArrayOfDatepickerPresetL = () => (JSArrayOfDatepickerPresetL = dart.constFn(_interceptors.JSArray$(DatepickerPresetL())))();
  var DatepickerComparisonL = () => (DatepickerComparisonL = dart.constFn(dart.legacy(comparison.DatepickerComparison)))();
  var ObservableReferenceOfDatepickerComparisonL = () => (ObservableReferenceOfDatepickerComparisonL = dart.constFn(observable.ObservableReference$(DatepickerComparisonL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date.DateRange)))();
  var DateRangeLToStringL = () => (DateRangeLToStringL = dart.constFn(dart.fnType(StringL(), [DateRangeL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var DatepickerDateRangeL = () => (DatepickerDateRangeL = dart.constFn(dart.legacy(range.DatepickerDateRange)))();
  var DatepickerDateRangeLToDatepickerPresetL = () => (DatepickerDateRangeLToDatepickerPresetL = dart.constFn(dart.fnType(DatepickerPresetL(), [DatepickerDateRangeL()])))();
  var DatepickerComparisonLToboolL = () => (DatepickerComparisonLToboolL = dart.constFn(dart.fnType(boolL(), [DatepickerComparisonL()])))();
  var StreamSubscriptionOfDatepickerComparisonL = () => (StreamSubscriptionOfDatepickerComparisonL = dart.constFn(async.StreamSubscription$(DatepickerComparisonL())))();
  var StreamSubscriptionLOfDatepickerComparisonL = () => (StreamSubscriptionLOfDatepickerComparisonL = dart.constFn(dart.legacy(StreamSubscriptionOfDatepickerComparisonL())))();
  var DatepickerComparisonLToNull = () => (DatepickerComparisonLToNull = dart.constFn(dart.fnType(core.Null, [DatepickerComparisonL()])))();
  var StreamSubscriptionOfboolL = () => (StreamSubscriptionOfboolL = dart.constFn(async.StreamSubscription$(boolL())))();
  var StreamSubscriptionLOfboolL = () => (StreamSubscriptionLOfboolL = dart.constFn(dart.legacy(StreamSubscriptionOfboolL())))();
  var DateRangeChangeL = () => (DateRangeChangeL = dart.constFn(dart.legacy(date_range_editor_model.DateRangeChange)))();
  var DateRangeChangeLToDatepickerComparisonL = () => (DateRangeChangeLToDatepickerComparisonL = dart.constFn(dart.fnType(DatepickerComparisonL(), [DateRangeChangeL()])))();
  var StreamSubscriptionOfDateRangeChangeL = () => (StreamSubscriptionOfDateRangeChangeL = dart.constFn(async.StreamSubscription$(DateRangeChangeL())))();
  var StreamSubscriptionLOfDateRangeChangeL = () => (StreamSubscriptionLOfDateRangeChangeL = dart.constFn(dart.legacy(StreamSubscriptionOfDateRangeChangeL())))();
  var DateRangeChangeLToboolL = () => (DateRangeChangeLToboolL = dart.constFn(dart.fnType(boolL(), [DateRangeChangeL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var ComparisonOptionL = () => (ComparisonOptionL = dart.constFn(dart.legacy(comparison_option.ComparisonOption)))();
  var ComparisonOptionLToboolL = () => (ComparisonOptionLToboolL = dart.constFn(dart.fnType(boolL(), [ComparisonOptionL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_datepicker/material_date_range_picker.dart";
  var L1 = "package:angular_components/material_datepicker/material_date_range_picker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_formatter.formatRange, DateRangeLToStringL());
    },
    get C1() {
      return C1 = dart.constMap(StringL(), ObjectL(), ["to", "Jul 21, 2014 - Aug 3, 2015"]);
    }
  }, false);
  var _dateRangeEditor = dart.privateName(material_date_range_picker, "_dateRangeEditor");
  var _focusOnDateRangeEditorInit = dart.privateName(material_date_range_picker, "_focusOnDateRangeEditorInit");
  var _supportsComparison = dart.privateName(material_date_range_picker, "_supportsComparison");
  var _movingStartMaintainsLength = dart.privateName(material_date_range_picker, "_movingStartMaintainsLength");
  var _disabled = dart.privateName(material_date_range_picker, "_disabled");
  var _minDate = dart.privateName(material_date_range_picker, "_minDate");
  var _maxDate = dart.privateName(material_date_range_picker, "_maxDate");
  var _customPlaceHolderMsg = dart.privateName(material_date_range_picker, "_customPlaceHolderMsg");
  var C0;
  var _comparisonOptions = dart.privateName(material_date_range_picker, "_comparisonOptions");
  var _lastState = dart.privateName(material_date_range_picker, "_lastState");
  var _popupVisible = dart.privateName(material_date_range_picker, "_popupVisible");
  var _isEditorCreated = dart.privateName(material_date_range_picker, "_isEditorCreated");
  var _isCalendarCreated = dart.privateName(material_date_range_picker, "_isCalendarCreated");
  var _isApplying = dart.privateName(material_date_range_picker, "_isApplying");
  var _disposer = dart.privateName(material_date_range_picker, "_disposer");
  var _onPopupVisible = dart.privateName(material_date_range_picker, "_onPopupVisible");
  var _formattedRange = dart.privateName(material_date_range_picker, "_formattedRange");
  var _formattedComparison = dart.privateName(material_date_range_picker, "_formattedComparison");
  var _popupSizeProvider$ = dart.privateName(material_date_range_picker, "_popupSizeProvider");
  var _domService$ = dart.privateName(material_date_range_picker, "_domService");
  var _ngZone$ = dart.privateName(material_date_range_picker, "_ngZone");
  var _config = dart.privateName(material_date_range_picker, "_config");
  var _maybeStripComparison = dart.privateName(material_date_range_picker, "_maybeStripComparison");
  var _isPreset = dart.privateName(material_date_range_picker, "_isPreset");
  var _updateFormattedRanges = dart.privateName(material_date_range_picker, "_updateFormattedRanges");
  var _showApplyBar = dart.privateName(material_date_range_picker, "_showApplyBar");
  var _isComparisonOptionsSupported = dart.privateName(material_date_range_picker, "_isComparisonOptionsSupported");
  var _initCalendar = dart.privateName(material_date_range_picker, "_initCalendar");
  var _getFormattedRange = dart.privateName(material_date_range_picker, "_getFormattedRange");
  var _compareMsg = dart.privateName(material_date_range_picker, "_compareMsg");
  var _getFormattedComparison = dart.privateName(material_date_range_picker, "_getFormattedComparison");
  var C1;
  var preferredPositions = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.preferredPositions");
  var presets = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.presets");
  var supportsClearRange = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.supportsClearRange");
  var relativeDaysToToday = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.relativeDaysToToday");
  var configuration = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.configuration");
  var selection = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.selection");
  var showNextPrevButtons = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.showNextPrevButtons");
  var supportsDaysInputs = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.supportsDaysInputs");
  var compact = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.compact");
  var applyButtonLabel = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.applyButtonLabel");
  var dropdownButtonAriaLabel = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.dropdownButtonAriaLabel");
  var dateFormat = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.dateFormat");
  var activeDateFormat = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.activeDateFormat");
  var useMenuForPresets = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.useMenuForPresets");
  var error = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.error");
  var rangeFormatter = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.rangeFormatter");
  var focusOnClose = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.focusOnClose");
  var model$ = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.model");
  var applyBarVisible = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.applyBarVisible");
  var allowHighlightUpdates = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.allowHighlightUpdates");
  var popupClassName = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.popupClassName");
  var popup = dart.privateName(material_date_range_picker, "MaterialDateRangePickerComponent.popup");
  const Object_FocusableMixin$36 = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$36.new = function() {
    focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$36.prototype;
  dart.applyMixin(Object_FocusableMixin$36, focusable_mixin.FocusableMixin);
  material_date_range_picker.MaterialDateRangePickerComponent = class MaterialDateRangePickerComponent extends Object_FocusableMixin$36 {
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get presets() {
      return this[presets];
    }
    set presets(value) {
      this[presets] = value;
    }
    get supportsClearRange() {
      return this[supportsClearRange];
    }
    set supportsClearRange(value) {
      this[supportsClearRange] = value;
    }
    get relativeDaysToToday() {
      return this[relativeDaysToToday];
    }
    set relativeDaysToToday(value) {
      this[relativeDaysToToday] = value;
    }
    get configuration() {
      return this[configuration];
    }
    set configuration(value) {
      this[configuration] = value;
    }
    get selection() {
      return this[selection];
    }
    set selection(value) {
      this[selection] = value;
    }
    get showNextPrevButtons() {
      return this[showNextPrevButtons];
    }
    set showNextPrevButtons(value) {
      this[showNextPrevButtons] = value;
    }
    get supportsDaysInputs() {
      return this[supportsDaysInputs];
    }
    set supportsDaysInputs(value) {
      this[supportsDaysInputs] = value;
    }
    get compact() {
      return this[compact];
    }
    set compact(value) {
      this[compact] = value;
    }
    get applyButtonLabel() {
      return this[applyButtonLabel];
    }
    set applyButtonLabel(value) {
      this[applyButtonLabel] = value;
    }
    get dropdownButtonAriaLabel() {
      return this[dropdownButtonAriaLabel];
    }
    set dropdownButtonAriaLabel(value) {
      this[dropdownButtonAriaLabel] = value;
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
    get useMenuForPresets() {
      return this[useMenuForPresets];
    }
    set useMenuForPresets(value) {
      this[useMenuForPresets] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get rangeFormatter() {
      return this[rangeFormatter];
    }
    set rangeFormatter(value) {
      this[rangeFormatter] = value;
    }
    get focusOnClose() {
      return this[focusOnClose];
    }
    set focusOnClose(value) {
      this[focusOnClose] = value;
    }
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    get applyBarVisible() {
      return this[applyBarVisible];
    }
    set applyBarVisible(value) {
      this[applyBarVisible] = value;
    }
    get allowHighlightUpdates() {
      return this[allowHighlightUpdates];
    }
    set allowHighlightUpdates(value) {
      this[allowHighlightUpdates] = value;
    }
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get popup() {
      return this[popup];
    }
    set popup(value) {
      this[popup] = value;
    }
    set focusableElement(button) {
      this.focusable = button;
    }
    set predefinedRanges(ranges) {
      this.presets = ranges[$map](DatepickerPresetL(), dart.fn(range => preset.DatepickerPreset.fromRange(range), DatepickerDateRangeLToDatepickerPresetL()))[$toList]();
    }
    get supportsCustomRange() {
      return this.configuration == model.DateRangePickerConfiguration.fullyLoaded || this.configuration == model.DateRangePickerConfiguration.basic;
    }
    get isBasic() {
      return this.configuration == model.DateRangePickerConfiguration.basic;
    }
    set supportsComparison(value) {
      let t0;
      this[_supportsComparison] = value;
      if (!dart.test(this.supportsComparison) && (t0 = this.selection.value, t0 == null ? null : t0.comparison) != null) {
        this.selection.value = new comparison.DatepickerComparison.noComparison(this.selection.value.range);
      }
    }
    get supportsComparison() {
      return this[_supportsComparison];
    }
    set movingStartMaintainsLength(value) {
      this[_movingStartMaintainsLength] = value;
    }
    get movingStartMaintainsLength() {
      let t0;
      t0 = this[_movingStartMaintainsLength];
      return t0 == null ? this[_config].movingStartMaintainsLength : t0;
    }
    set disabled(value) {
      this[_disabled] = value;
      if (dart.test(this[_popupVisible]) && dart.test(this.disabled)) this.close();
    }
    get disabled() {
      return this[_disabled];
    }
    set minDate(date) {
      this[_minDate] = date;
      this.model.minDate = this[_minDate];
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(date) {
      this[_maxDate] = date;
      this.model.maxDate = this[_maxDate];
    }
    get maxDate() {
      return this[_maxDate];
    }
    set requireFullPeriods(requireFullPeriods) {
      this.model.requireFullPeriods = requireFullPeriods;
    }
    get requireFullPeriods() {
      return this.model.requireFullPeriods;
    }
    set placeHolderMsg(msg) {
      if (msg == null) return;
      this[_customPlaceHolderMsg] = msg;
    }
    get placeHolderMsg() {
      let t0;
      t0 = this[_customPlaceHolderMsg];
      return t0 == null ? material_date_range_picker.MaterialDateRangePickerComponent._placeHolderMsg : t0;
    }
    set comparisonOptions(options) {
      if (options != null && dart.test(options[$isNotEmpty])) {
        if (!(this[_comparisonOptions] == null || dart.equals(this[_comparisonOptions], options))) dart.assertFailed(null, L0, 331, 14, "_comparisonOptions == null || _comparisonOptions == options");
        this[_comparisonOptions] = options;
        this.model.supportedComparisonOptions = this[_comparisonOptions];
      }
    }
    get isEditorCreated() {
      return this[_isEditorCreated];
    }
    get isCalendarCreated() {
      return this[_isCalendarCreated];
    }
    get range() {
      return this.selection.value;
    }
    set range(cmp) {
      this.selection.value = this[_maybeStripComparison](cmp);
    }
    get rangeChange() {
      return this.selection.stream;
    }
    get onPopupVisible() {
      return this[_onPopupVisible].stream;
    }
    ngOnInit() {
      let t0, t0$;
      t0 = this.model;
      (() => {
        t0.minDate = this.minDate;
        t0.maxDate = this.maxDate;
        t0.requireFullPeriods = this.requireFullPeriods;
        t0.basic = this.isBasic;
        return t0;
      })();
      if (this.selection.value != null) {
        this.model.value = this[_maybeStripComparison](this.selection.value);
      }
      this[_disposer].addFunction(dart.bind(this.model, 'dispose'));
      const _needsApply = modelValue => {
        return !dart.equals(modelValue, this.selection.value) || !dart.test(this[_isPreset](modelValue));
      };
      dart.fn(_needsApply, DatepickerComparisonLToboolL());
      this[_updateFormattedRanges](this.selection.value);
      t0$ = this[_disposer];
      (() => {
        t0$.addDisposable(StreamSubscriptionLOfDatepickerComparisonL(), this.selection.stream.listen(dart.fn(v => {
          this.model.value = this[_maybeStripComparison](v);
          this[_updateFormattedRanges](v);
        }, DatepickerComparisonLToNull())));
        t0$.addDisposable(StreamSubscriptionLOfboolL(), this.model.changes.map(DatepickerComparisonL(), dart.fn(v => v.date, DateRangeChangeLToDatepickerComparisonL())).map(boolL(), _needsApply).listen(dart.bind(this, _showApplyBar)));
        t0$.addDisposable(StreamSubscriptionLOfDateRangeChangeL(), this.model.changes.where(dart.fn(_ => !dart.test(this[_popupVisible]), DateRangeChangeLToboolL())).listen(dart.fn(v => this.selection.value = v.date, DateRangeChangeLToDatepickerComparisonL())));
        return t0$;
      })();
    }
    ngAfterChanges() {
      if (dart.test(this.supportsComparison) && this[_comparisonOptions] != null && this.selection.value != null && !dart.test(this[_isComparisonOptionsSupported](this.selection.value))) {
        dart.throw(new core.UnsupportedError.new("Your comparisonOptions don't support your" + " input datePickerComparison: " + dart.str(this.selection.value)));
      }
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    open() {
      if (dart.test(this[_popupVisible]) || dart.test(this.disabled)) return;
      this[_popupVisible] = true;
      this[_onPopupVisible].add(true);
      this.popup.open();
      this.initEditor();
      this[_domService$].nextFrame.then(core.Null, dart.fn(_ => {
        this[_domService$].nextFrame.then(core.Null, dart.fn(_ => {
          if (!dart.test(this[_popupVisible])) return;
          this[_ngZone$].run(core.Null, dart.fn(() => {
            this.allowHighlightUpdates = true;
            this[_showApplyBar](!dart.test(this[_isPreset](this.selection.value)));
            this[_lastState] = this.model.save();
            this.model.value = new comparison.DatepickerComparison.reclamp(this.model.value, this.minDate, this.maxDate);
            this.model.minDate = this.minDate;
            this.model.maxDate = this.maxDate;
            this.model.basic = this.isBasic;
            this[_initCalendar]();
            this.setFocusToDateRangeEditor();
          }, VoidToNull()));
        }, numLToNull()));
      }, numLToNull()));
    }
    close() {
      if (!dart.test(this[_popupVisible])) return;
      this[_popupVisible] = false;
      this[_onPopupVisible].add(false);
      this.popup.close();
      this[_domService$].nextFrame.then(core.Null, dart.fn(_ => {
        if (dart.test(this[_popupVisible])) return;
        this[_ngZone$].run(core.Null, dart.fn(() => {
          if (!dart.test(this[_isApplying])) {
            this.model.restore(this[_lastState]);
            this.selection.value = this[_lastState].value;
            this[_showApplyBar](!dart.test(this[_isPreset](this[_lastState].value)));
          }
          this[_isApplying] = false;
        }, VoidToNull()));
      }, numLToNull()));
    }
    getMaxHeight(positionY, viewportHeight) {
      let t0, t0$;
      t0$ = (t0 = this[_popupSizeProvider$], t0 == null ? null : t0.getMaxHeight(positionY, viewportHeight));
      return t0$ == null ? 600 : t0$;
    }
    getMaxWidth(positionX, viewportWidth) {
      let t0;
      t0 = this[_popupSizeProvider$];
      return t0 == null ? null : t0.getMaxWidth(positionX, viewportWidth);
    }
    getMinHeight(positionY, viewportHeight) {
      let t0;
      t0 = this[_popupSizeProvider$];
      return t0 == null ? null : t0.getMinHeight(positionY, viewportHeight);
    }
    getMinWidth(positionX, viewportWidth) {
      let t0;
      t0 = this[_popupSizeProvider$];
      return t0 == null ? null : t0.getMinWidth(positionX, viewportWidth);
    }
    [_isPreset](cmp) {
      let t0, t0$, t0$0;
      return (t0 = cmp, t0 == null ? null : t0.comparison) == null && dart.equals((t0$0 = (t0$ = cmp, t0$ == null ? null : t0$.range), t0$0 == null ? null : t0$0.isPredefined), true);
    }
    [_showApplyBar](b) {
      this.applyBarVisible = b;
    }
    onRangeClicked(event) {
      let shouldCloseEagerly = dart.test(this[_isPreset](this.model.value)) || this.model.value.range == null && this.model.value.comparison == null;
      if (shouldCloseEagerly) {
        this.allowHighlightUpdates = false;
        this.apply(event);
      }
    }
    apply(event) {
      this[_isApplying] = true;
      this.selection.value = this.model.value;
      this.close();
      this.focusOnClose.focus(event);
    }
    applyAndPreventDefault(event) {
      this.apply(event);
      event.preventDefault();
    }
    cancel() {
      this.model.restore(this[_lastState]);
      this.selection.value = this[_lastState].value;
      this[_showApplyBar](!dart.test(this[_isPreset](this[_lastState].value)));
      this.close();
      this.focusOnClose.focus();
    }
    cancelAndPreventDefault(event) {
      this.cancel();
      event.preventDefault();
    }
    get hasTitle() {
      let t0, t0$;
      return (t0$ = (t0 = this.selection.value, t0 == null ? null : t0.range), t0$ == null ? null : t0$.title) != null;
    }
    get rangeTitle() {
      let t0, t0$, t0$0;
      t0$0 = (t0$ = (t0 = this.selection.value, t0 == null ? null : t0.range), t0$ == null ? null : t0$.title);
      return t0$0 == null ? "" : t0$0;
    }
    get formattedRange() {
      return this[_formattedRange];
    }
    [_getFormattedRange](value) {
      let t0, t0$;
      return (t0 = value, t0 == null ? null : t0.range) != null ? (t0$ = value.range, this.rangeFormatter(t0$)) : this.placeHolderMsg;
    }
    get hasComparison() {
      let t0;
      return (t0 = this.selection.value, t0 == null ? null : t0.comparison) != null;
    }
    get formattedComparison() {
      return this[_formattedComparison];
    }
    [_getFormattedComparison](value) {
      let t0, t0$;
      return this[_compareMsg]((t0$ = (t0 = value, t0 == null ? null : t0.comparison), this.rangeFormatter(t0$)));
    }
    [_updateFormattedRanges](value) {
      this[_formattedRange] = this[_getFormattedRange](value);
      this[_formattedComparison] = this[_getFormattedComparison](value);
    }
    dateRangeEditorCreated(editor) {
      this[_dateRangeEditor] = editor;
      if (this[_dateRangeEditor] != null && dart.test(this[_focusOnDateRangeEditorInit])) {
        this[_focusOnDateRangeEditorInit] = false;
        this[_dateRangeEditor].focus();
      }
    }
    setFocusToDateRangeEditor() {
      if (this[_dateRangeEditor] != null) {
        this[_dateRangeEditor].focus();
      } else {
        this[_focusOnDateRangeEditorInit] = true;
      }
    }
    initEditor() {
      this[_isEditorCreated] = true;
    }
    [_initCalendar]() {
      this[_isCalendarCreated] = true;
    }
    [_maybeStripComparison](cmp) {
      if (cmp != null && dart.test(cmp.isComparisonEnabled) && !dart.test(this.supportsComparison)) {
        return new comparison.DatepickerComparison.noComparison(cmp.range);
      } else {
        return cmp;
      }
    }
    [_isComparisonOptionsSupported](cmp) {
      return !dart.test(cmp.isComparisonEnabled) || dart.test(this[_comparisonOptions][$contains](comparison_option.ComparisonOption.custom)) || dart.test(this[_comparisonOptions][$any](dart.fn(option => cmp.comparesTo(option), ComparisonOptionLToboolL())));
    }
    get applyButtonMsg() {
      let t0;
      t0 = this.applyButtonLabel;
      return t0 == null ? material_date_range_picker.MaterialDateRangePickerComponent._applyButtonMsg : t0;
    }
    [_compareMsg](to) {
      return intl.Intl.message("Compared: " + dart.str(to), {name: "_compareMsg", desc: "Indicates what date range the current date range is compared to", args: JSArrayOfObjectL().of([to]), examples: C1 || CT.C1});
    }
  };
  (material_date_range_picker.MaterialDateRangePickerComponent.new = function(clock, legacyClock, config, popupClass, _popupSizeProvider, element, _domService, _ngZone) {
    let t0;
    this[_dateRangeEditor] = null;
    this[_focusOnDateRangeEditorInit] = false;
    this[preferredPositions] = alignment.RelativePosition.overlapAlignments;
    this[presets] = JSArrayOfDatepickerPresetL().of([]);
    this[supportsClearRange] = false;
    this[relativeDaysToToday] = false;
    this[configuration] = model.DateRangePickerConfiguration.fullyLoaded;
    this[selection] = new (ObservableReferenceOfDatepickerComparisonL()).new(null);
    this[_supportsComparison] = true;
    this[showNextPrevButtons] = true;
    this[supportsDaysInputs] = true;
    this[compact] = !dart.test(html.window.matchMedia("(pointer: coarse)").matches);
    this[_movingStartMaintainsLength] = null;
    this[applyButtonLabel] = null;
    this[dropdownButtonAriaLabel] = null;
    this[_disabled] = false;
    this[_minDate] = null;
    this[_maxDate] = null;
    this[dateFormat] = null;
    this[activeDateFormat] = null;
    this[useMenuForPresets] = false;
    this[error] = null;
    this[_customPlaceHolderMsg] = null;
    this[rangeFormatter] = C0 || CT.C0;
    this[_comparisonOptions] = null;
    this[focusOnClose] = null;
    this[model$] = new date_range_editor_model.DateRangeEditorModel.new();
    this[_lastState] = null;
    this[_popupVisible] = false;
    this[applyBarVisible] = false;
    this[_isEditorCreated] = false;
    this[_isCalendarCreated] = false;
    this[allowHighlightUpdates] = true;
    this[_isApplying] = false;
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_onPopupVisible] = StreamControllerOfboolL().broadcast();
    this[popup] = null;
    this[_formattedRange] = null;
    this[_formattedComparison] = null;
    this[_popupSizeProvider$] = _popupSizeProvider;
    this[_domService$] = _domService;
    this[_ngZone$] = _ngZone;
    this[_config] = (t0 = config, t0 == null ? new config$.DatepickerConfig.new() : t0);
    this[popupClassName] = css.constructEncapsulatedCss(popupClass, element[$classes]);
    material_date_range_picker.MaterialDateRangePickerComponent.__proto__.new.call(this);
    clock == null ? clock = legacyClock : null;
    let now = clock.now();
    this.minDate = new date.Date.new(dart.notNull(now.year) - 10, 1, 1);
    this.maxDate = new date.Date.new(dart.notNull(now.year) + 10, 12, 31);
  }).prototype = material_date_range_picker.MaterialDateRangePickerComponent.prototype;
  dart.addTypeTests(material_date_range_picker.MaterialDateRangePickerComponent);
  dart.addTypeCaches(material_date_range_picker.MaterialDateRangePickerComponent);
  material_date_range_picker.MaterialDateRangePickerComponent[dart.implements] = () => [has_disabled.HasDisabled, lifecycle_hooks.OnInit, lifecycle_hooks.AfterChanges, lifecycle_hooks.OnDestroy, date_range_editor_host.DateRangeEditorHost, popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getMethods(material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterChanges: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    [_isPreset]: dart.fnType(dart.legacy(core.bool), [dart.legacy(comparison.DatepickerComparison)]),
    [_showApplyBar]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    onRangeClicked: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    apply: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    applyAndPreventDefault: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    cancel: dart.fnType(dart.void, []),
    cancelAndPreventDefault: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    [_getFormattedRange]: dart.fnType(dart.legacy(core.String), [dart.legacy(comparison.DatepickerComparison)]),
    [_getFormattedComparison]: dart.fnType(dart.legacy(core.String), [dart.legacy(comparison.DatepickerComparison)]),
    [_updateFormattedRanges]: dart.fnType(dart.void, [dart.legacy(comparison.DatepickerComparison)]),
    dateRangeEditorCreated: dart.fnType(dart.void, [dart.legacy(focus_interface.Focusable)]),
    setFocusToDateRangeEditor: dart.fnType(dart.void, []),
    initEditor: dart.fnType(dart.void, []),
    [_initCalendar]: dart.fnType(dart.void, []),
    [_maybeStripComparison]: dart.fnType(dart.legacy(comparison.DatepickerComparison), [dart.legacy(comparison.DatepickerComparison)]),
    [_isComparisonOptionsSupported]: dart.fnType(dart.legacy(core.bool), [dart.legacy(comparison.DatepickerComparison)]),
    [_compareMsg]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getGetters(material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    supportsCustomRange: dart.legacy(core.bool),
    isBasic: dart.legacy(core.bool),
    supportsComparison: dart.legacy(core.bool),
    movingStartMaintainsLength: dart.legacy(core.bool),
    disabled: dart.legacy(core.bool),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    requireFullPeriods: dart.legacy(core.bool),
    placeHolderMsg: dart.legacy(core.String),
    isEditorCreated: dart.legacy(core.bool),
    isCalendarCreated: dart.legacy(core.bool),
    range: dart.legacy(comparison.DatepickerComparison),
    rangeChange: dart.legacy(async.Stream$(dart.legacy(comparison.DatepickerComparison))),
    onPopupVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    hasTitle: dart.legacy(core.bool),
    rangeTitle: dart.legacy(core.String),
    formattedRange: dart.legacy(core.String),
    hasComparison: dart.legacy(core.bool),
    formattedComparison: dart.legacy(core.String),
    applyButtonMsg: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getSetters(material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    focusableElement: dart.legacy(button_decorator.ButtonDirective),
    predefinedRanges: dart.legacy(core.List$(dart.legacy(range.DatepickerDateRange))),
    supportsComparison: dart.legacy(core.bool),
    movingStartMaintainsLength: dart.legacy(core.bool),
    disabled: dart.legacy(core.bool),
    minDate: dart.legacy(date.Date),
    maxDate: dart.legacy(date.Date),
    requireFullPeriods: dart.legacy(core.bool),
    placeHolderMsg: dart.legacy(core.String),
    comparisonOptions: dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption))),
    range: dart.legacy(comparison.DatepickerComparison)
  }));
  dart.setLibraryUri(material_date_range_picker.MaterialDateRangePickerComponent, L1);
  dart.setFieldSignature(material_date_range_picker.MaterialDateRangePickerComponent, () => ({
    __proto__: dart.getFields(material_date_range_picker.MaterialDateRangePickerComponent.__proto__),
    [_dateRangeEditor]: dart.fieldType(dart.legacy(focus_interface.Focusable)),
    [_focusOnDateRangeEditorInit]: dart.fieldType(dart.legacy(core.bool)),
    [_popupSizeProvider$]: dart.finalFieldType(dart.legacy(popup_size_provider.PopupSizeProvider)),
    preferredPositions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    presets: dart.fieldType(dart.legacy(core.List$(dart.legacy(preset.DatepickerPreset)))),
    supportsClearRange: dart.fieldType(dart.legacy(core.bool)),
    relativeDaysToToday: dart.fieldType(dart.legacy(core.bool)),
    configuration: dart.fieldType(dart.legacy(model.DateRangePickerConfiguration)),
    selection: dart.fieldType(dart.legacy(observable.ObservableReference$(dart.legacy(comparison.DatepickerComparison)))),
    [_supportsComparison]: dart.fieldType(dart.legacy(core.bool)),
    showNextPrevButtons: dart.fieldType(dart.legacy(core.bool)),
    supportsDaysInputs: dart.fieldType(dart.legacy(core.bool)),
    compact: dart.fieldType(dart.legacy(core.bool)),
    [_movingStartMaintainsLength]: dart.fieldType(dart.legacy(core.bool)),
    applyButtonLabel: dart.fieldType(dart.legacy(core.String)),
    dropdownButtonAriaLabel: dart.fieldType(dart.legacy(core.String)),
    [_disabled]: dart.fieldType(dart.legacy(core.bool)),
    [_minDate]: dart.fieldType(dart.legacy(date.Date)),
    [_maxDate]: dart.fieldType(dart.legacy(date.Date)),
    dateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    activeDateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    useMenuForPresets: dart.fieldType(dart.legacy(core.bool)),
    error: dart.fieldType(dart.legacy(core.String)),
    [_customPlaceHolderMsg]: dart.fieldType(dart.legacy(core.String)),
    rangeFormatter: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(date.DateRange)]))),
    [_comparisonOptions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(comparison_option.ComparisonOption)))),
    focusOnClose: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    model: dart.finalFieldType(dart.legacy(date_range_editor_model.DateRangeEditorModel)),
    [_lastState]: dart.fieldType(dart.legacy(date_range_editor_model.ModelState)),
    [_popupVisible]: dart.fieldType(dart.legacy(core.bool)),
    applyBarVisible: dart.fieldType(dart.legacy(core.bool)),
    [_isEditorCreated]: dart.fieldType(dart.legacy(core.bool)),
    [_isCalendarCreated]: dart.fieldType(dart.legacy(core.bool)),
    allowHighlightUpdates: dart.fieldType(dart.legacy(core.bool)),
    [_isApplying]: dart.fieldType(dart.legacy(core.bool)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_onPopupVisible]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_config]: dart.finalFieldType(dart.legacy(config$.DatepickerConfig)),
    popupClassName: dart.finalFieldType(dart.legacy(core.String)),
    popup: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [_formattedRange]: dart.fieldType(dart.legacy(core.String)),
    [_formattedComparison]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_date_range_picker.MaterialDateRangePickerComponent, {
    /*material_date_range_picker.MaterialDateRangePickerComponent.cancelButtonMsg*/get cancelButtonMsg() {
      return intl.Intl.message("Cancel", {meaning: "Button in a date picker", desc: "Label for a \"cancel\" button -- abandon the current date" + " selection and go back to whatever it was before the user" + " opened the date picker"});
    },
    /*material_date_range_picker.MaterialDateRangePickerComponent._applyButtonMsg*/get _applyButtonMsg() {
      return intl.Intl.message("Apply", {name: "_applyButtonMsg", meaning: "Button in a date picker", desc: "Label for an \"Apply\" button -- accept and apply the date range " + "seen in the date picker."});
    },
    /*material_date_range_picker.MaterialDateRangePickerComponent._placeHolderMsg*/get _placeHolderMsg() {
      return intl.Intl.message("Select a date range", {name: "_placeHolderMsg", desc: "Placeholder text for a date range picker with an empty range."});
    }
  }, true);
  dart.defineLazy(material_date_range_picker, {
    /*material_date_range_picker._defaultMaxHeight*/get _defaultMaxHeight() {
      return 600;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker", {
    "package:angular_components/material_datepicker/material_date_range_picker.dart": material_date_range_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker: material_date_range_picker
  };
}));

//# sourceMappingURL=material_date_range_picker.unsound.ddc.js.map
