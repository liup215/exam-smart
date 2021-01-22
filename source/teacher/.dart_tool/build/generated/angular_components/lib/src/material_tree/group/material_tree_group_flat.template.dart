// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_group_flat.dart';
export 'material_tree_group_flat.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref3;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref4;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref5;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_node.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_tree_group_flat.dart' as import2;
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
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/views/render_view.dart' as import15;
import '../../../dynamic_component/dynamic_component.template.dart' as import16;
import '../../../dynamic_component/dynamic_component.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import19;
import 'package:angular/src/runtime/text_binding.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import 'package:angular/src/core/linker/views/host_view.dart' as import22;
import '../material_tree_root.dart' as import23;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart' as import24;
import '../../../material_radio/material_radio_group.template.dart' as import25;
import '../../../material_radio/material_radio_group.dart' as import26;
import 'package:angular/src/core/zone/ng_zone.dart' as import27;
import '../../../material_radio/material_radio.template.dart' as import28;
import '../../../material_radio/material_radio.dart' as import29;
import '../../../interfaces/has_disabled.dart' as import30;
import '../../../mixins/material_dropdown_base.dart' as import31;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart' as import32;
import '../../../material_checkbox/material_checkbox.template.dart' as import33;
import '../../../material_checkbox/material_checkbox.dart' as import34;

final List<dynamic> styles$MaterialTreeGroupFlatListComponent = [import0.styles];

class ViewMaterialTreeGroupFlatListComponent0<T> extends import1.ComponentView<import2.MaterialTreeGroupFlatListComponent<T>> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupFlatListComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tree-group-flat-list');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatListComponent1<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import4.NgFor(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.group;
    if (import9.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.html')) {
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

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import10.updateClassBindingNonHtml(this.rootElement, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialTreeGroupFlatListComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeGroupFlatListComponentNgFactory = ComponentFactory<import2.MaterialTreeGroupFlatListComponent>('material-tree-group-flat-list', viewFactory_MaterialTreeGroupFlatListComponentHost0);
ComponentFactory<import2.MaterialTreeGroupFlatListComponent> get MaterialTreeGroupFlatListComponentNgFactory {
  return _MaterialTreeGroupFlatListComponentNgFactory;
}

ComponentFactory<import2.MaterialTreeGroupFlatListComponent<T>> createMaterialTreeGroupFlatListComponentFactory<T>() {
  return ComponentFactory('material-tree-group-flat-list', viewFactory_MaterialTreeGroupFlatListComponentHost0);
}

class _ViewMaterialTreeGroupFlatListComponent1<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatListComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeGroupFlatListComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'material-tree-option');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatListComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatListComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    this._NgIf_2_9.ngIf = (!_ctx.useComponentRenderer);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatListComponent1<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent2<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatListComponent<T>> {
  import16.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import17.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatListComponent2(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'item component');
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import9.isDevMode
        ? import18.debugInjectorWrap(import17.DynamicComponent, () {
            return import17.DynamicComponent(this.parentView.parentView.injectorGet(import19.SlowComponentLoader, this.parentView.parentIndex), this._appEl_0);
          })
        : import17.DynamicComponent(this.parentView.parentView.injectorGet(import19.SlowComponentLoader, this.parentView.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_option = import9.unsafeCast<T>(import9.unsafeCast<_ViewMaterialTreeGroupFlatListComponent1>(this.parentView).locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import9.checkBinding(this._expr_0, currVal_0, 'getComponentType(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.html')) {
      this._DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import9.checkBinding(this._expr_1, currVal_1, 'getComponentFactory(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (import9.checkBinding(this._expr_2, currVal_2, 'option', 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.html')) {
      this._DynamicComponent_0_8.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._DynamicComponent_0_8.ngAfterChanges();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DynamicComponent_0_8.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatListComponent2<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent3<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatListComponent<T>> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  _ViewMaterialTreeGroupFlatListComponent3(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'item text');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_option = import9.unsafeCast<T>(import9.unsafeCast<_ViewMaterialTreeGroupFlatListComponent1>(this.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import21.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatListComponent3<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponent3<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatListComponentHost = const [];

class _ViewMaterialTreeGroupFlatListComponentHost0<T> extends import22.HostView<import2.MaterialTreeGroupFlatListComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeGroupFlatListComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialTreeGroupFlatListComponent, () {
            return import2.MaterialTreeGroupFlatListComponent(this.injectorGet(import23.MaterialTreeRoot, this.parentIndex), this.componentView);
          })
        : import2.MaterialTreeGroupFlatListComponent(this.injectorGet(import23.MaterialTreeRoot, this.parentIndex), this.componentView));
    this.initRootNode(_el_0);
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
}

import22.HostView<import2.MaterialTreeGroupFlatListComponent<T>> viewFactory_MaterialTreeGroupFlatListComponentHost0<T>() {
  return _ViewMaterialTreeGroupFlatListComponentHost0();
}

final List<dynamic> styles$MaterialTreeGroupFlatRadioComponent = [import24.styles];

class ViewMaterialTreeGroupFlatRadioComponent0<T> extends import1.ComponentView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  bool _query_MaterialRadioComponent_0_0_isDirty = true;
  import25.ViewMaterialRadioGroupComponent0 _compView_0;
  import26.MaterialRadioGroupComponent _MaterialRadioGroupComponent_0_5;
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_1;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupFlatRadioComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tree-group-flat-radio');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import25.ViewMaterialRadioGroupComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._MaterialRadioGroupComponent_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import26.MaterialRadioGroupComponent, () {
            return import26.MaterialRadioGroupComponent(this.parentView.injectorGet(import27.NgZone, this.parentIndex), null);
          })
        : import26.MaterialRadioGroupComponent(this.parentView.injectorGet(import27.NgZone, this.parentIndex), null));
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatRadioComponent1<T>(parentView, parentIndex);
    });
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
    this._compView_0.createAndProject(this._MaterialRadioGroupComponent_0_5, [
      [this._appEl_1]
    ]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.MaterialRadioGroupComponent) && (nodeIndex <= 1))) {
      return this._MaterialRadioGroupComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.selectionModel, null)) {
        this._MaterialRadioGroupComponent_0_5.valueSelection = _ctx.selectionModel;
        changed = true;
      }
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_1 = _ctx.group;
    if (import9.checkBinding(this._expr_1, currVal_1, 'group', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      this._NgFor_1_9.ngForOf = currVal_1;
      this._expr_1 = currVal_1;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._query_MaterialRadioComponent_0_0_isDirty) {
        this._MaterialRadioGroupComponent_0_5.radioComponents = this._appEl_1.mapNestedViewsWithSingleResult((_ViewMaterialTreeGroupFlatRadioComponent1 nestedView) {
          import6.View.queryChangeDetectorRefs[nestedView._MaterialRadioComponent_0_5] = nestedView._compView_0;
          return nestedView._MaterialRadioComponent_0_5;
        });
        this._query_MaterialRadioComponent_0_0_isDirty = false;
      }
      if (firstCheck) {
        this._MaterialRadioGroupComponent_0_5.ngAfterContentInit();
      }
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialRadioGroupComponent_0_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import10.updateClassBindingNonHtml(this.rootElement, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialTreeGroupFlatRadioComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeGroupFlatRadioComponentNgFactory = ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent>('material-tree-group-flat-radio', viewFactory_MaterialTreeGroupFlatRadioComponentHost0);
ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent> get MaterialTreeGroupFlatRadioComponentNgFactory {
  return _MaterialTreeGroupFlatRadioComponentNgFactory;
}

ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent<T>> createMaterialTreeGroupFlatRadioComponentFactory<T>() {
  return ComponentFactory('material-tree-group-flat-radio', viewFactory_MaterialTreeGroupFlatRadioComponentHost0);
}

class _ViewMaterialTreeGroupFlatRadioComponent1<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  import28.ViewMaterialRadioComponent0 _compView_0;
  import29.MaterialRadioComponent _MaterialRadioComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import8.Element _el_0;
  _ViewMaterialTreeGroupFlatRadioComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import28.ViewMaterialRadioComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, import21.interpolateString2('', 'material-tree-option tree-selection-state', ' ', import29.MaterialRadioComponent.hostClass, ''));
    import10.setAttribute(this._el_0, 'role', 'option');
    this.addShimC(this._el_0);
    this._MaterialRadioComponent_0_5 = import29.MaterialRadioComponent(this._el_0, this._compView_0, import9.unsafeCast<ViewMaterialTreeGroupFlatRadioComponent0>(this.parentView)._MaterialRadioGroupComponent_0_5, null, 'option');
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatRadioComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatRadioComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this._compView_0.createAndProject(this._MaterialRadioComponent_0_5, [
      [this._appEl_1, this._appEl_2]
    ]);
    this.initRootNode(this._el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import30.HasDisabled) && (nodeIndex <= 2))) {
      return this._MaterialRadioComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_option = import9.unsafeCast<T>(this.locals['\$implicit']);
    changed = false;
    final currVal_2 = local_option;
    if (import9.checkBinding(this._expr_2, currVal_2, 'option', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      this._MaterialRadioComponent_0_5.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isReadOnly;
    if (import9.checkBinding(this._expr_3, currVal_3, 'isReadOnly', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      this._MaterialRadioComponent_0_5.disabled = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    this._NgIf_2_9.ngIf = (!_ctx.useComponentRenderer);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import9.checkBinding(this._expr_0, currVal_0, 'isSelected(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'selected', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import9.checkBinding(this._expr_1, currVal_1, 'isSelectable(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'selectable', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialTreeGroupFlatRadioComponent0>(this.parentView)._query_MaterialRadioComponent_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatRadioComponent1<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent2<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  import16.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import17.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatRadioComponent2(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'item component');
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import9.isDevMode
        ? import18.debugInjectorWrap(import17.DynamicComponent, () {
            return import17.DynamicComponent(this.parentView.parentView.parentView.injectorGet(import19.SlowComponentLoader, this.parentView.parentView.parentIndex), this._appEl_0);
          })
        : import17.DynamicComponent(this.parentView.parentView.parentView.injectorGet(import19.SlowComponentLoader, this.parentView.parentView.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_option = import9.unsafeCast<T>(import9.unsafeCast<_ViewMaterialTreeGroupFlatRadioComponent1>(this.parentView).locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import9.checkBinding(this._expr_0, currVal_0, 'getComponentType(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      this._DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import9.checkBinding(this._expr_1, currVal_1, 'getComponentFactory(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (import9.checkBinding(this._expr_2, currVal_2, 'option', 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.html')) {
      this._DynamicComponent_0_8.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._DynamicComponent_0_8.ngAfterChanges();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DynamicComponent_0_8.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatRadioComponent2<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent3<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  _ViewMaterialTreeGroupFlatRadioComponent3(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'item text');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_option = import9.unsafeCast<T>(import9.unsafeCast<_ViewMaterialTreeGroupFlatRadioComponent1>(this.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import21.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatRadioComponent3<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponent3<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatRadioComponentHost = const [];

class _ViewMaterialTreeGroupFlatRadioComponentHost0<T> extends import22.HostView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialTreeGroupFlatRadioComponent, () {
            return import2.MaterialTreeGroupFlatRadioComponent(this.injectorGet(import23.MaterialTreeRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import31.DropdownHandle, this.parentIndex));
          })
        : import2.MaterialTreeGroupFlatRadioComponent(this.injectorGet(import23.MaterialTreeRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import31.DropdownHandle, this.parentIndex)));
    this.initRootNode(_el_0);
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
}

import22.HostView<import2.MaterialTreeGroupFlatRadioComponent<T>> viewFactory_MaterialTreeGroupFlatRadioComponentHost0<T>() {
  return _ViewMaterialTreeGroupFlatRadioComponentHost0();
}

final List<dynamic> styles$MaterialTreeGroupFlatCheckComponent = [import32.styles];

class ViewMaterialTreeGroupFlatCheckComponent0<T> extends import1.ComponentView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupFlatCheckComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tree-group-flat-check');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatCheckComponent1<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import4.NgFor(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.group;
    if (import9.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
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

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import10.updateClassBindingNonHtml(this.rootElement, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialTreeGroupFlatCheckComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeGroupFlatCheckComponentNgFactory = ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent>('material-tree-group-flat-check', viewFactory_MaterialTreeGroupFlatCheckComponentHost0);
ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent> get MaterialTreeGroupFlatCheckComponentNgFactory {
  return _MaterialTreeGroupFlatCheckComponentNgFactory;
}

ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent<T>> createMaterialTreeGroupFlatCheckComponentFactory<T>() {
  return ComponentFactory('material-tree-group-flat-check', viewFactory_MaterialTreeGroupFlatCheckComponentHost0);
}

class _ViewMaterialTreeGroupFlatCheckComponent1<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  import33.ViewMaterialCheckboxComponent0 _compView_0;
  import34.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import8.Element _el_0;
  _ViewMaterialTreeGroupFlatCheckComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import33.ViewMaterialCheckboxComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, import21.interpolateString2('', 'material-tree-option tree-selection-state', ' ', import34.MaterialCheckboxComponent.hostClass, ''));
    import10.setAttribute(this._el_0, 'role', 'option');
    this.addShimC(this._el_0);
    this._MaterialCheckboxComponent_0_5 = import34.MaterialCheckboxComponent(this._el_0, this._compView_0, null, null, 'option');
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatCheckComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatCheckComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this._compView_0.createAndProject(this._MaterialCheckboxComponent_0_5, [
      [this._appEl_1, this._appEl_2]
    ]);
    final subscription_0 = this._MaterialCheckboxComponent_0_5.onChecked.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import30.HasDisabled) && (nodeIndex <= 2))) {
      return this._MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_option = import9.unsafeCast<T>(this.locals['\$implicit']);
    changed = false;
    final currVal_2 = (_ctx.isReadOnly || _ctx.showDisabledCheckbox(local_option));
    if (import9.checkBinding(this._expr_2, currVal_2, 'isReadOnly || showDisabledCheckbox(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      this._MaterialCheckboxComponent_0_5.disabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSelected(local_option);
    if (import9.checkBinding(this._expr_3, currVal_3, 'isSelected(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      this._MaterialCheckboxComponent_0_5.checked = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    this._NgIf_2_9.ngIf = (!_ctx.useComponentRenderer);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import9.checkBinding(this._expr_0, currVal_0, 'isSelected(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'selected', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import9.checkBinding(this._expr_1, currVal_1, 'isSelectable(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'selectable', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialCheckboxComponent_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_option = import9.unsafeCast<T>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.setSelectionState(local_option, $event);
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatCheckComponent1<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent2<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  import16.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import17.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatCheckComponent2(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'item component');
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import9.isDevMode
        ? import18.debugInjectorWrap(import17.DynamicComponent, () {
            return import17.DynamicComponent(this.parentView.parentView.injectorGet(import19.SlowComponentLoader, this.parentView.parentIndex), this._appEl_0);
          })
        : import17.DynamicComponent(this.parentView.parentView.injectorGet(import19.SlowComponentLoader, this.parentView.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_option = import9.unsafeCast<T>(import9.unsafeCast<_ViewMaterialTreeGroupFlatCheckComponent1>(this.parentView).locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import9.checkBinding(this._expr_0, currVal_0, 'getComponentType(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      this._DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import9.checkBinding(this._expr_1, currVal_1, 'getComponentFactory(option)', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (import9.checkBinding(this._expr_2, currVal_2, 'option', 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.html')) {
      this._DynamicComponent_0_8.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._DynamicComponent_0_8.ngAfterChanges();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DynamicComponent_0_8.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatCheckComponent2<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent3<T> extends import13.EmbeddedView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  _ViewMaterialTreeGroupFlatCheckComponent3(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'item text');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_option = import9.unsafeCast<T>(import9.unsafeCast<_ViewMaterialTreeGroupFlatCheckComponent1>(this.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import21.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeGroupFlatCheckComponent3<T>(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponent3<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatCheckComponentHost = const [];

class _ViewMaterialTreeGroupFlatCheckComponentHost0<T> extends import22.HostView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialTreeGroupFlatCheckComponent, () {
            return import2.MaterialTreeGroupFlatCheckComponent(this.injectorGet(import23.MaterialTreeRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import31.DropdownHandle, this.parentIndex));
          })
        : import2.MaterialTreeGroupFlatCheckComponent(this.injectorGet(import23.MaterialTreeRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import31.DropdownHandle, this.parentIndex)));
    this.initRootNode(_el_0);
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
}

import22.HostView<import2.MaterialTreeGroupFlatCheckComponent<T>> viewFactory_MaterialTreeGroupFlatCheckComponentHost0<T>() {
  return _ViewMaterialTreeGroupFlatCheckComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeGroupFlatListComponent, createMaterialTreeGroupFlatListComponentFactory());
  _ngRef.registerComponent(MaterialTreeGroupFlatRadioComponent, createMaterialTreeGroupFlatRadioComponentFactory());
  _ngRef.registerComponent(MaterialTreeGroupFlatCheckComponent, createMaterialTreeGroupFlatCheckComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
}
