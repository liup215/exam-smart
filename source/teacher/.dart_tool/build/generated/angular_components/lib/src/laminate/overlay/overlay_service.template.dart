// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'overlay_service.dart';
export 'overlay_service.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as _i1;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as _i2;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as _i3;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as _i4;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/laminate/overlay/overlay_ref.template.dart' as _ref1;
import 'package:angular_components/src/laminate/overlay/overlay_state.template.dart' as _ref2;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(OverlayService, (_i1.NgZone p0, bool p1, _i2.OverlayDomRenderService p2, _i3.OverlayService p3) => OverlayService(p0, p1, p2, p3));
  _ngRef.registerDependencies(OverlayService, const [
    [_i1.NgZone],
    [_ngRef.Inject(_i4.OpaqueToken<dynamic>('overlaySyncDom'))],
    [_i2.OverlayDomRenderService],
    [_i3.OverlayService, _ngRef.SkipSelf(), _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
