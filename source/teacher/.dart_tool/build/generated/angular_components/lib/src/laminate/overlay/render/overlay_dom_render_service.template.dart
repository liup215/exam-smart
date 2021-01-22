// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'overlay_dom_render_service.dart';
export 'overlay_dom_render_service.dart';
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as _i1;
import 'dart:html' as _i2;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as _i3;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i4;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as _i5;
import 'package:angular_components/laminate/overlay/zindexer.dart' as _i6;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as _i7;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/enums/visibility.template.dart' as _ref1;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref2;
import 'package:angular_components/laminate/portal/portal.template.dart' as _ref3;
import 'package:angular_components/laminate/ruler/dom_ruler.template.dart' as _ref4;
import 'package:angular_components/src/laminate/overlay/overlay_state.template.dart' as _ref5;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart' as _ref6;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref8;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(OverlayDomRenderService, (_i1.OverlayStyleConfig p0, _i2.HtmlElement p1, String p2, _i3.DomRuler p3, _i4.DomService p4, _i5.AcxImperativeViewUtils p5, bool p6, bool p7, _i6.ZIndexer p8) => OverlayDomRenderService(p0, p1, p2, p3, p4, p5, p6, p7, p8));
  _ngRef.registerDependencies(OverlayDomRenderService, const [
    [_i1.OverlayStyleConfig],
    [_ngRef.Inject(_i7.OpaqueToken<dynamic>('overlayContainer'))],
    [_ngRef.Inject(_i7.OpaqueToken<dynamic>('overlayContainerName'))],
    [_i3.DomRuler],
    [_i4.DomService],
    [_i5.AcxImperativeViewUtils],
    [_ngRef.Inject(_i7.OpaqueToken<dynamic>('overlaySyncDom'))],
    [_ngRef.Inject(_i7.OpaqueToken<dynamic>('overlayRepositionLoop'))],
    [_i6.ZIndexer]
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
}
