// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_radio.dart';
export 'material_radio.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref5;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref6;
import 'package:angular_components/model/ui/icon.template.dart' as _ref7;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref8;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref9;
import 'package:angular_forms/angular_forms.template.dart' as _ref10;
import 'package:angular_components/material_radio/material_radio.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_radio.dart' as import2;
import '../material_icon/material_icon.template.dart' as import3;
import '../material_icon/material_icon.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/views/view.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import15;
import '../material_ripple/material_ripple.template.dart' as import16;
import '../material_ripple/material_ripple.dart' as import17;
import 'package:angular/src/core/linker/views/render_view.dart' as import18;
import 'package:angular/src/core/linker/views/host_view.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'material_radio_group.dart' as import21;
import '../interfaces/has_disabled.dart' as import22;

final List<dynamic> styles$MaterialRadioComponent = [import0.styles];

class ViewMaterialRadioComponent0 extends import1.ComponentView<import2.MaterialRadioComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  import4.MaterialIconComponent _MaterialIconComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_7;
  var _expr_8;
  import7.DivElement _el_0;
  static import8.ComponentStyles _componentStyles;
  ViewMaterialRadioComponent0(import9.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('material-radio');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialRadioComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_radio/material_radio.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import7.document;
    this._el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'icon-container');
    this.addShimC(this._el_0);
    this._compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    this._el_0.append(_el_1);
    import12.setAttribute(_el_1, 'aria-hidden', 'true');
    this.updateChildClassNonHtml(_el_1, 'icon');
    this.addShimC(_el_1);
    this._MaterialIconComponent_1_5 = import4.MaterialIconComponent(_el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    final _anchor_2 = import12.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialRadioComponent1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _el_3 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_3, 'content');
    this.addShimC(_el_3);
    this.project(_el_3, 0);
    parentRenderNode.addEventListener('keydown', this.eventHandler1(_ctx.handleKeyDown));
    parentRenderNode.addEventListener('keyup', this.eventHandler1(_ctx.handleKeyUp));
    parentRenderNode.addEventListener('focus', this.eventHandler0(_ctx.onFocus));
    parentRenderNode.addEventListener('blur', this.eventHandler0(_ctx.onBlur));
    parentRenderNode.addEventListener('click', this.eventHandler0(_ctx.handleClick));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = _ctx.icon;
    if (import11.checkBinding(this._expr_3, currVal_3, 'icon', 'package:angular_components/material_radio/material_radio.html')) {
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
    if (import11.checkBinding(this._expr_0, currVal_0, 'showFocus', 'package:angular_components/material_radio/material_radio.html')) {
      import12.updateClassBinding(this._el_0, 'focus', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.checked;
    if (import11.checkBinding(this._expr_1, currVal_1, 'checked', 'package:angular_components/material_radio/material_radio.html')) {
      import12.updateClassBinding(this._el_0, 'checked', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import11.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_radio/material_radio.html')) {
      import12.updateClassBinding(this._el_0, 'disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
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
        import12.updateAttribute(this.rootElement, 'role', _ctx.role);
      }
    }
    final currVal_4 = _ctx.checked;
    if (import11.checkBinding(this._expr_4, currVal_4, null, null)) {
      import12.updateAttribute(this.rootElement, 'aria-checked', currVal_4?.toString());
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.tabIndex;
    if (import11.checkBinding(this._expr_5, currVal_5, null, null)) {
      import12.updateAttribute(this.rootElement, 'tabindex', currVal_5?.toString());
      this._expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.disabled;
    if (import11.checkBinding(this._expr_7, currVal_7, null, null)) {
      import12.updateClassBindingNonHtml(this.rootElement, 'disabled', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.disabled;
    if (import11.checkBinding(this._expr_8, currVal_8, null, null)) {
      import12.updateAttribute(this.rootElement, 'aria-disabled', currVal_8?.toString());
      this._expr_8 = currVal_8;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import8.ComponentStyles.scoped(styles$MaterialRadioComponent, _debugComponentUrl));
      if (import11.isDevMode) {
        import8.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialRadioComponentNgFactory = ComponentFactory<import2.MaterialRadioComponent>('material-radio', viewFactory_MaterialRadioComponentHost0);
ComponentFactory<import2.MaterialRadioComponent> get MaterialRadioComponentNgFactory {
  return _MaterialRadioComponentNgFactory;
}

ComponentFactory<import2.MaterialRadioComponent> createMaterialRadioComponentFactory() {
  return ComponentFactory('material-radio', viewFactory_MaterialRadioComponentHost0);
}

class _ViewMaterialRadioComponent1 extends import15.EmbeddedView<import2.MaterialRadioComponent> {
  import16.ViewMaterialRippleComponent0 _compView_0;
  import17.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewMaterialRadioComponent1(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewMaterialRippleComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'ripple');
    this.addShimC(_el_0);
    this._MaterialRippleComponent_0_5 = import17.MaterialRippleComponent(_el_0);
    this._compView_0.create(this._MaterialRippleComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    changed = false;
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

import15.EmbeddedView<void> viewFactory_MaterialRadioComponent1(import18.RenderView parentView, int parentIndex) {
  return _ViewMaterialRadioComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialRadioComponentHost = const [];

class _ViewMaterialRadioComponentHost0 extends import19.HostView<import2.MaterialRadioComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialRadioComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import11.isDevMode
        ? import20.debugInjectorWrap(import2.MaterialRadioComponent, () {
            return import2.MaterialRadioComponent(_el_0, this.componentView, this.injectorGetOptional(import21.MaterialRadioGroupComponent, this.parentIndex), null, null);
          })
        : import2.MaterialRadioComponent(_el_0, this.componentView, this.injectorGetOptional(import21.MaterialRadioGroupComponent, this.parentIndex), null, null));
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

import19.HostView<import2.MaterialRadioComponent> viewFactory_MaterialRadioComponentHost0() {
  return _ViewMaterialRadioComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioComponent, createMaterialRadioComponentFactory());
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
