define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/focus/focus', 'packages/angular_components/mixins/has_tab_index', 'packages/angular_components/interfaces/has_disabled'], (function load__packages__angular_components__button_decorator__button_decorator(dart_sdk, packages__angular_components__utils__browser__events__events, packages__angular_components__focus__focus, packages__angular_components__mixins__has_tab_index, packages__angular_components__interfaces__has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const has_tab_index = packages__angular_components__mixins__has_tab_index.mixins__has_tab_index;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  var button_decorator = Object.create(dart.library);
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamControllerOfUIEventL = () => (StreamControllerOfUIEventL = dart.constFn(async.StreamController$(UIEventL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/button_decorator/button_decorator.dart";
  var _trigger = dart.privateName(button_decorator, "_trigger");
  var _hostTabIndex = dart.privateName(button_decorator, "_hostTabIndex");
  var _nonTabbableIndex = dart.privateName(button_decorator, "_nonTabbableIndex");
  var _shouldHandleSpaceKey = dart.privateName(button_decorator, "_shouldHandleSpaceKey");
  var role$ = dart.privateName(button_decorator, "ButtonDirective.role");
  var disabled = dart.privateName(button_decorator, "ButtonDirective.disabled");
  var tabbable = dart.privateName(button_decorator, "ButtonDirective.tabbable");
  const RootFocusable_HasTabIndex$36 = class RootFocusable_HasTabIndex extends focus.RootFocusable {};
  (RootFocusable_HasTabIndex$36.new = function(_root) {
    has_tab_index.HasTabIndex.new.call(this);
    RootFocusable_HasTabIndex$36.__proto__.new.call(this, _root);
  }).prototype = RootFocusable_HasTabIndex$36.prototype;
  dart.applyMixin(RootFocusable_HasTabIndex$36, has_tab_index.HasTabIndex);
  button_decorator.ButtonDirective = class ButtonDirective extends RootFocusable_HasTabIndex$36 {
    get role() {
      return this[role$];
    }
    set role(value) {
      this[role$] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get trigger() {
      return this[_trigger].stream;
    }
    get ariaRole() {
      return this.role;
    }
    get disabledStr() {
      return dart.str(this.disabled);
    }
    get hostTabIndex() {
      return dart.test(this.tabbable) && !dart.test(this.disabled) ? this[_hostTabIndex] : this[_nonTabbableIndex];
    }
    set tabindex(value) {
      this[_hostTabIndex] = value;
    }
    handleClick(mouseEvent) {
      if (dart.test(this.disabled)) return;
      this[_trigger].add(mouseEvent);
    }
    handleKeyPress(keyboardEvent) {
      if (dart.test(this.disabled)) return;
      if (dart.test(events.isSpaceKey(keyboardEvent)) && !dart.test(this[_shouldHandleSpaceKey])) return;
      let keyCode = keyboardEvent.keyCode;
      if (keyCode === 13 || dart.test(events.isSpaceKey(keyboardEvent))) {
        this[_trigger].add(keyboardEvent);
        keyboardEvent.preventDefault();
      }
    }
  };
  (button_decorator.ButtonDirective.new = function(element, role, opts) {
    let t0, t0$;
    let addTabIndexWhenNonTabbable = opts && 'addTabIndexWhenNonTabbable' in opts ? opts.addTabIndexWhenNonTabbable : false;
    let handleSpacePresses = opts && 'handleSpacePresses' in opts ? opts.handleSpacePresses : true;
    this[_trigger] = StreamControllerOfUIEventL().broadcast({sync: true});
    this[_hostTabIndex] = "0";
    this[disabled] = false;
    this[tabbable] = true;
    this[role$] = (t0 = role, t0 == null ? "button" : t0);
    this[_nonTabbableIndex] = dart.test(addTabIndexWhenNonTabbable) ? "-1" : null;
    this[_shouldHandleSpaceKey] = (t0$ = handleSpacePresses, t0$ == null ? true : t0$);
    button_decorator.ButtonDirective.__proto__.new.call(this, element);
    ;
  }).prototype = button_decorator.ButtonDirective.prototype;
  dart.addTypeTests(button_decorator.ButtonDirective);
  dart.addTypeCaches(button_decorator.ButtonDirective);
  button_decorator.ButtonDirective[dart.implements] = () => [has_disabled.HasDisabled];
  dart.setMethodSignature(button_decorator.ButtonDirective, () => ({
    __proto__: dart.getMethods(button_decorator.ButtonDirective.__proto__),
    handleClick: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    handleKeyPress: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setGetterSignature(button_decorator.ButtonDirective, () => ({
    __proto__: dart.getGetters(button_decorator.ButtonDirective.__proto__),
    trigger: dart.legacy(async.Stream$(dart.legacy(html.UIEvent))),
    ariaRole: dart.legacy(core.String),
    disabledStr: dart.legacy(core.String)
  }));
  dart.setSetterSignature(button_decorator.ButtonDirective, () => ({
    __proto__: dart.getSetters(button_decorator.ButtonDirective.__proto__),
    tabindex: dart.legacy(core.String)
  }));
  dart.setLibraryUri(button_decorator.ButtonDirective, L0);
  dart.setFieldSignature(button_decorator.ButtonDirective, () => ({
    __proto__: dart.getFields(button_decorator.ButtonDirective.__proto__),
    [_trigger]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.UIEvent)))),
    [_hostTabIndex]: dart.fieldType(dart.legacy(core.String)),
    [_nonTabbableIndex]: dart.finalFieldType(dart.legacy(core.String)),
    [_shouldHandleSpaceKey]: dart.fieldType(dart.legacy(core.bool)),
    role: dart.fieldType(dart.legacy(core.String)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    tabbable: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/button_decorator/button_decorator", {
    "package:angular_components/button_decorator/button_decorator.dart": button_decorator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_decorator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkDS;;;;;;IAYF;;;;;;IAIA;;;;;;;AAnC0B,YAAA,AAAS;IAAM;;AAsBvB;IAAI;;AAID,YAAW,UAAT;IAAS;;AAYjC,YAAS,WAAT,6BAAa,iBAAW,sBAAgB;IAAiB;iBAMzC;AACG,MAArB,sBAAgB,KAAK;IACvB;gBAI4B;AAC1B,oBAAI,gBAAU;AACU,MAAxB,AAAS,mBAAI,UAAU;IACzB;mBAIkC;AAChC,oBAAI,gBAAU;AACd,oBAAI,kBAAW,aAAa,iBAAM,8BAAuB;AACrD,oBAAU,AAAc,aAAD;AAC3B,UAAI,AAAQ,OAAD,qBAAqB,kBAAW,aAAa;AAC3B,QAA3B,AAAS,mBAAI,aAAa;AAEI,QAA9B,AAAc,aAAD;;IAEjB;;mDA1DwB,SAAmC;;QACjD;QAAyC;IAP7C,iBAAW,8CAA0C;IAEpD,sBAAgB;IA2BlB,iBAAW;IAIX,iBAAW;IAzBA,eAAQ,KAAL,IAAI,QAAJ,OAAQ;IAGH,oCAAE,0BAA0B,IAAG,OAAO;IAClC,+BAAqB,MAAnB,kBAAkB,SAAlB,OAAsB;AAC9C,8DAAM,OAAO;;EAAC","file":"button_decorator.unsound.ddc.js"}');
  // Exports:
  return {
    button_decorator__button_decorator: button_decorator
  };
}));

//# sourceMappingURL=button_decorator.unsound.ddc.js.map
