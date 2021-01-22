// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'template_ref.dart';
export 'template_ref.dart';
import 'element_ref.template.dart' as _ref0;
import 'package:angular/src/runtime/optimizations.template.dart' as _ref1;
import 'view_container.template.dart' as _ref2;
import 'view_ref.template.dart' as _ref3;
import 'views/embedded_view.template.dart' as _ref4;
import 'views/render_view.template.dart' as _ref5;

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
