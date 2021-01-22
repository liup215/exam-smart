// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'gestures.dart';
export 'gestures.dart';
import 'package:quiver/src/time/clock.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.template.dart' as _ref1;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(GestureListenerFactory, (_i1.Clock p0) => GestureListenerFactory(p0));
  _ngRef.registerDependencies(GestureListenerFactory, const [
    [_i1.Clock]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
