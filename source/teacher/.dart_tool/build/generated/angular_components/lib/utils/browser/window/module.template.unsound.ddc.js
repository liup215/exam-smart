define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/window/module', 'packages/angular/angular.template'], (function load__packages__angular_components__utils__browser__window__module_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__window__module, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const module = packages__angular_components__utils__browser__window__module.utils__browser__window__module;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var module$46template = Object.create(dart.library);
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(html.Location)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var WindowLToLocationL = () => (WindowLToLocationL = dart.constFn(dart.fnType(LocationL(), [WindowL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(module.getLocation, WindowLToLocationL());
    },
    get C3() {
      return C3 = dart.wrapType(WindowL());
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
  module$46template.initReflector = function initReflector() {
    if (dart.test(module$46template._visited)) {
      return;
    }
    module$46template._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    angular$46template.initReflector();
  };
  dart.defineLazy(module$46template, {
    /*module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/window/module.template", {
    "package:angular_components/utils/browser/window/module.template.dart": module$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAIT,IAFF;AAGqB,IAArB;EACF;;MAXI,0BAAQ;YAAG","file":"module.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__window__module$46template: module$46template
  };
}));

//# sourceMappingURL=module.template.unsound.ddc.js.map
