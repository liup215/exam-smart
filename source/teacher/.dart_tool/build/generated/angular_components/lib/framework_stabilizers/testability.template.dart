// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'testability.dart';
export 'testability.dart';
import 'framework_stabilizers.template.dart' as _ref0;
import 'framework_stabilizers.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
