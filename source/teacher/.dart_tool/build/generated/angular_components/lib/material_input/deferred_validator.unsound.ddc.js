define(['dart_sdk', 'packages/angular_forms/src/directives'], (function load__packages__angular_components__material_input__deferred_validator(dart_sdk, packages__angular_forms__src__directives) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model = packages__angular_forms__src__directives.src__model;
  const validators = packages__angular_forms__src__directives.src__validators;
  var deferred_validator = Object.create(dart.library);
  var $contains = dartx.contains;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $length = dartx.length;
  var $single = dartx.single;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var AbstractControlL = () => (AbstractControlL = dart.constFn(dart.legacy(model.AbstractControl)))();
  var AbstractControlLToMapLOfStringL$dynamic = () => (AbstractControlLToMapLOfStringL$dynamic = dart.constFn(dart.fnType(MapLOfStringL$dynamic(), [AbstractControlL()])))();
  var AbstractControlLToLMapLOfStringL$dynamic = () => (AbstractControlLToLMapLOfStringL$dynamic = dart.constFn(dart.legacy(AbstractControlLToMapLOfStringL$dynamic())))();
  var JSArrayOfAbstractControlLToLMapLOfStringL$dynamic = () => (JSArrayOfAbstractControlLToLMapLOfStringL$dynamic = dart.constFn(_interceptors.JSArray$(AbstractControlLToLMapLOfStringL$dynamic())))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_input/deferred_validator.dart";
  var L1 = "package:angular_components/material_input/deferred_validator.dart";
  var _delegates = dart.privateName(deferred_validator, "_delegates");
  var _validator = dart.privateName(deferred_validator, "_validator");
  deferred_validator.DeferredValidator = class DeferredValidator extends core.Object {
    add(validation) {
      if (!!dart.test(this[_delegates][$contains](validation))) dart.assertFailed(null, L0, 25, 12, "!_delegates.contains(validation)");
      this[_delegates][$add](validation);
      this[_validator] = null;
    }
    remove(validation) {
      if (!dart.test(this[_delegates][$contains](validation))) dart.assertFailed(null, L0, 31, 12, "_delegates.contains(validation)");
      this[_delegates][$remove](validation);
      this[_validator] = null;
    }
    call(control) {
      let t0;
      if (this[_validator] == null) {
        let numDelegates = this[_delegates][$length];
        if (numDelegates === 0) return null;
        this[_validator] = dart.notNull(numDelegates) > 1 ? validators.Validators.compose(this[_delegates]) : this[_delegates][$single];
      }
      t0 = control;
      return this[_validator](t0);
    }
  };
  (deferred_validator.DeferredValidator.new = function() {
    this[_delegates] = JSArrayOfAbstractControlLToLMapLOfStringL$dynamic().of([]);
    this[_validator] = null;
    ;
  }).prototype = deferred_validator.DeferredValidator.prototype;
  dart.addTypeTests(deferred_validator.DeferredValidator);
  dart.addTypeCaches(deferred_validator.DeferredValidator);
  dart.setMethodSignature(deferred_validator.DeferredValidator, () => ({
    __proto__: dart.getMethods(deferred_validator.DeferredValidator.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)]))]),
    remove: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)]))]),
    call: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])
  }));
  dart.setLibraryUri(deferred_validator.DeferredValidator, L1);
  dart.setFieldSignature(deferred_validator.DeferredValidator, () => ({
    __proto__: dart.getFields(deferred_validator.DeferredValidator.__proto__),
    [_delegates]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)]))))),
    [_validator]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(model.AbstractControl)])))
  }));
  dart.trackLibraries("packages/angular_components/material_input/deferred_validator", {
    "package:angular_components/material_input/deferred_validator.dart": deferred_validator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["deferred_validator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;QAsBwB;AAEpB,WAAO,WAAC,AAAW,4BAAS,UAAU;AACZ,MAA1B,AAAW,uBAAI,UAAU;AACR,MAAjB,mBAAa;IACf;WAEyB;AACvB,qBAAO,AAAW,4BAAS,UAAU;AACR,MAA7B,AAAW,0BAAO,UAAU;AACX,MAAjB,mBAAa;IACf;SAE0C;;AACxC,UAAI,AAAW,oBAAG;AACV,2BAAe,AAAW;AAChC,YAAI,AAAa,YAAD,KAAI,GAAG,MAAO;AAK2C,QADzE,mBACiB,aAAb,YAAY,IAAG,IAAe,8BAAQ,oBAAc,AAAW;;AAErE,WAAkB,OAAO;YAAlB,AAAU;IACnB;;;IA3ByB,mBAA2B;IACvC;;EA2Bf","file":"deferred_validator.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__deferred_validator: deferred_validator
  };
}));

//# sourceMappingURL=deferred_validator.unsound.ddc.js.map
