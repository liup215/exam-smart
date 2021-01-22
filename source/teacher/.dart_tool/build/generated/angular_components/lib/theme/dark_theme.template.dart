// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dark_theme.dart';
export 'dark_theme.dart';
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/theme/module.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AcxDarkTheme, (bool p0) => AcxDarkTheme(p0));
  _ngRef.registerDependencies(AcxDarkTheme, const [
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('acxDarkTheme')), _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
}
