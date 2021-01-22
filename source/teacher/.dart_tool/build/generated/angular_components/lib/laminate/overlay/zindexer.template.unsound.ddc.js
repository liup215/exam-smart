define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular/angular.template'], (function load__packages__angular_components__laminate__overlay__zindexer_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__laminate__overlay__zindexer, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var zindexer$46template = Object.create(dart.library);
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var VoidToZIndexerL = () => (VoidToZIndexerL = dart.constFn(dart.fnType(ZIndexerL(), [])))();
  const CT = Object.create(null);
  zindexer$46template.initReflector = function initReflector() {
    if (dart.test(zindexer$46template._visited)) {
      return;
    }
    zindexer$46template._visited = true;
    reflector.registerFactory(dart.wrapType(ZIndexerL()), dart.fn(() => zindexer.ZIndexer.new(), VoidToZIndexerL()));
    angular$46template.initReflector();
  };
  dart.defineLazy(zindexer$46template, {
    /*zindexer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/overlay/zindexer.template", {
    "package:angular_components/laminate/overlay/zindexer.template.dart": zindexer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["zindexer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEuC,IAAlD,0BAAuB,4BAAU,cAAM;AAClB,IAArB;EACF;;MATI,4BAAQ;YAAG","file":"zindexer.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__zindexer$46template: zindexer$46template
  };
}));

//# sourceMappingURL=zindexer.template.unsound.ddc.js.map
