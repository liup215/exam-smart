define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/laminate/overlay/module', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular/angular.template', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/ruler/dom_ruler.template', 'packages/angular_components/model/math/box.template', 'packages/angular_components/src/laminate/overlay/overlay_ref.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/angular/managed_zone/angular_2.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/browser/window/module.template'], (function load__packages__angular_components__laminate__overlay__module_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__laminate__overlay__module, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular__angular$46template, packages__angular_components__laminate__overlay__constants$46template, packages__angular_components__laminate__overlay__zindexer$46template, packages__angular_components__laminate__ruler__dom_ruler$46template, packages__angular_components__model__math__box$46template, packages__angular_components__src__laminate__overlay__overlay_ref$46template, packages__angular_components__utils__angular__imperative_view__imperative_view$46template, packages__angular_components__utils__angular__managed_zone__angular_2$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__browser__window__module$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const module = packages__angular_components__laminate__overlay__module.laminate__overlay__module;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const constants$46template = packages__angular_components__laminate__overlay__constants$46template.laminate__overlay__constants$46template;
  const zindexer$46template = packages__angular_components__laminate__overlay__zindexer$46template.laminate__overlay__zindexer$46template;
  const dom_ruler$46template = packages__angular_components__laminate__ruler__dom_ruler$46template.laminate__ruler__dom_ruler$46template;
  const box$46template = packages__angular_components__model__math__box$46template.model__math__box$46template;
  const overlay_service$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__overlay_service$46template;
  const overlay_dom_render_service$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__render__overlay_dom_render_service$46template;
  const overlay_style_config$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__render__overlay_style_config$46template;
  const imperative_view$46template = packages__angular_components__utils__angular__imperative_view__imperative_view$46template.utils__angular__imperative_view__imperative_view$46template;
  const angular_2$46template = packages__angular_components__utils__angular__managed_zone__angular_2$46template.utils__angular__managed_zone__angular_2$46template;
  const angular_2$46template$ = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const module$46template = packages__angular_components__utils__browser__window__module$46template.utils__browser__window__module$46template;
  var module$46template$ = Object.create(dart.library);
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLAndHtmlElementLAnddynamicToHtmlElementL = () => (StringLAndHtmlElementLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL(), dart.dynamic])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var StringLAndHtmlElementLToHtmlElementL = () => (StringLAndHtmlElementLToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [StringL(), HtmlElementL()])))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var DocumentLAnddynamicToHtmlElementL = () => (DocumentLAnddynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [DocumentL(), dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(module.getDefaultContainer, StringLAndHtmlElementLAnddynamicToHtmlElementL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerName"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C4 || CT.C4
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], ObjectL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerParent"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C7 || CT.C7
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], ObjectL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainer"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C10 || CT.C10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: di_arguments.SkipSelf.prototype
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C11 || CT.C11, C12 || CT.C12], ObjectL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C5 || CT.C5, C8 || CT.C8], ListLOfObjectL());
    },
    get C13() {
      return C13 = dart.fn(module.getDefaultContainerName, dynamicToStringL());
    },
    get C15() {
      return C15 = dart.constList([C3 || CT.C3, C11 || CT.C11, C12 || CT.C12], ObjectL());
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], ListLOfObjectL());
    },
    get C16() {
      return C16 = dart.fn(module.getDebugContainer, StringLAndHtmlElementLToHtmlElementL());
    },
    get C17() {
      return C17 = dart.constList([C2 || CT.C2, C5 || CT.C5], ListLOfObjectL());
    },
    get C18() {
      return C18 = dart.fn(module.getOverlayContainerParent, DocumentLAnddynamicToHtmlElementL());
    },
    get C21() {
      return C21 = dart.wrapType(DocumentL());
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], ObjectL());
    },
    get C22() {
      return C22 = dart.constList([C6 || CT.C6, C11 || CT.C11, C12 || CT.C12], ObjectL());
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C22 || CT.C22], ListLOfObjectL());
    }
  }, false);
  var C0;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C4;
  var Inject_token = dart.privateName(di_arguments, "Inject.token");
  var C3;
  var C2;
  var C7;
  var C6;
  var C5;
  var C10;
  var C9;
  var C11;
  var C12;
  var C8;
  var C1;
  var C13;
  var C15;
  var C14;
  var C16;
  var C17;
  var C18;
  var C21;
  var C20;
  var C22;
  var C19;
  module$46template$.initReflector = function initReflector() {
    if (dart.test(module$46template$._visited)) {
      return;
    }
    module$46template$._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    reflector.registerDependencies(C13 || CT.C13, C14 || CT.C14);
    reflector.registerDependencies(C16 || CT.C16, C17 || CT.C17);
    reflector.registerDependencies(C18 || CT.C18, C19 || CT.C19);
    angular$46template.initReflector();
    constants$46template.initReflector();
    zindexer$46template.initReflector();
    dom_ruler$46template.initReflector();
    box$46template.initReflector();
    overlay_service$46template.initReflector();
    overlay_dom_render_service$46template.initReflector();
    overlay_dom_render_service$46template.initReflector();
    overlay_style_config$46template.initReflector();
    imperative_view$46template.initReflector();
    angular_2$46template.initReflector();
    angular_2$46template$.initReflector();
    module$46template.initReflector();
  };
  dart.defineLazy(module$46template$, {
    /*module$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/overlay/module.template", {
    "package:angular_components/laminate/overlay/module.template.dart": module$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAMT,IAJF;AAOE,IAFF;AAME,IAHF;AAOE,IAHF;AAIqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MApCI,2BAAQ;YAAG","file":"module.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__module$46template: module$46template$
  };
}));

//# sourceMappingURL=module.template.unsound.ddc.js.map
