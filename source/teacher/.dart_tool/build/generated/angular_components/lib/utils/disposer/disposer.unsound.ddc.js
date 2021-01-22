define(['dart_sdk'], (function load__packages__angular_components__utils__disposer__disposer(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var disposer = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var DisposableL = () => (DisposableL = dart.constFn(dart.legacy(disposer.Disposable)))();
  var JSArrayOfDisposableL = () => (JSArrayOfDisposableL = dart.constFn(_interceptors.JSArray$(DisposableL())))();
  var StreamSubscriptionL = () => (StreamSubscriptionL = dart.constFn(dart.legacy(async.StreamSubscription)))();
  var EventSinkL = () => (EventSinkL = dart.constFn(dart.legacy(async.EventSink)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var StreamSubscriptionOfObjectL = () => (StreamSubscriptionOfObjectL = dart.constFn(async.StreamSubscription$(ObjectL())))();
  var StreamSubscriptionLOfObjectL = () => (StreamSubscriptionLOfObjectL = dart.constFn(dart.legacy(StreamSubscriptionOfObjectL())))();
  var JSArrayOfStreamSubscriptionLOfObjectL = () => (JSArrayOfStreamSubscriptionLOfObjectL = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfObjectL())))();
  var EventSinkOfObjectL = () => (EventSinkOfObjectL = dart.constFn(async.EventSink$(ObjectL())))();
  var EventSinkLOfObjectL = () => (EventSinkLOfObjectL = dart.constFn(dart.legacy(EventSinkOfObjectL())))();
  var JSArrayOfEventSinkLOfObjectL = () => (JSArrayOfEventSinkLOfObjectL = dart.constFn(_interceptors.JSArray$(EventSinkLOfObjectL())))();
  var JSArrayOfVoidToLvoid = () => (JSArrayOfVoidToLvoid = dart.constFn(_interceptors.JSArray$(VoidToLvoid())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/disposer/disposer.dart";
  var L1 = "org-dartlang-app:///packages/angular_components/utils/disposer/disposer.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: disposer._NoopDisposable.prototype
      });
    }
  }, false);
  var C0;
  disposer.Disposable = class Disposable extends core.Object {};
  (disposer.Disposable[dart.mixinNew] = function() {
  }).prototype = disposer.Disposable.prototype;
  dart.addTypeTests(disposer.Disposable);
  dart.addTypeCaches(disposer.Disposable);
  dart.setLibraryUri(disposer.Disposable, L0);
  dart.defineLazy(disposer.Disposable, {
    /*disposer.Disposable.Noop*/get Noop() {
      return C0 || CT.C0;
    }
  }, true);
  disposer._NoopDisposable = class _NoopDisposable extends core.Object {
    dispose() {
    }
  };
  (disposer._NoopDisposable.new = function() {
    ;
  }).prototype = disposer._NoopDisposable.prototype;
  dart.addTypeTests(disposer._NoopDisposable);
  dart.addTypeCaches(disposer._NoopDisposable);
  disposer._NoopDisposable[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(disposer._NoopDisposable, () => ({
    __proto__: dart.getMethods(disposer._NoopDisposable.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(disposer._NoopDisposable, L0);
  var _disposeFn$ = dart.privateName(disposer, "_disposeFn");
  disposer._SingleFunctionDisposable = class _SingleFunctionDisposable extends core.Object {
    dispose() {
      this[_disposeFn$]();
    }
  };
  (disposer._SingleFunctionDisposable.new = function(_disposeFn) {
    this[_disposeFn$] = _disposeFn;
    ;
  }).prototype = disposer._SingleFunctionDisposable.prototype;
  dart.addTypeTests(disposer._SingleFunctionDisposable);
  dart.addTypeCaches(disposer._SingleFunctionDisposable);
  disposer._SingleFunctionDisposable[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(disposer._SingleFunctionDisposable, () => ({
    __proto__: dart.getMethods(disposer._SingleFunctionDisposable.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(disposer._SingleFunctionDisposable, L0);
  dart.setFieldSignature(disposer._SingleFunctionDisposable, () => ({
    __proto__: dart.getFields(disposer._SingleFunctionDisposable.__proto__),
    [_disposeFn$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [])))
  }));
  var _disposeFunctions = dart.privateName(disposer, "_disposeFunctions");
  var _disposeSubs = dart.privateName(disposer, "_disposeSubs");
  var _disposeSinks = dart.privateName(disposer, "_disposeSinks");
  var _disposeDisposables = dart.privateName(disposer, "_disposeDisposables");
  var _disposeCalled = dart.privateName(disposer, "_disposeCalled");
  var _oneShot = dart.privateName(disposer, "_oneShot");
  var _checkIfAlreadyDisposed = dart.privateName(disposer, "_checkIfAlreadyDisposed");
  disposer.Disposer = class Disposer extends core.Object {
    addDisposable(T, disposable) {
      let disposable_ = disposable;
      if (DisposableL().is(disposable_)) {
        this[_disposeDisposables] == null ? this[_disposeDisposables] = JSArrayOfDisposableL().of([]) : null;
        this[_disposeDisposables][$add](DisposableL().as(disposable));
        this[_checkIfAlreadyDisposed]();
      } else if (StreamSubscriptionL().is(disposable_)) {
        this.addStreamSubscription(dart.dynamic, disposable_);
      } else if (EventSinkL().is(disposable_)) {
        this.addEventSink(dart.dynamic, disposable_);
      } else if (VoidToLvoid().is(disposable_)) {
        this.addFunction(disposable_);
      } else {
        dart.throw(new core.ArgumentError.value(disposable, "disposable"));
      }
      return disposable;
    }
    addStreamSubscription(T, disposable) {
      this[_disposeSubs] == null ? this[_disposeSubs] = JSArrayOfStreamSubscriptionLOfObjectL().of([]) : null;
      this[_disposeSubs][$add](disposable);
      this[_checkIfAlreadyDisposed]();
      return disposable;
    }
    addEventSink(T, disposable) {
      this[_disposeSinks] == null ? this[_disposeSinks] = JSArrayOfEventSinkLOfObjectL().of([]) : null;
      this[_disposeSinks][$add](disposable);
      this[_checkIfAlreadyDisposed]();
      return disposable;
    }
    addFunction(disposable) {
      if (!(disposable != null)) dart.assertFailed(null, L1, 144, 12, "disposable != null");
      this[_disposeFunctions] == null ? this[_disposeFunctions] = JSArrayOfVoidToLvoid().of([]) : null;
      this[_disposeFunctions][$add](disposable);
      this[_checkIfAlreadyDisposed]();
      return disposable;
    }
    [_checkIfAlreadyDisposed]() {
      if (!!(dart.test(this[_oneShot]) && dart.test(this[_disposeCalled]))) dart.assertFailed(disposer._oneShotDisposerMemoryLeakWarning, L1, 153, 12, "!(_oneShot && _disposeCalled)");
    }
    dispose() {
      if (this[_disposeSubs] != null) {
        let len = this[_disposeSubs][$length];
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          this[_disposeSubs][$_get](i).cancel();
        }
        this[_disposeSubs] = null;
      }
      if (this[_disposeSinks] != null) {
        let len = this[_disposeSinks][$length];
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          this[_disposeSinks][$_get](i).close();
        }
        this[_disposeSinks] = null;
      }
      if (this[_disposeDisposables] != null) {
        let len = this[_disposeDisposables][$length];
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          this[_disposeDisposables][$_get](i).dispose();
        }
        this[_disposeDisposables] = null;
      }
      if (this[_disposeFunctions] != null) {
        let len = this[_disposeFunctions][$length];
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          this[_disposeFunctions][$_get](i)();
        }
        this[_disposeFunctions] = null;
      }
      this[_disposeCalled] = true;
    }
  };
  (disposer.Disposer.new = function(opts) {
    let oneShot = opts && 'oneShot' in opts ? opts.oneShot : false;
    this[_disposeFunctions] = null;
    this[_disposeSubs] = null;
    this[_disposeSinks] = null;
    this[_disposeDisposables] = null;
    this[_disposeCalled] = false;
    this[_oneShot] = oneShot;
    ;
  }).prototype = disposer.Disposer.prototype;
  (disposer.Disposer.oneShot = function() {
    this[_disposeFunctions] = null;
    this[_disposeSubs] = null;
    this[_disposeSinks] = null;
    this[_disposeDisposables] = null;
    this[_disposeCalled] = false;
    this[_oneShot] = true;
    ;
  }).prototype = disposer.Disposer.prototype;
  (disposer.Disposer.multi = function() {
    this[_disposeFunctions] = null;
    this[_disposeSubs] = null;
    this[_disposeSinks] = null;
    this[_disposeDisposables] = null;
    this[_disposeCalled] = false;
    this[_oneShot] = false;
    ;
  }).prototype = disposer.Disposer.prototype;
  dart.addTypeTests(disposer.Disposer);
  dart.addTypeCaches(disposer.Disposer);
  disposer.Disposer[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(disposer.Disposer, () => ({
    __proto__: dart.getMethods(disposer.Disposer.__proto__),
    addDisposable: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T)]]),
    addStreamSubscription: dart.gFnType(T => [dart.legacy(async.StreamSubscription$(dart.legacy(T))), [dart.legacy(async.StreamSubscription$(dart.legacy(T)))]]),
    addEventSink: dart.gFnType(T => [dart.legacy(async.EventSink$(dart.legacy(T))), [dart.legacy(async.EventSink$(dart.legacy(T)))]]),
    addFunction: dart.fnType(dart.legacy(dart.fnType(dart.void, [])), [dart.legacy(dart.fnType(dart.void, []))]),
    [_checkIfAlreadyDisposed]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(disposer.Disposer, L0);
  dart.setFieldSignature(disposer.Disposer, () => ({
    __proto__: dart.getFields(disposer.Disposer.__proto__),
    [_disposeFunctions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, []))))),
    [_disposeSubs]: dart.fieldType(dart.legacy(core.List$(dart.legacy(async.StreamSubscription$(dart.legacy(core.Object)))))),
    [_disposeSinks]: dart.fieldType(dart.legacy(core.List$(dart.legacy(async.EventSink$(dart.legacy(core.Object)))))),
    [_disposeDisposables]: dart.fieldType(dart.legacy(core.List$(dart.legacy(disposer.Disposable)))),
    [_oneShot]: dart.finalFieldType(dart.legacy(core.bool)),
    [_disposeCalled]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(disposer, {
    /*disposer._oneShotDisposerMemoryLeakWarning*/get _oneShotDisposerMemoryLeakWarning() {
      return "Possible memory leak detected: A disposable should not be added to one shot disposers after the dispose() method has been called.";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/disposer/disposer", {
    "package:angular_components/utils/disposer/disposer.dart": disposer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["disposer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkB0B,wBAAI;;;;;;IAcZ;;;;EAHO;;;;;;;;;;;;AAcT,MAAZ,AAAU;IACZ;;;IAL+B;;EAAW;;;;;;;;;;;;;;;;;;;;;qBAgErB;AAIX,wBAAc,UAAU;AAChC,UAAgB,iBAAZ,WAAW;AACa,QAA1B,AAAoB,6BAAA,OAApB,4BAAwB,gCAAJ;AAC6B,QAAjD,AAAoB,gCAAe,iBAAX,UAAU;AACT,QAAzB;YACK,KAAgB,yBAAZ,WAAW;AACc,QAAlC,yCAAsB,WAAW;YAC5B,KAAgB,gBAAZ,WAAW;AACK,QAAzB,gCAAa,WAAW;YACnB,KAAgB,iBAAZ,WAAW;AACI,QAAxB,iBAAY,WAAW;;AAE4B,QAAnD,WAAoB,6BAAM,UAAU,EAAE;;AAExC,YAAO,WAAU;IACnB;6BAI0B;AACL,MAAnB,AAAa,sBAAA,OAAb,qBAAiB,iDAAJ;AACe,MAA5B,AAAa,yBAAI,UAAU;AACF,MAAzB;AACA,YAAO,WAAU;IACnB;oBAG0C;AACpB,MAApB,AAAc,uBAAA,OAAd,sBAAkB,wCAAJ;AACe,MAA7B,AAAc,0BAAI,UAAU;AACH,MAAzB;AACA,YAAO,WAAU;IACnB;gBAG4C;AAC1C,YAAO,AAAW,UAAD,IAAI;AACG,MAAxB,AAAkB,2BAAA,OAAlB,0BAAsB,gCAAJ;AACe,MAAjC,AAAkB,8BAAI,UAAU;AACP,MAAzB;AACA,YAAO,WAAU;IACnB;;AAIE,WAAO,YAAE,6BAAY,0CAAiB;IACxC;;AAKE,UAAI,sBAAgB;AACd,kBAAM,AAAa;AACvB,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACA,UAAxB,AAAY,AAAI,0BAAH,CAAC;;AAEG,QAAnB,qBAAe;;AAEjB,UAAI,uBAAiB;AACf,kBAAM,AAAc;AACxB,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACA,UAAxB,AAAa,AAAI,2BAAH,CAAC;;AAEG,QAApB,sBAAgB;;AAElB,UAAI,6BAAuB;AACrB,kBAAM,AAAoB;AAC9B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACQ,UAAhC,AAAmB,AAAI,iCAAH,CAAC;;AAEG,QAA1B,4BAAsB;;AAExB,UAAI,2BAAqB;AACnB,kBAAM,AAAkB;AAC5B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACF,UAAtB,AAAiB,AAAG,+BAAF,CAAC;;AAEG,QAAxB,0BAAoB;;AAED,MAArB,uBAAiB;IACnB;;;QAlGe;IAVO;IACW;IACT;IACP;IAEZ,uBAAiB;IAKsB,iBAAE,OAAO;;;;IAV/B;IACW;IACT;IACP;IAEZ,uBAAiB;IAQQ,iBAAE;;EAAI;;IAbd;IACW;IACT;IACP;IAEZ,uBAAiB;IAWM,iBAAE;;EAAK;;;;;;;;;;;;;;;;;;;;;;;;MAvFxB,0CAAiC","file":"disposer.unsound.ddc.js"}');
  // Exports:
  return {
    utils__disposer__disposer: disposer
  };
}));

//# sourceMappingURL=disposer.unsound.ddc.js.map
