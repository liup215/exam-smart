define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/src/laminate/ruler/ruler_interface.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], (function load__packages__angular_components__laminate__ruler__dom_ruler_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__angular$46template, packages__angular_components__src__laminate__ruler__ruler_interface$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const ruler_interface$46template = packages__angular_components__src__laminate__ruler__ruler_interface$46template.src__laminate__ruler__ruler_interface$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  var dom_ruler$46template = Object.create(dart.library);
  var DomRulerL = () => (DomRulerL = dart.constFn(dart.legacy(dom_ruler.DomRuler)))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var DocumentLAndDomServiceLToDomRulerL = () => (DocumentLAndDomServiceLToDomRulerL = dart.constFn(dart.fnType(DomRulerL(), [DocumentL(), DomServiceL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var DomRulerImplL = () => (DomRulerImplL = dart.constFn(dart.legacy(dom_ruler.DomRulerImpl)))();
  var DocumentLAndDomServiceLToDomRulerImplL = () => (DocumentLAndDomServiceLToDomRulerImplL = dart.constFn(dart.fnType(DomRulerImplL(), [DocumentL(), DomServiceL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(DocumentL());
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
  dom_ruler$46template.initReflector = function initReflector() {
    if (dart.test(dom_ruler$46template._visited)) {
      return;
    }
    dom_ruler$46template._visited = true;
    reflector.registerFactory(dart.wrapType(DomRulerL()), dart.fn((p0, p1) => new dom_ruler.DomRulerImpl.new(p0, p1), DocumentLAndDomServiceLToDomRulerL()));
    reflector.registerDependencies(dart.wrapType(DomRulerL()), C0 || CT.C0);
    reflector.registerFactory(dart.wrapType(DomRulerImplL()), dart.fn((p0, p1) => new dom_ruler.DomRulerImpl.new(p0, p1), DocumentLAndDomServiceLToDomRulerImplL()));
    reflector.registerDependencies(dart.wrapType(DomRulerImplL()), C0 || CT.C0);
    angular$46template.initReflector();
    ruler_interface$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(dom_ruler$46template, {
    /*dom_ruler$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/ruler/dom_ruler.template", {
    "package:angular_components/laminate/ruler/dom_ruler.template.dart": dom_ruler$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_ruler.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAE+E,IAA1F,0BAAuB,4BAAU,SAAc,IAAmB,OAAO,+BAAS,EAAE,EAAE,EAAE;AAItF,IAHF,+BAA4B;AAIsE,IAAlG,0BAAuB,gCAAc,SAAc,IAAmB,OAAO,+BAAa,EAAE,EAAE,EAAE;AAI9F,IAHF,+BAA4B;AAIP,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MApBI,6BAAQ;YAAG","file":"dom_ruler.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__ruler__dom_ruler$46template: dom_ruler$46template
  };
}));

//# sourceMappingURL=dom_ruler.template.unsound.ddc.js.map
