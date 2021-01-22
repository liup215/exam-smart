define(['dart_sdk', 'packages/angular_components/model/ui/highlighted_text_model.template'], (function load__packages__angular_components__model__ui__highlight_provider_template(dart_sdk, packages__angular_components__model__ui__highlighted_text_model$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  var highlight_provider$46template = Object.create(dart.library);
  const CT = Object.create(null);
  highlight_provider$46template.initReflector = function initReflector() {
    if (dart.test(highlight_provider$46template._visited)) {
      return;
    }
    highlight_provider$46template._visited = true;
    highlighted_text_model$46template.initReflector();
  };
  dart.defineLazy(highlight_provider$46template, {
    /*highlight_provider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/highlight_provider.template", {
    "package:angular_components/model/ui/highlight_provider.template.dart": highlight_provider$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlight_provider.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAEU,IAArB;EACF;;MARI,sCAAQ;YAAG","file":"highlight_provider.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__highlight_provider$46template: highlight_provider$46template
  };
}));

//# sourceMappingURL=highlight_provider.template.unsound.ddc.js.map
