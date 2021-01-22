define(['dart_sdk', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/utils/disposer/disposer', 'packages/quiver/src/time/clock'], (function load__packages__angular_components__utils__angular__scroll_host__interface(dart_sdk, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__utils__disposer__disposer, packages__quiver__src__time__clock) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  var scroll_observer = Object.create(dart.library);
  var $interface = Object.create(dart.library);
  var gestures = Object.create(dart.library);
  var scroll_host_event_impl = Object.create(dart.library);
  var $toString = dartx.toString;
  var $onTouchStart = dartx.onTouchStart;
  var $onTouchMove = dartx.onTouchMove;
  var $onTouchEnd = dartx.onTouchEnd;
  var $length = dartx.length;
  var $target = dartx.target;
  var $screen = dartx.screen;
  var $single = dartx.single;
  var $first = dartx.first;
  var $_get = dartx._get;
  var $toDouble = dartx.toDouble;
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  var $round = dartx.round;
  var $getComputedStyle = dartx.getComputedStyle;
  var $getPropertyValue = dartx.getPropertyValue;
  var $scrollLeft = dartx.scrollLeft;
  var $_set = dartx._set;
  var $scrollWidth = dartx.scrollWidth;
  var $scrollTop = dartx.scrollTop;
  var $scrollHeight = dartx.scrollHeight;
  var $parent = dartx.parent;
  var ScrollHostEventL = () => (ScrollHostEventL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHostEvent)))();
  var ScrollHostEventLToNull = () => (ScrollHostEventLToNull = dart.constFn(dart.fnType(core.Null, [ScrollHostEventL()])))();
  var GestureDirectionL = () => (GestureDirectionL = dart.constFn(dart.legacy(gestures.GestureDirection)))();
  var GestureEventL = () => (GestureEventL = dart.constFn(dart.legacy(gestures.GestureEvent)))();
  var StreamControllerOfGestureEventL = () => (StreamControllerOfGestureEventL = dart.constFn(async.StreamController$(GestureEventL())))();
  var TouchEventL = () => (TouchEventL = dart.constFn(dart.legacy(html.TouchEvent)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var LinkedMapOfGestureDirectionL$boolL = () => (LinkedMapOfGestureDirectionL$boolL = dart.constFn(_js_helper.LinkedMap$(GestureDirectionL(), boolL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  const CT = Object.create(null);
  var L2 = "package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.dart";
  var L0 = "package:angular_components/src/utils/angular/scroll_host/scroll_observer.dart";
  var L3 = "org-dartlang-app:///packages/angular_components/src/utils/angular/scroll_host/gestures.dart";
  var L1 = "package:angular_components/src/utils/angular/scroll_host/gestures.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gestures.GestureDirection.prototype,
        [_name$]: "GestureDirection.up",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gestures.GestureDirection.prototype,
        [_name$]: "GestureDirection.down",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gestures.GestureDirection.prototype,
        [_name$]: "GestureDirection.left",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gestures.GestureDirection.prototype,
        [_name$]: "GestureDirection.right",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], GestureDirectionL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 17000
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    }
  }, false);
  var _scrollSub = dart.privateName(scroll_observer, "_scrollSub");
  var _scrollTimestamp = dart.privateName(scroll_observer, "_scrollTimestamp");
  var _isScrolling = dart.privateName(scroll_observer, "_isScrolling");
  var _timer = dart.privateName(scroll_observer, "_timer");
  var _scrollHost$ = dart.privateName(scroll_observer, "_scrollHost");
  var _idleCheckDurationMs$ = dart.privateName(scroll_observer, "_idleCheckDurationMs");
  var _idleCheckDuration = dart.privateName(scroll_observer, "_idleCheckDuration");
  var _subscribe = dart.privateName(scroll_observer, "_subscribe");
  var _now = dart.privateName(scroll_observer, "_now");
  var _raiseIdleEvent = dart.privateName(scroll_observer, "_raiseIdleEvent");
  var _checkIdle = dart.privateName(scroll_observer, "_checkIdle");
  var scrollStatusCallback = dart.privateName(scroll_observer, "ScrollObserver.scrollStatusCallback");
  scroll_observer.ScrollObserver = class ScrollObserver extends core.Object {
    get scrollStatusCallback() {
      return this[scrollStatusCallback];
    }
    set scrollStatusCallback(value) {
      this[scrollStatusCallback] = value;
    }
    [_subscribe]() {
      this[_scrollSub] = this[_scrollHost$].onScroll.listen(dart.fn(_ => {
        this[_scrollTimestamp] = this[_now];
        if (!dart.test(this[_isScrolling])) {
          this[_isScrolling] = true;
          this[_raiseIdleEvent](false);
          if (this[_timer] == null) {
            this[_timer] = async.Timer.periodic(this[_idleCheckDuration], dart.bind(this, _checkIdle));
          }
        }
      }, ScrollHostEventLToNull()));
    }
    get [_now]() {
      return new core.DateTime.now().millisecondsSinceEpoch;
    }
    [_checkIdle](_) {
      let t0;
      let elapsedTimeSinceLastScroll = dart.notNull(this[_now]) - dart.notNull(this[_scrollTimestamp]);
      if (elapsedTimeSinceLastScroll > dart.notNull(this[_idleCheckDurationMs$])) {
        this[_isScrolling] = false;
        this[_raiseIdleEvent](true);
        t0 = this[_timer];
        t0 == null ? null : t0.cancel();
        this[_timer] = null;
      }
    }
    [_raiseIdleEvent](idle) {
      let t0;
      if (this.scrollStatusCallback != null) {
        t0 = idle;
        this.scrollStatusCallback(t0);
      }
    }
    dispose() {
      let t0;
      t0 = this[_timer];
      t0 == null ? null : t0.cancel();
      this[_timer] = null;
      this[_scrollSub].cancel();
      this[_scrollSub] = null;
    }
  };
  (scroll_observer.ScrollObserver.new = function(scrollHost) {
    scroll_observer.ScrollObserver.withDurationMs.call(this, scrollHost, 150);
  }).prototype = scroll_observer.ScrollObserver.prototype;
  (scroll_observer.ScrollObserver.withDurationMs = function(_scrollHost, _idleCheckDurationMs) {
    this[_scrollSub] = null;
    this[_scrollTimestamp] = 0;
    this[_isScrolling] = false;
    this[_timer] = null;
    this[scrollStatusCallback] = null;
    this[_scrollHost$] = _scrollHost;
    this[_idleCheckDurationMs$] = _idleCheckDurationMs;
    this[_idleCheckDuration] = new core.Duration.new({milliseconds: _idleCheckDurationMs});
    this[_subscribe]();
  }).prototype = scroll_observer.ScrollObserver.prototype;
  dart.addTypeTests(scroll_observer.ScrollObserver);
  dart.addTypeCaches(scroll_observer.ScrollObserver);
  scroll_observer.ScrollObserver[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(scroll_observer.ScrollObserver, () => ({
    __proto__: dart.getMethods(scroll_observer.ScrollObserver.__proto__),
    [_subscribe]: dart.fnType(dart.void, []),
    [_checkIdle]: dart.fnType(dart.void, [dart.legacy(async.Timer)]),
    [_raiseIdleEvent]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(scroll_observer.ScrollObserver, () => ({
    __proto__: dart.getGetters(scroll_observer.ScrollObserver.__proto__),
    [_now]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(scroll_observer.ScrollObserver, L0);
  dart.setFieldSignature(scroll_observer.ScrollObserver, () => ({
    __proto__: dart.getFields(scroll_observer.ScrollObserver.__proto__),
    [_idleCheckDurationMs$]: dart.finalFieldType(dart.legacy(core.int)),
    [_idleCheckDuration]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_scrollHost$]: dart.fieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    [_scrollSub]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(scroll_host_interface.ScrollHostEvent)))),
    [_scrollTimestamp]: dart.fieldType(dart.legacy(core.int)),
    [_isScrolling]: dart.fieldType(dart.legacy(core.bool)),
    [_timer]: dart.fieldType(dart.legacy(async.Timer)),
    scrollStatusCallback: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.bool)])))
  }));
  dart.defineLazy(scroll_observer.ScrollObserver, {
    /*scroll_observer.ScrollObserver.defaultIdleCheckDurationMs*/get defaultIdleCheckDurationMs() {
      return 150;
    }
  }, true);
  var _name$ = dart.privateName(gestures, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  gestures.GestureDirection = class GestureDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gestures.GestureDirection.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gestures.GestureDirection.prototype;
  dart.addTypeTests(gestures.GestureDirection);
  dart.addTypeCaches(gestures.GestureDirection);
  dart.setMethodSignature(gestures.GestureDirection, () => ({
    __proto__: dart.getMethods(gestures.GestureDirection.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(gestures.GestureDirection, L1);
  dart.setFieldSignature(gestures.GestureDirection, () => ({
    __proto__: dart.getFields(gestures.GestureDirection.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(gestures.GestureDirection, ['toString']);
  gestures.GestureDirection.up = C0 || CT.C0;
  gestures.GestureDirection.down = C1 || CT.C1;
  gestures.GestureDirection.left = C2 || CT.C2;
  gestures.GestureDirection.right = C3 || CT.C3;
  gestures.GestureDirection.values = C4 || CT.C4;
  var _clock$ = dart.privateName(gestures, "_clock");
  gestures.GestureListenerFactory = class GestureListenerFactory extends core.Object {
    create(element, isDirectionScrollable) {
      return new gestures.GestureListener.new(element, isDirectionScrollable, this[_clock$]);
    }
  };
  (gestures.GestureListenerFactory.new = function(_clock) {
    this[_clock$] = _clock;
    ;
  }).prototype = gestures.GestureListenerFactory.prototype;
  dart.addTypeTests(gestures.GestureListenerFactory);
  dart.addTypeCaches(gestures.GestureListenerFactory);
  dart.setMethodSignature(gestures.GestureListenerFactory, () => ({
    __proto__: dart.getMethods(gestures.GestureListenerFactory.__proto__),
    create: dart.fnType(dart.legacy(gestures.GestureListener), [dart.legacy(html.Element), dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(gestures.GestureDirection)]))])
  }));
  dart.setLibraryUri(gestures.GestureListenerFactory, L1);
  dart.setFieldSignature(gestures.GestureListenerFactory, () => ({
    __proto__: dart.getFields(gestures.GestureListenerFactory.__proto__),
    [_clock$]: dart.finalFieldType(dart.legacy(clock.Clock))
  }));
  var deltaX$ = dart.privateName(scroll_host_event_impl, "ScrollHostEventImpl.deltaX");
  var deltaY$ = dart.privateName(scroll_host_event_impl, "ScrollHostEventImpl.deltaY");
  scroll_host_event_impl.ScrollHostEventImpl = class ScrollHostEventImpl extends core.Object {
    get deltaX() {
      return this[deltaX$];
    }
    set deltaX(value) {
      super.deltaX = value;
    }
    get deltaY() {
      return this[deltaY$];
    }
    set deltaY(value) {
      super.deltaY = value;
    }
  };
  (scroll_host_event_impl.ScrollHostEventImpl.new = function(deltaX, deltaY) {
    this[deltaX$] = deltaX;
    this[deltaY$] = deltaY;
    ;
  }).prototype = scroll_host_event_impl.ScrollHostEventImpl.prototype;
  dart.addTypeTests(scroll_host_event_impl.ScrollHostEventImpl);
  dart.addTypeCaches(scroll_host_event_impl.ScrollHostEventImpl);
  scroll_host_event_impl.ScrollHostEventImpl[dart.implements] = () => [scroll_host_interface.ScrollHostEvent];
  dart.setLibraryUri(scroll_host_event_impl.ScrollHostEventImpl, L2);
  dart.setFieldSignature(scroll_host_event_impl.ScrollHostEventImpl, () => ({
    __proto__: dart.getFields(scroll_host_event_impl.ScrollHostEventImpl.__proto__),
    deltaX: dart.finalFieldType(dart.legacy(core.int)),
    deltaY: dart.finalFieldType(dart.legacy(core.int))
  }));
  var startingTarget$ = dart.privateName(gestures, "GestureEvent.startingTarget");
  gestures.GestureEvent = class GestureEvent extends scroll_host_event_impl.ScrollHostEventImpl {
    get startingTarget() {
      return this[startingTarget$];
    }
    set startingTarget(value) {
      super.startingTarget = value;
    }
  };
  (gestures.GestureEvent.new = function(deltaX, deltaY, startingTarget) {
    this[startingTarget$] = startingTarget;
    gestures.GestureEvent.__proto__.new.call(this, deltaX, deltaY);
    ;
  }).prototype = gestures.GestureEvent.prototype;
  dart.addTypeTests(gestures.GestureEvent);
  dart.addTypeCaches(gestures.GestureEvent);
  dart.setLibraryUri(gestures.GestureEvent, L1);
  dart.setFieldSignature(gestures.GestureEvent, () => ({
    __proto__: dart.getFields(gestures.GestureEvent.__proto__),
    startingTarget: dart.finalFieldType(dart.legacy(html.EventTarget))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C5;
  var _scrollController$ = dart.privateName(gestures, "_scrollController");
  var _disposer = dart.privateName(gestures, "_disposer");
  var _gesture = dart.privateName(gestures, "_gesture");
  var _directions = dart.privateName(gestures, "_directions");
  var _startPoint = dart.privateName(gestures, "_startPoint");
  var _capturing = dart.privateName(gestures, "_capturing");
  var _element$ = dart.privateName(gestures, "_element");
  var _isDirectionScrollable$ = dart.privateName(gestures, "_isDirectionScrollable");
  var _scrollInterval$ = dart.privateName(gestures, "_scrollInterval");
  var _startListeners = dart.privateName(gestures, "_startListeners");
  var _onCancel = dart.privateName(gestures, "_onCancel");
  var _onTouchStart = dart.privateName(gestures, "_onTouchStart");
  var _onTouchMove = dart.privateName(gestures, "_onTouchMove");
  var _onTouchEnd = dart.privateName(gestures, "_onTouchEnd");
  var _scrollTimer = dart.privateName(gestures, "_scrollTimer");
  gestures.GestureListener = class GestureListener extends core.Object {
    get scrollStream() {
      if (this[_scrollController$] == null) {
        this[_scrollController$] = StreamControllerOfGestureEventL().broadcast({onListen: dart.bind(this, _startListeners), onCancel: dart.bind(this, _onCancel)});
      }
      return this[_scrollController$].stream;
    }
    [_startListeners]() {
      if (this[_disposer] != null) return;
      this[_disposer] = new disposer.Disposer.oneShot();
      this[_disposer].addStreamSubscription(TouchEventL(), this[_element$][$onTouchStart].listen(dart.bind(this, _onTouchStart)));
      this[_disposer].addStreamSubscription(TouchEventL(), this[_element$][$onTouchMove].listen(dart.bind(this, _onTouchMove)));
      this[_disposer].addStreamSubscription(TouchEventL(), this[_element$][$onTouchEnd].listen(dart.bind(this, _onTouchEnd)));
    }
    [_onCancel]() {
      if (dart.test(this[_scrollController$].hasListener)) return;
      this[_disposer].dispose();
      this[_disposer] = null;
    }
    get isGestureInProgress() {
      let t0;
      if ((t0 = this[_gesture], t0 == null ? null : t0[_scrollTimer]) == null) return false;
      return this[_gesture][_scrollTimer].isActive;
    }
    [_onTouchStart](touchStart) {
      let t0;
      if (dart.notNull(touchStart.touches[$length]) > 1) return;
      this[_directions] = gestures.innerScrollableDirections(this[_element$], touchStart[$target]);
      this[_startPoint] = touchStart.touches[$single][$screen];
      this[_capturing] = false;
      t0 = this[_gesture];
      t0 == null ? null : t0.cancel();
      this[_gesture] = new gestures._Gesture.new(this[_scrollController$], this[_clock$], this[_scrollInterval$]);
      this[_gesture].start(touchStart);
    }
    [_onTouchMove](touchMove) {
      let t0;
      if (this[_gesture] == null) return null;
      if (dart.test(this[_gesture].finished)) return this[_onTouchStart](touchMove);
      if (!dart.test(this[_capturing])) {
        let delta = touchMove.touches[$first][$screen]['-'](this[_startPoint]);
        if (dart.notNull(delta.y) > 0 && dart.test(this[_directions][$_get](gestures.GestureDirection.up)) || dart.notNull(delta.y) < 0 && dart.test(this[_directions][$_get](gestures.GestureDirection.down)) || dart.notNull(delta.x) > 0 && dart.test(this[_directions][$_get](gestures.GestureDirection.left)) || dart.notNull(delta.x) < 0 && dart.test(this[_directions][$_get](gestures.GestureDirection.right))) {
          this[_gesture] = null;
          return null;
        }
        if (!dart.test((t0 = gestures.scrollDirection(delta.x, delta.y), this[_isDirectionScrollable$](t0)))) {
          this[_gesture] = null;
          return null;
        }
        this[_capturing] = true;
      }
      touchMove.stopPropagation();
      touchMove.preventDefault();
      this[_gesture].update(touchMove);
    }
    [_onTouchEnd](touchEnd) {
      if (this[_gesture] == null) return null;
      touchEnd.stopPropagation();
      this[_gesture].finish();
    }
    dispose() {
      let t0, t0$, t0$0;
      t0 = this[_gesture];
      t0 == null ? null : t0.cancel();
      this[_gesture] = null;
      t0$ = this[_scrollController$];
      t0$ == null ? null : t0$.close();
      this[_scrollController$] = null;
      t0$0 = this[_disposer];
      t0$0 == null ? null : t0$0.dispose();
      this[_disposer] = null;
    }
  };
  (gestures.GestureListener.new = function(_element, _isDirectionScrollable, _clock, opts) {
    let scrollInterval = opts && 'scrollInterval' in opts ? opts.scrollInterval : C5 || CT.C5;
    this[_scrollController$] = null;
    this[_disposer] = null;
    this[_gesture] = null;
    this[_directions] = null;
    this[_startPoint] = null;
    this[_capturing] = false;
    this[_element$] = _element;
    this[_isDirectionScrollable$] = _isDirectionScrollable;
    this[_clock$] = _clock;
    this[_scrollInterval$] = scrollInterval;
    ;
  }).prototype = gestures.GestureListener.prototype;
  dart.addTypeTests(gestures.GestureListener);
  dart.addTypeCaches(gestures.GestureListener);
  gestures.GestureListener[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(gestures.GestureListener, () => ({
    __proto__: dart.getMethods(gestures.GestureListener.__proto__),
    [_startListeners]: dart.fnType(dart.void, []),
    [_onCancel]: dart.fnType(dart.void, []),
    [_onTouchStart]: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    [_onTouchMove]: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    [_onTouchEnd]: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(gestures.GestureListener, () => ({
    __proto__: dart.getGetters(gestures.GestureListener.__proto__),
    scrollStream: dart.legacy(async.Stream$(dart.legacy(gestures.GestureEvent))),
    isGestureInProgress: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(gestures.GestureListener, L1);
  dart.setFieldSignature(gestures.GestureListener, () => ({
    __proto__: dart.getFields(gestures.GestureListener.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_isDirectionScrollable$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(gestures.GestureDirection)]))),
    [_clock$]: dart.finalFieldType(dart.legacy(clock.Clock)),
    [_scrollInterval$]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_scrollController$]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(gestures.GestureEvent)))),
    [_disposer]: dart.fieldType(dart.legacy(disposer.Disposer)),
    [_gesture]: dart.fieldType(dart.legacy(gestures._Gesture)),
    [_directions]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(gestures.GestureDirection), dart.legacy(core.bool)))),
    [_startPoint]: dart.fieldType(dart.legacy(math.Point$(core.num))),
    [_capturing]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(gestures.GestureListener, {
    /*gestures.GestureListener._defaultScrollInterval*/get _defaultScrollInterval() {
      return C5 || CT.C5;
    }
  }, true);
  var _startTime = dart.privateName(gestures, "_startTime");
  var _lastTime = dart.privateName(gestures, "_lastTime");
  var _lastTouchPoint = dart.privateName(gestures, "_lastTouchPoint");
  var _lastSyncPoint = dart.privateName(gestures, "_lastSyncPoint");
  var _finished = dart.privateName(gestures, "_finished");
  var _startingTarget = dart.privateName(gestures, "_startingTarget");
  var _velocityX = dart.privateName(gestures, "_velocityX");
  var _velocityY = dart.privateName(gestures, "_velocityY");
  var _velocity = dart.privateName(gestures, "_velocity");
  var _addDragEvent = dart.privateName(gestures, "_addDragEvent");
  var _addFlingEvent = dart.privateName(gestures, "_addFlingEvent");
  var _syncToLastTouchPoint = dart.privateName(gestures, "_syncToLastTouchPoint");
  var C6;
  gestures._Gesture = class _Gesture extends core.Object {
    get finished() {
      return this[_finished];
    }
    get [_velocityX]() {
      let deltaX = dart.asNullableInt(dart.notNull(this[_startPoint].x) - dart.notNull(this[_lastTouchPoint].x));
      let deltaT = this[_lastTime].difference(this[_startTime]).inMilliseconds;
      return deltaT === 0 ? 0.0 : deltaX[$toDouble]() / dart.notNull(deltaT);
    }
    get [_velocityY]() {
      let deltaY = dart.asNullableInt(dart.notNull(this[_startPoint].y) - dart.notNull(this[_lastTouchPoint].y));
      let deltaT = this[_lastTime].difference(this[_startTime]).inMilliseconds;
      return deltaT === 0 ? 0.0 : deltaY[$toDouble]() / dart.notNull(deltaT);
    }
    get [_velocity]() {
      let x = this[_velocityX];
      let y = this[_velocityY];
      return math.sqrt(dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y));
    }
    start(touchStart) {
      if (!(this[_scrollTimer] == null)) dart.assertFailed(null, L3, 261, 12, "_scrollTimer == null");
      this[_scrollTimer] = async.Timer.periodic(this[_scrollInterval$], dart.bind(this, _addDragEvent));
      this[_startTime] = this[_clock$].now();
      this[_lastTime] = this[_startTime];
      this[_startPoint] = touchStart.touches[$single][$screen];
      this[_lastTouchPoint] = this[_startPoint];
      this[_lastSyncPoint] = this[_startPoint];
      this[_startingTarget] = touchStart[$target];
    }
    update(touchMove) {
      if (!!dart.test(this[_finished])) dart.assertFailed(null, L3, 277, 12, "!_finished");
      this[_lastTime] = this[_clock$].now();
      this[_lastTouchPoint] = touchMove.touches[$first][$screen];
    }
    finish() {
      if (dart.test(this[_finished])) return;
      this[_finished] = true;
      this[_scrollTimer].cancel();
      if (this[_velocity][$abs]() >= 2) {
        this[_scrollTimer] = async.Timer.periodic(this[_scrollInterval$], dart.bind(this, _addFlingEvent));
      } else {
        this[_syncToLastTouchPoint]();
      }
    }
    cancel() {
      this[_finished] = true;
      this[_scrollTimer].cancel();
    }
    [_syncToLastTouchPoint]() {
      let delta = this[_lastSyncPoint]['-'](this[_lastTouchPoint]);
      if (delta.x !== 0 || delta.y !== 0) {
        this[_scrollController$].add(new gestures.GestureEvent.new(dart.asNullableInt(delta.x), dart.asNullableInt(delta.y), this[_startingTarget]));
        this[_lastSyncPoint] = this[_lastTouchPoint];
      }
    }
    [_addDragEvent](_) {
      if (dart.test(this[_lastTime].add(gestures._Gesture._touchMoveTimeout).isBefore(this[_clock$].now()))) {
        return this.cancel();
      }
      this[_syncToLastTouchPoint]();
    }
    [_addFlingEvent](_) {
      let deltaT = this[_clock$].now().difference(this[_lastTime]).inMilliseconds;
      let speed = this[_velocity][$abs]() - 0.005 * dart.notNull(deltaT);
      let deltaX = (speed * this[_velocityX][$sign] * dart.notNull(this[_scrollInterval$].inMilliseconds))[$round]();
      let deltaY = (speed * this[_velocityY][$sign] * dart.notNull(this[_scrollInterval$].inMilliseconds))[$round]();
      if (speed > 0 && (deltaX !== 0 || deltaY !== 0)) {
        this[_scrollController$].add(new gestures.GestureEvent.new(deltaX, deltaY, this[_startingTarget]));
      } else {
        this.cancel();
      }
    }
  };
  (gestures._Gesture.new = function(_scrollController, _clock, _scrollInterval) {
    this[_scrollTimer] = null;
    this[_startTime] = null;
    this[_lastTime] = null;
    this[_startPoint] = null;
    this[_lastTouchPoint] = null;
    this[_lastSyncPoint] = null;
    this[_finished] = false;
    this[_startingTarget] = null;
    this[_scrollController$] = _scrollController;
    this[_clock$] = _clock;
    this[_scrollInterval$] = _scrollInterval;
    ;
  }).prototype = gestures._Gesture.prototype;
  dart.addTypeTests(gestures._Gesture);
  dart.addTypeCaches(gestures._Gesture);
  dart.setMethodSignature(gestures._Gesture, () => ({
    __proto__: dart.getMethods(gestures._Gesture.__proto__),
    start: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    update: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    finish: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_syncToLastTouchPoint]: dart.fnType(dart.void, []),
    [_addDragEvent]: dart.fnType(dart.void, [dart.legacy(async.Timer)]),
    [_addFlingEvent]: dart.fnType(dart.void, [dart.legacy(async.Timer)])
  }));
  dart.setGetterSignature(gestures._Gesture, () => ({
    __proto__: dart.getGetters(gestures._Gesture.__proto__),
    finished: dart.legacy(core.bool),
    [_velocityX]: dart.legacy(core.double),
    [_velocityY]: dart.legacy(core.double),
    [_velocity]: dart.legacy(core.double)
  }));
  dart.setLibraryUri(gestures._Gesture, L1);
  dart.setFieldSignature(gestures._Gesture, () => ({
    __proto__: dart.getFields(gestures._Gesture.__proto__),
    [_scrollController$]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(gestures.GestureEvent)))),
    [_clock$]: dart.finalFieldType(dart.legacy(clock.Clock)),
    [_scrollInterval$]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_scrollTimer]: dart.fieldType(dart.legacy(async.Timer)),
    [_startTime]: dart.fieldType(dart.legacy(core.DateTime)),
    [_lastTime]: dart.fieldType(dart.legacy(core.DateTime)),
    [_startPoint]: dart.fieldType(dart.legacy(math.Point$(core.num))),
    [_lastTouchPoint]: dart.fieldType(dart.legacy(math.Point$(core.num))),
    [_lastSyncPoint]: dart.fieldType(dart.legacy(math.Point$(core.num))),
    [_finished]: dart.fieldType(dart.legacy(core.bool)),
    [_startingTarget]: dart.fieldType(dart.legacy(html.EventTarget))
  }));
  dart.defineLazy(gestures._Gesture, {
    /*gestures._Gesture._touchMoveTimeout*/get _touchMoveTimeout() {
      return C6 || CT.C6;
    },
    /*gestures._Gesture._flingSpeedThreshold*/get _flingSpeedThreshold() {
      return 2;
    },
    /*gestures._Gesture._frictionCoefficient*/get _frictionCoefficient() {
      return 0.005;
    }
  }, true);
  gestures.scrollDirection = function scrollDirection(deltaX, deltaY) {
    let deltaXAbs = deltaX[$abs]();
    let deltaYAbs = deltaY[$abs]();
    if (dart.notNull(deltaY) >= deltaXAbs) {
      return gestures.GestureDirection.up;
    } else if (dart.notNull(deltaY) <= -deltaXAbs) {
      return gestures.GestureDirection.down;
    } else if (dart.notNull(deltaX) > deltaYAbs) {
      return gestures.GestureDirection.right;
    } else if (dart.notNull(deltaX) < -deltaYAbs) {
      return gestures.GestureDirection.left;
    }
    return null;
  };
  gestures.innerScrollableDirections = function innerScrollableDirections(host, target) {
    let directions = new (LinkedMapOfGestureDirectionL$boolL()).from([gestures.GestureDirection.up, false, gestures.GestureDirection.down, false, gestures.GestureDirection.left, false, gestures.GestureDirection.right, false]);
    let element = ElementL().as(target);
    while (!dart.equals(element, host) && element != null) {
      let style = element[$getComputedStyle]();
      let overflowX = style[$getPropertyValue]("overflow-x");
      if (overflowX === "auto" || overflowX === "scroll") {
        directions[$_set](gestures.GestureDirection.left, dart.test(directions[$_get](gestures.GestureDirection.left)) || dart.notNull(element[$scrollLeft]) > 0);
        directions[$_set](gestures.GestureDirection.right, dart.test(directions[$_get](gestures.GestureDirection.right)) || dart.notNull(element[$scrollLeft]) + dart.notNull(element.clientWidth) < dart.notNull(element[$scrollWidth]));
      }
      let overflowY = style[$getPropertyValue]("overflow-y");
      if (overflowY === "auto" || overflowY === "scroll") {
        directions[$_set](gestures.GestureDirection.up, dart.test(directions[$_get](gestures.GestureDirection.up)) || dart.notNull(element[$scrollTop]) > 0);
        directions[$_set](gestures.GestureDirection.down, dart.test(directions[$_get](gestures.GestureDirection.down)) || dart.notNull(element[$scrollTop]) + dart.notNull(element.clientHeight) < dart.notNull(element[$scrollHeight]));
      }
      element = element[$parent];
    }
    return directions;
  };
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/interface", {
    "package:angular_components/src/utils/angular/scroll_host/scroll_observer.dart": scroll_observer,
    "package:angular_components/utils/angular/scroll_host/interface.dart": $interface,
    "package:angular_components/src/utils/angular/scroll_host/gestures.dart": gestures,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.dart": scroll_host_event_impl
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../../src/utils/angular/scroll_host/scroll_observer.dart","../../../src/utils/angular/scroll_host/gestures.dart","../../../src/utils/angular/scroll_host/scroll_host_event_impl.dart"],"names":[],"mappings":"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","file":"interface.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__scroll_observer: scroll_observer,
    utils__angular__scroll_host__interface: $interface,
    src__utils__angular__scroll_host__gestures: gestures,
    src__utils__angular__scroll_host__scroll_host_event_impl: scroll_host_event_impl
  };
}));

//# sourceMappingURL=interface.unsound.ddc.js.map
