// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_icon.dart';
export 'material_icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_icon.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime/interpolate.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import12;

final List<dynamic> styles$MaterialIconComponent = [import0.styles];

class ViewMaterialIconComponent0 extends import1.ComponentView<import2.MaterialIconComponent> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  static import4.ComponentStyles _componentStyles;
  ViewMaterialIconComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('material-icon');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/material_icon/material_icon.dart' : null);
  }

  @override
  void build() {
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import9.appendText(parentRenderNode, '\n');
    final doc = import7.document;
    final _el_1 = import9.appendElement(doc, parentRenderNode, 'i');
    import9.setAttribute(_el_1, 'aria-hidden', 'true');
    this.updateChildClass(_el_1, 'material-icon-i material-icons');
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_2.updateText(import10.interpolateString0(_ctx.iconName));
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$MaterialIconComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialIconComponentNgFactory = ComponentFactory<import2.MaterialIconComponent>('material-icon', viewFactory_MaterialIconComponentHost0);
ComponentFactory<import2.MaterialIconComponent> get MaterialIconComponentNgFactory {
  return _MaterialIconComponentNgFactory;
}

ComponentFactory<import2.MaterialIconComponent> createMaterialIconComponentFactory() {
  return ComponentFactory('material-icon', viewFactory_MaterialIconComponentHost0);
}

final List<dynamic> styles$MaterialIconComponentHost = const [];

class _ViewMaterialIconComponentHost0 extends import12.HostView<import2.MaterialIconComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialIconComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialIconComponent(_el_0);
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
}

import12.HostView<import2.MaterialIconComponent> viewFactory_MaterialIconComponentHost0() {
  return _ViewMaterialIconComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconComponent, createMaterialIconComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
