// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'scorecard.dart';
export 'scorecard.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref5;
import 'package:angular_components/utils/color/color.template.dart' as _ref6;
import 'package:angular_components/utils/color/material_chart_colors.template.dart' as _ref7;
import 'package:angular_components/scorecard/scorecard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'scorecard.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import15;
import '../material_ripple/material_ripple.template.dart' as import16;
import '../material_ripple/material_ripple.dart' as import17;
import 'package:angular/src/core/linker/views/render_view.dart' as import18;
import '../material_icon/material_icon.template.dart' as import19;
import '../material_icon/material_icon.dart' as import20;
import 'package:angular/src/core/linker/views/host_view.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import '../utils/browser/dom_service/dom_service.dart' as import23;

final List<dynamic> styles$ScorecardComponent = [import0.styles];

class ViewScorecardComponent0 extends import1.ComponentView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import6.DivElement _el_3;
  static import7.ComponentStyles _componentStyles;
  ViewScorecardComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('acx-scorecard');
    this.updateChildClassNonHtml(this.rootElement, import2.ScorecardComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/scorecard/scorecard.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_ScorecardComponent1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final doc = import6.document;
    final _el_1 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'label-name');
    this.addShimC(_el_1);
    _el_1.append(this._textBinding_2.element);
    this.project(_el_1, 0);
    this._el_3 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_3, 'label-value');
    this.addShimC(this._el_3);
    this._el_3.append(this._textBinding_4.element);
    this.project(this._el_3, 1);
    final _anchor_5 = import11.appendAnchor(parentRenderNode);
    this._appEl_5 = ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_ScorecardComponent2);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _text_6 = import11.appendText(parentRenderNode, '\n');
    final _anchor_7 = import11.appendAnchor(parentRenderNode);
    this._appEl_7 = ViewContainer(7, null, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_ScorecardComponent3);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _text_8 = import11.appendText(parentRenderNode, '\n');
    final _anchor_9 = import11.appendAnchor(parentRenderNode);
    this._appEl_9 = ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(this._appEl_9, viewFactory_ScorecardComponent5);
    this._NgIf_9_9 = NgIf(this._appEl_9, _TemplateRef_9_8);
    final _text_10 = import11.appendText(parentRenderNode, '\n');
    this.project(parentRenderNode, 3);
    parentRenderNode.addEventListener('keydown', this.eventHandler1(_ctx.keydown));
    parentRenderNode.addEventListener('blur', this.eventHandler0(_ctx.resetOutline));
    parentRenderNode.addEventListener('mousedown', this.eventHandler0(_ctx.onMouseInteraction));
    parentRenderNode.addEventListener('click', this.eventHandler0(_ctx.handleClick));
    parentRenderNode.addEventListener('focus', this.eventHandler1(_ctx.onFocus));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeypress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.selectable;
    this._NgIf_5_9.ngIf = (_ctx.suggestionBefore != null);
    this._NgIf_7_9.ngIf = (_ctx.description != null);
    this._NgIf_9_9.ngIf = (_ctx.suggestionAfter != null);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_9.detectChangesInNestedViews();
    this._textBinding_2.updateText(import13.interpolateString0(_ctx.label));
    final currVal_0 = _ctx.tooltip;
    if (import10.checkBinding(this._expr_0, currVal_0, 'tooltip', 'package:angular_components/scorecard/scorecard.html')) {
      import11.setProperty(this._el_3, 'title', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_4.updateText(import13.interpolateString0(_ctx.value));
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_9.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_1 = _ctx.isChangePositive;
    if (import10.checkBinding(this._expr_1, currVal_1, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'is-change-positive', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isChangeNegative;
    if (import10.checkBinding(this._expr_2, currVal_2, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'is-change-negative', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.selectable;
    if (import10.checkBinding(this._expr_3, currVal_3, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'selectable', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hostTabIndex;
    if (import10.checkBinding(this._expr_4, currVal_4, null, null)) {
      import11.updateAttribute(this.rootElement, 'tabindex', currVal_4?.toString());
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hostRole;
    if (import10.checkBinding(this._expr_5, currVal_5, null, null)) {
      import11.updateAttribute(this.rootElement, 'role', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.backgroundStyle;
    if (import10.checkBinding(this._expr_6, currVal_6, null, null)) {
      this.rootElement.style.setProperty('background', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.extraBig;
    if (import10.checkBinding(this._expr_7, currVal_7, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'extra-big', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.selected;
    if (import10.checkBinding(this._expr_8, currVal_8, null, null)) {
      import11.updateClassBindingNonHtml(this.rootElement, 'selected', currVal_8);
      this._expr_8 = currVal_8;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$ScorecardComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ScorecardComponentNgFactory = ComponentFactory<import2.ScorecardComponent>('acx-scorecard', viewFactory_ScorecardComponentHost0);
ComponentFactory<import2.ScorecardComponent> get ScorecardComponentNgFactory {
  return _ScorecardComponentNgFactory;
}

ComponentFactory<import2.ScorecardComponent> createScorecardComponentFactory() {
  return ComponentFactory('acx-scorecard', viewFactory_ScorecardComponentHost0);
}

class _ViewScorecardComponent1 extends import15.EmbeddedView<import2.ScorecardComponent> {
  import16.ViewMaterialRippleComponent0 _compView_0;
  import17.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewScorecardComponent1(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewMaterialRippleComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
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

import15.EmbeddedView<void> viewFactory_ScorecardComponent1(import18.RenderView parentView, int parentIndex) {
  return _ViewScorecardComponent1(parentView, parentIndex);
}

class _ViewScorecardComponent2 extends import15.EmbeddedView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewScorecardComponent2(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'suggestion before');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import13.interpolateString0(_ctx.suggestionBefore));
  }
}

import15.EmbeddedView<void> viewFactory_ScorecardComponent2(import18.RenderView parentView, int parentIndex) {
  return _ViewScorecardComponent2(parentView, parentIndex);
}

class _ViewScorecardComponent3 extends import15.EmbeddedView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewScorecardComponent3(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'description');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_ScorecardComponent4);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    _el_0.append(this._textBinding_3.element);
    final _text_4 = import11.appendText(_el_0, '  ');
    this.project(_el_0, 2);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = ((_ctx.changeGlyph && (_ctx.description != '')) && (!_ctx.isChangeNeutral));
    this._appEl_1.detectChangesInNestedViews();
    this._textBinding_3.updateText(import13.interpolateString0(_ctx.description));
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import15.EmbeddedView<void> viewFactory_ScorecardComponent3(import18.RenderView parentView, int parentIndex) {
  return _ViewScorecardComponent3(parentView, parentIndex);
}

class _ViewScorecardComponent4 extends import15.EmbeddedView<import2.ScorecardComponent> {
  import19.ViewMaterialIconComponent0 _compView_0;
  import20.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewScorecardComponent4(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import19.ViewMaterialIconComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'change-glyph');
    import11.setAttribute(_el_0, 'size', 'small');
    this.addShimC(_el_0);
    this._MaterialIconComponent_0_5 = import20.MaterialIconComponent(_el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.changeGlyphIcon;
    if (import10.checkBinding(this._expr_0, currVal_0, 'changeGlyphIcon', 'package:angular_components/scorecard/scorecard.html')) {
      this._MaterialIconComponent_0_5.icon = currVal_0;
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

import15.EmbeddedView<void> viewFactory_ScorecardComponent4(import18.RenderView parentView, int parentIndex) {
  return _ViewScorecardComponent4(parentView, parentIndex);
}

class _ViewScorecardComponent5 extends import15.EmbeddedView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewScorecardComponent5(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'suggestion after');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import13.interpolateString0(_ctx.suggestionAfter));
  }
}

import15.EmbeddedView<void> viewFactory_ScorecardComponent5(import18.RenderView parentView, int parentIndex) {
  return _ViewScorecardComponent5(parentView, parentIndex);
}

final List<dynamic> styles$ScorecardComponentHost = const [];

class _ViewScorecardComponentHost0 extends import21.HostView<import2.ScorecardComponent> {
  @override
  void build() {
    this.componentView = ViewScorecardComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import10.isDevMode
        ? import22.debugInjectorWrap(import2.ScorecardComponent, () {
            return import2.ScorecardComponent(this.componentView, _el_0, this.injectorGet(import23.DomService, this.parentIndex));
          })
        : import2.ScorecardComponent(this.componentView, _el_0, this.injectorGet(import23.DomService, this.parentIndex)));
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

import21.HostView<import2.ScorecardComponent> viewFactory_ScorecardComponentHost0() {
  return _ViewScorecardComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScorecardComponent, createScorecardComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
