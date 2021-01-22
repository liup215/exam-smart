// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_fab_menu.dart';
export 'material_fab_menu.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'menu_item_groups.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref5;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref6;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref7;
import 'package:angular_components/material_button/material_fab.template.dart' as _ref8;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref9;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref10;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref11;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref12;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref13;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref14;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref15;
import 'package:angular_components/model/menu/menu.template.dart' as _ref16;
import 'package:angular_components/model/observable/observable.template.dart' as _ref17;
import 'package:angular_components/material_menu/material_fab_menu.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_fab_menu.dart' as import2;
import '../material_button/material_fab.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_button/material_fab.dart' as import5;
import '../src/material_tooltip/tooltip.dart' as import6;
import '../src/laminate/popup/popup_source_directive.dart' as import7;
import '../material_icon/material_icon.template.dart' as import8;
import '../material_icon/material_icon.dart' as import9;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/views/view.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../src/material_tooltip/tooltip_controller.dart' as import17;
import '../material_tooltip/module.dart' as import18;
import '../utils/disposer/disposer.dart' as import19;
import 'package:angular/src/runtime/dom_helpers.dart' as import20;
import '../src/laminate/popup/dom_popup_source.dart' as import21;
import '../utils/angular/reference/reference.dart' as import22;
import '../focus/focus_interface.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import26;
import '../material_popup/material_popup.template.dart' as import27;
import '../material_popup/material_popup.dart' as import28;
import '../content/deferred_content.dart' as import29;
import 'package:angular/src/core/linker/views/render_view.dart' as import30;
import '../src/laminate/popup/popup_hierarchy.dart' as import31;
import 'package:angular/src/core/zone/ng_zone.dart' as import32;
import '../src/laminate/overlay/overlay_service.dart' as import33;
import '../utils/browser/dom_service/dom_service.dart' as import34;
import '../laminate/overlay/zindexer.dart' as import35;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import36;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import38;
import '../src/laminate/popup/popup_size_provider.dart' as import39;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import41;
import '../mixins/material_dropdown_base.dart' as import42;
import '../src/laminate/popup/popup_ref.dart' as import43;
import '../focus/focus_trap.template.dart' as import44;
import '../focus/focus_trap.dart' as import45;
import '../material_list/material_list_item.template.dart' as import46;
import '../material_list/material_list_item.dart' as import47;
import 'menu_item_groups.template.dart' as import48;
import 'common/menu_root.dart' as import49;
import 'menu_item_groups.dart' as import50;
import 'package:angular/src/runtime/interpolate.dart' as import51;
import '../utils/id_generator/id_generator.dart' as import52;
import '../interfaces/has_disabled.dart' as import53;
import 'package:angular/src/core/linker/views/host_view.dart' as import54;

final List<dynamic> styles$MaterialFabMenuComponent = [import0.styles];

class ViewMaterialFabMenuComponent0 extends import1.ComponentView<import2.MaterialFabMenuComponent> {
  import3.ViewMaterialFabComponent0 _compView_1;
  ViewContainer _appEl_1;
  import5.MaterialFabComponent _MaterialFabComponent_1_8;
  import6.MaterialTooltipDirective _MaterialTooltipDirective_1_9;
  import7.PopupSourceDirective _PopupSourceDirective_1_10;
  dynamic __TooltipController_1_11;
  import8.ViewMaterialIconComponent0 _compView_3;
  import9.MaterialIconComponent _MaterialIconComponent_3_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import11.Element _el_1;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialFabMenuComponent0(import13.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import11.document.createElement('material-fab-menu');
  }
  dynamic get _TooltipController_1_11 {
    if ((this.__TooltipController_1_11 == null)) {
      (this.__TooltipController_1_11 = (import15.isDevMode
          ? import16.debugInjectorWrap(import17.TooltipController, () {
              return import18.createTooltipController(this.parentView.injectorGetOptional(import17.TooltipController, this.parentIndex), this.parentView.injectorGetOptional(import19.Disposer, this.parentIndex));
            })
          : import18.createTooltipController(this.parentView.injectorGetOptional(import17.TooltipController, this.parentIndex), this.parentView.injectorGetOptional(import19.Disposer, this.parentIndex))));
    }
    return this.__TooltipController_1_11;
  }

  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:angular_components/lib/material_menu/material_fab_menu.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import11.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import20.appendText(parentRenderNode, '\n');
    this._compView_1 = import3.ViewMaterialFabComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    parentRenderNode.append(this._el_1);
    import20.setAttribute(this._el_1, 'popupSource', '');
    import20.setAttribute(this._el_1, 'raised', '');
    this.addShimC(this._el_1);
    this._appEl_1 = ViewContainer(1, null, this, this._el_1);
    this._MaterialFabComponent_1_8 = import5.MaterialFabComponent(this._el_1, this._compView_1);
    this._MaterialTooltipDirective_1_9 = (import15.isDevMode
        ? import16.debugInjectorWrap(import6.MaterialTooltipDirective, () {
            return import6.MaterialTooltipDirective(this.parentView.injectorGet(import21.DomPopupSourceFactory, this.parentIndex), this._appEl_1, this._el_1, this._appEl_1, this._compView_1, this.parentView.injectorGet(import11.Window, this.parentIndex), null, null);
          })
        : import6.MaterialTooltipDirective(this.parentView.injectorGet(import21.DomPopupSourceFactory, this.parentIndex), this._appEl_1, this._el_1, this._appEl_1, this._compView_1, this.parentView.injectorGet(import11.Window, this.parentIndex), null, null));
    this._PopupSourceDirective_1_10 = (import15.isDevMode
        ? import16.debugInjectorWrap(import7.PopupSourceDirective, () {
            return import7.PopupSourceDirective(this.parentView.injectorGet(import21.DomPopupSourceFactory, this.parentIndex), this._el_1, this.parentView.injectorGetOptional(import22.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import23.Focusable, this.parentIndex), null);
          })
        : import7.PopupSourceDirective(this.parentView.injectorGet(import21.DomPopupSourceFactory, this.parentIndex), this._el_1, this.parentView.injectorGetOptional(import22.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import23.Focusable, this.parentIndex), null));
    final _text_2 = import20.createText('\n  ');
    this._compView_3 = import8.ViewMaterialIconComponent0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    this.addShimC(_el_3);
    this._MaterialIconComponent_3_5 = import9.MaterialIconComponent(_el_3);
    this._compView_3.create(this._MaterialIconComponent_3_5);
    final _text_4 = import20.createText('\n');
    this._compView_1.createAndProject(this._MaterialFabComponent_1_8, [
      [_text_2, _el_3, _text_4]
    ]);
    final _text_5 = import20.appendText(parentRenderNode, '\n');
    final _anchor_6 = import20.appendAnchor(parentRenderNode);
    this._appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialFabMenuComponent1);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _text_7 = import20.appendText(parentRenderNode, '\n');
    this._el_1.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    final subscription_0 = this._MaterialFabComponent_1_8.trigger.listen(this.eventHandler1(_ctx.trigger));
    this.initSubscriptions([subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return this._TooltipController_1_11;
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
      this._MaterialFabComponent_1_8.raised = true;
      changed = true;
    }
    final bool currVal_3 = (!_ctx.isFabEnabled);
    if (import15.checkBinding(this._expr_3, currVal_3, '!isFabEnabled', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialFabComponent_1_8.disabled = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.tooltipPositions, null)) {
        (this._MaterialTooltipDirective_1_9.positions = _ctx.tooltipPositions);
      }
    }
    final currVal_6 = _ctx.tooltip;
    if (import15.checkBinding(this._expr_6, currVal_6, 'tooltip', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialTooltipDirective_1_9.text = currVal_6;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hasTooltip;
    if (import15.checkBinding(this._expr_7, currVal_7, 'hasTooltip', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialTooltipDirective_1_9.canShow = currVal_7;
      this._expr_7 = currVal_7;
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._MaterialTooltipDirective_1_9.ngOnInit();
    }
    changed = false;
    final currVal_8 = _ctx.glyph;
    if (import15.checkBinding(this._expr_8, currVal_8, 'glyph', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialIconComponent_3_5.icon = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._compView_3.markAsCheckOnce();
    }
    this._NgIf_6_9.ngIf = _ctx.hasMenu;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.isFabHidden;
    if (import15.checkBinding(this._expr_0, currVal_0, 'isFabHidden', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateClassBindingNonHtml(this._el_1, 'invisible', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaLabel;
    if (import15.checkBinding(this._expr_1, currVal_1, 'ariaLabel', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateAttribute(this._el_1, 'aria-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.naviId;
    if (import15.checkBinding(this._expr_2, currVal_2, 'naviId', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateAttribute(this._el_1, 'navi-id', currVal_2);
      this._expr_2 = currVal_2;
    }
    this._compView_1.detectHostChanges(firstCheck);
    this._compView_1.detectChanges();
    this._compView_3.detectChanges();
    if ((!import15.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialTooltipDirective_1_9.ngAfterViewInit();
        this._PopupSourceDirective_1_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._compView_3.destroyInternalState();
    this._MaterialTooltipDirective_1_9.ngOnDestroy();
    this._PopupSourceDirective_1_10.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import12.ComponentStyles.scoped(styles$MaterialFabMenuComponent, _debugComponentUrl));
      if (import15.isDevMode) {
        import12.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialFabMenuComponentNgFactory = ComponentFactory<import2.MaterialFabMenuComponent>('material-fab-menu', viewFactory_MaterialFabMenuComponentHost0);
ComponentFactory<import2.MaterialFabMenuComponent> get MaterialFabMenuComponentNgFactory {
  return _MaterialFabMenuComponentNgFactory;
}

ComponentFactory<import2.MaterialFabMenuComponent> createMaterialFabMenuComponentFactory() {
  return ComponentFactory('material-fab-menu', viewFactory_MaterialFabMenuComponentHost0);
}

class _ViewMaterialFabMenuComponent1 extends import26.EmbeddedView<import2.MaterialFabMenuComponent> {
  import27.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import28.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  ViewContainer _appEl_2;
  import29.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialFabMenuComponent1(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _PopupHierarchy_0_11 {
    if ((this.__PopupHierarchy_0_11 == null)) {
      (this.__PopupHierarchy_0_11 = import28.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((this.__PopupRef_0_12 == null)) {
      (this.__PopupRef_0_12 = import28.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_12;
  }

  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import27.ViewMaterialPopupComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import20.setAttribute(_el_0, 'autoDismiss', '');
    import20.setAttribute(_el_0, 'enforceSpaceConstraints', '');
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._MaterialPopupComponent_0_8 = (import15.isDevMode
        ? import16.debugInjectorWrap(import28.MaterialPopupComponent, () {
            return import28.MaterialPopupComponent(this.parentView.injectorGetOptional(import31.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import28.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import32.NgZone, this.parentIndex), this.parentView.injectorGet(import33.OverlayService, this.parentIndex), this.parentView.injectorGet(import34.DomService, this.parentIndex), this.parentView.injectorGet(import35.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import36.OpaqueToken<List<import38.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import36.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import36.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import39.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(_el_0));
          })
        : import28.MaterialPopupComponent(this.parentView.injectorGetOptional(import31.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import28.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import32.NgZone, this.parentIndex), this.parentView.injectorGet(import33.OverlayService, this.parentIndex), this.parentView.injectorGet(import34.DomService, this.parentIndex), this.parentView.injectorGet(import35.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import36.OpaqueToken<List<import38.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import36.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import36.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import39.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(_el_0)));
    final _text_1 = import20.createText('\n  ');
    final _anchor_2 = import20.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialFabMenuComponent2);
    this._DeferredContentDirective_2_9 = import29.DeferredContentDirective(this._appEl_2, _TemplateRef_2_8, this._MaterialPopupComponent_0_8, this);
    final _text_3 = import20.createText('\n');
    this._compView_0.createAndProject(this._MaterialPopupComponent_0_8, [
      const [],
      [_text_1, this._appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = this._MaterialPopupComponent_0_8.onOpened.listen(this.eventHandler0(_ctx.onPopupOpened));
    final subscription_1 = this._MaterialPopupComponent_0_8.onClose.listen(this.eventHandler0(_ctx.onPopupClosed));
    this.initRootNodesAndSubscriptions([this._appEl_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if (((identical(token, import28.MaterialPopupComponent) || identical(token, import41.DeferredContentAware)) || identical(token, import42.DropdownHandle))) {
        return this._MaterialPopupComponent_0_8;
      }
      if (identical(token, import31.PopupHierarchy)) {
        return this._PopupHierarchy_0_11;
      }
      if (identical(token, import43.PopupRef)) {
        return this._PopupRef_0_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_source = import15.unsafeCast<ViewMaterialFabMenuComponent0>(this.parentView)._PopupSourceDirective_1_10;
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_0_8.autoDismiss = true;
      changed = true;
      this._MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
      this._MaterialPopupComponent_0_8.hasBox = false;
      changed = true;
    }
    final currVal_2 = _ctx.preferredPopupPositions;
    if (import15.checkBinding(this._expr_2, currVal_2, 'preferredPopupPositions', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = local_source;
    if (import15.checkBinding(this._expr_3, currVal_3, 'source', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialPopupComponent_0_8.source = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.trackLayoutChanges;
    if (import15.checkBinding(this._expr_4, currVal_4, 'trackLayoutChanges', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialPopupComponent_0_8.trackLayoutChanges = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.showPopup;
    if (import15.checkBinding(this._expr_5, currVal_5, 'showPopup', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MaterialPopupComponent_0_8.visible = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DeferredContentDirective_2_9.preserveDimensions = true);
    }
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import15.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DeferredContentDirective_2_9.ngOnDestroy();
    this._MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

import26.EmbeddedView<void> viewFactory_MaterialFabMenuComponent1(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent2 extends import26.EmbeddedView<import2.MaterialFabMenuComponent> {
  import44.ViewFocusTrapComponent0 _compView_4;
  import45.FocusTrapComponent _FocusTrapComponent_4_5;
  import46.ViewMaterialListItemComponent0 _compView_6;
  import47.MaterialListItemComponent _MaterialListItemComponent_6_5;
  import8.ViewMaterialIconComponent0 _compView_8;
  import9.MaterialIconComponent _MaterialIconComponent_8_5;
  import48.ViewMenuItemGroupsComponent0 _compView_11;
  import49.MenuRootDirective _MenuRootDirective_11_5;
  import50.MenuItemGroupsComponent _MenuItemGroupsComponent_11_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  import11.DivElement _el_0;
  import11.DivElement _el_2;
  _ViewMaterialFabMenuComponent2(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import11.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'menu-content');
    import20.setAttribute(this._el_0, 'elevation', '2');
    this.addShimC(this._el_0);
    final _text_1 = import20.appendText(this._el_0, '\n    ');
    this._el_2 = import20.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_2, 'content-wrapper');
    this.addShimC(this._el_2);
    final _text_3 = import20.appendText(this._el_2, '\n      ');
    this._compView_4 = import44.ViewFocusTrapComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    this._el_2.append(_el_4);
    this.addShimC(_el_4);
    this._FocusTrapComponent_4_5 = import45.FocusTrapComponent();
    final _text_5 = import20.createText('\n        ');
    this._compView_6 = import46.ViewMaterialListItemComponent0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    this.updateChildClassNonHtml(_el_6, import51.interpolateString2('', 'close-menu', ' ', import47.MaterialListItemComponent.hostClass, ''));
    this.addShimC(_el_6);
    this._MaterialListItemComponent_6_5 = import47.MaterialListItemComponent(_el_6, import15.unsafeCast<_ViewMaterialFabMenuComponent1>(this.parentView)._MaterialPopupComponent_0_8, null, null);
    final _text_7 = import20.createText('\n          ');
    this._compView_8 = import8.ViewMaterialIconComponent0(this, 8);
    final _el_8 = this._compView_8.rootElement;
    this.updateChildClassNonHtml(_el_8, 'close-icon material-list-item-primary');
    import20.setAttribute(_el_8, 'icon', 'close');
    this.addShimC(_el_8);
    this._MaterialIconComponent_8_5 = import9.MaterialIconComponent(_el_8);
    this._compView_8.create(this._MaterialIconComponent_8_5);
    final _text_9 = import20.createText('\n        ');
    this._compView_6.createAndProject(this._MaterialListItemComponent_6_5, [
      [_text_7, _el_8, _text_9]
    ]);
    final _text_10 = import20.createText('\n        ');
    this._compView_11 = import48.ViewMenuItemGroupsComponent0(this, 11);
    final _el_11 = this._compView_11.rootElement;
    this.updateChildClassNonHtml(_el_11, 'menu-groups');
    import20.setAttribute(_el_11, 'menu-root', '');
    import20.setAttribute(_el_11, 'preventCloseOnPressLeft', '');
    this.addShimC(_el_11);
    this._MenuRootDirective_11_5 = import49.MenuRootDirective(import15.unsafeCast<_ViewMaterialFabMenuComponent1>(this.parentView)._MaterialPopupComponent_0_8);
    this._MenuItemGroupsComponent_11_7 = (import15.isDevMode
        ? import16.debugInjectorWrap(import50.MenuItemGroupsComponent, () {
            return import50.MenuItemGroupsComponent(this._MenuRootDirective_11_5, this._compView_11, import15.unsafeCast<_ViewMaterialFabMenuComponent1>(this.parentView)._MaterialPopupComponent_0_8, this.parentView.parentView.injectorGetOptional(import52.IdGenerator, this.parentView.parentIndex));
          })
        : import50.MenuItemGroupsComponent(this._MenuRootDirective_11_5, this._compView_11, import15.unsafeCast<_ViewMaterialFabMenuComponent1>(this.parentView)._MaterialPopupComponent_0_8, this.parentView.parentView.injectorGetOptional(import52.IdGenerator, this.parentView.parentIndex)));
    this._compView_11.create(this._MenuItemGroupsComponent_11_7);
    final _text_13 = import20.createText('\n      ');
    this._compView_4.createAndProject(this._FocusTrapComponent_4_5, [
      [_text_5, _el_6, _text_10, _el_11, _text_13]
    ]);
    final _text_14 = import20.appendText(this._el_2, '\n    ');
    final _text_15 = import20.appendText(this._el_0, '\n  ');
    final subscription_0 = this._MaterialListItemComponent_6_5.trigger.listen(this.eventHandler0(_ctx.hideMenu));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import53.HasDisabled) && ((6 <= nodeIndex) && (nodeIndex <= 9)))) {
      return this._MaterialListItemComponent_6_5;
    }
    if ((identical(token, import49.MenuRoot) && ((11 <= nodeIndex) && (nodeIndex <= 12)))) {
      return this._MenuRootDirective_11_5;
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
      this._MaterialListItemComponent_6_5.closeOnActivate = false;
      changed = true;
    }
    if (changed) {
      this._compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_8_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      this._compView_8.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      this._MenuItemGroupsComponent_11_7.preventCloseOnPressLeft = true;
      changed = true;
    }
    final currVal_7 = _ctx.activateFirstItemOnInit;
    if (import15.checkBinding(this._expr_7, currVal_7, 'activateFirstItemOnInit', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MenuItemGroupsComponent_11_7.activateFirstItemOnInit = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.activateLastItemOnInit;
    if (import15.checkBinding(this._expr_8, currVal_8, 'activateLastItemOnInit', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MenuItemGroupsComponent_11_7.activateLastItemOnInit = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.menuItem.subMenu;
    if (import15.checkBinding(this._expr_9, currVal_9, 'menuItem.subMenu', 'package:angular_components/material_menu/material_fab_menu.html')) {
      this._MenuItemGroupsComponent_11_7.menu = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    if (changed) {
      this._compView_11.markAsCheckOnce();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._MenuItemGroupsComponent_11_7.ngOnInit();
    }
    final currVal_0 = _ctx.menuVisible;
    if (import15.checkBinding(this._expr_0, currVal_0, 'menuVisible', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateClassBinding(this._el_0, 'visible', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closing;
    if (import15.checkBinding(this._expr_1, currVal_1, 'closing', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateClassBinding(this._el_0, 'closing', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hasIcons;
    if (import15.checkBinding(this._expr_2, currVal_2, 'hasIcons', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateClassBinding(this._el_0, 'has-icons', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.menuVisible;
    if (import15.checkBinding(this._expr_3, currVal_3, 'menuVisible', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateClassBinding(this._el_2, 'visible', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.closing;
    if (import15.checkBinding(this._expr_4, currVal_4, 'closing', 'package:angular_components/material_menu/material_fab_menu.html')) {
      import20.updateClassBinding(this._el_2, 'closing', currVal_4);
      this._expr_4 = currVal_4;
    }
    this._compView_6.detectHostChanges(firstCheck);
    this._compView_11.detectHostChanges(firstCheck);
    this._compView_4.detectChanges();
    this._compView_6.detectChanges();
    this._compView_8.detectChanges();
    this._compView_11.detectChanges();
    if ((!import15.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MenuItemGroupsComponent_11_7.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_4.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._compView_8.destroyInternalState();
    this._compView_11.destroyInternalState();
    this._MaterialListItemComponent_6_5.ngOnDestroy();
    this._MenuItemGroupsComponent_11_7.ngOnDestroy();
    this._FocusTrapComponent_4_5.ngOnDestroy();
  }
}

import26.EmbeddedView<void> viewFactory_MaterialFabMenuComponent2(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialFabMenuComponentHost = const [];

class _ViewMaterialFabMenuComponentHost0 extends import54.HostView<import2.MaterialFabMenuComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialFabMenuComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialFabMenuComponent(this.componentView);
    this.initRootNode(_el_0);
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

import54.HostView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponentHost0() {
  return _ViewMaterialFabMenuComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabMenuComponent, createMaterialFabMenuComponentFactory());
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
}
