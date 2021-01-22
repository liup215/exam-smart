define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__scorecard__scorecard_bar(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var scorecard_bar = Object.create(dart.library);
  var $toString = dartx.toString;
  var $abs = dartx.abs;
  var $parent = dartx.parent;
  var $scrollHeight = dartx.scrollHeight;
  var $scrollWidth = dartx.scrollWidth;
  var $transform = dartx.transform;
  var $isNotEmpty = dartx.isNotEmpty;
  var $children = dartx.children;
  var $length = dartx.length;
  var $floor = dartx.floor;
  var $querySelectorAll = dartx.querySelectorAll;
  var $getComputedStyle = dartx.getComputedStyle;
  var $getPropertyValue = dartx.getPropertyValue;
  var $replaceAll = dartx.replaceAll;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var DisposableL = () => (DisposableL = dart.constFn(dart.legacy(disposer.Disposable)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var StreamSubscriptionOfDomServiceL = () => (StreamSubscriptionOfDomServiceL = dart.constFn(async.StreamSubscription$(DomServiceL())))();
  var StreamSubscriptionLOfDomServiceL = () => (StreamSubscriptionLOfDomServiceL = dart.constFn(dart.legacy(StreamSubscriptionOfDomServiceL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/scorecard/scorecard_bar.dart";
  var L1 = "package:angular_components/scorecard/scorecard_bar.dart";
  var _refreshController = dart.privateName(scorecard_bar, "_refreshController");
  var _disposer = dart.privateName(scorecard_bar, "_disposer");
  var _isRtl = dart.privateName(scorecard_bar, "_isRtl");
  var _isVertical = dart.privateName(scorecard_bar, "_isVertical");
  var _clientSize = dart.privateName(scorecard_bar, "_clientSize");
  var _scrollSize = dart.privateName(scorecard_bar, "_scrollSize");
  var _scrollingMove = dart.privateName(scorecard_bar, "_scrollingMove");
  var _transform = dart.privateName(scorecard_bar, "_transform");
  var _buttonSize = dart.privateName(scorecard_bar, "_buttonSize");
  var _domService$ = dart.privateName(scorecard_bar, "_domService");
  var _element$ = dart.privateName(scorecard_bar, "_element");
  var _readElement = dart.privateName(scorecard_bar, "_readElement");
  var _getButtonSize = dart.privateName(scorecard_bar, "_getButtonSize");
  var _updateTransform = dart.privateName(scorecard_bar, "_updateTransform");
  scorecard_bar.ScorecardBarDirective = class ScorecardBarDirective extends core.Object {
    ngOnInit() {
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.bind(this, _readElement)));
      this[_disposer].addDisposable(StreamSubscriptionLOfDomServiceL(), this[_domService$].trackLayoutChange(StringL(), dart.fn(() => dart.toString(this.currentClientSize) + " " + dart.toString(this.currentScrollSize), VoidToStringL()), dart.fn(_ => {
        this[_readElement]({windowResize: true});
        this[_refreshController].add(true);
      }, dynamicToNull()), {runInAngularZone: true}));
    }
    ngOnDestroy() {
      return this[_disposer].dispose();
    }
    ngAfterViewChecked() {
      this[_getButtonSize]();
    }
    get refreshStream() {
      return this[_refreshController].stream;
    }
    set isVertical(value) {
      this[_isVertical] = boolL().as(value);
    }
    get isScrollable() {
      return this[_clientSize] != null && this[_scrollSize] != null && dart.notNull(this[_clientSize]) < dart.notNull(this[_scrollSize]);
    }
    get atStart() {
      return this[_transform] === 0;
    }
    get atEnd() {
      return this[_clientSize] != null ? this[_transform][$abs]() + dart.notNull(this[_clientSize]) >= dart.notNull(this[_scrollSize]) : false;
    }
    get nearStart() {
      return this[_transform][$abs]() - dart.notNull(this[_scrollingMove]) <= 0;
    }
    get nearEnd() {
      return this[_clientSize] != null ? this[_transform][$abs]() + dart.notNull(this[_clientSize]) + dart.notNull(this[_scrollingMove]) >= dart.notNull(this[_scrollSize]) : false;
    }
    get currentClientSize() {
      return dart.test(this[_isVertical]) ? this[_element$][$parent].clientHeight : this[_element$][$parent].clientWidth;
    }
    get currentScrollSize() {
      return dart.test(this[_isVertical]) ? this[_element$][$scrollHeight] : this[_element$][$scrollWidth];
    }
    get transformAxis() {
      return dart.test(this[_isVertical]) ? "Y" : "X";
    }
    get currentTransformSize() {
      return this[_transform][$abs]();
    }
    get currentButtonSize() {
      return this[_buttonSize];
    }
    scrollBack() {
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.fn(() => {
        this[_readElement]();
        let newValue = this[_scrollingMove];
        if (!(dart.notNull(this[_buttonSize]) > 0)) dart.assertFailed(null, L0, 143, 14, "_buttonSize > 0");
        if (dart.test(this.atEnd)) newValue = dart.notNull(newValue) - dart.notNull(this[_buttonSize]);
        if (this[_transform][$abs]() - dart.notNull(newValue) < 0) {
          newValue = this[_transform][$abs]();
        }
        if (dart.test(this[_isVertical]) || !dart.test(this[_isRtl])) {
          this[_transform] = dart.notNull(this[_transform]) + dart.notNull(newValue);
        } else {
          this[_transform] = dart.notNull(this[_transform]) - dart.notNull(newValue);
        }
        this[_updateTransform]();
      }, VoidToNull())));
    }
    scrollForward() {
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.fn(() => {
        this[_readElement]();
        let newValue = this[_scrollingMove];
        if (!(dart.notNull(this[_buttonSize]) > 0)) dart.assertFailed(null, L0, 165, 14, "_buttonSize > 0");
        if (dart.test(this.atStart)) newValue = dart.notNull(newValue) - dart.notNull(this[_buttonSize]);
        if (dart.notNull(this[_scrollSize]) + dart.notNull(this[_transform]) < dart.notNull(newValue) + dart.notNull(this[_clientSize])) {
          newValue = dart.notNull(this[_scrollSize]) + dart.notNull(this[_transform]) - dart.notNull(this[_clientSize]);
        }
        if (dart.test(this[_isVertical]) || !dart.test(this[_isRtl])) {
          this[_transform] = dart.notNull(this[_transform]) - dart.notNull(newValue);
        } else {
          this[_transform] = dart.notNull(this[_transform]) + dart.notNull(newValue);
        }
        this[_updateTransform]();
      }, VoidToNull())));
    }
    reset() {
      if (this[_transform] !== 0) {
        this[_transform] = 0;
        this[_updateTransform]();
      }
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.fn(() => {
        this[_readElement]();
        this[_refreshController].add(true);
      }, VoidToNull())));
    }
    [_updateTransform]() {
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleWrite(dart.fn(() => {
        this[_element$].style[$transform] = "translate" + dart.str(this.transformAxis) + "(" + dart.str(this[_transform]) + "px)";
        this[_refreshController].add(true);
      }, VoidToNull())));
    }
    [_readElement](opts) {
      let windowResize = opts && 'windowResize' in opts ? opts.windowResize : false;
      if (!dart.test(this[_domService$].isReadingDom)) dart.assertFailed(null, L0, 199, 12, "_domService.isReadingDom");
      this[_clientSize] = this.currentClientSize;
      this[_scrollSize] = this.currentScrollSize;
      if (dart.dtest(windowResize) && !dart.test(this.isScrollable) && this[_transform] !== 0) {
        this.reset();
        return;
      }
      this[_getButtonSize]();
      if (dart.test(this[_element$][$children][$isNotEmpty]) && dart.notNull(this[_scrollSize]) > 0) {
        let avg = dart.notNull(this[_scrollSize]) / dart.notNull(this[_element$][$children][$length]);
        if (dart.notNull(this[_clientSize]) < avg) {
          this[_scrollingMove] = this[_clientSize];
        } else {
          let temp = ((dart.notNull(this[_clientSize]) - dart.notNull(this[_buttonSize]) * 2) / avg)[$floor]();
          this[_scrollingMove] = (temp * avg)[$floor]();
        }
      } else {
        this[_scrollingMove] = this[_clientSize];
      }
    }
    [_getButtonSize]() {
      let t0;
      if (this[_buttonSize] === 0) {
        let buttons = this[_element$][$parent][$querySelectorAll](ElementL(), ".scroll-button");
        for (let button of buttons) {
          let dimension = dart.test(this[_isVertical]) ? "height" : "width";
          let size = button[$getComputedStyle]()[$getPropertyValue](dimension);
          if (size !== "auto") {
            let parsed = (t0 = core.double.tryParse(size[$replaceAll](core.RegExp.new("[^0-9.]"), "")), t0 == null ? 0.0 : t0);
            this[_buttonSize] = parsed[$floor]();
            break;
          }
        }
      }
    }
  };
  (scorecard_bar.ScorecardBarDirective.new = function(_domService, _element, isRtl) {
    let t0;
    this[_refreshController] = StreamControllerOfboolL().broadcast();
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_isRtl] = null;
    this[_isVertical] = null;
    this[_clientSize] = null;
    this[_scrollSize] = null;
    this[_scrollingMove] = null;
    this[_transform] = 0;
    this[_buttonSize] = 0;
    this[_domService$] = _domService;
    this[_element$] = _element;
    this[_isRtl] = (t0 = isRtl, t0 == null ? false : t0);
  }).prototype = scorecard_bar.ScorecardBarDirective.prototype;
  dart.addTypeTests(scorecard_bar.ScorecardBarDirective);
  dart.addTypeCaches(scorecard_bar.ScorecardBarDirective);
  scorecard_bar.ScorecardBarDirective[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy, lifecycle_hooks.AfterViewChecked];
  dart.setMethodSignature(scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getMethods(scorecard_bar.ScorecardBarDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewChecked: dart.fnType(dart.void, []),
    scrollBack: dart.fnType(dart.void, []),
    scrollForward: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, []),
    [_updateTransform]: dart.fnType(dart.void, []),
    [_readElement]: dart.fnType(dart.void, [], {windowResize: dart.dynamic}, {}),
    [_getButtonSize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getGetters(scorecard_bar.ScorecardBarDirective.__proto__),
    refreshStream: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    isScrollable: dart.legacy(core.bool),
    atStart: dart.legacy(core.bool),
    atEnd: dart.legacy(core.bool),
    nearStart: dart.legacy(core.bool),
    nearEnd: dart.legacy(core.bool),
    currentClientSize: dart.legacy(core.int),
    currentScrollSize: dart.legacy(core.int),
    transformAxis: dart.legacy(core.String),
    currentTransformSize: dart.legacy(core.int),
    currentButtonSize: dart.legacy(core.int)
  }));
  dart.setSetterSignature(scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getSetters(scorecard_bar.ScorecardBarDirective.__proto__),
    isVertical: dart.dynamic
  }));
  dart.setLibraryUri(scorecard_bar.ScorecardBarDirective, L1);
  dart.setFieldSignature(scorecard_bar.ScorecardBarDirective, () => ({
    __proto__: dart.getFields(scorecard_bar.ScorecardBarDirective.__proto__),
    [_refreshController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_isRtl]: dart.fieldType(dart.legacy(core.bool)),
    [_isVertical]: dart.fieldType(dart.legacy(core.bool)),
    [_clientSize]: dart.fieldType(dart.legacy(core.int)),
    [_scrollSize]: dart.fieldType(dart.legacy(core.int)),
    [_scrollingMove]: dart.fieldType(dart.legacy(core.int)),
    [_transform]: dart.fieldType(dart.legacy(core.int)),
    [_buttonSize]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.trackLibraries("packages/angular_components/scorecard/scorecard_bar", {
    "package:angular_components/scorecard/scorecard_bar.dart": scorecard_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scorecard_bar.dart"],"names":[],"mappings":"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","file":"scorecard_bar.unsound.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard_bar: scorecard_bar
  };
}));

//# sourceMappingURL=scorecard_bar.unsound.ddc.js.map
