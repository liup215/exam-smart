define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/model/action/async_action.template'], (function load__packages__angular_components__material_stepper__material_step_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__laminate__portal__portal$46template, packages__angular_components__model__action__async_action$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const portal$46template = packages__angular_components__laminate__portal__portal$46template.laminate__portal__portal$46template;
  const async_action$46template = packages__angular_components__model__action__async_action$46template.model__action__async_action$46template;
  var material_step$46template = Object.create(dart.library);
  const CT = Object.create(null);
  material_step$46template.initReflector = function initReflector() {
    if (dart.test(material_step$46template._visited)) {
      return;
    }
    material_step$46template._visited = true;
    angular$46template.initReflector();
    portal$46template.initReflector();
    async_action$46template.initReflector();
  };
  dart.defineLazy(material_step$46template, {
    /*material_step$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_stepper/material_step.template", {
    "package:angular_components/material_stepper/material_step.template.dart": material_step$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_step.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,iCAAQ;YAAG","file":"material_step.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_step$46template: material_step$46template
  };
}));

//# sourceMappingURL=material_step.template.unsound.ddc.js.map
