define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/utils/angular/properties/properties.template'], (function load__packages__angular_components__material_menu__menu_popup_wrapper_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__model__ui__accepts_width$46template, packages__angular_components__utils__angular__properties__properties$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const accepts_width$46template = packages__angular_components__model__ui__accepts_width$46template.model__ui__accepts_width$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  var menu_popup_wrapper$46template = Object.create(dart.library);
  const CT = Object.create(null);
  menu_popup_wrapper$46template.initReflector = function initReflector() {
    if (dart.test(menu_popup_wrapper$46template._visited)) {
      return;
    }
    menu_popup_wrapper$46template._visited = true;
    angular$46template.initReflector();
    menu$46template.initReflector();
    observable$46template.initReflector();
    accepts_width$46template.initReflector();
    properties$46template.initReflector();
  };
  dart.defineLazy(menu_popup_wrapper$46template, {
    /*menu_popup_wrapper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/menu_popup_wrapper.template", {
    "package:angular_components/material_menu/menu_popup_wrapper.template.dart": menu_popup_wrapper$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup_wrapper.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,sCAAQ;YAAG","file":"menu_popup_wrapper.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup_wrapper$46template: menu_popup_wrapper$46template
  };
}));

//# sourceMappingURL=menu_popup_wrapper.template.unsound.ddc.js.map
