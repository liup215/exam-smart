define(['dart_sdk', 'packages/angular/di.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/selection/string_selection_options.template'], (function load__packages__angular_components__mixins__selection_input_adapter_template(dart_sdk, packages__angular__di$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__selection__string_selection_options$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di$46template = packages__angular__di$46template.di$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const string_selection_options$46template = packages__angular_components__model__selection__string_selection_options$46template.model__selection__string_selection_options$46template;
  var selection_input_adapter$46template = Object.create(dart.library);
  const CT = Object.create(null);
  selection_input_adapter$46template.initReflector = function initReflector() {
    if (dart.test(selection_input_adapter$46template._visited)) {
      return;
    }
    selection_input_adapter$46template._visited = true;
    di$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    string_selection_options$46template.initReflector();
  };
  dart.defineLazy(selection_input_adapter$46template, {
    /*selection_input_adapter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/selection_input_adapter.template", {
    "package:angular_components/mixins/selection_input_adapter.template.dart": selection_input_adapter$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_input_adapter.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,8CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,2CAAQ;YAAG","file":"selection_input_adapter.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__selection_input_adapter$46template: selection_input_adapter$46template
  };
}));

//# sourceMappingURL=selection_input_adapter.template.unsound.ddc.js.map
