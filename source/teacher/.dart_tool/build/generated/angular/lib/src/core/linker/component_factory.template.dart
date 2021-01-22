// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'component_factory.dart';
export 'component_factory.dart';
import 'package:angular/src/core/change_detection.template.dart' as _ref0;
import 'package:angular/src/core/di.template.dart' as _ref1;
import 'package:angular/src/core/zone/ng_zone.template.dart' as _ref2;
import 'package:angular/src/runtime.template.dart' as _ref3;
import 'view_ref.template.dart' as _ref4;
import 'views/host_view.template.dart' as _ref5;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
