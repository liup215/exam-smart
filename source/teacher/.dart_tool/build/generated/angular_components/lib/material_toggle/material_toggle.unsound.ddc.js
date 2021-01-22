define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_forms/src/directives', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_toggle__material_toggle(dart_sdk, packages__angular_components__utils__browser__events__events, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__interfaces__has_disabled, packages__angular_forms__src__directives, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_toggle = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $attributes = dartx.attributes;
  var $_set = dartx._set;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var boolLTodynamic = () => (boolLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [boolL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_toggle/material_toggle.dart";
  var _onTouched = dart.privateName(material_toggle, "_onTouched");
  var _checked = dart.privateName(material_toggle, "_checked");
  var _controller = dart.privateName(material_toggle, "_controller");
  var _ariaLabel = dart.privateName(material_toggle, "_ariaLabel");
  var _hasFocus = dart.privateName(material_toggle, "_hasFocus");
  var _isHovered = dart.privateName(material_toggle, "_isHovered");
  var _changeDetector$ = dart.privateName(material_toggle, "_changeDetector");
  var _syncAriaPressed = dart.privateName(material_toggle, "_syncAriaPressed");
  var _updateShadowZ = dart.privateName(material_toggle, "_updateShadowZ");
  var toggleElement = dart.privateName(material_toggle, "MaterialToggleComponent.toggleElement");
  var disabled = dart.privateName(material_toggle, "MaterialToggleComponent.disabled");
  var label = dart.privateName(material_toggle, "MaterialToggleComponent.label");
  var shadow_z = dart.privateName(material_toggle, "MaterialToggleComponent.shadow_z");
  material_toggle.MaterialToggleComponent = class MaterialToggleComponent extends core.Object {
    get toggleElement() {
      return this[toggleElement];
    }
    set toggleElement(value) {
      this[toggleElement] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get shadow_z() {
      return this[shadow_z];
    }
    set shadow_z(value) {
      this[shadow_z] = value;
    }
    ngAfterViewInit() {
      this[_syncAriaPressed]();
    }
    set checked(value) {
      this[_checked] = value;
      this[_syncAriaPressed]();
    }
    get checked() {
      return this[_checked];
    }
    get onChecked() {
      return this[_controller].stream;
    }
    set ariaLabel(value) {
      this[_ariaLabel] = value;
    }
    get ariaLabel() {
      let t0;
      t0 = this[_ariaLabel];
      return t0 == null ? this.label : t0;
    }
    get hasFocus() {
      return this[_hasFocus];
    }
    set hasFocus(value) {
      this[_hasFocus] = value;
      this[_updateShadowZ]();
    }
    get isHovered() {
      return this[_isHovered];
    }
    set isHovered(value) {
      this[_isHovered] = value;
      this[_updateShadowZ]();
    }
    get hasLabel() {
      return this.label != null && this.label[$isNotEmpty];
    }
    [_updateShadowZ]() {
      this.shadow_z = dart.test(this.isHovered) ? 3 : dart.test(this.hasFocus) ? 2 : 1;
    }
    toggleChecked() {
      let t0;
      if (!dart.test(this.disabled)) {
        this.checked = !dart.test(this.checked);
        this[_controller].add(this.checked);
        t0 = this[_onTouched];
        t0 == null ? null : dart.dcall(t0, []);
      }
    }
    handleClick(mouseEvent) {
      this.toggleChecked();
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
    handleKeyPress(keyEvent) {
      let keyCode = keyEvent.keyCode;
      if (keyCode === 13 || dart.test(events.isSpaceKey(keyEvent))) {
        this.toggleChecked();
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
      }
    }
    [_syncAriaPressed]() {
      if (this.toggleElement == null) return;
      this.toggleElement[$attributes][$_set]("aria-pressed", dart.str(this.checked));
    }
    writeValue(isChecked) {
      let t0;
      boolL().as(isChecked);
      this.checked = isChecked;
      t0 = this[_changeDetector$];
      t0 == null ? null : t0.markForCheck();
    }
    registerOnChange(callback) {
      this.onChecked.listen(dart.fn(checked => callback(checked), boolLTodynamic()));
    }
    registerOnTouched(callback) {
      this[_onTouched] = callback;
    }
    onDisabledChanged(isDisabled) {
      let t0;
      this.disabled = isDisabled;
      t0 = this[_changeDetector$];
      t0 == null ? null : t0.markForCheck();
    }
    createRipple() {
    }
  };
  (material_toggle.MaterialToggleComponent.new = function(_changeDetector, cd) {
    let t0;
    this[_onTouched] = null;
    this[toggleElement] = null;
    this[disabled] = false;
    this[_checked] = false;
    this[_controller] = StreamControllerOfboolL().broadcast();
    this[label] = null;
    this[_ariaLabel] = null;
    this[shadow_z] = 1;
    this[_hasFocus] = false;
    this[_isHovered] = false;
    this[_changeDetector$] = _changeDetector;
    t0 = cd;
    t0 == null ? null : t0.valueAccessor = this;
  }).prototype = material_toggle.MaterialToggleComponent.prototype;
  dart.addTypeTests(material_toggle.MaterialToggleComponent);
  dart.addTypeCaches(material_toggle.MaterialToggleComponent);
  material_toggle.MaterialToggleComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit, has_disabled.HasDisabled, control_value_accessor.ControlValueAccessor$(dart.legacy(core.bool))];
  dart.setMethodSignature(material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getMethods(material_toggle.MaterialToggleComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_updateShadowZ]: dart.fnType(dart.void, []),
    toggleChecked: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    handleKeyPress: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    [_syncAriaPressed]: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.bool)], {rawValue: dart.legacy(core.String)}, {}))]),
    registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
    onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    createRipple: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getGetters(material_toggle.MaterialToggleComponent.__proto__),
    checked: dart.legacy(core.bool),
    onChecked: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    ariaLabel: dart.legacy(core.String),
    hasFocus: dart.legacy(core.bool),
    isHovered: dart.legacy(core.bool),
    hasLabel: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getSetters(material_toggle.MaterialToggleComponent.__proto__),
    checked: dart.legacy(core.bool),
    ariaLabel: dart.legacy(core.String),
    hasFocus: dart.legacy(core.bool),
    isHovered: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_toggle.MaterialToggleComponent, L0);
  dart.setFieldSignature(material_toggle.MaterialToggleComponent, () => ({
    __proto__: dart.getFields(material_toggle.MaterialToggleComponent.__proto__),
    [_onTouched]: dart.fieldType(dart.legacy(core.Function)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    toggleElement: dart.fieldType(dart.legacy(html.HtmlElement)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    [_checked]: dart.fieldType(dart.legacy(core.bool)),
    [_controller]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    label: dart.fieldType(dart.legacy(core.String)),
    [_ariaLabel]: dart.fieldType(dart.legacy(core.String)),
    shadow_z: dart.fieldType(dart.legacy(core.int)),
    [_hasFocus]: dart.fieldType(dart.legacy(core.bool)),
    [_isHovered]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_toggle.MaterialToggleComponent, {
    /*material_toggle.MaterialToggleComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle", {
    "package:angular_components/material_toggle/material_toggle.dart": material_toggle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoCc;;;;;;IAWP;;;;;;IAsBE;;;;;;IAYH;;;;;;;AAzCgB,MAAlB;IACF;gBAYiB;AACC,MAAhB,iBAAW,KAAK;AACE,MAAlB;IACF;;AAEoB;IAAQ;;AAOE,YAAA,AAAY;IAAM;kBAQ3B;AACD,MAAlB,mBAAa,KAAK;IACpB;;;AAEwB;0BAAc;IAAK;;AAOtB;IAAS;iBACZ;AACC,MAAjB,kBAAY,KAAK;AACD,MAAhB;IACF;;AAGsB;IAAU;kBACb;AACC,MAAlB,mBAAa,KAAK;AACF,MAAhB;IACF;;AAOqB,YAAA,AAAc,eAAL,QAAQ,AAAM;IAAU;;AAOzC,MAJX,0BAAW,kBACL,cACA,iBACI,IACA;IACZ;;;AAIE,qBAAK;AACe,QAAlB,eAAU,WAAC;AACa,QAAxB,AAAY,sBAAI;AACE,aAAlB;4BAAY;;IAEhB;gBAG4B;AACX,MAAf;AAC2B,MAA3B,AAAW,UAAD;AACkB,MAA5B,AAAW,UAAD;IACZ;mBAGkC;AAC5B,oBAAU,AAAS,QAAD;AACtB,UAAI,AAAQ,OAAD,qBAAqB,kBAAW,QAAQ;AAClC,QAAf;AACyB,QAAzB,AAAS,QAAD;AACkB,QAA1B,AAAS,QAAD;;IAEZ;;AAGE,UAAI,AAAc,sBAAG,MAAM;AAC0B,MAArD,AAAc,AAAU,uCAAC,gBAA4B,SAAR;IAC/C;eAGqB;;;AACA,MAAnB,eAAU,SAAS;AACY,WAA/B;0BAAiB;IACnB;qBAG2C;AACO,MAAhD,AAAU,sBAAO,QAAC,WAAY,AAAQ,QAAA,CAAC,OAAO;IAChD;sBAGqC;AACd,MAArB,mBAAa,QAAQ;IACvB;sBAG4B;;AACL,MAArB,gBAAW,UAAU;AACU,WAA/B;0BAAiB;IACnB;;IAGqB;;0DApEZ,iBAA+C;;IArE/C;IAOG;IAWP,iBAAW;IAYX,iBAAW;IAEV,oBAAc;IAQb;IASA;IAGH,iBAAW;IAEV,kBAAY;IAOZ,mBAAa;IAQT;AACiB,SAAxB,EAAE;iBAAF,OAAI,mBAAgB;EACtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnEa,iDAAS","file":"material_toggle.unsound.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle: material_toggle
  };
}));

//# sourceMappingURL=material_toggle.unsound.ddc.js.map
