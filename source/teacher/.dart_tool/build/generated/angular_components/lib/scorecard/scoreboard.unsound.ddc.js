define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/color/material_chart_colors', 'packages/angular_components/scorecard/scorecard', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/scorecard/scorecard_bar', 'packages/angular/src/core/application_tokens', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/intl/intl'], (function load__packages__angular_components__scorecard__scoreboard(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__selection__selection_model, packages__angular_components__utils__color__material_chart_colors, packages__angular_components__scorecard__scorecard, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__scorecard__scorecard_bar, packages__angular__src__core__application_tokens, packages__angular_components__utils__browser__dom_service__dom_service, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const material_chart_colors = packages__angular_components__utils__color__material_chart_colors.utils__color__material_chart_colors;
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const scorecard_bar = packages__angular_components__scorecard__scorecard_bar.scorecard__scorecard_bar;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const intl = packages__intl__intl.intl;
  var scoreboard = Object.create(dart.library);
  var $offsetTop = dartx.offsetTop;
  var $offsetHeight = dartx.offsetHeight;
  var $offsetLeft = dartx.offsetLeft;
  var $first = dartx.first;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $minWidth = dartx.minWidth;
  var $width = dartx.width;
  var $getComputedStyle = dartx.getComputedStyle;
  var $replaceAll = dartx.replaceAll;
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamSubscriptionOfboolL = () => (StreamSubscriptionOfboolL = dart.constFn(async.StreamSubscription$(boolL())))();
  var StreamSubscriptionLOfboolL = () => (StreamSubscriptionLOfboolL = dart.constFn(dart.legacy(StreamSubscriptionOfboolL())))();
  var boolLTovoid = () => (boolLTovoid = dart.constFn(dart.fnType(dart.void, [boolL()])))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ScorecardComponentL = () => (ScorecardComponentL = dart.constFn(dart.legacy(scorecard.ScorecardComponent)))();
  var ScorecardComponentLToHtmlElementL = () => (ScorecardComponentLToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [ScorecardComponentL()])))();
  var DisposableL = () => (DisposableL = dart.constFn(dart.legacy(disposer.Disposable)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ScoreboardTypeL = () => (ScoreboardTypeL = dart.constFn(dart.legacy(scoreboard.ScoreboardType)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/scorecard/scoreboard.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scoreboard.ScoreboardType.prototype,
        [_name$]: "ScoreboardType.toggle",
        index: 2
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: scoreboard.ScoreboardType.prototype,
        [_name$]: "ScoreboardType.radio",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: scoreboard.ScoreboardType.prototype,
        [_name$]: "ScoreboardType.custom",
        index: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: scoreboard.ScoreboardType.prototype,
        [_name$]: "ScoreboardType.selectable",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: scoreboard.ScoreboardType.prototype,
        [_name$]: "ScoreboardType.standard",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.constList([C4 || CT.C4, C3 || CT.C3, C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], ScoreboardTypeL());
    }
  }, false);
  var _disposer = dart.privateName(scoreboard, "_disposer");
  var _cardSelectionDisposer = dart.privateName(scoreboard, "_cardSelectionDisposer");
  var _selectionModel = dart.privateName(scoreboard, "_selectionModel");
  var _scorecards = dart.privateName(scoreboard, "_scorecards");
  var _scorecardBar = dart.privateName(scoreboard, "_scorecardBar");
  var _enableUniformWidths = dart.privateName(scoreboard, "_enableUniformWidths");
  var _initialized = dart.privateName(scoreboard, "_initialized");
  var _atScorecardBarStart = dart.privateName(scoreboard, "_atScorecardBarStart");
  var _atScorecardBarEnd = dart.privateName(scoreboard, "_atScorecardBarEnd");
  var _domService$ = dart.privateName(scoreboard, "_domService");
  var _changeDetector$ = dart.privateName(scoreboard, "_changeDetector");
  var _onScorecardsChange = dart.privateName(scoreboard, "_onScorecardsChange");
  var _name$ = dart.privateName(scoreboard, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var _refreshArrows = dart.privateName(scoreboard, "_refreshArrows");
  var _resetTabIndex = dart.privateName(scoreboard, "_resetTabIndex");
  var _updatedSelected = dart.privateName(scoreboard, "_updatedSelected");
  var _scorecardOffset = dart.privateName(scoreboard, "_scorecardOffset");
  var _makeScorecardsUniformWidth = dart.privateName(scoreboard, "_makeScorecardsUniformWidth");
  var chevronBack = dart.privateName(scoreboard, "ScoreboardComponent.chevronBack");
  var chevronForward = dart.privateName(scoreboard, "ScoreboardComponent.chevronForward");
  var type = dart.privateName(scoreboard, "ScoreboardComponent.type");
  var scrollable = dart.privateName(scoreboard, "ScoreboardComponent.scrollable");
  var resetOnCardChanges = dart.privateName(scoreboard, "ScoreboardComponent.resetOnCardChanges");
  var isVertical = dart.privateName(scoreboard, "ScoreboardComponent.isVertical");
  scoreboard.ScoreboardComponent = class ScoreboardComponent extends core.Object {
    get chevronBack() {
      return this[chevronBack];
    }
    set chevronBack(value) {
      this[chevronBack] = value;
    }
    get chevronForward() {
      return this[chevronForward];
    }
    set chevronForward(value) {
      this[chevronForward] = value;
    }
    get type() {
      return this[type];
    }
    set type(value) {
      this[type] = value;
    }
    get scrollable() {
      return this[scrollable];
    }
    set scrollable(value) {
      this[scrollable] = value;
    }
    get resetOnCardChanges() {
      return this[resetOnCardChanges];
    }
    set resetOnCardChanges(value) {
      this[resetOnCardChanges] = value;
    }
    get isVertical() {
      return this[isVertical];
    }
    set isVertical(value) {
      this[isVertical] = value;
    }
    get isScrollable() {
      let t0, t0$;
      return dart.test(this.scrollable) && dart.test((t0$ = (t0 = this[_scorecardBar], t0 == null ? null : t0.isScrollable), t0$ == null ? false : t0$));
    }
    get atScorecardBarStart() {
      return this[_atScorecardBarStart];
    }
    get atScorecardBarEnd() {
      return this[_atScorecardBarEnd];
    }
    get backIconType() {
      return dart.test(this.isVertical) ? "expand_less" : this.chevronBack;
    }
    get forwardIconType() {
      return dart.test(this.isVertical) ? "expand_more" : this.chevronForward;
    }
    set scoreCards(value) {
      this[_scorecards] = value;
      if (dart.test(this[_initialized])) async.scheduleMicrotask(dart.bind(this, _onScorecardsChange));
    }
    ngOnInit() {
      switch (this.type) {
        case C0 || CT.C0:
        case C1 || CT.C1:
        case C2 || CT.C2:
        {
          this[_selectionModel] = selection_model.SingleSelectionModel.new();
          break;
        }
        case C3 || CT.C3:
        {
          this[_selectionModel] = selection_model.MultiSelectionModel.new();
          break;
        }
        default:
        {
          this[_selectionModel] = new selection_model._NoopSelectionModelImpl.new();
          break;
        }
      }
      if (!dart.test(this[_initialized])) {
        this[_initialized] = true;
        async.scheduleMicrotask(dart.bind(this, _onScorecardsChange));
      }
    }
    ngOnDestroy() {
      this[_disposer].dispose();
      this[_cardSelectionDisposer].dispose();
    }
    set scorecardBar(value) {
      this[_scorecardBar] = value;
      this[_disposer].addDisposable(StreamSubscriptionLOfboolL(), this[_scorecardBar].refreshStream.listen(dart.fn(_ => this[_refreshArrows](), boolLTovoid())));
    }
    scrollBack() {
      this[_scorecardBar].scrollBack();
      this[_resetTabIndex]();
    }
    scrollForward() {
      this[_scorecardBar].scrollForward();
      this[_resetTabIndex]();
    }
    selectionChange(selectedScorecard) {
      if (dart.test(this[_selectionModel].isSelected(selectedScorecard))) {
        if (this.type != scoreboard.ScoreboardType.radio) {
          this[_selectionModel].deselect(selectedScorecard);
        }
      } else {
        this[_selectionModel].select(selectedScorecard);
      }
      this[_updatedSelected]();
    }
    [_refreshArrows]() {
      let t0, t0$, t0$0, t0$1;
      if (dart.test(this.scrollable)) {
        this[_atScorecardBarStart] = (t0$ = (t0 = this[_scorecardBar], t0 == null ? null : t0.atStart), t0$ == null ? false : t0$);
        this[_atScorecardBarEnd] = (t0$1 = (t0$0 = this[_scorecardBar], t0$0 == null ? null : t0$0.atEnd), t0$1 == null ? false : t0$1);
        this[_changeDetector$].markForCheck();
        if (dart.test(this.scrollable)) {
          this[_resetTabIndex]();
        }
      }
    }
    [_resetTabIndex]() {
      for (let component of this[_scorecards]) {
        let offset = this[_scorecardOffset](component.element);
        let scorecardBarEndPosition = dart.notNull(this[_scorecardBar].currentTransformSize) + dart.notNull(this[_scorecardBar].currentClientSize) - dart.notNull(this[_scorecardBar].currentButtonSize);
        if (dart.notNull(offset) < scorecardBarEndPosition && dart.notNull(offset) > dart.notNull(this[_scorecardBar].currentTransformSize) && dart.test(component.selectable)) {
          component.element.tabIndex = 0;
        } else {
          component.element.tabIndex = -1;
        }
      }
    }
    [_scorecardOffset](element) {
      return dart.test(this.isVertical) ? dart.notNull(element[$offsetTop]) + dart.notNull(element[$offsetHeight]) : element[$offsetLeft];
    }
    [_onScorecardsChange]() {
      let t0, t0$;
      this[_cardSelectionDisposer].dispose();
      if (dart.test(this[_enableUniformWidths])) this[_makeScorecardsUniformWidth]();
      for (let scorecard of this[_scorecards]) {
        scorecard.selectable = this.type == scoreboard.ScoreboardType.custom ? scorecard.selectable : this.type != scoreboard.ScoreboardType.standard;
        if (!dart.test(this.resetOnCardChanges) && dart.test(scorecard.selected)) {
          this[_selectionModel].select(scorecard);
        }
        this[_cardSelectionDisposer].addDisposable(StreamSubscriptionLOfboolL(), scorecard.selectedChange.listen(dart.fn(_ => this.selectionChange(scorecard), boolLTovoid())));
      }
      if (dart.test(this.resetOnCardChanges)) this[_selectionModel].clear();
      if (this.type == scoreboard.ScoreboardType.radio && dart.test(this[_selectionModel].isEmpty)) {
        this[_selectionModel].select(this[_scorecards][$first]);
      }
      this[_updatedSelected]();
      if (dart.test(this.scrollable)) {
        t0 = this[_scorecardBar];
        t0 == null ? null : t0.reset();
      }
      if (this.type == scoreboard.ScoreboardType.selectable) {
        let i = 0;
        for (let scorecard of this[_scorecards]) {
          t0$ = scorecard;
          t0$.selectedColor == null ? t0$.selectedColor = material_chart_colors.chartingPalette[$_get](i[$modulo](material_chart_colors.chartingPalette[$length])) : null;
          i = i + 1;
        }
      }
      this[_refreshArrows]();
    }
    [_makeScorecardsUniformWidth]() {
      let scorecardsElem = this[_scorecards][$map](HtmlElementL(), dart.fn(scorecard => scorecard.element, ScorecardComponentLToHtmlElementL()))[$toList]();
      let width = 0.0;
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleWrite(dart.fn(() => {
        for (let element of scorecardsElem) {
          element.style[$minWidth] = "";
        }
        this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.fn(() => {
          for (let element of scorecardsElem) {
            let elemWidth = element[$getComputedStyle]()[$width][$replaceAll](core.RegExp.new("[^0-9.]"), "");
            let elemWidthValue = elemWidth[$isEmpty] ? 0.0 : core.double.parse(elemWidth);
            if (dart.notNull(elemWidthValue) > dart.notNull(width)) width = elemWidthValue;
          }
          width = dart.notNull(width) + 1;
          this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleWrite(dart.fn(() => {
            for (let element of scorecardsElem) {
              element.style[$minWidth] = dart.str(width) + "px";
            }
            this[_refreshArrows]();
          }, VoidToNull())));
        }, VoidToNull())));
      }, VoidToNull())));
    }
    [_updatedSelected]() {
      for (let scorecard of this[_scorecards]) {
        if (dart.test(scorecard.selectable)) {
          scorecard.selected = this[_selectionModel].isSelected(scorecard);
        }
      }
    }
  };
  (scoreboard.ScoreboardComponent.new = function(enableUniformWidths, _domService, _changeDetector) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_cardSelectionDisposer] = new disposer.Disposer.multi();
    this[_selectionModel] = null;
    this[_scorecards] = null;
    this[_scorecardBar] = null;
    this[chevronBack] = "chevron_left";
    this[chevronForward] = "chevron_right";
    this[_enableUniformWidths] = null;
    this[_initialized] = false;
    this[_atScorecardBarStart] = false;
    this[_atScorecardBarEnd] = false;
    this[type] = scoreboard.ScoreboardType.standard;
    this[scrollable] = false;
    this[resetOnCardChanges] = false;
    this[isVertical] = false;
    this[_domService$] = _domService;
    this[_changeDetector$] = _changeDetector;
    this[_enableUniformWidths] = enableUniformWidths !== "false";
  }).prototype = scoreboard.ScoreboardComponent.prototype;
  dart.addTypeTests(scoreboard.ScoreboardComponent);
  dart.addTypeCaches(scoreboard.ScoreboardComponent);
  scoreboard.ScoreboardComponent[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getMethods(scoreboard.ScoreboardComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    scrollBack: dart.fnType(dart.void, []),
    scrollForward: dart.fnType(dart.void, []),
    selectionChange: dart.fnType(dart.void, [dart.legacy(scorecard.ScorecardComponent)]),
    [_refreshArrows]: dart.fnType(dart.void, []),
    [_resetTabIndex]: dart.fnType(dart.void, []),
    [_scorecardOffset]: dart.fnType(dart.legacy(core.int), [dart.legacy(html.HtmlElement)]),
    [_onScorecardsChange]: dart.fnType(dart.void, []),
    [_makeScorecardsUniformWidth]: dart.fnType(dart.void, []),
    [_updatedSelected]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getGetters(scoreboard.ScoreboardComponent.__proto__),
    isScrollable: dart.legacy(core.bool),
    atScorecardBarStart: dart.legacy(core.bool),
    atScorecardBarEnd: dart.legacy(core.bool),
    backIconType: dart.legacy(core.String),
    forwardIconType: dart.legacy(core.String)
  }));
  dart.setSetterSignature(scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getSetters(scoreboard.ScoreboardComponent.__proto__),
    scoreCards: dart.legacy(core.List$(dart.legacy(scorecard.ScorecardComponent))),
    scorecardBar: dart.legacy(scorecard_bar.ScorecardBarDirective)
  }));
  dart.setLibraryUri(scoreboard.ScoreboardComponent, L0);
  dart.setFieldSignature(scoreboard.ScoreboardComponent, () => ({
    __proto__: dart.getFields(scoreboard.ScoreboardComponent.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_cardSelectionDisposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_selectionModel]: dart.fieldType(dart.legacy(selection_model.SelectionModel)),
    [_scorecards]: dart.fieldType(dart.legacy(core.List$(dart.legacy(scorecard.ScorecardComponent)))),
    [_scorecardBar]: dart.fieldType(dart.legacy(scorecard_bar.ScorecardBarDirective)),
    chevronBack: dart.fieldType(dart.legacy(core.String)),
    chevronForward: dart.fieldType(dart.legacy(core.String)),
    [_enableUniformWidths]: dart.fieldType(dart.legacy(core.bool)),
    [_initialized]: dart.fieldType(dart.legacy(core.bool)),
    [_atScorecardBarStart]: dart.fieldType(dart.legacy(core.bool)),
    [_atScorecardBarEnd]: dart.fieldType(dart.legacy(core.bool)),
    type: dart.fieldType(dart.legacy(scoreboard.ScoreboardType)),
    scrollable: dart.fieldType(dart.legacy(core.bool)),
    resetOnCardChanges: dart.fieldType(dart.legacy(core.bool)),
    isVertical: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(scoreboard.ScoreboardComponent, {
    /*scoreboard.ScoreboardComponent.chevronLeft*/get chevronLeft() {
      return "chevron_left";
    },
    /*scoreboard.ScoreboardComponent.chevronRight*/get chevronRight() {
      return "chevron_right";
    },
    /*scoreboard.ScoreboardComponent.scrollScorecardBarForward*/get scrollScorecardBarForward() {
      return intl.Intl.message("Scroll scorecard bar forward", {desc: "Aria label of a button that scrolls the scorecard bar horizontally" + " forward. Forward is, to the right in left-to-right layouts" + " and to the left in right-to-left layouts."});
    },
    /*scoreboard.ScoreboardComponent.scrollScorecardBarBack*/get scrollScorecardBarBack() {
      return intl.Intl.message("Scroll scorecard bar backward", {desc: "Aria label of a button that scrolls the scorecard bar horizontally" + " backward. Backward is, to the left in left-to-right layouts" + " and to the right in right-to-left layouts."});
    }
  }, true);
  var C4;
  var C5;
  scoreboard.ScoreboardType = class ScoreboardType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (scoreboard.ScoreboardType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = scoreboard.ScoreboardType.prototype;
  dart.addTypeTests(scoreboard.ScoreboardType);
  dart.addTypeCaches(scoreboard.ScoreboardType);
  dart.setMethodSignature(scoreboard.ScoreboardType, () => ({
    __proto__: dart.getMethods(scoreboard.ScoreboardType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(scoreboard.ScoreboardType, L0);
  dart.setFieldSignature(scoreboard.ScoreboardType, () => ({
    __proto__: dart.getFields(scoreboard.ScoreboardType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(scoreboard.ScoreboardType, ['toString']);
  scoreboard.ScoreboardType.standard = C4 || CT.C4;
  scoreboard.ScoreboardType.selectable = C3 || CT.C3;
  scoreboard.ScoreboardType.toggle = C0 || CT.C0;
  scoreboard.ScoreboardType.radio = C1 || CT.C1;
  scoreboard.ScoreboardType.custom = C2 || CT.C2;
  scoreboard.ScoreboardType.values = C5 || CT.C5;
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard", {
    "package:angular_components/scorecard/scoreboard.dart": scoreboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.dart"],"names":[],"mappings":"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","file":"scoreboard.unsound.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard: scoreboard
  };
}));

//# sourceMappingURL=scoreboard.unsound.ddc.js.map
