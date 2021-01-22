define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__src__material_datepicker__calendar_listener_template(dart_sdk, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var calendar_listener$46template = Object.create(dart.library);
  var enum_parsing$46template = Object.create(dart.library);
  const CT = Object.create(null);
  calendar_listener$46template.initReflector = function initReflector() {
    if (dart.test(calendar_listener$46template._visited)) {
      return;
    }
    calendar_listener$46template._visited = true;
    calendar$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(calendar_listener$46template, {
    /*calendar_listener$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  enum_parsing$46template.initReflector = function initReflector$() {
  };
  dart.trackLibraries("packages/angular_components/src/material_datepicker/calendar_listener.template", {
    "package:angular_components/src/material_datepicker/calendar_listener.template.dart": calendar_listener$46template,
    "package:angular_components/src/material_datepicker/enum_parsing.template.dart": enum_parsing$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calendar_listener.template.dart","enum_parsing.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,qCAAQ;YAAG;;;;;ECHO","file":"calendar_listener.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__calendar_listener$46template: calendar_listener$46template,
    src__material_datepicker__enum_parsing$46template: enum_parsing$46template
  };
}));

//# sourceMappingURL=calendar_listener.template.unsound.ddc.js.map
