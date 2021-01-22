define(['dart_sdk', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/async/async.template'], (function load__packages__angular_components__model__selection__string_selection_options_template(dart_sdk, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__async__async$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  var string_selection_options$46template = Object.create(dart.library);
  const CT = Object.create(null);
  string_selection_options$46template.initReflector = function initReflector() {
    if (dart.test(string_selection_options$46template._visited)) {
      return;
    }
    string_selection_options$46template._visited = true;
    select$46template.initReflector();
    selection_options$46template.initReflector();
    has_renderer$46template.initReflector();
    async$46template.initReflector();
  };
  dart.defineLazy(string_selection_options$46template, {
    /*string_selection_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/selection/string_selection_options.template", {
    "package:angular_components/model/selection/string_selection_options.template.dart": string_selection_options$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["string_selection_options.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,+CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,4CAAQ;YAAG","file":"string_selection_options.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__string_selection_options$46template: string_selection_options$46template
  };
}));

//# sourceMappingURL=string_selection_options.template.unsound.ddc.js.map
