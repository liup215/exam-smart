// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'core.dart';
export 'core.dart';
import 'src/core/application_tokens.template.dart' as _ref0;
import 'src/core/change_detection.template.dart' as _ref1;
import 'src/core/di.template.dart' as _ref2;
import 'src/core/zone/ng_zone.template.dart' as _ref3;
import 'src/facade/exception_handler.template.dart' as _ref4;

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
}
