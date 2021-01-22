define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/highlighted_text/highlighted_value.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/highlight_assistant.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], (function load__packages__angular_components__mixins__highlight_assistant_mixin_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__highlighted_text__highlighted_value$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__highlight_assistant$46template, packages__angular_components__model__ui__highlight_provider$46template, packages__angular_components__model__ui__highlighted_text_model$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const highlighted_value$46template = packages__angular_components__highlighted_text__highlighted_value$46template.highlighted_text__highlighted_value$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const highlight_assistant$46template = packages__angular_components__model__ui__highlight_assistant$46template.model__ui__highlight_assistant$46template;
  const highlight_provider$46template = packages__angular_components__model__ui__highlight_provider$46template.model__ui__highlight_provider$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  var highlight_assistant_mixin$46template = Object.create(dart.library);
  const CT = Object.create(null);
  highlight_assistant_mixin$46template.initReflector = function initReflector() {
    if (dart.test(highlight_assistant_mixin$46template._visited)) {
      return;
    }
    highlight_assistant_mixin$46template._visited = true;
    angular$46template.initReflector();
    highlighted_value$46template.initReflector();
    highlighted_value$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    has_factory$46template.initReflector();
    highlight_assistant$46template.initReflector();
    highlight_provider$46template.initReflector();
    highlighted_text_model$46template.initReflector();
  };
  dart.defineLazy(highlight_assistant_mixin$46template, {
    /*highlight_assistant_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/highlight_assistant_mixin.template", {
    "package:angular_components/mixins/highlight_assistant_mixin.template.dart": highlight_assistant_mixin$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAkBE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,6CAAQ;YAAG","file":"highlight_assistant_mixin.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__highlight_assistant_mixin$46template: highlight_assistant_mixin$46template
  };
}));

//# sourceMappingURL=highlight_assistant_mixin.template.unsound.ddc.js.map
