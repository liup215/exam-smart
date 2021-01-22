define(['dart_sdk'], (function load__packages__angular__meta_template(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta$46template = Object.create(dart.library);
  var meta$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  meta$46template.initReflector = function initReflector() {
    if (dart.test(meta$46template._visited)) {
      return;
    }
    meta$46template._visited = true;
    meta$46template$.initReflector();
  };
  dart.defineLazy(meta$46template, {
    /*meta$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  meta$46template$.initReflector = function initReflector$() {
  };
  dart.trackLibraries("packages/angular/meta.template", {
    "package:angular/meta.template.dart": meta$46template,
    "package:angular/src/meta.template.dart": meta$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.template.dart","src/meta.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;EACF;;MARI,wBAAQ;YAAG;;;;;ECAO","file":"meta.template.unsound.ddc.js"}');
  // Exports:
  return {
    meta$46template: meta$46template,
    src__meta$46template: meta$46template$
  };
}));

//# sourceMappingURL=meta.template.unsound.ddc.js.map
