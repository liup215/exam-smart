// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'new_window_opener.dart';
export 'new_window_opener.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(NewWindowOpener, () => NewWindowOpener());
  _ref0.initReflector();
}
