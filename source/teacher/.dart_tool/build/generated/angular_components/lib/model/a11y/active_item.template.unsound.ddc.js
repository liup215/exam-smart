define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator.template'], (function load__packages__angular_components__model__a11y__active_item_template(dart_sdk, packages__angular_components__utils__id_generator__id_generator$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  var active_item$46template = Object.create(dart.library);
  const CT = Object.create(null);
  active_item$46template.initReflector = function initReflector() {
    if (dart.test(active_item$46template._visited)) {
      return;
    }
    active_item$46template._visited = true;
    id_generator$46template.initReflector();
  };
  dart.defineLazy(active_item$46template, {
    /*active_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/a11y/active_item.template", {
    "package:angular_components/model/a11y/active_item.template.dart": active_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["active_item.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;EACF;;MARI,+BAAQ;YAAG","file":"active_item.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item$46template: active_item$46template
  };
}));

//# sourceMappingURL=active_item.template.unsound.ddc.js.map
