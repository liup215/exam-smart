define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__typed(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var typed = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/typed.dart";
  const _is_Typed_default = Symbol('_is_Typed_default');
  var on$ = dart.privateName(typed, "Typed.on");
  var typeArguments$ = dart.privateName(typed, "Typed.typeArguments");
  typed.Typed$ = dart.generic(T => {
    class Typed extends core.Object {
      get on() {
        return this[on$];
      }
      set on(value) {
        super.on = value;
      }
      get typeArguments() {
        return this[typeArguments$];
      }
      set typeArguments(value) {
        super.typeArguments = value;
      }
    }
    (Typed.new = function(opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[on$] = on;
      this[typeArguments$] = null;
      ;
    }).prototype = Typed.prototype;
    (Typed.of = function(typeArguments, opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[typeArguments$] = typeArguments;
      this[on$] = on;
      ;
    }).prototype = Typed.prototype;
    dart.addTypeTests(Typed);
    Typed.prototype[_is_Typed_default] = true;
    dart.addTypeCaches(Typed);
    dart.setLibraryUri(Typed, L0);
    dart.setFieldSignature(Typed, () => ({
      __proto__: dart.getFields(Typed.__proto__),
      on: dart.finalFieldType(dart.legacy(core.String)),
      typeArguments: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
    }));
    return Typed;
  });
  typed.Typed = typed.Typed$();
  dart.addTypeTests(typed.Typed, _is_Typed_default);
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/typed", {
    "package:angular_compiler/v1/src/metadata/typed.dart": typed
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAqDe;;;;;;MAYM;;;;;;;;UAyBD;;MAAqB,uBAAE;;IAAI;yBAiCzB;UAAqB;MAArB;MAAqB;;IAAI","file":"typed.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__typed: typed
  };
}));

//# sourceMappingURL=typed.unsound.ddc.js.map
