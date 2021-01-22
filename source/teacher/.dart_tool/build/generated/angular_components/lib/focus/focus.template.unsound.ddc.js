define(['dart_sdk', 'packages/angular_components/focus/focus_interface.template', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__focus__focus_template(dart_sdk, packages__angular_components__focus__focus_interface$46template, packages__angular__angular$46template, packages__angular_components__laminate__components__modal__modal$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const modal$46template = packages__angular_components__laminate__components__modal__modal$46template.laminate__components__modal__modal$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var focus$46template = Object.create(dart.library);
  const CT = Object.create(null);
  focus$46template.initReflector = function initReflector() {
    if (dart.test(focus$46template._visited)) {
      return;
    }
    focus$46template._visited = true;
    focus_interface$46template.initReflector();
    focus_interface$46template.initReflector();
    angular$46template.initReflector();
    modal$46template.initReflector();
    popup$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(focus$46template, {
    /*focus$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus.template", {
    "package:angular_components/focus/focus.template.dart": focus$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAgBE,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,yBAAQ;YAAG","file":"focus.template.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus$46template: focus$46template
  };
}));

//# sourceMappingURL=focus.template.unsound.ddc.js.map
