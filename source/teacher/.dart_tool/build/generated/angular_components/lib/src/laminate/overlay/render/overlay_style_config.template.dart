// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'overlay_style_config.dart';
export 'overlay_style_config.dart';
import 'dart:html' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(OverlayStyleConfig, (_i1.Document p0) => OverlayStyleConfig(p0));
  _ngRef.registerDependencies(OverlayStyleConfig, const [
    [_i1.Document]
  ]);
  _ref0.initReflector();
}
