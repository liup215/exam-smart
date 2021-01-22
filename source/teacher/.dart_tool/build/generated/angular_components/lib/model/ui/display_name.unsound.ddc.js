define(['dart_sdk', 'packages/quiver/core'], (function load__packages__angular_components__model__ui__display_name(dart_sdk, packages__quiver__core) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__core.src__core__hash;
  var display_name = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var LabeledValueL = () => (LabeledValueL = dart.constFn(dart.legacy(display_name.LabeledValue)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/display_name.dart";
  display_name.HasUIDisplayName = class HasUIDisplayName extends core.Object {};
  (display_name.HasUIDisplayName.new = function() {
    ;
  }).prototype = display_name.HasUIDisplayName.prototype;
  dart.addTypeTests(display_name.HasUIDisplayName);
  dart.addTypeCaches(display_name.HasUIDisplayName);
  dart.setLibraryUri(display_name.HasUIDisplayName, L0);
  const _is_LabeledValue_default = Symbol('_is_LabeledValue_default');
  var value$ = dart.privateName(display_name, "LabeledValue.value");
  var uiDisplayName$ = dart.privateName(display_name, "LabeledValue.uiDisplayName");
  display_name.LabeledValue$ = dart.generic(T => {
    class LabeledValue extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get uiDisplayName() {
        return this[uiDisplayName$];
      }
      set uiDisplayName(value) {
        super.uiDisplayName = value;
      }
      static format(value, formatter) {
        return new (display_name.LabeledValue$(dart.legacy(T))).new(value, formatter.format(value));
      }
      toString() {
        return this.uiDisplayName;
      }
      get hashCode() {
        return hash.hash2(dart.hashCode(this.value), dart.hashCode(this.uiDisplayName));
      }
      _equals(o) {
        if (o == null) return false;
        return LabeledValueL().is(o) && o.uiDisplayName == this.uiDisplayName && dart.equals(o.value, this.value);
      }
    }
    (LabeledValue.new = function(value, uiDisplayName) {
      this[value$] = value;
      this[uiDisplayName$] = uiDisplayName;
      ;
    }).prototype = LabeledValue.prototype;
    dart.addTypeTests(LabeledValue);
    LabeledValue.prototype[_is_LabeledValue_default] = true;
    dart.addTypeCaches(LabeledValue);
    LabeledValue[dart.implements] = () => [display_name.HasUIDisplayName];
    dart.setMethodSignature(LabeledValue, () => ({
      __proto__: dart.getMethods(LabeledValue.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setGetterSignature(LabeledValue, () => ({
      __proto__: dart.getGetters(LabeledValue.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(LabeledValue, L0);
    dart.setFieldSignature(LabeledValue, () => ({
      __proto__: dart.getFields(LabeledValue.__proto__),
      value: dart.finalFieldType(dart.legacy(T)),
      uiDisplayName: dart.finalFieldType(dart.legacy(core.String))
    }));
    dart.defineExtensionMethods(LabeledValue, ['toString', '_equals']);
    dart.defineExtensionAccessors(LabeledValue, ['hashCode']);
    return LabeledValue;
  });
  display_name.LabeledValue = display_name.LabeledValue$();
  dart.addTypeTests(display_name.LabeledValue, _is_LabeledValue_default);
  dart.trackLibraries("packages/angular_components/model/ui/display_name", {
    "package:angular_components/model/ui/display_name.dart": display_name
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["display_name.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;EAUA;;;;;;;;;MAMU;;;;;;MAGK;;;;;;oBAMiB,OAAiB;AAC3C,oEAAa,KAAK,EAAE,AAAU,SAAD,QAAQ,KAAK;MAAE;;AAG3B;MAAa;;AAGd,0BAAY,cAAN,aAA8B,cAAd;MAAuB;;YAGhD;AACb,cAAE,AAAoD,oBAAtD,CAAC,KAAoB,AAAE,AAAc,CAAf,kBAAkB,sBAAyB,YAAR,AAAE,CAAD,QAAU;MAAK;;iCAfrD,OAAY;MAAZ;MAAY;;IAAc","file":"display_name.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__display_name: display_name
  };
}));

//# sourceMappingURL=display_name.unsound.ddc.js.map
