define(['dart_sdk'], (function load__packages__angular_components__src__material_tooltip__tooltip_controller(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var tooltip_controller = Object.create(dart.library);
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var TooltipL = () => (TooltipL = dart.constFn(dart.legacy(tooltip_controller.Tooltip)))();
  var TimerL = () => (TimerL = dart.constFn(dart.legacy(async.Timer)))();
  var LinkedMapOfTooltipL$TimerL = () => (LinkedMapOfTooltipL$TimerL = dart.constFn(_js_helper.LinkedMap$(TooltipL(), TimerL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/material_tooltip/tooltip_controller.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    }
  }, false);
  tooltip_controller.Tooltip = class Tooltip extends core.Object {};
  (tooltip_controller.Tooltip.new = function() {
    ;
  }).prototype = tooltip_controller.Tooltip.prototype;
  dart.addTypeTests(tooltip_controller.Tooltip);
  dart.addTypeCaches(tooltip_controller.Tooltip);
  dart.setLibraryUri(tooltip_controller.Tooltip, L0);
  var _activeTooltip = dart.privateName(tooltip_controller, "_activeTooltip");
  var _closeTimerByTooltip = dart.privateName(tooltip_controller, "_closeTimerByTooltip");
  var _cancelTooltipCloseTimer = dart.privateName(tooltip_controller, "_cancelTooltipCloseTimer");
  tooltip_controller.TooltipController = class TooltipController extends core.Object {
    activate(tooltip) {
      let t0, t0$;
      if (tooltip == null || dart.equals(tooltip, this[_activeTooltip])) return;
      t0 = this[_activeTooltip];
      t0 == null ? null : t0.deactivate();
      this[_activeTooltip] = (t0$ = tooltip, (() => {
        t0$.activate();
        return t0$;
      })());
    }
    deactivate(tooltip) {
      let t0;
      if (tooltip == null) return;
      let tooltipToClose = tooltip;
      t0 = this[_closeTimerByTooltip][$_get](tooltipToClose);
      t0 == null ? null : t0.cancel();
      this[_closeTimerByTooltip][$_set](tooltipToClose, async.Timer.new(tooltip_controller.keepAliveDuration, dart.fn(() => {
        tooltipToClose.deactivate();
        if (dart.equals(tooltipToClose, this[_activeTooltip])) this[_activeTooltip] = null;
        this[_closeTimerByTooltip][$remove](tooltipToClose);
      }, VoidToNull())));
    }
    deactivateImmediately(tooltip) {
      let t0;
      t0 = tooltip;
      t0 == null ? null : t0.deactivate();
      if (dart.equals(tooltip, this[_activeTooltip])) this[_activeTooltip] = null;
    }
    keepOpen(tooltip) {
      if (!dart.equals(tooltip, this[_activeTooltip])) return;
      this[_cancelTooltipCloseTimer](tooltip);
    }
    [_cancelTooltipCloseTimer](tooltip) {
      let t0;
      t0 = this[_closeTimerByTooltip][$_get](tooltip);
      t0 == null ? null : t0.cancel();
      this[_closeTimerByTooltip][$remove](tooltip);
    }
    proxyFor(tooltip) {
      return new tooltip_controller._ProxyTooltip.new(tooltip, this);
    }
  };
  (tooltip_controller.TooltipController.new = function() {
    this[_activeTooltip] = null;
    this[_closeTimerByTooltip] = new (LinkedMapOfTooltipL$TimerL()).new();
    ;
  }).prototype = tooltip_controller.TooltipController.prototype;
  dart.addTypeTests(tooltip_controller.TooltipController);
  dart.addTypeCaches(tooltip_controller.TooltipController);
  dart.setMethodSignature(tooltip_controller.TooltipController, () => ({
    __proto__: dart.getMethods(tooltip_controller.TooltipController.__proto__),
    activate: dart.fnType(dart.void, [dart.legacy(tooltip_controller.Tooltip)]),
    deactivate: dart.fnType(dart.void, [dart.legacy(tooltip_controller.Tooltip)]),
    deactivateImmediately: dart.fnType(dart.void, [dart.legacy(tooltip_controller.Tooltip)]),
    keepOpen: dart.fnType(dart.void, [dart.legacy(tooltip_controller.Tooltip)]),
    [_cancelTooltipCloseTimer]: dart.fnType(dart.void, [dart.legacy(tooltip_controller.Tooltip)]),
    proxyFor: dart.fnType(dart.legacy(tooltip_controller.Tooltip), [dart.legacy(tooltip_controller.Tooltip)])
  }));
  dart.setLibraryUri(tooltip_controller.TooltipController, L0);
  dart.setFieldSignature(tooltip_controller.TooltipController, () => ({
    __proto__: dart.getFields(tooltip_controller.TooltipController.__proto__),
    [_activeTooltip]: dart.fieldType(dart.legacy(tooltip_controller.Tooltip)),
    [_closeTimerByTooltip]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(tooltip_controller.Tooltip), dart.legacy(async.Timer))))
  }));
  var _tooltip$ = dart.privateName(tooltip_controller, "_tooltip");
  var _controller$ = dart.privateName(tooltip_controller, "_controller");
  tooltip_controller._ProxyTooltip = class _ProxyTooltip extends core.Object {
    activate() {
      this[_controller$].activate(this[_tooltip$]);
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      if (dart.test(immediate)) {
        this[_controller$].deactivateImmediately(this[_tooltip$]);
      } else {
        this[_controller$].deactivate(this[_tooltip$]);
      }
    }
  };
  (tooltip_controller._ProxyTooltip.new = function(_tooltip, _controller) {
    this[_tooltip$] = _tooltip;
    this[_controller$] = _controller;
    ;
  }).prototype = tooltip_controller._ProxyTooltip.prototype;
  dart.addTypeTests(tooltip_controller._ProxyTooltip);
  dart.addTypeCaches(tooltip_controller._ProxyTooltip);
  tooltip_controller._ProxyTooltip[dart.implements] = () => [tooltip_controller.Tooltip];
  dart.setMethodSignature(tooltip_controller._ProxyTooltip, () => ({
    __proto__: dart.getMethods(tooltip_controller._ProxyTooltip.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, [], {immediate: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(tooltip_controller._ProxyTooltip, L0);
  dart.setFieldSignature(tooltip_controller._ProxyTooltip, () => ({
    __proto__: dart.getFields(tooltip_controller._ProxyTooltip.__proto__),
    [_tooltip$]: dart.finalFieldType(dart.legacy(tooltip_controller.Tooltip)),
    [_controller$]: dart.finalFieldType(dart.legacy(tooltip_controller.TooltipController))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  dart.defineLazy(tooltip_controller, {
    /*tooltip_controller.keepAliveDuration*/get keepAliveDuration() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_controller", {
    "package:angular_components/src/material_tooltip/tooltip_controller.dart": tooltip_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;EAoBA;;;;;;;;aAUwB;;AACpB,UAAI,AAAQ,OAAD,IAAI,QAAgB,YAAR,OAAO,EAAI,uBAAgB;AACtB,WAA5B;0BAAgB;AACoB,MAApC,8BAAiB,OAAO,EAAP;AAAS;;;IAC5B;eAMwB;;AACtB,UAAI,AAAQ,OAAD,IAAI,MAAM;AAGf,2BAAiB,OAAO;AACgB,WAA9C,AAAoB,kCAAC,cAAc;mBAAf,OAAkB;AAKpC,MAJF,AAAoB,kCAAC,cAAc,EAAI,gBAAM,sCAAmB;AACnC,QAA3B,AAAe,cAAD;AACd,YAAmB,YAAf,cAAc,EAAI,uBAAgB,AAAqB,uBAAJ;AACZ,QAA3C,AAAqB,oCAAO,cAAc;;IAE9C;0BAGmC;;AACZ,WAArB,OAAO;mBAAP,OAAS;AACT,UAAY,YAAR,OAAO,EAAI,uBAAgB,AAAqB,uBAAJ;IAClD;aAEsB;AACpB,uBAAI,OAAO,EAAI,uBAAgB;AACE,MAAjC,+BAAyB,OAAO;IAClC;+BAEsC;;AACG,WAAvC,AAAoB,kCAAC,OAAO;mBAAR,OAAW;AACK,MAApC,AAAqB,oCAAO,OAAO;IACrC;aAQyB;AAAY,sDAAc,OAAO,EAAE;IAAK;;;IALzD;IAGF,6BAAuC;;EAG/C;;;;;;;;;;;;;;;;;;;;;;AAYkC,MAA9B,AAAY,4BAAS;IACvB;;UAGsB;AACpB,oBAAI,SAAS;AACgC,QAA3C,AAAY,yCAAsB;;AAEF,QAAhC,AAAY,8BAAW;;IAE3B;;mDAdmB,UAAe;IAAf;IAAe;;EAAY;;;;;;;;;;;;;;;;;;MAN1C,oCAAiB","file":"tooltip_controller.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_controller: tooltip_controller
  };
}));

//# sourceMappingURL=tooltip_controller.unsound.ddc.js.map
