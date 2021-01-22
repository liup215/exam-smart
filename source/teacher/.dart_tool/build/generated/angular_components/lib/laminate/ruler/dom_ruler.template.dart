// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_ruler.dart';
export 'dom_ruler.dart';
import 'dart:html' as _i1;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i2;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/laminate/ruler/ruler_interface.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomRuler, (_i1.Document p0, _i2.DomService p1) => DomRuler(p0, p1));
  _ngRef.registerDependencies(DomRuler, const [
    [_i1.Document],
    [_i2.DomService]
  ]);
  _ngRef.registerFactory(DomRulerImpl, (_i1.Document p0, _i2.DomService p1) => DomRulerImpl(p0, p1));
  _ngRef.registerDependencies(DomRulerImpl, const [
    [_i1.Document],
    [_i2.DomService]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
