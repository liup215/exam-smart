define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/angular.template'], (function load__packages__angular_components__src__material_tooltip__tooltip_controller_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var tooltip_controller$46template = Object.create(dart.library);
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  const CT = Object.create(null);
  tooltip_controller$46template.initReflector = function initReflector() {
    if (dart.test(tooltip_controller$46template._visited)) {
      return;
    }
    tooltip_controller$46template._visited = true;
    reflector.registerFactory(dart.wrapType(TooltipControllerL()), dart.fn(() => new tooltip_controller.TooltipController.new(), VoidToTooltipControllerL()));
    angular$46template.initReflector();
  };
  dart.defineLazy(tooltip_controller$46template, {
    /*tooltip_controller$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_controller.template", {
    "package:angular_components/src/material_tooltip/tooltip_controller.template.dart": tooltip_controller$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_controller.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAEyD,IAApE,0BAAuB,qCAAmB,cAAM;AAC3B,IAArB;EACF;;MATI,sCAAQ;YAAG","file":"tooltip_controller.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_controller$46template: tooltip_controller$46template
  };
}));

//# sourceMappingURL=tooltip_controller.template.unsound.ddc.js.map
