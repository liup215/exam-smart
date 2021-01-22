define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/feature_detector/feature_detector'], (function load__packages__angular_components__utils__browser__events__events(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__utils__browser__feature_detector__feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const feature_detector = packages__angular_components__utils__browser__feature_detector__feature_detector.utils__browser__feature_detector__feature_detector;
  var events = Object.create(dart.library);
  var $target = dartx.target;
  var $parent = dartx.parent;
  var $onMouseDown = dartx.onMouseDown;
  var $onMouseUp = dartx.onMouseUp;
  var $onClick = dartx.onClick;
  var $addEventListener = dartx.addEventListener;
  var $removeEventListener = dartx.removeEventListener;
  var $attributes = dartx.attributes;
  var $containsKey = dartx.containsKey;
  var $toLowerCase = dartx.toLowerCase;
  var $classes = dartx.classes;
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ElementRefL = () => (ElementRefL = dart.constFn(dart.legacy(element_ref.ElementRef)))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var NodeLToboolL = () => (NodeLToboolL = dart.constFn(dart.fnType(boolL(), [NodeL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var StreamControllerOfEventL = () => (StreamControllerOfEventL = dart.constFn(async.StreamController$(EventL())))();
  var EventLToNull = () => (EventLToNull = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var MouseEventLToNull = () => (MouseEventLToNull = dart.constFn(dart.fnType(core.Null, [MouseEventL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  var StreamControllerOfRectangleLOfnum = () => (StreamControllerOfRectangleLOfnum = dart.constFn(async.StreamController$(RectangleLOfnum())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ResizeObserverL = () => (ResizeObserverL = dart.constFn(dart.legacy(html.ResizeObserver)))();
  var ListLAndResizeObserverLTovoid = () => (ListLAndResizeObserverLTovoid = dart.constFn(dart.fnType(dart.void, [ListL(), ResizeObserverL()])))();
  var ListLAndResizeObserverLToLvoid = () => (ListLAndResizeObserverLToLvoid = dart.constFn(dart.legacy(ListLAndResizeObserverLTovoid())))();
  var ListLAndResizeObserverLToNull = () => (ListLAndResizeObserverLToNull = dart.constFn(dart.fnType(core.Null, [ListL(), ResizeObserverL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/utils/browser/events/events.dart";
  events.isSpaceKey = function isSpaceKey(event) {
    return event.keyCode !== 0 ? event.keyCode === 32 : event.key === " ";
  };
  events.isKeyboardTrigger = function isKeyboardTrigger(event) {
    return event.keyCode === 13 || dart.test(events.isSpaceKey(event));
  };
  events.isStandardMouseEvent = function isStandardMouseEvent(event) {
    return event.button === 0 && !dart.test(event.altKey) && !dart.test(event.ctrlKey) && !dart.test(event.metaKey) && !dart.test(event.shiftKey);
  };
  events.isStandardTriggerEvent = function isStandardTriggerEvent(event) {
    return MouseEventL().is(event) && dart.test(events.isStandardMouseEvent(event)) || KeyboardEventL().is(event) && dart.test(events.isKeyboardTrigger(event));
  };
  events.not = function not(T, predicate) {
    return dart.fn(value => !dart.test(predicate(value)), dart.fnType(boolL(), [dart.legacy(T)]));
  };
  events.triggersOutside = function triggersOutside(element) {
    if (ElementRefL().is(element)) element = dart.dload(element, 'nativeElement');
    return events.triggersOutsideAny(dart.fn(node => dart.equals(node, element), NodeLToboolL()));
  };
  events.triggersOutsideAny = function triggersOutsideAny(checkNodeInside) {
    let controller = null;
    let clickListener = null;
    let mouseDownListener = null;
    let mouseUpListener = null;
    let listener = null;
    controller = StreamControllerOfEventL().broadcast({sync: true, onListen: dart.fn(() => {
        if (!(clickListener == null)) dart.assertFailed(null, L0, 65, 16, "clickListener == null");
        if (!(mouseDownListener == null)) dart.assertFailed(null, L0, 66, 16, "mouseDownListener == null");
        if (!(mouseUpListener == null)) dart.assertFailed(null, L0, 67, 16, "mouseUpListener == null");
        let lastEvent = null;
        let lastDownEvent = null;
        listener = dart.fn(e => {
          lastEvent = e;
          let node = NodeL().as(e[$target]);
          while (node != null) {
            if (dart.test(checkNodeInside(node))) {
              return;
            } else {
              node = node[$parent];
            }
          }
          controller.add(e);
        }, EventLToNull());
        mouseDownListener = html.document[$onMouseDown].listen(dart.fn(e => {
          lastDownEvent = e;
        }, MouseEventLToNull()));
        mouseUpListener = html.document[$onMouseUp].listen(dart.fn(e => {
          if (lastDownEvent == null || dart.equals(e[$target], lastDownEvent[$target])) {
            listener(e);
          }
          lastEvent = e;
        }, MouseEventLToNull()));
        clickListener = html.document[$onClick].listen(dart.fn(e => {
          let t0, t0$;
          if ((t0 = lastEvent, t0 == null ? null : t0.type) === "mouseup" && dart.equals(e[$target], (t0$ = lastEvent, t0$ == null ? null : t0$[$target]))) {
            return;
          }
          if (lastDownEvent == null || dart.equals(e[$target], lastDownEvent[$target])) {
            listener(e);
          }
          lastDownEvent = null;
        }, MouseEventLToNull()));
        html.document[$addEventListener]("focus", listener, true);
        html.document[$addEventListener]("touchend", listener);
      }, VoidToNull()), onCancel: dart.fn(() => {
        let t0;
        clickListener.cancel();
        clickListener = null;
        t0 = mouseDownListener;
        t0 == null ? null : t0.cancel();
        mouseDownListener = null;
        mouseUpListener.cancel();
        mouseUpListener = null;
        html.document[$removeEventListener]("focus", listener, true);
        html.document[$removeEventListener]("touchend", listener);
      }, VoidToNull())});
    return controller.stream;
  };
  events.onResize = function onResize(element) {
    if (!dart.test(feature_detector.supportsResizeObserver)) dart.assertFailed("ResizeObserver support is required", L0, 153, 10, "supportsResizeObserver");
    let controller = null;
    let observer = null;
    controller = StreamControllerOfRectangleLOfnum().broadcast({sync: true, onListen: dart.fn(() => {
        observer = html.ResizeObserver.new(js.allowInterop(ListLAndResizeObserverLToLvoid(), dart.fn((entries, _) => {
          for (let entry of entries) {
            controller.add(RectangleLOfnum().as(dart.dload(entry, 'contentRect')));
          }
        }, ListLAndResizeObserverLToNull())));
        observer.observe(element);
      }, VoidToNull()), onCancel: dart.fn(() => {
        observer.disconnect();
      }, VoidToNull())});
    return controller.stream;
  };
  events.anyParentHasAttribute = function anyParentHasAttribute(target, attribute) {
    while (target != null) {
      if (dart.test(target[$attributes][$containsKey](attribute))) {
        return true;
      }
      target = target[$parent];
    }
    return false;
  };
  events.anyParentHasTag = function anyParentHasTag(target, componentTag) {
    componentTag = componentTag[$toLowerCase]();
    while (target != null) {
      if (target.tagName[$toLowerCase]() === componentTag) {
        return true;
      }
      target = target[$parent];
    }
    return false;
  };
  events.anyParentHasClass = function anyParentHasClass(target, className) {
    return events.closestWithClass(target, className) != null;
  };
  events.closestWithClass = function closestWithClass(target, className) {
    while (target != null) {
      if (dart.test(target[$attributes][$containsKey]("class")) && dart.test(target[$classes].contains(className))) {
        return target;
      }
      target = target[$parent];
    }
    return null;
  };
  events.isParentOf = function isParentOf(element, node) {
    while (node != null) {
      if (dart.equals(node, element)) {
        return true;
      } else {
        node = node[$parent];
      }
    }
    return false;
  };
  events.compareDocumentPosition = function compareDocumentPosition(a, b) {
    let bitmask = intL().as(js_util.callMethod(a, "compareDocumentPosition", JSArrayOfObjectL().of([b])));
    if ((dart.notNull(bitmask) & 4) !== 0 || (dart.notNull(bitmask) & 16) !== 0) {
      return -1;
    } else if ((dart.notNull(bitmask) & 2) !== 0 || (dart.notNull(bitmask) & 8) !== 0) {
      return 1;
    } else {
      return 0;
    }
  };
  dart.trackLibraries("packages/angular_components/utils/browser/events/events", {
    "package:angular_components/utils/browser/events/events.dart": events
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["events.dart"],"names":[],"mappings":"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","file":"events.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__events__events: events
  };
}));

//# sourceMappingURL=events.unsound.ddc.js.map
