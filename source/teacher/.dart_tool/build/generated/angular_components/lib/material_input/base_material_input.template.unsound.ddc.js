define(['dart_sdk', 'packages/angular_components/material_input/deferred_validator.template', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/forms/error_renderer.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/reference/reference.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_forms/angular_forms.template'], (function load__packages__angular_components__material_input__base_material_input_template(dart_sdk, packages__angular_components__material_input__deferred_validator$46template, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__focus__focus$46template, packages__angular_components__forms__error_renderer$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__angular__reference__reference$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_forms__angular_forms$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const deferred_validator$46template = packages__angular_components__material_input__deferred_validator$46template.material_input__deferred_validator$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const error_renderer$46template = packages__angular_components__forms__error_renderer$46template.forms__error_renderer$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const reference$46template = packages__angular_components__utils__angular__reference__reference$46template.utils__angular__reference__reference$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  var base_material_input$46template = Object.create(dart.library);
  const CT = Object.create(null);
  base_material_input$46template.initReflector = function initReflector() {
    if (dart.test(base_material_input$46template._visited)) {
      return;
    }
    base_material_input$46template._visited = true;
    deferred_validator$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus$46template.initReflector();
    error_renderer$46template.initReflector();
    error_renderer$46template.initReflector();
    has_disabled$46template.initReflector();
    focusable_mixin$46template.initReflector();
    properties$46template.initReflector();
    reference$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(base_material_input$46template, {
    /*base_material_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/base_material_input.template", {
    "package:angular_components/material_input/base_material_input.template.dart": base_material_input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_material_input.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAsBE,kBAAI;AACF;;AAEa,IAAf,0CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MApBI,uCAAQ;YAAG","file":"base_material_input.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__base_material_input$46template: base_material_input$46template
  };
}));

//# sourceMappingURL=base_material_input.template.unsound.ddc.js.map
