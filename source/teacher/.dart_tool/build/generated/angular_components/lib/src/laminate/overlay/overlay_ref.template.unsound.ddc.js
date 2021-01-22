define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular/angular.template', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/laminate/ruler/dom_ruler.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/laminate/enums/position.template', 'packages/angular_components/utils/async/async.template'], (function load__packages__angular_components__src__laminate__overlay__overlay_ref_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular__angular$46template, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__angular__imperative_view__imperative_view, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__visibility$46template, packages__angular_components__laminate__overlay__zindexer$46template, packages__angular_components__laminate__portal__portal$46template, packages__angular_components__laminate__ruler__dom_ruler$46template, packages__angular_components__utils__angular__imperative_view__imperative_view$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__laminate__enums__position$46template, packages__angular_components__utils__async__async$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const overlay_dom_render_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const overlay_style_config = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const visibility$46template = packages__angular_components__laminate__enums__visibility$46template.laminate__enums__visibility$46template;
  const zindexer$46template = packages__angular_components__laminate__overlay__zindexer$46template.laminate__overlay__zindexer$46template;
  const portal$46template = packages__angular_components__laminate__portal__portal$46template.laminate__portal__portal$46template;
  const dom_ruler$46template = packages__angular_components__laminate__ruler__dom_ruler$46template.laminate__ruler__dom_ruler$46template;
  const imperative_view$46template = packages__angular_components__utils__angular__imperative_view__imperative_view$46template.utils__angular__imperative_view__imperative_view$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const position$46template = packages__angular_components__laminate__enums__position$46template.laminate__enums__position$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  var overlay_service$46template = Object.create(dart.library);
  var overlay_dom_render_service$46template = Object.create(dart.library);
  var overlay_style_config$46template = Object.create(dart.library);
  var overlay_state$46template = Object.create(dart.library);
  var overlay_ref$46template = Object.create(dart.library);
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var OverlayDomRenderServiceL = () => (OverlayDomRenderServiceL = dart.constFn(dart.legacy(overlay_dom_render_service.OverlayDomRenderService)))();
  var NgZoneLAndboolLAndOverlayDomRenderServiceL__ToOverlayServiceL = () => (NgZoneLAndboolLAndOverlayDomRenderServiceL__ToOverlayServiceL = dart.constFn(dart.fnType(OverlayServiceL(), [NgZoneL(), boolL(), OverlayDomRenderServiceL(), OverlayServiceL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var OverlayStyleConfigL = () => (OverlayStyleConfigL = dart.constFn(dart.legacy(overlay_style_config.OverlayStyleConfig)))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DomRulerL = () => (DomRulerL = dart.constFn(dart.legacy(dom_ruler.DomRuler)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var AcxImperativeViewUtilsL = () => (AcxImperativeViewUtilsL = dart.constFn(dart.legacy(imperative_view.AcxImperativeViewUtils)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var OverlayStyleConfigLAndHtmlElementLAndStringL__ToOverlayDomRenderServiceL = () => (OverlayStyleConfigLAndHtmlElementLAndStringL__ToOverlayDomRenderServiceL = dart.constFn(dart.fnType(OverlayDomRenderServiceL(), [OverlayStyleConfigL(), HtmlElementL(), StringL(), DomRulerL(), DomServiceL(), AcxImperativeViewUtilsL(), boolL(), boolL(), ZIndexerL()])))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var DocumentLToOverlayStyleConfigL = () => (DocumentLToOverlayStyleConfigL = dart.constFn(dart.fnType(OverlayStyleConfigL(), [DocumentL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(NgZoneL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlaySyncDom"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C5 || CT.C5
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], ObjectL());
    },
    get C7() {
      return C7 = dart.wrapType(OverlayDomRenderServiceL());
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], ObjectL());
    },
    get C9() {
      return C9 = dart.wrapType(OverlayServiceL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: di_arguments.SkipSelf.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C3 || CT.C3, C6 || CT.C6, C8 || CT.C8], ListLOfObjectL());
    },
    get C14() {
      return C14 = dart.wrapType(OverlayStyleConfigL());
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], ObjectL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainer"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C17 || CT.C17
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], ObjectL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerName"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C20 || CT.C20
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], ObjectL());
    },
    get C22() {
      return C22 = dart.wrapType(DomRulerL());
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], ObjectL());
    },
    get C24() {
      return C24 = dart.wrapType(DomServiceL());
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], ObjectL());
    },
    get C26() {
      return C26 = dart.wrapType(AcxImperativeViewUtilsL());
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], ObjectL());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C29 || CT.C29
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], ObjectL());
    },
    get C31() {
      return C31 = dart.wrapType(ZIndexerL());
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], ObjectL());
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C15 || CT.C15, C18 || CT.C18, C21 || CT.C21, C23 || CT.C23, C25 || CT.C25, C3 || CT.C3, C27 || CT.C27, C30 || CT.C30], ListLOfObjectL());
    },
    get C34() {
      return C34 = dart.wrapType(DocumentL());
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], ObjectL());
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], ListLOfObjectL());
    }
  }, false);
  var C2;
  var C1;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C5;
  var Inject_token = dart.privateName(di_arguments, "Inject.token");
  var C4;
  var C3;
  var C7;
  var C6;
  var C9;
  var C10;
  var C11;
  var C8;
  var C0;
  overlay_service$46template.initReflector = function initReflector() {
    if (dart.test(overlay_service$46template._visited)) {
      return;
    }
    overlay_service$46template._visited = true;
    reflector.registerFactory(dart.wrapType(OverlayServiceL()), dart.fn((p0, p1, p2, p3) => new overlay_service.OverlayService.new(p0, p1, p2, p3), NgZoneLAndboolLAndOverlayDomRenderServiceL__ToOverlayServiceL()));
    reflector.registerDependencies(dart.wrapType(OverlayServiceL()), C0 || CT.C0);
    angular$46template.initReflector();
    overlay_ref$46template.initReflector();
    overlay_state$46template.initReflector();
    overlay_dom_render_service$46template.initReflector();
  };
  dart.defineLazy(overlay_service$46template, {
    /*overlay_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C14;
  var C13;
  var C17;
  var C16;
  var C15;
  var C20;
  var C19;
  var C18;
  var C22;
  var C21;
  var C24;
  var C23;
  var C26;
  var C25;
  var C29;
  var C28;
  var C27;
  var C31;
  var C30;
  var C12;
  overlay_dom_render_service$46template.initReflector = function initReflector$() {
    if (dart.test(overlay_dom_render_service$46template._visited)) {
      return;
    }
    overlay_dom_render_service$46template._visited = true;
    reflector.registerFactory(dart.wrapType(OverlayDomRenderServiceL()), dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8) => new overlay_dom_render_service.OverlayDomRenderService.new(p0, p1, p2, p3, p4, p5, p6, p7, p8), OverlayStyleConfigLAndHtmlElementLAndStringL__ToOverlayDomRenderServiceL()));
    reflector.registerDependencies(dart.wrapType(OverlayDomRenderServiceL()), C12 || CT.C12);
    angular$46template.initReflector();
    visibility$46template.initReflector();
    zindexer$46template.initReflector();
    portal$46template.initReflector();
    dom_ruler$46template.initReflector();
    overlay_state$46template.initReflector();
    overlay_style_config$46template.initReflector();
    imperative_view$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(overlay_dom_render_service$46template, {
    /*overlay_dom_render_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C34;
  var C33;
  var C32;
  overlay_style_config$46template.initReflector = function initReflector$0() {
    if (dart.test(overlay_style_config$46template._visited)) {
      return;
    }
    overlay_style_config$46template._visited = true;
    reflector.registerFactory(dart.wrapType(OverlayStyleConfigL()), dart.fn(p0 => new overlay_style_config.OverlayStyleConfig.new(p0), DocumentLToOverlayStyleConfigL()));
    reflector.registerDependencies(dart.wrapType(OverlayStyleConfigL()), C32 || CT.C32);
    angular$46template.initReflector();
  };
  dart.defineLazy(overlay_style_config$46template, {
    /*overlay_style_config$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  overlay_state$46template.initReflector = function initReflector$1() {
    if (dart.test(overlay_state$46template._visited)) {
      return;
    }
    overlay_state$46template._visited = true;
    position$46template.initReflector();
    visibility$46template.initReflector();
    async$46template.initReflector();
  };
  dart.defineLazy(overlay_state$46template, {
    /*overlay_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  overlay_ref$46template.initReflector = function initReflector$2() {
    if (dart.test(overlay_ref$46template._visited)) {
      return;
    }
    overlay_ref$46template._visited = true;
    visibility$46template.initReflector();
    portal$46template.initReflector();
    overlay_state$46template.initReflector();
  };
  dart.defineLazy(overlay_ref$46template, {
    /*overlay_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_ref.template", {
    "package:angular_components/src/laminate/overlay/overlay_service.template.dart": overlay_service$46template,
    "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart": overlay_dom_render_service$46template,
    "package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart": overlay_style_config$46template,
    "package:angular_components/src/laminate/overlay/overlay_state.template.dart": overlay_state$46template,
    "package:angular_components/src/laminate/overlay/overlay_ref.template.dart": overlay_ref$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["overlay_service.template.dart","render/overlay_dom_render_service.template.dart","render/overlay_style_config.template.dart","overlay_state.template.dart","overlay_ref.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAE8I,IAAzJ,0BAAuB,kCAAgB,SAAY,IAAS,IAAgC,IAAuB,OAAO,uCAAe,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAMrJ,IALF,+BAA4B;AAMP,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAlBI,mCAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;ACUb,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEqQ,IAAhR,0BAAuB,2CAAyB,SAAwB,IAAoB,IAAW,IAAiB,IAAmB,IAA+B,IAAS,IAAS,IAAiB,OAAO,2DAAwB,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAW5Q,IAVF,+BAA4B;AAWP,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MA5BI,8CAAQ;YAAG;;;;;;;;ACZb,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAE4E,IAAvF,0BAAuB,sCAAoB,QAAc,MAAO,gDAAmB,EAAE;AAGnF,IAFF,+BAA4B;AAGP,IAArB;EACF;;MAZI,wCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,iCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,+BAAQ;YAAG","file":"overlay_ref.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_service$46template: overlay_service$46template,
    src__laminate__overlay__render__overlay_dom_render_service$46template: overlay_dom_render_service$46template,
    src__laminate__overlay__render__overlay_style_config$46template: overlay_style_config$46template,
    src__laminate__overlay__overlay_state$46template: overlay_state$46template,
    src__laminate__overlay__overlay_ref$46template: overlay_ref$46template
  };
}));

//# sourceMappingURL=overlay_ref.template.unsound.ddc.js.map
