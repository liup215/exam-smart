// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_radio_group.dart';
export 'material_radio_group.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_forms/angular_forms.template.dart' as _ref5;
import 'package:angular_components/material_radio/material_radio_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_radio_group.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime/dom_helpers.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular/src/core/zone/ng_zone.dart' as import12;

final List<dynamic> styles$MaterialRadioGroupComponent = [import0.styles];

class ViewMaterialRadioGroupComponent0 extends import1.ComponentView<import2.MaterialRadioGroupComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewMaterialRadioGroupComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-radio-group');
    import7.updateAttribute(this.rootElement, 'role', import2.MaterialRadioGroupComponent.role);
    this.rootElement.tabIndex = import2.MaterialRadioGroupComponent.tabIndex;
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/material_radio/material_radio_group.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    this.project(parentRenderNode, 0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$MaterialRadioGroupComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialRadioGroupComponentNgFactory = ComponentFactory<import2.MaterialRadioGroupComponent>('material-radio-group', viewFactory_MaterialRadioGroupComponentHost0);
ComponentFactory<import2.MaterialRadioGroupComponent> get MaterialRadioGroupComponentNgFactory {
  return _MaterialRadioGroupComponentNgFactory;
}

ComponentFactory<import2.MaterialRadioGroupComponent> createMaterialRadioGroupComponentFactory() {
  return ComponentFactory('material-radio-group', viewFactory_MaterialRadioGroupComponentHost0);
}

final List<dynamic> styles$MaterialRadioGroupComponentHost = const [];

class _ViewMaterialRadioGroupComponentHost0 extends import10.HostView<import2.MaterialRadioGroupComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialRadioGroupComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import8.isDevMode
        ? import11.debugInjectorWrap(import2.MaterialRadioGroupComponent, () {
            return import2.MaterialRadioGroupComponent(this.injectorGet(import12.NgZone, this.parentIndex), null);
          })
        : import2.MaterialRadioGroupComponent(this.injectorGet(import12.NgZone, this.parentIndex), null));
    this.component.radioComponents = [];
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialRadioGroupComponent) && (0 == nodeIndex))) {
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
    if ((!import8.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterContentInit();
      }
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.MaterialRadioGroupComponent> viewFactory_MaterialRadioGroupComponentHost0() {
  return _ViewMaterialRadioGroupComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioGroupComponent, createMaterialRadioGroupComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
