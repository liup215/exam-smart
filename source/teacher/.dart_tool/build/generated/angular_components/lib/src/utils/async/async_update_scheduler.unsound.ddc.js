define(['dart_sdk', 'packages/collection/src/priority_queue', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils'], (function load__packages__angular_components__src__utils__async__async_update_scheduler(dart_sdk, packages__collection__src__priority_queue, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__rate_limit_utils__rate_limit_utils) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const priority_queue = packages__collection__src__priority_queue.src__priority_queue;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const rate_limit_utils = packages__angular_components__utils__rate_limit_utils__rate_limit_utils.utils__rate_limit_utils__rate_limit_utils;
  var async_update_scheduler = Object.create(dart.library);
  var simple_stream = Object.create(dart.library);
  var rate_limit = Object.create(dart.library);
  var async_where = Object.create(dart.library);
  var priority_stream_iterator = Object.create(dart.library);
  var lazy_stream_controller = Object.create(dart.library);
  var disposable_future = Object.create(dart.library);
  var debounce_stream = Object.create(dart.library);
  var zoned_async = Object.create(dart.library);
  var throttle_stream = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $forEach = dartx.forEach;
  var $remove = dartx.remove;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $compareTo = dartx.compareTo;
  var StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var SimpleStreamSubscriptionOfNull = () => (SimpleStreamSubscriptionOfNull = dart.constFn(simple_stream.SimpleStreamSubscription$(core.Null)))();
  var SimpleStreamSubscriptionLOfNull = () => (SimpleStreamSubscriptionLOfNull = dart.constFn(dart.legacy(SimpleStreamSubscriptionOfNull())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLAndObjectLToObjectL = () => (ObjectLAndObjectLToObjectL = dart.constFn(dart.fnType(ObjectL(), [ObjectL(), ObjectL()])))();
  var ObjectLAndObjectLToLObjectL = () => (ObjectLAndObjectLToLObjectL = dart.constFn(dart.legacy(ObjectLAndObjectLToObjectL())))();
  var ObjectLToObjectL = () => (ObjectLToObjectL = dart.constFn(dart.fnType(ObjectL(), [ObjectL()])))();
  var ObjectLToLObjectL = () => (ObjectLToLObjectL = dart.constFn(dart.legacy(ObjectLToObjectL())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var SimpleStreamL = () => (SimpleStreamL = dart.constFn(dart.legacy(simple_stream.SimpleStream)))();
  var JSArrayOfSimpleStreamL = () => (JSArrayOfSimpleStreamL = dart.constFn(_interceptors.JSArray$(SimpleStreamL())))();
  var _RateLimitSinkL = () => (_RateLimitSinkL = dart.constFn(dart.legacy(rate_limit._RateLimitSink)))();
  var EventSinkL = () => (EventSinkL = dart.constFn(dart.legacy(async.EventSink)))();
  var EventSinkLTo_RateLimitSinkL = () => (EventSinkLTo_RateLimitSinkL = dart.constFn(dart.fnType(_RateLimitSinkL(), [EventSinkL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var boolLToboolL = () => (boolLToboolL = dart.constFn(dart.fnType(boolL(), [boolL()])))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  var VoidToLdynamic = () => (VoidToLdynamic = dart.constFn(dart.legacy(VoidTodynamic())))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var DurationL = () => (DurationL = dart.constFn(dart.legacy(core.Duration)))();
  var FnAndDurationLToFn = () => (FnAndDurationLToFn = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var TLToFutureL = () => (TLToFutureL = dart.constFn(dart.fnType(FutureL(), [TL()])))();
    var TLToLFutureL = () => (TLToLFutureL = dart.constFn(dart.legacy(TLToFutureL())))();
    var TLTodynamic = () => (TLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [TL()])))();
    var TLToLdynamic = () => (TLToLdynamic = dart.constFn(dart.legacy(TLTodynamic())))();
    return [TLToLFutureL(), [TLToLdynamic(), DurationL()]];
  })))();
  var FnAndDurationLToFn$ = () => (FnAndDurationLToFn$ = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var TLTodynamic = () => (TLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [TL()])))();
    var TLToLdynamic = () => (TLToLdynamic = dart.constFn(dart.legacy(TLTodynamic())))();
    return [TLToLdynamic(), [TLToLdynamic(), DurationL()]];
  })))();
  const CT = Object.create(null);
  var L3 = "package:angular_components/src/utils/async/rate_limit.dart";
  var L5 = "package:angular_components/src/utils/async/lazy_stream_controller.dart";
  var L0 = "package:angular_components/src/utils/async/async_update_scheduler.dart";
  var L4 = "package:angular_components/src/utils/async/priority_stream_iterator.dart";
  var L6 = "package:angular_components/src/utils/async/disposable_future.dart";
  var L2 = "package:angular_components/src/utils/async/simple_stream.dart";
  var L1 = "org-dartlang-app:///packages/angular_components/src/utils/async/simple_stream.dart";
  var L7 = "package:angular_components/src/utils/async/zoned_async.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], SimpleStreamSubscriptionLOfNull());
    },
    get C1() {
      return C1 = dart.fn(simple_stream.SimpleStream._cleanupTask, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(rate_limit_utils.debounce, FnAndDurationLToFn());
    },
    get C3() {
      return C3 = dart.fn(rate_limit_utils.throttleGuaranteeLast, FnAndDurationLToFn$());
    },
    get C4() {
      return C4 = dart.fn(rate_limit_utils.throttle, FnAndDurationLToFn$());
    }
  }, false);
  var _isUpdateScheduled = dart.privateName(async_update_scheduler, "_isUpdateScheduled");
  var _onUpdateStreamController = dart.privateName(async_update_scheduler, "_onUpdateStreamController");
  var _updateCallback$ = dart.privateName(async_update_scheduler, "_updateCallback");
  async_update_scheduler.AsyncUpdateScheduler = class AsyncUpdateScheduler extends core.Object {
    get onUpdate() {
      if (this[_onUpdateStreamController] == null) {
        this[_onUpdateStreamController] = StreamControllerOfNull().broadcast({sync: true});
      }
      return this[_onUpdateStreamController].stream;
    }
    scheduleUpdate() {
      if (!dart.test(this[_isUpdateScheduled])) {
        this[_isUpdateScheduled] = true;
        async.scheduleMicrotask(dart.fn(() => {
          this[_isUpdateScheduled] = false;
          if (this[_updateCallback$] != null) {
            this[_updateCallback$]();
          }
          if (this[_onUpdateStreamController] != null) {
            this[_onUpdateStreamController].add(null);
          }
        }, VoidToNull()));
      }
    }
  };
  (async_update_scheduler.AsyncUpdateScheduler.new = function(_updateCallback = null) {
    this[_isUpdateScheduled] = false;
    this[_onUpdateStreamController] = null;
    this[_updateCallback$] = _updateCallback;
    ;
  }).prototype = async_update_scheduler.AsyncUpdateScheduler.prototype;
  dart.addTypeTests(async_update_scheduler.AsyncUpdateScheduler);
  dart.addTypeCaches(async_update_scheduler.AsyncUpdateScheduler);
  dart.setMethodSignature(async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getMethods(async_update_scheduler.AsyncUpdateScheduler.__proto__),
    scheduleUpdate: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getGetters(async_update_scheduler.AsyncUpdateScheduler.__proto__),
    onUpdate: dart.legacy(async.Stream$(core.Null))
  }));
  dart.setLibraryUri(async_update_scheduler.AsyncUpdateScheduler, L0);
  dart.setFieldSignature(async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getFields(async_update_scheduler.AsyncUpdateScheduler.__proto__),
    [_updateCallback$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
    [_isUpdateScheduled]: dart.fieldType(dart.legacy(core.bool)),
    [_onUpdateStreamController]: dart.fieldType(dart.legacy(async.StreamController$(core.Null)))
  }));
  var _subscriptions = dart.privateName(simple_stream, "_subscriptions");
  var C0;
  var _itemsToSend = dart.privateName(simple_stream, "_itemsToSend");
  var _subscriptionRemoved = dart.privateName(simple_stream, "_subscriptionRemoved");
  var _onCancel = dart.privateName(simple_stream, "_onCancel");
  var _onListen = dart.privateName(simple_stream, "_onListen");
  var _isSync = dart.privateName(simple_stream, "_isSync");
  var _runInZone = dart.privateName(simple_stream, "_runInZone");
  var _sendItem = dart.privateName(simple_stream, "_sendItem");
  var _sendAsync = dart.privateName(simple_stream, "_sendAsync");
  var _cleanUp = dart.privateName(simple_stream, "_cleanUp");
  var _stream$ = dart.privateName(simple_stream, "_stream");
  var _add = dart.privateName(simple_stream, "_add");
  var _onError$ = dart.privateName(simple_stream, "_onError");
  var _cancelOnError$ = dart.privateName(simple_stream, "_cancelOnError");
  var _closeSubscription = dart.privateName(simple_stream, "_closeSubscription");
  var C1;
  var _scheduleCleanup = dart.privateName(simple_stream, "_scheduleCleanup");
  const _is_SimpleStream_default = Symbol('_is_SimpleStream_default');
  var isBroadcast = dart.privateName(simple_stream, "SimpleStream.isBroadcast");
  simple_stream.SimpleStream$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    var SimpleStreamSubscriptionOfTL = () => (SimpleStreamSubscriptionOfTL = dart.constFn(simple_stream.SimpleStreamSubscription$(TL())))();
    var SimpleStreamSubscriptionLOfTL = () => (SimpleStreamSubscriptionLOfTL = dart.constFn(dart.legacy(SimpleStreamSubscriptionOfTL())))();
    var JSArrayOfSimpleStreamSubscriptionLOfTL = () => (JSArrayOfSimpleStreamSubscriptionLOfTL = dart.constFn(_interceptors.JSArray$(SimpleStreamSubscriptionLOfTL())))();
    class SimpleStream extends async.Stream$(dart.legacy(T)) {
      get isBroadcast() {
        return this[isBroadcast];
      }
      set isBroadcast(value) {
        super.isBroadcast = value;
      }
      get isSync() {
        return this[_isSync];
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        if (onListen != null || onCancel != null) {
          dart.throw(new core.UnsupportedError.new("Not supported outside constructor."));
        }
        return this;
      }
      get stream() {
        return this;
      }
      add(item) {
        TL().as(item);
        if (!dart.test(this.hasListener)) return;
        if (dart.test(this[_isSync])) {
          this[_sendItem](this[_subscriptions], item);
        } else {
          if (this[_itemsToSend] == null) {
            this[_itemsToSend] = JSArrayOfTL().of([]);
            async.scheduleMicrotask(dart.bind(this, _sendAsync));
          }
          this[_itemsToSend][$add](item);
        }
      }
      static _cleanupTask() {
        for (let i = 0; i < dart.notNull(simple_stream.SimpleStream._cleanupStreams[$length]); i = i + 1) {
          simple_stream.SimpleStream._cleanupStreams[$_get](i)[_cleanUp]();
        }
        simple_stream.SimpleStream._cleanupStreams[$clear]();
      }
      [_cleanUp]() {
        let t0, t0$;
        if (dart.test(this.hasListener)) {
          let listeners = this[_subscriptions];
          if (!dart.test(listeners[$isNotEmpty])) dart.assertFailed(null, L1, 132, 14, "listeners.isNotEmpty");
          for (let liveCount = 0; liveCount < dart.notNull(listeners[$length]); liveCount = liveCount + 1) {
            let firstRemovedListener = listeners[$_get](liveCount);
            if (firstRemovedListener[_stream$] != null) continue;
            for (let i = liveCount + 1; i < dart.notNull(listeners[$length]); i = i + 1) {
              let listener = listeners[$_get](i);
              if (listener[_stream$] != null) {
                listeners[$_set]((t0 = liveCount, liveCount = t0 + 1, t0), listener);
              }
            }
            listeners[$length] = liveCount;
            if (liveCount === 0 && this[_onCancel] != null) {
              t0$ = firstRemovedListener;
              this[_onCancel](t0$);
            }
            break;
          }
        }
        this[_subscriptionRemoved] = false;
      }
      [_sendItem](listeners, item, len = -1) {
        if (len === -1) {
          len = listeners[$length];
        }
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          listeners[$_get](i)[_add](item);
        }
      }
      addError(errorEvent, stackTrace = null) {
        if (!dart.test(this.hasListener)) return;
        let listeners = this[_subscriptions];
        let len = listeners[$length];
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          let sub = listeners[$_get](i);
          let callback = sub[_onError$];
          if (dart.equals(sub[_cancelOnError$], true)) {
            sub[_closeSubscription]();
          }
          if (callback != null) {
            if (ObjectLAndObjectLToLObjectL().is(callback)) {
              callback(errorEvent, stackTrace);
            } else if (ObjectLToLObjectL().is(callback)) {
              callback(errorEvent);
            }
          }
        }
      }
      close() {
        if (this[_subscriptions] != null) {
          let listeners = this[_subscriptions];
          this[_subscriptions] = null;
          for (let i = 0; i < dart.notNull(listeners[$length]); i = i + 1) {
            listeners[$_get](i)[_closeSubscription]();
          }
        }
      }
      get isClosed() {
        return this[_subscriptions] == null;
      }
      get hasListener() {
        return this[_subscriptions] != null && dart.test(this[_subscriptions][$isNotEmpty]);
      }
      [_sendAsync]() {
        let listeners = this[_subscriptions];
        let sendList = this[_itemsToSend];
        this[_itemsToSend] = null;
        if (listeners != null) {
          let len = listeners[$length];
          for (let i = 0; i < dart.notNull(sendList[$length]); i = i + 1) {
            let item = sendList[$_get](i);
            this[_sendItem](listeners, item, len);
          }
        }
      }
      [_scheduleCleanup]() {
        if (!dart.test(this[_subscriptionRemoved])) {
          this[_subscriptionRemoved] = true;
          simple_stream.SimpleStream._cleanupStreams[$add](this);
          if (simple_stream.SimpleStream._cleanupStreams[$length] === 1) {
            async.scheduleMicrotask(C1 || CT.C1);
          }
        }
      }
      listen(onData, opts) {
        let t0;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (!(this[_subscriptions] != null)) dart.assertFailed(null, L1, 252, 12, "_subscriptions != null");
        let contextZone = null;
        if (dart.test(this[_runInZone])) {
          contextZone = async.Zone.current;
        }
        let sub = new (SimpleStreamSubscriptionOfTL()).new(this, onData, onDone, onError, cancelOnError, contextZone);
        if (dart.test(this[_subscriptions][$isEmpty])) {
          this[_subscriptions] = JSArrayOfSimpleStreamSubscriptionLOfTL().of([sub]);
        } else {
          this[_subscriptions][$add](sub);
        }
        if (this[_onListen] != null && this[_subscriptions][$length] === 1) {
          t0 = sub;
          this[_onListen](t0);
        }
        return sub;
      }
    }
    (SimpleStream.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      this[isBroadcast] = true;
      this[_subscriptions] = C0 || CT.C0;
      this[_itemsToSend] = null;
      this[_subscriptionRemoved] = false;
      this[_onCancel] = null;
      this[_onListen] = null;
      this[_isSync] = isSync;
      this[_runInZone] = runInZone;
      SimpleStream.__proto__.new.call(this);
      ;
    }).prototype = SimpleStream.prototype;
    (SimpleStream.broadcast = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[isBroadcast] = true;
      this[_subscriptions] = C0 || CT.C0;
      this[_itemsToSend] = null;
      this[_subscriptionRemoved] = false;
      this[_isSync] = isSync;
      this[_runInZone] = runInZone;
      this[_onListen] = onListen;
      this[_onCancel] = onCancel;
      SimpleStream.__proto__.new.call(this);
      ;
    }).prototype = SimpleStream.prototype;
    dart.addTypeTests(SimpleStream);
    SimpleStream.prototype[_is_SimpleStream_default] = true;
    dart.addTypeCaches(SimpleStream);
    SimpleStream[dart.implements] = () => [async.EventSink$(dart.legacy(T))];
    dart.setMethodSignature(SimpleStream, () => ({
      __proto__: dart.getMethods(SimpleStream.__proto__),
      asBroadcastStream: dart.fnType(dart.legacy(async.Stream$(dart.legacy(T))), [], {onCancel: dart.legacy(dart.fnType(dart.void, [dart.legacy(async.StreamSubscription$(dart.legacy(T)))])), onListen: dart.legacy(dart.fnType(dart.void, [dart.legacy(async.StreamSubscription$(dart.legacy(T)))]))}, {}),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [_cleanUp]: dart.fnType(dart.void, []),
      [_sendItem]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(simple_stream.SimpleStreamSubscription$(dart.legacy(T))))), dart.legacy(T)], [dart.legacy(core.int)]),
      addError: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(core.StackTrace)]),
      close: dart.fnType(dart.void, []),
      [_sendAsync]: dart.fnType(dart.void, []),
      [_scheduleCleanup]: dart.fnType(dart.void, []),
      listen: dart.fnType(dart.legacy(async.StreamSubscription$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))], {cancelOnError: dart.legacy(core.bool), onDone: dart.legacy(dart.fnType(dart.void, [])), onError: dart.legacy(core.Function)}, {})
    }));
    dart.setGetterSignature(SimpleStream, () => ({
      __proto__: dart.getGetters(SimpleStream.__proto__),
      isSync: dart.legacy(core.bool),
      stream: dart.legacy(async.Stream$(dart.legacy(T))),
      isClosed: dart.legacy(core.bool),
      hasListener: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(SimpleStream, L2);
    dart.setFieldSignature(SimpleStream, () => ({
      __proto__: dart.getFields(SimpleStream.__proto__),
      [_isSync]: dart.finalFieldType(dart.legacy(core.bool)),
      [_runInZone]: dart.finalFieldType(dart.legacy(core.bool)),
      [_onListen]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(async.StreamSubscription$(dart.legacy(T)))]))),
      [_onCancel]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(async.StreamSubscription$(dart.legacy(T)))]))),
      isBroadcast: dart.finalFieldType(dart.legacy(core.bool)),
      [_subscriptions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(simple_stream.SimpleStreamSubscription$(dart.legacy(T)))))),
      [_itemsToSend]: dart.fieldType(dart.legacy(core.List$(dart.legacy(T)))),
      [_subscriptionRemoved]: dart.fieldType(dart.legacy(core.bool))
    }));
    return SimpleStream;
  });
  simple_stream.SimpleStream = simple_stream.SimpleStream$();
  dart.defineLazy(simple_stream.SimpleStream, {
    /*simple_stream.SimpleStream._cleanupStreams*/get _cleanupStreams() {
      return JSArrayOfSimpleStreamL().of([]);
    },
    set _cleanupStreams(_) {}
  }, true);
  dart.addTypeTests(simple_stream.SimpleStream, _is_SimpleStream_default);
  var _lastItem = dart.privateName(simple_stream, "_lastItem");
  const _is_LastStateStream_default = Symbol('_is_LastStateStream_default');
  simple_stream.LastStateStream$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SimpleStreamSubscriptionOfTL = () => (SimpleStreamSubscriptionOfTL = dart.constFn(simple_stream.SimpleStreamSubscription$(TL())))();
    var SimpleStreamSubscriptionLOfTL = () => (SimpleStreamSubscriptionLOfTL = dart.constFn(dart.legacy(SimpleStreamSubscriptionOfTL())))();
    var JSArrayOfSimpleStreamSubscriptionLOfTL = () => (JSArrayOfSimpleStreamSubscriptionLOfTL = dart.constFn(_interceptors.JSArray$(SimpleStreamSubscriptionLOfTL())))();
    class LastStateStream extends simple_stream.SimpleStream$(dart.legacy(T)) {
      add(item) {
        TL().as(item);
        this[_lastItem] = item;
        super.add(item);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let sub = SimpleStreamSubscriptionLOfTL().as(super.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError}));
        if (this[_lastItem] != null) {
          if (dart.test(this[_isSync])) {
            this[_sendItem](JSArrayOfSimpleStreamSubscriptionLOfTL().of([sub]), this[_lastItem]);
          } else if (this[_itemsToSend] == null) {
            async.scheduleMicrotask(dart.fn(() => {
              this[_sendItem](JSArrayOfSimpleStreamSubscriptionLOfTL().of([sub]), this[_lastItem]);
            }, VoidToNull()));
          }
        }
        return sub;
      }
    }
    (LastStateStream.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_lastItem] = null;
      LastStateStream.__proto__.broadcast.call(this, {isSync: isSync, runInZone: runInZone, onListen: onListen, onCancel: onCancel});
      ;
    }).prototype = LastStateStream.prototype;
    dart.addTypeTests(LastStateStream);
    LastStateStream.prototype[_is_LastStateStream_default] = true;
    dart.addTypeCaches(LastStateStream);
    dart.setLibraryUri(LastStateStream, L2);
    dart.setFieldSignature(LastStateStream, () => ({
      __proto__: dart.getFields(LastStateStream.__proto__),
      [_lastItem]: dart.fieldType(dart.legacy(T))
    }));
    return LastStateStream;
  });
  simple_stream.LastStateStream = simple_stream.LastStateStream$();
  dart.addTypeTests(simple_stream.LastStateStream, _is_LastStateStream_default);
  const _is_EmptySimpleStream_default = Symbol('_is_EmptySimpleStream_default');
  simple_stream.EmptySimpleStream$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SimpleStreamSubscriptionOfTL = () => (SimpleStreamSubscriptionOfTL = dart.constFn(simple_stream.SimpleStreamSubscription$(TL())))();
    class EmptySimpleStream extends simple_stream.SimpleStream$(dart.legacy(T)) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return SimpleStreamSubscriptionOfTL()._empty();
      }
    }
    (EmptySimpleStream.new = function(isSync = false) {
      EmptySimpleStream.__proto__.new.call(this, {isSync: isSync});
      ;
    }).prototype = EmptySimpleStream.prototype;
    dart.addTypeTests(EmptySimpleStream);
    EmptySimpleStream.prototype[_is_EmptySimpleStream_default] = true;
    dart.addTypeCaches(EmptySimpleStream);
    dart.setLibraryUri(EmptySimpleStream, L2);
    return EmptySimpleStream;
  });
  simple_stream.EmptySimpleStream = simple_stream.EmptySimpleStream$();
  dart.addTypeTests(simple_stream.EmptySimpleStream, _is_EmptySimpleStream_default);
  var _callback$ = dart.privateName(simple_stream, "_callback");
  var _doneCallback$ = dart.privateName(simple_stream, "_doneCallback");
  var _contextZone$ = dart.privateName(simple_stream, "_contextZone");
  const _is_SimpleStreamSubscription_default = Symbol('_is_SimpleStreamSubscription_default');
  var isPaused = dart.privateName(simple_stream, "SimpleStreamSubscription.isPaused");
  simple_stream.SimpleStreamSubscription$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class SimpleStreamSubscription extends core.Object {
      get isPaused() {
        return this[isPaused];
      }
      set isPaused(value) {
        super.isPaused = value;
      }
      static _empty() {
        return new (simple_stream.SimpleStreamSubscription$(dart.legacy(T))).new(null, null, null, null, false, null);
      }
      cancel() {
        if (this[_stream$] != null) {
          let stream = this[_stream$];
          this[_doneCallback$] = null;
          this[_closeSubscription]();
          stream[_scheduleCleanup]();
        }
        return null;
      }
      [_closeSubscription]() {
        this[_stream$] = null;
        this[_callback$] = null;
        this[_onError$] = null;
        if (this[_doneCallback$] != null) {
          dart.dsend(this, _doneCallback$, []);
          this[_doneCallback$] = null;
        }
      }
      [_add](data) {
        let t0;
        TL().as(data);
        if (this[_callback$] != null) {
          if (this[_contextZone$] != null) {
            this[_contextZone$].runUnary(dart.void, TL(), this[_callback$], data);
          } else {
            t0 = data;
            this[_callback$](t0);
          }
        }
      }
      onData(handleData) {
        if (this[_stream$] != null) {
          this[_callback$] = handleData;
        }
      }
      onError(handleError) {
        if (this[_stream$] != null) {
          this[_onError$] = handleError;
        }
      }
      onDone(handleDone) {
        if (this[_stream$] != null) {
          this[_doneCallback$] = handleDone;
        }
      }
      pause(resumeSignal = null) {
        return dart.throw(new core.UnsupportedError.new("Not supported."));
      }
      resume() {
        dart.throw(new core.UnsupportedError.new("Not supported."));
      }
      asFuture(S, futureValue = null) {
        dart.throw(new core.UnsupportedError.new("Not supported."));
      }
    }
    (SimpleStreamSubscription.new = function(_stream, _callback, _doneCallback, _onError, _cancelOnError, _contextZone) {
      this[isPaused] = false;
      this[_cancelOnError$] = false;
      this[_stream$] = _stream;
      this[_callback$] = _callback;
      this[_doneCallback$] = _doneCallback;
      this[_onError$] = _onError;
      this[_cancelOnError$] = _cancelOnError;
      this[_contextZone$] = _contextZone;
      ;
    }).prototype = SimpleStreamSubscription.prototype;
    SimpleStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(SimpleStreamSubscription);
    SimpleStreamSubscription.prototype[_is_SimpleStreamSubscription_default] = true;
    dart.addTypeCaches(SimpleStreamSubscription);
    SimpleStreamSubscription[dart.implements] = () => [async.StreamSubscription$(dart.legacy(T))];
    dart.setMethodSignature(SimpleStreamSubscription, () => ({
      __proto__: dart.getMethods(SimpleStreamSubscription.__proto__),
      cancel: dart.fnType(dart.legacy(async.Future), []),
      [_closeSubscription]: dart.fnType(dart.void, []),
      [_add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      onData: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))]),
      onError: dart.fnType(dart.void, [dart.legacy(core.Function)]),
      onDone: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
      pause: dart.fnType(dart.void, [], [dart.legacy(async.Future$(dart.void))]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(S => [dart.legacy(async.Future$(dart.legacy(S))), [], [dart.legacy(S)]])
    }));
    dart.setLibraryUri(SimpleStreamSubscription, L2);
    dart.setFieldSignature(SimpleStreamSubscription, () => ({
      __proto__: dart.getFields(SimpleStreamSubscription.__proto__),
      isPaused: dart.finalFieldType(dart.legacy(core.bool)),
      [_stream$]: dart.fieldType(dart.legacy(simple_stream.SimpleStream$(dart.legacy(T)))),
      [_callback$]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))),
      [_contextZone$]: dart.fieldType(dart.legacy(async.Zone)),
      [_doneCallback$]: dart.fieldType(dart.legacy(core.Function)),
      [_onError$]: dart.fieldType(dart.legacy(core.Function)),
      [_cancelOnError$]: dart.fieldType(dart.legacy(core.bool))
    }));
    return SimpleStreamSubscription;
  });
  simple_stream.SimpleStreamSubscription = simple_stream.SimpleStreamSubscription$();
  dart.addTypeTests(simple_stream.SimpleStreamSubscription, _is_SimpleStreamSubscription_default);
  const _is_SimpleEmitter_default = Symbol('_is_SimpleEmitter_default');
  simple_stream.SimpleEmitter$ = dart.generic(T => {
    class SimpleEmitter extends simple_stream.SimpleStream$(dart.legacy(T)) {
      get sink() {
        return this;
      }
    }
    (SimpleEmitter.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : true;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : true;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      SimpleEmitter.__proto__.broadcast.call(this, {isSync: isSync, runInZone: runInZone, onListen: onListen, onCancel: onCancel});
      ;
    }).prototype = SimpleEmitter.prototype;
    dart.addTypeTests(SimpleEmitter);
    SimpleEmitter.prototype[_is_SimpleEmitter_default] = true;
    dart.addTypeCaches(SimpleEmitter);
    dart.setGetterSignature(SimpleEmitter, () => ({
      __proto__: dart.getGetters(SimpleEmitter.__proto__),
      sink: dart.legacy(async.EventSink$(dart.legacy(T)))
    }));
    dart.setLibraryUri(SimpleEmitter, L2);
    return SimpleEmitter;
  });
  simple_stream.SimpleEmitter = simple_stream.SimpleEmitter$();
  dart.addTypeTests(simple_stream.SimpleEmitter, _is_SimpleEmitter_default);
  var _addEvent = dart.privateName(rate_limit, "_addEvent");
  var _outputSink$ = dart.privateName(rate_limit, "_outputSink");
  var _duration$ = dart.privateName(rate_limit, "_duration");
  var _rateLimitStrategy$ = dart.privateName(rate_limit, "_rateLimitStrategy");
  rate_limit._RateLimitSink = class _RateLimitSink extends core.Object {
    add(event) {
      let t0;
      t0 = event;
      this[_addEvent](t0);
    }
    addError(error, stackTrace = null) {
      this[_outputSink$].addError(error, stackTrace);
    }
    close() {
      this[_outputSink$].close();
    }
  };
  (rate_limit._RateLimitSink.new = function(_outputSink, _duration, _rateLimitStrategy) {
    let t1, t0;
    this[_addEvent] = null;
    this[_outputSink$] = _outputSink;
    this[_duration$] = _duration;
    this[_rateLimitStrategy$] = _rateLimitStrategy;
    this[_addEvent] = (t0 = dart.bind(this[_outputSink$], 'add'), t1 = this[_duration$], this[_rateLimitStrategy$](t0, t1));
  }).prototype = rate_limit._RateLimitSink.prototype;
  dart.addTypeTests(rate_limit._RateLimitSink);
  dart.addTypeCaches(rate_limit._RateLimitSink);
  rate_limit._RateLimitSink[dart.implements] = () => [async.EventSink];
  dart.setMethodSignature(rate_limit._RateLimitSink, () => ({
    __proto__: dart.getMethods(rate_limit._RateLimitSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addError: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(core.StackTrace)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(rate_limit._RateLimitSink, L3);
  dart.setFieldSignature(rate_limit._RateLimitSink, () => ({
    __proto__: dart.getFields(rate_limit._RateLimitSink.__proto__),
    [_outputSink$]: dart.finalFieldType(dart.legacy(async.EventSink)),
    [_duration$]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_rateLimitStrategy$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])), [dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])), dart.legacy(core.Duration)]))),
    [_addEvent]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.dynamic])))
  }));
  const _is_RateLimitTransformer_default = Symbol('_is_RateLimitTransformer_default');
  rate_limit.RateLimitTransformer$ = dart.generic((S, T) => {
    var SL = () => (SL = dart.constFn(dart.legacy(S)))();
    var StreamOfSL = () => (StreamOfSL = dart.constFn(async.Stream$(SL())))();
    var StreamLOfSL = () => (StreamLOfSL = dart.constFn(dart.legacy(StreamOfSL())))();
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var StreamOfTL = () => (StreamOfTL = dart.constFn(async.Stream$(TL())))();
    class RateLimitTransformer extends async.StreamTransformerBase$(dart.legacy(S), dart.legacy(T)) {
      bind(stream) {
        StreamLOfSL().as(stream);
        return StreamOfTL().eventTransformed(stream, dart.fn(sink => new rate_limit._RateLimitSink.new(sink, this[_duration$], this[_rateLimitStrategy$]), EventSinkLTo_RateLimitSinkL()));
      }
    }
    (RateLimitTransformer.new = function(_duration, _rateLimitStrategy) {
      this[_duration$] = _duration;
      this[_rateLimitStrategy$] = _rateLimitStrategy;
      RateLimitTransformer.__proto__.new.call(this);
      ;
    }).prototype = RateLimitTransformer.prototype;
    dart.addTypeTests(RateLimitTransformer);
    RateLimitTransformer.prototype[_is_RateLimitTransformer_default] = true;
    dart.addTypeCaches(RateLimitTransformer);
    dart.setMethodSignature(RateLimitTransformer, () => ({
      __proto__: dart.getMethods(RateLimitTransformer.__proto__),
      bind: dart.fnType(dart.legacy(async.Stream$(dart.legacy(T))), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(RateLimitTransformer, L3);
    dart.setFieldSignature(RateLimitTransformer, () => ({
      __proto__: dart.getFields(RateLimitTransformer.__proto__),
      [_duration$]: dart.finalFieldType(dart.legacy(core.Duration)),
      [_rateLimitStrategy$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])), [dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic])), dart.legacy(core.Duration)])))
    }));
    return RateLimitTransformer;
  });
  rate_limit.RateLimitTransformer = rate_limit.RateLimitTransformer$();
  dart.addTypeTests(rate_limit.RateLimitTransformer, _is_RateLimitTransformer_default);
  async_where.asyncWhere = function asyncWhere(T, items, filter) {
    return new (async._AsyncStarImpl$(dart.legacy(T))).new(function* asyncWhere(stream) {
      for (let item of items) {
        if (dart.test(yield filter(item))) {
          if (stream.add(item)) return;
          yield;
        }
      }
    }).stream;
  };
  async_where.asyncFirst = function asyncFirst(T, items, filter, opts) {
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return async_where.asyncWhere(dart.legacy(T), items, filter).firstWhere(dart.fn(_ => true, dart.fnType(boolL(), [dart.legacy(T)])), {orElse: dart.nullable(dart.fnType(dart.legacy(T), [])).as(orElse)}).then(dart.legacy(T), dart.fn(x => x, dart.fnType(dart.legacy(T), [dart.legacy(T)])));
  };
  async_where.asyncSingle = function asyncSingle(T, items, filter) {
    return async_where.asyncWhere(dart.legacy(T), items, filter).single;
  };
  var _current = dart.privateName(priority_stream_iterator, "_current");
  var _next = dart.privateName(priority_stream_iterator, "_next");
  var _iterator = dart.privateName(priority_stream_iterator, "_iterator");
  var _queue = dart.privateName(priority_stream_iterator, "_queue");
  var _accumulateValues = dart.privateName(priority_stream_iterator, "_accumulateValues");
  var _clear = dart.privateName(priority_stream_iterator, "_clear");
  var _getNextValue = dart.privateName(priority_stream_iterator, "_getNextValue");
  const _is_PriorityStreamIterator_default = Symbol('_is_PriorityStreamIterator_default');
  priority_stream_iterator.PriorityStreamIterator$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var StreamIteratorOfTL = () => (StreamIteratorOfTL = dart.constFn(async.StreamIterator$(TL())))();
    var _StablePriorityQueueOfTL = () => (_StablePriorityQueueOfTL = dart.constFn(priority_stream_iterator._StablePriorityQueue$(TL())))();
    class PriorityStreamIterator extends core.Object {
      moveNext() {
        if (dart.test(this[_queue].isNotEmpty)) {
          this[_current] = this[_queue].removeFirst();
          return FutureOfboolL().value(true);
        }
        this[_current] = null;
        return this[_next].then(boolL(), dart.fn(_ => {
          if (dart.test(_)) {
            this[_current] = this[_queue].removeFirst();
          }
          return _;
        }, boolLToboolL()));
      }
      get current() {
        return this[_current];
      }
      cancel() {
        this[_clear]();
        return this[_iterator].cancel();
      }
      [_accumulateValues]() {
        (this[_next] = this[_getNextValue]()).then(core.Null, dart.fn(_ => {
          if (dart.test(_)) {
            this[_accumulateValues]();
          }
        }, boolLToNull()));
      }
      [_getNextValue]() {
        return this[_iterator].moveNext().then(boolL(), dart.fn(_ => {
          if (dart.test(_)) {
            this[_queue].add(this[_iterator].current);
          }
          return _;
        }, boolLToboolL()));
      }
      [_clear]() {
        this[_current] = null;
        this[_queue].clear();
      }
    }
    (PriorityStreamIterator.new = function(stream, comparison = null) {
      this[_current] = null;
      this[_next] = null;
      this[_iterator] = StreamIteratorOfTL().new(stream);
      this[_queue] = new (_StablePriorityQueueOfTL()).new(comparison);
      this[_accumulateValues]();
    }).prototype = PriorityStreamIterator.prototype;
    dart.addTypeTests(PriorityStreamIterator);
    PriorityStreamIterator.prototype[_is_PriorityStreamIterator_default] = true;
    dart.addTypeCaches(PriorityStreamIterator);
    PriorityStreamIterator[dart.implements] = () => [async.StreamIterator$(dart.legacy(T))];
    dart.setMethodSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getMethods(PriorityStreamIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
      cancel: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Object))), []),
      [_accumulateValues]: dart.fnType(dart.void, []),
      [_getNextValue]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
      [_clear]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getGetters(PriorityStreamIterator.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(PriorityStreamIterator, L4);
    dart.setFieldSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getFields(PriorityStreamIterator.__proto__),
      [_iterator]: dart.finalFieldType(dart.legacy(async.StreamIterator$(dart.legacy(T)))),
      [_queue]: dart.finalFieldType(dart.legacy(priority_queue.PriorityQueue$(dart.legacy(T)))),
      [_current]: dart.fieldType(dart.legacy(T)),
      [_next]: dart.fieldType(dart.legacy(async.Future$(dart.legacy(core.bool))))
    }));
    return PriorityStreamIterator;
  });
  priority_stream_iterator.PriorityStreamIterator = priority_stream_iterator.PriorityStreamIterator$();
  dart.addTypeTests(priority_stream_iterator.PriorityStreamIterator, _is_PriorityStreamIterator_default);
  const _is__StablePriorityQueue_default = Symbol('_is__StablePriorityQueue_default');
  priority_stream_iterator._StablePriorityQueue$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _OrderedComparatorOfTL = () => (_OrderedComparatorOfTL = dart.constFn(priority_stream_iterator._OrderedComparator$(TL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    class _StablePriorityQueue extends priority_queue.HeapPriorityQueue$(dart.legacy(T)) {
      add(el) {
        TL().as(el);
        this.comparator.add(el);
        super.add(el);
      }
      addAll(elements) {
        IterableLOfTL().as(elements);
        this.comparator.addAll(elements);
        super.addAll(elements);
      }
      remove(el) {
        TL().as(el);
        let result = super.remove(el);
        this.comparator.remove(el);
        return result;
      }
      removeAll() {
        let result = super.removeAll();
        this.comparator.clear();
        return result;
      }
      removeFirst() {
        let el = super.removeFirst();
        this.comparator.remove(el);
        return el;
      }
      clear() {
        super.clear();
        this.comparator.clear();
      }
    }
    (_StablePriorityQueue.new = function(comparison = null) {
      let t0;
      _StablePriorityQueue.__.call(this, new (_OrderedComparatorOfTL()).new((t0 = comparison, t0 == null ? priority_stream_iterator._defaultComparator(TL()) : t0)));
    }).prototype = _StablePriorityQueue.prototype;
    (_StablePriorityQueue.__ = function(comparator) {
      let t0;
      this.comparator = comparator;
      _StablePriorityQueue.__proto__.new.call(this, (t0 = comparator, t0 == null ? null : dart.bind(t0, 'call')));
      ;
    }).prototype = _StablePriorityQueue.prototype;
    dart.addTypeTests(_StablePriorityQueue);
    _StablePriorityQueue.prototype[_is__StablePriorityQueue_default] = true;
    dart.addTypeCaches(_StablePriorityQueue);
    dart.setLibraryUri(_StablePriorityQueue, L4);
    dart.setFieldSignature(_StablePriorityQueue, () => ({
      __proto__: dart.getFields(_StablePriorityQueue.__proto__),
      comparator: dart.finalFieldType(dart.legacy(priority_stream_iterator._OrderedComparator$(dart.legacy(T))))
    }));
    return _StablePriorityQueue;
  });
  priority_stream_iterator._StablePriorityQueue = priority_stream_iterator._StablePriorityQueue$();
  dart.addTypeTests(priority_stream_iterator._StablePriorityQueue, _is__StablePriorityQueue_default);
  var _ordinalByElement = dart.privateName(priority_stream_iterator, "_ordinalByElement");
  var _nextOrdinal = dart.privateName(priority_stream_iterator, "_nextOrdinal");
  var _comparison$ = dart.privateName(priority_stream_iterator, "_comparison");
  var _renumerate = dart.privateName(priority_stream_iterator, "_renumerate");
  var _compareOrder = dart.privateName(priority_stream_iterator, "_compareOrder");
  const _is__OrderedComparator_default = Symbol('_is__OrderedComparator_default');
  priority_stream_iterator._OrderedComparator$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var LinkedMapOfTL$intL = () => (LinkedMapOfTL$intL = dart.constFn(_js_helper.LinkedMap$(TL(), intL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    class _OrderedComparator extends core.Object {
      add(el) {
        let t0;
        TL().as(el);
        this[_ordinalByElement][$_set](el, (t0 = this[_nextOrdinal], this[_nextOrdinal] = dart.notNull(t0) + 1, t0));
      }
      addAll(elements) {
        IterableLOfTL().as(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        this[_ordinalByElement][$clear]();
        this[_nextOrdinal] = 0;
      }
      remove(el) {
        TL().as(el);
        this[_ordinalByElement][$remove](el);
        this[_renumerate]();
      }
      call(a, b) {
        let t1, t0;
        TL().as(a);
        TL().as(b);
        let result = (t0 = a, t1 = b, this[_comparison$](t0, t1));
        return result !== 0 ? result : this[_compareOrder](a, b);
      }
      [_compareOrder](a, b) {
        TL().as(a);
        TL().as(b);
        if (!dart.test(this[_ordinalByElement][$containsKey](a)) || !dart.test(this[_ordinalByElement][$containsKey](b))) {
          dart.throw(new core.StateError.new("Comparing elements that weren't registered with the comparator."));
        }
        return dart.notNull(this[_ordinalByElement][$_get](a)) - dart.notNull(this[_ordinalByElement][$_get](b));
      }
      [_renumerate]() {
        let t0;
        if (dart.test(this[_ordinalByElement][$isEmpty])) {
          this[_nextOrdinal] = 0;
        }
        if (dart.notNull(this[_nextOrdinal]) > dart.notNull(this[_ordinalByElement][$length]) + 1000000) {
          let orderedElements = (t0 = this[_ordinalByElement][$keys][$toList]({growable: false}), (() => {
            t0[$sort](dart.bind(this, _compareOrder));
            return t0;
          })());
          this.clear();
          this.addAll(orderedElements);
        }
      }
    }
    (_OrderedComparator.new = function(_comparison) {
      this[_ordinalByElement] = new (LinkedMapOfTL$intL()).new();
      this[_nextOrdinal] = 0;
      this[_comparison$] = _comparison;
      ;
    }).prototype = _OrderedComparator.prototype;
    dart.addTypeTests(_OrderedComparator);
    _OrderedComparator.prototype[_is__OrderedComparator_default] = true;
    dart.addTypeCaches(_OrderedComparator);
    dart.setMethodSignature(_OrderedComparator, () => ({
      __proto__: dart.getMethods(_OrderedComparator.__proto__),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      call: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [_compareOrder]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [_renumerate]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_OrderedComparator, L4);
    dart.setFieldSignature(_OrderedComparator, () => ({
      __proto__: dart.getFields(_OrderedComparator.__proto__),
      [_comparison$]: dart.finalFieldType(dart.legacy(dart.fnType(core.int, [dart.legacy(T), dart.legacy(T)]))),
      [_ordinalByElement]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(T), dart.legacy(core.int)))),
      [_nextOrdinal]: dart.fieldType(dart.legacy(core.int))
    }));
    return _OrderedComparator;
  });
  priority_stream_iterator._OrderedComparator = priority_stream_iterator._OrderedComparator$();
  dart.defineLazy(priority_stream_iterator._OrderedComparator, {
    /*priority_stream_iterator._OrderedComparator.RENUMERATE_THRESHOLD*/get RENUMERATE_THRESHOLD() {
      return 1000000;
    }
  }, true);
  dart.addTypeTests(priority_stream_iterator._OrderedComparator, _is__OrderedComparator_default);
  priority_stream_iterator._defaultComparator = function _defaultComparator(T) {
    return dart.fn((a, b) => a[$compareTo](b), dart.fnType(intL(), [dart.legacy(T), dart.legacy(T)]));
  };
  var _streamController = dart.privateName(lazy_stream_controller, "_streamController");
  var _streamControllerFactory$ = dart.privateName(lazy_stream_controller, "_streamControllerFactory");
  var _initializeLazy = dart.privateName(lazy_stream_controller, "_initializeLazy");
  const _is_LazyStreamController_default = Symbol('_is_LazyStreamController_default');
  lazy_stream_controller.LazyStreamController$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var StreamOfTL = () => (StreamOfTL = dart.constFn(async.Stream$(TL())))();
    var StreamLOfTL = () => (StreamLOfTL = dart.constFn(dart.legacy(StreamOfTL())))();
    class LazyStreamController extends core.Object {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        return new (lazy_stream_controller.LazyStreamController$(dart.legacy(T))).__(dart.fn(() => async.StreamController$(dart.legacy(T)).new({onListen: onListen, onCancel: onCancel, sync: sync}), dart.fnType(dart.legacy(async.StreamController$(dart.legacy(T))), [])));
      }
      static broadcast(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        return new (lazy_stream_controller.LazyStreamController$(dart.legacy(T))).__(dart.fn(() => async.StreamController$(dart.legacy(T)).broadcast({onListen: onListen, onCancel: onCancel, sync: sync}), dart.fnType(dart.legacy(async.StreamController$(dart.legacy(T))), [])));
      }
      [_initializeLazy]() {
        if (this[_streamController] == null) {
          this[_streamController] = this[_streamControllerFactory$]();
        }
        return this[_streamController];
      }
      get isClosed() {
        return this[_streamController] != null ? this[_streamController].isClosed : false;
      }
      get hasListener() {
        return this[_streamController] != null ? this[_streamController].hasListener : false;
      }
      get isPaused() {
        return this[_streamController] != null ? this[_streamController].isPaused : false;
      }
      add(event) {
        TL().as(event);
        if (this[_streamController] != null) {
          this[_streamController].add(event);
        }
      }
      addError(error, stackTrace = null) {
        if (this[_streamController] != null) {
          this[_streamController].addError(error, stackTrace);
        }
      }
      addStream(source, opts) {
        StreamLOfTL().as(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        return this[_initializeLazy]().addStream(source, {cancelOnError: cancelOnError});
      }
      close() {
        if (this[_streamController] != null) {
          return this[_streamController].close();
        }
        return async.Future.value();
      }
      get done() {
        return this[_initializeLazy]().done;
      }
      get sink() {
        return this[_initializeLazy]().sink;
      }
      get stream() {
        return this[_initializeLazy]().stream;
      }
      set onListen(onListenHandler) {
        this[_initializeLazy]().onListen = onListenHandler;
      }
      get onListen() {
        return this[_initializeLazy]().onListen;
      }
      set onPause(onPauseHandler) {
        this[_initializeLazy]().onPause = onPauseHandler;
      }
      get onPause() {
        return this[_initializeLazy]().onPause;
      }
      set onResume(onResumeHandler) {
        this[_initializeLazy]().onResume = onResumeHandler;
      }
      get onResume() {
        return this[_initializeLazy]().onResume;
      }
      set onCancel(onCancelHandler) {
        this[_initializeLazy]().onCancel = onCancelHandler;
      }
      get onCancel() {
        return this[_initializeLazy]().onCancel;
      }
    }
    (LazyStreamController.__ = function(_streamControllerFactory) {
      this[_streamController] = null;
      this[_streamControllerFactory$] = _streamControllerFactory;
      ;
    }).prototype = LazyStreamController.prototype;
    dart.addTypeTests(LazyStreamController);
    LazyStreamController.prototype[_is_LazyStreamController_default] = true;
    dart.addTypeCaches(LazyStreamController);
    LazyStreamController[dart.implements] = () => [async.StreamController$(dart.legacy(T))];
    dart.setMethodSignature(LazyStreamController, () => ({
      __proto__: dart.getMethods(LazyStreamController.__proto__),
      [_initializeLazy]: dart.fnType(dart.legacy(async.StreamController$(dart.legacy(T))), []),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addError: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(core.StackTrace)]),
      addStream: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Object))), [dart.legacy(core.Object)], {cancelOnError: dart.legacy(core.bool)}, {}),
      close: dart.fnType(dart.legacy(async.Future), [])
    }));
    dart.setGetterSignature(LazyStreamController, () => ({
      __proto__: dart.getGetters(LazyStreamController.__proto__),
      isClosed: dart.legacy(core.bool),
      hasListener: dart.legacy(core.bool),
      isPaused: dart.legacy(core.bool),
      done: dart.legacy(async.Future$(dart.legacy(core.Object))),
      sink: dart.legacy(async.StreamSink$(dart.legacy(T))),
      stream: dart.legacy(async.Stream$(dart.legacy(T))),
      onListen: dart.legacy(dart.fnType(dart.void, [])),
      onPause: dart.legacy(dart.fnType(dart.void, [])),
      onResume: dart.legacy(dart.fnType(dart.void, [])),
      onCancel: dart.legacy(dart.fnType(dart.void, []))
    }));
    dart.setSetterSignature(LazyStreamController, () => ({
      __proto__: dart.getSetters(LazyStreamController.__proto__),
      onListen: dart.legacy(dart.fnType(dart.void, [])),
      onPause: dart.legacy(dart.fnType(dart.void, [])),
      onResume: dart.legacy(dart.fnType(dart.void, [])),
      onCancel: dart.legacy(dart.fnType(dart.void, []))
    }));
    dart.setLibraryUri(LazyStreamController, L5);
    dart.setFieldSignature(LazyStreamController, () => ({
      __proto__: dart.getFields(LazyStreamController.__proto__),
      [_streamControllerFactory$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(async.StreamController$(dart.legacy(T))), []))),
      [_streamController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(T))))
    }));
    return LazyStreamController;
  });
  lazy_stream_controller.LazyStreamController = lazy_stream_controller.LazyStreamController$();
  dart.addTypeTests(lazy_stream_controller.LazyStreamController, _is_LazyStreamController_default);
  var _wasDisposed = dart.privateName(disposable_future, "_wasDisposed");
  var _delegateFuture$ = dart.privateName(disposable_future, "_delegateFuture");
  var _disposeFn$ = dart.privateName(disposable_future, "_disposeFn");
  const _is_DisposableFuture_default = Symbol('_is_DisposableFuture_default');
  disposable_future.DisposableFuture$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var FutureOrOfTL = () => (FutureOrOfTL = dart.constFn(async.FutureOr$(TL())))();
    var VoidToFutureOrOfTL = () => (VoidToFutureOrOfTL = dart.constFn(dart.fnType(FutureOrOfTL(), [])))();
    var VoidToNFutureOrOfTL = () => (VoidToNFutureOrOfTL = dart.constFn(dart.nullable(VoidToFutureOrOfTL())))();
    class DisposableFuture extends core.Object {
      static first(stream) {
        let completer = async.Completer$(dart.legacy(T)).sync();
        let subscription = null;
        subscription = stream.listen(dart.fn(value => {
          subscription.cancel();
          completer.complete(value);
        }, dart.fnType(core.Null, [dart.legacy(T)])), {onError: dart.bind(completer, 'completeError')});
        return new (disposable_future.DisposableFuture$(dart.legacy(T))).new(completer.future, dart.bind(subscription, 'cancel'));
      }
      static last(stream) {
        let completer = async.Completer$(dart.legacy(T)).sync();
        let subscription = null;
        let lastValue = null;
        subscription = stream.listen(dart.fn(value => {
          lastValue = value;
        }, dart.fnType(core.Null, [dart.legacy(T)])), {onDone: dart.fn(() => {
            completer.complete(lastValue);
          }, VoidToNull())});
        return new (disposable_future.DisposableFuture$(dart.legacy(T))).new(completer.future, dart.bind(subscription, 'cancel'));
      }
      static fromFuture(future) {
        return disposable_future.DisposableFuture$(dart.legacy(T)).first(future.asStream());
      }
      static fromValue(value) {
        let completer = async.Completer$(dart.legacy(T)).sync();
        let cancelled = false;
        async.scheduleMicrotask(dart.fn(() => {
          if (!cancelled) {
            completer.complete(value);
          }
        }, VoidToNull()));
        return new (disposable_future.DisposableFuture$(dart.legacy(T))).new(completer.future, dart.fn(() => {
          cancelled = true;
        }, VoidToNull()));
      }
      dispose() {
        this[_wasDisposed] = true;
        this[_disposeFn$]();
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (disposable_future.DisposableFuture$(dart.legacy(S))).new(this[_delegateFuture$].then(dart.legacy(S), dart.fn(v => {
          if (!dart.test(this[_wasDisposed])) {
            return onValue(v);
          }
          return null;
        }, dart.fnType(dart.legacy(async.FutureOr$(dart.legacy(S))), [TL()])), {onError: onError}), this[_disposeFn$]);
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_delegateFuture$].catchError(onError, {test: test});
      }
      whenComplete(action) {
        return this[_delegateFuture$].whenComplete(dart.fn(() => {
          if (!dart.test(this[_wasDisposed])) {
            action();
          }
        }, VoidToNull()));
      }
      asStream() {
        return this[_delegateFuture$].asStream();
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToLdynamic().as(onTimeout);
        return this[_delegateFuture$].timeout(timeLimit, {onTimeout: VoidToNFutureOrOfTL().as(onTimeout)});
      }
    }
    (DisposableFuture.new = function(_delegateFuture, _disposeFn) {
      this[_wasDisposed] = false;
      this[_delegateFuture$] = _delegateFuture;
      this[_disposeFn$] = _disposeFn;
      ;
    }).prototype = DisposableFuture.prototype;
    DisposableFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DisposableFuture);
    DisposableFuture.prototype[_is_DisposableFuture_default] = true;
    dart.addTypeCaches(DisposableFuture);
    DisposableFuture[dart.implements] = () => [async.Future$(dart.legacy(T)), disposer.Disposable];
    dart.setMethodSignature(DisposableFuture, () => ({
      __proto__: dart.getMethods(DisposableFuture.__proto__),
      dispose: dart.fnType(dart.void, []),
      then: dart.gFnType(S => [dart.legacy(disposable_future.DisposableFuture$(dart.legacy(S))), [dart.legacy(dart.fnType(dart.legacy(async.FutureOr$(dart.legacy(S))), [dart.legacy(T)]))], {onError: dart.legacy(core.Function)}, {}]),
      catchError: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Function)], {test: dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]))}, {}),
      whenComplete: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.dynamic, []))]),
      asStream: dart.fnType(dart.legacy(async.Stream$(dart.legacy(T))), []),
      timeout: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Duration)], {onTimeout: dart.legacy(core.Object)}, {})
    }));
    dart.setLibraryUri(DisposableFuture, L6);
    dart.setFieldSignature(DisposableFuture, () => ({
      __proto__: dart.getFields(DisposableFuture.__proto__),
      [_delegateFuture$]: dart.finalFieldType(dart.legacy(async.Future$(dart.legacy(T)))),
      [_disposeFn$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
      [_wasDisposed]: dart.fieldType(dart.legacy(core.bool))
    }));
    return DisposableFuture;
  });
  disposable_future.DisposableFuture = disposable_future.DisposableFuture$();
  dart.addTypeTests(disposable_future.DisposableFuture, _is_DisposableFuture_default);
  var C2;
  debounce_stream.debounceStream = function debounceStream(S, T, duration) {
    return new (rate_limit.RateLimitTransformer$(dart.legacy(S), dart.legacy(T))).new(duration, dart.gbind(C2 || CT.C2, dart.dynamic));
  };
  var _runInZoneFn = dart.privateName(zoned_async, "_runInZoneFn");
  var _runInZone$ = dart.privateName(zoned_async, "_runInZone");
  zoned_async._ZoneRunner = class _ZoneRunner extends core.Object {
    [_runInZone$](S, fn) {
      let t0;
      return dart.legacy(S).as((t0 = fn, this[_runInZoneFn](t0)));
    }
  };
  (zoned_async._ZoneRunner.new = function() {
    ;
  }).prototype = zoned_async._ZoneRunner.prototype;
  dart.addTypeTests(zoned_async._ZoneRunner);
  dart.addTypeCaches(zoned_async._ZoneRunner);
  dart.setMethodSignature(zoned_async._ZoneRunner, () => ({
    __proto__: dart.getMethods(zoned_async._ZoneRunner.__proto__),
    [_runInZone$]: dart.gFnType(S => [dart.legacy(S), [dart.legacy(dart.fnType(dart.legacy(S), []))]])
  }));
  dart.setLibraryUri(zoned_async._ZoneRunner, L7);
  var _innerFuture$ = dart.privateName(zoned_async, "_innerFuture");
  const _is_ZonedFuture_default = Symbol('_is_ZonedFuture_default');
  var _runInZoneFn$ = dart.privateName(zoned_async, "ZonedFuture._runInZoneFn");
  zoned_async.ZonedFuture$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ZonedStreamOfTL = () => (ZonedStreamOfTL = dart.constFn(zoned_async.ZonedStream$(TL())))();
    var FutureOfTL = () => (FutureOfTL = dart.constFn(async.Future$(TL())))();
    var FutureLOfTL = () => (FutureLOfTL = dart.constFn(dart.legacy(FutureOfTL())))();
    var VoidToFutureLOfTL = () => (VoidToFutureLOfTL = dart.constFn(dart.fnType(FutureLOfTL(), [])))();
    var FutureOrOfTL = () => (FutureOrOfTL = dart.constFn(async.FutureOr$(TL())))();
    var VoidToFutureOrOfTL = () => (VoidToFutureOrOfTL = dart.constFn(dart.fnType(FutureOrOfTL(), [])))();
    var VoidToNFutureOrOfTL = () => (VoidToNFutureOrOfTL = dart.constFn(dart.nullable(VoidToFutureOrOfTL())))();
    class ZonedFuture extends zoned_async._ZoneRunner {
      get [_runInZoneFn]() {
        return this[_runInZoneFn$];
      }
      set [_runInZoneFn](value) {
        super[_runInZoneFn] = value;
      }
      asStream() {
        return new (ZonedStreamOfTL()).new(this[_innerFuture$].asStream(), this[_runInZoneFn]);
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_runInZone$](FutureLOfTL(), dart.fn(() => this[_innerFuture$].catchError(onError, {test: test}), VoidToFutureLOfTL()));
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_runInZone$](dart.legacy(async.Future$(dart.legacy(S))), dart.fn(() => this[_innerFuture$].then(dart.legacy(S), onValue, {onError: onError}), dart.fnType(dart.legacy(async.Future$(dart.legacy(S))), [])));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToLdynamic().as(onTimeout);
        return this[_runInZone$](FutureLOfTL(), dart.fn(() => this[_innerFuture$].timeout(timeLimit, {onTimeout: VoidToNFutureOrOfTL().as(onTimeout)}), VoidToFutureLOfTL()));
      }
      whenComplete(action) {
        return this[_runInZone$](FutureLOfTL(), dart.fn(() => this[_innerFuture$].whenComplete(action), VoidToFutureLOfTL()));
      }
    }
    (ZonedFuture.new = function(_innerFuture, _runInZoneFn) {
      this[_innerFuture$] = _innerFuture;
      this[_runInZoneFn$] = _runInZoneFn;
      ;
    }).prototype = ZonedFuture.prototype;
    ZonedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(ZonedFuture);
    ZonedFuture.prototype[_is_ZonedFuture_default] = true;
    dart.addTypeCaches(ZonedFuture);
    ZonedFuture[dart.implements] = () => [async.Future$(dart.legacy(T))];
    dart.setMethodSignature(ZonedFuture, () => ({
      __proto__: dart.getMethods(ZonedFuture.__proto__),
      asStream: dart.fnType(dart.legacy(async.Stream$(dart.legacy(T))), []),
      catchError: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Function)], {test: dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]))}, {}),
      then: dart.gFnType(S => [dart.legacy(async.Future$(dart.legacy(S))), [dart.legacy(dart.fnType(dart.legacy(async.FutureOr$(dart.legacy(S))), [dart.legacy(T)]))], {onError: dart.legacy(core.Function)}, {}]),
      timeout: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Duration)], {onTimeout: dart.legacy(core.Object)}, {}),
      whenComplete: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.dynamic, []))])
    }));
    dart.setLibraryUri(ZonedFuture, L7);
    dart.setFieldSignature(ZonedFuture, () => ({
      __proto__: dart.getFields(ZonedFuture.__proto__),
      [_innerFuture$]: dart.finalFieldType(dart.legacy(async.Future$(dart.legacy(T)))),
      [_runInZoneFn]: dart.finalFieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(dart.fnType(dart.dynamic, []))])))
    }));
    return ZonedFuture;
  });
  zoned_async.ZonedFuture = zoned_async.ZonedFuture$();
  dart.addTypeTests(zoned_async.ZonedFuture, _is_ZonedFuture_default);
  var _innerStream$ = dart.privateName(zoned_async, "_innerStream");
  const _is_ZonedStream_default = Symbol('_is_ZonedStream_default');
  var _runInZoneFn$0 = dart.privateName(zoned_async, "ZonedStream._runInZoneFn");
  zoned_async.ZonedStream$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ZonedFutureOfTL = () => (ZonedFutureOfTL = dart.constFn(zoned_async.ZonedFuture$(TL())))();
    var StreamSubscriptionOfTL = () => (StreamSubscriptionOfTL = dart.constFn(async.StreamSubscription$(TL())))();
    var StreamSubscriptionLOfTL = () => (StreamSubscriptionLOfTL = dart.constFn(dart.legacy(StreamSubscriptionOfTL())))();
    var VoidToStreamSubscriptionLOfTL = () => (VoidToStreamSubscriptionLOfTL = dart.constFn(dart.fnType(StreamSubscriptionLOfTL(), [])))();
    const Stream__ZoneRunner$36 = class Stream__ZoneRunner extends async.Stream$(dart.legacy(T)) {};
    (Stream__ZoneRunner$36.new = function() {
      Stream__ZoneRunner$36.__proto__.new.call(this);
    }).prototype = Stream__ZoneRunner$36.prototype;
    (Stream__ZoneRunner$36._internal = function() {
      Stream__ZoneRunner$36.__proto__._internal.call(this);
    }).prototype = Stream__ZoneRunner$36.prototype;
    dart.applyMixin(Stream__ZoneRunner$36, zoned_async._ZoneRunner);
    class ZonedStream extends Stream__ZoneRunner$36 {
      get [_runInZoneFn]() {
        return this[_runInZoneFn$0];
      }
      set [_runInZoneFn](value) {
        super[_runInZoneFn] = value;
      }
      get isBroadcast() {
        return this[_innerStream$].isBroadcast;
      }
      get first() {
        return new (ZonedFutureOfTL()).new(this[_innerStream$].first, dart.gbind(dart.bind(this, _runInZone$), dart.dynamic));
      }
      get last() {
        return new (ZonedFutureOfTL()).new(this[_innerStream$].last, dart.gbind(dart.bind(this, _runInZone$), dart.dynamic));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_runInZone$](StreamSubscriptionLOfTL(), dart.fn(() => this[_innerStream$].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError}), VoidToStreamSubscriptionLOfTL()));
      }
    }
    (ZonedStream.new = function(_innerStream, _runInZoneFn) {
      this[_innerStream$] = _innerStream;
      this[_runInZoneFn$0] = _runInZoneFn;
      ZonedStream.__proto__.new.call(this);
      ;
    }).prototype = ZonedStream.prototype;
    dart.addTypeTests(ZonedStream);
    ZonedStream.prototype[_is_ZonedStream_default] = true;
    dart.addTypeCaches(ZonedStream);
    dart.setMethodSignature(ZonedStream, () => ({
      __proto__: dart.getMethods(ZonedStream.__proto__),
      listen: dart.fnType(dart.legacy(async.StreamSubscription$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))], {cancelOnError: dart.legacy(core.bool), onDone: dart.legacy(dart.fnType(dart.void, [])), onError: dart.legacy(core.Function)}, {})
    }));
    dart.setGetterSignature(ZonedStream, () => ({
      __proto__: dart.getGetters(ZonedStream.__proto__),
      isBroadcast: dart.legacy(core.bool),
      first: dart.legacy(async.Future$(dart.legacy(T))),
      last: dart.legacy(async.Future$(dart.legacy(T)))
    }));
    dart.setLibraryUri(ZonedStream, L7);
    dart.setFieldSignature(ZonedStream, () => ({
      __proto__: dart.getFields(ZonedStream.__proto__),
      [_innerStream$]: dart.finalFieldType(dart.legacy(async.Stream$(dart.legacy(T)))),
      [_runInZoneFn]: dart.finalFieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(dart.fnType(dart.dynamic, []))])))
    }));
    return ZonedStream;
  });
  zoned_async.ZonedStream = zoned_async.ZonedStream$();
  dart.addTypeTests(zoned_async.ZonedStream, _is_ZonedStream_default);
  var C3;
  var C4;
  throttle_stream.throttleStream = function throttleStream(S, T, duration, opts) {
    let guaranteeLast = opts && 'guaranteeLast' in opts ? opts.guaranteeLast : true;
    return new (rate_limit.RateLimitTransformer$(dart.legacy(S), dart.legacy(T))).new(duration, dart.test(guaranteeLast) ? dart.gbind(C3 || CT.C3, dart.dynamic) : dart.gbind(C4 || CT.C4, dart.dynamic));
  };
  dart.trackLibraries("packages/angular_components/src/utils/async/async_update_scheduler", {
    "package:angular_components/src/utils/async/async_update_scheduler.dart": async_update_scheduler,
    "package:angular_components/src/utils/async/simple_stream.dart": simple_stream,
    "package:angular_components/src/utils/async/rate_limit.dart": rate_limit,
    "package:angular_components/src/utils/async/async_where.dart": async_where,
    "package:angular_components/src/utils/async/priority_stream_iterator.dart": priority_stream_iterator,
    "package:angular_components/src/utils/async/lazy_stream_controller.dart": lazy_stream_controller,
    "package:angular_components/src/utils/async/disposable_future.dart": disposable_future,
    "package:angular_components/src/utils/async/debounce_stream.dart": debounce_stream,
    "package:angular_components/src/utils/async/zoned_async.dart": zoned_async,
    "package:angular_components/src/utils/async/throttle_stream.dart": throttle_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["async_update_scheduler.dart","simple_stream.dart","rate_limit.dart","async_where.dart","priority_stream_iterator.dart","lazy_stream_controller.dart","disposable_future.dart","debounce_stream.dart","zoned_async.dart","throttle_stream.dart"],"names":[],"mappings":"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","file":"async_update_scheduler.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__async__async_update_scheduler: async_update_scheduler,
    src__utils__async__simple_stream: simple_stream,
    src__utils__async__rate_limit: rate_limit,
    src__utils__async__async_where: async_where,
    src__utils__async__priority_stream_iterator: priority_stream_iterator,
    src__utils__async__lazy_stream_controller: lazy_stream_controller,
    src__utils__async__disposable_future: disposable_future,
    src__utils__async__debounce_stream: debounce_stream,
    src__utils__async__zoned_async: zoned_async,
    src__utils__async__throttle_stream: throttle_stream
  };
}));

//# sourceMappingURL=async_update_scheduler.unsound.ddc.js.map
