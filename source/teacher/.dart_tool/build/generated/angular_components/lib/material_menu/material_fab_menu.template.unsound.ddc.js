define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_menu/material_fab_menu', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_menu/material_fab_menu.scss.css.shim'], (function load__packages__angular_components__material_menu__material_fab_menu_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular__src__bootstrap__modules, packages__angular_components__material_button__material_fab$46template, packages__angular_components__material_button__material_fab, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_menu__material_fab_menu, packages__angular_components__material_popup__material_popup, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__material_list__material_list_item$46template, packages__angular__src__runtime__interpolate, packages__angular_components__material_list__material_list_item, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__common__menu_root, packages__angular_components__material_menu__material_menu, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_menu__menu_root$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__track_layout_changes$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_menu__material_fab_menu$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_fab$46template = packages__angular_components__material_button__material_fab$46template.material_button__material_fab$46template;
  const material_fab = packages__angular_components__material_button__material_fab.material_button__material_fab;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_fab_menu = packages__angular_components__material_menu__material_fab_menu.material_menu__material_fab_menu;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_list_item = packages__angular_components__material_list__material_list_item.material_list__material_list_item;
  const menu_item_groups$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_item_groups$46template;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const menu_root$46template = packages__angular_components__material_menu__menu_root$46template.material_menu__menu_root$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const track_layout_changes$46template = packages__angular_components__mixins__track_layout_changes$46template.mixins__track_layout_changes$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const material_fab_menu$46scss$46css$46shim = packages__angular_components__material_menu__material_fab_menu$46scss$46css$46shim.material_menu__material_fab_menu$46scss$46css$46shim;
  var material_fab_menu$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(di_tokens.OpaqueToken$(ListLOfRelativePositionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var ViewMaterialFabMenuComponent0L = () => (ViewMaterialFabMenuComponent0L = dart.constFn(dart.legacy(material_fab_menu$46template.ViewMaterialFabMenuComponent0)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var _ViewMaterialFabMenuComponent1L = () => (_ViewMaterialFabMenuComponent1L = dart.constFn(dart.legacy(material_fab_menu$46template._ViewMaterialFabMenuComponent1)))();
  var MenuItemGroupsComponentL = () => (MenuItemGroupsComponentL = dart.constFn(dart.legacy(menu_item_groups.MenuItemGroupsComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMenuItemGroupsComponentL = () => (VoidToMenuItemGroupsComponentL = dart.constFn(dart.fnType(MenuItemGroupsComponentL(), [])))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var MenuRootL = () => (MenuRootL = dart.constFn(dart.legacy(menu_root.MenuRoot)))();
  var MaterialFabMenuComponentL = () => (MaterialFabMenuComponentL = dart.constFn(dart.legacy(material_fab_menu.MaterialFabMenuComponent)))();
  var ComponentFactoryOfMaterialFabMenuComponentL = () => (ComponentFactoryOfMaterialFabMenuComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialFabMenuComponentL())))();
  var HostViewOfMaterialFabMenuComponentL = () => (HostViewOfMaterialFabMenuComponentL = dart.constFn(host_view.HostView$(MaterialFabMenuComponentL())))();
  var HostViewLOfMaterialFabMenuComponentL = () => (HostViewLOfMaterialFabMenuComponentL = dart.constFn(dart.legacy(HostViewOfMaterialFabMenuComponentL())))();
  var VoidToHostViewLOfMaterialFabMenuComponentL = () => (VoidToHostViewLOfMaterialFabMenuComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialFabMenuComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/material_fab_menu.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_fab_menu$46template.ViewMaterialFabMenuComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C5() {
      return C5 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    },
    get C7() {
      return C7 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0, VoidToHostViewLOfMaterialFabMenuComponentL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ComponentFactoryOfMaterialFabMenuComponentL().prototype,
        [ComponentFactory__viewFactory]: C7 || CT.C7,
        [ComponentFactory_selector]: "material-fab-menu"
      });
    }
  }, false);
  var _compView_1 = dart.privateName(material_fab_menu$46template, "_compView_1");
  var _appEl_1 = dart.privateName(material_fab_menu$46template, "_appEl_1");
  var _MaterialFabComponent_1_8 = dart.privateName(material_fab_menu$46template, "_MaterialFabComponent_1_8");
  var _MaterialTooltipDirective_1_9 = dart.privateName(material_fab_menu$46template, "_MaterialTooltipDirective_1_9");
  var _PopupSourceDirective_1_10 = dart.privateName(material_fab_menu$46template, "_PopupSourceDirective_1_10");
  var __TooltipController_1_11 = dart.privateName(material_fab_menu$46template, "__TooltipController_1_11");
  var _compView_3 = dart.privateName(material_fab_menu$46template, "_compView_3");
  var _MaterialIconComponent_3_5 = dart.privateName(material_fab_menu$46template, "_MaterialIconComponent_3_5");
  var _appEl_6 = dart.privateName(material_fab_menu$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_fab_menu$46template, "_NgIf_6_9");
  var _expr_0 = dart.privateName(material_fab_menu$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_fab_menu$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_fab_menu$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_fab_menu$46template, "_expr_3");
  var _expr_6 = dart.privateName(material_fab_menu$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_fab_menu$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_fab_menu$46template, "_expr_8");
  var _el_1 = dart.privateName(material_fab_menu$46template, "_el_1");
  var _TooltipController_1_11 = dart.privateName(material_fab_menu$46template, "_TooltipController_1_11");
  var C0;
  var C1;
  material_fab_menu$46template.ViewMaterialFabMenuComponent0 = class ViewMaterialFabMenuComponent0 extends component_view.ComponentView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    get [_TooltipController_1_11]() {
      if (this[__TooltipController_1_11] == null) {
        this[__TooltipController_1_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex)));
      }
      return this[__TooltipController_1_11];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_fab_menu.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new material_fab$46template.ViewMaterialFabComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      parentRenderNode[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "popupSource", "");
      dom_helpers.setAttribute(this[_el_1], "raised", "");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_MaterialFabComponent_1_8] = new material_fab.MaterialFabComponent.new(HtmlElementL().as(this[_el_1]), this[_compView_1]);
      this[_MaterialTooltipDirective_1_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_appEl_1], this[_compView_1], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_appEl_1], this[_compView_1], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.parentIndex)), null, null);
      this[_PopupSourceDirective_1_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null);
      let _text_2 = dom_helpers.createText("\n  ");
      this[_compView_3] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5]);
      let _text_4 = dom_helpers.createText("\n");
      this[_compView_1].createAndProject(this[_MaterialFabComponent_1_8], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_2, _el_3, _text_4])]));
      let _text_5 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_6 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C0 || CT.C0);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_MaterialFabComponent_1_8].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'trigger')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(TooltipControllerL()) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_TooltipController_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialFabComponent_1_8].raised = true;
        changed = true;
      }
      let currVal_3 = !dart.test(_ctx.isFabEnabled);
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "!isFabEnabled", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialFabComponent_1_8].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        if (_ctx.tooltipPositions != null) {
          this[_MaterialTooltipDirective_1_9].positions = _ctx.tooltipPositions;
        }
      }
      let currVal_6 = _ctx.tooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "tooltip", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialTooltipDirective_1_9].text = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasTooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "hasTooltip", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialTooltipDirective_1_9].canShow = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_1_9].ngOnInit();
      }
      changed = false;
      let currVal_8 = _ctx.glyph;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "glyph", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialIconComponent_3_5].icon = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_6_9].ngIf = _ctx.hasMenu;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.isFabHidden;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isFabHidden", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "invisible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "ariaLabel", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.naviId;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "naviId", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "navi-id", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_1_9].ngAfterViewInit();
          this[_PopupSourceDirective_1_10].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialTooltipDirective_1_9].ngOnDestroy();
      this[_PopupSourceDirective_1_10].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles;
      if (styles == null) {
        material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_fab_menu$46template.styles$MaterialFabMenuComponent, material_fab_menu$46template.ViewMaterialFabMenuComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_fab_menu$46template.ViewMaterialFabMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_MaterialFabComponent_1_8] = null;
    this[_MaterialTooltipDirective_1_9] = null;
    this[_PopupSourceDirective_1_10] = null;
    this[__TooltipController_1_11] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_1] = null;
    material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-fab-menu"));
  }).prototype = material_fab_menu$46template.ViewMaterialFabMenuComponent0.prototype;
  dart.addTypeTests(material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.addTypeCaches(material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.setMethodSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getGetters(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_TooltipController_1_11]: dart.dynamic
  }));
  dart.setLibraryUri(material_fab_menu$46template.ViewMaterialFabMenuComponent0, L0);
  dart.setFieldSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getFields(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_fab$46template.ViewMaterialFabComponent0)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialFabComponent_1_8]: dart.fieldType(dart.legacy(material_fab.MaterialFabComponent)),
    [_MaterialTooltipDirective_1_9]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [_PopupSourceDirective_1_10]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [__TooltipController_1_11]: dart.fieldType(dart.dynamic),
    [_compView_3]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_3_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_fab_menu$46template.ViewMaterialFabMenuComponent0, {
    /*material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_fab_menu$46template, "_compView_0");
  var _appEl_0 = dart.privateName(material_fab_menu$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8 = dart.privateName(material_fab_menu$46template, "_MaterialPopupComponent_0_8");
  var __PopupHierarchy_0_11 = dart.privateName(material_fab_menu$46template, "__PopupHierarchy_0_11");
  var __PopupRef_0_12 = dart.privateName(material_fab_menu$46template, "__PopupRef_0_12");
  var _appEl_2 = dart.privateName(material_fab_menu$46template, "_appEl_2");
  var _DeferredContentDirective_2_9 = dart.privateName(material_fab_menu$46template, "_DeferredContentDirective_2_9");
  var _expr_4 = dart.privateName(material_fab_menu$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_fab_menu$46template, "_expr_5");
  var _PopupHierarchy_0_11 = dart.privateName(material_fab_menu$46template, "_PopupHierarchy_0_11");
  var _PopupRef_0_12 = dart.privateName(material_fab_menu$46template, "_PopupRef_0_12");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  material_fab_menu$46template._ViewMaterialFabMenuComponent1 = class _ViewMaterialFabMenuComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "autoDismiss", "");
      dom_helpers.setAttribute(_el_0, "enforceSpaceConstraints", "");
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(_el_0)), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(_el_0));
      let _text_1 = dom_helpers.createText("\n  ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C5 || CT.C5);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8], this);
      let _text_3 = dom_helpers.createText("\n");
      this[_compView_0].createAndProject(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C6 || CT.C6, JSArrayOfObjectL().of([_text_1, this[_appEl_2], _text_3]), C6 || CT.C6]));
      let subscription_0 = this[_MaterialPopupComponent_0_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'onPopupOpened')));
      let subscription_1 = this[_MaterialPopupComponent_0_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'onPopupClosed')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_source = optimizations.unsafeCast(ViewMaterialFabMenuComponent0L(), this.parentView)[_PopupSourceDirective_1_10];
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_0_8].autoDismiss = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].hasBox = false;
        changed = true;
      }
      let currVal_2 = _ctx.preferredPopupPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "preferredPopupPositions", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_source;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "source", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.trackLayoutChanges;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "trackLayoutChanges", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.showPopup;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "showPopup", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponent1.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.addTypeCaches(material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getGetters(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponent1, L0);
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_2_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  var _compView_4 = dart.privateName(material_fab_menu$46template, "_compView_4");
  var _FocusTrapComponent_4_5 = dart.privateName(material_fab_menu$46template, "_FocusTrapComponent_4_5");
  var _compView_6 = dart.privateName(material_fab_menu$46template, "_compView_6");
  var _MaterialListItemComponent_6_5 = dart.privateName(material_fab_menu$46template, "_MaterialListItemComponent_6_5");
  var _compView_8 = dart.privateName(material_fab_menu$46template, "_compView_8");
  var _MaterialIconComponent_8_5 = dart.privateName(material_fab_menu$46template, "_MaterialIconComponent_8_5");
  var _compView_11 = dart.privateName(material_fab_menu$46template, "_compView_11");
  var _MenuRootDirective_11_5 = dart.privateName(material_fab_menu$46template, "_MenuRootDirective_11_5");
  var _MenuItemGroupsComponent_11_7 = dart.privateName(material_fab_menu$46template, "_MenuItemGroupsComponent_11_7");
  var _expr_9 = dart.privateName(material_fab_menu$46template, "_expr_9");
  var _el_0 = dart.privateName(material_fab_menu$46template, "_el_0");
  var _el_2 = dart.privateName(material_fab_menu$46template, "_el_2");
  material_fab_menu$46template._ViewMaterialFabMenuComponent2 = class _ViewMaterialFabMenuComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "menu-content");
      dom_helpers.setAttribute(this[_el_0], "elevation", "2");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "content-wrapper");
      this.addShimC(this[_el_2]);
      let _text_3 = dom_helpers.appendText(this[_el_2], "\n      ");
      this[_compView_4] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      this[_el_2][$append](_el_4);
      this.addShimC(_el_4);
      this[_FocusTrapComponent_4_5] = new focus_trap.FocusTrapComponent.new();
      let _text_5 = dom_helpers.createText("\n        ");
      this[_compView_6] = new material_list_item$46template.ViewMaterialListItemComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this.updateChildClassNonHtml(_el_6, interpolate.interpolateString2("", "close-menu", " ", "item", ""));
      this.addShimC(_el_6);
      this[_MaterialListItemComponent_6_5] = new material_list_item.MaterialListItemComponent.new(_el_6, optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8], null, null);
      let _text_7 = dom_helpers.createText("\n          ");
      this[_compView_8] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootElement;
      this.updateChildClassNonHtml(_el_8, "close-icon material-list-item-primary");
      dom_helpers.setAttribute(_el_8, "icon", "close");
      this.addShimC(_el_8);
      this[_MaterialIconComponent_8_5] = new material_icon.MaterialIconComponent.new(_el_8);
      this[_compView_8].create(this[_MaterialIconComponent_8_5]);
      let _text_9 = dom_helpers.createText("\n        ");
      this[_compView_6].createAndProject(this[_MaterialListItemComponent_6_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_7, _el_8, _text_9])]));
      let _text_10 = dom_helpers.createText("\n        ");
      this[_compView_11] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 11);
      let _el_11 = this[_compView_11].rootElement;
      this.updateChildClassNonHtml(_el_11, "menu-groups");
      dom_helpers.setAttribute(_el_11, "menu-root", "");
      dom_helpers.setAttribute(_el_11, "preventCloseOnPressLeft", "");
      this.addShimC(_el_11);
      this[_MenuRootDirective_11_5] = new menu_root.MenuRootDirective.new(optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuItemGroupsComponent_11_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_11_5], this[_compView_11], optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_11_5], this[_compView_11], optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentIndex)));
      this[_compView_11].create(this[_MenuItemGroupsComponent_11_7]);
      let _text_13 = dom_helpers.createText("\n      ");
      this[_compView_4].createAndProject(this[_FocusTrapComponent_4_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_5, _el_6, _text_10, _el_11, _text_13])]));
      let _text_14 = dom_helpers.appendText(this[_el_2], "\n    ");
      let _text_15 = dom_helpers.appendText(this[_el_0], "\n  ");
      let subscription_0 = this[_MaterialListItemComponent_6_5].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'hideMenu')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_MaterialListItemComponent_6_5];
      }
      if (token === dart.wrapType(MenuRootL()) && 11 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_MenuRootDirective_11_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialListItemComponent_6_5].closeOnActivate = false;
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_8_5].icon = "close";
        changed = true;
      }
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_11_7].preventCloseOnPressLeft = true;
        changed = true;
      }
      let currVal_7 = _ctx.activateFirstItemOnInit;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "activateFirstItemOnInit", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MenuItemGroupsComponent_11_7].activateFirstItemOnInit = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.activateLastItemOnInit;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "activateLastItemOnInit", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MenuItemGroupsComponent_11_7].activateLastItemOnInit = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.menuItem.subMenu;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "menuItem.subMenu", "package:angular_components/material_menu/material_fab_menu.html"))) {
        this[_MenuItemGroupsComponent_11_7].menu = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_11_7].ngOnInit();
      }
      let currVal_0 = _ctx.menuVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "menuVisible", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "visible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closing;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "closing", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "closing", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hasIcons;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "hasIcons", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "has-icons", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.menuVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "menuVisible", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateClassBinding(this[_el_2], "visible", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.closing;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "closing", "package:angular_components/material_menu/material_fab_menu.html"))) {
        dom_helpers.updateClassBinding(this[_el_2], "closing", currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_11].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      this[_compView_11].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_11_7].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_compView_11].destroyInternalState();
      this[_MaterialListItemComponent_6_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_11_7].ngOnDestroy();
      this[_FocusTrapComponent_4_5].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponent2.new = function(parentView, parentIndex) {
    this[_compView_4] = null;
    this[_FocusTrapComponent_4_5] = null;
    this[_compView_6] = null;
    this[_MaterialListItemComponent_6_5] = null;
    this[_compView_8] = null;
    this[_MaterialIconComponent_8_5] = null;
    this[_compView_11] = null;
    this[_MenuRootDirective_11_5] = null;
    this[_MenuItemGroupsComponent_11_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_2] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponent2.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.addTypeCaches(material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponent2, L0);
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    [_compView_4]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_4_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(material_list_item$46template.ViewMaterialListItemComponent0)),
    [_MaterialListItemComponent_6_5]: dart.fieldType(dart.legacy(material_list_item.MaterialListItemComponent)),
    [_compView_8]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_8_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_11]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_MenuRootDirective_11_5]: dart.fieldType(dart.legacy(menu_root.MenuRootDirective)),
    [_MenuItemGroupsComponent_11_7]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  material_fab_menu$46template._ViewMaterialFabMenuComponentHost0 = class _ViewMaterialFabMenuComponentHost0 extends host_view.HostView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    build() {
      this.componentView = new material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_fab_menu.MaterialFabMenuComponent.new(this.componentView);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new = function() {
    material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.addTypeCaches(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, L0);
  var C7;
  material_fab_menu$46template.createMaterialFabMenuComponentFactory = function createMaterialFabMenuComponentFactory() {
    return new (ComponentFactoryOfMaterialFabMenuComponentL()).new("material-fab-menu", C7 || CT.C7);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1 = function viewFactory_MaterialFabMenuComponent1(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponent1.new(parentView, parentIndex);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2 = function viewFactory_MaterialFabMenuComponent2(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponent2.new(parentView, parentIndex);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0 = function viewFactory_MaterialFabMenuComponentHost0() {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new();
  };
  material_fab_menu$46template.initReflector = function initReflector() {
    if (dart.test(material_fab_menu$46template._visited)) {
      return;
    }
    material_fab_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialFabMenuComponentL()), material_fab_menu$46template.createMaterialFabMenuComponentFactory());
    menu_item_groups$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_fab$46template.initReflector();
    material_icon$46template.initReflector();
    material_list_item$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    material_tooltip$46template.initReflector();
    track_layout_changes$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    menu$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(material_fab_menu$46template, {
    get MaterialFabMenuComponentNgFactory() {
      return material_fab_menu$46template._MaterialFabMenuComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C8;
  dart.defineLazy(material_fab_menu$46template, {
    /*material_fab_menu$46template.styles$MaterialFabMenuComponent*/get styles$MaterialFabMenuComponent() {
      return [material_fab_menu$46scss$46css$46shim.styles];
    },
    /*material_fab_menu$46template._MaterialFabMenuComponentNgFactory*/get _MaterialFabMenuComponentNgFactory() {
      return C8 || CT.C8;
    },
    /*material_fab_menu$46template.styles$MaterialFabMenuComponentHost*/get styles$MaterialFabMenuComponentHost() {
      return C6 || CT.C6;
    },
    /*material_fab_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu.template", {
    "package:angular_components/material_menu/material_fab_menu.template.dart": material_fab_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.template.dart"],"names":[],"mappings":"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","file":"material_fab_menu.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu$46template: material_fab_menu$46template
  };
}));

//# sourceMappingURL=material_fab_menu.template.unsound.ddc.js.map
