// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_group.dart';
export 'material_tree_group.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref4;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref5;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_node.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_tree_group.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import '../../../button_decorator/button_decorator.template.dart' as import15;
import '../../../focus/keyboard_only_focus_indicator.dart' as import16;
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import '../../../button_decorator/button_decorator.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import '../../../utils/browser/dom_service/dom_service.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import '../../../material_checkbox/material_checkbox.template.dart' as import22;
import '../../../material_checkbox/material_checkbox.dart' as import23;
import '../../../interfaces/has_disabled.dart' as import24;
import '../../../material_icon/material_icon.template.dart' as import25;
import '../../../material_icon/material_icon.dart' as import26;
import '../../../dynamic_component/dynamic_component.template.dart' as import27;
import '../../../dynamic_component/dynamic_component.dart' as import28;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import29;
import 'package:angular/src/runtime/text_binding.dart' as import30;
import '../material_tree_root.dart' as import31;
import '../../../mixins/material_dropdown_base.dart' as import32;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import33;
import '../../../model/selection/selection_options.dart' as import34;
import 'package:angular/src/core/linker/views/host_view.dart' as import35;

final List<dynamic> styles$MaterialTreeGroupComponent = [import0.styles];

class ViewMaterialTreeGroupComponent0<T> extends import1.ComponentView<import2.MaterialTreeGroupComponent<T>> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  static import6.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('material-tree-group');
    import10.updateAttribute(this.rootElement, 'role', import2.MaterialTreeGroupComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group.dart' : null);
  }

  @override
  void build() {
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import9.document;
    final _el_0 = import10.appendElement(doc, parentRenderNode, 'ul');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent1<T>(parentView, parentIndex);
    });
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent9<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.visibleGroup;
    if (import11.checkBinding(this._expr_0, currVal_0, 'visibleGroup', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._NgIf_2_9.ngIf = _ctx.viewMoreLinkVisible;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
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
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$MaterialTreeGroupComponent, _debugComponentUrl));
      if (import11.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeGroupComponentNgFactory = ComponentFactory<import2.MaterialTreeGroupComponent>('material-tree-group', viewFactory_MaterialTreeGroupComponentHost0);
ComponentFactory<import2.MaterialTreeGroupComponent> get MaterialTreeGroupComponentNgFactory {
  return _MaterialTreeGroupComponentNgFactory;
}

ComponentFactory<import2.MaterialTreeGroupComponent<T>> createMaterialTreeGroupComponentFactory<T>() {
  return ComponentFactory('material-tree-group', viewFactory_MaterialTreeGroupComponentHost0);
}

class _ViewMaterialTreeGroupComponent1<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  import15.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_12;
  import4.NgFor _NgFor_12_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import9.Element _el_0;
  import9.DivElement _el_1;
  import9.DivElement _el_2;
  import9.DivElement _el_4;
  _ViewMaterialTreeGroupComponent1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    this._el_0 = doc.createElement('li');
    import10.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'material-tree-option');
    import10.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    this.addShimE(this._el_0);
    this._ButtonDirective_0_5 = import15.ButtonDirectiveNgCd(import18.ButtonDirective(this._el_0, null));
    this._KeyboardOnlyFocusIndicatorDirective_0_6 = (import11.isDevMode
        ? import19.debugInjectorWrap(import16.KeyboardOnlyFocusIndicatorDirective, () {
            return import16.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.injectorGet(import20.DomService, this.parentView.parentIndex));
          })
        : import16.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.injectorGet(import20.DomService, this.parentView.parentIndex)));
    this._el_1 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_1, 'material-tree-item');
    import10.setAttribute(this._el_1, 'role', 'treeitem');
    this.addShimC(this._el_1);
    this._el_2 = import10.appendDiv(doc, this._el_1);
    this.updateChildClass(this._el_2, 'material-tree-shift');
    this.addShimC(this._el_2);
    final _anchor_3 = import10.appendAnchor(this._el_2);
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this._el_4 = import10.appendDiv(doc, this._el_2);
    this.updateChildClass(this._el_4, 'material-tree-border');
    this.addShimC(this._el_4);
    final _text_5 = import10.appendText(this._el_2, ' ');
    final _anchor_6 = import10.appendAnchor(this._el_2);
    this._appEl_6 = ViewContainer(6, 2, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent5<T>(parentView, parentIndex);
    });
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import10.appendAnchor(this._el_2);
    this._appEl_7 = ViewContainer(7, 2, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent6<T>(parentView, parentIndex);
    });
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _text_8 = import10.appendText(this._el_2, ' ');
    final _text_9 = import10.appendText(this._el_2, ' ');
    final _anchor_10 = import10.appendAnchor(this._el_2);
    this._appEl_10 = ViewContainer(10, 2, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(this._appEl_10, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent7<T>(parentView, parentIndex);
    });
    this._NgIf_10_9 = NgIf(this._appEl_10, _TemplateRef_10_8);
    final _text_11 = import10.appendText(this._el_0, ' ');
    final _anchor_12 = import10.appendAnchor(this._el_0);
    this._appEl_12 = ViewContainer(12, 0, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(this._appEl_12, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent8<T>(parentView, parentIndex);
    });
    this._NgFor_12_9 = import4.NgFor(this._appEl_12, _TemplateRef_12_8);
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    this._el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_6.onFocus));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.ButtonDirective) && (nodeIndex <= 12))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final local_option = this.locals['\$implicit'];
    this._NgIf_3_9.ngIf = _ctx.showCheckbox(local_option);
    this._NgIf_6_9.ngIf = _ctx.useComponentRenderer;
    this._NgIf_7_9.ngIf = (!_ctx.useComponentRenderer);
    this._NgIf_10_9.ngIf = _ctx.hasChildren(local_option);
    final currVal_8 = _ctx.getChildGroups(local_option);
    if (import11.checkBinding(this._expr_8, currVal_8, 'getChildGroups(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._NgFor_12_9.ngForOf = currVal_8;
      this._expr_8 = currVal_8;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgFor_12_9.ngDoCheck();
    }
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_10.detectChangesInNestedViews();
    this._appEl_12.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import11.checkBinding(this._expr_0, currVal_0, 'isSelected(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_0, 'selected', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import11.checkBinding(this._expr_1, currVal_1, 'isSelectable(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_0, 'selectable', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
    final currVal_2 = _ctx.getIndent(local_option);
    if (import11.checkBinding(this._expr_2, currVal_2, 'getIndent(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._el_1.style.setProperty('padding-left', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSelected(local_option);
    if (import11.checkBinding(this._expr_3, currVal_3, '{{isSelected(option)}}', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.setAttribute(this._el_1, 'aria-selected', import21.interpolate0(currVal_3));
      this._expr_3 = currVal_3;
    }
    if (firstCheck) {
      if (!identical(_ctx.fixedPadding, null)) {
        this._el_2.style.setProperty('padding-left', _ctx.fixedPadding);
      }
    }
    final currVal_5 = _ctx.hasChildren(local_option);
    if (import11.checkBinding(this._expr_5, currVal_5, 'hasChildren(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_4, 'is-parent', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isExpanded(local_option);
    if (import11.checkBinding(this._expr_6, currVal_6, 'isExpanded(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_4, 'is-expanded', currVal_6);
      this._expr_6 = currVal_6;
    }
    final currVal_7 = (_ctx.level == 0);
    if (import11.checkBinding(this._expr_7, currVal_7, 'level==0', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_4, 'root-border', currVal_7);
      this._expr_7 = currVal_7;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_10.destroyNestedViews();
    this._appEl_12.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    this._ButtonDirective_0_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction();
  }

  void _handleEvent_1($event) {
    final local_option = this.locals['\$implicit'];
    final _ctx = this.ctx;
    _ctx.handleSelectionOrExpansion($event, local_option);
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent1<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent2<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeGroupComponent2(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'tree-selection-state');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent4<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView).locals['\$implicit'];
    this._NgIf_1_9.ngIf = _ctx.isMultiSelect;
    this._NgIf_2_9.ngIf = ((!_ctx.isMultiSelect) && _ctx.isSelected(local_option));
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent2<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent3<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  import22.ViewMaterialCheckboxComponent0 _compView_0;
  import23.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  var _expr_0;
  var _expr_2;
  _ViewMaterialTreeGroupComponent3(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import22.ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, import21.interpolateString2('', 'tree-selection-state', ' ', import23.MaterialCheckboxComponent.hostClass, ''));
    this.addShimC(_el_0);
    this._MaterialCheckboxComponent_0_5 = import23.MaterialCheckboxComponent(_el_0, this._compView_0, null, null, null);
    this._compView_0.createAndProject(this._MaterialCheckboxComponent_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.HasDisabled) && (0 == nodeIndex))) {
      return this._MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView.parentView).locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      this._MaterialCheckboxComponent_0_5.readOnly = true;
      changed = true;
    }
    final currVal_0 = (_ctx.isReadOnly || _ctx.showDisabledCheckbox(local_option));
    if (import11.checkBinding(this._expr_0, currVal_0, 'isReadOnly || showDisabledCheckbox(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialCheckboxComponent_0_5.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_2 = _ctx.isSelected(local_option);
    if (import11.checkBinding(this._expr_2, currVal_2, 'isSelected(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialCheckboxComponent_0_5.checked = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
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
    this._MaterialCheckboxComponent_0_5.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent3<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent4<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  import25.ViewMaterialIconComponent0 _compView_0;
  import26.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialTreeGroupComponent4(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import25.ViewMaterialIconComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'tree-selection-state');
    import10.setAttribute(_el_0, 'icon', 'check');
    this.addShimC(_el_0);
    this._MaterialIconComponent_0_5 = import26.MaterialIconComponent(_el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_0_5.icon = 'check';
      changed = true;
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

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent4<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent5<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  import27.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import28.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupComponent5(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import27.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'item component');
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import11.isDevMode
        ? import19.debugInjectorWrap(import28.DynamicComponent, () {
            return import28.DynamicComponent(this.parentView.parentView.parentView.injectorGet(import29.SlowComponentLoader, this.parentView.parentView.parentIndex), this._appEl_0);
          })
        : import28.DynamicComponent(this.parentView.parentView.parentView.injectorGet(import29.SlowComponentLoader, this.parentView.parentView.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView).locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import11.checkBinding(this._expr_0, currVal_0, 'getComponentType(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import11.checkBinding(this._expr_1, currVal_1, 'getComponentFactory(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (import11.checkBinding(this._expr_2, currVal_2, 'option', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
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

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent5<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent6<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  final import30.TextBinding _textBinding_1 = import30.TextBinding();
  var _expr_0;
  var _expr_1;
  import9.Element _el_0;
  _ViewMaterialTreeGroupComponent6(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'text');
    this.addShimE(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView).locals['\$implicit'];
    final bool currVal_0 = (!_ctx.showDisabledCheckbox(local_option));
    if (import11.checkBinding(this._expr_0, currVal_0, '!showDisabledCheckbox(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_0, 'item', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.showDisabledCheckbox(local_option);
    if (import11.checkBinding(this._expr_1, currVal_1, 'showDisabledCheckbox(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBinding(this._el_0, 'disabled-item', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._textBinding_1.updateText(import21.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent6<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent7<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  import25.ViewMaterialIconComponent0 _compView_0;
  import15.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import26.MaterialIconComponent _MaterialIconComponent_0_6;
  var _expr_0;
  var _expr_1;
  import9.Element _el_0;
  _ViewMaterialTreeGroupComponent7(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import25.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(this._el_0, 'tree-expansion-state');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import15.ButtonDirectiveNgCd(import18.ButtonDirective(this._el_0, null));
    this._MaterialIconComponent_0_6 = import26.MaterialIconComponent(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_6);
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.ButtonDirective) && (0 == nodeIndex))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView).locals['\$implicit'];
    changed = false;
    final currVal_1 = (_ctx.isExpanded(local_option) ? 'expand_less' : 'expand_more');
    if (import11.checkBinding(this._expr_1, currVal_1, 'isExpanded(option) ? \'expand_less\' : \'expand_more\'', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded(local_option);
    if (import11.checkBinding(this._expr_0, currVal_0, 'isExpanded(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'expanded', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._ButtonDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView).locals['\$implicit'];
    final _ctx = this.ctx;
    _ctx.handleExpansion($event, local_option);
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent7<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent7<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent8<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  ViewMaterialTreeGroupComponent0<T> _compView_0;
  import2.MaterialTreeGroupComponent<T> _MaterialTreeGroupComponent_0_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  _ViewMaterialTreeGroupComponent8(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = ViewMaterialTreeGroupComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'child-tree');
    this.addShimC(_el_0);
    this._MaterialTreeGroupComponent_0_5 = (import11.isDevMode
        ? import19.debugInjectorWrap(import2.MaterialTreeGroupComponent, () {
            return import2.MaterialTreeGroupComponent(this.parentView.parentView.parentView.injectorGet(import31.MaterialTreeRoot, this.parentView.parentView.parentIndex), this._compView_0, this.parentView.parentView.parentView.injectorGetOptional(import32.DropdownHandle, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGetOptional(const import33.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), this.parentView.parentView.parentIndex));
          })
        : import2.MaterialTreeGroupComponent(this.parentView.parentView.parentView.injectorGet(import31.MaterialTreeRoot, this.parentView.parentView.parentIndex), this._compView_0, this.parentView.parentView.parentView.injectorGetOptional(import32.DropdownHandle, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGetOptional(const import33.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), this.parentView.parentView.parentIndex)));
    this._compView_0.create(this._MaterialTreeGroupComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_subGroup = import11.unsafeCast<import34.OptionGroup<dynamic>>(this.locals['\$implicit']);
    final local_option = import11.unsafeCast<_ViewMaterialTreeGroupComponent1>(this.parentView).locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.expandAll;
    if (import11.checkBinding(this._expr_0, currVal_0, 'expandAll', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.expandAll = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_subGroup;
    if (import11.checkBinding(this._expr_1, currVal_1, 'subGroup', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.group = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.level + 1);
    if (import11.checkBinding(this._expr_2, currVal_2, 'level + 1', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.level = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.showCheckbox(local_option);
    if (import11.checkBinding(this._expr_3, currVal_3, 'showCheckbox(option)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.parentHasCheckbox = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.allowParentSingleSelection;
    if (import11.checkBinding(this._expr_4, currVal_4, 'allowParentSingleSelection', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.allowParentSingleSelection = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.allowParentMultiSelection;
    if (import11.checkBinding(this._expr_5, currVal_5, 'allowParentMultiSelection', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.allowParentMultiSelection = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.deselectOnTrigger;
    if (import11.checkBinding(this._expr_6, currVal_6, 'deselectOnTrigger', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.deselectOnTrigger = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.maxInitialOptionsShown;
    if (import11.checkBinding(this._expr_7, currVal_7, 'maxInitialOptionsShown', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._MaterialTreeGroupComponent_0_5.maxInitialOptionsShown = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
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
    this._MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent8<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent8<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent9<T> extends import14.EmbeddedView<import2.MaterialTreeGroupComponent<T>> {
  import15.ButtonDirectiveNgCd _ButtonDirective_3_5;
  var _expr_0;
  import9.DivElement _el_1;
  import9.DivElement _el_2;
  import9.AnchorElement _el_3;
  _ViewMaterialTreeGroupComponent9(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import9.document;
    final _el_0 = doc.createElement('li');
    this.addShimE(_el_0);
    this._el_1 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_1, 'view-more-link-item');
    this.addShimC(this._el_1);
    this._el_2 = import10.appendDiv(doc, this._el_1);
    this.updateChildClass(this._el_2, 'material-tree-shift');
    this.addShimC(this._el_2);
    this._el_3 = import10.appendElement(doc, this._el_2, 'a');
    import10.setAttribute(this._el_3, 'buttonDecorator', '');
    this.updateChildClass(this._el_3, 'view-more-link');
    import10.setAttribute(this._el_3, 'href', '#');
    this.addShimC(this._el_3);
    this._ButtonDirective_3_5 = import15.ButtonDirectiveNgCd(import18.ButtonDirective(this._el_3, null));
    final _text_4 = import10.appendText(this._el_3, import21.interpolateString0(import2.MaterialTreeGroupComponent.viewMoreMsg));
    this._el_3.addEventListener('click', this.eventHandler1(this._ButtonDirective_3_5.instance.handleClick));
    this._el_3.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_3_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_3_5.instance.trigger.listen(this.eventHandler1(_ctx.viewMoreOptions));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.ButtonDirective) && ((3 <= nodeIndex) && (nodeIndex <= 4)))) {
      return this._ButtonDirective_3_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
    if (import11.checkBinding(this._expr_0, currVal_0, 'getIndent(visibleGroup.last)', 'package:angular_components/src/material_tree/group/material_tree_group.html')) {
      this._el_1.style.setProperty('padding-left', currVal_0);
      this._expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.fixedPadding, null)) {
        this._el_2.style.setProperty('padding-left', _ctx.fixedPadding);
      }
    }
    this._ButtonDirective_3_5.detectHostChanges(this, this._el_3);
  }
}

import14.EmbeddedView<void> viewFactory_MaterialTreeGroupComponent9<T>(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent9<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupComponentHost = const [];

class _ViewMaterialTreeGroupComponentHost0<T> extends import35.HostView<import2.MaterialTreeGroupComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeGroupComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import11.isDevMode
        ? import19.debugInjectorWrap(import2.MaterialTreeGroupComponent, () {
            return import2.MaterialTreeGroupComponent(this.injectorGet(import31.MaterialTreeRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import32.DropdownHandle, this.parentIndex), this.injectorGetOptional(const import33.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), this.parentIndex));
          })
        : import2.MaterialTreeGroupComponent(this.injectorGet(import31.MaterialTreeRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import32.DropdownHandle, this.parentIndex), this.injectorGetOptional(const import33.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), this.parentIndex)));
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

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import35.HostView<import2.MaterialTreeGroupComponent<T>> viewFactory_MaterialTreeGroupComponentHost0<T>() {
  return _ViewMaterialTreeGroupComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeGroupComponent, createMaterialTreeGroupComponentFactory());
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
