// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_toggle.dart';
export 'material_toggle.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref2;
import 'package:angular_forms/angular_forms.template.dart' as _ref3;
import 'package:angular_components/material_toggle/material_toggle.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_toggle.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import 'package:angular/src/runtime/text_binding.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import 'package:angular/src/core/linker/views/host_view.dart' as import17;
import '../interfaces/has_disabled.dart' as import18;

final List<dynamic> styles$MaterialToggleComponent = [import0.styles];

class ViewMaterialToggleComponent0 extends import1.ComponentView<import2.MaterialToggleComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import5.DivElement _el_0;
  import5.DivElement _el_3;
  import5.DivElement _el_5;
  import5.DivElement _el_6;
  static import6.ComponentStyles _componentStyles;
  ViewMaterialToggleComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import5.document.createElement('material-toggle');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialToggleComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_toggle/material_toggle.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import5.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import5.document;
    this._el_0 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'material-toggle');
    import10.setAttribute(this._el_0, 'role', 'button');
    this.addShimC(this._el_0);
    final _anchor_1 = import10.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialToggleComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _el_2 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_2, 'tgl-container');
    this.addShimC(_el_2);
    this._el_3 = import10.appendDiv(doc, _el_2);
    import10.setAttribute(this._el_3, 'animated', '');
    this.updateChildClass(this._el_3, 'tgl-bar');
    this.addShimC(this._el_3);
    final _el_4 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_4, 'tgl-btn-container');
    this.addShimC(_el_4);
    this._el_5 = import10.appendDiv(doc, _el_4);
    this.updateChildClass(this._el_5, 'tgl-btn-underlay');
    this.addShimC(this._el_5);
    this._el_6 = import10.appendDiv(doc, this._el_5);
    import10.setAttribute(this._el_6, 'animated', '');
    this.updateChildClass(this._el_6, 'tgl-btn');
    this.addShimC(this._el_6);
    this.project(this._el_6, 0);
    this._el_0.addEventListener('blur', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('focus', this.eventHandler1(this._handleEvent_1));
    this._el_0.addEventListener('mouseenter', this.eventHandler1(this._handleEvent_2));
    this._el_0.addEventListener('mouseleave', this.eventHandler1(this._handleEvent_3));
    _ctx.toggleElement = this._el_0;
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.hasLabel;
    this._appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.checked;
    if (import9.checkBinding(this._expr_0, currVal_0, 'checked', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.updateClassBinding(this._el_0, 'checked', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import9.checkBinding(this._expr_1, currVal_1, 'disabled', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.updateClassBinding(this._el_0, 'disabled', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.disabled ? '-1' : '0');
    if (import9.checkBinding(this._expr_2, currVal_2, 'disabled ? \'-1\': \'0\'', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.updateAttribute(this._el_0, 'tabindex', currVal_2?.toString());
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import9.checkBinding(this._expr_3, currVal_3, '{{disabled}}', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.setAttribute(this._el_0, 'aria-disabled', import12.interpolate0(currVal_3));
      this._expr_3 = currVal_3;
    }
    final currVal_4 = import12.interpolateString0(_ctx.ariaLabel);
    if (import9.checkBinding(this._expr_4, currVal_4, '{{ariaLabel}}', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.setAttribute(this._el_0, 'aria-label', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.shadow_z;
    if (import9.checkBinding(this._expr_5, currVal_5, '{{shadow_z}}', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.setAttribute(this._el_3, 'elevation', import12.interpolate0(currVal_5));
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.checked;
    if (import9.checkBinding(this._expr_6, currVal_6, 'checked', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.updateClassBinding(this._el_5, 'under-checked', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hasFocus;
    if (import9.checkBinding(this._expr_7, currVal_7, 'hasFocus', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.updateClassBinding(this._el_5, 'under-focus', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.shadow_z;
    if (import9.checkBinding(this._expr_8, currVal_8, '{{shadow_z}}', 'package:angular_components/material_toggle/material_toggle.html')) {
      import10.setAttribute(this._el_6, 'elevation', import12.interpolate0(currVal_8));
      this._expr_8 = currVal_8;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.hasFocus = false;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.hasFocus = true;
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.isHovered = true;
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.isHovered = false;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$MaterialToggleComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialToggleComponentNgFactory = ComponentFactory<import2.MaterialToggleComponent>('material-toggle', viewFactory_MaterialToggleComponentHost0);
ComponentFactory<import2.MaterialToggleComponent> get MaterialToggleComponentNgFactory {
  return _MaterialToggleComponentNgFactory;
}

ComponentFactory<import2.MaterialToggleComponent> createMaterialToggleComponentFactory() {
  return ComponentFactory('material-toggle', viewFactory_MaterialToggleComponentHost0);
}

class _ViewMaterialToggleComponent1 extends import14.EmbeddedView<import2.MaterialToggleComponent> {
  final import15.TextBinding _textBinding_1 = import15.TextBinding();
  _ViewMaterialToggleComponent1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import5.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'tgl-lbl');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import12.interpolateString0(_ctx.label));
  }
}

import14.EmbeddedView<void> viewFactory_MaterialToggleComponent1(import16.RenderView parentView, int parentIndex) {
  return _ViewMaterialToggleComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialToggleComponentHost = const [];

class _ViewMaterialToggleComponentHost0 extends import17.HostView<import2.MaterialToggleComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialToggleComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialToggleComponent(this.componentView, null);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.HasDisabled) && (0 == nodeIndex))) {
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
    this.componentView.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }
}

import17.HostView<import2.MaterialToggleComponent> viewFactory_MaterialToggleComponentHost0() {
  return _ViewMaterialToggleComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialToggleComponent, createMaterialToggleComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
