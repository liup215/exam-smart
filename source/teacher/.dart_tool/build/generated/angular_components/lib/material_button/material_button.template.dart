// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_button.dart';
export 'material_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_button_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref3;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref4;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref5;
import 'package:angular_components/theme/dark_theme.template.dart' as _ref6;
import 'package:angular_components/material_button/material_button.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_button.dart' as import2;
import '../material_ripple/material_ripple.template.dart' as import3;
import '../material_ripple/material_ripple.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import '../theme/dark_theme.dart' as import14;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import15;
import '../button_decorator/button_decorator.dart' as import16;
import '../interfaces/has_disabled.dart' as import17;

final List<dynamic> styles$MaterialButtonComponent = [import0.styles];

class ViewMaterialButtonComponent0 extends import1.ComponentView<import2.MaterialButtonComponent> {
  import3.ViewMaterialRippleComponent0 _compView_2;
  import4.MaterialRippleComponent _MaterialRippleComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialButtonComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-button');
    import9.updateAttribute(this.rootElement, 'animated', import2.MaterialButtonComponent.hostAnimated);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_button/material_button.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import9.appendText(parentRenderNode, '\n');
    final doc = import8.document;
    final _el_1 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'content');
    this.addShimC(_el_1);
    this.project(_el_1, 0);
    this._compView_2 = import3.ViewMaterialRippleComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    parentRenderNode.append(_el_2);
    this.addShimC(_el_2);
    this._MaterialRippleComponent_2_5 = import4.MaterialRippleComponent(_el_2);
    this._compView_2.create(this._MaterialRippleComponent_2_5);
    _el_2.addEventListener('mousedown', this.eventHandler1(_ctx.onMouseDown));
    _el_2.addEventListener('mouseup', this.eventHandler1(_ctx.onMouseUp));
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
    parentRenderNode.addEventListener('mousedown', this.eventHandler1(_ctx.onMouseDown));
    parentRenderNode.addEventListener('mouseup', this.eventHandler1(_ctx.onMouseUp));
    parentRenderNode.addEventListener('focus', this.eventHandler1(_ctx.onFocus));
    parentRenderNode.addEventListener('blur', this.eventHandler1(_ctx.onBlur));
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    changed = false;
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
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
      import9.updateAttribute(this.rootElement, 'tabindex', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaRole;
    if (import10.checkBinding(this._expr_1, currVal_1, null, null)) {
      import9.updateAttribute(this.rootElement, 'role', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabledStr;
    if (import10.checkBinding(this._expr_2, currVal_2, null, null)) {
      import9.updateAttribute(this.rootElement, 'aria-disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import10.checkBinding(this._expr_3, currVal_3, null, null)) {
      import9.updateClassBindingNonHtml(this.rootElement, 'is-disabled', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hostDisabled;
    if (import10.checkBinding(this._expr_4, currVal_4, null, null)) {
      import9.updateAttribute(this.rootElement, 'disabled', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hostRaised;
    if (import10.checkBinding(this._expr_5, currVal_5, null, null)) {
      import9.updateAttribute(this.rootElement, 'raised', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.hostClassIsFocused;
    if (import10.checkBinding(this._expr_6, currVal_6, null, null)) {
      import9.updateClassBindingNonHtml(this.rootElement, 'is-focused', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hostElevation;
    if (import10.checkBinding(this._expr_7, currVal_7, null, null)) {
      import9.updateAttribute(this.rootElement, 'elevation', currVal_7);
      this._expr_7 = currVal_7;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialButtonComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialButtonComponentNgFactory = ComponentFactory<import2.MaterialButtonComponent>('material-button', viewFactory_MaterialButtonComponentHost0);
ComponentFactory<import2.MaterialButtonComponent> get MaterialButtonComponentNgFactory {
  return _MaterialButtonComponentNgFactory;
}

ComponentFactory<import2.MaterialButtonComponent> createMaterialButtonComponentFactory() {
  return ComponentFactory('material-button', viewFactory_MaterialButtonComponentHost0);
}

final List<dynamic> styles$MaterialButtonComponentHost = const [];

class _ViewMaterialButtonComponentHost0 extends import12.HostView<import2.MaterialButtonComponent> {
  dynamic _AcxDarkTheme_0_5;
  @override
  void build() {
    this.componentView = ViewMaterialButtonComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._AcxDarkTheme_0_5 = (import10.isDevMode
        ? import13.debugInjectorWrap(import14.AcxDarkTheme, () {
            return import14.AcxDarkTheme(this.injectorGetOptional(const import15.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import14.AcxDarkTheme(this.injectorGetOptional(const import15.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this.component = import2.MaterialButtonComponent(_el_0, this._AcxDarkTheme_0_5, this.componentView, null);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import14.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_5;
      }
      if (((identical(token, import2.MaterialButtonComponent) || identical(token, import16.ButtonDirective)) || identical(token, import17.HasDisabled))) {
        return this.component;
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
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }
}

import12.HostView<import2.MaterialButtonComponent> viewFactory_MaterialButtonComponentHost0() {
  return _ViewMaterialButtonComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialButtonComponent, createMaterialButtonComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
