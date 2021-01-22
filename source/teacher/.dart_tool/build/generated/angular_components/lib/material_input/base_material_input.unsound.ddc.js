define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/id_generator/id_generator', 'packages/quiver/strings', 'packages/intl/intl', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/application_tokens', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/utils/angular/reference/reference'], (function load__packages__angular_components__material_input__base_material_input(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__id_generator__id_generator, packages__quiver__strings, packages__intl__intl, packages__angular_components__mixins__focusable_mixin, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus_interface, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_forms__src__directives, packages__angular__src__bootstrap__modules, packages__angular__src__core__application_tokens, packages__angular_components__utils__angular__properties__properties, packages__angular_components__utils__angular__reference__reference) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const strings = packages__quiver__strings.strings;
  const intl = packages__intl__intl.intl;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const model = packages__angular_forms__src__directives.src__model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  var base_material_input = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $firstWhere = dartx.firstWhere;
  var $keys = dartx.keys;
  var $contains = dartx.contains;
  var BottomPanelStateL = () => (BottomPanelStateL = dart.constFn(dart.legacy(base_material_input.BottomPanelState)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StreamControllerOfStringL = () => (StreamControllerOfStringL = dart.constFn(async.StreamController$(StringL())))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamControllerOfFocusEventL = () => (StreamControllerOfFocusEventL = dart.constFn(async.StreamController$(FocusEventL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var StringLToNull = () => (StringLToNull = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/base_material_input.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: base_material_input.BottomPanelState.prototype,
        [_name$]: "BottomPanelState.empty",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: base_material_input.BottomPanelState.prototype,
        [_name$]: "BottomPanelState.error",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: base_material_input.BottomPanelState.prototype,
        [_name$]: "BottomPanelState.hint",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], BottomPanelStateL());
    },
    get C4() {
      return C4 = dart.constMap(StringL(), ObjectL(), ["currentCount", 5]);
    },
    get C5() {
      return C5 = dart.constMap(StringL(), ObjectL(), ["maxCount", 25]);
    },
    get C6() {
      return C6 = dart.constMap(StringL(), ObjectL(), ["currentCount", 12, "maxCount", 25]);
    },
    get C7() {
      return C7 = dart.constList(["number", "tel"], StringL());
    }
  }, false);
  var _name$ = dart.privateName(base_material_input, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  base_material_input.BottomPanelState = class BottomPanelState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (base_material_input.BottomPanelState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = base_material_input.BottomPanelState.prototype;
  dart.addTypeTests(base_material_input.BottomPanelState);
  dart.addTypeCaches(base_material_input.BottomPanelState);
  dart.setMethodSignature(base_material_input.BottomPanelState, () => ({
    __proto__: dart.getMethods(base_material_input.BottomPanelState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(base_material_input.BottomPanelState, L0);
  dart.setFieldSignature(base_material_input.BottomPanelState, () => ({
    __proto__: dart.getFields(base_material_input.BottomPanelState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(base_material_input.BottomPanelState, ['toString']);
  base_material_input.BottomPanelState.empty = C0 || CT.C0;
  base_material_input.BottomPanelState.error = C1 || CT.C1;
  base_material_input.BottomPanelState.hint = C2 || CT.C2;
  base_material_input.BottomPanelState.values = C3 || CT.C3;
  var _disposer = dart.privateName(base_material_input, "_disposer");
  var _invalid = dart.privateName(base_material_input, "_invalid");
  var _validationMessage = dart.privateName(base_material_input, "_validationMessage");
  var _localValidationMessage = dart.privateName(base_material_input, "_localValidationMessage");
  var _required = dart.privateName(base_material_input, "_required");
  var _showHintOnlyOnFocus = dart.privateName(base_material_input, "_showHintOnlyOnFocus");
  var _disabled = dart.privateName(base_material_input, "_disabled");
  var _pristine = dart.privateName(base_material_input, "_pristine");
  var _errorMsg = dart.privateName(base_material_input, "_errorMsg");
  var _error = dart.privateName(base_material_input, "_error");
  var _inputAriaDescribedBy = dart.privateName(base_material_input, "_inputAriaDescribedBy");
  var _hintText = dart.privateName(base_material_input, "_hintText");
  var _requiredErrorMsg = dart.privateName(base_material_input, "_requiredErrorMsg");
  var _checkValid = dart.privateName(base_material_input, "_checkValid");
  var _inputTextLength = dart.privateName(base_material_input, "_inputTextLength");
  var _inputText = dart.privateName(base_material_input, "_inputText");
  var _characterCounter = dart.privateName(base_material_input, "_characterCounter");
  var _keypressController = dart.privateName(base_material_input, "_keypressController");
  var _changeController = dart.privateName(base_material_input, "_changeController");
  var _blurController = dart.privateName(base_material_input, "_blurController");
  var _cd$ = dart.privateName(base_material_input, "_cd");
  var _changeDetector = dart.privateName(base_material_input, "_changeDetector");
  var _isLocallyValid = dart.privateName(base_material_input, "_isLocallyValid");
  var _validate = dart.privateName(base_material_input, "_validate");
  var C4;
  var C5;
  var C6;
  var _changeDetector$ = dart.privateName(base_material_input, "BaseMaterialInput._changeDetector");
  var emptyState = dart.privateName(base_material_input, "BaseMaterialInput.emptyState");
  var errorState = dart.privateName(base_material_input, "BaseMaterialInput.errorState");
  var hintState = dart.privateName(base_material_input, "BaseMaterialInput.hintState");
  var errorTextId = dart.privateName(base_material_input, "BaseMaterialInput.errorTextId");
  var useNativeValidation = dart.privateName(base_material_input, "BaseMaterialInput.useNativeValidation");
  var bottomPanelState = dart.privateName(base_material_input, "BaseMaterialInput.bottomPanelState");
  var ariaDescribedBy = dart.privateName(base_material_input, "BaseMaterialInput.ariaDescribedBy");
  var label = dart.privateName(base_material_input, "BaseMaterialInput.label");
  var inputAriaLabel = dart.privateName(base_material_input, "BaseMaterialInput.inputAriaLabel");
  var inputAutocomplete = dart.privateName(base_material_input, "BaseMaterialInput.inputAutocomplete");
  var maxCount = dart.privateName(base_material_input, "BaseMaterialInput.maxCount");
  var displayBottomPanel = dart.privateName(base_material_input, "BaseMaterialInput.displayBottomPanel");
  var errorRenderer = dart.privateName(base_material_input, "BaseMaterialInput.errorRenderer");
  var showCharacterCount = dart.privateName(base_material_input, "BaseMaterialInput.showCharacterCount");
  var floatingLabel = dart.privateName(base_material_input, "BaseMaterialInput.floatingLabel");
  var focused = dart.privateName(base_material_input, "BaseMaterialInput.focused");
  base_material_input.BaseMaterialInput = class BaseMaterialInput extends focusable_mixin.FocusableMixin {
    get [_changeDetector]() {
      return this[_changeDetector$];
    }
    set [_changeDetector](value) {
      super[_changeDetector] = value;
    }
    get emptyState() {
      return this[emptyState];
    }
    set emptyState(value) {
      super.emptyState = value;
    }
    get errorState() {
      return this[errorState];
    }
    set errorState(value) {
      super.errorState = value;
    }
    get hintState() {
      return this[hintState];
    }
    set hintState(value) {
      super.hintState = value;
    }
    get errorTextId() {
      return this[errorTextId];
    }
    set errorTextId(value) {
      super.errorTextId = value;
    }
    get useNativeValidation() {
      return this[useNativeValidation];
    }
    set useNativeValidation(value) {
      this[useNativeValidation] = value;
    }
    get bottomPanelState() {
      return this[bottomPanelState];
    }
    set bottomPanelState(value) {
      this[bottomPanelState] = value;
    }
    get ariaDescribedBy() {
      return this[ariaDescribedBy];
    }
    set ariaDescribedBy(value) {
      this[ariaDescribedBy] = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get inputAriaLabel() {
      return this[inputAriaLabel];
    }
    set inputAriaLabel(value) {
      this[inputAriaLabel] = value;
    }
    get inputAutocomplete() {
      return this[inputAutocomplete];
    }
    set inputAutocomplete(value) {
      this[inputAutocomplete] = value;
    }
    get maxCount() {
      return this[maxCount];
    }
    set maxCount(value) {
      this[maxCount] = value;
    }
    get displayBottomPanel() {
      return this[displayBottomPanel];
    }
    set displayBottomPanel(value) {
      this[displayBottomPanel] = value;
    }
    get errorRenderer() {
      return this[errorRenderer];
    }
    set errorRenderer(value) {
      this[errorRenderer] = value;
    }
    get showCharacterCount() {
      return this[showCharacterCount];
    }
    set showCharacterCount(value) {
      this[showCharacterCount] = value;
    }
    get floatingLabel() {
      return this[floatingLabel];
    }
    set floatingLabel(value) {
      this[floatingLabel] = value;
    }
    get focused() {
      return this[focused];
    }
    set focused(value) {
      this[focused] = value;
    }
    get errorMsg() {
      return this[_errorMsg];
    }
    set errorMsg(msg) {
      this[_errorMsg] = msg;
      this.updateBottomPanelState();
    }
    get error() {
      return this[_error];
    }
    set error(error) {
      this[_error] = error;
      this.updateBottomPanelState();
    }
    set inputAriaDescribedBy(elementID) {
      this[_inputAriaDescribedBy] = elementID;
      this.updateBottomPanelState();
    }
    get hintText() {
      return this[_hintText];
    }
    set hintText(value) {
      this[_hintText] = StringL().as(value);
      this.updateBottomPanelState();
    }
    get requiredErrorMsg() {
      return this[_requiredErrorMsg];
    }
    set requiredErrorMsg(value) {
      let t0;
      this[_requiredErrorMsg] = value;
      if ((t0 = this[_cd$], t0 == null ? null : t0.control) != null) {
        this[_cd$].control.updateValueAndValidity();
      }
    }
    get checkValid() {
      return this[_checkValid];
    }
    set checkValid(validFn) {
      let t0;
      if (dart.equals(validFn, this[_checkValid])) return;
      this[_checkValid] = validFn;
      this[_changeDetector].markForCheck();
      if ((t0 = this[_cd$], t0 == null ? null : t0.control) != null) {
        this[_cd$].control.updateValueAndValidity();
      }
      this.updateBottomPanelState();
    }
    get inputTextLength() {
      return this[_inputTextLength];
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(value) {
      this[_inputText] = value;
      this.updateInputTextLength();
      this[_changeDetector].markForCheck();
    }
    set characterCounter(counterFn) {
      this[_characterCounter] = counterFn;
      this.updateInputTextLength();
    }
    updateInputTextLength() {
      let t0;
      if (this[_inputText] == null) {
        this[_inputTextLength] = 0;
      } else {
        this[_inputTextLength] = this[_characterCounter] != null ? (t0 = this[_inputText], this[_characterCounter](t0)) : this[_inputText].length;
      }
    }
    ngAfterViewInit() {
      let t0;
      if ((t0 = this[_cd$], t0 == null ? null : t0.control) != null) {
        this[_disposer].addStreamSubscription(dart.dynamic, this[_cd$].control.valueChanges.listen(dart.fn(value => {
          this[_changeDetector].markForCheck();
        }, dynamicToNull())));
        this[_disposer].addStreamSubscription(StringL(), this[_cd$].control.statusChanges.listen(dart.fn(status => {
          this[_changeDetector].markForCheck();
          this.updateBottomPanelState();
        }, StringLToNull())));
      }
    }
    call(_) {
      return this[_isLocallyValid](true);
    }
    [_isLocallyValid](fromFormsApi) {
      let t0;
      if (dart.test(this.required) && dart.test(strings.isEmpty(this.inputText)) && (dart.test(fromFormsApi) || !dart.test(this[_pristine]))) {
        this[_localValidationMessage] = this.requiredErrorMsg;
        return new (IdentityMapOfStringL$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
      }
      if (this.maxCount != null && dart.notNull(this.inputTextLength) > dart.notNull(this.maxCount)) {
        this[_localValidationMessage] = this[_errorMsg];
        return new (IdentityMapOfStringL$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
      }
      if (this.checkValid != null) {
        let _checkValidMessage = (t0 = this.inputText, this.checkValid(t0));
        if (_checkValidMessage != null) {
          this[_localValidationMessage] = _checkValidMessage;
          return new (IdentityMapOfStringL$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
        }
      }
      if (dart.test(this[_invalid]) && dart.test(this.useNativeValidation)) {
        this[_localValidationMessage] = this[_validationMessage];
        return new (IdentityMapOfStringL$dynamic()).from(["material-input-error", this[_localValidationMessage]]);
      }
      this[_localValidationMessage] = null;
      return null;
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(disabled) {
      this[_disabled] = disabled;
      this[_changeDetector].markForCheck();
    }
    get showHintOnlyOnFocus() {
      return this[_showHintOnlyOnFocus];
    }
    set showHintOnlyOnFocus(value) {
      this[_showHintOnlyOnFocus] = value;
      this.updateBottomPanelState();
    }
    get required() {
      return this[_required];
    }
    set required(required) {
      let prev = this[_required];
      this[_required] = required;
      if (!dart.equals(prev, this[_required]) && this[_cd$] != null) {
        this[_cd$].control.updateValueAndValidity();
      }
    }
    get onKeypress() {
      return this[_keypressController].stream;
    }
    get onChange() {
      return this[_changeController].stream;
    }
    get onBlur() {
      return this[_blurController].stream;
    }
    get underlineAnimated() {
      return this.focused;
    }
    get floatingLabelVisible() {
      return this.floatingLabel;
    }
    get labelAnimated() {
      return dart.test(this.floatingLabelVisible) && (dart.test(this.focused) || dart.test(this.hasVisibleText));
    }
    get labelAnimationReset() {
      return dart.test(this.floatingLabelVisible) && !dart.test(this.focused) && !dart.test(this.hasVisibleText);
    }
    get invalid() {
      let t0, t0$, t0$0;
      if (dart.test((t0$ = (t0 = this[_error], t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$))) return true;
      if ((t0$0 = this[_cd$], t0$0 == null ? null : t0$0.control) != null) {
        return !dart.test(this[_cd$].valid) && (dart.test(this[_cd$].touched) || dart.test(this[_cd$].dirty));
      }
      return this[_isLocallyValid](false) != null;
    }
    get hasVisibleText() {
      let t0, t0$;
      t0$ = (t0 = this.inputText, t0 == null ? null : t0[$isNotEmpty]);
      return t0$ == null ? false : t0$;
    }
    get labelVisible() {
      return dart.test(this.floatingLabelVisible) || !dart.test(this.hasVisibleText);
    }
    get ariaLabel() {
      let t0;
      t0 = this.inputAriaLabel;
      return t0 == null ? this.label : t0;
    }
    get errorMessage() {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (dart.test((t0$ = (t0 = this[_error], t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$))) return this[_error];
      if (this[_cd$] != null && (t0$0 = this[_cd$].control, t0$0 == null ? null : t0$0.errors) != null) {
        let errorMap = this[_cd$].control.errors;
        if (this.errorRenderer != null) errorMap = (t0$1 = errorMap, this.errorRenderer(t0$1));
        let stringValue = errorMap[$values][$firstWhere](dart.fn(v => StringL().is(v) && v[$isNotEmpty], dynamicToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
        if (stringValue != null) {
          return StringL().as(stringValue);
        }
        for (let key of errorMap[$keys]) {
          if ("required" === key) {
            return this.requiredErrorMsg;
          }
          if ("maxlength" === key) {
            return this[_errorMsg];
          }
        }
      }
      t0$2 = this[_localValidationMessage];
      return t0$2 == null ? "" : t0$2;
    }
    get inputRef() {
      return null;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    inputFocusAction(event) {
      this.focused = true;
      this.handleFocus(FocusEventL().as(event));
      this.updateBottomPanelState();
    }
    inputBlurAction(event, valid, validationMessage) {
      this[_validate](valid, validationMessage);
      this[_pristine] = false;
      this.focused = false;
      this[_blurController].add(FocusEventL().as(event));
      this.updateBottomPanelState();
    }
    inputChange(newValue, valid, validationMessage) {
      this[_validate](valid, validationMessage);
      this[_pristine] = false;
      this.inputText = StringL().as(newValue);
      this[_changeController].add(StringL().as(newValue));
      this.updateBottomPanelState();
    }
    inputKeypress(newValue, valid, validationMessage) {
      this[_validate](valid, validationMessage);
      this[_pristine] = false;
      this.inputText = StringL().as(newValue);
      this[_keypressController].add(StringL().as(newValue));
      this.updateBottomPanelState();
    }
    [_validate](valid, validationMessage) {
      this[_invalid] = !dart.dtest(valid);
      this[_validationMessage] = StringL().as(validationMessage);
    }
    updateBottomPanelState() {
      let oldState = this.bottomPanelState;
      if (dart.test(this.invalid) && dart.test(strings.isNotEmpty(this.errorMessage))) {
        this.bottomPanelState = base_material_input.BottomPanelState.error;
        this.ariaDescribedBy = this[_inputAriaDescribedBy] == null ? this.errorTextId : dart.str(this[_inputAriaDescribedBy]) + " " + dart.str(this.errorTextId);
      } else if ((!dart.test(this.showHintOnlyOnFocus) || dart.test(this.focused)) && dart.test(strings.isNotEmpty(this[_hintText]))) {
        this.bottomPanelState = base_material_input.BottomPanelState.hint;
        this.ariaDescribedBy = this[_inputAriaDescribedBy];
      } else {
        this.bottomPanelState = base_material_input.BottomPanelState.empty;
        this.ariaDescribedBy = this[_inputAriaDescribedBy];
      }
      if (oldState != this.bottomPanelState) {
        this[_changeDetector].markForCheck();
      }
    }
    selectAll() {
      dart.dsend(this.inputRef.nativeElement, 'select', []);
    }
    set focusable(value) {
      super.focusable = value;
    }
    msgCharacterCounter(currentCount, maxCount) {
      return maxCount == null ? dart.str(currentCount) : base_material_input.BaseMaterialInput._msgCharacterCounter(currentCount, maxCount);
    }
    msgCharacterCounterAriaLabel(currentCount, maxCount) {
      return maxCount == null ? base_material_input.BaseMaterialInput._msgCharacterCounterAriaLabelNoLimitation(currentCount) : dart.notNull(base_material_input.BaseMaterialInput._msgCharacterCounterAriaLabelNoLimitation(currentCount)) + dart.notNull(base_material_input.BaseMaterialInput._msgCharacterCounterAriaLabelWithLimitation(maxCount));
    }
    static _msgCharacterCounterAriaLabelNoLimitation(currentCount) {
      return intl.Intl.plural(currentCount, {args: JSArrayOfObjectL().of([currentCount]), desc: "aria label for the character limit label", one: "Text is 1 character", other: "Text is " + dart.str(currentCount) + " characters", examples: C4 || CT.C4, name: "BaseMaterialInput__msgCharacterCounterAriaLabelNoLimitation"});
    }
    static _msgCharacterCounterAriaLabelWithLimitation(maxCount) {
      return intl.Intl.message(" out of " + dart.str(maxCount), {args: JSArrayOfObjectL().of([maxCount]), desc: "Suffix for aria label for text limitation label", examples: C5 || CT.C5, name: "BaseMaterialInput__msgCharacterCounterAriaLabelWithLimitation"});
    }
    static _msgCharacterCounter(currentCount, maxCount) {
      return intl.Intl.message(dart.str(currentCount) + " / " + dart.str(maxCount), {name: "BaseMaterialInput__msgCharacterCounter", args: JSArrayOfObjectL().of([currentCount, maxCount]), desc: "Character counter shown below a text box in the format \"12 / 25\"", examples: C6 || CT.C6});
    }
  };
  (base_material_input.BaseMaterialInput.new = function(_cd, _changeDetector, validator) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[emptyState] = base_material_input.BottomPanelState.empty;
    this[errorState] = base_material_input.BottomPanelState.error;
    this[hintState] = base_material_input.BottomPanelState.hint;
    this[errorTextId] = new id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_invalid] = false;
    this[_validationMessage] = null;
    this[_localValidationMessage] = null;
    this[_required] = false;
    this[_showHintOnlyOnFocus] = false;
    this[_disabled] = false;
    this[useNativeValidation] = true;
    this[_pristine] = true;
    this[bottomPanelState] = base_material_input.BottomPanelState.empty;
    this[ariaDescribedBy] = null;
    this[_errorMsg] = null;
    this[_error] = null;
    this[_inputAriaDescribedBy] = null;
    this[label] = null;
    this[inputAriaLabel] = null;
    this[inputAutocomplete] = null;
    this[_hintText] = null;
    this[_requiredErrorMsg] = base_material_input.BaseMaterialInput.defaultEmptyMessage;
    this[maxCount] = null;
    this[_checkValid] = null;
    this[_inputTextLength] = 0;
    this[_inputText] = "";
    this[displayBottomPanel] = true;
    this[errorRenderer] = null;
    this[_characterCounter] = null;
    this[showCharacterCount] = false;
    this[floatingLabel] = false;
    this[_keypressController] = StreamControllerOfStringL().broadcast({sync: true});
    this[_changeController] = StreamControllerOfStringL().broadcast({sync: true});
    this[_blurController] = StreamControllerOfFocusEventL().broadcast({sync: true});
    this[focused] = false;
    this[_cd$] = _cd;
    this[_changeDetector$] = _changeDetector;
    base_material_input.BaseMaterialInput.__proto__.new.call(this);
    let call = dart.bind(this, 'call');
    validator.add(call);
    this[_disposer].addFunction(dart.fn(() => {
      validator.remove(call);
    }, VoidToNull()));
  }).prototype = base_material_input.BaseMaterialInput.prototype;
  dart.addTypeTests(base_material_input.BaseMaterialInput);
  dart.addTypeCaches(base_material_input.BaseMaterialInput);
  base_material_input.BaseMaterialInput[dart.implements] = () => [has_disabled.HasDisabled, focus_interface.Focusable, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getMethods(base_material_input.BaseMaterialInput.__proto__),
    updateInputTextLength: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    call: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)]),
    [_isLocallyValid]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(core.bool)]),
    ngOnDestroy: dart.fnType(dart.void, []),
    inputFocusAction: dart.fnType(dart.void, [dart.dynamic]),
    inputBlurAction: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]),
    inputChange: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]),
    inputKeypress: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_validate]: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    updateBottomPanelState: dart.fnType(dart.void, []),
    selectAll: dart.fnType(dart.void, []),
    msgCharacterCounter: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int), dart.legacy(core.int)]),
    msgCharacterCounterAriaLabel: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int), dart.legacy(core.int)])
  }));
  dart.setGetterSignature(base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getGetters(base_material_input.BaseMaterialInput.__proto__),
    errorMsg: dart.legacy(core.String),
    error: dart.legacy(core.String),
    hintText: dart.legacy(core.String),
    requiredErrorMsg: dart.legacy(core.String),
    checkValid: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])),
    inputTextLength: dart.legacy(core.int),
    inputText: dart.legacy(core.String),
    disabled: dart.legacy(core.bool),
    showHintOnlyOnFocus: dart.legacy(core.bool),
    required: dart.legacy(core.bool),
    onKeypress: dart.legacy(async.Stream$(dart.legacy(core.String))),
    onChange: dart.legacy(async.Stream$(dart.legacy(core.String))),
    onBlur: dart.legacy(async.Stream$(dart.legacy(html.FocusEvent))),
    underlineAnimated: dart.legacy(core.bool),
    floatingLabelVisible: dart.legacy(core.bool),
    labelAnimated: dart.legacy(core.bool),
    labelAnimationReset: dart.legacy(core.bool),
    invalid: dart.legacy(core.bool),
    hasVisibleText: dart.legacy(core.bool),
    labelVisible: dart.legacy(core.bool),
    ariaLabel: dart.legacy(core.String),
    errorMessage: dart.legacy(core.String),
    inputRef: dart.legacy(element_ref.ElementRef)
  }));
  dart.setSetterSignature(base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getSetters(base_material_input.BaseMaterialInput.__proto__),
    errorMsg: dart.legacy(core.String),
    error: dart.legacy(core.String),
    inputAriaDescribedBy: dart.legacy(core.String),
    hintText: dart.dynamic,
    requiredErrorMsg: dart.legacy(core.String),
    checkValid: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])),
    inputText: dart.legacy(core.String),
    characterCounter: dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)])),
    disabled: dart.legacy(core.bool),
    showHintOnlyOnFocus: dart.legacy(core.bool),
    required: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(base_material_input.BaseMaterialInput, L0);
  dart.setFieldSignature(base_material_input.BaseMaterialInput, () => ({
    __proto__: dart.getFields(base_material_input.BaseMaterialInput.__proto__),
    [_changeDetector]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    emptyState: dart.finalFieldType(dart.legacy(base_material_input.BottomPanelState)),
    errorState: dart.finalFieldType(dart.legacy(base_material_input.BottomPanelState)),
    hintState: dart.finalFieldType(dart.legacy(base_material_input.BottomPanelState)),
    errorTextId: dart.finalFieldType(dart.legacy(core.String)),
    [_invalid]: dart.fieldType(dart.legacy(core.bool)),
    [_validationMessage]: dart.fieldType(dart.legacy(core.String)),
    [_localValidationMessage]: dart.fieldType(dart.legacy(core.String)),
    [_required]: dart.fieldType(dart.legacy(core.bool)),
    [_showHintOnlyOnFocus]: dart.fieldType(dart.legacy(core.bool)),
    [_disabled]: dart.fieldType(dart.legacy(core.bool)),
    useNativeValidation: dart.fieldType(dart.legacy(core.bool)),
    [_pristine]: dart.fieldType(dart.legacy(core.bool)),
    [_cd$]: dart.finalFieldType(dart.legacy(ng_control.NgControl)),
    bottomPanelState: dart.fieldType(dart.legacy(base_material_input.BottomPanelState)),
    ariaDescribedBy: dart.fieldType(dart.legacy(core.String)),
    [_errorMsg]: dart.fieldType(dart.legacy(core.String)),
    [_error]: dart.fieldType(dart.legacy(core.String)),
    [_inputAriaDescribedBy]: dart.fieldType(dart.legacy(core.String)),
    label: dart.fieldType(dart.legacy(core.String)),
    inputAriaLabel: dart.fieldType(dart.legacy(core.String)),
    inputAutocomplete: dart.fieldType(dart.legacy(core.String)),
    [_hintText]: dart.fieldType(dart.legacy(core.String)),
    [_requiredErrorMsg]: dart.fieldType(dart.legacy(core.String)),
    maxCount: dart.fieldType(dart.legacy(core.int)),
    [_checkValid]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]))),
    [_inputTextLength]: dart.fieldType(dart.legacy(core.int)),
    [_inputText]: dart.fieldType(dart.legacy(core.String)),
    displayBottomPanel: dart.fieldType(dart.legacy(core.bool)),
    errorRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]))),
    [_characterCounter]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]))),
    showCharacterCount: dart.fieldType(dart.legacy(core.bool)),
    floatingLabel: dart.fieldType(dart.legacy(core.bool)),
    [_keypressController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.String)))),
    [_changeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.String)))),
    [_blurController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.FocusEvent)))),
    focused: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(base_material_input.BaseMaterialInput, {
    /*base_material_input.BaseMaterialInput.defaultEmptyMessage*/get defaultEmptyMessage() {
      return intl.Intl.message("Enter a value", {desc: "Error message when the input is empty and required."});
    }
  }, true);
  var _labelId = dart.privateName(base_material_input, "_labelId");
  var _leadingText = dart.privateName(base_material_input, "_leadingText");
  var _trailingText = dart.privateName(base_material_input, "_trailingText");
  var _rightAlign = dart.privateName(base_material_input, "_rightAlign");
  var C7;
  var _changeDetector$0 = dart.privateName(base_material_input, "BaseSingleLineInputComponent._changeDetector");
  var inputEl = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputEl");
  var popupSourceEl = dart.privateName(base_material_input, "BaseSingleLineInputComponent.popupSourceEl");
  var type$ = dart.privateName(base_material_input, "BaseSingleLineInputComponent.type");
  var multiple$ = dart.privateName(base_material_input, "BaseSingleLineInputComponent.multiple");
  var leadingGlyph = dart.privateName(base_material_input, "BaseSingleLineInputComponent.leadingGlyph");
  var trailingGlyph = dart.privateName(base_material_input, "BaseSingleLineInputComponent.trailingGlyph");
  var trailingGlyphAriaLabel = dart.privateName(base_material_input, "BaseSingleLineInputComponent.trailingGlyphAriaLabel");
  var leadingGlyphAriaLabel = dart.privateName(base_material_input, "BaseSingleLineInputComponent.leadingGlyphAriaLabel");
  var role = dart.privateName(base_material_input, "BaseSingleLineInputComponent.role");
  var inputAriaOwns = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputAriaOwns");
  var inputAriaActivedescendent = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputAriaActivedescendent");
  var inputAriaHasPopup = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputAriaHasPopup");
  var inputAriaExpanded = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputAriaExpanded");
  var inputAriaAutocomplete = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputAriaAutocomplete");
  var inputAriaControls = dart.privateName(base_material_input, "BaseSingleLineInputComponent.inputAriaControls");
  base_material_input.BaseSingleLineInputComponent = class BaseSingleLineInputComponent extends base_material_input.BaseMaterialInput {
    get [_changeDetector]() {
      return this[_changeDetector$0];
    }
    set [_changeDetector](value) {
      super[_changeDetector] = value;
    }
    get inputEl() {
      return this[inputEl];
    }
    set inputEl(value) {
      this[inputEl] = value;
    }
    get popupSourceEl() {
      return this[popupSourceEl];
    }
    set popupSourceEl(value) {
      this[popupSourceEl] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get multiple() {
      return this[multiple$];
    }
    set multiple(value) {
      this[multiple$] = value;
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
    get trailingGlyphAriaLabel() {
      return this[trailingGlyphAriaLabel];
    }
    set trailingGlyphAriaLabel(value) {
      this[trailingGlyphAriaLabel] = value;
    }
    get leadingGlyphAriaLabel() {
      return this[leadingGlyphAriaLabel];
    }
    set leadingGlyphAriaLabel(value) {
      this[leadingGlyphAriaLabel] = value;
    }
    get role() {
      return this[role];
    }
    set role(value) {
      this[role] = value;
    }
    get inputAriaOwns() {
      return this[inputAriaOwns];
    }
    set inputAriaOwns(value) {
      this[inputAriaOwns] = value;
    }
    get inputAriaActivedescendent() {
      return this[inputAriaActivedescendent];
    }
    set inputAriaActivedescendent(value) {
      this[inputAriaActivedescendent] = value;
    }
    get inputAriaHasPopup() {
      return this[inputAriaHasPopup];
    }
    set inputAriaHasPopup(value) {
      this[inputAriaHasPopup] = value;
    }
    get inputAriaExpanded() {
      return this[inputAriaExpanded];
    }
    set inputAriaExpanded(value) {
      this[inputAriaExpanded] = value;
    }
    get inputAriaAutocomplete() {
      return this[inputAriaAutocomplete];
    }
    set inputAriaAutocomplete(value) {
      this[inputAriaAutocomplete] = value;
    }
    get inputAriaControls() {
      return this[inputAriaControls];
    }
    set inputAriaControls(value) {
      this[inputAriaControls] = value;
    }
    get elementRef() {
      return this.popupSourceEl;
    }
    get inputRef() {
      return this.inputEl;
    }
    get labelId() {
      return this.inputAriaLabel != null ? null : this[_labelId];
    }
    focus() {
      return super.focus();
    }
    get inputTabIndex() {
      return dart.test(this.disabled) ? -1 : 0;
    }
    get hasLeadingText() {
      return strings.isNotEmpty(this.leadingText);
    }
    get leadingText() {
      return this[_leadingText];
    }
    set leadingText(value) {
      this[_leadingText] = value;
      this[_changeDetector].markForCheck();
    }
    get hasLeadingGlyph() {
      return strings.isNotEmpty(this.leadingGlyph);
    }
    get trailingText() {
      return this[_trailingText];
    }
    get hasTrailingText() {
      return strings.isNotEmpty(this.trailingText);
    }
    set trailingText(value) {
      this[_trailingText] = value;
      this[_changeDetector].markForCheck();
    }
    get hasTrailingGlyph() {
      return strings.isNotEmpty(this.trailingGlyph);
    }
    get rightAlign() {
      return this[_rightAlign];
    }
    set rightAlign(value) {
      this[_rightAlign] = value;
      this[_changeDetector].markForCheck();
    }
    get numeric() {
      return this.type === "number";
    }
    get labelVisible() {
      return !(dart.test(this.numeric) && dart.test(this.invalid)) && dart.test(super.labelVisible);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.inputEl = null;
      this.popupSourceEl = null;
    }
    handleChange(event, element) {
      this.inputChange(element.value, element.validity.valid, element.validationMessage);
      event.stopPropagation();
    }
  };
  (base_material_input.BaseSingleLineInputComponent.new = function(type, multiple, cd, _changeDetector, validator) {
    this[inputEl] = null;
    this[popupSourceEl] = null;
    this[type$] = null;
    this[multiple$] = false;
    this[_labelId] = new id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_leadingText] = null;
    this[leadingGlyph] = null;
    this[_trailingText] = null;
    this[trailingGlyph] = null;
    this[trailingGlyphAriaLabel] = null;
    this[leadingGlyphAriaLabel] = null;
    this[role] = null;
    this[_rightAlign] = false;
    this[inputAriaOwns] = null;
    this[inputAriaActivedescendent] = null;
    this[inputAriaHasPopup] = null;
    this[inputAriaExpanded] = null;
    this[inputAriaAutocomplete] = null;
    this[inputAriaControls] = null;
    this[_changeDetector$0] = _changeDetector;
    base_material_input.BaseSingleLineInputComponent.__proto__.new.call(this, cd, _changeDetector, validator);
    if (type == null) {
      this.type = "text";
    } else if (dart.test((C7 || CT.C7)[$contains](type))) {
      this.type = "text";
    } else {
      this.type = type;
    }
    this.multiple = properties.attributeToBool(multiple);
  }).prototype = base_material_input.BaseSingleLineInputComponent.prototype;
  dart.addTypeTests(base_material_input.BaseSingleLineInputComponent);
  dart.addTypeCaches(base_material_input.BaseSingleLineInputComponent);
  base_material_input.BaseSingleLineInputComponent[dart.implements] = () => [focus_interface.Focusable, reference.ReferenceDirective, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(base_material_input.BaseSingleLineInputComponent, () => ({
    __proto__: dart.getMethods(base_material_input.BaseSingleLineInputComponent.__proto__),
    handleChange: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(html.InputElement)])
  }));
  dart.setGetterSignature(base_material_input.BaseSingleLineInputComponent, () => ({
    __proto__: dart.getGetters(base_material_input.BaseSingleLineInputComponent.__proto__),
    elementRef: dart.legacy(element_ref.ElementRef),
    labelId: dart.legacy(core.String),
    inputTabIndex: dart.legacy(core.int),
    hasLeadingText: dart.legacy(core.bool),
    leadingText: dart.legacy(core.String),
    hasLeadingGlyph: dart.legacy(core.bool),
    trailingText: dart.legacy(core.String),
    hasTrailingText: dart.legacy(core.bool),
    hasTrailingGlyph: dart.legacy(core.bool),
    rightAlign: dart.legacy(core.bool),
    numeric: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(base_material_input.BaseSingleLineInputComponent, () => ({
    __proto__: dart.getSetters(base_material_input.BaseSingleLineInputComponent.__proto__),
    leadingText: dart.legacy(core.String),
    trailingText: dart.legacy(core.String),
    rightAlign: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(base_material_input.BaseSingleLineInputComponent, L0);
  dart.setFieldSignature(base_material_input.BaseSingleLineInputComponent, () => ({
    __proto__: dart.getFields(base_material_input.BaseSingleLineInputComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    inputEl: dart.fieldType(dart.legacy(element_ref.ElementRef)),
    popupSourceEl: dart.fieldType(dart.legacy(element_ref.ElementRef)),
    type: dart.fieldType(dart.legacy(core.String)),
    multiple: dart.fieldType(dart.legacy(core.bool)),
    [_labelId]: dart.finalFieldType(dart.legacy(core.String)),
    [_leadingText]: dart.fieldType(dart.legacy(core.String)),
    leadingGlyph: dart.fieldType(dart.legacy(core.String)),
    [_trailingText]: dart.fieldType(dart.legacy(core.String)),
    trailingGlyph: dart.fieldType(dart.legacy(core.String)),
    trailingGlyphAriaLabel: dart.fieldType(dart.legacy(core.String)),
    leadingGlyphAriaLabel: dart.fieldType(dart.legacy(core.String)),
    role: dart.fieldType(dart.legacy(core.String)),
    [_rightAlign]: dart.fieldType(dart.legacy(core.bool)),
    inputAriaOwns: dart.fieldType(dart.legacy(core.String)),
    inputAriaActivedescendent: dart.fieldType(dart.legacy(core.String)),
    inputAriaHasPopup: dart.fieldType(dart.legacy(core.String)),
    inputAriaExpanded: dart.fieldType(dart.legacy(core.bool)),
    inputAriaAutocomplete: dart.fieldType(dart.legacy(core.String)),
    inputAriaControls: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(base_material_input, {
    /*base_material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return "material-input-error";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/base_material_input", {
    "package:angular_components/material_input/base_material_input.dart": base_material_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_material_input.dart"],"names":[],"mappings":"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","file":"base_material_input.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__base_material_input: base_material_input
  };
}));

//# sourceMappingURL=base_material_input.unsound.ddc.js.map
