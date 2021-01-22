define(['dart_sdk', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template'], (function load__packages__angular_components__model__selection__selection_container_template(dart_sdk, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  var selection_container$46template = Object.create(dart.library);
  const CT = Object.create(null);
  selection_container$46template.initReflector = function initReflector() {
    if (dart.test(selection_container$46template._visited)) {
      return;
    }
    selection_container$46template._visited = true;
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
  };
  dart.defineLazy(selection_container$46template, {
    /*selection_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/selection/selection_container.template", {
    "package:angular_components/model/selection/selection_container.template.dart": selection_container$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_container.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,0CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,uCAAQ;YAAG","file":"selection_container.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__selection_container$46template: selection_container$46template
  };
}));

//# sourceMappingURL=selection_container.template.unsound.ddc.js.map
