define(['dart_sdk', 'packages/intl/intl', 'packages/angular_forms/src/directives'], (function load__packages__angular_components__material_input__material_number_validators(dart_sdk, packages__intl__intl, packages__angular_forms__src__directives) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const validators = packages__angular_forms__src__directives.src__directives__validators;
  const model = packages__angular_forms__src__directives.src__model;
  var material_number_validators = Object.create(dart.library);
  var ComparableL = () => (ComparableL = dart.constFn(dart.legacy(core.Comparable)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_input/material_number_validators.dart";
  var L1 = "package:angular_components/material_input/material_number_validators.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["_lowerBound", 42]);
    },
    get C1() {
      return C1 = dart.constMap(StringL(), ObjectL(), ["_upperBound", 42]);
    }
  }, false);
  var enabled = dart.privateName(material_number_validators, "PositiveNumValidator.enabled");
  material_number_validators.PositiveNumValidator = class PositiveNumValidator extends core.Object {
    get enabled() {
      return this[enabled];
    }
    set enabled(value) {
      this[enabled] = value;
    }
    validate(control) {
      if (!dart.test(this.enabled) || control.value == null) {
        return null;
      }
      if (!ComparableL().is(control.value)) dart.assertFailed("Value needs to be comparable", L0, 28, 12, "control.value is Comparable");
      if (dart.dtest(dart.dsend(control.value, '<=', [0]))) {
        return new (IdentityMapOfStringL$dynamic()).from(["positive-number", material_number_validators.PositiveNumValidator.numberIsNotPositiveMsg()]);
      }
      return null;
    }
    static numberIsNotPositiveMsg() {
      return intl.Intl.message("Enter a number greater than 0", {desc: "Error message when input number is not positive."});
    }
  };
  (material_number_validators.PositiveNumValidator.new = function() {
    this[enabled] = true;
    ;
  }).prototype = material_number_validators.PositiveNumValidator.prototype;
  dart.addTypeTests(material_number_validators.PositiveNumValidator);
  dart.addTypeCaches(material_number_validators.PositiveNumValidator);
  material_number_validators.PositiveNumValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(material_number_validators.PositiveNumValidator, () => ({
    __proto__: dart.getMethods(material_number_validators.PositiveNumValidator.__proto__),
    validate: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(material_number_validators.PositiveNumValidator, L1);
  dart.setFieldSignature(material_number_validators.PositiveNumValidator, () => ({
    __proto__: dart.getFields(material_number_validators.PositiveNumValidator.__proto__),
    enabled: dart.fieldType(dart.legacy(core.bool))
  }));
  var enabled$ = dart.privateName(material_number_validators, "CheckNonNegativeValidator.enabled");
  material_number_validators.CheckNonNegativeValidator = class CheckNonNegativeValidator extends core.Object {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      this[enabled$] = value;
    }
    validate(control) {
      if (!dart.test(this.enabled) || control.value == null) return null;
      if (!ComparableL().is(control.value)) dart.assertFailed("Value needs to be comparable", L0, 57, 12, "control.value is Comparable");
      if (dart.dtest(dart.dsend(control.value, '<', [0]))) {
        return new (IdentityMapOfStringL$dynamic()).from(["non-negative", material_number_validators.CheckNonNegativeValidator.numberIsNegativeMsg()]);
      }
      return null;
    }
    static numberIsNegativeMsg() {
      return intl.Intl.message("Enter a number that is not negative", {desc: "Error message when input number is not positive or 0."});
    }
  };
  (material_number_validators.CheckNonNegativeValidator.new = function() {
    this[enabled$] = true;
    ;
  }).prototype = material_number_validators.CheckNonNegativeValidator.prototype;
  dart.addTypeTests(material_number_validators.CheckNonNegativeValidator);
  dart.addTypeCaches(material_number_validators.CheckNonNegativeValidator);
  material_number_validators.CheckNonNegativeValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(material_number_validators.CheckNonNegativeValidator, () => ({
    __proto__: dart.getMethods(material_number_validators.CheckNonNegativeValidator.__proto__),
    validate: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(material_number_validators.CheckNonNegativeValidator, L1);
  dart.setFieldSignature(material_number_validators.CheckNonNegativeValidator, () => ({
    __proto__: dart.getFields(material_number_validators.CheckNonNegativeValidator.__proto__),
    enabled: dart.fieldType(dart.legacy(core.bool))
  }));
  var _numberFormat = dart.privateName(material_number_validators, "_numberFormat");
  var C0;
  var lowerBound = dart.privateName(material_number_validators, "LowerBoundValidator.lowerBound");
  material_number_validators.LowerBoundValidator = class LowerBoundValidator extends core.Object {
    get lowerBound() {
      return this[lowerBound];
    }
    set lowerBound(value) {
      this[lowerBound] = value;
    }
    validate(control) {
      if (control.value == null || this.lowerBound == null) return null;
      if (!ComparableL().is(control.value)) dart.assertFailed("Value needs to be Comparable", L0, 90, 12, "control.value is Comparable");
      if (dart.dtest(dart.dsend(control.value, '<', [this.lowerBound]))) {
        let lowerText = this[_numberFormat].format(this.lowerBound);
        return new (IdentityMapOfStringL$dynamic()).from(["lower-bound-number", material_number_validators.LowerBoundValidator.numberIsTooSmallMsg(lowerText)]);
      }
      return null;
    }
    static numberIsTooSmallMsg(_lowerBound) {
      return intl.Intl.message("Enter a number " + dart.str(_lowerBound) + " or greater", {name: "LowerBoundValidator_numberIsTooSmallMsg", args: JSArrayOfObjectL().of([_lowerBound]), desc: "Error message when input number is too small.", examples: C0 || CT.C0});
    }
  };
  (material_number_validators.LowerBoundValidator.new = function(format) {
    let t0;
    this[lowerBound] = null;
    this[_numberFormat] = (t0 = format, t0 == null ? new intl.NumberFormat.decimalPattern() : t0);
    ;
  }).prototype = material_number_validators.LowerBoundValidator.prototype;
  dart.addTypeTests(material_number_validators.LowerBoundValidator);
  dart.addTypeCaches(material_number_validators.LowerBoundValidator);
  material_number_validators.LowerBoundValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(material_number_validators.LowerBoundValidator, () => ({
    __proto__: dart.getMethods(material_number_validators.LowerBoundValidator.__proto__),
    validate: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(material_number_validators.LowerBoundValidator, L1);
  dart.setFieldSignature(material_number_validators.LowerBoundValidator, () => ({
    __proto__: dart.getFields(material_number_validators.LowerBoundValidator.__proto__),
    [_numberFormat]: dart.finalFieldType(dart.legacy(intl.NumberFormat)),
    lowerBound: dart.fieldType(dart.legacy(core.num))
  }));
  var C1;
  var upperBound = dart.privateName(material_number_validators, "UpperBoundValidator.upperBound");
  material_number_validators.UpperBoundValidator = class UpperBoundValidator extends core.Object {
    get upperBound() {
      return this[upperBound];
    }
    set upperBound(value) {
      this[upperBound] = value;
    }
    validate(control) {
      if (control.value == null) return null;
      if (!ComparableL().is(control.value)) dart.assertFailed("Value needs to be Comparable", L0, 127, 12, "control.value is Comparable");
      if (dart.dtest(dart.dsend(control.value, '>', [this.upperBound]))) {
        let upperText = this[_numberFormat].format(this.upperBound);
        return new (IdentityMapOfStringL$dynamic()).from(["upper-bound-number", material_number_validators.UpperBoundValidator.numberIsTooLargeMsg(upperText)]);
      }
      return null;
    }
    static numberIsTooLargeMsg(_upperBound) {
      return intl.Intl.message("Enter a number " + dart.str(_upperBound) + " or smaller", {name: "UpperBoundValidator_numberIsTooLargeMsg", args: JSArrayOfObjectL().of([_upperBound]), desc: "Error message when number input is too large.", examples: C1 || CT.C1});
    }
  };
  (material_number_validators.UpperBoundValidator.new = function(format) {
    let t0;
    this[upperBound] = null;
    this[_numberFormat] = (t0 = format, t0 == null ? new intl.NumberFormat.decimalPattern() : t0);
    ;
  }).prototype = material_number_validators.UpperBoundValidator.prototype;
  dart.addTypeTests(material_number_validators.UpperBoundValidator);
  dart.addTypeCaches(material_number_validators.UpperBoundValidator);
  material_number_validators.UpperBoundValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(material_number_validators.UpperBoundValidator, () => ({
    __proto__: dart.getMethods(material_number_validators.UpperBoundValidator.__proto__),
    validate: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(material_number_validators.UpperBoundValidator, L1);
  dart.setFieldSignature(material_number_validators.UpperBoundValidator, () => ({
    __proto__: dart.getFields(material_number_validators.UpperBoundValidator.__proto__),
    [_numberFormat]: dart.finalFieldType(dart.legacy(intl.NumberFormat)),
    upperBound: dart.fieldType(dart.legacy(core.num))
  }));
  dart.trackLibraries("packages/angular_components/material_input/material_number_validators", {
    "package:angular_components/material_input/material_number_validators.dart": material_number_validators
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_number_validators.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBO;;;;;;aAGyC;AAC5C,qBAAK,iBAAW,AAAQ,AAAM,OAAP,UAAU;AAC/B,cAAO;;AAET,WAAqB,iBAAd,AAAQ,OAAD,2BAAsB;AACpC,qBAAkB,WAAd,AAAQ,OAAD,eAAU;AACnB,cAAO,+DAAkC;;AAE3C,YAAO;IACT;;AAGI,YAAK,mBAAQ,wCACH;IAAmD;;;IAhB5D,gBAAU;;EAiBjB;;;;;;;;;;;;;;;IAcO;;;;;;aAGyC;AAC5C,qBAAK,iBAAW,AAAQ,AAAM,OAAP,UAAU,MAAM,MAAO;AAC9C,WAAqB,iBAAd,AAAQ,OAAD,2BAAsB;AACpC,qBAAkB,WAAd,AAAQ,OAAD,cAAS;AAClB,cAAO,4DAAqC;;AAE9C,YAAO;IACT;;AAGI,YAAK,mBAAQ,8CACH;IAAwD;;;IAdjE,iBAAU;;EAejB;;;;;;;;;;;;;;;;;IAkBM;;;;;;aAG0C;AAC5C,UAAI,AAAQ,AAAM,OAAP,UAAU,QAAQ,AAAW,mBAAG,MAAM,MAAO;AACxD,WAAqB,iBAAd,AAAQ,OAAD,2BAAsB;AACpC,qBAAkB,WAAd,AAAQ,OAAD,cAAS;AACZ,wBAAY,AAAc,2BAAO;AACvC,cAAO,kEAAgC,mEAAoB,SAAS;;AAEtE,YAAO;IACT;+BAEyC;AACrC,YAAK,mBAAQ,AAAwC,6BAAvB,WAAW,0BAC/B,iDACA,uBAAC,WAAW,UACZ;IAC8B;;iEAvBC;;IAKzC;IAJgB,uBAAS,KAAP,MAAM,QAAN,OAAuB;;EAAgB;;;;;;;;;;;;;;;;;IAyCzD;;;;;;aAG0C;AAC5C,UAAI,AAAQ,AAAM,OAAP,UAAU,MAAM,MAAO;AAClC,WAAqB,iBAAd,AAAQ,OAAD,2BAAsB;AACpC,qBAAkB,WAAd,AAAQ,OAAD,cAAS;AACZ,wBAAY,AAAc,2BAAO;AACvC,cAAO,kEAAgC,mEAAoB,SAAS;;AAEtE,YAAO;IACT;+BAEyC;AACrC,YAAK,mBAAQ,AAAwC,6BAAvB,WAAW,0BAC/B,iDACA,uBAAC,WAAW,UACZ;IAC8B;;iEAvBC;;IAKzC;IAJgB,uBAAS,KAAP,MAAM,QAAN,OAAuB;;EAAgB","file":"material_number_validators.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_validators: material_number_validators
  };
}));

//# sourceMappingURL=material_number_validators.unsound.ddc.js.map
