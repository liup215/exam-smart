// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'di.dart';
export 'di.dart';
import '../di/errors.template.dart' as _ref0;
import '../di/injector/injector.template.dart' as _ref1;
import '../di/injector/runtime.template.dart' as _ref2;

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
