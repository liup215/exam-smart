// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'angular_test.dart';
export 'angular_test.dart';
import 'src/errors.template.dart' as _ref0;
import 'src/frontend.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
