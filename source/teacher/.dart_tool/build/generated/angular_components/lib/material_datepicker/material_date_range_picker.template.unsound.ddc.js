define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_datepicker/date_range_editor.template', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/quiver/src/time/clock', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_datepicker/config', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/config.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/model.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_date_range_picker_template(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_datepicker__material_date_range_picker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_datepicker__next_prev_buttons$46template, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__material_datepicker__date_range_editor$46template, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__material_datepicker__date_range_editor_host, packages__quiver__src__time__clock, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_datepicker__config, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__comparison$46template, packages__angular_components__material_datepicker__comparison_option$46template, packages__angular_components__material_datepicker__config$46template, packages__angular_components__material_datepicker__date_range_editor_host$46template, packages__angular_components__material_datepicker__model$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__preset$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__date__date_formatter$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__material_date_range_picker$46scss$46css$46shim) {
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
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const view = packages__angular__src__bootstrap__modules.src__core__linker__views__view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const material_date_range_picker = packages__angular_components__material_datepicker__material_date_range_picker.material_datepicker__material_date_range_picker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const next_prev_buttons$46template = packages__angular_components__material_datepicker__next_prev_buttons$46template.material_datepicker__next_prev_buttons$46template;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const date_range_editor$46template = packages__angular_components__material_datepicker__date_range_editor$46template.material_datepicker__date_range_editor$46template;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const config = packages__angular_components__material_datepicker__config.material_datepicker__config;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const comparison$46template = packages__angular_components__material_datepicker__comparison$46template.material_datepicker__comparison$46template;
  const comparison_option$46template = packages__angular_components__material_datepicker__comparison_option$46template.material_datepicker__comparison_option$46template;
  const config$46template = packages__angular_components__material_datepicker__config$46template.material_datepicker__config$46template;
  const date_range_editor_host$46template = packages__angular_components__material_datepicker__date_range_editor_host$46template.material_datepicker__date_range_editor_host$46template;
  const model$46template = packages__angular_components__material_datepicker__model$46template.material_datepicker__model$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const preset$46template = packages__angular_components__material_datepicker__preset$46template.material_datepicker__preset$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const date_formatter$46template = packages__angular_components__model__date__date_formatter$46template.model__date__date_formatter$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_date_range_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_date_range_picker$46scss$46css$46shim.material_datepicker__material_date_range_picker$46scss$46css$46shim;
  var material_date_range_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $isNotEmpty = dartx.isNotEmpty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(di_tokens.OpaqueToken$(ListLOfRelativePositionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DateRangeEditorComponentL = () => (DateRangeEditorComponentL = dart.constFn(dart.legacy(date_range_editor.DateRangeEditorComponent)))();
  var DateRangeEditorHostL = () => (DateRangeEditorHostL = dart.constFn(dart.legacy(date_range_editor_host.DateRangeEditorHost)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToDateRangeEditorComponentL = () => (VoidToDateRangeEditorComponentL = dart.constFn(dart.fnType(DateRangeEditorComponentL(), [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var MaterialDateRangePickerComponentL = () => (MaterialDateRangePickerComponentL = dart.constFn(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)))();
  var DatepickerConfigL = () => (DatepickerConfigL = dart.constFn(dart.legacy(config.DatepickerConfig)))();
  var VoidToMaterialDateRangePickerComponentL = () => (VoidToMaterialDateRangePickerComponentL = dart.constFn(dart.fnType(MaterialDateRangePickerComponentL(), [])))();
  var ComponentFactoryOfMaterialDateRangePickerComponentL = () => (ComponentFactoryOfMaterialDateRangePickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDateRangePickerComponentL())))();
  var HostViewOfMaterialDateRangePickerComponentL = () => (HostViewOfMaterialDateRangePickerComponentL = dart.constFn(host_view.HostView$(MaterialDateRangePickerComponentL())))();
  var HostViewLOfMaterialDateRangePickerComponentL = () => (HostViewLOfMaterialDateRangePickerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialDateRangePickerComponentL())))();
  var VoidToHostViewLOfMaterialDateRangePickerComponentL = () => (VoidToHostViewLOfMaterialDateRangePickerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialDateRangePickerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_date_range_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C7() {
      return C7 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C11() {
      return C11 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, VoidToHostViewLOfMaterialDateRangePickerComponentL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ComponentFactoryOfMaterialDateRangePickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C11 || CT.C11,
        [ComponentFactory_selector]: "material-date-range-picker"
      });
    }
  }, false);
  var _ButtonDirective_0_5 = dart.privateName(material_date_range_picker$46template, "_ButtonDirective_0_5");
  var _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_date_range_picker$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  var _PopupSourceDirective_0_7 = dart.privateName(material_date_range_picker$46template, "_PopupSourceDirective_0_7");
  var _appEl_1 = dart.privateName(material_date_range_picker$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_1_9");
  var _compView_4 = dart.privateName(material_date_range_picker$46template, "_compView_4");
  var _DropdownButtonComponent_4_5 = dart.privateName(material_date_range_picker$46template, "_DropdownButtonComponent_4_5");
  var _appEl_5 = dart.privateName(material_date_range_picker$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(material_date_range_picker$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_6_9");
  var _compView_7 = dart.privateName(material_date_range_picker$46template, "_compView_7");
  var _appEl_7 = dart.privateName(material_date_range_picker$46template, "_appEl_7");
  var _MaterialPopupComponent_7_8 = dart.privateName(material_date_range_picker$46template, "_MaterialPopupComponent_7_8");
  var __PopupHierarchy_7_11 = dart.privateName(material_date_range_picker$46template, "__PopupHierarchy_7_11");
  var __PopupRef_7_12 = dart.privateName(material_date_range_picker$46template, "__PopupRef_7_12");
  var _appEl_8 = dart.privateName(material_date_range_picker$46template, "_appEl_8");
  var _NgIf_8_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_8_9");
  var _expr_0 = dart.privateName(material_date_range_picker$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_date_range_picker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_date_range_picker$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_date_range_picker$46template, "_expr_3");
  var _expr_7 = dart.privateName(material_date_range_picker$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_date_range_picker$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_date_range_picker$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_date_range_picker$46template, "_expr_10");
  var _el_0 = dart.privateName(material_date_range_picker$46template, "_el_0");
  var _el_7 = dart.privateName(material_date_range_picker$46template, "_el_7");
  var _PopupHierarchy_7_11 = dart.privateName(material_date_range_picker$46template, "_PopupHierarchy_7_11");
  var _PopupRef_7_12 = dart.privateName(material_date_range_picker$46template, "_PopupRef_7_12");
  var C0;
  var C1;
  var C2;
  var C3;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C4;
  var C5;
  var C6;
  var C7;
  var _handleEvent_0 = dart.privateName(material_date_range_picker$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(material_date_range_picker$46template, "_handleEvent_1");
  var C8;
  material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0 = class ViewMaterialDateRangePickerComponent0 extends component_view.ComponentView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    get [_PopupHierarchy_7_11]() {
      if (this[__PopupHierarchy_7_11] == null) {
        this[__PopupHierarchy_7_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupHierarchy_7_11];
    }
    get [_PopupRef_7_12]() {
      if (this[__PopupRef_7_12] == null) {
        this[__PopupRef_7_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupRef_7_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_range_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "main-content");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      dom_helpers.setAttribute(this[_el_0], "popupSource", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)));
      this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_el_0], ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_el_0], ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "dropdown-and-comparison");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendSpan(doc, _el_2);
      this.updateChildClass(_el_3, "main-line");
      this.addShimE(_el_3);
      this[_compView_4] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "menu-lookalike primary-range");
      this.addShimC(_el_4);
      this[_DropdownButtonComponent_4_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_compView_4].createAndProject(this[_DropdownButtonComponent_4_5], JSArrayOfObjectL().of([C1 || CT.C1]));
      let _anchor_5 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C2 || CT.C2);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C3 || CT.C3);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_7] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootElement;
      parentRenderNode[$append](this[_el_7]);
      dom_helpers.setAttribute(this[_el_7], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_7]));
      this[_appEl_7] = new view_container.ViewContainer.new(7, null, this, this[_el_7]);
      this[_MaterialPopupComponent_7_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), boolL().as(this.parentView.injectorGet(C5 || CT.C5, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C6 || CT.C6, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_7], this[_appEl_7], new element_ref.ElementRef.new(this[_el_7])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), boolL().as(this.parentView.injectorGet(C5 || CT.C5, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C6 || CT.C6, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_7], this[_appEl_7], new element_ref.ElementRef.new(this[_el_7]));
      let _anchor_8 = dom_helpers.createAnchor();
      this[_appEl_8] = new view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C7 || CT.C7);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_compView_7].createAndProject(this[_MaterialPopupComponent_7_8], JSArrayOfObjectL().of([C1 || CT.C1, JSArrayOfViewContainerL().of([this[_appEl_8]]), C1 || CT.C1]));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler0(EventL(), dart.bind(_ctx, 'initEditor')));
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'open')));
      let subscription_1 = this[_MaterialPopupComponent_7_8].onOpen.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'open')));
      let subscription_2 = this[_MaterialPopupComponent_7_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'close')));
      _ctx.focusableElement = this[_ButtonDirective_0_5].instance;
      _ctx.focusOnClose = this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      view.View.queryChangeDetectorRefs._set(this[_MaterialPopupComponent_7_8], this[_compView_7]);
      _ctx.popup = this[_MaterialPopupComponent_7_8];
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableL())) && 4 === nodeIndex) {
          return this[_DropdownButtonComponent_4_5];
        }
        if (token === dart.wrapType(ButtonDirectiveL())) {
          return this[_ButtonDirective_0_5].instance;
        }
      }
      if (7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_7_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_7_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_7_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_button = this[_PopupSourceDirective_0_7];
      this[_NgIf_1_9].ngIf = dart.test(_ctx.hasTitle) && dart.test(_ctx.presets[$isNotEmpty]);
      changed = false;
      if (dart.test(firstCheck)) {
        this[_DropdownButtonComponent_4_5].tabbable = false;
        changed = true;
      }
      let currVal_0 = _ctx.formattedRange;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "formattedRange", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DropdownButtonComponent_4_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.dropdownButtonAriaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "dropdownButtonAriaLabel", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DropdownButtonComponent_4_5].buttonAriaLabel = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DropdownButtonComponent_4_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "error", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DropdownButtonComponent_4_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DropdownButtonComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.showNextPrevButtons;
      this[_NgIf_6_9].ngIf = _ctx.hasComparison;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_7_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_7 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "preferredPositions", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_MaterialPopupComponent_7_8].preferredPositions = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_button;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "button", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_MaterialPopupComponent_7_8].source = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      this[_NgIf_8_9].ngIf = _ctx.isEditorCreated;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      if (dart.test(firstCheck)) {
        if (_ctx.popupClassName != null) {
          this[_compView_7].updateChildClassNonHtml(this[_el_7], _ctx.popupClassName);
        }
      }
      this[_compView_7].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_7].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_7_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_compView_7].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_7_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.initEditor();
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(EventL().as($36event));
    }
    [_handleEvent_1]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_9 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "disabled", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "compact", currVal_10);
        this[_expr_10] = currVal_10;
      }
    }
    static _debugClearComponentStyles() {
      material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles;
      if (styles == null) {
        material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_date_range_picker$46template.styles$MaterialDateRangePickerComponent, material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C8 || CT.C8);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_4] = null;
    this[_DropdownButtonComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_compView_7] = null;
    this[_appEl_7] = null;
    this[_MaterialPopupComponent_7_8] = null;
    this[__PopupHierarchy_7_11] = null;
    this[__PopupRef_7_12] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_el_0] = null;
    this[_el_7] = null;
    material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-date-range-picker"));
  }).prototype = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.prototype;
  dart.addTypeTests(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.addTypeCaches(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.setMethodSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getGetters(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_PopupHierarchy_7_11]: dart.dynamic,
    [_PopupRef_7_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, L0);
  dart.setFieldSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_PopupSourceDirective_0_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_4]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
    [_DropdownButtonComponent_4_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_7]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_7_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_7_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_7_12]: dart.fieldType(dart.dynamic),
    [_appEl_8]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_7]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, {
    /*material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(material_date_range_picker$46template, "_textBinding_1");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1 = class _ViewMaterialDateRangePickerComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "range-title");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.rangeTitle));
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(material_date_range_picker$46template, "_compView_0");
  var _NextPrevComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_NextPrevComponent_0_5");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2 = class _ViewMaterialDateRangePickerComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      this[_compView_0] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "next-prev-buttons");
      this.addShimC(_el_0);
      this[_NextPrevComponent_0_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_NextPrevComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        if (_ctx.model != null) {
          this[_NextPrevComponent_0_5].model = _ctx.model;
          changed = true;
        }
      }
      let currVal_0 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "disabled", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_NextPrevComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    this[_expr_0] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(next_prev_buttons$46template.ViewNextPrevComponent0)),
    [_NextPrevComponent_0_5]: dart.fieldType(dart.legacy(next_prev_buttons.NextPrevComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3 = class _ViewMaterialDateRangePickerComponent3 extends embedded_view.EmbeddedView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "comparison-title");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.formattedComparison));
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _textBinding_9 = dart.privateName(material_date_range_picker$46template, "_textBinding_9");
  var _FocusTrapComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_FocusTrapComponent_0_5");
  var _compView_2 = dart.privateName(material_date_range_picker$46template, "_compView_2");
  var _DateRangeEditorComponent_2_5 = dart.privateName(material_date_range_picker$46template, "_DateRangeEditorComponent_2_5");
  var _compView_6 = dart.privateName(material_date_range_picker$46template, "_compView_6");
  var _AcxDarkTheme_6_5 = dart.privateName(material_date_range_picker$46template, "_AcxDarkTheme_6_5");
  var _MaterialButtonComponent_6_6 = dart.privateName(material_date_range_picker$46template, "_MaterialButtonComponent_6_6");
  var _compView_8 = dart.privateName(material_date_range_picker$46template, "_compView_8");
  var _AcxDarkTheme_8_5 = dart.privateName(material_date_range_picker$46template, "_AcxDarkTheme_8_5");
  var _MaterialButtonComponent_8_6 = dart.privateName(material_date_range_picker$46template, "_MaterialButtonComponent_8_6");
  var _expr_4 = dart.privateName(material_date_range_picker$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_date_range_picker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_date_range_picker$46template, "_expr_6");
  var _expr_11 = dart.privateName(material_date_range_picker$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_date_range_picker$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_date_range_picker$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_date_range_picker$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_date_range_picker$46template, "_expr_15");
  var _expr_16 = dart.privateName(material_date_range_picker$46template, "_expr_16");
  var _expr_17 = dart.privateName(material_date_range_picker$46template, "_expr_17");
  var _el_3 = dart.privateName(material_date_range_picker$46template, "_el_3");
  var C9;
  var C10;
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4 = class _ViewMaterialDateRangePickerComponent4 extends embedded_view.EmbeddedView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "popup-contents");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_1), "wrapper");
      this.addShimC(HtmlElementL().as(_el_1));
      this[_compView_2] = new date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_DateRangeEditorComponent_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateRangeEditorComponentL(), dart.wrapType(DateRangeEditorComponentL()), dart.fn(() => new date_range_editor.DateRangeEditorComponent.new(_el_2, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)), NgZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentIndex)), DateRangeEditorHostL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.parentView.parentIndex)), ClockL().as(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.parentIndex))), VoidToDateRangeEditorComponentL())) : new date_range_editor.DateRangeEditorComponent.new(_el_2, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentIndex)), NgZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentIndex)), DateRangeEditorHostL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.parentView.parentIndex)), ClockL().as(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.parentIndex)));
      this[_compView_2].create(this[_DateRangeEditorComponent_2_5]);
      this.project(_el_1, 0);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "apply-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_4, "separator");
      this.addShimC(_el_4);
      let _text_5 = dom_helpers.appendText(_el_4, " ");
      this[_compView_6] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this[_el_3][$append](_el_6);
      this.updateChildClassNonHtml(_el_6, "cancel");
      this.addShimC(_el_6);
      this[_AcxDarkTheme_6_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_6_6] = new material_button.MaterialButtonComponent.new(_el_6, AcxDarkThemeL().as(this[_AcxDarkTheme_6_5]), this[_compView_6], null);
      let _text_7 = dom_helpers.createText(interpolate.interpolateString0(material_date_range_picker.MaterialDateRangePickerComponent.cancelButtonMsg));
      this[_compView_6].createAndProject(this[_MaterialButtonComponent_6_6], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_7])]));
      this[_compView_8] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootElement;
      this[_el_3][$append](_el_8);
      this.updateChildClassNonHtml(_el_8, "apply");
      this.addShimC(_el_8);
      this[_AcxDarkTheme_8_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_8_6] = new material_button.MaterialButtonComponent.new(_el_8, AcxDarkThemeL().as(this[_AcxDarkTheme_8_5]), this[_compView_8], null);
      this[_compView_8].createAndProject(this[_MaterialButtonComponent_8_6], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_9].element])]));
      this[_compView_0].createAndProject(this[_FocusTrapComponent_0_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_1])]));
      let subscription_0 = this[_DateRangeEditorComponent_2_5].presetRangeSelected.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onRangeClicked')));
      let subscription_1 = this[_MaterialButtonComponent_6_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'cancelAndPreventDefault')));
      let subscription_2 = this[_MaterialButtonComponent_8_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'applyAndPreventDefault')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_6_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_6_6];
        }
      }
      if (8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_8_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_8_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        if (_ctx.model != null) {
          this[_DateRangeEditorComponent_2_5].model = _ctx.model;
        }
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "allowHighlightUpdates", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].allowHighlightUpdates = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.supportsComparison;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "supportsComparison", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].supportsComparison = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "compact", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].compact = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.movingStartMaintainsLength;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "movingStartMaintainsLength", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].movingStartMaintainsLength = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.supportsDaysInputs;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "supportsDaysInputs", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].supportsDaysInputs = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.dateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "dateFormat", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].dateFormat = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.activeDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "activeDateFormat", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].activeDateFormat = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.supportsClearRange;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "supportsClearRange", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].supportsClearRange = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.supportsCustomRange;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "supportsCustomRange", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].supportsCustomRange = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.relativeDaysToToday;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "relativeDaysToToday", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].relativeDaysToToday = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.useMenuForPresets;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "useMenuForPresets", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].useMenuForPresets = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.presets;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "presets", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].presets = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "minDate", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].minDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "maxDate", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].maxDate = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.isCalendarCreated;
      if (dart.test(check_binding.checkBinding(this[_expr_16], currVal_16, "isCalendarCreated", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        this[_DateRangeEditorComponent_2_5].isCalendarCreated = currVal_16;
        this[_expr_16] = currVal_16;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DateRangeEditorComponent_2_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      let currVal_0 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "compact", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectHostChanges(firstCheck);
      let currVal_17 = _ctx.applyBarVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_17], currVal_17, "applyBarVisible", "package:angular_components/material_datepicker/material_date_range_picker.html"))) {
        dom_helpers.updateClassBinding(this[_el_3], "visible", currVal_17);
        this[_expr_17] = currVal_17;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_8].detectHostChanges(firstCheck);
      this[_textBinding_9].updateText(interpolate.interpolateString0(_ctx.applyButtonMsg));
      this[_compView_0].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_DateRangeEditorComponent_2_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_9] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_compView_2] = null;
    this[_DateRangeEditorComponent_2_5] = null;
    this[_compView_6] = null;
    this[_AcxDarkTheme_6_5] = null;
    this[_MaterialButtonComponent_6_6] = null;
    this[_compView_8] = null;
    this[_AcxDarkTheme_8_5] = null;
    this[_MaterialButtonComponent_8_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
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
    this[_el_0] = null;
    this[_el_3] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    [_textBinding_9]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_0_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(date_range_editor$46template.ViewDateRangeEditorComponent0)),
    [_DateRangeEditorComponent_2_5]: dart.fieldType(dart.legacy(date_range_editor.DateRangeEditorComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_6_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_6_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_compView_8]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_8_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_8_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
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
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0 = class _ViewMaterialDateRangePickerComponentHost0 extends host_view.HostView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      this.componentView = new material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDateRangePickerComponentL(), dart.wrapType(MaterialDateRangePickerComponentL()), dart.fn(() => new material_date_range_picker.MaterialDateRangePickerComponent.new(ClockL().as(this.injectorGetOptional(C9 || CT.C9, this.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.parentIndex)), DatepickerConfigL().as(this.injectorGetOptional(dart.wrapType(DatepickerConfigL()), this.parentIndex)), null, PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), _el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex))), VoidToMaterialDateRangePickerComponentL())) : new material_date_range_picker.MaterialDateRangePickerComponent.new(ClockL().as(this.injectorGetOptional(C9 || CT.C9, this.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.parentIndex)), DatepickerConfigL().as(this.injectorGetOptional(dart.wrapType(DatepickerConfigL()), this.parentIndex)), null, PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), _el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(DateRangeEditorHostL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(PopupSizeProviderL())) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new = function() {
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, L0);
  var C11;
  material_date_range_picker$46template.createMaterialDateRangePickerComponentFactory = function createMaterialDateRangePickerComponentFactory() {
    return new (ComponentFactoryOfMaterialDateRangePickerComponentL()).new("material-date-range-picker", C11 || CT.C11);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1 = function viewFactory_MaterialDateRangePickerComponent1(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2 = function viewFactory_MaterialDateRangePickerComponent2(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3 = function viewFactory_MaterialDateRangePickerComponent3(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4 = function viewFactory_MaterialDateRangePickerComponent4(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0 = function viewFactory_MaterialDateRangePickerComponentHost0() {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new();
  };
  material_date_range_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_date_range_picker$46template._visited)) {
      return;
    }
    material_date_range_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDateRangePickerComponentL()), material_date_range_picker$46template.createMaterialDateRangePickerComponentFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_button$46template.initReflector();
    comparison$46template.initReflector();
    comparison_option$46template.initReflector();
    config$46template.initReflector();
    date_range_editor$46template.initReflector();
    date_range_editor_host$46template.initReflector();
    model$46template.initReflector();
    module$46template.initReflector();
    next_prev_buttons$46template.initReflector();
    preset$46template.initReflector();
    range$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    focusable_mixin$46template.initReflector();
    date$46template.initReflector();
    date_formatter$46template.initReflector();
    observable$46template.initReflector();
    css$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_date_range_picker$46template, {
    get MaterialDateRangePickerComponentNgFactory() {
      return material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C12;
  dart.defineLazy(material_date_range_picker$46template, {
    /*material_date_range_picker$46template.styles$MaterialDateRangePickerComponent*/get styles$MaterialDateRangePickerComponent() {
      return [material_date_range_picker$46scss$46css$46shim.styles];
    },
    /*material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory*/get _MaterialDateRangePickerComponentNgFactory() {
      return C12 || CT.C12;
    },
    /*material_date_range_picker$46template.styles$MaterialDateRangePickerComponentHost*/get styles$MaterialDateRangePickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_date_range_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.template", {
    "package:angular_components/material_datepicker/material_date_range_picker.template.dart": material_date_range_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker$46template: material_date_range_picker$46template
  };
}));

//# sourceMappingURL=material_date_range_picker.template.unsound.ddc.js.map
