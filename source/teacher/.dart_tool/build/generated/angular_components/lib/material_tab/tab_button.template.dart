// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tab_button.dart';
export 'tab_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button_base.template.dart' as _ref1;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref2;
import 'package:angular_components/material_tab/tab_mixin.template.dart' as _ref3;
import 'package:angular_components/material_tab/tab_button.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'tab_button.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../material_ripple/material_ripple.template.dart' as import4;
import '../material_ripple/material_ripple.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/runtime/interpolate.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import14;

final List<dynamic> styles$TabButtonComponent = [import0.styles];

class ViewTabButtonComponent0 extends import1.ComponentView<import2.TabButtonComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  import4.ViewMaterialRippleComponent0 _compView_2;
  import5.MaterialRippleComponent _MaterialRippleComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  static import6.ComponentStyles _componentStyles;
  ViewTabButtonComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('tab-button');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_tab/tab_button.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import9.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'content');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this._compView_2 = import4.ViewMaterialRippleComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    parentRenderNode.append(_el_2);
    this.addShimC(_el_2);
    this._MaterialRippleComponent_2_5 = import5.MaterialRippleComponent(_el_2);
    this._compView_2.create(this._MaterialRippleComponent_2_5);
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
    parentRenderNode.addEventListener('mousedown', this.eventHandler1(_ctx.onMouseDown));
    parentRenderNode.addEventListener('mouseup', this.eventHandler1(_ctx.onMouseUp));
    parentRenderNode.addEventListener('focus', this.eventHandler1(_ctx.onFocus));
    parentRenderNode.addEventListener('blur', this.eventHandler1(_ctx.onBlur));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    this._textBinding_1.updateText(import12.interpolateString0(_ctx.label));
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
    this._MaterialRippleComponent_2_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.tabIndex;
    if (import10.checkBinding(this._expr_0, currVal_0, null, null)) {
      import11.updateAttribute(this.rootElement, 'tabindex', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaRole;
    if (import10.checkBinding(this._expr_1, currVal_1, null, null)) {
      import11.updateAttribute(this.rootElement, 'role', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabledStr;
    if (import10.checkBinding(this._expr_2, currVal_2, null, null)) {
      import11.updateAttribute(this.rootElement, 'aria-disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import10.checkBinding(this._expr_3, currVal_3, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'is-disabled', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hostClassFocus;
    if (import10.checkBinding(this._expr_4, currVal_4, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'focus', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hostClassActive;
    if (import10.checkBinding(this._expr_5, currVal_5, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'active', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.hostDisabled;
    if (import10.checkBinding(this._expr_6, currVal_6, null, null)) {
      import11.updateAttribute(this.rootElement, 'disabled', currVal_6);
      this._expr_6 = currVal_6;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$TabButtonComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _TabButtonComponentNgFactory = ComponentFactory<import2.TabButtonComponent>('tab-button', viewFactory_TabButtonComponentHost0);
ComponentFactory<import2.TabButtonComponent> get TabButtonComponentNgFactory {
  return _TabButtonComponentNgFactory;
}

ComponentFactory<import2.TabButtonComponent> createTabButtonComponentFactory() {
  return ComponentFactory('tab-button', viewFactory_TabButtonComponentHost0);
}

final List<dynamic> styles$TabButtonComponentHost = const [];

class _ViewTabButtonComponentHost0 extends import14.HostView<import2.TabButtonComponent> {
  @override
  void build() {
    this.componentView = ViewTabButtonComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.TabButtonComponent(_el_0);
    this.initRootNode(_el_0);
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
}

import14.HostView<import2.TabButtonComponent> viewFactory_TabButtonComponentHost0() {
  return _ViewTabButtonComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TabButtonComponent, createTabButtonComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
