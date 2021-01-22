define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/annotations/rtl_annotation', 'packages/angular/angular.template'], (function load__packages__angular_components__annotations__rtl_annotation_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__annotations__rtl_annotation, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const rtl_annotation = packages__angular_components__annotations__rtl_annotation.annotations__rtl_annotation;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var rtl_annotation$46template = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var DocumentLToboolL = () => (DocumentLToboolL = dart.constFn(dart.fnType(boolL(), [DocumentL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(rtl_annotation.determineRtl, DocumentLToboolL());
    },
    get C3() {
      return C3 = dart.wrapType(DocumentL());
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], ObjectL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ListLOfObjectL());
    }
  }, false);
  var C0;
  var C3;
  var C2;
  var C1;
  rtl_annotation$46template.initReflector = function initReflector() {
    if (dart.test(rtl_annotation$46template._visited)) {
      return;
    }
    rtl_annotation$46template._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    angular$46template.initReflector();
  };
  dart.defineLazy(rtl_annotation$46template, {
    /*rtl_annotation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/annotations/rtl_annotation.template", {
    "package:angular_components/annotations/rtl_annotation.template.dart": rtl_annotation$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rtl_annotation.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,qCAAW;AAIT,IAFF;AAGqB,IAArB;EACF;;MAXI,kCAAQ;YAAG","file":"rtl_annotation.template.unsound.ddc.js"}');
  // Exports:
  return {
    annotations__rtl_annotation$46template: rtl_annotation$46template
  };
}));

//# sourceMappingURL=rtl_annotation.template.unsound.ddc.js.map
