define(['dart_sdk', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/laminate/ruler/dom_ruler.template'], (function load__packages__angular_components__src__laminate__popup__dom_popup_source_template(dart_sdk, packages__angular_components__focus__focus_interface$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__laminate__ruler__dom_ruler, packages__angular__angular$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__laminate__ruler__dom_ruler$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const dom_ruler$46template = packages__angular_components__laminate__ruler__dom_ruler$46template.laminate__ruler__dom_ruler$46template;
  var popup_source$46template = Object.create(dart.library);
  var dom_popup_source$46template = Object.create(dart.library);
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var DomRulerL = () => (DomRulerL = dart.constFn(dart.legacy(dom_ruler.DomRuler)))();
  var DomRulerLToDomPopupSourceFactoryL = () => (DomRulerLToDomPopupSourceFactoryL = dart.constFn(dart.fnType(DomPopupSourceFactoryL(), [DomRulerL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(DomRulerL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ListLOfObjectL());
    }
  }, false);
  popup_source$46template.initReflector = function initReflector() {
    if (dart.test(popup_source$46template._visited)) {
      return;
    }
    popup_source$46template._visited = true;
    focus_interface$46template.initReflector();
    alignment$46template.initReflector();
  };
  dart.defineLazy(popup_source$46template, {
    /*popup_source$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C2;
  var C1;
  var C0;
  dom_popup_source$46template.initReflector = function initReflector$() {
    if (dart.test(dom_popup_source$46template._visited)) {
      return;
    }
    dom_popup_source$46template._visited = true;
    reflector.registerFactory(dart.wrapType(DomPopupSourceFactoryL()), dart.fn(p0 => new dom_popup_source.DomPopupSourceFactory.new(p0), DomRulerLToDomPopupSourceFactoryL()));
    reflector.registerDependencies(dart.wrapType(DomPopupSourceFactoryL()), C0 || CT.C0);
    angular$46template.initReflector();
    rtl_annotation$46template.initReflector();
    alignment$46template.initReflector();
    dom_ruler$46template.initReflector();
    popup_source$46template.initReflector();
  };
  dart.defineLazy(dom_popup_source$46template, {
    /*dom_popup_source$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/laminate/popup/dom_popup_source.template", {
    "package:angular_components/src/laminate/popup/popup_source.template.dart": popup_source$46template,
    "package:angular_components/src/laminate/popup/dom_popup_source.template.dart": dom_popup_source$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["popup_source.template.dart","dom_popup_source.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,gCAAQ;YAAG;;;;;;;;ACOb,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEkF,IAA7F,0BAAuB,yCAAuB,QAAc,MAAO,+CAAsB,EAAE;AAGzF,IAFF,+BAA4B;AAGP,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,oCAAQ;YAAG","file":"dom_popup_source.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_source$46template: popup_source$46template,
    src__laminate__popup__dom_popup_source$46template: dom_popup_source$46template
  };
}));

//# sourceMappingURL=dom_popup_source.template.unsound.ddc.js.map
