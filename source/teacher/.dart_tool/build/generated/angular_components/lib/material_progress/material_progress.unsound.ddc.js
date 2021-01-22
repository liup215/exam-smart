define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_progress__material_progress(dart_sdk, packages__intl__intl, packages__angular_components__utils__browser__feature_detector__feature_detector, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const feature_detector = packages__angular_components__utils__browser__feature_detector__feature_detector.utils__browser__feature_detector__feature_detector;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_progress = Object.create(dart.library);
  var $clamp = dartx.clamp;
  var $width = dartx.width;
  var $animate = dartx.animate;
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var JSArrayOfMapLOfStringL$ObjectL = () => (JSArrayOfMapLOfStringL$ObjectL = dart.constFn(_interceptors.JSArray$(MapLOfStringL$ObjectL())))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_progress/material_progress.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["activeProgress", 20]);
    },
    get C1() {
      return C1 = dart.constMap(StringL(), ObjectL(), ["activeProgress", 5, "secondaryProgress", 25]);
    },
    get C2() {
      return C2 = dart.constMap(StringL(), StringL(), ["transform", "translateX(0px) scaleX(0)"]);
    },
    get C3() {
      return C3 = dart.constMap(StringL(), ObjectL(), ["transform", "translateX(0px) scaleX(0.5)", "offset", 0.25]);
    },
    get C4() {
      return C4 = dart.constMap(StringL(), ObjectL(), ["transform", "translateX(0px) scaleX(0)", "offset", 0.6]);
    },
    get C5() {
      return C5 = dart.constMap(StringL(), ObjectL(), ["transform", "translateX(0px) scaleX(0.6)", "offset", 0.8]);
    },
    get C6() {
      return C6 = dart.constMap(StringL(), doubleL(), ["duration", 2000, "iterations", 1 / 0]);
    }
  }, false);
  var _indeterminate = dart.privateName(material_progress, "_indeterminate");
  var _isInitialized = dart.privateName(material_progress, "_isInitialized");
  var _loadingValue = dart.privateName(material_progress, "_loadingValue");
  var _primaryIndicator = dart.privateName(material_progress, "_primaryIndicator");
  var _primaryAnimation = dart.privateName(material_progress, "_primaryAnimation");
  var _secondaryIndicator = dart.privateName(material_progress, "_secondaryIndicator");
  var _secondaryAnimation = dart.privateName(material_progress, "_secondaryAnimation");
  var _changeDetector$ = dart.privateName(material_progress, "_changeDetector");
  var _element$ = dart.privateName(material_progress, "_element");
  var _useFancyAnimation = dart.privateName(material_progress, "_useFancyAnimation");
  var _tryFancyAnimation = dart.privateName(material_progress, "_tryFancyAnimation");
  var _activeProgressValue = dart.privateName(material_progress, "_activeProgressValue");
  var C0;
  var _activeAndSecondaryProgressValue = dart.privateName(material_progress, "_activeAndSecondaryProgressValue");
  var C1;
  var _calcRatio = dart.privateName(material_progress, "_calcRatio");
  var C2;
  var C3;
  var C4;
  var C5;
  var activeProgress = dart.privateName(material_progress, "MaterialProgressComponent.activeProgress");
  var secondaryProgress = dart.privateName(material_progress, "MaterialProgressComponent.secondaryProgress");
  var min = dart.privateName(material_progress, "MaterialProgressComponent.min");
  var max = dart.privateName(material_progress, "MaterialProgressComponent.max");
  material_progress.MaterialProgressComponent = class MaterialProgressComponent extends core.Object {
    get activeProgress() {
      return this[activeProgress];
    }
    set activeProgress(value) {
      this[activeProgress] = value;
    }
    get secondaryProgress() {
      return this[secondaryProgress];
    }
    set secondaryProgress(value) {
      this[secondaryProgress] = value;
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
    set indeterminate(b) {
      let t0, t0$;
      this[_indeterminate] = b;
      if (dart.test(this.indeterminate)) {
        this[_tryFancyAnimation]();
      } else {
        t0 = this[_primaryAnimation];
        t0 == null ? null : t0.cancel();
        t0$ = this[_secondaryAnimation];
        t0$ == null ? null : t0$.cancel();
      }
    }
    get indeterminate() {
      return this[_indeterminate];
    }
    get useFallbackAnimation() {
      return dart.test(this.indeterminate) && (!dart.test(this[_useFancyAnimation]) || !dart.test(feature_detector.supportsAnimationApi));
    }
    get ariaValueNow() {
      return dart.equals(this.indeterminate, true) ? null : dart.str(this.activeProgress);
    }
    get ariaValue() {
      return dart.test(this.indeterminate) ? this[_loadingValue] : this[_activeProgressValue](this.activeProgress);
    }
    [_activeProgressValue](activeProgress) {
      return intl.Intl.message("active progress " + dart.str(activeProgress), {name: "MaterialProgressComponent__activeProgressValue", desc: "Label text for active progress", args: JSArrayOfObjectL().of([activeProgress]), examples: C0 || CT.C0});
    }
    get activeAndSecondaryProgressValue() {
      return this[_activeAndSecondaryProgressValue](this.activeProgress, this.secondaryProgress);
    }
    [_activeAndSecondaryProgressValue](activeProgress, secondaryProgress) {
      return intl.Intl.message("active progress " + dart.str(activeProgress) + " secondary progress " + dart.str(secondaryProgress), {name: "MaterialProgressComponent__activeAndSecondaryProgressValue", desc: "Label text for active and secondary progress", args: JSArrayOfObjectL().of([activeProgress, secondaryProgress]), examples: C1 || CT.C1});
    }
    get primaryTransform() {
      return "scaleX(" + dart.str(this[_calcRatio](this.activeProgress)) + ")";
    }
    get secondaryTransform() {
      return "scaleX(" + dart.str(this[_calcRatio](this.secondaryProgress)) + ")";
    }
    [_calcRatio](value) {
      return (value[$clamp](this.min, this.max) - dart.notNull(this.min)) / (dart.notNull(this.max) - dart.notNull(this.min));
    }
    set primary(value) {
      this[_primaryIndicator] = DivElementL().as(value);
    }
    set secondary(value) {
      this[_secondaryIndicator] = DivElementL().as(value);
    }
    ngAfterViewInit() {
      this[_isInitialized] = true;
      if (dart.test(this.indeterminate)) this[_tryFancyAnimation]();
    }
    ngOnDestroy() {
      let t0, t0$;
      t0 = this[_primaryAnimation];
      t0 == null ? null : t0.cancel();
      t0$ = this[_secondaryAnimation];
      t0$ == null ? null : t0$.cancel();
      this[_primaryAnimation] = null;
      this[_secondaryAnimation] = null;
      this[_primaryIndicator] = null;
      this[_secondaryIndicator] = null;
    }
    [_tryFancyAnimation]() {
      if (!dart.test(this.indeterminate) || !dart.test(this[_useFancyAnimation]) || !dart.test(this[_isInitialized]) || !dart.test(feature_detector.supportsAnimationApi)) return;
      let width = this[_element$].getBoundingClientRect()[$width];
      if (width === 0) {
        async.scheduleMicrotask(dart.fn(() => {
          this[_useFancyAnimation] = false;
          this[_changeDetector$].markForCheck();
        }, VoidToNull()));
        return;
      }
      let primaryKeyframes = JSArrayOfMapLOfStringL$ObjectL().of([C2 || CT.C2, C3 || CT.C3, new (IdentityMapOfStringL$ObjectL()).from(["transform", "translateX(" + dart.str(0.25 * dart.notNull(width)) + "px) scaleX(0.75)", "offset", 0.5]), new (IdentityMapOfStringL$ObjectL()).from(["transform", "translateX(" + dart.str(width) + "px) scaleX(0)", "offset", 0.75]), new (IdentityMapOfStringL$StringL()).from(["transform", "translateX(" + dart.str(width) + "px) scaleX(0)"])]);
      let secondaryKeyframes = JSArrayOfMapLOfStringL$ObjectL().of([C2 || CT.C2, C4 || CT.C4, C5 || CT.C5, new (IdentityMapOfStringL$StringL()).from(["transform", "translateX(" + dart.str(width) + "px) scaleX(0.1)"])]);
      this[_primaryAnimation] = this[_primaryIndicator][$animate](primaryKeyframes, material_progress._indeterminateTiming);
      this[_secondaryAnimation] = this[_secondaryIndicator][$animate](secondaryKeyframes, material_progress._indeterminateTiming);
    }
  };
  (material_progress.MaterialProgressComponent.new = function(disableFancyAnimation, _changeDetector, _element) {
    this[activeProgress] = 0;
    this[secondaryProgress] = 0;
    this[min] = 0;
    this[max] = 100;
    this[_indeterminate] = false;
    this[_isInitialized] = false;
    this[_loadingValue] = intl.Intl.message("loading", {desc: "Label text for loading progress"});
    this[_primaryIndicator] = null;
    this[_primaryAnimation] = null;
    this[_secondaryIndicator] = null;
    this[_secondaryAnimation] = null;
    this[_changeDetector$] = _changeDetector;
    this[_element$] = _element;
    this[_useFancyAnimation] = disableFancyAnimation == null;
    ;
  }).prototype = material_progress.MaterialProgressComponent.prototype;
  dart.addTypeTests(material_progress.MaterialProgressComponent);
  dart.addTypeCaches(material_progress.MaterialProgressComponent);
  material_progress.MaterialProgressComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getMethods(material_progress.MaterialProgressComponent.__proto__),
    [_activeProgressValue]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    [_activeAndSecondaryProgressValue]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int), dart.legacy(core.int)]),
    [_calcRatio]: dart.fnType(dart.legacy(core.double), [dart.legacy(core.int)]),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_tryFancyAnimation]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getGetters(material_progress.MaterialProgressComponent.__proto__),
    indeterminate: dart.legacy(core.bool),
    useFallbackAnimation: dart.legacy(core.bool),
    ariaValueNow: dart.legacy(core.String),
    ariaValue: dart.legacy(core.String),
    activeAndSecondaryProgressValue: dart.legacy(core.String),
    primaryTransform: dart.legacy(core.String),
    secondaryTransform: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getSetters(material_progress.MaterialProgressComponent.__proto__),
    indeterminate: dart.legacy(core.bool),
    primary: dart.legacy(html.HtmlElement),
    secondary: dart.legacy(html.HtmlElement)
  }));
  dart.setLibraryUri(material_progress.MaterialProgressComponent, L0);
  dart.setFieldSignature(material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getFields(material_progress.MaterialProgressComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_useFancyAnimation]: dart.fieldType(dart.legacy(core.bool)),
    activeProgress: dart.fieldType(dart.legacy(core.int)),
    secondaryProgress: dart.fieldType(dart.legacy(core.int)),
    min: dart.fieldType(dart.legacy(core.int)),
    max: dart.fieldType(dart.legacy(core.int)),
    [_indeterminate]: dart.fieldType(dart.legacy(core.bool)),
    [_isInitialized]: dart.fieldType(dart.legacy(core.bool)),
    [_loadingValue]: dart.finalFieldType(dart.legacy(core.String)),
    [_primaryIndicator]: dart.fieldType(dart.legacy(html.DivElement)),
    [_primaryAnimation]: dart.fieldType(dart.legacy(html.Animation)),
    [_secondaryIndicator]: dart.fieldType(dart.legacy(html.DivElement)),
    [_secondaryAnimation]: dart.fieldType(dart.legacy(html.Animation))
  }));
  var C6;
  dart.defineLazy(material_progress, {
    /*material_progress.ARIA_VALUENOW_ATTR*/get ARIA_VALUENOW_ATTR() {
      return "aria-valuenow";
    },
    /*material_progress._indeterminateTiming*/get _indeterminateTiming() {
      return C6 || CT.C6;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_progress/material_progress", {
    "package:angular_components/material_progress/material_progress.dart": material_progress
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkCM;;;;;;IAKA;;;;;;IAMA;;;;;;IAMA;;;;;;sBAMmB;;AACH,MAAlB,uBAAiB,CAAC;AAElB,oBAAI;AACkB,QAApB;;AAE2B,aAA3B;4BAAmB;AACU,cAA7B;6BAAqB;;IAEzB;;AAG0B;IAAc;;AAOpC,YAAc,WAAd,mCAAmB,wCAAuB;IAAqB;;AAExC,YAAc,aAAd,oBAAiB,QAAO,OAA0B,SAAhB;IAAgB;;AAGzE,6CAAgB,sBAAgB,2BAAqB;IAAe;2BAKxC;AAC5B,YAAK,mBAAQ,AAAiC,8BAAf,cAAc,UACnC,wDACA,wCACA,uBAAC,cAAc;IACkB;;AAG3C,oDAAiC,qBAAgB;IAAkB;uCAG3D,gBAAoB;AAC5B,YAAK,mBACD,AAAuE,8BAArD,cAAc,sCAAqB,iBAAiB,UAChE,oEACA,sDACA,uBAAC,cAAc,EAAE,iBAAiB;IACuB;;AAExC,YAAA,AAAuC,sBAA7B,iBAAW,wBAAgB;IAAE;;AAErC,YAAA,AAA0C,sBAAhC,iBAAW,2BAAmB;IAAE;iBAErD;AAAU,YAA8B,EAA7B,AAAM,AAAgB,KAAjB,SAAO,UAAK,yBAAO,cAAY,aAAJ,yBAAM;IAAI;gBAGnD;AACG,gCAAzB,iBAAoB,KAAK;IAC3B;kBAM0B;AACG,kCAA3B,iBAAsB,KAAK;IAC7B;;AAauB,MAArB,uBAAiB;AACjB,oBAAI,qBAAe,AAAoB;IACzC;;;AAI6B,WAA3B;0BAAmB;AACU,YAA7B;2BAAqB;AACG,MAAxB,0BAAoB;AACM,MAA1B,4BAAsB;AACE,MAAxB,0BAAoB;AACM,MAA1B,4BAAsB;IACxB;;AAIE,qBAAK,kCACA,wCACA,oCACA,wCAAsB;AAErB,kBAAQ,AAAS,AAAwB;AAC/C,UAAI,AAAM,KAAD,KAAI;AAST,QAHF,wBAAkB;AACU,UAA1B,2BAAqB;AACS,UAA9B,AAAgB;;AAElB;;AAGI,6BAAmB,+DAGvB,2CACE,aAAa,AAA4C,yBAA9B,AAAK,oBAAE,KAAK,KAAC,oBACxC,UAAU,OAEZ,2CAAC,aAAa,AAAkC,yBAApB,KAAK,IAAC,iBAAgB,UAAU,QAC5D,2CAAC,aAAa,AAAkC,yBAApB,KAAK,IAAC;AAE9B,+BAAqB,4EAIzB,2CAAC,aAAa,AAAoC,yBAAtB,KAAK,IAAC;AAGiC,MADrE,0BACI,AAAkB,kCAAQ,gBAAgB,EAAE;AAEyB,MADzE,4BACI,AAAoB,oCAAQ,kBAAkB,EAAE;IACtD;;8DA9DiD,uBACxC,iBACA;IAhGL,uBAAiB;IAKjB,0BAAoB;IAMpB,YAAM;IAMN,YAAM;IAiBL,uBAAiB;IAIjB,uBAAiB;IAWT,sBACJ,kBAAQ,kBAAiB;IAgCvB;IACD;IAOC;IACD;IAID;IACA;IACgB,2BAAE,AAAsB,qBAAD,IAAI;;EAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvH7C,oCAAkB;;;MACL,sCAAoB","file":"material_progress.unsound.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress: material_progress
  };
}));

//# sourceMappingURL=material_progress.unsound.ddc.js.map
