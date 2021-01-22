define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/model/ui/has_renderer.template'], (function load__packages__angular_components__material_menu__affix__base_affix_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__menu__menu_item_affix$46template, packages__angular_components__model__ui__has_renderer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const menu_item_affix$46template = packages__angular_components__model__menu__menu_item_affix$46template.model__menu__menu_item_affix$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  var base_affix$46template = Object.create(dart.library);
  const CT = Object.create(null);
  base_affix$46template.initReflector = function initReflector() {
    if (dart.test(base_affix$46template._visited)) {
      return;
    }
    base_affix$46template._visited = true;
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    menu_item_affix$46template.initReflector();
    has_renderer$46template.initReflector();
  };
  dart.defineLazy(base_affix$46template, {
    /*base_affix$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/affix/base_affix.template", {
    "package:angular_components/material_menu/affix/base_affix.template.dart": base_affix$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_affix.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,8BAAQ;YAAG","file":"base_affix.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__affix__base_affix$46template: base_affix$46template
  };
}));

//# sourceMappingURL=base_affix.template.unsound.ddc.js.map
