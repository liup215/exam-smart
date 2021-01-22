// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'render_view.dart';
export 'render_view.dart';
import 'package:angular/src/core/linker/app_view_utils.template.dart' as _ref0;
import 'package:angular/src/core/linker/style_encapsulation.template.dart' as _ref1;
import 'package:angular/src/core/linker/view_container.template.dart' as _ref2;
import 'package:angular/src/core/linker/view_fragment.template.dart' as _ref3;
import 'package:angular/src/runtime.template.dart' as _ref4;
import 'package:angular/src/runtime/dom_helpers.template.dart' as _ref5;
import 'view.template.dart' as _ref6;

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
  _ref6.initReflector();
}
