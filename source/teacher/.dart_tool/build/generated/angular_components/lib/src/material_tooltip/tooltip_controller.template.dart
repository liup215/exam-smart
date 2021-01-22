// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tooltip_controller.dart';
export 'tooltip_controller.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(TooltipController, () => TooltipController());
  _ref0.initReflector();
}
