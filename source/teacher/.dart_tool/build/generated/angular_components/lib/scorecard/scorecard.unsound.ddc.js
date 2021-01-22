define(['dart_sdk', 'packages/angular_components/utils/color/material_chart_colors', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular/src/core/application_tokens', 'packages/angular_components/utils/color/color'], (function load__packages__angular_components__scorecard__scorecard(dart_sdk, packages__angular_components__utils__color__material_chart_colors, packages__angular_components__utils__browser__events__events, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular__src__core__application_tokens, packages__angular_components__utils__color__color) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_chart_colors = packages__angular_components__utils__color__material_chart_colors.utils__color__material_chart_colors;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const color = packages__angular_components__utils__color__color.utils__color__color;
  var scorecard = Object.create(dart.library);
  var $toUpperCase = dartx.toUpperCase;
  var $_get = dartx._get;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/scorecard/scorecard.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/scorecard/scorecard.dart";
  var _selectionController = dart.privateName(scorecard, "_selectionController");
  var _isChangePositive = dart.privateName(scorecard, "_isChangePositive");
  var _isChangeNegative = dart.privateName(scorecard, "_isChangeNegative");
  var _isChangeNeutral = dart.privateName(scorecard, "_isChangeNeutral");
  var _selectable = dart.privateName(scorecard, "_selectable");
  var _changeDetector$ = dart.privateName(scorecard, "_changeDetector");
  var element$ = dart.privateName(scorecard, "ScorecardComponent.element");
  var label = dart.privateName(scorecard, "ScorecardComponent.label");
  var value$ = dart.privateName(scorecard, "ScorecardComponent.value");
  var tooltip = dart.privateName(scorecard, "ScorecardComponent.tooltip");
  var changeGlyph = dart.privateName(scorecard, "ScorecardComponent.changeGlyph");
  var suggestionBefore = dart.privateName(scorecard, "ScorecardComponent.suggestionBefore");
  var description = dart.privateName(scorecard, "ScorecardComponent.description");
  var suggestionAfter = dart.privateName(scorecard, "ScorecardComponent.suggestionAfter");
  var extraBig = dart.privateName(scorecard, "ScorecardComponent.extraBig");
  var selected = dart.privateName(scorecard, "ScorecardComponent.selected");
  var selectedColor = dart.privateName(scorecard, "ScorecardComponent.selectedColor");
  scorecard.ScorecardComponent = class ScorecardComponent extends keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get tooltip() {
      return this[tooltip];
    }
    set tooltip(value) {
      this[tooltip] = value;
    }
    get changeGlyph() {
      return this[changeGlyph];
    }
    set changeGlyph(value) {
      this[changeGlyph] = value;
    }
    get suggestionBefore() {
      return this[suggestionBefore];
    }
    set suggestionBefore(value) {
      this[suggestionBefore] = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      this[description] = value;
    }
    get suggestionAfter() {
      return this[suggestionAfter];
    }
    set suggestionAfter(value) {
      this[suggestionAfter] = value;
    }
    get extraBig() {
      return this[extraBig];
    }
    set extraBig(value) {
      this[extraBig] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    get selectedColor() {
      return this[selectedColor];
    }
    set selectedColor(value) {
      this[selectedColor] = value;
    }
    set changeType(changeType) {
      let t0;
      this[_isChangePositive] = this[_isChangeNegative] = this[_isChangeNeutral] = false;
      switch ((t0 = changeType, t0 == null ? "NEUTRAL" : t0)[$toUpperCase]()) {
        case "POSITIVE":
        {
          this[_isChangePositive] = true;
          break;
        }
        case "NEGATIVE":
        {
          this[_isChangeNegative] = true;
          break;
        }
        case "NEUTRAL":
        {
          this[_isChangeNeutral] = true;
          break;
        }
        default:
        {
          dart.throw(new core.ArgumentError.value(changeType, "changeType"));
        }
      }
    }
    get isChangePositive() {
      return this[_isChangePositive];
    }
    get isChangeNegative() {
      return this[_isChangeNegative];
    }
    get isChangeNeutral() {
      return this[_isChangeNeutral];
    }
    get changeGlyphIcon() {
      if (!!dart.test(this.isChangeNeutral)) dart.assertFailed(null, L0, 128, 12, "!isChangeNeutral");
      return dart.test(this.isChangePositive) ? "arrow_upward" : "arrow_downward";
    }
    get selectable() {
      return this[_selectable];
    }
    set selectable(selectable) {
      this[_selectable] = selectable;
      this[_changeDetector$].markForCheck();
    }
    get hostTabIndex() {
      return dart.test(this.selectable) ? 0 : null;
    }
    get hostRole() {
      return dart.test(this.selectable) ? "button" : null;
    }
    get selectedChange() {
      return this[_selectionController].stream;
    }
    get backgroundStyle() {
      let t0, t0$;
      return dart.test(this.selected) ? (t0$ = (t0 = this.selectedColor, t0 == null ? null : t0.hexString), t0$ == null ? material_chart_colors.chartingPalette[$_get](0).hexString : t0$) : "inherit";
    }
    handleClick() {
      this.hideOutline();
      if (dart.test(this.selectable)) {
        this.selected = !dart.test(this.selected);
        this[_selectionController].add(this.selected);
      }
    }
    handleKeypress(event) {
      let keyCode = event.keyCode;
      if (dart.test(this.selectable) && (keyCode === 13 || dart.test(events.isSpaceKey(event)))) {
        event.preventDefault();
        this.handleClick();
      }
    }
  };
  (scorecard.ScorecardComponent.new = function(_changeDetector, element, domService) {
    this[_selectionController] = StreamControllerOfboolL().broadcast({sync: true});
    this[_isChangePositive] = false;
    this[_isChangeNegative] = false;
    this[_isChangeNeutral] = true;
    this[_selectable] = false;
    this[label] = null;
    this[value$] = null;
    this[tooltip] = null;
    this[changeGlyph] = false;
    this[suggestionBefore] = null;
    this[description] = null;
    this[suggestionAfter] = null;
    this[extraBig] = false;
    this[selected] = false;
    this[selectedColor] = null;
    this[_changeDetector$] = _changeDetector;
    this[element$] = element;
    scorecard.ScorecardComponent.__proto__.new.call(this, element, domService);
    ;
  }).prototype = scorecard.ScorecardComponent.prototype;
  dart.addTypeTests(scorecard.ScorecardComponent);
  dart.addTypeCaches(scorecard.ScorecardComponent);
  dart.setMethodSignature(scorecard.ScorecardComponent, () => ({
    __proto__: dart.getMethods(scorecard.ScorecardComponent.__proto__),
    handleClick: dart.fnType(dart.void, []),
    handleKeypress: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setGetterSignature(scorecard.ScorecardComponent, () => ({
    __proto__: dart.getGetters(scorecard.ScorecardComponent.__proto__),
    isChangePositive: dart.legacy(core.bool),
    isChangeNegative: dart.legacy(core.bool),
    isChangeNeutral: dart.legacy(core.bool),
    changeGlyphIcon: dart.legacy(core.String),
    selectable: dart.legacy(core.bool),
    hostTabIndex: dart.legacy(core.int),
    hostRole: dart.legacy(core.String),
    selectedChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    backgroundStyle: dart.legacy(core.String)
  }));
  dart.setSetterSignature(scorecard.ScorecardComponent, () => ({
    __proto__: dart.getSetters(scorecard.ScorecardComponent.__proto__),
    changeType: dart.legacy(core.String),
    selectable: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(scorecard.ScorecardComponent, L1);
  dart.setFieldSignature(scorecard.ScorecardComponent, () => ({
    __proto__: dart.getFields(scorecard.ScorecardComponent.__proto__),
    [_selectionController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_isChangePositive]: dart.fieldType(dart.legacy(core.bool)),
    [_isChangeNegative]: dart.fieldType(dart.legacy(core.bool)),
    [_isChangeNeutral]: dart.fieldType(dart.legacy(core.bool)),
    [_selectable]: dart.fieldType(dart.legacy(core.bool)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    element: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    label: dart.fieldType(dart.legacy(core.String)),
    value: dart.fieldType(dart.legacy(core.String)),
    tooltip: dart.fieldType(dart.legacy(core.String)),
    changeGlyph: dart.fieldType(dart.legacy(core.bool)),
    suggestionBefore: dart.fieldType(dart.legacy(core.String)),
    description: dart.fieldType(dart.legacy(core.String)),
    suggestionAfter: dart.fieldType(dart.legacy(core.String)),
    extraBig: dart.fieldType(dart.legacy(core.bool)),
    selected: dart.fieldType(dart.legacy(core.bool)),
    selectedColor: dart.fieldType(dart.legacy(color.Color))
  }));
  dart.defineLazy(scorecard.ScorecardComponent, {
    /*scorecard.ScorecardComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*scorecard.ScorecardComponent.changeTypePositive*/get changeTypePositive() {
      return "POSITIVE";
    },
    /*scorecard.ScorecardComponent.changeTypeNegative*/get changeTypeNegative() {
      return "NEGATIVE";
    },
    /*scorecard.ScorecardComponent.changeTypeNeutral*/get changeTypeNeutral() {
      return "NEUTRAL";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/scorecard/scorecard", {
    "package:angular_components/scorecard/scorecard.dart": scorecard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmDoB;;;;;;IAMX;;;;;;IAIA;;;;;;IAIA;;;;;;IAKF;;;;;;IAIE;;;;;;IAIA;;;;;;IAIA;;;;;;IAKF;;;;;;IA+CA;;;;;;IAyBC;;;;;;mBA/DgB;;AAE4C,MAAhE,0BAAoB,0BAAoB,yBAAmB;AAC3D,cAA0C,CAAtB,KAAX,UAAU,QAAV;;;AAEmB,UAAxB,0BAAoB;AACpB;;;;AAEwB,UAAxB,0BAAoB;AACpB;;;;AAEuB,UAAvB,yBAAmB;AACnB;;;;AAEmD,UAAnD,WAAoB,6BAAM,UAAU,EAAE;;;IAE5C;;AAI6B;IAAiB;;AAIjB;IAAiB;;AAGlB;IAAgB;;AAI1C,WAAO,WAAC;AACR,uBAAO,yBAAmB,iBAAiB;IAC7C;;AAQuB;IAAW;mBAId;AACM,MAAxB,oBAAc,UAAU;AAMM,MAA9B,AAAgB;IAClB;;AAGwB,0CAAa,IAAI;IAAI;;AAGtB,0CAAa,WAAW;IAAI;;AAQhB,YAAA,AAAqB;IAAM;;;AAMhC,yCACC,6CAAzB,OAAe,sBAAf,OAA4B,AAAe,AAAI,6CAAH,sBAC5C;IAAS;;AAIA,MAAb;AACA,oBAAI;AACkB,QAApB,gBAAW,WAAC;AACsB,QAAlC,AAAqB,+BAAI;;IAE7B;mBAGkC;AAC5B,oBAAU,AAAM,KAAD;AACnB,oBAAI,qBAAe,AAAQ,OAAD,qBAAqB,kBAAW,KAAK;AACvC,QAAtB,AAAM,KAAD;AACQ,QAAb;;IAEJ;;+CAzIwB,iBAAsB,SAAoB;IAVrC,6BACzB,2CAAuC;IAEtC,0BAAoB;IACpB,0BAAoB;IACpB,yBAAmB;IACnB,oBAAc;IASZ;IAIA;IAIA;IAKF,oBAAc;IAIZ;IAIA;IAIA;IAKF,iBAAW;IA+CX,iBAAW;IAyBV;IA3GkB;IAAsB;AACxC,0DAAM,OAAO,EAAE,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAjBnB,sCAAS;;;MAET,+CAAkB;;;MAClB,+CAAkB;;;MAClB,8CAAiB","file":"scorecard.unsound.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard: scorecard
  };
}));

//# sourceMappingURL=scorecard.unsound.ddc.js.map
