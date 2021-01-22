define(['dart_sdk', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/collection/combined_list.template', 'packages/angular_components/model/collection/labeled_list.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/model/ui/display_name.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/id_generator/id_generator.template'], (function load__packages__angular_components__model__menu__menu_template(dart_sdk, packages__angular_components__model__menu__menu_item_affix$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__collection__combined_list$46template, packages__angular_components__model__collection__labeled_list$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__model__ui__accepts_width$46template, packages__angular_components__model__ui__display_name$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__id_generator__id_generator$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const menu_item_affix$46template = packages__angular_components__model__menu__menu_item_affix$46template.model__menu__menu_item_affix$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const combined_list$46template = packages__angular_components__model__collection__combined_list$46template.model__collection__combined_list$46template;
  const labeled_list$46template = packages__angular_components__model__collection__labeled_list$46template.model__collection__labeled_list$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const accepts_width$46template = packages__angular_components__model__ui__accepts_width$46template.model__ui__accepts_width$46template;
  const display_name$46template = packages__angular_components__model__ui__display_name$46template.model__ui__display_name$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  var menu$46template = Object.create(dart.library);
  const CT = Object.create(null);
  menu$46template.initReflector = function initReflector() {
    if (dart.test(menu$46template._visited)) {
      return;
    }
    menu$46template._visited = true;
    menu_item_affix$46template.initReflector();
    menu_item_affix$46template.initReflector();
    active_item$46template.initReflector();
    combined_list$46template.initReflector();
    labeled_list$46template.initReflector();
    observable$46template.initReflector();
    accepts_width$46template.initReflector();
    display_name$46template.initReflector();
    icon$46template.initReflector();
    properties$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.defineLazy(menu$46template, {
    /*menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/menu/menu.template", {
    "package:angular_components/model/menu/menu.template.dart": menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAoBE,kBAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;EACF;;MAlBI,wBAAQ;YAAG","file":"menu.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__menu__menu$46template: menu$46template
  };
}));

//# sourceMappingURL=menu.template.unsound.ddc.js.map
