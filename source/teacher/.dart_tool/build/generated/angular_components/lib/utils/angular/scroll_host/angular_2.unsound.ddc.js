define(['dart_sdk', 'packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/quiver/src/time/clock', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_compiler/v1/src/metadata'], (function load__packages__angular_components__utils__angular__scroll_host__angular_2(dart_sdk, packages__angular_components__src__utils__angular__scroll_host__pan_controller_impl, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__angular__scroll_host__interface, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__quiver__src__time__clock, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_compiler__v1__src__metadata) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_host_base = packages__angular_components__src__utils__angular__scroll_host__pan_controller_impl.src__utils__angular__scroll_host__scroll_host_base;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  var angular_2 = Object.create(dart.library);
  var $overflowY = dartx.overflowY;
  var StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var ScrollHostEventL = () => (ScrollHostEventL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHostEvent)))();
  var StreamControllerOfScrollHostEventL = () => (StreamControllerOfScrollHostEventL = dart.constFn(async.StreamController$(ScrollHostEventL())))();
  var StreamControllerLOfScrollHostEventL = () => (StreamControllerLOfScrollHostEventL = dart.constFn(dart.legacy(StreamControllerOfScrollHostEventL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var StickyControllerL = () => (StickyControllerL = dart.constFn(dart.legacy(scroll_host_interface.StickyController)))();
  var IntersectionObserverL = () => (IntersectionObserverL = dart.constFn(dart.legacy(html.IntersectionObserver)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var PanControllerL = () => (PanControllerL = dart.constFn(dart.legacy(scroll_host_interface.PanController)))();
  var StreamSubscriptionL = () => (StreamSubscriptionL = dart.constFn(dart.legacy(async.StreamSubscription)))();
  var GestureListenerL = () => (GestureListenerL = dart.constFn(dart.legacy(gestures.GestureListener)))();
  var StreamOfScrollHostEventL = () => (StreamOfScrollHostEventL = dart.constFn(async.Stream$(ScrollHostEventL())))();
  var StreamLOfScrollHostEventL = () => (StreamLOfScrollHostEventL = dart.constFn(dart.legacy(StreamOfScrollHostEventL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var IntersectionObserverEntryL = () => (IntersectionObserverEntryL = dart.constFn(dart.legacy(html.IntersectionObserverEntry)))();
  var StreamControllerOfIntersectionObserverEntryL = () => (StreamControllerOfIntersectionObserverEntryL = dart.constFn(async.StreamController$(IntersectionObserverEntryL())))();
  var StreamControllerLOfIntersectionObserverEntryL = () => (StreamControllerLOfIntersectionObserverEntryL = dart.constFn(dart.legacy(StreamControllerOfIntersectionObserverEntryL())))();
  var MapOfElementL$StreamControllerLOfIntersectionObserverEntryL = () => (MapOfElementL$StreamControllerLOfIntersectionObserverEntryL = dart.constFn(core.Map$(ElementL(), StreamControllerLOfIntersectionObserverEntryL())))();
  var MapLOfElementL$StreamControllerLOfIntersectionObserverEntryL = () => (MapLOfElementL$StreamControllerLOfIntersectionObserverEntryL = dart.constFn(dart.legacy(MapOfElementL$StreamControllerLOfIntersectionObserverEntryL())))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var WindowScrollHostL = () => (WindowScrollHostL = dart.constFn(dart.legacy(angular_2.WindowScrollHost)))();
  var ScrollHostL = () => (ScrollHostL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHost)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var GestureListenerFactoryL = () => (GestureListenerFactoryL = dart.constFn(dart.legacy(gestures.GestureListenerFactory)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(di_providers.Provider)))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/angular/scroll_host/angular_2.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_ngZone', _ngZone));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_nativeOnScrollController', _nativeOnScrollController));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_isDirectionScrollable', _isDirectionScrollable));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_scrollInProgress', _scrollInProgress));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_domService', _domService));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_stickyController', _stickyController));
    },
    get C6() {
      return C6 = dart.const(new _js_helper.PrivateSymbol.new('_intersectionObserver', _intersectionObserver));
    },
    get C7() {
      return C7 = dart.const(new _js_helper.PrivateSymbol.new('_elementListenersDisposer', _elementListenersDisposer));
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_scrollFrameDelta', _scrollFrameDelta));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_startElementListeners', _startElementListeners));
    },
    get C10() {
      return C10 = dart.const(new _js_helper.PrivateSymbol.new('_onIntersection', _onIntersection));
    },
    get C11() {
      return C11 = dart.const(new _js_helper.PrivateSymbol.new('_onScrollController', _onScrollController));
    },
    get C12() {
      return C12 = dart.const(new _js_helper.PrivateSymbol.new('_stopNativeScrollListener', _stopNativeScrollListener));
    },
    get C13() {
      return C13 = dart.const(new _js_helper.PrivateSymbol.new('_scrollFrameScheduled', _scrollFrameScheduled));
    },
    get C14() {
      return C14 = dart.const(new _js_helper.PrivateSymbol.new('_panController', _panController));
    },
    get C15() {
      return C15 = dart.const(new _js_helper.PrivateSymbol.new('_stopElementListeners', _stopElementListeners));
    },
    get C16() {
      return C16 = dart.const(new _js_helper.PrivateSymbol.new('_nativeOnScrollSubscription', _nativeOnScrollSubscription));
    },
    get C17() {
      return C17 = dart.const(new _js_helper.PrivateSymbol.new('_gestureListener', _gestureListener));
    },
    get C18() {
      return C18 = dart.const(new _js_helper.PrivateSymbol.new('_onNativeScroll', _onNativeScroll));
    },
    get C19() {
      return C19 = dart.const(new _js_helper.PrivateSymbol.new('_onScrollStream', _onScrollStream));
    },
    get C20() {
      return C20 = dart.const(new _js_helper.PrivateSymbol.new('_intersectionStreams', _intersectionStreams));
    },
    get C21() {
      return C21 = dart.const(new _js_helper.PrivateSymbol.new('_nativeOnScrollController=', _nativeOnScrollController_));
    },
    get C22() {
      return C22 = dart.const(new _js_helper.PrivateSymbol.new('_scrollInProgress=', _scrollInProgress_));
    },
    get C23() {
      return C23 = dart.const(new _js_helper.PrivateSymbol.new('_stickyController=', _stickyController_));
    },
    get C24() {
      return C24 = dart.const(new _js_helper.PrivateSymbol.new('_intersectionObserver=', _intersectionObserver_));
    },
    get C25() {
      return C25 = dart.const(new _js_helper.PrivateSymbol.new('_elementListenersDisposer=', _elementListenersDisposer_));
    },
    get C26() {
      return C26 = dart.const(new _js_helper.PrivateSymbol.new('_scrollFrameDelta=', _scrollFrameDelta_));
    },
    get C27() {
      return C27 = dart.const(new _js_helper.PrivateSymbol.new('_onScrollController=', _onScrollController_));
    },
    get C28() {
      return C28 = dart.const(new _js_helper.PrivateSymbol.new('_scrollFrameScheduled=', _scrollFrameScheduled_));
    },
    get C29() {
      return C29 = dart.const(new _js_helper.PrivateSymbol.new('_panController=', _panController_));
    },
    get C30() {
      return C30 = dart.const(new _js_helper.PrivateSymbol.new('_nativeOnScrollSubscription=', _nativeOnScrollSubscription_));
    },
    get C31() {
      return C31 = dart.const(new _js_helper.PrivateSymbol.new('_gestureListener=', _gestureListener_));
    },
    get C32() {
      return C32 = dart.const(new _js_helper.PrivateSymbol.new('_onScrollStream=', _onScrollStream_));
    },
    get C34() {
      return C34 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C33() {
      return C33 = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C34 || CT.C34
      });
    },
    get C37() {
      return C37 = dart.wrapType(WindowScrollHostL());
    },
    get C38() {
      return C38 = dart.wrapType(ScrollHostL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C37 || CT.C37,
        [Provider_token]: C38 || CT.C38
      });
    },
    get C40() {
      return C40 = dart.wrapType(ClockL());
    },
    get C39() {
      return C39 = dart.const({
        __proto__: di_providers.ValueProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: C33 || CT.C33,
        [Provider_useClass]: null,
        [Provider_token]: C40 || CT.C40
      });
    },
    get C42() {
      return C42 = dart.wrapType(GestureListenerFactoryL());
    },
    get C41() {
      return C41 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C42 || CT.C42,
        [Provider_token]: C42 || CT.C42
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C39 || CT.C39, C41 || CT.C41], ProviderL());
    },
    get C44() {
      return C44 = dart.constList([], ModuleL());
    },
    get C43() {
      return C43 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C35 || CT.C35,
        [Module_include]: C44 || CT.C44
      });
    }
  }, false);
  var _onUpdate = dart.privateName(angular_2, "_onUpdate");
  var _scrollHost$ = dart.privateName(angular_2, "_scrollHost");
  var _disableAutoScroll = dart.privateName(angular_2, "_disableAutoScroll");
  var _usePositionSticky = dart.privateName(angular_2, "_usePositionSticky");
  var _useTouchGestureListener = dart.privateName(angular_2, "_useTouchGestureListener");
  var _enableSmoothPushing = dart.privateName(angular_2, "_enableSmoothPushing");
  var _gestureListenerFactory$ = dart.privateName(angular_2, "_gestureListenerFactory");
  var _domService = dart.privateName(angular_2, "_domService");
  var _ngZone = dart.privateName(angular_2, "_ngZone");
  var _init = dart.privateName(angular_2, "_init");
  var C0;
  var _ngZone$ = dart.privateName(scroll_host_base, "_ngZone");
  var _nativeOnScrollController = dart.privateName(angular_2, "_nativeOnScrollController");
  var C1;
  var _nativeOnScrollController$ = dart.privateName(scroll_host_base, "_nativeOnScrollController");
  var _isDirectionScrollable = dart.privateName(angular_2, "_isDirectionScrollable");
  var C2;
  var _isDirectionScrollable$ = dart.privateName(scroll_host_base, "_isDirectionScrollable");
  var _scrollInProgress = dart.privateName(angular_2, "_scrollInProgress");
  var C3;
  var _scrollInProgress$ = dart.privateName(scroll_host_base, "_scrollInProgress");
  var C4;
  var _domService$ = dart.privateName(scroll_host_base, "_domService");
  var _stickyController = dart.privateName(angular_2, "_stickyController");
  var C5;
  var _stickyController$ = dart.privateName(scroll_host_base, "_stickyController");
  var _intersectionObserver = dart.privateName(angular_2, "_intersectionObserver");
  var C6;
  var _intersectionObserver$ = dart.privateName(scroll_host_base, "_intersectionObserver");
  var _elementListenersDisposer = dart.privateName(angular_2, "_elementListenersDisposer");
  var C7;
  var _elementListenersDisposer$ = dart.privateName(scroll_host_base, "_elementListenersDisposer");
  var _scrollFrameDelta = dart.privateName(angular_2, "_scrollFrameDelta");
  var C8;
  var _scrollFrameDelta$ = dart.privateName(scroll_host_base, "_scrollFrameDelta");
  var _startElementListeners = dart.privateName(angular_2, "_startElementListeners");
  var C9;
  var _startElementListeners$ = dart.privateName(scroll_host_base, "_startElementListeners");
  var _onIntersection = dart.privateName(angular_2, "_onIntersection");
  var C10;
  var _onIntersection$ = dart.privateName(scroll_host_base, "_onIntersection");
  var _onScrollController = dart.privateName(angular_2, "_onScrollController");
  var C11;
  var _onScrollController$ = dart.privateName(scroll_host_base, "_onScrollController");
  var _stopNativeScrollListener = dart.privateName(angular_2, "_stopNativeScrollListener");
  var C12;
  var _stopNativeScrollListener$ = dart.privateName(scroll_host_base, "_stopNativeScrollListener");
  var _scrollFrameScheduled = dart.privateName(angular_2, "_scrollFrameScheduled");
  var C13;
  var _scrollFrameScheduled$ = dart.privateName(scroll_host_base, "_scrollFrameScheduled");
  var _panController = dart.privateName(angular_2, "_panController");
  var C14;
  var _panController$ = dart.privateName(scroll_host_base, "_panController");
  var _stopElementListeners = dart.privateName(angular_2, "_stopElementListeners");
  var C15;
  var _stopElementListeners$ = dart.privateName(scroll_host_base, "_stopElementListeners");
  var _nativeOnScrollSubscription = dart.privateName(angular_2, "_nativeOnScrollSubscription");
  var C16;
  var _nativeOnScrollSubscription$ = dart.privateName(scroll_host_base, "_nativeOnScrollSubscription");
  var _gestureListener = dart.privateName(angular_2, "_gestureListener");
  var C17;
  var _gestureListener$ = dart.privateName(scroll_host_base, "_gestureListener");
  var _onNativeScroll = dart.privateName(angular_2, "_onNativeScroll");
  var C18;
  var _onNativeScroll$ = dart.privateName(scroll_host_base, "_onNativeScroll");
  var _onScrollStream = dart.privateName(angular_2, "_onScrollStream");
  var C19;
  var _onScrollStream$ = dart.privateName(scroll_host_base, "_onScrollStream");
  var _intersectionStreams = dart.privateName(angular_2, "_intersectionStreams");
  var C20;
  var _intersectionStreams$ = dart.privateName(scroll_host_base, "_intersectionStreams");
  var _nativeOnScrollController_ = dart.privateName(angular_2, "_nativeOnScrollController=");
  var C21;
  var _scrollInProgress_ = dart.privateName(angular_2, "_scrollInProgress=");
  var C22;
  var _stickyController_ = dart.privateName(angular_2, "_stickyController=");
  var C23;
  var _intersectionObserver_ = dart.privateName(angular_2, "_intersectionObserver=");
  var C24;
  var _elementListenersDisposer_ = dart.privateName(angular_2, "_elementListenersDisposer=");
  var C25;
  var _scrollFrameDelta_ = dart.privateName(angular_2, "_scrollFrameDelta=");
  var C26;
  var _onScrollController_ = dart.privateName(angular_2, "_onScrollController=");
  var C27;
  var _scrollFrameScheduled_ = dart.privateName(angular_2, "_scrollFrameScheduled=");
  var C28;
  var _panController_ = dart.privateName(angular_2, "_panController=");
  var C29;
  var _nativeOnScrollSubscription_ = dart.privateName(angular_2, "_nativeOnScrollSubscription=");
  var C30;
  var _gestureListener_ = dart.privateName(angular_2, "_gestureListener=");
  var C31;
  var _onScrollStream_ = dart.privateName(angular_2, "_onScrollStream=");
  var C32;
  var _domService$0 = dart.privateName(angular_2, "ElementScrollHost._domService");
  var _ngZone$0 = dart.privateName(angular_2, "ElementScrollHost._ngZone");
  var element$ = dart.privateName(angular_2, "ElementScrollHost.element");
  angular_2.ElementScrollHost = class ElementScrollHost extends core.Object {
    get [_domService]() {
      return this[_domService$0];
    }
    set [_domService](value) {
      super[_domService] = value;
    }
    get [_ngZone]() {
      return this[_ngZone$0];
    }
    set [_ngZone](value) {
      super[_ngZone] = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    ngOnInit() {
      this[_init]();
    }
    [_init]() {
      let t0;
      t0 = this[_scrollHost$];
      t0 == null ? null : t0.dispose();
      this[_scrollHost$] = new scroll_host_base.ElementScrollHostBase.new(this[_domService], this[_ngZone], this[_gestureListenerFactory$], this.element, {usePositionSticky: this[_usePositionSticky], useTouchGestureListener: this[_useTouchGestureListener]});
      this.stickyController.enableSmoothPushing = this[_enableSmoothPushing];
      if (!dart.test(this[_usePositionSticky])) {
        this[_onUpdate].addStream(this.stickyController.onUpdate);
      }
    }
    set disableAutoScroll(value) {
      if (!dart.equals(value, this[_disableAutoScroll])) {
        this[_disableAutoScroll] = value;
        this[_domService].scheduleWrite(dart.fn(() => {
          this.element.style[$overflowY] = dart.test(value) ? "scroll" : "auto";
        }, VoidToNull()));
      }
    }
    set enableSmoothPushing(value) {
      let t0;
      this[_enableSmoothPushing] = value;
      t0 = this.stickyController;
      t0 == null ? null : t0.enableSmoothPushing = value;
    }
    set usePositionSticky(value) {
      this[_usePositionSticky] = value;
      if (this[_scrollHost$] != null) {
        this[_init]();
      }
    }
    set useTouchGestureListener(value) {
      this[_useTouchGestureListener] = value;
      if (this[_scrollHost$] != null) {
        this[_init]();
      }
    }
    get onUpdate() {
      return this[_onUpdate].stream;
    }
    dispose() {
      let t0;
      t0 = this[_scrollHost$];
      t0 == null ? null : t0.dispose();
      this[_onUpdate].close();
    }
    calcViewportRect() {
      return this[_scrollHost$].calcViewportRect();
    }
    scrollToPosition(position) {
      let t0;
      t0 = this[_scrollHost$];
      return t0 == null ? null : t0.scrollToPosition(position);
    }
    scrollWithDelta(delta) {
      let t0;
      t0 = this[_scrollHost$];
      return t0 == null ? null : t0.scrollWithDelta(delta);
    }
    startNativeScrollListener() {
      return this[_scrollHost$].startNativeScrollListener();
    }
    get scrollHeight() {
      return this[_scrollHost$].scrollHeight;
    }
    get clientHeight() {
      return this[_scrollHost$].clientHeight;
    }
    get nativeOnScroll() {
      return this[_scrollHost$].nativeOnScroll;
    }
    get usePositionSticky() {
      return this[_scrollHost$].usePositionSticky;
    }
    get useTouchGestureListener() {
      return this[_scrollHost$].useTouchGestureListener;
    }
    get throttleScrollEvents() {
      return this[_scrollHost$].throttleScrollEvents;
    }
    get scrollbarHost() {
      return this[_scrollHost$].scrollbarHost;
    }
    get clientWidth() {
      return this[_scrollHost$].clientWidth;
    }
    get offsetX() {
      return this[_scrollHost$].offsetX;
    }
    get offsetY() {
      return this[_scrollHost$].offsetY;
    }
    get anchorElement() {
      return this[_scrollHost$].anchorElement;
    }
    get onScroll() {
      return this[_scrollHost$].onScroll;
    }
    get panController() {
      return this[_scrollHost$].panController;
    }
    get stickyController() {
      let t0;
      t0 = this[_scrollHost$];
      return t0 == null ? null : t0.stickyController;
    }
    get scrollLength() {
      return this[_scrollHost$].scrollLength;
    }
    get scrollPosition() {
      return this[_scrollHost$].scrollPosition;
    }
    onIntersection(element) {
      return this[_scrollHost$].onIntersection(element);
    }
    ngOnDestroy() {
      this.dispose();
    }
    stopEvent(event) {
      return this[_scrollHost$].stopEvent(event);
    }
    get [_ngZone$]() {
      return NgZoneL().as(this.noSuchMethod(new core._Invocation.getter(C0 || CT.C0)));
    }
    get [_nativeOnScrollController$]() {
      return StreamControllerLOfScrollHostEventL().as(this.noSuchMethod(new core._Invocation.getter(C1 || CT.C1)));
    }
    [_isDirectionScrollable$](d) {
      return boolL().as(this.noSuchMethod(new core._Invocation.method(C2 || CT.C2, null, [d])));
    }
    get [_scrollInProgress$]() {
      return boolL().as(this.noSuchMethod(new core._Invocation.getter(C3 || CT.C3)));
    }
    get [_domService$]() {
      return DomServiceL().as(this.noSuchMethod(new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_stickyController$]() {
      return StickyControllerL().as(this.noSuchMethod(new core._Invocation.getter(C5 || CT.C5)));
    }
    get [_intersectionObserver$]() {
      return IntersectionObserverL().as(this.noSuchMethod(new core._Invocation.getter(C6 || CT.C6)));
    }
    get [_elementListenersDisposer$]() {
      return DisposerL().as(this.noSuchMethod(new core._Invocation.getter(C7 || CT.C7)));
    }
    get [_scrollFrameDelta$]() {
      return intL().as(this.noSuchMethod(new core._Invocation.getter(C8 || CT.C8)));
    }
    [_startElementListeners$]() {
      return this.noSuchMethod(new core._Invocation.method(C9 || CT.C9, null, []));
    }
    [_onIntersection$](entries, _observer) {
      return this.noSuchMethod(new core._Invocation.method(C10 || CT.C10, null, [entries, _observer]));
    }
    get [_onScrollController$]() {
      return StreamControllerLOfScrollHostEventL().as(this.noSuchMethod(new core._Invocation.getter(C11 || CT.C11)));
    }
    [_stopNativeScrollListener$]() {
      return this.noSuchMethod(new core._Invocation.method(C12 || CT.C12, null, []));
    }
    get [_scrollFrameScheduled$]() {
      return boolL().as(this.noSuchMethod(new core._Invocation.getter(C13 || CT.C13)));
    }
    get [_panController$]() {
      return PanControllerL().as(this.noSuchMethod(new core._Invocation.getter(C14 || CT.C14)));
    }
    [_stopElementListeners$]() {
      return this.noSuchMethod(new core._Invocation.method(C15 || CT.C15, null, []));
    }
    get [_nativeOnScrollSubscription$]() {
      return StreamSubscriptionL().as(this.noSuchMethod(new core._Invocation.getter(C16 || CT.C16)));
    }
    get [_gestureListener$]() {
      return GestureListenerL().as(this.noSuchMethod(new core._Invocation.getter(C17 || CT.C17)));
    }
    [_onNativeScroll$](event) {
      return this.noSuchMethod(new core._Invocation.method(C18 || CT.C18, null, [event]));
    }
    get [_onScrollStream$]() {
      return StreamLOfScrollHostEventL().as(this.noSuchMethod(new core._Invocation.getter(C19 || CT.C19)));
    }
    get [_intersectionStreams$]() {
      return MapLOfElementL$StreamControllerLOfIntersectionObserverEntryL().as(this.noSuchMethod(new core._Invocation.getter(C20 || CT.C20)));
    }
    set [_nativeOnScrollController$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C21 || CT.C21, value));
    }
    set [_scrollInProgress$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C22 || CT.C22, value));
    }
    set [_stickyController$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C23 || CT.C23, value));
    }
    set [_intersectionObserver$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C24 || CT.C24, value));
    }
    set [_elementListenersDisposer$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C25 || CT.C25, value));
    }
    set [_scrollFrameDelta$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C26 || CT.C26, value));
    }
    set [_onScrollController$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C27 || CT.C27, value));
    }
    set [_scrollFrameScheduled$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C28 || CT.C28, value));
    }
    set [_panController$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C29 || CT.C29, value));
    }
    set [_nativeOnScrollSubscription$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C30 || CT.C30, value));
    }
    set [_gestureListener$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C31 || CT.C31, value));
    }
    set [_onScrollStream$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C32 || CT.C32, value));
    }
  };
  (angular_2.ElementScrollHost.new = function(_domService, _ngZone, _gestureListenerFactory, element) {
    this[_onUpdate] = StreamControllerOfNull().broadcast({sync: true});
    this[_scrollHost$] = null;
    this[_disableAutoScroll] = null;
    this[_usePositionSticky] = false;
    this[_useTouchGestureListener] = true;
    this[_enableSmoothPushing] = false;
    this[_domService$0] = _domService;
    this[_ngZone$0] = _ngZone;
    this[_gestureListenerFactory$] = _gestureListenerFactory;
    this[element$] = element;
    ;
  }).prototype = angular_2.ElementScrollHost.prototype;
  dart.addTypeTests(angular_2.ElementScrollHost);
  dart.addTypeCaches(angular_2.ElementScrollHost);
  angular_2.ElementScrollHost[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy, scroll_host_base.ElementScrollHostBase];
  dart.setMethodSignature(angular_2.ElementScrollHost, () => ({
    __proto__: dart.getMethods(angular_2.ElementScrollHost.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    [_init]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    calcViewportRect: dart.fnType(dart.legacy(math.Rectangle$(core.num)), []),
    scrollToPosition: dart.fnType(dart.void, [dart.legacy(core.int)]),
    scrollWithDelta: dart.fnType(dart.void, [dart.legacy(core.int)]),
    startNativeScrollListener: dart.fnType(dart.void, []),
    onIntersection: dart.fnType(dart.legacy(async.Stream$(dart.legacy(html.IntersectionObserverEntry))), [dart.legacy(html.Element)]),
    ngOnDestroy: dart.fnType(dart.void, []),
    stopEvent: dart.fnType(dart.void, [dart.legacy(html.WheelEvent)]),
    [_isDirectionScrollable$]: dart.fnType(dart.legacy(core.bool), [dart.legacy(gestures.GestureDirection)]),
    [_startElementListeners$]: dart.fnType(dart.void, []),
    [_onIntersection$]: dart.fnType(dart.void, [dart.legacy(core.Iterable), dart.legacy(html.IntersectionObserver)]),
    [_stopNativeScrollListener$]: dart.fnType(dart.void, []),
    [_stopElementListeners$]: dart.fnType(dart.void, []),
    [_onNativeScroll$]: dart.fnType(dart.void, [dart.legacy(scroll_host_interface.ScrollHostEvent)])
  }));
  dart.setGetterSignature(angular_2.ElementScrollHost, () => ({
    __proto__: dart.getGetters(angular_2.ElementScrollHost.__proto__),
    onUpdate: dart.legacy(async.Stream$(core.Null)),
    scrollHeight: dart.legacy(core.int),
    clientHeight: dart.legacy(core.int),
    nativeOnScroll: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    usePositionSticky: dart.legacy(core.bool),
    useTouchGestureListener: dart.legacy(core.bool),
    throttleScrollEvents: dart.legacy(core.bool),
    scrollbarHost: dart.legacy(html.GlobalEventHandlers),
    clientWidth: dart.legacy(core.int),
    offsetX: dart.legacy(core.num),
    offsetY: dart.legacy(core.num),
    anchorElement: dart.legacy(html.Element),
    onScroll: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    panController: dart.legacy(scroll_host_interface.PanController),
    stickyController: dart.legacy(scroll_host_interface.StickyController),
    scrollLength: dart.legacy(core.int),
    scrollPosition: dart.legacy(core.int),
    [_ngZone$]: dart.legacy(ng_zone.NgZone),
    [_nativeOnScrollController$]: dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    [_scrollInProgress$]: dart.legacy(core.bool),
    [_domService$]: dart.legacy(dom_service.DomService),
    [_stickyController$]: dart.legacy(scroll_host_interface.StickyController),
    [_intersectionObserver$]: dart.legacy(html.IntersectionObserver),
    [_elementListenersDisposer$]: dart.legacy(disposer.Disposer),
    [_scrollFrameDelta$]: dart.legacy(core.int),
    [_onScrollController$]: dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    [_scrollFrameScheduled$]: dart.legacy(core.bool),
    [_panController$]: dart.legacy(scroll_host_interface.PanController),
    [_nativeOnScrollSubscription$]: dart.legacy(async.StreamSubscription),
    [_gestureListener$]: dart.legacy(gestures.GestureListener),
    [_onScrollStream$]: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    [_intersectionStreams$]: dart.legacy(core.Map$(dart.legacy(html.Element), dart.legacy(async.StreamController$(dart.legacy(html.IntersectionObserverEntry)))))
  }));
  dart.setSetterSignature(angular_2.ElementScrollHost, () => ({
    __proto__: dart.getSetters(angular_2.ElementScrollHost.__proto__),
    disableAutoScroll: dart.legacy(core.bool),
    enableSmoothPushing: dart.legacy(core.bool),
    usePositionSticky: dart.legacy(core.bool),
    useTouchGestureListener: dart.legacy(core.bool),
    [_nativeOnScrollController$]: dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    [_scrollInProgress$]: dart.legacy(core.bool),
    [_stickyController$]: dart.legacy(scroll_host_interface.StickyController),
    [_intersectionObserver$]: dart.legacy(html.IntersectionObserver),
    [_elementListenersDisposer$]: dart.legacy(disposer.Disposer),
    [_scrollFrameDelta$]: dart.legacy(core.int),
    [_onScrollController$]: dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    [_scrollFrameScheduled$]: dart.legacy(core.bool),
    [_panController$]: dart.legacy(scroll_host_interface.PanController),
    [_nativeOnScrollSubscription$]: dart.legacy(async.StreamSubscription),
    [_gestureListener$]: dart.legacy(gestures.GestureListener),
    [_onScrollStream$]: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent)))
  }));
  dart.setLibraryUri(angular_2.ElementScrollHost, L0);
  dart.setFieldSignature(angular_2.ElementScrollHost, () => ({
    __proto__: dart.getFields(angular_2.ElementScrollHost.__proto__),
    [_domService]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_ngZone]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    element: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_gestureListenerFactory$]: dart.finalFieldType(dart.legacy(gestures.GestureListenerFactory)),
    [_onUpdate]: dart.finalFieldType(dart.legacy(async.StreamController$(core.Null))),
    [_scrollHost$]: dart.fieldType(dart.legacy(scroll_host_base.ElementScrollHostBase)),
    [_disableAutoScroll]: dart.fieldType(dart.legacy(core.bool)),
    [_usePositionSticky]: dart.fieldType(dart.legacy(core.bool)),
    [_useTouchGestureListener]: dart.fieldType(dart.legacy(core.bool)),
    [_enableSmoothPushing]: dart.fieldType(dart.legacy(core.bool))
  }));
  angular_2.WindowScrollHost = class WindowScrollHost extends scroll_host_base.WindowScrollHostBase {
    ngOnDestroy() {
      this.dispose();
    }
  };
  (angular_2.WindowScrollHost.new = function(domService, ngZone, gestureListenerFactory, window) {
    angular_2.WindowScrollHost.__proto__.new.call(this, domService, ngZone, gestureListenerFactory, window);
    ;
  }).prototype = angular_2.WindowScrollHost.prototype;
  dart.addTypeTests(angular_2.WindowScrollHost);
  dart.addTypeCaches(angular_2.WindowScrollHost);
  angular_2.WindowScrollHost[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(angular_2.WindowScrollHost, () => ({
    __proto__: dart.getMethods(angular_2.WindowScrollHost.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(angular_2.WindowScrollHost, L0);
  var _element$ = dart.privateName(angular_2, "_element");
  angular_2.StickyFloatingTracker = class StickyFloatingTracker extends core.Object {
    ngOnInit() {
      this[_scrollHost$].stickyController.trackFloating(this[_element$]);
    }
    ngOnDestroy() {
      this[_scrollHost$].stickyController.untrackFloating(this[_element$]);
    }
  };
  (angular_2.StickyFloatingTracker.new = function(_scrollHost, _element) {
    this[_scrollHost$] = _scrollHost;
    this[_element$] = _element;
    ;
  }).prototype = angular_2.StickyFloatingTracker.prototype;
  dart.addTypeTests(angular_2.StickyFloatingTracker);
  dart.addTypeCaches(angular_2.StickyFloatingTracker);
  angular_2.StickyFloatingTracker[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(angular_2.StickyFloatingTracker, () => ({
    __proto__: dart.getMethods(angular_2.StickyFloatingTracker.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(angular_2.StickyFloatingTracker, L0);
  dart.setFieldSignature(angular_2.StickyFloatingTracker, () => ({
    __proto__: dart.getFields(angular_2.StickyFloatingTracker.__proto__),
    [_scrollHost$]: dart.finalFieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element))
  }));
  angular_2.AcxPanClassDirective = class AcxPanClassDirective extends scroll_host_base.BasePanClassDirective {
    ngOnInit() {
      return this.startPanListener();
    }
    ngOnDestroy() {
      return this.stopPanListener();
    }
    set className(value) {
      return super.className = value;
    }
  };
  (angular_2.AcxPanClassDirective.new = function(domService, scrollHost, element) {
    angular_2.AcxPanClassDirective.__proto__.new.call(this, domService, scrollHost, element);
    ;
  }).prototype = angular_2.AcxPanClassDirective.prototype;
  dart.addTypeTests(angular_2.AcxPanClassDirective);
  dart.addTypeCaches(angular_2.AcxPanClassDirective);
  angular_2.AcxPanClassDirective[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(angular_2.AcxPanClassDirective, () => ({
    __proto__: dart.getMethods(angular_2.AcxPanClassDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(angular_2.AcxPanClassDirective, L0);
  var _endElement = dart.privateName(angular_2, "_endElement");
  var _stickyClass = dart.privateName(angular_2, "_stickyClass");
  var _stickyKey = dart.privateName(angular_2, "_stickyKey");
  var _sticky = dart.privateName(angular_2, "_sticky");
  var _position = dart.privateName(angular_2, "_position");
  var _stickyElement$ = dart.privateName(angular_2, "_stickyElement");
  var _stick = dart.privateName(angular_2, "_stick");
  var _unstick = dart.privateName(angular_2, "_unstick");
  angular_2.StickyElementDirective = class StickyElementDirective extends core.Object {
    set endElement(element) {
      this[_endElement] = element;
    }
    set stickyClass(stickyClass) {
      this[_stickyClass] = stickyClass;
    }
    set stickyKey(stickyKey) {
      this[_stickyKey] = stickyKey;
    }
    set sticky(sticky) {
      this[_sticky] = sticky;
      if (dart.test(this[_sticky])) {
        this[_stick]();
      } else {
        this[_unstick]();
      }
    }
    set position(position) {
      this[_position] = position;
    }
    ngAfterViewInit() {
      if (dart.test(this[_sticky])) this[_stick]();
    }
    ngOnDestroy() {
      if (dart.test(this[_sticky])) this[_unstick]();
    }
    [_stick]() {
      let t0;
      t0 = this[_stickyController];
      t0 == null ? null : t0.stick(this[_stickyElement$], this[_position], this[_endElement], {stickyClass: this[_stickyClass], stickyKey: this[_stickyKey]});
    }
    [_unstick]() {
      let t0;
      t0 = this[_stickyController];
      t0 == null ? null : t0.unstick(this[_stickyElement$]);
    }
    get [_stickyController]() {
      return this[_scrollHost$].stickyController;
    }
  };
  (angular_2.StickyElementDirective.new = function(_scrollHost, _stickyElement) {
    this[_endElement] = null;
    this[_stickyClass] = null;
    this[_stickyKey] = null;
    this[_sticky] = true;
    this[_position] = scroll_host_interface.StickyPosition.TOP;
    this[_scrollHost$] = _scrollHost;
    this[_stickyElement$] = _stickyElement;
    ;
  }).prototype = angular_2.StickyElementDirective.prototype;
  dart.addTypeTests(angular_2.StickyElementDirective);
  dart.addTypeCaches(angular_2.StickyElementDirective);
  angular_2.StickyElementDirective[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(angular_2.StickyElementDirective, () => ({
    __proto__: dart.getMethods(angular_2.StickyElementDirective.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_stick]: dart.fnType(dart.void, []),
    [_unstick]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(angular_2.StickyElementDirective, () => ({
    __proto__: dart.getGetters(angular_2.StickyElementDirective.__proto__),
    [_stickyController]: dart.legacy(scroll_host_interface.StickyController)
  }));
  dart.setSetterSignature(angular_2.StickyElementDirective, () => ({
    __proto__: dart.getSetters(angular_2.StickyElementDirective.__proto__),
    endElement: dart.legacy(html.Element),
    stickyClass: dart.legacy(core.String),
    stickyKey: dart.legacy(core.String),
    sticky: dart.legacy(core.bool),
    position: dart.legacy(scroll_host_interface.StickyPosition)
  }));
  dart.setLibraryUri(angular_2.StickyElementDirective, L0);
  dart.setFieldSignature(angular_2.StickyElementDirective, () => ({
    __proto__: dart.getFields(angular_2.StickyElementDirective.__proto__),
    [_stickyElement$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_scrollHost$]: dart.finalFieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    [_endElement]: dart.fieldType(dart.legacy(html.Element)),
    [_stickyClass]: dart.fieldType(dart.legacy(core.String)),
    [_stickyKey]: dart.fieldType(dart.legacy(core.String)),
    [_sticky]: dart.fieldType(dart.legacy(core.bool)),
    [_position]: dart.fieldType(dart.legacy(scroll_host_interface.StickyPosition))
  }));
  var C34;
  var Clock__time = dart.privateName(clock, "Clock._time");
  var C33;
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var C37;
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var C38;
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C36;
  var C40;
  var C39;
  var C42;
  var C41;
  var C35;
  var Module_provide = dart.privateName(di_modules, "Module.provide");
  var C44;
  var Module_include = dart.privateName(di_modules, "Module.include");
  var C43;
  dart.defineLazy(angular_2, {
    /*angular_2.clockValue*/get clockValue() {
      return C33 || CT.C33;
    },
    /*angular_2.scrollHostProviders*/get scrollHostProviders() {
      return C35 || CT.C35;
    },
    /*angular_2.scrollHostModule*/get scrollHostModule() {
      return C35 || CT.C35;
    },
    /*angular_2.scrollHostNewModule*/get scrollHostNewModule() {
      return C43 || CT.C43;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/scroll_host/angular_2", {
    "package:angular_components/utils/angular/scroll_host/angular_2.dart": angular_2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.dart"],"names":[],"mappings":"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","file":"angular_2.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__scroll_host__angular_2: angular_2
  };
}));

//# sourceMappingURL=angular_2.unsound.ddc.js.map
