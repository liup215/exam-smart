// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'popup_hierarchy.dart';
export 'popup_hierarchy.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/overlay/constants.template.dart' as _ref1;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(PopupHierarchy, () => PopupHierarchy());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
