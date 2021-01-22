// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'runtime.dart';
export 'runtime.dart';
import '../errors.template.dart' as _ref0;
import '../reflector.template.dart' as _ref1;
import 'empty.template.dart' as _ref2;
import 'hierarchical.template.dart' as _ref3;
import 'injector.template.dart' as _ref4;
import 'package:angular/src/runtime.template.dart' as _ref5;

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
