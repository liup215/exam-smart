define(['dart_sdk', 'packages/angular_components/auto_dismiss/auto_dismiss', 'packages/angular_components/focus/focus', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/content/deferred_content', 'packages/angular_components/material_input/material_number_validators', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_datepicker/date_input', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/material_select/display_name', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_dropdown_select_accessor', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_menu/dropdown_menu', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/focus/focus_item', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/glyph/glyph', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_input/material_auto_suggest_input', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/material_chips/material_chips', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular_components/material_datepicker/material_date_time_picker', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss', 'packages/angular_components/material_expansionpanel/material_expansionpanel_set', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/material_menu/material_fab_menu', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_components/material_input/material_number_accessor', 'packages/angular_components/material_input/material_percent_directive', 'packages/angular_components/app_layout/material_persistent_drawer', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_progress/material_progress', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_select/material_select', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/material_select_searchbox', 'packages/angular_components/material_slider/material_slider', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular_components/app_layout/material_stackable_drawer', 'packages/angular_components/material_stepper/material_stepper', 'packages/angular_components/material_tab/material_tab', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_forms/src/directives', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/scorecard/scorecard', 'packages/angular_components/material_stepper/material_step', 'packages/angular_components/stop_propagation/stop_propagation', 'packages/angular_components/material_tab/tab_button', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/laminate/overlay/module', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/model/math/box', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/src/time/clock'], (function load__packages__angular_components__angular_components(dart_sdk, packages__angular_components__auto_dismiss__auto_dismiss, packages__angular_components__focus__focus, packages__angular_components__button_decorator__button_decorator, packages__angular_components__content__deferred_content, packages__angular_components__material_input__material_number_validators, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__theme__dark_theme, packages__angular_components__material_datepicker__date_input, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__material_datepicker__date_range_input, packages__angular_components__material_select__display_name, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_select__material_dropdown_select_accessor, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_menu__dropdown_menu, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_components__focus__focus_activable_item, packages__angular_components__focus__focus_item, packages__angular_components__focus__focus_list, packages__angular_components__focus__focus_trap, packages__angular_components__glyph__glyph, packages__angular_components__highlighted_text__highlighted_text, packages__angular_components__highlighted_text__highlighted_value, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__material_input__material_auto_suggest_input, packages__angular_components__material_button__material_button, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__material_chips__material_chip, packages__angular_components__material_chips__material_chips, packages__angular_components__material_datepicker__material_datepicker, packages__angular_components__material_datepicker__material_date_range_picker, packages__angular_components__material_datepicker__material_date_time_picker, packages__angular_components__material_dialog__material_dialog, packages__angular_components__material_select__material_dropdown_select, packages__angular_components__material_expansionpanel__material_expansionpanel, packages__angular_components__material_expansionpanel__material_expansionpanel_auto_dismiss, packages__angular_components__material_expansionpanel__material_expansionpanel_set, packages__angular_components__material_button__material_fab, packages__angular_components__material_menu__material_fab_menu, packages__angular_components__material_icon__material_icon, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_menu__menu_item_affix_list, packages__angular_components__material_menu__material_menu, packages__angular_components__material_list__material_list, packages__angular_components__material_list__material_list_item, packages__angular_components__material_datepicker__material_month_picker, packages__angular_components__material_input__material_input_multiline, packages__angular_components__material_input__material_number_accessor, packages__angular_components__material_input__material_percent_directive, packages__angular_components__app_layout__material_persistent_drawer, packages__angular_components__material_popup__material_popup, packages__angular_components__material_progress__material_progress, packages__angular_components__material_radio__material_radio, packages__angular_components__material_ripple__material_ripple, packages__angular_components__material_select__material_select, packages__angular_components__material_select__material_select_dropdown_item, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__material_select_searchbox, packages__angular_components__material_slider__material_slider, packages__angular_components__material_spinner__material_spinner, packages__angular_components__app_layout__material_stackable_drawer, packages__angular_components__material_stepper__material_stepper, packages__angular_components__material_tab__material_tab, packages__angular_components__material_tab__material_tab_panel, packages__angular_components__material_datepicker__material_time_picker, packages__angular_components__app_layout__material_temporary_drawer, packages__angular_components__src__material_tree__group__material_tree_group, packages__angular_components__material_toggle__material_toggle, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons, packages__angular_components__material_menu__common__menu_root, packages__angular_components__laminate__components__modal__modal, packages__angular_forms__src__directives, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__reorder_list__reorder_list, packages__angular_components__scorecard__scoreboard, packages__angular_components__scorecard__scorecard, packages__angular_components__material_stepper__material_step, packages__angular_components__stop_propagation__stop_propagation, packages__angular_components__material_tab__tab_button, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_components__utils__browser__window__module, packages__angular_components__utils__angular__imperative_view__imperative_view, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_components__utils__disposer__disposer, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__dom_service__angular_2, packages__angular_components__utils__angular__managed_zone__angular_2, packages__angular_components__src__utils__angular__managed_zone__managed_zone, packages__angular_components__laminate__overlay__module, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__model__math__box, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__src__laminate__popup__dom_popup_source, packages__quiver__src__time__clock) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auto_dismiss = packages__angular_components__auto_dismiss__auto_dismiss.auto_dismiss__auto_dismiss;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const material_number_validators = packages__angular_components__material_input__material_number_validators.material_input__material_number_validators;
  const tooltip_target = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_target;
  const icon_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__icon_tooltip;
  const ink_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__ink_tooltip;
  const paper_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__paper_tooltip;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const tooltip_source = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_source;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const date_input = packages__angular_components__material_datepicker__date_input.material_datepicker__date_input;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const date_range_input = packages__angular_components__material_datepicker__date_range_input.material_datepicker__date_range_input;
  const display_name = packages__angular_components__material_select__display_name.material_select__display_name;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const material_dropdown_select_accessor = packages__angular_components__material_select__material_dropdown_select_accessor.material_select__material_dropdown_select_accessor;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const dropdown_menu = packages__angular_components__material_menu__dropdown_menu.material_menu__dropdown_menu;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const focus_activable_item = packages__angular_components__focus__focus_activable_item.focus__focus_activable_item;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const highlighted_text = packages__angular_components__highlighted_text__highlighted_text.highlighted_text__highlighted_text;
  const highlighted_value = packages__angular_components__highlighted_text__highlighted_value.highlighted_text__highlighted_value;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_auto_suggest_input = packages__angular_components__material_input__material_auto_suggest_input.material_input__material_auto_suggest_input;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const material_chip = packages__angular_components__material_chips__material_chip.material_chips__material_chip;
  const material_chips = packages__angular_components__material_chips__material_chips.material_chips__material_chips;
  const material_datepicker = packages__angular_components__material_datepicker__material_datepicker.material_datepicker__material_datepicker;
  const material_date_range_picker = packages__angular_components__material_datepicker__material_date_range_picker.material_datepicker__material_date_range_picker;
  const material_date_time_picker = packages__angular_components__material_datepicker__material_date_time_picker.material_datepicker__material_date_time_picker;
  const material_dialog = packages__angular_components__material_dialog__material_dialog.material_dialog__material_dialog;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const material_expansionpanel = packages__angular_components__material_expansionpanel__material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const material_expansionpanel_auto_dismiss = packages__angular_components__material_expansionpanel__material_expansionpanel_auto_dismiss.material_expansionpanel__material_expansionpanel_auto_dismiss;
  const material_expansionpanel_set = packages__angular_components__material_expansionpanel__material_expansionpanel_set.material_expansionpanel__material_expansionpanel_set;
  const material_fab = packages__angular_components__material_button__material_fab.material_button__material_fab;
  const material_fab_menu = packages__angular_components__material_menu__material_fab_menu.material_menu__material_fab_menu;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const menu_item_affix_list = packages__angular_components__material_menu__menu_item_affix_list.material_menu__menu_item_affix_list;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const material_menu = packages__angular_components__material_menu__material_menu.material_menu__material_menu;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const material_list_item = packages__angular_components__material_list__material_list_item.material_list__material_list_item;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const material_input_multiline = packages__angular_components__material_input__material_input_multiline.material_input__material_input_multiline;
  const material_number_accessor = packages__angular_components__material_input__material_number_accessor.material_input__material_number_accessor;
  const material_percent_directive = packages__angular_components__material_input__material_percent_directive.material_input__material_percent_directive;
  const material_persistent_drawer = packages__angular_components__app_layout__material_persistent_drawer.app_layout__material_persistent_drawer;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_progress = packages__angular_components__material_progress__material_progress.material_progress__material_progress;
  const material_radio = packages__angular_components__material_radio__material_radio.material_radio__material_radio;
  const material_radio_group = packages__angular_components__material_radio__material_radio.material_radio__material_radio_group;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const material_select_dropdown_item = packages__angular_components__material_select__material_select_dropdown_item.material_select__material_select_dropdown_item;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_select_searchbox = packages__angular_components__material_select__material_select_searchbox.material_select__material_select_searchbox;
  const material_slider = packages__angular_components__material_slider__material_slider.material_slider__material_slider;
  const material_spinner = packages__angular_components__material_spinner__material_spinner.material_spinner__material_spinner;
  const material_stackable_drawer = packages__angular_components__app_layout__material_stackable_drawer.app_layout__material_stackable_drawer;
  const material_stepper = packages__angular_components__material_stepper__material_stepper.material_stepper__material_stepper;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const material_tab_panel = packages__angular_components__material_tab__material_tab_panel.material_tab__material_tab_panel;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const material_temporary_drawer = packages__angular_components__app_layout__material_temporary_drawer.app_layout__material_temporary_drawer;
  const material_tree_impl = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_impl;
  const material_tree_dropdown = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_dropdown;
  const material_toggle = packages__angular_components__material_toggle__material_toggle.material_toggle__material_toggle;
  const material_yes_no_buttons = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const reorder_list = packages__angular_components__reorder_list__reorder_list.reorder_list__reorder_list;
  const scoreboard = packages__angular_components__scorecard__scoreboard.scorecard__scoreboard;
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const material_step = packages__angular_components__material_stepper__material_step.material_stepper__material_step;
  const stop_propagation = packages__angular_components__stop_propagation__stop_propagation.stop_propagation__stop_propagation;
  const tab_button = packages__angular_components__material_tab__tab_button.material_tab__tab_button;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const module = packages__angular_components__utils__browser__window__module.utils__browser__window__module;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const angular_2 = packages__angular_components__utils__browser__dom_service__angular_2.utils__browser__dom_service__angular_2;
  const angular_2$ = packages__angular_components__utils__angular__managed_zone__angular_2.utils__angular__managed_zone__angular_2;
  const managed_zone = packages__angular_components__src__utils__angular__managed_zone__managed_zone.src__utils__angular__managed_zone__managed_zone;
  const module$ = packages__angular_components__laminate__overlay__module.laminate__overlay__module;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const box = packages__angular_components__model__math__box.model__math__box;
  const overlay_dom_render_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const overlay_style_config = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  var angular_components = Object.create(dart.library);
  var AutoDismissDirectiveL = () => (AutoDismissDirectiveL = dart.constFn(dart.legacy(auto_dismiss.AutoDismissDirective)))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var CachingDeferredContentDirectiveL = () => (CachingDeferredContentDirectiveL = dart.constFn(dart.legacy(deferred_content.CachingDeferredContentDirective)))();
  var CheckNonNegativeValidatorL = () => (CheckNonNegativeValidatorL = dart.constFn(dart.legacy(material_number_validators.CheckNonNegativeValidator)))();
  var ClickableTooltipTargetDirectiveL = () => (ClickableTooltipTargetDirectiveL = dart.constFn(dart.legacy(tooltip_target.ClickableTooltipTargetDirective)))();
  var DarkThemeDirectiveL = () => (DarkThemeDirectiveL = dart.constFn(dart.legacy(dark_theme.DarkThemeDirective)))();
  var DateInputDirectiveL = () => (DateInputDirectiveL = dart.constFn(dart.legacy(date_input.DateInputDirective)))();
  var DateRangeEditorComponentL = () => (DateRangeEditorComponentL = dart.constFn(dart.legacy(date_range_editor.DateRangeEditorComponent)))();
  var DateRangeInputComponentL = () => (DateRangeInputComponentL = dart.constFn(dart.legacy(date_range_input.DateRangeInputComponent)))();
  var DeferredContentDirectiveL = () => (DeferredContentDirectiveL = dart.constFn(dart.legacy(deferred_content.DeferredContentDirective)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var HasRendererLTovoid = () => (HasRendererLTovoid = dart.constFn(dart.fnType(dart.void, [HasRendererL()])))();
  var DropdownSelectValueAccessorL = () => (DropdownSelectValueAccessorL = dart.constFn(dart.legacy(material_dropdown_select_accessor.DropdownSelectValueAccessor)))();
  var DropdownButtonComponentL = () => (DropdownButtonComponentL = dart.constFn(dart.legacy(dropdown_button.DropdownButtonComponent)))();
  var DropdownMenuComponentL = () => (DropdownMenuComponentL = dart.constFn(dart.legacy(dropdown_menu.DropdownMenuComponent)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var FixedMaterialTabStripComponentL = () => (FixedMaterialTabStripComponentL = dart.constFn(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  var FocusActivableItemDirectiveL = () => (FocusActivableItemDirectiveL = dart.constFn(dart.legacy(focus_activable_item.FocusActivableItemDirective)))();
  var FocusItemDirectiveL = () => (FocusItemDirectiveL = dart.constFn(dart.legacy(focus_item.FocusItemDirective)))();
  var FocusListDirectiveL = () => (FocusListDirectiveL = dart.constFn(dart.legacy(focus_list.FocusListDirective)))();
  var FocusableDirectiveL = () => (FocusableDirectiveL = dart.constFn(dart.legacy(focus.FocusableDirective)))();
  var FocusTrapComponentL = () => (FocusTrapComponentL = dart.constFn(dart.legacy(focus_trap.FocusTrapComponent)))();
  var GlyphComponentL = () => (GlyphComponentL = dart.constFn(dart.legacy(glyph.GlyphComponent)))();
  var HighlightedTextComponentL = () => (HighlightedTextComponentL = dart.constFn(dart.legacy(highlighted_text.HighlightedTextComponent)))();
  var HighlightedValueComponentL = () => (HighlightedValueComponentL = dart.constFn(dart.legacy(highlighted_value.HighlightedValueComponent)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var LowerBoundValidatorL = () => (LowerBoundValidatorL = dart.constFn(dart.legacy(material_number_validators.LowerBoundValidator)))();
  var MaterialAutoSuggestInputComponentL = () => (MaterialAutoSuggestInputComponentL = dart.constFn(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent)))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var MaterialCalendarPickerComponentL = () => (MaterialCalendarPickerComponentL = dart.constFn(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)))();
  var MaterialCheckboxComponentL = () => (MaterialCheckboxComponentL = dart.constFn(dart.legacy(material_checkbox.MaterialCheckboxComponent)))();
  var MaterialChipComponentL = () => (MaterialChipComponentL = dart.constFn(dart.legacy(material_chip.MaterialChipComponent)))();
  var MaterialChipsComponentL = () => (MaterialChipsComponentL = dart.constFn(dart.legacy(material_chips.MaterialChipsComponent)))();
  var MaterialDatepickerComponentL = () => (MaterialDatepickerComponentL = dart.constFn(dart.legacy(material_datepicker.MaterialDatepickerComponent)))();
  var MaterialDateRangePickerComponentL = () => (MaterialDateRangePickerComponentL = dart.constFn(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)))();
  var MaterialDateTimePickerComponentL = () => (MaterialDateTimePickerComponentL = dart.constFn(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)))();
  var MaterialDialogComponentL = () => (MaterialDialogComponentL = dart.constFn(dart.legacy(material_dialog.MaterialDialogComponent)))();
  var MaterialDropdownSelectComponentL = () => (MaterialDropdownSelectComponentL = dart.constFn(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent)))();
  var MaterialExpansionPanelL = () => (MaterialExpansionPanelL = dart.constFn(dart.legacy(material_expansionpanel.MaterialExpansionPanel)))();
  var MaterialExpansionPanelAutoDismissL = () => (MaterialExpansionPanelAutoDismissL = dart.constFn(dart.legacy(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss)))();
  var MaterialExpansionPanelSetL = () => (MaterialExpansionPanelSetL = dart.constFn(dart.legacy(material_expansionpanel_set.MaterialExpansionPanelSet)))();
  var MaterialFabComponentL = () => (MaterialFabComponentL = dart.constFn(dart.legacy(material_fab.MaterialFabComponent)))();
  var MaterialFabMenuComponentL = () => (MaterialFabMenuComponentL = dart.constFn(dart.legacy(material_fab_menu.MaterialFabMenuComponent)))();
  var MaterialIconComponentL = () => (MaterialIconComponentL = dart.constFn(dart.legacy(material_icon.MaterialIconComponent)))();
  var MaterialIconTooltipComponentL = () => (MaterialIconTooltipComponentL = dart.constFn(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)))();
  var MaterialInkTooltipComponentL = () => (MaterialInkTooltipComponentL = dart.constFn(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var MaterialInputDefaultValueAccessorL = () => (MaterialInputDefaultValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)))();
  var MenuItemAffixListComponentL = () => (MenuItemAffixListComponentL = dart.constFn(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)))();
  var MenuItemGroupsComponentL = () => (MenuItemGroupsComponentL = dart.constFn(dart.legacy(menu_item_groups.MenuItemGroupsComponent)))();
  var MaterialListComponentL = () => (MaterialListComponentL = dart.constFn(dart.legacy(material_list.MaterialListComponent)))();
  var MaterialListItemComponentL = () => (MaterialListItemComponentL = dart.constFn(dart.legacy(material_list_item.MaterialListItemComponent)))();
  var MaterialMenuComponentL = () => (MaterialMenuComponentL = dart.constFn(dart.legacy(material_menu.MaterialMenuComponent)))();
  var MaterialMonthPickerComponentL = () => (MaterialMonthPickerComponentL = dart.constFn(dart.legacy(material_month_picker.MaterialMonthPickerComponent)))();
  var MaterialMultilineInputComponentL = () => (MaterialMultilineInputComponentL = dart.constFn(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)))();
  var CheckIntegerValidatorL = () => (CheckIntegerValidatorL = dart.constFn(dart.legacy(material_number_accessor.CheckIntegerValidator)))();
  var MaterialInt64ValueAccessorL = () => (MaterialInt64ValueAccessorL = dart.constFn(dart.legacy(material_number_accessor.MaterialInt64ValueAccessor)))();
  var MaterialNumberValueAccessorL = () => (MaterialNumberValueAccessorL = dart.constFn(dart.legacy(material_number_accessor.MaterialNumberValueAccessor)))();
  var MaterialNumberValidatorL = () => (MaterialNumberValidatorL = dart.constFn(dart.legacy(material_number_accessor.MaterialNumberValidator)))();
  var PositiveNumValidatorL = () => (PositiveNumValidatorL = dart.constFn(dart.legacy(material_number_validators.PositiveNumValidator)))();
  var UpperBoundValidatorL = () => (UpperBoundValidatorL = dart.constFn(dart.legacy(material_number_validators.UpperBoundValidator)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  var MaterialPaperTooltipComponentL = () => (MaterialPaperTooltipComponentL = dart.constFn(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)))();
  var MaterialPercentInputDirectiveL = () => (MaterialPercentInputDirectiveL = dart.constFn(dart.legacy(material_percent_directive.MaterialPercentInputDirective)))();
  var MaterialPersistentDrawerDirectiveL = () => (MaterialPersistentDrawerDirectiveL = dart.constFn(dart.legacy(material_persistent_drawer.MaterialPersistentDrawerDirective)))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var MaterialProgressComponentL = () => (MaterialProgressComponentL = dart.constFn(dart.legacy(material_progress.MaterialProgressComponent)))();
  var MaterialRadioComponentL = () => (MaterialRadioComponentL = dart.constFn(dart.legacy(material_radio.MaterialRadioComponent)))();
  var MaterialRadioGroupComponentL = () => (MaterialRadioGroupComponentL = dart.constFn(dart.legacy(material_radio_group.MaterialRadioGroupComponent)))();
  var MaterialRippleComponentL = () => (MaterialRippleComponentL = dart.constFn(dart.legacy(material_ripple.MaterialRippleComponent)))();
  var MaterialSelectComponentL = () => (MaterialSelectComponentL = dart.constFn(dart.legacy(material_select.MaterialSelectComponent)))();
  var MaterialSelectDropdownItemComponentL = () => (MaterialSelectDropdownItemComponentL = dart.constFn(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var MaterialSelectSearchboxComponentL = () => (MaterialSelectSearchboxComponentL = dart.constFn(dart.legacy(material_select_searchbox.MaterialSelectSearchboxComponent)))();
  var MaterialSliderComponentL = () => (MaterialSliderComponentL = dart.constFn(dart.legacy(material_slider.MaterialSliderComponent)))();
  var MaterialSpinnerComponentL = () => (MaterialSpinnerComponentL = dart.constFn(dart.legacy(material_spinner.MaterialSpinnerComponent)))();
  var MaterialStackableDrawerComponentL = () => (MaterialStackableDrawerComponentL = dart.constFn(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)))();
  var MaterialStepperBackButtonTextDirectiveL = () => (MaterialStepperBackButtonTextDirectiveL = dart.constFn(dart.legacy(material_stepper.MaterialStepperBackButtonTextDirective)))();
  var MaterialStepperComponentL = () => (MaterialStepperComponentL = dart.constFn(dart.legacy(material_stepper.MaterialStepperComponent)))();
  var MaterialTabComponentL = () => (MaterialTabComponentL = dart.constFn(dart.legacy(material_tab.MaterialTabComponent)))();
  var MaterialTabPanelComponentL = () => (MaterialTabPanelComponentL = dart.constFn(dart.legacy(material_tab_panel.MaterialTabPanelComponent)))();
  var MaterialTimePickerComponentL = () => (MaterialTimePickerComponentL = dart.constFn(dart.legacy(material_time_picker.MaterialTimePickerComponent)))();
  var MaterialTemporaryDrawerComponentL = () => (MaterialTemporaryDrawerComponentL = dart.constFn(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  var MaterialTreeComponentL = () => (MaterialTreeComponentL = dart.constFn(dart.legacy(material_tree_impl.MaterialTreeComponent)))();
  var MaterialTreeDropdownComponentL = () => (MaterialTreeDropdownComponentL = dart.constFn(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent)))();
  var MaterialToggleComponentL = () => (MaterialToggleComponentL = dart.constFn(dart.legacy(material_toggle.MaterialToggleComponent)))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var MaterialTooltipSourceDirectiveL = () => (MaterialTooltipSourceDirectiveL = dart.constFn(dart.legacy(tooltip_source.MaterialTooltipSourceDirective)))();
  var MaterialTooltipTargetDirectiveL = () => (MaterialTooltipTargetDirectiveL = dart.constFn(dart.legacy(tooltip_target.MaterialTooltipTargetDirective)))();
  var MaterialYesNoButtonsComponentL = () => (MaterialYesNoButtonsComponentL = dart.constFn(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  var MenuPopupComponentL = () => (MenuPopupComponentL = dart.constFn(dart.legacy(menu_popup.MenuPopupComponent)))();
  var MenuRootDirectiveL = () => (MenuRootDirectiveL = dart.constFn(dart.legacy(menu_root.MenuRootDirective)))();
  var MultiDropdownSelectValueAccessorL = () => (MultiDropdownSelectValueAccessorL = dart.constFn(dart.legacy(material_dropdown_select_accessor.MultiDropdownSelectValueAccessor)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReorderItemDirectiveL = () => (ReorderItemDirectiveL = dart.constFn(dart.legacy(reorder_list.ReorderItemDirective)))();
  var ReorderListComponentL = () => (ReorderListComponentL = dart.constFn(dart.legacy(reorder_list.ReorderListComponent)))();
  var ScoreboardComponentL = () => (ScoreboardComponentL = dart.constFn(dart.legacy(scoreboard.ScoreboardComponent)))();
  var ScorecardComponentL = () => (ScorecardComponentL = dart.constFn(dart.legacy(scorecard.ScorecardComponent)))();
  var StepDirectiveL = () => (StepDirectiveL = dart.constFn(dart.legacy(material_step.StepDirective)))();
  var StopPropagationDirectiveL = () => (StopPropagationDirectiveL = dart.constFn(dart.legacy(stop_propagation.StopPropagationDirective)))();
  var SummaryDirectiveL = () => (SummaryDirectiveL = dart.constFn(dart.legacy(material_step.SummaryDirective)))();
  var TabButtonComponentL = () => (TabButtonComponentL = dart.constFn(dart.legacy(tab_button.TabButtonComponent)))();
  var HtmlDocumentL = () => (HtmlDocumentL = dart.constFn(dart.legacy(html.HtmlDocument)))();
  var VoidToHtmlDocumentL = () => (VoidToHtmlDocumentL = dart.constFn(dart.fnType(HtmlDocumentL(), [])))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToWindowL = () => (VoidToWindowL = dart.constFn(dart.fnType(WindowL(), [])))();
  var FactoryProviderL = () => (FactoryProviderL = dart.constFn(dart.legacy(di_providers.FactoryProvider)))();
  var AcxImperativeViewUtilsL = () => (AcxImperativeViewUtilsL = dart.constFn(dart.legacy(imperative_view.AcxImperativeViewUtils)))();
  var DomRulerL = () => (DomRulerL = dart.constFn(dart.legacy(dom_ruler.DomRuler)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = () => (DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = dart.constFn(dart.fnType(DomServiceL(), [DomServiceL(), DisposerL(), NgZoneL(), WindowL()])))();
  var Angular2ManagedZoneL = () => (Angular2ManagedZoneL = dart.constFn(dart.legacy(angular_2$.Angular2ManagedZone)))();
  var ManagedZoneL = () => (ManagedZoneL = dart.constFn(dart.legacy(managed_zone.ManagedZone)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringLAndHtmlElementLAnddynamicToHtmlElementL = () => (StringLAndHtmlElementLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL(), dart.dynamic])))();
  var DocumentLAnddynamicToHtmlElementL = () => (DocumentLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [DocumentL(), dart.dynamic])))();
  var OverlayDomRenderServiceL = () => (OverlayDomRenderServiceL = dart.constFn(dart.legacy(overlay_dom_render_service.OverlayDomRenderService)))();
  var OverlayStyleConfigL = () => (OverlayStyleConfigL = dart.constFn(dart.legacy(overlay_style_config.OverlayStyleConfig)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(di_providers.Provider)))();
  var ListOfProviderL = () => (ListOfProviderL = dart.constFn(core.List$(ProviderL())))();
  var ListLOfProviderL = () => (ListLOfProviderL = dart.constFn(dart.legacy(ListOfProviderL())))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(di_tokens.OpaqueToken$(ListLOfRelativePositionL())))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.wrapType(AutoDismissDirectiveL());
    },
    get C2() {
      return C2 = dart.wrapType(AutoFocusDirectiveL());
    },
    get C3() {
      return C3 = dart.wrapType(ButtonDirectiveL());
    },
    get C4() {
      return C4 = dart.wrapType(CachingDeferredContentDirectiveL());
    },
    get C5() {
      return C5 = dart.wrapType(CheckNonNegativeValidatorL());
    },
    get C6() {
      return C6 = dart.wrapType(ClickableTooltipTargetDirectiveL());
    },
    get C7() {
      return C7 = dart.wrapType(DarkThemeDirectiveL());
    },
    get C8() {
      return C8 = dart.wrapType(DateInputDirectiveL());
    },
    get C9() {
      return C9 = dart.wrapType(DateRangeEditorComponentL());
    },
    get C10() {
      return C10 = dart.wrapType(DateRangeInputComponentL());
    },
    get C11() {
      return C11 = dart.wrapType(DeferredContentDirectiveL());
    },
    get C12() {
      return C12 = dart.fn(display_name.displayNameRendererDirective, HasRendererLTovoid());
    },
    get C13() {
      return C13 = dart.wrapType(DropdownSelectValueAccessorL());
    },
    get C14() {
      return C14 = dart.wrapType(DropdownButtonComponentL());
    },
    get C15() {
      return C15 = dart.wrapType(DropdownMenuComponentL());
    },
    get C16() {
      return C16 = dart.wrapType(DynamicComponentL());
    },
    get C17() {
      return C17 = dart.wrapType(FixedMaterialTabStripComponentL());
    },
    get C18() {
      return C18 = dart.wrapType(FocusActivableItemDirectiveL());
    },
    get C19() {
      return C19 = dart.wrapType(FocusItemDirectiveL());
    },
    get C20() {
      return C20 = dart.wrapType(FocusListDirectiveL());
    },
    get C21() {
      return C21 = dart.wrapType(FocusableDirectiveL());
    },
    get C22() {
      return C22 = dart.wrapType(FocusTrapComponentL());
    },
    get C23() {
      return C23 = dart.wrapType(GlyphComponentL());
    },
    get C24() {
      return C24 = dart.wrapType(HighlightedTextComponentL());
    },
    get C25() {
      return C25 = dart.wrapType(HighlightedValueComponentL());
    },
    get C26() {
      return C26 = dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL());
    },
    get C27() {
      return C27 = dart.wrapType(LowerBoundValidatorL());
    },
    get C28() {
      return C28 = dart.wrapType(MaterialAutoSuggestInputComponentL());
    },
    get C29() {
      return C29 = dart.wrapType(MaterialButtonComponentL());
    },
    get C30() {
      return C30 = dart.wrapType(MaterialCalendarPickerComponentL());
    },
    get C31() {
      return C31 = dart.wrapType(MaterialCheckboxComponentL());
    },
    get C32() {
      return C32 = dart.wrapType(MaterialChipComponentL());
    },
    get C33() {
      return C33 = dart.wrapType(MaterialChipsComponentL());
    },
    get C34() {
      return C34 = dart.wrapType(MaterialDatepickerComponentL());
    },
    get C35() {
      return C35 = dart.wrapType(MaterialDateRangePickerComponentL());
    },
    get C36() {
      return C36 = dart.wrapType(MaterialDateTimePickerComponentL());
    },
    get C37() {
      return C37 = dart.wrapType(MaterialDialogComponentL());
    },
    get C38() {
      return C38 = dart.wrapType(MaterialDropdownSelectComponentL());
    },
    get C39() {
      return C39 = dart.wrapType(MaterialExpansionPanelL());
    },
    get C40() {
      return C40 = dart.wrapType(MaterialExpansionPanelAutoDismissL());
    },
    get C41() {
      return C41 = dart.wrapType(MaterialExpansionPanelSetL());
    },
    get C42() {
      return C42 = dart.wrapType(MaterialFabComponentL());
    },
    get C43() {
      return C43 = dart.wrapType(MaterialFabMenuComponentL());
    },
    get C44() {
      return C44 = dart.wrapType(MaterialIconComponentL());
    },
    get C45() {
      return C45 = dart.wrapType(MaterialIconTooltipComponentL());
    },
    get C46() {
      return C46 = dart.wrapType(MaterialInkTooltipComponentL());
    },
    get C47() {
      return C47 = dart.wrapType(MaterialInputComponentL());
    },
    get C48() {
      return C48 = dart.wrapType(MaterialInputDefaultValueAccessorL());
    },
    get C49() {
      return C49 = dart.wrapType(MenuItemAffixListComponentL());
    },
    get C50() {
      return C50 = dart.wrapType(MenuItemGroupsComponentL());
    },
    get C51() {
      return C51 = dart.wrapType(MaterialListComponentL());
    },
    get C52() {
      return C52 = dart.wrapType(MaterialListItemComponentL());
    },
    get C53() {
      return C53 = dart.wrapType(MaterialMenuComponentL());
    },
    get C54() {
      return C54 = dart.wrapType(MaterialMonthPickerComponentL());
    },
    get C55() {
      return C55 = dart.wrapType(MaterialMultilineInputComponentL());
    },
    get C57() {
      return C57 = dart.wrapType(CheckIntegerValidatorL());
    },
    get C58() {
      return C58 = dart.wrapType(MaterialInt64ValueAccessorL());
    },
    get C59() {
      return C59 = dart.wrapType(MaterialNumberValueAccessorL());
    },
    get C60() {
      return C60 = dart.wrapType(MaterialNumberValidatorL());
    },
    get C61() {
      return C61 = dart.wrapType(PositiveNumValidatorL());
    },
    get C62() {
      return C62 = dart.wrapType(UpperBoundValidatorL());
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C27 || CT.C27, C47 || CT.C47, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C5 || CT.C5, C62 || CT.C62], TypeL());
    },
    get C63() {
      return C63 = dart.wrapType(MaterialPaperTooltipComponentL());
    },
    get C64() {
      return C64 = dart.wrapType(MaterialPercentInputDirectiveL());
    },
    get C65() {
      return C65 = dart.wrapType(MaterialPersistentDrawerDirectiveL());
    },
    get C66() {
      return C66 = dart.wrapType(MaterialPopupComponentL());
    },
    get C67() {
      return C67 = dart.wrapType(MaterialProgressComponentL());
    },
    get C68() {
      return C68 = dart.wrapType(MaterialRadioComponentL());
    },
    get C69() {
      return C69 = dart.wrapType(MaterialRadioGroupComponentL());
    },
    get C70() {
      return C70 = dart.wrapType(MaterialRippleComponentL());
    },
    get C71() {
      return C71 = dart.wrapType(MaterialSelectComponentL());
    },
    get C72() {
      return C72 = dart.wrapType(MaterialSelectDropdownItemComponentL());
    },
    get C73() {
      return C73 = dart.wrapType(MaterialSelectItemComponentL());
    },
    get C74() {
      return C74 = dart.wrapType(MaterialSelectSearchboxComponentL());
    },
    get C75() {
      return C75 = dart.wrapType(MaterialSliderComponentL());
    },
    get C76() {
      return C76 = dart.wrapType(MaterialSpinnerComponentL());
    },
    get C77() {
      return C77 = dart.wrapType(MaterialStackableDrawerComponentL());
    },
    get C78() {
      return C78 = dart.wrapType(MaterialStepperBackButtonTextDirectiveL());
    },
    get C79() {
      return C79 = dart.wrapType(MaterialStepperComponentL());
    },
    get C80() {
      return C80 = dart.wrapType(MaterialTabComponentL());
    },
    get C81() {
      return C81 = dart.wrapType(MaterialTabPanelComponentL());
    },
    get C82() {
      return C82 = dart.wrapType(MaterialTimePickerComponentL());
    },
    get C83() {
      return C83 = dart.wrapType(MaterialTemporaryDrawerComponentL());
    },
    get C84() {
      return C84 = dart.wrapType(MaterialTreeComponentL());
    },
    get C85() {
      return C85 = dart.wrapType(MaterialTreeDropdownComponentL());
    },
    get C86() {
      return C86 = dart.wrapType(MaterialToggleComponentL());
    },
    get C87() {
      return C87 = dart.wrapType(MaterialTooltipDirectiveL());
    },
    get C88() {
      return C88 = dart.wrapType(MaterialTooltipSourceDirectiveL());
    },
    get C89() {
      return C89 = dart.wrapType(MaterialTooltipTargetDirectiveL());
    },
    get C90() {
      return C90 = dart.wrapType(MaterialYesNoButtonsComponentL());
    },
    get C91() {
      return C91 = dart.wrapType(MenuPopupComponentL());
    },
    get C92() {
      return C92 = dart.wrapType(MenuRootDirectiveL());
    },
    get C93() {
      return C93 = dart.wrapType(MultiDropdownSelectValueAccessorL());
    },
    get C94() {
      return C94 = dart.wrapType(ModalComponentL());
    },
    get C95() {
      return C95 = dart.wrapType(NgModelL());
    },
    get C96() {
      return C96 = dart.wrapType(PopupSourceDirectiveL());
    },
    get C97() {
      return C97 = dart.wrapType(ReorderItemDirectiveL());
    },
    get C98() {
      return C98 = dart.wrapType(ReorderListComponentL());
    },
    get C99() {
      return C99 = dart.wrapType(ScoreboardComponentL());
    },
    get C100() {
      return C100 = dart.wrapType(ScorecardComponentL());
    },
    get C101() {
      return C101 = dart.wrapType(StepDirectiveL());
    },
    get C102() {
      return C102 = dart.wrapType(StopPropagationDirectiveL());
    },
    get C103() {
      return C103 = dart.wrapType(SummaryDirectiveL());
    },
    get C104() {
      return C104 = dart.wrapType(TabButtonComponentL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C61 || CT.C61, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C62 || CT.C62], dart.dynamic);
    },
    get C111() {
      return C111 = dart.fn(module.getDocument, VoidToHtmlDocumentL());
    },
    get C112() {
      return C112 = dart.wrapType(DocumentL());
    },
    get C110() {
      return C110 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C111 || CT.C111,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C112 || CT.C112
      });
    },
    get C114() {
      return C114 = dart.wrapType(HtmlDocumentL());
    },
    get C113() {
      return C113 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C111 || CT.C111,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C114 || CT.C114
      });
    },
    get C116() {
      return C116 = dart.fn(module.getWindow, VoidToWindowL());
    },
    get C117() {
      return C117 = dart.wrapType(WindowL());
    },
    get C115() {
      return C115 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C116 || CT.C116,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C117 || CT.C117
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C113 || CT.C113, C115 || CT.C115], FactoryProviderL());
    },
    get C120() {
      return C120 = dart.wrapType(AcxImperativeViewUtilsL());
    },
    get C119() {
      return C119 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C120 || CT.C120,
        [Provider_token]: C120 || CT.C120
      });
    },
    get C122() {
      return C122 = dart.wrapType(DomRulerL());
    },
    get C121() {
      return C121 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C122 || CT.C122,
        [Provider_token]: C122 || CT.C122
      });
    },
    get C126() {
      return C126 = dart.wrapType(DomServiceL());
    },
    get C127() {
      return C127 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: di_arguments.SkipSelf.prototype
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127, C128 || CT.C128], ObjectL());
    },
    get C130() {
      return C130 = dart.wrapType(DisposerL());
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C127 || CT.C127], ObjectL());
    },
    get C131() {
      return C131 = dart.wrapType(NgZoneL());
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C129 || CT.C129, C131 || CT.C131, C117 || CT.C117], ObjectL());
    },
    get C132() {
      return C132 = dart.fn(angular_2.createDomService, DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL());
    },
    get C123() {
      return C123 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: C124 || CT.C124,
        [Provider_useFactory]: C132 || CT.C132,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C126 || CT.C126
      });
    },
    get C134() {
      return C134 = dart.wrapType(Angular2ManagedZoneL());
    },
    get C135() {
      return C135 = dart.wrapType(ManagedZoneL());
    },
    get C133() {
      return C133 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C134 || CT.C134,
        [Provider_token]: C135 || CT.C135
      });
    },
    get C137() {
      return C137 = dart.fn(module$.getDefaultContainerName, dynamicToStringL());
    },
    get C138() {
      return C138 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerName"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C137 || CT.C137,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C138 || CT.C138
      });
    },
    get C140() {
      return C140 = dart.fn(module$.getDefaultContainer, StringLAndHtmlElementLAnddynamicToHtmlElementL());
    },
    get C141() {
      return C141 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainer"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C140 || CT.C140,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C141 || CT.C141
      });
    },
    get C143() {
      return C143 = dart.fn(module$.getOverlayContainerParent, DocumentLAnddynamicToHtmlElementL());
    },
    get C144() {
      return C144 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerParent"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C143 || CT.C143,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C144 || CT.C144
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlaySyncDom"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: true,
        [Provider_useClass]: null,
        [Provider_token]: C146 || CT.C146
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: true,
        [Provider_useClass]: null,
        [Provider_token]: C148 || CT.C148
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: box.Box.prototype,
        [Box_left]: 0,
        [Box_bottom]: 0,
        [Box_right]: 0,
        [Box_top]: 0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C150 || CT.C150,
        [Provider_useClass]: null,
        [Provider_token]: C151 || CT.C151
      });
    },
    get C153() {
      return C153 = dart.wrapType(OverlayDomRenderServiceL());
    },
    get C152() {
      return C152 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C153 || CT.C153,
        [Provider_token]: C153 || CT.C153
      });
    },
    get C155() {
      return C155 = dart.wrapType(OverlayStyleConfigL());
    },
    get C154() {
      return C154 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C155 || CT.C155,
        [Provider_token]: C155 || CT.C155
      });
    },
    get C157() {
      return C157 = dart.wrapType(OverlayServiceL());
    },
    get C156() {
      return C156 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C157 || CT.C157,
        [Provider_token]: C157 || CT.C157
      });
    },
    get C159() {
      return C159 = dart.wrapType(ZIndexerL());
    },
    get C158() {
      return C158 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C159 || CT.C159,
        [Provider_token]: C159 || CT.C159
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C121 || CT.C121, C123 || CT.C123, C133 || CT.C133, C136 || CT.C136, C139 || CT.C139, C142 || CT.C142, C145 || CT.C145, C147 || CT.C147, C149 || CT.C149, C152 || CT.C152, C154 || CT.C154, C156 || CT.C156, C158 || CT.C158], ProviderL());
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C118 || CT.C118], ListLOfProviderL());
    },
    get C164() {
      return C164 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top center",
        [RelativePosition_originY]: C164 || CT.C164,
        [RelativePosition_originX]: C164 || CT.C164
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-end",
        [Alignment__displayName]: "End"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C164 || CT.C164,
        [RelativePosition_originX]: C166 || CT.C166
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C164 || CT.C164,
        [RelativePosition_originX]: C164 || CT.C164
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom center",
        [RelativePosition_originY]: C166 || CT.C166,
        [RelativePosition_originX]: C164 || CT.C164
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C166 || CT.C166,
        [RelativePosition_originX]: C166 || CT.C166
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C166 || CT.C166,
        [RelativePosition_originX]: C164 || CT.C164
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C165 || CT.C165, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169, C170 || CT.C170], RelativePositionL());
    },
    get C171() {
      return C171 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C162 || CT.C162,
        [Provider_useClass]: null,
        [Provider_token]: C171 || CT.C171
      });
    },
    get C173() {
      return C173 = dart.wrapType(DomPopupSourceFactoryL());
    },
    get C172() {
      return C172 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C173 || CT.C173,
        [Provider_token]: C173 || CT.C173
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C172 || CT.C172], ProviderL());
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C160 || CT.C160], ListLOfObjectL());
    },
    get C176() {
      return C176 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C175() {
      return C175 = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C176 || CT.C176
      });
    },
    get C177() {
      return C177 = dart.wrapType(ClockL());
    },
    get C174() {
      return C174 = dart.const({
        __proto__: di_providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C175 || CT.C175,
        [Provider_useClass]: null,
        [Provider_token]: C177 || CT.C177
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: di_providers.ExistingProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C177 || CT.C177,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C179 || CT.C179
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C174 || CT.C174, C178 || CT.C178], ObjectL());
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106], dart.dynamic);
    }
  }, false);
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C56;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C0;
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var C111;
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var C112;
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C110;
  var C114;
  var C113;
  var C116;
  var C117;
  var C115;
  var C109;
  var C120;
  var C119;
  var C122;
  var C121;
  var C126;
  var C127;
  var C128;
  var C125;
  var C130;
  var C129;
  var C131;
  var C124;
  var C132;
  var C123;
  var C134;
  var C135;
  var C133;
  var C137;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C138;
  var C136;
  var C140;
  var C141;
  var C139;
  var C143;
  var C144;
  var C142;
  var C146;
  var C145;
  var C148;
  var C147;
  var Box_left = dart.privateName(box, "Box.left");
  var Box_bottom = dart.privateName(box, "Box.bottom");
  var Box_right = dart.privateName(box, "Box.right");
  var Box_top = dart.privateName(box, "Box.top");
  var C150;
  var C151;
  var C149;
  var C153;
  var C152;
  var C155;
  var C154;
  var C157;
  var C156;
  var C159;
  var C158;
  var C118;
  var C108;
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var C164;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C163;
  var C166;
  var C165;
  var C167;
  var C168;
  var C169;
  var C170;
  var C162;
  var C171;
  var C161;
  var C173;
  var C172;
  var C160;
  var C107;
  var C176;
  var Clock__time = dart.privateName(clock, "Clock._time");
  var C175;
  var C177;
  var C174;
  var C179;
  var C178;
  var C106;
  var C105;
  dart.defineLazy(angular_components, {
    /*angular_components.materialDirectives*/get materialDirectives() {
      return C0 || CT.C0;
    },
    /*angular_components.materialProviders*/get materialProviders() {
      return C105 || CT.C105;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/angular_components", {
    "package:angular_components/angular_components.dart": angular_components
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_components.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA8NoB,qCAAkB;;;MAwGlB,oCAAiB","file":"angular_components.unsound.ddc.js"}');
  // Exports:
  return {
    angular_components: angular_components
  };
}));

//# sourceMappingURL=angular_components.unsound.ddc.js.map
