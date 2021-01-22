define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/focus/focus', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/material_menu/menu_popup.scss.css.shim', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/model/menu/menu', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/material_menu/menu_item_affix_list.template', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/observable/observable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular/meta.template', 'packages/angular_components/focus/focus_activable_item.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_menu/menu_item_groups.scss.css.shim', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template'], (function load__packages__angular_components__material_menu__material_menu_template(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_popup__material_popup$46template, packages__angular__src__bootstrap__modules, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__focus__focus, packages__angular_components__material_menu__material_menu, packages__angular_components__material_list__material_list$46template, packages__angular_components__material_list__material_list, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_menu__common__menu_root, packages__angular_components__utils__id_generator__id_generator, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_menu__menu_popup_wrapper$46template, packages__angular_components__material_menu__menu_root$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__material_menu__menu_popup$46scss$46css$46shim, packages__angular_components__focus__focus_activable_item, packages__angular_components__model__menu__menu, packages__angular__src__runtime__text_binding, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular__src__runtime__interpolate, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__model__a11y__active_item_directive$46template, packages__angular_components__model__a11y__active_item_directive, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__model__selection__selection_container, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__highlighted_text__highlighted_text$46template, packages__angular_components__highlighted_text__highlighted_text, packages__angular_components__material_menu__menu_item_affix_list$46template, packages__angular_components__material_menu__menu_item_affix_list, packages__observable__observable, packages__angular_components__model__menu__menu_item_affix, packages__angular__meta$46template, packages__angular_components__focus__focus_activable_item$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__action__delayed_action$46template, packages__angular_components__model__menu__selectable_menu$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_menu__menu_item_groups$46scss$46css$46shim, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const view = packages__angular__src__bootstrap__modules.src__core__linker__views__view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const material_menu = packages__angular_components__material_menu__material_menu.material_menu__material_menu;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const menu_popup_wrapper$46template = packages__angular_components__material_menu__menu_popup_wrapper$46template.material_menu__menu_popup_wrapper$46template;
  const menu_root$46template = packages__angular_components__material_menu__menu_root$46template.material_menu__menu_root$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const menu_popup$46scss$46css$46shim = packages__angular_components__material_menu__menu_popup$46scss$46css$46shim.material_menu__menu_popup$46scss$46css$46shim;
  const focus_activable_item = packages__angular_components__focus__focus_activable_item.focus__focus_activable_item;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const active_item_directive$46template = packages__angular_components__model__a11y__active_item_directive$46template.model__a11y__active_item_directive$46template;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const highlighted_text$46template = packages__angular_components__highlighted_text__highlighted_text$46template.highlighted_text__highlighted_text$46template;
  const highlighted_text = packages__angular_components__highlighted_text__highlighted_text.highlighted_text__highlighted_text;
  const menu_item_affix_list$46template = packages__angular_components__material_menu__menu_item_affix_list$46template.material_menu__menu_item_affix_list$46template;
  const menu_item_affix_list = packages__angular_components__material_menu__menu_item_affix_list.material_menu__menu_item_affix_list;
  const observable_list = packages__observable__observable.src__observable_list;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus_activable_item$46template = packages__angular_components__focus__focus_activable_item$46template.focus__focus_activable_item$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const delayed_action$46template = packages__angular_components__model__action__delayed_action$46template.model__action__delayed_action$46template;
  const selectable_menu$46template = packages__angular_components__model__menu__selectable_menu$46template.model__menu__selectable_menu$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const menu_item_groups$46scss$46css$46shim = packages__angular_components__material_menu__menu_item_groups$46scss$46css$46shim.material_menu__menu_item_groups$46scss$46css$46shim;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  var menu_popup$46template = Object.create(dart.library);
  var menu_item_groups$46template = Object.create(dart.library);
  var material_menu$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
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
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var _ViewMenuPopupComponent1L = () => (_ViewMenuPopupComponent1L = dart.constFn(dart.legacy(menu_popup$46template._ViewMenuPopupComponent1)))();
  var _ViewMenuPopupComponent1LToAutoFocusDirectiveL = () => (_ViewMenuPopupComponent1LToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [_ViewMenuPopupComponent1L()])))();
  var MenuItemGroupsComponentL = () => (MenuItemGroupsComponentL = dart.constFn(dart.legacy(menu_item_groups.MenuItemGroupsComponent)))();
  var _ViewMenuPopupComponent1LToMenuItemGroupsComponentL = () => (_ViewMenuPopupComponent1LToMenuItemGroupsComponentL = dart.constFn(dart.fnType(MenuItemGroupsComponentL(), [_ViewMenuPopupComponent1L()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var ViewMenuPopupComponent0L = () => (ViewMenuPopupComponent0L = dart.constFn(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMenuItemGroupsComponentL = () => (VoidToMenuItemGroupsComponentL = dart.constFn(dart.fnType(MenuItemGroupsComponentL(), [])))();
  var MenuRootL = () => (MenuRootL = dart.constFn(dart.legacy(menu_root.MenuRoot)))();
  var MenuPopupComponentL = () => (MenuPopupComponentL = dart.constFn(dart.legacy(menu_popup.MenuPopupComponent)))();
  var ComponentFactoryOfMenuPopupComponentL = () => (ComponentFactoryOfMenuPopupComponentL = dart.constFn(component_factory.ComponentFactory$(MenuPopupComponentL())))();
  var HostViewOfMenuPopupComponentL = () => (HostViewOfMenuPopupComponentL = dart.constFn(host_view.HostView$(MenuPopupComponentL())))();
  var HostViewLOfMenuPopupComponentL = () => (HostViewLOfMenuPopupComponentL = dart.constFn(dart.legacy(HostViewOfMenuPopupComponentL())))();
  var VoidToHostViewLOfMenuPopupComponentL = () => (VoidToHostViewLOfMenuPopupComponentL = dart.constFn(dart.fnType(HostViewLOfMenuPopupComponentL(), [])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var FocusableActivateItemL = () => (FocusableActivateItemL = dart.constFn(dart.legacy(focus_activable_item.FocusableActivateItem)))();
  var _ViewMenuItemGroupsComponent1L = () => (_ViewMenuItemGroupsComponent1L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent1)))();
  var _ViewMenuItemGroupsComponent4L = () => (_ViewMenuItemGroupsComponent4L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent4)))();
  var _ViewMenuItemGroupsComponent5L = () => (_ViewMenuItemGroupsComponent5L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent5)))();
  var _ViewMenuItemGroupsComponent6L = () => (_ViewMenuItemGroupsComponent6L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent6)))();
  var FocusActivableItemDirectiveL = () => (FocusActivableItemDirectiveL = dart.constFn(dart.legacy(focus_activable_item.FocusActivableItemDirective)))();
  var _ViewMenuItemGroupsComponent6LToFocusActivableItemDirectiveL = () => (_ViewMenuItemGroupsComponent6LToFocusActivableItemDirectiveL = dart.constFn(dart.fnType(FocusActivableItemDirectiveL(), [_ViewMenuItemGroupsComponent6L()])))();
  var ListOfFocusableActivateItemL = () => (ListOfFocusableActivateItemL = dart.constFn(core.List$(FocusableActivateItemL())))();
  var ListLOfFocusableActivateItemL = () => (ListLOfFocusableActivateItemL = dart.constFn(dart.legacy(ListOfFocusableActivateItemL())))();
  var _ViewMenuItemGroupsComponent5LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent5LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent5L()])))();
  var _ViewMenuItemGroupsComponent4LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent4LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent4L()])))();
  var _ViewMenuItemGroupsComponent1LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent1LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent1L()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var MenuItemGroupL = () => (MenuItemGroupL = dart.constFn(dart.legacy(menu.MenuItemGroup)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var MenuItemL = () => (MenuItemL = dart.constFn(dart.legacy(menu.MenuItem)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var ActiveItemDirectiveL = () => (ActiveItemDirectiveL = dart.constFn(dart.legacy(active_item_directive.ActiveItemDirective)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var VoidToActiveItemDirectiveL = () => (VoidToActiveItemDirectiveL = dart.constFn(dart.fnType(ActiveItemDirectiveL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidToMaterialSelectItemComponentL = () => (VoidToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ViewMenuItemGroupsComponent0L = () => (ViewMenuItemGroupsComponent0L = dart.constFn(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)))();
  var MenuItemAffixL = () => (MenuItemAffixL = dart.constFn(dart.legacy(menu_item_affix.MenuItemAffix)))();
  var ObservableListOfMenuItemAffixL = () => (ObservableListOfMenuItemAffixL = dart.constFn(observable_list.ObservableList$(MenuItemAffixL())))();
  var ObservableListLOfMenuItemAffixL = () => (ObservableListLOfMenuItemAffixL = dart.constFn(dart.legacy(ObservableListOfMenuItemAffixL())))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var _ViewMenuItemGroupsComponent16L = () => (_ViewMenuItemGroupsComponent16L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent16)))();
  var _ViewMenuItemGroupsComponent16LToAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent16LToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent16L()])))();
  var _ViewMenuItemGroupsComponent15L = () => (_ViewMenuItemGroupsComponent15L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent15)))();
  var MenuModelL = () => (MenuModelL = dart.constFn(dart.legacy(menu.MenuModel)))();
  var ComponentFactoryOfMenuItemGroupsComponentL = () => (ComponentFactoryOfMenuItemGroupsComponentL = dart.constFn(component_factory.ComponentFactory$(MenuItemGroupsComponentL())))();
  var HostViewOfMenuItemGroupsComponentL = () => (HostViewOfMenuItemGroupsComponentL = dart.constFn(host_view.HostView$(MenuItemGroupsComponentL())))();
  var HostViewLOfMenuItemGroupsComponentL = () => (HostViewLOfMenuItemGroupsComponentL = dart.constFn(dart.legacy(HostViewOfMenuItemGroupsComponentL())))();
  var VoidToHostViewLOfMenuItemGroupsComponentL = () => (VoidToHostViewLOfMenuItemGroupsComponentL = dart.constFn(dart.fnType(HostViewLOfMenuItemGroupsComponentL(), [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var _ViewMaterialMenuComponent3L = () => (_ViewMaterialMenuComponent3L = dart.constFn(dart.legacy(material_menu$46template._ViewMaterialMenuComponent3)))();
  var _ViewMaterialMenuComponent3LToMenuPopupComponentL = () => (_ViewMaterialMenuComponent3LToMenuPopupComponentL = dart.constFn(dart.fnType(MenuPopupComponentL(), [_ViewMaterialMenuComponent3L()])))();
  var ExpandActionL = () => (ExpandActionL = dart.constFn(dart.legacy(menu_popup_wrapper.ExpandAction)))();
  var ViewMaterialMenuComponent0L = () => (ViewMaterialMenuComponent0L = dart.constFn(dart.legacy(material_menu$46template.ViewMaterialMenuComponent0)))();
  var MaterialMenuComponentL = () => (MaterialMenuComponentL = dart.constFn(dart.legacy(material_menu.MaterialMenuComponent)))();
  var ComponentFactoryOfMaterialMenuComponentL = () => (ComponentFactoryOfMaterialMenuComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialMenuComponentL())))();
  var HostViewOfMaterialMenuComponentL = () => (HostViewOfMaterialMenuComponentL = dart.constFn(host_view.HostView$(MaterialMenuComponentL())))();
  var HostViewLOfMaterialMenuComponentL = () => (HostViewLOfMaterialMenuComponentL = dart.constFn(dart.legacy(HostViewOfMaterialMenuComponentL())))();
  var VoidToHostViewLOfMaterialMenuComponentL = () => (VoidToHostViewLOfMaterialMenuComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialMenuComponentL(), [])))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_menu/menu_item_groups.template.dart";
  var L0 = "package:angular_components/material_menu/menu_popup.template.dart";
  var L2 = "package:angular_components/material_menu/material_menu.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C3() {
      return C3 = dart.fn(menu_popup$46template.viewFactory_MenuPopupComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.fn(menu_popup$46template.ViewMenuPopupComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C6() {
      return C6 = dart.fn(menu_popup$46template.viewFactory_MenuPopupComponentHost0, VoidToHostViewLOfMenuPopupComponentL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfMenuPopupComponentL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "menu-popup"
      });
    },
    get C8() {
      return C8 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(menu_item_groups$46template.ViewMenuItemGroupsComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C10() {
      return C10 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C11() {
      return C11 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C12() {
      return C12 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C13() {
      return C13 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C14() {
      return C14 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C15() {
      return C15 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C16() {
      return C16 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C17() {
      return C17 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C18() {
      return C18 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C19() {
      return C19 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C20() {
      return C20 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C21() {
      return C21 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C22() {
      return C22 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C23() {
      return C23 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C24() {
      return C24 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C25() {
      return C25 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0, VoidToHostViewLOfMenuItemGroupsComponentL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ComponentFactoryOfMenuItemGroupsComponentL().prototype,
        [ComponentFactory__viewFactory]: C25 || CT.C25,
        [ComponentFactory_selector]: "menu-item-groups"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C28() {
      return C28 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C29() {
      return C29 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C30() {
      return C30 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C31() {
      return C31 = dart.fn(material_menu$46template.ViewMaterialMenuComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C32() {
      return C32 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponentHost0, VoidToHostViewLOfMaterialMenuComponentL());
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ComponentFactoryOfMaterialMenuComponentL().prototype,
        [ComponentFactory__viewFactory]: C32 || CT.C32,
        [ComponentFactory_selector]: "material-menu"
      });
    }
  }, false);
  var _query_AutoFocusDirective_1_0_isDirty = dart.privateName(menu_popup$46template, "_query_AutoFocusDirective_1_0_isDirty");
  var _viewQuery_MenuItemGroupsComponent_0_isDirty = dart.privateName(menu_popup$46template, "_viewQuery_MenuItemGroupsComponent_0_isDirty");
  var _compView_0 = dart.privateName(menu_popup$46template, "_compView_0");
  var _appEl_0 = dart.privateName(menu_popup$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8 = dart.privateName(menu_popup$46template, "_MaterialPopupComponent_0_8");
  var __PopupRef_0_10 = dart.privateName(menu_popup$46template, "__PopupRef_0_10");
  var __PopupHierarchy_0_12 = dart.privateName(menu_popup$46template, "__PopupHierarchy_0_12");
  var _compView_1 = dart.privateName(menu_popup$46template, "_compView_1");
  var _FocusTrapComponent_1_5 = dart.privateName(menu_popup$46template, "_FocusTrapComponent_1_5");
  var _appEl_2 = dart.privateName(menu_popup$46template, "_appEl_2");
  var _DeferredContentDirective_2_9 = dart.privateName(menu_popup$46template, "_DeferredContentDirective_2_9");
  var _expr_0 = dart.privateName(menu_popup$46template, "_expr_0");
  var _expr_2 = dart.privateName(menu_popup$46template, "_expr_2");
  var _expr_3 = dart.privateName(menu_popup$46template, "_expr_3");
  var _expr_4 = dart.privateName(menu_popup$46template, "_expr_4");
  var _el_0 = dart.privateName(menu_popup$46template, "_el_0");
  var _PopupRef_0_10 = dart.privateName(menu_popup$46template, "_PopupRef_0_10");
  var _PopupHierarchy_0_12 = dart.privateName(menu_popup$46template, "_PopupHierarchy_0_12");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var _handleEvent_0 = dart.privateName(menu_popup$46template, "_handleEvent_0");
  var _AutoFocusDirective_1_5 = dart.privateName(menu_popup$46template, "_AutoFocusDirective_1_5");
  var _MenuItemGroupsComponent_1_8 = dart.privateName(menu_popup$46template, "_MenuItemGroupsComponent_1_8");
  var C5;
  menu_popup$46template.ViewMenuPopupComponent0 = class ViewMenuPopupComponent0 extends component_view.ComponentView$(dart.legacy(menu_popup.MenuPopupComponent)) {
    get [_PopupRef_0_10]() {
      if (this[__PopupRef_0_10] == null) {
        this[__PopupRef_0_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_10];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_popup.dart" : null;
    }
    build() {
      let t0;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      parentRenderNode[$append](this[_el_0]);
      dom_helpers.setAttribute(this[_el_0], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0]));
      this[_compView_1] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      this.addShimC(_el_1);
      this[_FocusTrapComponent_1_5] = new focus_trap.FocusTrapComponent.new();
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C3 || CT.C3);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8], this);
      this[_compView_1].createAndProject(this[_FocusTrapComponent_1_5], JSArrayOfObjectL().of([(t0 = [this.projectedNodes[$_get](0)], (() => {
          t0[$addAll]([this[_appEl_2]]);
          return t0;
        })())]));
      this[_compView_0].createAndProject(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C4 || CT.C4, JSArrayOfHtmlElementL().of([_el_1]), C4 || CT.C4]));
      let subscription_0 = this[_MaterialPopupComponent_0_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_0)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_10];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_2 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "preferredPositions", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.popupSource;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "popupSource", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "isExpanded", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_AutoFocusDirective_1_0_isDirty])) {
          this[_FocusTrapComponent_1_5].autoFocus = queries.firstOrNull(AutoFocusDirectiveL(), this[_appEl_2].mapNestedViewsWithSingleResult(AutoFocusDirectiveL(), _ViewMenuPopupComponent1L(), dart.fn(nestedView => nestedView[_AutoFocusDirective_1_5], _ViewMenuPopupComponent1LToAutoFocusDirectiveL())));
          this[_query_AutoFocusDirective_1_0_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_MenuItemGroupsComponent_0_isDirty])) {
          _ctx.menuItemGroups = queries.firstOrNull(MenuItemGroupsComponentL(), this[_appEl_2].mapNestedViewsWithSingleResult(MenuItemGroupsComponentL(), _ViewMenuPopupComponent1L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MenuItemGroupsComponent_1_8], nestedView[_compView_1]);
            return nestedView[_MenuItemGroupsComponent_1_8];
          }, _ViewMenuPopupComponent1LToMenuItemGroupsComponentL())));
          this[_viewQuery_MenuItemGroupsComponent_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "popupClass", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_compView_0].updateChildClassNonHtml(this[_el_0], currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
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
      this[_compView_1].destroyInternalState();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_FocusTrapComponent_1_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.isExpanded = boolL().as($36event);
    }
    static _debugClearComponentStyles() {
      menu_popup$46template.ViewMenuPopupComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = menu_popup$46template.ViewMenuPopupComponent0._componentStyles;
      if (styles == null) {
        menu_popup$46template.ViewMenuPopupComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(menu_popup$46template.styles$MenuPopupComponent, menu_popup$46template.ViewMenuPopupComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C5 || CT.C5);
        }
      }
      this.componentStyles = styles;
    }
  };
  (menu_popup$46template.ViewMenuPopupComponent0.new = function(parentView, parentIndex) {
    this[_query_AutoFocusDirective_1_0_isDirty] = true;
    this[_viewQuery_MenuItemGroupsComponent_0_isDirty] = true;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_10] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_compView_1] = null;
    this[_FocusTrapComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    menu_popup$46template.ViewMenuPopupComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("menu-popup"));
  }).prototype = menu_popup$46template.ViewMenuPopupComponent0.prototype;
  dart.addTypeTests(menu_popup$46template.ViewMenuPopupComponent0);
  dart.addTypeCaches(menu_popup$46template.ViewMenuPopupComponent0);
  dart.setMethodSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getMethods(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getGetters(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_PopupRef_0_10]: dart.dynamic,
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(menu_popup$46template.ViewMenuPopupComponent0, L0);
  dart.setFieldSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getFields(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_query_AutoFocusDirective_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_viewQuery_MenuItemGroupsComponent_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupRef_0_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_compView_1]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_1_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_2_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(menu_popup$46template.ViewMenuPopupComponent0, {
    /*menu_popup$46template.ViewMenuPopupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialListComponent_0_5 = dart.privateName(menu_popup$46template, "_MaterialListComponent_0_5");
  var _MenuRootDirective_1_6 = dart.privateName(menu_popup$46template, "_MenuRootDirective_1_6");
  var _expr_1 = dart.privateName(menu_popup$46template, "_expr_1");
  var _expr_5 = dart.privateName(menu_popup$46template, "_expr_5");
  var _expr_6 = dart.privateName(menu_popup$46template, "_expr_6");
  menu_popup$46template._ViewMenuPopupComponent1 = class _ViewMenuPopupComponent1 extends embedded_view.EmbeddedView$(dart.legacy(menu_popup.MenuPopupComponent)) {
    build() {
      this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "item-group-list");
      dom_helpers.setAttribute(_el_0, "role", "none");
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5] = new material_list.MaterialListComponent.new();
      this[_compView_1] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      dom_helpers.setAttribute(_el_1, "autoFocus", "");
      dom_helpers.setAttribute(_el_1, "menu-root", "");
      dom_helpers.setAttribute(_el_1, "preventCloseOnPressLeft", "");
      this.addShimC(_el_1);
      this[_AutoFocusDirective_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(_el_1, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_PopupRef_0_10])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(_el_1, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_PopupRef_0_10]));
      this[_MenuRootDirective_1_6] = new menu_root.MenuRootDirective.new(optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuItemGroupsComponent_1_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_1_6], this[_compView_1], optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_1_6], this[_compView_1], optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentIndex)));
      this[_compView_1].create(this[_MenuItemGroupsComponent_1_8]);
      this[_compView_0].createAndProject(this[_MaterialListComponent_0_5], JSArrayOfObjectL().of([JSArrayOfHtmlElementL().of([_el_1])]));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(MenuRootL()) && 1 === nodeIndex) {
        return this[_MenuRootDirective_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialListComponent_0_5].role = "none";
        changed = true;
      }
      let currVal_1 = _ctx.width;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "width", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MaterialListComponent_0_5].width = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_AutoFocusDirective_1_5].autoFocus = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_1_5].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_1_8].preventCloseOnPressLeft = true;
        changed = true;
      }
      let currVal_3 = _ctx.activateFirstItemOnExpand;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "activateFirstItemOnExpand", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MenuItemGroupsComponent_1_8].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activateLastItemOnExpand;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "activateLastItemOnExpand", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MenuItemGroupsComponent_1_8].activateLastItemOnInit = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "popupClass", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MenuItemGroupsComponent_1_8].popupClass = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.menu;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "menu", "package:angular_components/material_menu/menu_popup.html"))) {
        this[_MenuItemGroupsComponent_1_8].menu = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_1_8].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_1_8].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
      optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_viewQuery_MenuItemGroupsComponent_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_AutoFocusDirective_1_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_1_8].ngOnDestroy();
    }
  };
  (menu_popup$46template._ViewMenuPopupComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_compView_1] = null;
    this[_AutoFocusDirective_1_5] = null;
    this[_MenuRootDirective_1_6] = null;
    this[_MenuItemGroupsComponent_1_8] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    menu_popup$46template._ViewMenuPopupComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_popup$46template._ViewMenuPopupComponent1.prototype;
  dart.addTypeTests(menu_popup$46template._ViewMenuPopupComponent1);
  dart.addTypeCaches(menu_popup$46template._ViewMenuPopupComponent1);
  dart.setMethodSignature(menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getMethods(menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(menu_popup$46template._ViewMenuPopupComponent1, L0);
  dart.setFieldSignature(menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getFields(menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
    [_MaterialListComponent_0_5]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_AutoFocusDirective_1_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_MenuRootDirective_1_6]: dart.fieldType(dart.legacy(menu_root.MenuRootDirective)),
    [_MenuItemGroupsComponent_1_8]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  menu_popup$46template._ViewMenuPopupComponentHost0 = class _ViewMenuPopupComponentHost0 extends host_view.HostView$(dart.legacy(menu_popup.MenuPopupComponent)) {
    build() {
      this.componentView = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new menu_popup.MenuPopupComponent.new(_el_0);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
  };
  (menu_popup$46template._ViewMenuPopupComponentHost0.new = function() {
    menu_popup$46template._ViewMenuPopupComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = menu_popup$46template._ViewMenuPopupComponentHost0.prototype;
  dart.addTypeTests(menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.addTypeCaches(menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.setMethodSignature(menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getMethods(menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_popup$46template._ViewMenuPopupComponentHost0, L0);
  var C6;
  menu_popup$46template.createMenuPopupComponentFactory = function createMenuPopupComponentFactory() {
    return new (ComponentFactoryOfMenuPopupComponentL()).new("menu-popup", C6 || CT.C6);
  };
  menu_popup$46template.viewFactory_MenuPopupComponent1 = function viewFactory_MenuPopupComponent1(parentView, parentIndex) {
    return new menu_popup$46template._ViewMenuPopupComponent1.new(parentView, parentIndex);
  };
  menu_popup$46template.viewFactory_MenuPopupComponentHost0 = function viewFactory_MenuPopupComponentHost0() {
    return new menu_popup$46template._ViewMenuPopupComponentHost0.new();
  };
  menu_popup$46template.initReflector = function initReflector() {
    if (dart.test(menu_popup$46template._visited)) {
      return;
    }
    menu_popup$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MenuPopupComponentL()), menu_popup$46template.createMenuPopupComponentFactory());
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    popup$46template.initReflector();
    material_list$46template.initReflector();
    menu_item_groups$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    focusable_mixin$46template.initReflector();
    menu$46template.initReflector();
    css$46template.initReflector();
  };
  dart.copyProperties(menu_popup$46template, {
    get MenuPopupComponentNgFactory() {
      return menu_popup$46template._MenuPopupComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C7;
  dart.defineLazy(menu_popup$46template, {
    /*menu_popup$46template.styles$MenuPopupComponent*/get styles$MenuPopupComponent() {
      return [menu_popup$46scss$46css$46shim.styles];
    },
    /*menu_popup$46template._MenuPopupComponentNgFactory*/get _MenuPopupComponentNgFactory() {
      return C7 || CT.C7;
    },
    /*menu_popup$46template.styles$MenuPopupComponentHost*/get styles$MenuPopupComponentHost() {
      return C4 || CT.C4;
    },
    /*menu_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _viewQuery_FocusableActivateItem_0_isDirty = dart.privateName(menu_item_groups$46template, "_viewQuery_FocusableActivateItem_0_isDirty");
  var _appEl_1 = dart.privateName(menu_item_groups$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(menu_item_groups$46template, "_NgFor_1_9");
  var _expr_0$ = dart.privateName(menu_item_groups$46template, "_expr_0");
  var _expr_1$ = dart.privateName(menu_item_groups$46template, "_expr_1");
  var _expr_2$ = dart.privateName(menu_item_groups$46template, "_expr_2");
  var C8;
  var _appEl_4 = dart.privateName(menu_item_groups$46template, "_appEl_4");
  var _FocusActivableItemDirective_1_10 = dart.privateName(menu_item_groups$46template, "_FocusActivableItemDirective_1_10");
  var C9;
  menu_item_groups$46template.ViewMenuItemGroupsComponent0 = class ViewMenuItemGroupsComponent0 extends component_view.ComponentView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_groups.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C8 || CT.C8);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      parentRenderNode[$addEventListener]("mouseover", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'onMouseOver')));
      parentRenderNode[$addEventListener]("mouseout", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'onMouseOut')));
      parentRenderNode[$addEventListener]("mousemove", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'onMouseMove')));
      parentRenderNode[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeydown')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler1(EventL(), FocusEventL(), dart.bind(_ctx, 'onFocus')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.menu.itemGroups;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "menu.itemGroups", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_FocusableActivateItem_0_isDirty])) {
          _ctx.focusableItems = this[_appEl_1].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent1L(), dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent4L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent5L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViewsWithSingleResult(FocusableActivateItemL(), _ViewMenuItemGroupsComponent6L(), dart.fn(nestedView => nestedView[_FocusActivableItemDirective_1_10], _ViewMenuItemGroupsComponent6LToFocusActivableItemDirectiveL())), _ViewMenuItemGroupsComponent5LToListLOfFocusableActivateItemL())), _ViewMenuItemGroupsComponent4LToListLOfFocusableActivateItemL())), _ViewMenuItemGroupsComponent1LToListLOfFocusableActivateItemL()));
          this[_viewQuery_FocusableActivateItem_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.isMouseDriven;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mouse-driven", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.isKeyboardDriven;
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "keyboard-driven", currVal_2);
        this[_expr_2$] = currVal_2;
      }
    }
    static _debugClearComponentStyles() {
      menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles;
      if (styles == null) {
        menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(menu_item_groups$46template.styles$MenuItemGroupsComponent, menu_item_groups$46template.ViewMenuItemGroupsComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C9 || CT.C9);
        }
      }
      this.componentStyles = styles;
    }
  };
  (menu_item_groups$46template.ViewMenuItemGroupsComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_FocusableActivateItem_0_isDirty] = true;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("menu-item-groups"));
  }).prototype = menu_item_groups$46template.ViewMenuItemGroupsComponent0.prototype;
  dart.addTypeTests(menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.addTypeCaches(menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.setMethodSignature(menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template.ViewMenuItemGroupsComponent0, L1);
  dart.setFieldSignature(menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getFields(menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    [_viewQuery_FocusableActivateItem_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(menu_item_groups$46template.ViewMenuItemGroupsComponent0, {
    /*menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _appEl_2$ = dart.privateName(menu_item_groups$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(menu_item_groups$46template, "_NgIf_2_9");
  var _NgIf_4_9 = dart.privateName(menu_item_groups$46template, "_NgIf_4_9");
  var _el_0$ = dart.privateName(menu_item_groups$46template, "_el_0");
  var C10;
  var C11;
  menu_item_groups$46template._ViewMenuItemGroupsComponent1 = class _ViewMenuItemGroupsComponent1 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$], "group");
      dom_helpers.setAttribute(this[_el_0$], "group", "");
      dom_helpers.setAttribute(this[_el_0$], "role", "menu");
      this.addShimC(this[_el_0$]);
      let _text_1 = dom_helpers.appendText(this[_el_0$], "\n  ");
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_2$] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], C10 || CT.C10);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _text_3 = dom_helpers.appendText(this[_el_0$], "\n  ");
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C11 || CT.C11);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(this[_el_0$], "\n");
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), this.locals[$_get]("$implicit"));
      this[_NgIf_2_9].ngIf = local_group.hasLabel;
      this[_NgIf_4_9].ngIf = !dart.test(local_group.isCollapsible) || dart.test(local_group.isExpanded);
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = local_group.hasSeparator;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group.hasSeparator", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateClassBinding(this[_el_0$], "has-separator", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_group.hasLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group.hasLabel", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateClassBinding(this[_el_0$], "has-label", currVal_1);
        this[_expr_1$] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent1.new = function(parentView, parentIndex) {
    this[_appEl_2$] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent1.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent1, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    [_appEl_2$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _textBinding_4 = dart.privateName(menu_item_groups$46template, "_textBinding_4");
  var _ButtonDirective_0_5 = dart.privateName(menu_item_groups$46template, "_ButtonDirective_0_5");
  var _appEl_7 = dart.privateName(menu_item_groups$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(menu_item_groups$46template, "_NgIf_7_9");
  var C12;
  var _handleEvent_0$ = dart.privateName(menu_item_groups$46template, "_handleEvent_0");
  menu_item_groups$46template._ViewMenuItemGroupsComponent2 = class _ViewMenuItemGroupsComponent2 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0$], "buttonDecorator", "");
      this.updateChildClass(this[_el_0$], "group-header");
      this.addShimC(this[_el_0$]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$], null));
      let _text_1 = dom_helpers.appendText(this[_el_0$], "\n    ");
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0$]);
      this.updateChildClass(_el_2, "group-label");
      this.addShimC(_el_2);
      let _text_3 = dom_helpers.appendText(_el_2, "\n      ");
      _el_2[$append](this[_textBinding_4].element);
      let _text_5 = dom_helpers.appendText(_el_2, "\n    ");
      let _text_6 = dom_helpers.appendText(this[_el_0$], "\n    ");
      let _anchor_7 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C12 || CT.C12);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(this[_el_0$], "\n  ");
      this[_el_0$][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0$][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0$)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0$]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_2 = dart.test(local_group.isCollapsible) ? "button" : "none";
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "group.isCollapsible ? 'button' : 'none'", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_ButtonDirective_0_5].instance.role = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      this[_NgIf_7_9].ngIf = local_group.isCollapsible;
      this[_appEl_7].detectChangesInNestedViews();
      let currVal_0 = dart.test(local_group.isCollapsible) ? dart.toString(local_group.isExpanded) : null;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group.isCollapsible ? group.isExpanded.toString() : null", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_0$], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_group.isCollapsible;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group.isCollapsible", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateClassBinding(this[_el_0$], "is-collapsible", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$]);
      this[_textBinding_4].updateText(interpolate.interpolateString0(local_group.uiDisplayName));
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
    }
    [_handleEvent_0$]($36event) {
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.toggleExpansionIfCollapsible(local_group);
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_ButtonDirective_0_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent2.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent2, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_0$ = dart.privateName(menu_item_groups$46template, "_compView_0");
  var _MaterialIconComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MaterialIconComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent3 = class _ViewMenuItemGroupsComponent3 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(this[_el_0$], "expansion-icon");
      this.addShimC(HtmlElementL().as(this[_el_0$]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0$]));
      this[_compView_0$].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let changed = false;
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      changed = false;
      let currVal_1 = dart.test(local_group.isExpanded) ? "expand_less" : "expand_more";
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group.isExpanded ? 'expand_less' : 'expand_more'", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_0 = local_group.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group.isExpanded", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0$], "expanded", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent3.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent3, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var C13;
  menu_item_groups$46template._ViewMenuItemGroupsComponent4 = class _ViewMenuItemGroupsComponent4 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n    ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C13 || CT.C13);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.createText("\n  ");
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_text_0, this[_appEl_1], _text_2]), null);
    }
    detectChangesInternal() {
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent4.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent4, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  var _NgIf_1_9 = dart.privateName(menu_item_groups$46template, "_NgIf_1_9");
  var C14;
  menu_item_groups$46template._ViewMenuItemGroupsComponent5 = class _ViewMenuItemGroupsComponent5 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n      ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C14 || CT.C14);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.createText("\n    ");
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_text_0, this[_appEl_1], _text_2]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = this.locals[$_get]("$implicit");
      this[_NgIf_1_9].ngIf = _ctx.isItemVisible(MenuItemL().as(local_item));
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent5.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent5.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent5, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _compView_1$ = dart.privateName(menu_item_groups$46template, "_compView_1");
  var _ActiveItemDirective_1_8 = dart.privateName(menu_item_groups$46template, "_ActiveItemDirective_1_8");
  var _AutoFocusDirective_1_9 = dart.privateName(menu_item_groups$46template, "_AutoFocusDirective_1_9");
  var _MaterialTooltipDirective_1_11 = dart.privateName(menu_item_groups$46template, "_MaterialTooltipDirective_1_11");
  var _MaterialSelectItemComponent_1_12 = dart.privateName(menu_item_groups$46template, "_MaterialSelectItemComponent_1_12");
  var _NgClass_1_13 = dart.privateName(menu_item_groups$46template, "_NgClass_1_13");
  var _PopupSourceDirective_1_14 = dart.privateName(menu_item_groups$46template, "_PopupSourceDirective_1_14");
  var __TooltipController_1_19 = dart.privateName(menu_item_groups$46template, "__TooltipController_1_19");
  var _appEl_3 = dart.privateName(menu_item_groups$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(menu_item_groups$46template, "_NgIf_3_9");
  var _appEl_9 = dart.privateName(menu_item_groups$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(menu_item_groups$46template, "_NgIf_9_9");
  var _appEl_11 = dart.privateName(menu_item_groups$46template, "_appEl_11");
  var _NgIf_11_9 = dart.privateName(menu_item_groups$46template, "_NgIf_11_9");
  var _appEl_14 = dart.privateName(menu_item_groups$46template, "_appEl_14");
  var _NgIf_14_9 = dart.privateName(menu_item_groups$46template, "_NgIf_14_9");
  var _appEl_16 = dart.privateName(menu_item_groups$46template, "_appEl_16");
  var _NgIf_16_9 = dart.privateName(menu_item_groups$46template, "_NgIf_16_9");
  var _appEl_19 = dart.privateName(menu_item_groups$46template, "_appEl_19");
  var _NgIf_19_9 = dart.privateName(menu_item_groups$46template, "_NgIf_19_9");
  var _expr_3$ = dart.privateName(menu_item_groups$46template, "_expr_3");
  var _expr_4$ = dart.privateName(menu_item_groups$46template, "_expr_4");
  var _expr_5$ = dart.privateName(menu_item_groups$46template, "_expr_5");
  var _expr_6$ = dart.privateName(menu_item_groups$46template, "_expr_6");
  var _expr_7 = dart.privateName(menu_item_groups$46template, "_expr_7");
  var _expr_8 = dart.privateName(menu_item_groups$46template, "_expr_8");
  var _expr_9 = dart.privateName(menu_item_groups$46template, "_expr_9");
  var _expr_10 = dart.privateName(menu_item_groups$46template, "_expr_10");
  var _expr_11 = dart.privateName(menu_item_groups$46template, "_expr_11");
  var _expr_12 = dart.privateName(menu_item_groups$46template, "_expr_12");
  var _expr_13 = dart.privateName(menu_item_groups$46template, "_expr_13");
  var _expr_14 = dart.privateName(menu_item_groups$46template, "_expr_14");
  var _expr_15 = dart.privateName(menu_item_groups$46template, "_expr_15");
  var _expr_16 = dart.privateName(menu_item_groups$46template, "_expr_16");
  var _expr_17 = dart.privateName(menu_item_groups$46template, "_expr_17");
  var _expr_20 = dart.privateName(menu_item_groups$46template, "_expr_20");
  var _expr_21 = dart.privateName(menu_item_groups$46template, "_expr_21");
  var _expr_23 = dart.privateName(menu_item_groups$46template, "_expr_23");
  var _el_1 = dart.privateName(menu_item_groups$46template, "_el_1");
  var _TooltipController_1_19 = dart.privateName(menu_item_groups$46template, "_TooltipController_1_19");
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  menu_item_groups$46template._ViewMenuItemGroupsComponent6 = class _ViewMenuItemGroupsComponent6 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    get [_TooltipController_1_19]() {
      if (this[__TooltipController_1_19] == null) {
        this[__TooltipController_1_19] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.parentView.parentView.parentIndex)), DisposerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.parentView.parentView.parentIndex)), DisposerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.parentIndex)));
      }
      return this[__TooltipController_1_19];
    }
    build() {
      let _text_0 = dom_helpers.createText("\n        ");
      this[_compView_1$] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1$].rootElement;
      this.updateChildClassNonHtml(this[_el_1], interpolate.interpolateString2("", "menu-item", " ", "item", ""));
      dom_helpers.setAttribute(this[_el_1], "popupSource", "");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ActiveItemDirective_1_8] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentIndex))), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentIndex))));
      this[_AutoFocusDirective_1_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentIndex))), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentIndex)));
      this[_FocusActivableItemDirective_1_10] = new focus_activable_item.FocusActivableItemDirective.new(HtmlElementL().as(this[_el_1]));
      this[_MaterialTooltipDirective_1_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_appEl_1], this[_compView_1$], WindowL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_appEl_1], this[_compView_1$], WindowL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.parentIndex)), null, null);
      this[_MaterialSelectItemComponent_1_12] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentIndex)), this[_compView_1$], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentIndex)), this[_compView_1$], null);
      this[_NgClass_1_13] = new ng_class.NgClass.new(this[_el_1]);
      this[_PopupSourceDirective_1_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.parentView.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.parentView.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.parentView.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.parentView.parentIndex)), null);
      let _text_2 = dom_helpers.createText("\n          ");
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C15 || CT.C15);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = dom_helpers.createText("\n          ");
      let doc = html.document;
      let _el_5 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_5), "menu-item-label-section");
      this.addShimE(_el_5);
      let _text_6 = dom_helpers.appendText(_el_5, "\n            ");
      let _anchor_7 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 5, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C16 || CT.C16);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(_el_5, "\n            ");
      let _anchor_9 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_9] = new view_container.ViewContainer.new(9, 5, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C17 || CT.C17);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = dom_helpers.appendText(_el_5, "\n            ");
      let _anchor_11 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 5, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C18 || CT.C18);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _text_12 = dom_helpers.appendText(_el_5, "\n          ");
      let _text_13 = dom_helpers.createText("\n          ");
      let _anchor_14 = dom_helpers.createAnchor();
      this[_appEl_14] = new view_container.ViewContainer.new(14, 1, this, _anchor_14);
      let _TemplateRef_14_8 = new template_ref.TemplateRef.new(this[_appEl_14], C19 || CT.C19);
      this[_NgIf_14_9] = new ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _text_15 = dom_helpers.createText("\n          ");
      let _anchor_16 = dom_helpers.createAnchor();
      this[_appEl_16] = new view_container.ViewContainer.new(16, 1, this, _anchor_16);
      let _TemplateRef_16_8 = new template_ref.TemplateRef.new(this[_appEl_16], C20 || CT.C20);
      this[_NgIf_16_9] = new ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _text_17 = dom_helpers.createText("\n        ");
      this[_compView_1$].createAndProject(this[_MaterialSelectItemComponent_1_12], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_text_2, this[_appEl_3], _text_4, _el_5, _text_13, this[_appEl_14], _text_15, this[_appEl_16], _text_17])]));
      let _text_18 = dom_helpers.createText("\n        ");
      let _anchor_19 = dom_helpers.createAnchor();
      this[_appEl_19] = new view_container.ViewContainer.new(19, null, this, _anchor_19);
      let _TemplateRef_19_8 = new template_ref.TemplateRef.new(this[_appEl_19], C21 || CT.C21);
      this[_NgIf_19_9] = new ng_if.NgIf.new(this[_appEl_19], _TemplateRef_19_8);
      let _text_20 = dom_helpers.createText("\n      ");
      this[_el_1][$addEventListener]("mouseenter", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseEnter')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseLeave')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_12].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0$)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_text_0, this[_appEl_1], _text_18, this[_appEl_19], _text_20]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        if (token === dart.wrapType(FocusableActivateItemL())) {
          return this[_FocusActivableItemDirective_1_10];
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_1_12];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_1_19];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_i = optimizations.unsafeCast(intL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView.parentView.parentView).locals[$_get]("index"));
      let local_j = optimizations.unsafeCast(intL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView).locals[$_get]("index"));
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView).locals[$_get]("$implicit");
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_9 = _ctx.isItemActive(MenuItemL().as(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "isItemActive(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_ActiveItemDirective_1_8].instance.itemActive = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.hasAutoFocus(_ctx.activeModel == null ? null : _ctx.activeModel.id(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "hasAutoFocus(activeModel?.id(item))", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_AutoFocusDirective_1_9].autoFocus = currVal_10;
        this[_expr_10] = currVal_10;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_1_9].ngOnInit();
      }
      let currVal_11 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "activeModel?.id(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_FocusActivableItemDirective_1_10].key = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.tooltipPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "tooltipPositions", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialTooltipDirective_1_11].positions = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = dart.dload(local_item, 'tooltip');
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "item.tooltip", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialTooltipDirective_1_11].text = StringL().as(currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = dart.dload(local_item, 'showTooltip');
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "item.showTooltip", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialTooltipDirective_1_11].canShow = boolL().as(currVal_14);
        this[_expr_14] = currVal_14;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_1_11].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_1_12].useCheckMarks = true;
        changed = true;
        this[_MaterialSelectItemComponent_1_12].closeOnActivate = false;
        changed = true;
      }
      let currVal_15 = interpolate.interpolateString0(local_group.itemsRole);
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "{{group.itemsRole}}", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialSelectItemComponent_1_12].role = currVal_15;
        changed = true;
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(check_binding.checkBinding(this[_expr_16], currVal_16, "!item.enabled", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialSelectItemComponent_1_12].disabled = currVal_16;
        changed = true;
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = _ctx.getItemValue(MenuItemL().as(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_17], currVal_17, "getItemValue(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialSelectItemComponent_1_12].value = currVal_17;
        changed = true;
        this[_expr_17] = currVal_17;
      }
      let currVal_20 = _ctx.shouldSelectItemOnClick(MenuItemL().as(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_20], currVal_20, "shouldSelectItemOnClick(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialSelectItemComponent_1_12].selectOnActivate = currVal_20;
        changed = true;
        this[_expr_20] = currVal_20;
      }
      let currVal_21 = _ctx.getSelectionModel(local_group);
      if (dart.test(check_binding.checkBinding(this[_expr_21], currVal_21, "getSelectionModel(group)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialSelectItemComponent_1_12].selection = currVal_21;
        changed = true;
        this[_expr_21] = currVal_21;
      }
      if (changed) {
        this[_compView_1$].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_NgClass_1_13].initialClasses = "menu-item";
      }
      let currVal_23 = dart.dload(local_item, 'cssClasses');
      if (dart.test(check_binding.checkBinding(this[_expr_23], currVal_23, "item.cssClasses", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_NgClass_1_13].rawClass = currVal_23;
        this[_expr_23] = currVal_23;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_1_13].ngDoCheck();
      }
      this[_NgIf_3_9].ngIf = boolL().as(dart.dload(local_item, 'hasIcon'));
      this[_NgIf_7_9].ngIf = _ctx.hasHighlight;
      this[_NgIf_9_9].ngIf = !dart.test(_ctx.hasHighlight);
      this[_NgIf_11_9].ngIf = boolL().as(dart.dload(local_item, 'hasSecondaryLabel'));
      this[_NgIf_14_9].ngIf = boolL().as(dart.dload(dart.dload(local_item, 'itemSuffixes'), 'isNotEmpty'));
      this[_NgIf_16_9].ngIf = boolL().as(dart.dload(local_item, 'hasSubMenu'));
      this[_NgIf_19_9].ngIf = boolL().as(dart.dload(local_item, 'hasSubMenu'));
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      let currVal_0 = local_i;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "i", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "data-group-index", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_j;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "j", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "data-item-index", (t0$ = currVal_1, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "activeModel?.id(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "id", currVal_2);
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSubMenuVisible(MenuItemL().as(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "isSubMenuVisible(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "is-menu-parent", currVal_3);
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = dart.dload(local_item, 'ariaLabel');
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "item.ariaLabel", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", (t0$0 = currVal_4, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "!item.enabled", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-disabled", (t0$1 = currVal_5, t0$1 === null ? null : t0$1[$toString]()));
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = dart.dload(local_item, 'hasSubMenu');
      if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "item.hasSubMenu", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-haspopup", (t0$2 = currVal_6, t0$2 == null ? null : dart.toString(t0$2)));
        this[_expr_6$] = currVal_6;
      }
      let currVal_7 = dart.dtest(dart.dload(local_item, 'hasSubMenu')) ? _ctx.isSubMenuVisible(MenuItemL().as(local_item)) : null;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "item.hasSubMenu ? isSubMenuVisible(item) : null", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-expanded", (t0$3 = currVal_7, t0$3 == null ? null : dart.toString(t0$3)));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.itemAriaChecked(MenuItemL().as(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "itemAriaChecked(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-checked", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_ActiveItemDirective_1_8].detectHostChanges(this[_compView_1$], this[_el_1]);
      this[_compView_1$].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_ActiveItemDirective_1_8].instance.ngAfterViewInit();
          this[_MaterialTooltipDirective_1_11].ngAfterViewInit();
          this[_PopupSourceDirective_1_14].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMenuItemGroupsComponent0L(), this.parentView.parentView.parentView.parentView)[_viewQuery_FocusableActivateItem_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_appEl_16].destroyNestedViews();
      this[_appEl_19].destroyNestedViews();
      this[_compView_1$].destroyInternalState();
      this[_ActiveItemDirective_1_8].instance.ngOnDestroy();
      this[_AutoFocusDirective_1_9].ngOnDestroy();
      this[_MaterialTooltipDirective_1_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_12].ngOnDestroy();
      this[_NgClass_1_13].ngOnDestroy();
      this[_PopupSourceDirective_1_14].ngOnDestroy();
    }
    [_handleEvent_0$]($36event) {
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView).locals[$_get]("$implicit");
      let local_group = optimizations.unsafeCast(MenuItemGroupL(), optimizations.unsafeCast(_ViewMenuItemGroupsComponent1L(), this.parentView.parentView.parentView).locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.handleSelectItemTrigger(MenuItemL().as(local_item), local_group, UIEventL().as($36event));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent6.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_appEl_1] = null;
    this[_ActiveItemDirective_1_8] = null;
    this[_AutoFocusDirective_1_9] = null;
    this[_FocusActivableItemDirective_1_10] = null;
    this[_MaterialTooltipDirective_1_11] = null;
    this[_MaterialSelectItemComponent_1_12] = null;
    this[_NgClass_1_13] = null;
    this[_PopupSourceDirective_1_14] = null;
    this[__TooltipController_1_19] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_appEl_19] = null;
    this[_NgIf_19_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_20] = null;
    this[_expr_21] = null;
    this[_expr_23] = null;
    this[_el_1] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent6.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getGetters(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_TooltipController_1_19]: dart.dynamic
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent6, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_ActiveItemDirective_1_8]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
    [_AutoFocusDirective_1_9]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_FocusActivableItemDirective_1_10]: dart.fieldType(dart.legacy(focus_activable_item.FocusActivableItemDirective)),
    [_MaterialTooltipDirective_1_11]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [_MaterialSelectItemComponent_1_12]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_NgClass_1_13]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_PopupSourceDirective_1_14]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [__TooltipController_1_19]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_11]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_11_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_14]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_14_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_16]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_16_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_19]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_19_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_20]: dart.fieldType(dart.dynamic),
    [_expr_21]: dart.fieldType(dart.dynamic),
    [_expr_23]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent7 = class _ViewMenuItemGroupsComponent7 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "material-list-item-primary");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = dart.dload(local_item, 'icon');
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "item.icon", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent7.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent7.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent7, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  var _compView_2 = dart.privateName(menu_item_groups$46template, "_compView_2");
  var _HighlightedTextComponent_2_5 = dart.privateName(menu_item_groups$46template, "_HighlightedTextComponent_2_5");
  var _appEl_5 = dart.privateName(menu_item_groups$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(menu_item_groups$46template, "_NgIf_5_9");
  var C22;
  menu_item_groups$46template._ViewMenuItemGroupsComponent8 = class _ViewMenuItemGroupsComponent8 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu-item-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      this[_compView_2] = new highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      _el_0[$append](_el_2);
      this.addShimC(_el_2);
      this[_HighlightedTextComponent_2_5] = new highlighted_text.HighlightedTextComponent.new();
      this[_compView_2].create(this[_HighlightedTextComponent_2_5]);
      let _text_4 = dom_helpers.appendText(_el_0, "\n              ");
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C22 || CT.C22);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.highlighted(StringL().as(dart.dload(local_item, 'uiDisplayName')));
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "highlighted(item.uiDisplayName)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_HighlightedTextComponent_2_5].segments = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_NgIf_5_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_2].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent8.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_HighlightedTextComponent_2_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent8.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent8, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(highlighted_text$46template.ViewHighlightedTextComponent0)),
    [_HighlightedTextComponent_2_5]: dart.fieldType(dart.legacy(highlighted_text.HighlightedTextComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_2 = dart.privateName(menu_item_groups$46template, "_textBinding_2");
  menu_item_groups$46template._ViewMenuItemGroupsComponent9 = class _ViewMenuItemGroupsComponent9 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      this.updateChildClass(HtmlElementL().as(_el_0), "label-annotation");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView.parentView).locals[$_get]("$implicit");
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'labelAnnotation'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent9.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent9.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent9, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var C23;
  menu_item_groups$46template._ViewMenuItemGroupsComponent10 = class _ViewMenuItemGroupsComponent10 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu-item-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n              ");
      let _anchor_4 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C23 || CT.C23);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      this[_NgIf_4_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_4].detectChangesInNestedViews();
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'uiDisplayName'))));
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent10.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent10.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent10, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent11 = class _ViewMenuItemGroupsComponent11 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      this.updateChildClass(HtmlElementL().as(_el_0), "label-annotation");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n              ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView.parentView).locals[$_get]("$implicit");
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'labelAnnotation'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent11.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent11.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent11, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent12 = class _ViewMenuItemGroupsComponent12 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu-item-secondary-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'secondaryLabel'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent12.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent12.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent12, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _MenuItemAffixListComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MenuItemAffixListComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent13 = class _ViewMenuItemGroupsComponent13 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "suffix-list");
      this.addShimC(_el_0);
      this[_MenuItemAffixListComponent_0_5] = new menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0$]);
      this[_compView_0$].create(this[_MenuItemAffixListComponent_0_5]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && dart.notNull(nodeIndex) <= 1) {
        return this[_MenuItemAffixListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "!item.enabled", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MenuItemAffixListComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_item, 'itemSuffixes');
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "item.itemSuffixes", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MenuItemAffixListComponent_0_5].items = ObservableListLOfMenuItemAffixL().as(currVal_1);
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent13.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent13.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent13, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0)),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent14 = class _ViewMenuItemGroupsComponent14 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "material-list-item-secondary submenu-icon");
      dom_helpers.setAttribute(_el_0, "icon", "arrow_drop_down");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_0_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent14.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent14.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent14);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent14);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent14, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent))
  }));
  var _query_AutoFocusDirective_2_0_isDirty = dart.privateName(menu_item_groups$46template, "_query_AutoFocusDirective_2_0_isDirty");
  var _appEl_0$ = dart.privateName(menu_item_groups$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8$ = dart.privateName(menu_item_groups$46template, "_MaterialPopupComponent_0_8");
  var __PopupRef_0_10$ = dart.privateName(menu_item_groups$46template, "__PopupRef_0_10");
  var __PopupHierarchy_0_12$ = dart.privateName(menu_item_groups$46template, "__PopupHierarchy_0_12");
  var _FocusTrapComponent_2_5 = dart.privateName(menu_item_groups$46template, "_FocusTrapComponent_2_5");
  var _DeferredContentDirective_4_9 = dart.privateName(menu_item_groups$46template, "_DeferredContentDirective_4_9");
  var _PopupRef_0_10$ = dart.privateName(menu_item_groups$46template, "_PopupRef_0_10");
  var _PopupHierarchy_0_12$ = dart.privateName(menu_item_groups$46template, "_PopupHierarchy_0_12");
  var C24;
  var _AutoFocusDirective_2_5 = dart.privateName(menu_item_groups$46template, "_AutoFocusDirective_2_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent15 = class _ViewMenuItemGroupsComponent15 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    get [_PopupRef_0_10$]() {
      if (this[__PopupRef_0_10$] == null) {
        this[__PopupRef_0_10$] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupRef_0_10$];
    }
    get [_PopupHierarchy_0_12$]() {
      if (this[__PopupHierarchy_0_12$] == null) {
        this[__PopupHierarchy_0_12$] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupHierarchy_0_12$];
    }
    build() {
      this[_compView_0$] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootElement;
      dom_helpers.setAttribute(this[_el_0$], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_0$]));
      this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_MaterialPopupComponent_0_8$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.parentView.parentView.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.parentView.parentView.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.parentView.parentView.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.parentView.parentView.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.parentView.parentView.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C0 || CT.C0, this.parentView.parentView.parentView.parentView.parentIndex)), boolL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C1 || CT.C1, this.parentView.parentView.parentView.parentView.parentIndex)), BoxL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C2 || CT.C2, this.parentView.parentView.parentView.parentView.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0$], this[_appEl_0$], new element_ref.ElementRef.new(this[_el_0$])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.parentView.parentView.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.parentView.parentView.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.parentView.parentView.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.parentView.parentView.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.parentView.parentView.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C0 || CT.C0, this.parentView.parentView.parentView.parentView.parentIndex)), boolL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C1 || CT.C1, this.parentView.parentView.parentView.parentView.parentIndex)), BoxL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C2 || CT.C2, this.parentView.parentView.parentView.parentView.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0$], this[_appEl_0$], new element_ref.ElementRef.new(this[_el_0$]));
      let _text_1 = dom_helpers.createText("\n          ");
      this[_compView_2] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      this.addShimC(_el_2);
      this[_FocusTrapComponent_2_5] = new focus_trap.FocusTrapComponent.new();
      let _text_3 = dom_helpers.createText("\n            ");
      let _anchor_4 = dom_helpers.createAnchor();
      this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C24 || CT.C24);
      this[_DeferredContentDirective_4_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_0_8$], this);
      let _text_5 = dom_helpers.createText("\n          ");
      this[_compView_2].createAndProject(this[_FocusTrapComponent_2_5], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_text_3, this[_appEl_4], _text_5])]));
      let _text_6 = dom_helpers.createText("\n        ");
      this[_compView_0$].createAndProject(this[_MaterialPopupComponent_0_8$], JSArrayOfObjectL().of([C4 || CT.C4, JSArrayOfNodeL().of([_text_1, _el_2, _text_6]), C4 || CT.C4]));
      let subscription_0 = this[_MaterialPopupComponent_0_8$].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_0$)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0$]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8$];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_10$];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_12$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_subMenuSource = optimizations.unsafeCast(_ViewMenuItemGroupsComponent6L(), this.parentView)[_PopupSourceDirective_1_14];
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_0_8$].autoDismiss = false;
        changed = true;
        this[_MaterialPopupComponent_0_8$].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_3 = _ctx.preferredSubMenuPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "preferredSubMenuPositions", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialPopupComponent_0_8$].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = local_subMenuSource;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "subMenuSource", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialPopupComponent_0_8$].source = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.isSubMenuVisible(MenuItemL().as(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "isSubMenuVisible(item)", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialPopupComponent_0_8$].visible = currVal_5;
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_4_9].preserveDimensions = true;
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_AutoFocusDirective_2_0_isDirty])) {
          this[_FocusTrapComponent_2_5].autoFocus = queries.firstOrNull(AutoFocusDirectiveL(), this[_appEl_4].mapNestedViewsWithSingleResult(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent16L(), dart.fn(nestedView => nestedView[_AutoFocusDirective_2_5], _ViewMenuItemGroupsComponent16LToAutoFocusDirectiveL())));
          this[_query_AutoFocusDirective_2_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "popupClass", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_compView_0$].updateChildClassNonHtml(this[_el_0$], currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_0_8$].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_compView_0$].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_DeferredContentDirective_4_9].ngOnDestroy();
      this[_FocusTrapComponent_2_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8$].ngOnDestroy();
    }
    [_handleEvent_0$]($36event) {
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView).locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.onSubMenuVisibilityChanged(MenuItemL().as(local_item), boolL().as($36event));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent15.new = function(parentView, parentIndex) {
    this[_query_AutoFocusDirective_2_0_isDirty] = true;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_MaterialPopupComponent_0_8$] = null;
    this[__PopupRef_0_10$] = null;
    this[__PopupHierarchy_0_12$] = null;
    this[_compView_2] = null;
    this[_FocusTrapComponent_2_5] = null;
    this[_appEl_4] = null;
    this[_DeferredContentDirective_4_9] = null;
    this[_expr_0$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent15.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent15);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent15);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getGetters(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_PopupRef_0_10$]: dart.dynamic,
    [_PopupHierarchy_0_12$]: dart.dynamic
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent15, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_query_AutoFocusDirective_2_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0$]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8$]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupRef_0_10$]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12$]: dart.fieldType(dart.dynamic),
    [_compView_2]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_2_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_4_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _MaterialListComponent_0_5$ = dart.privateName(menu_item_groups$46template, "_MaterialListComponent_0_5");
  var _MenuItemGroupsComponent_2_6 = dart.privateName(menu_item_groups$46template, "_MenuItemGroupsComponent_2_6");
  menu_item_groups$46template._ViewMenuItemGroupsComponent16 = class _ViewMenuItemGroupsComponent16 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "item-group-list");
      dom_helpers.setAttribute(_el_0, "role", "none");
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5$] = new material_list.MaterialListComponent.new();
      let _text_1 = dom_helpers.createText("\n              ");
      this[_compView_2] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      dom_helpers.setAttribute(_el_2, "autoFocus", "");
      this.addShimC(_el_2);
      this[_AutoFocusDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(_el_2, DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_PopupRef_0_10$])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(_el_2, DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_PopupRef_0_10$]));
      this[_MenuItemGroupsComponent_2_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(MenuRootL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_2], optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_MaterialPopupComponent_0_8$], IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(MenuRootL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_2], optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_MaterialPopupComponent_0_8$], IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)));
      this[_compView_2].create(this[_MenuItemGroupsComponent_2_6]);
      let _text_4 = dom_helpers.createText("\n            ");
      this[_compView_0$].createAndProject(this[_MaterialListComponent_0_5$], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_1, _el_2, _text_4])]));
      let subscription_0 = this[_MenuItemGroupsComponent_2_6].selected.listen(this.eventHandler1(MenuItemL(), MenuItemL(), dart.bind(_ctx, 'onSubMenuItemSelected')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_item = optimizations.unsafeCast(_ViewMenuItemGroupsComponent5L(), this.parentView.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialListComponent_0_5$].role = "none";
        changed = true;
      }
      let currVal_1 = dart.dload(dart.dload(local_item, 'subMenu'), 'width');
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "item.subMenu.width", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MaterialListComponent_0_5$].width = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_AutoFocusDirective_2_5].autoFocus = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = _ctx.isKeyboardOpenedSubmenu;
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "isKeyboardOpenedSubmenu", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MenuItemGroupsComponent_2_6].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "popupClass", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MenuItemGroupsComponent_2_6].popupClass = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = dart.dload(local_item, 'subMenu');
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "item.subMenu", "package:angular_components/material_menu/menu_item_groups.html"))) {
        this[_MenuItemGroupsComponent_2_6].menu = MenuModelL().as(currVal_5);
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_2_6].ngOnInit();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_2_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_query_AutoFocusDirective_2_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_2_6].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent16.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialListComponent_0_5$] = null;
    this[_compView_2] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_MenuItemGroupsComponent_2_6] = null;
    this[_expr_1$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent16.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent16);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent16);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent16, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
    [_MaterialListComponent_0_5$]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_AutoFocusDirective_2_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_MenuItemGroupsComponent_2_6]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponentHost0 = class _ViewMenuItemGroupsComponentHost0 extends host_view.HostView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this.componentView = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.injectorGet(dart.wrapType(MenuRootL()), this.parentIndex)), this.componentView, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.injectorGet(dart.wrapType(MenuRootL()), this.parentIndex)), this.componentView, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new = function() {
    menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, L1);
  var C25;
  menu_item_groups$46template.createMenuItemGroupsComponentFactory = function createMenuItemGroupsComponentFactory() {
    return new (ComponentFactoryOfMenuItemGroupsComponentL()).new("menu-item-groups", C25 || CT.C25);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1 = function viewFactory_MenuItemGroupsComponent1(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent1.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2 = function viewFactory_MenuItemGroupsComponent2(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent2.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3 = function viewFactory_MenuItemGroupsComponent3(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent3.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4 = function viewFactory_MenuItemGroupsComponent4(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent4.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5 = function viewFactory_MenuItemGroupsComponent5(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent5.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6 = function viewFactory_MenuItemGroupsComponent6(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent6.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7 = function viewFactory_MenuItemGroupsComponent7(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent7.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8 = function viewFactory_MenuItemGroupsComponent8(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent8.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9 = function viewFactory_MenuItemGroupsComponent9(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent9.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10 = function viewFactory_MenuItemGroupsComponent10(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent10.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11 = function viewFactory_MenuItemGroupsComponent11(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent11.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12 = function viewFactory_MenuItemGroupsComponent12(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent12.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13 = function viewFactory_MenuItemGroupsComponent13(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent13.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14 = function viewFactory_MenuItemGroupsComponent14(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent14.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15 = function viewFactory_MenuItemGroupsComponent15(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent15.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16 = function viewFactory_MenuItemGroupsComponent16(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent16.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0 = function viewFactory_MenuItemGroupsComponentHost0() {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new();
  };
  menu_item_groups$46template.initReflector = function initReflector$() {
    if (dart.test(menu_item_groups$46template._visited)) {
      return;
    }
    menu_item_groups$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MenuItemGroupsComponentL()), menu_item_groups$46template.createMenuItemGroupsComponentFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_activable_item$46template.initReflector();
    focus_trap$46template.initReflector();
    highlighted_text$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    material_list$46template.initReflector();
    material_menu$46template.initReflector();
    menu_item_affix_list$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    material_select_item$46template.initReflector();
    material_tooltip$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    active_item$46template.initReflector();
    active_item_directive$46template.initReflector();
    delayed_action$46template.initReflector();
    menu$46template.initReflector();
    selectable_menu$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    highlighted_text_model$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(menu_item_groups$46template, {
    get MenuItemGroupsComponentNgFactory() {
      return menu_item_groups$46template._MenuItemGroupsComponentNgFactory;
    }
  });
  var C26;
  dart.defineLazy(menu_item_groups$46template, {
    /*menu_item_groups$46template.styles$MenuItemGroupsComponent*/get styles$MenuItemGroupsComponent() {
      return [menu_item_groups$46scss$46css$46shim.styles];
    },
    /*menu_item_groups$46template._MenuItemGroupsComponentNgFactory*/get _MenuItemGroupsComponentNgFactory() {
      return C26 || CT.C26;
    },
    /*menu_item_groups$46template.styles$MenuItemGroupsComponentHost*/get styles$MenuItemGroupsComponentHost() {
      return C4 || CT.C4;
    },
    /*menu_item_groups$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _viewQuery_MenuPopupComponent_1_isDirty = dart.privateName(material_menu$46template, "_viewQuery_MenuPopupComponent_1_isDirty");
  var _compView_0$0 = dart.privateName(material_menu$46template, "_compView_0");
  var _appEl_0$0 = dart.privateName(material_menu$46template, "_appEl_0");
  var _AcxDarkTheme_0_8 = dart.privateName(material_menu$46template, "_AcxDarkTheme_0_8");
  var _MaterialButtonComponent_0_9 = dart.privateName(material_menu$46template, "_MaterialButtonComponent_0_9");
  var _MaterialTooltipDirective_0_10 = dart.privateName(material_menu$46template, "_MaterialTooltipDirective_0_10");
  var _PopupSourceDirective_0_11 = dart.privateName(material_menu$46template, "_PopupSourceDirective_0_11");
  var __TooltipController_0_14 = dart.privateName(material_menu$46template, "__TooltipController_0_14");
  var _appEl_1$ = dart.privateName(material_menu$46template, "_appEl_1");
  var _NgIf_1_9$ = dart.privateName(material_menu$46template, "_NgIf_1_9");
  var _appEl_2$0 = dart.privateName(material_menu$46template, "_appEl_2");
  var _NgIf_2_9$ = dart.privateName(material_menu$46template, "_NgIf_2_9");
  var _appEl_4$ = dart.privateName(material_menu$46template, "_appEl_4");
  var _NgIf_4_9$ = dart.privateName(material_menu$46template, "_NgIf_4_9");
  var _expr_0$0 = dart.privateName(material_menu$46template, "_expr_0");
  var _expr_1$0 = dart.privateName(material_menu$46template, "_expr_1");
  var _expr_2$0 = dart.privateName(material_menu$46template, "_expr_2");
  var _expr_3$0 = dart.privateName(material_menu$46template, "_expr_3");
  var _expr_4$0 = dart.privateName(material_menu$46template, "_expr_4");
  var _expr_5$0 = dart.privateName(material_menu$46template, "_expr_5");
  var _el_0$0 = dart.privateName(material_menu$46template, "_el_0");
  var _TooltipController_0_14 = dart.privateName(material_menu$46template, "_TooltipController_0_14");
  var C27;
  var C28;
  var C29;
  var C30;
  var _MenuPopupComponent_0_5 = dart.privateName(material_menu$46template, "_MenuPopupComponent_0_5");
  var C31;
  material_menu$46template.ViewMaterialMenuComponent0 = class ViewMaterialMenuComponent0 extends component_view.ComponentView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    get [_TooltipController_0_14]() {
      if (this[__TooltipController_0_14] == null) {
        this[__TooltipController_0_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex)));
      }
      return this[__TooltipController_0_14];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_menu.dart" : null;
    }
    build() {
      let t0;
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0$0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootElement;
      parentRenderNode[$append](this[_el_0$0]);
      this.updateChildClassNonHtml(this[_el_0$0], "trigger-button");
      dom_helpers.setAttribute(this[_el_0$0], "popupSource", "");
      this[_appEl_0$0] = new view_container.ViewContainer.new(0, null, this, this[_el_0$0]);
      this[_AcxDarkTheme_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C27 || CT.C27, this.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C27 || CT.C27, this.parentIndex)));
      this[_MaterialButtonComponent_0_9] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0$0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_8]), this[_compView_0$0], null);
      this[_MaterialTooltipDirective_0_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_appEl_0$0], HtmlElementL().as(this[_el_0$0]), this[_appEl_0$0], this[_compView_0$0], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_appEl_0$0], HtmlElementL().as(this[_el_0$0]), this[_appEl_0$0], this[_compView_0$0], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.parentIndex)), null, null);
      this[_PopupSourceDirective_0_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), HtmlElementL().as(this[_el_0$0]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), HtmlElementL().as(this[_el_0$0]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null);
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1$] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], C28 || CT.C28);
      this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], C29 || CT.C29);
      this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
      let _text_3 = dom_helpers.createText(" ");
      this[_compView_0$0].createAndProject(this[_MaterialButtonComponent_0_9], JSArrayOfObjectL().of([(t0 = [this[_appEl_1$], this[_appEl_2$0], _text_3], (() => {
          t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
          return t0;
        })())]));
      let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4$] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$], C30 || CT.C30);
      this[_NgIf_4_9$] = new ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      this[_el_0$0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_MaterialButtonComponent_0_9].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'handlePopupTriggerAction')));
      view.View.queryChangeDetectorRefs._set(this[_MaterialButtonComponent_0_9], this[_compView_0$0]);
      _ctx.button = this[_MaterialButtonComponent_0_9];
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_8];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_9];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_14];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "disabled", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MaterialButtonComponent_0_9].disabled = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(check_binding.checkBinding(this[_expr_3$0], currVal_3, "tabbable", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MaterialButtonComponent_0_9].tabbable = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      let currVal_4 = _ctx.tooltipText;
      if (dart.test(check_binding.checkBinding(this[_expr_4$0], currVal_4, "tooltipText", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MaterialTooltipDirective_0_10].text = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      let currVal_5 = _ctx.hasTooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_5$0], currVal_5, "hasTooltip", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MaterialTooltipDirective_0_10].canShow = currVal_5;
        this[_expr_5$0] = currVal_5;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_0_10].ngOnInit();
      }
      this[_NgIf_1_9$].ngIf = _ctx.hasIcon;
      this[_NgIf_2_9$].ngIf = _ctx.buttonText != null;
      this[_NgIf_4_9$].ngIf = _ctx.hasSubmenu;
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$0].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_MenuPopupComponent_1_isDirty])) {
          _ctx.menuPopup = queries.firstOrNull(MenuPopupComponentL(), this[_appEl_4$].mapNestedViewsWithSingleResult(MenuPopupComponentL(), _ViewMaterialMenuComponent3L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MenuPopupComponent_0_5], nestedView[_compView_0$0]);
            return nestedView[_MenuPopupComponent_0_5];
          }, _ViewMaterialMenuComponent3LToMenuPopupComponentL())));
          this[_viewQuery_MenuPopupComponent_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.ariaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "ariaLabel", "package:angular_components/material_menu/material_menu.html"))) {
        dom_helpers.updateAttribute(this[_el_0$0], "aria-label", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.hasIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "hasIcon", "package:angular_components/material_menu/material_menu.html"))) {
        dom_helpers.updateAttribute(this[_el_0$0], "icon", dart.test(currVal_1) ? "" : null);
        this[_expr_1$0] = currVal_1;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_0_10].ngAfterViewInit();
          this[_PopupSourceDirective_0_11].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$0].destroyNestedViews();
      this[_appEl_1$].destroyNestedViews();
      this[_appEl_2$0].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
      this[_compView_0$0].destroyInternalState();
      this[_MaterialTooltipDirective_0_10].ngOnDestroy();
      this[_PopupSourceDirective_0_11].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      material_menu$46template.ViewMaterialMenuComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_menu$46template.ViewMaterialMenuComponent0._componentStyles;
      if (styles == null) {
        material_menu$46template.ViewMaterialMenuComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(material_menu$46template.styles$MaterialMenuComponent, material_menu$46template.ViewMaterialMenuComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C31 || CT.C31);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_menu$46template.ViewMaterialMenuComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_MenuPopupComponent_1_isDirty] = true;
    this[_compView_0$0] = null;
    this[_appEl_0$0] = null;
    this[_AcxDarkTheme_0_8] = null;
    this[_MaterialButtonComponent_0_9] = null;
    this[_MaterialTooltipDirective_0_10] = null;
    this[_PopupSourceDirective_0_11] = null;
    this[__TooltipController_0_14] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_expr_5$0] = null;
    this[_el_0$0] = null;
    material_menu$46template.ViewMaterialMenuComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-menu"));
  }).prototype = material_menu$46template.ViewMaterialMenuComponent0.prototype;
  dart.addTypeTests(material_menu$46template.ViewMaterialMenuComponent0);
  dart.addTypeCaches(material_menu$46template.ViewMaterialMenuComponent0);
  dart.setMethodSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_TooltipController_0_14]: dart.dynamic
  }));
  dart.setLibraryUri(material_menu$46template.ViewMaterialMenuComponent0, L2);
  dart.setFieldSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_viewQuery_MenuPopupComponent_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0$0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_appEl_0$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_AcxDarkTheme_0_8]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_9]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_MaterialTooltipDirective_0_10]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [_PopupSourceDirective_0_11]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [__TooltipController_0_14]: dart.fieldType(dart.dynamic),
    [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic),
    [_expr_5$0]: dart.fieldType(dart.dynamic),
    [_el_0$0]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_menu$46template.ViewMaterialMenuComponent0, {
    /*material_menu$46template.ViewMaterialMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialIconComponent_0_5$ = dart.privateName(material_menu$46template, "_MaterialIconComponent_0_5");
  material_menu$46template._ViewMaterialMenuComponent1 = class _ViewMaterialMenuComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      this[_compView_0$0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootElement;
      this[_MaterialIconComponent_0_5$] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$0].create(this[_MaterialIconComponent_0_5$]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.menu.uiIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "menu.uiIcon", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MaterialIconComponent_0_5$].icon = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$0] = null;
    material_menu$46template._ViewMaterialMenuComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponent1.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent1);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponent1);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent1, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5$]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1 = dart.privateName(material_menu$46template, "_textBinding_1");
  material_menu$46template._ViewMaterialMenuComponent2 = class _ViewMaterialMenuComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.buttonText));
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_menu$46template._ViewMaterialMenuComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponent2.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent2);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponent2);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent2, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _PopupSourceDirective_0_6 = dart.privateName(material_menu$46template, "_PopupSourceDirective_0_6");
  var _handleEvent_0$0 = dart.privateName(material_menu$46template, "_handleEvent_0");
  material_menu$46template._ViewMaterialMenuComponent3 = class _ViewMaterialMenuComponent3 extends embedded_view.EmbeddedView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      this[_compView_0$0] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootElement;
      this[_MenuPopupComponent_0_5] = new menu_popup.MenuPopupComponent.new(_el_0);
      this[_PopupSourceDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null);
      this[_compView_0$0].createAndProject(this[_MenuPopupComponent_0_5], JSArrayOfObjectL().of([this.projectedNodes[$_get](1)]));
      let subscription_0 = this[_MenuPopupComponent_0_5].expandActionChange.listen(this.eventHandler1(ExpandActionL(), ExpandActionL(), dart.bind(this, _handleEvent_0$0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_toggle = optimizations.unsafeCast(ViewMaterialMenuComponent0L(), this.parentView)[_PopupSourceDirective_0_11];
      changed = false;
      let currVal_0 = _ctx.menu;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "menu", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MenuPopupComponent_0_5].menu = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "preferredPositions", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MenuPopupComponent_0_5].preferredPositions = currVal_1;
        changed = true;
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.expandAction;
      if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "expandAction", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MenuPopupComponent_0_5].expandAction = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.width;
      if (dart.test(check_binding.checkBinding(this[_expr_3$0], currVal_3, "width", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MenuPopupComponent_0_5].width = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      let currVal_4 = local_toggle;
      if (dart.test(check_binding.checkBinding(this[_expr_4$0], currVal_4, "toggle", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MenuPopupComponent_0_5].popupSource = currVal_4;
        changed = true;
        this[_expr_4$0] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_5$0], currVal_5, "popupClass", "package:angular_components/material_menu/material_menu.html"))) {
        this[_MenuPopupComponent_0_5].popupClass = currVal_5;
        changed = true;
        this[_expr_5$0] = currVal_5;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_0_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialMenuComponent0L(), this.parentView)[_viewQuery_MenuPopupComponent_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
    }
    [_handleEvent_0$0]($36event) {
      let _ctx = this.ctx;
      _ctx.expandAction = ExpandActionL().as($36event);
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MenuPopupComponent_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_expr_5$0] = null;
    material_menu$46template._ViewMaterialMenuComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponent3.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent3);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponent3);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent3, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)),
    [_MenuPopupComponent_0_5]: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent)),
    [_PopupSourceDirective_0_6]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic),
    [_expr_5$0]: dart.fieldType(dart.dynamic)
  }));
  material_menu$46template._ViewMaterialMenuComponentHost0 = class _ViewMaterialMenuComponentHost0 extends host_view.HostView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      this.componentView = new material_menu$46template.ViewMaterialMenuComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_menu.MaterialMenuComponent.new(_el_0);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_menu$46template._ViewMaterialMenuComponentHost0.new = function() {
    material_menu$46template._ViewMaterialMenuComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponentHost0, L2);
  var C32;
  material_menu$46template.createMaterialMenuComponentFactory = function createMaterialMenuComponentFactory() {
    return new (ComponentFactoryOfMaterialMenuComponentL()).new("material-menu", C32 || CT.C32);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent1 = function viewFactory_MaterialMenuComponent1(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent1.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent2 = function viewFactory_MaterialMenuComponent2(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent2.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent3 = function viewFactory_MaterialMenuComponent3(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent3.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponentHost0 = function viewFactory_MaterialMenuComponentHost0() {
    return new material_menu$46template._ViewMaterialMenuComponentHost0.new();
  };
  material_menu$46template.initReflector = function initReflector$0() {
    if (dart.test(material_menu$46template._visited)) {
      return;
    }
    material_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialMenuComponentL()), material_menu$46template.createMaterialMenuComponentFactory());
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_button$46template.initReflector();
    material_icon$46template.initReflector();
    menu_popup$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    material_popup$46template.initReflector();
    material_tooltip$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    menu$46template.initReflector();
    css$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_menu$46template, {
    get MaterialMenuComponentNgFactory() {
      return material_menu$46template._MaterialMenuComponentNgFactory;
    }
  });
  var C33;
  dart.defineLazy(material_menu$46template, {
    /*material_menu$46template.styles$MaterialMenuComponent*/get styles$MaterialMenuComponent() {
      return C4 || CT.C4;
    },
    /*material_menu$46template._MaterialMenuComponentNgFactory*/get _MaterialMenuComponentNgFactory() {
      return C33 || CT.C33;
    },
    /*material_menu$46template.styles$MaterialMenuComponentHost*/get styles$MaterialMenuComponentHost() {
      return C4 || CT.C4;
    },
    /*material_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.template", {
    "package:angular_components/material_menu/menu_popup.template.dart": menu_popup$46template,
    "package:angular_components/material_menu/menu_item_groups.template.dart": menu_item_groups$46template,
    "package:angular_components/material_menu/material_menu.template.dart": material_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup.template.dart","menu_item_groups.template.dart","material_menu.template.dart"],"names":[],"mappings":"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","file":"material_menu.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup$46template: menu_popup$46template,
    material_menu__menu_item_groups$46template: menu_item_groups$46template,
    material_menu__material_menu$46template: material_menu$46template
  };
}));

//# sourceMappingURL=material_menu.template.unsound.ddc.js.map
