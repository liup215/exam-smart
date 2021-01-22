// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tab_panel.dart';
export 'material_tab_panel.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_tab/fixed_material_tab_strip.template.dart' as _ref1;
import 'package:angular_components/material_tab/material_tab.template.dart' as _ref2;
import 'package:angular_components/material_tab/tab_change_event.template.dart' as _ref3;
import 'package:angular_components/material_tab/material_tab_panel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_tab_panel.dart' as import2;
import 'fixed_material_tab_strip.template.dart' as import3;
import 'fixed_material_tab_strip.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/di/errors.dart' as import10;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import11;
import 'package:angular/src/core/zone/ng_zone.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import14;

final List<dynamic> styles$MaterialTabPanelComponent = [import0.styles];

class ViewMaterialTabPanelComponent0 extends import1.ComponentView<import2.MaterialTabPanelComponent> {
  import3.ViewFixedMaterialTabStripComponent0 _compView_0;
  import4.FixedMaterialTabStripComponent _FixedMaterialTabStripComponent_0_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTabPanelComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tab-panel');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialTabPanelComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_tab/material_tab_panel.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewFixedMaterialTabStripComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._FixedMaterialTabStripComponent_0_5 = (import9.isDevMode
        ? import10.debugInjectorWrap(import4.FixedMaterialTabStripComponent, () {
            return import4.FixedMaterialTabStripComponent(this._compView_0, this.parentView.injectorGetOptional(const import11.OpaqueToken<dynamic>('isRtl'), this.parentIndex), this.parentView.injectorGet(import12.NgZone, this.parentIndex));
          })
        : import4.FixedMaterialTabStripComponent(this._compView_0, this.parentView.injectorGetOptional(const import11.OpaqueToken<dynamic>('isRtl'), this.parentIndex), this.parentView.injectorGet(import12.NgZone, this.parentIndex)));
    this._compView_0.create(this._FixedMaterialTabStripComponent_0_5);
    this.project(parentRenderNode, 0);
    final subscription_0 = this._FixedMaterialTabStripComponent_0_5.beforeTabChange.listen(this.eventHandler1(_ctx.onBeforeTabChange));
    final subscription_1 = this._FixedMaterialTabStripComponent_0_5.tabChange.listen(this.eventHandler1(_ctx.onTabChange));
    this.initSubscriptions([subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.tabIds;
    if (import9.checkBinding(this._expr_0, currVal_0, 'tabIds', 'package:angular_components/material_tab/material_tab_panel.html')) {
      this._FixedMaterialTabStripComponent_0_5.tabIds = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.activeTabIndex;
    if (import9.checkBinding(this._expr_1, currVal_1, 'activeTabIndex', 'package:angular_components/material_tab/material_tab_panel.html')) {
      this._FixedMaterialTabStripComponent_0_5.activeTabIndex = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tabLabels;
    if (import9.checkBinding(this._expr_2, currVal_2, 'tabLabels', 'package:angular_components/material_tab/material_tab_panel.html')) {
      this._FixedMaterialTabStripComponent_0_5.tabLabels = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._FixedMaterialTabStripComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialTabPanelComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTabPanelComponentNgFactory = ComponentFactory<import2.MaterialTabPanelComponent>('material-tab-panel', viewFactory_MaterialTabPanelComponentHost0);
ComponentFactory<import2.MaterialTabPanelComponent> get MaterialTabPanelComponentNgFactory {
  return _MaterialTabPanelComponentNgFactory;
}

ComponentFactory<import2.MaterialTabPanelComponent> createMaterialTabPanelComponentFactory() {
  return ComponentFactory('material-tab-panel', viewFactory_MaterialTabPanelComponentHost0);
}

final List<dynamic> styles$MaterialTabPanelComponentHost = const [];

class _ViewMaterialTabPanelComponentHost0 extends import14.HostView<import2.MaterialTabPanelComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialTabPanelComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialTabPanelComponent(this.componentView);
    this.component.tabs = [];
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterContentInit();
      }
    }
    this.componentView.detectChanges();
  }
}

import14.HostView<import2.MaterialTabPanelComponent> viewFactory_MaterialTabPanelComponentHost0() {
  return _ViewMaterialTabPanelComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTabPanelComponent, createMaterialTabPanelComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
