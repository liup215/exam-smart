// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'frontend.dart';
export 'frontend.dart';
import 'frontend/bed.template.dart' as _ref0;
import 'frontend/fixture.template.dart' as _ref1;
import 'frontend/ng_zone/fake_time_stabilizer.template.dart' as _ref2;
import 'frontend/ng_zone/real_time_stabilizer.template.dart' as _ref3;
import 'frontend/ng_zone/timer_hook_zone.template.dart' as _ref4;
import 'frontend/stabilizer.template.dart' as _ref5;

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
}
