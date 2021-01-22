// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_time_picker.dart';
export 'material_time_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref4;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref5;
import 'package:angular_components/model/selection/select.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref8;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/material_time_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_time_picker.dart' as import2;
import '../material_select/material_dropdown_select.template.dart' as import3;
import 'dart:core';
import '../material_select/material_dropdown_select.dart' as import5;
import '../model/a11y/active_item.dart' as import6;
import '../material_input/material_input.template.dart' as import7;
import '../material_input/deferred_validator.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import '../material_input/material_input.dart' as import10;
import '../material_input/material_input_default_value_accessor.dart' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/views/view.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import '../utils/id_generator/id_generator.dart' as import18;
import '../src/laminate/popup/popup_size_provider.dart' as import19;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import20;
import 'package:angular/src/runtime/dom_helpers.dart' as import21;
import 'package:angular_forms/src/directives/ng_control.dart' as import22;
import '../material_input/base_material_input.dart' as import23;
import '../utils/angular/reference/reference.dart' as import24;
import '../focus/focus_interface.dart' as import25;
import '../interfaces/has_disabled.dart' as import26;
import '../mixins/material_dropdown_base.dart' as import27;
import '../model/ui/has_renderer.dart' as import28;
import '../content/deferred_content_aware.dart' as import29;
import '../model/selection/selection_container.dart' as import30;
import '../material_select/activation_handler.dart' as import31;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import33;

final List<dynamic> styles$MaterialTimePickerComponent = [import0.styles];

class ViewMaterialTimePickerComponent0 extends import1.ComponentView<import2.MaterialTimePickerComponent> {
  import3.ViewMaterialDropdownSelectComponent0<DateTime> _compView_0;
  import5.MaterialDropdownSelectComponent<DateTime> _MaterialDropdownSelectComponent_0_5;
  import6.ActiveItemModel<dynamic> __ActiveItemModel_0_13;
  import7.ViewMaterialInputComponent0 _compView_3;
  import8.DeferredValidator _DeferredValidator_3_5;
  List<dynamic> _NgValidators_3_6;
  import9.NgModel _NgModel_3_7;
  import10.MaterialInputComponent _MaterialInputComponent_3_9;
  import11.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_3_11;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_5;
  var _expr_6;
  var _expr_8;
  var _expr_9;
  var _expr_11;
  var _expr_12;
  var _expr_14;
  var _expr_15;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialTimePickerComponent0(import13.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import15.document.createElement('material-time-picker');
  }
  import6.ActiveItemModel<dynamic> get _ActiveItemModel_0_13 {
    if ((this.__ActiveItemModel_0_13 == null)) {
      (this.__ActiveItemModel_0_13 = import5.fromDropdown(this._MaterialDropdownSelectComponent_0_5));
    }
    return this.__ActiveItemModel_0_13;
  }

  static String get _debugComponentUrl {
    return (import16.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_time_picker.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import15.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewMaterialDropdownSelectComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._MaterialDropdownSelectComponent_0_5 = (import16.isDevMode
        ? import17.debugInjectorWrap(import5.MaterialDropdownSelectComponent, () {
            return import5.MaterialDropdownSelectComponent(this.parentView.injectorGetOptional(import18.IdGenerator, this.parentIndex), this.parentView.injectorGetOptional(import19.PopupSizeProvider, this.parentIndex), this.parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('isRtl'), this.parentIndex), null, null, this._compView_0, _el_0);
          })
        : import5.MaterialDropdownSelectComponent(this.parentView.injectorGetOptional(import18.IdGenerator, this.parentIndex), this.parentView.injectorGetOptional(import19.PopupSizeProvider, this.parentIndex), this.parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('isRtl'), this.parentIndex), null, null, this._compView_0, _el_0));
    final doc = import15.document;
    final _el_1 = doc.createElement('div');
    import21.setAttribute(_el_1, 'header', '');
    this.addShimC(_el_1);
    final _el_2 = import21.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'time-input-box');
    this.addShimC(_el_2);
    this._compView_3 = import7.ViewMaterialInputComponent0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    _el_2.append(_el_3);
    import21.setAttribute(_el_3, 'type', 'text');
    this.addShimC(_el_3);
    this._DeferredValidator_3_5 = import8.DeferredValidator();
    this._NgValidators_3_6 = [this._DeferredValidator_3_5];
    this._NgModel_3_7 = import9.NgModel(this._NgValidators_3_6, null);
    this._MaterialInputComponent_3_9 = import10.MaterialInputComponent('text', null, this._NgModel_3_7, this._compView_3, this._DeferredValidator_3_5);
    this._MaterialInputDefaultValueAccessor_3_11 = import11.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_3_9, this._NgModel_3_7);
    this._compView_3.createAndProject(this._MaterialInputComponent_3_9, [const [], const []]);
    this._compView_0.createAndProject(this._MaterialDropdownSelectComponent_0_5, [
      const [],
      [_el_1],
      const [],
      const [],
      const [],
      const []
    ]);
    final subscription_0 = this._MaterialDropdownSelectComponent_0_5.visibleStream.listen(this.eventHandler1(this._handleEvent_0));
    _el_1.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    _el_1.addEventListener('keydown', this.eventHandler1(_ctx.onInputBoxKeyDown));
    final subscription_1 = this._NgModel_3_7.update.listen(this.eventHandler1(this._handleEvent_1));
    final subscription_2 = this._MaterialInputComponent_3_9.onKeypress.listen(this.eventHandler1(_ctx.onTextChange));
    final subscription_3 = this._MaterialInputComponent_3_9.onBlur.listen(this.eventHandler0(_ctx.onBlur));
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if ((3 == nodeIndex)) {
        if (identical(token, import8.DeferredValidator)) {
          return this._DeferredValidator_3_5;
        }
        if (identical(token, const import20.MultiToken<dynamic>('NgValidators'))) {
          return this._NgValidators_3_6;
        }
        if ((identical(token, import9.NgModel) || identical(token, import22.NgControl))) {
          return this._NgModel_3_7;
        }
        if (((((identical(token, import10.MaterialInputComponent) || identical(token, import23.BaseMaterialInput)) || identical(token, import24.ReferenceDirective)) || identical(token, import25.Focusable)) || identical(token, import26.HasDisabled))) {
          return this._MaterialInputComponent_3_9;
        }
      }
      if ((identical(token, import6.ActiveItemModel) && (0 == nodeIndex))) {
        return this._ActiveItemModel_0_13;
      }
      if ((((((((identical(token, import5.MaterialDropdownSelectComponent) || identical(token, import27.DropdownHandle)) || identical(token, import26.HasDisabled)) || identical(token, import28.HasRenderer)) || identical(token, import29.DeferredContentAware)) || identical(token, import30.SelectionContainer)) || identical(token, import19.PopupSizeProvider)) || identical(token, import31.ActivationHandler))) {
        return this._MaterialDropdownSelectComponent_0_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialDropdownSelectComponent_0_5.popupMatchInputWidth = false;
      changed = true;
      this._MaterialDropdownSelectComponent_0_5.slide = 'y';
      changed = true;
      if (!identical(_ctx.renderTime, null)) {
        this._MaterialDropdownSelectComponent_0_5.itemRenderer = _ctx.renderTime;
        changed = true;
      }
    }
    final currVal_0 = _ctx.dropdownText;
    if (import16.checkBinding(this._expr_0, currVal_0, 'dropdownText', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialDropdownSelectComponent_0_5.buttonText = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import16.checkBinding(this._expr_1, currVal_1, 'disabled', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialDropdownSelectComponent_0_5.disabled = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.selectedTime;
    if (import16.checkBinding(this._expr_2, currVal_2, 'selectedTime', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialDropdownSelectComponent_0_5.selectionInput = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_5 = _ctx.popupVisible;
    if (import16.checkBinding(this._expr_5, currVal_5, 'popupVisible', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialDropdownSelectComponent_0_5.visible = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.error;
    if (import16.checkBinding(this._expr_6, currVal_6, 'error', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialDropdownSelectComponent_0_5.error = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.timeOptions;
    if (import16.checkBinding(this._expr_8, currVal_8, 'timeOptions', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialDropdownSelectComponent_0_5.optionsInput = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._MaterialDropdownSelectComponent_0_5.ngAfterChanges();
    }
    changed = false;
    final currVal_9 = _ctx.timeInputText;
    if (import16.checkBinding(this._expr_9, currVal_9, 'timeInputText', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._NgModel_3_7.model = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    if (changed) {
      this._NgModel_3_7.ngAfterChanges();
    }
    if (((!import16.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_3_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      if (!identical(import2.MaterialTimePickerComponent.inputPlaceholderMsg, null)) {
        this._MaterialInputComponent_3_9.label = import2.MaterialTimePickerComponent.inputPlaceholderMsg;
        changed = true;
      }
      if (!identical(import2.MaterialTimePickerComponent.inputPlaceholderMsg, null)) {
        this._MaterialInputComponent_3_9.requiredErrorMsg = import2.MaterialTimePickerComponent.inputPlaceholderMsg;
        changed = true;
      }
    }
    final currVal_11 = _ctx.displayErrorPanel;
    if (import16.checkBinding(this._expr_11, currVal_11, 'displayErrorPanel', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialInputComponent_3_9.displayBottomPanel = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.inputError;
    if (import16.checkBinding(this._expr_12, currVal_12, 'inputError', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialInputComponent_3_9.error = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    final currVal_14 = _ctx.disabled;
    if (import16.checkBinding(this._expr_14, currVal_14, 'disabled', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialInputComponent_3_9.disabled = currVal_14;
      changed = true;
      this._expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.required;
    if (import16.checkBinding(this._expr_15, currVal_15, 'required', 'package:angular_components/material_datepicker/material_time_picker.html')) {
      this._MaterialInputComponent_3_9.required = currVal_15;
      changed = true;
      this._expr_15 = currVal_15;
    }
    if (changed) {
      this._compView_3.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
    this._compView_3.detectChanges();
    if ((!import16.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_3_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_3.destroyInternalState();
    this._MaterialInputComponent_3_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_3_11.ngOnDestroy();
    this._MaterialDropdownSelectComponent_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.popupVisible = $event;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.timeInputText = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import12.ComponentStyles.scoped(styles$MaterialTimePickerComponent, _debugComponentUrl));
      if (import16.isDevMode) {
        import12.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTimePickerComponentNgFactory = ComponentFactory<import2.MaterialTimePickerComponent>('material-time-picker', viewFactory_MaterialTimePickerComponentHost0);
ComponentFactory<import2.MaterialTimePickerComponent> get MaterialTimePickerComponentNgFactory {
  return _MaterialTimePickerComponentNgFactory;
}

ComponentFactory<import2.MaterialTimePickerComponent> createMaterialTimePickerComponentFactory() {
  return ComponentFactory('material-time-picker', viewFactory_MaterialTimePickerComponentHost0);
}

final List<dynamic> styles$MaterialTimePickerComponentHost = const [];

class _ViewMaterialTimePickerComponentHost0 extends import33.HostView<import2.MaterialTimePickerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialTimePickerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import16.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialTimePickerComponent, () {
            return import2.MaterialTimePickerComponent(this.injectorGet(const import20.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex));
          })
        : import2.MaterialTimePickerComponent(this.injectorGet(const import20.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.HasDisabled) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if (((!import16.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import33.HostView<import2.MaterialTimePickerComponent> viewFactory_MaterialTimePickerComponentHost0() {
  return _ViewMaterialTimePickerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTimePickerComponent, createMaterialTimePickerComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
}
