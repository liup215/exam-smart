define(['dart_sdk', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/icon.template'], (function load__packages__angular_components__model__menu__selectable_menu_template(dart_sdk, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__icon$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  var selectable_menu$46template = Object.create(dart.library);
  const CT = Object.create(null);
  selectable_menu$46template.initReflector = function initReflector() {
    if (dart.test(selectable_menu$46template._visited)) {
      return;
    }
    selectable_menu$46template._visited = true;
    menu$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    has_renderer$46template.initReflector();
    icon$46template.initReflector();
  };
  dart.defineLazy(selectable_menu$46template, {
    /*selectable_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/menu/selectable_menu.template", {
    "package:angular_components/model/menu/selectable_menu.template.dart": selectable_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selectable_menu.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,mCAAQ;YAAG","file":"selectable_menu.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__menu__selectable_menu$46template: selectable_menu$46template
  };
}));

//# sourceMappingURL=selectable_menu.template.unsound.ddc.js.map
