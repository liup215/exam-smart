define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__utils__disposer__disposable_callback_template(dart_sdk, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var disposable_callback$46template = Object.create(dart.library);
  const CT = Object.create(null);
  disposable_callback$46template.initReflector = function initReflector() {
    if (dart.test(disposable_callback$46template._visited)) {
      return;
    }
    disposable_callback$46template._visited = true;
    disposer$46template.initReflector();
  };
  dart.defineLazy(disposable_callback$46template, {
    /*disposable_callback$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/disposer/disposable_callback.template", {
    "package:angular_components/utils/disposer/disposable_callback.template.dart": disposable_callback$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["disposable_callback.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,0CAAW;AAEU,IAArB;EACF;;MARI,uCAAQ;YAAG","file":"disposable_callback.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__disposer__disposable_callback$46template: disposable_callback$46template
  };
}));

//# sourceMappingURL=disposable_callback.template.unsound.ddc.js.map
