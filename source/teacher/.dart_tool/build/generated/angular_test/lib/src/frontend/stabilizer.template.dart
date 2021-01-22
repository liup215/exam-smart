// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'stabilizer.dart';
export 'stabilizer.dart';
import '../errors.template.dart' as _ref0;
import 'ng_zone/timer_hook_zone.template.dart' as _ref1;
import 'package:angular/di.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
