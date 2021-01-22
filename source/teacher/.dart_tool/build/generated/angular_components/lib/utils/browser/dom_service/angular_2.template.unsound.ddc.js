define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular/angular.template', 'packages/angular/experimental.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__utils__browser__dom_service__angular_2_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__dom_service__angular_2, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__disposer__disposer, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular__angular$46template, packages__angular__experimental$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__browser__dom_service__dom_service_webdriver_testability$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const angular_2 = packages__angular_components__utils__browser__dom_service__angular_2.utils__browser__dom_service__angular_2;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const experimental$46template = packages__angular__experimental$46template.experimental$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const dom_service_webdriver_testability$46template = packages__angular_components__utils__browser__dom_service__dom_service_webdriver_testability$46template.utils__browser__dom_service__dom_service_webdriver_testability$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var angular_2$46template = Object.create(dart.library);
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = () => (DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = dart.constFn(dart.fnType(DomServiceL(), [DomServiceL(), DisposerL(), NgZoneL(), WindowL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(angular_2.createDomService, DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL());
    },
    get C3() {
      return C3 = dart.wrapType(DomServiceL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_arguments.SkipSelf.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], ObjectL());
    },
    get C7() {
      return C7 = dart.wrapType(DisposerL());
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C5 || CT.C5], ObjectL());
    },
    get C9() {
      return C9 = dart.wrapType(NgZoneL());
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], ObjectL());
    },
    get C11() {
      return C11 = dart.wrapType(WindowL());
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], ObjectL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C6 || CT.C6, C8 || CT.C8, C10 || CT.C10], ListLOfObjectL());
    }
  }, false);
  var C0;
  var C3;
  var C4;
  var C5;
  var C2;
  var C7;
  var C6;
  var C9;
  var C8;
  var C11;
  var C10;
  var C1;
  angular_2$46template.initReflector = function initReflector() {
    if (dart.test(angular_2$46template._visited)) {
      return;
    }
    angular_2$46template._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    angular$46template.initReflector();
    experimental$46template.initReflector();
    dom_service$46template.initReflector();
    dom_service$46template.initReflector();
    dom_service_webdriver_testability$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(angular_2$46template, {
    /*angular_2$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/angular_2.template", {
    "package:angular_components/utils/browser/dom_service/angular_2.template.dart": angular_2$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBE,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAOT,IALF;AAMqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAnBI,6BAAQ;YAAG","file":"angular_2.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__angular_2$46template: angular_2$46template
  };
}));

//# sourceMappingURL=angular_2.template.unsound.ddc.js.map
