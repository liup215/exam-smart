define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__utils__angular__imperative_view__imperative_view_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__angular__imperative_view__imperative_view, packages__angular__src__bootstrap__modules, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__angular$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var imperative_view$46template = Object.create(dart.library);
  var AcxImperativeViewUtilsL = () => (AcxImperativeViewUtilsL = dart.constFn(dart.legacy(imperative_view.AcxImperativeViewUtils)))();
  var ComponentLoaderL = () => (ComponentLoaderL = dart.constFn(dart.legacy(component_loader.ComponentLoader)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ComponentLoaderLAndDomServiceLToAcxImperativeViewUtilsL = () => (ComponentLoaderLAndDomServiceLToAcxImperativeViewUtilsL = dart.constFn(dart.fnType(AcxImperativeViewUtilsL(), [ComponentLoaderL(), DomServiceL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(ComponentLoaderL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C4() {
      return C4 = dart.wrapType(DomServiceL());
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C3 || CT.C3], ListLOfObjectL());
    }
  }, false);
  var C2;
  var C1;
  var C4;
  var C3;
  var C0;
  imperative_view$46template.initReflector = function initReflector() {
    if (dart.test(imperative_view$46template._visited)) {
      return;
    }
    imperative_view$46template._visited = true;
    reflector.registerFactory(dart.wrapType(AcxImperativeViewUtilsL()), dart.fn((p0, p1) => new imperative_view.AcxImperativeViewUtils.new(p0, p1), ComponentLoaderLAndDomServiceLToAcxImperativeViewUtilsL()));
    reflector.registerDependencies(dart.wrapType(AcxImperativeViewUtilsL()), C0 || CT.C0);
    angular$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(imperative_view$46template, {
    /*imperative_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/imperative_view/imperative_view.template", {
    "package:angular_components/utils/angular/imperative_view/imperative_view.template.dart": imperative_view$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["imperative_view.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEkH,IAA7H,0BAAuB,0CAAwB,SAAqB,IAAmB,OAAO,+CAAuB,EAAE,EAAE,EAAE;AAIzH,IAHF,+BAA4B;AAIP,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,mCAAQ;YAAG","file":"imperative_view.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__imperative_view__imperative_view$46template: imperative_view$46template
  };
}));

//# sourceMappingURL=imperative_view.template.unsound.ddc.js.map
