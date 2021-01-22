// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tab.dart';
export 'material_tab.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref3;
import 'package:angular_components/material_tab/material_tab.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_tab.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'package:angular/src/core/linker/views/render_view.dart' as import14;
import 'package:angular/src/core/linker/views/host_view.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../utils/id_generator/id_generator.dart' as import17;
import '../content/deferred_content_aware.dart' as import18;

final List<dynamic> styles$MaterialTabComponent = [import0.styles];

class ViewMaterialTabComponent0 extends import1.ComponentView<import2.MaterialTabComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTabComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tab');
    import9.updateAttribute(this.rootElement, 'role', import2.MaterialTabComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_tab/material_tab.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import9.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_MaterialTabComponent1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.active;
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.active;
    if (import10.checkBinding(this._expr_0, currVal_0, null, null)) {
      import9.updateClassBindingNonHtml(this.rootElement, 'material-tab', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.panelId;
    if (import10.checkBinding(this._expr_1, currVal_1, null, null)) {
      import9.updateAttribute(this.rootElement, 'id', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tabId;
    if (import10.checkBinding(this._expr_2, currVal_2, null, null)) {
      import9.updateAttribute(this.rootElement, 'aria-labelledby', currVal_2);
      this._expr_2 = currVal_2;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialTabComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTabComponentNgFactory = ComponentFactory<import2.MaterialTabComponent>('material-tab', viewFactory_MaterialTabComponentHost0);
ComponentFactory<import2.MaterialTabComponent> get MaterialTabComponentNgFactory {
  return _MaterialTabComponentNgFactory;
}

ComponentFactory<import2.MaterialTabComponent> createMaterialTabComponentFactory() {
  return ComponentFactory('material-tab', viewFactory_MaterialTabComponentHost0);
}

class _ViewMaterialTabComponent1 extends import13.EmbeddedView<import2.MaterialTabComponent> {
  _ViewMaterialTabComponent1(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'tab-content');
    this.addShimC(_el_0);
    this.project(_el_0, 0);
    this.initRootNode(_el_0);
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTabComponent1(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTabComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTabComponentHost = const [];

class _ViewMaterialTabComponentHost0 extends import15.HostView<import2.MaterialTabComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialTabComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import10.isDevMode
        ? import16.debugInjectorWrap(import2.MaterialTabComponent, () {
            return import2.MaterialTabComponent(_el_0, this.injectorGetOptional(import17.IdGenerator, this.parentIndex));
          })
        : import2.MaterialTabComponent(_el_0, this.injectorGetOptional(import17.IdGenerator, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.Tab) || identical(token, import18.DeferredContentAware)) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }
}

import15.HostView<import2.MaterialTabComponent> viewFactory_MaterialTabComponentHost0() {
  return _ViewMaterialTabComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTabComponent, createMaterialTabComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
