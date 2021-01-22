define(['dart_sdk', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_components/utils/browser/events/events', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__material_ripple__material_ripple(dart_sdk, packages__angular_components__utils__browser__feature_detector__feature_detector, packages__angular_components__utils__browser__events__events, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const feature_detector = packages__angular_components__utils__browser__feature_detector__feature_detector.utils__browser__feature_detector__feature_detector;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var material_ripple = Object.create(dart.library);
  var $client = dartx.client;
  var $addEventListener = dartx.addEventListener;
  var $removeEventListener = dartx.removeEventListener;
  var $parent = dartx.parent;
  var $remove = dartx.remove;
  var $forEach = dartx.forEach;
  var $clone = dartx.clone;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $append = dartx.append;
  var $width = dartx.width;
  var $height = dartx.height;
  var $left = dartx.left;
  var $top = dartx.top;
  var $animate = dartx.animate;
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var ListOfDivElementL = () => (ListOfDivElementL = dart.constFn(core.List$(DivElementL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var IdentityMapOfStringL$doubleL = () => (IdentityMapOfStringL$doubleL = dart.constFn(_js_helper.IdentityMap$(StringL(), doubleL())))();
  var MapOfStringL$doubleL = () => (MapOfStringL$doubleL = dart.constFn(core.Map$(StringL(), doubleL())))();
  var MapLOfStringL$doubleL = () => (MapLOfStringL$doubleL = dart.constFn(dart.legacy(MapOfStringL$doubleL())))();
  var JSArrayOfMapLOfStringL$doubleL = () => (JSArrayOfMapLOfStringL$doubleL = dart.constFn(_interceptors.JSArray$(MapLOfStringL$doubleL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNull = () => (EventLToNull = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var DivElementLToNull = () => (DivElementLToNull = dart.constFn(dart.fnType(core.Null, [DivElementL()])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var JSArrayOfMapLOfStringL$StringL = () => (JSArrayOfMapLOfStringL$StringL = dart.constFn(_interceptors.JSArray$(MapLOfStringL$StringL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_ripple/material_ripple.dart";
  var _onMouseDown = dart.privateName(material_ripple, "_onMouseDown");
  var _onKeyDown = dart.privateName(material_ripple, "_onKeyDown");
  var _element$ = dart.privateName(material_ripple, "_element");
  var center = dart.privateName(material_ripple, "MaterialRippleComponent.center");
  material_ripple.MaterialRippleComponent = class MaterialRippleComponent extends core.Object {
    get center() {
      return this[center];
    }
    set center(value) {
      this[center] = value;
    }
    createRipple(clientX, clientY) {
      return material_ripple._createRipple(clientX, clientY, this[_element$], this.center);
    }
    ngOnDestroy() {
      this[_element$][$removeEventListener]("mousedown", this[_onMouseDown]);
      this[_element$][$removeEventListener]("keydown", this[_onKeyDown]);
      material_ripple._ripplePool[$forEach](dart.fn(ripple => {
        let t0;
        if (dart.equals((t0 = ripple, t0 == null ? null : t0[$parent]), this[_element$])) {
          ripple[$remove]();
        }
      }, DivElementLToNull()));
    }
  };
  (material_ripple.MaterialRippleComponent.new = function(_element) {
    let t0;
    this[_onMouseDown] = null;
    this[_onKeyDown] = null;
    this[center] = false;
    this[_element$] = _element;
    material_ripple._ripplePool == null ? material_ripple._ripplePool = ListOfDivElementL().new(3) : null;
    material_ripple._opacityTiming == null ? material_ripple._opacityTiming = new (IdentityMapOfStringL$doubleL()).from(["duration", 300.0]) : null;
    material_ripple._opacityKeyframes == null ? material_ripple._opacityKeyframes = JSArrayOfMapLOfStringL$doubleL().of([new (IdentityMapOfStringL$doubleL()).from(["opacity", 0]), new (IdentityMapOfStringL$doubleL()).from(["opacity", 0.16, "offset", 0.25]), new (IdentityMapOfStringL$doubleL()).from(["opacity", 0.16, "offset", 0.5]), new (IdentityMapOfStringL$doubleL()).from(["opacity", 0])]) : null;
    material_ripple._transformTiming == null ? material_ripple._transformTiming = new (IdentityMapOfStringL$dynamic()).from(["duration", 225.0, "easing", "cubic-bezier(0.4, 0.0, 0.2, 1)"]) : null;
    if (material_ripple._rippleTemplate == null) {
      let className = dart.test(feature_detector.supportsAnimationApi) ? "__acx-ripple" : "__acx-ripple fallback";
      material_ripple._rippleTemplate = (t0 = html.DivElement.new(), (() => {
        t0.className = className;
        return t0;
      })());
    }
    this[_onMouseDown] = dart.fn(e => {
      let clientX = MouseEventL().as(e)[$client].x;
      let clientY = MouseEventL().as(e)[$client].y;
      material_ripple._createRipple(dart.asNullableInt(clientX), dart.asNullableInt(clientY), this[_element$], this.center);
    }, EventLToNull());
    this[_onKeyDown] = dart.fn(e => {
      if (!dart.test(events.isKeyboardTrigger(KeyboardEventL().as(e)))) return;
      material_ripple._createRipple(0, 0, this[_element$], true);
    }, EventLToNull());
    this[_element$][$addEventListener]("mousedown", this[_onMouseDown]);
    this[_element$][$addEventListener]("keydown", this[_onKeyDown]);
  }).prototype = material_ripple.MaterialRippleComponent.prototype;
  dart.addTypeTests(material_ripple.MaterialRippleComponent);
  dart.addTypeCaches(material_ripple.MaterialRippleComponent);
  material_ripple.MaterialRippleComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_ripple.MaterialRippleComponent, () => ({
    __proto__: dart.getMethods(material_ripple.MaterialRippleComponent.__proto__),
    createRipple: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_ripple.MaterialRippleComponent, L0);
  dart.setFieldSignature(material_ripple.MaterialRippleComponent, () => ({
    __proto__: dart.getFields(material_ripple.MaterialRippleComponent.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_onMouseDown]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    [_onKeyDown]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [html.Event]))),
    center: dart.fieldType(dart.legacy(core.bool))
  }));
  material_ripple._createRipple = function _createRipple(clientX, clientY, container, center) {
    let rect = container.getBoundingClientRect();
    let ripple = null;
    if (dart.notNull(material_ripple._numRipples) < 3) {
      ripple = DivElementL().as(material_ripple._rippleTemplate[$clone](false));
      material_ripple._ripplePool[$_set](material_ripple._rippleIndex, ripple);
      material_ripple._numRipples = dart.notNull(material_ripple._numRipples) + 1;
    } else {
      ripple = material_ripple._ripplePool[$_get](material_ripple._rippleIndex);
      ripple[$remove]();
    }
    if ((material_ripple._rippleIndex = dart.notNull(material_ripple._rippleIndex) + 1) === 3) material_ripple._rippleIndex = 0;
    if (dart.test(feature_detector.supportsAnimationApi)) {
      material_ripple._applyAnimation(ripple, center, rect, clientX, clientY);
    } else {
      material_ripple._applyFallbackAnimation(ripple, center, rect, clientX, clientY);
    }
    container[$append](ripple);
  };
  material_ripple._applyAnimation = function _applyAnimation(ripple, center, rect, clientX, clientY) {
    let containerWidth = rect[$width];
    let containerHeight = rect[$height];
    let maxDimension = dart.notNull(containerWidth) > dart.notNull(containerHeight) ? containerWidth : containerHeight;
    let minScale = dart.notNull(maxDimension) * 0.6 / 256;
    let maxRadius = math.sqrt(math.pow(dart.notNull(containerWidth) / 2, 2) + math.pow(dart.notNull(containerHeight) / 2, 2)) + 10;
    let maxScale = maxRadius / 128;
    let top = null;
    let left = null;
    let initialTransform = null;
    let finalTransform = null;
    if (dart.test(center)) {
      top = "calc(50% - " + dart.str(128) + "px)";
      left = "calc(50% - " + dart.str(128) + "px)";
      initialTransform = "scale(" + dart.str(minScale) + ")";
      finalTransform = "scale(" + dart.str(maxScale) + ")";
    } else {
      let offsetX = dart.notNull(clientX) - dart.notNull(rect[$left]) - 128;
      let offsetY = dart.notNull(clientY) - dart.notNull(rect[$top]) - 128;
      let driftX = dart.notNull(containerWidth) / 2 - 128 - offsetX;
      let driftY = dart.notNull(containerHeight) / 2 - 128 - offsetY;
      top = dart.str(offsetY) + "px";
      left = dart.str(offsetX) + "px";
      initialTransform = "translate(0, 0) scale(" + dart.str(minScale) + ")";
      finalTransform = "translate(" + dart.str(driftX) + "px, " + dart.str(driftY) + "px) scale(" + dart.str(maxScale) + ")";
    }
    let transformKeyframes = JSArrayOfMapLOfStringL$StringL().of([new (IdentityMapOfStringL$StringL()).from(["transform", initialTransform]), new (IdentityMapOfStringL$StringL()).from(["transform", finalTransform])]);
    ripple.style.cssText = "top: " + dart.str(top) + "; left: " + dart.str(left) + "; transform: " + dart.str(finalTransform);
    ripple[$animate](material_ripple._opacityKeyframes, material_ripple._opacityTiming);
    ripple[$animate](transformKeyframes, material_ripple._transformTiming);
  };
  material_ripple._applyFallbackAnimation = function _applyFallbackAnimation(ripple, center, rect, clientX, clientY) {
    let top = null;
    let left = null;
    if (dart.test(center)) {
      top = "calc(50% - " + dart.str(128) + "px)";
      left = "calc(50% - " + dart.str(128) + "px)";
    } else {
      let offsetX = dart.notNull(clientX) - dart.notNull(rect[$left]) - 128;
      let offsetY = dart.notNull(clientY) - dart.notNull(rect[$top]) - 128;
      top = dart.str(offsetY) + "px";
      left = dart.str(offsetX) + "px";
    }
    ripple.style[$top] = top;
    ripple.style[$left] = left;
  };
  dart.defineLazy(material_ripple, {
    /*material_ripple._rippleDiameter*/get _rippleDiameter() {
      return 256;
    },
    /*material_ripple._rippleRadius*/get _rippleRadius() {
      return 128;
    },
    /*material_ripple._minOpacity*/get _minOpacity() {
      return 0;
    },
    /*material_ripple._maxOpacity*/get _maxOpacity() {
      return 0.16;
    },
    /*material_ripple._maxRipples*/get _maxRipples() {
      return 3;
    },
    /*material_ripple._numRipples*/get _numRipples() {
      return 0;
    },
    set _numRipples(_) {},
    /*material_ripple._rippleIndex*/get _rippleIndex() {
      return 0;
    },
    set _rippleIndex(_) {},
    /*material_ripple._ripplePool*/get _ripplePool() {
      return null;
    },
    set _ripplePool(_) {},
    /*material_ripple._rippleTemplate*/get _rippleTemplate() {
      return null;
    },
    set _rippleTemplate(_) {},
    /*material_ripple._opacityTiming*/get _opacityTiming() {
      return null;
    },
    set _opacityTiming(_) {},
    /*material_ripple._opacityKeyframes*/get _opacityKeyframes() {
      return null;
    },
    set _opacityKeyframes(_) {},
    /*material_ripple._transformTiming*/get _transformTiming() {
      return null;
    },
    set _transformTiming(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_ripple/material_ripple", {
    "package:angular_components/material_ripple/material_ripple.dart": material_ripple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_ripple.dart"],"names":[],"mappings":"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","file":"material_ripple.unsound.ddc.js"}');
  // Exports:
  return {
    material_ripple__material_ripple: material_ripple
  };
}));

//# sourceMappingURL=material_ripple.unsound.ddc.js.map
