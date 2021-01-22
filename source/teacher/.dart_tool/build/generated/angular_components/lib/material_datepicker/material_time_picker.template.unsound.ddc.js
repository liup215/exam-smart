define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/quiver/src/time/clock', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/string_selection_options.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/material_time_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_time_picker_template(dart_sdk, packages__angular_components__material_select__material_dropdown_select, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_select__material_dropdown_select$46template, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular__src__bootstrap__modules, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__a11y__active_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__model__ui__has_renderer, packages__angular_components__content__deferred_content_aware, packages__angular_components__model__selection__selection_container, packages__angular_components__material_select__activation_handler, packages__angular_components__material_datepicker__material_time_picker, packages__quiver__src__time__clock, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__string_selection_options$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__material_time_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_dropdown_select$46template = packages__angular_components__material_select__material_dropdown_select$46template.material_select__material_dropdown_select$46template;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const string_selection_options$46template = packages__angular_components__model__selection__string_selection_options$46template.model__selection__string_selection_options$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_time_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_time_picker$46scss$46css$46shim.material_datepicker__material_time_picker$46scss$46css$46shim;
  var material_time_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var ViewMaterialDropdownSelectComponent0OfDateTimeL = () => (ViewMaterialDropdownSelectComponent0OfDateTimeL = dart.constFn(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(DateTimeL())))();
  var MaterialDropdownSelectComponentOfDateTimeL = () => (MaterialDropdownSelectComponentOfDateTimeL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(DateTimeL())))();
  var MaterialDropdownSelectComponentLOfDateTimeL = () => (MaterialDropdownSelectComponentLOfDateTimeL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfDateTimeL())))();
  var MaterialDropdownSelectComponentL = () => (MaterialDropdownSelectComponentL = dart.constFn(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToMaterialDropdownSelectComponentLOfDateTimeL = () => (VoidToMaterialDropdownSelectComponentLOfDateTimeL = dart.constFn(dart.fnType(MaterialDropdownSelectComponentLOfDateTimeL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ActiveItemModelL = () => (ActiveItemModelL = dart.constFn(dart.legacy(active_item.ActiveItemModel)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialTimePickerComponentL = () => (MaterialTimePickerComponentL = dart.constFn(dart.legacy(material_time_picker.MaterialTimePickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialTimePickerComponentL = () => (VoidToMaterialTimePickerComponentL = dart.constFn(dart.fnType(MaterialTimePickerComponentL(), [])))();
  var ComponentFactoryOfMaterialTimePickerComponentL = () => (ComponentFactoryOfMaterialTimePickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTimePickerComponentL())))();
  var HostViewOfMaterialTimePickerComponentL = () => (HostViewOfMaterialTimePickerComponentL = dart.constFn(host_view.HostView$(MaterialTimePickerComponentL())))();
  var HostViewLOfMaterialTimePickerComponentL = () => (HostViewLOfMaterialTimePickerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialTimePickerComponentL())))();
  var VoidToHostViewLOfMaterialTimePickerComponentL = () => (VoidToHostViewLOfMaterialTimePickerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialTimePickerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_time_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
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
      return C3 = dart.fn(material_time_picker$46template.ViewMaterialTimePickerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C5() {
      return C5 = dart.fn(material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0, VoidToHostViewLOfMaterialTimePickerComponentL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfMaterialTimePickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-time-picker"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(material_time_picker$46template, "_compView_0");
  var _MaterialDropdownSelectComponent_0_5 = dart.privateName(material_time_picker$46template, "_MaterialDropdownSelectComponent_0_5");
  var __ActiveItemModel_0_13 = dart.privateName(material_time_picker$46template, "__ActiveItemModel_0_13");
  var _compView_3 = dart.privateName(material_time_picker$46template, "_compView_3");
  var _DeferredValidator_3_5 = dart.privateName(material_time_picker$46template, "_DeferredValidator_3_5");
  var _NgValidators_3_6 = dart.privateName(material_time_picker$46template, "_NgValidators_3_6");
  var _NgModel_3_7 = dart.privateName(material_time_picker$46template, "_NgModel_3_7");
  var _MaterialInputComponent_3_9 = dart.privateName(material_time_picker$46template, "_MaterialInputComponent_3_9");
  var _MaterialInputDefaultValueAccessor_3_11 = dart.privateName(material_time_picker$46template, "_MaterialInputDefaultValueAccessor_3_11");
  var _expr_0 = dart.privateName(material_time_picker$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_time_picker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_time_picker$46template, "_expr_2");
  var _expr_5 = dart.privateName(material_time_picker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_time_picker$46template, "_expr_6");
  var _expr_8 = dart.privateName(material_time_picker$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_time_picker$46template, "_expr_9");
  var _expr_11 = dart.privateName(material_time_picker$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_time_picker$46template, "_expr_12");
  var _expr_14 = dart.privateName(material_time_picker$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_time_picker$46template, "_expr_15");
  var _ActiveItemModel_0_13 = dart.privateName(material_time_picker$46template, "_ActiveItemModel_0_13");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var _handleEvent_0 = dart.privateName(material_time_picker$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(material_time_picker$46template, "_handleEvent_1");
  var C2;
  var C3;
  material_time_picker$46template.ViewMaterialTimePickerComponent0 = class ViewMaterialTimePickerComponent0 extends component_view.ComponentView$(dart.legacy(material_time_picker.MaterialTimePickerComponent)) {
    get [_ActiveItemModel_0_13]() {
      if (this[__ActiveItemModel_0_13] == null) {
        this[__ActiveItemModel_0_13] = material_dropdown_select.fromDropdown(this[_MaterialDropdownSelectComponent_0_5]);
      }
      return this[__ActiveItemModel_0_13];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_time_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new (ViewMaterialDropdownSelectComponent0OfDateTimeL()).new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDropdownSelectComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDropdownSelectComponentLOfDateTimeL(), dart.wrapType(MaterialDropdownSelectComponentL()), dart.fn(() => new (MaterialDropdownSelectComponentOfDateTimeL()).new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), null, null, this[_compView_0], _el_0), VoidToMaterialDropdownSelectComponentLOfDateTimeL())) : new (MaterialDropdownSelectComponentOfDateTimeL()).new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), null, null, this[_compView_0], _el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_1, "header", "");
      this.addShimC(HtmlElementL().as(_el_1));
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "time-input-box");
      this.addShimC(_el_2);
      this[_compView_3] = new material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      _el_2[$append](_el_3);
      dom_helpers.setAttribute(_el_3, "type", "text");
      this.addShimC(_el_3);
      this[_DeferredValidator_3_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_3_6] = [this[_DeferredValidator_3_5]];
      this[_NgModel_3_7] = new ng_model.NgModel.new(this[_NgValidators_3_6], null);
      this[_MaterialInputComponent_3_9] = new material_input.MaterialInputComponent.new("text", null, this[_NgModel_3_7], this[_compView_3], this[_DeferredValidator_3_5]);
      this[_MaterialInputDefaultValueAccessor_3_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_3_9], this[_NgModel_3_7]);
      this[_compView_3].createAndProject(this[_MaterialInputComponent_3_9], JSArrayOfObjectL().of([C1 || CT.C1, C1 || CT.C1]));
      this[_compView_0].createAndProject(this[_MaterialDropdownSelectComponent_0_5], JSArrayOfObjectL().of([C1 || CT.C1, JSArrayOfElementL().of([_el_1]), C1 || CT.C1, C1 || CT.C1, C1 || CT.C1, C1 || CT.C1]));
      let subscription_0 = this[_MaterialDropdownSelectComponent_0_5].visibleStream.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_0)));
      _el_1[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
      _el_1[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onInputBoxKeyDown')));
      let subscription_1 = this[_NgModel_3_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1)));
      let subscription_2 = this[_MaterialInputComponent_3_9].onKeypress.listen(this.eventHandler1(StringL(), StringL(), dart.bind(_ctx, 'onTextChange')));
      let subscription_3 = this[_MaterialInputComponent_3_9].onBlur.listen(this.eventHandler0(FocusEventL(), dart.bind(_ctx, 'onBlur')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (3 === nodeIndex) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_3_5];
          }
          if (token === (C2 || CT.C2)) {
            return this[_NgValidators_3_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_3_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_3_9];
          }
        }
        if (token === dart.wrapType(ActiveItemModelL()) && 0 === nodeIndex) {
          return this[_ActiveItemModel_0_13];
        }
        if (token === dart.wrapType(MaterialDropdownSelectComponentL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(SelectionContainerL()) || token === dart.wrapType(PopupSizeProviderL()) || token === dart.wrapType(ActivationHandlerL())) {
          return this[_MaterialDropdownSelectComponent_0_5];
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
        this[_MaterialDropdownSelectComponent_0_5].popupMatchInputWidth = false;
        changed = true;
        this[_MaterialDropdownSelectComponent_0_5].slide = "y";
        changed = true;
        if (dart.bind(_ctx, 'renderTime') !== null) {
          this[_MaterialDropdownSelectComponent_0_5].itemRenderer = dart.bind(_ctx, 'renderTime');
          changed = true;
        }
      }
      let currVal_0 = _ctx.dropdownText;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "dropdownText", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialDropdownSelectComponent_0_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialDropdownSelectComponent_0_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.selectedTime;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "selectedTime", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialDropdownSelectComponent_0_5].selectionInput = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_5 = _ctx.popupVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "popupVisible", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialDropdownSelectComponent_0_5].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.error;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "error", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialDropdownSelectComponent_0_5].error = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.timeOptions;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "timeOptions", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialDropdownSelectComponent_0_5].optionsInput = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialDropdownSelectComponent_0_5].ngAfterChanges();
      }
      changed = false;
      let currVal_9 = _ctx.timeInputText;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "timeInputText", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_NgModel_3_7].model = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_NgModel_3_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_3_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        if (material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg != null) {
          this[_MaterialInputComponent_3_9].label = material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
        if (material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg != null) {
          this[_MaterialInputComponent_3_9].requiredErrorMsg = material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
      }
      let currVal_11 = _ctx.displayErrorPanel;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "displayErrorPanel", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialInputComponent_3_9].displayBottomPanel = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.inputError;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "inputError", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialInputComponent_3_9].error = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "disabled", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialInputComponent_3_9].disabled = currVal_14;
        changed = true;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "required", "package:angular_components/material_datepicker/material_time_picker.html"))) {
        this[_MaterialInputComponent_3_9].required = currVal_15;
        changed = true;
        this[_expr_15] = currVal_15;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_3_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialInputComponent_3_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_11].ngOnDestroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.popupVisible = boolL().as($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.timeInputText = StringL().as($36event);
    }
    static _debugClearComponentStyles() {
      material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_time_picker$46template.styles$MaterialTimePickerComponent, material_time_picker$46template.ViewMaterialTimePickerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_time_picker$46template.ViewMaterialTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    this[__ActiveItemModel_0_13] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_NgValidators_3_6] = null;
    this[_NgModel_3_7] = null;
    this[_MaterialInputComponent_3_9] = null;
    this[_MaterialInputDefaultValueAccessor_3_11] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-time-picker"));
  }).prototype = material_time_picker$46template.ViewMaterialTimePickerComponent0.prototype;
  dart.addTypeTests(material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.addTypeCaches(material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.setMethodSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getGetters(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_ActiveItemModel_0_13]: dart.legacy(active_item.ActiveItemModel)
  }));
  dart.setLibraryUri(material_time_picker$46template.ViewMaterialTimePickerComponent0, L0);
  dart.setFieldSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(dart.legacy(core.DateTime)))),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(core.DateTime)))),
    [__ActiveItemModel_0_13]: dart.fieldType(dart.legacy(active_item.ActiveItemModel)),
    [_compView_3]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_3_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_3_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_3_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_3_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_3_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_time_picker$46template.ViewMaterialTimePickerComponent0, {
    /*material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var C4;
  material_time_picker$46template._ViewMaterialTimePickerComponentHost0 = class _ViewMaterialTimePickerComponentHost0 extends host_view.HostView$(dart.legacy(material_time_picker.MaterialTimePickerComponent)) {
    build() {
      this.componentView = new material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTimePickerComponentL(), dart.wrapType(MaterialTimePickerComponentL()), dart.fn(() => new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.injectorGet(C4 || CT.C4, this.parentIndex))), VoidToMaterialTimePickerComponentL())) : new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.injectorGet(C4 || CT.C4, this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
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
  (material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new = function() {
    material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_time_picker$46template._ViewMaterialTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.addTypeCaches(material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.setMethodSignature(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, L0);
  var C5;
  material_time_picker$46template.createMaterialTimePickerComponentFactory = function createMaterialTimePickerComponentFactory() {
    return new (ComponentFactoryOfMaterialTimePickerComponentL()).new("material-time-picker", C5 || CT.C5);
  };
  material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0 = function viewFactory_MaterialTimePickerComponentHost0() {
    return new material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new();
  };
  material_time_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_time_picker$46template._visited)) {
      return;
    }
    material_time_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTimePickerComponentL()), material_time_picker$46template.createMaterialTimePickerComponentFactory());
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    module$46template.initReflector();
    material_input$46template.initReflector();
    material_dropdown_select$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    string_selection_options$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_time_picker$46template, {
    get MaterialTimePickerComponentNgFactory() {
      return material_time_picker$46template._MaterialTimePickerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C6;
  dart.defineLazy(material_time_picker$46template, {
    /*material_time_picker$46template.styles$MaterialTimePickerComponent*/get styles$MaterialTimePickerComponent() {
      return [material_time_picker$46scss$46css$46shim.styles];
    },
    /*material_time_picker$46template._MaterialTimePickerComponentNgFactory*/get _MaterialTimePickerComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*material_time_picker$46template.styles$MaterialTimePickerComponentHost*/get styles$MaterialTimePickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker.template", {
    "package:angular_components/material_datepicker/material_time_picker.template.dart": material_time_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_time_picker.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker$46template: material_time_picker$46template
  };
}));

//# sourceMappingURL=material_time_picker.template.unsound.ddc.js.map
