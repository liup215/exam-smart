define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_select/material_select_dropdown_item.template', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/model/a11y/active_item', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular_components/material_select/shift_click_selection.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/mixins/selection_input_adapter.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_select/material_dropdown_select.scss.css.shim'], (function load__packages__angular_components__material_select__material_dropdown_select_template(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_select__dropdown_button$46template, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__dropdown_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__material_dropdown_select, packages__angular_components__material_list__material_list$46template, packages__angular_components__focus__focus, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_list__material_list, packages__angular_components__material_select__material_select_dropdown_item$46template, packages__angular_components__model__a11y__active_item_directive$46template, packages__angular_components__model__a11y__active_item_directive, packages__angular_components__material_select__material_select_dropdown_item, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_options, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__model__a11y__active_item, packages__angular__angular$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_select__activation_handler$46template, packages__angular_components__material_select__material_select_base$46template, packages__angular_components__material_select__shift_click_selection$46template, packages__angular_components__mixins__button_wrapper$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__mixins__selection_input_adapter$46template, packages__angular_components__mixins__track_layout_changes$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__template_support$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_select__material_dropdown_select$46scss$46css$46shim) {
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
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const view = packages__angular__src__bootstrap__modules.src__core__linker__views__view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const material_select_dropdown_item$46template = packages__angular_components__material_select__material_select_dropdown_item$46template.material_select__material_select_dropdown_item$46template;
  const active_item_directive$46template = packages__angular_components__model__a11y__active_item_directive$46template.model__a11y__active_item_directive$46template;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const material_select_dropdown_item = packages__angular_components__material_select__material_select_dropdown_item.material_select__material_select_dropdown_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const activation_handler$46template = packages__angular_components__material_select__activation_handler$46template.material_select__activation_handler$46template;
  const material_select_base$46template = packages__angular_components__material_select__material_select_base$46template.material_select__material_select_base$46template;
  const shift_click_selection$46template = packages__angular_components__material_select__shift_click_selection$46template.material_select__shift_click_selection$46template;
  const button_wrapper$46template = packages__angular_components__mixins__button_wrapper$46template.mixins__button_wrapper$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const selection_input_adapter$46template = packages__angular_components__mixins__selection_input_adapter$46template.mixins__selection_input_adapter$46template;
  const track_layout_changes$46template = packages__angular_components__mixins__track_layout_changes$46template.mixins__track_layout_changes$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const template_support$46template = packages__angular_components__model__ui__template_support$46template.model__ui__template_support$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_dropdown_select$46scss$46css$46shim = packages__angular_components__material_select__material_dropdown_select$46scss$46css$46shim.material_select__material_dropdown_select$46scss$46css$46shim;
  var material_dropdown_select$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var $length = dartx.length;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
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
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var ViewMaterialDropdownSelectComponent0L = () => (ViewMaterialDropdownSelectComponent0L = dart.constFn(dart.legacy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var intLAnddynamicToLObjectL = () => (intLAnddynamicToLObjectL = dart.constFn(dart.legacy(intLAnddynamicToObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ViewMaterialSelectDropdownItemComponent0OfStringL = () => (ViewMaterialSelectDropdownItemComponent0OfStringL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(StringL())))();
  var ActiveItemDirectiveL = () => (ActiveItemDirectiveL = dart.constFn(dart.legacy(active_item_directive.ActiveItemDirective)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var VoidToActiveItemDirectiveL = () => (VoidToActiveItemDirectiveL = dart.constFn(dart.fnType(ActiveItemDirectiveL(), [])))();
  var MaterialSelectDropdownItemComponentOfStringL = () => (MaterialSelectDropdownItemComponentOfStringL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(StringL())))();
  var MaterialSelectDropdownItemComponentLOfStringL = () => (MaterialSelectDropdownItemComponentLOfStringL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfStringL())))();
  var MaterialSelectDropdownItemComponentL = () => (MaterialSelectDropdownItemComponentL = dart.constFn(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMaterialSelectDropdownItemComponentLOfStringL = () => (VoidToMaterialSelectDropdownItemComponentLOfStringL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfStringL(), [])))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var _ViewMaterialDropdownSelectComponent4L = () => (_ViewMaterialDropdownSelectComponent4L = dart.constFn(dart.legacy(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ComponentFactoryL = () => (ComponentFactoryL = dart.constFn(dart.legacy(component_factory.ComponentFactory)))();
  var MaterialDropdownSelectComponentL = () => (MaterialDropdownSelectComponentL = dart.constFn(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var ActiveItemModelL = () => (ActiveItemModelL = dart.constFn(dart.legacy(active_item.ActiveItemModel)))();
  var VoidToHostViewLOfMaterialDropdownSelectComponentLOfTL = () => (VoidToHostViewLOfMaterialDropdownSelectComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialDropdownSelectComponentOfTL = () => (MaterialDropdownSelectComponentOfTL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(TL())))();
    var MaterialDropdownSelectComponentLOfTL = () => (MaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfTL())))();
    var HostViewOfMaterialDropdownSelectComponentLOfTL = () => (HostViewOfMaterialDropdownSelectComponentLOfTL = dart.constFn(host_view.HostView$(MaterialDropdownSelectComponentLOfTL())))();
    var HostViewLOfMaterialDropdownSelectComponentLOfTL = () => (HostViewLOfMaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(HostViewOfMaterialDropdownSelectComponentLOfTL())))();
    return [HostViewLOfMaterialDropdownSelectComponentLOfTL(), []];
  })))();
  var ComponentFactoryOfMaterialDropdownSelectComponentL = () => (ComponentFactoryOfMaterialDropdownSelectComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDropdownSelectComponentL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_dropdown_select.template.dart";
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
      return C3 = dart.fn(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C6() {
      return C6 = dart.fn(material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0, VoidToHostViewLOfMaterialDropdownSelectComponentLOfTL());
    },
    get C8() {
      return C8 = dart.const(dart.gbind(C6 || CT.C6, dart.dynamic));
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfMaterialDropdownSelectComponentL().prototype,
        [ComponentFactory__viewFactory]: C8 || CT.C8,
        [ComponentFactory_selector]: "material-dropdown-select"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(material_dropdown_select$46template, "_compView_0");
  var _DropdownButtonComponent_0_5 = dart.privateName(material_dropdown_select$46template, "_DropdownButtonComponent_0_5");
  var _PopupSourceDirective_0_7 = dart.privateName(material_dropdown_select$46template, "_PopupSourceDirective_0_7");
  var _compView_2 = dart.privateName(material_dropdown_select$46template, "_compView_2");
  var _appEl_2 = dart.privateName(material_dropdown_select$46template, "_appEl_2");
  var _MaterialPopupComponent_2_8 = dart.privateName(material_dropdown_select$46template, "_MaterialPopupComponent_2_8");
  var __PopupRef_2_10 = dart.privateName(material_dropdown_select$46template, "__PopupRef_2_10");
  var __PopupHierarchy_2_12 = dart.privateName(material_dropdown_select$46template, "__PopupHierarchy_2_12");
  var _appEl_4 = dart.privateName(material_dropdown_select$46template, "_appEl_4");
  var _DeferredContentDirective_4_9 = dart.privateName(material_dropdown_select$46template, "_DeferredContentDirective_4_9");
  var _expr_0 = dart.privateName(material_dropdown_select$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_dropdown_select$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_dropdown_select$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_dropdown_select$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_dropdown_select$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_dropdown_select$46template, "_expr_5");
  var _expr_7 = dart.privateName(material_dropdown_select$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_dropdown_select$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_dropdown_select$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_dropdown_select$46template, "_expr_10");
  var _expr_12 = dart.privateName(material_dropdown_select$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_dropdown_select$46template, "_expr_13");
  var _expr_15 = dart.privateName(material_dropdown_select$46template, "_expr_15");
  var _expr_17 = dart.privateName(material_dropdown_select$46template, "_expr_17");
  var _expr_18 = dart.privateName(material_dropdown_select$46template, "_expr_18");
  var _expr_19 = dart.privateName(material_dropdown_select$46template, "_expr_19");
  var _expr_20 = dart.privateName(material_dropdown_select$46template, "_expr_20");
  var _expr_21 = dart.privateName(material_dropdown_select$46template, "_expr_21");
  var _expr_22 = dart.privateName(material_dropdown_select$46template, "_expr_22");
  var _el_2 = dart.privateName(material_dropdown_select$46template, "_el_2");
  var _PopupRef_2_10 = dart.privateName(material_dropdown_select$46template, "_PopupRef_2_10");
  var _PopupHierarchy_2_12 = dart.privateName(material_dropdown_select$46template, "_PopupHierarchy_2_12");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var C2;
  var C3;
  const _is_ViewMaterialDropdownSelectComponent0_default = Symbol('_is_ViewMaterialDropdownSelectComponent0_default');
  material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialDropdownSelectComponent0 extends component_view.ComponentView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      get [_PopupRef_2_10]() {
        if (this[__PopupRef_2_10] == null) {
          this[__PopupRef_2_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
        }
        return this[__PopupRef_2_10];
      }
      get [_PopupHierarchy_2_12]() {
        if (this[__PopupHierarchy_2_12] == null) {
          this[__PopupHierarchy_2_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
        }
        return this[__PopupHierarchy_2_12];
      }
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_dropdown_select.dart" : null;
      }
      build() {
        let t0;
        let _ctx = this.ctx;
        let parentRenderNode = this.initViewRoot();
        this[_compView_0] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        parentRenderNode[$append](_el_0);
        dom_helpers.setAttribute(_el_0, "initPopupAriaAttributes", "false");
        dom_helpers.setAttribute(_el_0, "popupSource", "");
        dom_helpers.setAttribute(_el_0, "popupType", "listbox");
        this.addShimC(_el_0);
        this[_DropdownButtonComponent_0_5] = new dropdown_button.DropdownButtonComponent.new();
        this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), this[_DropdownButtonComponent_0_5], "false"), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), this[_DropdownButtonComponent_0_5], "false");
        let _text_1 = dom_helpers.createText(" ");
        this[_compView_0].createAndProject(this[_DropdownButtonComponent_0_5], JSArrayOfObjectL().of([(t0 = [_text_1], (() => {
            t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
            return t0;
          })())]));
        this[_compView_2] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
        this[_el_2] = this[_compView_2].rootElement;
        parentRenderNode[$append](this[_el_2]);
        dom_helpers.setAttribute(this[_el_2], "enforceSpaceConstraints", "");
        this.addShimC(HtmlElementL().as(this[_el_2]));
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, this[_el_2]);
        this[_MaterialPopupComponent_2_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(this[_el_2])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(this[_el_2]));
        let doc = html.document;
        let _el_3 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_3, "header", "");
        this.addShimC(HtmlElementL().as(_el_3));
        this.project(_el_3, 1);
        let _anchor_4 = dom_helpers.createAnchor();
        this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_DeferredContentDirective_4_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_2_8], this);
        let _el_5 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_5, "footer", "");
        this.addShimC(HtmlElementL().as(_el_5));
        this.project(_el_5, 5);
        this[_compView_2].createAndProject(this[_MaterialPopupComponent_2_8], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_3]), JSArrayOfViewContainerL().of([this[_appEl_4]]), JSArrayOfElementL().of([_el_5])]));
        _el_0[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_0[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        let subscription_0 = this[_DropdownButtonComponent_0_5].onFocus.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'onFocus')));
        let subscription_1 = this[_DropdownButtonComponent_0_5].onBlur.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'onBlur')));
        let subscription_2 = this[_DropdownButtonComponent_0_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'handleClick')));
        let subscription_3 = this[_MaterialPopupComponent_2_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(_ctx, 'onVisible')));
        _el_3[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_3[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        _el_3[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        _el_5[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_5[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        _el_5[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        view.View.queryChangeDetectorRefs._set(this[_DropdownButtonComponent_0_5], this[_compView_0]);
        _ctx.dropdownButton = this[_DropdownButtonComponent_0_5];
        this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) && dart.notNull(nodeIndex) <= 1) {
          return this[_DropdownButtonComponent_0_5];
        }
        if (2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
          if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
            return this[_MaterialPopupComponent_2_8];
          }
          if (token === dart.wrapType(PopupRefL())) {
            return this[_PopupRef_2_10];
          }
          if (token === dart.wrapType(PopupHierarchyL())) {
            return this[_PopupHierarchy_2_12];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_source = this[_PopupSourceDirective_0_7];
        changed = false;
        if (dart.test(firstCheck)) {
          this[_DropdownButtonComponent_0_5].popupType = "listbox";
          changed = true;
          if (_ctx.buttonAriaRole != null) {
            this[_DropdownButtonComponent_0_5].role = _ctx.buttonAriaRole;
            changed = true;
          }
        }
        let currVal_0 = _ctx.buttonText;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "buttonText", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].buttonText = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.buttonAriaLabel;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "buttonAriaLabel", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].buttonAriaLabel = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.disabled;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].disabled = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.icon;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "icon", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].icon = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.iconName;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "iconName", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].iconName = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.raised;
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "raised", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].raised = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        let currVal_7 = _ctx.error;
        if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "error", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].error = currVal_7;
          changed = true;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = dart.test(_ctx.visible) ? _ctx.listId : null;
        if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "visible ? listId : null", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].ariaOwns = currVal_8;
          changed = true;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.visible;
        if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "visible", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].ariaExpanded = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.buttonAriaDescribedBy;
        if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "buttonAriaDescribedBy", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].ariaDescribedBy = currVal_10;
          changed = true;
          this[_expr_10] = currVal_10;
        }
        let currVal_12 = _ctx.buttonAriaLabelledBy;
        if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "buttonAriaLabelledBy", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].ariaLabelledBy = currVal_12;
          changed = true;
          this[_expr_12] = currVal_12;
        }
        let currVal_13 = _ctx.showButtonBorder;
        if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "showButtonBorder", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DropdownButtonComponent_0_5].showButtonBorder = currVal_13;
          changed = true;
          this[_expr_13] = currVal_13;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
          this[_DropdownButtonComponent_0_5].ngOnInit();
        }
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_2_8].enforceSpaceConstraints = true;
          changed = true;
        }
        let currVal_15 = _ctx.autoDismiss;
        if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "autoDismiss", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].autoDismiss = currVal_15;
          changed = true;
          this[_expr_15] = currVal_15;
        }
        let currVal_17 = _ctx.popupMatchInputWidth;
        if (dart.test(check_binding.checkBinding(this[_expr_17], currVal_17, "popupMatchInputWidth", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].matchMinSourceWidth = currVal_17;
          changed = true;
          this[_expr_17] = currVal_17;
        }
        let currVal_18 = _ctx.preferredPositions;
        if (dart.test(check_binding.checkBinding(this[_expr_18], currVal_18, "preferredPositions", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].preferredPositions = currVal_18;
          changed = true;
          this[_expr_18] = currVal_18;
        }
        let currVal_19 = local_source;
        if (dart.test(check_binding.checkBinding(this[_expr_19], currVal_19, "source", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].source = currVal_19;
          changed = true;
          this[_expr_19] = currVal_19;
        }
        let currVal_20 = _ctx.trackLayoutChanges;
        if (dart.test(check_binding.checkBinding(this[_expr_20], currVal_20, "trackLayoutChanges", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].trackLayoutChanges = currVal_20;
          changed = true;
          this[_expr_20] = currVal_20;
        }
        let currVal_21 = _ctx.visible;
        if (dart.test(check_binding.checkBinding(this[_expr_21], currVal_21, "visible", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].visible = currVal_21;
          changed = true;
          this[_expr_21] = currVal_21;
        }
        let currVal_22 = _ctx.slide;
        if (dart.test(check_binding.checkBinding(this[_expr_22], currVal_22, "slide", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialPopupComponent_2_8].slide = currVal_22;
          changed = true;
          this[_expr_22] = currVal_22;
        }
        if (changed) {
          this[_compView_2].markAsCheckOnce();
        }
        if (dart.test(firstCheck)) {
          this[_DeferredContentDirective_4_9].preserveDimensions = true;
        }
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        if (dart.test(firstCheck)) {
          if (_ctx.popupClassName != null) {
            this[_compView_2].updateChildClassNonHtml(this[_el_2], _ctx.popupClassName);
          }
        }
        this[_compView_2].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        this[_compView_2].detectChanges();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(firstCheck)) {
            this[_PopupSourceDirective_0_7].ngAfterViewInit();
            this[_MaterialPopupComponent_2_8].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_appEl_2].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_compView_2].destroyInternalState();
        this[_PopupSourceDirective_0_7].ngOnDestroy();
        this[_DeferredContentDirective_4_9].ngOnDestroy();
        this[_MaterialPopupComponent_2_8].ngOnDestroy();
      }
      static _debugClearComponentStyles() {
        material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles = null;
      }
      initComponentStyles() {
        let styles = material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles;
        if (styles == null) {
          material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_dropdown_select$46template.styles$MaterialDropdownSelectComponent, material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._debugComponentUrl);
          if (dart.test(optimizations.isDevMode)) {
            style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
          }
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialDropdownSelectComponent0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_DropdownButtonComponent_0_5] = null;
      this[_PopupSourceDirective_0_7] = null;
      this[_compView_2] = null;
      this[_appEl_2] = null;
      this[_MaterialPopupComponent_2_8] = null;
      this[__PopupRef_2_10] = null;
      this[__PopupHierarchy_2_12] = null;
      this[_appEl_4] = null;
      this[_DeferredContentDirective_4_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_expr_12] = null;
      this[_expr_13] = null;
      this[_expr_15] = null;
      this[_expr_17] = null;
      this[_expr_18] = null;
      this[_expr_19] = null;
      this[_expr_20] = null;
      this[_expr_21] = null;
      this[_expr_22] = null;
      this[_el_2] = null;
      ViewMaterialDropdownSelectComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
      this.initComponentStyles();
      this.rootElement = HtmlElementL().as(html.document[$createElement]("material-dropdown-select"));
    }).prototype = ViewMaterialDropdownSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialDropdownSelectComponent0);
    ViewMaterialDropdownSelectComponent0.prototype[_is_ViewMaterialDropdownSelectComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialDropdownSelectComponent0);
    dart.setMethodSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialDropdownSelectComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialDropdownSelectComponent0.__proto__),
      [_PopupRef_2_10]: dart.dynamic,
      [_PopupHierarchy_2_12]: dart.dynamic
    }));
    dart.setLibraryUri(ViewMaterialDropdownSelectComponent0, L0);
    dart.setFieldSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialDropdownSelectComponent0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
      [_DropdownButtonComponent_0_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
      [_PopupSourceDirective_0_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
      [_compView_2]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_MaterialPopupComponent_2_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
      [__PopupRef_2_10]: dart.fieldType(dart.dynamic),
      [__PopupHierarchy_2_12]: dart.fieldType(dart.dynamic),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DeferredContentDirective_4_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.dynamic),
      [_expr_8]: dart.fieldType(dart.dynamic),
      [_expr_9]: dart.fieldType(dart.dynamic),
      [_expr_10]: dart.fieldType(dart.dynamic),
      [_expr_12]: dart.fieldType(dart.dynamic),
      [_expr_13]: dart.fieldType(dart.dynamic),
      [_expr_15]: dart.fieldType(dart.dynamic),
      [_expr_17]: dart.fieldType(dart.dynamic),
      [_expr_18]: dart.fieldType(dart.dynamic),
      [_expr_19]: dart.fieldType(dart.dynamic),
      [_expr_20]: dart.fieldType(dart.dynamic),
      [_expr_21]: dart.fieldType(dart.dynamic),
      [_expr_22]: dart.fieldType(dart.dynamic),
      [_el_2]: dart.fieldType(dart.legacy(html.Element))
    }));
    return ViewMaterialDropdownSelectComponent0;
  });
  material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0 = material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$();
  dart.defineLazy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, {
    /*material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, _is_ViewMaterialDropdownSelectComponent0_default);
  var _AutoFocusDirective_0_5 = dart.privateName(material_dropdown_select$46template, "_AutoFocusDirective_0_5");
  var _MaterialListComponent_0_6 = dart.privateName(material_dropdown_select$46template, "_MaterialListComponent_0_6");
  var _NgIf_2_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_2_9");
  var _el_0 = dart.privateName(material_dropdown_select$46template, "_el_0");
  var _handleEvent_0 = dart.privateName(material_dropdown_select$46template, "_handleEvent_0");
  const _is__ViewMaterialDropdownSelectComponent1_default = Symbol('_is__ViewMaterialDropdownSelectComponent1_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialDropdownSelectComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let t0;
        let _ctx = this.ctx;
        this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        this.updateChildClassNonHtml(this[_el_0], "options-list");
        dom_helpers.setAttribute(this[_el_0], "role", "listbox");
        this[_el_0].tabIndex = 0;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_AutoFocusDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView)[_PopupRef_2_10])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView)[_PopupRef_2_10]));
        this[_MaterialListComponent_0_6] = new material_list.MaterialListComponent.new();
        let _text_1 = dom_helpers.createText(" ");
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this[_compView_0].createAndProject(this[_MaterialListComponent_0_6], JSArrayOfObjectL().of([(t0 = [this.projectedNodes[$_get](2)], (() => {
            t0[$addAll]([_text_1]);
            t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](3)));
            t0[$addAll]([this[_appEl_2]]);
            t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](4)));
            return t0;
          })())]));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        this[_el_0][$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        this[_el_0][$addEventListener]("mouseout", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
        this.initRootNode(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let currVal_2 = _ctx.listAutoFocus;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "listAutoFocus", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
          this[_AutoFocusDirective_0_5].ngOnInit();
        }
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialListComponent_0_6].role = "listbox";
          changed = true;
        }
        let currVal_4 = _ctx.width;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "width", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialListComponent_0_6].width = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_2_9].ngIf = _ctx.options != null;
        this[_appEl_2].detectChangesInNestedViews();
        if (dart.test(firstCheck)) {
          if (_ctx.listId != null) {
            dom_helpers.updateAttribute(this[_el_0], "id", _ctx.listId);
          }
        }
        let currVal_1 = _ctx.ariaActiveDescendant;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "ariaActiveDescendant", "package:angular_components/material_select/material_dropdown_select.html"))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-activedescendant", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_2].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_AutoFocusDirective_0_5].ngOnDestroy();
      }
      [_handleEvent_0]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(null);
      }
    }
    (_ViewMaterialDropdownSelectComponent1.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_AutoFocusDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_4] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent1);
    _ViewMaterialDropdownSelectComponent1.prototype[_is__ViewMaterialDropdownSelectComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent1);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent1.__proto__),
      build: dart.fnType(dart.void, []),
      [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent1, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent1.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
      [_AutoFocusDirective_0_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
      [_MaterialListComponent_0_6]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialDropdownSelectComponent1;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, _is__ViewMaterialDropdownSelectComponent1_default);
  var _appEl_1 = dart.privateName(material_dropdown_select$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_1_9");
  var _NgFor_2_9 = dart.privateName(material_dropdown_select$46template, "_NgFor_2_9");
  const _is__ViewMaterialDropdownSelectComponent2_default = Symbol('_is__ViewMaterialDropdownSelectComponent2_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialDropdownSelectComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "options-wrapper");
        this.addShimC(HtmlElementL().as(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgFor_2_9] = new ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        this[_NgIf_1_9].ngIf = _ctx.showDeselectItem;
        if (dart.test(firstCheck)) {
          if (_ctx.trackByIndexFn != null) {
            this[_NgFor_2_9].ngForTrackBy = intLAnddynamicToLObjectL().as(_ctx.trackByIndexFn);
          }
        }
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "options.optionGroups", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_NgFor_2_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_2_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgFor_2_9] = null;
      this[_expr_0] = null;
      _ViewMaterialDropdownSelectComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent2);
    _ViewMaterialDropdownSelectComponent2.prototype[_is__ViewMaterialDropdownSelectComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent2);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent2, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_2_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent2;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, _is__ViewMaterialDropdownSelectComponent2_default);
  var _ActiveItemDirective_0_5 = dart.privateName(material_dropdown_select$46template, "_ActiveItemDirective_0_5");
  var _MaterialSelectDropdownItemComponent_0_6 = dart.privateName(material_dropdown_select$46template, "_MaterialSelectDropdownItemComponent_0_6");
  var C4;
  const _is__ViewMaterialDropdownSelectComponent3_default = Symbol('_is__ViewMaterialDropdownSelectComponent3_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$ = dart.generic(T => {
    class _ViewMaterialDropdownSelectComponent3 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfStringL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_PopupRef_2_10])), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_PopupRef_2_10])));
        this[_MaterialSelectDropdownItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfStringL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfStringL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfStringL())) : new (MaterialSelectDropdownItemComponentOfStringL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentIndex)), this[_compView_0]);
        this[_compView_0].createAndProject(this[_MaterialSelectDropdownItemComponent_0_6], JSArrayOfObjectL().of([C4 || CT.C4]));
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        let subscription_0 = this[_MaterialSelectDropdownItemComponent_0_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'deselectCurrentSelection')));
        this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_6];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_popup = optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
        let currVal_1 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(_ctx.deselectLabel));
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "popup.showPopup && activeModel.isActive(deselectLabel)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_1;
          this[_expr_1] = currVal_1;
        }
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialSelectDropdownItemComponent_0_6].tabbable = false;
          changed = true;
        }
        let currVal_3 = _ctx.deselectLabel;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "deselectLabel", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.isDeselectItemSelected;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "isDeselectItemSelected", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].selected = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.activeModel.id(_ctx.deselectLabel);
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "activeModel.id(deselectLabel)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].id = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        let currVal_0 = _ctx.options.optionGroups[$length] === 1;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "options.optionGroups.length == 1", "package:angular_components/material_select/material_dropdown_select.html"))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
        this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(firstCheck)) {
            this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
      }
      [_handleEvent_0]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(_ctx.deselectLabel);
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialDropdownSelectComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_MaterialSelectDropdownItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent3);
    _ViewMaterialDropdownSelectComponent3.prototype[_is__ViewMaterialDropdownSelectComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent3);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent3.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent3, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent3.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(core.String)))),
      [_ActiveItemDirective_0_5]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
      [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(core.String)))),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialDropdownSelectComponent3;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, _is__ViewMaterialDropdownSelectComponent3_default);
  const _is__ViewMaterialDropdownSelectComponent4_default = Symbol('_is__ViewMaterialDropdownSelectComponent4_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent4 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNode(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = dart.test(local_group.isNotEmpty) || dart.test(local_group.hasEmptyLabel);
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = dart.test(local_group.isEmpty) && !dart.test(local_group.hasEmptyLabel);
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "group.isEmpty && !group.hasEmptyLabel", "package:angular_components/material_select/material_dropdown_select.html"))) {
          dom_helpers.updateClassBinding(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent4.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent4);
    _ViewMaterialDropdownSelectComponent4.prototype[_is__ViewMaterialDropdownSelectComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent4);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent4, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent4.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialDropdownSelectComponent4;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, _is__ViewMaterialDropdownSelectComponent4_default);
  var _appEl_0 = dart.privateName(material_dropdown_select$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_0_9");
  var _appEl_3 = dart.privateName(material_dropdown_select$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_3_9");
  const _is__ViewMaterialDropdownSelectComponent5_default = Symbol('_is__ViewMaterialDropdownSelectComponent5_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent5 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = dom_helpers.createAnchor();
        this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0], this[_appEl_1], this[_appEl_2], this[_appEl_3]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialDropdownSelectComponent4L(), this.parentView).locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = dart.test(local_group.hasLabel) && !dart.test(_ctx.hasCustomLabelRenderer);
        this[_NgIf_1_9].ngIf = _ctx.hasCustomLabelRenderer;
        this[_NgIf_2_9].ngIf = local_group.isNotEmpty;
        this[_NgIf_3_9].ngIf = dart.test(local_group.isEmpty) && dart.test(local_group.hasEmptyLabel);
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent5.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      _ViewMaterialDropdownSelectComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent5);
    _ViewMaterialDropdownSelectComponent5.prototype[_is__ViewMaterialDropdownSelectComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent5);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent5.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent5, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent5.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialDropdownSelectComponent5;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, _is__ViewMaterialDropdownSelectComponent5_default);
  var _textBinding_1 = dart.privateName(material_dropdown_select$46template, "_textBinding_1");
  const _is__ViewMaterialDropdownSelectComponent6_default = Symbol('_is__ViewMaterialDropdownSelectComponent6_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent6 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialDropdownSelectComponent4L(), this.parentView.parentView).locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(interpolate.interpolateString0(local_group.uiDisplayName));
      }
    }
    (_ViewMaterialDropdownSelectComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialDropdownSelectComponent6.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent6.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent6);
    _ViewMaterialDropdownSelectComponent6.prototype[_is__ViewMaterialDropdownSelectComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent6);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent6.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent6, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent6.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialDropdownSelectComponent6;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, _is__ViewMaterialDropdownSelectComponent6_default);
  var _DynamicComponent_0_8 = dart.privateName(material_dropdown_select$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialDropdownSelectComponent7_default = Symbol('_is__ViewMaterialDropdownSelectComponent7_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent7 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.addShimC(_el_0);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_appEl_0]);
        this[_compView_0].create(this[_DynamicComponent_0_8]);
        this.initRootNode(this[_appEl_0]);
      }
      detectChangesInternal() {
        let t1, t0;
        let _ctx = this.ctx;
        let changed = false;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialDropdownSelectComponent4L(), this.parentView.parentView).locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = (t0 = _ctx, t1 = local_group, t0.labelFactory(t1));
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "labelFactory(group)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "group", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_DynamicComponent_0_8].value = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponent7.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialDropdownSelectComponent7.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent7.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent7);
    _ViewMaterialDropdownSelectComponent7.prototype[_is__ViewMaterialDropdownSelectComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent7);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent7.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent7, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent7.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent7;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, _is__ViewMaterialDropdownSelectComponent7_default);
  var _NgFor_0_9 = dart.privateName(material_dropdown_select$46template, "_NgFor_0_9");
  const _is__ViewMaterialDropdownSelectComponent8_default = Symbol('_is__ViewMaterialDropdownSelectComponent8_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent8 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.initRootNode(this[_appEl_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialDropdownSelectComponent4L(), this.parentView.parentView).locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "group", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent8.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0] = null;
      _ViewMaterialDropdownSelectComponent8.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent8.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent8);
    _ViewMaterialDropdownSelectComponent8.prototype[_is__ViewMaterialDropdownSelectComponent8_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent8);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent8.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent8, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent8.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent8;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, _is__ViewMaterialDropdownSelectComponent8_default);
  var _expr_6 = dart.privateName(material_dropdown_select$46template, "_expr_6");
  const _is__ViewMaterialDropdownSelectComponent9_default = Symbol('_is__ViewMaterialDropdownSelectComponent9_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectDropdownItemComponent0OfTL = () => (ViewMaterialSelectDropdownItemComponent0OfTL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(TL())))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var VoidToMaterialSelectDropdownItemComponentLOfTL = () => (VoidToMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfTL(), [])))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    var TLToComponentFactoryL = () => (TLToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [TL()])))();
    var TLToLComponentFactoryL = () => (TLToLComponentFactoryL = dart.constFn(dart.legacy(TLToComponentFactoryL())))();
    class _ViewMaterialDropdownSelectComponent9 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfTL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])));
        this[_MaterialSelectDropdownItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfTL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfTL())) : new (MaterialSelectDropdownItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0]);
        this[_compView_0].createAndProject(this[_MaterialSelectDropdownItemComponent_0_6], JSArrayOfObjectL().of([C4 || CT.C4]));
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        this.initRootNode(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_6];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_popup = optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
        let local_item = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        let currVal_0 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(local_item));
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "popup.showPopup && activeModel.isActive(item)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_0;
          this[_expr_0] = currVal_0;
        }
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialSelectDropdownItemComponent_0_6].tabbable = false;
          changed = true;
        }
        let currVal_1 = _ctx.isOptionDisabled(local_item);
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isOptionDisabled(item)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].disabled = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_3 = _ctx.isOptionHidden(local_item);
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isOptionHidden(item)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].isHidden = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = local_item;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "item", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "itemRenderer", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].itemRenderer = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = _ctx.componentRenderer;
        if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "componentRenderer", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].componentRenderer = currVal_6;
          changed = true;
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = TLToLComponentFactoryL().as(_ctx.factoryRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "factoryRenderer", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].factoryRenderer = currVal_7;
          changed = true;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.deselectOnActivate;
        if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "deselectOnActivate", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].deselectOnActivate = currVal_8;
          changed = true;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.selection;
        if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "selection", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].selection = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.activeModel.id(local_item);
        if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "activeModel.id(item)", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_6].id = currVal_10;
          changed = true;
          this[_expr_10] = currVal_10;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(firstCheck)) {
            this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
      }
      [_handleEvent_0]($36event) {
        let local_item = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        let _ctx = this.ctx;
        _ctx.activeModel.activate(local_item);
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialDropdownSelectComponent9.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_MaterialSelectDropdownItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent9.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent9.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent9);
    _ViewMaterialDropdownSelectComponent9.prototype[_is__ViewMaterialDropdownSelectComponent9_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent9);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent9.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent9, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent9.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(T)))),
      [_ActiveItemDirective_0_5]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
      [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.dynamic),
      [_expr_8]: dart.fieldType(dart.dynamic),
      [_expr_9]: dart.fieldType(dart.dynamic),
      [_expr_10]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialDropdownSelectComponent9;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, _is__ViewMaterialDropdownSelectComponent9_default);
  var _MaterialSelectDropdownItemComponent_0_5 = dart.privateName(material_dropdown_select$46template, "_MaterialSelectDropdownItemComponent_0_5");
  const _is__ViewMaterialDropdownSelectComponent10_default = Symbol('_is__ViewMaterialDropdownSelectComponent10_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent10 extends embedded_view.EmbeddedView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfStringL()).new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.addShimC(_el_0);
        this[_MaterialSelectDropdownItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfStringL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfStringL()).new(_el_0, null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfStringL())) : new (MaterialSelectDropdownItemComponentOfStringL()).new(_el_0, null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0]);
        this[_compView_0].createAndProject(this[_MaterialSelectDropdownItemComponent_0_5], JSArrayOfObjectL().of([C4 || CT.C4]));
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialDropdownSelectComponent4L(), this.parentView.parentView).locals[$_get]("$implicit"));
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialSelectDropdownItemComponent_0_5].disabled = true;
          changed = true;
          this[_MaterialSelectDropdownItemComponent_0_5].tabbable = false;
          changed = true;
        }
        let currVal_2 = local_group.emptyLabel;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "group.emptyLabel", "package:angular_components/material_select/material_dropdown_select.html"))) {
          this[_MaterialSelectDropdownItemComponent_0_5].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectDropdownItemComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponent10.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectDropdownItemComponent_0_5] = null;
      this[_expr_2] = null;
      _ViewMaterialDropdownSelectComponent10.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponent10.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent10);
    _ViewMaterialDropdownSelectComponent10.prototype[_is__ViewMaterialDropdownSelectComponent10_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent10);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent10, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent10.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent10, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent10, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent10.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(core.String)))),
      [_MaterialSelectDropdownItemComponent_0_5]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(core.String)))),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent10;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, _is__ViewMaterialDropdownSelectComponent10_default);
  var __ActiveItemModel_0_13 = dart.privateName(material_dropdown_select$46template, "__ActiveItemModel_0_13");
  var _ActiveItemModel_0_13 = dart.privateName(material_dropdown_select$46template, "_ActiveItemModel_0_13");
  var C5;
  const _is__ViewMaterialDropdownSelectComponentHost0_default = Symbol('_is__ViewMaterialDropdownSelectComponentHost0_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialDropdownSelectComponent0OfTL = () => (ViewMaterialDropdownSelectComponent0OfTL = dart.constFn(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(TL())))();
    var MaterialDropdownSelectComponentOfTL = () => (MaterialDropdownSelectComponentOfTL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(TL())))();
    var MaterialDropdownSelectComponentLOfTL = () => (MaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfTL())))();
    var VoidToMaterialDropdownSelectComponentLOfTL = () => (VoidToMaterialDropdownSelectComponentLOfTL = dart.constFn(dart.fnType(MaterialDropdownSelectComponentLOfTL(), [])))();
    class _ViewMaterialDropdownSelectComponentHost0 extends host_view.HostView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      get [_ActiveItemModel_0_13]() {
        if (this[__ActiveItemModel_0_13] == null) {
          this[__ActiveItemModel_0_13] = material_dropdown_select.fromDropdown(this.component);
        }
        return this[__ActiveItemModel_0_13];
      }
      build() {
        this.componentView = new (ViewMaterialDropdownSelectComponent0OfTL()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDropdownSelectComponentLOfTL(), dart.wrapType(MaterialDropdownSelectComponentL()), dart.fn(() => new (MaterialDropdownSelectComponentOfTL()).new(IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), boolL().as(this.injectorGetOptional(C5 || CT.C5, this.parentIndex)), null, null, this.componentView, _el_0), VoidToMaterialDropdownSelectComponentLOfTL())) : new (MaterialDropdownSelectComponentOfTL()).new(IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), boolL().as(this.injectorGetOptional(C5 || CT.C5, this.parentIndex)), null, null, this.componentView, _el_0);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(MaterialDropdownSelectComponentL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(SelectionContainerL()) || token === dart.wrapType(PopupSizeProviderL()) || token === dart.wrapType(ActivationHandlerL())) {
            return this.component;
          }
          if (token === dart.wrapType(ActiveItemModelL())) {
            return this[_ActiveItemModel_0_13];
          }
        }
        return notFoundResult;
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
    }
    (_ViewMaterialDropdownSelectComponentHost0.new = function() {
      this[__ActiveItemModel_0_13] = null;
      _ViewMaterialDropdownSelectComponentHost0.__proto__.new.call(this);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponentHost0);
    _ViewMaterialDropdownSelectComponentHost0.prototype[_is__ViewMaterialDropdownSelectComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponentHost0);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setGetterSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getGetters(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      [_ActiveItemModel_0_13]: dart.legacy(active_item.ActiveItemModel)
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      [__ActiveItemModel_0_13]: dart.fieldType(dart.legacy(active_item.ActiveItemModel))
    }));
    return _ViewMaterialDropdownSelectComponentHost0;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, _is__ViewMaterialDropdownSelectComponentHost0_default);
  var C6;
  material_dropdown_select$46template.createMaterialDropdownSelectComponentFactory = function createMaterialDropdownSelectComponentFactory(T) {
    return new (component_factory.ComponentFactory$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T))))).new("material-dropdown-select", dart.gbind(C6 || CT.C6, dart.legacy(T)));
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1 = function viewFactory_MaterialDropdownSelectComponent1(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2 = function viewFactory_MaterialDropdownSelectComponent2(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3 = function viewFactory_MaterialDropdownSelectComponent3(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4 = function viewFactory_MaterialDropdownSelectComponent4(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5 = function viewFactory_MaterialDropdownSelectComponent5(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6 = function viewFactory_MaterialDropdownSelectComponent6(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7 = function viewFactory_MaterialDropdownSelectComponent7(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8 = function viewFactory_MaterialDropdownSelectComponent8(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9 = function viewFactory_MaterialDropdownSelectComponent9(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10 = function viewFactory_MaterialDropdownSelectComponent10(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0 = function viewFactory_MaterialDropdownSelectComponentHost0(T) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$(dart.legacy(T))).new();
  };
  material_dropdown_select$46template.initReflector = function initReflector() {
    if (dart.test(material_dropdown_select$46template._visited)) {
      return;
    }
    material_dropdown_select$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDropdownSelectComponentL()), material_dropdown_select$46template.createMaterialDropdownSelectComponentFactory(dart.dynamic));
    angular$46template.initReflector();
    rtl_annotation$46template.initReflector();
    deferred_content$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    dynamic_component$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_list$46template.initReflector();
    material_popup$46template.initReflector();
    activation_handler$46template.initReflector();
    dropdown_button$46template.initReflector();
    material_select_base$46template.initReflector();
    material_select_dropdown_item$46template.initReflector();
    shift_click_selection$46template.initReflector();
    button_wrapper$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_input_adapter$46template.initReflector();
    track_layout_changes$46template.initReflector();
    active_item$46template.initReflector();
    active_item_directive$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    template_support$46template.initReflector();
    css$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_dropdown_select$46template, {
    get MaterialDropdownSelectComponentNgFactory() {
      return material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory;
    }
  });
  var C8;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C7;
  dart.defineLazy(material_dropdown_select$46template, {
    /*material_dropdown_select$46template.styles$MaterialDropdownSelectComponent*/get styles$MaterialDropdownSelectComponent() {
      return [material_dropdown_select$46scss$46css$46shim.styles];
    },
    /*material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory*/get _MaterialDropdownSelectComponentNgFactory() {
      return C7 || CT.C7;
    },
    /*material_dropdown_select$46template.styles$MaterialDropdownSelectComponentHost*/get styles$MaterialDropdownSelectComponentHost() {
      return C4 || CT.C4;
    },
    /*material_dropdown_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.template", {
    "package:angular_components/material_select/material_dropdown_select.template.dart": material_dropdown_select$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.template.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select$46template: material_dropdown_select$46template
  };
}));

//# sourceMappingURL=material_dropdown_select.template.unsound.ddc.js.map
