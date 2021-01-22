// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_stackable_drawer.dart';
export 'material_stackable_drawer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/app_layout/material_temporary_drawer.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/app_layout/material_stackable_drawer.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_stackable_drawer.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import '../content/deferred_content_aware.dart' as import12;

final List<dynamic> styles$MaterialStackableDrawerComponent = [import0.styles];

class ViewMaterialStackableDrawerComponent0 extends import1.ComponentView<import2.MaterialStackableDrawerComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import3.DivElement _el_0;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialStackableDrawerComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import3.document.createElement('material-drawer');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/app_layout/material_stackable_drawer.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import3.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import3.document;
    this._el_0 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'drawer-content');
    this.addShimC(this._el_0);
    this.project(this._el_0, 0);
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    parentRenderNode.addEventListener('click', this.eventHandler0(_ctx.toggle));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.isExpanded;
    if (import7.checkBinding(this._expr_0, currVal_0, 'isExpanded', 'package:angular_components/app_layout/material_stackable_drawer.html')) {
      import8.updateClassBinding(this._el_0, 'drawer-content-expanded', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  void _handleEvent_0($event) {
    $event.stopPropagation();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_1 = _ctx.hostMatDrawerCollapsed;
    if (import7.checkBinding(this._expr_1, currVal_1, null, null)) {
      import8.updateClassBindingNonHtml(this.rootElement, 'mat-drawer-collapsed', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hostMatDrawerExpanded;
    if (import7.checkBinding(this._expr_2, currVal_2, null, null)) {
      import8.updateClassBindingNonHtml(this.rootElement, 'mat-drawer-expanded', currVal_2);
      this._expr_2 = currVal_2;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$MaterialStackableDrawerComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialStackableDrawerComponentNgFactory = ComponentFactory<import2.MaterialStackableDrawerComponent>('material-drawer[stackable]', viewFactory_MaterialStackableDrawerComponentHost0);
ComponentFactory<import2.MaterialStackableDrawerComponent> get MaterialStackableDrawerComponentNgFactory {
  return _MaterialStackableDrawerComponentNgFactory;
}

ComponentFactory<import2.MaterialStackableDrawerComponent> createMaterialStackableDrawerComponentFactory() {
  return ComponentFactory('material-drawer[stackable]', viewFactory_MaterialStackableDrawerComponentHost0);
}

final List<dynamic> styles$MaterialStackableDrawerComponentHost = const [];

class _ViewMaterialStackableDrawerComponentHost0 extends import10.HostView<import2.MaterialStackableDrawerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialStackableDrawerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.MaterialStackableDrawerComponent, () {
            return import2.MaterialStackableDrawerComponent(this.injectorGetOptional(import2.MaterialStackableDrawerComponent, this.parentIndex));
          })
        : import2.MaterialStackableDrawerComponent(this.injectorGetOptional(import2.MaterialStackableDrawerComponent, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialStackableDrawerComponent) || identical(token, import12.DeferredContentAware)) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import7.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }
}

import10.HostView<import2.MaterialStackableDrawerComponent> viewFactory_MaterialStackableDrawerComponentHost0() {
  return _ViewMaterialStackableDrawerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialStackableDrawerComponent, createMaterialStackableDrawerComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
