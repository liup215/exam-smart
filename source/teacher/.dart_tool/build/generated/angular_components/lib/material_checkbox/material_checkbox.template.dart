// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_checkbox.dart';
export 'material_checkbox.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref5;
import 'package:angular_components/model/ui/icon.template.dart' as _ref6;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref7;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref8;
import 'package:angular_forms/angular_forms.template.dart' as _ref9;
import 'package:angular_components/material_checkbox/material_checkbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_checkbox.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../material_icon/material_icon.template.dart' as import4;
import '../material_icon/material_icon.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import17;
import '../material_ripple/material_ripple.template.dart' as import18;
import '../material_ripple/material_ripple.dart' as import19;
import 'package:angular/src/core/linker/views/render_view.dart' as import20;
import 'package:angular/src/core/linker/views/host_view.dart' as import21;
import '../interfaces/has_disabled.dart' as import22;

final List<dynamic> styles$MaterialCheckboxComponent = [import0.styles];

class ViewMaterialCheckboxComponent0 extends import1.ComponentView<import2.MaterialCheckboxComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  import4.ViewMaterialIconComponent0 _compView_1;
  import5.MaterialIconComponent _MaterialIconComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_5;
  var _expr_7;
  var _expr_8;
  import8.DivElement _el_0;
  import8.Element _el_1;
  import8.DivElement _el_3;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialCheckboxComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-checkbox');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialCheckboxComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_checkbox/material_checkbox.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    this._el_0 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'icon-container');
    this.addShimC(this._el_0);
    this._compView_1 = import4.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this._el_0.append(this._el_1);
    import13.setAttribute(this._el_1, 'aria-hidden', 'true');
    this.updateChildClassNonHtml(this._el_1, 'icon');
    this.addShimC(this._el_1);
    this._MaterialIconComponent_1_5 = import5.MaterialIconComponent(this._el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    final _anchor_2 = import13.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialCheckboxComponent1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this._el_3 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_3, 'content');
    this.addShimC(this._el_3);
    this._el_3.append(this._textBinding_4.element);
    final _text_5 = import13.appendText(this._el_3, ' ');
    this.project(this._el_3, 0);
    parentRenderNode.addEventListener('keyup', this.eventHandler1(_ctx.handleKeyUp));
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    parentRenderNode.addEventListener('mousedown', this.eventHandler1(_ctx.handleMouseDown));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
    parentRenderNode.addEventListener('focus', this.eventHandler1(_ctx.handleFocus));
    parentRenderNode.addEventListener('blur', this.eventHandler1(_ctx.handleBlur));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_3 = _ctx.icon;
    if (import12.checkBinding(this._expr_3, currVal_3, 'icon', 'package:angular_components/material_checkbox/material_checkbox.html')) {
      this._MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    this._NgIf_2_9.ngIf = (!_ctx.disabled);
    this._appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.showFocus;
    if (import12.checkBinding(this._expr_0, currVal_0, 'showFocus', 'package:angular_components/material_checkbox/material_checkbox.html')) {
      import13.updateClassBinding(this._el_0, 'focus', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.themeColor;
    if (import12.checkBinding(this._expr_1, currVal_1, 'themeColor', 'package:angular_components/material_checkbox/material_checkbox.html')) {
      this._el_1.style.setProperty('color', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.checked || _ctx.indeterminate);
    if (import12.checkBinding(this._expr_2, currVal_2, 'checked || indeterminate', 'package:angular_components/material_checkbox/material_checkbox.html')) {
      import13.updateClassBindingNonHtml(this._el_1, 'filled', currVal_2);
      this._expr_2 = currVal_2;
    }
    if (firstCheck) {
      if (!identical(_ctx.contentId, null)) {
        import13.setProperty(this._el_3, 'id', _ctx.contentId);
      }
    }
    this._textBinding_4.updateText(import15.interpolateString0(_ctx.label));
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._compView_1.destroyInternalState();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    if (firstCheck) {
      if (!identical(_ctx.role, null)) {
        import13.updateAttribute(this.rootElement, 'role', _ctx.role);
      }
      if (!identical(_ctx.contentId, null)) {
        import13.updateAttribute(this.rootElement, 'aria-labelledby', _ctx.contentId);
      }
    }
    final currVal_5 = _ctx.tabIndex;
    if (import12.checkBinding(this._expr_5, currVal_5, null, null)) {
      import13.updateAttribute(this.rootElement, 'tabindex', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.disabled;
    if (import12.checkBinding(this._expr_7, currVal_7, null, null)) {
      import13.updateClassBindingNonHtml(this.rootElement, 'disabled', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.disabled;
    if (import12.checkBinding(this._expr_8, currVal_8, null, null)) {
      import13.updateAttribute(this.rootElement, 'aria-disabled', currVal_8?.toString());
      this._expr_8 = currVal_8;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$MaterialCheckboxComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialCheckboxComponentNgFactory = ComponentFactory<import2.MaterialCheckboxComponent>('material-checkbox', viewFactory_MaterialCheckboxComponentHost0);
ComponentFactory<import2.MaterialCheckboxComponent> get MaterialCheckboxComponentNgFactory {
  return _MaterialCheckboxComponentNgFactory;
}

ComponentFactory<import2.MaterialCheckboxComponent> createMaterialCheckboxComponentFactory() {
  return ComponentFactory('material-checkbox', viewFactory_MaterialCheckboxComponentHost0);
}

class _ViewMaterialCheckboxComponent1 extends import17.EmbeddedView<import2.MaterialCheckboxComponent> {
  import18.ViewMaterialRippleComponent0 _compView_0;
  import19.MaterialRippleComponent _MaterialRippleComponent_0_5;
  var _expr_0;
  import8.Element _el_0;
  _ViewMaterialCheckboxComponent1(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import18.ViewMaterialRippleComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'ripple');
    this.addShimC(this._el_0);
    this._MaterialRippleComponent_0_5 = import19.MaterialRippleComponent(this._el_0);
    this._compView_0.create(this._MaterialRippleComponent_0_5);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.rippleColor;
    if (import12.checkBinding(this._expr_0, currVal_0, 'rippleColor', 'package:angular_components/material_checkbox/material_checkbox.html')) {
      this._el_0.style.setProperty('color', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialCheckboxComponent1(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialCheckboxComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialCheckboxComponentHost = const [];

class _ViewMaterialCheckboxComponentHost0 extends import21.HostView<import2.MaterialCheckboxComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialCheckboxComponent(_el_0, this.componentView, null, null, null);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.HasDisabled) && (0 == nodeIndex))) {
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
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import21.HostView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponentHost0() {
  return _ViewMaterialCheckboxComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCheckboxComponent, createMaterialCheckboxComponentFactory());
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
