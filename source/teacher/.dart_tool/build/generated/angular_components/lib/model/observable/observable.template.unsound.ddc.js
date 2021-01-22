define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__model__observable__observable_template(dart_sdk, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var observable$46template = Object.create(dart.library);
  const CT = Object.create(null);
  observable$46template.initReflector = function initReflector() {
    if (dart.test(observable$46template._visited)) {
      return;
    }
    observable$46template._visited = true;
    disposer$46template.initReflector();
  };
  dart.defineLazy(observable$46template, {
    /*observable$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/observable/observable.template", {
    "package:angular_components/model/observable/observable.template.dart": observable$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["observable.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;EACF;;MARI,8BAAQ;YAAG","file":"observable.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__observable__observable$46template: observable$46template
  };
}));

//# sourceMappingURL=observable.template.unsound.ddc.js.map
