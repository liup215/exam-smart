define(['dart_sdk', 'packages/angular_components/focus/focus_interface'], (function load__packages__angular_components__mixins__focusable_mixin(dart_sdk, packages__angular_components__focus__focus_interface) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  var focusable_mixin = Object.create(dart.library);
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamControllerOfFocusEventL = () => (StreamControllerOfFocusEventL = dart.constFn(async.StreamController$(FocusEventL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/mixins/focusable_mixin.dart";
  var _onFocus = dart.privateName(focusable_mixin, "_onFocus");
  var _focusable = dart.privateName(focusable_mixin, "_focusable");
  var _focusPending = dart.privateName(focusable_mixin, "_focusPending");
  focusable_mixin.FocusableMixin = class FocusableMixin extends core.Object {
    get onFocus() {
      return this[_onFocus].stream;
    }
    set focusable(component) {
      this[_focusable] = component;
      if (dart.test(this[_focusPending]) && component != null) {
        this[_focusPending] = false;
        this[_focusable].focus();
      }
    }
    focus() {
      if (this[_focusable] == null) {
        this[_focusPending] = true;
      } else {
        this[_focusable].focus();
      }
    }
    handleFocus(event) {
      this[_onFocus].add(event);
    }
  };
  (focusable_mixin.FocusableMixin.new = function() {
    this[_onFocus] = StreamControllerOfFocusEventL().broadcast({sync: true});
    this[_focusable] = null;
    this[_focusPending] = false;
    ;
  }).prototype = focusable_mixin.FocusableMixin.prototype;
  dart.addTypeTests(focusable_mixin.FocusableMixin);
  dart.addTypeCaches(focusable_mixin.FocusableMixin);
  focusable_mixin.FocusableMixin[dart.implements] = () => [focus_interface.Focusable];
  dart.setMethodSignature(focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getMethods(focusable_mixin.FocusableMixin.__proto__),
    focus: dart.fnType(dart.void, []),
    handleFocus: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)])
  }));
  dart.setGetterSignature(focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getGetters(focusable_mixin.FocusableMixin.__proto__),
    onFocus: dart.legacy(async.Stream$(dart.legacy(html.FocusEvent)))
  }));
  dart.setSetterSignature(focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getSetters(focusable_mixin.FocusableMixin.__proto__),
    focusable: dart.legacy(focus_interface.Focusable)
  }));
  dart.setLibraryUri(focusable_mixin.FocusableMixin, L0);
  dart.setFieldSignature(focusable_mixin.FocusableMixin, () => ({
    __proto__: dart.getFields(focusable_mixin.FocusableMixin.__proto__),
    [_onFocus]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.FocusEvent)))),
    [_focusable]: dart.fieldType(dart.legacy(focus_interface.Focusable)),
    [_focusPending]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/mixins/focusable_mixin", {
    "package:angular_components/mixins/focusable_mixin.dart": focusable_mixin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focusable_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAcoC,YAAA,AAAS;IAAM;kBAOzB;AACA,MAAtB,mBAAa,SAAS;AACtB,oBAAI,wBAAiB,SAAS,IAAI;AACX,QAArB,sBAAgB;AACE,QAAlB,AAAW;;IAEf;;AAIE,UAAI,AAAW,oBAAG;AACI,QAApB,sBAAgB;;AAEE,QAAlB,AAAW;;IAEf;gBAE4B;AACP,MAAnB,AAAS,mBAAI,KAAK;IACpB;;;IAzBmC,iBAC/B,iDAA6C;IAEvC;IACL,sBAAgB;;EAsBvB","file":"focusable_mixin.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__focusable_mixin: focusable_mixin
  };
}));

//# sourceMappingURL=focusable_mixin.unsound.ddc.js.map
