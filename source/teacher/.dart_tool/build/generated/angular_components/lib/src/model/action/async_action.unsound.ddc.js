define(['dart_sdk'], (function load__packages__angular_components__src__model__action__async_action(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var async_action = Object.create(dart.library);
  var async_action_controller = Object.create(dart.library);
  var delegating_async_action = Object.create(dart.library);
  var $add = dartx.add;
  var $clear = dartx.clear;
  var $any = dartx.any;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var CompleterOfboolL = () => (CompleterOfboolL = dart.constFn(async.Completer$(boolL())))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var JSArrayOfFutureL = () => (JSArrayOfFutureL = dart.constFn(_interceptors.JSArray$(FutureL())))();
  var FutureLOfboolL = () => (FutureLOfboolL = dart.constFn(dart.legacy(FutureOfboolL())))();
  var JSArrayOfFutureLOfboolL = () => (JSArrayOfFutureLOfboolL = dart.constFn(_interceptors.JSArray$(FutureLOfboolL())))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var boolLToFutureLOfvoid = () => (boolLToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [boolL()])))();
  var VoidToFutureLOfvoid = () => (VoidToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [])))();
  var boolLToboolL = () => (boolLToboolL = dart.constFn(dart.fnType(boolL(), [boolL()])))();
  var ListOfboolL = () => (ListOfboolL = dart.constFn(core.List$(boolL())))();
  var ListLOfboolL = () => (ListLOfboolL = dart.constFn(dart.legacy(ListOfboolL())))();
  var ListLOfboolLToboolL = () => (ListLOfboolLToboolL = dart.constFn(dart.fnType(boolL(), [ListLOfboolL()])))();
  var VoidToFutureLOfboolL = () => (VoidToFutureLOfboolL = dart.constFn(dart.fnType(FutureLOfboolL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/model/action/async_action.dart";
  var L1 = "package:angular_components/src/model/action/async_action_controller.dart";
  var L2 = "package:angular_components/src/model/action/delegating_async_action.dart";
  var _syncCancelled = dart.privateName(async_action, "_syncCancelled");
  var _onDone$ = dart.privateName(async_action, "_onDone");
  var _onDefer$ = dart.privateName(async_action, "_onDefer");
  var _futureCancellations$ = dart.privateName(async_action, "_futureCancellations");
  var _executionDeferrals$ = dart.privateName(async_action, "_executionDeferrals");
  var _lockedGetter$ = dart.privateName(async_action, "_lockedGetter");
  var _cancelledGetter$ = dart.privateName(async_action, "_cancelledGetter");
  var _doneGetter$ = dart.privateName(async_action, "_doneGetter");
  var _waitingForDone = dart.privateName(async_action, "_waitingForDone");
  const _is_AsyncAction_default = Symbol('_is_AsyncAction_default');
  async_action.AsyncAction$ = dart.generic(V => {
    class AsyncAction extends core.Object {
      get [_waitingForDone]() {
        return boolL().as(dart.dsend(this, _lockedGetter$, []));
      }
      get cancelled() {
        return dart.test(this[_syncCancelled]) || dart.dtest(dart.dsend(this, _cancelledGetter$, []));
      }
      get isDone() {
        return boolL().as(dart.dsend(this, _doneGetter$, []));
      }
      get onDone() {
        return this[_onDone$];
      }
      get onDefer() {
        return this[_onDefer$];
      }
      cancelIf(whetherToCancel) {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new("Cannot register. Action is complete."));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new("Cannot register. Already waiting."));
        }
        this[_futureCancellations$][$add](whetherToCancel);
      }
      cancel() {
        let t0;
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new("Cannot register. Action is complete."));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new("Cannot register. Already waiting."));
        }
        this[_syncCancelled] = true;
        t0 = this[_futureCancellations$];
        (() => {
          t0[$clear]();
          t0[$add](FutureOfboolL().value(true));
          return t0;
        })();
      }
      defer(executionDeferral) {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new("Cannot register. Action is complete."));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new("Cannot register. Already waiting."));
        }
        this[_executionDeferrals$][$add](executionDeferral);
      }
    }
    (AsyncAction.new = function(_onDone, _onDefer, _futureCancellations, _executionDeferrals, _lockedGetter, _cancelledGetter, _doneGetter) {
      this[_syncCancelled] = false;
      this[_onDone$] = _onDone;
      this[_onDefer$] = _onDefer;
      this[_futureCancellations$] = _futureCancellations;
      this[_executionDeferrals$] = _executionDeferrals;
      this[_lockedGetter$] = _lockedGetter;
      this[_cancelledGetter$] = _cancelledGetter;
      this[_doneGetter$] = _doneGetter;
      ;
    }).prototype = AsyncAction.prototype;
    dart.addTypeTests(AsyncAction);
    AsyncAction.prototype[_is_AsyncAction_default] = true;
    dart.addTypeCaches(AsyncAction);
    dart.setMethodSignature(AsyncAction, () => ({
      __proto__: dart.getMethods(AsyncAction.__proto__),
      cancelIf: dart.fnType(dart.void, [dart.legacy(async.Future$(dart.legacy(core.bool)))]),
      cancel: dart.fnType(dart.void, []),
      defer: dart.fnType(dart.void, [dart.legacy(async.Future)])
    }));
    dart.setGetterSignature(AsyncAction, () => ({
      __proto__: dart.getGetters(AsyncAction.__proto__),
      [_waitingForDone]: dart.legacy(core.bool),
      cancelled: dart.legacy(core.bool),
      isDone: dart.legacy(core.bool),
      onDone: dart.legacy(async.Future$(dart.legacy(V))),
      onDefer: dart.legacy(async.Future$(dart.legacy(core.bool)))
    }));
    dart.setLibraryUri(AsyncAction, L0);
    dart.setFieldSignature(AsyncAction, () => ({
      __proto__: dart.getFields(AsyncAction.__proto__),
      [_onDone$]: dart.finalFieldType(dart.legacy(async.Future$(dart.legacy(V)))),
      [_onDefer$]: dart.finalFieldType(dart.legacy(async.Future$(dart.legacy(core.bool)))),
      [_futureCancellations$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(async.Future$(dart.legacy(core.bool)))))),
      [_executionDeferrals$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(async.Future)))),
      [_cancelledGetter$]: dart.finalFieldType(dart.legacy(core.Function)),
      [_lockedGetter$]: dart.finalFieldType(dart.legacy(core.Function)),
      [_doneGetter$]: dart.finalFieldType(dart.legacy(core.Function)),
      [_syncCancelled]: dart.fieldType(dart.legacy(core.bool))
    }));
    return AsyncAction;
  });
  async_action.AsyncAction = async_action.AsyncAction$();
  dart.addTypeTests(async_action.AsyncAction, _is_AsyncAction_default);
  var _executeCompleter = dart.privateName(async_action_controller, "_executeCompleter");
  var _deferCompleter = dart.privateName(async_action_controller, "_deferCompleter");
  var _executionDeferrals = dart.privateName(async_action_controller, "_executionDeferrals");
  var _futureCancellations = dart.privateName(async_action_controller, "_futureCancellations");
  var _locked = dart.privateName(async_action_controller, "_locked");
  var _cancelled = dart.privateName(async_action_controller, "_cancelled");
  var _done = dart.privateName(async_action_controller, "_done");
  var _action = dart.privateName(async_action_controller, "_action");
  var _shouldCancel = dart.privateName(async_action_controller, "_shouldCancel");
  var _maybeWait = dart.privateName(async_action_controller, "_maybeWait");
  var _executeAndAttach = dart.privateName(async_action_controller, "_executeAndAttach");
  var _attachFuture = dart.privateName(async_action_controller, "_attachFuture");
  const _is_AsyncActionController_default = Symbol('_is_AsyncActionController_default');
  async_action_controller.AsyncActionController$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    var CompleterOfVL = () => (CompleterOfVL = dart.constFn(async.Completer$(VL())))();
    var AsyncActionOfVL = () => (AsyncActionOfVL = dart.constFn(async_action.AsyncAction$(VL())))();
    var dynamicToVL = () => (dynamicToVL = dart.constFn(dart.fnType(VL(), [dart.dynamic])))();
    var FutureOfVL = () => (FutureOfVL = dart.constFn(async.Future$(VL())))();
    var FutureLOfVL = () => (FutureLOfVL = dart.constFn(dart.legacy(FutureOfVL())))();
    var FutureOrOfVL = () => (FutureOrOfVL = dart.constFn(async.FutureOr$(VL())))();
    var FutureOrNOfVL = () => (FutureOrNOfVL = dart.constFn(dart.nullable(FutureOrOfVL())))();
    class AsyncActionController extends core.Object {
      get action() {
        if (this[_action] == null) {
          this[_action] = new (AsyncActionOfVL()).new(this[_executeCompleter].future, this[_deferCompleter].future, this[_futureCancellations], this[_executionDeferrals], dart.fn(() => this[_locked], VoidToboolL()), dart.fn(() => this[_cancelled], VoidToboolL()), dart.fn(() => this[_done], VoidToboolL()));
        }
        return this[_action];
      }
      execute(exec, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let valueOnCancel = opts && 'valueOnCancel' in opts ? opts.valueOnCancel : null;
        VL().as(valueOnCancel);
        return FutureOfvoid().microtask(dart.fn(() => {
          if (dart.test(this[_locked])) {
            dart.throw(new core.StateError.new("Cannot execute, execution already in process."));
          }
          this[_locked] = true;
          return this[_shouldCancel]().then(dart.void, dart.fn(shouldCancel => {
            this[_cancelled] = shouldCancel;
            let shouldProceed = !dart.test(this[_cancelled]);
            this[_deferCompleter].complete(shouldProceed);
            if (shouldProceed) {
              return this[_maybeWait]().then(dart.void, dart.fn(_ => {
                this[_executeAndAttach](exec);
              }, dynamicToNull()));
            } else {
              this[_done] = true;
              if (onCancel == null) {
                this[_executeCompleter].complete(valueOnCancel);
              } else {
                let cancelRes = onCancel();
                if (!FutureL().is(cancelRes)) {
                  this[_executeCompleter].complete(valueOnCancel);
                } else {
                  this[_attachFuture](FutureLOfVL().as(dart.dsend(cancelRes, 'then', [dart.fn(_ => valueOnCancel, dynamicToVL())])));
                }
              }
              return null;
            }
          }, boolLToFutureLOfvoid()));
        }, VoidToFutureLOfvoid()));
      }
      [_maybeWait]() {
        return async.Future.wait(dart.dynamic, this[_executionDeferrals]);
      }
      [_shouldCancel]() {
        return FutureOfboolL().microtask(dart.fn(() => async.Future.wait(boolL(), this[_futureCancellations]).then(boolL(), dart.fn(results => results[$any](dart.fn(cancel => dart.equals(cancel, true), boolLToboolL())), ListLOfboolLToboolL())), VoidToFutureLOfboolL()));
      }
      [_executeAndAttach](exec) {
        let execResult = exec();
        this[_done] = true;
        if (FutureL().is(execResult)) {
          this[_attachFuture](FutureLOfVL().as(execResult));
        } else {
          this[_executeCompleter].complete(FutureOrNOfVL().as(execResult));
        }
      }
      [_attachFuture](future) {
        future.then(dart.void, dart.bind(this[_executeCompleter], 'complete')).catchError(dart.bind(this[_executeCompleter], 'completeError'));
      }
    }
    (AsyncActionController.new = function() {
      this[_executeCompleter] = CompleterOfVL().new();
      this[_deferCompleter] = CompleterOfboolL().new();
      this[_executionDeferrals] = JSArrayOfFutureL().of([]);
      this[_futureCancellations] = JSArrayOfFutureLOfboolL().of([]);
      this[_locked] = false;
      this[_cancelled] = false;
      this[_done] = false;
      this[_action] = null;
      ;
    }).prototype = AsyncActionController.prototype;
    dart.addTypeTests(AsyncActionController);
    AsyncActionController.prototype[_is_AsyncActionController_default] = true;
    dart.addTypeCaches(AsyncActionController);
    dart.setMethodSignature(AsyncActionController, () => ({
      __proto__: dart.getMethods(AsyncActionController.__proto__),
      execute: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(dart.fnType(dart.dynamic, []))], {onCancel: dart.legacy(dart.fnType(dart.dynamic, [])), valueOnCancel: dart.legacy(core.Object)}, {}),
      [_maybeWait]: dart.fnType(dart.legacy(async.Future), []),
      [_shouldCancel]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
      [_executeAndAttach]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
      [_attachFuture]: dart.fnType(dart.void, [dart.legacy(async.Future$(dart.legacy(V)))])
    }));
    dart.setGetterSignature(AsyncActionController, () => ({
      __proto__: dart.getGetters(AsyncActionController.__proto__),
      action: dart.legacy(async_action.AsyncAction$(dart.legacy(V)))
    }));
    dart.setLibraryUri(AsyncActionController, L1);
    dart.setFieldSignature(AsyncActionController, () => ({
      __proto__: dart.getFields(AsyncActionController.__proto__),
      [_executeCompleter]: dart.finalFieldType(dart.legacy(async.Completer$(dart.legacy(V)))),
      [_deferCompleter]: dart.finalFieldType(dart.legacy(async.Completer$(dart.legacy(core.bool)))),
      [_executionDeferrals]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(async.Future)))),
      [_futureCancellations]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(async.Future$(dart.legacy(core.bool)))))),
      [_locked]: dart.fieldType(dart.legacy(core.bool)),
      [_cancelled]: dart.fieldType(dart.legacy(core.bool)),
      [_done]: dart.fieldType(dart.legacy(core.bool)),
      [_action]: dart.fieldType(dart.legacy(async_action.AsyncAction$(dart.legacy(V))))
    }));
    return AsyncActionController;
  });
  async_action_controller.AsyncActionController = async_action_controller.AsyncActionController$();
  dart.addTypeTests(async_action_controller.AsyncActionController, _is_AsyncActionController_default);
  const _is_DelegatingAsyncAction_default = Symbol('_is_DelegatingAsyncAction_default');
  delegating_async_action.DelegatingAsyncAction$ = dart.generic(V => {
    class DelegatingAsyncAction extends core.Object {
      get cancelled() {
        return this.delegate.cancelled;
      }
      get isDone() {
        return this.delegate.isDone;
      }
      get onDone() {
        return this.delegate.onDone;
      }
      get onDefer() {
        return this.delegate.onDefer;
      }
      cancelIf(whetherToCancel) {
        return this.delegate.cancelIf(whetherToCancel);
      }
      cancel() {
        return this.delegate.cancel();
      }
      defer(executionDeferral) {
        return this.delegate.defer(executionDeferral);
      }
    }
    (DelegatingAsyncAction.new = function() {
      ;
    }).prototype = DelegatingAsyncAction.prototype;
    dart.addTypeTests(DelegatingAsyncAction);
    DelegatingAsyncAction.prototype[_is_DelegatingAsyncAction_default] = true;
    dart.addTypeCaches(DelegatingAsyncAction);
    DelegatingAsyncAction[dart.implements] = () => [async_action.AsyncAction$(dart.legacy(V))];
    dart.setMethodSignature(DelegatingAsyncAction, () => ({
      __proto__: dart.getMethods(DelegatingAsyncAction.__proto__),
      cancelIf: dart.fnType(dart.void, [dart.legacy(async.Future$(dart.legacy(core.bool)))]),
      cancel: dart.fnType(dart.void, []),
      defer: dart.fnType(dart.void, [dart.legacy(async.Future)])
    }));
    dart.setGetterSignature(DelegatingAsyncAction, () => ({
      __proto__: dart.getGetters(DelegatingAsyncAction.__proto__),
      cancelled: dart.legacy(core.bool),
      isDone: dart.legacy(core.bool),
      onDone: dart.legacy(async.Future$(dart.legacy(V))),
      onDefer: dart.legacy(async.Future$(dart.legacy(core.bool)))
    }));
    dart.setLibraryUri(DelegatingAsyncAction, L2);
    return DelegatingAsyncAction;
  });
  delegating_async_action.DelegatingAsyncAction = delegating_async_action.DelegatingAsyncAction$();
  dart.addTypeTests(delegating_async_action.DelegatingAsyncAction, _is_DelegatingAsyncAction_default);
  dart.trackLibraries("packages/angular_components/src/model/action/async_action", {
    "package:angular_components/src/model/action/async_action.dart": async_action,
    "package:angular_components/src/model/action/async_action_controller.dart": async_action_controller,
    "package:angular_components/src/model/action/delegating_async_action.dart": delegating_async_action
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["async_action.dart","async_action_controller.dart","delegating_async_action.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8E8B,0BAAa,WAAb;MAAe;;AAYrB,cAAe,WAAf,oCAAkC,WAAhB;MAAkB;;AAGvC,0BAAW,WAAX;MAAa;;AAIR;MAAO;;AASH;MAAQ;eAST;AAEzB,sBAAI,iBAAW;AAEf,sBAAI;AACsD,UAAxD,WAAM,wBAAW;;AAInB,sBAAI;AACmD,UAArD,WAAM,wBAAW;;AAIsB,QAAzC,AAAqB,kCAAI,eAAe;MAC1C;;;AAOE,sBAAI,iBAAW;AAGf,sBAAI;AACsD,UAAxD,WAAM,wBAAW;;AAGnB,sBAAI;AACmD,UAArD,WAAM,wBAAW;;AAGE,QAArB,uBAAiB;AAGU,aAF3B;;AACI;AACA,mBAAW,sBAAM;;;MACvB;YAU2B;AAEzB,sBAAI,iBAAW;AAGf,sBAAI;AACsD,UAAxD,WAAM,wBAAW;;AAGnB,sBAAI;AACmD,UAArD,WAAM,wBAAW;;AAIuB,QAA1C,AAAoB,iCAAI,iBAAiB;MAC3C;;gCAhGS,SACA,UACA,sBACA,qBACA,eACA,kBACA;MAVJ,uBAAiB;MAIb;MACA;MACA;MACA;MACA;MACA;MACA;;IAAY;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AClDnB,YAAI,AAAQ,iBAAG;AAQG,UAPhB,gBAAU,4BACN,AAAkB,gCAClB,AAAgB,8BAChB,4BACA,2BACA,cAAM,+BACN,cAAM,kCACN,cAAM;;AAEZ,cAAO;MACT;cASwC;YAChB;YAAY;;AAMlC,cAAc,0BAAU;AACtB,wBAAI;AAC+D,YAAjE,WAAM,wBAAW;;AAEL,UAAd,gBAAU;AAGV,gBAAO,AAAgB,uCAAK,QAAC;AACF,YAAzB,mBAAa,YAAY;AACrB,gCAAgB,WAAC;AACkB,YAAvC,AAAgB,+BAAS,aAAa;AACtC,gBAAI,aAAa;AAEf,oBAAO,AAAa,oCAAK,QAAC;AACD,gBAAvB,wBAAkB,IAAI;;;AAGZ,cAAZ,cAAQ;AAIR,kBAAI,AAAS,QAAD,IAAI;AAC2B,gBAAzC,AAAkB,iCAAS,aAAa;;AAEpC,gCAAY,AAAQ,QAAA;AACxB,qBAAc,aAAV,SAAS;AAC8B,kBAAzC,AAAkB,iCAAS,aAAa;;AAKW,kBAAnD,qCAAwB,WAAV,SAAS,WAAM,QAAC,KAAM,aAAa;;;AAGrD,oBAAO;;;;MAIf;;AAIE,cAAc,iCAAK;MACrB;;AAME,cAAc,2BAAU,cACR,AACT,2BADc,0CACT,QAAC,WAAY,AAAQ,OAAD,OAAK,QAAC,UACZ,YAAP,MAAM,EAAI;MAG/B;0BAE0C;AACpC,yBAAa,AAAI,IAAA;AACT,QAAZ,cAAQ;AACR,YAAe,aAAX,UAAU;AACa,UAAzB,qCAAc,UAAU;;AAEc,UAAtC,AAAkB,oDAAS,UAAU;;MAEzC;sBAE6B;AAGqB,QAFhD,AACK,AACA,MAFC,iBACsB,UAAlB,iDACwB,UAAlB;MAClB;;;MApHM,0BAAoB;MAIpB,wBAAkB;MAGlB,4BAAuC;MAGvC,6BAAqC;MAGtC,gBAAU;MACV,mBAAa;MACb,cAAQ;MAgBE;;IAsFjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC3HwB,cAAA,AAAS;MAAS;;AAErB,cAAA,AAAS;MAAM;;AAEV,cAAA,AAAS;MAAM;;AAEX,cAAA,AAAS;MAAO;eAEjB;AACvB,cAAA,AAAS,wBAAS,eAAe;MAAC;;AAErB,cAAA,AAAS;MAAQ;YAEP;AACvB,cAAA,AAAS,qBAAM,iBAAiB;MAAC;;;;IACvC","file":"async_action.unsound.ddc.js"}');
  // Exports:
  return {
    src__model__action__async_action: async_action,
    src__model__action__async_action_controller: async_action_controller,
    src__model__action__delegating_async_action: delegating_async_action
  };
}));

//# sourceMappingURL=async_action.unsound.ddc.js.map
