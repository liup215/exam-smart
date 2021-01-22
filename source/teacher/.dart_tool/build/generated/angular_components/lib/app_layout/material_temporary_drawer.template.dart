// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_temporary_drawer.dart';
export 'material_temporary_drawer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_drawer_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/app_layout/material_temporary_drawer.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_temporary_drawer.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import '../content/deferred_content_aware.dart' as import11;

final List<dynamic> styles$MaterialTemporaryDrawerComponent = [import0.styles];

class ViewMaterialTemporaryDrawerComponent0 extends import1.ComponentView<import2.MaterialTemporaryDrawerComponent> {
  var _expr_0;
  var _expr_1;
  static import3.ComponentStyles _componentStyles;
  ViewMaterialTemporaryDrawerComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-drawer');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/app_layout/material_temporary_drawer.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'drawer-content');
    this.addShimC(_el_0);
    this.project(_el_0, 0);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    parentRenderNode.addEventListener('click', this.eventHandler0(_ctx.toggle));
  }

  void _handleEvent_0($event) {
    $event.stopPropagation();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.hostMatDrawerCollapsed;
    if (import7.checkBinding(this._expr_0, currVal_0, null, null)) {
      import8.updateClassBindingNonHtml(this.rootElement, 'mat-drawer-collapsed', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hostMatDrawerExpanded;
    if (import7.checkBinding(this._expr_1, currVal_1, null, null)) {
      import8.updateClassBindingNonHtml(this.rootElement, 'mat-drawer-expanded', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$MaterialTemporaryDrawerComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTemporaryDrawerComponentNgFactory = ComponentFactory<import2.MaterialTemporaryDrawerComponent>('material-drawer[temporary]', viewFactory_MaterialTemporaryDrawerComponentHost0);
ComponentFactory<import2.MaterialTemporaryDrawerComponent> get MaterialTemporaryDrawerComponentNgFactory {
  return _MaterialTemporaryDrawerComponentNgFactory;
}

ComponentFactory<import2.MaterialTemporaryDrawerComponent> createMaterialTemporaryDrawerComponentFactory() {
  return ComponentFactory('material-drawer[temporary]', viewFactory_MaterialTemporaryDrawerComponentHost0);
}

final List<dynamic> styles$MaterialTemporaryDrawerComponentHost = const [];

class _ViewMaterialTemporaryDrawerComponentHost0 extends import10.HostView<import2.MaterialTemporaryDrawerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialTemporaryDrawerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialTemporaryDrawerComponent();
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialTemporaryDrawerComponent) || identical(token, import11.DeferredContentAware)) && (0 == nodeIndex))) {
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
    if (((!import7.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }
}

import10.HostView<import2.MaterialTemporaryDrawerComponent> viewFactory_MaterialTemporaryDrawerComponentHost0() {
  return _ViewMaterialTemporaryDrawerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTemporaryDrawerComponent, createMaterialTemporaryDrawerComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
