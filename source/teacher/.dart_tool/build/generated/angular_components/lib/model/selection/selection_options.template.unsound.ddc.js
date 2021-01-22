define(['dart_sdk', 'packages/angular_components/model/collection/labeled_list.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__model__selection__selection_options_template(dart_sdk, packages__angular_components__model__collection__labeled_list$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const labeled_list$46template = packages__angular_components__model__collection__labeled_list$46template.model__collection__labeled_list$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var delegating_selection_options$46template = Object.create(dart.library);
  var selection_options$46template = Object.create(dart.library);
  const CT = Object.create(null);
  delegating_selection_options$46template.initReflector = function initReflector() {
    if (dart.test(delegating_selection_options$46template._visited)) {
      return;
    }
    delegating_selection_options$46template._visited = true;
    selection_options$46template.initReflector();
  };
  dart.defineLazy(delegating_selection_options$46template, {
    /*delegating_selection_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  selection_options$46template.initReflector = function initReflector$() {
    if (dart.test(selection_options$46template._visited)) {
      return;
    }
    selection_options$46template._visited = true;
    labeled_list$46template.initReflector();
    observable$46template.initReflector();
    delegating_selection_options$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(selection_options$46template, {
    /*selection_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/selection/selection_options.template", {
    "package:angular_components/src/model/selection/delegating_selection_options.template.dart": delegating_selection_options$46template,
    "package:angular_components/model/selection/selection_options.template.dart": selection_options$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../src/model/selection/delegating_selection_options.template.dart","selection_options.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,mDAAW;AAEU,IAArB;EACF;;MARI,gDAAQ;YAAG;;;;;ACKb,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,qCAAQ;YAAG","file":"selection_options.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__model__selection__delegating_selection_options$46template: delegating_selection_options$46template,
    model__selection__selection_options$46template: selection_options$46template
  };
}));

//# sourceMappingURL=selection_options.template.unsound.ddc.js.map
