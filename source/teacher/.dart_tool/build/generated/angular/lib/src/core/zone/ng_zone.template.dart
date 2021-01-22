// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ng_zone.dart';
export 'ng_zone.dart';
import 'package:angular/src/facade/exception_handler.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
