define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/model/math/box', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/utils/browser/window/module'], (function load__packages__angular_components__laminate__overlay__module(dart_sdk, packages__angular_compiler__v1__src__metadata, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_components__utils__angular__imperative_view__imperative_view, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_components__utils__disposer__disposer, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__dom_service__angular_2, packages__angular_components__utils__angular__managed_zone__angular_2, packages__angular_components__src__utils__angular__managed_zone__managed_zone, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__model__math__box, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__utils__browser__window__module) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const angular_2 = packages__angular_components__utils__browser__dom_service__angular_2.utils__browser__dom_service__angular_2;
  const angular_2$ = packages__angular_components__utils__angular__managed_zone__angular_2.utils__angular__managed_zone__angular_2;
  const managed_zone = packages__angular_components__src__utils__angular__managed_zone__managed_zone.src__utils__angular__managed_zone__managed_zone;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const box = packages__angular_components__model__math__box.model__math__box;
  const overlay_dom_render_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const overlay_style_config = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const module = packages__angular_components__utils__browser__window__module.utils__browser__window__module;
  var module$ = Object.create(dart.library);
  var $classes = dartx.classes;
  var $append = dartx.append;
  var $attributes = dartx.attributes;
  var $_set = dartx._set;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
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
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var StringLAndHtmlElementLAnddynamicToHtmlElementL = () => (StringLAndHtmlElementLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL(), dart.dynamic])))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var DocumentLAnddynamicToHtmlElementL = () => (DocumentLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [DocumentL(), dart.dynamic])))();
  var OverlayDomRenderServiceL = () => (OverlayDomRenderServiceL = dart.constFn(dart.legacy(overlay_dom_render_service.OverlayDomRenderService)))();
  var OverlayStyleConfigL = () => (OverlayStyleConfigL = dart.constFn(dart.legacy(overlay_style_config.OverlayStyleConfig)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(di_providers.Provider)))();
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
  var StringLAndHtmlElementLToHtmlElementL = () => (StringLAndHtmlElementLToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL()])))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C3() {
      return C3 = dart.wrapType(AcxImperativeViewUtilsL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C3 || CT.C3,
        [Provider_token]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.wrapType(DomRulerL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C5 || CT.C5,
        [Provider_token]: C5 || CT.C5
      });
    },
    get C9() {
      return C9 = dart.wrapType(DomServiceL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: di_arguments.SkipSelf.prototype
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], ObjectL());
    },
    get C13() {
      return C13 = dart.wrapType(DisposerL());
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C10 || CT.C10], ObjectL());
    },
    get C14() {
      return C14 = dart.wrapType(NgZoneL());
    },
    get C15() {
      return C15 = dart.wrapType(WindowL());
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C12 || CT.C12, C14 || CT.C14, C15 || CT.C15], ObjectL());
    },
    get C16() {
      return C16 = dart.fn(angular_2.createDomService, DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: C7 || CT.C7,
        [Provider_useFactory]: C16 || CT.C16,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C9 || CT.C9
      });
    },
    get C18() {
      return C18 = dart.wrapType(Angular2ManagedZoneL());
    },
    get C19() {
      return C19 = dart.wrapType(ManagedZoneL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C18 || CT.C18,
        [Provider_token]: C19 || CT.C19
      });
    },
    get C21() {
      return C21 = dart.fn(module$.getDefaultContainerName, dynamicToStringL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerName"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C21 || CT.C21,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C22 || CT.C22
      });
    },
    get C24() {
      return C24 = dart.fn(module$.getDefaultContainer, StringLAndHtmlElementLAnddynamicToHtmlElementL());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainer"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C24 || CT.C24,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C25 || CT.C25
      });
    },
    get C27() {
      return C27 = dart.fn(module$.getOverlayContainerParent, DocumentLAnddynamicToHtmlElementL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerParent"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C27 || CT.C27,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C28 || CT.C28
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlaySyncDom"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: true,
        [Provider_useClass]: null,
        [Provider_token]: C30 || CT.C30
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: true,
        [Provider_useClass]: null,
        [Provider_token]: C32 || CT.C32
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: box.Box.prototype,
        [Box_left]: 0,
        [Box_bottom]: 0,
        [Box_right]: 0,
        [Box_top]: 0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C34 || CT.C34,
        [Provider_useClass]: null,
        [Provider_token]: C35 || CT.C35
      });
    },
    get C37() {
      return C37 = dart.wrapType(OverlayDomRenderServiceL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C37 || CT.C37,
        [Provider_token]: C37 || CT.C37
      });
    },
    get C39() {
      return C39 = dart.wrapType(OverlayStyleConfigL());
    },
    get C38() {
      return C38 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C39 || CT.C39,
        [Provider_token]: C39 || CT.C39
      });
    },
    get C41() {
      return C41 = dart.wrapType(OverlayServiceL());
    },
    get C40() {
      return C40 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C41 || CT.C41,
        [Provider_token]: C41 || CT.C41
      });
    },
    get C43() {
      return C43 = dart.wrapType(ZIndexerL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C43 || CT.C43,
        [Provider_token]: C43 || CT.C43
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C4 || CT.C4, C6 || CT.C6, C17 || CT.C17, C20 || CT.C20, C23 || CT.C23, C26 || CT.C26, C29 || CT.C29, C31 || CT.C31, C33 || CT.C33, C36 || CT.C36, C38 || CT.C38, C40 || CT.C40, C42 || CT.C42], ProviderL());
    },
    get C48() {
      return C48 = dart.fn(module.getDocument, VoidToHtmlDocumentL());
    },
    get C49() {
      return C49 = dart.wrapType(DocumentL());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C48 || CT.C48,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C49 || CT.C49
      });
    },
    get C51() {
      return C51 = dart.wrapType(HtmlDocumentL());
    },
    get C50() {
      return C50 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C48 || CT.C48,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C51 || CT.C51
      });
    },
    get C53() {
      return C53 = dart.fn(module.getWindow, VoidToWindowL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C53 || CT.C53,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C15 || CT.C15
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C50 || CT.C50, C52 || CT.C52], ProviderLOfObjectL());
    },
    get C54() {
      return C54 = dart.constList([], ModuleL());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C46 || CT.C46,
        [Module_include]: C54 || CT.C54
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], ModuleL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C1 || CT.C1,
        [Module_include]: C44 || CT.C44
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C48 || CT.C48,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C49 || CT.C49
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C48 || CT.C48,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C51 || CT.C51
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C53 || CT.C53,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C15 || CT.C15
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], FactoryProviderL());
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C1 || CT.C1], ListLOfProviderL());
    },
    get C63() {
      return C63 = dart.fn(module$.getDebugContainer, StringLAndHtmlElementLToHtmlElementL());
    },
    get C62() {
      return C62 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C63 || CT.C63,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C25 || CT.C25
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], ProviderL());
    },
    get C64() {
      return C64 = dart.constList([C0 || CT.C0], ModuleL());
    },
    get C60() {
      return C60 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C61 || CT.C61,
        [Module_include]: C64 || CT.C64
      });
    },
    get C65() {
      return C65 = dart.constList([C55 || CT.C55, C61 || CT.C61], ListLOfObjectL());
    }
  }, false);
  module$.createAcxOverlayContainer = function createAcxOverlayContainer(parent, opts) {
    let t0;
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let className = opts && 'className' in opts ? opts.className : null;
    let container = parent.querySelector("#" + dart.str(id));
    if (container == null) {
      container = (t0 = html.DivElement.new(), (() => {
        t0.id = id;
        t0[$classes].add("acx-overlay-container");
        return t0;
      })());
      if (className != null) container[$classes].add(className);
      parent[$append](container);
    }
    container[$attributes][$_set]("container-name", name);
    return HtmlElementL().as(container);
  };
  module$.getDefaultContainer = function getDefaultContainer(name, parent, container) {
    if (container != null) return HtmlElementL().as(container);
    return module$.createAcxOverlayContainer(parent, {id: "default-acx-overlay-container", name: name});
  };
  module$.getDefaultContainerName = function getDefaultContainerName(containerName) {
    let t0;
    return StringL().as((t0 = containerName, t0 == null ? "default" : t0));
  };
  module$.getDebugContainer = function getDebugContainer(name, parent) {
    let element = module$.getDefaultContainer(name, parent, null);
    element[$classes].add("debug");
    return element;
  };
  module$.getOverlayContainerParent = function getOverlayContainerParent(document, containerParent) {
    let t0;
    return HtmlElementL().as((t0 = containerParent, t0 == null ? document.querySelector("body") : t0));
  };
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var C3;
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C2;
  var C5;
  var C4;
  var C9;
  var C10;
  var C11;
  var C8;
  var C13;
  var C12;
  var C14;
  var C15;
  var C7;
  var C16;
  var C6;
  var C18;
  var C19;
  var C17;
  var C21;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C22;
  var C20;
  var C24;
  var C25;
  var C23;
  var C27;
  var C28;
  var C26;
  var C30;
  var C29;
  var C32;
  var C31;
  var Box_left = dart.privateName(box, "Box.left");
  var Box_bottom = dart.privateName(box, "Box.bottom");
  var Box_right = dart.privateName(box, "Box.right");
  var Box_top = dart.privateName(box, "Box.top");
  var C34;
  var C35;
  var C33;
  var C37;
  var C36;
  var C39;
  var C38;
  var C41;
  var C40;
  var C43;
  var C42;
  var C1;
  var Module_provide = dart.privateName(di_modules, "Module.provide");
  var C48;
  var C49;
  var C47;
  var C51;
  var C50;
  var C53;
  var C52;
  var C46;
  var C54;
  var Module_include = dart.privateName(di_modules, "Module.include");
  var C45;
  var C44;
  var C0;
  var C57;
  var C58;
  var C59;
  var C56;
  var C55;
  var C63;
  var C62;
  var C61;
  var C64;
  var C60;
  var C65;
  dart.defineLazy(module$, {
    /*module$.overlayModule*/get overlayModule() {
      return C0 || CT.C0;
    },
    /*module$._overlayProviders*/get _overlayProviders() {
      return C1 || CT.C1;
    },
    /*module$.overlayBindings*/get overlayBindings() {
      return C55 || CT.C55;
    },
    /*module$.overlayDebugModule*/get overlayDebugModule() {
      return C60 || CT.C60;
    },
    /*module$._overlayDebugProviders*/get _overlayDebugProviders() {
      return C61 || CT.C61;
    },
    /*module$.overlayDebugBindings*/get overlayDebugBindings() {
      return C65 || CT.C65;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/overlay/module", {
    "package:angular_components/laminate/overlay/module.dart": module$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yEAiCkD;;QAC5B;QAAqB;QAAa;AAClD,oBAAY,AAAO,MAAD,eAAe,AAAM,eAAH,EAAE;AAC1C,QAAI,AAAU,SAAD,IAAI;AAG2B,MAF1C,yCAAY;AACR,gBAAK,EAAE;AACC,QAAR;;;AACJ,UAAI,SAAS,IAAI,MAAM,AAAU,AAAQ,AAAc,SAAvB,eAAa,SAAS;AAC9B,MAAxB,AAAO,MAAD,UAAQ,SAAS;;AAEiC,IAA1D,AAAU,AAAU,SAAX,uCAA6C,IAAI;AAC1D,6BAAO,SAAS;EAClB;6DAKyC,MACO,QACW;AACzD,QAAI,SAAS,IAAI,MAAM,yBAAO,SAAS;AACvC,UAAO,mCAA0B,MAAM,8CACE,IAAI;EAC/C;qEAI0D;;AACxD,yBAAqB,KAAd,aAAa,QAAb,OAAiB;EAC1B;yDAImE,MACnB;AAC1C,kBAAU,4BAAoB,IAAI,EAAE,MAAM,EAAE;AACpB,IAA5B,AAAQ,AAAQ,OAAT,eAAa;AACpB,UAAO,QAAO;EAChB;yEAG+C,UACa;;AAC1D,8BAAuB,KAAhB,eAAe,QAAf,OAAmB,AAAS,QAAD,eAAe;EACnD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAGM,qBAAa;;;MAOb,yBAAiB;;;MAmBjB,uBAAe;;;MAMf,0BAAkB;;;MAOlB,8BAAsB;;;MAKtB,4BAAoB","file":"module.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__module: module$
  };
}));

//# sourceMappingURL=module.unsound.ddc.js.map
