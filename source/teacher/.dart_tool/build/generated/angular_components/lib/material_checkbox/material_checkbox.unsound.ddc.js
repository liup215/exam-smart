define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/utils/browser/events/events', 'packages/angular_forms/src/directives', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/model/ui/icon', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_checkbox__material_checkbox(dart_sdk, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__utils__browser__events__events, packages__angular_forms__src__directives, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus_interface, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__model__ui__icon, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_checkbox = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $attributes = dartx.attributes;
  var $_set = dartx._set;
  var $target = dartx.target;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StreamControllerOfStringL = () => (StreamControllerOfStringL = dart.constFn(async.StreamController$(StringL())))();
  var boolLTodynamic = () => (boolLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [boolL()])))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_checkbox/material_checkbox.dart";
  var L1 = "package:angular_components/material_checkbox/material_checkbox.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: icon.Icon.prototype,
        [Icon_name]: "check_box_outline_blank"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: icon.Icon.prototype,
        [Icon_name]: "check_box"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: icon.Icon.prototype,
        [Icon_name]: "indeterminate_check_box"
      });
    }
  }, false);
  var _onTouched = dart.privateName(material_checkbox, "_onTouched");
  var _onChecked = dart.privateName(material_checkbox, "_onChecked");
  var _onIndeterminate = dart.privateName(material_checkbox, "_onIndeterminate");
  var _onChange = dart.privateName(material_checkbox, "_onChange");
  var _checked = dart.privateName(material_checkbox, "_checked");
  var _focused = dart.privateName(material_checkbox, "_focused");
  var _isKeyboardEvent = dart.privateName(material_checkbox, "_isKeyboardEvent");
  var _checkedStr = dart.privateName(material_checkbox, "_checkedStr");
  var _indeterminate = dart.privateName(material_checkbox, "_indeterminate");
  var _icon = dart.privateName(material_checkbox, "_icon");
  var _root$ = dart.privateName(material_checkbox, "_root");
  var _changeDetector$ = dart.privateName(material_checkbox, "_changeDetector");
  var _defaultTabIndex = dart.privateName(material_checkbox, "_defaultTabIndex");
  var _syncAriaChecked = dart.privateName(material_checkbox, "_syncAriaChecked");
  var _setStates = dart.privateName(material_checkbox, "_setStates");
  var role$ = dart.privateName(material_checkbox, "MaterialCheckboxComponent.role");
  var indeterminateToChecked = dart.privateName(material_checkbox, "MaterialCheckboxComponent.indeterminateToChecked");
  var disabled = dart.privateName(material_checkbox, "MaterialCheckboxComponent.disabled");
  var readOnly = dart.privateName(material_checkbox, "MaterialCheckboxComponent.readOnly");
  var themeColor = dart.privateName(material_checkbox, "MaterialCheckboxComponent.themeColor");
  var label = dart.privateName(material_checkbox, "MaterialCheckboxComponent.label");
  var contentId = dart.privateName(material_checkbox, "MaterialCheckboxComponent.contentId");
  var focusDelegate = dart.privateName(material_checkbox, "MaterialCheckboxComponent.focusDelegate");
  material_checkbox.MaterialCheckboxComponent = class MaterialCheckboxComponent extends core.Object {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get indeterminateToChecked() {
      return this[indeterminateToChecked];
    }
    set indeterminateToChecked(value) {
      this[indeterminateToChecked] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get readOnly() {
      return this[readOnly];
    }
    set readOnly(value) {
      this[readOnly] = value;
    }
    get themeColor() {
      return this[themeColor];
    }
    set themeColor(value) {
      this[themeColor] = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get contentId() {
      return this[contentId];
    }
    set contentId(value) {
      super.contentId = value;
    }
    get focusDelegate() {
      return this[focusDelegate];
    }
    set focusDelegate(value) {
      this[focusDelegate] = value;
    }
    writeValue(isChecked) {
      boolL().as(isChecked);
      if (isChecked == null) return;
      this[_setStates]({checked: isChecked, emitEvent: false});
    }
    registerOnChange(callback) {
      this.onChecked.listen(dart.fn(checked => callback(checked), boolLTodynamic()));
    }
    registerOnTouched(callback) {
      this[_onTouched] = callback;
    }
    get onChecked() {
      return this[_onChecked].stream;
    }
    get onIndeterminate() {
      return this[_onIndeterminate].stream;
    }
    get onChange() {
      return this[_onChange].stream;
    }
    get tabIndex() {
      return dart.test(this.disabled) ? "-1" : this[_defaultTabIndex];
    }
    set checked(newValue) {
      if (dart.equals(this[_checked], newValue)) return;
      this[_setStates]({checked: newValue});
    }
    get checked() {
      return this[_checked];
    }
    get showFocus() {
      return dart.test(this[_focused]) && dart.test(this[_isKeyboardEvent]);
    }
    get checkedStr() {
      return this[_checkedStr];
    }
    set indeterminate(newValue) {
      if (dart.equals(this[_indeterminate], newValue)) return;
      this[_setStates]({indeterminate: newValue});
    }
    get indeterminate() {
      return this[_indeterminate];
    }
    [_setStates](opts) {
      let checked = opts && 'checked' in opts ? opts.checked : false;
      let indeterminate = opts && 'indeterminate' in opts ? opts.indeterminate : false;
      let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : true;
      if (!(!dart.test(checked) || !dart.test(indeterminate))) dart.assertFailed(null, L0, 192, 12, "!checked || !indeterminate");
      let prevChecked = this[_checked];
      let prevIndeterminate = this[_indeterminate];
      let prevState = this[_checkedStr];
      this[_checked] = checked;
      this[_indeterminate] = indeterminate;
      this[_checkedStr] = dart.test(indeterminate) ? "mixed" : dart.test(this[_checked]) ? "true" : "false";
      this[_icon] = dart.test(this[_indeterminate]) ? material_checkbox.indeterminateIcon : dart.test(this[_checked]) ? material_checkbox.checkedIcon : material_checkbox.uncheckedIcon;
      if (dart.test(emitEvent) && !dart.equals(this[_checked], prevChecked)) {
        this[_onChecked].add(this[_checked]);
      }
      if (dart.test(emitEvent) && !dart.equals(this[_indeterminate], prevIndeterminate)) {
        this[_onIndeterminate].add(this[_indeterminate]);
      }
      if (this[_checkedStr] != prevState) {
        this[_syncAriaChecked]();
        this[_onChange].add(this[_checkedStr]);
      }
    }
    [_syncAriaChecked]() {
      let t0;
      if (this[_root$] == null) return;
      this[_root$][$attributes][$_set]("aria-checked", this[_checkedStr]);
      t0 = this[_changeDetector$];
      t0 == null ? null : t0.markForCheck();
    }
    get icon() {
      return this[_icon];
    }
    get rippleColor() {
      return dart.test(this.checked) ? this.themeColor : "";
    }
    toggleChecked() {
      if (dart.test(this.disabled) || dart.test(this.readOnly)) return;
      if (!dart.test(this.indeterminate) && !dart.test(this.checked)) {
        this[_setStates]({checked: true});
      } else if (dart.test(this.checked)) {
        this[_setStates]();
      } else {
        if (!dart.test(this.indeterminate)) dart.assertFailed(null, L0, 276, 14, "indeterminate");
        this[_setStates]({checked: this.indeterminateToChecked});
      }
    }
    focus() {
      if (dart.test(this.disabled)) return;
      this[_isKeyboardEvent] = true;
      this[_root$].focus();
    }
    handleKeyUp(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      this[_isKeyboardEvent] = true;
    }
    handleClick(mouseEvent) {
      if (dart.test(this.disabled)) return;
      this[_isKeyboardEvent] = false;
      this.toggleChecked();
    }
    handleMouseDown(mouseEvent) {
      if (dart.test(this.readOnly)) {
        mouseEvent.preventDefault();
      }
    }
    handleKeyPress(event) {
      if (dart.test(this.disabled)) return;
      if (!dart.equals(event[$target], this[_root$])) return;
      if (dart.test(events.isSpaceKey(event))) {
        event.preventDefault();
        this[_isKeyboardEvent] = true;
        this.toggleChecked();
      }
    }
    handleFocus(_) {
      this[_focused] = true;
    }
    handleBlur(event) {
      let t0;
      this[_focused] = false;
      t0 = this[_onTouched];
      t0 == null ? null : dart.dcall(t0, []);
    }
    onDisabledChanged(isDisabled) {
      let t0;
      this.disabled = isDisabled;
      t0 = this[_changeDetector$];
      t0 == null ? null : t0.markForCheck();
    }
    ngOnDestroy() {
    }
  };
  (material_checkbox.MaterialCheckboxComponent.new = function(_root, _changeDetector, cd, hostTabIndex, role) {
    let t0, t0$, t0$0;
    this[_onTouched] = null;
    this[_onChecked] = StreamControllerOfboolL().broadcast();
    this[_onIndeterminate] = StreamControllerOfboolL().broadcast();
    this[_onChange] = StreamControllerOfStringL().broadcast();
    this[indeterminateToChecked] = false;
    this[disabled] = false;
    this[_checked] = false;
    this[readOnly] = false;
    this[_focused] = false;
    this[_isKeyboardEvent] = false;
    this[_checkedStr] = "false";
    this[_indeterminate] = false;
    this[_icon] = material_checkbox.uncheckedIcon;
    this[themeColor] = null;
    this[label] = null;
    this[contentId] = new id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[focusDelegate] = null;
    this[_root$] = _root;
    this[_changeDetector$] = _changeDetector;
    this[_defaultTabIndex] = dart.test((t0$ = (t0 = hostTabIndex, t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$)) ? hostTabIndex : "0";
    this[role$] = (t0$0 = role, t0$0 == null ? "checkbox" : t0$0);
    if (cd != null) {
      cd.valueAccessor = this;
    }
    this[_syncAriaChecked]();
  }).prototype = material_checkbox.MaterialCheckboxComponent.prototype;
  dart.addTypeTests(material_checkbox.MaterialCheckboxComponent);
  dart.addTypeCaches(material_checkbox.MaterialCheckboxComponent);
  material_checkbox.MaterialCheckboxComponent[dart.implements] = () => [control_value_accessor.ControlValueAccessor$(dart.legacy(core.bool)), has_disabled.HasDisabled, focus_interface.Focusable, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getMethods(material_checkbox.MaterialCheckboxComponent.__proto__),
    writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.bool)], {rawValue: dart.legacy(core.String)}, {}))]),
    registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
    [_setStates]: dart.fnType(dart.void, [], {checked: dart.legacy(core.bool), emitEvent: dart.legacy(core.bool), indeterminate: dart.legacy(core.bool)}, {}),
    [_syncAriaChecked]: dart.fnType(dart.void, []),
    toggleChecked: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    handleKeyUp: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleClick: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    handleMouseDown: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    handleKeyPress: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleFocus: dart.fnType(dart.void, [dart.dynamic]),
    handleBlur: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getGetters(material_checkbox.MaterialCheckboxComponent.__proto__),
    onChecked: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    onIndeterminate: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    onChange: dart.legacy(async.Stream$(dart.legacy(core.String))),
    tabIndex: dart.legacy(core.String),
    checked: dart.legacy(core.bool),
    showFocus: dart.legacy(core.bool),
    checkedStr: dart.legacy(core.String),
    indeterminate: dart.legacy(core.bool),
    icon: dart.legacy(icon.Icon),
    rippleColor: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getSetters(material_checkbox.MaterialCheckboxComponent.__proto__),
    checked: dart.legacy(core.bool),
    indeterminate: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_checkbox.MaterialCheckboxComponent, L1);
  dart.setFieldSignature(material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getFields(material_checkbox.MaterialCheckboxComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_root$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_defaultTabIndex]: dart.finalFieldType(dart.legacy(core.String)),
    role: dart.finalFieldType(dart.legacy(core.String)),
    [_onTouched]: dart.fieldType(dart.legacy(core.Function)),
    [_onChecked]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_onIndeterminate]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_onChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.String)))),
    indeterminateToChecked: dart.fieldType(dart.legacy(core.bool)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    [_checked]: dart.fieldType(dart.legacy(core.bool)),
    readOnly: dart.fieldType(dart.legacy(core.bool)),
    [_focused]: dart.fieldType(dart.legacy(core.bool)),
    [_isKeyboardEvent]: dart.fieldType(dart.legacy(core.bool)),
    [_checkedStr]: dart.fieldType(dart.legacy(core.String)),
    [_indeterminate]: dart.fieldType(dart.legacy(core.bool)),
    [_icon]: dart.fieldType(dart.legacy(icon.Icon)),
    themeColor: dart.fieldType(dart.legacy(core.String)),
    label: dart.fieldType(dart.legacy(core.String)),
    contentId: dart.finalFieldType(dart.legacy(core.String)),
    focusDelegate: dart.fieldType(dart.legacy(async.Future))
  }));
  dart.defineLazy(material_checkbox.MaterialCheckboxComponent, {
    /*material_checkbox.MaterialCheckboxComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  }, true);
  var Icon_name = dart.privateName(icon, "Icon.name");
  var C0;
  var C1;
  var C2;
  dart.defineLazy(material_checkbox, {
    /*material_checkbox.uncheckedIcon*/get uncheckedIcon() {
      return C0 || CT.C0;
    },
    /*material_checkbox.checkedIcon*/get checkedIcon() {
      return C1 || CT.C1;
    },
    /*material_checkbox.indeterminateIcon*/get indeterminateIcon() {
      return C2 || CT.C2;
    },
    /*material_checkbox.uncheckedAriaState*/get uncheckedAriaState() {
      return "false";
    },
    /*material_checkbox.checkedAriaState*/get checkedAriaState() {
      return "true";
    },
    /*material_checkbox.indeterminateAriaState*/get indeterminateAriaState() {
      return "mixed";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox", {
    "package:angular_components/material_checkbox/material_checkbox.dart": material_checkbox
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.dart"],"names":[],"mappings":"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","file":"material_checkbox.unsound.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox: material_checkbox
  };
}));

//# sourceMappingURL=material_checkbox.unsound.ddc.js.map
