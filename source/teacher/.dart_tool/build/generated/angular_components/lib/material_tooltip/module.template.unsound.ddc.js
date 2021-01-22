define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular/angular.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__material_tooltip__module_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_tooltip__module, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__utils__disposer__disposer, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular__angular$46template, packages__angular_components__src__material_tooltip__tooltip_controller$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const tooltip_controller$46template = packages__angular_components__src__material_tooltip__tooltip_controller$46template.src__material_tooltip__tooltip_controller$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var module$46template = Object.create(dart.library);
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var TooltipControllerLAndDisposerLToTooltipControllerL = () => (TooltipControllerLAndDisposerLToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [TooltipControllerL(), DisposerL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(module.createTooltipController, TooltipControllerLAndDisposerLToTooltipControllerL());
    },
    get C3() {
      return C3 = dart.wrapType(TooltipControllerL());
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
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C6 || CT.C6], ListLOfObjectL());
    }
  }, false);
  var C0;
  var C3;
  var C4;
  var C5;
  var C2;
  var C7;
  var C6;
  var C1;
  module$46template.initReflector = function initReflector() {
    if (dart.test(module$46template._visited)) {
      return;
    }
    module$46template._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    angular$46template.initReflector();
    tooltip_controller$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(module$46template, {
    /*module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tooltip/module.template", {
    "package:angular_components/material_tooltip/module.template.dart": module$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAKT,IAHF;AAIqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,0BAAQ;YAAG","file":"module.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_tooltip__module$46template: module$46template
  };
}));

//# sourceMappingURL=module.template.unsound.ddc.js.map
