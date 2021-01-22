// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'deferred_validator.dart';
export 'deferred_validator.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DeferredValidator, () => DeferredValidator());
  _ref0.initReflector();
  _ref1.initReflector();
}
