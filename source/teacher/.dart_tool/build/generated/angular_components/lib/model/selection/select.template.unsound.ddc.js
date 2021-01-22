define(['dart_sdk', 'packages/angular_components/src/model/selection/interfaces/selectable.template', 'packages/angular_components/utils/async/async.template'], (function load__packages__angular_components__model__selection__select_template(dart_sdk, packages__angular_components__src__model__selection__interfaces__selectable$46template, packages__angular_components__utils__async__async$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selectable$46template = packages__angular_components__src__model__selection__interfaces__selectable$46template.src__model__selection__interfaces__selectable$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  var select$46template = Object.create(dart.library);
  const CT = Object.create(null);
  select$46template.initReflector = function initReflector() {
    if (dart.test(select$46template._visited)) {
      return;
    }
    select$46template._visited = true;
    selectable$46template.initReflector();
    async$46template.initReflector();
  };
  dart.defineLazy(select$46template, {
    /*select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/selection/select.template", {
    "package:angular_components/model/selection/select.template.dart": select$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["select.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,0BAAQ;YAAG","file":"select.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__select$46template: select$46template
  };
}));

//# sourceMappingURL=select.template.unsound.ddc.js.map
