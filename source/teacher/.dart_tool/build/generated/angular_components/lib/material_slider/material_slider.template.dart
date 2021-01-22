// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_slider.dart';
export 'material_slider.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;
import 'package:angular_components/material_slider/material_slider.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_slider.dart' as import2;
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
import 'package:angular/src/core/linker/views/render_view.dart' as import15;
import 'package:angular/src/core/linker/views/host_view.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import '../utils/browser/dom_service/dom_service.dart' as import18;
import '../interfaces/has_disabled.dart' as import19;

final List<dynamic> styles$MaterialSliderComponent = [import0.styles];

class ViewMaterialSliderComponent0 extends import1.ComponentView<import2.MaterialSliderComponent> {
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
  var _expr_9;
  var _expr_10;
  var _expr_11;
  import5.DivElement _el_0;
  import5.DivElement _el_2;
  import5.DivElement _el_4;
  import5.DivElement _el_7;
  import5.DivElement _el_8;
  static import6.ComponentStyles _componentStyles;
  ViewMaterialSliderComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import5.document.createElement('material-slider');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_slider/material_slider.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import5.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import5.document;
    this._el_0 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'container');
    this.addShimC(this._el_0);
    final _anchor_1 = import10.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialSliderComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this._el_2 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_2, 'track-container left-track-container');
    this.addShimC(this._el_2);
    final _el_3 = import10.appendDiv(doc, this._el_2);
    this.updateChildClass(_el_3, 'track');
    this.addShimC(_el_3);
    this._el_4 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_4, 'right-knob knob');
    import10.setAttribute(this._el_4, 'role', 'slider');
    this.addShimC(this._el_4);
    final _el_5 = import10.appendDiv(doc, this._el_4);
    this.updateChildClass(_el_5, 'knob-real');
    this.addShimC(_el_5);
    final _el_6 = import10.appendDiv(doc, this._el_4);
    this.updateChildClass(_el_6, 'knob-hover-shadow');
    this.addShimC(_el_6);
    this._el_7 = import10.appendDiv(doc, this._el_4);
    this.updateChildClass(this._el_7, 'knob-drag-shadow');
    this.addShimC(this._el_7);
    this._el_8 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_8, 'track-container right-track-container');
    this.addShimC(this._el_8);
    final _el_9 = import10.appendDiv(doc, this._el_8);
    this.updateChildClass(_el_9, 'track');
    this.addShimC(_el_9);
    this._el_0.addEventListener('mousedown', this.eventHandler1(_ctx.mouseDown));
    this._el_0.addEventListener('touchstart', this.eventHandler1(_ctx.touchStart));
    this._el_4.addEventListener('mousedown', this.eventHandler1(this._handleEvent_0));
    this._el_4.addEventListener('touchstart', this.eventHandler1(this._handleEvent_1));
    this._el_4.addEventListener('keydown', this.eventHandler1(_ctx.knobKeyDown));
    _ctx.container = this._el_0;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.isTwoSided;
    this._appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.disabled;
    if (import9.checkBinding(this._expr_0, currVal_0, 'disabled', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateClassBinding(this._el_0, 'is-disabled', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.progressPercent - _ctx.leftProgressPercent);
    if (import9.checkBinding(this._expr_1, currVal_1, 'progressPercent - leftProgressPercent', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_2.style.setProperty('width', ((currVal_1 == null) ? null : (currVal_1.toString() + '%')));
      this._expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.disabled ? (0 - 1) : 0);
    if (import9.checkBinding(this._expr_2, currVal_2, 'disabled ? -1 : 0', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_4, 'tabindex', currVal_2?.toString());
      this._expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.isRtl ? 0 : (0 - 8));
    if (import9.checkBinding(this._expr_3, currVal_3, 'isRtl ? 0 : -8', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_4.style.setProperty('left', ((currVal_3 == null) ? null : (currVal_3.toString() + 'px')));
      this._expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.isRtl ? (0 - 8) : 0);
    if (import9.checkBinding(this._expr_4, currVal_4, 'isRtl ? -8 : 0', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_4.style.setProperty('right', ((currVal_4 == null) ? null : (currVal_4.toString() + 'px')));
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.min;
    if (import9.checkBinding(this._expr_5, currVal_5, 'min', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_4, 'aria-valuemin', currVal_5?.toString());
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.max;
    if (import9.checkBinding(this._expr_6, currVal_6, 'max', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_4, 'aria-valuemax', currVal_6?.toString());
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.value;
    if (import9.checkBinding(this._expr_7, currVal_7, 'value', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_4, 'aria-valuenow', currVal_7?.toString());
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.isDragging;
    if (import9.checkBinding(this._expr_8, currVal_8, 'isDragging', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateClassBinding(this._el_7, 'is-dragging', currVal_8);
      this._expr_8 = currVal_8;
    }
    final currVal_9 = import12.interpolate1('calc(', (100 - _ctx.progressPercent), '%)');
    if (import9.checkBinding(this._expr_9, currVal_9, 'calc({{100-progressPercent}}%)', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_8.style.setProperty('width', currVal_9);
      this._expr_9 = currVal_9;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.isRightKnobSelected = true;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.isRightKnobSelected = true;
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_10 = _ctx.disabled;
    if (import9.checkBinding(this._expr_10, currVal_10, null, null)) {
      import10.updateAttribute(this.rootElement, 'aria-disabled', currVal_10?.toString());
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.disabled;
    if (import9.checkBinding(this._expr_11, currVal_11, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'is-disabled', currVal_11);
      this._expr_11 = currVal_11;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$MaterialSliderComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialSliderComponentNgFactory = ComponentFactory<import2.MaterialSliderComponent>('material-slider', viewFactory_MaterialSliderComponentHost0);
ComponentFactory<import2.MaterialSliderComponent> get MaterialSliderComponentNgFactory {
  return _MaterialSliderComponentNgFactory;
}

ComponentFactory<import2.MaterialSliderComponent> createMaterialSliderComponentFactory() {
  return ComponentFactory('material-slider', viewFactory_MaterialSliderComponentHost0);
}

class _ViewMaterialSliderComponent1 extends import14.EmbeddedView<import2.MaterialSliderComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  import5.DivElement _el_0;
  import5.DivElement _el_2;
  import5.DivElement _el_5;
  _ViewMaterialSliderComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import5.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'track-container double-sided-left-track-container');
    this.addShimC(this._el_0);
    final _el_1 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_1, 'track');
    this.addShimC(_el_1);
    this._el_2 = doc.createElement('div');
    this.updateChildClass(this._el_2, 'left-knob knob');
    import10.setAttribute(this._el_2, 'role', 'slider');
    this.addShimC(this._el_2);
    final _el_3 = import10.appendDiv(doc, this._el_2);
    this.updateChildClass(_el_3, 'knob-real');
    this.addShimC(_el_3);
    final _el_4 = import10.appendDiv(doc, this._el_2);
    this.updateChildClass(_el_4, 'knob-hover-shadow');
    this.addShimC(_el_4);
    this._el_5 = import10.appendDiv(doc, this._el_2);
    this.updateChildClass(this._el_5, 'knob-drag-shadow');
    this.addShimC(this._el_5);
    this._el_2.addEventListener('mousedown', this.eventHandler1(this._handleEvent_0));
    this._el_2.addEventListener('touchstart', this.eventHandler1(this._handleEvent_1));
    this._el_2.addEventListener('keydown', this.eventHandler1(this._handleEvent_2));
    this.initRootNodesAndSubscriptions([this._el_0, this._el_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.leftProgressPercent;
    if (import9.checkBinding(this._expr_0, currVal_0, 'calc({{leftProgressPercent}}%)', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_0.style.setProperty('width', import12.interpolate1('calc(', currVal_0, '%)').toString());
      this._expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.disabled ? (0 - 1) : 0);
    if (import9.checkBinding(this._expr_1, currVal_1, 'disabled ? -1 : 0', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_2, 'tabindex', currVal_1?.toString());
      this._expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.isRtl ? 0 : (0 - 8));
    if (import9.checkBinding(this._expr_2, currVal_2, 'isRtl ? 0 : -8', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_2.style.setProperty('left', ((currVal_2 == null) ? null : (currVal_2.toString() + 'px')));
      this._expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.isRtl ? (0 - 8) : 0);
    if (import9.checkBinding(this._expr_3, currVal_3, 'isRtl ? -8 : 0', 'package:angular_components/material_slider/material_slider.html')) {
      this._el_2.style.setProperty('right', ((currVal_3 == null) ? null : (currVal_3.toString() + 'px')));
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.min;
    if (import9.checkBinding(this._expr_4, currVal_4, 'min', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_2, 'aria-valuemin', currVal_4?.toString());
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.max;
    if (import9.checkBinding(this._expr_5, currVal_5, 'max', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_2, 'aria-valuemax', currVal_5?.toString());
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.leftValue;
    if (import9.checkBinding(this._expr_6, currVal_6, 'leftValue', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateAttribute(this._el_2, 'aria-valuenow', currVal_6?.toString());
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isDragging;
    if (import9.checkBinding(this._expr_7, currVal_7, 'isDragging', 'package:angular_components/material_slider/material_slider.html')) {
      import10.updateClassBinding(this._el_5, 'is-dragging', currVal_7);
      this._expr_7 = currVal_7;
    }
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.isLeftKnobSelected = true;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.isLeftKnobSelected = true;
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.knobKeyDown(
      $event,
      isLeftKnobPressed: true,
    );
  }
}

import14.EmbeddedView<void> viewFactory_MaterialSliderComponent1(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialSliderComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSliderComponentHost = const [];

class _ViewMaterialSliderComponentHost0 extends import16.HostView<import2.MaterialSliderComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialSliderComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialSliderComponent, () {
            return import2.MaterialSliderComponent(this.componentView, this.injectorGet(import18.DomService, this.parentIndex));
          })
        : import2.MaterialSliderComponent(this.componentView, this.injectorGet(import18.DomService, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialSliderComponent) || identical(token, import19.HasDisabled)) && (0 == nodeIndex))) {
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
}

import16.HostView<import2.MaterialSliderComponent> viewFactory_MaterialSliderComponentHost0() {
  return _ViewMaterialSliderComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSliderComponent, createMaterialSliderComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
