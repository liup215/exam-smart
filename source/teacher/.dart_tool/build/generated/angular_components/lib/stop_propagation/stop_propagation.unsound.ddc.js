define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__stop_propagation__stop_propagation(dart_sdk, packages__angular_components__utils__browser__events__events, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var stop_propagation = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $onKeyPress = dartx.onKeyPress;
  const CT = Object.create(null);
  var L0 = "package:angular_components/stop_propagation/stop_propagation.dart";
  var _clickSubscription = dart.privateName(stop_propagation, "_clickSubscription");
  var _keyPressSubscription = dart.privateName(stop_propagation, "_keyPressSubscription");
  var _handleClick = dart.privateName(stop_propagation, "_handleClick");
  var _handleKeyPress = dart.privateName(stop_propagation, "_handleKeyPress");
  stop_propagation.StopPropagationDirective = class StopPropagationDirective extends core.Object {
    ngOnDestroy() {
      let t0, t0$;
      t0 = this[_clickSubscription];
      t0 == null ? null : t0.cancel();
      t0$ = this[_keyPressSubscription];
      t0$ == null ? null : t0$.cancel();
    }
    [_handleClick](e) {
      e.stopPropagation();
    }
    [_handleKeyPress](e) {
      if (e.keyCode === 13 || dart.test(events.isSpaceKey(e))) {
        e.stopPropagation();
      }
    }
  };
  (stop_propagation.StopPropagationDirective.new = function(e) {
    this[_clickSubscription] = null;
    this[_keyPressSubscription] = null;
    this[_clickSubscription] = e[$onClick].listen(dart.bind(this, _handleClick));
    this[_keyPressSubscription] = e[$onKeyPress].listen(dart.bind(this, _handleKeyPress));
  }).prototype = stop_propagation.StopPropagationDirective.prototype;
  dart.addTypeTests(stop_propagation.StopPropagationDirective);
  dart.addTypeCaches(stop_propagation.StopPropagationDirective);
  stop_propagation.StopPropagationDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(stop_propagation.StopPropagationDirective, () => ({
    __proto__: dart.getMethods(stop_propagation.StopPropagationDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_handleClick]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_handleKeyPress]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setLibraryUri(stop_propagation.StopPropagationDirective, L0);
  dart.setFieldSignature(stop_propagation.StopPropagationDirective, () => ({
    __proto__: dart.getFields(stop_propagation.StopPropagationDirective.__proto__),
    [_clickSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_keyPressSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription))
  }));
  dart.trackLibraries("packages/angular_components/stop_propagation/stop_propagation", {
    "package:angular_components/stop_propagation/stop_propagation.dart": stop_propagation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stop_propagation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AA4BgC,WAA5B;0BAAoB;AACW,YAA/B;2BAAuB;IACzB;mBAE6B;AACR,MAAnB,AAAE,CAAD;IACH;sBAEmC;AACjC,UAAI,AAAE,AAAQ,CAAT,6BAA6B,kBAAW,CAAC;AACzB,QAAnB,AAAE,CAAD;;IAEL;;4DAnBiC;IAFd;IAAoB;AAGc,IAAnD,2BAAqB,AAAE,AAAQ,CAAT,4BAAgB;AACsB,IAA5D,8BAAwB,AAAE,AAAW,CAAZ,+BAAmB;EAC9C","file":"stop_propagation.unsound.ddc.js"}');
  // Exports:
  return {
    stop_propagation__stop_propagation: stop_propagation
  };
}));

//# sourceMappingURL=stop_propagation.unsound.ddc.js.map
