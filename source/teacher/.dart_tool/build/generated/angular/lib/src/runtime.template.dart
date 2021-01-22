// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'runtime.dart';
export 'runtime.dart';
import 'runtime/check_binding.template.dart' as _ref0;
import 'runtime/messages/messages.template.dart' as _ref1;
import 'runtime/optimizations.template.dart' as _ref2;

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
