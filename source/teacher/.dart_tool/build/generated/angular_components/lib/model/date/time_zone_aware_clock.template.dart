// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'time_zone_aware_clock.dart';
export 'time_zone_aware_clock.dart';
import 'package:angular_components/model/date/time_zone_aware_clock.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/di.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(TimeZoneAwareClock, (_i1.SettableTimeZone p0) => TimeZoneAwareClock(p0));
  _ngRef.registerDependencies(TimeZoneAwareClock, const [
    [_i1.SettableTimeZone]
  ]);
  _ngRef.registerDependencies(clockFactory, const [
    [_i1.SettableTimeZone]
  ]);
  _ref0.initReflector();
}
