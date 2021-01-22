define(['dart_sdk', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/intl/intl', 'packages/angular_components/material_input/material_input', 'packages/angular_components/utils/angular/properties/properties', 'packages/fixnum/fixnum', 'packages/angular_forms/src/directives', 'packages/quiver/strings', 'packages/angular_components/material_input/material_number_validators'], (function load__packages__angular_components__material_input__material_number_accessor(dart_sdk, packages__angular_components__material_input__material_input_default_value_accessor, packages__intl__intl, packages__angular_components__material_input__material_input, packages__angular_components__utils__angular__properties__properties, packages__fixnum__fixnum, packages__angular_forms__src__directives, packages__quiver__strings, packages__angular_components__material_input__material_number_validators) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const intl = packages__intl__intl.intl;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const fixnum = packages__fixnum__fixnum.fixnum;
  const model = packages__angular_forms__src__directives.src__model;
  const validators = packages__angular_forms__src__directives.src__directives__validators;
  const strings = packages__quiver__strings.strings;
  const material_number_validators = packages__angular_components__material_input__material_number_validators.material_input__material_number_validators;
  var material_number_accessor = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $contains = dartx.contains;
  var $toInt = dartx.toInt;
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var FocusEventLToNull = () => (FocusEventLToNull = dart.constFn(dart.fnType(core.Null, [FocusEventL()])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var ControlL = () => (ControlL = dart.constFn(dart.legacy(model.Control)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var CheckIntegerValidatorL = () => (CheckIntegerValidatorL = dart.constFn(dart.legacy(material_number_accessor.CheckIntegerValidator)))();
  var LowerBoundValidatorL = () => (LowerBoundValidatorL = dart.constFn(dart.legacy(material_number_validators.LowerBoundValidator)))();
  var MaterialInt64ValueAccessorL = () => (MaterialInt64ValueAccessorL = dart.constFn(dart.legacy(material_number_accessor.MaterialInt64ValueAccessor)))();
  var MaterialNumberValueAccessorL = () => (MaterialNumberValueAccessorL = dart.constFn(dart.legacy(material_number_accessor.MaterialNumberValueAccessor)))();
  var MaterialNumberValidatorL = () => (MaterialNumberValidatorL = dart.constFn(dart.legacy(material_number_accessor.MaterialNumberValidator)))();
  var PositiveNumValidatorL = () => (PositiveNumValidatorL = dart.constFn(dart.legacy(material_number_validators.PositiveNumValidator)))();
  var CheckNonNegativeValidatorL = () => (CheckNonNegativeValidatorL = dart.constFn(dart.legacy(material_number_validators.CheckNonNegativeValidator)))();
  var UpperBoundValidatorL = () => (UpperBoundValidatorL = dart.constFn(dart.legacy(material_number_validators.UpperBoundValidator)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_input/material_number_accessor.dart";
  var L1 = "package:angular_components/material_input/material_number_accessor.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.wrapType(CheckIntegerValidatorL());
    },
    get C2() {
      return C2 = dart.wrapType(LowerBoundValidatorL());
    },
    get C3() {
      return C3 = dart.wrapType(MaterialInputComponentL());
    },
    get C4() {
      return C4 = dart.wrapType(MaterialInt64ValueAccessorL());
    },
    get C5() {
      return C5 = dart.wrapType(MaterialNumberValueAccessorL());
    },
    get C6() {
      return C6 = dart.wrapType(MaterialNumberValidatorL());
    },
    get C7() {
      return C7 = dart.wrapType(PositiveNumValidatorL());
    },
    get C8() {
      return C8 = dart.wrapType(CheckNonNegativeValidatorL());
    },
    get C9() {
      return C9 = dart.wrapType(UpperBoundValidatorL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], TypeL());
    }
  }, false);
  var _updateStream = dart.privateName(material_number_accessor, "_updateStream");
  var _numberFormat$ = dart.privateName(material_number_accessor, "_numberFormat");
  const _is_BaseMaterialNumberValueAccessor_default = Symbol('_is_BaseMaterialNumberValueAccessor_default');
  material_number_accessor.BaseMaterialNumberValueAccessor$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    const writeValue = Symbol("writeValue");
    class BaseMaterialNumberValueAccessor extends material_input_default_value_accessor.BaseMaterialInputValueAccessor$(dart.legacy(T)) {
      writeValue(newValue) {
        TL().as(newValue);
        if (newValue == null) super.writeValue(null);
        if (!dart.equals(this.parseNumber(this.input.inputText), newValue)) {
          super.writeValue(newValue);
        }
      }
      registerOnChange(callback) {
        this.disposer.addStreamSubscription(dart.dynamic, this[_updateStream].listen(dart.fn(_ => {
          if (this.input == null) return;
          let rawValue = this.input.inputText;
          let value = this.parseNumber(rawValue);
          callback(value, {rawValue: rawValue});
        }, dynamicToNull())));
      }
      formatValue(value) {
        let t0, t0$;
        TL().as(value);
        if (value == null) return "";
        t0$ = (t0 = this[_numberFormat$], t0 == null ? null : t0.format(value));
        return t0$ == null ? super.formatValue(value) : t0$;
      }
      [writeValue](newValue) {
        return super.writeValue(newValue);
      }
    }
    (BaseMaterialNumberValueAccessor.new = function(input, control, changeUpdate, keypressUpdate, blurFormat, _numberFormat = null) {
      this[_updateStream] = null;
      this[_numberFormat$] = _numberFormat;
      BaseMaterialNumberValueAccessor.__proto__.new.call(this, input, control);
      input.type = "text";
      if (!!(dart.test(changeUpdate) && dart.test(keypressUpdate))) dart.assertFailed("Cannot update both on keypress and change.", L0, 57, 12, "!(changeUpdate && keypressUpdate)");
      if (dart.test(changeUpdate)) {
        this[_updateStream] = input.onChange;
      } else if (dart.test(keypressUpdate)) {
        this[_updateStream] = input.onKeypress;
      } else {
        this[_updateStream] = input.onBlur;
      }
      if (dart.test(blurFormat)) {
        this.disposer.addStreamSubscription(FocusEventL(), input.onBlur.listen(dart.fn(_ => {
          if (input == null) return;
          let parsedNumber = this.parseNumber(input.inputText);
          if (parsedNumber != null) {
            this[writeValue](parsedNumber);
          }
        }, FocusEventLToNull())));
      }
    }).prototype = BaseMaterialNumberValueAccessor.prototype;
    dart.addTypeTests(BaseMaterialNumberValueAccessor);
    BaseMaterialNumberValueAccessor.prototype[_is_BaseMaterialNumberValueAccessor_default] = true;
    dart.addTypeCaches(BaseMaterialNumberValueAccessor);
    dart.setMethodSignature(BaseMaterialNumberValueAccessor, () => ({
      __proto__: dart.getMethods(BaseMaterialNumberValueAccessor.__proto__),
      registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(T)], {rawValue: dart.legacy(core.String)}, {}))])
    }));
    dart.setLibraryUri(BaseMaterialNumberValueAccessor, L1);
    dart.setFieldSignature(BaseMaterialNumberValueAccessor, () => ({
      __proto__: dart.getFields(BaseMaterialNumberValueAccessor.__proto__),
      [_numberFormat$]: dart.finalFieldType(dart.legacy(intl.NumberFormat)),
      [_updateStream]: dart.fieldType(dart.legacy(async.Stream))
    }));
    return BaseMaterialNumberValueAccessor;
  });
  material_number_accessor.BaseMaterialNumberValueAccessor = material_number_accessor.BaseMaterialNumberValueAccessor$();
  dart.addTypeTests(material_number_accessor.BaseMaterialNumberValueAccessor, _is_BaseMaterialNumberValueAccessor_default);
  var _checkValues = dart.privateName(material_number_accessor, "_checkValues");
  material_number_accessor.MaterialInt64ValueAccessor = class MaterialInt64ValueAccessor extends material_number_accessor.BaseMaterialNumberValueAccessor$(dart.legacy(fixnum.Int64)) {
    [_checkValues](numberFormat, blurFormat) {
      if (numberFormat != null) {
        core.print("Warning: numberFormat only works with num and will overflow " + "if the number is larger than a native int, even when using " + "material-input[type=int64].");
        return blurFormat;
      }
      return true;
    }
    parseNumber(input) {
      if (input == null || input[$isEmpty]) {
        return null;
      }
      try {
        if (this[_numberFormat$] != null) {
          input = dart.toString(this[_numberFormat$].parse(input));
        }
        return fixnum.Int64.parseInt(input);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (FormatExceptionL().is(ex)) {
          return null;
        } else
          throw e;
      }
    }
  };
  (material_number_accessor.MaterialInt64ValueAccessor.new = function(input, control, changeUpdateAttr, keypressUpdateAttr, checkInteger, blurFormat, numberFormat) {
    material_number_accessor.MaterialInt64ValueAccessor.__proto__.new.call(this, MaterialInputComponentL().as(input), control, properties.attributeToBool(changeUpdateAttr, {defaultValue: false}), properties.attributeToBool(keypressUpdateAttr, {defaultValue: false}), properties.attributeToBool(blurFormat, {defaultValue: false}), numberFormat);
    if (!dart.test(this[_checkValues](numberFormat, properties.attributeToBool(blurFormat, {defaultValue: false})))) dart.assertFailed("You must supply a NumberFormat if using blurFormat", L0, 147, 9, "_checkValues(\n            numberFormat, attributeToBool(blurFormat, defaultValue: false))");
  }).prototype = material_number_accessor.MaterialInt64ValueAccessor.prototype;
  dart.addTypeTests(material_number_accessor.MaterialInt64ValueAccessor);
  dart.addTypeCaches(material_number_accessor.MaterialInt64ValueAccessor);
  dart.setMethodSignature(material_number_accessor.MaterialInt64ValueAccessor, () => ({
    __proto__: dart.getMethods(material_number_accessor.MaterialInt64ValueAccessor.__proto__),
    [_checkValues]: dart.fnType(dart.legacy(core.bool), [dart.legacy(intl.NumberFormat), dart.legacy(core.bool)]),
    parseNumber: dart.fnType(dart.legacy(fixnum.Int64), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(material_number_accessor.MaterialInt64ValueAccessor, L1);
  var _checkInteger = dart.privateName(material_number_accessor, "_checkInteger");
  material_number_accessor.MaterialNumberValueAccessor = class MaterialNumberValueAccessor extends material_number_accessor.BaseMaterialNumberValueAccessor$(dart.legacy(core.num)) {
    parseNumber(input) {
      if (input == null || input === "NaN") return null;
      try {
        if (dart.test(this[_checkInteger]) && input[$contains](this[_numberFormat$].symbols.DECIMAL_SEP)) {
          return null;
        }
        let value = this[_numberFormat$].parse(input);
        return dart.test(this[_checkInteger]) ? value[$toInt]() : value;
      } catch (e) {
        let ex = dart.getThrown(e);
        if (FormatExceptionL().is(ex)) {
          return null;
        } else
          throw e;
      }
    }
  };
  (material_number_accessor.MaterialNumberValueAccessor.new = function(input, control, changeUpdateAttr, keypressUpdateAttr, checkInteger, blurFormat, numberFormat) {
    let t2;
    this[_checkInteger] = properties.attributeToBool(checkInteger, {defaultValue: false});
    material_number_accessor.MaterialNumberValueAccessor.__proto__.new.call(this, MaterialInputComponentL().as(input), control, properties.attributeToBool(changeUpdateAttr, {defaultValue: false}), properties.attributeToBool(keypressUpdateAttr, {defaultValue: false}), properties.attributeToBool(blurFormat, {defaultValue: false}), (t2 = numberFormat, t2 == null ? new intl.NumberFormat.decimalPattern() : t2));
    ;
  }).prototype = material_number_accessor.MaterialNumberValueAccessor.prototype;
  dart.addTypeTests(material_number_accessor.MaterialNumberValueAccessor);
  dart.addTypeCaches(material_number_accessor.MaterialNumberValueAccessor);
  dart.setMethodSignature(material_number_accessor.MaterialNumberValueAccessor, () => ({
    __proto__: dart.getMethods(material_number_accessor.MaterialNumberValueAccessor.__proto__),
    parseNumber: dart.fnType(dart.legacy(core.num), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(material_number_accessor.MaterialNumberValueAccessor, L1);
  dart.setFieldSignature(material_number_accessor.MaterialNumberValueAccessor, () => ({
    __proto__: dart.getFields(material_number_accessor.MaterialNumberValueAccessor.__proto__),
    [_checkInteger]: dart.finalFieldType(dart.legacy(core.bool))
  }));
  material_number_accessor.MaterialNumberValidator = class MaterialNumberValidator extends core.Object {
    validate(control) {
      if (!ControlL().is(control)) dart.assertFailed(null, L0, 245, 12, "control is Control");
      if (control.value == null && !dart.test(strings.isEmpty(ControlL().as(control).rawValue))) {
        return new (IdentityMapOfStringL$dynamic()).from(["material-input-number-error", material_number_accessor.MaterialNumberValidator.inputIsNotNumberMsg()]);
      }
      return null;
    }
    static inputIsNotNumberMsg() {
      return intl.Intl.message("Enter a number", {desc: "Error message when input is not a number.", meaning: "Error message when input is not a number."});
    }
  };
  (material_number_accessor.MaterialNumberValidator.new = function() {
    ;
  }).prototype = material_number_accessor.MaterialNumberValidator.prototype;
  dart.addTypeTests(material_number_accessor.MaterialNumberValidator);
  dart.addTypeCaches(material_number_accessor.MaterialNumberValidator);
  material_number_accessor.MaterialNumberValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(material_number_accessor.MaterialNumberValidator, () => ({
    __proto__: dart.getMethods(material_number_accessor.MaterialNumberValidator.__proto__),
    validate: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(material_number_accessor.MaterialNumberValidator, L1);
  material_number_accessor.CheckIntegerValidator = class CheckIntegerValidator extends core.Object {
    validate(abstractControl) {
      if (!ControlL().is(abstractControl)) dart.assertFailed("Can only be used with a Control", L0, 271, 12, "abstractControl is Control");
      let control = ControlL().as(abstractControl);
      if (control.value == null && !dart.test(strings.isBlank(control.rawValue))) {
        return new (IdentityMapOfStringL$dynamic()).from(["check-integer", material_number_accessor.CheckIntegerValidator.numberIsNotIntegerMsg()]);
      }
      return null;
    }
    static numberIsNotIntegerMsg() {
      return intl.Intl.message("Enter a whole number", {desc: "Error message when input number is not an integer.", meaning: "Error message when input number is not an integer."});
    }
  };
  (material_number_accessor.CheckIntegerValidator.new = function() {
    ;
  }).prototype = material_number_accessor.CheckIntegerValidator.prototype;
  dart.addTypeTests(material_number_accessor.CheckIntegerValidator);
  dart.addTypeCaches(material_number_accessor.CheckIntegerValidator);
  material_number_accessor.CheckIntegerValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(material_number_accessor.CheckIntegerValidator, () => ({
    __proto__: dart.getMethods(material_number_accessor.CheckIntegerValidator.__proto__),
    validate: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(material_number_accessor.CheckIntegerValidator, L1);
  material_number_accessor.DecimalNumberFormatDirective = class DecimalNumberFormatDirective extends core.Object {};
  (material_number_accessor.DecimalNumberFormatDirective.new = function() {
    ;
  }).prototype = material_number_accessor.DecimalNumberFormatDirective.prototype;
  dart.addTypeTests(material_number_accessor.DecimalNumberFormatDirective);
  dart.addTypeCaches(material_number_accessor.DecimalNumberFormatDirective);
  dart.setLibraryUri(material_number_accessor.DecimalNumberFormatDirective, L1);
  material_number_accessor.decimalNumberFormat = function decimalNumberFormat() {
    return new intl.NumberFormat.decimalPattern();
  };
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C0;
  dart.defineLazy(material_number_accessor, {
    /*material_number_accessor.materialNumberInputDirectives*/get materialNumberInputDirectives() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_number_accessor", {
    "package:angular_components/material_input/material_number_accessor.dart": material_number_accessor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_number_accessor.dart"],"names":[],"mappings":"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","file":"material_number_accessor.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_accessor: material_number_accessor
  };
}));

//# sourceMappingURL=material_number_accessor.unsound.ddc.js.map
