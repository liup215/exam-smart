define(['dart_sdk', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/comparators/comparators.template'], (function load__packages__angular_components__model__date__date_template(dart_sdk, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__comparators__comparators$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const comparators$46template = packages__angular_components__utils__comparators__comparators$46template.utils__comparators__comparators$46template;
  var date$46template = Object.create(dart.library);
  const CT = Object.create(null);
  date$46template.initReflector = function initReflector() {
    if (dart.test(date$46template._visited)) {
      return;
    }
    date$46template._visited = true;
    observable$46template.initReflector();
    comparators$46template.initReflector();
  };
  dart.defineLazy(date$46template, {
    /*date$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/date/date.template", {
    "package:angular_components/model/date/date.template.dart": date$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,wBAAQ;YAAG","file":"date.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__date__date$46template: date$46template
  };
}));

//# sourceMappingURL=date.template.unsound.ddc.js.map
