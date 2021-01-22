// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'compatibility.dart';
export 'compatibility.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/experimental.template.dart' as _ref1;
import 'src/frontend/bed.template.dart' as _ref2;
import 'src/frontend/fixture.template.dart' as _ref3;

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
