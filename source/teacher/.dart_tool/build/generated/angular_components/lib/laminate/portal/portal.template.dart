// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'portal.dart';
export 'portal.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;

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
