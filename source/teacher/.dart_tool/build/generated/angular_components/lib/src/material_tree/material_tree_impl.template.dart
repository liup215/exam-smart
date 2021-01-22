// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_impl.dart';
export 'material_tree_impl.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'group/material_tree_group.template.dart' as _ref0;
import 'group/material_tree_group_flat.template.dart' as _ref1;
import 'material_tree_rendering_options.template.dart' as _ref2;
import 'material_tree_root.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'package:angular_components/model/selection/select.template.dart' as _ref5;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref8;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref9;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'material_tree_impl.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import12;
import 'package:angular/src/common/directives/ng_for.dart' as import13;
import 'package:angular/src/core/linker/views/render_view.dart' as import14;
import 'group/material_tree_group.template.dart' as import15;
import 'group/material_tree_group.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import 'material_tree_root.dart' as import18;
import '../../mixins/material_dropdown_base.dart' as import19;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import20;
import '../../model/selection/selection_options.dart' as import21;
import 'dart:core';
import 'group/material_tree_group_flat.template.dart' as import23;
import 'group/material_tree_group_flat.dart' as import24;
import 'package:angular/src/core/linker/views/host_view.dart' as import25;

final List<dynamic> styles$MaterialTreeComponent = const [];

class ViewMaterialTreeComponent0<T> extends import0.ComponentView<import1.MaterialTreeComponent<T>> {
  bool _viewQuery_MaterialTreeGroupComponent_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialTreeComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('material-tree');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_impl.dart' : null);
  }

  @override
  void build() {
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import9.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent1<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import9.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.supportsHierarchy;
    this._NgIf_1_9.ngIf = (!_ctx.supportsHierarchy);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    if ((!import8.debugThrowIfChanged)) {
      if (this._viewQuery_MaterialTreeGroupComponent_0_isDirty) {
        _ctx.treeGroupNodes = this._appEl_0.mapNestedViews((_ViewMaterialTreeComponent1 nestedView) {
          return nestedView._appEl_0.mapNestedViewsWithSingleResult((_ViewMaterialTreeComponent2 nestedView) {
            import5.View.queryChangeDetectorRefs[nestedView._MaterialTreeGroupComponent_0_5] = nestedView._compView_0;
            return nestedView._MaterialTreeGroupComponent_0_5;
          });
        });
        this._viewQuery_MaterialTreeGroupComponent_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.role;
    if (import8.checkBinding(this._expr_0, currVal_0, null, null)) {
      import9.updateAttribute(this.rootElement, 'role', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hostMultiselectable;
    if (import8.checkBinding(this._expr_1, currVal_1, null, null)) {
      import9.updateAttribute(this.rootElement, 'aria-multiselectable', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hostReadonly;
    if (import8.checkBinding(this._expr_2, currVal_2, null, null)) {
      import9.updateAttribute(this.rootElement, 'aria-readonly', currVal_2);
      this._expr_2 = currVal_2;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.unscoped(styles$MaterialTreeComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeComponentNgFactory = ComponentFactory<import1.MaterialTreeComponent>('material-tree', viewFactory_MaterialTreeComponentHost0);
ComponentFactory<import1.MaterialTreeComponent> get MaterialTreeComponentNgFactory {
  return _MaterialTreeComponentNgFactory;
}

ComponentFactory<import1.MaterialTreeComponent<T>> createMaterialTreeComponentFactory<T>() {
  return ComponentFactory('material-tree', viewFactory_MaterialTreeComponentHost0);
}

class _ViewMaterialTreeComponent1<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent1(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import9.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent2<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import13.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(this._expr_0, currVal_0, 'options.optionGroups', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import8.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent1<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent2<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  import15.ViewMaterialTreeGroupComponent0<T> _compView_0;
  import16.MaterialTreeGroupComponent<T> _MaterialTreeGroupComponent_0_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialTreeComponent2(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import15.ViewMaterialTreeGroupComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this._MaterialTreeGroupComponent_0_5 = (import8.isDevMode
        ? import17.debugInjectorWrap(import16.MaterialTreeGroupComponent, () {
            return import16.MaterialTreeGroupComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0, this.parentView.injectorGetOptional(import19.DropdownHandle, this.parentIndex), this.parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), this.parentIndex));
          })
        : import16.MaterialTreeGroupComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0, this.parentView.injectorGetOptional(import19.DropdownHandle, this.parentIndex), this.parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), this.parentIndex)));
    this._compView_0.create(this._MaterialTreeGroupComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_group = import8.unsafeCast<import21.OptionGroup<T>>(this.locals['\$implicit']);
    final local_optionIndex = import8.unsafeCast<int>(this.locals['index']);
    changed = false;
    final currVal_0 = _ctx.shouldExpand(local_group, local_optionIndex);
    if (import8.checkBinding(this._expr_0, currVal_0, 'shouldExpand(group, optionIndex)', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupComponent_0_5.expandAll = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_group;
    if (import8.checkBinding(this._expr_1, currVal_1, 'group', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupComponent_0_5.group = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.allowParentSingleSelection;
    if (import8.checkBinding(this._expr_2, currVal_2, 'allowParentSingleSelection', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupComponent_0_5.allowParentSingleSelection = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.allowParentMultiSelection;
    if (import8.checkBinding(this._expr_3, currVal_3, 'allowParentMultiSelection', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupComponent_0_5.allowParentMultiSelection = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.allowDeselectInHierarchy;
    if (import8.checkBinding(this._expr_4, currVal_4, 'allowDeselectInHierarchy', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupComponent_0_5.deselectOnTrigger = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
    if (import8.checkBinding(this._expr_5, currVal_5, 'maxInitialOptionsShown(group, optionIndex)', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupComponent_0_5.maxInitialOptionsShown = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import8.unsafeCast<ViewMaterialTreeComponent0>(this.parentView.parentView)._viewQuery_MaterialTreeGroupComponent_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent2<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent3<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeComponent3(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import9.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent4<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import9.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent6<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import9.createAnchor();
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent8<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, this._appEl_1, this._appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.showFlatList;
    this._NgIf_1_9.ngIf = _ctx.showFlatRadio;
    this._NgIf_2_9.ngIf = _ctx.showFlatCheck;
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent3<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent4<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent4(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import9.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent5<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import13.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(this._expr_0, currVal_0, 'options.optionGroups', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import8.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent4<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent5<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  import23.ViewMaterialTreeGroupFlatListComponent0<T> _compView_0;
  import24.MaterialTreeGroupFlatListComponent<T> _MaterialTreeGroupFlatListComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent5(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import23.ViewMaterialTreeGroupFlatListComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this._MaterialTreeGroupFlatListComponent_0_5 = (import8.isDevMode
        ? import17.debugInjectorWrap(import24.MaterialTreeGroupFlatListComponent, () {
            return import24.MaterialTreeGroupFlatListComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0);
          })
        : import24.MaterialTreeGroupFlatListComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0));
    this._compView_0.create(this._MaterialTreeGroupFlatListComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_group = import8.unsafeCast<import21.OptionGroup<T>>(this.locals['\$implicit']);
    changed = false;
    final currVal_0 = local_group;
    if (import8.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupFlatListComponent_0_5.group = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent5<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent6<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent6(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import9.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent7<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import13.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(this._expr_0, currVal_0, 'options.optionGroups', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import8.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent6<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent7<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  import23.ViewMaterialTreeGroupFlatRadioComponent0<T> _compView_0;
  import24.MaterialTreeGroupFlatRadioComponent<T> _MaterialTreeGroupFlatRadioComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent7(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import23.ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this._MaterialTreeGroupFlatRadioComponent_0_5 = (import8.isDevMode
        ? import17.debugInjectorWrap(import24.MaterialTreeGroupFlatRadioComponent, () {
            return import24.MaterialTreeGroupFlatRadioComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0, this.parentView.injectorGetOptional(import19.DropdownHandle, this.parentIndex));
          })
        : import24.MaterialTreeGroupFlatRadioComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0, this.parentView.injectorGetOptional(import19.DropdownHandle, this.parentIndex)));
    this._compView_0.create(this._MaterialTreeGroupFlatRadioComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_group = import8.unsafeCast<import21.OptionGroup<T>>(this.locals['\$implicit']);
    changed = false;
    final currVal_0 = local_group;
    if (import8.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupFlatRadioComponent_0_5.group = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent7<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent7<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent8<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent8(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import9.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent9<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import13.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(this._expr_0, currVal_0, 'options.optionGroups', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import8.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent8<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent8<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent9<T> extends import12.EmbeddedView<import1.MaterialTreeComponent<T>> {
  import23.ViewMaterialTreeGroupFlatCheckComponent0<T> _compView_0;
  import24.MaterialTreeGroupFlatCheckComponent<T> _MaterialTreeGroupFlatCheckComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent9(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import23.ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this._MaterialTreeGroupFlatCheckComponent_0_5 = (import8.isDevMode
        ? import17.debugInjectorWrap(import24.MaterialTreeGroupFlatCheckComponent, () {
            return import24.MaterialTreeGroupFlatCheckComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0, this.parentView.injectorGetOptional(import19.DropdownHandle, this.parentIndex));
          })
        : import24.MaterialTreeGroupFlatCheckComponent(this.parentView.injectorGet(import18.MaterialTreeRoot, this.parentIndex), this._compView_0, this.parentView.injectorGetOptional(import19.DropdownHandle, this.parentIndex)));
    this._compView_0.create(this._MaterialTreeGroupFlatCheckComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_group = import8.unsafeCast<import21.OptionGroup<T>>(this.locals['\$implicit']);
    changed = false;
    final currVal_0 = local_group;
    if (import8.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/src/material_tree/material_tree_impl.html')) {
      this._MaterialTreeGroupFlatCheckComponent_0_5.group = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import12.EmbeddedView<void> viewFactory_MaterialTreeComponent9<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeComponent9<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeComponentHost = const [];

class _ViewMaterialTreeComponentHost0<T> extends import25.HostView<import1.MaterialTreeComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import8.isDevMode
        ? import17.debugInjectorWrap(import1.MaterialTreeComponent, () {
            return import1.MaterialTreeComponent(this.injectorGetOptional(import18.MaterialTreeRoot, this.parentIndex), null);
          })
        : import1.MaterialTreeComponent(this.injectorGetOptional(import18.MaterialTreeRoot, this.parentIndex), null));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.MaterialTreeRoot) && (0 == nodeIndex))) {
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
}

import25.HostView<import1.MaterialTreeComponent<T>> viewFactory_MaterialTreeComponentHost0<T>() {
  return _ViewMaterialTreeComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeComponent, createMaterialTreeComponentFactory());
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
