define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular/angular.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__material_datepicker__date_input_template(dart_sdk, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__module$46template, packages__angular__angular$46template, packages__angular_components__material_input__material_input$46template, packages__angular_components__model__date__date$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var date_input$46template = Object.create(dart.library);
  const CT = Object.create(null);
  date_input$46template.initReflector = function initReflector() {
    if (dart.test(date_input$46template._visited)) {
      return;
    }
    date_input$46template._visited = true;
    calendar$46template.initReflector();
    module$46template.initReflector();
    angular$46template.initReflector();
    material_input$46template.initReflector();
    date$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(date_input$46template, {
    /*date_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/date_input.template", {
    "package:angular_components/material_datepicker/date_input.template.dart": date_input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_input.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,8BAAQ;YAAG","file":"date_input.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_input$46template: date_input$46template
  };
}));

//# sourceMappingURL=date_input.template.unsound.ddc.js.map
