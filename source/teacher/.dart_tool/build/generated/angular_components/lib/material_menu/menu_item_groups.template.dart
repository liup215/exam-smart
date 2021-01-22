// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'menu_item_groups.dart';
export 'menu_item_groups.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/focus/focus_activable_item.template.dart' as _ref5;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref6;
import 'package:angular_components/highlighted_text/highlighted_text.template.dart' as _ref7;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref8;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref9;
import 'package:angular_components/material_list/material_list.template.dart' as _ref10;
import 'package:angular_components/material_menu/material_menu.template.dart' as _ref11;
import 'package:angular_components/material_menu/menu_item_affix_list.template.dart' as _ref12;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref13;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref14;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref15;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref16;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref17;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref18;
import 'package:angular_components/model/a11y/active_item_directive.template.dart' as _ref19;
import 'package:angular_components/model/action/delayed_action.template.dart' as _ref20;
import 'package:angular_components/model/menu/menu.template.dart' as _ref21;
import 'package:angular_components/model/menu/selectable_menu.template.dart' as _ref22;
import 'package:angular_components/model/selection/select.template.dart' as _ref23;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref24;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref25;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref26;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref27;
import 'package:angular_components/material_menu/menu_item_groups.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'menu_item_groups.dart' as import2;
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
import '../model/menu/menu.dart' as import16;
import 'package:angular/src/runtime/text_binding.dart' as import17;
import '../button_decorator/button_decorator.template.dart' as import18;
import '../button_decorator/button_decorator.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import '../material_icon/material_icon.template.dart' as import21;
import '../material_icon/material_icon.dart' as import22;
import '../material_select/material_select_item.template.dart' as import23;
import '../model/a11y/active_item_directive.template.dart' as import24;
import '../focus/focus.dart' as import25;
import '../focus/focus_activable_item.dart' as import26;
import '../src/material_tooltip/tooltip.dart' as import27;
import '../material_select/material_select_item.dart' as import28;
import 'package:angular/src/common/directives/ng_class.dart' as import29;
import '../src/laminate/popup/popup_source_directive.dart' as import30;
import 'package:angular/src/di/errors.dart' as import31;
import '../src/material_tooltip/tooltip_controller.dart' as import32;
import '../material_tooltip/module.dart' as import33;
import '../utils/disposer/disposer.dart' as import34;
import '../model/a11y/active_item_directive.dart' as import35;
import '../utils/browser/dom_service/dom_service.dart' as import36;
import '../laminate/components/modal/modal.dart' as import37;
import '../src/laminate/popup/popup_ref.dart' as import38;
import '../src/laminate/popup/dom_popup_source.dart' as import39;
import '../mixins/material_dropdown_base.dart' as import40;
import '../material_select/activation_handler.dart' as import41;
import '../utils/angular/reference/reference.dart' as import42;
import '../focus/focus_interface.dart' as import43;
import '../model/selection/selection_container.dart' as import44;
import '../interfaces/has_disabled.dart' as import45;
import '../model/ui/has_renderer.dart' as import46;
import 'dart:core';
import '../highlighted_text/highlighted_text.template.dart' as import48;
import '../highlighted_text/highlighted_text.dart' as import49;
import 'menu_item_affix_list.template.dart' as import50;
import 'menu_item_affix_list.dart' as import51;
import '../material_popup/material_popup.template.dart' as import52;
import '../material_popup/material_popup.dart' as import53;
import '../focus/focus_trap.template.dart' as import54;
import '../focus/focus_trap.dart' as import55;
import '../content/deferred_content.dart' as import56;
import '../src/laminate/popup/popup_hierarchy.dart' as import57;
import 'package:angular/src/core/zone/ng_zone.dart' as import58;
import '../src/laminate/overlay/overlay_service.dart' as import59;
import '../laminate/overlay/zindexer.dart' as import60;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import61;
import 'package:angular_components/laminate/enums/alignment.dart' as import62;
import '../src/laminate/popup/popup_size_provider.dart' as import63;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import65;
import 'package:angular/src/runtime/queries.dart' as import66;
import '../material_list/material_list.template.dart' as import67;
import '../material_list/material_list.dart' as import68;
import 'common/menu_root.dart' as import69;
import '../utils/id_generator/id_generator.dart' as import70;
import 'package:angular/src/core/linker/views/host_view.dart' as import71;

final List<dynamic> styles$MenuItemGroupsComponent = [import0.styles];

class ViewMenuItemGroupsComponent0 extends import1.ComponentView<import2.MenuItemGroupsComponent> {
  bool _viewQuery_FocusableActivateItem_0_isDirty = true;
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static import5.ComponentStyles _componentStyles;
  ViewMenuItemGroupsComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('menu-item-groups');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_menu/menu_item_groups.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import10.appendText(parentRenderNode, '\n');
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MenuItemGroupsComponent1);
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import10.appendText(parentRenderNode, '\n');
    parentRenderNode.addEventListener('mouseover', this.eventHandler1(_ctx.onMouseOver));
    parentRenderNode.addEventListener('mouseout', this.eventHandler1(_ctx.onMouseOut));
    parentRenderNode.addEventListener('mousemove', this.eventHandler1(_ctx.onMouseMove));
    parentRenderNode.addEventListener('keydown', this.eventHandler1(_ctx.handleKeydown));
    parentRenderNode.addEventListener('focus', this.eventHandler1(_ctx.onFocus));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.menu.itemGroups;
    if (import9.checkBinding(this._expr_0, currVal_0, 'menu.itemGroups', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._viewQuery_FocusableActivateItem_0_isDirty) {
        _ctx.focusableItems = this._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent1 nestedView) {
          return nestedView._appEl_4.mapNestedViews((_ViewMenuItemGroupsComponent4 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent5 nestedView) {
              return nestedView._appEl_1.mapNestedViewsWithSingleResult((_ViewMenuItemGroupsComponent6 nestedView) {
                return nestedView._FocusActivableItemDirective_1_10;
              });
            });
          });
        });
        this._viewQuery_FocusableActivateItem_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_1 = _ctx.isMouseDriven;
    if (import9.checkBinding(this._expr_1, currVal_1, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'mouse-driven', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isKeyboardDriven;
    if (import9.checkBinding(this._expr_2, currVal_2, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'keyboard-driven', currVal_2);
      this._expr_2 = currVal_2;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MenuItemGroupsComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MenuItemGroupsComponentNgFactory = ComponentFactory<import2.MenuItemGroupsComponent>('menu-item-groups', viewFactory_MenuItemGroupsComponentHost0);
ComponentFactory<import2.MenuItemGroupsComponent> get MenuItemGroupsComponentNgFactory {
  return _MenuItemGroupsComponentNgFactory;
}

ComponentFactory<import2.MenuItemGroupsComponent> createMenuItemGroupsComponentFactory() {
  return ComponentFactory('menu-item-groups', viewFactory_MenuItemGroupsComponentHost0);
}

class _ViewMenuItemGroupsComponent1 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  import8.DivElement _el_0;
  _ViewMenuItemGroupsComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'group');
    import10.setAttribute(this._el_0, 'group', '');
    import10.setAttribute(this._el_0, 'role', 'menu');
    this.addShimC(this._el_0);
    final _text_1 = import10.appendText(this._el_0, '\n  ');
    final _anchor_2 = import10.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MenuItemGroupsComponent2);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import10.appendText(this._el_0, '\n  ');
    final _anchor_4 = import10.appendAnchor(this._el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MenuItemGroupsComponent4);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import10.appendText(this._el_0, '\n');
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(this.locals['\$implicit']);
    this._NgIf_2_9.ngIf = local_group.hasLabel;
    this._NgIf_4_9.ngIf = ((!local_group.isCollapsible) || local_group.isExpanded);
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    final currVal_0 = local_group.hasSeparator;
    if (import9.checkBinding(this._expr_0, currVal_0, 'group.hasSeparator', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateClassBinding(this._el_0, 'has-separator', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_group.hasLabel;
    if (import9.checkBinding(this._expr_1, currVal_1, 'group.hasLabel', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateClassBinding(this._el_0, 'has-label', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent1(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent1(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent2 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  final import17.TextBinding _textBinding_4 = import17.TextBinding();
  import18.ButtonDirectiveNgCd _ButtonDirective_0_5;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import8.DivElement _el_0;
  _ViewMenuItemGroupsComponent2(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('div');
    import10.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'group-header');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import18.ButtonDirectiveNgCd(import19.ButtonDirective(this._el_0, null));
    final _text_1 = import10.appendText(this._el_0, '\n    ');
    final _el_2 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_2, 'group-label');
    this.addShimC(_el_2);
    final _text_3 = import10.appendText(_el_2, '\n      ');
    _el_2.append(this._textBinding_4.element);
    final _text_5 = import10.appendText(_el_2, '\n    ');
    final _text_6 = import10.appendText(this._el_0, '\n    ');
    final _anchor_7 = import10.appendAnchor(this._el_0);
    this._appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_MenuItemGroupsComponent3);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _text_8 = import10.appendText(this._el_0, '\n  ');
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.ButtonDirective) && (nodeIndex <= 8))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView).locals['\$implicit']);
    final currVal_2 = (local_group.isCollapsible ? 'button' : 'none');
    if (import9.checkBinding(this._expr_2, currVal_2, 'group.isCollapsible ? \'button\' : \'none\'', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._ButtonDirective_0_5.instance.role = currVal_2;
      this._expr_2 = currVal_2;
    }
    this._NgIf_7_9.ngIf = local_group.isCollapsible;
    this._appEl_7.detectChangesInNestedViews();
    final currVal_0 = (local_group.isCollapsible ? local_group.isExpanded.toString() : null);
    if (import9.checkBinding(this._expr_0, currVal_0, 'group.isCollapsible ? group.isExpanded.toString() : null', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_0, 'aria-expanded', currVal_0?.toString());
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_group.isCollapsible;
    if (import9.checkBinding(this._expr_1, currVal_1, 'group.isCollapsible', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateClassBinding(this._el_0, 'is-collapsible', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
    this._textBinding_4.updateText(import20.interpolateString0(local_group.uiDisplayName));
  }

  @override
  void destroyInternal() {
    this._appEl_7.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView).locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.toggleExpansionIfCollapsible(local_group);
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent2(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent2(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent3 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import21.ViewMaterialIconComponent0 _compView_0;
  import22.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  var _expr_1;
  import8.Element _el_0;
  _ViewMenuItemGroupsComponent3(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import21.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'expansion-icon');
    this.addShimC(this._el_0);
    this._MaterialIconComponent_0_5 = import22.MaterialIconComponent(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView.parentView).locals['\$implicit']);
    changed = false;
    final currVal_1 = (local_group.isExpanded ? 'expand_less' : 'expand_more');
    if (import9.checkBinding(this._expr_1, currVal_1, 'group.isExpanded ? \'expand_less\' : \'expand_more\'', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = local_group.isExpanded;
    if (import9.checkBinding(this._expr_0, currVal_0, 'group.isExpanded', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'expanded', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent3(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent3(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent4 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMenuItemGroupsComponent4(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _text_0 = import10.createText('\n    ');
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MenuItemGroupsComponent5);
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import10.createText('\n  ');
    this.initRootNodesAndSubscriptions([_text_0, this._appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView).locals['\$implicit']);
    final currVal_0 = local_group;
    if (import9.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent4(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent4(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent5 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMenuItemGroupsComponent5(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _text_0 = import10.createText('\n      ');
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MenuItemGroupsComponent6);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import10.createText('\n    ');
    this.initRootNodesAndSubscriptions([_text_0, this._appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_item = this.locals['\$implicit'];
    this._NgIf_1_9.ngIf = _ctx.isItemVisible(local_item);
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent5(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent5(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent6 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import23.ViewMaterialSelectItemComponent0 _compView_1;
  ViewContainer _appEl_1;
  import24.ActiveItemDirectiveNgCd _ActiveItemDirective_1_8;
  import25.AutoFocusDirective _AutoFocusDirective_1_9;
  import26.FocusActivableItemDirective _FocusActivableItemDirective_1_10;
  import27.MaterialTooltipDirective _MaterialTooltipDirective_1_11;
  import28.MaterialSelectItemComponent _MaterialSelectItemComponent_1_12;
  import29.NgClass _NgClass_1_13;
  import30.PopupSourceDirective _PopupSourceDirective_1_14;
  dynamic __TooltipController_1_19;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  ViewContainer _appEl_19;
  NgIf _NgIf_19_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_20;
  var _expr_21;
  var _expr_23;
  import8.Element _el_1;
  _ViewMenuItemGroupsComponent6(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _TooltipController_1_19 {
    if ((this.__TooltipController_1_19 == null)) {
      (this.__TooltipController_1_19 = (import9.isDevMode
          ? import31.debugInjectorWrap(import32.TooltipController, () {
              return import33.createTooltipController(this.parentView.parentView.parentView.parentView.injectorGetOptional(import32.TooltipController, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import34.Disposer, this.parentView.parentView.parentView.parentIndex));
            })
          : import33.createTooltipController(this.parentView.parentView.parentView.parentView.injectorGetOptional(import32.TooltipController, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import34.Disposer, this.parentView.parentView.parentView.parentIndex))));
    }
    return this.__TooltipController_1_19;
  }

  @override
  void build() {
    final _text_0 = import10.createText('\n        ');
    this._compView_1 = import23.ViewMaterialSelectItemComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this.updateChildClassNonHtml(this._el_1, import20.interpolateString2('', 'menu-item', ' ', import28.MaterialSelectItemComponent.hostClass, ''));
    import10.setAttribute(this._el_1, 'popupSource', '');
    this.addShimC(this._el_1);
    this._appEl_1 = ViewContainer(1, null, this, this._el_1);
    this._ActiveItemDirective_1_8 = import24.ActiveItemDirectiveNgCd((import9.isDevMode
        ? import31.debugInjectorWrap(import35.ActiveItemDirective, () {
            return import35.ActiveItemDirective(this._el_1, this.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import37.Modal, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import38.PopupRef, this.parentView.parentView.parentView.parentIndex));
          })
        : import35.ActiveItemDirective(this._el_1, this.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import37.Modal, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import38.PopupRef, this.parentView.parentView.parentView.parentIndex))));
    this._AutoFocusDirective_1_9 = (import9.isDevMode
        ? import31.debugInjectorWrap(import25.AutoFocusDirective, () {
            return import25.AutoFocusDirective(this._el_1, this.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.injectorGetOptional(import37.ModalComponent, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import38.PopupRef, this.parentView.parentView.parentView.parentIndex));
          })
        : import25.AutoFocusDirective(this._el_1, this.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.injectorGetOptional(import37.ModalComponent, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import38.PopupRef, this.parentView.parentView.parentView.parentIndex)));
    this._FocusActivableItemDirective_1_10 = import26.FocusActivableItemDirective(this._el_1);
    this._MaterialTooltipDirective_1_11 = (import9.isDevMode
        ? import31.debugInjectorWrap(import27.MaterialTooltipDirective, () {
            return import27.MaterialTooltipDirective(this.parentView.parentView.parentView.parentView.injectorGet(import39.DomPopupSourceFactory, this.parentView.parentView.parentView.parentIndex), this._appEl_1, this._el_1, this._appEl_1, this._compView_1, this.parentView.parentView.parentView.parentView.injectorGet(import8.Window, this.parentView.parentView.parentView.parentIndex), null, null);
          })
        : import27.MaterialTooltipDirective(this.parentView.parentView.parentView.parentView.injectorGet(import39.DomPopupSourceFactory, this.parentView.parentView.parentView.parentIndex), this._appEl_1, this._el_1, this._appEl_1, this._compView_1, this.parentView.parentView.parentView.parentView.injectorGet(import8.Window, this.parentView.parentView.parentView.parentIndex), null, null));
    this._MaterialSelectItemComponent_1_12 = (import9.isDevMode
        ? import31.debugInjectorWrap(import28.MaterialSelectItemComponent, () {
            return import28.MaterialSelectItemComponent(this._el_1, this.parentView.parentView.parentView.parentView.injectorGetOptional(import40.DropdownHandle, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import41.ActivationHandler, this.parentView.parentView.parentView.parentIndex), this._compView_1, null);
          })
        : import28.MaterialSelectItemComponent(this._el_1, this.parentView.parentView.parentView.parentView.injectorGetOptional(import40.DropdownHandle, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import41.ActivationHandler, this.parentView.parentView.parentView.parentIndex), this._compView_1, null));
    this._NgClass_1_13 = import29.NgClass(this._el_1);
    this._PopupSourceDirective_1_14 = (import9.isDevMode
        ? import31.debugInjectorWrap(import30.PopupSourceDirective, () {
            return import30.PopupSourceDirective(this.parentView.parentView.parentView.parentView.injectorGet(import39.DomPopupSourceFactory, this.parentView.parentView.parentView.parentIndex), this._el_1, this.parentView.parentView.parentView.parentView.injectorGetOptional(import42.ReferenceDirective, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import43.Focusable, this.parentView.parentView.parentView.parentIndex), null);
          })
        : import30.PopupSourceDirective(this.parentView.parentView.parentView.parentView.injectorGet(import39.DomPopupSourceFactory, this.parentView.parentView.parentView.parentIndex), this._el_1, this.parentView.parentView.parentView.parentView.injectorGetOptional(import42.ReferenceDirective, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import43.Focusable, this.parentView.parentView.parentView.parentIndex), null));
    final _text_2 = import10.createText('\n          ');
    final _anchor_3 = import10.createAnchor();
    this._appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_MenuItemGroupsComponent7);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _text_4 = import10.createText('\n          ');
    final doc = import8.document;
    final _el_5 = doc.createElement('span');
    this.updateChildClass(_el_5, 'menu-item-label-section');
    this.addShimE(_el_5);
    final _text_6 = import10.appendText(_el_5, '\n            ');
    final _anchor_7 = import10.appendAnchor(_el_5);
    this._appEl_7 = ViewContainer(7, 5, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_MenuItemGroupsComponent8);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _text_8 = import10.appendText(_el_5, '\n            ');
    final _anchor_9 = import10.appendAnchor(_el_5);
    this._appEl_9 = ViewContainer(9, 5, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(this._appEl_9, viewFactory_MenuItemGroupsComponent10);
    this._NgIf_9_9 = NgIf(this._appEl_9, _TemplateRef_9_8);
    final _text_10 = import10.appendText(_el_5, '\n            ');
    final _anchor_11 = import10.appendAnchor(_el_5);
    this._appEl_11 = ViewContainer(11, 5, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(this._appEl_11, viewFactory_MenuItemGroupsComponent12);
    this._NgIf_11_9 = NgIf(this._appEl_11, _TemplateRef_11_8);
    final _text_12 = import10.appendText(_el_5, '\n          ');
    final _text_13 = import10.createText('\n          ');
    final _anchor_14 = import10.createAnchor();
    this._appEl_14 = ViewContainer(14, 1, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(this._appEl_14, viewFactory_MenuItemGroupsComponent13);
    this._NgIf_14_9 = NgIf(this._appEl_14, _TemplateRef_14_8);
    final _text_15 = import10.createText('\n          ');
    final _anchor_16 = import10.createAnchor();
    this._appEl_16 = ViewContainer(16, 1, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(this._appEl_16, viewFactory_MenuItemGroupsComponent14);
    this._NgIf_16_9 = NgIf(this._appEl_16, _TemplateRef_16_8);
    final _text_17 = import10.createText('\n        ');
    this._compView_1.createAndProject(this._MaterialSelectItemComponent_1_12, [
      [_text_2, this._appEl_3, _text_4, _el_5, _text_13, this._appEl_14, _text_15, this._appEl_16, _text_17]
    ]);
    final _text_18 = import10.createText('\n        ');
    final _anchor_19 = import10.createAnchor();
    this._appEl_19 = ViewContainer(19, null, this, _anchor_19);
    TemplateRef _TemplateRef_19_8 = TemplateRef(this._appEl_19, viewFactory_MenuItemGroupsComponent15);
    this._NgIf_19_9 = NgIf(this._appEl_19, _TemplateRef_19_8);
    final _text_20 = import10.createText('\n      ');
    this._el_1.addEventListener('mouseenter', this.eventHandler0(this._ActiveItemDirective_1_8.instance.onMouseEnter));
    this._el_1.addEventListener('mouseleave', this.eventHandler0(this._ActiveItemDirective_1_8.instance.onMouseLeave));
    final subscription_0 = this._MaterialSelectItemComponent_1_12.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_text_0, this._appEl_1, _text_18, this._appEl_19, _text_20], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 17))) {
      if (identical(token, import26.FocusableActivateItem)) {
        return this._FocusActivableItemDirective_1_10;
      }
      if (((identical(token, import44.SelectionItem) || identical(token, import45.HasDisabled)) || identical(token, import46.HasRenderer))) {
        return this._MaterialSelectItemComponent_1_12;
      }
      if (identical(token, import32.TooltipController)) {
        return this._TooltipController_1_19;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_i = import9.unsafeCast<int>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView.parentView.parentView).locals['index']);
    final local_j = import9.unsafeCast<int>(import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView).locals['index']);
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView).locals['\$implicit'];
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView.parentView.parentView).locals['\$implicit']);
    final currVal_9 = _ctx.isItemActive(local_item);
    if (import9.checkBinding(this._expr_9, currVal_9, 'isItemActive(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._ActiveItemDirective_1_8.instance.itemActive = currVal_9;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.hasAutoFocus(((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item)));
    if (import9.checkBinding(this._expr_10, currVal_10, 'hasAutoFocus(activeModel?.id(item))', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._AutoFocusDirective_1_9.autoFocus = currVal_10;
      this._expr_10 = currVal_10;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_1_9.ngOnInit();
    }
    final currVal_11 = ((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item));
    if (import9.checkBinding(this._expr_11, currVal_11, 'activeModel?.id(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._FocusActivableItemDirective_1_10.key = currVal_11;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.tooltipPositions;
    if (import9.checkBinding(this._expr_12, currVal_12, 'tooltipPositions', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialTooltipDirective_1_11.positions = currVal_12;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = local_item.tooltip;
    if (import9.checkBinding(this._expr_13, currVal_13, 'item.tooltip', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialTooltipDirective_1_11.text = currVal_13;
      this._expr_13 = currVal_13;
    }
    final currVal_14 = local_item.showTooltip;
    if (import9.checkBinding(this._expr_14, currVal_14, 'item.showTooltip', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialTooltipDirective_1_11.canShow = currVal_14;
      this._expr_14 = currVal_14;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MaterialTooltipDirective_1_11.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialSelectItemComponent_1_12.useCheckMarks = true;
      changed = true;
      this._MaterialSelectItemComponent_1_12.closeOnActivate = false;
      changed = true;
    }
    final currVal_15 = import20.interpolateString0(local_group.itemsRole);
    if (import9.checkBinding(this._expr_15, currVal_15, '{{group.itemsRole}}', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialSelectItemComponent_1_12.role = currVal_15;
      changed = true;
      this._expr_15 = currVal_15;
    }
    final bool currVal_16 = (!local_item.enabled);
    if (import9.checkBinding(this._expr_16, currVal_16, '!item.enabled', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialSelectItemComponent_1_12.disabled = currVal_16;
      changed = true;
      this._expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.getItemValue(local_item);
    if (import9.checkBinding(this._expr_17, currVal_17, 'getItemValue(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialSelectItemComponent_1_12.value = currVal_17;
      changed = true;
      this._expr_17 = currVal_17;
    }
    final currVal_20 = _ctx.shouldSelectItemOnClick(local_item);
    if (import9.checkBinding(this._expr_20, currVal_20, 'shouldSelectItemOnClick(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialSelectItemComponent_1_12.selectOnActivate = currVal_20;
      changed = true;
      this._expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.getSelectionModel(local_group);
    if (import9.checkBinding(this._expr_21, currVal_21, 'getSelectionModel(group)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialSelectItemComponent_1_12.selection = currVal_21;
      changed = true;
      this._expr_21 = currVal_21;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._NgClass_1_13.initialClasses = 'menu-item');
    }
    final currVal_23 = local_item.cssClasses;
    if (import9.checkBinding(this._expr_23, currVal_23, 'item.cssClasses', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._NgClass_1_13.rawClass = currVal_23;
      this._expr_23 = currVal_23;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgClass_1_13.ngDoCheck();
    }
    this._NgIf_3_9.ngIf = local_item.hasIcon;
    this._NgIf_7_9.ngIf = _ctx.hasHighlight;
    this._NgIf_9_9.ngIf = (!_ctx.hasHighlight);
    this._NgIf_11_9.ngIf = local_item.hasSecondaryLabel;
    this._NgIf_14_9.ngIf = local_item.itemSuffixes.isNotEmpty;
    this._NgIf_16_9.ngIf = local_item.hasSubMenu;
    this._NgIf_19_9.ngIf = local_item.hasSubMenu;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_9.detectChangesInNestedViews();
    this._appEl_11.detectChangesInNestedViews();
    this._appEl_14.detectChangesInNestedViews();
    this._appEl_16.detectChangesInNestedViews();
    this._appEl_19.detectChangesInNestedViews();
    final currVal_0 = local_i;
    if (import9.checkBinding(this._expr_0, currVal_0, 'i', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'data-group-index', currVal_0?.toString());
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_j;
    if (import9.checkBinding(this._expr_1, currVal_1, 'j', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'data-item-index', currVal_1?.toString());
      this._expr_1 = currVal_1;
    }
    final currVal_2 = ((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item));
    if (import9.checkBinding(this._expr_2, currVal_2, 'activeModel?.id(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'id', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSubMenuVisible(local_item);
    if (import9.checkBinding(this._expr_3, currVal_3, 'isSubMenuVisible(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateClassBindingNonHtml(this._el_1, 'is-menu-parent', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = local_item.ariaLabel;
    if (import9.checkBinding(this._expr_4, currVal_4, 'item.ariaLabel', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'aria-label', currVal_4?.toString());
      this._expr_4 = currVal_4;
    }
    final bool currVal_5 = (!local_item.enabled);
    if (import9.checkBinding(this._expr_5, currVal_5, '!item.enabled', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'aria-disabled', currVal_5?.toString());
      this._expr_5 = currVal_5;
    }
    final currVal_6 = local_item.hasSubMenu;
    if (import9.checkBinding(this._expr_6, currVal_6, 'item.hasSubMenu', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'aria-haspopup', currVal_6?.toString());
      this._expr_6 = currVal_6;
    }
    final currVal_7 = (local_item.hasSubMenu ? _ctx.isSubMenuVisible(local_item) : null);
    if (import9.checkBinding(this._expr_7, currVal_7, 'item.hasSubMenu ? isSubMenuVisible(item) : null', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'aria-expanded', currVal_7?.toString());
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.itemAriaChecked(local_item);
    if (import9.checkBinding(this._expr_8, currVal_8, 'itemAriaChecked(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      import10.updateAttribute(this._el_1, 'aria-checked', currVal_8);
      this._expr_8 = currVal_8;
    }
    this._ActiveItemDirective_1_8.detectHostChanges(this._compView_1, this._el_1);
    this._compView_1.detectHostChanges(firstCheck);
    this._compView_1.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._ActiveItemDirective_1_8.instance.ngAfterViewInit();
        this._MaterialTooltipDirective_1_11.ngAfterViewInit();
        this._PopupSourceDirective_1_14.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMenuItemGroupsComponent0>(this.parentView.parentView.parentView.parentView)._viewQuery_FocusableActivateItem_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_9.destroyNestedViews();
    this._appEl_11.destroyNestedViews();
    this._appEl_14.destroyNestedViews();
    this._appEl_16.destroyNestedViews();
    this._appEl_19.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._ActiveItemDirective_1_8.instance.ngOnDestroy();
    this._AutoFocusDirective_1_9.ngOnDestroy();
    this._MaterialTooltipDirective_1_11.ngOnDestroy();
    this._MaterialSelectItemComponent_1_12.ngOnDestroy();
    this._NgClass_1_13.ngOnDestroy();
    this._PopupSourceDirective_1_14.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView).locals['\$implicit'];
    final local_group = import9.unsafeCast<import16.MenuItemGroup<dynamic>>(import9.unsafeCast<_ViewMenuItemGroupsComponent1>(this.parentView.parentView.parentView).locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.handleSelectItemTrigger(local_item, local_group, $event);
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent6(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent6(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent7 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import21.ViewMaterialIconComponent0 _compView_0;
  import22.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewMenuItemGroupsComponent7(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import21.ViewMaterialIconComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'material-list-item-primary');
    this.addShimC(_el_0);
    this._MaterialIconComponent_0_5 = import22.MaterialIconComponent(_el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    changed = false;
    final currVal_0 = local_item.icon;
    if (import9.checkBinding(this._expr_0, currVal_0, 'item.icon', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialIconComponent_0_5.icon = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
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

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent7(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent7(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent8 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import48.ViewHighlightedTextComponent0 _compView_2;
  import49.HighlightedTextComponent _HighlightedTextComponent_2_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  _ViewMenuItemGroupsComponent8(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'menu-item-label');
    this.addShimE(_el_0);
    final _text_1 = import10.appendText(_el_0, '\n              ');
    this._compView_2 = import48.ViewHighlightedTextComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    this.addShimC(_el_2);
    this._HighlightedTextComponent_2_5 = import49.HighlightedTextComponent();
    this._compView_2.create(this._HighlightedTextComponent_2_5);
    final _text_4 = import10.appendText(_el_0, '\n              ');
    final _anchor_5 = import10.appendAnchor(_el_0);
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_MenuItemGroupsComponent9);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _text_6 = import10.appendText(_el_0, '\n            ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.highlighted(local_item.uiDisplayName);
    if (import9.checkBinding(this._expr_0, currVal_0, 'highlighted(item.uiDisplayName)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._HighlightedTextComponent_2_5.segments = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    this._NgIf_5_9.ngIf = ((local_item.labelAnnotation != null) && local_item.labelAnnotation.isNotEmpty);
    this._appEl_5.detectChangesInNestedViews();
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_5.destroyNestedViews();
    this._compView_2.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent8(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent8(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent9 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  final import17.TextBinding _textBinding_2 = import17.TextBinding();
  _ViewMenuItemGroupsComponent9(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('sup');
    this.updateChildClass(_el_0, 'label-annotation');
    this.addShimE(_el_0);
    final _text_1 = import10.appendText(_el_0, '\n              ');
    _el_0.append(this._textBinding_2.element);
    final _text_3 = import10.appendText(_el_0, '\n            ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView.parentView).locals['\$implicit'];
    this._textBinding_2.updateText(import20.interpolate0(local_item.labelAnnotation));
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent9(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent9(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent10 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  final import17.TextBinding _textBinding_2 = import17.TextBinding();
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  _ViewMenuItemGroupsComponent10(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'menu-item-label');
    this.addShimE(_el_0);
    final _text_1 = import10.appendText(_el_0, '\n              ');
    _el_0.append(this._textBinding_2.element);
    final _text_3 = import10.appendText(_el_0, '\n              ');
    final _anchor_4 = import10.appendAnchor(_el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MenuItemGroupsComponent11);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import10.appendText(_el_0, '\n            ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    this._NgIf_4_9.ngIf = ((local_item.labelAnnotation != null) && local_item.labelAnnotation.isNotEmpty);
    this._appEl_4.detectChangesInNestedViews();
    this._textBinding_2.updateText(import20.interpolate0(local_item.uiDisplayName));
  }

  @override
  void destroyInternal() {
    this._appEl_4.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent10(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent10(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent11 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  final import17.TextBinding _textBinding_2 = import17.TextBinding();
  _ViewMenuItemGroupsComponent11(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('sup');
    this.updateChildClass(_el_0, 'label-annotation');
    this.addShimE(_el_0);
    final _text_1 = import10.appendText(_el_0, '\n              ');
    _el_0.append(this._textBinding_2.element);
    final _text_3 = import10.appendText(_el_0, '\n              ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView.parentView).locals['\$implicit'];
    this._textBinding_2.updateText(import20.interpolate0(local_item.labelAnnotation));
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent11(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent11(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent12 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  final import17.TextBinding _textBinding_2 = import17.TextBinding();
  _ViewMenuItemGroupsComponent12(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'menu-item-secondary-label');
    this.addShimE(_el_0);
    final _text_1 = import10.appendText(_el_0, '\n              ');
    _el_0.append(this._textBinding_2.element);
    final _text_3 = import10.appendText(_el_0, '\n            ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    this._textBinding_2.updateText(import20.interpolate0(local_item.secondaryLabel));
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent12(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent12(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent13 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import50.ViewMenuItemAffixListComponent0 _compView_0;
  import51.MenuItemAffixListComponent _MenuItemAffixListComponent_0_5;
  var _expr_0;
  var _expr_1;
  _ViewMenuItemGroupsComponent13(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import50.ViewMenuItemAffixListComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'suffix-list');
    this.addShimC(_el_0);
    this._MenuItemAffixListComponent_0_5 = import51.MenuItemAffixListComponent(this._compView_0);
    this._compView_0.create(this._MenuItemAffixListComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import45.HasDisabled) && (nodeIndex <= 1))) {
      return this._MenuItemAffixListComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    changed = false;
    final bool currVal_0 = (!local_item.enabled);
    if (import9.checkBinding(this._expr_0, currVal_0, '!item.enabled', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MenuItemAffixListComponent_0_5.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_item.itemSuffixes;
    if (import9.checkBinding(this._expr_1, currVal_1, 'item.itemSuffixes', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MenuItemAffixListComponent_0_5.items = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MenuItemAffixListComponent_0_5.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent13(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent13(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent14 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import21.ViewMaterialIconComponent0 _compView_0;
  import22.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMenuItemGroupsComponent14(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import21.ViewMaterialIconComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'material-list-item-secondary submenu-icon');
    import10.setAttribute(_el_0, 'icon', 'arrow_drop_down');
    this.addShimC(_el_0);
    this._MaterialIconComponent_0_5 = import22.MaterialIconComponent(_el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_0_5.icon = 'arrow_drop_down';
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

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent14(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent14(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent15 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  bool _query_AutoFocusDirective_2_0_isDirty = true;
  import52.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import53.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_10;
  dynamic __PopupHierarchy_0_12;
  import54.ViewFocusTrapComponent0 _compView_2;
  import55.FocusTrapComponent _FocusTrapComponent_2_5;
  ViewContainer _appEl_4;
  import56.DeferredContentDirective _DeferredContentDirective_4_9;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  import8.Element _el_0;
  _ViewMenuItemGroupsComponent15(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _PopupRef_0_10 {
    if ((this.__PopupRef_0_10 == null)) {
      (this.__PopupRef_0_10 = import53.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_10;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((this.__PopupHierarchy_0_12 == null)) {
      (this.__PopupHierarchy_0_12 = import53.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_12;
  }

  @override
  void build() {
    this._compView_0 = import52.ViewMaterialPopupComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'enforceSpaceConstraints', '');
    this.addShimC(this._el_0);
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._MaterialPopupComponent_0_8 = (import9.isDevMode
        ? import31.debugInjectorWrap(import53.MaterialPopupComponent, () {
            return import53.MaterialPopupComponent(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import57.PopupHierarchy, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import53.MaterialPopupComponent, this.parentView.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.parentView.injectorGet(import58.NgZone, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import59.OverlayService, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import60.ZIndexer, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(const import61.OpaqueToken<List<import62.RelativePosition>>('defaultPopupPositions'), this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(const import61.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(const import61.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import63.PopupSizeProvider, this.parentView.parentView.parentView.parentView.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0));
          })
        : import53.MaterialPopupComponent(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import57.PopupHierarchy, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import53.MaterialPopupComponent, this.parentView.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.parentView.injectorGet(import58.NgZone, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import59.OverlayService, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(import60.ZIndexer, this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(const import61.OpaqueToken<List<import62.RelativePosition>>('defaultPopupPositions'), this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(const import61.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGet(const import61.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import63.PopupSizeProvider, this.parentView.parentView.parentView.parentView.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0)));
    final _text_1 = import10.createText('\n          ');
    this._compView_2 = import54.ViewFocusTrapComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    this.addShimC(_el_2);
    this._FocusTrapComponent_2_5 = import55.FocusTrapComponent();
    final _text_3 = import10.createText('\n            ');
    final _anchor_4 = import10.createAnchor();
    this._appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MenuItemGroupsComponent16);
    this._DeferredContentDirective_4_9 = import56.DeferredContentDirective(this._appEl_4, _TemplateRef_4_8, this._MaterialPopupComponent_0_8, this);
    final _text_5 = import10.createText('\n          ');
    this._compView_2.createAndProject(this._FocusTrapComponent_2_5, [
      [_text_3, this._appEl_4, _text_5]
    ]);
    final _text_6 = import10.createText('\n        ');
    this._compView_0.createAndProject(this._MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _el_2, _text_6],
      const []
    ]);
    final subscription_0 = this._MaterialPopupComponent_0_8.onVisible.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 6)) {
      if (((identical(token, import53.MaterialPopupComponent) || identical(token, import65.DeferredContentAware)) || identical(token, import40.DropdownHandle))) {
        return this._MaterialPopupComponent_0_8;
      }
      if (identical(token, import38.PopupRef)) {
        return this._PopupRef_0_10;
      }
      if (identical(token, import57.PopupHierarchy)) {
        return this._PopupHierarchy_0_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_subMenuSource = import9.unsafeCast<_ViewMenuItemGroupsComponent6>(this.parentView)._PopupSourceDirective_1_14;
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_0_8.autoDismiss = false;
      changed = true;
      this._MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
    }
    final currVal_3 = _ctx.preferredSubMenuPositions;
    if (import9.checkBinding(this._expr_3, currVal_3, 'preferredSubMenuPositions', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialPopupComponent_0_8.preferredPositions = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = local_subMenuSource;
    if (import9.checkBinding(this._expr_4, currVal_4, 'subMenuSource', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialPopupComponent_0_8.source = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.isSubMenuVisible(local_item);
    if (import9.checkBinding(this._expr_5, currVal_5, 'isSubMenuVisible(item)', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialPopupComponent_0_8.visible = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DeferredContentDirective_4_9.preserveDimensions = true);
    }
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._query_AutoFocusDirective_2_0_isDirty) {
        this._FocusTrapComponent_2_5.autoFocus = import66.firstOrNull(this._appEl_4.mapNestedViewsWithSingleResult((_ViewMenuItemGroupsComponent16 nestedView) {
          return nestedView._AutoFocusDirective_2_5;
        }));
        this._query_AutoFocusDirective_2_0_isDirty = false;
      }
    }
    final currVal_0 = _ctx.popupClass;
    if (import9.checkBinding(this._expr_0, currVal_0, 'popupClass', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._compView_0.updateChildClassNonHtml(this._el_0, currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_2.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._DeferredContentDirective_4_9.ngOnDestroy();
    this._FocusTrapComponent_2_5.ngOnDestroy();
    this._MaterialPopupComponent_0_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView).locals['\$implicit'];
    final _ctx = this.ctx;
    _ctx.onSubMenuVisibilityChanged(local_item, $event);
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent15(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent15(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent16 extends import13.EmbeddedView<import2.MenuItemGroupsComponent> {
  import67.ViewMaterialListComponent0 _compView_0;
  import68.MaterialListComponent _MaterialListComponent_0_5;
  ViewMenuItemGroupsComponent0 _compView_2;
  import25.AutoFocusDirective _AutoFocusDirective_2_5;
  import2.MenuItemGroupsComponent _MenuItemGroupsComponent_2_6;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMenuItemGroupsComponent16(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import67.ViewMaterialListComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'item-group-list');
    import10.setAttribute(_el_0, 'role', 'none');
    this.addShimC(_el_0);
    this._MaterialListComponent_0_5 = import68.MaterialListComponent();
    final _text_1 = import10.createText('\n              ');
    this._compView_2 = ViewMenuItemGroupsComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    import10.setAttribute(_el_2, 'autoFocus', '');
    this.addShimC(_el_2);
    this._AutoFocusDirective_2_5 = (import9.isDevMode
        ? import31.debugInjectorWrap(import25.AutoFocusDirective, () {
            return import25.AutoFocusDirective(_el_2, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import37.ModalComponent, this.parentView.parentView.parentView.parentView.parentView.parentIndex), import9.unsafeCast<_ViewMenuItemGroupsComponent15>(this.parentView)._PopupRef_0_10);
          })
        : import25.AutoFocusDirective(_el_2, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import36.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import37.ModalComponent, this.parentView.parentView.parentView.parentView.parentView.parentIndex), import9.unsafeCast<_ViewMenuItemGroupsComponent15>(this.parentView)._PopupRef_0_10));
    this._MenuItemGroupsComponent_2_6 = (import9.isDevMode
        ? import31.debugInjectorWrap(import2.MenuItemGroupsComponent, () {
            return import2.MenuItemGroupsComponent(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import69.MenuRoot, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_2, import9.unsafeCast<_ViewMenuItemGroupsComponent15>(this.parentView)._MaterialPopupComponent_0_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import70.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex));
          })
        : import2.MenuItemGroupsComponent(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import69.MenuRoot, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_2, import9.unsafeCast<_ViewMenuItemGroupsComponent15>(this.parentView)._MaterialPopupComponent_0_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import70.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex)));
    this._compView_2.create(this._MenuItemGroupsComponent_2_6);
    final _text_4 = import10.createText('\n            ');
    this._compView_0.createAndProject(this._MaterialListComponent_0_5, [
      [_text_1, _el_2, _text_4]
    ]);
    final subscription_0 = this._MenuItemGroupsComponent_2_6.selected.listen(this.eventHandler1(_ctx.onSubMenuItemSelected));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_item = import9.unsafeCast<_ViewMenuItemGroupsComponent5>(this.parentView.parentView.parentView).locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      this._MaterialListComponent_0_5.role = 'none';
      changed = true;
    }
    final currVal_1 = local_item.subMenu.width;
    if (import9.checkBinding(this._expr_1, currVal_1, 'item.subMenu.width', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MaterialListComponent_0_5.width = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._AutoFocusDirective_2_5.autoFocus = true);
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_2_5.ngOnInit();
    }
    changed = false;
    final currVal_3 = _ctx.isKeyboardOpenedSubmenu;
    if (import9.checkBinding(this._expr_3, currVal_3, 'isKeyboardOpenedSubmenu', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MenuItemGroupsComponent_2_6.activateFirstItemOnInit = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.popupClass;
    if (import9.checkBinding(this._expr_4, currVal_4, 'popupClass', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MenuItemGroupsComponent_2_6.popupClass = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = local_item.subMenu;
    if (import9.checkBinding(this._expr_5, currVal_5, 'item.subMenu', 'package:angular_components/material_menu/menu_item_groups.html')) {
      this._MenuItemGroupsComponent_2_6.menu = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MenuItemGroupsComponent_2_6.ngOnInit();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_2.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_2.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MenuItemGroupsComponent_2_6.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewMenuItemGroupsComponent15>(this.parentView)._query_AutoFocusDirective_2_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._AutoFocusDirective_2_5.ngOnDestroy();
    this._MenuItemGroupsComponent_2_6.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MenuItemGroupsComponent16(import15.RenderView parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent16(parentView, parentIndex);
}

final List<dynamic> styles$MenuItemGroupsComponentHost = const [];

class _ViewMenuItemGroupsComponentHost0 extends import71.HostView<import2.MenuItemGroupsComponent> {
  @override
  void build() {
    this.componentView = ViewMenuItemGroupsComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import31.debugInjectorWrap(import2.MenuItemGroupsComponent, () {
            return import2.MenuItemGroupsComponent(this.injectorGet(import69.MenuRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import40.DropdownHandle, this.parentIndex), this.injectorGetOptional(import70.IdGenerator, this.parentIndex));
          })
        : import2.MenuItemGroupsComponent(this.injectorGet(import69.MenuRoot, this.parentIndex), this.componentView, this.injectorGetOptional(import40.DropdownHandle, this.parentIndex), this.injectorGetOptional(import70.IdGenerator, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import71.HostView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponentHost0() {
  return _ViewMenuItemGroupsComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemGroupsComponent, createMenuItemGroupsComponentFactory());
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
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
  _ref24.initReflector();
  _ref25.initReflector();
  _ref26.initReflector();
  _ref27.initReflector();
}
