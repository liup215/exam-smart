define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_input/material_input.template', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_datepicker/date_input', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/quiver/src/time/clock', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/model/date/date', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_datepicker/date_range_input.scss.css.shim'], (function load__packages__angular_components__material_datepicker__date_range_input_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_input__material_input$46template, packages__angular__src__runtime__interpolate, packages__angular__src__bootstrap__modules, packages__angular_components__material_input__deferred_validator, packages__angular_components__material_input__material_input, packages__angular_components__material_datepicker__date_input, packages__angular_compiler__v1__src__metadata__di_tokens, packages__quiver__src__time__clock, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__model__date__date, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_datepicker__date_range_input, packages__angular__angular$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__date_input$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_datepicker__date_range_input$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const date_input = packages__angular_components__material_datepicker__date_input.material_datepicker__date_input;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const date = packages__angular_components__model__date__date.model__date__date;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const date_range_input = packages__angular_components__material_datepicker__date_range_input.material_datepicker__date_range_input;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date_input$46template = packages__angular_components__material_datepicker__date_input$46template.material_datepicker__date_input$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const date_range_input$46scss$46css$46shim = packages__angular_components__material_datepicker__date_range_input$46scss$46css$46shim.material_datepicker__date_range_input$46scss$46css$46shim;
  var date_range_input$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var DateInputDirectiveL = () => (DateInputDirectiveL = dart.constFn(dart.legacy(date_input.DateInputDirective)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToDateInputDirectiveL = () => (VoidToDateInputDirectiveL = dart.constFn(dart.fnType(DateInputDirectiveL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DateRangeInputComponentL = () => (DateRangeInputComponentL = dart.constFn(dart.legacy(date_range_input.DateRangeInputComponent)))();
  var ComponentFactoryOfDateRangeInputComponentL = () => (ComponentFactoryOfDateRangeInputComponentL = dart.constFn(component_factory.ComponentFactory$(DateRangeInputComponentL())))();
  var HostViewOfDateRangeInputComponentL = () => (HostViewOfDateRangeInputComponentL = dart.constFn(host_view.HostView$(DateRangeInputComponentL())))();
  var HostViewLOfDateRangeInputComponentL = () => (HostViewLOfDateRangeInputComponentL = dart.constFn(dart.legacy(HostViewOfDateRangeInputComponentL())))();
  var VoidToHostViewLOfDateRangeInputComponentL = () => (VoidToHostViewLOfDateRangeInputComponentL = dart.constFn(dart.fnType(HostViewLOfDateRangeInputComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/date_range_input.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: di_tokens.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C3() {
      return C3 = dart.fn(date_range_input$46template.ViewDateRangeInputComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.fn(date_range_input$46template.viewFactory_DateRangeInputComponentHost0, VoidToHostViewLOfDateRangeInputComponentL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfDateRangeInputComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "date-range-input"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(date_range_input$46template, "_compView_0");
  var _DeferredValidator_0_5 = dart.privateName(date_range_input$46template, "_DeferredValidator_0_5");
  var _MaterialInputComponent_0_6 = dart.privateName(date_range_input$46template, "_MaterialInputComponent_0_6");
  var _DateInputDirective_0_7 = dart.privateName(date_range_input$46template, "_DateInputDirective_0_7");
  var _MaterialInputDefaultValueAccessor_0_9 = dart.privateName(date_range_input$46template, "_MaterialInputDefaultValueAccessor_0_9");
  var __NgValidators_0_10 = dart.privateName(date_range_input$46template, "__NgValidators_0_10");
  var _compView_3 = dart.privateName(date_range_input$46template, "_compView_3");
  var _DeferredValidator_3_5 = dart.privateName(date_range_input$46template, "_DeferredValidator_3_5");
  var _MaterialInputComponent_3_6 = dart.privateName(date_range_input$46template, "_MaterialInputComponent_3_6");
  var _DateInputDirective_3_7 = dart.privateName(date_range_input$46template, "_DateInputDirective_3_7");
  var _MaterialInputDefaultValueAccessor_3_9 = dart.privateName(date_range_input$46template, "_MaterialInputDefaultValueAccessor_3_9");
  var __NgValidators_3_10 = dart.privateName(date_range_input$46template, "__NgValidators_3_10");
  var _expr_0 = dart.privateName(date_range_input$46template, "_expr_0");
  var _expr_2 = dart.privateName(date_range_input$46template, "_expr_2");
  var _expr_3 = dart.privateName(date_range_input$46template, "_expr_3");
  var _expr_4 = dart.privateName(date_range_input$46template, "_expr_4");
  var _expr_5 = dart.privateName(date_range_input$46template, "_expr_5");
  var _expr_6 = dart.privateName(date_range_input$46template, "_expr_6");
  var _expr_7 = dart.privateName(date_range_input$46template, "_expr_7");
  var _expr_8 = dart.privateName(date_range_input$46template, "_expr_8");
  var _expr_10 = dart.privateName(date_range_input$46template, "_expr_10");
  var _expr_11 = dart.privateName(date_range_input$46template, "_expr_11");
  var _expr_12 = dart.privateName(date_range_input$46template, "_expr_12");
  var _expr_13 = dart.privateName(date_range_input$46template, "_expr_13");
  var _expr_14 = dart.privateName(date_range_input$46template, "_expr_14");
  var _expr_15 = dart.privateName(date_range_input$46template, "_expr_15");
  var _el_0 = dart.privateName(date_range_input$46template, "_el_0");
  var _el_3 = dart.privateName(date_range_input$46template, "_el_3");
  var _NgValidators_0_10 = dart.privateName(date_range_input$46template, "_NgValidators_0_10");
  var _NgValidators_3_10 = dart.privateName(date_range_input$46template, "_NgValidators_3_10");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var _handleEvent_0 = dart.privateName(date_range_input$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(date_range_input$46template, "_handleEvent_1");
  var C2;
  var C3;
  date_range_input$46template.ViewDateRangeInputComponent0 = class ViewDateRangeInputComponent0 extends component_view.ComponentView$(dart.legacy(date_range_input.DateRangeInputComponent)) {
    get [_NgValidators_0_10]() {
      if (this[__NgValidators_0_10] == null) {
        this[__NgValidators_0_10] = [this[_DeferredValidator_0_5]];
      }
      return this[__NgValidators_0_10];
    }
    get [_NgValidators_3_10]() {
      if (this[__NgValidators_3_10] == null) {
        this[__NgValidators_3_10] = [this[_DeferredValidator_3_5]];
      }
      return this[__NgValidators_3_10];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_input.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      parentRenderNode[$append](this[_el_0]);
      this.updateChildClassNonHtml(this[_el_0], interpolate.interpolateString2("", "start date-input", " ", "themeable", ""));
      dom_helpers.setAttribute(this[_el_0], "dateParsing", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_0_6] = new material_input.MaterialInputComponent.new(null, null, null, this[_compView_0], this[_DeferredValidator_0_5]);
      this[_DateInputDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateInputDirectiveL(), dart.wrapType(DateInputDirectiveL()), dart.fn(() => new date_input.DateInputDirective.new(ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), ClockL().as(this.parentView.injectorGet(dart.wrapType(ClockL()), this.parentIndex)), this[_MaterialInputComponent_0_6]), VoidToDateInputDirectiveL())) : new date_input.DateInputDirective.new(ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), ClockL().as(this.parentView.injectorGet(dart.wrapType(ClockL()), this.parentIndex)), this[_MaterialInputComponent_0_6]);
      this[_MaterialInputDefaultValueAccessor_0_9] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_6], null);
      this[_compView_0].createAndProject(this[_MaterialInputComponent_0_6], JSArrayOfObjectL().of([C1 || CT.C1, C1 || CT.C1]));
      let doc = html.document;
      let _el_1 = dom_helpers.appendSpan(doc, parentRenderNode);
      this.updateChildClass(_el_1, "separator");
      this.addShimE(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "—");
      this[_compView_3] = new material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootElement;
      parentRenderNode[$append](this[_el_3]);
      this.updateChildClassNonHtml(this[_el_3], interpolate.interpolateString2("", "end date-input", " ", "themeable", ""));
      dom_helpers.setAttribute(this[_el_3], "dateParsing", "");
      this.addShimC(HtmlElementL().as(this[_el_3]));
      this[_DeferredValidator_3_5] = new deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_3_6] = new material_input.MaterialInputComponent.new(null, null, null, this[_compView_3], this[_DeferredValidator_3_5]);
      this[_DateInputDirective_3_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateInputDirectiveL(), dart.wrapType(DateInputDirectiveL()), dart.fn(() => new date_input.DateInputDirective.new(ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), ClockL().as(this.parentView.injectorGet(dart.wrapType(ClockL()), this.parentIndex)), this[_MaterialInputComponent_3_6]), VoidToDateInputDirectiveL())) : new date_input.DateInputDirective.new(ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), ClockL().as(this.parentView.injectorGet(dart.wrapType(ClockL()), this.parentIndex)), this[_MaterialInputComponent_3_6]);
      this[_MaterialInputDefaultValueAccessor_3_9] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_3_6], null);
      this[_compView_3].createAndProject(this[_MaterialInputComponent_3_6], JSArrayOfObjectL().of([C1 || CT.C1, C1 || CT.C1]));
      let subscription_0 = this[_MaterialInputComponent_0_6].onFocus.listen(this.eventHandler0(FocusEventL(), dart.bind(_ctx, 'onStartFocused')));
      let subscription_1 = this[_DateInputDirective_0_7].dateChange.listen(this.eventHandler1(DateL(), DateL(), dart.bind(this, _handleEvent_0)));
      let subscription_2 = this[_MaterialInputComponent_3_6].onFocus.listen(this.eventHandler0(FocusEventL(), dart.bind(_ctx, 'onEndFocused')));
      let subscription_3 = this[_DateInputDirective_3_7].dateChange.listen(this.eventHandler1(DateL(), DateL(), dart.bind(this, _handleEvent_1)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_0_5];
        }
        if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialInputComponent_0_6];
        }
        if (token === (C2 || CT.C2)) {
          return this[_NgValidators_0_10];
        }
      }
      if (3 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_3_5];
        }
        if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialInputComponent_3_6];
        }
        if (token === (C2 || CT.C2)) {
          return this[_NgValidators_3_10];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        if (_ctx.startDateMsg != null) {
          this[_MaterialInputComponent_0_6].label = _ctx.startDateMsg;
          changed = true;
        }
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_MaterialInputComponent_0_6].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.isDateInputRequired;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isDateInputRequired", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_MaterialInputComponent_0_6].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_4 = _ctx.startDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "startDateFormat", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_0_7].dateFormat = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.startMaxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "startMaxDate", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_0_7].maxDate = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "minDate", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_0_7].minDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.start;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "start", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_0_7].date = currVal_7;
        this[_expr_7] = currVal_7;
      }
      changed = false;
      if (dart.test(firstCheck)) {
        if (_ctx.endDateMsg != null) {
          this[_MaterialInputComponent_3_6].label = _ctx.endDateMsg;
          changed = true;
        }
      }
      let currVal_10 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "disabled", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_MaterialInputComponent_3_6].disabled = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.isDateInputRequired;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "isDateInputRequired", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_MaterialInputComponent_3_6].required = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DateInputDirective_3_7].rangeEnd = true;
      }
      let currVal_12 = _ctx.endDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "endDateFormat", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_3_7].dateFormat = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "maxDate", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_3_7].maxDate = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.endMinDate;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "endMinDate", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_3_7].minDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.end;
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "end", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        this[_DateInputDirective_3_7].date = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_0 = _ctx.isStartActive;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isStartActive", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_8 = _ctx.isEndActive;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "isEndActive", "asset:angular_components/lib/material_datepicker/date_range_input.dart"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_3], "active", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_0_6].ngAfterViewInit();
          this[_MaterialInputComponent_3_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialInputComponent_0_6].ngOnDestroy();
      this[_DateInputDirective_0_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_9].ngOnDestroy();
      this[_MaterialInputComponent_3_6].ngOnDestroy();
      this[_DateInputDirective_3_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_9].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.start = DateL().as($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.end = DateL().as($36event);
    }
    static _debugClearComponentStyles() {
      date_range_input$46template.ViewDateRangeInputComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = date_range_input$46template.ViewDateRangeInputComponent0._componentStyles;
      if (styles == null) {
        date_range_input$46template.ViewDateRangeInputComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(date_range_input$46template.styles$DateRangeInputComponent, date_range_input$46template.ViewDateRangeInputComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (date_range_input$46template.ViewDateRangeInputComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_MaterialInputComponent_0_6] = null;
    this[_DateInputDirective_0_7] = null;
    this[_MaterialInputDefaultValueAccessor_0_9] = null;
    this[__NgValidators_0_10] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_MaterialInputComponent_3_6] = null;
    this[_DateInputDirective_3_7] = null;
    this[_MaterialInputDefaultValueAccessor_3_9] = null;
    this[__NgValidators_3_10] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    date_range_input$46template.ViewDateRangeInputComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("date-range-input"));
  }).prototype = date_range_input$46template.ViewDateRangeInputComponent0.prototype;
  dart.addTypeTests(date_range_input$46template.ViewDateRangeInputComponent0);
  dart.addTypeCaches(date_range_input$46template.ViewDateRangeInputComponent0);
  dart.setMethodSignature(date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getMethods(date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getGetters(date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_NgValidators_0_10]: dart.legacy(core.List),
    [_NgValidators_3_10]: dart.legacy(core.List)
  }));
  dart.setLibraryUri(date_range_input$46template.ViewDateRangeInputComponent0, L0);
  dart.setFieldSignature(date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getFields(date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_0_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_MaterialInputComponent_0_6]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_DateInputDirective_0_7]: dart.fieldType(dart.legacy(date_input.DateInputDirective)),
    [_MaterialInputDefaultValueAccessor_0_9]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [__NgValidators_0_10]: dart.fieldType(dart.legacy(core.List)),
    [_compView_3]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_3_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_MaterialInputComponent_3_6]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_DateInputDirective_3_7]: dart.fieldType(dart.legacy(date_input.DateInputDirective)),
    [_MaterialInputDefaultValueAccessor_3_9]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [__NgValidators_3_10]: dart.fieldType(dart.legacy(core.List)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(date_range_input$46template.ViewDateRangeInputComponent0, {
    /*date_range_input$46template.ViewDateRangeInputComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  date_range_input$46template._ViewDateRangeInputComponentHost0 = class _ViewDateRangeInputComponentHost0 extends host_view.HostView$(dart.legacy(date_range_input.DateRangeInputComponent)) {
    build() {
      this.componentView = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new date_range_input.DateRangeInputComponent.new(this.componentView);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (date_range_input$46template._ViewDateRangeInputComponentHost0.new = function() {
    date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = date_range_input$46template._ViewDateRangeInputComponentHost0.prototype;
  dart.addTypeTests(date_range_input$46template._ViewDateRangeInputComponentHost0);
  dart.addTypeCaches(date_range_input$46template._ViewDateRangeInputComponentHost0);
  dart.setMethodSignature(date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getMethods(date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_input$46template._ViewDateRangeInputComponentHost0, L0);
  var C4;
  date_range_input$46template.createDateRangeInputComponentFactory = function createDateRangeInputComponentFactory() {
    return new (ComponentFactoryOfDateRangeInputComponentL()).new("date-range-input", C4 || CT.C4);
  };
  date_range_input$46template.viewFactory_DateRangeInputComponentHost0 = function viewFactory_DateRangeInputComponentHost0() {
    return new date_range_input$46template._ViewDateRangeInputComponentHost0.new();
  };
  date_range_input$46template.initReflector = function initReflector() {
    if (dart.test(date_range_input$46template._visited)) {
      return;
    }
    date_range_input$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DateRangeInputComponentL()), date_range_input$46template.createDateRangeInputComponentFactory());
    angular$46template.initReflector();
    calendar$46template.initReflector();
    date_input$46template.initReflector();
    material_input$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(date_range_input$46template, {
    get DateRangeInputComponentNgFactory() {
      return date_range_input$46template._DateRangeInputComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(date_range_input$46template, {
    /*date_range_input$46template.styles$DateRangeInputComponent*/get styles$DateRangeInputComponent() {
      return [date_range_input$46scss$46css$46shim.styles];
    },
    /*date_range_input$46template._DateRangeInputComponentNgFactory*/get _DateRangeInputComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*date_range_input$46template.styles$DateRangeInputComponentHost*/get styles$DateRangeInputComponentHost() {
      return C1 || CT.C1;
    },
    /*date_range_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input.template", {
    "package:angular_components/material_datepicker/date_range_input.template.dart": date_range_input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.template.dart"],"names":[],"mappings":"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","file":"date_range_input.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input$46template: date_range_input$46template
  };
}));

//# sourceMappingURL=date_range_input.template.unsound.ddc.js.map
