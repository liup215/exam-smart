// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'rtl_annotation.dart';
export 'rtl_annotation.dart';
import 'dart:html' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(determineRtl, const [
    [_i1.Document]
  ]);
  _ref0.initReflector();
}
