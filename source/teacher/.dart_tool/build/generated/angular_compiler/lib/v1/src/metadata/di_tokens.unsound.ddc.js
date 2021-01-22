define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/runtime_shim'], (function load__packages__angular_compiler__v1__src__metadata__di_tokens(dart_sdk, packages__angular_compiler__v1__src__metadata__runtime_shim) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const runtime_shim = packages__angular_compiler__v1__src__metadata__runtime_shim.v1__src__metadata__runtime_shim;
  var di_tokens = Object.create(dart.library);
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/di_tokens.dart";
  var _uniqueName = dart.privateName(di_tokens, "_uniqueName");
  const _is_OpaqueToken_default = Symbol('_is_OpaqueToken_default');
  var _uniqueName$ = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  di_tokens.OpaqueToken$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class OpaqueToken extends core.Object {
      get [_uniqueName]() {
        return this[_uniqueName$];
      }
      set [_uniqueName](value) {
        super[_uniqueName] = value;
      }
      toString() {
        if (dart.test(runtime_shim.isDevMode)) {
          return "OpaqueToken<" + dart.str(dart.wrapType(TL())) + ">('" + dart.str(this[_uniqueName]) + "')";
        }
        return super[$toString]();
      }
    }
    (OpaqueToken.new = function(_uniqueName = "") {
      this[_uniqueName$] = _uniqueName;
      ;
    }).prototype = OpaqueToken.prototype;
    dart.addTypeTests(OpaqueToken);
    OpaqueToken.prototype[_is_OpaqueToken_default] = true;
    dart.addTypeCaches(OpaqueToken);
    dart.setMethodSignature(OpaqueToken, () => ({
      __proto__: dart.getMethods(OpaqueToken.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setLibraryUri(OpaqueToken, L0);
    dart.setFieldSignature(OpaqueToken, () => ({
      __proto__: dart.getFields(OpaqueToken.__proto__),
      [_uniqueName]: dart.finalFieldType(dart.legacy(core.String))
    }));
    dart.defineExtensionMethods(OpaqueToken, ['toString']);
    return OpaqueToken;
  });
  di_tokens.OpaqueToken = di_tokens.OpaqueToken$();
  dart.addTypeTests(di_tokens.OpaqueToken, _is_OpaqueToken_default);
  var _listOf = dart.privateName(di_tokens, "_listOf");
  const _is_MultiToken_default = Symbol('_is_MultiToken_default');
  di_tokens.MultiToken$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    class MultiToken extends di_tokens.OpaqueToken$(dart.legacy(core.List$(dart.legacy(T)))) {
      [_listOf]() {
        return JSArrayOfTL().of([]);
      }
      toString() {
        if (dart.test(runtime_shim.isDevMode)) {
          return "MultiToken (" + dart.str(super.toString()) + ") <" + dart.str(dart.wrapType(TL())) + ">('" + dart.str(this[_uniqueName]) + "')";
        }
        return super.toString();
      }
    }
    (MultiToken.new = function(uniqueName = "") {
      MultiToken.__proto__.new.call(this, uniqueName);
      ;
    }).prototype = MultiToken.prototype;
    dart.addTypeTests(MultiToken);
    MultiToken.prototype[_is_MultiToken_default] = true;
    dart.addTypeCaches(MultiToken);
    dart.setMethodSignature(MultiToken, () => ({
      __proto__: dart.getMethods(MultiToken.__proto__),
      [_listOf]: dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [])
    }));
    dart.setLibraryUri(MultiToken, L0);
    dart.defineExtensionMethods(MultiToken, ['toString']);
    return MultiToken;
  });
  di_tokens.MultiToken = di_tokens.MultiToken$();
  dart.addTypeTests(di_tokens.MultiToken, _is_MultiToken_default);
  di_tokens.listOfMultiToken = function listOfMultiToken(T, token) {
    return token[_listOf]();
  };
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/di_tokens", {
    "package:angular_compiler/v1/src/metadata/di_tokens.dart": di_tokens
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["di_tokens.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MA+Ce;;;;;;;AAMX,sBAAI;AACF,gBAAO,AAAiC,2BAAnB,uBAAC,iBAAI,qBAAW;;AAEvC,cAAa;MACf;;;MARwB;;IAAkB;;;;;;;;;;;;;;;;;;;;;;;;;;AAyErB,cAAG;MAAE;;AAIxB,sBAAI;AACF,gBAAO,AAAuD,2BAAlC,oBAAW,iBAAI,uBAAC,iBAAI,qBAAW;;AAE7D,cAAa;MACf;;+BAXyB;AAAoB,0CAAM,UAAU;;IAAC;;;;;;;;;;;;;;4DAetB;AAAU,UAAA,AAAM,MAAD;EAAU","file":"di_tokens.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__di_tokens: di_tokens
  };
}));

//# sourceMappingURL=di_tokens.unsound.ddc.js.map
