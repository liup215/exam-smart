define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__focus__keyboard_only_focus_indicator(dart_sdk, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var keyboard_only_focus_indicator = Object.create(dart.library);
  var $outline = dartx.outline;
  var $toString = dartx.toString;
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var _InteractionTypeL = () => (_InteractionTypeL = dart.constFn(dart.legacy(keyboard_only_focus_indicator._InteractionType)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/keyboard_only_focus_indicator.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: keyboard_only_focus_indicator._InteractionType.prototype,
        [_name$]: "_InteractionType.mouse",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: keyboard_only_focus_indicator._InteractionType.prototype,
        [_name$]: "_InteractionType.keyboard",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: keyboard_only_focus_indicator._InteractionType.prototype,
        [_name$]: "_InteractionType.none",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], _InteractionTypeL());
    }
  }, false);
  var _lastInteraction = dart.privateName(keyboard_only_focus_indicator, "_lastInteraction");
  var _element$ = dart.privateName(keyboard_only_focus_indicator, "_element");
  var _domService$ = dart.privateName(keyboard_only_focus_indicator, "_domService");
  keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective = class KeyboardOnlyFocusIndicatorDirective extends core.Object {
    keydown(e) {
      this[_lastInteraction] = keyboard_only_focus_indicator._InteractionType.keyboard;
      this.resetOutline();
    }
    resetOutline() {
      if (this[_element$].style[$outline] !== "") {
        this[_domService$].scheduleWrite(dart.fn(() => {
          this[_element$].style[$outline] = "";
        }, VoidToNull()));
      }
    }
    onMouseInteraction() {
      this[_lastInteraction] = keyboard_only_focus_indicator._InteractionType.mouse;
      this.hideOutline();
    }
    hideOutline() {
      if (this[_element$].style[$outline] !== "none") {
        this[_domService$].scheduleWrite(dart.fn(() => {
          this[_element$].style[$outline] = "none";
        }, VoidToNull()));
      }
    }
    onFocus(event) {
      if (this[_lastInteraction] == keyboard_only_focus_indicator._InteractionType.mouse) {
        this.hideOutline();
      } else {
        this.resetOutline();
      }
    }
    focus(event = null) {
      this[_domService$].scheduleWrite(dart.fn(() => {
        this[_element$].focus();
      }, VoidToNull()));
      if (MouseEventL().is(event)) {
        this.hideOutline();
      } else {
        this.resetOutline();
      }
    }
  };
  (keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new = function(_element, _domService) {
    this[_lastInteraction] = keyboard_only_focus_indicator._InteractionType.none;
    this[_element$] = _element;
    this[_domService$] = _domService;
    ;
  }).prototype = keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.prototype;
  dart.addTypeTests(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective);
  dart.addTypeCaches(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective);
  dart.setMethodSignature(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, () => ({
    __proto__: dart.getMethods(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.__proto__),
    keydown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    resetOutline: dart.fnType(dart.void, []),
    onMouseInteraction: dart.fnType(dart.void, []),
    hideOutline: dart.fnType(dart.void, []),
    onFocus: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    focus: dart.fnType(dart.void, [], [dart.legacy(html.UIEvent)])
  }));
  dart.setLibraryUri(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, L0);
  dart.setFieldSignature(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, () => ({
    __proto__: dart.getFields(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_lastInteraction]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator._InteractionType))
  }));
  var _name$ = dart.privateName(keyboard_only_focus_indicator, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  keyboard_only_focus_indicator._InteractionType = class _InteractionType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (keyboard_only_focus_indicator._InteractionType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = keyboard_only_focus_indicator._InteractionType.prototype;
  dart.addTypeTests(keyboard_only_focus_indicator._InteractionType);
  dart.addTypeCaches(keyboard_only_focus_indicator._InteractionType);
  dart.setMethodSignature(keyboard_only_focus_indicator._InteractionType, () => ({
    __proto__: dart.getMethods(keyboard_only_focus_indicator._InteractionType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(keyboard_only_focus_indicator._InteractionType, L0);
  dart.setFieldSignature(keyboard_only_focus_indicator._InteractionType, () => ({
    __proto__: dart.getFields(keyboard_only_focus_indicator._InteractionType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(keyboard_only_focus_indicator._InteractionType, ['toString']);
  keyboard_only_focus_indicator._InteractionType.mouse = C0 || CT.C0;
  keyboard_only_focus_indicator._InteractionType.keyboard = C1 || CT.C1;
  keyboard_only_focus_indicator._InteractionType.none = C2 || CT.C2;
  keyboard_only_focus_indicator._InteractionType.values = C3 || CT.C3;
  dart.trackLibraries("packages/angular_components/focus/keyboard_only_focus_indicator", {
    "package:angular_components/focus/keyboard_only_focus_indicator.dart": keyboard_only_focus_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_only_focus_indicator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA2B6B;AACmB,MAA5C,yBAAoC;AACtB,MAAd;IACF;;AAKE,UAAI,AAAS,AAAM,oCAAW;AAG1B,QAFF,AAAY,iCAAc;AACG,UAA3B,AAAS,AAAM,kCAAU;;;IAG/B;;AAM2C,MAAzC,yBAAoC;AACvB,MAAb;IACF;;AAIE,UAAI,AAAS,AAAM,oCAAW;AAG1B,QAFF,AAAY,iCAAc;AACO,UAA/B,AAAS,AAAM,kCAAU;;;IAG/B;YAImB;AAIjB,UAAI,AAAiB,0BAAoB;AAC1B,QAAb;;AAEc,QAAd;;IAEJ;UAiBoB;AAGhB,MAFF,AAAY,iCAAc;AACR,QAAhB,AAAS;;AAEX,UAAU,iBAAN,KAAK;AACM,QAAb;;AAEc,QAAd;;IAEJ;;oFAzEyC,UAAe;IAFvC,yBAAoC;IAEZ;IAAe;;EAAY;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4ExB;;wEAAzC;;;;EAAyC","file":"keyboard_only_focus_indicator.unsound.ddc.js"}');
  // Exports:
  return {
    focus__keyboard_only_focus_indicator: keyboard_only_focus_indicator
  };
}));

//# sourceMappingURL=keyboard_only_focus_indicator.unsound.ddc.js.map
