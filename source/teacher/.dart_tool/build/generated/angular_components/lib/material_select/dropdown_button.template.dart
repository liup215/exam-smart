// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dropdown_button.dart';
export 'dropdown_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus_interface.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/glyph/glyph.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/mixins/button_wrapper.template.dart' as _ref6;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref7;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref8;
import 'package:angular_components/button_decorator/button_decorator.scss.css.shim.dart' as import0;
import 'package:angular_components/material_select/dropdown_button.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/views/component_view.dart' as import2;
import 'dropdown_button.dart' as import3;
import '../button_decorator/button_decorator.template.dart' as import4;
import '../focus/keyboard_only_focus_indicator.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import '../button_decorator/button_decorator.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import '../utils/browser/dom_service/dom_service.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import19;
import 'package:angular/src/runtime/text_binding.dart' as import20;
import 'package:angular/src/core/linker/views/render_view.dart' as import21;
import 'package:angular/src/runtime/interpolate.dart' as import22;
import '../glyph/glyph.template.dart' as import23;
import '../glyph/glyph.dart' as import24;
import 'package:angular/src/core/linker/views/host_view.dart' as import25;
import '../interfaces/has_disabled.dart' as import26;
import '../focus/focus_interface.dart' as import27;

final List<dynamic> styles$DropdownButtonComponent = [import0.styles, import1.styles];

class ViewDropdownButtonComponent0 extends import2.ComponentView<import3.DropdownButtonComponent> {
  import4.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import5.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
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
  import8.DivElement _el_0;
  static import9.ComponentStyles _componentStyles;
  ViewDropdownButtonComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('dropdown-button');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_select/dropdown_button.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    this._el_0 = import13.appendDiv(doc, parentRenderNode);
    import13.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'button');
    import13.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import4.ButtonDirectiveNgCd(import14.ButtonDirective(this._el_0, null));
    this._KeyboardOnlyFocusIndicatorDirective_0_6 = (import12.isDevMode
        ? import15.debugInjectorWrap(import5.KeyboardOnlyFocusIndicatorDirective, () {
            return import5.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.injectorGet(import16.DomService, this.parentIndex));
          })
        : import5.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.injectorGet(import16.DomService, this.parentIndex)));
    final _anchor_1 = import13.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_DropdownButtonComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import13.appendText(this._el_0, ' ');
    this.project(this._el_0, 0);
    final _anchor_3 = import13.appendAnchor(this._el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_DropdownButtonComponent2);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import13.appendAnchor(parentRenderNode);
    this._appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_DropdownButtonComponent3);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    this._el_0.addEventListener('focus', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('blur', this.eventHandler1(this._handleEvent_1));
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_2));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _ctx.button = this._ButtonDirective_0_5.instance;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && (nodeIndex <= 3))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_10 = _ctx.ariaRole;
    if (import12.checkBinding(this._expr_10, currVal_10, 'ariaRole', 'package:angular_components/material_select/dropdown_button.html')) {
      this._ButtonDirective_0_5.instance.role = currVal_10;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.disabled;
    if (import12.checkBinding(this._expr_11, currVal_11, 'disabled', 'package:angular_components/material_select/dropdown_button.html')) {
      this._ButtonDirective_0_5.instance.disabled = currVal_11;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.tabbable;
    if (import12.checkBinding(this._expr_12, currVal_12, 'tabbable', 'package:angular_components/material_select/dropdown_button.html')) {
      this._ButtonDirective_0_5.instance.tabbable = currVal_12;
      this._expr_12 = currVal_12;
    }
    this._NgIf_1_9.ngIf = (_ctx.buttonText != null);
    this._NgIf_3_9.ngIf = (_ctx.buttonIcon != null);
    this._NgIf_4_9.ngIf = _ctx.invalid;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.uuid, null)) {
        import13.updateAttribute(this._el_0, 'id', _ctx.uuid);
      }
    }
    final currVal_1 = _ctx.buttonAriaLabel;
    if (import12.checkBinding(this._expr_1, currVal_1, 'buttonAriaLabel', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.ariaLabelledBy;
    if (import12.checkBinding(this._expr_2, currVal_2, 'ariaLabelledBy', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-labelledby', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.ariaDescribedBy;
    if (import12.checkBinding(this._expr_3, currVal_3, 'ariaDescribedBy', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-describedby', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.showButtonBorder;
    if (import12.checkBinding(this._expr_4, currVal_4, 'showButtonBorder', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateClassBinding(this._el_0, 'border', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.invalid;
    if (import12.checkBinding(this._expr_5, currVal_5, 'invalid', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateClassBinding(this._el_0, 'invalid', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.popupType;
    if (import12.checkBinding(this._expr_6, currVal_6, 'popupType', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-haspopup', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.ariaOwns;
    if (import12.checkBinding(this._expr_7, currVal_7, 'ariaOwns', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-owns', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.ariaExpanded;
    if (import12.checkBinding(this._expr_8, currVal_8, 'ariaExpanded', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-expanded', currVal_8?.toString());
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.ariaActiveDescendant;
    if (import12.checkBinding(this._expr_9, currVal_9, 'ariaActiveDescendant', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateAttribute(this._el_0, 'aria-activedescendant', currVal_9);
      this._expr_9 = currVal_9;
    }
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.handleFocus($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_6.onFocus($event);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.handleBlur($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline();
  }

  void _handleEvent_2($event) {
    this._ButtonDirective_0_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$DropdownButtonComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _DropdownButtonComponentNgFactory = ComponentFactory<import3.DropdownButtonComponent>('dropdown-button', viewFactory_DropdownButtonComponentHost0);
ComponentFactory<import3.DropdownButtonComponent> get DropdownButtonComponentNgFactory {
  return _DropdownButtonComponentNgFactory;
}

ComponentFactory<import3.DropdownButtonComponent> createDropdownButtonComponentFactory() {
  return ComponentFactory('dropdown-button', viewFactory_DropdownButtonComponentHost0);
}

class _ViewDropdownButtonComponent1 extends import19.EmbeddedView<import3.DropdownButtonComponent> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  _ViewDropdownButtonComponent1(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-text');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.buttonText));
  }
}

import19.EmbeddedView<void> viewFactory_DropdownButtonComponent1(import21.RenderView parentView, int parentIndex) {
  return _ViewDropdownButtonComponent1(parentView, parentIndex);
}

class _ViewDropdownButtonComponent2 extends import19.EmbeddedView<import3.DropdownButtonComponent> {
  import23.ViewGlyphComponent0 _compView_0;
  import24.GlyphComponent _GlyphComponent_0_5;
  var _expr_0;
  _ViewDropdownButtonComponent2(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import23.ViewGlyphComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'icon');
    this.addShimC(_el_0);
    this._GlyphComponent_0_5 = import24.GlyphComponent(_el_0);
    this._compView_0.create(this._GlyphComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.buttonIcon;
    if (import12.checkBinding(this._expr_0, currVal_0, 'buttonIcon', 'package:angular_components/material_select/dropdown_button.html')) {
      this._GlyphComponent_0_5.icon = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import19.EmbeddedView<void> viewFactory_DropdownButtonComponent2(import21.RenderView parentView, int parentIndex) {
  return _ViewDropdownButtonComponent2(parentView, parentIndex);
}

class _ViewDropdownButtonComponent3 extends import19.EmbeddedView<import3.DropdownButtonComponent> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  var _expr_0;
  var _expr_1;
  import8.DivElement _el_0;
  _ViewDropdownButtonComponent3(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'error-text');
    import13.setAttribute(this._el_0, 'role', 'alert');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.invalid;
    if (import12.checkBinding(this._expr_0, currVal_0, 'invalid', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.updateClassBinding(this._el_0, 'invalid', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = import22.interpolate0((!_ctx.invalid));
    if (import12.checkBinding(this._expr_1, currVal_1, '{{!invalid}}', 'package:angular_components/material_select/dropdown_button.html')) {
      import13.setAttribute(this._el_0, 'aria-hidden', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._textBinding_1.updateText(import22.interpolateString0(_ctx.error));
  }
}

import19.EmbeddedView<void> viewFactory_DropdownButtonComponent3(import21.RenderView parentView, int parentIndex) {
  return _ViewDropdownButtonComponent3(parentView, parentIndex);
}

final List<dynamic> styles$DropdownButtonComponentHost = const [];

class _ViewDropdownButtonComponentHost0 extends import25.HostView<import3.DropdownButtonComponent> {
  @override
  void build() {
    this.componentView = ViewDropdownButtonComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import3.DropdownButtonComponent();
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import26.HasDisabled) || identical(token, import27.Focusable)) && (0 == nodeIndex))) {
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
    if (((!import12.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import25.HostView<import3.DropdownButtonComponent> viewFactory_DropdownButtonComponentHost0() {
  return _ViewDropdownButtonComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DropdownButtonComponent, createDropdownButtonComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
