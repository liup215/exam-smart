define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/mixins/material_dropdown_base.template'], (function load__packages__angular_components__material_menu__common__menu_root_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__mixins__material_dropdown_base$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  var menu_root$46template = Object.create(dart.library);
  const CT = Object.create(null);
  menu_root$46template.initReflector = function initReflector() {
    if (dart.test(menu_root$46template._visited)) {
      return;
    }
    menu_root$46template._visited = true;
    angular$46template.initReflector();
    material_dropdown_base$46template.initReflector();
  };
  dart.defineLazy(menu_root$46template, {
    /*menu_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/common/menu_root.template", {
    "package:angular_components/material_menu/common/menu_root.template.dart": menu_root$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_root.template.dart"],"names":[],"mappings":";;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,6BAAQ;YAAG","file":"menu_root.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__common__menu_root$46template: menu_root$46template
  };
}));

//# sourceMappingURL=menu_root.template.unsound.ddc.js.map
