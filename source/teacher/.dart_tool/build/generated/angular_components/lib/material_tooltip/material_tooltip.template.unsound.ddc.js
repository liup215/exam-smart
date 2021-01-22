define(['dart_sdk', 'packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/material_tooltip/tooltip_controller.template'], (function load__packages__angular_components__material_tooltip__material_tooltip_template(dart_sdk, packages__angular_components__src__material_tooltip__icon_tooltip$46scss$46css$46shim, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__material_tooltip__tooltip_controller$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon_tooltip$46template = packages__angular_components__src__material_tooltip__icon_tooltip$46scss$46css$46shim.src__material_tooltip__icon_tooltip$46template;
  const paper_tooltip$46template = packages__angular_components__src__material_tooltip__icon_tooltip$46scss$46css$46shim.src__material_tooltip__paper_tooltip$46template;
  const tooltip$46template = packages__angular_components__src__material_tooltip__icon_tooltip$46scss$46css$46shim.src__material_tooltip__tooltip$46template;
  const ink_tooltip$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__ink_tooltip$46template;
  const tooltip_source$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_source$46template;
  const tooltip_target$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_target$46template;
  const tooltip_controller$46template = packages__angular_components__src__material_tooltip__tooltip_controller$46template.src__material_tooltip__tooltip_controller$46template;
  var material_tooltip$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_tooltip$46template.initReflector = function initReflector() {
    if (dart.test(material_tooltip$46template._visited)) {
      return;
    }
    material_tooltip$46template._visited = true;
    icon_tooltip$46template.initReflector();
    ink_tooltip$46template.initReflector();
    paper_tooltip$46template.initReflector();
    tooltip$46template.initReflector();
    tooltip_controller$46template.initReflector();
    tooltip_source$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.defineLazy(material_tooltip$46template, {
    /*material_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tooltip/material_tooltip.template", {
    "package:angular_components/material_tooltip/material_tooltip.template.dart": material_tooltip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tooltip.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAgBE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,oCAAQ;YAAG","file":"material_tooltip.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_tooltip__material_tooltip$46template: material_tooltip$46template
  };
}));

//# sourceMappingURL=material_tooltip.template.unsound.ddc.js.map
