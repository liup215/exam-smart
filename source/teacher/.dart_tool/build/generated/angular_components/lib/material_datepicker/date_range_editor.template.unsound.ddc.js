define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_select/material_select.template', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/material_select/material_select', 'packages/quiver/src/time/clock', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/material_button/material_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/date/date', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/utils/showhide/showhide', 'packages/angular_components/material_datepicker/material_month_picker.template', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_menu/common/menu_root.template', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/showhide/showhide.template', 'packages/angular_components/material_datepicker/date_range_editor.scss.css.shim'], (function load__packages__angular_components__material_datepicker__date_range_editor_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__queries, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__material_datepicker__material_month_picker, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__material_select__material_select$46template, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__material_select__material_select, packages__quiver__src__time__clock, packages__angular_components__utils__angular__scroll_host__interface, packages__angular_components__utils__angular__scroll_host__angular_2, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_container, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__focus__focus, packages__angular_components__focus__focus_item, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular__src__runtime__interpolate, packages__angular__src__runtime__text_binding, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_datepicker__preset, packages__angular_components__material_popup__material_popup, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__material_button__material_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content_aware, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__common__menu_root, packages__angular_components__material_menu__material_menu, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__angular_components__material_datepicker__date_range_input$46template, packages__angular_components__material_datepicker__date_range_input, packages__angular_components__material_datepicker__calendar, packages__angular_components__model__date__date, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__material_datepicker__next_prev_buttons$46template, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular_components__material_datepicker__material_calendar_picker$46template, packages__angular_components__utils__showhide__showhide, packages__angular_components__material_datepicker__material_month_picker$46template, packages__angular_components__material_datepicker__date_range_editor_host, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__date_range_editor_host$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__preset$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_menu__common__menu_root$46template, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__date__date_formatter$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__menu__selectable_menu$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__utils__angular__scroll_host__angular_2$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__showhide__showhide$46template, packages__angular_components__material_datepicker__date_range_editor$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const view = packages__angular__src__bootstrap__modules.src__core__linker__views__view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const material_select$46template = packages__angular_components__material_select__material_select$46template.material_select__material_select$46template;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const angular_2 = packages__angular_components__utils__angular__scroll_host__angular_2.utils__angular__scroll_host__angular_2;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const preset = packages__angular_components__material_datepicker__preset.material_datepicker__preset;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const menu_item_groups$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_item_groups$46template;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const comparison_range_editor$46template = packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim.src__material_datepicker__comparison_range_editor$46template;
  const date_range_editor_model$46template = packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim.src__material_datepicker__date_range_editor_model$46template;
  const comparison_range_editor = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const date_range_input$46template = packages__angular_components__material_datepicker__date_range_input$46template.material_datepicker__date_range_input$46template;
  const date_range_input = packages__angular_components__material_datepicker__date_range_input.material_datepicker__date_range_input;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const date = packages__angular_components__model__date__date.model__date__date;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const next_prev_buttons$46template = packages__angular_components__material_datepicker__next_prev_buttons$46template.material_datepicker__next_prev_buttons$46template;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const material_calendar_picker$46template = packages__angular_components__material_datepicker__material_calendar_picker$46template.material_datepicker__material_calendar_picker$46template;
  const showhide = packages__angular_components__utils__showhide__showhide.utils__showhide__showhide;
  const material_month_picker$46template = packages__angular_components__material_datepicker__material_month_picker$46template.material_datepicker__material_month_picker$46template;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date_range_editor_host$46template = packages__angular_components__material_datepicker__date_range_editor_host$46template.material_datepicker__date_range_editor_host$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const preset$46template = packages__angular_components__material_datepicker__preset$46template.material_datepicker__preset$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const menu_root$46template = packages__angular_components__material_menu__common__menu_root$46template.material_menu__common__menu_root$46template;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const date_formatter$46template = packages__angular_components__model__date__date_formatter$46template.model__date__date_formatter$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const selectable_menu$46template = packages__angular_components__model__menu__selectable_menu$46template.model__menu__selectable_menu$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const angular_2$46template = packages__angular_components__utils__angular__scroll_host__angular_2$46template.utils__angular__scroll_host__angular_2$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const showhide$46template = packages__angular_components__utils__showhide__showhide$46template.utils__showhide__showhide$46template;
  const date_range_editor$46scss$46css$46shim = packages__angular_components__material_datepicker__date_range_editor$46scss$46css$46shim.material_datepicker__date_range_editor$46scss$46css$46shim;
  var date_range_editor$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  var $isNotEmpty = dartx.isNotEmpty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var MaterialCalendarPickerComponentL = () => (MaterialCalendarPickerComponentL = dart.constFn(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)))();
  var _ViewDateRangeEditorComponent13L = () => (_ViewDateRangeEditorComponent13L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent13)))();
  var _ViewDateRangeEditorComponent20L = () => (_ViewDateRangeEditorComponent20L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent20)))();
  var _ViewDateRangeEditorComponent20LToMaterialCalendarPickerComponentL = () => (_ViewDateRangeEditorComponent20LToMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(MaterialCalendarPickerComponentL(), [_ViewDateRangeEditorComponent20L()])))();
  var ListOfMaterialCalendarPickerComponentL = () => (ListOfMaterialCalendarPickerComponentL = dart.constFn(core.List$(MaterialCalendarPickerComponentL())))();
  var ListLOfMaterialCalendarPickerComponentL = () => (ListLOfMaterialCalendarPickerComponentL = dart.constFn(dart.legacy(ListOfMaterialCalendarPickerComponentL())))();
  var _ViewDateRangeEditorComponent13LToListLOfMaterialCalendarPickerComponentL = () => (_ViewDateRangeEditorComponent13LToListLOfMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(ListLOfMaterialCalendarPickerComponentL(), [_ViewDateRangeEditorComponent13L()])))();
  var MaterialMonthPickerComponentL = () => (MaterialMonthPickerComponentL = dart.constFn(dart.legacy(material_month_picker.MaterialMonthPickerComponent)))();
  var _ViewDateRangeEditorComponent21L = () => (_ViewDateRangeEditorComponent21L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent21)))();
  var _ViewDateRangeEditorComponent21LToMaterialMonthPickerComponentL = () => (_ViewDateRangeEditorComponent21LToMaterialMonthPickerComponentL = dart.constFn(dart.fnType(MaterialMonthPickerComponentL(), [_ViewDateRangeEditorComponent21L()])))();
  var ListOfMaterialMonthPickerComponentL = () => (ListOfMaterialMonthPickerComponentL = dart.constFn(core.List$(MaterialMonthPickerComponentL())))();
  var ListLOfMaterialMonthPickerComponentL = () => (ListLOfMaterialMonthPickerComponentL = dart.constFn(dart.legacy(ListOfMaterialMonthPickerComponentL())))();
  var _ViewDateRangeEditorComponent13LToListLOfMaterialMonthPickerComponentL = () => (_ViewDateRangeEditorComponent13LToListLOfMaterialMonthPickerComponentL = dart.constFn(dart.fnType(ListLOfMaterialMonthPickerComponentL(), [_ViewDateRangeEditorComponent13L()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FocusListDirectiveL = () => (FocusListDirectiveL = dart.constFn(dart.legacy(focus_list.FocusListDirective)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToFocusListDirectiveL = () => (VoidToFocusListDirectiveL = dart.constFn(dart.fnType(FocusListDirectiveL(), [])))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var ElementScrollHostL = () => (ElementScrollHostL = dart.constFn(dart.legacy(angular_2.ElementScrollHost)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToElementScrollHostL = () => (VoidToElementScrollHostL = dart.constFn(dart.fnType(ElementScrollHostL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var GestureListenerFactoryL = () => (GestureListenerFactoryL = dart.constFn(dart.legacy(gestures.GestureListenerFactory)))();
  var ScrollHostL = () => (ScrollHostL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHost)))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var _ViewDateRangeEditorComponent2L = () => (_ViewDateRangeEditorComponent2L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent2)))();
  var FocusItemDirectiveL = () => (FocusItemDirectiveL = dart.constFn(dart.legacy(focus_item.FocusItemDirective)))();
  var _ViewDateRangeEditorComponent2LToFocusItemDirectiveL = () => (_ViewDateRangeEditorComponent2LToFocusItemDirectiveL = dart.constFn(dart.fnType(FocusItemDirectiveL(), [_ViewDateRangeEditorComponent2L()])))();
  var _ViewDateRangeEditorComponent3L = () => (_ViewDateRangeEditorComponent3L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent3)))();
  var _ViewDateRangeEditorComponent3LToFocusItemDirectiveL = () => (_ViewDateRangeEditorComponent3LToFocusItemDirectiveL = dart.constFn(dart.fnType(FocusItemDirectiveL(), [_ViewDateRangeEditorComponent3L()])))();
  var _ViewDateRangeEditorComponent6L = () => (_ViewDateRangeEditorComponent6L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent6)))();
  var _ViewDateRangeEditorComponent7L = () => (_ViewDateRangeEditorComponent7L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent7)))();
  var _ViewDateRangeEditorComponent7LToFocusItemDirectiveL = () => (_ViewDateRangeEditorComponent7LToFocusItemDirectiveL = dart.constFn(dart.fnType(FocusItemDirectiveL(), [_ViewDateRangeEditorComponent7L()])))();
  var ListOfFocusableItemL = () => (ListOfFocusableItemL = dart.constFn(core.List$(FocusableItemL())))();
  var ListLOfFocusableItemL = () => (ListLOfFocusableItemL = dart.constFn(dart.legacy(ListOfFocusableItemL())))();
  var _ViewDateRangeEditorComponent6LToListLOfFocusableItemL = () => (_ViewDateRangeEditorComponent6LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewDateRangeEditorComponent6L()])))();
  var JSArrayOfListLOfFocusableItemL = () => (JSArrayOfListLOfFocusableItemL = dart.constFn(_interceptors.JSArray$(ListLOfFocusableItemL())))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var _ViewDateRangeEditorComponent2LToMaterialSelectItemComponentL = () => (_ViewDateRangeEditorComponent2LToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [_ViewDateRangeEditorComponent2L()])))();
  var _ViewDateRangeEditorComponent3LToMaterialSelectItemComponentL = () => (_ViewDateRangeEditorComponent3LToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [_ViewDateRangeEditorComponent3L()])))();
  var JSArrayOfSelectionItemL = () => (JSArrayOfSelectionItemL = dart.constFn(_interceptors.JSArray$(SelectionItemL())))();
  var _ViewDateRangeEditorComponent8L = () => (_ViewDateRangeEditorComponent8L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent8)))();
  var _ViewDateRangeEditorComponent9L = () => (_ViewDateRangeEditorComponent9L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent9)))();
  var _ViewDateRangeEditorComponent9LToMaterialSelectItemComponentL = () => (_ViewDateRangeEditorComponent9LToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [_ViewDateRangeEditorComponent9L()])))();
  var ListOfSelectionItemL = () => (ListOfSelectionItemL = dart.constFn(core.List$(SelectionItemL())))();
  var ListLOfSelectionItemL = () => (ListLOfSelectionItemL = dart.constFn(dart.legacy(ListOfSelectionItemL())))();
  var _ViewDateRangeEditorComponent8LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent8LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent8L()])))();
  var JSArrayOfListLOfSelectionItemL = () => (JSArrayOfListLOfSelectionItemL = dart.constFn(_interceptors.JSArray$(ListLOfSelectionItemL())))();
  var _ViewDateRangeEditorComponent7LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent7LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent7L()])))();
  var _ViewDateRangeEditorComponent6LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent6LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent6L()])))();
  var _ViewDateRangeEditorComponent11L = () => (_ViewDateRangeEditorComponent11L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent11)))();
  var _ViewDateRangeEditorComponent11LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent11LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent11L()])))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidToMaterialSelectItemComponentL = () => (VoidToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var _ViewDateRangeEditorComponent1L = () => (_ViewDateRangeEditorComponent1L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent1)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var DatepickerPresetL = () => (DatepickerPresetL = dart.constFn(dart.legacy(preset.DatepickerPreset)))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(di_tokens.OpaqueToken$(ListLOfRelativePositionL())))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var MenuRootDirectiveL = () => (MenuRootDirectiveL = dart.constFn(dart.legacy(menu_root.MenuRootDirective)))();
  var VoidToMenuRootDirectiveL = () => (VoidToMenuRootDirectiveL = dart.constFn(dart.fnType(MenuRootDirectiveL(), [])))();
  var MenuItemGroupsComponentL = () => (MenuItemGroupsComponentL = dart.constFn(dart.legacy(menu_item_groups.MenuItemGroupsComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMenuItemGroupsComponentL = () => (VoidToMenuItemGroupsComponentL = dart.constFn(dart.fnType(MenuItemGroupsComponentL(), [])))();
  var MenuRootL = () => (MenuRootL = dart.constFn(dart.legacy(menu_root.MenuRoot)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ComparisonRangeEditorComponentL = () => (ComparisonRangeEditorComponentL = dart.constFn(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)))();
  var VoidToComparisonRangeEditorComponentL = () => (VoidToComparisonRangeEditorComponentL = dart.constFn(dart.fnType(ComparisonRangeEditorComponentL(), [])))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date.DateRange)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var VoidToMaterialCalendarPickerComponentL = () => (VoidToMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(MaterialCalendarPickerComponentL(), [])))();
  var ShowHideDirectiveL = () => (ShowHideDirectiveL = dart.constFn(dart.legacy(showhide.ShowHideDirective)))();
  var VoidToShowHideDirectiveL = () => (VoidToShowHideDirectiveL = dart.constFn(dart.fnType(ShowHideDirectiveL(), [])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var ViewDateRangeEditorComponent0L = () => (ViewDateRangeEditorComponent0L = dart.constFn(dart.legacy(date_range_editor$46template.ViewDateRangeEditorComponent0)))();
  var VoidToMaterialMonthPickerComponentL = () => (VoidToMaterialMonthPickerComponentL = dart.constFn(dart.fnType(MaterialMonthPickerComponentL(), [])))();
  var DateRangeEditorComponentL = () => (DateRangeEditorComponentL = dart.constFn(dart.legacy(date_range_editor.DateRangeEditorComponent)))();
  var DateRangeEditorHostL = () => (DateRangeEditorHostL = dart.constFn(dart.legacy(date_range_editor_host.DateRangeEditorHost)))();
  var VoidToDateRangeEditorComponentL = () => (VoidToDateRangeEditorComponentL = dart.constFn(dart.fnType(DateRangeEditorComponentL(), [])))();
  var ComponentFactoryOfDateRangeEditorComponentL = () => (ComponentFactoryOfDateRangeEditorComponentL = dart.constFn(component_factory.ComponentFactory$(DateRangeEditorComponentL())))();
  var HostViewOfDateRangeEditorComponentL = () => (HostViewOfDateRangeEditorComponentL = dart.constFn(host_view.HostView$(DateRangeEditorComponentL())))();
  var HostViewLOfDateRangeEditorComponentL = () => (HostViewLOfDateRangeEditorComponentL = dart.constFn(dart.legacy(HostViewOfDateRangeEditorComponentL())))();
  var VoidToHostViewLOfDateRangeEditorComponentL = () => (VoidToHostViewLOfDateRangeEditorComponentL = dart.constFn(dart.fnType(HostViewLOfDateRangeEditorComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/date_range_editor.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent13, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(date_range_editor$46template.ViewDateRangeEditorComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C4 || CT.C4
      });
    },
    get C5() {
      return C5 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent10, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent11, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C10() {
      return C10 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent12, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C11() {
      return C11 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C12() {
      return C12 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C13() {
      return C13 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C14() {
      return C14 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C19() {
      return C19 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent9, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C20() {
      return C20 = dart.constList([], dart.dynamic);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: di_tokens.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C22() {
      return C22 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent14, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C23() {
      return C23 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent15, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C24() {
      return C24 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent16, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C25() {
      return C25 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent17, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C26() {
      return C26 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent18, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C27() {
      return C27 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent19, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C28() {
      return C28 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent20, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C29() {
      return C29 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent21, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C31() {
      return C31 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, VoidToHostViewLOfDateRangeEditorComponentL());
    },
    get C32() {
      return C32 = dart.const({
        __proto__: ComponentFactoryOfDateRangeEditorComponentL().prototype,
        [ComponentFactory__viewFactory]: C31 || CT.C31,
        [ComponentFactory_selector]: "date-range-editor"
      });
    }
  }, false);
  var _viewQuery_MaterialCalendarPickerComponent_0_isDirty = dart.privateName(date_range_editor$46template, "_viewQuery_MaterialCalendarPickerComponent_0_isDirty");
  var _viewQuery_MaterialMonthPickerComponent_1_isDirty = dart.privateName(date_range_editor$46template, "_viewQuery_MaterialMonthPickerComponent_1_isDirty");
  var _appEl_0 = dart.privateName(date_range_editor$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(date_range_editor$46template, "_NgIf_0_9");
  var _appEl_1 = dart.privateName(date_range_editor$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(date_range_editor$46template, "_NgIf_1_9");
  var _expr_0 = dart.privateName(date_range_editor$46template, "_expr_0");
  var C0;
  var C1;
  var _appEl_10 = dart.privateName(date_range_editor$46template, "_appEl_10");
  var _MaterialCalendarPickerComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialCalendarPickerComponent_0_5");
  var _compView_0 = dart.privateName(date_range_editor$46template, "_compView_0");
  var _appEl_11 = dart.privateName(date_range_editor$46template, "_appEl_11");
  var _MaterialMonthPickerComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialMonthPickerComponent_0_5");
  var C2;
  date_range_editor$46template.ViewDateRangeEditorComponent0 = class ViewDateRangeEditorComponent0 extends component_view.ComponentView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_editor.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C1 || CT.C1);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.shouldShowPredefinedList;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.supportsCustomRange) && dart.test(_ctx.shouldShowCustomDateRangeColumn);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_MaterialCalendarPickerComponent_0_isDirty])) {
          _ctx.calendarPicker = queries.firstOrNull(MaterialCalendarPickerComponentL(), this[_appEl_1].mapNestedViews(MaterialCalendarPickerComponentL(), _ViewDateRangeEditorComponent13L(), dart.fn(nestedView => nestedView[_appEl_10].mapNestedViewsWithSingleResult(MaterialCalendarPickerComponentL(), _ViewDateRangeEditorComponent20L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MaterialCalendarPickerComponent_0_5], nestedView[_compView_0]);
            return nestedView[_MaterialCalendarPickerComponent_0_5];
          }, _ViewDateRangeEditorComponent20LToMaterialCalendarPickerComponentL())), _ViewDateRangeEditorComponent13LToListLOfMaterialCalendarPickerComponentL())));
          this[_viewQuery_MaterialCalendarPickerComponent_0_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_MaterialMonthPickerComponent_1_isDirty])) {
          _ctx.monthSelector = queries.firstOrNull(MaterialMonthPickerComponentL(), this[_appEl_1].mapNestedViews(MaterialMonthPickerComponentL(), _ViewDateRangeEditorComponent13L(), dart.fn(nestedView => nestedView[_appEl_11].mapNestedViewsWithSingleResult(MaterialMonthPickerComponentL(), _ViewDateRangeEditorComponent21L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MaterialMonthPickerComponent_0_5], nestedView[_compView_0]);
            return nestedView[_MaterialMonthPickerComponent_0_5];
          }, _ViewDateRangeEditorComponent21LToMaterialMonthPickerComponentL())), _ViewDateRangeEditorComponent13LToListLOfMaterialMonthPickerComponentL())));
          this[_viewQuery_MaterialMonthPickerComponent_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    static _debugClearComponentStyles() {
      date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles;
      if (styles == null) {
        date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(date_range_editor$46template.styles$DateRangeEditorComponent, date_range_editor$46template.ViewDateRangeEditorComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C2 || CT.C2);
        }
      }
      this.componentStyles = styles;
    }
  };
  (date_range_editor$46template.ViewDateRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_MaterialCalendarPickerComponent_0_isDirty] = true;
    this[_viewQuery_MaterialMonthPickerComponent_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("date-range-editor"));
  }).prototype = date_range_editor$46template.ViewDateRangeEditorComponent0.prototype;
  dart.addTypeTests(date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.addTypeCaches(date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.setMethodSignature(date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template.ViewDateRangeEditorComponent0, L0);
  dart.setFieldSignature(date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getFields(date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    [_viewQuery_MaterialCalendarPickerComponent_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_viewQuery_MaterialMonthPickerComponent_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(date_range_editor$46template.ViewDateRangeEditorComponent0, {
    /*date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _query_SelectionItem_0_1_isDirty = dart.privateName(date_range_editor$46template, "_query_SelectionItem_0_1_isDirty");
  var _query_FocusableItem_0_0_isDirty = dart.privateName(date_range_editor$46template, "_query_FocusableItem_0_0_isDirty");
  var _FocusListDirective_0_5 = dart.privateName(date_range_editor$46template, "_FocusListDirective_0_5");
  var _MaterialSelectComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialSelectComponent_0_6");
  var _Clock_0_7 = dart.privateName(date_range_editor$46template, "_Clock_0_7");
  var _GestureListenerFactory_0_8 = dart.privateName(date_range_editor$46template, "_GestureListenerFactory_0_8");
  var _ElementScrollHost_0_9 = dart.privateName(date_range_editor$46template, "_ElementScrollHost_0_9");
  var _appEl_2 = dart.privateName(date_range_editor$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(date_range_editor$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(date_range_editor$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(date_range_editor$46template, "_NgIf_4_9");
  var _appEl_5 = dart.privateName(date_range_editor$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(date_range_editor$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(date_range_editor$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(date_range_editor$46template, "_NgIf_6_9");
  var _appEl_7 = dart.privateName(date_range_editor$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(date_range_editor$46template, "_NgIf_7_9");
  var _el_0 = dart.privateName(date_range_editor$46template, "_el_0");
  var C4;
  var Clock__time = dart.privateName(clock, "Clock._time");
  var C3;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var _FocusItemDirective_1_5 = dart.privateName(date_range_editor$46template, "_FocusItemDirective_1_5");
  var _FocusItemDirective_0_8 = dart.privateName(date_range_editor$46template, "_FocusItemDirective_0_8");
  var _MaterialSelectItemComponent_1_6 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_1_6");
  var _compView_1 = dart.privateName(date_range_editor$46template, "_compView_1");
  var _MaterialSelectItemComponent_0_9 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_0_9");
  var _appEl_3 = dart.privateName(date_range_editor$46template, "_appEl_3");
  var _MaterialSelectItemComponent_0_8 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_0_8");
  var _MaterialSelectItemComponent_1_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_1_5");
  var _MaterialSelectItemComponent_5_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_5_5");
  var _compView_5 = dart.privateName(date_range_editor$46template, "_compView_5");
  date_range_editor$46template._ViewDateRangeEditorComponent1 = class _ViewDateRangeEditorComponent1 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "acxScrollHost", "");
      this.updateChildClassNonHtml(this[_el_0], "preset-list");
      dom_helpers.setAttribute(this[_el_0], "focusList", "");
      dom_helpers.setAttribute(this[_el_0], "role", "listbox");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FocusListDirectiveL(), dart.wrapType(FocusListDirectiveL()), dart.fn(() => new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), "listbox", null), VoidToFocusListDirectiveL())) : new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), "listbox", null));
      this[_MaterialSelectComponent_0_6] = new material_select.MaterialSelectComponent.new();
      this[_Clock_0_7] = C3 || CT.C3;
      this[_GestureListenerFactory_0_8] = new gestures.GestureListenerFactory.new(this[_Clock_0_7]);
      this[_ElementScrollHost_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ElementScrollHostL(), dart.wrapType(ElementScrollHostL()), dart.fn(() => new angular_2.ElementScrollHost.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), this[_GestureListenerFactory_0_8], HtmlElementL().as(this[_el_0])), VoidToElementScrollHostL())) : new angular_2.ElementScrollHost.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), this[_GestureListenerFactory_0_8], HtmlElementL().as(this[_el_0]));
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C5 || CT.C5);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C6 || CT.C6);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      let _el_3 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_3), "group");
      dom_helpers.setAttribute(_el_3, "role", "listbox");
      this.addShimC(HtmlElementL().as(_el_3));
      let _anchor_4 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C7 || CT.C7);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C8 || CT.C8);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.createAnchor();
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C9 || CT.C9);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.createAnchor();
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C10 || CT.C10);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_compView_0].createAndProject(this[_MaterialSelectComponent_0_6], JSArrayOfObjectL().of([JSArrayOfObjectL().of([this[_appEl_1], this[_appEl_2], _el_3, this[_appEl_6], this[_appEl_7]])]));
      this.initRootNode(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 7) {
        if (token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(SelectionContainerL())) {
          return this[_MaterialSelectComponent_0_6];
        }
        if (token === dart.wrapType(ClockL())) {
          return this[_Clock_0_7];
        }
        if (token === dart.wrapType(GestureListenerFactoryL())) {
          return this[_GestureListenerFactory_0_8];
        }
        if (token === dart.wrapType(ElementScrollHostL()) || token === dart.wrapType(ScrollHostL())) {
          return this[_ElementScrollHost_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectComponent_0_6].width = 0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialSelectComponent_0_6].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ElementScrollHost_0_9].ngOnInit();
      }
      this[_NgIf_1_9].ngIf = _ctx.supportsClearRange;
      this[_NgIf_2_9].ngIf = _ctx.supportsCustomRange;
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.useMenuForPresets);
      this[_NgIf_5_9].ngIf = _ctx.useMenuForPresets;
      this[_NgIf_6_9].ngIf = _ctx.supportsDaysInputs;
      this[_NgIf_7_9].ngIf = _ctx.supportsComparison;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
          this[_FocusListDirective_0_5].instance.listItems = queries.flattenNodes(FocusableItemL(), JSArrayOfListLOfFocusableItemL().of([this[_appEl_1].mapNestedViewsWithSingleResult(FocusableItemL(), _ViewDateRangeEditorComponent2L(), dart.fn(nestedView => nestedView[_FocusItemDirective_1_5].instance, _ViewDateRangeEditorComponent2LToFocusItemDirectiveL())), this[_appEl_2].mapNestedViewsWithSingleResult(FocusableItemL(), _ViewDateRangeEditorComponent3L(), dart.fn(nestedView => nestedView[_FocusItemDirective_1_5].instance, _ViewDateRangeEditorComponent3LToFocusItemDirectiveL())), this[_appEl_4].mapNestedViews(FocusableItemL(), _ViewDateRangeEditorComponent6L(), dart.fn(nestedView => nestedView[_appEl_0].mapNestedViewsWithSingleResult(FocusableItemL(), _ViewDateRangeEditorComponent7L(), dart.fn(nestedView => nestedView[_FocusItemDirective_0_8].instance, _ViewDateRangeEditorComponent7LToFocusItemDirectiveL())), _ViewDateRangeEditorComponent6LToListLOfFocusableItemL()))]));
          this[_query_FocusableItem_0_0_isDirty] = false;
        }
        if (dart.test(this[_query_SelectionItem_0_1_isDirty])) {
          this[_MaterialSelectComponent_0_6].selectItems = queries.flattenNodes(SelectionItemL(), JSArrayOfListLOfSelectionItemL().of([this[_appEl_1].mapNestedViewsWithSingleResult(SelectionItemL(), _ViewDateRangeEditorComponent2L(), dart.fn(nestedView => {
              view.View.queryChangeDetectorRefs._set(nestedView[_MaterialSelectItemComponent_1_6], nestedView[_compView_1]);
              return nestedView[_MaterialSelectItemComponent_1_6];
            }, _ViewDateRangeEditorComponent2LToMaterialSelectItemComponentL())), this[_appEl_2].mapNestedViewsWithSingleResult(SelectionItemL(), _ViewDateRangeEditorComponent3L(), dart.fn(nestedView => {
              view.View.queryChangeDetectorRefs._set(nestedView[_MaterialSelectItemComponent_1_6], nestedView[_compView_1]);
              return nestedView[_MaterialSelectItemComponent_1_6];
            }, _ViewDateRangeEditorComponent3LToMaterialSelectItemComponentL())), this[_appEl_4].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent6L(), dart.fn(nestedView => nestedView[_appEl_0].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent7L(), dart.fn(nestedView => {
              view.View.queryChangeDetectorRefs._set(nestedView[_MaterialSelectItemComponent_0_9], nestedView[_compView_0]);
              return queries.flattenNodes(SelectionItemL(), JSArrayOfListLOfSelectionItemL().of([JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_0_9]]), nestedView[_appEl_2].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent8L(), dart.fn(nestedView => nestedView[_appEl_3].mapNestedViewsWithSingleResult(SelectionItemL(), _ViewDateRangeEditorComponent9L(), dart.fn(nestedView => {
                  view.View.queryChangeDetectorRefs._set(nestedView[_MaterialSelectItemComponent_0_8], nestedView[_compView_0]);
                  return nestedView[_MaterialSelectItemComponent_0_8];
                }, _ViewDateRangeEditorComponent9LToMaterialSelectItemComponentL())), _ViewDateRangeEditorComponent8LToListLOfSelectionItemL()))]));
            }, _ViewDateRangeEditorComponent7LToListLOfSelectionItemL())), _ViewDateRangeEditorComponent6LToListLOfSelectionItemL())), this[_appEl_6].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent11L(), dart.fn(nestedView => {
              view.View.queryChangeDetectorRefs._set(nestedView[_MaterialSelectItemComponent_1_5], nestedView[_compView_1]);
              view.View.queryChangeDetectorRefs._set(nestedView[_MaterialSelectItemComponent_5_5], nestedView[_compView_5]);
              return JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_1_5], nestedView[_MaterialSelectItemComponent_5_5]]);
            }, _ViewDateRangeEditorComponent11LToListLOfSelectionItemL()))]));
          this[_query_SelectionItem_0_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isBasic;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isBasic", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "basic-preset-list", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_FocusListDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
      this[_ElementScrollHost_0_9].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_query_SelectionItem_0_1_isDirty] = true;
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_compView_0] = null;
    this[_FocusListDirective_0_5] = null;
    this[_MaterialSelectComponent_0_6] = null;
    this[_Clock_0_7] = null;
    this[_GestureListenerFactory_0_8] = null;
    this[_ElementScrollHost_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent1.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent1, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    [_query_SelectionItem_0_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select$46template.ViewMaterialSelectComponent0)),
    [_FocusListDirective_0_5]: dart.fieldType(dart.legacy(focus_list$46template.FocusListDirectiveNgCd)),
    [_MaterialSelectComponent_0_6]: dart.fieldType(dart.legacy(material_select.MaterialSelectComponent)),
    [_Clock_0_7]: dart.fieldType(dart.legacy(clock.Clock)),
    [_GestureListenerFactory_0_8]: dart.fieldType(dart.legacy(gestures.GestureListenerFactory)),
    [_ElementScrollHost_0_9]: dart.fieldType(dart.legacy(angular_2.ElementScrollHost)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _el_1 = dart.privateName(date_range_editor$46template, "_el_1");
  date_range_editor$46template._ViewDateRangeEditorComponent2 = class _ViewDateRangeEditorComponent2 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      _el_0[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "focusItem", "");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_FocusItemDirective_1_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_1]), this[_compView_1], null));
      this[_MaterialSelectItemComponent_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_1], null);
      let _text_2 = dom_helpers.createText(interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.clearRangeMsg));
      this[_compView_1].createAndProject(this[_MaterialSelectItemComponent_1_6], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_2])]));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_1_5].instance, 'keydown')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onClearRangeClicked')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(FocusableItemL())) {
          return this[_FocusItemDirective_1_5].instance;
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_1_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_FocusItemDirective_1_5].detectHostChanges(this[_compView_1], this[_el_1]);
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_6].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_FocusItemDirective_1_5] = null;
    this[_MaterialSelectItemComponent_1_6] = null;
    this[_el_1] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent2.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent2, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_FocusItemDirective_1_5]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
    [_MaterialSelectItemComponent_1_6]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _expr_2 = dart.privateName(date_range_editor$46template, "_expr_2");
  var _expr_3 = dart.privateName(date_range_editor$46template, "_expr_3");
  var _el_2 = dart.privateName(date_range_editor$46template, "_el_2");
  var C11;
  var C12;
  date_range_editor$46template._ViewDateRangeEditorComponent3 = class _ViewDateRangeEditorComponent3 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      _el_0[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "focusItem", "");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_FocusItemDirective_1_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_1]), this[_compView_1], null));
      this[_MaterialSelectItemComponent_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_1], null);
      this[_el_2] = DivElementL().as(doc[$createElement]("div"));
      this.addShimC(this[_el_2]);
      let _text_3 = dom_helpers.appendText(this[_el_2], interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.customRangeMsg));
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C11 || CT.C11);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C12 || CT.C12);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_1].createAndProject(this[_MaterialSelectItemComponent_1_6], JSArrayOfObjectL().of([JSArrayOfObjectL().of([this[_el_2], this[_appEl_5]])]));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_1_5].instance, 'keydown')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'onCustomClicked')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        if (token === dart.wrapType(FocusableItemL())) {
          return this[_FocusItemDirective_1_5].instance;
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_1_6];
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
        this[_MaterialSelectItemComponent_1_6].closeOnActivate = false;
        changed = true;
      }
      let currVal_0 = _ctx.isCustomRangeSelected;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isCustomRangeSelected", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_1_6].selected = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_4_9].ngIf = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      this[_NgIf_5_9].ngIf = _ctx.isBasic;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_FocusItemDirective_1_5].detectHostChanges(this[_compView_1], this[_el_1]);
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_2 = dart.test(_ctx.isBasic) && !dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "isBasic && !isCustomRangeSelected", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        dom_helpers.updateClassBinding(this[_el_2], "custom-tab-left", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isBasic && isCustomRangeSelected", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        dom_helpers.updateClassBinding(this[_el_2], "custom_tab-left-selected", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_6].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent3.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_FocusItemDirective_1_5] = null;
    this[_MaterialSelectItemComponent_1_6] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent3.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent3, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_FocusItemDirective_1_5]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
    [_MaterialSelectItemComponent_1_6]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _textBinding_1 = dart.privateName(date_range_editor$46template, "_textBinding_1");
  date_range_editor$46template._ViewDateRangeEditorComponent4 = class _ViewDateRangeEditorComponent4 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "custom_range_desc");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.customRangeDescription));
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent4.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent4, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _ButtonDirective_0_5 = dart.privateName(date_range_editor$46template, "_ButtonDirective_0_5");
  var _MaterialIconComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_0_6");
  date_range_editor$46template._ViewDateRangeEditorComponent5 = class _ViewDateRangeEditorComponent5 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expend-more");
      dom_helpers.setAttribute(this[_el_0], "icon", "expand_more");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this.initRootNode(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_0_6].icon = "expand_more";
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent5.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent5.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent5, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _NgFor_0_9 = dart.privateName(date_range_editor$46template, "_NgFor_0_9");
  var C13;
  date_range_editor$46template._ViewDateRangeEditorComponent6 = class _ViewDateRangeEditorComponent6 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _anchor_0 = dom_helpers.createAnchor();
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C13 || CT.C13);
      this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.initRootNode(this[_appEl_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.presets;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "presets", "package:angular_components/material_datepicker/date_range_editor.html"))) {
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
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent6.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent6.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent6, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _MaterialTooltipDirective_0_10 = dart.privateName(date_range_editor$46template, "_MaterialTooltipDirective_0_10");
  var __TooltipController_0_13 = dart.privateName(date_range_editor$46template, "__TooltipController_0_13");
  var _expr_1 = dart.privateName(date_range_editor$46template, "_expr_1");
  var _expr_4 = dart.privateName(date_range_editor$46template, "_expr_4");
  var _TooltipController_0_13 = dart.privateName(date_range_editor$46template, "_TooltipController_0_13");
  var C14;
  var _handleEvent_0 = dart.privateName(date_range_editor$46template, "_handleEvent_0");
  date_range_editor$46template._ViewDateRangeEditorComponent7 = class _ViewDateRangeEditorComponent7 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.parentView.parentIndex)), DisposerL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.parentView.parentIndex)), DisposerL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentIndex)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "focusItem", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_FocusItemDirective_0_8] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_0]), this[_compView_0], null));
      this[_MaterialSelectItemComponent_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_0]), DropdownHandleL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_0]), DropdownHandleL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentIndex)), this[_appEl_0], HtmlElementL().as(this[_el_0]), this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentIndex)), this[_appEl_0], HtmlElementL().as(this[_el_0]), this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentIndex)), null, null);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C14 || CT.C14);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_9], JSArrayOfObjectL().of([JSArrayOfObjectL().of([this[_textBinding_1].element, this[_appEl_2]])]));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_0_8].instance, 'keydown')));
      let subscription_0 = this[_MaterialSelectItemComponent_0_9].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(FocusableItemL())) {
          return this[_FocusItemDirective_0_8].instance;
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_0_9];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_13];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_9].closeOnActivate = false;
        changed = true;
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isValid(preset)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_0_9].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelected(local_preset.range);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isSelected(preset.range)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_0_9].selected = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        if (date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip != null) {
          this[_MaterialTooltipDirective_0_10].text = date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "!isValid(preset)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialTooltipDirective_0_10].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_0_10].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = local_preset.alternatives != null && dart.test(local_preset.alternatives[$isNotEmpty]);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_FocusItemDirective_0_8].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_preset.title));
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_0_10].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_9].ngOnDestroy();
      this[_MaterialTooltipDirective_0_10].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onRangeClicked(UIEventL().as($36event), local_preset.range);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent7.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_FocusItemDirective_0_8] = null;
    this[_MaterialSelectItemComponent_0_9] = null;
    this[_MaterialTooltipDirective_0_10] = null;
    this[__TooltipController_0_13] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent7.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent7, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_FocusItemDirective_0_8]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
    [_MaterialSelectItemComponent_0_9]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_MaterialTooltipDirective_0_10]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _AcxDarkTheme_0_5 = dart.privateName(date_range_editor$46template, "_AcxDarkTheme_0_5");
  var _MaterialButtonComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialButtonComponent_0_6");
  var _PopupSourceDirective_0_7 = dart.privateName(date_range_editor$46template, "_PopupSourceDirective_0_7");
  var _MaterialIconComponent_1_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_1_5");
  var _compView_2 = dart.privateName(date_range_editor$46template, "_compView_2");
  var _MaterialPopupComponent_2_8 = dart.privateName(date_range_editor$46template, "_MaterialPopupComponent_2_8");
  var __PopupHierarchy_2_11 = dart.privateName(date_range_editor$46template, "__PopupHierarchy_2_11");
  var __PopupRef_2_12 = dart.privateName(date_range_editor$46template, "__PopupRef_2_12");
  var _NgFor_3_9 = dart.privateName(date_range_editor$46template, "_NgFor_3_9");
  var _expr_5 = dart.privateName(date_range_editor$46template, "_expr_5");
  var _expr_6 = dart.privateName(date_range_editor$46template, "_expr_6");
  var _PopupHierarchy_2_11 = dart.privateName(date_range_editor$46template, "_PopupHierarchy_2_11");
  var _PopupRef_2_12 = dart.privateName(date_range_editor$46template, "_PopupRef_2_12");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var _handleEvent_1 = dart.privateName(date_range_editor$46template, "_handleEvent_1");
  var _handleEvent_2 = dart.privateName(date_range_editor$46template, "_handleEvent_2");
  date_range_editor$46template._ViewDateRangeEditorComponent8 = class _ViewDateRangeEditorComponent8 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    get [_PopupHierarchy_2_11]() {
      if (this[__PopupHierarchy_2_11] == null) {
        this[__PopupHierarchy_2_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_11];
    }
    get [_PopupRef_2_12]() {
      if (this[__PopupRef_2_12] == null) {
        this[__PopupRef_2_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_12];
    }
    build() {
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "alignPositionX", "after");
      dom_helpers.setAttribute(_el_0, "alignPositionY", "start");
      this.updateChildClassNonHtml(_el_0, "preset-dropdown-button");
      dom_helpers.setAttribute(_el_0, "icon", "");
      dom_helpers.setAttribute(_el_0, "popupSource", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(C15 || CT.C15, this.parentView.parentView.parentView.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(C15 || CT.C15, this.parentView.parentView.parentView.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(_el_0, AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.parentView.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.parentView.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.parentView.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.parentView.parentIndex)), null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      dom_helpers.setAttribute(_el_1, "icon", "arrow_drop_down");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_6], JSArrayOfObjectL().of([JSArrayOfHtmlElementL().of([_el_1])]));
      this[_compView_2] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      this.addShimC(_el_2);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _el_2);
      this[_MaterialPopupComponent_2_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.parentView.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.parentView.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.parentView.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.parentView.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.parentView.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.parentView.injectorGet(C16 || CT.C16, this.parentView.parentView.parentView.parentIndex)), boolL().as(this.parentView.parentView.parentView.parentView.injectorGet(C17 || CT.C17, this.parentView.parentView.parentView.parentIndex)), BoxL().as(this.parentView.parentView.parentView.parentView.injectorGet(C18 || CT.C18, this.parentView.parentView.parentView.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.parentView.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(_el_2)), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.parentView.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.parentView.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.parentView.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.parentView.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.parentView.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.parentView.injectorGet(C16 || CT.C16, this.parentView.parentView.parentView.parentIndex)), boolL().as(this.parentView.parentView.parentView.parentView.injectorGet(C17 || CT.C17, this.parentView.parentView.parentView.parentIndex)), BoxL().as(this.parentView.parentView.parentView.parentView.injectorGet(C18 || CT.C18, this.parentView.parentView.parentView.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.parentView.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(_el_2));
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C19 || CT.C19);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_2].createAndProject(this[_MaterialPopupComponent_2_8], JSArrayOfObjectL().of([C20 || CT.C20, JSArrayOfViewContainerL().of([this[_appEl_3]]), C20 || CT.C20]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      _el_0[$addEventListener]("keypress", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_2)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0, this[_appEl_2]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      if (2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(DeferredContentAwareL())) {
          return this[_MaterialPopupComponent_2_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_2_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_2_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_menuSource = this[_PopupSourceDirective_0_7];
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), optimizations.unsafeCast(_ViewDateRangeEditorComponent7L(), this.parentView).locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_PopupSourceDirective_0_7].alignX = "after";
        this[_PopupSourceDirective_0_7].alignY = "start";
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_1_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_2_8].offsetX = 9;
        changed = true;
        if (0 - 4 !== null) {
          this[_MaterialPopupComponent_2_8].offsetY = 0 - 4;
          changed = true;
        }
      }
      let currVal_5 = local_menuSource;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "menuSource", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialPopupComponent_2_8].source = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_6 = local_preset.alternatives;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "preset.alternatives", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_NgFor_3_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
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
      this[_appEl_3].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_1]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_2]($36event) {
      let local_popup = this[_MaterialPopupComponent_2_8];
      local_popup.toggle();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent8.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent8.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_PopupHierarchy_2_11]: dart.dynamic,
    [_PopupRef_2_12]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent8, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_PopupSourceDirective_0_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_2_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_3_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  var _MaterialTooltipDirective_0_9 = dart.privateName(date_range_editor$46template, "_MaterialTooltipDirective_0_9");
  date_range_editor$46template._ViewDateRangeEditorComponent9 = class _ViewDateRangeEditorComponent9 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(optimizations.unsafeCast(_ViewDateRangeEditorComponent7L(), this.parentView.parentView)[_TooltipController_0_13]), DisposerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.parentView.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(optimizations.unsafeCast(_ViewDateRangeEditorComponent7L(), this.parentView.parentView)[_TooltipController_0_13]), DisposerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.parentView.parentIndex)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, interpolate.interpolateString2("", "preset-dropdown-item", " ", "item", ""));
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialSelectItemComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(_ViewDateRangeEditorComponent8L(), this.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(_ViewDateRangeEditorComponent8L(), this.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.parentView.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.parentView.parentIndex)), null, null);
      this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_8], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_0_8];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_13];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_alternative = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = false;
        changed = true;
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isValid(alternative)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isAlternativePresetSelected(alternative)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        if (date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip != null) {
          this[_MaterialTooltipDirective_0_9].text = date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "!isValid(alternative)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_alternative.shortTitle));
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView.parentView.parentView.parentView)[_query_SelectionItem_0_1_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), optimizations.unsafeCast(_ViewDateRangeEditorComponent7L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let local_alternative = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onAlternativePresetClicked(UIEventL().as($36event), local_preset, local_alternative);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent9.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[__TooltipController_0_13] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent9.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent9, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  var _MenuRootDirective_0_5 = dart.privateName(date_range_editor$46template, "_MenuRootDirective_0_5");
  var _MenuItemGroupsComponent_0_7 = dart.privateName(date_range_editor$46template, "_MenuItemGroupsComponent_0_7");
  date_range_editor$46template._ViewDateRangeEditorComponent10 = class _ViewDateRangeEditorComponent10 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "menu-root", "");
      dom_helpers.setAttribute(_el_0, "preventCloseOnPressLeft", "");
      this.addShimC(_el_0);
      this[_MenuRootDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuRootDirectiveL(), dart.wrapType(MenuRootDirectiveL()), dart.fn(() => new menu_root.MenuRootDirective.new(DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex))), VoidToMenuRootDirectiveL())) : new menu_root.MenuRootDirective.new(DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)));
      this[_MenuItemGroupsComponent_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_0_5], this[_compView_0], DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_0_5], this[_compView_0], DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentIndex)));
      this[_compView_0].create(this[_MenuItemGroupsComponent_0_7]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(MenuRootL()) && 0 === nodeIndex) {
        return this[_MenuRootDirective_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_0_7].preventCloseOnPressLeft = true;
        changed = true;
      }
      let currVal_0 = _ctx.presetsMenu;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "presetsMenu", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MenuItemGroupsComponent_0_7].menu = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_0_7].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_0_7].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MenuItemGroupsComponent_0_7].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent10.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuRootDirective_0_5] = null;
    this[_MenuItemGroupsComponent_0_7] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent10.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent10, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_MenuRootDirective_0_5]: dart.fieldType(dart.legacy(menu_root.MenuRootDirective)),
    [_MenuItemGroupsComponent_0_7]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _DeferredValidator_2_5 = dart.privateName(date_range_editor$46template, "_DeferredValidator_2_5");
  var _NgValidators_2_6 = dart.privateName(date_range_editor$46template, "_NgValidators_2_6");
  var _NgModel_2_7 = dart.privateName(date_range_editor$46template, "_NgModel_2_7");
  var _MaterialInputComponent_2_9 = dart.privateName(date_range_editor$46template, "_MaterialInputComponent_2_9");
  var _MaterialInputDefaultValueAccessor_2_11 = dart.privateName(date_range_editor$46template, "_MaterialInputDefaultValueAccessor_2_11");
  var _compView_6 = dart.privateName(date_range_editor$46template, "_compView_6");
  var _DeferredValidator_6_5 = dart.privateName(date_range_editor$46template, "_DeferredValidator_6_5");
  var _NgValidators_6_6 = dart.privateName(date_range_editor$46template, "_NgValidators_6_6");
  var _NgModel_6_7 = dart.privateName(date_range_editor$46template, "_NgModel_6_7");
  var _MaterialInputComponent_6_9 = dart.privateName(date_range_editor$46template, "_MaterialInputComponent_6_9");
  var _MaterialInputDefaultValueAccessor_6_11 = dart.privateName(date_range_editor$46template, "_MaterialInputDefaultValueAccessor_6_11");
  var _expr_7 = dart.privateName(date_range_editor$46template, "_expr_7");
  var _expr_8 = dart.privateName(date_range_editor$46template, "_expr_8");
  var _handleEvent_3 = dart.privateName(date_range_editor$46template, "_handleEvent_3");
  var _handleEvent_4 = dart.privateName(date_range_editor$46template, "_handleEvent_4");
  var _handleEvent_5 = dart.privateName(date_range_editor$46template, "_handleEvent_5");
  var C21;
  date_range_editor$46template._ViewDateRangeEditorComponent11 = class _ViewDateRangeEditorComponent11 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "days group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, interpolate.interpolateString2("", "days-input days-to-today", " ", "item", ""));
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_1], null);
      this[_compView_2] = new material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      this.addShimC(_el_2);
      this[_DeferredValidator_2_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_MaterialInputComponent_2_9] = new material_input.MaterialInputComponent.new(null, null, this[_NgModel_2_7], this[_compView_2], this[_DeferredValidator_2_5]);
      this[_MaterialInputDefaultValueAccessor_2_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_2_9], this[_NgModel_2_7]);
      this[_compView_2].createAndProject(this[_MaterialInputComponent_2_9], JSArrayOfObjectL().of([C20 || CT.C20, C20 || CT.C20]));
      let _el_3 = doc[$createElement]("span");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.daysToTodayMsg));
      this[_compView_1].createAndProject(this[_MaterialSelectItemComponent_1_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_2, _el_3])]));
      this[_compView_5] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, interpolate.interpolateString2("", "days-input days-to-yesterday", " ", "item", ""));
      this.addShimC(_el_5);
      this[_MaterialSelectItemComponent_5_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_5, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_5], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_5, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_5], null);
      this[_compView_6] = new material_input$46template.ViewMaterialInputComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this.addShimC(_el_6);
      this[_DeferredValidator_6_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_6_6] = [this[_DeferredValidator_6_5]];
      this[_NgModel_6_7] = new ng_model.NgModel.new(this[_NgValidators_6_6], null);
      this[_MaterialInputComponent_6_9] = new material_input.MaterialInputComponent.new(null, null, this[_NgModel_6_7], this[_compView_6], this[_DeferredValidator_6_5]);
      this[_MaterialInputDefaultValueAccessor_6_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_6_9], this[_NgModel_6_7]);
      this[_compView_6].createAndProject(this[_MaterialInputComponent_6_9], JSArrayOfObjectL().of([C20 || CT.C20, C20 || CT.C20]));
      let _el_7 = doc[$createElement]("span");
      this.addShimE(_el_7);
      let _text_8 = dom_helpers.appendText(_el_7, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg));
      this[_compView_5].createAndProject(this[_MaterialSelectItemComponent_5_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_6, _el_7])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0)));
      _el_2[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_2)));
      let subscription_2 = this[_MaterialSelectItemComponent_5_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_3)));
      _el_6[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_4)));
      let subscription_3 = this[_NgModel_6_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_5)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        if (2 === nodeIndex) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_2_5];
          }
          if (token === (C21 || CT.C21)) {
            return this[_NgValidators_2_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_2_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_2_9];
          }
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_1_5];
        }
      }
      if (5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (6 === nodeIndex) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_6_5];
          }
          if (token === (C21 || CT.C21)) {
            return this[_NgValidators_6_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_6_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_6_9];
          }
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_5_5];
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
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = false;
        changed = true;
      }
      let currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isSelected(daysToTodayRange)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.daysToToday;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "daysToToday", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_NgModel_2_7].model = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_NgModel_2_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialInputComponent_2_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_3 = _ctx.maxDaysInputLength;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "maxDaysInputLength", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialInputComponent_2_9].maxCount = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_5_5].closeOnActivate = false;
        changed = true;
      }
      let currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "isSelected(daysToYesterdayRange)", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialSelectItemComponent_5_5].selected = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      changed = false;
      let currVal_7 = _ctx.daysToYesterday;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "daysToYesterday", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_NgModel_6_7].model = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_NgModel_6_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_6_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialInputComponent_6_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_8 = _ctx.maxDaysInputLength;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "maxDaysInputLength", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialInputComponent_6_9].maxCount = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_2_9].ngAfterViewInit();
          this[_MaterialInputComponent_6_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_2_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
      this[_MaterialInputComponent_6_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_6_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_5_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(UIEventL().as($36event), _ctx.daysToTodayRange);
    }
    [_handleEvent_1]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_2]($36event) {
      let _ctx = this.ctx;
      _ctx.daysToToday = StringL().as($36event);
    }
    [_handleEvent_3]($36event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(UIEventL().as($36event), _ctx.daysToYesterdayRange);
    }
    [_handleEvent_4]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_5]($36event) {
      let _ctx = this.ctx;
      _ctx.daysToYesterday = StringL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent11.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_MaterialInputDefaultValueAccessor_2_11] = null;
    this[_compView_5] = null;
    this[_MaterialSelectItemComponent_5_5] = null;
    this[_compView_6] = null;
    this[_DeferredValidator_6_5] = null;
    this[_NgValidators_6_6] = null;
    this[_NgModel_6_7] = null;
    this[_MaterialInputComponent_6_9] = null;
    this[_MaterialInputDefaultValueAccessor_6_11] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent11.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent11, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_2_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_2_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_2_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_2_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_2_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_compView_5]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_5_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_6_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_6_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_6_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_6_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_6_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  var _ComparisonRangeEditorComponent_1_5 = dart.privateName(date_range_editor$46template, "_ComparisonRangeEditorComponent_1_5");
  date_range_editor$46template._ViewDateRangeEditorComponent12 = class _ViewDateRangeEditorComponent12 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "comparison group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_ComparisonRangeEditorComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ComparisonRangeEditorComponentL(), dart.wrapType(ComparisonRangeEditorComponentL()), dart.fn(() => new comparison_range_editor.ComparisonRangeEditorComponent.new(NgZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentIndex)), optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_ElementScrollHost_0_9]), VoidToComparisonRangeEditorComponentL())) : new comparison_range_editor.ComparisonRangeEditorComponent.new(NgZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentIndex)), optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_ElementScrollHost_0_9]);
      this[_compView_1].create(this[_ComparisonRangeEditorComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_ComparisonRangeEditorComponent_1_5].model = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent12.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_ComparisonRangeEditorComponent_1_5] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent12.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent12, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0)),
    [_ComparisonRangeEditorComponent_1_5]: dart.fieldType(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _compView_4 = dart.privateName(date_range_editor$46template, "_compView_4");
  var _DateRangeInputComponent_4_5 = dart.privateName(date_range_editor$46template, "_DateRangeInputComponent_4_5");
  var _appEl_8 = dart.privateName(date_range_editor$46template, "_appEl_8");
  var _NgIf_8_9 = dart.privateName(date_range_editor$46template, "_NgIf_8_9");
  var _NgIf_10_9 = dart.privateName(date_range_editor$46template, "_NgIf_10_9");
  var _NgIf_11_9 = dart.privateName(date_range_editor$46template, "_NgIf_11_9");
  var _el_9 = dart.privateName(date_range_editor$46template, "_el_9");
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  date_range_editor$46template._ViewDateRangeEditorComponent13 = class _ViewDateRangeEditorComponent13 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "right-column");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C22 || CT.C22);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C23 || CT.C23);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "range-input");
      this.addShimC(_el_3);
      this[_compView_4] = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "range");
      this.addShimC(_el_4);
      this[_DateRangeInputComponent_4_5] = new date_range_input.DateRangeInputComponent.new(this[_compView_4]);
      this[_compView_4].create(this[_DateRangeInputComponent_4_5]);
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C24 || CT.C24);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C25 || CT.C25);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C26 || CT.C26);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_8] = new view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C27 || CT.C27);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_9] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_9], "picker-container");
      this.addShimC(this[_el_9]);
      let _anchor_10 = dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_10] = new view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C28 || CT.C28);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _anchor_11 = dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 9, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C29 || CT.C29);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let subscription_0 = this[_DateRangeInputComponent_4_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handleEvent_0)));
      let subscription_1 = this[_DateRangeInputComponent_4_5].rangeChange.listen(this.eventHandler1(DateRangeL(), DateRangeL(), dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      this[_NgIf_1_9].ngIf = _ctx.isBasic;
      this[_NgIf_2_9].ngIf = _ctx.isBasic;
      changed = false;
      let currVal_0 = _ctx.model.rangeId;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.rangeId", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].rangeId = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.dateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "dateFormat", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].dateFormat = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.activeDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "activeDateFormat", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].activeDateFormat = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "maxDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "minDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].minDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.range.value;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "model.range.value", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].range = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isClearRangeSelected;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "isClearRangeSelected", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].isClearRangeSelected = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.model.calendar.value;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "model.calendar.value", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_4_5].state = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DateRangeInputComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_6_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_7_9].ngIf = _ctx.supportsMonthSelector;
      this[_NgIf_8_9].ngIf = !dart.test(_ctx.isCalendarCreated);
      this[_NgIf_10_9].ngIf = _ctx.isCalendarCreated;
      this[_NgIf_11_9].ngIf = _ctx.supportsMonthSelector;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_8 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "compact", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        dom_helpers.updateClassBinding(this[_el_9], "compact", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_DateRangeInputComponent_4_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = CalendarStateL().as($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.range.value = DateRangeL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent13.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_compView_4] = null;
    this[_DateRangeInputComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_9] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent13.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent13);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent13);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent13, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent13, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent13, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_4]: dart.fieldType(dart.legacy(date_range_input$46template.ViewDateRangeInputComponent0)),
    [_DateRangeInputComponent_4_5]: dart.fieldType(dart.legacy(date_range_input.DateRangeInputComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_8]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_11]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_11_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_9]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_3 = dart.privateName(date_range_editor$46template, "_compView_3");
  var _MaterialIconComponent_3_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_3_5");
  date_range_editor$46template._ViewDateRangeEditorComponent14 = class _ViewDateRangeEditorComponent14 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button-decorator");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "custom-tab-right");
      this.addShimC(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.customRangeMsg));
      this[_compView_3] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      this[_el_0][$append](_el_3);
      this.updateChildClassNonHtml(_el_3, "expand-less");
      dom_helpers.setAttribute(_el_3, "icon", "expand_less");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'disableCustomMode')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_3_5].icon = "expand_less";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      this[_compView_3].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent14.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent14.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent14, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_compView_3]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_3_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent15 = class _ViewDateRangeEditorComponent15 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "content-separator");
      this.addShimC(HtmlElementL().as(_el_0));
      this.initRootNode(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent15.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent15.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent15, L0);
  date_range_editor$46template._ViewDateRangeEditorComponent16 = class _ViewDateRangeEditorComponent16 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "range-title");
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg));
      this.initRootNode(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent16.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent16.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent16, L0);
  var _DateRangeInputComponent_1_5 = dart.privateName(date_range_editor$46template, "_DateRangeInputComponent_1_5");
  date_range_editor$46template._ViewDateRangeEditorComponent17 = class _ViewDateRangeEditorComponent17 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "range-input");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, "comparison inputs");
      this.addShimC(_el_1);
      this[_DateRangeInputComponent_1_5] = new date_range_input.DateRangeInputComponent.new(this[_compView_1]);
      this[_compView_1].create(this[_DateRangeInputComponent_1_5]);
      let subscription_0 = this[_DateRangeInputComponent_1_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handleEvent_0)));
      let subscription_1 = this[_DateRangeInputComponent_1_5].rangeChange.listen(this.eventHandler1(DateRangeL(), DateRangeL(), dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = !dart.test(_ctx.isCustomComparisonValid);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isCustomComparisonValid", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.model.comparisonId;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "model.comparisonId", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].rangeId = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.dateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "dateFormat", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].dateFormat = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.activeDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "activeDateFormat", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].activeDateFormat = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.model.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "model.maxDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "model.minDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].minDate = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.model.comparison.value;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "model.comparison.value", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].range = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isClearRangeSelected;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "isClearRangeSelected", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].isClearRangeSelected = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.model.calendar.value;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "model.calendar.value", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_DateRangeInputComponent_1_5].state = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DateRangeInputComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_DateRangeInputComponent_1_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = CalendarStateL().as($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.comparison.value = DateRangeL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent17.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DateRangeInputComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent17.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent17);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent17);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent17, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent17, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent17, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(date_range_input$46template.ViewDateRangeInputComponent0)),
    [_DateRangeInputComponent_1_5]: dart.fieldType(dart.legacy(date_range_input.DateRangeInputComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_3 = dart.privateName(date_range_editor$46template, "_textBinding_3");
  var _ButtonDirective_1_5 = dart.privateName(date_range_editor$46template, "_ButtonDirective_1_5");
  var _KeyboardOnlyFocusIndicatorDirective_1_6 = dart.privateName(date_range_editor$46template, "_KeyboardOnlyFocusIndicatorDirective_1_6");
  var _MaterialIconComponent_4_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_4_5");
  var _NextPrevComponent_5_5 = dart.privateName(date_range_editor$46template, "_NextPrevComponent_5_5");
  var _el_4 = dart.privateName(date_range_editor$46template, "_el_4");
  date_range_editor$46template._ViewDateRangeEditorComponent18 = class _ViewDateRangeEditorComponent18 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "month-selector-toolbar");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
      dom_helpers.setAttribute(this[_el_1], "buttonDecorator", "");
      this.updateChildClass(this[_el_1], "month-selector-dropdown");
      dom_helpers.setAttribute(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_1], null));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)));
      let _el_2 = dom_helpers.appendSpan(doc, this[_el_1]);
      this.updateChildClass(_el_2, "visible-month");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      this[_compView_4] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootElement;
      this[_el_1][$append](this[_el_4]);
      this.updateChildClassNonHtml(this[_el_4], "month-selector-dropdown-icon");
      dom_helpers.setAttribute(this[_el_4], "icon", "arrow_drop_down");
      this.addShimC(HtmlElementL().as(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_4]));
      this[_compView_4].create(this[_MaterialIconComponent_4_5]);
      this[_compView_5] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, "next-prev-range");
      this.addShimC(_el_5);
      this[_NextPrevComponent_5_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_5]);
      this[_compView_5].create(this[_NextPrevComponent_5_5]);
      this[_el_1][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'keydown')));
      this[_el_1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'onMonthSelectorDropdownClicked')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_1_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_4_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.nextPrevModel;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "nextPrevModel", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_NextPrevComponent_5_5].model = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.visibleMonthName));
      let currVal_0 = _ctx.showMonthSelector;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "showMonthSelector", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_4], "flipped", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_NextPrevComponent_5_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      this[_ButtonDirective_1_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6].onMouseInteraction();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent18.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_ButtonDirective_1_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_6] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_compView_5] = null;
    this[_NextPrevComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    this[_el_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent18.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent18, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_textBinding_3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_ButtonDirective_1_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_1_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_compView_4]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_4_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_5]: dart.fieldType(dart.legacy(next_prev_buttons$46template.ViewNextPrevComponent0)),
    [_NextPrevComponent_5_5]: dart.fieldType(dart.legacy(next_prev_buttons.NextPrevComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_4]: dart.fieldType(dart.legacy(html.Element))
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent19 = class _ViewDateRangeEditorComponent19 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "calendar-placeholder");
      this.addShimC(HtmlElementL().as(_el_0));
      this.initRootNode(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent19.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent19.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent19, L0);
  var _ShowHideDirective_0_6 = dart.privateName(date_range_editor$46template, "_ShowHideDirective_0_6");
  var C30;
  date_range_editor$46template._ViewDateRangeEditorComponent20 = class _ViewDateRangeEditorComponent20 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "picker calendar");
      dom_helpers.setAttribute(_el_0, "mode", "date-range");
      this.addShimC(_el_0);
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialCalendarPickerComponentL(), dart.wrapType(MaterialCalendarPickerComponentL()), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C30 || CT.C30, this.parentView.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.parentIndex)), "date-range"), VoidToMaterialCalendarPickerComponentL())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C30 || CT.C30, this.parentView.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.parentIndex)), "date-range");
      this[_ShowHideDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ShowHideDirectiveL(), dart.wrapType(ShowHideDirectiveL()), dart.fn(() => new showhide.ShowHideDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex))), VoidToShowHideDirectiveL())) : new showhide.ShowHideDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)));
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5]);
      let subscription_0 = this[_MaterialCalendarPickerComponent_0_5].visibleMonth.listen(this.eventHandler1(DateL(), DateL(), dart.bind(_ctx, 'onVisibleMonthChange')));
      let subscription_1 = this[_MaterialCalendarPickerComponent_0_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.model.calendar.value;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.calendar.value", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialCalendarPickerComponent_0_5].state = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.allowHighlightUpdates;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "allowHighlightUpdates", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialCalendarPickerComponent_0_5].allowHighlightUpdates = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "minDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialCalendarPickerComponent_0_5].minDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "maxDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialCalendarPickerComponent_0_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "compact", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialCalendarPickerComponent_0_5].compact = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.movingStartMaintainsLength;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "movingStartMaintainsLength", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialCalendarPickerComponent_0_5].movingStartMaintainsLength = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      let currVal_6 = !dart.test(_ctx.showMonthSelector);
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "!showMonthSelector", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_ShowHideDirective_0_6].visible = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewDateRangeEditorComponent0L(), this.parentView.parentView)[_viewQuery_MaterialCalendarPickerComponent_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = CalendarStateL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent20.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent20.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent20.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent20);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent20);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent20, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent20.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent20, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent20, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent20.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0)),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)),
    [_ShowHideDirective_0_6]: dart.fieldType(dart.legacy(showhide.ShowHideDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent21 = class _ViewDateRangeEditorComponent21 extends embedded_view.EmbeddedView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "picker month-selector");
      dom_helpers.setAttribute(_el_0, "mode", "single-date");
      this.addShimC(_el_0);
      this[_MaterialMonthPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialMonthPickerComponentL(), dart.wrapType(MaterialMonthPickerComponentL()), dart.fn(() => new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C30 || CT.C30, this.parentView.parentIndex)), "single-date"), VoidToMaterialMonthPickerComponentL())) : new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C30 || CT.C30, this.parentView.parentIndex)), "single-date");
      this[_ShowHideDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ShowHideDirectiveL(), dart.wrapType(ShowHideDirectiveL()), dart.fn(() => new showhide.ShowHideDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex))), VoidToShowHideDirectiveL())) : new showhide.ShowHideDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)));
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5]);
      let subscription_0 = this[_MaterialMonthPickerComponent_0_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.monthSelectorState;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "monthSelectorState", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialMonthPickerComponent_0_5].state = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "minDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialMonthPickerComponent_0_5].minDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "maxDate", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_MaterialMonthPickerComponent_0_5].maxDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      let currVal_3 = _ctx.showMonthSelector;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "showMonthSelector", "package:angular_components/material_datepicker/date_range_editor.html"))) {
        this[_ShowHideDirective_0_6].visible = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewDateRangeEditorComponent0L(), this.parentView.parentView)[_viewQuery_MaterialMonthPickerComponent_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.monthSelectorState = CalendarStateL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent21.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent21.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent21.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent21);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent21);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent21, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent21.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent21, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent21, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent21.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_month_picker$46template.ViewMaterialMonthPickerComponent0)),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(dart.legacy(material_month_picker.MaterialMonthPickerComponent)),
    [_ShowHideDirective_0_6]: dart.fieldType(dart.legacy(showhide.ShowHideDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  date_range_editor$46template._ViewDateRangeEditorComponentHost0 = class _ViewDateRangeEditorComponentHost0 extends host_view.HostView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this.componentView = new date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateRangeEditorComponentL(), dart.wrapType(DateRangeEditorComponentL()), dart.fn(() => new date_range_editor.DateRangeEditorComponent.new(_el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), DateRangeEditorHostL().as(this.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.parentIndex)), ClockL().as(this.injectorGetOptional(C30 || CT.C30, this.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.parentIndex))), VoidToDateRangeEditorComponentL())) : new date_range_editor.DateRangeEditorComponent.new(_el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), DateRangeEditorHostL().as(this.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.parentIndex)), ClockL().as(this.injectorGetOptional(C30 || CT.C30, this.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
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
  };
  (date_range_editor$46template._ViewDateRangeEditorComponentHost0.new = function() {
    date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponentHost0.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponentHost0, L0);
  var C31;
  date_range_editor$46template.createDateRangeEditorComponentFactory = function createDateRangeEditorComponentFactory() {
    return new (ComponentFactoryOfDateRangeEditorComponentL()).new("date-range-editor", C31 || CT.C31);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent1 = function viewFactory_DateRangeEditorComponent1(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent1.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent2 = function viewFactory_DateRangeEditorComponent2(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent2.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent3 = function viewFactory_DateRangeEditorComponent3(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent3.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent4 = function viewFactory_DateRangeEditorComponent4(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent4.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent5 = function viewFactory_DateRangeEditorComponent5(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent5.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent6 = function viewFactory_DateRangeEditorComponent6(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent6.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent7 = function viewFactory_DateRangeEditorComponent7(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent7.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent8 = function viewFactory_DateRangeEditorComponent8(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent8.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent9 = function viewFactory_DateRangeEditorComponent9(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent9.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent10 = function viewFactory_DateRangeEditorComponent10(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent10.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent11 = function viewFactory_DateRangeEditorComponent11(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent11.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent12 = function viewFactory_DateRangeEditorComponent12(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent12.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent13 = function viewFactory_DateRangeEditorComponent13(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent13.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent14 = function viewFactory_DateRangeEditorComponent14(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent14.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent15 = function viewFactory_DateRangeEditorComponent15(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent15.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent16 = function viewFactory_DateRangeEditorComponent16(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent16.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent17 = function viewFactory_DateRangeEditorComponent17(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent17.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent18 = function viewFactory_DateRangeEditorComponent18(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent18.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent19 = function viewFactory_DateRangeEditorComponent19(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent19.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent20 = function viewFactory_DateRangeEditorComponent20(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent20.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent21 = function viewFactory_DateRangeEditorComponent21(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent21.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0 = function viewFactory_DateRangeEditorComponentHost0() {
    return new date_range_editor$46template._ViewDateRangeEditorComponentHost0.new();
  };
  date_range_editor$46template.initReflector = function initReflector() {
    if (dart.test(date_range_editor$46template._visited)) {
      return;
    }
    date_range_editor$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DateRangeEditorComponentL()), date_range_editor$46template.createDateRangeEditorComponentFactory());
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    popup$46template.initReflector();
    material_button$46template.initReflector();
    calendar$46template.initReflector();
    date_range_editor_host$46template.initReflector();
    date_range_input$46template.initReflector();
    material_calendar_picker$46template.initReflector();
    material_month_picker$46template.initReflector();
    module$46template.initReflector();
    next_prev_buttons$46template.initReflector();
    preset$46template.initReflector();
    range$46template.initReflector();
    material_icon$46template.initReflector();
    material_input$46template.initReflector();
    menu_root$46template.initReflector();
    menu_item_groups$46template.initReflector();
    material_popup$46template.initReflector();
    material_ripple$46template.initReflector();
    material_select$46template.initReflector();
    material_select_item$46template.initReflector();
    material_tooltip$46template.initReflector();
    date$46template.initReflector();
    date_formatter$46template.initReflector();
    menu$46template.initReflector();
    selectable_menu$46template.initReflector();
    observable$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    comparison_range_editor$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    angular_2$46template.initReflector();
    dom_service$46template.initReflector();
    showhide$46template.initReflector();
  };
  dart.copyProperties(date_range_editor$46template, {
    get DateRangeEditorComponentNgFactory() {
      return date_range_editor$46template._DateRangeEditorComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C32;
  dart.defineLazy(date_range_editor$46template, {
    /*date_range_editor$46template.styles$DateRangeEditorComponent*/get styles$DateRangeEditorComponent() {
      return [date_range_editor$46scss$46css$46shim.styles];
    },
    /*date_range_editor$46template._DateRangeEditorComponentNgFactory*/get _DateRangeEditorComponentNgFactory() {
      return C32 || CT.C32;
    },
    /*date_range_editor$46template.styles$DateRangeEditorComponentHost*/get styles$DateRangeEditorComponentHost() {
      return C20 || CT.C20;
    },
    /*date_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.template", {
    "package:angular_components/material_datepicker/date_range_editor.template.dart": date_range_editor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4JI,uBAAgB,2BAAY,4EAA4E;IAC1G;;AAI4B,6BAAmB,AAAK;AAC5C,sBAAY,yBAAsB,gBAAgB;AACD,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC1C,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY,yBAAsB,gBAAgB;AACD,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC1C,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;IACvD;;AAIQ,iBAAY;AACiC,MAA9C,AAAU,uBAAO,AAAK,IAAD;AAC8D,MAAnF,AAAU,uBAAiC,UAAzB,AAAK,IAAD,mCAAwB,AAAK,IAAD;AACb,MAArC,AAAS;AAC4B,MAArC,AAAS;AACd,qBAAc;AACZ,sBAAS;AAMJ,UALH,AAAK,IAAD,kBAAkB,wDAA0B,AAAS,sGAAe,QAAiC,cAChG,AAAW,AAAU,UAAX,mHAA0C,QAAiC;AACoB,YAAjG,AAAuB,uCAAC,AAAW,UAAD,wCAAyC,AAAW,UAAD;AAClG,kBAAO,AAAW,WAAD;;AAG4C,UAA5D,6DAAuD;;AAE9D,sBAAS;AAMJ,UALH,AAAK,IAAD,iBAAiB,qDAA0B,AAAS,mGAAe,QAAiC,cAC/F,AAAW,AAAU,UAAX,gHAA0C,QAAiC;AACiB,YAA9F,AAAuB,uCAAC,AAAW,UAAD,qCAAsC,AAAW,UAAD;AAC/F,kBAAO,AAAW,WAAD;;AAGyC,UAAzD,0DAAoD;;;IAG/D;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;IAChB;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACoB,QAA1E,sCAAwC,kBAAa,WAAW,SAAS;AACjD,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,8EAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC6F,QAAjH,8EAAoB,SAAiC,2CAAO,8DAAiC;AAC7F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;6EA9E2C,YAAgB;IARtD,6DAAuD;IACvD,0DAAoD;IAC3C;IACT;IACS;IACT;IACD;AAEsE,wFAAM,UAAU,EAAE,WAAW;AAC3E,IAA1B,AAAK;AACiE,uBAAjE,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;;;;MAJ+B,2EAAgB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqHoB,MAA5D,oBAAuB,gEAA6B,MAAM;AACtB,MAApC,cAAa,AAAY;AACwB,MAAtD,yBAA2B,aAAO,iBAAiB;AACI,MAAvD,AAAK,6BAA6B,aAAO;AACS,MAAlD,yBAA2B,aAAO,aAAa;AACK,MAApD,yBAA2B,aAAO,QAAQ;AACjB,MAAzB,AAAK,gCAAc;AAKiG,MAJ/G,gCAAmC,+DAAgC,2BAClE,gDAAoC,sCAAoB,cACtC,mDAAwB,AAAW,4BAAqB,0BAAa,oBAAc,WAAW,uCAEvG,mDAAwB,AAAW,4BAAqB,0BAAa,oBAAc,WAAW;AACvC,MAAjE,qCAAwC;AACL,MAAnC;AAC8E,MAA9E,oCAAuC,wCAA4B;AAK2I,MAJ9M,yCAAkC,2BACjC,+CAAoC,qCAAmB,cACrC,qDAAuB,AAAW,4BAAqB,8BAAiB,iCAAmB,AAAW,4BAAqB,0BAAa,oBAAmB,qDAAkC,8CAEtM,qDAAuB,AAAW,4BAAqB,8BAAiB,iCAAmB,AAAW,4BAAqB,0BAAa,oBAAmB,qDAAkC;AACtM,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACK,MAArC,AAAK,wCAAiB,KAAK,GAAE;AACkB,MAA/C,yBAAsB,KAAK,EAAE,QAAQ;AACjB,MAApB,AAAK,gCAAS,KAAK;AACb,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAGnD,MAFG,AAAY,mCAAsB,oCAA8B,uBACnE,uBAAM,gBAAe,gBAAU,KAAK,EAAO,gBAAe;AAE/B,MAA7B,AAAK,kBAAkB;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAM,AAAU,KAAK,KAAW,iCAAgB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACnH,gBAAY;;AAEd,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAK,AAAU,KAAK,KAAW,uCAAsB,AAAU,KAAK,KAAW;AAC7E,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,uBAAkB;AACvB,oBAAI,UAAU;AACiC,QAAvC,AAA6B,2CAAQ;;AAE7C,qBAAe,gDAAwB,UAAU;AACH,QAAvC,AAA6B;;AAEpC,qBAAe,gDAAwB,UAAU;AACT,QAAjC,AAAuB;;AAEe,MAAxC,AAAU,uBAAO,AAAK,IAAD;AACoB,MAAzC,AAAU,uBAAO,AAAK,IAAD;AACqB,MAA1C,AAAU,uBAAQ,WAAC,AAAK,IAAD;AACgB,MAAvC,AAAU,uBAAO,AAAK,IAAD;AACmB,MAAxC,AAAU,uBAAO,AAAK,IAAD;AACmB,MAAxC,AAAU,uBAAO,AAAK,IAAD;AACgB,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AACd,qBAAc;AACZ,sBAAS;AAaL,UAZG,AAAwB,AAAS,mDAAY,uCAAsB,qCACjE,AAAS,mGAA+B,QAAgC,cACpE,AAAW,AAAwB,UAAzB,8FAEd,AAAS,mGAA+B,QAAgC,cACpE,AAAW,AAAwB,UAAzB,8FAEd,AAAS,mFAAe,QAAgC,cACpD,AAAW,AAAS,UAAV,+FAAyC,QAAgC,cACjF,AAAW,AAAwB,UAAzB;AAIsB,UAAxC,yCAAmC;;AAE1C,sBAAS;AA6BL,UA5BG,AAA6B,iDAAc,uCAAsB,qCAC/D,AAAS,mGAA+B,QAAgC;AAC+B,cAA7F,AAAuB,uCAAC,AAAW,UAAD,oCAAqC,AAAW,UAAD;AAC9F,oBAAO,AAAW,WAAD;kFAEd,AAAS,mGAA+B,QAAgC;AAC+B,cAA7F,AAAuB,uCAAC,AAAW,UAAD,oCAAqC,AAAW,UAAD;AAC9F,oBAAO,AAAW,WAAD;kFAEd,AAAS,mFAAe,QAAgC,cACpD,AAAW,AAAS,UAAV,+EAAyB,QAAgC;AACkC,cAA7F,AAAuB,uCAAC,AAAW,UAAD,oCAAqC,AAAW,UAAD;AAC9F,oBAAO,wCAAsB,qCAC3B,8BAAC,AAAW,UAAD,sCACX,AAAW,AAAS,UAAV,+EAAyB,QAAgC,cAC1D,AAAW,AAAS,UAAV,+FAAyC,QAAgC;AACkB,kBAA7F,AAAuB,uCAAC,AAAW,UAAD,oCAAqC,AAAW,UAAD;AAC9F,wBAAO,AAAW,WAAD;;uIAMtB,AAAS,oFAAe,QAAiC;AAC8C,cAA7F,AAAuB,uCAAC,AAAW,UAAD,oCAAqC,AAAW,UAAD;AACY,cAA7F,AAAuB,uCAAC,AAAW,UAAD,oCAAqC,AAAW,UAAD;AAC9F,oBAAO,+BAAC,AAAW,UAAD,oCAAmC,AAAW,UAAD;;AAGtB,UAAxC,yCAAmC;;;AAGtC,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACmB,QAA9E,sCAAwC,aAAO,qBAAqB,SAAS;AACrD,QAAnB,gBAAU,SAAS;;AAEkD,MAAvE,AAAwB,gDAAuB,mBAAkB;AACxB,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACnB;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACkC,MAA9C,AAAwB,AAAS;AACG,MAApC,AAAuB;IAC9B;;8EA7KmD,YAAgB;IAtB9D,yCAAmC;IACnC,yCAAmC;IACF;IACN;IACC;IAClB;IACiB;IACL;IACb;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACD;IACY;AACkE,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4LxG,iBAAY;AACZ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACK,MAArC,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACkD,MAAhE,oBAAuB,yEAAiC,MAAM;AAC1B,MAApC,cAAa,AAAY;AACN,MAAxB,AAAM,KAAD,UAAa;AACgC,MAAlD,yBAA2B,aAAO,aAAa;AACtB,MAAzB,AAAK,gCAAc;AAC4G,MAA1H,gCAAmC,qDAAgC,wDAAwB,cAAY,mBAAa;AAKqK,MAJzR,mDAA4C,2BAC3C,yDAAoC,+CAA6B,cAC/C,2EAAiC,mCAAY,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa,gDAElR,2EAAiC,mCAAY,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa;AAClR,oBAAU,uBAAoB,+BAA6D;AAG/F,MAFG,AAAY,mCAAsB,wCAAkC,uBACvE,qBAAC,OAAO;AAE+F,MAApG,AAAM,+BAAiB,WAAW,AAAK,+CAAoD,UAAjC,AAAwB;AACjF,2BAAsB,AAAiC,AAAQ,sDAAO,AAAK,2CAAmB,UAAL,IAAI;AACtC,MAA7D,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc;IAC7D;wBAGoC,OAAW,WAAmB;AAChE,UAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY,AAAwB;;AAEtC,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEyD,MAAvE,AAAwB,gDAAuB,mBAAkB;AACxB,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACnB;;AAI6G,MAA3G,AAAoE,4DAAZ,qDAA+C;AACI,MAA3G,AAAoE,4DAAZ,qDAA+C;IACzG;;AAIyC,MAAlC,AAAY;AACkC,MAA9C,AAAiC;IACxC;;8EAhEmD,YAAgB;IAJzB;IACV;IACK;IACrB;AACkE,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;AAuFxG,iBAAY;AACZ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACK,MAArC,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACkD,MAAhE,oBAAuB,yEAAiC,MAAM;AAC1B,MAApC,cAAa,AAAY;AACN,MAAxB,AAAM,KAAD,UAAa;AACgC,MAAlD,yBAA2B,aAAO,aAAa;AACtB,MAAzB,AAAK,gCAAc;AAC4G,MAA1H,gCAAmC,qDAAgC,wDAAwB,cAAY,mBAAa;AAKqK,MAJzR,mDAA4C,2BAC3C,yDAAoC,+CAA6B,cAC/C,2EAAiC,mCAAY,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa,gDAElR,2EAAiC,mCAAY,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa;AACnP,oBAAhC,iBAAQ,AAAI,GAAD,iBAAe;AACN,MAAzB,AAAK,cAAc;AACb,oBAAU,uBAAyB,aAAO,+BAA6D;AACvG,sBAAY,yBAA2B;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAGnD,MAFG,AAAY,mCAAsB,wCAAkC,uBACvE,uBAAM,aAAY;AAEqF,MAApG,AAAM,+BAAiB,WAAW,AAAK,+CAAoD,UAAjC,AAAwB;AACjF,2BAAsB,AAAiC,AAAQ,sDAAO,AAAK,+BAAmB,UAAL,IAAI;AACtC,MAA7D,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc;IAC7D;wBAGoC,OAAW,WAAmB;AAChE,UAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY,AAAwB;;AAEtC,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,oBAAI,UAAU;AACiD,QAAxD,AAAiC,yDAAkB;AAC1C,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yBAAyB;AACf,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAE+C,MAA7D,AAAU,uBAAqB,UAAb,AAAK,IAAD,uBAAY,AAAK,IAAD;AACT,MAA7B,AAAU,uBAAO,AAAK,IAAD;AACgB,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC8D,MAAvE,AAAwB,gDAAuB,mBAAkB;AACxB,MAAzC,AAAY,oCAAkB,UAAU;AACvC,sBAA0B,UAAb,AAAK,IAAD,wBAAc,AAAK,IAAD;AACzC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,qCAAqC;AAChB,QAArE,+BAAiC,aAAO,mBAAmB,SAAS;AAC5C,QAAnB,gBAAU,SAAS;;AAEpB,sBAA0B,UAAb,AAAK,IAAD,uBAAY,AAAK,IAAD;AACvC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oCAAoC;AACN,QAA9E,+BAAiC,aAAO,4BAA4B,SAAS;AACrD,QAAnB,gBAAU,SAAS;;AAEM,MAA3B,AAAY;IACnB;;AAI6G,MAA3G,AAAoE,4DAAZ,qDAA+C;AACI,MAA3G,AAAoE,4DAAZ,qDAA+C;IACzG;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACkC,MAA9C,AAAiC;IACxC;;8EArGmD,YAAgB;IAZzB;IACV;IACK;IACvB;IACT;IACS;IACT;IACD;IACA;IACA;IACY;IACG;AAC+D,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiHxG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACiB,MAAjD,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACsB,MAAzC,AAAM,KAAD,UAAa,AAAe;AACT,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIQ,iBAAY;AACsE,MAAnF,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IACjE;;8EAfmD,YAAgB;IADxC,uBAA0B;AAC6B,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;AA8B/C,MAA1D,oBAAuB,4DAA2B,MAAM;AACpB,MAApC,cAAa,AAAY;AAC0B,MAAxD,yBAA2B,aAAO,mBAAmB;AACE,MAAvD,AAAK,6BAA6B,aAAO;AACe,MAAxD,yBAA2B,aAAO,QAAQ;AACjB,MAAzB,AAAK,gCAAc;AACiF,MAA/F,6BAAgC,wDAA6B,yCAAqB,aAAO;AAClB,MAAvE,mCAAsC,8DAA2B;AACd,MAAnD,AAAY,yBAAY;AAC2E,MAAnG,AAAM,+BAAiB,SAAS,AAAK,4CAAiD,UAA9B,AAAqB;AAC4B,MAAzG,AAAM,+BAAiB,YAAY,AAAK,+CAAiD,UAA9B,AAAqB;AACxD,MAA7B,AAAK,kBAAkB;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,qCAAqB,AAAE,MAAG,SAAS;AAChE,cAAY,AAAqB;;AAEnC,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,oBAAI,UAAU;AACwC,QAA/C,AAA2B,wCAAO;AACzB,QAAd,UAAU;;AAEZ,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEsD,MAApE,AAAqB,6CAAuB,mBAAkB;AACnC,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;IACnB;;8EA5CmD,YAAgB;IAJ/B;IACP;IACE;IACf;AACkE,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;AA0DxG,sBAAY;AACqC,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC1C,6BAAmB,iCAAiB;AACiB,MAA5D,mBAAsB,qBAAW,gBAAU,gBAAgB;AAChC,MAAhC,AAAK,kBAAkB;IACzB;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACxB,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,gBAAU,SAAS;;AAE1B,qBAAc;AACe,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;8EA3BmD,YAAgB;IAHrD;IACC;IACX;AAC8E,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;AAkD9G,UAAU,AAAyB,kCAAG;AAKyP,QAJvR,2CAAoC,2BACpC,+CAAoC,qCAAmB,cAC9C,uDAAsC,AAAW,AAAW,AAAW,0DAA6B,qCAAwB,AAAW,AAAW,yDAAmB,AAAW,AAAW,AAAW,0DAA6B,4BAAe,AAAW,AAAW,0EAEjR,uDAAsC,AAAW,AAAW,AAAW,0DAA6B,qCAAwB,AAAW,AAAW,yDAAmB,AAAW,AAAW,AAAW,0DAA6B,4BAAe,AAAW,AAAW;;AAEhR,YAAY;IACd;;AAIuE,MAAhE,oBAAuB,yEAAiC,MAAM;AAC1B,MAApC,cAAa,AAAY;AACoB,MAAlD,yBAA2B,aAAO,aAAa;AACtB,MAAzB,AAAK,gCAAc;AACqC,MAAnD,iBAAW,qCAAc,GAAG,MAAM,MAAW;AAC6E,MAA1H,gCAAmC,qDAAgC,wDAAwB,cAAY,mBAAa;AAKiN,MAJrU,mDAA4C,2BAC3C,yDAAoC,+CAA6B,cAC/C,2EAAiC,mCAAY,AAAW,AAAW,AAAW,0DAA6B,kCAAqB,AAAW,AAAW,kEAAmB,AAAW,AAAW,AAAW,0DAA6B,qCAAwB,AAAW,AAAW,0CAAmB,mBAAa,gDAE9T,2EAAiC,mCAAY,AAAW,AAAW,AAAW,0DAA6B,kCAAqB,AAAW,AAAW,kEAAmB,AAAW,AAAW,AAAW,0DAA6B,qCAAwB,AAAW,AAAW,0CAAmB,mBAAa;AAKkB,MAJjV,iDAA0C,2BACzC,sDAAoC,4CAA0B,cAC5C,qEAA8B,AAAW,AAAW,AAAW,kDAAqB,yCAA4B,AAAW,AAAW,0CAAmB,kCAAe,cAAY,gBAAe,gCAAkB,AAAW,AAAW,AAAW,kDAAoB,0BAAa,AAAW,AAAW,0CAAc,MAAM,6CAE1U,qEAA8B,AAAW,AAAW,AAAW,kDAAqB,yCAA4B,AAAW,AAAW,0CAAmB,kCAAe,cAAY,gBAAe,gCAAkB,AAAW,AAAW,AAAW,kDAAoB,0BAAa,AAAW,AAAW,0CAAc,MAAM;AAC1U,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAGnD,MAFG,AAAY,mCAAsB,wCAAkC,uBACvE,uBAAM,AAAe,8BAAc;AAEoE,MAApG,AAAM,+BAAiB,WAAW,AAAK,+CAAoD,UAAjC,AAAwB;AACjF,2BAAsB,AAAiC,AAAQ,sDAAO,AAAK,qDAAmB;AAC/B,MAArE,AAAK,mCAA8B,uBAAM,kBAAW,yCAAC,cAAc;IACrE;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY,AAAwB;;AAEtC,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAY;;AAEd,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACjB,yBAAe,8CAAmD,AAAM,mBAAC;AAChE,MAAf,UAAU;AACV,oBAAI,UAAU;AACiD,QAAxD,AAAiC,yDAAkB;AAC1C,QAAd,UAAU;;AAED,sBAAa,WAAC,AAAK,IAAD,SAAS,YAAY;AAClD,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oBAAoB;AACV,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD,YAAY,AAAa,YAAD;AAC9C,oBAAI,2BAA0B,eAAS,SAAS,EAAE,4BAA4B;AAClB,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,oBAAI,UAAU;AACZ,YAAgD,mEAAsB;AAC8B,UAA5F,AAA+B,4CAAwC;;;AAGtE,sBAAa,WAAC,AAAK,IAAD,SAAS,YAAY;AAClD,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oBAAoB;AACb,QAAlD,AAA+B,+CAAU,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe,gDAAwB,UAAU;AACD,QAAzC,AAA+B;;AAE6D,MAA9F,AAAU,uBAAS,AAAa,AAAsB,YAAvB,iBAAiB,kBAAS,AAAa,AAAa,YAAd;AAChC,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC8D,MAAvE,AAAwB,gDAAuB,mBAAkB;AACxB,MAAzC,AAAY,oCAAkB,UAAU;AACkC,MAA1E,AAAe,gCAAW,+BAA4B,AAAa,YAAD;AACvC,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AACyC,UAAhD,AAA+B;;;IAG1C;;AAIwH,MAAtH,AAA+E,4DAAvB,AAAW,gEAA+C;AACI,MAAtH,AAA+E,4DAAvB,AAAW,gEAA+C;IACpH;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACkC,MAA9C,AAAiC;AACW,MAA5C,AAA+B;IACtC;qBAEoB;AACZ,yBAAe,8CAAmD,AAAM,mBAAC;AACzE,iBAAY;AAC6B,MAA/C,AAAK,IAAD,8BAAgB,WAAQ,AAAa,YAAD;IAC1C;;8EAlImD,YAAgB;IAbxC,uBAA0B;IACX;IAC5B;IACkB;IACK;IACH;IAC1B;IACM;IACT;IACD;IACA;IACA;IACY;AACkE,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2J9G,UAAU,AAAsB,+BAAG;AACqD,QAAhF,8BAAwB,4BAA2B;;AAE3D,YAAY;IACd;;AAGE,UAAU,AAAgB,yBAAG;AAC4D,QAAjF,wBAAkB,mCAAkC;;AAE5D,YAAY;IACd;;AAImE,MAA5D,oBAAuB,gEAA6B,MAAM;AACzD,kBAAa,AAAY;AACwB,MAAvD,yBAAsB,KAAK,EAAE,kBAAkB;AACQ,MAAvD,yBAAsB,KAAK,EAAE,kBAAkB;AACc,MAA7D,AAAK,6BAAwB,KAAK,EAAE;AACI,MAAxC,yBAAsB,KAAK,EAAE,QAAQ;AACU,MAA/C,yBAAsB,KAAK,EAAE,eAAe;AACxB,MAApB,AAAK,cAAS,KAAK;AAKuL,MAJrM,oCAA6B,2BAC5B,0CAAoC,gCAAc,cAChC,2CAAkB,AAAW,AAAW,AAAW,AAAW,oFAA8E,AAAW,AAAW,AAAW,gFAEtL,2CAAkB,AAAW,AAAW,AAAW,AAAW,oFAA8E,AAAW,AAAW,AAAW;AACjE,MAAtH,qCAAwC,gDAAwB,KAAK,qBAAO,0BAAwB,mBAAa;AAK+W,MAJhe,4CAAqC,2BACpC,kDAAoC,wCAAsB,cACxC,gFAA0B,AAAW,AAAW,AAAW,AAAW,6DAAqB,yCAA4B,AAAW,AAAW,AAAW,qDAAc,KAAK,2BAAO,AAAW,AAAW,AAAW,AAAW,qEAA6B,sCAAyB,AAAW,AAAW,AAAW,qEAAmB,AAAW,AAAW,AAAW,AAAW,qEAA6B,6BAAgB,AAAW,AAAW,AAAW,qDAAc,yCAEzd,gFAA0B,AAAW,AAAW,AAAW,AAAW,6DAAqB,yCAA4B,AAAW,AAAW,AAAW,qDAAc,KAAK,2BAAO,AAAW,AAAW,AAAW,AAAW,qEAA6B,sCAAyB,AAAW,AAAW,AAAW,qEAAmB,AAAW,AAAW,AAAW,AAAW,qEAA6B,6BAAgB,AAAW,AAAW,AAAW,qDAAc;AACha,MAA1D,oBAAuB,4DAA2B,MAAM;AACvD,kBAAa,AAAY;AACwB,MAAvD,yBAAsB,KAAK,EAAE,QAAQ;AACjB,MAApB,AAAK,cAAS,KAAK;AACoD,MAAlE,mCAAsC,4CAAsB,KAAK;AACd,MAAnD,AAAY,yBAAY;AAG3B,MAFG,AAAY,mCAAsB,oCAA8B,uBACnE,4BAAC,KAAK;AAEwD,MAA3D,oBAAuB,8DAA4B,MAAM;AACxD,kBAAa,AAAY;AACX,MAApB,AAAK,cAAS,KAAK;AACgC,MAA9C,iBAAW,qCAAc,GAAG,MAAM,MAAM,KAAK;AAK8iD,MAJ3lD,8CAAuC,2BACtC,oDAAoC,0CAAwB,cAC1C,mEAA4B,AAAW,AAAW,AAAW,AAAW,qEAA6B,kCAAqB,AAAW,AAAW,AAAW,kFAAmB,AAAW,AAAW,AAAW,AAAW,qEAA6B,0CAA6B,AAAW,AAAW,AAAW,qDAAc,mBAAW,AAAW,AAAW,AAAW,AAAW,6DAAqB,0BAAa,AAAW,AAAW,AAAW,0EAAmB,AAAW,AAAW,AAAW,AAAW,6DAAqB,kCAAqB,AAAW,AAAW,AAAW,sEAAmB,AAAW,AAAW,AAAW,AAAW,6DAAqB,8BAAiB,AAAW,AAAW,AAAW,oEAAmB,AAAW,AAAW,AAAW,AAAW,6DAAqB,4BAAe,AAAW,AAAW,AAAW,mFAAmB,AAAW,AAAW,AAAW,AAAW,4EAAuG,AAAW,AAAW,AAAW,gEAAmB,AAAW,AAAW,AAAW,AAAW,4EAA+E,AAAW,AAAW,AAAW,+DAAmB,AAAW,AAAW,AAAW,AAAW,4EAAmF,AAAW,AAAW,AAAW,6EAAmB,AAAW,AAAW,AAAW,AAAW,qEAA6B,qCAAwB,AAAW,AAAW,AAAW,qDAAmB,mBAAkB,gBAAU,+BAAW,KAAK,wCAEvlD,mEAA4B,AAAW,AAAW,AAAW,AAAW,qEAA6B,kCAAqB,AAAW,AAAW,AAAW,kFAAmB,AAAW,AAAW,AAAW,AAAW,qEAA6B,0CAA6B,AAAW,AAAW,AAAW,qDAAc,mBAAW,AAAW,AAAW,AAAW,AAAW,6DAAqB,0BAAa,AAAW,AAAW,AAAW,0EAAmB,AAAW,AAAW,AAAW,AAAW,6DAAqB,kCAAqB,AAAW,AAAW,AAAW,sEAAmB,AAAW,AAAW,AAAW,AAAW,6DAAqB,8BAAiB,AAAW,AAAW,AAAW,oEAAmB,AAAW,AAAW,AAAW,AAAW,6DAAqB,4BAAe,AAAW,AAAW,AAAW,mFAAmB,AAAW,AAAW,AAAW,AAAW,4EAAuG,AAAW,AAAW,AAAW,gEAAmB,AAAW,AAAW,AAAW,AAAW,4EAA+E,AAAW,AAAW,AAAW,+DAAmB,AAAW,AAAW,AAAW,AAAW,4EAAmF,AAAW,AAAW,AAAW,6EAAmB,AAAW,AAAW,AAAW,AAAW,qEAA6B,qCAAwB,AAAW,AAAW,AAAW,qDAAmB,mBAAkB,gBAAU,+BAAW,KAAK;AACvlD,sBAAY;AACkC,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACiB,MAA5D,mBAAsB,qBAAW,gBAAU,gBAAgB;AAK9D,MAJG,AAAY,mCAAsB,mCAA6B,sCAElE,8BAAM;AAGgE,MAAxE,AAAM,KAAD,oBAAkB,SAAS,AAAK,iDAAmB;AACmB,MAA3E,AAAM,KAAD,oBAAkB,YAAY,AAAK,iDAAmB;AACrD,2BAAsB,AAA6B,AAAQ,kDAAO,AAAK,qDAAmB;AACpB,MAA5E,AAAK,mCAA8B,uBAAC,KAAK,EAAO,kBAAW,yCAAC,cAAc;IAC5E;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAM,AAAU,KAAK,KAAW,6CAA4B,AAAU,KAAK,KAAW,qCAAqB,AAAU,KAAK,KAAW;AACnI,gBAAY;;;AAGhB,UAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,YAAM,AAAU,KAAK,KAAW,4CAA2B,AAAU,KAAK,KAAW,oCAAoB,AAAU,KAAK,KAAW;AACjI,gBAAY;;AAEd,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACa,6BAAwB;AACtD,yBAAe,8CAA8C,AAAoE,AAAM,4DAAlB,+BAAmB;AAC/H,MAAf,UAAU;AACV,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,oBAAI,UAAU;AACmC,QAA1C,AAA0B,yCAAS;AACO,QAA1C,AAA0B,yCAAS;;AAE3B,MAAf,UAAU;AACV,oBAAI,UAAU;AAC4C,QAAnD,AAA2B,wCAAO;AACzB,QAAd,UAAU;;AAEZ,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACV,oBAAI,UAAU;AACgC,QAAvC,AAA4B,4CAAU;AAC7B,QAAd,UAAU;AACV,YAAgB,AAAE,IAAE,MAAI;AAC4B,UAA7C,AAA4B,4CAAW,AAAE,IAAE;AAClC,UAAd,UAAU;;;AAGR,sBAAY,gBAAgB;AAClC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACX,QAA9C,AAA4B,2CAAS,SAAS;AACrC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEb,sBAAY,AAAa,YAAD;AAC9B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,uBAAuB;AACpC,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,gBAAU,SAAS;;AAE1B,qBAAc;AACe,QAAtB,AAAW;;AAEwB,MAArC,AAAS;AAC4B,MAArC,AAAS;AACgC,MAAzC,AAAY,oCAAkB,UAAU;AACC,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;AACe,MAA3B,AAAY;AACe,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AACoC,UAA3C,AAA0B;AACmB,UAA7C,AAA4B;;;IAGvC;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACsB,MAAlC,AAAY;AACsB,MAAlC,AAAY;AAC2B,MAAvC,AAA0B;AACe,MAAzC,AAA4B;IACnC;qBAEoB;AACM,MAAjB,WAAP;IACF;qBAEoB;AACM,MAAjB,WAAP;IACF;qBAEoB;AACoB,wBAAmB;AACrC,MAApB,AAAY,WAAD;IACb;;8EAlLmD,YAAgB;IAf7B;IAC9B;IACyB;IACH;IACM;IACL;IACM;IACvB;IACkB;IACxB;IACA;IACM;IACC;IACX;IACA;AAC8E,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqM9G,UAAU,AAAyB,kCAAG;AAK8Q,QAJ5S,2CAAoC,2BACpC,+CAAoC,qCAAmB,cAC9C,uDAAiC,AAA+E,4DAAvB,AAAW,sEAA0C,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAe,AAAW,AAAW,AAAW,AAAW,gGAEtS,uDAAiC,AAA+E,4DAAvB,AAAW,sEAA0C,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAe,AAAW,AAAW,AAAW,AAAW;;AAErS,YAAY;IACd;;AAIuE,MAAhE,oBAAuB,yEAAiC,MAAM;AAC7D,kBAAa,AAAY;AACsH,MAArJ,AAAK,6BAAwB,KAAK,EAAE,+BAA4B,IAAI,wBAAwB,aAAqD;AAC7H,MAApB,AAAK,cAAS,KAAK;AACgC,MAA9C,iBAAW,qCAAc,GAAG,MAAM,MAAM,KAAK;AAKoS,MAJjV,mDAA4C,2BAC3C,yDAAoC,+CAA6B,cAC/C,yDAA4B,KAAK,EAAE,AAAoE,4DAAZ,uEAA8C,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,qCAAwB,AAAW,AAAW,AAAW,AAAW,gEAAmB,mBAAa,gDAE1U,yDAA4B,KAAK,EAAE,AAAoE,4DAAZ,uEAA8C,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,qCAAwB,AAAW,AAAW,AAAW,AAAW,gEAAmB,mBAAa;AAKyF,MAJpa,gDAAyC,2BACxC,sDAAoC,4CAA0B,cAC5C,qEAA8B,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,yCAA4B,AAAW,AAAW,AAAW,AAAW,gEAAmB,gBAAU,KAAK,EAAO,gBAAe,gCAAkB,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAoB,0BAAa,AAAW,AAAW,AAAW,AAAW,gEAAc,MAAM,6CAE7Z,qEAA8B,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,yCAA4B,AAAW,AAAW,AAAW,AAAW,gEAAmB,gBAAU,KAAK,EAAO,gBAAe,gCAAkB,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAoB,0BAAa,AAAW,AAAW,AAAW,AAAW,gEAAc,MAAM;AAGja,MAFG,AAAY,mCAAsB,wCAAkC,uBACvE,qBAAM,AAAe;AAEjB,2BAAsB,AAAiC,AAAQ,sDAAO,AAAK,qDAAmB;AAC/B,MAArE,AAAK,mCAA8B,uBAAM,kBAAW,yCAAC,cAAc;IACrE;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAY;;AAEd,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACjB,8BAAoB,8CAAmD,AAAM,mBAAC;AACrE,MAAf,UAAU;AACV,oBAAI,UAAU;AACiD,QAAxD,AAAiC,yDAAkB;AAC1C,QAAd,UAAU;;AAED,sBAAa,WAAC,AAAK,IAAD,SAAS,iBAAiB;AACvD,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yBAAyB;AACf,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD,6BAA6B,iBAAiB;AACpE,oBAAI,2BAA0B,eAAS,SAAS,EAAE,4CAA4C;AAClC,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,oBAAI,UAAU;AACZ,YAAgD,mEAAsB;AAC6B,UAA3F,AAA8B,2CAAwC;;;AAGrE,sBAAa,WAAC,AAAK,IAAD,SAAS,iBAAiB;AACvD,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yBAAyB;AACnB,QAAjD,AAA8B,8CAAU,SAAS;AAC9B,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe,gDAAwB,UAAU;AACF,QAAxC,AAA8B;;AAEK,MAArC,AAAS;AACgC,MAAzC,AAAY,oCAAkB,UAAU;AAC4C,MAApF,AAAe,gCAAW,+BAA4B,AAAkB,iBAAD;AAC5C,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AACwC,UAA/C,AAA8B;;;IAGzC;;AAI8I,MAA5I,AAAqG,4DAA7C,AAAW,AAAW,AAAW,sFAA+C;IAC1I;;AAIoC,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACkC,MAA9C,AAAiC;AACU,MAA3C,AAA8B;IACrC;qBAEoB;AACZ,yBAAe,8CAA8C,AAA+E,AAAM,4DAA7B,AAAW,0CAAmB;AACnJ,8BAAoB,8CAAmD,AAAM,mBAAC;AAC9E,iBAAY;AACsD,MAAxE,AAAK,IAAD,0CAA4B,WAAQ,YAAY,EAAE,iBAAiB;IACzE;;8EArHmD,YAAgB;IATxC,uBAA0B;IACX;IAC5B;IACuB;IACH;IAC1B;IACJ;IACA;IACA;AAC8E,yFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoI7C,MAA5D,oBAAuB,iEAA6B,MAAM;AACzD,kBAAa,AAAY;AACc,MAA7C,yBAAsB,KAAK,EAAE,aAAa;AACiB,MAA3D,yBAAsB,KAAK,EAAE,2BAA2B;AACpC,MAApB,AAAK,cAAS,KAAK;AAKoH,MAJlI,yCAAkC,2BACjC,+CAAoC,qCAAmB,cACrC,yDAAuB,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,+DAEnH,yDAAuB,AAAW,AAAW,+CAA6B,kCAAqB,AAAW;AAKsK,MAJ1R,+CAAwC,2BACvC,qDAAoC,2CAAyB,cAC3C,6CAA6B,8BAA6B,wCAAkB,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,iDAAmB,AAAW,AAAW,+CAA6B,+BAAkB,AAAW,qEAE3Q,6CAA6B,8BAA6B,wCAAkB,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,iDAAmB,AAAW,AAAW,+CAA6B,+BAAkB,AAAW;AACvN,MAArD,AAAY,yBAAY;AACL,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,8BAAc,AAAE,MAAG,SAAS;AACzD,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,oBAAI,UAAU;AACoD,QAA3D,AAA6B,6DAA0B;AAC9C,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,eAAe;AACb,QAA7C,AAA6B,0CAAO,SAAS;AACpC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,qBAAe,gDAAwB,UAAU;AACH,QAAvC,AAA6B;;AAEU,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AACuC,UAA9C,AAA6B;;;IAGxC;;AAIyC,MAAlC,AAAY;AAC8B,MAA1C,AAA6B;IACpC;;+EAjEoD,YAAgB;IAJ9B;IACX;IACM;IAC7B;AAC+E,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkGzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACU,MAA1C,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACkD,MAAhE,oBAAuB,yEAAiC,MAAM;AAC7D,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AACuI,MAAzJ,AAAK,6BAAwB,KAAK,EAAE,+BAA4B,IAAI,4BAA4B,aAAqD;AACjI,MAApB,AAAK,cAAS,KAAK;AAKsQ,MAJpR,mDAA4C,2BAC3C,yDAAoC,+CAA6B,cAC/C,yDAA4B,KAAK,uBAAO,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa,gDAE7Q,yDAA4B,KAAK,uBAAO,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa;AACnN,MAA3D,oBAAuB,8DAA4B,MAAM;AACxD,kBAAa,AAAY;AACX,MAApB,AAAK,cAAS,KAAK;AACuC,MAArD,+BAAkC;AACe,MAAjD,0BAAoB,CAAM;AACmC,MAA7D,qBAAwB,yBAAa,yBAAmB;AACmF,MAA3I,oCAAuC,8CAAuB,MAAM,MAAW,oBAAmB,mBAAkB;AACqB,MAAzI,gDAAmD,gFAAuC,mCAAkC;AACxC,MAApF,AAAY,mCAAsB,mCAA6B;AAC9D,kBAAQ,AAAI,GAAD,iBAAe;AACZ,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAoB,KAAK,EAAE,+BAA6D;AAGtG,MAFG,AAAY,mCAAsB,wCAAkC,uBACvE,wBAAC,KAAK,EAAE,KAAK;AAEsD,MAAhE,oBAAuB,yEAAiC,MAAM;AAC7D,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AAC2I,MAA7J,AAAK,6BAAwB,KAAK,EAAE,+BAA4B,IAAI,gCAAgC,aAAqD;AACrI,MAApB,AAAK,cAAS,KAAK;AAKsQ,MAJpR,mDAA4C,2BAC3C,yDAAoC,+CAA6B,cAC/C,yDAA4B,KAAK,uBAAO,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa,gDAE7Q,yDAA4B,KAAK,uBAAO,AAAW,AAAW,+CAA6B,kCAAqB,AAAW,uDAAmB,AAAW,AAAW,+CAA6B,qCAAwB,AAAW,+BAAmB,mBAAa;AACnN,MAA3D,oBAAuB,8DAA4B,MAAM;AACxD,kBAAa,AAAY;AACX,MAApB,AAAK,cAAS,KAAK;AACuC,MAArD,+BAAkC;AACe,MAAjD,0BAAoB,CAAM;AACmC,MAA7D,qBAAwB,yBAAa,yBAAmB;AACmF,MAA3I,oCAAuC,8CAAuB,MAAM,MAAW,oBAAmB,mBAAkB;AACqB,MAAzI,gDAAmD,gFAAuC,mCAAkC;AACxC,MAApF,AAAY,mCAAsB,mCAA6B;AAC9D,kBAAQ,AAAI,GAAD,iBAAe;AACZ,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAoB,KAAK,EAAE,+BAA6D;AAGtG,MAFG,AAAY,mCAAsB,wCAAkC,uBACvE,wBAAC,KAAK,EAAE,KAAK;AAET,2BAAsB,AAAiC,AAAQ,sDAAO,AAAK,qDAAmB;AAC5B,MAAxE,AAAM,KAAD,oBAAkB,SAAS,AAAK,iDAAmB;AAClD,2BAAsB,AAAa,AAAO,iCAAO,AAAK,yDAAmB;AACzE,2BAAsB,AAAiC,AAAQ,sDAAO,AAAK,qDAAmB;AAC5B,MAAxE,AAAM,KAAD,oBAAkB,SAAS,AAAK,iDAAmB;AAClD,2BAAsB,AAAa,AAAO,iCAAO,AAAK,yDAAmB;AAC8B,MAA7G,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc,EAAE,cAAc,EAAE,cAAc,EAAE,cAAc;IAC7G;wBAGoC,OAAW,WAAmB;AAChE,UAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,YAAK,AAAE,MAAG,SAAS;AACjB,cAAI,AAAU,KAAK,KAAW;AAC5B,kBAAY;;AAEd,cAAI,AAAU,KAAK;AACjB,kBAAY;;AAEd,cAAK,AAAU,KAAK,KAAW,6BAAY,AAAU,KAAK,KAAW;AACnE,kBAAY;;AAEd,cAAQ,AAAU,KAAK,KAAW,4CAA2B,AAAU,KAAK,KAAW,uCAAuB,AAAU,KAAK,KAAW,wCAAwB,AAAU,KAAK,KAAW,+BAAe,AAAU,KAAK,KAAW;AACjO,kBAAY;;;AAGhB,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAY;;;AAGhB,UAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,YAAK,AAAE,MAAG,SAAS;AACjB,cAAI,AAAU,KAAK,KAAW;AAC5B,kBAAY;;AAEd,cAAI,AAAU,KAAK;AACjB,kBAAY;;AAEd,cAAK,AAAU,KAAK,KAAW,6BAAY,AAAU,KAAK,KAAW;AACnE,kBAAY;;AAEd,cAAQ,AAAU,KAAK,KAAW,4CAA2B,AAAU,KAAK,KAAW,uCAAuB,AAAU,KAAK,KAAW,wCAAwB,AAAU,KAAK,KAAW,+BAAe,AAAU,KAAK,KAAW;AACjO,kBAAY;;;AAGhB,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,oBAAI,UAAU;AACiD,QAAxD,AAAiC,yDAAkB;AAC1C,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD,YAAY,AAAK,IAAD;AACtC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,gCAAgC;AACtB,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,eAAe;AAC5B,QAA9B,AAAa,2BAAQ,SAAS;AACrB,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAa;;AAEpB,qBAAe,gDAAwB,UAAU;AACnB,QAAvB,AAAa;;AAEL,MAAf,UAAU;AACV,oBAAI,UAAU;AAC+C,QAAtD,AAA4B,uDAAqB;AACxC,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,sBAAsB;AACjB,QAAhD,AAA4B,6CAAW,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACV,oBAAI,UAAU;AACiD,QAAxD,AAAiC,yDAAkB;AAC1C,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD,YAAY,AAAK,IAAD;AACtC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oCAAoC;AAC1B,QAArD,AAAiC,kDAAW,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,mBAAmB;AAChC,QAA9B,AAAa,2BAAQ,SAAS;AACrB,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAa;;AAEpB,qBAAe,gDAAwB,UAAU;AACnB,QAAvB,AAAa;;AAEL,MAAf,UAAU;AACV,oBAAI,UAAU;AAC+C,QAAtD,AAA4B,uDAAqB;AACxC,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,sBAAsB;AACjB,QAAhD,AAA4B,6CAAW,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAE2B,MAAzC,AAAY,oCAAkB,UAAU;AACC,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;AACe,MAA3B,AAAY;AACe,MAA3B,AAAY;AACe,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AACsC,UAA7C,AAA4B;AACiB,UAA7C,AAA4B;;;IAGvC;;AAI6G,MAA3G,AAAoE,4DAAZ,qDAA+C;IACzG;;AAIyC,MAAlC,AAAY;AACsB,MAAlC,AAAY;AACsB,MAAlC,AAAY;AACsB,MAAlC,AAAY;AAC6B,MAAzC,AAA4B;AACyB,MAArD,AAAwC;AACM,MAA9C,AAAiC;AACQ,MAAzC,AAA4B;AACyB,MAArD,AAAwC;AACM,MAA9C,AAAiC;IACxC;qBAEoB;AACZ,iBAAY;AACgC,MAAlD,AAAK,IAAD,8BAAgB,WAAQ,AAAK,IAAD;IAClC;qBAEoB;AACM,MAAjB,WAAP;IACF;qBAEoB;AACZ,iBAAY;AACO,MAAzB,AAAK,IAAD,eAAC,aAAc;IACrB;qBAEoB;AACZ,iBAAY;AACoC,MAAtD,AAAK,IAAD,8BAAgB,WAAQ,AAAK,IAAD;IAClC;qBAEoB;AACM,MAAjB,WAAP;IACF;qBAEoB;AACZ,iBAAY;AACW,MAA7B,AAAK,IAAD,mBAAC,aAAkB;IACzB;;+EA/PoD,YAAgB;IAtB1B;IACL;IACA;IACV;IACb;IACG;IACe;IACW;IACD;IACL;IACA;IACV;IACb;IACG;IACe;IACW;IACvC;IACA;IACA;IACA;IACA;IACA;AAC+E,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6QzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACgB,MAAhD,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACqD,MAAnE,oBAAuB,+EAAoC,MAAM;AAChE,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AACE,MAApB,AAAK,cAAS,KAAK;AAK6M,MAJ3N,sDAA+C,2BAC9C,4DAAoC,kDAAgC,cAClD,4EAAoC,AAAW,AAAW,uCAAqB,0BAAa,AAAW,+BAAc,AAAoE,4DAAZ,uFAEtL,4EAAoC,AAAW,AAAW,uCAAqB,0BAAa,AAAW,+BAAc,AAAoE,4DAAZ;AAC3H,MAA5D,AAAY,yBAAY;AACL,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,SAAS;AACC,QAArD,AAAoC,kDAAQ,SAAS;AAClC,QAAnB,gBAAU,SAAS;;AAEM,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;IACnB;;+EAlCoD,YAAgB;IAHvB;IACL;IACpC;AAC+E,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyEzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACY,MAA5C,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACb,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,kBAAQ,sBAAmB,GAAG,EAAE,KAAK;AACA,MAA3C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AAC8C,MAA5D,oBAAuB,iEAA6B,MAAM;AACzD,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AAC0B,MAA5C,AAAK,6BAAwB,KAAK,EAAE;AAChB,MAApB,AAAK,cAAS,KAAK;AACmE,MAAjF,qCAAwC,iDAA6B;AAChB,MAArD,AAAY,yBAAY;AACvB,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AACV,MAAtC,cAAQ,sBAAmB,GAAG,EAAE,KAAK;AACW,MAArD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,uBAAa,yBAA2B;AACS,MAAlD,kBAAY,qCAAc,IAAI,GAAG,MAAM,UAAU;AAC1C,8BAAoB,iCAAiB;AACQ,MAApD,mBAAa,mBAAU,iBAAW,iBAAiB;AAClD,uBAAa,yBAA2B;AACS,MAAlD,kBAAY,qCAAc,IAAI,GAAG,MAAM,UAAU;AAC1C,8BAAoB,iCAAiB;AACQ,MAApD,mBAAa,mBAAU,iBAAW,iBAAiB;AAClD,2BAAsB,AAA6B,AAAY,sDAAO,AAAK,iEAAmB;AAC9F,2BAAsB,AAA6B,AAAY,sDAAO,AAAK,yDAAmB;AACvB,MAA7E,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc,EAAE,cAAc;IAC7E;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACW,MAA7B,AAAU,uBAAO,AAAK,IAAD;AACQ,MAA7B,AAAU,uBAAO,AAAK,IAAD;AACX,MAAf,UAAU;AACJ,sBAAY,AAAK,AAAM,IAAP;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,iBAAiB;AACZ,QAAhD,AAA6B,6CAAU,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACN,QAAnD,AAA6B,gDAAa,SAAS;AAC1C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oBAAoB;AACN,QAAzD,AAA6B,sDAAmB,SAAS;AAChD,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACN,QAAhD,AAA6B,6CAAU,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACN,QAAhD,AAA6B,6CAAU,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,AAAM,IAAb;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,qBAAqB;AAClB,QAA9C,AAA6B,2CAAQ,SAAS;AACrC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,wBAAwB;AACN,QAA7D,AAA6B,0DAAuB,SAAS;AACpD,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,AAAS,IAAhB;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,wBAAwB;AACrB,QAA9C,AAA6B,2CAAQ,SAAS;AACrC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,qBAAe,gDAAwB,UAAU;AACH,QAAvC,AAA6B;;AAEc,MAA7C,AAAU,uBAAO,AAAK,AAAM,IAAP;AACwB,MAA7C,AAAU,uBAAO,AAAK,AAAM,IAAP;AACsB,MAA3C,AAAU,uBAAO,AAAK,IAAD;AACqB,MAA1C,AAAU,uBAAQ,WAAC,AAAK,IAAD;AACiB,MAAxC,AAAW,wBAAO,AAAK,IAAD;AACsB,MAA5C,AAAW,wBAAO,AAAK,IAAD;AACe,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC6B,MAAtC,AAAU;AAC4B,MAAtC,AAAU;AACT,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACE,QAA7D,+BAAiC,aAAO,WAAW,SAAS;AACpC,QAAnB,gBAAU,SAAS;;AAEM,MAA3B,AAAY;IACnB;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACqB,MAA9B,AAAU;AACoB,MAA9B,AAAU;AACwB,MAAlC,AAAY;AAC8B,MAA1C,AAA6B;IACpC;qBAEoB;AACZ,iBAAY;AACgB,MAAlC,AAAK,AAAM,AAAS,IAAhB,wBAAgB,oBAAQ;IAC9B;qBAEoB;AACZ,iBAAY;AACa,MAA/B,AAAK,AAAM,AAAM,IAAb,qBAAa,gBAAQ;IAC3B;;+EAnKoD,YAAgB;IA5BtD;IACT;IACS;IACT;IACiC;IACL;IACnB;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACe;AACgE,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkLzG,iBAAY;AACZ,gBAAc;AACiB,oBAAhC,iBAAQ,AAAI,GAAD,iBAAe;AACyB,MAAxD,yBAA2B,aAAO,mBAAmB;AACA,MAArD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACiF,MAA/F,6BAAgC,wDAA6B,yCAAqB,aAAO;AACxF,kBAAQ,sBAAmB,GAAG,EAAO;AACK,MAAhD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAoB,KAAK,EAAE,+BAA6D;AACzC,MAA1D,oBAAuB,4DAA2B,MAAM;AACvD,kBAAa,AAAY;AACP,MAAnB,AAAM,qBAAO,KAAK;AAC2B,MAAlD,AAAK,6BAAwB,KAAK,EAAE;AACe,MAAnD,yBAAsB,KAAK,EAAE,QAAQ;AACjB,MAApB,AAAK,cAAS,KAAK;AACoD,MAAlE,mCAAsC,4CAAsB,KAAK;AACd,MAAnD,AAAY,yBAAY;AAC2E,MAAnG,AAAM,+BAAiB,SAAS,AAAK,4CAAiD,UAA9B,AAAqB;AAC4B,MAAzG,AAAM,+BAAiB,YAAY,AAAK,+CAAiD,UAA9B,AAAqB;AAC/E,2BAAsB,AAAqB,AAAS,AAAQ,mDAAO,AAAK,+BAAmB,UAAL,IAAI;AAC9B,MAAlE,AAAK,mCAA8B,uBAAM,eAAQ,yCAAC,cAAc;IAClE;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,qCAA+B,aAAV,SAAS,KAAI;AAC/D,cAAY,AAAqB;;AAEnC,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,oBAAI,UAAU;AACwC,QAA/C,AAA2B,wCAAO;AACzB,QAAd,UAAU;;AAEZ,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAE0C,MAAxD,AAAqB,6CAAkB,MAAW;AACvB,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;IACnB;;+EAvDoD,YAAgB;IAJvC;IACO;IACL;IACZ;AACgE,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;AAkEzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACiB,MAAjD,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACK,MAAxB,AAAK,kBAAa,KAAK;IACzB;;+EARoD,YAAgB;AAAe,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;AAmBzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACW,MAA3C,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACb,oBAAU,uBAAoB,KAAK,EAAE,+BAA6D;AAChF,MAAxB,AAAK,kBAAa,KAAK;IACzB;;+EAToD,YAAgB;AAAe,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;AA+BzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACW,MAA3C,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AAC8C,MAA5D,oBAAuB,iEAA6B,MAAM;AACzD,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AACsC,MAAxD,AAAK,6BAAwB,KAAK,EAAE;AAChB,MAApB,AAAK,cAAS,KAAK;AACmE,MAAjF,qCAAwC,iDAA6B;AAChB,MAArD,AAAY,yBAAY;AACvB,2BAAsB,AAA6B,AAAY,sDAAO,AAAK,iEAAmB;AAC9F,2BAAsB,AAA6B,AAAY,sDAAO,AAAK,yDAAmB;AACvB,MAA7E,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc,EAAE,cAAc;IAC7E;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACC,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,4BAA4B;AACtB,QAAjD,AAA6B,8CAAW,SAAS;AACxC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,IAAP;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,sBAAsB;AACjB,QAAhD,AAA6B,6CAAU,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACN,QAAnD,AAA6B,gDAAa,SAAS;AAC1C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oBAAoB;AACN,QAAzD,AAA6B,sDAAmB,SAAS;AAChD,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,IAAP;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,iBAAiB;AACZ,QAAhD,AAA6B,6CAAU,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,IAAP;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,iBAAiB;AACZ,QAAhD,AAA6B,6CAAU,SAAS;AACvC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,AAAW,IAAlB;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,0BAA0B;AACvB,QAA9C,AAA6B,2CAAQ,SAAS;AACrC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,wBAAwB;AACN,QAA7D,AAA6B,0DAAuB,SAAS;AACpD,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,AAAM,AAAS,IAAhB;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,wBAAwB;AACrB,QAA9C,AAA6B,2CAAQ,SAAS;AACrC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,qBAAe,gDAAwB,UAAU;AACH,QAAvC,AAA6B;;AAEJ,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;AAC8B,MAA1C,AAA6B;IACpC;qBAEoB;AACZ,iBAAY;AACgB,MAAlC,AAAK,AAAM,AAAS,IAAhB,wBAAgB,oBAAQ;IAC9B;qBAEoB;AACZ,iBAAY;AACkB,MAApC,AAAK,AAAM,AAAW,IAAlB,0BAAkB,gBAAQ;IAChC;;+EAtGoD,YAAgB;IAX9B;IACL;IAC7B;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AAC+E,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4HzG,iBAAY;AACZ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACsB,MAAtD,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACwB,MAAtC,cAAQ,sBAAmB,GAAG,EAAE,KAAK;AACc,MAAxD,yBAA2B,aAAO,mBAAmB;AACO,MAA5D,AAAK,sBAAsB,aAAO;AACiC,MAAnE,yBAA2B,aAAO,8BAA8B;AACvC,MAAzB,AAAK,cAAc;AACiF,MAA/F,6BAAgC,wDAA6B,yCAAqB,aAAO;AAK2D,MAJpJ,2DAAoD,2BACnD,iEAAoC,uDAAqC,cACvD,0EAAyC,8BAAY,AAAW,AAAW,uCAAqB,8BAAiB,AAAW,iFAErI,0EAAyC,8BAAY,AAAW,AAAW,uCAAqB,8BAAiB,AAAW;AACrI,kBAAQ,uBAAoB,GAAG,EAAO;AACC,MAA7C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACsB,MAAzC,AAAM,KAAD,UAAa,AAAe;AAC8B,MAA1D,oBAAuB,4DAA2B,MAAM;AACpB,MAApC,cAAa,AAAY;AACD,MAAxB,AAAM,qBAAY;AACiD,MAAxE,AAAK,6BAA6B,aAAO;AACmB,MAA5D,yBAA2B,aAAO,QAAQ;AACjB,MAAzB,AAAK,gCAAc;AACyD,MAAvE,mCAAsC,8DAA2B;AACd,MAAnD,AAAY,yBAAY;AAC8B,MAAtD,oBAAuB,4DAAuB,MAAM;AACnD,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AACoC,MAAtD,AAAK,6BAAwB,KAAK,EAAE;AAChB,MAApB,AAAK,cAAS,KAAK;AACuD,MAArE,+BAAkC,4CAAuB;AACV,MAA/C,AAAY,yBAAY;AACgD,MAAxE,AAAM,+BAAiB,SAAS,AAAK,iDAAmB;AACiD,MAAzG,AAAM,+BAAiB,YAAY,AAAK,+CAAiD,UAA9B,AAAqB;AAC4B,MAA5G,AAAM,+BAAiB,WAAW,AAAK,+CAA4D,UAAzC;AACoD,MAA9G,AAAM,+BAAiB,QAAQ,AAAK,6BAA4D,UAAzC;AACkE,MAAzH,AAAM,+BAAiB,aAAa,AAAK,6BAA4D,UAAzC;AAC8C,MAA1G,AAAM,+BAAiB,SAAS,AAAK,uCAA4D,UAAzC;AACvD,2BAAsB,AAAqB,AAAS,AAAQ,mDAAO,AAAK,+BAAmB,UAAL,IAAI;AACnC,MAA7D,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc;IAC7D;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,qCAAsB,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACpF,cAAY,AAAqB;;AAEnC,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,oBAAI,UAAU;AAC4C,QAAnD,AAA2B,wCAAO;AACzB,QAAd,UAAU;;AAEZ,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,iBAAiB;AACpB,QAAxC,AAAuB,qCAAQ,SAAS;AAC/B,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAE0C,MAAxD,AAAqB,6CAAkB,MAAW;AAC2B,MAA7E,AAAe,gCAAW,+BAA4B,AAAK,IAAD;AACzD,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,qBAAqB;AACD,QAApE,sCAAwC,aAAO,WAAW,SAAS;AAC3C,QAAnB,gBAAU,SAAS;;AAEM,MAA3B,AAAY;AACe,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;AACsB,MAAlC,AAAY;AACwB,MAApC,AAAuB;IAC9B;qBAEoB;AACoC,MAAjD,AAAqB,AAAS,iEAAY;AACmB,MAA7D,AAAyC;IAChD;;+EApGoD,YAAgB;IAXzC,uBAA0B;IACxB;IACgB;IACT;IACL;IACC;IACL;IACvB;IACA;IACe;IACH;AACmE,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;AA+GzG,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACoB,MAApD,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACK,MAAxB,AAAK,kBAAa,KAAK;IACzB;;+EARoD,YAAgB;AAAe,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;AA6BzG,iBAAY;AACuD,MAApE,oBAAuB,iFAAqC,MAAM;AACjE,kBAAa,AAAY;AACuB,MAAtD,AAAK,6BAAwB,KAAK,EAAE;AACc,MAAlD,yBAAsB,KAAK,EAAE,QAAQ;AACjB,MAApB,AAAK,cAAS,KAAK;AAKiT,MAJ/T,uDAAgD,2BAC/C,6DAAoC,mDAAiC,cACnD,6EAAqC,AAAW,AAAW,8DAA8H,AAAW,2CAAmB,AAAW,AAAW,uCAAqB,yBAAY,AAAW,+BAAc,4DAEhT,6EAAqC,AAAW,AAAW,8DAA8H,AAAW,2CAAmB,AAAW,AAAW,uCAAqB,yBAAY,AAAW,+BAAc;AAKpL,MAJ7H,yCAAkC,2BACjC,+CAAoC,qCAAmB,cACrC,mCAAkB,KAAK,mBAAO,AAAW,AAAW,uCAAqB,8BAAiB,AAAW,+DAE9G,mCAAkB,KAAK,mBAAO,AAAW,AAAW,uCAAqB,8BAAiB,AAAW;AAClD,MAA7D,AAAY,yBAAY;AACvB,2BAAsB,AAAqC,AAAa,+DAAO,AAAK,qCAAmB,UAAL,IAAI;AACtG,2BAAsB,AAAqC,AAAY,8DAAO,AAAK,iEAAmB;AAC/B,MAA7E,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc,EAAE,cAAc;IAC7E;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACJ,sBAAY,AAAK,AAAM,AAAS,IAAhB;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,wBAAwB;AACb,QAAtD,AAAqC,mDAAQ,SAAS;AAC7C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yBAAyB;AACE,QAAtE,AAAqC,mEAAwB,SAAS;AAC7D,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACE,QAAxD,AAAqC,qDAAU,SAAS;AAC/C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACE,QAAxD,AAAqC,qDAAU,SAAS;AAC/C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACE,QAAxD,AAAqC,qDAAU,SAAS;AAC/C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,8BAA8B;AACE,QAA3E,AAAqC,wEAA6B,SAAS;AAClE,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,UAAI,OAAO;AACiD,QAArD,AAAqC;;AAE5C,qBAAe,gDAAwB,UAAU;AACK,QAA/C,AAAqC;;AAEjC,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,sBAAsB;AACvB,QAA1C,AAAuB,uCAAU,SAAS;AACvB,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe,gDAAwB,UAAU;AACT,QAAjC,AAAuB;;AAEgB,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AAC+C,UAAtD,AAAqC;;;IAGhD;;AAI2I,MAAzI,AAA8E,2DAAvB,AAAW,oFAAmE;IACvI;;AAIyC,MAAlC,AAAY;AACsC,MAAlD,AAAqC;AACD,MAApC,AAAuB;IAC9B;qBAEoB;AACZ,iBAAY;AACgB,MAAlC,AAAK,AAAM,AAAS,IAAhB,wBAAgB,oBAAQ;IAC9B;;+EA5GoD,YAAgB;IAVtB;IACL;IACd;IACvB;IACA;IACA;IACA;IACA;IACA;IACA;AAC+E,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;AA8HzC,MAAjE,oBAAuB,2EAAkC,MAAM;AAC9D,kBAAa,AAAY;AAC6B,MAA5D,AAAK,6BAAwB,KAAK,EAAE;AACe,MAAnD,yBAAsB,KAAK,EAAE,QAAQ;AACjB,MAApB,AAAK,cAAS,KAAK;AAK0N,MAJxO,oDAA6C,2BAC5C,0DAAoC,gDAA8B,cAChD,uEAAkC,AAAW,AAAW,8DAA8H,AAAW,+BAAc,0DAExN,uEAAkC,AAAW,AAAW,8DAA8H,AAAW,+BAAc;AAK5F,MAJ7H,yCAAkC,2BACjC,+CAAoC,qCAAmB,cACrC,mCAAkB,KAAK,mBAAO,AAAW,AAAW,uCAAqB,8BAAiB,AAAW,+DAE9G,mCAAkB,KAAK,mBAAO,AAAW,AAAW,uCAAqB,8BAAiB,AAAW;AACrD,MAA1D,AAAY,yBAAY;AACvB,2BAAsB,AAAkC,AAAY,2DAAO,AAAK,iEAAmB;AAC5C,MAA7D,AAAK,mCAA8B,uBAAC,KAAK,IAAG,yCAAC,cAAc;IAC7D;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,sBAAsB;AACd,QAAnD,AAAkC,gDAAQ,SAAS;AAC1C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACD,QAArD,AAAkC,kDAAU,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,WAAW;AACD,QAArD,AAAkC,kDAAU,SAAS;AAC5C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEnB,UAAI,OAAO;AAC8C,QAAlD,AAAkC;;AAEzC,qBAAe,gDAAwB,UAAU;AACE,QAA5C,AAAkC;;AAEnC,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,qBAAqB;AACtB,QAA1C,AAAuB,uCAAU,SAAS;AACvB,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe,gDAAwB,UAAU;AACT,QAAjC,AAAuB;;AAEE,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AAC4C,UAAnD,AAAkC;;;IAG7C;;AAIwI,MAAtI,AAA8E,2DAAvB,AAAW,iFAAgE;IACpI;;AAIyC,MAAlC,AAAY;AACmC,MAA/C,AAAkC;AACE,MAApC,AAAuB;IAC9B;qBAEoB;AACZ,iBAAY;AACc,MAAhC,AAAK,IAAD,sBAAC,oBAAqB;IAC5B;;+EAvFoD,YAAgB;IAPzB;IACL;IACX;IACvB;IACA;IACA;IACA;AAC+E,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;AAmGpD,MAAtD,qBAAgB,mEAA8B,MAAM;AACnD,kBAAa,AAAc;AAK0Y,MAJta,2BAAqB,2BACpB,sDAAmC,4CAA0B,cAC5C,mDAAyB,KAAK,mBAAE,AAAK,iBAAqB,8BAAiB,iCAAc,AAAK,iBAAqB,0BAAa,8CAAc,AAAK,yBAA6B,uCAA0B,gCAAc,AAAK,wCAA8H,gCAAc,AAAK,iBAAqB,yBAAY,2DAExZ,mDAAyB,KAAK,mBAAE,AAAK,iBAAqB,8BAAiB,iCAAc,AAAK,iBAAqB,0BAAa,8CAAc,AAAK,yBAA6B,uCAA0B,gCAAc,AAAK,wCAA8H,gCAAc,AAAK,iBAAqB,yBAAY;AACrY,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAE+B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;AACnB,qBAAc;AACZ,sBAAI,UAAU;AACoB,UAA3B,AAAU;;;IAGrB;;;;;EACF;;;;;;;;;;AAlrEE,UAAO,yDAAiB;EAC1B;sHAyMsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHA0EsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAuHsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAsBsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAsDsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAoCsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAqJsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAuMsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;sHAoIsF,YAAgB;AACpG,UAAO,qEAA+B,UAAU,EAAE,WAAW;EAC/D;wHA2EuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHA2RuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHA2CuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAqMuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAiEuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAcuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAeuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAuHuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAqHuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAcuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHA4HuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;wHAoGuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;;AAkCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEgF,IAA3F,4BAAyB,4CAA0B;AAC9B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;;AA3uEE,YAAO;IACT;;;;;;MA/FoB,4DAA+B;YAAG,EAAS;;MA4FzD,+DAAkC;;;MA2pEpB,gEAAmC;;;MAmCnD,qCAAQ;YAAG","file":"date_range_editor.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46template: date_range_editor$46template
  };
}));

//# sourceMappingURL=date_range_editor.template.unsound.ddc.js.map
