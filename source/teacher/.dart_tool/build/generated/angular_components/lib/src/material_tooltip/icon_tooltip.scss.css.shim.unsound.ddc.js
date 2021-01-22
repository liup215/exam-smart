define(['dart_sdk', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/theme/dark_theme.template'], (function load__packages__angular_components__src__material_tooltip__icon_tooltip_scss_css_shim(dart_sdk, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular__angular$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_tooltip__module$46template, packages__angular_components__model__action__delayed_action$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__src__material_tooltip__tooltip_controller$46template, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__queries, packages__angular_components__material_popup__material_popup, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__focus, packages__angular_components__laminate__components__modal__modal, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__content__deferred_content$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_icon__material_icon, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__theme__dark_theme, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__theme__dark_theme$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ink_tooltip$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__ink_tooltip$46template;
  const tooltip_source$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_source$46template;
  const tooltip_target$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_target$46template;
  const paper_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__paper_tooltip;
  const tooltip_target = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_target;
  const icon_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__icon_tooltip;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const module$46template = packages__angular_components__material_tooltip__module$46template.material_tooltip__module$46template;
  const delayed_action$46template = packages__angular_components__model__action__delayed_action$46template.model__action__delayed_action$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const tooltip_controller$46template = packages__angular_components__src__material_tooltip__tooltip_controller$46template.src__material_tooltip__tooltip_controller$46template;
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
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const dark_theme$46template = packages__angular_components__theme__dark_theme$46template.theme__dark_theme$46template;
  var icon_tooltip$46scss$46css$46shim = Object.create(dart.library);
  var tooltip$46template = Object.create(dart.library);
  var paper_tooltip$46scss$46css$46shim = Object.create(dart.library);
  var paper_tooltip$46template = Object.create(dart.library);
  var icon_tooltip$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var _ViewMaterialPaperTooltipComponent1L = () => (_ViewMaterialPaperTooltipComponent1L = dart.constFn(dart.legacy(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1)))();
  var _ViewMaterialPaperTooltipComponent1LToMaterialPopupComponentL = () => (_ViewMaterialPaperTooltipComponent1LToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [_ViewMaterialPaperTooltipComponent1L()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
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
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ViewMaterialPaperTooltipComponent0L = () => (ViewMaterialPaperTooltipComponent0L = dart.constFn(dart.legacy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialPaperTooltipComponentL = () => (MaterialPaperTooltipComponentL = dart.constFn(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)))();
  var TooltipL = () => (TooltipL = dart.constFn(dart.legacy(tooltip_controller.Tooltip)))();
  var ComponentFactoryOfMaterialPaperTooltipComponentL = () => (ComponentFactoryOfMaterialPaperTooltipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialPaperTooltipComponentL())))();
  var HostViewOfMaterialPaperTooltipComponentL = () => (HostViewOfMaterialPaperTooltipComponentL = dart.constFn(host_view.HostView$(MaterialPaperTooltipComponentL())))();
  var HostViewLOfMaterialPaperTooltipComponentL = () => (HostViewLOfMaterialPaperTooltipComponentL = dart.constFn(dart.legacy(HostViewOfMaterialPaperTooltipComponentL())))();
  var VoidToHostViewLOfMaterialPaperTooltipComponentL = () => (VoidToHostViewLOfMaterialPaperTooltipComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialPaperTooltipComponentL(), [])))();
  var MaterialPaperTooltipComponentLToTooltipL = () => (MaterialPaperTooltipComponentLToTooltipL = dart.constFn(dart.fnType(TooltipL(), [MaterialPaperTooltipComponentL()])))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var ClickableTooltipTargetDirectiveL = () => (ClickableTooltipTargetDirectiveL = dart.constFn(dart.legacy(tooltip_target.ClickableTooltipTargetDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var VoidToClickableTooltipTargetDirectiveL = () => (VoidToClickableTooltipTargetDirectiveL = dart.constFn(dart.fnType(ClickableTooltipTargetDirectiveL(), [])))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var MaterialIconTooltipComponentL = () => (MaterialIconTooltipComponentL = dart.constFn(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)))();
  var ComponentFactoryOfMaterialIconTooltipComponentL = () => (ComponentFactoryOfMaterialIconTooltipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialIconTooltipComponentL())))();
  var HostViewOfMaterialIconTooltipComponentL = () => (HostViewOfMaterialIconTooltipComponentL = dart.constFn(host_view.HostView$(MaterialIconTooltipComponentL())))();
  var HostViewLOfMaterialIconTooltipComponentL = () => (HostViewLOfMaterialIconTooltipComponentL = dart.constFn(dart.legacy(HostViewOfMaterialIconTooltipComponentL())))();
  var VoidToHostViewLOfMaterialIconTooltipComponentL = () => (VoidToHostViewLOfMaterialIconTooltipComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialIconTooltipComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/material_tooltip/paper_tooltip.template.dart";
  var L1 = "package:angular_components/src/material_tooltip/icon_tooltip.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._debugClearComponentStyles, VoidTovoid());
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
      return C5 = dart.constList([], dart.dynamic);
    },
    get C6() {
      return C6 = dart.fn(paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0, VoidToHostViewLOfMaterialPaperTooltipComponentL());
    },
    get C7() {
      return C7 = dart.fn(paper_tooltip.getTooltipHandle, MaterialPaperTooltipComponentLToTooltipL());
    },
    get C10() {
      return C10 = dart.wrapType(MaterialPaperTooltipComponentL());
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], ObjectL());
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], ListLOfObjectL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialPaperTooltipComponentL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "material-tooltip-card"
      });
    },
    get C12() {
      return C12 = dart.fn(icon_tooltip$46template.ViewMaterialIconTooltipComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C14() {
      return C14 = dart.fn(icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0, VoidToHostViewLOfMaterialIconTooltipComponentL());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ComponentFactoryOfMaterialIconTooltipComponentL().prototype,
        [ComponentFactory__viewFactory]: C14 || CT.C14,
        [ComponentFactory_selector]: "material-icon-tooltip"
      });
    }
  }, false);
  dart.defineLazy(icon_tooltip$46scss$46css$46shim, {
    /*icon_tooltip$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:hover material-icon._ngcontent-%ID%,._nghost-%ID%:focus material-icon._ngcontent-%ID%{color:#3367d6}._nghost-%ID% material-icon._ngcontent-%ID%{color:rgba(0,0,0,0.54);cursor:pointer}._nghost-%ID%.acx-theme-dark:hover material-icon._ngcontent-%ID%,._nghost-%ID%.acx-theme-dark:focus material-icon._ngcontent-%ID%{color:#fff}._nghost-%ID%.acx-theme-dark material-icon._ngcontent-%ID%{color:#fff}"];
    }
  }, true);
  tooltip$46template.initReflector = function initReflector() {
    if (dart.test(tooltip$46template._visited)) {
      return;
    }
    tooltip$46template._visited = true;
    ink_tooltip$46template.initReflector();
    ink_tooltip$46template.initReflector();
    angular$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    module$46template.initReflector();
    delayed_action$46template.initReflector();
    css$46template.initReflector();
    feature_detector$46template.initReflector();
    disposer$46template.initReflector();
    tooltip_controller$46template.initReflector();
    tooltip_source$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.defineLazy(tooltip$46template, {
    /*tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(paper_tooltip$46scss$46css$46shim, {
    /*paper_tooltip$46scss$46css$46shim.styles*/get styles() {
      return [".paper-container._ngcontent-%ID%{background-color:#fff;font-size:13px;line-height:20px;max-height:400px;max-width:400px;min-width:160px;padding:24px;display:flex;flex-direction:column}@media (max-width:448px){.paper-container._ngcontent-%ID%{max-width:100vw;box-sizing:border-box}}.paper-container._ngcontent-%ID% .header:not(:empty)._ngcontent-%ID%{display:block;font-weight:bold;margin-bottom:8px}.paper-container._ngcontent-%ID% .body._ngcontent-%ID%{flex-grow:1}.paper-container._ngcontent-%ID% .footer._ngcontent-%ID% material-button._ngcontent-%ID%{margin:0}"];
    }
  }, true);
  var _viewQuery_MaterialPopupComponent_0_isDirty = dart.privateName(paper_tooltip$46template, "_viewQuery_MaterialPopupComponent_0_isDirty");
  var _appEl_0 = dart.privateName(paper_tooltip$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(paper_tooltip$46template, "_NgIf_0_9");
  var C0;
  var _MaterialPopupComponent_0_8 = dart.privateName(paper_tooltip$46template, "_MaterialPopupComponent_0_8");
  var _compView_0 = dart.privateName(paper_tooltip$46template, "_compView_0");
  var C1;
  paper_tooltip$46template.ViewMaterialPaperTooltipComponent0 = class ViewMaterialPaperTooltipComponent0 extends component_view.ComponentView$(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.popupSource != null;
      this[_appEl_0].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_MaterialPopupComponent_0_isDirty])) {
          _ctx.popupChild = queries.firstOrNull(MaterialPopupComponentL(), this[_appEl_0].mapNestedViewsWithSingleResult(MaterialPopupComponentL(), _ViewMaterialPaperTooltipComponent1L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MaterialPopupComponent_0_8], nestedView[_compView_0]);
            return nestedView[_MaterialPopupComponent_0_8];
          }, _ViewMaterialPaperTooltipComponent1LToMaterialPopupComponentL())));
          this[_viewQuery_MaterialPopupComponent_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles;
      if (styles == null) {
        paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(paper_tooltip$46template.styles$MaterialPaperTooltipComponent, paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_MaterialPopupComponent_0_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-tooltip-card"));
  }).prototype = paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.prototype;
  dart.addTypeTests(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0);
  dart.addTypeCaches(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0);
  dart.setMethodSignature(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getMethods(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, L0);
  dart.setFieldSignature(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getFields(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    [_viewQuery_MaterialPopupComponent_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, {
    /*paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _PopupRef_0_9 = dart.privateName(paper_tooltip$46template, "_PopupRef_0_9");
  var __PopupHierarchy_0_12 = dart.privateName(paper_tooltip$46template, "__PopupHierarchy_0_12");
  var _AutoFocusDirective_2_5 = dart.privateName(paper_tooltip$46template, "_AutoFocusDirective_2_5");
  var _expr_1 = dart.privateName(paper_tooltip$46template, "_expr_1");
  var _expr_2 = dart.privateName(paper_tooltip$46template, "_expr_2");
  var _expr_4 = dart.privateName(paper_tooltip$46template, "_expr_4");
  var _expr_5 = dart.privateName(paper_tooltip$46template, "_expr_5");
  var _expr_6 = dart.privateName(paper_tooltip$46template, "_expr_6");
  var _expr_7 = dart.privateName(paper_tooltip$46template, "_expr_7");
  var _expr_9 = dart.privateName(paper_tooltip$46template, "_expr_9");
  var _expr_10 = dart.privateName(paper_tooltip$46template, "_expr_10");
  var _el_0 = dart.privateName(paper_tooltip$46template, "_el_0");
  var _PopupHierarchy_0_12 = dart.privateName(paper_tooltip$46template, "_PopupHierarchy_0_12");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C2;
  var C3;
  var C4;
  var C5;
  paper_tooltip$46template._ViewMaterialPaperTooltipComponent1 = class _ViewMaterialPaperTooltipComponent1 extends embedded_view.EmbeddedView$(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)) {
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "enforceSpaceConstraints", "");
      dom_helpers.setAttribute(this[_el_0], "trackLayoutChanges", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0]));
      this[_PopupRef_0_9] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      let _text_1 = dom_helpers.createText("\n  ");
      let doc = html.document;
      let _el_2 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_2), "paper-container");
      this.addShimC(HtmlElementL().as(_el_2));
      this[_AutoFocusDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(_el_2), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)), PopupRefL().as(this[_PopupRef_0_9])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(_el_2), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)), PopupRefL().as(this[_PopupRef_0_9]));
      let _text_3 = dom_helpers.appendText(_el_2, "\n    ");
      let _el_4 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_4, "header");
      this.addShimC(_el_4);
      this.project(_el_4, 0);
      let _text_5 = dom_helpers.appendText(_el_2, "\n    ");
      let _el_6 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_6, "body");
      this.addShimC(_el_6);
      this.project(_el_6, 1);
      let _text_7 = dom_helpers.appendText(_el_2, "\n    ");
      let _el_8 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_8, "footer");
      this.addShimC(_el_8);
      this.project(_el_8, 2);
      let _text_9 = dom_helpers.appendText(_el_2, "\n  ");
      let _text_10 = dom_helpers.createText("\n");
      this[_compView_0].createAndProject(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C5 || CT.C5, JSArrayOfNodeL().of([_text_1, _el_2, _text_10]), C5 || CT.C5]));
      _el_2[$addEventListener]("mouseover", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseOver')));
      _el_2[$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseLeave')));
      this.initRootNode(this[_appEl_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 10) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_9];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
        changed = true;
      }
      let currVal_2 = _ctx.focusContents;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "focusContents", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_MaterialPopupComponent_0_8].autoDismiss = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_4 = _ctx.offsetX;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "offsetX", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_MaterialPopupComponent_0_8].offsetX = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.offsetY;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "offsetY", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_MaterialPopupComponent_0_8].offsetY = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "preferredPositions", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.popupSource;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "popupSource", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_MaterialPopupComponent_0_8].source = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_9 = _ctx.showPopup;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "showPopup", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_10 = _ctx.focusContents;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "focusContents", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        this[_AutoFocusDirective_2_5].autoFocus = currVal_10;
        this[_expr_10] = currVal_10;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      if (dart.test(firstCheck)) {
        if (_ctx.popupClassName != null) {
          this[_compView_0].updateChildClassNonHtml(this[_el_0], _ctx.popupClassName);
        }
      }
      let currVal_1 = dart.test(_ctx.focusContents) ? "dialog" : "tooltip";
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "focusContents ? 'dialog' : 'tooltip'", "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart"))) {
        dom_helpers.updateAttribute(this[_el_0], "role", (t0 = currVal_1, t0 === null ? null : t0[$toString]()));
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialPaperTooltipComponent0L(), this.parentView)[_viewQuery_MaterialPopupComponent_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[_PopupRef_0_9] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_el_0] = null;
    paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.prototype;
  dart.addTypeTests(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1);
  dart.addTypeCaches(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1);
  dart.setMethodSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getMethods(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getGetters(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, L0);
  dart.setFieldSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getFields(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [_PopupRef_0_9]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_AutoFocusDirective_2_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _TooltipController_0_5 = dart.privateName(paper_tooltip$46template, "_TooltipController_0_5");
  var __Tooltip_0_7 = dart.privateName(paper_tooltip$46template, "__Tooltip_0_7");
  var _Tooltip_0_7 = dart.privateName(paper_tooltip$46template, "_Tooltip_0_7");
  paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0 = class _ViewMaterialPaperTooltipComponentHost0 extends host_view.HostView$(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)) {
    get [_Tooltip_0_7]() {
      if (this[__Tooltip_0_7] == null) {
        this[__Tooltip_0_7] = paper_tooltip.getTooltipHandle(this.component);
      }
      return this[__Tooltip_0_7];
    }
    build() {
      this.componentView = new paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_TooltipController_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex)));
      this.component = new paper_tooltip.MaterialPaperTooltipComponent.new(TooltipControllerL().as(this[_TooltipController_0_5]), this.componentView, _el_0, null);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_5];
        }
        if (token === dart.wrapType(MaterialPaperTooltipComponentL()) || token === dart.wrapType(DeferredContentAwareL())) {
          return this.component;
        }
        if (token === dart.wrapType(TooltipL())) {
          return this[_Tooltip_0_7];
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
  };
  (paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new = function() {
    this[_TooltipController_0_5] = null;
    this[__Tooltip_0_7] = null;
    paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.prototype;
  dart.addTypeTests(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0);
  dart.addTypeCaches(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0);
  dart.setMethodSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getGetters(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_Tooltip_0_7]: dart.dynamic
  }));
  dart.setLibraryUri(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, L0);
  dart.setFieldSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getFields(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [__Tooltip_0_7]: dart.fieldType(dart.dynamic)
  }));
  var C6;
  var C7;
  var C10;
  var C9;
  var C8;
  paper_tooltip$46template.createMaterialPaperTooltipComponentFactory = function createMaterialPaperTooltipComponentFactory() {
    return new (ComponentFactoryOfMaterialPaperTooltipComponentL()).new("material-tooltip-card", C6 || CT.C6);
  };
  paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1 = function viewFactory_MaterialPaperTooltipComponent1(parentView, parentIndex) {
    return new paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new(parentView, parentIndex);
  };
  paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0 = function viewFactory_MaterialPaperTooltipComponentHost0() {
    return new paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new();
  };
  paper_tooltip$46template.initReflector = function initReflector$() {
    if (dart.test(paper_tooltip$46template._visited)) {
      return;
    }
    paper_tooltip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialPaperTooltipComponentL()), paper_tooltip$46template.createMaterialPaperTooltipComponentFactory());
    reflector.registerDependencies(C7 || CT.C7, C8 || CT.C8);
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_popup$46template.initReflector();
    module$46template.initReflector();
    css$46template.initReflector();
    tooltip_controller$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.copyProperties(paper_tooltip$46template, {
    get MaterialPaperTooltipComponentNgFactory() {
      return paper_tooltip$46template._MaterialPaperTooltipComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C11;
  dart.defineLazy(paper_tooltip$46template, {
    /*paper_tooltip$46template.styles$MaterialPaperTooltipComponent*/get styles$MaterialPaperTooltipComponent() {
      return [paper_tooltip$46scss$46css$46shim.styles];
    },
    /*paper_tooltip$46template._MaterialPaperTooltipComponentNgFactory*/get _MaterialPaperTooltipComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*paper_tooltip$46template.styles$MaterialPaperTooltipComponentHost*/get styles$MaterialPaperTooltipComponentHost() {
      return C5 || CT.C5;
    },
    /*paper_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _compView_1 = dart.privateName(icon_tooltip$46template, "_compView_1");
  var _appEl_1 = dart.privateName(icon_tooltip$46template, "_appEl_1");
  var _ClickableTooltipTargetDirective_1_8 = dart.privateName(icon_tooltip$46template, "_ClickableTooltipTargetDirective_1_8");
  var _MaterialIconComponent_1_9 = dart.privateName(icon_tooltip$46template, "_MaterialIconComponent_1_9");
  var _KeyboardOnlyFocusIndicatorDirective_1_10 = dart.privateName(icon_tooltip$46template, "_KeyboardOnlyFocusIndicatorDirective_1_10");
  var _compView_4 = dart.privateName(icon_tooltip$46template, "_compView_4");
  var _TooltipController_4_5 = dart.privateName(icon_tooltip$46template, "_TooltipController_4_5");
  var _MaterialPaperTooltipComponent_4_6 = dart.privateName(icon_tooltip$46template, "_MaterialPaperTooltipComponent_4_6");
  var __Tooltip_4_7 = dart.privateName(icon_tooltip$46template, "__Tooltip_4_7");
  var _expr_3 = dart.privateName(icon_tooltip$46template, "_expr_3");
  var _expr_4$ = dart.privateName(icon_tooltip$46template, "_expr_4");
  var _expr_5$ = dart.privateName(icon_tooltip$46template, "_expr_5");
  var _expr_6$ = dart.privateName(icon_tooltip$46template, "_expr_6");
  var _el_1 = dart.privateName(icon_tooltip$46template, "_el_1");
  var _Tooltip_4_7 = dart.privateName(icon_tooltip$46template, "_Tooltip_4_7");
  var _handleEvent_0 = dart.privateName(icon_tooltip$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(icon_tooltip$46template, "_handleEvent_1");
  var C12;
  icon_tooltip$46template.ViewMaterialIconTooltipComponent0 = class ViewMaterialIconTooltipComponent0 extends component_view.ComponentView$(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)) {
    get [_Tooltip_4_7]() {
      if (this[__Tooltip_4_7] == null) {
        this[__Tooltip_4_7] = paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_4_6]);
      }
      return this[__Tooltip_4_7];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart" : null;
    }
    build() {
      let t0;
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "    ");
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      parentRenderNode[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "clickableTooltipTarget", "");
      dom_helpers.setAttribute(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this[_el_1].tabIndex = 0;
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ClickableTooltipTargetDirective_1_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ClickableTooltipTargetDirectiveL(), dart.wrapType(ClickableTooltipTargetDirectiveL()), dart.fn(() => new tooltip_target.ClickableTooltipTargetDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_compView_1], null), VoidToClickableTooltipTargetDirectiveL())) : new tooltip_target.ClickableTooltipTargetDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_compView_1], null);
      this[_MaterialIconComponent_1_9] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)));
      this[_compView_1].create(this[_MaterialIconComponent_1_9]);
      let _text_3 = dom_helpers.appendText(parentRenderNode, "\n    ");
      this[_compView_4] = new paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      parentRenderNode[$append](_el_4);
      this.addShimC(_el_4);
      this[_TooltipController_4_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentIndex)));
      this[_MaterialPaperTooltipComponent_4_6] = new paper_tooltip.MaterialPaperTooltipComponent.new(TooltipControllerL().as(this[_TooltipController_4_5]), this[_compView_4], _el_4, null);
      let _text_5 = dom_helpers.createText("\n      ");
      let _text_6 = dom_helpers.createText("\n    ");
      this[_compView_4].createAndProject(this[_MaterialPaperTooltipComponent_4_6], JSArrayOfObjectL().of([C5 || CT.C5, (t0 = [_text_5], (() => {
          t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
          t0[$addAll]([_text_6]);
          return t0;
        })()), C5 || CT.C5]));
      this[_el_1][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_1][$addEventListener]("mouseover", this.eventHandler0(EventL(), dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseOver')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseLeave')));
      this[_el_1][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'kbTrigger')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'keydown')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'onFocus')));
      view.View.queryChangeDetectorRefs._set(this[_MaterialPaperTooltipComponent_4_6], this[_compView_4]);
      _ctx.deferredContentAware = this[_MaterialPaperTooltipComponent_4_6];
      _ctx.tooltipBehavior = this[_ClickableTooltipTargetDirective_1_8];
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_4_5];
        }
        if (token === dart.wrapType(MaterialPaperTooltipComponentL()) || token === dart.wrapType(DeferredContentAwareL())) {
          return this[_MaterialPaperTooltipComponent_4_6];
        }
        if (token === dart.wrapType(TooltipL())) {
          return this[_Tooltip_4_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_tooltipRef = this[_ClickableTooltipTargetDirective_1_8];
      changed = false;
      if (dart.test(firstCheck)) {
        if (_ctx.icon != null) {
          this[_MaterialIconComponent_1_9].icon = _ctx.icon;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      let currVal_3 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "preferredPositions", "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart"))) {
        this[_MaterialPaperTooltipComponent_4_6].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.offsetX;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "offsetX", "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart"))) {
        this[_MaterialPaperTooltipComponent_4_6].offsetX = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.offsetY;
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "offsetY", "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart"))) {
        this[_MaterialPaperTooltipComponent_4_6].offsetY = currVal_5;
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = local_tooltipRef;
      if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "tooltipRef", "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart"))) {
        this[_MaterialPaperTooltipComponent_4_6].tooltipRef = currVal_6;
        changed = true;
        this[_expr_6$] = currVal_6;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      this[_appEl_1].detectChangesInNestedViews();
      if (dart.test(firstCheck)) {
        if (icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel);
        }
        if (_ctx.iconSize != null) {
          dom_helpers.updateAttribute(this[_el_1], "size", _ctx.iconSize);
        }
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_ClickableTooltipTargetDirective_1_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_ClickableTooltipTargetDirective_1_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      this[_ClickableTooltipTargetDirective_1_8].onClick();
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].onMouseInteraction();
    }
    [_handleEvent_1]($36event) {
      this[_ClickableTooltipTargetDirective_1_8].onBlur(FocusEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].resetOutline();
    }
    static _debugClearComponentStyles() {
      icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles;
      if (styles == null) {
        icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(icon_tooltip$46template.styles$MaterialIconTooltipComponent, icon_tooltip$46template.ViewMaterialIconTooltipComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C12 || CT.C12);
        }
      }
      this.componentStyles = styles;
    }
  };
  (icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_ClickableTooltipTargetDirective_1_8] = null;
    this[_MaterialIconComponent_1_9] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_10] = null;
    this[_compView_4] = null;
    this[_TooltipController_4_5] = null;
    this[_MaterialPaperTooltipComponent_4_6] = null;
    this[__Tooltip_4_7] = null;
    this[_expr_3] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_el_1] = null;
    icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-icon-tooltip"));
  }).prototype = icon_tooltip$46template.ViewMaterialIconTooltipComponent0.prototype;
  dart.addTypeTests(icon_tooltip$46template.ViewMaterialIconTooltipComponent0);
  dart.addTypeCaches(icon_tooltip$46template.ViewMaterialIconTooltipComponent0);
  dart.setMethodSignature(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getMethods(icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getGetters(icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_Tooltip_4_7]: dart.dynamic
  }));
  dart.setLibraryUri(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, L1);
  dart.setFieldSignature(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getFields(icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_ClickableTooltipTargetDirective_1_8]: dart.fieldType(dart.legacy(tooltip_target.ClickableTooltipTargetDirective)),
    [_MaterialIconComponent_1_9]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_KeyboardOnlyFocusIndicatorDirective_1_10]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_compView_4]: dart.fieldType(dart.legacy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0)),
    [_TooltipController_4_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_4_6]: dart.fieldType(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)),
    [__Tooltip_4_7]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, {
    /*icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _AcxDarkTheme_0_5 = dart.privateName(icon_tooltip$46template, "_AcxDarkTheme_0_5");
  var C13;
  icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0 = class _ViewMaterialIconTooltipComponentHost0 extends host_view.HostView$(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)) {
    build() {
      this.componentView = new icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.injectorGetOptional(C13 || CT.C13, this.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.injectorGetOptional(C13 || CT.C13, this.parentIndex)));
      this.component = new icon_tooltip.MaterialIconTooltipComponent.new(AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), _el_0, null, null, null);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(DeferredContentAwareL())) {
          return this.component;
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
  };
  (icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new = function() {
    this[_AcxDarkTheme_0_5] = null;
    icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.prototype;
  dart.addTypeTests(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0);
  dart.addTypeCaches(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0);
  dart.setMethodSignature(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, L1);
  dart.setFieldSignature(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getFields(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic)
  }));
  var C14;
  icon_tooltip$46template.createMaterialIconTooltipComponentFactory = function createMaterialIconTooltipComponentFactory() {
    return new (ComponentFactoryOfMaterialIconTooltipComponentL()).new("material-icon-tooltip", C14 || CT.C14);
  };
  icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0 = function viewFactory_MaterialIconTooltipComponentHost0() {
    return new icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new();
  };
  icon_tooltip$46template.initReflector = function initReflector$0() {
    if (dart.test(icon_tooltip$46template._visited)) {
      return;
    }
    icon_tooltip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialIconTooltipComponentL()), icon_tooltip$46template.createMaterialIconTooltipComponentFactory());
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    dark_theme$46template.initReflector();
    paper_tooltip$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.copyProperties(icon_tooltip$46template, {
    get MaterialIconTooltipComponentNgFactory() {
      return icon_tooltip$46template._MaterialIconTooltipComponentNgFactory;
    }
  });
  var C15;
  dart.defineLazy(icon_tooltip$46template, {
    /*icon_tooltip$46template.styles$MaterialIconTooltipComponent*/get styles$MaterialIconTooltipComponent() {
      return [icon_tooltip$46scss$46css$46shim.styles];
    },
    /*icon_tooltip$46template._MaterialIconTooltipComponentNgFactory*/get _MaterialIconTooltipComponentNgFactory() {
      return C15 || CT.C15;
    },
    /*icon_tooltip$46template.styles$MaterialIconTooltipComponentHost*/get styles$MaterialIconTooltipComponentHost() {
      return C5 || CT.C5;
    },
    /*icon_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim", {
    "package:angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.dart": icon_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/tooltip.template.dart": tooltip$46template,
    "package:angular_components/src/material_tooltip/paper_tooltip.scss.css.shim.dart": paper_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/paper_tooltip.template.dart": paper_tooltip$46template,
    "package:angular_components/src/material_tooltip/icon_tooltip.template.dart": icon_tooltip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_tooltip.scss.css.shim.dart","tooltip.template.dart","paper_tooltip.scss.css.shim.dart","paper_tooltip.template.dart","icon_tooltip.template.dart"],"names":[],"mappings":"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","file":"icon_tooltip.scss.css.shim.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__icon_tooltip$46scss$46css$46shim: icon_tooltip$46scss$46css$46shim,
    src__material_tooltip__tooltip$46template: tooltip$46template,
    src__material_tooltip__paper_tooltip$46scss$46css$46shim: paper_tooltip$46scss$46css$46shim,
    src__material_tooltip__paper_tooltip$46template: paper_tooltip$46template,
    src__material_tooltip__icon_tooltip$46template: icon_tooltip$46template
  };
}));

//# sourceMappingURL=icon_tooltip.scss.css.shim.unsound.ddc.js.map
