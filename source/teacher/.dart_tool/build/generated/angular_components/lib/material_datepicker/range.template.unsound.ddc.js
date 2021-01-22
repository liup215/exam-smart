define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_datepicker/range', 'packages/quiver/src/time/clock', 'packages/angular/di.template', 'packages/angular_components/material_datepicker/proto/date.pb.template', 'packages/angular_components/material_datepicker/proto/date_range.pb.template', 'packages/angular_components/model/date/date.template'], (function load__packages__angular_components__material_datepicker__range_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_datepicker__range, packages__quiver__src__time__clock, packages__angular__di$46template, packages__angular_components__material_datepicker__proto__date$46pb$46template, packages__angular_components__material_datepicker__proto__date_range$46pb$46template, packages__angular_components__model__date__date$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const di$46template = packages__angular__di$46template.di$46template;
  const date$46pb$46template = packages__angular_components__material_datepicker__proto__date$46pb$46template.material_datepicker__proto__date$46pb$46template;
  const date_range$46pb$46template = packages__angular_components__material_datepicker__proto__date_range$46pb$46template.material_datepicker__proto__date_range$46pb$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  var range$46template = Object.create(dart.library);
  var DatepickerDateRangeL = () => (DatepickerDateRangeL = dart.constFn(dart.legacy(range.DatepickerDateRange)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var ClockLToDatepickerDateRangeL = () => (ClockLToDatepickerDateRangeL = dart.constFn(dart.fnType(DatepickerDateRangeL(), [ClockL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(range.today, ClockLToDatepickerDateRangeL());
    },
    get C3() {
      return C3 = dart.wrapType(ClockL());
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], ObjectL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ListLOfObjectL());
    },
    get C4() {
      return C4 = dart.fn(range.yesterday, ClockLToDatepickerDateRangeL());
    },
    get C5() {
      return C5 = dart.fn(range.thisWeek, ClockLToDatepickerDateRangeL());
    },
    get C6() {
      return C6 = dart.fn(range.lastWeek, ClockLToDatepickerDateRangeL());
    },
    get C7() {
      return C7 = dart.fn(range.last7Days, ClockLToDatepickerDateRangeL());
    },
    get C8() {
      return C8 = dart.fn(range.last14Days, ClockLToDatepickerDateRangeL());
    },
    get C9() {
      return C9 = dart.fn(range.thisMonth, ClockLToDatepickerDateRangeL());
    },
    get C10() {
      return C10 = dart.fn(range.lastMonth, ClockLToDatepickerDateRangeL());
    },
    get C11() {
      return C11 = dart.fn(range.thisBroadcastMonth, ClockLToDatepickerDateRangeL());
    },
    get C12() {
      return C12 = dart.fn(range.lastBroadcastMonth, ClockLToDatepickerDateRangeL());
    },
    get C13() {
      return C13 = dart.fn(range.last30Days, ClockLToDatepickerDateRangeL());
    },
    get C14() {
      return C14 = dart.fn(range.thisYear, ClockLToDatepickerDateRangeL());
    },
    get C15() {
      return C15 = dart.fn(range.lastYear, ClockLToDatepickerDateRangeL());
    },
    get C16() {
      return C16 = dart.fn(range.thisQuarter, ClockLToDatepickerDateRangeL());
    },
    get C17() {
      return C17 = dart.fn(range.lastQuarter, ClockLToDatepickerDateRangeL());
    }
  }, false);
  var C0;
  var C3;
  var C2;
  var C1;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  range$46template.initReflector = function initReflector() {
    if (dart.test(range$46template._visited)) {
      return;
    }
    range$46template._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    reflector.registerDependencies(C4 || CT.C4, C1 || CT.C1);
    reflector.registerDependencies(C5 || CT.C5, C1 || CT.C1);
    reflector.registerDependencies(C6 || CT.C6, C1 || CT.C1);
    reflector.registerDependencies(C7 || CT.C7, C1 || CT.C1);
    reflector.registerDependencies(C8 || CT.C8, C1 || CT.C1);
    reflector.registerDependencies(C9 || CT.C9, C1 || CT.C1);
    reflector.registerDependencies(C10 || CT.C10, C1 || CT.C1);
    reflector.registerDependencies(C11 || CT.C11, C1 || CT.C1);
    reflector.registerDependencies(C12 || CT.C12, C1 || CT.C1);
    reflector.registerDependencies(C13 || CT.C13, C1 || CT.C1);
    reflector.registerDependencies(C14 || CT.C14, C1 || CT.C1);
    reflector.registerDependencies(C15 || CT.C15, C1 || CT.C1);
    reflector.registerDependencies(C16 || CT.C16, C1 || CT.C1);
    reflector.registerDependencies(C17 || CT.C17, C1 || CT.C1);
    di$46template.initReflector();
    date$46pb$46template.initReflector();
    date_range$46pb$46template.initReflector();
    date$46template.initReflector();
  };
  dart.defineLazy(range$46template, {
    /*range$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/range.template", {
    "package:angular_components/material_datepicker/range.template.dart": range$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["range.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAIT,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAGqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAxDI,yBAAQ;YAAG","file":"range.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__range$46template: range$46template
  };
}));

//# sourceMappingURL=range.template.unsound.ddc.js.map
