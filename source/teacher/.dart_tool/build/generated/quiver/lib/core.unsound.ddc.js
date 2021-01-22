define(['dart_sdk'], (function load__packages__quiver__core(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hash = Object.create(dart.library);
  var optional = Object.create(dart.library);
  var core$ = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $fold = dartx.fold;
  var $rightShift = dartx['>>'];
  var $iterator = dartx.iterator;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLAnddynamicTointL = () => (intLAnddynamicTointL = dart.constFn(dart.fnType(intL(), [intL(), dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:quiver/src/core/optional.dart";
  hash.hashObjects = function hashObjects(objects) {
    return hash._finish(objects[$fold](intL(), 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), intLAnddynamicTointL())));
  };
  hash.hash2 = function hash2(a, b) {
    return hash._finish(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  hash.hash3 = function hash3(a, b, c) {
    return hash._finish(hash._combine(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)));
  };
  hash.hash4 = function hash4(a, b, c, d) {
    return hash._finish(hash._combine(hash._combine(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)), dart.hashCode(d)));
  };
  hash._combine = function _combine(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  var _value = dart.privateName(optional, "_value");
  const _is_Optional_default = Symbol('_is_Optional_default');
  var _value$ = dart.privateName(optional, "Optional._value");
  optional.Optional$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    var EmptyIterableOfTL = () => (EmptyIterableOfTL = dart.constFn(_internal.EmptyIterable$(TL())))();
    var OptionalOfTL = () => (OptionalOfTL = dart.constFn(optional.Optional$(TL())))();
    var OptionalLOfTL = () => (OptionalLOfTL = dart.constFn(dart.legacy(OptionalOfTL())))();
    class Optional extends collection.IterableBase$(dart.legacy(T)) {
      get [_value]() {
        return this[_value$];
      }
      set [_value](value) {
        super[_value] = value;
      }
      get isPresent() {
        return this[_value] != null;
      }
      get isNotPresent() {
        return this[_value] == null;
      }
      get value() {
        if (this[_value] == null) {
          dart.throw(new core.StateError.new("value called on absent Optional."));
        }
        return this[_value];
      }
      ifPresent(ifPresent) {
        if (dart.test(this.isPresent)) {
          ifPresent(this[_value]);
        }
      }
      ifAbsent(ifAbsent) {
        if (!dart.test(this.isPresent)) {
          ifAbsent();
        }
      }
      or(defaultValue) {
        let t0;
        TL().as(defaultValue);
        if (defaultValue == null) {
          dart.throw(new core.ArgumentError.new("defaultValue must not be null."));
        }
        t0 = this[_value];
        return t0 == null ? defaultValue : t0;
      }
      get orNull() {
        return this[_value];
      }
      transform(S, transformer) {
        return this[_value] == null ? new (optional.Optional$(dart.legacy(S))).absent() : new (optional.Optional$(dart.legacy(S))).of(transformer(this[_value]));
      }
      transformNullable(S, transformer) {
        return this[_value] == null ? new (optional.Optional$(dart.legacy(S))).absent() : new (optional.Optional$(dart.legacy(S))).fromNullable(transformer(this[_value]));
      }
      get iterator() {
        return dart.test(this.isPresent) ? JSArrayOfTL().of([this[_value]])[$iterator] : new (EmptyIterableOfTL()).new()[$iterator];
      }
      get hashCode() {
        return dart.hashCode(this[_value]);
      }
      _equals(o) {
        if (o == null) return false;
        return OptionalLOfTL().is(o) && dart.equals(o[_value], this[_value]);
      }
      toString() {
        return this[_value] == null ? "Optional { absent }" : "Optional { value: " + dart.str(this[_value]) + " }";
      }
    }
    (Optional.absent = function() {
      this[_value$] = null;
      Optional.__proto__.new.call(this);
      ;
    }).prototype = Optional.prototype;
    (Optional.of = function(value) {
      this[_value$] = value;
      Optional.__proto__.new.call(this);
      if (this[_value] == null) dart.throw(new core.ArgumentError.new("Must not be null."));
    }).prototype = Optional.prototype;
    (Optional.fromNullable = function(value) {
      this[_value$] = value;
      Optional.__proto__.new.call(this);
      ;
    }).prototype = Optional.prototype;
    dart.addTypeTests(Optional);
    Optional.prototype[_is_Optional_default] = true;
    dart.addTypeCaches(Optional);
    dart.setMethodSignature(Optional, () => ({
      __proto__: dart.getMethods(Optional.__proto__),
      ifPresent: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))]),
      ifAbsent: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
      or: dart.fnType(dart.legacy(T), [dart.legacy(core.Object)]),
      transform: dart.gFnType(S => [dart.legacy(optional.Optional$(dart.legacy(S))), [dart.legacy(dart.fnType(dart.legacy(S), [dart.legacy(T)]))]]),
      transformNullable: dart.gFnType(S => [dart.legacy(optional.Optional$(dart.legacy(S))), [dart.legacy(dart.fnType(dart.legacy(S), [dart.legacy(T)]))]]),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(Optional, () => ({
      __proto__: dart.getGetters(Optional.__proto__),
      isPresent: dart.legacy(core.bool),
      isNotPresent: dart.legacy(core.bool),
      value: dart.legacy(T),
      orNull: dart.legacy(T),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T))),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Optional, L0);
    dart.setFieldSignature(Optional, () => ({
      __proto__: dart.getFields(Optional.__proto__),
      [_value]: dart.finalFieldType(dart.legacy(T))
    }));
    dart.defineExtensionMethods(Optional, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Optional, ['iterator', 'hashCode']);
    return Optional;
  });
  optional.Optional = optional.Optional$();
  dart.addTypeTests(optional.Optional, _is_Optional_default);
  core$.firstNonNull = function firstNonNull(o1, o2, o3 = null, o4 = null) {
    if (o1 != null) return o1;
    if (o2 != null) return o2;
    if (o3 != null) return o3;
    if (o4 != null) return o4;
    dart.throw(new core.ArgumentError.new("All arguments were null"));
  };
  dart.trackLibraries("packages/quiver/core", {
    "package:quiver/src/core/hash.dart": hash,
    "package:quiver/src/core/optional.dart": optional,
    "package:quiver/core.dart": core$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/core/hash.dart","src/core/optional.dart","core.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;0CAeyB;AACrB,wBAAQ,AAAQ,OAAD,gBAAM,GAAG,SAAC,GAAG,MAAM,cAAS,CAAC,EAAI,cAAF,CAAC;EAAY;8BAGrD,GAAG;AAAM,wBAAQ,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;8BAG/D,GAAG,GAAG;AAAM,wBAClB,cAAS,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC;EAAW;8BAG9D,GAAG,GAAG,GAAG;AAAM,wBAAQ,cAC7B,cAAS,cAAS,cAAS,GAAK,cAAF,CAAC,IAAc,cAAF,CAAC,IAAc,cAAF,CAAC,IACvD,cAAF,CAAC;EAAW;oCAIC,MAAU;AACS,IAAlC,OAAO,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACuB,IAAxD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAY,eAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;kCAEgB;AACyC,IAAvD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AAC1B,IAA1B,OAAY,cAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD;;;;;;;;;;;MCLU;;;;;;;AAGc,cAAA,AAAO,iBAAG;MAAI;;AAGX,cAAA,AAAO,iBAAG;MAAI;;AAMrC,YAAI,AAAO,gBAAG;AACwC,UAApD,WAAM,wBAAW;;AAEnB,cAAO;MACT;gBAGoB;AAClB,sBAAI;AACe,UAAjB,AAAS,SAAA,CAAC;;MAEd;eAGmB;AACjB,uBAAK;AACO,UAAV,AAAQ,QAAA;;MAEZ;SAOO;;;AACL,YAAI,AAAa,YAAD,IAAI;AACmC,UAArD,WAAM,2BAAc;;AAEtB,aAAO;4BAAU,YAAY;MAC/B;;AAGgB;MAAM;mBAOK;AACzB,cAAO,AAAO,iBAAG,OACX,oDACA,4CAAe,AAAW,WAAA,CAAC;MACnC;2BAOmC;AACjC,cAAO,AAAO,iBAAG,OACX,oDACA,sDAAyB,AAAW,WAAA,CAAC;MAC7C;;AAII,2CAAe,AAAS,kBAAR,4BAAmB,AAAoB;MAAQ;;AAI/C,cAAO,eAAP;MAAe;;YAIlB;AAAM,cAAE,AAAe,oBAAjB,CAAC,KAA4B,YAAT,AAAE,CAAD,UAAW;MAAM;;AAI3D,cAAO,AAAO,iBAAG,OACX,wBACA,AAA6B,gCAAT,gBAAM;MAClC;;;MApGiC,gBAAE;AAA7B;;IAAiC;4BAKzB;MAAgB,gBAAE,KAAK;AAArC;AACE,UAAI,AAAO,gBAAG,MAAM,AAAwC,WAAlC,2BAAc;IAC1C;sCAK8B;MAAgB,gBAAE,KAAK;AAA/C;;IAA+C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6CCLlC,IAAI,IAAK,WAAI;AAEhC,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACzB,QAAI,EAAE,IAAI,MAAM,MAAO,GAAE;AACqB,IAA9C,WAAM,2BAAc;EACtB","file":"core.unsound.ddc.js"}');
  // Exports:
  return {
    src__core__hash: hash,
    src__core__optional: optional,
    core: core$
  };
}));

//# sourceMappingURL=core.unsound.ddc.js.map
