// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'events.dart';
export 'events.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
