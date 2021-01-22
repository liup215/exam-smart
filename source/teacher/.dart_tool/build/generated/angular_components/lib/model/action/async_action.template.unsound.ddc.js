define(['dart_sdk', 'packages/angular_components/src/model/action/async_action.template'], (function load__packages__angular_components__model__action__async_action_template(dart_sdk, packages__angular_components__src__model__action__async_action$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const async_action$46template = packages__angular_components__src__model__action__async_action$46template.src__model__action__async_action$46template;
  const async_action_controller$46template = packages__angular_components__src__model__action__async_action$46template.src__model__action__async_action_controller$46template;
  const delegating_async_action$46template = packages__angular_components__src__model__action__async_action$46template.src__model__action__delegating_async_action$46template;
  var async_action$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  async_action$46template$.initReflector = function initReflector() {
    if (dart.test(async_action$46template$._visited)) {
      return;
    }
    async_action$46template$._visited = true;
    async_action$46template.initReflector();
    async_action_controller$46template.initReflector();
    delegating_async_action$46template.initReflector();
  };
  dart.defineLazy(async_action$46template$, {
    /*async_action$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/action/async_action.template", {
    "package:angular_components/model/action/async_action.template.dart": async_action$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["async_action.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,iCAAQ;YAAG","file":"async_action.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__action__async_action$46template: async_action$46template$
  };
}));

//# sourceMappingURL=async_action.template.unsound.ddc.js.map
