// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'focus_indicator_controller.dart';
export 'focus_indicator_controller.dart';
import 'package:angular_components/model/a11y/focus_indicator_controller.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/di.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(createFocusIndicatorControllerIfNotAvailable, const [
    [_i1.FocusIndicatorController, _ngRef.SkipSelf(), _ngRef.Optional()]
  ]);
  _ref0.initReflector();
}
