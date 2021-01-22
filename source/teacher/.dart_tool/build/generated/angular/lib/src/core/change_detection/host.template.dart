// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'host.dart';
export 'host.dart';
import 'change_detection.template.dart' as _ref0;
import 'package:angular/src/core/linker/views/view.template.dart' as _ref1;
import 'package:angular/src/runtime.template.dart' as _ref2;

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
