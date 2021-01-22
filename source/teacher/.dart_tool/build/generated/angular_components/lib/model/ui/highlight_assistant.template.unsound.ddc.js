define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], (function load__packages__angular_components__model__ui__highlight_assistant_template(dart_sdk, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__highlighted_text_model$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  var highlight_assistant$46template = Object.create(dart.library);
  const CT = Object.create(null);
  highlight_assistant$46template.initReflector = function initReflector() {
    if (dart.test(highlight_assistant$46template._visited)) {
      return;
    }
    highlight_assistant$46template._visited = true;
    has_renderer$46template.initReflector();
    highlighted_text_model$46template.initReflector();
  };
  dart.defineLazy(highlight_assistant$46template, {
    /*highlight_assistant$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/highlight_assistant.template", {
    "package:angular_components/model/ui/highlight_assistant.template.dart": highlight_assistant$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,0CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,uCAAQ;YAAG","file":"highlight_assistant.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__highlight_assistant$46template: highlight_assistant$46template
  };
}));

//# sourceMappingURL=highlight_assistant.template.unsound.ddc.js.map
