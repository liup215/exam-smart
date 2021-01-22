// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select.dart';
export 'material_select.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_select_base.template.dart' as _ref0;
import 'material_select_item.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/focus/focus_item.template.dart' as _ref3;
import 'package:angular_components/focus/focus_list.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/material_list/material_list.template.dart' as _ref6;
import 'package:angular_components/model/selection/select.template.dart' as _ref7;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref8;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref10;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref11;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref12;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref13;
import 'package:angular_components/material_select/material_select.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_select.dart' as import2;
import '../material_list/material_list.template.dart' as import3;
import '../focus/focus_list.template.dart' as import4;
import '../material_list/material_list.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/src/di/errors.dart' as import14;
import '../focus/focus_list.dart' as import15;
import 'package:angular/src/core/zone/ng_zone.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import19;
import 'package:angular/src/common/directives/ng_for.dart' as import20;
import 'package:angular/src/core/linker/views/render_view.dart' as import21;
import '../model/selection/selection_options.dart' as import22;
import 'package:angular/src/runtime/text_binding.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;
import 'material_select_item.template.dart' as import25;
import '../focus/focus_item.template.dart' as import26;
import 'material_select_item.dart' as import27;
import '../focus/focus_item.dart' as import28;
import '../mixins/material_dropdown_base.dart' as import29;
import 'activation_handler.dart' as import30;
import '../focus/focus.dart' as import31;
import '../model/selection/selection_container.dart' as import32;
import '../interfaces/has_disabled.dart' as import33;
import '../model/ui/has_renderer.dart' as import34;
import 'package:angular/src/core/linker/views/host_view.dart' as import35;

final List<dynamic> styles$MaterialSelectComponent = [import0.styles];

class ViewMaterialSelectComponent0<T> extends import1.ComponentView<import2.MaterialSelectComponent<T>> {
  bool _query_FocusableItem_0_0_isDirty = true;
  import3.ViewMaterialListComponent0 _compView_0;
  import4.FocusListDirectiveNgCd _FocusListDirective_0_5;
  import5.MaterialListComponent _MaterialListComponent_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import8.Element _el_0;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialSelectComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-select');
    import12.updateAttribute(this.rootElement, 'role', import2.MaterialSelectComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:angular_components/lib/material_select/material_select.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewMaterialListComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    parentRenderNode.append(this._el_0);
    import12.setAttribute(this._el_0, 'focusList', '');
    import12.setAttribute(this._el_0, 'role', 'none');
    this.addShimC(this._el_0);
    this._FocusListDirective_0_5 = import4.FocusListDirectiveNgCd((import13.isDevMode
        ? import14.debugInjectorWrap(import15.FocusListDirective, () {
            return import15.FocusListDirective(this.parentView.injectorGet(import16.NgZone, this.parentIndex), 'none', null);
          })
        : import15.FocusListDirective(this.parentView.injectorGet(import16.NgZone, this.parentIndex), 'none', null)));
    this._MaterialListComponent_0_6 = import5.MaterialListComponent();
    final _anchor_1 = import12.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent1<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this._compView_0.createAndProject(this._MaterialListComponent_0_6, [
      <dynamic>[this.projectedNodes[0]]..addAll([this._appEl_1])
    ]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.autoFocusIndex;
    if (import13.checkBinding(this._expr_0, currVal_0, 'autoFocusIndex', 'package:angular_components/material_select/material_select.html')) {
      this._FocusListDirective_0_5.instance.autoFocusIndex = currVal_0;
      this._expr_0 = currVal_0;
    }
    changed = false;
    if (firstCheck) {
      this._MaterialListComponent_0_6.role = 'none';
      changed = true;
    }
    final currVal_2 = _ctx.width;
    if (import13.checkBinding(this._expr_2, currVal_2, 'width', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialListComponent_0_6.width = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._NgIf_1_9.ngIf = (_ctx.options != null);
    this._appEl_1.detectChangesInNestedViews();
    if ((!import13.debugThrowIfChanged)) {
      if (this._query_FocusableItem_0_0_isDirty) {
        this._FocusListDirective_0_5.instance.listItems = this._appEl_1.mapNestedViews((_ViewMaterialSelectComponent1 nestedView) {
          return nestedView._appEl_1.mapNestedViews((_ViewMaterialSelectComponent2 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMaterialSelectComponent3 nestedView) {
              return nestedView._appEl_1.mapNestedViewsWithSingleResult((_ViewMaterialSelectComponent5 nestedView) {
                return nestedView._FocusItemDirective_0_5.instance;
              });
            });
          });
        });
        this._query_FocusableItem_0_0_isDirty = false;
      }
    }
    this._FocusListDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._FocusListDirective_0_5.instance.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_3 = _ctx.isMultiSelect;
    if (import13.checkBinding(this._expr_3, currVal_3, null, null)) {
      import12.updateAttribute(this.rootElement, 'aria-multiselectable', currVal_3?.toString());
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.disabledStr;
    if (import13.checkBinding(this._expr_4, currVal_4, null, null)) {
      import12.updateAttribute(this.rootElement, 'aria-disabled', currVal_4);
      this._expr_4 = currVal_4;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$MaterialSelectComponent, _debugComponentUrl));
      if (import13.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialSelectComponentNgFactory = ComponentFactory<import2.MaterialSelectComponent>('material-select', viewFactory_MaterialSelectComponentHost0);
ComponentFactory<import2.MaterialSelectComponent> get MaterialSelectComponentNgFactory {
  return _MaterialSelectComponentNgFactory;
}

ComponentFactory<import2.MaterialSelectComponent<T>> createMaterialSelectComponentFactory<T>() {
  return ComponentFactory('material-select', viewFactory_MaterialSelectComponentHost0);
}

class _ViewMaterialSelectComponent1<T> extends import19.EmbeddedView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_1;
  import20.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import8.DivElement _el_0;
  _ViewMaterialSelectComponent1(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'options-wrapper');
    import12.setAttribute(this._el_0, 'role', 'group');
    this.addShimC(this._el_0);
    final _anchor_1 = import12.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent2<T>(parentView, parentIndex);
    });
    this._NgFor_1_9 = import20.NgFor(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (this._NgFor_1_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_2 = _ctx.options.optionGroups;
    if (import13.checkBinding(this._expr_2, currVal_2, 'options.optionGroups', 'package:angular_components/material_select/material_select.html')) {
      this._NgFor_1_9.ngForOf = currVal_2;
      this._expr_2 = currVal_2;
    }
    if ((!import13.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.ariaLabelledBy;
    if (import13.checkBinding(this._expr_0, currVal_0, 'ariaLabelledBy', 'package:angular_components/material_select/material_select.html')) {
      import12.updateAttribute(this._el_0, 'aria-labelledby', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaDescribedBy;
    if (import13.checkBinding(this._expr_1, currVal_1, 'ariaDescribedBy', 'package:angular_components/material_select/material_select.html')) {
      import12.updateAttribute(this._el_0, 'aria-describedby', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import19.EmbeddedView<void> viewFactory_MaterialSelectComponent1<T>(import21.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent2<T> extends import19.EmbeddedView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  import8.DivElement _el_0;
  _ViewMaterialSelectComponent2(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('div');
    import12.setAttribute(this._el_0, 'group', '');
    this.addShimC(this._el_0);
    final _anchor_1 = import12.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import13.unsafeCast<import22.OptionGroup<T>>(this.locals['\$implicit']);
    this._NgIf_1_9.ngIf = local_group.isNotEmpty;
    this._appEl_1.detectChangesInNestedViews();
    final currVal_0 = local_group.isEmpty;
    if (import13.checkBinding(this._expr_0, currVal_0, 'group.isEmpty', 'package:angular_components/material_select/material_select.html')) {
      import12.updateClassBinding(this._el_0, 'empty', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import19.EmbeddedView<void> viewFactory_MaterialSelectComponent2<T>(import21.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent3<T> extends import19.EmbeddedView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  import20.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialSelectComponent3(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import12.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent4<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import12.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent5<T>(parentView, parentIndex);
    });
    this._NgFor_1_9 = import20.NgFor(this._appEl_1, _TemplateRef_1_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, this._appEl_1], null);
  }

  @override
  void detectChangesInternal() {
    final local_group = import13.unsafeCast<import22.OptionGroup<T>>(import13.unsafeCast<_ViewMaterialSelectComponent2>(this.parentView).locals['\$implicit']);
    this._NgIf_0_9.ngIf = local_group.hasLabel;
    final currVal_0 = local_group;
    if (import13.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/material_select/material_select.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import13.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
  }
}

import19.EmbeddedView<void> viewFactory_MaterialSelectComponent3<T>(import21.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent4<T> extends import19.EmbeddedView<import2.MaterialSelectComponent<T>> {
  final import23.TextBinding _textBinding_1 = import23.TextBinding();
  _ViewMaterialSelectComponent4(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    import12.setAttribute(_el_0, 'label', '');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import13.unsafeCast<import22.OptionGroup<T>>(import13.unsafeCast<_ViewMaterialSelectComponent2>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import24.interpolateString0(local_group.uiDisplayName));
  }
}

import19.EmbeddedView<void> viewFactory_MaterialSelectComponent4<T>(import21.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent5<T> extends import19.EmbeddedView<import2.MaterialSelectComponent<T>> {
  import25.ViewMaterialSelectItemComponent0<T> _compView_0;
  import26.FocusItemDirectiveNgCd _FocusItemDirective_0_5;
  import27.MaterialSelectItemComponent<T> _MaterialSelectItemComponent_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  import8.Element _el_0;
  _ViewMaterialSelectComponent5(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import25.ViewMaterialSelectItemComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import12.setAttribute(this._el_0, 'focusItem', '');
    this.addShimC(this._el_0);
    this._FocusItemDirective_0_5 = import26.FocusItemDirectiveNgCd(import28.FocusItemDirective(this._el_0, this._compView_0, null));
    this._MaterialSelectItemComponent_0_6 = (import13.isDevMode
        ? import14.debugInjectorWrap(import27.MaterialSelectItemComponent, () {
            return import27.MaterialSelectItemComponent(this._el_0, this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import29.DropdownHandle, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import30.ActivationHandler, this.parentView.parentView.parentView.parentView.parentIndex), this._compView_0, null);
          })
        : import27.MaterialSelectItemComponent(this._el_0, this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import29.DropdownHandle, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import30.ActivationHandler, this.parentView.parentView.parentView.parentView.parentIndex), this._compView_0, null));
    this._compView_0.createAndProject(this._MaterialSelectItemComponent_0_6, [const []]);
    this._el_0.addEventListener('keydown', this.eventHandler1(this._FocusItemDirective_0_5.instance.keydown));
    this.initRootNode(this._el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import31.FocusableItem)) {
        return this._FocusItemDirective_0_5.instance;
      }
      if (((identical(token, import32.SelectionItem) || identical(token, import33.HasDisabled)) || identical(token, import34.HasRenderer))) {
        return this._MaterialSelectItemComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_item = import13.unsafeCast<T>(this.locals['\$implicit']);
    changed = false;
    final currVal_0 = (_ctx.disabled || _ctx.isOptionDisabled(local_item));
    if (import13.checkBinding(this._expr_0, currVal_0, 'disabled || isOptionDisabled(item)', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialSelectItemComponent_0_6.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_item;
    if (import13.checkBinding(this._expr_1, currVal_1, 'item', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialSelectItemComponent_0_6.value = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.itemRenderer;
    if (import13.checkBinding(this._expr_2, currVal_2, 'itemRenderer', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialSelectItemComponent_0_6.itemRenderer = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.componentRenderer;
    if (import13.checkBinding(this._expr_3, currVal_3, 'componentRenderer', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialSelectItemComponent_0_6.componentRenderer = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.factoryRenderer;
    if (import13.checkBinding(this._expr_4, currVal_4, 'factoryRenderer', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialSelectItemComponent_0_6.factoryRenderer = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.selection;
    if (import13.checkBinding(this._expr_5, currVal_5, 'selection', 'package:angular_components/material_select/material_select.html')) {
      this._MaterialSelectItemComponent_0_6.selection = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._FocusItemDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import13.unsafeCast<ViewMaterialSelectComponent0>(this.parentView.parentView.parentView.parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialSelectItemComponent_0_6.ngOnDestroy();
  }
}

import19.EmbeddedView<void> viewFactory_MaterialSelectComponent5<T>(import21.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectComponent5<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSelectComponentHost = const [];

class _ViewMaterialSelectComponentHost0<T> extends import35.HostView<import2.MaterialSelectComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialSelectComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialSelectComponent();
    this.component.selectItems = [];
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import33.HasDisabled) || identical(token, import34.HasRenderer)) || identical(token, import32.SelectionContainer)) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import13.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }
}

import35.HostView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponentHost0<T>() {
  return _ViewMaterialSelectComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectComponent, createMaterialSelectComponentFactory());
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
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
}
