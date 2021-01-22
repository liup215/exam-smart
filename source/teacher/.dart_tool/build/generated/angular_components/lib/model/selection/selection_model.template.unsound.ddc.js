define(['dart_sdk'], (function load__packages__angular_components__model__selection__selection_model_template(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var selection_model$46template = Object.create(dart.library);
  var radio_group_single_selection_model$46template = Object.create(dart.library);
  var delegating_selection_model$46template = Object.create(dart.library);
  const CT = Object.create(null);
  selection_model$46template.initReflector = function initReflector() {
    if (dart.test(selection_model$46template._visited)) {
      return;
    }
    selection_model$46template._visited = true;
    delegating_selection_model$46template.initReflector();
    radio_group_single_selection_model$46template.initReflector();
    radio_group_single_selection_model$46template.initReflector();
  };
  dart.defineLazy(selection_model$46template, {
    /*selection_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  radio_group_single_selection_model$46template.initReflector = function initReflector$() {
    if (dart.test(radio_group_single_selection_model$46template._visited)) {
      return;
    }
    radio_group_single_selection_model$46template._visited = true;
    delegating_selection_model$46template.initReflector();
    selection_model$46template.initReflector();
  };
  dart.defineLazy(radio_group_single_selection_model$46template, {
    /*radio_group_single_selection_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  delegating_selection_model$46template.initReflector = function initReflector$0() {
    if (dart.test(delegating_selection_model$46template._visited)) {
      return;
    }
    delegating_selection_model$46template._visited = true;
    selection_model$46template.initReflector();
  };
  dart.defineLazy(delegating_selection_model$46template, {
    /*delegating_selection_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/selection/selection_model.template", {
    "package:angular_components/model/selection/selection_model.template.dart": selection_model$46template,
    "package:angular_components/src/model/selection/radio_group_single_selection_model.template.dart": radio_group_single_selection_model$46template,
    "package:angular_components/src/model/selection/delegating_selection_model.template.dart": delegating_selection_model$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_model.template.dart","../../src/model/selection/radio_group_single_selection_model.template.dart","../../src/model/selection/delegating_selection_model.template.dart"],"names":[],"mappings":";;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,mCAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,yDAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,sDAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEU,IAArB;EACF;;MARI,8CAAQ;YAAG","file":"selection_model.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__selection_model$46template: selection_model$46template,
    src__model__selection__radio_group_single_selection_model$46template: radio_group_single_selection_model$46template,
    src__model__selection__delegating_selection_model$46template: delegating_selection_model$46template
  };
}));

//# sourceMappingURL=selection_model.template.unsound.ddc.js.map
