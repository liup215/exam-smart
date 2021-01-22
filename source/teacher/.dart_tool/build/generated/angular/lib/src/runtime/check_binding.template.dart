// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'check_binding.dart';
export 'check_binding.dart';
import 'messages.template.dart' as _ref0;
import 'optimizations.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
