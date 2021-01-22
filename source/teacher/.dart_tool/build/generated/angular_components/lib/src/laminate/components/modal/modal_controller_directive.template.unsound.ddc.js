define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/portal/portal.template'], (function load__packages__angular_components__src__laminate__components__modal__modal_controller_directive_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__laminate__overlay__overlay$46template, packages__angular_components__laminate__portal__portal$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const overlay$46template = packages__angular_components__laminate__overlay__overlay$46template.laminate__overlay__overlay$46template;
  const portal$46template = packages__angular_components__laminate__portal__portal$46template.laminate__portal__portal$46template;
  var modal_controller_directive$46template = Object.create(dart.library);
  const CT = Object.create(null);
  modal_controller_directive$46template.initReflector = function initReflector() {
    if (dart.test(modal_controller_directive$46template._visited)) {
      return;
    }
    modal_controller_directive$46template._visited = true;
    angular$46template.initReflector();
    overlay$46template.initReflector();
    portal$46template.initReflector();
  };
  dart.defineLazy(modal_controller_directive$46template, {
    /*modal_controller_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/laminate/components/modal/modal_controller_directive.template", {
    "package:angular_components/src/laminate/components/modal/modal_controller_directive.template.dart": modal_controller_directive$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal_controller_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,8CAAQ;YAAG","file":"modal_controller_directive.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__components__modal__modal_controller_directive$46template: modal_controller_directive$46template
  };
}));

//# sourceMappingURL=modal_controller_directive.template.unsound.ddc.js.map
