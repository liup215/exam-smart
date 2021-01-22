// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_input.dart';
export 'material_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'material_input_default_value_accessor.template.dart' as _ref3;
import 'material_input_default_value_accessor.template.dart' as _ref4;
import 'material_input_multiline.template.dart' as _ref5;
import 'material_input_multiline.template.dart' as _ref6;
import 'package:angular/angular.template.dart' as _ref7;
import 'package:angular_components/focus/focus.template.dart' as _ref8;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref9;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref10;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref11;
import 'package:angular_forms/angular_forms.template.dart' as _ref12;
import 'package:angular_forms/angular_forms.template.dart' as _ref13;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_input.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import6;
import '../focus/focus.dart' as import7;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../focus/focus_interface.dart' as import18;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import19;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import20;
import 'package:angular_forms/src/directives/ng_control.dart' as import21;
import 'package:angular/src/runtime/interpolate.dart' as import22;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import24;
import '../material_icon/material_icon.template.dart' as import25;
import '../material_icon/material_icon.dart' as import26;
import 'package:angular/src/core/linker/views/render_view.dart' as import27;
import 'package:angular/src/common/directives/ng_switch.dart' as import28;
import 'package:angular/src/core/linker/views/host_view.dart' as import29;
import 'deferred_validator.dart' as import30;
import '../utils/angular/reference/reference.dart' as import31;
import '../interfaces/has_disabled.dart' as import32;
import 'base_material_input.dart' as import33;

final List<dynamic> styles$MaterialInputComponent = [import0.styles];

class ViewMaterialInputComponent0 extends import1.ComponentView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_10 = import3.TextBinding();
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  import6.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import7.FocusableDirective _FocusableDirective_11_6;
  List<import8.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import9.NgModel _NgModel_11_8;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  ViewContainer _appEl_21;
  NgIf _NgIf_21_9;
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
  var _expr_24;
  var _expr_25;
  var _expr_26;
  var _expr_27;
  var _expr_28;
  var _expr_29;
  var _expr_30;
  var _expr_31;
  var _expr_32;
  var _expr_33;
  var _expr_34;
  var _expr_35;
  import10.DivElement _el_1;
  import10.Element _el_6;
  import10.DivElement _el_7;
  import10.Element _el_9;
  import10.InputElement _el_11;
  import10.DivElement _el_18;
  import10.DivElement _el_19;
  import10.DivElement _el_20;
  static import11.ComponentStyles _componentStyles;
  ViewMaterialInputComponent0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import10.document.createElement('material-input');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialInputComponent.hostClass);
    this.rootElement.tabIndex = import2.MaterialInputComponent.hostTabIndex;
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:angular_components/lib/material_input/material_input.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import10.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import10.document;
    final _el_0 = import15.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'baseline');
    this.addShimC(_el_0);
    this._el_1 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_1, 'top-section');
    this.addShimC(this._el_1);
    final _anchor_2 = import15.appendAnchor(this._el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialInputComponent1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import15.appendText(this._el_1, ' ');
    final _anchor_4 = import15.appendAnchor(this._el_1);
    this._appEl_4 = ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialInputComponent2);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import15.appendText(this._el_1, ' ');
    this._el_6 = import15.appendElement(doc, this._el_1, 'label');
    this.updateChildClass(this._el_6, 'input-container');
    this.addShimE(this._el_6);
    this._el_7 = import15.appendDiv(doc, this._el_6);
    import15.setAttribute(this._el_7, 'aria-hidden', 'true');
    this.updateChildClass(this._el_7, 'label');
    this.addShimC(this._el_7);
    final _text_8 = import15.appendText(this._el_7, ' ');
    this._el_9 = import15.appendSpan(doc, this._el_7);
    this.updateChildClass(this._el_9, 'label-text');
    this.addShimE(this._el_9);
    this._el_9.append(this._textBinding_10.element);
    this._el_11 = import15.appendElement(doc, this._el_6, 'input');
    this.updateChildClass(this._el_11, 'input');
    import15.setAttribute(this._el_11, 'focusableElement', '');
    this.addShimC(this._el_11);
    this._DefaultValueAccessor_11_5 = import6.DefaultValueAccessor(this._el_11);
    this._FocusableDirective_11_6 = import7.FocusableDirective(this._el_11);
    this._NgValueAccessor_11_7 = [this._DefaultValueAccessor_11_5];
    this._NgModel_11_8 = import9.NgModel(null, this._NgValueAccessor_11_7);
    final _text_12 = import15.appendText(this._el_1, ' ');
    final _anchor_13 = import15.appendAnchor(this._el_1);
    this._appEl_13 = ViewContainer(13, 1, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(this._appEl_13, viewFactory_MaterialInputComponent3);
    this._NgIf_13_9 = NgIf(this._appEl_13, _TemplateRef_13_8);
    final _text_14 = import15.appendText(this._el_1, ' ');
    final _anchor_15 = import15.appendAnchor(this._el_1);
    this._appEl_15 = ViewContainer(15, 1, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(this._appEl_15, viewFactory_MaterialInputComponent4);
    this._NgIf_15_9 = NgIf(this._appEl_15, _TemplateRef_15_8);
    final _text_16 = import15.appendText(this._el_1, ' ');
    this.project(this._el_1, 0);
    final _el_17 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(_el_17, 'underline');
    this.addShimC(_el_17);
    this._el_18 = import15.appendDiv(doc, _el_17);
    this.updateChildClass(this._el_18, 'disabled-underline');
    this.addShimC(this._el_18);
    this._el_19 = import15.appendDiv(doc, _el_17);
    this.updateChildClass(this._el_19, 'unfocused-underline');
    this.addShimC(this._el_19);
    this._el_20 = import15.appendDiv(doc, _el_17);
    this.updateChildClass(this._el_20, 'focused-underline');
    this.addShimC(this._el_20);
    final _anchor_21 = import15.appendAnchor(parentRenderNode);
    this._appEl_21 = ViewContainer(21, null, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(this._appEl_21, viewFactory_MaterialInputComponent5);
    this._NgIf_21_9 = NgIf(this._appEl_21, _TemplateRef_21_8);
    this._el_11.addEventListener('blur', this.eventHandler1(this._handleEvent_0));
    this._el_11.addEventListener('change', this.eventHandler1(this._handleEvent_1));
    this._el_11.addEventListener('focus', this.eventHandler1(_ctx.inputFocusAction));
    this._el_11.addEventListener('input', this.eventHandler1(this._handleEvent_2));
    _ctx.focusable = this._FocusableDirective_11_6;
    _ctx.inputEl = ElementRef(this._el_11);
    _ctx.popupSourceEl = ElementRef(_el_0);
    parentRenderNode.addEventListener('focus', this.eventHandler0(_ctx.focus));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((11 == nodeIndex)) {
      if (identical(token, import18.Focusable)) {
        return this._FocusableDirective_11_6;
      }
      if (identical(token, const import19.MultiToken<import20.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_11_7;
      }
      if ((identical(token, import9.NgModel) || identical(token, import21.NgControl))) {
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
    this._NgIf_2_9.ngIf = _ctx.hasLeadingGlyph;
    this._NgIf_4_9.ngIf = _ctx.hasLeadingText;
    changed = false;
    final currVal_29 = _ctx.inputText;
    if (import14.checkBinding(this._expr_29, currVal_29, 'inputText', 'package:angular_components/material_input/material_input.html')) {
      this._NgModel_11_8.model = currVal_29;
      changed = true;
      this._expr_29 = currVal_29;
    }
    if (changed) {
      this._NgModel_11_8.ngAfterChanges();
    }
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_11_8.ngOnInit();
    }
    this._NgIf_13_9.ngIf = _ctx.hasTrailingText;
    this._NgIf_15_9.ngIf = _ctx.hasTrailingGlyph;
    this._NgIf_21_9.ngIf = _ctx.displayBottomPanel;
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_13.detectChangesInNestedViews();
    this._appEl_15.detectChangesInNestedViews();
    this._appEl_21.detectChangesInNestedViews();
    final currVal_0 = _ctx.disabled;
    if (import14.checkBinding(this._expr_0, currVal_0, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_1, 'disabled', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.floatingLabel;
    if (import14.checkBinding(this._expr_1, currVal_1, 'floatingLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_6, 'floated-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.rightAlign;
    if (import14.checkBinding(this._expr_2, currVal_2, 'rightAlign', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_7, 'right-align', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.labelId;
    if (import14.checkBinding(this._expr_3, currVal_3, 'labelId', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_9, 'id', currVal_3);
      this._expr_3 = currVal_3;
    }
    final bool currVal_4 = (!_ctx.labelVisible);
    if (import14.checkBinding(this._expr_4, currVal_4, '!labelVisible', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_9, 'invisible', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.labelAnimated;
    if (import14.checkBinding(this._expr_5, currVal_5, 'labelAnimated', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_9, 'animated', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.labelAnimationReset;
    if (import14.checkBinding(this._expr_6, currVal_6, 'labelAnimationReset', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_9, 'reset', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.disabled;
    if (import14.checkBinding(this._expr_7, currVal_7, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_9, 'disabled', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (import14.checkBinding(this._expr_8, currVal_8, 'focused && floatingLabelVisible', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_9, 'focused', currVal_8);
      this._expr_8 = currVal_8;
    }
    final currVal_9 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (import14.checkBinding(this._expr_9, currVal_9, 'invalid && floatingLabelVisible', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_9, 'invalid', currVal_9);
      this._expr_9 = currVal_9;
    }
    this._textBinding_10.updateText(import22.interpolateString0(_ctx.label));
    final currVal_10 = _ctx.inputAriaActivedescendent;
    if (import14.checkBinding(this._expr_10, currVal_10, 'inputAriaActivedescendent', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-activedescendant', currVal_10);
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.inputAriaAutocomplete;
    if (import14.checkBinding(this._expr_11, currVal_11, 'inputAriaAutocomplete', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-autocomplete', currVal_11);
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.inputAriaExpanded;
    if (import14.checkBinding(this._expr_12, currVal_12, 'inputAriaExpanded', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-expanded', currVal_12?.toString());
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.inputAriaHasPopup;
    if (import14.checkBinding(this._expr_13, currVal_13, 'inputAriaHasPopup', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-haspopup', currVal_13);
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.invalid;
    if (import14.checkBinding(this._expr_14, currVal_14, 'invalid', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-invalid', currVal_14?.toString());
      this._expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.inputAriaLabel;
    if (import14.checkBinding(this._expr_15, currVal_15, 'inputAriaLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-label', currVal_15);
      this._expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.labelId;
    if (import14.checkBinding(this._expr_16, currVal_16, 'labelId', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-labelledby', currVal_16);
      this._expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.ariaDescribedBy;
    if (import14.checkBinding(this._expr_17, currVal_17, 'ariaDescribedBy', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-describedby', currVal_17);
      this._expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.inputAriaOwns;
    if (import14.checkBinding(this._expr_18, currVal_18, 'inputAriaOwns', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-owns', currVal_18);
      this._expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.inputAriaControls;
    if (import14.checkBinding(this._expr_19, currVal_19, 'inputAriaControls', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-controls', currVal_19);
      this._expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.disabled;
    if (import14.checkBinding(this._expr_20, currVal_20, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'aria-disabled', currVal_20?.toString());
      this._expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.inputAutocomplete;
    if (import14.checkBinding(this._expr_21, currVal_21, 'inputAutocomplete', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'autocomplete', currVal_21);
      this._expr_21 = currVal_21;
    }
    final currVal_22 = _ctx.role;
    if (import14.checkBinding(this._expr_22, currVal_22, 'role', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_11, 'role', currVal_22);
      this._expr_22 = currVal_22;
    }
    final currVal_23 = _ctx.disabled;
    if (import14.checkBinding(this._expr_23, currVal_23, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_11, 'disabledInput', currVal_23);
      this._expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.rightAlign;
    if (import14.checkBinding(this._expr_24, currVal_24, 'rightAlign', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_11, 'right-align', currVal_24);
      this._expr_24 = currVal_24;
    }
    final currVal_25 = _ctx.multiple;
    if (import14.checkBinding(this._expr_25, currVal_25, 'multiple', 'package:angular_components/material_input/material_input.html')) {
      import15.setProperty(this._el_11, 'multiple', currVal_25);
      this._expr_25 = currVal_25;
    }
    final currVal_26 = _ctx.disabled;
    if (import14.checkBinding(this._expr_26, currVal_26, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.setProperty(this._el_11, 'readOnly', currVal_26);
      this._expr_26 = currVal_26;
    }
    final currVal_27 = _ctx.inputTabIndex;
    if (import14.checkBinding(this._expr_27, currVal_27, 'inputTabIndex', 'package:angular_components/material_input/material_input.html')) {
      import15.setProperty(this._el_11, 'tabIndex', currVal_27);
      this._expr_27 = currVal_27;
    }
    final currVal_28 = _ctx.type;
    if (import14.checkBinding(this._expr_28, currVal_28, 'type', 'package:angular_components/material_input/material_input.html')) {
      import15.setProperty(this._el_11, 'type', currVal_28);
      this._expr_28 = currVal_28;
    }
    final bool currVal_30 = (!_ctx.disabled);
    if (import14.checkBinding(this._expr_30, currVal_30, '!disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_18, 'invisible', currVal_30);
      this._expr_30 = currVal_30;
    }
    final currVal_31 = _ctx.disabled;
    if (import14.checkBinding(this._expr_31, currVal_31, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_19, 'invisible', currVal_31);
      this._expr_31 = currVal_31;
    }
    final currVal_32 = _ctx.invalid;
    if (import14.checkBinding(this._expr_32, currVal_32, 'invalid', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_19, 'invalid', currVal_32);
      this._expr_32 = currVal_32;
    }
    final bool currVal_33 = ((!_ctx.focused) || _ctx.disabled);
    if (import14.checkBinding(this._expr_33, currVal_33, '!focused || disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_20, 'invisible', currVal_33);
      this._expr_33 = currVal_33;
    }
    final currVal_34 = _ctx.invalid;
    if (import14.checkBinding(this._expr_34, currVal_34, 'invalid', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_20, 'invalid', currVal_34);
      this._expr_34 = currVal_34;
    }
    final currVal_35 = _ctx.underlineAnimated;
    if (import14.checkBinding(this._expr_35, currVal_35, 'underlineAnimated', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_20, 'animated', currVal_35);
      this._expr_35 = currVal_35;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_13.destroyNestedViews();
    this._appEl_15.destroyNestedViews();
    this._appEl_21.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final local_inputEl = this._el_11;
    final _ctx = this.ctx;
    _ctx.inputBlurAction($event, local_inputEl.validity.valid, local_inputEl.validationMessage);
    this._DefaultValueAccessor_11_5.touchHandler();
  }

  void _handleEvent_1($event) {
    final local_inputEl = this._el_11;
    final _ctx = this.ctx;
    _ctx.handleChange($event, local_inputEl);
  }

  void _handleEvent_2($event) {
    final local_inputEl = this._el_11;
    final _ctx = this.ctx;
    _ctx.inputKeypress(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    this._DefaultValueAccessor_11_5.handleChange($event.target.value);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$MaterialInputComponent, _debugComponentUrl));
      if (import14.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialInputComponentNgFactory = ComponentFactory<import2.MaterialInputComponent>('material-input:not(material-input[multiline])', viewFactory_MaterialInputComponentHost0);
ComponentFactory<import2.MaterialInputComponent> get MaterialInputComponentNgFactory {
  return _MaterialInputComponentNgFactory;
}

ComponentFactory<import2.MaterialInputComponent> createMaterialInputComponentFactory() {
  return ComponentFactory('material-input:not(material-input[multiline])', viewFactory_MaterialInputComponentHost0);
}

class _ViewMaterialInputComponent1 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  import25.ViewMaterialIconComponent0 _compView_1;
  import26.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import10.Element _el_0;
  import10.Element _el_1;
  _ViewMaterialInputComponent1(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'leading-text');
    this.addShimE(this._el_0);
    this._compView_1 = import25.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this._el_0.append(this._el_1);
    this.updateChildClassNonHtml(this._el_1, 'glyph leading');
    this.addShimC(this._el_1);
    this._MaterialIconComponent_1_5 = import26.MaterialIconComponent(this._el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = import22.interpolateString0(_ctx.leadingGlyph);
    if (import14.checkBinding(this._expr_3, currVal_3, '{{leadingGlyph}}', 'package:angular_components/material_input/material_input.html')) {
      this._MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (import14.checkBinding(this._expr_0, currVal_0, 'floatingLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'floated-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.leadingGlyphAriaLabel;
    if (import14.checkBinding(this._expr_1, currVal_1, 'leadingGlyphAriaLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_1, 'aria-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import14.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_1, 'disabled', currVal_2?.toString());
      this._expr_2 = currVal_2;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent1(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent1(parentView, parentIndex);
}

class _ViewMaterialInputComponent2 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  var _expr_0;
  import10.Element _el_0;
  _ViewMaterialInputComponent2(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'leading-text');
    this.addShimE(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (import14.checkBinding(this._expr_0, currVal_0, 'floatingLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'floated-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.leadingText));
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent2(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent2(parentView, parentIndex);
}

class _ViewMaterialInputComponent3 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  var _expr_0;
  import10.Element _el_0;
  _ViewMaterialInputComponent3(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'trailing-text');
    this.addShimE(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (import14.checkBinding(this._expr_0, currVal_0, 'floatingLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'floated-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.trailingText));
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent3(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent3(parentView, parentIndex);
}

class _ViewMaterialInputComponent4 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  import25.ViewMaterialIconComponent0 _compView_1;
  import26.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import10.Element _el_0;
  import10.Element _el_1;
  _ViewMaterialInputComponent4(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'trailing-text');
    this.addShimE(this._el_0);
    this._compView_1 = import25.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this._el_0.append(this._el_1);
    this.updateChildClassNonHtml(this._el_1, 'glyph trailing');
    this.addShimC(this._el_1);
    this._MaterialIconComponent_1_5 = import26.MaterialIconComponent(this._el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = import22.interpolateString0(_ctx.trailingGlyph);
    if (import14.checkBinding(this._expr_3, currVal_3, '{{trailingGlyph}}', 'package:angular_components/material_input/material_input.html')) {
      this._MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (import14.checkBinding(this._expr_0, currVal_0, 'floatingLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'floated-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.trailingGlyphAriaLabel;
    if (import14.checkBinding(this._expr_1, currVal_1, 'trailingGlyphAriaLabel', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_1, 'aria-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import14.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_1, 'disabled', currVal_2?.toString());
      this._expr_2 = currVal_2;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent4(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent4(parentView, parentIndex);
}

class _ViewMaterialInputComponent5 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  import28.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import28.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import28.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import28.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  _ViewMaterialInputComponent5(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'bottom-section');
    this.addShimC(_el_0);
    this._NgSwitch_0_5 = import28.NgSwitch();
    final _anchor_1 = import15.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialInputComponent6);
    this._NgSwitchWhen_1_9 = import28.NgSwitchWhen(this._appEl_1, _TemplateRef_1_8, this._NgSwitch_0_5);
    final _anchor_2 = import15.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialInputComponent7);
    this._NgSwitchWhen_2_9 = import28.NgSwitchWhen(this._appEl_2, _TemplateRef_2_8, this._NgSwitch_0_5);
    final _anchor_3 = import15.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_MaterialInputComponent8);
    this._NgSwitchWhen_3_9 = import28.NgSwitchWhen(this._appEl_3, _TemplateRef_3_8, this._NgSwitch_0_5);
    final _anchor_4 = import15.appendAnchor(_el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialInputComponent9);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.NgSwitch) && (nodeIndex <= 4))) {
      return this._NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.bottomPanelState;
    if (import14.checkBinding(this._expr_0, currVal_0, 'bottomPanelState', 'package:angular_components/material_input/material_input.html')) {
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

import24.EmbeddedView<void> viewFactory_MaterialInputComponent5(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent5(parentView, parentIndex);
}

class _ViewMaterialInputComponent6 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import10.DivElement _el_0;
  _ViewMaterialInputComponent6(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'error-text');
    import15.setAttribute(this._el_0, 'role', 'alert');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    final _text_2 = import15.appendText(this._el_0, ' ');
    this.project(this._el_0, 1);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      if (!identical(_ctx.errorTextId, null)) {
        import15.updateAttribute(this._el_0, 'id', _ctx.errorTextId);
      }
    }
    final currVal_1 = _ctx.focused;
    if (import14.checkBinding(this._expr_1, currVal_1, 'focused', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'focused', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.invalid;
    if (import14.checkBinding(this._expr_2, currVal_2, 'invalid', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'invalid', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = import22.interpolate0((!_ctx.invalid));
    if (import14.checkBinding(this._expr_3, currVal_3, '{{!invalid}}', 'package:angular_components/material_input/material_input.html')) {
      import15.setAttribute(this._el_0, 'aria-hidden', currVal_3);
      this._expr_3 = currVal_3;
    }
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.errorMessage));
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent6(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent6(parentView, parentIndex);
}

class _ViewMaterialInputComponent7 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewMaterialInputComponent7(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'hint-text');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.hintText));
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent7(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent7(parentView, parentIndex);
}

class _ViewMaterialInputComponent8 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  _ViewMaterialInputComponent8(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    import15.setAttribute(_el_0, 'aria-hidden', 'true');
    this.updateChildClass(_el_0, 'spaceholder');
    _el_0.tabIndex = -1;
    this.addShimC(_el_0);
    final _text_1 = import15.appendText(_el_0, ' ');
    _el_0.addEventListener('focus', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  void _handleEvent_0($event) {
    $event.stopPropagation();
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent8(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent8(parentView, parentIndex);
}

class _ViewMaterialInputComponent9 extends import24.EmbeddedView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  var _expr_0;
  var _expr_1;
  import10.DivElement _el_0;
  _ViewMaterialInputComponent9(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
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
    if (import14.checkBinding(this._expr_0, currVal_0, 'msgCharacterCounterAriaLabel(inputTextLength, maxCount)', 'package:angular_components/material_input/material_input.html')) {
      import15.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (import14.checkBinding(this._expr_1, currVal_1, 'invalid', 'package:angular_components/material_input/material_input.html')) {
      import15.updateClassBinding(this._el_0, 'invalid', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount)));
  }
}

import24.EmbeddedView<void> viewFactory_MaterialInputComponent9(import27.RenderView parentView, int parentIndex) {
  return _ViewMaterialInputComponent9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialInputComponentHost = const [];

class _ViewMaterialInputComponentHost0 extends import29.HostView<import2.MaterialInputComponent> {
  import30.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> __NgValidators_0_7;
  List<dynamic> get _NgValidators_0_7 {
    if ((this.__NgValidators_0_7 == null)) {
      (this.__NgValidators_0_7 = [this._DeferredValidator_0_5]);
    }
    return this.__NgValidators_0_7;
  }

  @override
  void build() {
    this.componentView = ViewMaterialInputComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._DeferredValidator_0_5 = import30.DeferredValidator();
    this.component = import2.MaterialInputComponent(null, null, null, this.componentView, this._DeferredValidator_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import30.DeferredValidator)) {
        return this._DeferredValidator_0_5;
      }
      if (((((identical(token, import2.MaterialInputComponent) || identical(token, import31.ReferenceDirective)) || identical(token, import18.Focusable)) || identical(token, import32.HasDisabled)) || identical(token, import33.BaseMaterialInput))) {
        return this.component;
      }
      if (identical(token, const import19.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_0_7;
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
    if ((!import14.debugThrowIfChanged)) {
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

import29.HostView<import2.MaterialInputComponent> viewFactory_MaterialInputComponentHost0() {
  return _ViewMaterialInputComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInputComponent, createMaterialInputComponentFactory());
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
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
}
