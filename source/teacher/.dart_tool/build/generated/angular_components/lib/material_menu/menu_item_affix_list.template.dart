// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'menu_item_affix_list.dart';
export 'menu_item_affix_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/base_affix.template.dart' as _ref4;
import 'package:angular_components/model/menu/menu_item_affix.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_item_affix_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'menu_item_affix_list.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import12;
import 'package:angular/src/core/linker/views/render_view.dart' as import13;
import 'package:angular/src/core/linker/views/host_view.dart' as import14;
import '../interfaces/has_disabled.dart' as import15;

final List<dynamic> styles$MenuItemAffixListComponent = [import0.styles];

class ViewMenuItemAffixListComponent0 extends import1.ComponentView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_0;
  TemplateRef _TemplateRef_0_8;
  static import5.ComponentStyles _componentStyles;
  ViewMenuItemAffixListComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('menu-item-affix-list');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_menu/menu_item_affix_list.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    this._TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_MenuItemAffixListComponent1);
    _ctx.viewRef = this._appEl_0;
  }

  @override
  void detectChangesInternal() {
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MenuItemAffixListComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MenuItemAffixListComponentNgFactory = ComponentFactory<import2.MenuItemAffixListComponent>('menu-item-affix-list', viewFactory_MenuItemAffixListComponentHost0);
ComponentFactory<import2.MenuItemAffixListComponent> get MenuItemAffixListComponentNgFactory {
  return _MenuItemAffixListComponentNgFactory;
}

ComponentFactory<import2.MenuItemAffixListComponent> createMenuItemAffixListComponentFactory() {
  return ComponentFactory('menu-item-affix-list', viewFactory_MenuItemAffixListComponentHost0);
}

class _ViewMenuItemAffixListComponent1 extends import12.EmbeddedView<import2.MenuItemAffixListComponent> {
  _ViewMenuItemAffixListComponent1(import13.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNodesAndSubscriptions(const [], null);
  }
}

import12.EmbeddedView<void> viewFactory_MenuItemAffixListComponent1(import13.RenderView parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MenuItemAffixListComponentHost = const [];

class _ViewMenuItemAffixListComponentHost0 extends import14.HostView<import2.MenuItemAffixListComponent> {
  @override
  void build() {
    this.componentView = ViewMenuItemAffixListComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MenuItemAffixListComponent(this.componentView);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HasDisabled) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
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

import14.HostView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponentHost0() {
  return _ViewMenuItemAffixListComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemAffixListComponent, createMenuItemAffixListComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
