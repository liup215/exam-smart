// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_input_multiline.dart';
export 'material_input_multiline.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular/meta.template.dart' as _ref4;
import 'package:angular_components/focus/focus.template.dart' as _ref5;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref6;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref7;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref8;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref9;
import 'package:angular_forms/angular_forms.template.dart' as _ref10;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_multiline.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/views/component_view.dart' as import2;
import 'material_input_multiline.dart' as import3;
import 'package:angular/src/runtime/text_binding.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import7;
import '../focus/focus.dart' as import8;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import9;
import 'package:angular_forms/src/directives/ng_model.dart' as import10;
import 'dart:html' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/views/view.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../focus/focus_interface.dart' as import19;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import20;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import21;
import 'package:angular_forms/src/directives/ng_control.dart' as import22;
import 'package:angular/src/runtime/interpolate.dart' as import23;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import25;
import 'package:angular/src/core/linker/views/render_view.dart' as import26;
import 'package:angular/src/common/directives/ng_switch.dart' as import27;
import 'package:angular/src/core/linker/views/host_view.dart' as import28;
import 'deferred_validator.dart' as import29;
import 'package:angular/src/di/errors.dart' as import30;
import '../utils/browser/dom_service/dom_service.dart' as import31;
import '../interfaces/has_disabled.dart' as import32;
import '../utils/angular/reference/reference.dart' as import33;
import 'base_material_input.dart' as import34;

final List<dynamic> styles$MaterialMultilineInputComponent = [import0.styles, import1.styles];

class ViewMaterialMultilineInputComponent0 extends import2.ComponentView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_6 = import4.TextBinding();
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  import7.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import8.FocusableDirective _FocusableDirective_11_6;
  List<import9.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import10.NgModel _NgModel_11_8;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_18;
  var _expr_19;
  var _expr_20;
  var _expr_21;
  var _expr_22;
  var _expr_23;
  import11.DivElement _el_2;
  import11.Element _el_5;
  import11.DivElement _el_7;
  import11.TextAreaElement _el_11;
  import11.DivElement _el_13;
  import11.DivElement _el_14;
  import11.DivElement _el_15;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialMultilineInputComponent0(import13.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import11.document.createElement('material-input');
    this.updateChildClassNonHtml(this.rootElement, import3.MaterialMultilineInputComponent.hostClass);
    this.rootElement.tabIndex = import3.MaterialMultilineInputComponent.hostTabIndex;
  }
  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:angular_components/lib/material_input/material_input_multiline.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import11.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import11.document;
    final _el_0 = import16.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'baseline');
    this.addShimC(_el_0);
    final _el_1 = import16.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'top-section');
    this.addShimC(_el_1);
    this._el_2 = import16.appendDiv(doc, _el_1);
    this.updateChildClass(this._el_2, 'input-container');
    this.addShimC(this._el_2);
    final _el_3 = import16.appendDiv(doc, this._el_2);
    import16.setAttribute(_el_3, 'aria-hidden', 'true');
    this.updateChildClass(_el_3, 'label');
    this.addShimC(_el_3);
    final _text_4 = import16.appendText(_el_3, ' ');
    this._el_5 = import16.appendSpan(doc, _el_3);
    this.updateChildClass(this._el_5, 'label-text');
    this.addShimE(this._el_5);
    this._el_5.append(this._textBinding_6.element);
    this._el_7 = import16.appendDiv(doc, this._el_2);
    this.addShimC(this._el_7);
    final _anchor_8 = import16.appendAnchor(this._el_7);
    this._appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_MaterialMultilineInputComponent1);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    final _el_9 = import16.appendDiv(doc, this._el_7);
    import16.setAttribute(_el_9, 'aria-hidden', 'true');
    this.updateChildClass(_el_9, 'line-height-measure');
    this.addShimC(_el_9);
    final _el_10 = import16.appendElement(doc, _el_9, 'br');
    this.addShimE(_el_10);
    this._el_11 = import16.appendElement(doc, this._el_7, 'textarea');
    this.updateChildClass(this._el_11, 'textarea');
    import16.setAttribute(this._el_11, 'focusableElement', '');
    this.addShimC(this._el_11);
    this._DefaultValueAccessor_11_5 = import7.DefaultValueAccessor(this._el_11);
    this._FocusableDirective_11_6 = import8.FocusableDirective(this._el_11);
    this._NgValueAccessor_11_7 = [this._DefaultValueAccessor_11_5];
    this._NgModel_11_8 = import10.NgModel(null, this._NgValueAccessor_11_7);
    this.project(_el_1, 0);
    final _el_12 = import16.appendDiv(doc, _el_0);
    this.updateChildClass(_el_12, 'underline');
    this.addShimC(_el_12);
    this._el_13 = import16.appendDiv(doc, _el_12);
    this.updateChildClass(this._el_13, 'disabled-underline');
    this.addShimC(this._el_13);
    this._el_14 = import16.appendDiv(doc, _el_12);
    this.updateChildClass(this._el_14, 'unfocused-underline');
    this.addShimC(this._el_14);
    this._el_15 = import16.appendDiv(doc, _el_12);
    this.updateChildClass(this._el_15, 'focused-underline');
    this.addShimC(this._el_15);
    final _anchor_16 = import16.appendAnchor(parentRenderNode);
    this._appEl_16 = ViewContainer(16, null, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(this._appEl_16, viewFactory_MaterialMultilineInputComponent2);
    this._NgIf_16_9 = NgIf(this._appEl_16, _TemplateRef_16_8);
    this._el_11.addEventListener('blur', this.eventHandler1(this._handleEvent_0));
    this._el_11.addEventListener('change', this.eventHandler1(this._handleEvent_1));
    this._el_11.addEventListener('focus', this.eventHandler1(_ctx.inputFocusAction));
    this._el_11.addEventListener('input', this.eventHandler1(this._handleEvent_2));
    _ctx.focusable = this._FocusableDirective_11_6;
    _ctx.lineHeightMeasure = ElementRef(_el_9);
    _ctx.textareaEl = ElementRef(this._el_11);
    _ctx.popupSourceEl = ElementRef(_el_0);
    parentRenderNode.addEventListener('focus', this.eventHandler0(_ctx.focus));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((11 == nodeIndex)) {
      if (identical(token, import19.Focusable)) {
        return this._FocusableDirective_11_6;
      }
      if (identical(token, const import20.MultiToken<import21.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_11_7;
      }
      if ((identical(token, import10.NgModel) || identical(token, import22.NgControl))) {
        return this._NgModel_11_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    this._NgIf_8_9.ngIf = (_ctx.rows != _ctx.maxRows);
    changed = false;
    final currVal_17 = _ctx.inputText;
    if (import15.checkBinding(this._expr_17, currVal_17, 'inputText', 'package:angular_components/material_input/material_input_multiline.html')) {
      this._NgModel_11_8.model = currVal_17;
      changed = true;
      this._expr_17 = currVal_17;
    }
    if (changed) {
      this._NgModel_11_8.ngAfterChanges();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_11_8.ngOnInit();
    }
    this._NgIf_16_9.ngIf = _ctx.displayBottomPanel;
    this._appEl_8.detectChangesInNestedViews();
    this._appEl_16.detectChangesInNestedViews();
    final currVal_0 = _ctx.floatingLabel;
    if (import15.checkBinding(this._expr_0, currVal_0, 'floatingLabel', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_2, 'floated-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.rows > 1);
    if (import15.checkBinding(this._expr_1, currVal_1, 'rows > 1', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_5, 'multiline', currVal_1);
      this._expr_1 = currVal_1;
    }
    final bool currVal_2 = (!_ctx.labelVisible);
    if (import15.checkBinding(this._expr_2, currVal_2, '!labelVisible', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_5, 'invisible', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.labelAnimated;
    if (import15.checkBinding(this._expr_3, currVal_3, 'labelAnimated', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_5, 'animated', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.labelAnimationReset;
    if (import15.checkBinding(this._expr_4, currVal_4, 'labelAnimationReset', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_5, 'reset', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (import15.checkBinding(this._expr_5, currVal_5, 'focused && floatingLabelVisible', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_5, 'focused', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (import15.checkBinding(this._expr_6, currVal_6, 'invalid && floatingLabelVisible', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_5, 'invalid', currVal_6);
      this._expr_6 = currVal_6;
    }
    this._textBinding_6.updateText(import23.interpolateString0(_ctx.label));
    final currVal_7 = _ctx.textAreaHeight;
    if (import15.checkBinding(this._expr_7, currVal_7, 'textAreaHeight', 'package:angular_components/material_input/material_input_multiline.html')) {
      this._el_7.style.setProperty('height', ((currVal_7 == null) ? null : (currVal_7.toString() + 'px')));
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.disabled;
    if (import15.checkBinding(this._expr_8, currVal_8, 'disabled', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_11, 'disabledInput', currVal_8);
      this._expr_8 = currVal_8;
    }
    final currVal_9 = (_ctx.rows == _ctx.maxRows);
    if (import15.checkBinding(this._expr_9, currVal_9, 'rows == maxRows', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_11, 'staticHeight', currVal_9);
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.textAreaHeight;
    if (import15.checkBinding(this._expr_10, currVal_10, 'textAreaHeight', 'package:angular_components/material_input/material_input_multiline.html')) {
      this._el_11.style.setProperty('height', ((currVal_10 == null) ? null : (currVal_10.toString() + 'px')));
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.inputAriaDescribedBy;
    if (import15.checkBinding(this._expr_11, currVal_11, 'inputAriaDescribedBy', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateAttribute(this._el_11, 'aria-describedby', currVal_11);
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.ariaLabel;
    if (import15.checkBinding(this._expr_12, currVal_12, 'ariaLabel', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateAttribute(this._el_11, 'aria-label', currVal_12);
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.inputAutocomplete;
    if (import15.checkBinding(this._expr_13, currVal_13, 'inputAutocomplete', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateAttribute(this._el_11, 'autocomplete', currVal_13);
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.disabled;
    if (import15.checkBinding(this._expr_14, currVal_14, 'disabled', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.setProperty(this._el_11, 'readOnly', currVal_14);
      this._expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.inputTabIndex;
    if (import15.checkBinding(this._expr_15, currVal_15, 'inputTabIndex', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.setProperty(this._el_11, 'tabIndex', currVal_15);
      this._expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.invalid;
    if (import15.checkBinding(this._expr_16, currVal_16, '{{invalid}}', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.setAttribute(this._el_11, 'aria-invalid', import23.interpolate0(currVal_16));
      this._expr_16 = currVal_16;
    }
    final bool currVal_18 = (!_ctx.disabled);
    if (import15.checkBinding(this._expr_18, currVal_18, '!disabled', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_13, 'invisible', currVal_18);
      this._expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.disabled;
    if (import15.checkBinding(this._expr_19, currVal_19, 'disabled', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_14, 'invisible', currVal_19);
      this._expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.invalid;
    if (import15.checkBinding(this._expr_20, currVal_20, 'invalid', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_14, 'invalid', currVal_20);
      this._expr_20 = currVal_20;
    }
    final bool currVal_21 = ((!_ctx.focused) || _ctx.disabled);
    if (import15.checkBinding(this._expr_21, currVal_21, '!focused || disabled', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_15, 'invisible', currVal_21);
      this._expr_21 = currVal_21;
    }
    final currVal_22 = _ctx.invalid;
    if (import15.checkBinding(this._expr_22, currVal_22, 'invalid', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_15, 'invalid', currVal_22);
      this._expr_22 = currVal_22;
    }
    final currVal_23 = _ctx.underlineAnimated;
    if (import15.checkBinding(this._expr_23, currVal_23, 'underlineAnimated', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_15, 'animated', currVal_23);
      this._expr_23 = currVal_23;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_8.destroyNestedViews();
    this._appEl_16.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final local_textareaEl = this._el_11;
    final _ctx = this.ctx;
    _ctx.inputBlurAction($event, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    this._DefaultValueAccessor_11_5.touchHandler();
  }

  void _handleEvent_1($event) {
    final local_textareaEl = this._el_11;
    final _ctx = this.ctx;
    _ctx.handleChange($event, local_textareaEl);
  }

  void _handleEvent_2($event) {
    final local_textareaEl = this._el_11;
    final _ctx = this.ctx;
    _ctx.inputKeypress(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    this._DefaultValueAccessor_11_5.handleChange($event.target.value);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import12.ComponentStyles.scoped(styles$MaterialMultilineInputComponent, _debugComponentUrl));
      if (import15.isDevMode) {
        import12.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialMultilineInputComponentNgFactory = ComponentFactory<import3.MaterialMultilineInputComponent>('material-input[multiline]', viewFactory_MaterialMultilineInputComponentHost0);
ComponentFactory<import3.MaterialMultilineInputComponent> get MaterialMultilineInputComponentNgFactory {
  return _MaterialMultilineInputComponentNgFactory;
}

ComponentFactory<import3.MaterialMultilineInputComponent> createMaterialMultilineInputComponentFactory() {
  return ComponentFactory('material-input[multiline]', viewFactory_MaterialMultilineInputComponentHost0);
}

class _ViewMaterialMultilineInputComponent1 extends import25.EmbeddedView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  var _expr_0;
  var _expr_1;
  import11.DivElement _el_0;
  _ViewMaterialMultilineInputComponent1(import26.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    this._el_0 = doc.createElement('div');
    import16.setAttribute(this._el_0, 'aria-hidden', 'true');
    this.updateChildClass(this._el_0, 'mirror-text');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.minInputHeight;
    if (import15.checkBinding(this._expr_0, currVal_0, 'minInputHeight', 'package:angular_components/material_input/material_input_multiline.html')) {
      this._el_0.style.setProperty('min-height', ((currVal_0 == null) ? null : (currVal_0.toString() + 'px')));
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.maxInputHeight;
    if (import15.checkBinding(this._expr_1, currVal_1, 'maxInputHeight', 'package:angular_components/material_input/material_input_multiline.html')) {
      this._el_0.style.setProperty('max-height', ((currVal_1 == null) ? null : (currVal_1.toString() + 'px')));
      this._expr_1 = currVal_1;
    }
    this._textBinding_1.updateText(import23.interpolateString0(_ctx.mirrorText));
  }
}

import25.EmbeddedView<void> viewFactory_MaterialMultilineInputComponent1(import26.RenderView parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent1(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent2 extends import25.EmbeddedView<import3.MaterialMultilineInputComponent> {
  import27.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import27.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import27.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import27.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  _ViewMaterialMultilineInputComponent2(import26.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'bottom-section');
    this.addShimC(_el_0);
    this._NgSwitch_0_5 = import27.NgSwitch();
    final _anchor_1 = import16.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialMultilineInputComponent3);
    this._NgSwitchWhen_1_9 = import27.NgSwitchWhen(this._appEl_1, _TemplateRef_1_8, this._NgSwitch_0_5);
    final _anchor_2 = import16.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialMultilineInputComponent4);
    this._NgSwitchWhen_2_9 = import27.NgSwitchWhen(this._appEl_2, _TemplateRef_2_8, this._NgSwitch_0_5);
    final _anchor_3 = import16.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_MaterialMultilineInputComponent5);
    this._NgSwitchWhen_3_9 = import27.NgSwitchWhen(this._appEl_3, _TemplateRef_3_8, this._NgSwitch_0_5);
    final _anchor_4 = import16.appendAnchor(_el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialMultilineInputComponent6);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import27.NgSwitch) && (nodeIndex <= 4))) {
      return this._NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.bottomPanelState;
    if (import15.checkBinding(this._expr_0, currVal_0, 'bottomPanelState', 'package:angular_components/material_input/material_input_multiline.html')) {
      this._NgSwitch_0_5.ngSwitch = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.errorState, null)) {
        (this._NgSwitchWhen_1_9.ngSwitchWhen = _ctx.errorState);
      }
      if (!identical(_ctx.hintState, null)) {
        (this._NgSwitchWhen_2_9.ngSwitchWhen = _ctx.hintState);
      }
      if (!identical(_ctx.emptyState, null)) {
        (this._NgSwitchWhen_3_9.ngSwitchWhen = _ctx.emptyState);
      }
    }
    this._NgIf_4_9.ngIf = ((_ctx.maxCount != null) || _ctx.showCharacterCount);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
  }
}

import25.EmbeddedView<void> viewFactory_MaterialMultilineInputComponent2(import26.RenderView parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent2(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent3 extends import25.EmbeddedView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import11.DivElement _el_0;
  _ViewMaterialMultilineInputComponent3(import26.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'error-text');
    import16.setAttribute(this._el_0, 'role', 'alert');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.focused;
    if (import15.checkBinding(this._expr_0, currVal_0, 'focused', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_0, 'focused', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (import15.checkBinding(this._expr_1, currVal_1, 'invalid', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_0, 'invalid', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = import23.interpolate0((!_ctx.invalid));
    if (import15.checkBinding(this._expr_2, currVal_2, '{{!invalid}}', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.setAttribute(this._el_0, 'aria-hidden', currVal_2);
      this._expr_2 = currVal_2;
    }
    this._textBinding_1.updateText(import23.interpolateString0(_ctx.errorMessage));
  }
}

import25.EmbeddedView<void> viewFactory_MaterialMultilineInputComponent3(import26.RenderView parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent3(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent4 extends import25.EmbeddedView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  _ViewMaterialMultilineInputComponent4(import26.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'hint-text');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import23.interpolateString0(_ctx.hintText));
  }
}

import25.EmbeddedView<void> viewFactory_MaterialMultilineInputComponent4(import26.RenderView parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent4(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent5 extends import25.EmbeddedView<import3.MaterialMultilineInputComponent> {
  _ViewMaterialMultilineInputComponent5(import26.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'spaceholder');
    _el_0.tabIndex = -1;
    this.addShimC(_el_0);
    final _text_1 = import16.appendText(_el_0, ' ');
    _el_0.addEventListener('focus', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  void _handleEvent_0($event) {
    $event.stopPropagation();
  }
}

import25.EmbeddedView<void> viewFactory_MaterialMultilineInputComponent5(import26.RenderView parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent5(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent6 extends import25.EmbeddedView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  var _expr_0;
  var _expr_1;
  import11.DivElement _el_0;
  _ViewMaterialMultilineInputComponent6(import26.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'counter');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.msgCharacterCounterAriaLabel(_ctx.inputTextLength, _ctx.maxCount);
    if (import15.checkBinding(this._expr_0, currVal_0, 'msgCharacterCounterAriaLabel(inputTextLength, maxCount)', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (import15.checkBinding(this._expr_1, currVal_1, 'invalid', 'package:angular_components/material_input/material_input_multiline.html')) {
      import16.updateClassBinding(this._el_0, 'invalid', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._textBinding_1.updateText(import23.interpolateString0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount)));
  }
}

import25.EmbeddedView<void> viewFactory_MaterialMultilineInputComponent6(import26.RenderView parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent6(parentView, parentIndex);
}

final List<dynamic> styles$MaterialMultilineInputComponentHost = const [];

class _ViewMaterialMultilineInputComponentHost0 extends import28.HostView<import3.MaterialMultilineInputComponent> {
  import29.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> __NgValidators_0_8;
  List<dynamic> get _NgValidators_0_8 {
    if ((this.__NgValidators_0_8 == null)) {
      (this.__NgValidators_0_8 = [this._DeferredValidator_0_5]);
    }
    return this.__NgValidators_0_8;
  }

  @override
  void build() {
    this.componentView = ViewMaterialMultilineInputComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._DeferredValidator_0_5 = import29.DeferredValidator();
    this.component = (import15.isDevMode
        ? import30.debugInjectorWrap(import3.MaterialMultilineInputComponent, () {
            return import3.MaterialMultilineInputComponent(null, this.componentView, this._DeferredValidator_0_5, this.injectorGet(import31.DomService, this.parentIndex));
          })
        : import3.MaterialMultilineInputComponent(null, this.componentView, this._DeferredValidator_0_5, this.injectorGet(import31.DomService, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import29.DeferredValidator)) {
        return this._DeferredValidator_0_5;
      }
      if (((((identical(token, import3.MaterialMultilineInputComponent) || identical(token, import32.HasDisabled)) || identical(token, import33.ReferenceDirective)) || identical(token, import19.Focusable)) || identical(token, import34.BaseMaterialInput))) {
        return this.component;
      }
      if (identical(token, const import20.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_0_8;
      }
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
    this.componentView.detectChanges();
    if ((!import15.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import28.HostView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponentHost0() {
  return _ViewMaterialMultilineInputComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMultilineInputComponent, createMaterialMultilineInputComponentFactory());
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
  _ref10.initReflector();
}
