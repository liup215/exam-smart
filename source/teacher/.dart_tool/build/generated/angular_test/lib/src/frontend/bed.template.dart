// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'bed.dart';
export 'bed.dart';
import '../bootstrap.template.dart' as _ref0;
import '../errors.template.dart' as _ref1;
import 'fixture.template.dart' as _ref2;
import 'ng_zone/real_time_stabilizer.template.dart' as _ref3;
import 'ng_zone/timer_hook_zone.template.dart' as _ref4;
import 'package:angular/angular.template.dart' as _ref5;
import 'package:angular/experimental.template.dart' as _ref6;
import 'stabilizer.template.dart' as _ref7;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
