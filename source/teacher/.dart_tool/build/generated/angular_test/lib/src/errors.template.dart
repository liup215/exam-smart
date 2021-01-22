// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'errors.dart';
export 'errors.dart';
import 'errors/generic_type_missing.template.dart' as _ref0;
import 'errors/test_already_running.template.dart' as _ref1;
import 'errors/will_never_stabilize.template.dart' as _ref2;

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
