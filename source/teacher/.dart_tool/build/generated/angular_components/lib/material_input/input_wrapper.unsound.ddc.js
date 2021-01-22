define(['dart_sdk', 'packages/angular_components/interfaces/has_disabled'], (function load__packages__angular_components__material_input__input_wrapper(dart_sdk, packages__angular_components__interfaces__has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  var input_wrapper = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/input_wrapper.dart";
  var _ariaLabel = dart.privateName(input_wrapper, "_ariaLabel");
  var _inputText = dart.privateName(input_wrapper, "_inputText");
  var characterCounter = dart.privateName(input_wrapper, "MaterialInputWrapper.characterCounter");
  var checkValid = dart.privateName(input_wrapper, "MaterialInputWrapper.checkValid");
  var disabled = dart.privateName(input_wrapper, "MaterialInputWrapper.disabled");
  var displayBottomPanel = dart.privateName(input_wrapper, "MaterialInputWrapper.displayBottomPanel");
  var error = dart.privateName(input_wrapper, "MaterialInputWrapper.error");
  var floatingLabel = dart.privateName(input_wrapper, "MaterialInputWrapper.floatingLabel");
  var hintText = dart.privateName(input_wrapper, "MaterialInputWrapper.hintText");
  var leadingText = dart.privateName(input_wrapper, "MaterialInputWrapper.leadingText");
  var maxCount = dart.privateName(input_wrapper, "MaterialInputWrapper.maxCount");
  var showHintOnlyOnFocus = dart.privateName(input_wrapper, "MaterialInputWrapper.showHintOnlyOnFocus");
  var required = dart.privateName(input_wrapper, "MaterialInputWrapper.required");
  var requiredErrorMsg = dart.privateName(input_wrapper, "MaterialInputWrapper.requiredErrorMsg");
  var rightAlign = dart.privateName(input_wrapper, "MaterialInputWrapper.rightAlign");
  var trailingText = dart.privateName(input_wrapper, "MaterialInputWrapper.trailingText");
  var leadingGlyph = dart.privateName(input_wrapper, "MaterialInputWrapper.leadingGlyph");
  var trailingGlyph = dart.privateName(input_wrapper, "MaterialInputWrapper.trailingGlyph");
  var label = dart.privateName(input_wrapper, "MaterialInputWrapper.label");
  input_wrapper.MaterialInputWrapper = class MaterialInputWrapper extends core.Object {
    get characterCounter() {
      return this[characterCounter];
    }
    set characterCounter(value) {
      this[characterCounter] = value;
    }
    get checkValid() {
      return this[checkValid];
    }
    set checkValid(value) {
      this[checkValid] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get displayBottomPanel() {
      return this[displayBottomPanel];
    }
    set displayBottomPanel(value) {
      this[displayBottomPanel] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get floatingLabel() {
      return this[floatingLabel];
    }
    set floatingLabel(value) {
      this[floatingLabel] = value;
    }
    get hintText() {
      return this[hintText];
    }
    set hintText(value) {
      this[hintText] = value;
    }
    get leadingText() {
      return this[leadingText];
    }
    set leadingText(value) {
      this[leadingText] = value;
    }
    get maxCount() {
      return this[maxCount];
    }
    set maxCount(value) {
      this[maxCount] = value;
    }
    get showHintOnlyOnFocus() {
      return this[showHintOnlyOnFocus];
    }
    set showHintOnlyOnFocus(value) {
      this[showHintOnlyOnFocus] = value;
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get requiredErrorMsg() {
      return this[requiredErrorMsg];
    }
    set requiredErrorMsg(value) {
      this[requiredErrorMsg] = value;
    }
    get rightAlign() {
      return this[rightAlign];
    }
    set rightAlign(value) {
      this[rightAlign] = value;
    }
    get trailingText() {
      return this[trailingText];
    }
    set trailingText(value) {
      this[trailingText] = value;
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get ariaLabel() {
      let t0;
      t0 = this[_ariaLabel];
      return t0 == null ? this.label : t0;
    }
    set ariaLabel(value) {
      this[_ariaLabel] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(value) {
      this[_inputText] = value;
    }
  };
  (input_wrapper.MaterialInputWrapper.new = function() {
    this[characterCounter] = null;
    this[checkValid] = null;
    this[disabled] = false;
    this[displayBottomPanel] = true;
    this[error] = null;
    this[floatingLabel] = false;
    this[hintText] = null;
    this[leadingText] = null;
    this[maxCount] = null;
    this[showHintOnlyOnFocus] = false;
    this[required] = false;
    this[requiredErrorMsg] = null;
    this[rightAlign] = false;
    this[trailingText] = null;
    this[leadingGlyph] = null;
    this[trailingGlyph] = null;
    this[label] = null;
    this[_ariaLabel] = null;
    this[_inputText] = null;
    ;
  }).prototype = input_wrapper.MaterialInputWrapper.prototype;
  dart.addTypeTests(input_wrapper.MaterialInputWrapper);
  dart.addTypeCaches(input_wrapper.MaterialInputWrapper);
  input_wrapper.MaterialInputWrapper[dart.implements] = () => [has_disabled.HasDisabled];
  dart.setGetterSignature(input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getGetters(input_wrapper.MaterialInputWrapper.__proto__),
    ariaLabel: dart.legacy(core.String),
    inputText: dart.legacy(core.String)
  }));
  dart.setSetterSignature(input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getSetters(input_wrapper.MaterialInputWrapper.__proto__),
    ariaLabel: dart.legacy(core.String),
    inputText: dart.legacy(core.String)
  }));
  dart.setLibraryUri(input_wrapper.MaterialInputWrapper, L0);
  dart.setFieldSignature(input_wrapper.MaterialInputWrapper, () => ({
    __proto__: dart.getFields(input_wrapper.MaterialInputWrapper.__proto__),
    characterCounter: dart.fieldType(dart.legacy(core.Function)),
    checkValid: dart.fieldType(dart.legacy(core.Function)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    displayBottomPanel: dart.fieldType(dart.legacy(core.bool)),
    error: dart.fieldType(dart.legacy(core.String)),
    floatingLabel: dart.fieldType(dart.legacy(core.bool)),
    hintText: dart.fieldType(dart.legacy(core.String)),
    leadingText: dart.fieldType(dart.legacy(core.String)),
    maxCount: dart.fieldType(dart.legacy(core.int)),
    showHintOnlyOnFocus: dart.fieldType(dart.legacy(core.bool)),
    required: dart.fieldType(dart.legacy(core.bool)),
    requiredErrorMsg: dart.fieldType(dart.legacy(core.String)),
    rightAlign: dart.fieldType(dart.legacy(core.bool)),
    trailingText: dart.fieldType(dart.legacy(core.String)),
    leadingGlyph: dart.fieldType(dart.legacy(core.String)),
    trailingGlyph: dart.fieldType(dart.legacy(core.String)),
    label: dart.fieldType(dart.legacy(core.String)),
    [_ariaLabel]: dart.fieldType(dart.legacy(core.String)),
    [_inputText]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/material_input/input_wrapper", {
    "package:angular_components/material_input/input_wrapper.dart": input_wrapper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBW;;;;;;IAIA;;;;;;IAIJ;;;;;;IAIA;;;;;;IAME;;;;;;IAOF;;;;;;IAME;;;;;;IAKA;;;;;;IAMH;;;;;;IAOC;;;;;;IAOA;;;;;;IAIE;;;;;;IAMF;;;;;;IAKE;;;;;;IAIA;;;;;;IAIA;;;;;;IAKA;;;;;;;;AAGiB;0BAAc;IAAK;kBAMtB;AACD,MAAlB,mBAAa,KAAK;IACpB;;AAGwB;IAAU;kBAMb;AACD,MAAlB,mBAAa,KAAK;IACpB;;;IA1GS;IAIA;IAIJ,iBAAW;IAIX,2BAAqB;IAMnB;IAOF,sBAAgB;IAMd;IAKA;IAMH;IAOC,4BAAsB;IAOtB,iBAAW;IAIT;IAMF,mBAAa;IAKX;IAIA;IAIA;IAKA;IAEA;IAWA;;EAUT","file":"input_wrapper.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__input_wrapper: input_wrapper
  };
}));

//# sourceMappingURL=input_wrapper.unsound.ddc.js.map
