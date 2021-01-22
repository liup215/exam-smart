// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'bootstrap.dart';
export 'bootstrap.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/bootstrap/run.template.dart' as _ref1;
import 'package:angular/src/core/application_ref.template.dart' as _ref2;

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
