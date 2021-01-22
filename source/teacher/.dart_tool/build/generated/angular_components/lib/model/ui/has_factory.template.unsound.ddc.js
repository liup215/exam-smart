define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular/angular.template'], (function load__packages__angular_components__model__ui__has_factory_template(dart_sdk, packages__angular_components__model__ui__has_renderer$46template, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var has_factory$46template = Object.create(dart.library);
  const CT = Object.create(null);
  has_factory$46template.initReflector = function initReflector() {
    if (dart.test(has_factory$46template._visited)) {
      return;
    }
    has_factory$46template._visited = true;
    has_renderer$46template.initReflector();
    has_renderer$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(has_factory$46template, {
    /*has_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/has_factory.template", {
    "package:angular_components/model/ui/has_factory.template.dart": has_factory$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_factory.template.dart"],"names":[],"mappings":";;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,+BAAQ;YAAG","file":"has_factory.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__has_factory$46template: has_factory$46template
  };
}));

//# sourceMappingURL=has_factory.template.unsound.ddc.js.map
