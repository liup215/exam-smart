define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_compiler/v1/src/metadata', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/model/math/box', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/utils/browser/window/module'], (function load__packages__angular_components__laminate__popup__module(dart_sdk, packages__angular_components__laminate__enums__alignment, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_compiler__v1__src__metadata, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__imperative_view__imperative_view, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_components__utils__disposer__disposer, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__dom_service__angular_2, packages__angular_components__utils__angular__managed_zone__angular_2, packages__angular_components__src__utils__angular__managed_zone__managed_zone, packages__angular_components__laminate__overlay__module, packages__angular_components__model__math__box, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__utils__browser__window__module) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const angular_2 = packages__angular_components__utils__browser__dom_service__angular_2.utils__browser__dom_service__angular_2;
  const angular_2$ = packages__angular_components__utils__angular__managed_zone__angular_2.utils__angular__managed_zone__angular_2;
  const managed_zone = packages__angular_components__src__utils__angular__managed_zone__managed_zone.src__utils__angular__managed_zone__managed_zone;
  const module = packages__angular_components__laminate__overlay__module.laminate__overlay__module;
  const box = packages__angular_components__model__math__box.model__math__box;
  const overlay_dom_render_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const overlay_style_config = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const module$ = packages__angular_components__utils__browser__window__module.utils__browser__window__module;
  var module$0 = Object.create(dart.library);
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(di_tokens.OpaqueToken$(ListLOfRelativePositionL())))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(di_providers.Provider)))();
  var AcxImperativeViewUtilsL = () => (AcxImperativeViewUtilsL = dart.constFn(dart.legacy(imperative_view.AcxImperativeViewUtils)))();
  var DomRulerL = () => (DomRulerL = dart.constFn(dart.legacy(dom_ruler.DomRuler)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = () => (DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = dart.constFn(dart.fnType(DomServiceL(), [DomServiceL(), DisposerL(), NgZoneL(), WindowL()])))();
  var Angular2ManagedZoneL = () => (Angular2ManagedZoneL = dart.constFn(dart.legacy(angular_2$.Angular2ManagedZone)))();
  var ManagedZoneL = () => (ManagedZoneL = dart.constFn(dart.legacy(managed_zone.ManagedZone)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringLAndHtmlElementLAnddynamicToHtmlElementL = () => (StringLAndHtmlElementLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL(), dart.dynamic])))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var DocumentLAnddynamicToHtmlElementL = () => (DocumentLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [DocumentL(), dart.dynamic])))();
  var OverlayDomRenderServiceL = () => (OverlayDomRenderServiceL = dart.constFn(dart.legacy(overlay_dom_render_service.OverlayDomRenderService)))();
  var OverlayStyleConfigL = () => (OverlayStyleConfigL = dart.constFn(dart.legacy(overlay_style_config.OverlayStyleConfig)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var FactoryProviderOfObjectL = () => (FactoryProviderOfObjectL = dart.constFn(di_providers.FactoryProvider$(ObjectL())))();
  var HtmlDocumentL = () => (HtmlDocumentL = dart.constFn(dart.legacy(html.HtmlDocument)))();
  var VoidToHtmlDocumentL = () => (VoidToHtmlDocumentL = dart.constFn(dart.fnType(HtmlDocumentL(), [])))();
  var VoidToWindowL = () => (VoidToWindowL = dart.constFn(dart.fnType(WindowL(), [])))();
  var ProviderOfObjectL = () => (ProviderOfObjectL = dart.constFn(di_providers.Provider$(ObjectL())))();
  var ProviderLOfObjectL = () => (ProviderLOfObjectL = dart.constFn(dart.legacy(ProviderOfObjectL())))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  var FactoryProviderL = () => (FactoryProviderL = dart.constFn(dart.legacy(di_providers.FactoryProvider)))();
  var ListOfProviderL = () => (ListOfProviderL = dart.constFn(core.List$(ProviderL())))();
  var ListLOfProviderL = () => (ListLOfProviderL = dart.constFn(dart.legacy(ListOfProviderL())))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var StringLAndHtmlElementLToHtmlElementL = () => (StringLAndHtmlElementLToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top center",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C2 || CT.C2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-end",
        [Alignment__displayName]: "End"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C4 || CT.C4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C2 || CT.C2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom center",
        [RelativePosition_originY]: C4 || CT.C4,
        [RelativePosition_originX]: C2 || CT.C2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C4 || CT.C4,
        [RelativePosition_originX]: C4 || CT.C4
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C4 || CT.C4,
        [RelativePosition_originX]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C3 || CT.C3, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], RelativePositionL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C0 || CT.C0,
        [Provider_useClass]: null,
        [Provider_token]: C9 || CT.C9
      });
    },
    get C14() {
      return C14 = dart.wrapType(DomPopupSourceFactoryL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C14 || CT.C14,
        [Provider_token]: C14 || CT.C14
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], ProviderL());
    },
    get C19() {
      return C19 = dart.wrapType(AcxImperativeViewUtilsL());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C19 || CT.C19,
        [Provider_token]: C19 || CT.C19
      });
    },
    get C21() {
      return C21 = dart.wrapType(DomRulerL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C21 || CT.C21,
        [Provider_token]: C21 || CT.C21
      });
    },
    get C25() {
      return C25 = dart.wrapType(DomServiceL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: di_arguments.SkipSelf.prototype
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], ObjectL());
    },
    get C29() {
      return C29 = dart.wrapType(DisposerL());
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C26 || CT.C26], ObjectL());
    },
    get C30() {
      return C30 = dart.wrapType(NgZoneL());
    },
    get C31() {
      return C31 = dart.wrapType(WindowL());
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C28 || CT.C28, C30 || CT.C30, C31 || CT.C31], ObjectL());
    },
    get C32() {
      return C32 = dart.fn(angular_2.createDomService, DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: C23 || CT.C23,
        [Provider_useFactory]: C32 || CT.C32,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C25 || CT.C25
      });
    },
    get C34() {
      return C34 = dart.wrapType(Angular2ManagedZoneL());
    },
    get C35() {
      return C35 = dart.wrapType(ManagedZoneL());
    },
    get C33() {
      return C33 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C34 || CT.C34,
        [Provider_token]: C35 || CT.C35
      });
    },
    get C37() {
      return C37 = dart.fn(module.getDefaultContainerName, dynamicToStringL());
    },
    get C38() {
      return C38 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerName"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C37 || CT.C37,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C38 || CT.C38
      });
    },
    get C40() {
      return C40 = dart.fn(module.getDefaultContainer, StringLAndHtmlElementLAnddynamicToHtmlElementL());
    },
    get C41() {
      return C41 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainer"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C40 || CT.C40,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C41 || CT.C41
      });
    },
    get C43() {
      return C43 = dart.fn(module.getOverlayContainerParent, DocumentLAnddynamicToHtmlElementL());
    },
    get C44() {
      return C44 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerParent"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C43 || CT.C43,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C44 || CT.C44
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlaySyncDom"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: true,
        [Provider_useClass]: null,
        [Provider_token]: C46 || CT.C46
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: true,
        [Provider_useClass]: null,
        [Provider_token]: C48 || CT.C48
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: box.Box.prototype,
        [Box_left]: 0,
        [Box_bottom]: 0,
        [Box_right]: 0,
        [Box_top]: 0
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C50 || CT.C50,
        [Provider_useClass]: null,
        [Provider_token]: C51 || CT.C51
      });
    },
    get C53() {
      return C53 = dart.wrapType(OverlayDomRenderServiceL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C53 || CT.C53,
        [Provider_token]: C53 || CT.C53
      });
    },
    get C55() {
      return C55 = dart.wrapType(OverlayStyleConfigL());
    },
    get C54() {
      return C54 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C55 || CT.C55,
        [Provider_token]: C55 || CT.C55
      });
    },
    get C57() {
      return C57 = dart.wrapType(OverlayServiceL());
    },
    get C56() {
      return C56 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C57 || CT.C57,
        [Provider_token]: C57 || CT.C57
      });
    },
    get C59() {
      return C59 = dart.wrapType(ZIndexerL());
    },
    get C58() {
      return C58 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C59 || CT.C59,
        [Provider_token]: C59 || CT.C59
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C20 || CT.C20, C22 || CT.C22, C33 || CT.C33, C36 || CT.C36, C39 || CT.C39, C42 || CT.C42, C45 || CT.C45, C47 || CT.C47, C49 || CT.C49, C52 || CT.C52, C54 || CT.C54, C56 || CT.C56, C58 || CT.C58], ProviderL());
    },
    get C64() {
      return C64 = dart.fn(module$.getDocument, VoidToHtmlDocumentL());
    },
    get C65() {
      return C65 = dart.wrapType(DocumentL());
    },
    get C63() {
      return C63 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C64 || CT.C64,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C65 || CT.C65
      });
    },
    get C67() {
      return C67 = dart.wrapType(HtmlDocumentL());
    },
    get C66() {
      return C66 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C64 || CT.C64,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C67 || CT.C67
      });
    },
    get C69() {
      return C69 = dart.fn(module$.getWindow, VoidToWindowL());
    },
    get C68() {
      return C68 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C69 || CT.C69,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C31 || CT.C31
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C66 || CT.C66, C68 || CT.C68], ProviderLOfObjectL());
    },
    get C70() {
      return C70 = dart.constList([], ModuleL());
    },
    get C61() {
      return C61 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C62 || CT.C62,
        [Module_include]: C70 || CT.C70
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], ModuleL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C17 || CT.C17,
        [Module_include]: C60 || CT.C60
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], ModuleL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C11 || CT.C11,
        [Module_include]: C15 || CT.C15
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C64 || CT.C64,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C65 || CT.C65
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C64 || CT.C64,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C67 || CT.C67
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C69 || CT.C69,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C31 || CT.C31
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], FactoryProviderL());
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C17 || CT.C17], ListLOfProviderL());
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C11 || CT.C11], ListLOfObjectL());
    },
    get C82() {
      return C82 = dart.fn(module.getDebugContainer, StringLAndHtmlElementLToHtmlElementL());
    },
    get C81() {
      return C81 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C82 || CT.C82,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C41 || CT.C41
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], ProviderL());
    },
    get C79() {
      return C79 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C80 || CT.C80,
        [Module_include]: C15 || CT.C15
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], ModuleL());
    },
    get C77() {
      return C77 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C11 || CT.C11,
        [Module_include]: C78 || CT.C78
      });
    },
    get C84() {
      return C84 = dart.constList([C72 || CT.C72, C80 || CT.C80], ListLOfObjectL());
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C11 || CT.C11], ListLOfObjectL());
    }
  }, false);
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var C2;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C1;
  var C4;
  var C3;
  var C5;
  var C6;
  var C7;
  var C8;
  var C0;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C9;
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C12;
  var C14;
  var C13;
  var C11;
  var Module_provide = dart.privateName(di_modules, "Module.provide");
  var C19;
  var C18;
  var C21;
  var C20;
  var C25;
  var C26;
  var C27;
  var C24;
  var C29;
  var C28;
  var C30;
  var C31;
  var C23;
  var C32;
  var C22;
  var C34;
  var C35;
  var C33;
  var C37;
  var C38;
  var C36;
  var C40;
  var C41;
  var C39;
  var C43;
  var C44;
  var C42;
  var C46;
  var C45;
  var C48;
  var C47;
  var Box_left = dart.privateName(box, "Box.left");
  var Box_bottom = dart.privateName(box, "Box.bottom");
  var Box_right = dart.privateName(box, "Box.right");
  var Box_top = dart.privateName(box, "Box.top");
  var C50;
  var C51;
  var C49;
  var C53;
  var C52;
  var C55;
  var C54;
  var C57;
  var C56;
  var C59;
  var C58;
  var C17;
  var C64;
  var C65;
  var C63;
  var C67;
  var C66;
  var C69;
  var C68;
  var C62;
  var C70;
  var Module_include = dart.privateName(di_modules, "Module.include");
  var C61;
  var C60;
  var C16;
  var C15;
  var C10;
  var C74;
  var C75;
  var C76;
  var C73;
  var C72;
  var C71;
  var C82;
  var C81;
  var C80;
  var C79;
  var C78;
  var C77;
  var C84;
  var C83;
  dart.defineLazy(module$0, {
    /*module$0.inlinePositions*/get inlinePositions() {
      return C0 || CT.C0;
    },
    /*module$0.defaultPopupPositions*/get defaultPopupPositions() {
      return C9 || CT.C9;
    },
    /*module$0.popupModule*/get popupModule() {
      return C10 || CT.C10;
    },
    /*module$0._popupProviders*/get _popupProviders() {
      return C11 || CT.C11;
    },
    /*module$0.popupBindings*/get popupBindings() {
      return C71 || CT.C71;
    },
    /*module$0.popupDebugModule*/get popupDebugModule() {
      return C77 || CT.C77;
    },
    /*module$0.popupDebugBindings*/get popupDebugBindings() {
      return C83 || CT.C83;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/popup/module", {
    "package:angular_components/laminate/popup/module.dart": module$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MASM,wBAAe;;;MAKf,8BAAqB;;;MAOrB,oBAAW;;;MAOX,wBAAe;;;MAQf,sBAAa;;;MAQb,yBAAgB;;;MAUhB,2BAAkB","file":"module.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__popup__module: module$0
  };
}));

//# sourceMappingURL=module.unsound.ddc.js.map
