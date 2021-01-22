define(['dart_sdk'], (function load__packages__angular_components__model__action__delayed_action(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var delayed_action = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var CompleterOfboolL = () => (CompleterOfboolL = dart.constFn(async.Completer$(boolL())))();
  var FutureOrOfboolL = () => (FutureOrOfboolL = dart.constFn(async.FutureOr$(boolL())))();
  var FutureOrNOfboolL = () => (FutureOrNOfboolL = dart.constFn(dart.nullable(FutureOrOfboolL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/action/delayed_action.dart";
  var _timer = dart.privateName(delayed_action, "_timer");
  var _completer = dart.privateName(delayed_action, "_completer");
  var _duration$ = dart.privateName(delayed_action, "_duration");
  var _callback$ = dart.privateName(delayed_action, "_callback");
  var _reset = dart.privateName(delayed_action, "_reset");
  var _wrappedCallback = dart.privateName(delayed_action, "_wrappedCallback");
  delayed_action.DelayedAction = class DelayedAction extends core.Object {
    [_wrappedCallback]() {
      this[_callback$]();
      this[_reset](true);
    }
    start() {
      if (this[_timer] == null) {
        this[_completer] = CompleterOfboolL().new();
        this[_timer] = async.Timer.new(this[_duration$], dart.bind(this, _wrappedCallback));
      }
      return this[_completer].future;
    }
    cancel() {
      this[_reset](false);
    }
    doNow() {
      this[_wrappedCallback]();
    }
    restart() {
      this.cancel();
      return this.start();
    }
    [_reset](complete) {
      let t0, t0$;
      t0 = this[_timer];
      t0 == null ? null : t0.cancel();
      this[_timer] = null;
      t0$ = this[_completer];
      t0$ == null ? null : t0$.complete(FutureOrNOfboolL().as(complete));
      this[_completer] = null;
    }
  };
  (delayed_action.DelayedAction.new = function(_duration, _callback) {
    this[_timer] = null;
    this[_completer] = null;
    this[_duration$] = _duration;
    this[_callback$] = _callback;
    ;
  }).prototype = delayed_action.DelayedAction.prototype;
  dart.addTypeTests(delayed_action.DelayedAction);
  dart.addTypeCaches(delayed_action.DelayedAction);
  dart.setMethodSignature(delayed_action.DelayedAction, () => ({
    __proto__: dart.getMethods(delayed_action.DelayedAction.__proto__),
    [_wrappedCallback]: dart.fnType(dart.void, []),
    start: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    cancel: dart.fnType(dart.void, []),
    doNow: dart.fnType(dart.void, []),
    restart: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    [_reset]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(delayed_action.DelayedAction, L0);
  dart.setFieldSignature(delayed_action.DelayedAction, () => ({
    __proto__: dart.getFields(delayed_action.DelayedAction.__proto__),
    [_callback$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
    [_duration$]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_timer]: dart.fieldType(dart.legacy(async.Timer)),
    [_completer]: dart.fieldType(dart.legacy(async.Completer$(dart.legacy(core.bool))))
  }));
  dart.trackLibraries("packages/angular_components/model/action/delayed_action", {
    "package:angular_components/model/action/delayed_action.dart": delayed_action
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["delayed_action.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAoBe,MAAX,AAAS;AACG,MAAZ,aAAO;IACT;;AAOE,UAAI,AAAO,gBAAG;AACkB,QAA9B,mBAAa;AAC8B,QAA3C,eAAS,gBAAM,4BAAW;;AAE5B,YAAO,AAAW;IACpB;;AAIe,MAAb,aAAO;IACT;;AAIoB,MAAlB;IACF;;AAIU,MAAR;AACA,YAAO;IACT;aAEY;;AACM,WAAhB;0BAAQ;AACK,MAAb,eAAS;AACqB,YAA9B;2BAAY,mCAAS,QAAQ;AACZ,MAAjB,mBAAa;IACf;;+CAxCmB,WAAgB;IAH7B;IACU;IAEG;IAAgB;;EAAU","file":"delayed_action.unsound.ddc.js"}');
  // Exports:
  return {
    model__action__delayed_action: delayed_action
  };
}));

//# sourceMappingURL=delayed_action.unsound.ddc.js.map
