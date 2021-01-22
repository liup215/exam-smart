// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_chips.dart';
export 'material_chips.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_chips/material_chip.template.dart' as _ref1;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref2;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_chips/material_chips.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_chips.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'material_chip.template.dart' as import14;
import 'material_chip.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import '../model/ui/has_renderer.dart' as import17;
import 'package:angular/src/core/linker/views/host_view.dart' as import18;

final List<dynamic> styles$MaterialChipsComponent = [import0.styles];

class ViewMaterialChipsComponent0<T> extends import1.ComponentView<import2.MaterialChipsComponent<T>> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialChipsComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-chips');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_chips/material_chips.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialChipsComponent1<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import4.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.project(parentRenderNode, 0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.selectedItems;
    if (import9.checkBinding(this._expr_0, currVal_0, 'selectedItems', 'package:angular_components/material_chips/material_chips.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
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
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialChipsComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialChipsComponentNgFactory = ComponentFactory<import2.MaterialChipsComponent>('material-chips', viewFactory_MaterialChipsComponentHost0);
ComponentFactory<import2.MaterialChipsComponent> get MaterialChipsComponentNgFactory {
  return _MaterialChipsComponentNgFactory;
}

ComponentFactory<import2.MaterialChipsComponent<T>> createMaterialChipsComponentFactory<T>() {
  return ComponentFactory('material-chips', viewFactory_MaterialChipsComponentHost0);
}

class _ViewMaterialChipsComponent1<T> extends import13.EmbeddedView<import2.MaterialChipsComponent<T>> {
  import14.ViewMaterialChipComponent0<T> _compView_0;
  import15.MaterialChipComponent<T> _MaterialChipComponent_0_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialChipsComponent1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewMaterialChipComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialChipComponent_0_5 = import15.MaterialChipComponent(_el_0);
    this._compView_0.createAndProject(this._MaterialChipComponent_0_5, [const [], const []]);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.HasRenderer) && (0 == nodeIndex))) {
      return this._MaterialChipComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_chip = import9.unsafeCast<T>(this.locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.selectionModel;
    if (import9.checkBinding(this._expr_0, currVal_0, 'selectionModel', 'package:angular_components/material_chips/material_chips.html')) {
      this._MaterialChipComponent_0_5.selectionModel = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.removable;
    if (import9.checkBinding(this._expr_1, currVal_1, 'removable', 'package:angular_components/material_chips/material_chips.html')) {
      this._MaterialChipComponent_0_5.removable = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.itemRenderer;
    if (import9.checkBinding(this._expr_2, currVal_2, 'itemRenderer', 'package:angular_components/material_chips/material_chips.html')) {
      this._MaterialChipComponent_0_5.itemRenderer = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = local_chip;
    if (import9.checkBinding(this._expr_3, currVal_3, 'chip', 'package:angular_components/material_chips/material_chips.html')) {
      this._MaterialChipComponent_0_5.value = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialChipsComponent1<T>(import16.RenderView parentView, int parentIndex) {
  return _ViewMaterialChipsComponent1<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialChipsComponentHost = const [];

class _ViewMaterialChipsComponentHost0<T> extends import18.HostView<import2.MaterialChipsComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialChipsComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialChipsComponent(this.componentView);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.HasRenderer) && (0 == nodeIndex))) {
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

import18.HostView<import2.MaterialChipsComponent<T>> viewFactory_MaterialChipsComponentHost0<T>() {
  return _ViewMaterialChipsComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialChipsComponent, createMaterialChipsComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
