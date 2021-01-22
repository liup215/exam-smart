// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'element.dart';
export 'element.dart';
import 'hierarchical.template.dart' as _ref0;
import 'injector.template.dart' as _ref1;
import 'package:angular/src/core/linker/views/view.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
