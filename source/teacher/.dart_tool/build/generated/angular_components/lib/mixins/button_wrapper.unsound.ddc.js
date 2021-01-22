define(['dart_sdk', 'packages/angular_components/model/ui/icon', 'packages/angular_components/interfaces/has_disabled'], (function load__packages__angular_components__mixins__button_wrapper(dart_sdk, packages__angular_components__model__ui__icon, packages__angular_components__interfaces__has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  var button_wrapper = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  const CT = Object.create(null);
  var L0 = "package:angular_components/mixins/button_wrapper.dart";
  var _buttonIcon = dart.privateName(button_wrapper, "_buttonIcon");
  var buttonText = dart.privateName(button_wrapper, "MaterialButtonWrapper.buttonText");
  var buttonAriaLabel = dart.privateName(button_wrapper, "MaterialButtonWrapper.buttonAriaLabel");
  var disabled = dart.privateName(button_wrapper, "MaterialButtonWrapper.disabled");
  var icon$ = dart.privateName(button_wrapper, "MaterialButtonWrapper.icon");
  var iconName = dart.privateName(button_wrapper, "MaterialButtonWrapper.iconName");
  var raised = dart.privateName(button_wrapper, "MaterialButtonWrapper.raised");
  button_wrapper.MaterialButtonWrapper = class MaterialButtonWrapper extends core.Object {
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get buttonAriaLabel() {
      return this[buttonAriaLabel];
    }
    set buttonAriaLabel(value) {
      this[buttonAriaLabel] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    get iconName() {
      return this[iconName];
    }
    set iconName(value) {
      this[iconName] = value;
    }
    get raised() {
      return this[raised];
    }
    set raised(value) {
      this[raised] = value;
    }
    get buttonIcon() {
      if (this.icon != null) return this.icon;
      if (this[_buttonIcon] == null && this.iconName != null && this.iconName[$isNotEmpty]) {
        this[_buttonIcon] = new icon.Icon.new(this.iconName);
      }
      return this[_buttonIcon];
    }
  };
  (button_wrapper.MaterialButtonWrapper.new = function() {
    this[buttonText] = null;
    this[buttonAriaLabel] = null;
    this[disabled] = false;
    this[icon$] = null;
    this[iconName] = null;
    this[raised] = false;
    this[_buttonIcon] = null;
    ;
  }).prototype = button_wrapper.MaterialButtonWrapper.prototype;
  dart.addTypeTests(button_wrapper.MaterialButtonWrapper);
  dart.addTypeCaches(button_wrapper.MaterialButtonWrapper);
  button_wrapper.MaterialButtonWrapper[dart.implements] = () => [has_disabled.HasDisabled];
  dart.setGetterSignature(button_wrapper.MaterialButtonWrapper, () => ({
    __proto__: dart.getGetters(button_wrapper.MaterialButtonWrapper.__proto__),
    buttonIcon: dart.legacy(icon.Icon)
  }));
  dart.setLibraryUri(button_wrapper.MaterialButtonWrapper, L0);
  dart.setFieldSignature(button_wrapper.MaterialButtonWrapper, () => ({
    __proto__: dart.getFields(button_wrapper.MaterialButtonWrapper.__proto__),
    buttonText: dart.fieldType(dart.legacy(core.String)),
    buttonAriaLabel: dart.fieldType(dart.legacy(core.String)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    icon: dart.fieldType(dart.legacy(icon.Icon)),
    iconName: dart.fieldType(dart.legacy(core.String)),
    raised: dart.fieldType(dart.legacy(core.bool)),
    [_buttonIcon]: dart.fieldType(dart.legacy(icon.Icon))
  }));
  dart.trackLibraries("packages/angular_components/mixins/button_wrapper", {
    "package:angular_components/mixins/button_wrapper.dart": button_wrapper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAaS;;;;;;IAIA;;;;;;IAIF;;;;;;IAIA;;;;;;IAME;;;;;;IAIF;;;;;;;AAIH,UAAI,aAAQ,MAAM,MAAO;AACzB,UAAI,AAAY,qBAAG,QAAS,iBAAY,QAAQ,AAAS;AAC3B,QAA5B,oBAAc,kBAAK;;AAErB,YAAO;IACT;;;IA/BO;IAIA;IAIF,iBAAW;IAIX;IAME;IAIF,eAAS;IAET;;EAQP","file":"button_wrapper.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__button_wrapper: button_wrapper
  };
}));

//# sourceMappingURL=button_wrapper.unsound.ddc.js.map
