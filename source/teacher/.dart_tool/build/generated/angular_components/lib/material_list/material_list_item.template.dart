// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_list_item.dart';
export 'material_list_item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list_item.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_list_item.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import '../mixins/material_dropdown_base.dart' as import12;
import '../interfaces/has_disabled.dart' as import13;

final List<dynamic> styles$MaterialListItemComponent = [import0.styles];

class ViewMaterialListItemComponent0 extends import1.ComponentView<import2.MaterialListItemComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  static import3.ComponentStyles _componentStyles;
  ViewMaterialListItemComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-list-item');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialListItemComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_list/material_list_item.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    this.project(parentRenderNode, 0);
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.tabIndex;
    if (import7.checkBinding(this._expr_0, currVal_0, null, null)) {
      import8.updateAttribute(this.rootElement, 'tabindex', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaRole;
    if (import7.checkBinding(this._expr_1, currVal_1, null, null)) {
      import8.updateAttribute(this.rootElement, 'role', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabledStr;
    if (import7.checkBinding(this._expr_2, currVal_2, null, null)) {
      import8.updateAttribute(this.rootElement, 'aria-disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import7.checkBinding(this._expr_3, currVal_3, null, null)) {
      import8.updateClassBindingNonHtml(this.rootElement, 'is-disabled', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.disabled;
    if (import7.checkBinding(this._expr_4, currVal_4, null, null)) {
      import8.updateClassBindingNonHtml(this.rootElement, 'disabled', currVal_4);
      this._expr_4 = currVal_4;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$MaterialListItemComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialListItemComponentNgFactory = ComponentFactory<import2.MaterialListItemComponent>('material-list-item', viewFactory_MaterialListItemComponentHost0);
ComponentFactory<import2.MaterialListItemComponent> get MaterialListItemComponentNgFactory {
  return _MaterialListItemComponentNgFactory;
}

ComponentFactory<import2.MaterialListItemComponent> createMaterialListItemComponentFactory() {
  return ComponentFactory('material-list-item', viewFactory_MaterialListItemComponentHost0);
}

final List<dynamic> styles$MaterialListItemComponentHost = const [];

class _ViewMaterialListItemComponentHost0 extends import10.HostView<import2.MaterialListItemComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialListItemComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.MaterialListItemComponent, () {
            return import2.MaterialListItemComponent(_el_0, this.injectorGetOptional(import12.DropdownHandle, this.parentIndex), null, null);
          })
        : import2.MaterialListItemComponent(_el_0, this.injectorGetOptional(import12.DropdownHandle, this.parentIndex), null, null));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.HasDisabled) && (0 == nodeIndex))) {
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

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.MaterialListItemComponent> viewFactory_MaterialListItemComponentHost0() {
  return _ViewMaterialListItemComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialListItemComponent, createMaterialListItemComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
