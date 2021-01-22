define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/logging/logging', 'packages/angular_components/utils/browser/events/events', 'packages/quiver/core'], (function load__packages__angular_components__src__utils__angular__scroll_host__pan_controller_impl(dart_sdk, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__src__utils__async__async_update_scheduler, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__browser__feature_detector__feature_detector, packages__angular_components__utils__angular__scroll_host__interface, packages__logging__logging, packages__angular_components__utils__browser__events__events, packages__quiver__core) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const zoned_async = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__zoned_async;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const feature_detector = packages__angular_components__utils__browser__feature_detector__feature_detector.utils__browser__feature_detector__feature_detector;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const scroll_host_event_impl = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__scroll_host_event_impl;
  const logger = packages__logging__logging.src__logger;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const hash = packages__quiver__core.src__core__hash;
  var sticky_controller_impl = Object.create(dart.library);
  var pan_controller_impl = Object.create(dart.library);
  var scroll_host_base = Object.create(dart.library);
  var position_sticky_controller = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $keys = dartx.keys;
  var $top = dartx.top;
  var $height = dartx.height;
  var $abs = dartx.abs;
  var $bottom = dartx.bottom;
  var $left = dartx.left;
  var $width = dartx.width;
  var $values = dartx.values;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $round = dartx.round;
  var $transform = dartx.transform;
  var $zIndex = dartx.zIndex;
  var $classes = dartx.classes;
  var $position = dartx.position;
  var $toString = dartx.toString;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $removeWhere = dartx.removeWhere;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $scrollWidth = dartx.scrollWidth;
  var $scrollHeight = dartx.scrollHeight;
  var $onMouseWheel = dartx.onMouseWheel;
  var $deltaY = dartx.deltaY;
  var $scrollTop = dartx.scrollTop;
  var $deltaX = dartx.deltaX;
  var $scrollLeft = dartx.scrollLeft;
  var $onScroll = dartx.onScroll;
  var $onWheel = dartx.onWheel;
  var $target = dartx.target;
  var $deltaMode = dartx.deltaMode;
  var $toInt = dartx.toInt;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $scrollY = dartx.scrollY;
  var $scrollX = dartx.scrollX;
  var $scrollTo = dartx.scrollTo;
  var $document = dartx.document;
  var $overflowY = dartx.overflowY;
  var $setProperty = dartx.setProperty;
  var $contains = dartx.contains;
  var $clear = dartx.clear;
  var $append = dartx.append;
  var $where = dartx.where;
  var $map = dartx.map;
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var _StickyRowL = () => (_StickyRowL = dart.constFn(dart.legacy(sticky_controller_impl._StickyRow)))();
  var LinkedMapOfElementL$_StickyRowL = () => (LinkedMapOfElementL$_StickyRowL = dart.constFn(_js_helper.LinkedMap$(ElementL(), _StickyRowL())))();
  var LinkedHashSetOfElementL = () => (LinkedHashSetOfElementL = dart.constFn(collection.LinkedHashSet$(ElementL())))();
  var StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  var ListOfElementL = () => (ListOfElementL = dart.constFn(core.List$(ElementL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var DomServiceLToNull = () => (DomServiceLToNull = dart.constFn(dart.fnType(core.Null, [DomServiceL()])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var RectangleOfnumL = () => (RectangleOfnumL = dart.constFn(math.Rectangle$(numL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var _StickyRowLAnd_StickyRowLTointL = () => (_StickyRowLAnd_StickyRowLTointL = dart.constFn(dart.fnType(intL(), [_StickyRowL(), _StickyRowL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var _RowDataL = () => (_RowDataL = dart.constFn(dart.legacy(sticky_controller_impl._RowData)))();
  var StickyContainerLayoutL = () => (StickyContainerLayoutL = dart.constFn(dart.legacy(sticky_controller_impl.StickyContainerLayout)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var JSArrayOfnumL = () => (JSArrayOfnumL = dart.constFn(_interceptors.JSArray$(numL())))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var PanEventL = () => (PanEventL = dart.constFn(dart.legacy(scroll_host_interface.PanEvent)))();
  var StreamControllerOfPanEventL = () => (StreamControllerOfPanEventL = dart.constFn(async.StreamController$(PanEventL())))();
  var ZonedStreamOfPanEventL = () => (ZonedStreamOfPanEventL = dart.constFn(zoned_async.ZonedStream$(PanEventL())))();
  var WheelEventL = () => (WheelEventL = dart.constFn(dart.legacy(html.WheelEvent)))();
  var WheelEventLToNull = () => (WheelEventLToNull = dart.constFn(dart.fnType(core.Null, [WheelEventL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNull = () => (EventLToNull = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var PanEventImplL = () => (PanEventImplL = dart.constFn(dart.legacy(pan_controller_impl.PanEventImpl)))();
  var IntersectionObserverEntryL = () => (IntersectionObserverEntryL = dart.constFn(dart.legacy(html.IntersectionObserverEntry)))();
  var StreamControllerOfIntersectionObserverEntryL = () => (StreamControllerOfIntersectionObserverEntryL = dart.constFn(async.StreamController$(IntersectionObserverEntryL())))();
  var StreamControllerLOfIntersectionObserverEntryL = () => (StreamControllerLOfIntersectionObserverEntryL = dart.constFn(dart.legacy(StreamControllerOfIntersectionObserverEntryL())))();
  var LinkedMapOfElementL$StreamControllerLOfIntersectionObserverEntryL = () => (LinkedMapOfElementL$StreamControllerLOfIntersectionObserverEntryL = dart.constFn(_js_helper.LinkedMap$(ElementL(), StreamControllerLOfIntersectionObserverEntryL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var IntersectionObserverL = () => (IntersectionObserverL = dart.constFn(dart.legacy(html.IntersectionObserver)))();
  var ListLAndIntersectionObserverLTovoid = () => (ListLAndIntersectionObserverLTovoid = dart.constFn(dart.fnType(dart.void, [ListL(), IntersectionObserverL()])))();
  var ListLAndIntersectionObserverLToLvoid = () => (ListLAndIntersectionObserverLToLvoid = dart.constFn(dart.legacy(ListLAndIntersectionObserverLTovoid())))();
  var ScrollHostEventL = () => (ScrollHostEventL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHostEvent)))();
  var StreamControllerOfScrollHostEventL = () => (StreamControllerOfScrollHostEventL = dart.constFn(async.StreamController$(ScrollHostEventL())))();
  var ZonedStreamOfScrollHostEventL = () => (ZonedStreamOfScrollHostEventL = dart.constFn(zoned_async.ZonedStream$(ScrollHostEventL())))();
  var GestureEventL = () => (GestureEventL = dart.constFn(dart.legacy(gestures.GestureEvent)))();
  var ScrollHostEventLToNull = () => (ScrollHostEventLToNull = dart.constFn(dart.fnType(core.Null, [ScrollHostEventL()])))();
  var UnsupportedErrorL = () => (UnsupportedErrorL = dart.constFn(dart.legacy(core.UnsupportedError)))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var HtmlDocumentL = () => (HtmlDocumentL = dart.constFn(dart.legacy(html.HtmlDocument)))();
  var PanEventLToNull = () => (PanEventLToNull = dart.constFn(dart.fnType(core.Null, [PanEventL()])))();
  var _StickyElementL = () => (_StickyElementL = dart.constFn(dart.legacy(position_sticky_controller._StickyElement)))();
  var JSArrayOf_StickyElementL = () => (JSArrayOf_StickyElementL = dart.constFn(_interceptors.JSArray$(_StickyElementL())))();
  var _StickyElementLToboolL = () => (_StickyElementLToboolL = dart.constFn(dart.fnType(boolL(), [_StickyElementL()])))();
  var IntersectionObserverEntryLToNull = () => (IntersectionObserverEntryLToNull = dart.constFn(dart.fnType(core.Null, [IntersectionObserverEntryL()])))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var _StickyElementLToListLOfObjectL = () => (_StickyElementLToListLOfObjectL = dart.constFn(dart.fnType(ListLOfObjectL(), [_StickyElementL()])))();
  var ListLOfObjectLAndListLOfObjectLTointL = () => (ListLOfObjectLAndListLOfObjectLTointL = dart.constFn(dart.fnType(intL(), [ListLOfObjectL(), ListLOfObjectL()])))();
  var IdentityMapOfStringL$numL = () => (IdentityMapOfStringL$numL = dart.constFn(_js_helper.IdentityMap$(StringL(), numL())))();
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  const CT = Object.create(null);
  var L3 = "package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.dart";
  var L2 = "org-dartlang-app:///packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.dart";
  var L6 = "org-dartlang-app:///packages/angular_components/src/utils/angular/scroll_host/position_sticky_controller.dart";
  var L5 = "package:angular_components/src/utils/angular/scroll_host/scroll_host_base.dart";
  var L1 = "org-dartlang-app:///packages/angular_components/src/utils/angular/scroll_host/sticky_controller_impl.dart";
  var L7 = "package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.dart";
  var L4 = "org-dartlang-app:///packages/angular_components/src/utils/angular/scroll_host/scroll_host_base.dart";
  var L0 = "package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gestures.GestureDirection.prototype,
        [_name]: "GestureDirection.up",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gestures.GestureDirection.prototype,
        [_name]: "GestureDirection.down",
        index: 1
      });
    }
  }, false);
  var _onUpdateController = dart.privateName(sticky_controller_impl, "_onUpdateController");
  var _layoutSubscription = dart.privateName(sticky_controller_impl, "_layoutSubscription");
  var _rowMap = dart.privateName(sticky_controller_impl, "_rowMap");
  var _floatingElements = dart.privateName(sticky_controller_impl, "_floatingElements");
  var _orderedRows = dart.privateName(sticky_controller_impl, "_orderedRows");
  var _currentLayout = dart.privateName(sticky_controller_impl, "_currentLayout");
  var _domService$ = dart.privateName(sticky_controller_impl, "_domService");
  var _scrollHost$ = dart.privateName(sticky_controller_impl, "_scrollHost");
  var _startEventListeners = dart.privateName(sticky_controller_impl, "_startEventListeners");
  var _stopEventListeners = dart.privateName(sticky_controller_impl, "_stopEventListeners");
  var _checkAndUpdateLayout = dart.privateName(sticky_controller_impl, "_checkAndUpdateLayout");
  var _scheduleLayoutCheck = dart.privateName(sticky_controller_impl, "_scheduleLayoutCheck");
  var _getAvailableArea = dart.privateName(sticky_controller_impl, "_getAvailableArea");
  var _observeRowPositions = dart.privateName(sticky_controller_impl, "_observeRowPositions");
  var _getLayout = dart.privateName(sticky_controller_impl, "_getLayout");
  var _updateContainer = dart.privateName(sticky_controller_impl, "_updateContainer");
  var usePositionSticky = dart.privateName(sticky_controller_impl, "StickyControllerImpl.usePositionSticky");
  var enableSmoothPushing = dart.privateName(sticky_controller_impl, "StickyControllerImpl.enableSmoothPushing");
  sticky_controller_impl.StickyControllerImpl = class StickyControllerImpl extends core.Object {
    get usePositionSticky() {
      return this[usePositionSticky];
    }
    set usePositionSticky(value) {
      super.usePositionSticky = value;
    }
    get enableSmoothPushing() {
      return this[enableSmoothPushing];
    }
    set enableSmoothPushing(value) {
      this[enableSmoothPushing] = value;
    }
    stick(element, position, range, opts) {
      let stickyClass = opts && 'stickyClass' in opts ? opts.stickyClass : null;
      let stickyKey = opts && 'stickyKey' in opts ? opts.stickyKey : null;
      let row = this[_rowMap][$_get](element);
      if (row != null && row.position == position && dart.equals(row.range, range) && row.stickyKey == stickyKey) {
        return;
      }
      this.unstick(element);
      this[_rowMap][$_set](element, new sticky_controller_impl._StickyRow.new(element, position, range, stickyClass, stickyKey));
      this[_startEventListeners]();
    }
    unstick(element) {
      let t0;
      this[_orderedRows] = null;
      let row = this[_rowMap][$remove](element);
      if (row == null) return;
      t0 = this[_currentLayout];
      t0 == null ? null : t0.remove(row);
      row.resetTop();
      if (dart.test(this[_rowMap][$isEmpty])) {
        this[_stopEventListeners]();
      }
    }
    syncOnScroll() {
      if (dart.test(this[_rowMap][$isNotEmpty])) this[_checkAndUpdateLayout]();
    }
    trackFloating(element) {
      this[_floatingElements].add(element);
      this[_scheduleLayoutCheck]();
    }
    untrackFloating(element) {
      this[_floatingElements].remove(element);
      this[_scheduleLayoutCheck]();
    }
    get onUpdate() {
      this[_onUpdateController] == null ? this[_onUpdateController] = StreamControllerOfNull().broadcast({sync: true}) : null;
      return this[_onUpdateController].stream;
    }
    dispose() {
      let t0;
      if (dart.test(this[_rowMap][$isNotEmpty])) {
        let toRemove = ListOfElementL().from(this[_rowMap][$keys]);
        for (let element of toRemove) {
          this.unstick(element);
        }
      }
      t0 = this[_onUpdateController];
      t0 == null ? null : t0.close();
    }
    [_scheduleLayoutCheck]() {
      this[_domService$].scheduleWrite(dart.fn(() => {
      }, VoidToNull()));
    }
    [_startEventListeners]() {
      if (this[_layoutSubscription] != null) return;
      this[_layoutSubscription] = this[_domService$].onLayoutChanged.listen(dart.fn(_ => {
        this[_checkAndUpdateLayout]();
      }, DomServiceLToNull()));
      this[_scrollHost$].startNativeScrollListener();
      this[_scheduleLayoutCheck]();
    }
    [_stopEventListeners]() {
      if (this[_layoutSubscription] != null) {
        this[_layoutSubscription].cancel();
        this[_layoutSubscription] = null;
      }
    }
    [_getAvailableArea]() {
      let hostRect = this[_scrollHost$].calcViewportRect();
      for (let element of this[_floatingElements]) {
        let rect = element.getBoundingClientRect();
        let rectMiddle = dart.notNull(rect[$top]) + dart.notNull(rect[$height]) / 2.0;
        let topDistance = (dart.notNull(hostRect[$top]) - rectMiddle)[$abs]();
        let bottomDistance = (dart.notNull(hostRect[$bottom]) - rectMiddle)[$abs]();
        if (topDistance < bottomDistance) {
          let newTop = math.max(numL(), hostRect[$top], rect[$bottom]);
          let newHeight = dart.notNull(hostRect[$bottom]) - newTop;
          if (newTop !== hostRect[$top] && newHeight > 0) {
            hostRect = new (RectangleOfnumL()).new(hostRect[$left], newTop, hostRect[$width], newHeight);
          }
        } else {
          let newBottom = math.min(numL(), hostRect[$bottom], rect[$top]);
          let newHeight = newBottom - dart.notNull(hostRect[$top]);
          if (newBottom !== hostRect[$bottom] && newHeight > 0) {
            hostRect = new (RectangleOfnumL()).new(hostRect[$left], hostRect[$top], hostRect[$width], newHeight);
          }
        }
      }
      return new (RectangleOfnumL()).new(hostRect[$left], hostRect[$top], hostRect[$width], hostRect[$height]);
    }
    [_getLayout]() {
      this[_observeRowPositions]();
      let hostPosition = this[_getAvailableArea]();
      return sticky_controller_impl.StickyRowUtils.calculateLayout(_StickyRowL(), hostPosition, this[_orderedRows], {enableSmoothPushing: this.enableSmoothPushing});
    }
    [_checkAndUpdateLayout]() {
      let t0, t0$;
      let layout = this[_getLayout]();
      if (!dart.equals(layout, this[_currentLayout]) && this[_orderedRows] != null) {
        this[_updateContainer](layout);
        if (dart.test((t0$ = (t0 = this[_onUpdateController], t0 == null ? null : t0.hasListener), t0$ == null ? false : t0$))) {
          this[_onUpdateController].add(null);
        }
      }
    }
    [_observeRowPositions]() {
      if (this[_orderedRows] == null) {
        this[_orderedRows] = this[_rowMap][$values][$toList]();
      }
      for (let i = 0; i < dart.notNull(this[_orderedRows][$length]); i = i + 1) {
        this[_orderedRows][$_get](i).readRowPositions();
      }
      this[_orderedRows][$sort](dart.fn((a, b) => {
        if (!dart.equals(a.isTop, b.isTop)) {
          return dart.test(a.isTop) ? -1 : 1;
        }
        return dart.test(a.isTop) ? a.rowPosition[$top][$compareTo](b.rowPosition[$top]) : b.rowPosition[$top][$compareTo](a.rowPosition[$top]);
      }, _StickyRowLAnd_StickyRowLTointL()));
    }
    [_updateContainer](layout) {
      if (layout.topRows != null) {
        let top = layout.hostPosition[$top];
        for (let i = 0; i < dart.notNull(layout.topRows[$length]); i = i + 1) {
          let data = layout.topRows[$_get](i);
          data.row.moveToTop(dart.notNull(top) + dart.notNull(data.offsetY));
          top = dart.notNull(top) + dart.notNull(data.row.rowPosition[$height]);
        }
      }
      if (layout.bottomRows != null) {
        let top = layout.hostPosition[$bottom];
        for (let i = 0; i < dart.notNull(layout.bottomRows[$length]); i = i + 1) {
          let data = layout.bottomRows[$_get](i);
          top = dart.notNull(top) - dart.notNull(data.row.rowPosition[$height]);
          data.row.moveToTop(dart.notNull(top) + dart.notNull(data.offsetY));
        }
      }
      if (layout.hiddenRows != null) {
        for (let i = 0; i < dart.notNull(layout.hiddenRows[$length]); i = i + 1) {
          layout.hiddenRows[$_get](i).softResetTop();
        }
      }
      this[_currentLayout] = layout;
    }
  };
  (sticky_controller_impl.StickyControllerImpl.new = function(_domService, _scrollHost) {
    this[_onUpdateController] = null;
    this[usePositionSticky] = false;
    this[_layoutSubscription] = null;
    this[_rowMap] = new (LinkedMapOfElementL$_StickyRowL()).new();
    this[_floatingElements] = LinkedHashSetOfElementL().new();
    this[_orderedRows] = null;
    this[_currentLayout] = null;
    this[enableSmoothPushing] = false;
    this[_domService$] = _domService;
    this[_scrollHost$] = _scrollHost;
    ;
  }).prototype = sticky_controller_impl.StickyControllerImpl.prototype;
  dart.addTypeTests(sticky_controller_impl.StickyControllerImpl);
  dart.addTypeCaches(sticky_controller_impl.StickyControllerImpl);
  sticky_controller_impl.StickyControllerImpl[dart.implements] = () => [scroll_host_interface.StickyController];
  dart.setMethodSignature(sticky_controller_impl.StickyControllerImpl, () => ({
    __proto__: dart.getMethods(sticky_controller_impl.StickyControllerImpl.__proto__),
    stick: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(scroll_host_interface.StickyPosition), dart.legacy(html.Element)], {stickyClass: dart.legacy(core.String), stickyKey: dart.legacy(core.String)}, {}),
    unstick: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    syncOnScroll: dart.fnType(dart.void, []),
    trackFloating: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    untrackFloating: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    dispose: dart.fnType(dart.void, []),
    [_scheduleLayoutCheck]: dart.fnType(dart.void, []),
    [_startEventListeners]: dart.fnType(dart.void, []),
    [_stopEventListeners]: dart.fnType(dart.void, []),
    [_getAvailableArea]: dart.fnType(dart.legacy(math.Rectangle$(core.num)), []),
    [_getLayout]: dart.fnType(dart.legacy(sticky_controller_impl.StickyContainerLayout$(dart.legacy(sticky_controller_impl._StickyRow))), []),
    [_checkAndUpdateLayout]: dart.fnType(dart.void, []),
    [_observeRowPositions]: dart.fnType(dart.void, []),
    [_updateContainer]: dart.fnType(dart.void, [dart.legacy(sticky_controller_impl.StickyContainerLayout$(dart.legacy(sticky_controller_impl._StickyRow)))])
  }));
  dart.setGetterSignature(sticky_controller_impl.StickyControllerImpl, () => ({
    __proto__: dart.getGetters(sticky_controller_impl.StickyControllerImpl.__proto__),
    onUpdate: dart.legacy(async.Stream$(core.Null))
  }));
  dart.setLibraryUri(sticky_controller_impl.StickyControllerImpl, L0);
  dart.setFieldSignature(sticky_controller_impl.StickyControllerImpl, () => ({
    __proto__: dart.getFields(sticky_controller_impl.StickyControllerImpl.__proto__),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_scrollHost$]: dart.finalFieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    [_onUpdateController]: dart.fieldType(dart.legacy(async.StreamController$(core.Null))),
    usePositionSticky: dart.finalFieldType(dart.legacy(core.bool)),
    [_layoutSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_rowMap]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(html.Element), dart.legacy(sticky_controller_impl._StickyRow)))),
    [_floatingElements]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(html.Element)))),
    [_orderedRows]: dart.fieldType(dart.legacy(core.List$(dart.legacy(sticky_controller_impl._StickyRow)))),
    [_currentLayout]: dart.fieldType(dart.legacy(sticky_controller_impl.StickyContainerLayout$(dart.legacy(sticky_controller_impl._StickyRow)))),
    enableSmoothPushing: dart.fieldType(dart.legacy(core.bool))
  }));
  sticky_controller_impl.StickyRowPosition = class StickyRowPosition extends core.Object {};
  (sticky_controller_impl.StickyRowPosition.new = function() {
    ;
  }).prototype = sticky_controller_impl.StickyRowPosition.prototype;
  dart.addTypeTests(sticky_controller_impl.StickyRowPosition);
  dart.addTypeCaches(sticky_controller_impl.StickyRowPosition);
  dart.setLibraryUri(sticky_controller_impl.StickyRowPosition, L0);
  var _currentPosition = dart.privateName(sticky_controller_impl, "_currentPosition");
  var _currentTransform = dart.privateName(sticky_controller_impl, "_currentTransform");
  var _currentZIndex = dart.privateName(sticky_controller_impl, "_currentZIndex");
  var _translateY = dart.privateName(sticky_controller_impl, "_translateY");
  var _stickyKey$ = dart.privateName(sticky_controller_impl, "_stickyKey");
  sticky_controller_impl._StickyRow = class _StickyRow extends core.Object {
    set translateY(value) {
      this[_translateY] = value[$round]();
    }
    get translateY() {
      return this[_translateY];
    }
    get stickyKey() {
      return this[_stickyKey$];
    }
    get isTop() {
      return this.position == scroll_host_interface.StickyPosition.TOP;
    }
    get isBottom() {
      return this.position == scroll_host_interface.StickyPosition.BOTTOM;
    }
    readRowPositions() {
      let t0;
      this.rowPosition = this.element.getBoundingClientRect();
      if (this.translateY != null) {
        this.rowPosition = new (RectangleOfnumL()).new(this.rowPosition[$left], dart.notNull(this.rowPosition[$top]) - dart.notNull(this.translateY), this.rowPosition[$width], this.rowPosition[$height]);
      }
      this.rangePosition = (t0 = this.range, t0 == null ? null : t0.getBoundingClientRect());
    }
    softResetTop() {
      let t0;
      if (this.translateY === 0) return;
      this.translateY = 0;
      if (this[_currentTransform] !== "" || this[_currentZIndex] !== "") {
        t0 = this.element.style;
        (() => {
          t0[$transform] = "";
          t0[$zIndex] = "";
          return t0;
        })();
      }
      this[_currentTransform] = "";
      this[_currentZIndex] = "";
      if (this.stickyClass != null) this.element[$classes].toggle(this.stickyClass, false);
    }
    resetTop() {
      this.softResetTop();
      if (this[_currentPosition] !== "") {
        this.element.style[$position] = "";
        this[_currentPosition] = "";
      }
    }
    moveToTop(top) {
      let t0;
      let newY = dart.notNull(top) - dart.notNull(this.rowPosition[$top]);
      if (this.translateY !== newY) {
        this.translateY = newY;
        let newTransform = "translate3d(0px, " + dart.str(this.translateY) + "px, 0px)";
        let newZIndex = dart.str(scroll_host_interface.stickyControllerZIndex);
        if (this[_currentPosition] !== "relative" || this[_currentTransform] !== newTransform || this[_currentZIndex] !== newZIndex) {
          t0 = this.element.style;
          (() => {
            t0[$position] = "relative";
            t0[$transform] = newTransform;
            t0[$zIndex] = newZIndex;
            return t0;
          })();
          this[_currentPosition] = "relative";
          this[_currentTransform] = newTransform;
          this[_currentZIndex] = newZIndex;
        }
        if (this.stickyClass != null) this.element[$classes].toggle(this.stickyClass, true);
      }
    }
    toString() {
      return "_StickyRow " + dart.notNull(new (IdentityMapOfStringL$ObjectL()).from(["isBottom", this.isBottom, "isTop", this.isTop, "rowPosition", this.rowPosition, "rangePosition", this.rangePosition, "translateY", this.translateY, "stickyClass", this.stickyClass])[$toString]());
    }
  };
  (sticky_controller_impl._StickyRow.new = function(element, position, range, stickyClass, _stickyKey) {
    this.rowPosition = null;
    this.rangePosition = null;
    this[_currentPosition] = "";
    this[_currentTransform] = "";
    this[_currentZIndex] = "";
    this[_translateY] = 0;
    this.element = element;
    this.position = position;
    this.range = range;
    this.stickyClass = stickyClass;
    this[_stickyKey$] = _stickyKey;
    if (!(dart.test(this.isTop) || dart.test(this.isBottom))) dart.assertFailed(null, L1, 262, 12, "isTop || isBottom");
  }).prototype = sticky_controller_impl._StickyRow.prototype;
  dart.addTypeTests(sticky_controller_impl._StickyRow);
  dart.addTypeCaches(sticky_controller_impl._StickyRow);
  sticky_controller_impl._StickyRow[dart.implements] = () => [sticky_controller_impl.StickyRowPosition];
  dart.setMethodSignature(sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getMethods(sticky_controller_impl._StickyRow.__proto__),
    readRowPositions: dart.fnType(dart.void, []),
    softResetTop: dart.fnType(dart.void, []),
    resetTop: dart.fnType(dart.void, []),
    moveToTop: dart.fnType(dart.void, [dart.legacy(core.num)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getGetters(sticky_controller_impl._StickyRow.__proto__),
    translateY: dart.legacy(core.num),
    stickyKey: dart.legacy(core.String),
    isTop: dart.legacy(core.bool),
    isBottom: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getSetters(sticky_controller_impl._StickyRow.__proto__),
    translateY: dart.legacy(core.num)
  }));
  dart.setLibraryUri(sticky_controller_impl._StickyRow, L0);
  dart.setFieldSignature(sticky_controller_impl._StickyRow, () => ({
    __proto__: dart.getFields(sticky_controller_impl._StickyRow.__proto__),
    element: dart.finalFieldType(dart.legacy(html.Element)),
    position: dart.finalFieldType(dart.legacy(scroll_host_interface.StickyPosition)),
    range: dart.finalFieldType(dart.legacy(html.Element)),
    stickyClass: dart.finalFieldType(dart.legacy(core.String)),
    [_stickyKey$]: dart.finalFieldType(dart.legacy(core.String)),
    rowPosition: dart.fieldType(dart.legacy(math.Rectangle$(core.num))),
    rangePosition: dart.fieldType(dart.legacy(math.Rectangle$(core.num))),
    [_currentPosition]: dart.fieldType(dart.legacy(core.String)),
    [_currentTransform]: dart.fieldType(dart.legacy(core.String)),
    [_currentZIndex]: dart.fieldType(dart.legacy(core.String)),
    [_translateY]: dart.fieldType(dart.legacy(core.num))
  }));
  dart.defineExtensionMethods(sticky_controller_impl._StickyRow, ['toString']);
  const _is__RowData_default = Symbol('_is__RowData_default');
  var row$ = dart.privateName(sticky_controller_impl, "_RowData.row");
  sticky_controller_impl._RowData$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _RowData extends core.Object {
      get row() {
        return this[row$];
      }
      set row(value) {
        this[row$] = TL().as(value);
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || _RowDataL().is(other) && dart.equals(this.runtimeType, dart.runtimeType(other)) && dart.equals(this.row, other.row) && this.offsetY == other.offsetY;
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.row)) ^ dart.hashCode(this.offsetY)) >>> 0;
      }
      toString() {
        return "_RowData{row: " + dart.str(this.row) + ", offsetY: " + dart.str(this.offsetY) + "}";
      }
    }
    (_RowData.new = function(row, opts) {
      let offsetY = opts && 'offsetY' in opts ? opts.offsetY : 0;
      this[row$] = row;
      this.offsetY = offsetY;
      ;
    }).prototype = _RowData.prototype;
    dart.addTypeTests(_RowData);
    _RowData.prototype[_is__RowData_default] = true;
    dart.addTypeCaches(_RowData);
    dart.setMethodSignature(_RowData, () => ({
      __proto__: dart.getMethods(_RowData.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(_RowData, () => ({
      __proto__: dart.getGetters(_RowData.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(_RowData, L0);
    dart.setFieldSignature(_RowData, () => ({
      __proto__: dart.getFields(_RowData.__proto__),
      row: dart.fieldType(dart.legacy(T)),
      offsetY: dart.fieldType(dart.legacy(core.num))
    }));
    dart.defineExtensionMethods(_RowData, ['_equals', 'toString']);
    dart.defineExtensionAccessors(_RowData, ['hashCode']);
    return _RowData;
  });
  sticky_controller_impl._RowData = sticky_controller_impl._RowData$();
  dart.addTypeTests(sticky_controller_impl._RowData, _is__RowData_default);
  var _translateYs = dart.privateName(sticky_controller_impl, "_translateYs");
  var _listEquals = dart.privateName(sticky_controller_impl, "_listEquals");
  const _is_StickyContainerLayout_default = Symbol('_is_StickyContainerLayout_default');
  var hostPosition = dart.privateName(sticky_controller_impl, "StickyContainerLayout.hostPosition");
  var topRows = dart.privateName(sticky_controller_impl, "StickyContainerLayout.topRows");
  var bottomRows = dart.privateName(sticky_controller_impl, "StickyContainerLayout.bottomRows");
  var hiddenRows = dart.privateName(sticky_controller_impl, "StickyContainerLayout.hiddenRows");
  sticky_controller_impl.StickyContainerLayout$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _RowDataOfTL = () => (_RowDataOfTL = dart.constFn(sticky_controller_impl._RowData$(TL())))();
    var _RowDataLOfTL = () => (_RowDataLOfTL = dart.constFn(dart.legacy(_RowDataOfTL())))();
    var ListOf_RowDataLOfTL = () => (ListOf_RowDataLOfTL = dart.constFn(core.List$(_RowDataLOfTL())))();
    var ListLOf_RowDataLOfTL = () => (ListLOf_RowDataLOfTL = dart.constFn(dart.legacy(ListOf_RowDataLOfTL())))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    var _RowDataLOfTLToboolL = () => (_RowDataLOfTLToboolL = dart.constFn(dart.fnType(boolL(), [_RowDataLOfTL()])))();
    class StickyContainerLayout extends core.Object {
      get hostPosition() {
        return this[hostPosition];
      }
      set hostPosition(value) {
        this[hostPosition] = value;
      }
      get topRows() {
        return this[topRows];
      }
      set topRows(value) {
        this[topRows] = ListLOf_RowDataLOfTL().as(value);
      }
      get bottomRows() {
        return this[bottomRows];
      }
      set bottomRows(value) {
        this[bottomRows] = ListLOf_RowDataLOfTL().as(value);
      }
      get hiddenRows() {
        return this[hiddenRows];
      }
      set hiddenRows(value) {
        this[hiddenRows] = ListLOfTL().as(value);
      }
      _equals(other) {
        if (other == null) return false;
        return StickyContainerLayoutL().is(other) && dart.equals(this.hostPosition, other.hostPosition) && dart.test(this[_listEquals](this.topRows, other.topRows)) && dart.test(this[_listEquals](this.bottomRows, other.bottomRows)) && dart.test(this[_listEquals](this.hiddenRows, other.hiddenRows)) && dart.test(this[_listEquals](this[_translateYs], other[_translateYs]));
      }
      [_listEquals](aList, bList) {
        if (aList == null && bList == null) return true;
        if (aList == null || bList == null) return false;
        if (aList[$length] != bList[$length]) return false;
        for (let i = 0; i < dart.notNull(aList[$length]); i = i + 1) {
          if (!dart.equals(aList[$_get](i), bList[$_get](i))) {
            if (doubleL().is(aList[$_get](i)) && doubleL().is(bList[$_get](i))) {
              if (!dart.equals(dart.dsend(aList[$_get](i), 'floor', []), dart.dsend(bList[$_get](i), 'floor', []))) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return true;
      }
      remove(row) {
        let t0, t0$, t0$0;
        TL().as(row);
        t0 = this.topRows;
        t0 == null ? null : t0[$removeWhere](dart.fn(rowData => dart.equals(rowData.row, row), _RowDataLOfTLToboolL()));
        t0$ = this.bottomRows;
        t0$ == null ? null : t0$[$removeWhere](dart.fn(rowData => dart.equals(rowData.row, row), _RowDataLOfTLToboolL()));
        t0$0 = this.hiddenRows;
        t0$0 == null ? null : t0$0[$remove](row);
      }
      toString() {
        return "StickyContainerLayout " + dart.notNull(new (IdentityMapOfStringL$ObjectL()).from(["hostPosition", this.hostPosition, "topRows", this.topRows, "bottomRows", this.bottomRows, "hiddenRows", this.hiddenRows, "_translateYs", this[_translateYs]])[$toString]());
      }
    }
    (StickyContainerLayout.new = function() {
      this[hostPosition] = null;
      this[topRows] = null;
      this[bottomRows] = null;
      this[hiddenRows] = null;
      this[_translateYs] = null;
      ;
    }).prototype = StickyContainerLayout.prototype;
    dart.addTypeTests(StickyContainerLayout);
    StickyContainerLayout.prototype[_is_StickyContainerLayout_default] = true;
    dart.addTypeCaches(StickyContainerLayout);
    dart.setMethodSignature(StickyContainerLayout, () => ({
      __proto__: dart.getMethods(StickyContainerLayout.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [_listEquals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.List), dart.legacy(core.List)]),
      remove: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setLibraryUri(StickyContainerLayout, L0);
    dart.setFieldSignature(StickyContainerLayout, () => ({
      __proto__: dart.getFields(StickyContainerLayout.__proto__),
      hostPosition: dart.fieldType(dart.legacy(math.Rectangle$(core.num))),
      topRows: dart.fieldType(dart.legacy(core.List$(dart.legacy(sticky_controller_impl._RowData$(dart.legacy(T)))))),
      bottomRows: dart.fieldType(dart.legacy(core.List$(dart.legacy(sticky_controller_impl._RowData$(dart.legacy(T)))))),
      hiddenRows: dart.fieldType(dart.legacy(core.List$(dart.legacy(T)))),
      [_translateYs]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.num))))
    }));
    dart.defineExtensionMethods(StickyContainerLayout, ['_equals', 'toString']);
    return StickyContainerLayout;
  });
  sticky_controller_impl.StickyContainerLayout = sticky_controller_impl.StickyContainerLayout$();
  dart.addTypeTests(sticky_controller_impl.StickyContainerLayout, _is_StickyContainerLayout_default);
  sticky_controller_impl.StickyRowUtils = class StickyRowUtils extends core.Object {
    static shouldStick(isTop, hostTop, hostBottom, rowPosition, rangePosition) {
      if (rowPosition[$height] === 0) {
        return false;
      }
      if (dart.test(isTop)) {
        let rangeVisible = rangePosition == null || dart.notNull(rangePosition[$top]) > dart.notNull(hostTop) + dart.notNull(rowPosition[$height]);
        return dart.notNull(rowPosition[$top]) < dart.notNull(hostTop) && rangeVisible && dart.notNull(hostBottom) - dart.notNull(hostTop) - dart.notNull(rowPosition[$height]) > dart.notNull(sticky_controller_impl.StickyRowUtils.MIN_CONTENT_HEIGHT_PX);
      } else {
        let rangeVisible = rangePosition == null || dart.notNull(rangePosition[$bottom]) < dart.notNull(hostBottom) - dart.notNull(rowPosition[$height]);
        return dart.notNull(rowPosition[$bottom]) > dart.notNull(hostBottom) && rangeVisible && dart.notNull(hostBottom) - dart.notNull(hostTop) - dart.notNull(rowPosition[$height]) > dart.notNull(sticky_controller_impl.StickyRowUtils.MIN_CONTENT_HEIGHT_PX);
      }
    }
    static calculateLayout(T, hostPosition, rows, opts) {
      let t0, t0$;
      let enableSmoothPushing = opts && 'enableSmoothPushing' in opts ? opts.enableSmoothPushing : false;
      let hostTop = hostPosition[$top];
      let hostBottom = hostPosition[$bottom];
      let layout = (t0 = new (sticky_controller_impl.StickyContainerLayout$(dart.legacy(T))).new(), (() => {
        t0.hostPosition = hostPosition;
        t0[_translateYs] = JSArrayOfnumL().of([]);
        return t0;
      })());
      let stickyKeyToRowIndex = null;
      for (let i = 0; i < dart.notNull(rows[$length]); i = i + 1) {
        let row = rows[$_get](i);
        let shouldStick = sticky_controller_impl.StickyRowUtils.shouldStick(row.isTop, hostTop, hostBottom, row.rowPosition, row.rangePosition);
        let hasStuckDuplicate = dart.test(shouldStick) && row.stickyKey != null && dart.equals((t0$ = stickyKeyToRowIndex, t0$ == null ? null : t0$[$containsKey](row.stickyKey)), true);
        if (hasStuckDuplicate && dart.test(row.isTop)) {
          let duplicateRow = layout.topRows[$_get](stickyKeyToRowIndex[$_get](row.stickyKey));
          shouldStick = sticky_controller_impl.StickyRowUtils.shouldStick(row.isTop, dart.notNull(hostTop) - dart.notNull(duplicateRow.row.rowPosition[$height]), hostBottom, row.rowPosition, row.rangePosition);
        }
        if (dart.test(shouldStick) && !hasStuckDuplicate) {
          if (dart.test(row.isTop)) {
            if (layout.topRows == null) {
              layout.topRows = _interceptors.JSArray$(dart.legacy(sticky_controller_impl._RowData$(dart.legacy(T)))).of([]);
            }
            layout.topRows[$add](new (sticky_controller_impl._RowData$(dart.legacy(T))).new(row, {offsetY: 0}));
            layout[_translateYs][$add](dart.notNull(hostTop) - dart.notNull(row.rowPosition[$top]));
            hostTop = dart.notNull(hostTop) + dart.notNull(row.rowPosition[$height]);
            if (row.stickyKey != null) {
              stickyKeyToRowIndex == null ? stickyKeyToRowIndex = new (IdentityMapOfStringL$intL()).new() : null;
              stickyKeyToRowIndex[$_set](row.stickyKey, dart.notNull(layout.topRows[$length]) - 1);
            }
          } else {
            if (!dart.test(row.isBottom)) dart.assertFailed(null, L1, 531, 18, "row.isBottom");
            if (layout.bottomRows == null) {
              layout.bottomRows = _interceptors.JSArray$(dart.legacy(sticky_controller_impl._RowData$(dart.legacy(T)))).of([]);
            }
            layout.bottomRows[$add](new (sticky_controller_impl._RowData$(dart.legacy(T))).new(row, {offsetY: 0}));
            layout[_translateYs][$add](dart.notNull(hostBottom) - dart.notNull(row.rowPosition[$bottom]));
            hostBottom = dart.notNull(hostBottom) - dart.notNull(row.rowPosition[$height]);
            if (row.stickyKey != null) {
              stickyKeyToRowIndex == null ? stickyKeyToRowIndex = new (IdentityMapOfStringL$intL()).new() : null;
              stickyKeyToRowIndex[$_set](row.stickyKey, dart.notNull(layout.bottomRows[$length]) - 1);
            }
          }
        } else {
          if (layout.hiddenRows == null) {
            layout.hiddenRows = _interceptors.JSArray$(dart.legacy(T)).of([]);
          }
          let shouldReplace = dart.test(shouldStick) && hasStuckDuplicate && dart.test(row.isTop);
          if (shouldReplace) {
            let duplicateRow = layout.topRows[$_get](stickyKeyToRowIndex[$_get](row.stickyKey)).row;
            layout.hiddenRows[$add](duplicateRow);
            layout.topRows[$_set](stickyKeyToRowIndex[$_get](row.stickyKey), new (sticky_controller_impl._RowData$(dart.legacy(T))).new(row, {offsetY: 0}));
            hostTop = dart.notNull(hostTop) + (dart.notNull(row.rowPosition[$height]) - dart.notNull(duplicateRow.rowPosition[$height]));
          } else {
            layout.hiddenRows[$add](row);
          }
        }
        if (dart.test(enableSmoothPushing) && !dart.test(shouldStick) && hasStuckDuplicate && dart.test(row.isTop)) {
          let duplicateRowIdx = stickyKeyToRowIndex[$_get](row.stickyKey);
          let duplicateRow = layout.topRows[$_get](duplicateRowIdx);
          if (dart.notNull(row.rowPosition[$top]) < dart.notNull(hostTop)) {
            duplicateRow.offsetY = dart.notNull(row.rowPosition[$top]) - dart.notNull(hostTop);
          }
        }
      }
      return layout;
    }
  };
  (sticky_controller_impl.StickyRowUtils.new = function() {
    ;
  }).prototype = sticky_controller_impl.StickyRowUtils.prototype;
  dart.addTypeTests(sticky_controller_impl.StickyRowUtils);
  dart.addTypeCaches(sticky_controller_impl.StickyRowUtils);
  dart.setLibraryUri(sticky_controller_impl.StickyRowUtils, L0);
  dart.defineLazy(sticky_controller_impl.StickyRowUtils, {
    /*sticky_controller_impl.StickyRowUtils.MIN_CONTENT_HEIGHT_PX*/get MIN_CONTENT_HEIGHT_PX() {
      return 100;
    }
  }, true);
  var _controller = dart.privateName(pan_controller_impl, "_controller");
  var _stream = dart.privateName(pan_controller_impl, "_stream");
  var _onWheelSubscription = dart.privateName(pan_controller_impl, "_onWheelSubscription");
  var _onScrollSubscription = dart.privateName(pan_controller_impl, "_onScrollSubscription");
  var _panTop = dart.privateName(pan_controller_impl, "_panTop");
  var _panRight = dart.privateName(pan_controller_impl, "_panRight");
  var _panBottom = dart.privateName(pan_controller_impl, "_panBottom");
  var _panLeft = dart.privateName(pan_controller_impl, "_panLeft");
  var _wasPanning = dart.privateName(pan_controller_impl, "_wasPanning");
  var _wasScrolling = dart.privateName(pan_controller_impl, "_wasScrolling");
  var _endPan = dart.privateName(pan_controller_impl, "_endPan");
  var _lastEvent = dart.privateName(pan_controller_impl, "_lastEvent");
  var _eventCollectTimer = dart.privateName(pan_controller_impl, "_eventCollectTimer");
  var _notificationSender = dart.privateName(pan_controller_impl, "_notificationSender");
  var _scrollCooldownTimer = dart.privateName(pan_controller_impl, "_scrollCooldownTimer");
  var _deduplicationTimer = dart.privateName(pan_controller_impl, "_deduplicationTimer");
  var _onListen = dart.privateName(pan_controller_impl, "_onListen");
  var _onCancel = dart.privateName(pan_controller_impl, "_onCancel");
  var _scheduleNotification = dart.privateName(pan_controller_impl, "_scheduleNotification");
  var _scheduleScrollingCooldown = dart.privateName(pan_controller_impl, "_scheduleScrollingCooldown");
  var _hasPan = dart.privateName(pan_controller_impl, "_hasPan");
  var _hasNotification = dart.privateName(pan_controller_impl, "_hasNotification");
  var _resetPans = dart.privateName(pan_controller_impl, "_resetPans");
  var _scheduleDeduplication = dart.privateName(pan_controller_impl, "_scheduleDeduplication");
  var _cancelSubscriptions = dart.privateName(pan_controller_impl, "_cancelSubscriptions");
  var _cancelScrollingCooldown = dart.privateName(pan_controller_impl, "_cancelScrollingCooldown");
  var _cancelDeduplication = dart.privateName(pan_controller_impl, "_cancelDeduplication");
  var ngZone$ = dart.privateName(pan_controller_impl, "NonTouchPanController.ngZone");
  var domService$ = dart.privateName(pan_controller_impl, "NonTouchPanController.domService");
  var host$ = dart.privateName(pan_controller_impl, "NonTouchPanController.host");
  pan_controller_impl.NonTouchPanController = class NonTouchPanController extends core.Object {
    get ngZone() {
      return this[ngZone$];
    }
    set ngZone(value) {
      super.ngZone = value;
    }
    get domService() {
      return this[domService$];
    }
    set domService(value) {
      super.domService = value;
    }
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get onPan() {
      if (this[_controller] == null) {
        if (!(this[_stream] == null)) dart.assertFailed(null, L2, 60, 14, "_stream == null");
        this[_controller] = StreamControllerOfPanEventL().broadcast({sync: true, onListen: dart.bind(this, _onListen), onCancel: dart.bind(this, _onCancel)});
        this[_stream] = new (ZonedStreamOfPanEventL()).new(this[_controller].stream, dart.gbind(dart.bind(this.ngZone, 'runOutsideAngular'), dart.dynamic));
      }
      return this[_stream];
    }
    get maxScrollX() {
      return dart.notNull(this.host[$scrollWidth]) - dart.notNull(this.host.clientWidth);
    }
    get maxScrollY() {
      return dart.notNull(this.host[$scrollHeight]) - dart.notNull(this.host.clientHeight);
    }
    [_onListen]() {
      if (!(this[_onWheelSubscription] == null)) dart.assertFailed(null, L2, 73, 12, "_onWheelSubscription == null");
      this.ngZone.runOutsideAngular(core.Null, dart.fn(() => {
        this[_onWheelSubscription] = this.host[$onMouseWheel].listen(dart.fn(event => {
          if (dart.test(this[_wasScrolling])) return;
          this[_panTop] = dart.test(this[_panTop]) || dart.notNull(event[$deltaY]) < 0 && this.host[$scrollTop] === 0;
          this[_panRight] = dart.test(this[_panRight]) || dart.notNull(event[$deltaX]) > 0 && this.host[$scrollLeft] == this.maxScrollX;
          this[_panBottom] = dart.test(this[_panBottom]) || dart.notNull(event[$deltaY]) > 0 && this.host[$scrollTop] == this.maxScrollY;
          this[_panLeft] = dart.test(this[_panLeft]) || dart.notNull(event[$deltaX]) < 0 && this.host[$scrollLeft] === 0;
          this[_scheduleNotification]();
        }, WheelEventLToNull()));
        this[_onScrollSubscription] = this.host[$onScroll].listen(dart.fn(event => {
          this[_wasScrolling] = true;
          this[_scheduleScrollingCooldown]();
          if (dart.test(this[_wasPanning])) {
            this[_endPan] = true;
            this[_scheduleNotification]();
          }
        }, EventLToNull()));
      }, VoidToNull()));
    }
    get [_hasPan]() {
      return dart.test(this[_panTop]) || dart.test(this[_panRight]) || dart.test(this[_panBottom]) || dart.test(this[_panLeft]);
    }
    get [_hasNotification]() {
      return dart.test(this[_hasPan]) || dart.test(this[_endPan]);
    }
    [_resetPans]() {
      this[_panTop] = false;
      this[_panRight] = false;
      this[_panBottom] = false;
      this[_panLeft] = false;
    }
    [_scheduleNotification]() {
      if (this[_eventCollectTimer] != null) return;
      if (!dart.test(this[_hasNotification])) return;
      this[_eventCollectTimer] = async.Timer.new(pan_controller_impl.NonTouchPanController._eventCollectDuration, dart.fn(() => {
        this[_eventCollectTimer] = null;
        if (this[_notificationSender] != null) {
          this[_scheduleNotification]();
          return;
        }
        if (dart.test(this[_endPan])) this[_resetPans]();
        let event = new pan_controller_impl.PanEventImpl.new(this[_panTop], this[_panRight], this[_panBottom], this[_panLeft]);
        if (!event._equals(this[_lastEvent]) && dart.test(event.isValid) && !dart.test(event.isSubsetOf(this[_lastEvent]))) {
          this[_notificationSender] = this.domService.scheduleRead(dart.fn(() => {
            this[_notificationSender] = null;
            this[_controller].add(event);
          }, VoidToNull()));
          this[_lastEvent] = event;
          this[_scheduleDeduplication]();
        }
        this[_wasPanning] = (dart.test(this[_wasPanning]) || dart.test(this[_hasPan])) && !dart.test(this[_endPan]);
        this[_resetPans]();
        this[_endPan] = false;
      }, VoidToNull()));
    }
    [_onCancel]() {
      this[_cancelSubscriptions]();
    }
    [_cancelSubscriptions]() {
      if (this[_onWheelSubscription] != null) {
        this[_onWheelSubscription].cancel();
        this[_onWheelSubscription] = null;
      }
      if (this[_onScrollSubscription] != null) {
        this[_onScrollSubscription].cancel();
        this[_onScrollSubscription] = null;
      }
    }
    [_scheduleScrollingCooldown]() {
      this[_cancelScrollingCooldown]();
      this[_scrollCooldownTimer] = async.Timer.new(pan_controller_impl.NonTouchPanController._scrollCooldownDuration, dart.fn(() => {
        this[_scrollCooldownTimer] = null;
        this[_wasScrolling] = false;
      }, VoidToNull()));
    }
    [_cancelScrollingCooldown]() {
      if (this[_scrollCooldownTimer] != null) {
        this[_scrollCooldownTimer].cancel();
        this[_scrollCooldownTimer] = null;
      }
    }
    [_scheduleDeduplication]() {
      this[_cancelDeduplication]();
      this[_deduplicationTimer] = async.Timer.new(pan_controller_impl.NonTouchPanController._deduplicationDuration, dart.fn(() => {
        this[_deduplicationTimer] = null;
        this[_lastEvent] = null;
      }, VoidToNull()));
    }
    [_cancelDeduplication]() {
      if (this[_deduplicationTimer] != null) {
        this[_deduplicationTimer].cancel();
        this[_deduplicationTimer] = null;
      }
    }
    dispose() {
      if (this[_notificationSender] != null) {
        this[_notificationSender].dispose();
        this[_notificationSender] = null;
      }
      if (this[_controller] != null) {
        this[_controller].close();
      }
      this[_cancelSubscriptions]();
      if (this[_eventCollectTimer] != null) {
        this[_eventCollectTimer].cancel();
        this[_eventCollectTimer] = null;
      }
      this[_cancelScrollingCooldown]();
      this[_cancelDeduplication]();
    }
  };
  (pan_controller_impl.NonTouchPanController.new = function(ngZone, domService, host) {
    this[_controller] = null;
    this[_stream] = null;
    this[_onWheelSubscription] = null;
    this[_onScrollSubscription] = null;
    this[_panTop] = false;
    this[_panRight] = false;
    this[_panBottom] = false;
    this[_panLeft] = false;
    this[_wasPanning] = false;
    this[_wasScrolling] = false;
    this[_endPan] = false;
    this[_lastEvent] = null;
    this[_eventCollectTimer] = null;
    this[_notificationSender] = null;
    this[_scrollCooldownTimer] = null;
    this[_deduplicationTimer] = null;
    this[ngZone$] = ngZone;
    this[domService$] = domService;
    this[host$] = host;
    ;
  }).prototype = pan_controller_impl.NonTouchPanController.prototype;
  dart.addTypeTests(pan_controller_impl.NonTouchPanController);
  dart.addTypeCaches(pan_controller_impl.NonTouchPanController);
  pan_controller_impl.NonTouchPanController[dart.implements] = () => [scroll_host_interface.PanController];
  dart.setMethodSignature(pan_controller_impl.NonTouchPanController, () => ({
    __proto__: dart.getMethods(pan_controller_impl.NonTouchPanController.__proto__),
    [_onListen]: dart.fnType(dart.void, []),
    [_resetPans]: dart.fnType(dart.void, []),
    [_scheduleNotification]: dart.fnType(dart.void, []),
    [_onCancel]: dart.fnType(dart.void, []),
    [_cancelSubscriptions]: dart.fnType(dart.void, []),
    [_scheduleScrollingCooldown]: dart.fnType(dart.void, []),
    [_cancelScrollingCooldown]: dart.fnType(dart.void, []),
    [_scheduleDeduplication]: dart.fnType(dart.void, []),
    [_cancelDeduplication]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(pan_controller_impl.NonTouchPanController, () => ({
    __proto__: dart.getGetters(pan_controller_impl.NonTouchPanController.__proto__),
    onPan: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.PanEvent))),
    maxScrollX: dart.legacy(core.int),
    maxScrollY: dart.legacy(core.int),
    [_hasPan]: dart.legacy(core.bool),
    [_hasNotification]: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(pan_controller_impl.NonTouchPanController, L3);
  dart.setFieldSignature(pan_controller_impl.NonTouchPanController, () => ({
    __proto__: dart.getFields(pan_controller_impl.NonTouchPanController.__proto__),
    ngZone: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    domService: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    host: dart.finalFieldType(dart.legacy(html.Element)),
    [_controller]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.PanEvent)))),
    [_stream]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.PanEvent)))),
    [_onWheelSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.WheelEvent)))),
    [_onScrollSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.Event)))),
    [_panTop]: dart.fieldType(dart.legacy(core.bool)),
    [_panRight]: dart.fieldType(dart.legacy(core.bool)),
    [_panBottom]: dart.fieldType(dart.legacy(core.bool)),
    [_panLeft]: dart.fieldType(dart.legacy(core.bool)),
    [_wasPanning]: dart.fieldType(dart.legacy(core.bool)),
    [_wasScrolling]: dart.fieldType(dart.legacy(core.bool)),
    [_endPan]: dart.fieldType(dart.legacy(core.bool)),
    [_lastEvent]: dart.fieldType(dart.legacy(scroll_host_interface.PanEvent)),
    [_eventCollectTimer]: dart.fieldType(dart.legacy(async.Timer)),
    [_notificationSender]: dart.fieldType(dart.legacy(disposer.Disposable)),
    [_scrollCooldownTimer]: dart.fieldType(dart.legacy(async.Timer)),
    [_deduplicationTimer]: dart.fieldType(dart.legacy(async.Timer))
  }));
  dart.defineLazy(pan_controller_impl.NonTouchPanController, {
    /*pan_controller_impl.NonTouchPanController._eventCollectDuration*/get _eventCollectDuration() {
      return new core.Duration.new({milliseconds: 50});
    },
    /*pan_controller_impl.NonTouchPanController._scrollCooldownDuration*/get _scrollCooldownDuration() {
      return new core.Duration.new({seconds: 1});
    },
    /*pan_controller_impl.NonTouchPanController._deduplicationDuration*/get _deduplicationDuration() {
      return new core.Duration.new({seconds: 4});
    }
  }, true);
  var isTop$ = dart.privateName(pan_controller_impl, "PanEventImpl.isTop");
  var isRight$ = dart.privateName(pan_controller_impl, "PanEventImpl.isRight");
  var isBottom$ = dart.privateName(pan_controller_impl, "PanEventImpl.isBottom");
  var isLeft$ = dart.privateName(pan_controller_impl, "PanEventImpl.isLeft");
  pan_controller_impl.PanEventImpl = class PanEventImpl extends core.Object {
    get isTop() {
      return this[isTop$];
    }
    set isTop(value) {
      super.isTop = value;
    }
    get isRight() {
      return this[isRight$];
    }
    set isRight(value) {
      super.isRight = value;
    }
    get isBottom() {
      return this[isBottom$];
    }
    set isBottom(value) {
      super.isBottom = value;
    }
    get isLeft() {
      return this[isLeft$];
    }
    set isLeft(value) {
      super.isLeft = value;
    }
    get isPanning() {
      return dart.test(this.isTop) || dart.test(this.isRight) || dart.test(this.isBottom) || dart.test(this.isLeft);
    }
    get deltaX() {
      return 0;
    }
    get deltaY() {
      return 0;
    }
    get hasConflicts() {
      return dart.test(this.isTop) && dart.test(this.isBottom) || dart.test(this.isLeft) && dart.test(this.isRight);
    }
    get isValid() {
      return !dart.test(this.hasConflicts);
    }
    isSubsetOf(other) {
      return PanEventImplL().is(other) && (!dart.test(this.isTop) || dart.test(other.isTop)) && (!dart.test(this.isRight) || dart.test(other.isRight)) && (!dart.test(this.isBottom) || dart.test(other.isBottom)) && (!dart.test(this.isLeft) || dart.test(other.isLeft)) && dart.test(this.isPanning);
    }
    _equals(other) {
      if (other == null) return false;
      return PanEventImplL().is(other) && dart.equals(this.isTop, other.isTop) && dart.equals(this.isRight, other.isRight) && dart.equals(this.isBottom, other.isBottom) && dart.equals(this.isLeft, other.isLeft);
    }
    toString() {
      return dart.str(this.isPanning) + " " + (dart.test(this.isTop) ? "t" : "") + (dart.test(this.isRight) ? "r" : "") + (dart.test(this.isBottom) ? "b" : "") + (dart.test(this.isLeft) ? "l" : "");
    }
  };
  (pan_controller_impl.PanEventImpl.new = function(isTop, isRight, isBottom, isLeft) {
    this[isTop$] = isTop;
    this[isRight$] = isRight;
    this[isBottom$] = isBottom;
    this[isLeft$] = isLeft;
    ;
  }).prototype = pan_controller_impl.PanEventImpl.prototype;
  dart.addTypeTests(pan_controller_impl.PanEventImpl);
  dart.addTypeCaches(pan_controller_impl.PanEventImpl);
  pan_controller_impl.PanEventImpl[dart.implements] = () => [scroll_host_interface.PanEvent];
  dart.setMethodSignature(pan_controller_impl.PanEventImpl, () => ({
    __proto__: dart.getMethods(pan_controller_impl.PanEventImpl.__proto__),
    isSubsetOf: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(pan_controller_impl.PanEventImpl, () => ({
    __proto__: dart.getGetters(pan_controller_impl.PanEventImpl.__proto__),
    isPanning: dart.legacy(core.bool),
    deltaX: dart.legacy(core.int),
    deltaY: dart.legacy(core.int),
    hasConflicts: dart.legacy(core.bool),
    isValid: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(pan_controller_impl.PanEventImpl, L3);
  dart.setFieldSignature(pan_controller_impl.PanEventImpl, () => ({
    __proto__: dart.getFields(pan_controller_impl.PanEventImpl.__proto__),
    isTop: dart.finalFieldType(dart.legacy(core.bool)),
    isRight: dart.finalFieldType(dart.legacy(core.bool)),
    isBottom: dart.finalFieldType(dart.legacy(core.bool)),
    isLeft: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(pan_controller_impl.PanEventImpl, ['_equals', 'toString']);
  var _panController = dart.privateName(scroll_host_base, "_panController");
  var _stickyController = dart.privateName(scroll_host_base, "_stickyController");
  var _gestureListener = dart.privateName(scroll_host_base, "_gestureListener");
  var _intersectionStreams = dart.privateName(scroll_host_base, "_intersectionStreams");
  var _intersectionObserver = dart.privateName(scroll_host_base, "_intersectionObserver");
  var _nativeOnScrollController = dart.privateName(scroll_host_base, "_nativeOnScrollController");
  var _elementListenersDisposer = dart.privateName(scroll_host_base, "_elementListenersDisposer");
  var _nativeOnScrollSubscription = dart.privateName(scroll_host_base, "_nativeOnScrollSubscription");
  var _onScrollController = dart.privateName(scroll_host_base, "_onScrollController");
  var _onScrollStream = dart.privateName(scroll_host_base, "_onScrollStream");
  var _scrollInProgress = dart.privateName(scroll_host_base, "_scrollInProgress");
  var _scrollFrameScheduled = dart.privateName(scroll_host_base, "_scrollFrameScheduled");
  var _scrollFrameDelta = dart.privateName(scroll_host_base, "_scrollFrameDelta");
  var _domService$0 = dart.privateName(scroll_host_base, "_domService");
  var _ngZone$ = dart.privateName(scroll_host_base, "_ngZone");
  var _isDirectionScrollable = dart.privateName(scroll_host_base, "_isDirectionScrollable");
  var _onIntersection = dart.privateName(scroll_host_base, "_onIntersection");
  var _stopNativeScrollListener = dart.privateName(scroll_host_base, "_stopNativeScrollListener");
  var _onNativeScroll = dart.privateName(scroll_host_base, "_onNativeScroll");
  var _startElementListeners = dart.privateName(scroll_host_base, "_startElementListeners");
  var _stopElementListeners = dart.privateName(scroll_host_base, "_stopElementListeners");
  var _name = dart.privateName(gestures, "_name");
  var C0;
  var C1;
  var usePositionSticky$ = dart.privateName(scroll_host_base, "ScrollHostBase.usePositionSticky");
  var useTouchGestureListener$ = dart.privateName(scroll_host_base, "ScrollHostBase.useTouchGestureListener");
  scroll_host_base.ScrollHostBase = class ScrollHostBase extends core.Object {
    get usePositionSticky() {
      return this[usePositionSticky$];
    }
    set usePositionSticky(value) {
      super.usePositionSticky = value;
    }
    get useTouchGestureListener() {
      return this[useTouchGestureListener$];
    }
    set useTouchGestureListener(value) {
      super.useTouchGestureListener = value;
    }
    get throttleScrollEvents() {
      return true;
    }
    get panController() {
      return this[_panController];
    }
    get stickyController() {
      return this[_stickyController];
    }
    get onScroll() {
      if (this[_onScrollStream] == null) {
        this[_onScrollController] = StreamControllerOfScrollHostEventL().broadcast({onListen: dart.bind(this, 'startNativeScrollListener'), sync: true});
        this[_onScrollStream] = new (ZonedStreamOfScrollHostEventL()).new(this[_onScrollController].stream, dart.gbind(dart.bind(this[_ngZone$], 'runOutsideAngular'), dart.dynamic));
      }
      return this[_onScrollStream];
    }
    get scrollLength() {
      return math.max(intL(), 0, 1 + dart.notNull(this.scrollHeight) - dart.notNull(this.clientHeight));
    }
    calcViewportRect() {
      return new (RectangleOfnumL()).new(this.offsetX, this.offsetY, this.clientWidth, this.clientHeight);
    }
    scrollWithDelta(delta) {
      this.scrollToPosition(dart.notNull(this.scrollPosition) + dart.notNull(delta));
    }
    dispose() {
      let t0;
      this[_panController].dispose();
      this[_stickyController].dispose();
      t0 = this[_onScrollController];
      t0 == null ? null : t0.close();
      this[_onScrollController] = null;
      if (this[_intersectionObserver] != null) {
        this[_intersectionObserver].disconnect();
        for (let controller of this[_intersectionStreams][$values]) {
          controller.close();
        }
      }
      this[_stopNativeScrollListener]();
    }
    startNativeScrollListener() {
      this[_nativeOnScrollSubscription] == null ? this[_nativeOnScrollSubscription] = this.nativeOnScroll.listen(dart.bind(this, _onNativeScroll)) : null;
    }
    get nativeOnScroll() {
      if (this[_nativeOnScrollController] == null) {
        this[_nativeOnScrollController] = StreamControllerOfScrollHostEventL().broadcast({onListen: dart.bind(this, _startElementListeners), onCancel: dart.bind(this, _stopElementListeners)});
      }
      return this[_nativeOnScrollController].stream;
    }
    [_isDirectionScrollable](d) {
      switch (d) {
        case C0 || CT.C0:
        {
          return true;
        }
        case C1 || CT.C1:
        {
          return true;
        }
        default:
        {
          return false;
        }
      }
    }
    [_startElementListeners]() {
      if (this[_elementListenersDisposer] != null) return;
      this[_elementListenersDisposer] = new disposer.Disposer.oneShot();
      if (this[_gestureListener] != null) {
        this[_elementListenersDisposer].addStreamSubscription(GestureEventL(), this[_gestureListener].scrollStream.listen(dart.fn(event => {
          this[_nativeOnScrollController].add(event);
        }, ScrollHostEventLToNull())));
      }
      if (!dart.test(this.usePositionSticky)) {
        this[_elementListenersDisposer].addStreamSubscription(WheelEventL(), this.anchorElement[$onWheel].listen(dart.fn(event => {
          let t0, t0$, t0$0, t0$1, t0$2, t0$3;
          if (!WheelEventL().is(event)) return;
          if (dart.test((t0$ = (t0 = event, t0 == null ? null : t0.ctrlKey), t0$ == null ? false : t0$)) || dart.test((t0$1 = (t0$0 = event, t0$0 == null ? null : t0$0.metaKey), t0$1 == null ? false : t0$1)) || dart.test((t0$3 = (t0$2 = event, t0$2 == null ? null : t0$2.shiftKey), t0$3 == null ? false : t0$3))) return;
          let deltaX = null;
          let deltaY = null;
          try {
            deltaX = event[$deltaX];
            if (deltaX == null) {
              scroll_host_base.ScrollHostBase._logger.severe("deltaX is null in event: " + dart.str(event));
            }
          } catch (e) {
            let error = dart.getThrown(e);
            if (UnsupportedErrorL().is(error)) {
              scroll_host_base.ScrollHostBase._logger.severe("deltaX is not supported in event: " + dart.str(event), error);
            } else
              throw e;
          }
          deltaX == null ? deltaX = 0 : null;
          try {
            deltaY = event[$deltaY];
            if (deltaY == null) {
              scroll_host_base.ScrollHostBase._logger.severe("deltaY is null in event: " + dart.str(event));
            }
          } catch (e$) {
            let error = dart.getThrown(e$);
            if (UnsupportedErrorL().is(error)) {
              scroll_host_base.ScrollHostBase._logger.severe("deltaY is not supported in event: " + dart.str(event), error);
            } else
              throw e$;
          }
          deltaY == null ? deltaY = 0 : null;
          let d = gestures.scrollDirection(deltaX, -dart.notNull(deltaY));
          if (deltaY === 0 || !dart.test(this[_isDirectionScrollable](d))) return;
          if (dart.test(gestures.innerScrollableDirections(this.anchorElement, event[$target])[$_get](d))) return;
          this.stopEvent(event);
          let pixelsPerDeltaUnit = event[$deltaMode] === 0 ? 1 : 16;
          let deltaYPixels = deltaY[$toInt]() * pixelsPerDeltaUnit;
          this[_nativeOnScrollController].add(new scroll_host_event_impl.ScrollHostEventImpl.new(0, deltaYPixels));
        }, WheelEventLToNull())));
      }
      this[_elementListenersDisposer].addStreamSubscription(EventL(), this.scrollbarHost[$onScroll].listen(dart.fn(event => {
        if (dart.test(this[_scrollInProgress])) {
          this[_scrollInProgress] = false;
          return;
        }
        this[_nativeOnScrollController].add(new scroll_host_event_impl.ScrollHostEventImpl.new(0, 0));
      }, EventLToNull())));
    }
    [_stopElementListeners]() {
      if (dart.test(this[_nativeOnScrollController].hasListener)) return;
      this[_elementListenersDisposer].dispose();
      this[_elementListenersDisposer] = null;
    }
    [_onNativeScroll](event) {
      let t2;
      this[_scrollFrameDelta] = dart.notNull(this[_scrollFrameDelta]) + dart.notNull((t2 = event.deltaY, t2 == null ? 0 : t2));
      if (dart.test(this[_scrollFrameScheduled]) && dart.test(this.throttleScrollEvents)) return;
      this[_scrollFrameScheduled] = true;
      html.window[$requestAnimationFrame](dart.fn(_ => {
        let t2;
        if (this[_scrollFrameDelta] !== 0) {
          this[_scrollInProgress] = true;
          this.scrollWithDelta(this[_scrollFrameDelta]);
        }
        this.stickyController.syncOnScroll();
        t2 = this[_onScrollController];
        t2 == null ? null : t2.add(event);
        this[_scrollFrameScheduled] = false;
        this[_scrollFrameDelta] = 0;
      }, numLToNull()));
    }
    [_stopNativeScrollListener]() {
      if (this[_nativeOnScrollSubscription] != null) {
        this[_nativeOnScrollSubscription].cancel();
        this[_nativeOnScrollSubscription] = null;
      }
    }
    [_onIntersection](entries, _observer) {
      let t3;
      for (let t2 of entries) {
        let entry = IntersectionObserverEntryL().as(t2);
        t3 = this[_intersectionStreams][$_get](entry.target);
        t3 == null ? null : t3.add(entry);
      }
    }
    onIntersection(element) {
      let t4, t3;
      if (!dart.test(feature_detector.supportsIntersectionObserver)) dart.assertFailed(null, L4, 295, 12, "feature_detector.supportsIntersectionObserver");
      t3 = this[_intersectionStreams];
      t4 = element;
      t3[$_get](t4) == null ? t3[$_set](t4, StreamControllerOfIntersectionObserverEntryL().broadcast({onListen: dart.fn(() => this[_intersectionObserver].observe(element), VoidTovoid()), onCancel: dart.fn(() => this[_intersectionObserver].unobserve(element), VoidTovoid()), sync: true})) : null;
      return this[_intersectionStreams][$_get](element).stream;
    }
  };
  (scroll_host_base.ScrollHostBase.new = function(_domService, _ngZone, gestureListenerFactory, opts) {
    let usePositionSticky = opts && 'usePositionSticky' in opts ? opts.usePositionSticky : false;
    let useTouchGestureListener = opts && 'useTouchGestureListener' in opts ? opts.useTouchGestureListener : true;
    this[_panController] = null;
    this[_stickyController] = null;
    this[_gestureListener] = null;
    this[_intersectionStreams] = new (LinkedMapOfElementL$StreamControllerLOfIntersectionObserverEntryL()).new();
    this[_intersectionObserver] = null;
    this[_nativeOnScrollController] = null;
    this[_elementListenersDisposer] = null;
    this[_nativeOnScrollSubscription] = null;
    this[_onScrollController] = null;
    this[_onScrollStream] = null;
    this[_scrollInProgress] = false;
    this[_scrollFrameScheduled] = false;
    this[_scrollFrameDelta] = 0;
    this[_domService$0] = _domService;
    this[_ngZone$] = _ngZone;
    this[usePositionSticky$] = usePositionSticky;
    this[useTouchGestureListener$] = useTouchGestureListener;
    this[_panController] = new pan_controller_impl.NonTouchPanController.new(this[_ngZone$], this[_domService$0], this.anchorElement);
    this[_stickyController] = dart.test(this.usePositionSticky) ? new position_sticky_controller.PositionStickyController.new(this) : new sticky_controller_impl.StickyControllerImpl.new(this[_domService$0], this);
    if (dart.test(feature_detector.isTouchInterface) && dart.test(this.useTouchGestureListener)) {
      this[_gestureListener] = gestureListenerFactory.create(this.anchorElement, dart.bind(this, _isDirectionScrollable));
    }
    if (dart.test(feature_detector.supportsIntersectionObserver)) {
      let root = ElementL().is(this.scrollbarHost) ? this.scrollbarHost : null;
      this[_intersectionObserver] = html.IntersectionObserver.new(js.allowInterop(ListLAndIntersectionObserverLToLvoid(), dart.bind(this, _onIntersection)), new _js_helper.LinkedMap.from(["root", root]));
    }
  }).prototype = scroll_host_base.ScrollHostBase.prototype;
  dart.addTypeTests(scroll_host_base.ScrollHostBase);
  dart.addTypeCaches(scroll_host_base.ScrollHostBase);
  scroll_host_base.ScrollHostBase[dart.implements] = () => [scroll_host_interface.ScrollHost];
  dart.setMethodSignature(scroll_host_base.ScrollHostBase, () => ({
    __proto__: dart.getMethods(scroll_host_base.ScrollHostBase.__proto__),
    calcViewportRect: dart.fnType(dart.legacy(math.Rectangle$(core.num)), []),
    scrollWithDelta: dart.fnType(dart.void, [dart.legacy(core.int)]),
    dispose: dart.fnType(dart.void, []),
    startNativeScrollListener: dart.fnType(dart.void, []),
    [_isDirectionScrollable]: dart.fnType(dart.legacy(core.bool), [dart.legacy(gestures.GestureDirection)]),
    [_startElementListeners]: dart.fnType(dart.void, []),
    [_stopElementListeners]: dart.fnType(dart.void, []),
    [_onNativeScroll]: dart.fnType(dart.void, [dart.legacy(scroll_host_interface.ScrollHostEvent)]),
    [_stopNativeScrollListener]: dart.fnType(dart.void, []),
    [_onIntersection]: dart.fnType(dart.void, [dart.legacy(core.Iterable), dart.legacy(html.IntersectionObserver)]),
    onIntersection: dart.fnType(dart.legacy(async.Stream$(dart.legacy(html.IntersectionObserverEntry))), [dart.legacy(html.Element)])
  }));
  dart.setGetterSignature(scroll_host_base.ScrollHostBase, () => ({
    __proto__: dart.getGetters(scroll_host_base.ScrollHostBase.__proto__),
    throttleScrollEvents: dart.legacy(core.bool),
    panController: dart.legacy(scroll_host_interface.PanController),
    stickyController: dart.legacy(scroll_host_interface.StickyController),
    onScroll: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent))),
    scrollLength: dart.legacy(core.int),
    nativeOnScroll: dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent)))
  }));
  dart.setLibraryUri(scroll_host_base.ScrollHostBase, L5);
  dart.setFieldSignature(scroll_host_base.ScrollHostBase, () => ({
    __proto__: dart.getFields(scroll_host_base.ScrollHostBase.__proto__),
    [_domService$0]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_panController]: dart.fieldType(dart.legacy(scroll_host_interface.PanController)),
    [_stickyController]: dart.fieldType(dart.legacy(scroll_host_interface.StickyController)),
    [_gestureListener]: dart.fieldType(dart.legacy(gestures.GestureListener)),
    [_intersectionStreams]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(html.Element), dart.legacy(async.StreamController$(dart.legacy(html.IntersectionObserverEntry)))))),
    [_intersectionObserver]: dart.fieldType(dart.legacy(html.IntersectionObserver)),
    [_nativeOnScrollController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.ScrollHostEvent)))),
    [_elementListenersDisposer]: dart.fieldType(dart.legacy(disposer.Disposer)),
    [_nativeOnScrollSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_onScrollController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(scroll_host_interface.ScrollHostEvent)))),
    [_onScrollStream]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(scroll_host_interface.ScrollHostEvent)))),
    usePositionSticky: dart.finalFieldType(dart.legacy(core.bool)),
    useTouchGestureListener: dart.finalFieldType(dart.legacy(core.bool)),
    [_scrollInProgress]: dart.fieldType(dart.legacy(core.bool)),
    [_scrollFrameScheduled]: dart.fieldType(dart.legacy(core.bool)),
    [_scrollFrameDelta]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(scroll_host_base.ScrollHostBase, {
    /*scroll_host_base.ScrollHostBase._logger*/get _logger() {
      return logger.Logger.new("ScrollHostBase");
    }
  }, true);
  var _window$ = dart.privateName(scroll_host_base, "_window");
  var offsetX = dart.privateName(scroll_host_base, "WindowScrollHostBase.offsetX");
  var offsetY = dart.privateName(scroll_host_base, "WindowScrollHostBase.offsetY");
  scroll_host_base.WindowScrollHostBase = class WindowScrollHostBase extends scroll_host_base.ScrollHostBase {
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      super.offsetX = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      super.offsetY = value;
    }
    get scrollbarHost() {
      return this[_window$];
    }
    get scrollPosition() {
      return this[_window$][$scrollY];
    }
    scrollToPosition(newPosition) {
      this[_window$][$scrollTo](this[_window$][$scrollX], newPosition);
      this.stickyController.syncOnScroll();
    }
    get scrollHeight() {
      let bodyScrollHeight = 0;
      if (HtmlDocumentL().is(this[_window$][$document])) {
        let htmlDoc = HtmlDocumentL().as(this[_window$][$document]);
        bodyScrollHeight = htmlDoc.body[$scrollHeight];
      }
      return math.max(intL(), bodyScrollHeight, this[_window$][$document].documentElement[$scrollHeight]);
    }
    get clientHeight() {
      return this[_window$][$document].documentElement.clientHeight;
    }
    get clientWidth() {
      return this[_window$][$document].documentElement.clientWidth;
    }
    get anchorElement() {
      return this[_window$][$document].documentElement;
    }
    stopEvent(event) {
      event.stopPropagation();
    }
  };
  (scroll_host_base.WindowScrollHostBase.new = function(domService, managedZone, gestureListenerFactory, _window) {
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[_window$] = _window;
    scroll_host_base.WindowScrollHostBase.__proto__.new.call(this, domService, managedZone, gestureListenerFactory);
    ;
  }).prototype = scroll_host_base.WindowScrollHostBase.prototype;
  dart.addTypeTests(scroll_host_base.WindowScrollHostBase);
  dart.addTypeCaches(scroll_host_base.WindowScrollHostBase);
  dart.setMethodSignature(scroll_host_base.WindowScrollHostBase, () => ({
    __proto__: dart.getMethods(scroll_host_base.WindowScrollHostBase.__proto__),
    scrollToPosition: dart.fnType(dart.void, [dart.legacy(core.int)]),
    stopEvent: dart.fnType(dart.void, [dart.legacy(html.WheelEvent)])
  }));
  dart.setGetterSignature(scroll_host_base.WindowScrollHostBase, () => ({
    __proto__: dart.getGetters(scroll_host_base.WindowScrollHostBase.__proto__),
    scrollbarHost: dart.legacy(html.GlobalEventHandlers),
    scrollPosition: dart.legacy(core.int),
    scrollHeight: dart.legacy(core.int),
    clientHeight: dart.legacy(core.int),
    clientWidth: dart.legacy(core.int),
    anchorElement: dart.legacy(html.Element)
  }));
  dart.setLibraryUri(scroll_host_base.WindowScrollHostBase, L5);
  dart.setFieldSignature(scroll_host_base.WindowScrollHostBase, () => ({
    __proto__: dart.getFields(scroll_host_base.WindowScrollHostBase.__proto__),
    [_window$]: dart.finalFieldType(dart.legacy(html.Window)),
    offsetX: dart.finalFieldType(dart.legacy(core.num)),
    offsetY: dart.finalFieldType(dart.legacy(core.num))
  }));
  var element$ = dart.privateName(scroll_host_base, "ElementScrollHostBase.element");
  scroll_host_base.ElementScrollHostBase = class ElementScrollHostBase extends scroll_host_base.ScrollHostBase {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get scrollbarHost() {
      return this.element;
    }
    get scrollPosition() {
      return this.element[$scrollTop];
    }
    scrollToPosition(newPosition) {
      this.element[$scrollTop] = newPosition;
      this.stickyController.syncOnScroll();
    }
    get scrollHeight() {
      return this.element[$scrollHeight];
    }
    get clientHeight() {
      return this.element.clientHeight;
    }
    get clientWidth() {
      return this.element.clientWidth;
    }
    get offsetX() {
      return this.element.getBoundingClientRect()[$left];
    }
    get offsetY() {
      return this.element.getBoundingClientRect()[$top];
    }
    get anchorElement() {
      return this.element;
    }
    [_isDirectionScrollable](d) {
      switch (d) {
        case C0 || CT.C0:
        {
          return dart.notNull(this.scrollPosition) > 0;
        }
        case C1 || CT.C1:
        {
          return dart.notNull(this.scrollHeight) > dart.notNull(this.scrollPosition) + dart.notNull(this.clientHeight);
        }
        default:
        {
          return false;
        }
      }
    }
    stopEvent(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  (scroll_host_base.ElementScrollHostBase.new = function(domService, managedZone, gestureListenerFactory, element, opts) {
    let usePositionSticky = opts && 'usePositionSticky' in opts ? opts.usePositionSticky : false;
    let useTouchGestureListener = opts && 'useTouchGestureListener' in opts ? opts.useTouchGestureListener : true;
    this[element$] = element;
    scroll_host_base.ElementScrollHostBase.__proto__.new.call(this, domService, managedZone, gestureListenerFactory, {usePositionSticky: usePositionSticky, useTouchGestureListener: boolL().as(useTouchGestureListener)});
    this.element.style[$overflowY] = "auto";
    this.element.style[$setProperty]("-webkit-overflow-scrolling", "touch");
    if (dart.test(usePositionSticky)) {
      this.element.style[$transform] = "translateZ(0)";
    }
  }).prototype = scroll_host_base.ElementScrollHostBase.prototype;
  dart.addTypeTests(scroll_host_base.ElementScrollHostBase);
  dart.addTypeCaches(scroll_host_base.ElementScrollHostBase);
  dart.setMethodSignature(scroll_host_base.ElementScrollHostBase, () => ({
    __proto__: dart.getMethods(scroll_host_base.ElementScrollHostBase.__proto__),
    scrollToPosition: dart.fnType(dart.void, [dart.legacy(core.int)]),
    stopEvent: dart.fnType(dart.void, [dart.legacy(html.WheelEvent)])
  }));
  dart.setGetterSignature(scroll_host_base.ElementScrollHostBase, () => ({
    __proto__: dart.getGetters(scroll_host_base.ElementScrollHostBase.__proto__),
    scrollbarHost: dart.legacy(html.GlobalEventHandlers),
    scrollPosition: dart.legacy(core.int),
    scrollHeight: dart.legacy(core.int),
    clientHeight: dart.legacy(core.int),
    clientWidth: dart.legacy(core.int),
    offsetX: dart.legacy(core.num),
    offsetY: dart.legacy(core.num),
    anchorElement: dart.legacy(html.Element)
  }));
  dart.setLibraryUri(scroll_host_base.ElementScrollHostBase, L5);
  dart.setFieldSignature(scroll_host_base.ElementScrollHostBase, () => ({
    __proto__: dart.getFields(scroll_host_base.ElementScrollHostBase.__proto__),
    element: dart.finalFieldType(dart.legacy(html.Element))
  }));
  var _lastEvent$ = dart.privateName(scroll_host_base, "_lastEvent");
  var _className = dart.privateName(scroll_host_base, "_className");
  var _subscription = dart.privateName(scroll_host_base, "_subscription");
  var _scrollHost$0 = dart.privateName(scroll_host_base, "_scrollHost");
  var _element$ = dart.privateName(scroll_host_base, "_element");
  var _updateClass = dart.privateName(scroll_host_base, "_updateClass");
  scroll_host_base.BasePanClassDirective = class BasePanClassDirective extends core.Object {
    set className(value) {
      if (!(this[_className] == null || this[_className] == value)) dart.assertFailed(null, L4, 441, 12, "(_className == null) || (_className == value)");
      this[_className] = value;
    }
    startPanListener() {
      if (this[_subscription] != null) return;
      this[_subscription] = this[_scrollHost$0].panController.onPan.listen(dart.fn(event => {
        this[_updateClass](this[_lastEvent$].isTop, event.isTop, "-top");
        this[_updateClass](this[_lastEvent$].isRight, event.isRight, "-right");
        this[_updateClass](this[_lastEvent$].isBottom, event.isBottom, "-bottom");
        this[_updateClass](this[_lastEvent$].isLeft, event.isLeft, "-left");
        this[_lastEvent$] = event;
      }, PanEventLToNull()));
    }
    stopPanListener() {
      if (this[_subscription] != null) {
        this[_subscription].cancel();
        this[_subscription] = null;
      }
    }
    [_updateClass](prevValue, newValue, suffix) {
      if (dart.equals(prevValue, newValue)) return;
      if (dart.test(prevValue)) {
        this[_domService$0].scheduleWrite(dart.fn(() => {
          this[_element$][$classes].remove(dart.notNull(this[_className]) + dart.notNull(suffix));
        }, VoidToNull()));
      } else if (dart.test(newValue)) {
        this[_domService$0].scheduleWrite(dart.fn(() => {
          this[_element$][$classes].add(dart.notNull(this[_className]) + dart.notNull(suffix));
        }, VoidToNull()));
      }
    }
  };
  (scroll_host_base.BasePanClassDirective.new = function(_domService, _scrollHost, _element) {
    this[_lastEvent$] = new pan_controller_impl.PanEventImpl.new(false, false, false, false);
    this[_className] = null;
    this[_subscription] = null;
    this[_domService$0] = _domService;
    this[_scrollHost$0] = _scrollHost;
    this[_element$] = _element;
    ;
  }).prototype = scroll_host_base.BasePanClassDirective.prototype;
  dart.addTypeTests(scroll_host_base.BasePanClassDirective);
  dart.addTypeCaches(scroll_host_base.BasePanClassDirective);
  dart.setMethodSignature(scroll_host_base.BasePanClassDirective, () => ({
    __proto__: dart.getMethods(scroll_host_base.BasePanClassDirective.__proto__),
    startPanListener: dart.fnType(dart.void, []),
    stopPanListener: dart.fnType(dart.void, []),
    [_updateClass]: dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.bool), dart.legacy(core.String)])
  }));
  dart.setSetterSignature(scroll_host_base.BasePanClassDirective, () => ({
    __proto__: dart.getSetters(scroll_host_base.BasePanClassDirective.__proto__),
    className: dart.legacy(core.String)
  }));
  dart.setLibraryUri(scroll_host_base.BasePanClassDirective, L5);
  dart.setFieldSignature(scroll_host_base.BasePanClassDirective, () => ({
    __proto__: dart.getFields(scroll_host_base.BasePanClassDirective.__proto__),
    [_domService$0]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_scrollHost$0]: dart.finalFieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_lastEvent$]: dart.fieldType(dart.legacy(scroll_host_interface.PanEvent)),
    [_className]: dart.fieldType(dart.legacy(core.String)),
    [_subscription]: dart.fieldType(dart.legacy(async.StreamSubscription))
  }));
  var _stickyElements = dart.privateName(position_sticky_controller, "_stickyElements");
  var _isUpdateScheduled = dart.privateName(position_sticky_controller, "_isUpdateScheduled");
  var _scrollHost$1 = dart.privateName(position_sticky_controller, "_scrollHost");
  var _scheduleUpdate = dart.privateName(position_sticky_controller, "_scheduleUpdate");
  var _removeStickyStyle = dart.privateName(position_sticky_controller, "_removeStickyStyle");
  var _update = dart.privateName(position_sticky_controller, "_update");
  var _startIntersectionSubscription = dart.privateName(position_sticky_controller, "_startIntersectionSubscription");
  var _addStickyStyle = dart.privateName(position_sticky_controller, "_addStickyStyle");
  var _stopIntersectionSubscription = dart.privateName(position_sticky_controller, "_stopIntersectionSubscription");
  var _updateLayout = dart.privateName(position_sticky_controller, "_updateLayout");
  var usePositionSticky$0 = dart.privateName(position_sticky_controller, "PositionStickyController.usePositionSticky");
  position_sticky_controller.PositionStickyController = class PositionStickyController extends core.Object {
    get usePositionSticky() {
      return this[usePositionSticky$0];
    }
    set usePositionSticky(value) {
      super.usePositionSticky = value;
    }
    stick(element, position, range, opts) {
      let stickyClass = opts && 'stickyClass' in opts ? opts.stickyClass : null;
      let stickyKey = opts && 'stickyKey' in opts ? opts.stickyKey : null;
      let stickyElement = new position_sticky_controller._StickyElement.new(element, position, range, stickyClass, stickyKey);
      if (dart.test(this[_stickyElements][$contains](stickyElement))) return;
      this[_stickyElements][$removeWhere](dart.fn(stickyElement => dart.equals(element, stickyElement.element), _StickyElementLToboolL()));
      this[_stickyElements][$add](stickyElement);
      this[_scheduleUpdate]();
    }
    unstick(element) {
      let stickyElement = null;
      for (let e of this[_stickyElements]) {
        if (dart.equals(element, e.element)) {
          stickyElement = e;
          break;
        }
      }
      if (stickyElement == null) return;
      this[_stickyElements][$remove](stickyElement);
      this[_removeStickyStyle](stickyElement);
      this[_scheduleUpdate]();
    }
    syncOnScroll() {
    }
    trackFloating(element) {
    }
    untrackFloating(element) {
    }
    get onUpdate() {
      return dart.throw(new core.UnsupportedError.new("PositionStickyController.onUpdate"));
    }
    get enableSmoothPushing() {
      return false;
    }
    set enableSmoothPushing(_) {
    }
    dispose() {
      for (let stickyElement of this[_stickyElements]) {
        this[_removeStickyStyle](stickyElement);
      }
      this[_stickyElements][$clear]();
    }
    [_scheduleUpdate]() {
      if (dart.test(this[_isUpdateScheduled])) return;
      this[_isUpdateScheduled] = true;
      html.window[$requestAnimationFrame](dart.fn(_ => {
        this[_isUpdateScheduled] = false;
        this[_update]();
      }, numLToNull()));
    }
    [_addStickyStyle](stickyElement, positionProperty, zIndex, offset) {
      let t3;
      t3 = stickyElement.element.style;
      (() => {
        t3[$position] = "sticky";
        t3[$zIndex] = dart.str(zIndex);
        return t3;
      })();
      stickyElement.element.style[$setProperty](positionProperty, dart.str(offset) + "px");
      if (stickyElement.stickyClass != null) {
        if (dart.test(feature_detector.supportsIntersectionObserver)) {
          if (stickyElement.intersectionSubscription == null) {
            this[_startIntersectionSubscription](stickyElement);
          }
          stickyElement.intersectionElement.style[$setProperty](positionProperty, dart.str(-(dart.notNull(offset) + 2)) + "px");
        } else {
          stickyElement.element[$classes].add(stickyElement.stickyClass);
        }
      }
    }
    [_removeStickyStyle](stickyElement) {
      let t3;
      t3 = stickyElement.element.style;
      (() => {
        t3[$position] = "";
        t3[$zIndex] = "";
        t3[$top] = "";
        t3[$bottom] = "";
        return t3;
      })();
      if (stickyElement.stickyClass != null) {
        stickyElement.element[$classes].remove(stickyElement.stickyClass);
        if (stickyElement.intersectionSubscription != null) {
          this[_stopIntersectionSubscription](stickyElement);
        }
      }
    }
    [_startIntersectionSubscription](stickyElement) {
      let t3;
      if (!(stickyElement.intersectionElement == null)) dart.assertFailed(null, L6, 150, 12, "stickyElement.intersectionElement == null");
      if (!(stickyElement.intersectionSubscription == null)) dart.assertFailed(null, L6, 151, 12, "stickyElement.intersectionSubscription == null");
      stickyElement.intersectionElement = (t3 = html.DivElement.new(), (() => {
        t3.style[$width] = "0px";
        t3.style[$height] = "1px";
        t3.style[$position] = "absolute";
        return t3;
      })());
      stickyElement.element[$append](stickyElement.intersectionElement);
      stickyElement.intersectionSubscription = this[_scrollHost$1].onIntersection(stickyElement.intersectionElement).listen(dart.fn(e => {
        if (dart.notNull(e.intersectionRect[$height]) > 0) {
          stickyElement.element[$classes].remove(stickyElement.stickyClass);
        } else {
          stickyElement.element[$classes].add(stickyElement.stickyClass);
        }
      }, IntersectionObserverEntryLToNull()));
    }
    [_stopIntersectionSubscription](stickyElement) {
      stickyElement.intersectionSubscription.cancel();
      stickyElement.intersectionElement[$remove]();
      stickyElement.intersectionSubscription = null;
      stickyElement.intersectionElement = null;
    }
    [_update]() {
      let topElements = this[_stickyElements][$where](dart.fn(e => e.position == scroll_host_interface.StickyPosition.TOP, _StickyElementLToboolL()))[$toList]();
      let bottomElements = this[_stickyElements][$where](dart.fn(e => e.position == scroll_host_interface.StickyPosition.BOTTOM, _StickyElementLToboolL()))[$toList]();
      let zIndex = this[_updateLayout](topElements, 1, "top", scroll_host_interface.stickyControllerZIndex);
      this[_updateLayout](bottomElements, -1, "bottom", zIndex);
    }
    [_updateLayout](elements, sortOrder, positionProperty, startZIndex) {
      let elementsAndRects = elements[$map](ListLOfObjectL(), dart.fn(e => JSArrayOfObjectL().of([e, e.element.getBoundingClientRect()]), _StickyElementLToListLOfObjectL()))[$toList]();
      elementsAndRects[$sort](dart.fn((a, b) => {
        let elementA = _StickyElementL().as(a[$_get](0));
        let elementB = _StickyElementL().as(b[$_get](0));
        return dart.notNull(sortOrder) * dart.notNull(events.compareDocumentPosition(elementA.element, elementB.element));
      }, ListLOfObjectLAndListLOfObjectLTointL()));
      let stickyKeyOffsets = new (IdentityMapOfStringL$numL()).new();
      let offset = 0;
      let zIndex = startZIndex;
      for (let item of elementsAndRects) {
        let stickyElement = _StickyElementL().as(item[$_get](0));
        let rect = RectangleLOfnum().as(item[$_get](1));
        if (stickyElement.stickyKey != null) {
          if (stickyKeyOffsets[$_get](stickyElement.stickyKey) == null) {
            stickyKeyOffsets[$_set](stickyElement.stickyKey, offset);
            offset = offset + dart.notNull(rect[$height]);
          }
          this[_addStickyStyle](stickyElement, positionProperty, zIndex, stickyKeyOffsets[$_get](stickyElement.stickyKey));
        } else {
          this[_addStickyStyle](stickyElement, positionProperty, zIndex, offset);
          offset = offset + dart.notNull(rect[$height]);
        }
        zIndex = dart.notNull(zIndex) + 1;
      }
      return dart.asNullableInt(zIndex);
    }
  };
  (position_sticky_controller.PositionStickyController.new = function(_scrollHost) {
    this[_stickyElements] = JSArrayOf_StickyElementL().of([]);
    this[usePositionSticky$0] = true;
    this[_isUpdateScheduled] = false;
    this[_scrollHost$1] = _scrollHost;
    ;
  }).prototype = position_sticky_controller.PositionStickyController.prototype;
  dart.addTypeTests(position_sticky_controller.PositionStickyController);
  dart.addTypeCaches(position_sticky_controller.PositionStickyController);
  position_sticky_controller.PositionStickyController[dart.implements] = () => [scroll_host_interface.StickyController];
  dart.setMethodSignature(position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getMethods(position_sticky_controller.PositionStickyController.__proto__),
    stick: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(scroll_host_interface.StickyPosition), dart.legacy(html.Element)], {stickyClass: dart.legacy(core.String), stickyKey: dart.legacy(core.String)}, {}),
    unstick: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    syncOnScroll: dart.fnType(dart.void, []),
    trackFloating: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    untrackFloating: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    dispose: dart.fnType(dart.void, []),
    [_scheduleUpdate]: dart.fnType(dart.void, []),
    [_addStickyStyle]: dart.fnType(dart.void, [dart.legacy(position_sticky_controller._StickyElement), dart.legacy(core.String), dart.legacy(core.num), dart.legacy(core.num)]),
    [_removeStickyStyle]: dart.fnType(dart.void, [dart.legacy(position_sticky_controller._StickyElement)]),
    [_startIntersectionSubscription]: dart.fnType(dart.void, [dart.legacy(position_sticky_controller._StickyElement)]),
    [_stopIntersectionSubscription]: dart.fnType(dart.void, [dart.legacy(position_sticky_controller._StickyElement)]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLayout]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(position_sticky_controller._StickyElement))), dart.legacy(core.int), dart.legacy(core.String), dart.legacy(core.int)])
  }));
  dart.setGetterSignature(position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getGetters(position_sticky_controller.PositionStickyController.__proto__),
    onUpdate: dart.legacy(async.Stream$(core.Null)),
    enableSmoothPushing: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getSetters(position_sticky_controller.PositionStickyController.__proto__),
    enableSmoothPushing: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(position_sticky_controller.PositionStickyController, L7);
  dart.setFieldSignature(position_sticky_controller.PositionStickyController, () => ({
    __proto__: dart.getFields(position_sticky_controller.PositionStickyController.__proto__),
    [_scrollHost$1]: dart.finalFieldType(dart.legacy(scroll_host_interface.ScrollHost)),
    [_stickyElements]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(position_sticky_controller._StickyElement)))),
    usePositionSticky: dart.finalFieldType(dart.legacy(core.bool)),
    [_isUpdateScheduled]: dart.fieldType(dart.legacy(core.bool))
  }));
  position_sticky_controller._StickyElement = class _StickyElement extends core.Object {
    _equals(other) {
      if (other == null) return false;
      if (!_StickyElementL().is(other)) return false;
      let o = _StickyElementL().as(other);
      return dart.equals(this.element, o.element) && this.position == o.position && dart.equals(this.range, o.range) && this.stickyClass == o.stickyClass && this.stickyKey == o.stickyKey;
    }
    get hashCode() {
      return hash.hashObjects([this.element, this.position, this.range, this.stickyClass, this.stickyKey]);
    }
  };
  (position_sticky_controller._StickyElement.new = function(element, position, range, stickyClass, stickyKey) {
    this.intersectionElement = null;
    this.intersectionSubscription = null;
    this.element = element;
    this.position = position;
    this.range = range;
    this.stickyClass = stickyClass;
    this.stickyKey = stickyKey;
    ;
  }).prototype = position_sticky_controller._StickyElement.prototype;
  dart.addTypeTests(position_sticky_controller._StickyElement);
  dart.addTypeCaches(position_sticky_controller._StickyElement);
  dart.setMethodSignature(position_sticky_controller._StickyElement, () => ({
    __proto__: dart.getMethods(position_sticky_controller._StickyElement.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(position_sticky_controller._StickyElement, () => ({
    __proto__: dart.getGetters(position_sticky_controller._StickyElement.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(position_sticky_controller._StickyElement, L7);
  dart.setFieldSignature(position_sticky_controller._StickyElement, () => ({
    __proto__: dart.getFields(position_sticky_controller._StickyElement.__proto__),
    element: dart.finalFieldType(dart.legacy(html.Element)),
    position: dart.finalFieldType(dart.legacy(scroll_host_interface.StickyPosition)),
    range: dart.finalFieldType(dart.legacy(html.Element)),
    stickyClass: dart.finalFieldType(dart.legacy(core.String)),
    stickyKey: dart.finalFieldType(dart.legacy(core.String)),
    intersectionElement: dart.fieldType(dart.legacy(html.Element)),
    intersectionSubscription: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.IntersectionObserverEntry))))
  }));
  dart.defineExtensionMethods(position_sticky_controller._StickyElement, ['_equals']);
  dart.defineExtensionAccessors(position_sticky_controller._StickyElement, ['hashCode']);
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl", {
    "package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.dart": sticky_controller_impl,
    "package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.dart": pan_controller_impl,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_base.dart": scroll_host_base,
    "package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.dart": position_sticky_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sticky_controller_impl.dart","pan_controller_impl.dart","scroll_host_base.dart","position_sticky_controller.dart"],"names":[],"mappings":"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","file":"pan_controller_impl.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__sticky_controller_impl: sticky_controller_impl,
    src__utils__angular__scroll_host__pan_controller_impl: pan_controller_impl,
    src__utils__angular__scroll_host__scroll_host_base: scroll_host_base,
    src__utils__angular__scroll_host__position_sticky_controller: position_sticky_controller
  };
}));

//# sourceMappingURL=pan_controller_impl.unsound.ddc.js.map
