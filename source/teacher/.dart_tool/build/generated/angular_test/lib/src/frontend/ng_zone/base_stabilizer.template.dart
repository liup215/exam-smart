// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'base_stabilizer.dart';
export 'base_stabilizer.dart';
import '../stabilizer.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
