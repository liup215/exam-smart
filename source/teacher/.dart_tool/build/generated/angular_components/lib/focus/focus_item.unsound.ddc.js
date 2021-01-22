define(['dart_sdk', 'packages/angular_components/focus/focus', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__focus__focus_item(dart_sdk, packages__angular_components__focus__focus, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var focus_item = Object.create(dart.library);
  var FocusMoveEventL = () => (FocusMoveEventL = dart.constFn(dart.legacy(focus.FocusMoveEvent)))();
  var StreamControllerOfFocusMoveEventL = () => (StreamControllerOfFocusMoveEventL = dart.constFn(async.StreamController$(FocusMoveEventL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_item.dart";
  var _focusMoveCtrl = dart.privateName(focus_item, "_focusMoveCtrl");
  var _changeDetectorRef$ = dart.privateName(focus_item, "_changeDetectorRef");
  var role$ = dart.privateName(focus_item, "FocusItemDirective.role");
  var tabIndex = dart.privateName(focus_item, "FocusItemDirective.tabIndex");
  focus_item.FocusItemDirective = class FocusItemDirective extends focus.RootFocusable {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get tabIndex() {
      return this[tabIndex];
    }
    set tabIndex(value) {
      this[tabIndex] = value;
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    keydown(event) {
      let focusEvent = focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent != null) {
        this[_focusMoveCtrl].add(focusEvent);
      }
    }
    set tabbable(value) {
      this.tabIndex = dart.test(value) ? "0" : "-1";
      this[_changeDetectorRef$].markForCheck();
    }
  };
  (focus_item.FocusItemDirective.new = function(element, _changeDetectorRef, role) {
    let t0;
    this[tabIndex] = "0";
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEventL().broadcast({sync: true});
    this[_changeDetectorRef$] = _changeDetectorRef;
    this[role$] = (t0 = role, t0 == null ? "listitem" : t0);
    focus_item.FocusItemDirective.__proto__.new.call(this, element);
    ;
  }).prototype = focus_item.FocusItemDirective.prototype;
  dart.addTypeTests(focus_item.FocusItemDirective);
  dart.addTypeCaches(focus_item.FocusItemDirective);
  focus_item.FocusItemDirective[dart.implements] = () => [focus.FocusableItem];
  dart.setMethodSignature(focus_item.FocusItemDirective, () => ({
    __proto__: dart.getMethods(focus_item.FocusItemDirective.__proto__),
    keydown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setGetterSignature(focus_item.FocusItemDirective, () => ({
    __proto__: dart.getGetters(focus_item.FocusItemDirective.__proto__),
    focusmove: dart.legacy(async.Stream$(dart.legacy(focus.FocusMoveEvent)))
  }));
  dart.setSetterSignature(focus_item.FocusItemDirective, () => ({
    __proto__: dart.getSetters(focus_item.FocusItemDirective.__proto__),
    tabbable: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(focus_item.FocusItemDirective, L0);
  dart.setFieldSignature(focus_item.FocusItemDirective, () => ({
    __proto__: dart.getFields(focus_item.FocusItemDirective.__proto__),
    [_changeDetectorRef$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    role: dart.finalFieldType(dart.legacy(core.String)),
    tabIndex: dart.fieldType(dart.legacy(core.String)),
    [_focusMoveCtrl]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(focus.FocusMoveEvent))))
  }));
  dart.trackLibraries("packages/angular_components/focus/focus_item", {
    "package:angular_components/focus/focus_item.dart": focus_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAqBe;;;;;;IAQN;;;;;;;AAIiC,YAAA,AAAe;IAAM;YAGlC;AACrB,uBAA4B,uCAAkB,MAAM,KAAK;AAC7D,UAAI,UAAU,IAAI;AACc,QAA9B,AAAe,yBAAI,UAAU;;IAEjC;iBAGkB;AACa,MAA7B,0BAAW,KAAK,IAAG,MAAM;AACQ,MAAjC,AAAmB;IACrB;;gDAxB+B,SAAc,oBACf;;IAKvB,iBAAW;IAEZ,uBAAiB,qDAAiD;IAR3B;IAE7B,eAAO,KAAL,IAAI,QAAJ,OAAQ;AACpB,2DAAM,OAAO;;EAAC","file":"focus_item.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_item: focus_item
  };
}));

//# sourceMappingURL=focus_item.unsound.ddc.js.map
