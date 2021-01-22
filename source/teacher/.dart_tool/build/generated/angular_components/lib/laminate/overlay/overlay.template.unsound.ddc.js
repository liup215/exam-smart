define(['dart_sdk', 'packages/angular_components/src/laminate/overlay/overlay_ref.template'], (function load__packages__angular_components__laminate__overlay__overlay_template(dart_sdk, packages__angular_components__src__laminate__overlay__overlay_ref$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const overlay_ref$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__overlay_ref$46template;
  const overlay_service$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__overlay_service$46template;
  const overlay_state$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__overlay_state$46template;
  const overlay_dom_render_service$46template = packages__angular_components__src__laminate__overlay__overlay_ref$46template.src__laminate__overlay__render__overlay_dom_render_service$46template;
  var overlay$46template = Object.create(dart.library);
  const CT = Object.create(null);
  overlay$46template.initReflector = function initReflector() {
    if (dart.test(overlay$46template._visited)) {
      return;
    }
    overlay$46template._visited = true;
    overlay_ref$46template.initReflector();
    overlay_service$46template.initReflector();
    overlay_state$46template.initReflector();
    overlay_dom_render_service$46template.initReflector();
  };
  dart.defineLazy(overlay$46template, {
    /*overlay$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/overlay/overlay.template", {
    "package:angular_components/laminate/overlay/overlay.template.dart": overlay$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["overlay.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,2BAAQ;YAAG","file":"overlay.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__overlay$46template: overlay$46template
  };
}));

//# sourceMappingURL=overlay.template.unsound.ddc.js.map
