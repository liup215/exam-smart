// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_progress.dart';
export 'material_progress.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref1;
import 'package:angular_components/material_progress/material_progress.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_progress.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/src/runtime/interpolate.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import11;

final List<dynamic> styles$MaterialProgressComponent = [import0.styles];

class ViewMaterialProgressComponent0 extends import1.ComponentView<import2.MaterialProgressComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialProgressComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import3.document.createElement('material-progress');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_progress/material_progress.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import3.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import3.document;
    this._el_0 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'progress-container');
    import8.setAttribute(this._el_0, 'role', 'progressbar');
    this.addShimC(this._el_0);
    this._el_1 = import8.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_1, 'secondary-progress');
    this.addShimC(this._el_1);
    this._el_2 = import8.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_2, 'active-progress');
    this.addShimC(this._el_2);
    _ctx.primary = this._el_2;
    _ctx.secondary = this._el_1;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.ariaValue;
    if (import7.checkBinding(this._expr_0, currVal_0, 'ariaValue', 'package:angular_components/material_progress/material_progress.html')) {
      import8.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaValueNow;
    if (import7.checkBinding(this._expr_1, currVal_1, 'ariaValueNow', 'package:angular_components/material_progress/material_progress.html')) {
      import8.updateAttribute(this._el_0, 'aria-valuenow', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.indeterminate;
    if (import7.checkBinding(this._expr_2, currVal_2, 'indeterminate', 'package:angular_components/material_progress/material_progress.html')) {
      import8.updateClassBinding(this._el_0, 'indeterminate', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.useFallbackAnimation;
    if (import7.checkBinding(this._expr_3, currVal_3, 'useFallbackAnimation', 'package:angular_components/material_progress/material_progress.html')) {
      import8.updateClassBinding(this._el_0, 'fallback', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.min;
    if (import7.checkBinding(this._expr_4, currVal_4, '{{min}}', 'package:angular_components/material_progress/material_progress.html')) {
      import8.setAttribute(this._el_0, 'aria-valuemin', import9.interpolate0(currVal_4));
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.max;
    if (import7.checkBinding(this._expr_5, currVal_5, '{{max}}', 'package:angular_components/material_progress/material_progress.html')) {
      import8.setAttribute(this._el_0, 'aria-valuemax', import9.interpolate0(currVal_5));
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.activeAndSecondaryProgressValue;
    if (import7.checkBinding(this._expr_6, currVal_6, 'activeAndSecondaryProgressValue', 'package:angular_components/material_progress/material_progress.html')) {
      import8.updateAttribute(this._el_1, 'aria-label', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.secondaryTransform;
    if (import7.checkBinding(this._expr_7, currVal_7, 'secondaryTransform', 'package:angular_components/material_progress/material_progress.html')) {
      this._el_1.style.setProperty('transform', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.primaryTransform;
    if (import7.checkBinding(this._expr_8, currVal_8, 'primaryTransform', 'package:angular_components/material_progress/material_progress.html')) {
      this._el_2.style.setProperty('transform', currVal_8);
      this._expr_8 = currVal_8;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$MaterialProgressComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialProgressComponentNgFactory = ComponentFactory<import2.MaterialProgressComponent>('material-progress', viewFactory_MaterialProgressComponentHost0);
ComponentFactory<import2.MaterialProgressComponent> get MaterialProgressComponentNgFactory {
  return _MaterialProgressComponentNgFactory;
}

ComponentFactory<import2.MaterialProgressComponent> createMaterialProgressComponentFactory() {
  return ComponentFactory('material-progress', viewFactory_MaterialProgressComponentHost0);
}

final List<dynamic> styles$MaterialProgressComponentHost = const [];

class _ViewMaterialProgressComponentHost0 extends import11.HostView<import2.MaterialProgressComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialProgressComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialProgressComponent(null, this.componentView, _el_0);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectChanges();
    if ((!import7.debugThrowIfChanged)) {
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

import11.HostView<import2.MaterialProgressComponent> viewFactory_MaterialProgressComponentHost0() {
  return _ViewMaterialProgressComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialProgressComponent, createMaterialProgressComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
