define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/mixins/button_wrapper', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/button_decorator/button_decorator'], (function load__packages__angular_components__material_select__dropdown_button(dart_sdk, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__mixins__focusable_mixin, packages__angular_components__mixins__button_wrapper, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__button_decorator__button_decorator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const button_wrapper = packages__angular_components__mixins__button_wrapper.mixins__button_wrapper;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  var dropdown_button = Object.create(dart.library);
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamControllerOfFocusEventL = () => (StreamControllerOfFocusEventL = dart.constFn(async.StreamController$(FocusEventL())))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_select/dropdown_button.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/material_select/dropdown_button.dart";
  var _role = dart.privateName(dropdown_button, "_role");
  var _ariaRole = dart.privateName(dropdown_button, "_ariaRole");
  var _button = dart.privateName(dropdown_button, "_button");
  var _ariaLabelledBy = dart.privateName(dropdown_button, "_ariaLabelledBy");
  var _showButtonBorder = dart.privateName(dropdown_button, "_showButtonBorder");
  var _blur = dart.privateName(dropdown_button, "_blur");
  var popupType = dart.privateName(dropdown_button, "DropdownButtonComponent.popupType");
  var error = dart.privateName(dropdown_button, "DropdownButtonComponent.error");
  var ariaOwns = dart.privateName(dropdown_button, "DropdownButtonComponent.ariaOwns");
  var ariaExpanded = dart.privateName(dropdown_button, "DropdownButtonComponent.ariaExpanded");
  var ariaActiveDescendant = dart.privateName(dropdown_button, "DropdownButtonComponent.ariaActiveDescendant");
  var uuid = dart.privateName(dropdown_button, "DropdownButtonComponent.uuid");
  var ariaDescribedBy = dart.privateName(dropdown_button, "DropdownButtonComponent.ariaDescribedBy");
  var tabbable = dart.privateName(dropdown_button, "DropdownButtonComponent.tabbable");
  const Object_FocusableMixin$36 = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$36.new = function() {
    focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$36.prototype;
  dart.applyMixin(Object_FocusableMixin$36, focusable_mixin.FocusableMixin);
  const Object_MaterialButtonWrapper$36 = class Object_MaterialButtonWrapper extends Object_FocusableMixin$36 {};
  (Object_MaterialButtonWrapper$36.new = function() {
    button_wrapper.MaterialButtonWrapper.new.call(this);
    Object_MaterialButtonWrapper$36.__proto__.new.call(this);
  }).prototype = Object_MaterialButtonWrapper$36.prototype;
  dart.applyMixin(Object_MaterialButtonWrapper$36, button_wrapper.MaterialButtonWrapper);
  dropdown_button.DropdownButtonComponent = class DropdownButtonComponent extends Object_MaterialButtonWrapper$36 {
    get popupType() {
      return this[popupType];
    }
    set popupType(value) {
      this[popupType] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get ariaOwns() {
      return this[ariaOwns];
    }
    set ariaOwns(value) {
      this[ariaOwns] = value;
    }
    get ariaExpanded() {
      return this[ariaExpanded];
    }
    set ariaExpanded(value) {
      this[ariaExpanded] = value;
    }
    get ariaActiveDescendant() {
      return this[ariaActiveDescendant];
    }
    set ariaActiveDescendant(value) {
      this[ariaActiveDescendant] = value;
    }
    get uuid() {
      return this[uuid];
    }
    set uuid(value) {
      super.uuid = value;
    }
    get ariaDescribedBy() {
      return this[ariaDescribedBy];
    }
    set ariaDescribedBy(value) {
      this[ariaDescribedBy] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    set button(b) {
      this[_button] = b;
      this.focusable = b;
    }
    get role() {
      return this[_role];
    }
    set role(value) {
      if (!(this.ariaRole == null)) dart.assertFailed("Aria role can only be set before initialization.", L0, 68, 9, "ariaRole == null");
      this[_role] = value;
    }
    get ariaRole() {
      return this[_ariaRole];
    }
    ngOnInit() {
      let t0;
      this[_ariaRole] = (t0 = this.role, t0 == null ? "button" : t0);
    }
    set ariaLabelledBy(labelledBy) {
      return this[_ariaLabelledBy] = labelledBy;
    }
    get ariaLabelledBy() {
      return this[_ariaLabelledBy] == null ? null : dart.str(this[_ariaLabelledBy]) + " " + dart.str(this.uuid);
    }
    get invalid() {
      return this.error != null;
    }
    set showButtonBorder(value) {
      this[_showButtonBorder] = value;
    }
    get showButtonBorder() {
      if (this[_showButtonBorder] != null) return this[_showButtonBorder];
      return this.buttonText != null;
    }
    get onBlur() {
      return this[_blur].stream;
    }
    handleBlur(event) {
      this[_blur].add(event);
    }
    get trigger() {
      return this[_button].trigger;
    }
  };
  (dropdown_button.DropdownButtonComponent.new = function() {
    this[_role] = null;
    this[_ariaRole] = null;
    this[_button] = null;
    this[popupType] = "dialog";
    this[error] = null;
    this[ariaOwns] = null;
    this[ariaExpanded] = null;
    this[ariaActiveDescendant] = null;
    this[uuid] = new id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_ariaLabelledBy] = null;
    this[ariaDescribedBy] = null;
    this[_showButtonBorder] = null;
    this[_blur] = StreamControllerOfFocusEventL().new({sync: true});
    this[tabbable] = true;
    dropdown_button.DropdownButtonComponent.__proto__.new.call(this);
    this.iconName = "arrow_drop_down";
  }).prototype = dropdown_button.DropdownButtonComponent.prototype;
  dart.addTypeTests(dropdown_button.DropdownButtonComponent);
  dart.addTypeCaches(dropdown_button.DropdownButtonComponent);
  dropdown_button.DropdownButtonComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getMethods(dropdown_button.DropdownButtonComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    handleBlur: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)])
  }));
  dart.setGetterSignature(dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getGetters(dropdown_button.DropdownButtonComponent.__proto__),
    role: dart.legacy(core.String),
    ariaRole: dart.legacy(core.String),
    ariaLabelledBy: dart.legacy(core.String),
    invalid: dart.legacy(core.bool),
    showButtonBorder: dart.legacy(core.bool),
    onBlur: dart.legacy(async.Stream$(dart.legacy(html.FocusEvent))),
    trigger: dart.legacy(async.Stream$(dart.legacy(html.UIEvent)))
  }));
  dart.setSetterSignature(dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getSetters(dropdown_button.DropdownButtonComponent.__proto__),
    button: dart.legacy(button_decorator.ButtonDirective),
    role: dart.legacy(core.String),
    ariaLabelledBy: dart.legacy(core.String),
    showButtonBorder: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(dropdown_button.DropdownButtonComponent, L1);
  dart.setFieldSignature(dropdown_button.DropdownButtonComponent, () => ({
    __proto__: dart.getFields(dropdown_button.DropdownButtonComponent.__proto__),
    [_role]: dart.fieldType(dart.legacy(core.String)),
    [_ariaRole]: dart.fieldType(dart.legacy(core.String)),
    [_button]: dart.fieldType(dart.legacy(button_decorator.ButtonDirective)),
    popupType: dart.fieldType(dart.legacy(core.String)),
    error: dart.fieldType(dart.legacy(core.String)),
    ariaOwns: dart.fieldType(dart.legacy(core.String)),
    ariaExpanded: dart.fieldType(dart.legacy(core.bool)),
    ariaActiveDescendant: dart.fieldType(dart.legacy(core.String)),
    uuid: dart.finalFieldType(dart.legacy(core.String)),
    [_ariaLabelledBy]: dart.fieldType(dart.legacy(core.String)),
    ariaDescribedBy: dart.fieldType(dart.legacy(core.String)),
    [_showButtonBorder]: dart.fieldType(dart.legacy(core.bool)),
    [_blur]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.FocusEvent)))),
    tabbable: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button", {
    "package:angular_components/material_select/dropdown_button.dart": dropdown_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkFS;;;;;;IAMA;;;;;;IAIA;;;;;;IAIF;;;;;;IAIE;;;;;;IAGM;;;;;;IAkBN;;;;;;IAkCF;;;;;;eAnGsB;AACd,MAAX,gBAAU,CAAC;AACE,MAAb,iBAAY,CAAC;IACf;;AAEmB;IAAK;aAIR;AACd,YACI,AAAS,iBAAG,yBAAM;AACT,MAAb,cAAQ,KAAK;IACf;;AAEuB;IAAS;;;AAIF,MAA5B,mBAAiB,sBAAL,OAAQ;IACtB;uBAoC0B;AAAe,qCAAkB,UAAU;;;AAMjE,YAAA,AAAgB,0BAAG,OAAO,OAA+B,SAAtB,yBAAe,eAAE;IAAK;;AAKzC,YAAA,AAAM,eAAG;IAAI;yBAIP;AACC,MAAzB,0BAAoB,KAAK;IAC3B;;AAGE,UAAI,2BAAqB,MAAM,MAAO;AAGtC,YAAO,AAAW,oBAAG;IACvB;;AAMiC,YAAA,AAAM;IAAM;eAGlB;AACT,MAAhB,AAAM,gBAAI,KAAK;IACjB;;AAI+B,YAAA,AAAQ;IAAO;;;IAzGvC;IACA;IAMS;IA6BT,kBAAY;IAMZ;IAIA;IAIF;IAIE;IAGM,aAA6B,AAAW;IAE9C;IAgBA;IAiBF;IAKC,cAAQ,2CAAmC;IAY5C,iBAAW;AA1GhB;AAC8B,IAA5B,gBAAW;EACb","file":"dropdown_button.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button: dropdown_button
  };
}));

//# sourceMappingURL=dropdown_button.unsound.ddc.js.map
