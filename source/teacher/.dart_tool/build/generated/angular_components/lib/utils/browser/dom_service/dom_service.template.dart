// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_service.dart';
export 'dom_service.dart';
import 'package:angular/di.template.dart' as _ref0;
import 'package:angular_components/utils/async/async.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposable_callback.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;

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
}
