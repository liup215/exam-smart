define(['dart_sdk', 'packages/quiver/check', 'packages/intl/intl', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/core/application_tokens', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__material_slider__material_slider(dart_sdk, packages__quiver__check, packages__intl__intl, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__interfaces__has_disabled, packages__angular__src__core__application_tokens, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check = packages__quiver__check.check;
  const intl = packages__intl__intl.intl;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var material_slider = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $left = dartx.left;
  var $scrollX = dartx.scrollX;
  var $truncate = dartx.truncate;
  var $remainder = dartx.remainder;
  var $page = dartx.page;
  var $onMouseMove = dartx.onMouseMove;
  var $onMouseUp = dartx.onMouseUp;
  var $first = dartx.first;
  var $onTouchMove = dartx.onTouchMove;
  var $onTouchEnd = dartx.onTouchEnd;
  var $ceil = dartx.ceil;
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var StreamControllerOfnumL = () => (StreamControllerOfnumL = dart.constFn(async.StreamController$(numL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToNull = () => (MouseEventLToNull = dart.constFn(dart.fnType(core.Null, [MouseEventL()])))();
  var TouchEventL = () => (TouchEventL = dart.constFn(dart.legacy(html.TouchEvent)))();
  var TouchEventLToNull = () => (TouchEventLToNull = dart.constFn(dart.fnType(core.Null, [TouchEventL()])))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_slider/material_slider.dart";
  var L1 = "package:angular_components/material_slider/material_slider.dart";
  var _isTwoSided = dart.privateName(material_slider, "_isTwoSided");
  var _changeController = dart.privateName(material_slider, "_changeController");
  var _leftValue = dart.privateName(material_slider, "_leftValue");
  var _leftChangeController = dart.privateName(material_slider, "_leftChangeController");
  var _changeDetector$ = dart.privateName(material_slider, "_changeDetector");
  var _domService$ = dart.privateName(material_slider, "_domService");
  var _divisible = dart.privateName(material_slider, "_divisible");
  var _getValidLeftValue = dart.privateName(material_slider, "_getValidLeftValue");
  var _getValidRightValue = dart.privateName(material_slider, "_getValidRightValue");
  var _setValueToMousePosition = dart.privateName(material_slider, "_setValueToMousePosition");
  var disabled = dart.privateName(material_slider, "MaterialSliderComponent.disabled");
  var value$ = dart.privateName(material_slider, "MaterialSliderComponent.value");
  var min = dart.privateName(material_slider, "MaterialSliderComponent.min");
  var max = dart.privateName(material_slider, "MaterialSliderComponent.max");
  var step = dart.privateName(material_slider, "MaterialSliderComponent.step");
  var container = dart.privateName(material_slider, "MaterialSliderComponent.container");
  var isLeftKnobSelected = dart.privateName(material_slider, "MaterialSliderComponent.isLeftKnobSelected");
  var isRightKnobSelected = dart.privateName(material_slider, "MaterialSliderComponent.isRightKnobSelected");
  var isDragging = dart.privateName(material_slider, "MaterialSliderComponent.isDragging");
  material_slider.MaterialSliderComponent = class MaterialSliderComponent extends core.Object {
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get min() {
      return this[min];
    }
    set min(value) {
      this[min] = value;
    }
    get max() {
      return this[max];
    }
    set max(value) {
      this[max] = value;
    }
    get step() {
      return this[step];
    }
    set step(value) {
      this[step] = value;
    }
    get container() {
      return this[container];
    }
    set container(value) {
      this[container] = value;
    }
    get isLeftKnobSelected() {
      return this[isLeftKnobSelected];
    }
    set isLeftKnobSelected(value) {
      this[isLeftKnobSelected] = value;
    }
    get isRightKnobSelected() {
      return this[isRightKnobSelected];
    }
    set isRightKnobSelected(value) {
      this[isRightKnobSelected] = value;
    }
    get isDragging() {
      return this[isDragging];
    }
    set isDragging(value) {
      this[isDragging] = value;
    }
    get disabledStr() {
      return dart.str(this.disabled);
    }
    get isTwoSided() {
      return this[_isTwoSided];
    }
    set isTwoSided(isTwoSided) {
      this[_isTwoSided] = isTwoSided;
    }
    get valueChange() {
      return this[_changeController].stream;
    }
    get leftValue() {
      return dart.test(this.isTwoSided) ? this[_leftValue] : this.min;
    }
    set leftValue(val) {
      if (dart.test(this.isTwoSided)) {
        this[_leftValue] = val;
      }
    }
    get leftValueChange() {
      return this[_leftChangeController].stream;
    }
    get progressPercent() {
      return 100.0 * (dart.notNull(this.value) - dart.notNull(this.min)) / (dart.notNull(this.max) - dart.notNull(this.min));
    }
    get leftProgressPercent() {
      return dart.test(this.isTwoSided) ? 100.0 * (dart.notNull(this.leftValue) - dart.notNull(this.min)) / (dart.notNull(this.max) - dart.notNull(this.min)) : 0.0;
    }
    ngAfterChanges() {
      if (!dart.test(dart.fn(() => {
        check.checkArgument(dart.notNull(this.min) < dart.notNull(this.max), {message: "Failed assertion: " + dart.str(this.min) + " < " + dart.str(this.max)});
        check.checkArgument(dart.notNull(this.step) > 0, {message: "Failed assertion: " + dart.str(this.step) + " > 0"});
        check.checkArgument(this[_divisible](dart.notNull(this.max) - dart.notNull(this.min), this.step), {message: "Failed assertion: (" + dart.str(this.max) + " - " + dart.str(this.min) + ") % " + dart.str(this.step) + " ~ 0."});
        check.checkArgument(dart.notNull(this.value) >= dart.notNull(this.min), {message: "Failed assertion: " + dart.str(this.value) + " >= " + dart.str(this.min)});
        check.checkArgument(dart.notNull(this.value) <= dart.notNull(this.max), {message: "Failed assertion: " + dart.str(this.value) + " <= " + dart.str(this.max)});
        check.checkArgument(this[_divisible](dart.notNull(this.value) - dart.notNull(this.min), this.step), {message: "Failed assertion: (" + dart.str(this.value) + " - " + dart.str(this.min) + ") % " + dart.str(this.step) + " ~ 0."});
        if (dart.test(this.isTwoSided)) {
          check.checkArgument(dart.notNull(this.leftValue) <= dart.notNull(this.value), {message: "Failed assertion: " + dart.str(this.leftValue) + " <= " + dart.str(this.value)});
          check.checkArgument(dart.notNull(this.leftValue) >= dart.notNull(this.min), {message: "Failed assertion: " + dart.str(this.leftValue) + " >= " + dart.str(this.min)});
          check.checkArgument(dart.notNull(this.leftValue) <= dart.notNull(this.max), {message: "Failed assertion: " + dart.str(this.leftValue) + " <= " + dart.str(this.max)});
          check.checkArgument(this[_divisible](dart.notNull(this.leftValue) - dart.notNull(this.min), this.step), {message: "Failed assertion: (" + dart.str(this.leftValue) + " - " + dart.str(this.min) + ") % " + dart.str(this.step) + " ~ 0."});
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L0, 129, 12, "() {\n      checkArgument(min < max, message: 'Failed assertion: ${min} < ${max}');\n      checkArgument(step > 0, message: 'Failed assertion: ${step} > 0');\n      checkArgument(_divisible(max - min, step),\n          message: 'Failed assertion: (${max} - ${min}) % ${step} ~ 0.');\n      checkArgument(value >= min,\n          message: 'Failed assertion: ${value} >= ${min}');\n      checkArgument(value <= max,\n          message: 'Failed assertion: ${value} <= ${max}');\n      checkArgument(_divisible(value - min, step),\n          message: 'Failed assertion: (${value} - ${min}) % ${step} ~ 0.');\n\n      if (isTwoSided) {\n        checkArgument(leftValue <= value,\n            message: 'Failed assertion: ${leftValue} <= ${value}');\n        checkArgument(leftValue >= min,\n            message: 'Failed assertion: ${leftValue} >= ${min}');\n        // Redundant check but done for consistency.\n        checkArgument(leftValue <= max,\n            message: 'Failed assertion: ${leftValue} <= ${max}');\n        checkArgument(_divisible(leftValue - min, step),\n            message:\n                'Failed assertion: (${leftValue} - ${min}) % ${step} ~ 0.');\n      }\n      return true;\n    }()");
    }
    [_divisible](value, step) {
      if (intL().is(step)) {
        return value[$modulo](step) === 0;
      } else {
        let epsilon = 1e-10;
        let remainder = value[$modulo](step);
        if (remainder < epsilon) return true;
        if (dart.notNull(step) - remainder < epsilon) return true;
        return false;
      }
    }
    get isRtl() {
      let t0;
      return intl.Bidi.isRtlLanguage((t0 = intl.Intl.defaultLocale, t0 == null ? "" : t0));
    }
    [_setValueToMousePosition](position) {
      this[_domService$].scheduleRead(dart.fn(() => {
        let containerWidth = this.container.clientWidth;
        if (containerWidth === 0) return;
        let containerLeft = dart.notNull(this.container.getBoundingClientRect()[$left]) + dart.notNull(html.window[$scrollX]);
        let fractionOfTrackLtr = (dart.notNull(position) - containerLeft) / dart.notNull(containerWidth);
        let fractionOfTrack = dart.test(this.isRtl) ? 1.0 - fractionOfTrackLtr : fractionOfTrackLtr;
        let scaledValue = fractionOfTrack * (dart.notNull(this.max) - dart.notNull(this.min));
        let halfStep = dart.notNull(this.step) / 2;
        let unboundedValue = dart.notNull(this.min) + (scaledValue / dart.notNull(this.step))[$truncate]() * dart.notNull(this.step) + dart.notNull(scaledValue[$remainder](this.step) > halfStep ? this.step : 0);
        let newValue = math.max(numL(), this.min, math.min(numL(), this.max, unboundedValue));
        if (dart.test(this.isLeftKnobSelected) || newValue < dart.notNull(this.leftValue) && !dart.test(this.isRightKnobSelected)) {
          if (newValue !== this.leftValue) {
            this.leftValue = dart.asNullableInt(this[_getValidLeftValue](this.value, newValue));
            this[_leftChangeController].add(this.leftValue);
          }
        } else {
          if (newValue !== this.value) {
            this.value = this[_getValidRightValue](this.leftValue, newValue);
            this[_changeController].add(this.value);
          }
        }
      }, VoidToNull()));
    }
    mouseDown(event) {
      if (dart.test(this.disabled)) return;
      if (event.button !== 0) return;
      event.preventDefault();
      this[_setValueToMousePosition](dart.asNullableInt(event[$page].x));
      this.isDragging = true;
      this[_changeDetector$].markForCheck();
      let mouseMoveSubscription = html.document[$onMouseMove].listen(dart.fn(event => {
        event.preventDefault();
        this[_setValueToMousePosition](dart.asNullableInt(event[$page].x));
      }, MouseEventLToNull()));
      html.document[$onMouseUp].take(1).listen(dart.fn(event => {
        event.preventDefault();
        mouseMoveSubscription.cancel();
        this.isLeftKnobSelected = false;
        this.isRightKnobSelected = false;
        this.isDragging = false;
        this[_changeDetector$].markForCheck();
      }, MouseEventLToNull()));
    }
    touchStart(event) {
      if (dart.test(this.disabled)) return;
      event.preventDefault();
      let touch = event.targetTouches[$first];
      this[_setValueToMousePosition](dart.asNullableInt(touch[$page].x));
      this.isDragging = true;
      this[_changeDetector$].markForCheck();
      let touchMoveSubscription = html.document[$onTouchMove].listen(dart.fn(event => {
        event.preventDefault();
        let touch = event.targetTouches[$first];
        this[_setValueToMousePosition](dart.asNullableInt(touch[$page].x));
      }, TouchEventLToNull()));
      html.document[$onTouchEnd].take(1).listen(dart.fn(event => {
        event.preventDefault();
        touchMoveSubscription.cancel();
        this.isLeftKnobSelected = false;
        this.isRightKnobSelected = false;
        this.isDragging = false;
        this[_changeDetector$].markForCheck();
      }, TouchEventLToNull()));
    }
    knobKeyDown(event, opts) {
      let isLeftKnobPressed = opts && 'isLeftKnobPressed' in opts ? opts.isLeftKnobPressed : false;
      if (dart.test(this.disabled)) return;
      let currValue = dart.test(isLeftKnobPressed) ? this.leftValue : this.value;
      let newValue = currValue;
      let bigStepSize = ((dart.notNull(this.max) - dart.notNull(this.min)) / 10.0)[$ceil]();
      let sign = dart.test(this.isRtl) ? -1 : 1;
      switch (event.keyCode) {
        case 40:
        case 37:
        {
          newValue = math.max(numL(), this.min, math.min(numL(), this.max, dart.notNull(currValue) - dart.notNull(this.step) * sign));
          break;
        }
        case 38:
        case 39:
        {
          newValue = math.max(numL(), this.min, math.min(numL(), this.max, dart.notNull(currValue) + dart.notNull(this.step) * sign));
          break;
        }
        case 33:
        {
          newValue = math.max(numL(), this.min, math.min(numL(), this.max, dart.notNull(currValue) + dart.notNull(this.step) * bigStepSize));
          break;
        }
        case 34:
        {
          newValue = math.max(numL(), this.min, math.min(numL(), this.max, dart.notNull(currValue) - dart.notNull(this.step) * bigStepSize));
          break;
        }
      }
      if (dart.test(isLeftKnobPressed)) {
        if (newValue != this.leftValue) {
          this.leftValue = dart.asNullableInt(this[_getValidLeftValue](this.value, newValue));
          this[_leftChangeController].add(this.leftValue);
        }
      } else if (newValue != this.value) {
        this.value = this[_getValidRightValue](this.leftValue, newValue);
        this[_changeController].add(this.value);
      }
    }
    [_getValidRightValue](valA, valB, opts) {
      let isRtl = opts && 'isRtl' in opts ? opts.isRtl : false;
      return dart.dtest(isRtl) ? math.min(numL(), valA, valB) : math.max(numL(), valA, valB);
    }
    [_getValidLeftValue](valA, valB, opts) {
      let isRtl = opts && 'isRtl' in opts ? opts.isRtl : false;
      return dart.dtest(isRtl) ? math.max(numL(), valA, valB) : math.min(numL(), valA, valB);
    }
  };
  (material_slider.MaterialSliderComponent.new = function(_changeDetector, _domService) {
    this[disabled] = false;
    this[_isTwoSided] = false;
    this[value$] = 0;
    this[_changeController] = StreamControllerOfnumL().broadcast({sync: true});
    this[_leftValue] = 0;
    this[_leftChangeController] = StreamControllerOfnumL().broadcast({sync: true});
    this[min] = 0;
    this[max] = 100;
    this[step] = 1;
    this[container] = null;
    this[isLeftKnobSelected] = false;
    this[isRightKnobSelected] = false;
    this[isDragging] = false;
    this[_changeDetector$] = _changeDetector;
    this[_domService$] = _domService;
    ;
  }).prototype = material_slider.MaterialSliderComponent.prototype;
  dart.addTypeTests(material_slider.MaterialSliderComponent);
  dart.addTypeCaches(material_slider.MaterialSliderComponent);
  material_slider.MaterialSliderComponent[dart.implements] = () => [lifecycle_hooks.AfterChanges, has_disabled.HasDisabled];
  dart.setMethodSignature(material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getMethods(material_slider.MaterialSliderComponent.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    [_divisible]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.num), dart.legacy(core.num)]),
    [_setValueToMousePosition]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    mouseDown: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    touchStart: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    knobKeyDown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)], {isLeftKnobPressed: dart.legacy(core.bool)}, {}),
    [_getValidRightValue]: dart.fnType(dart.legacy(core.num), [dart.legacy(core.double), dart.legacy(core.double)], {isRtl: dart.dynamic}, {}),
    [_getValidLeftValue]: dart.fnType(dart.legacy(core.num), [dart.legacy(core.double), dart.legacy(core.double)], {isRtl: dart.dynamic}, {})
  }));
  dart.setGetterSignature(material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getGetters(material_slider.MaterialSliderComponent.__proto__),
    disabledStr: dart.legacy(core.String),
    isTwoSided: dart.legacy(core.bool),
    valueChange: dart.legacy(async.Stream$(dart.legacy(core.num))),
    leftValue: dart.legacy(core.num),
    leftValueChange: dart.legacy(async.Stream$(dart.legacy(core.num))),
    progressPercent: dart.legacy(core.double),
    leftProgressPercent: dart.legacy(core.double),
    isRtl: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getSetters(material_slider.MaterialSliderComponent.__proto__),
    isTwoSided: dart.legacy(core.bool),
    leftValue: dart.legacy(core.int)
  }));
  dart.setLibraryUri(material_slider.MaterialSliderComponent, L1);
  dart.setFieldSignature(material_slider.MaterialSliderComponent, () => ({
    __proto__: dart.getFields(material_slider.MaterialSliderComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    [_isTwoSided]: dart.fieldType(dart.legacy(core.bool)),
    value: dart.fieldType(dart.legacy(core.num)),
    [_changeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.num)))),
    [_leftValue]: dart.fieldType(dart.legacy(core.num)),
    [_leftChangeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.num)))),
    min: dart.fieldType(dart.legacy(core.num)),
    max: dart.fieldType(dart.legacy(core.num)),
    step: dart.fieldType(dart.legacy(core.num)),
    container: dart.fieldType(dart.legacy(html.Element)),
    isLeftKnobSelected: dart.fieldType(dart.legacy(core.bool)),
    isRightKnobSelected: dart.fieldType(dart.legacy(core.bool)),
    isDragging: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/material_slider/material_slider", {
    "package:angular_components/material_slider/material_slider.dart": material_slider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.dart"],"names":[],"mappings":"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","file":"material_slider.unsound.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider: material_slider
  };
}));

//# sourceMappingURL=material_slider.unsound.ddc.js.map
