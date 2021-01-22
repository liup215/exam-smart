// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'module.dart';
export 'module.dart';
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as _i1;
import 'dart:html' as _i2;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/overlay/constants.template.dart' as _ref1;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref2;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref3;
import 'package:angular_components/model/math/box.template.dart' as _ref4;
import 'package:angular_components/src/laminate/overlay/overlay_service.template.dart' as _ref5;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart' as _ref6;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart' as _ref7;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart' as _ref8;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.template.dart' as _ref9;
import 'package:angular_components/utils/angular/managed_zone/angular_2.template.dart' as _ref10;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref11;
import 'package:angular_components/utils/browser/window/module.template.dart' as _ref12;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(getDefaultContainer, const [
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainerName'))],
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainerParent'))],
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainer')), _ngRef.SkipSelf(), _ngRef.Optional()]
  ]);
  _ngRef.registerDependencies(getDefaultContainerName, const [
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainerName')), _ngRef.SkipSelf(), _ngRef.Optional()]
  ]);
  _ngRef.registerDependencies(getDebugContainer, const [
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainerName'))],
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainerParent'))]
  ]);
  _ngRef.registerDependencies(getOverlayContainerParent, const [
    [_i2.Document],
    [_ngRef.Inject(_i1.OpaqueToken<dynamic>('overlayContainerParent')), _ngRef.SkipSelf(), _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
}
