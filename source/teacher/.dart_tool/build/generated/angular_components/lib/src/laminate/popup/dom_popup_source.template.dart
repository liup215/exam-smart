// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_popup_source.dart';
export 'dom_popup_source.dart';
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref3;
import 'package:angular_components/src/laminate/popup/popup_source.template.dart' as _ref4;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomPopupSourceFactory, (_i1.DomRuler p0) => DomPopupSourceFactory(p0));
  _ngRef.registerDependencies(DomPopupSourceFactory, const [
    [_i1.DomRuler]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
