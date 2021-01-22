// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'injector.dart';
export 'injector.dart';
import '../errors.template.dart' as _ref0;
import 'empty.template.dart' as _ref1;
import 'hierarchical.template.dart' as _ref2;
import 'map.template.dart' as _ref3;

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
}
