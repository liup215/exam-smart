define(['dart_sdk', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/disposer/disposable_callback', 'packages/angular/src/core/change_detection/pipe_transform'], (function load__packages__angular_components__utils__browser__dom_service__dom_service(dart_sdk, packages__angular_components__src__utils__async__async_update_scheduler, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__disposer__disposable_callback, packages__angular__src__core__change_detection__pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const zoned_async = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__zoned_async;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const disposable_callback = packages__angular_components__utils__disposer__disposable_callback.utils__disposer__disposable_callback;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  var dom_service = Object.create(dart.library);
  var $cancelAnimationFrame = dartx.cancelAnimationFrame;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $clear = dartx.clear;
  var $onAnimationEnd = dartx.onAnimationEnd;
  var $onResize = dartx.onResize;
  var $onTransitionEnd = dartx.onTransitionEnd;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $truncate = dartx.truncate;
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var JSArrayOfVoidToLvoid = () => (JSArrayOfVoidToLvoid = dart.constFn(_interceptors.JSArray$(VoidToLvoid())))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var CompleterOfnumL = () => (CompleterOfnumL = dart.constFn(async.Completer$(numL())))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var ZonedFutureOfnumL = () => (ZonedFutureOfnumL = dart.constFn(zoned_async.ZonedFuture$(numL())))();
  var StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  var ZonedStreamOfNull = () => (ZonedStreamOfNull = dart.constFn(zoned_async.ZonedStream$(core.Null)))();
  var CompleterOfNull = () => (CompleterOfNull = dart.constFn(async.Completer$(core.Null)))();
  var ZonedFutureOfvoid = () => (ZonedFutureOfvoid = dart.constFn(zoned_async.ZonedFuture$(dart.void)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var StreamControllerOfDomServiceL = () => (StreamControllerOfDomServiceL = dart.constFn(async.StreamController$(DomServiceL())))();
  var ZonedStreamOfDomServiceL = () => (ZonedStreamOfDomServiceL = dart.constFn(zoned_async.ZonedStream$(DomServiceL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNull = () => (EventLToNull = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLTovoid = () => (ObjectLTovoid = dart.constFn(dart.fnType(dart.void, [ObjectL()])))();
  var DomServiceLTovoid = () => (DomServiceLTovoid = dart.constFn(dart.fnType(dart.void, [DomServiceL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var numLTovoid = () => (numLTovoid = dart.constFn(dart.fnType(dart.void, [numL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var DomServiceStateL = () => (DomServiceStateL = dart.constFn(dart.legacy(dom_service.DomServiceState)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/utils/browser/dom_service/dom_service.dart";
  var L1 = "package:angular_components/utils/browser/dom_service/dom_service.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: dom_service.DomServiceState.prototype,
        [_name$]: "DomServiceState.Idle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: dom_service.DomServiceState.prototype,
        [_name$]: "DomServiceState.Writing",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: dom_service.DomServiceState.prototype,
        [_name$]: "DomServiceState.Reading",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], DomServiceStateL());
    }
  }, false);
  var _domReadQueue = dart.privateName(dom_service, "_domReadQueue");
  var _domWriteQueue = dart.privateName(dom_service, "_domWriteQueue");
  var _rootZone = dart.privateName(dom_service, "_rootZone");
  var _insideDigest = dart.privateName(dom_service, "_insideDigest");
  var _layoutObserveRead = dart.privateName(dom_service, "_layoutObserveRead");
  var _scheduledProcessQueue = dart.privateName(dom_service, "_scheduledProcessQueue");
  var _onLayoutChangedController = dart.privateName(dom_service, "_onLayoutChangedController");
  var _onLayoutChangedStream = dart.privateName(dom_service, "_onLayoutChangedStream");
  var _onQueuesProcessedController = dart.privateName(dom_service, "_onQueuesProcessedController");
  var _onQueuesProcessedStream = dart.privateName(dom_service, "_onQueuesProcessedStream");
  var _nextFrameId = dart.privateName(dom_service, "_nextFrameId");
  var _nextFrameCompleter = dart.privateName(dom_service, "_nextFrameCompleter");
  var _nextFrameFuture = dart.privateName(dom_service, "_nextFrameFuture");
  var _state = dart.privateName(dom_service, "_state");
  var _crossAppInitialized = dart.privateName(dom_service, "_crossAppInitialized");
  var _onIdleController = dart.privateName(dom_service, "_onIdleController");
  var _onIdleStream = dart.privateName(dom_service, "_onIdleStream");
  var _idleTimerMillis = dart.privateName(dom_service, "_idleTimerMillis");
  var _idleTimer = dart.privateName(dom_service, "_idleTimer");
  var _inDispatchTurnDoneEvent = dart.privateName(dom_service, "_inDispatchTurnDoneEvent");
  var _writeQueueChangedLayout = dart.privateName(dom_service, "_writeQueueChangedLayout");
  var _ngZone$ = dart.privateName(dom_service, "_ngZone");
  var _window$ = dart.privateName(dom_service, "_window");
  var _resetIdleTimer = dart.privateName(dom_service, "_resetIdleTimer");
  var _scheduleInQueue = dart.privateName(dom_service, "_scheduleInQueue");
  var _scheduleProcessQueue = dart.privateName(dom_service, "_scheduleProcessQueue");
  var _processQueue = dart.privateName(dom_service, "_processQueue");
  var _scheduleOnLayoutChanged = dart.privateName(dom_service, "_scheduleOnLayoutChanged");
  var _processQueues = dart.privateName(dom_service, "_processQueues");
  var _listenOnLayoutEvents = dart.privateName(dom_service, "_listenOnLayoutEvents");
  var _onLayoutObserve = dart.privateName(dom_service, "_onLayoutObserve");
  var _cancelIdleTimer = dart.privateName(dom_service, "_cancelIdleTimer");
  var isDomMutatedPredicate = dart.privateName(dom_service, "DomService.isDomMutatedPredicate");
  var resetIsDomMutated = dart.privateName(dom_service, "DomService.resetIsDomMutated");
  dom_service.DomService = class DomService extends core.Object {
    get isDomMutatedPredicate() {
      return this[isDomMutatedPredicate];
    }
    set isDomMutatedPredicate(value) {
      this[isDomMutatedPredicate] = value;
    }
    get resetIsDomMutated() {
      return this[resetIsDomMutated];
    }
    set resetIsDomMutated(value) {
      this[resetIsDomMutated] = value;
    }
    init() {
      if (dart.test(this[_crossAppInitialized])) return;
      this[_crossAppInitialized] = true;
      this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
        this[_ngZone$].onEventDone.listen(dart.fn(_ => {
          if (this.isDomMutatedPredicate == null || dart.test(this.isDomMutatedPredicate())) {
            this[_inDispatchTurnDoneEvent] = true;
            this[_window$].dispatchEvent(html.Event.new("doms-turn"));
            this[_inDispatchTurnDoneEvent] = false;
            if (this.isDomMutatedPredicate != null && dart.test(this.isDomMutatedPredicate())) {
              this[_writeQueueChangedLayout] = true;
            }
            if (this.resetIsDomMutated != null) {
              dart.dsend(this, 'resetIsDomMutated', []);
            }
          }
        }, voidToNull()));
      }, VoidToNull()));
    }
    get isReadingDom() {
      return this[_state] == dom_service.DomServiceState.Reading;
    }
    get isWritingDom() {
      return this[_state] == dom_service.DomServiceState.Writing;
    }
    leap(opts) {
      let highResTimer = opts && 'highResTimer' in opts ? opts.highResTimer : null;
      let steps = opts && 'steps' in opts ? opts.steps : 1;
      this[_ngZone$].run(core.Null, dart.fn(() => {
      }, VoidToNull()));
      while (dart.dtest(dart.dsend(steps, '>', [0]))) {
        if (this[_nextFrameFuture] == null) return;
        if (highResTimer == null) {
          highResTimer = new core.DateTime.now().millisecondsSinceEpoch;
        }
        if (!(this[_nextFrameCompleter] != null)) dart.assertFailed(null, L0, 162, 14, "_nextFrameCompleter != null");
        let completer = this[_nextFrameCompleter];
        this[_window$][$cancelAnimationFrame](this[_nextFrameId]);
        this[_nextFrameFuture] = null;
        this[_nextFrameCompleter] = null;
        completer.complete(highResTimer);
        steps = dart.dsend(steps, '-', [1]);
      }
    }
    get nextFrame() {
      if (this[_nextFrameFuture] == null) {
        if (!(this[_nextFrameCompleter] == null)) dart.assertFailed(null, L0, 178, 14, "_nextFrameCompleter == null");
        let completer = CompleterOfnumL().sync();
        this[_nextFrameCompleter] = completer;
        this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
          this.init();
          this[_nextFrameId] = this[_window$][$requestAnimationFrame](dart.fn(highResTimer => {
            if (dart.test(completer.isCompleted)) return;
            if (dart.equals(completer, this[_nextFrameCompleter])) {
              this[_nextFrameFuture] = null;
              this[_nextFrameCompleter] = null;
            }
            completer.complete(highResTimer);
          }, numLToNull()));
        }, VoidToNull()));
        this[_nextFrameFuture] = new (ZonedFutureOfnumL()).new(completer.future, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
      }
      return this[_nextFrameFuture];
    }
    get onIdle() {
      if (this[_onIdleStream] == null) {
        this[_onIdleController] = StreamControllerOfNull().broadcast({sync: true, onListen: dart.bind(this, _resetIdleTimer), onCancel: dart.bind(this, _resetIdleTimer)});
        this[_onIdleStream] = new (ZonedStreamOfNull()).new(this[_onIdleController].stream, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
      }
      return this[_onIdleStream];
    }
    scheduleRead(fn) {
      if (this[_state] == dom_service.DomServiceState.Reading) {
        fn();
        return disposer.Disposable.Noop;
      }
      let callback = new disposable_callback.DisposableCallback.new(fn);
      this[_scheduleInQueue](dart.bind(callback, 'call'), this[_domReadQueue]);
      return callback;
    }
    scheduleWrite(fn) {
      if (this[_state] == dom_service.DomServiceState.Writing) {
        fn();
        return disposer.Disposable.Noop;
      }
      let callback = new disposable_callback.DisposableCallback.new(fn);
      this[_scheduleInQueue](dart.bind(callback, 'call'), this[_domWriteQueue]);
      return callback;
    }
    [_scheduleInQueue](fn, queue) {
      if (dart.test(dom_service.DomService.maintainZoneOnCallbacks)) {
        fn = async.Zone.current.bindCallback(dart.void, fn);
      }
      queue[$add](fn);
      this[_scheduleProcessQueue]();
    }
    onRead() {
      let completer = CompleterOfNull().sync();
      this.scheduleRead(dart.bind(completer, 'complete'));
      return new (ZonedFutureOfvoid()).new(completer.future, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
    }
    onWrite() {
      let completer = CompleterOfNull().sync();
      this.scheduleWrite(dart.bind(completer, 'complete'));
      return new (ZonedFutureOfvoid()).new(completer.future, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
    }
    [_processQueues]() {
      if (!(this[_state] == dom_service.DomServiceState.Idle)) dart.assertFailed(null, L0, 280, 12, "_state == DomServiceState.Idle");
      if (dart.test(this[_domReadQueue][$isEmpty]) && dart.test(this[_domWriteQueue][$isEmpty])) {
        this[_scheduledProcessQueue] = false;
        return;
      }
      this[_state] = dom_service.DomServiceState.Reading;
      this[_processQueue](this[_domReadQueue]);
      this[_state] = dom_service.DomServiceState.Writing;
      let previousWriteQueueLength = this[_processQueue](this[_domWriteQueue]);
      this[_writeQueueChangedLayout] = dart.notNull(previousWriteQueueLength) > 0;
      this[_state] = dom_service.DomServiceState.Idle;
      if (dart.test(this[_writeQueueChangedLayout])) {
        this[_scheduleOnLayoutChanged]();
      }
      this[_scheduledProcessQueue] = false;
      if (dart.test(this[_domReadQueue][$isNotEmpty]) || dart.test(this[_domWriteQueue][$isNotEmpty])) {
        this[_scheduleProcessQueue]();
      } else if (this[_onQueuesProcessedController] != null) {
        this[_onQueuesProcessedController].add(this);
      }
    }
    [_processQueue](queue) {
      let previousLength = queue[$length];
      for (let i = 0; i < dart.notNull(queue[$length]); i = i + 1) {
        let fn = queue[$_get](i);
        if (fn == null) continue;
        fn();
      }
      if (!(queue[$length] == previousLength)) dart.assertFailed(null, L0, 324, 12, "queue.length == previousLength");
      queue[$clear]();
      return previousLength;
    }
    get onQueuesProcessed() {
      if (this[_onQueuesProcessedStream] == null) {
        this[_onQueuesProcessedController] = StreamControllerOfDomServiceL().broadcast({sync: true});
        this[_onQueuesProcessedStream] = new (ZonedStreamOfDomServiceL()).new(this[_onQueuesProcessedController].stream, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
      }
      return this[_onQueuesProcessedStream];
    }
    get onLayoutChanged() {
      if (this[_onLayoutChangedStream] == null) {
        this[_onLayoutChangedController] = StreamControllerOfDomServiceL().broadcast({sync: true});
        this[_onLayoutChangedStream] = new (ZonedStreamOfDomServiceL()).new(this[_onLayoutChangedController].stream, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
        this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
          this[_ngZone$].onTurnStart.listen(dart.fn(_ => {
            if (this[_state] != dom_service.DomServiceState.Idle) return;
            this[_insideDigest] = true;
          }, voidToNull()));
          this[_ngZone$].onEventDone.listen(dart.fn(_ => {
            if (this[_state] != dom_service.DomServiceState.Idle) return;
            this[_insideDigest] = false;
            if (this.isDomMutatedPredicate == null || dart.test(this.isDomMutatedPredicate()) || dart.test(this[_writeQueueChangedLayout])) {
              this[_scheduleOnLayoutChanged]();
              this[_writeQueueChangedLayout] = false;
            }
          }, voidToNull()));
          this[_listenOnLayoutEvents](this[_window$][$onAnimationEnd]);
          this[_listenOnLayoutEvents](this[_window$][$onResize]);
          this[_listenOnLayoutEvents](this[_window$][$onTransitionEnd]);
          this[_window$][$addEventListener]("doms-turn", dart.fn(_ => {
            if (!dart.test(this[_inDispatchTurnDoneEvent])) {
              this[_scheduleOnLayoutChanged]();
            }
          }, EventLToNull()));
        }, VoidToNull()));
      }
      return this[_onLayoutChangedStream];
    }
    [_listenOnLayoutEvents](events) {
      if (events == null) return;
      events.listen(dart.fn(_ => this[_scheduleOnLayoutChanged](), ObjectLTovoid()));
    }
    trackLayoutChange(T, fn, callback, opts) {
      let framesToStabilize = opts && 'framesToStabilize' in opts ? opts.framesToStabilize : 1;
      let runInAngularZone = opts && 'runInAngularZone' in opts ? opts.runInAngularZone : false;
      let trackerCallback = callback;
      if (dart.test(runInAngularZone)) {
        trackerCallback = dart.fn(value => {
          this[_ngZone$].run(dart.void, dart.fn(() => callback(value), VoidTovoid()));
        }, dart.fnType(core.Null, [dart.legacy(T)]));
      }
      let tracker = new (dom_service._ChangeTracker$(dart.legacy(T))).new(this, fn, trackerCallback, framesToStabilize);
      return this.onLayoutChanged.listen(dart.fn(_ => tracker[_onLayoutObserve](), DomServiceLTovoid()));
    }
    addLayoutObserver(domReadCallback) {
      return this.onLayoutChanged.listen(dart.fn(_ => domReadCallback(), DomServiceLTovoid()));
    }
    describeStability() {
      return new (IdentityMapOfStringL$ObjectL()).from(["_insideDigest", this[_insideDigest], "_scheduledProcessQueue", this[_scheduledProcessQueue], "_layoutObserveRead", this[_layoutObserveRead] != null, "_nextFrameFuture", this[_nextFrameFuture] != null, "_domReadQueue", this[_domReadQueue][$length], "_domWriteQueue", this[_domWriteQueue][$length]])[$toString]();
    }
    get hasPendingUpdate() {
      return dart.test(this[_insideDigest]) || dart.test(this[_scheduledProcessQueue]) || this[_layoutObserveRead] != null || this[_nextFrameFuture] != null || dart.test(this[_domReadQueue][$isNotEmpty]) || dart.test(this[_domWriteQueue][$isNotEmpty]);
    }
    get isStable() {
      return !dart.test(this.hasPendingUpdate);
    }
    [_scheduleProcessQueue]() {
      if (!dart.test(this[_scheduledProcessQueue])) {
        this[_scheduledProcessQueue] = true;
        this.nextFrame.then(dart.void, dart.fn(_ => this[_processQueues](), numLTovoid()));
      }
    }
    requestLayoutFrame() {
      this[_scheduleOnLayoutChanged]();
    }
    [_scheduleOnLayoutChanged]() {
      let t0, t0$;
      if (this[_layoutObserveRead] != null) return;
      let hasLayoutListener = dart.equals((t0 = this[_onLayoutChangedController], t0 == null ? null : t0.hasListener), true);
      let hasIdleListener = dart.equals((t0$ = this[_onIdleController], t0$ == null ? null : t0$.hasListener), true);
      if (!hasLayoutListener && !hasIdleListener) return;
      if (dart.test(this.isReadingDom)) {
        this.scheduleWrite(dart.fn(() => {
        }, VoidToNull()));
        return;
      }
      this[_layoutObserveRead] = this.scheduleRead(dart.fn(() => {
        this[_layoutObserveRead] = null;
        if (this[_onLayoutChangedController] != null) {
          this[_onLayoutChangedController].add(this);
        }
        this[_resetIdleTimer]();
      }, VoidToNull()));
    }
    get state() {
      return this[_state];
    }
    [_resetIdleTimer]() {
      if (this[_onIdleController] == null) return;
      this[_idleTimerMillis] = dart.notNull(this[_idleTimerMillis]) + 100;
      this[_idleTimerMillis] = math.min(intL(), 4000, this[_idleTimerMillis]);
      this[_cancelIdleTimer]();
      if (!dart.test(this[_onIdleController].hasListener)) return;
      this[_rootZone].run(core.Null, dart.fn(() => {
        this[_idleTimerMillis] = math.max(intL(), 400, this[_idleTimerMillis]);
        this[_idleTimer] = async.Timer.new(new core.Duration.new({milliseconds: this[_idleTimerMillis]}), dart.fn(() => {
          this[_idleTimer] = null;
          this[_idleTimerMillis] = (dart.notNull(this[_idleTimerMillis]) / 2)[$truncate]();
          this[_onIdleController].add(null);
          this[_scheduleOnLayoutChanged]();
        }, VoidToNull()));
      }, VoidToNull()));
    }
    [_cancelIdleTimer]() {
      if (this[_idleTimer] != null) {
        this[_idleTimer].cancel();
        this[_idleTimer] = null;
      }
    }
    set rootZone(value) {
      this[_rootZone] = value;
    }
  };
  (dom_service.DomService.new = function(_ngZone, _window) {
    this[_domReadQueue] = JSArrayOfVoidToLvoid().of([]);
    this[_domWriteQueue] = JSArrayOfVoidToLvoid().of([]);
    this[_rootZone] = async.Zone.root;
    this[_insideDigest] = false;
    this[_layoutObserveRead] = null;
    this[_scheduledProcessQueue] = false;
    this[_onLayoutChangedController] = null;
    this[_onLayoutChangedStream] = null;
    this[_onQueuesProcessedController] = null;
    this[_onQueuesProcessedStream] = null;
    this[_nextFrameId] = -1;
    this[_nextFrameCompleter] = null;
    this[_nextFrameFuture] = null;
    this[_state] = dom_service.DomServiceState.Idle;
    this[_crossAppInitialized] = false;
    this[_onIdleController] = null;
    this[_onIdleStream] = null;
    this[_idleTimerMillis] = 4000;
    this[_idleTimer] = null;
    this[_inDispatchTurnDoneEvent] = false;
    this[isDomMutatedPredicate] = null;
    this[resetIsDomMutated] = null;
    this[_writeQueueChangedLayout] = false;
    this[_ngZone$] = _ngZone;
    this[_window$] = _window;
    ;
  }).prototype = dom_service.DomService.prototype;
  dart.addTypeTests(dom_service.DomService);
  dart.addTypeCaches(dom_service.DomService);
  dart.setMethodSignature(dom_service.DomService, () => ({
    __proto__: dart.getMethods(dom_service.DomService.__proto__),
    init: dart.fnType(dart.void, []),
    leap: dart.fnType(dart.void, [], {highResTimer: dart.legacy(core.num), steps: dart.dynamic}, {}),
    scheduleRead: dart.fnType(dart.legacy(disposer.Disposable), [dart.legacy(dart.fnType(dart.void, []))]),
    scheduleWrite: dart.fnType(dart.legacy(disposer.Disposable), [dart.legacy(dart.fnType(dart.void, []))]),
    [_scheduleInQueue]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [])), dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, []))))]),
    onRead: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    onWrite: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    [_processQueues]: dart.fnType(dart.void, []),
    [_processQueue]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, []))))]),
    [_listenOnLayoutEvents]: dart.fnType(dart.void, [dart.legacy(async.Stream$(dart.legacy(core.Object)))]),
    trackLayoutChange: dart.gFnType(T => [dart.legacy(async.StreamSubscription$(dart.legacy(dom_service.DomService))), [dart.legacy(dart.fnType(dart.legacy(T), [])), dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))], {framesToStabilize: dart.legacy(core.int), runInAngularZone: dart.legacy(core.bool)}, {}]),
    addLayoutObserver: dart.fnType(dart.legacy(async.StreamSubscription$(dart.legacy(dom_service.DomService))), [dart.legacy(dart.fnType(dart.void, []))]),
    describeStability: dart.fnType(dart.legacy(core.String), []),
    [_scheduleProcessQueue]: dart.fnType(dart.void, []),
    requestLayoutFrame: dart.fnType(dart.void, []),
    [_scheduleOnLayoutChanged]: dart.fnType(dart.void, []),
    [_resetIdleTimer]: dart.fnType(dart.void, []),
    [_cancelIdleTimer]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dom_service.DomService, () => ({
    __proto__: dart.getGetters(dom_service.DomService.__proto__),
    isReadingDom: dart.legacy(core.bool),
    isWritingDom: dart.legacy(core.bool),
    nextFrame: dart.legacy(async.Future$(dart.legacy(core.num))),
    onIdle: dart.legacy(async.Stream$(core.Null)),
    onQueuesProcessed: dart.legacy(async.Stream$(dart.legacy(dom_service.DomService))),
    onLayoutChanged: dart.legacy(async.Stream$(dart.legacy(dom_service.DomService))),
    hasPendingUpdate: dart.legacy(core.bool),
    isStable: dart.legacy(core.bool),
    state: dart.legacy(dom_service.DomServiceState)
  }));
  dart.setSetterSignature(dom_service.DomService, () => ({
    __proto__: dart.getSetters(dom_service.DomService.__proto__),
    rootZone: dart.legacy(async.Zone)
  }));
  dart.setLibraryUri(dom_service.DomService, L1);
  dart.setFieldSignature(dom_service.DomService, () => ({
    __proto__: dart.getFields(dom_service.DomService.__proto__),
    [_domReadQueue]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, []))))),
    [_domWriteQueue]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, []))))),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_window$]: dart.finalFieldType(dart.legacy(html.Window)),
    [_rootZone]: dart.fieldType(dart.legacy(async.Zone)),
    [_insideDigest]: dart.fieldType(dart.legacy(core.bool)),
    [_layoutObserveRead]: dart.fieldType(dart.legacy(disposer.Disposable)),
    [_scheduledProcessQueue]: dart.fieldType(dart.legacy(core.bool)),
    [_onLayoutChangedController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dom_service.DomService)))),
    [_onLayoutChangedStream]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(dom_service.DomService)))),
    [_onQueuesProcessedController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dom_service.DomService)))),
    [_onQueuesProcessedStream]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(dom_service.DomService)))),
    [_nextFrameId]: dart.fieldType(dart.legacy(core.int)),
    [_nextFrameCompleter]: dart.fieldType(dart.legacy(async.Completer$(dart.legacy(core.num)))),
    [_nextFrameFuture]: dart.fieldType(dart.legacy(async.Future$(dart.legacy(core.num)))),
    [_state]: dart.fieldType(dart.legacy(dom_service.DomServiceState)),
    [_crossAppInitialized]: dart.fieldType(dart.legacy(core.bool)),
    [_onIdleController]: dart.fieldType(dart.legacy(async.StreamController$(core.Null))),
    [_onIdleStream]: dart.fieldType(dart.legacy(async.Stream$(core.Null))),
    [_idleTimerMillis]: dart.fieldType(dart.legacy(core.int)),
    [_idleTimer]: dart.fieldType(dart.legacy(async.Timer)),
    [_inDispatchTurnDoneEvent]: dart.fieldType(dart.legacy(core.bool)),
    isDomMutatedPredicate: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), []))),
    resetIsDomMutated: dart.fieldType(dart.legacy(core.Function)),
    [_writeQueueChangedLayout]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(dom_service.DomService, {
    /*dom_service.DomService.maintainZoneOnCallbacks*/get maintainZoneOnCallbacks() {
      return true;
    },
    set maintainZoneOnCallbacks(_) {},
    /*dom_service.DomService._TURN_DONE_EVENT_TYPE*/get _TURN_DONE_EVENT_TYPE() {
      return "doms-turn";
    },
    /*dom_service.DomService._MAX_IDLE_TIMER_MILLIS*/get _MAX_IDLE_TIMER_MILLIS() {
      return 4000;
    },
    /*dom_service.DomService._MIN_IDLE_TIMER_MILLIS*/get _MIN_IDLE_TIMER_MILLIS() {
      return 400;
    },
    /*dom_service.DomService._IDLE_TIMER_INC_MILLIS*/get _IDLE_TIMER_INC_MILLIS() {
      return 100;
    }
  }, true);
  var _name$ = dart.privateName(dom_service, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  dom_service.DomServiceState = class DomServiceState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (dom_service.DomServiceState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = dom_service.DomServiceState.prototype;
  dart.addTypeTests(dom_service.DomServiceState);
  dart.addTypeCaches(dom_service.DomServiceState);
  dart.setMethodSignature(dom_service.DomServiceState, () => ({
    __proto__: dart.getMethods(dom_service.DomServiceState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(dom_service.DomServiceState, L1);
  dart.setFieldSignature(dom_service.DomServiceState, () => ({
    __proto__: dart.getFields(dom_service.DomServiceState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(dom_service.DomServiceState, ['toString']);
  dom_service.DomServiceState.Idle = C0 || CT.C0;
  dom_service.DomServiceState.Writing = C1 || CT.C1;
  dom_service.DomServiceState.Reading = C2 || CT.C2;
  dom_service.DomServiceState.values = C3 || CT.C3;
  var _lastValue = dart.privateName(dom_service, "_lastValue");
  var _stableFrameCounter = dart.privateName(dom_service, "_stableFrameCounter");
  var _domService$ = dart.privateName(dom_service, "_domService");
  var _fn$ = dart.privateName(dom_service, "_fn");
  var _callback$ = dart.privateName(dom_service, "_callback");
  var _framesToStabilize$ = dart.privateName(dom_service, "_framesToStabilize");
  const _is__ChangeTracker_default = Symbol('_is__ChangeTracker_default');
  dom_service._ChangeTracker$ = dart.generic(T => {
    class _ChangeTracker extends core.Object {
      [_onLayoutObserve]() {
        let value = this[_fn$]();
        if (!dart.equals(value, this[_lastValue])) {
          this[_lastValue] = value;
          this[_stableFrameCounter] = this[_framesToStabilize$];
        }
        if (this[_stableFrameCounter] === 0) return;
        this[_stableFrameCounter] = dart.notNull(this[_stableFrameCounter]) - 1;
        if (this[_stableFrameCounter] === 0) {
          this[_domService$].scheduleRead(dart.fn(() => {
            let t0;
            t0 = this[_lastValue];
            this[_callback$](t0);
          }, VoidToNull()));
        } else {
          this[_domService$].requestLayoutFrame();
        }
      }
    }
    (_ChangeTracker.new = function(_domService, _fn, _callback, _framesToStabilize) {
      this[_lastValue] = null;
      this[_stableFrameCounter] = 0;
      this[_domService$] = _domService;
      this[_fn$] = _fn;
      this[_callback$] = _callback;
      this[_framesToStabilize$] = _framesToStabilize;
      if (!(dart.notNull(this[_framesToStabilize$]) > 0)) dart.assertFailed(null, L0, 554, 12, "_framesToStabilize > 0");
    }).prototype = _ChangeTracker.prototype;
    dart.addTypeTests(_ChangeTracker);
    _ChangeTracker.prototype[_is__ChangeTracker_default] = true;
    dart.addTypeCaches(_ChangeTracker);
    dart.setMethodSignature(_ChangeTracker, () => ({
      __proto__: dart.getMethods(_ChangeTracker.__proto__),
      [_onLayoutObserve]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ChangeTracker, L1);
    dart.setFieldSignature(_ChangeTracker, () => ({
      __proto__: dart.getFields(_ChangeTracker.__proto__),
      [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
      [_fn$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(T), []))),
      [_callback$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))),
      [_framesToStabilize$]: dart.finalFieldType(dart.legacy(core.int)),
      [_lastValue]: dart.fieldType(dart.legacy(T)),
      [_stableFrameCounter]: dart.fieldType(dart.legacy(core.int))
    }));
    return _ChangeTracker;
  });
  dom_service._ChangeTracker = dom_service._ChangeTracker$();
  dart.addTypeTests(dom_service._ChangeTracker, _is__ChangeTracker_default);
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service", {
    "package:angular_components/utils/browser/dom_service/dom_service.dart": dom_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_service.dart"],"names":[],"mappings":"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","file":"dom_service.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service: dom_service
  };
}));

//# sourceMappingURL=dom_service.unsound.ddc.js.map
