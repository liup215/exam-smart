// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_ripple.dart';
export 'material_ripple.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref1;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref2;
import 'package:angular_components/utils/color/material.template.dart' as _ref3;
import 'package:angular_components/material_ripple/material_ripple.scss.css.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_ripple.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import9;

final List<dynamic> styles$MaterialRippleComponent = [import0.styles];

class ViewMaterialRippleComponent0 extends import1.ComponentView<import2.MaterialRippleComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewMaterialRippleComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-ripple');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_ripple/material_ripple.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.unscoped(styles$MaterialRippleComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialRippleComponentNgFactory = ComponentFactory<import2.MaterialRippleComponent>('material-ripple', viewFactory_MaterialRippleComponentHost0);
ComponentFactory<import2.MaterialRippleComponent> get MaterialRippleComponentNgFactory {
  return _MaterialRippleComponentNgFactory;
}

ComponentFactory<import2.MaterialRippleComponent> createMaterialRippleComponentFactory() {
  return ComponentFactory('material-ripple', viewFactory_MaterialRippleComponentHost0);
}

final List<dynamic> styles$MaterialRippleComponentHost = const [];

class _ViewMaterialRippleComponentHost0 extends import9.HostView<import2.MaterialRippleComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialRippleComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialRippleComponent(_el_0);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import9.HostView<import2.MaterialRippleComponent> viewFactory_MaterialRippleComponentHost0() {
  return _ViewMaterialRippleComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRippleComponent, createMaterialRippleComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
