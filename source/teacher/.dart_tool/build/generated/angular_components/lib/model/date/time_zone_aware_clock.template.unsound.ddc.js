define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/model/date/time_zone_aware_clock', 'packages/quiver/src/time/clock', 'packages/angular/di.template'], (function load__packages__angular_components__model__date__time_zone_aware_clock_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__model__date__time_zone_aware_clock, packages__quiver__src__time__clock, packages__angular__di$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const time_zone_aware_clock = packages__angular_components__model__date__time_zone_aware_clock.model__date__time_zone_aware_clock;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const di$46template = packages__angular__di$46template.di$46template;
  var time_zone_aware_clock$46template = Object.create(dart.library);
  var TimeZoneAwareClockL = () => (TimeZoneAwareClockL = dart.constFn(dart.legacy(time_zone_aware_clock.TimeZoneAwareClock)))();
  var SettableTimeZoneL = () => (SettableTimeZoneL = dart.constFn(dart.legacy(time_zone_aware_clock.SettableTimeZone)))();
  var SettableTimeZoneLToTimeZoneAwareClockL = () => (SettableTimeZoneLToTimeZoneAwareClockL = dart.constFn(dart.fnType(TimeZoneAwareClockL(), [SettableTimeZoneL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var SettableTimeZoneLToClockL = () => (SettableTimeZoneLToClockL = dart.constFn(dart.fnType(ClockL(), [SettableTimeZoneL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(SettableTimeZoneL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ListLOfObjectL());
    },
    get C3() {
      return C3 = dart.fn(time_zone_aware_clock.clockFactory, SettableTimeZoneLToClockL());
    }
  }, false);
  var C2;
  var C1;
  var C0;
  var C3;
  time_zone_aware_clock$46template.initReflector = function initReflector() {
    if (dart.test(time_zone_aware_clock$46template._visited)) {
      return;
    }
    time_zone_aware_clock$46template._visited = true;
    reflector.registerFactory(dart.wrapType(TimeZoneAwareClockL()), dart.fn(p0 => new time_zone_aware_clock.TimeZoneAwareClock.new(p0), SettableTimeZoneLToTimeZoneAwareClockL()));
    reflector.registerDependencies(dart.wrapType(TimeZoneAwareClockL()), C0 || CT.C0);
    reflector.registerDependencies(C3 || CT.C3, C0 || CT.C0);
    di$46template.initReflector();
  };
  dart.defineLazy(time_zone_aware_clock$46template, {
    /*time_zone_aware_clock$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/date/time_zone_aware_clock.template", {
    "package:angular_components/model/date/time_zone_aware_clock.template.dart": time_zone_aware_clock$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["time_zone_aware_clock.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEoF,IAA/F,0BAAuB,sCAAoB,QAAsB,MAAO,iDAAmB,EAAE;AAG3F,IAFF,+BAA4B;AAK1B,IAFF;AAGqB,IAArB;EACF;;MAfI,yCAAQ;YAAG","file":"time_zone_aware_clock.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__date__time_zone_aware_clock$46template: time_zone_aware_clock$46template
  };
}));

//# sourceMappingURL=time_zone_aware_clock.template.unsound.ddc.js.map
