define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/collection/src/comparators', 'packages/logging/logging', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_compiler/v1/src/metadata', 'packages/stack_trace/src/chain'], (function load__packages__angular__src__core__change_detection__pipe_transform(dart_sdk, packages__angular_compiler__v1__src__metadata__di_tokens, packages__collection__src__comparators, packages__logging__logging, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_compiler__v1__src__metadata, packages__stack_trace__src__chain) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const equality = packages__collection__src__comparators.src__equality;
  const logger = packages__logging__logging.src__logger;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  const chain = packages__stack_trace__src__chain.src__chain;
  const trace = packages__stack_trace__src__chain.src__trace;
  var hierarchical = Object.create(dart.library);
  var injector = Object.create(dart.library);
  var map = Object.create(dart.library);
  var empty = Object.create(dart.library);
  var errors = Object.create(dart.library);
  var runtime = Object.create(dart.library);
  var optimizations = Object.create(dart.library);
  var check_binding = Object.create(dart.library);
  var messages = Object.create(dart.library);
  var messages$ = Object.create(dart.library);
  var exception_handler = Object.create(dart.library);
  var runtime$ = Object.create(dart.library);
  var reflector = Object.create(dart.library);
  var pipe_transform = Object.create(dart.library);
  var di = Object.create(dart.library);
  var ng_zone = Object.create(dart.library);
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $isEmpty = dartx.isEmpty;
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $values = dartx.values;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $remove = dartx.remove;
  var InjectorL = () => (InjectorL = dart.constFn(dart.legacy(injector.Injector)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var IterableEqualityOfObjectL = () => (IterableEqualityOfObjectL = dart.constFn(equality.IterableEquality$(ObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var HierarchicalInjectorL = () => (HierarchicalInjectorL = dart.constFn(dart.legacy(hierarchical.HierarchicalInjector)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(di_providers.Provider)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  var ProviderOfvoid = () => (ProviderOfvoid = dart.constFn(di_providers.Provider$(dart.void)))();
  var ProviderLOfvoid = () => (ProviderLOfvoid = dart.constFn(dart.legacy(ProviderOfvoid())))();
  var JSArrayOfProviderLOfvoid = () => (JSArrayOfProviderLOfvoid = dart.constFn(_interceptors.JSArray$(ProviderLOfvoid())))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var InjectL = () => (InjectL = dart.constFn(dart.legacy(di_arguments.Inject)))();
  var OptionalL = () => (OptionalL = dart.constFn(dart.legacy(di_arguments.Optional)))();
  var SkipSelfL = () => (SkipSelfL = dart.constFn(dart.legacy(di_arguments.SkipSelf)))();
  var SelfL = () => (SelfL = dart.constFn(dart.legacy(di_arguments.Self)))();
  var HostL = () => (HostL = dart.constFn(dart.legacy(di_arguments.Host)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var MultiTokenL = () => (MultiTokenL = dart.constFn(dart.legacy(di_tokens.MultiToken)))();
  var ProviderOfObjectL = () => (ProviderOfObjectL = dart.constFn(di_providers.Provider$(ObjectL())))();
  var ProviderLOfObjectL = () => (ProviderLOfObjectL = dart.constFn(dart.legacy(ProviderOfObjectL())))();
  var IdentityMapOfObjectL$ProviderLOfObjectL = () => (IdentityMapOfObjectL$ProviderLOfObjectL = dart.constFn(_js_helper.IdentityMap$(ObjectL(), ProviderLOfObjectL())))();
  var JSArrayOfProviderLOfObjectL = () => (JSArrayOfProviderLOfObjectL = dart.constFn(_interceptors.JSArray$(ProviderLOfObjectL())))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  var LinkedMapOfObjectL$dynamic = () => (LinkedMapOfObjectL$dynamic = dart.constFn(_js_helper.LinkedMap$(ObjectL(), dart.dynamic)))();
  var FunctionL = () => (FunctionL = dart.constFn(dart.legacy(core.Function)))();
  var LinkedMapOfObjectL$FunctionL = () => (LinkedMapOfObjectL$FunctionL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), FunctionL())))();
  var ListOfListLOfObjectL = () => (ListOfListLOfObjectL = dart.constFn(core.List$(ListLOfObjectL())))();
  var ListLOfListLOfObjectL = () => (ListLOfListLOfObjectL = dart.constFn(dart.legacy(ListOfListLOfObjectL())))();
  var LinkedMapOfObjectL$ListLOfListLOfObjectL = () => (LinkedMapOfObjectL$ListLOfListLOfObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ListLOfListLOfObjectL())))();
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var NgZoneErrorL = () => (NgZoneErrorL = dart.constFn(dart.legacy(ng_zone.NgZoneError)))();
  var StreamControllerOfNgZoneErrorL = () => (StreamControllerOfNgZoneErrorL = dart.constFn(async.StreamController$(NgZoneErrorL())))();
  var _WrappedTimerL = () => (_WrappedTimerL = dart.constFn(dart.legacy(ng_zone._WrappedTimer)))();
  var JSArrayOf_WrappedTimerL = () => (JSArrayOf_WrappedTimerL = dart.constFn(_interceptors.JSArray$(_WrappedTimerL())))();
  var ZoneL = () => (ZoneL = dart.constFn(dart.legacy(async.Zone)))();
  var VoidToZoneL = () => (VoidToZoneL = dart.constFn(dart.fnType(ZoneL(), [])))();
  var LinkedMapOfObjectL$ObjectL = () => (LinkedMapOfObjectL$ObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ObjectL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var TraceL = () => (TraceL = dart.constFn(dart.legacy(trace.Trace)))();
  var TraceLToStringL = () => (TraceLToStringL = dart.constFn(dart.fnType(StringL(), [TraceL()])))();
  const CT = Object.create(null);
  var L2 = "package:angular/src/di/injector/injector.dart";
  var L3 = "org-dartlang-app:///packages/angular/src/di/injector/map.dart";
  var L9 = "package:angular/src/runtime/check_binding.dart";
  var L5 = "package:angular/src/di/injector/empty.dart";
  var L13 = "org-dartlang-app:///packages/angular/src/di/injector/runtime.dart";
  var L14 = "package:angular/src/core/change_detection/pipe_transform.dart";
  var L0 = "org-dartlang-app:///packages/angular/src/di/injector/hierarchical.dart";
  var L15 = "package:angular/src/core/zone/ng_zone.dart";
  var L12 = "package:angular/src/di/injector/runtime.dart";
  var L4 = "package:angular/src/di/injector/map.dart";
  var L10 = "package:angular/src/runtime/messages/messages.dart";
  var L11 = "package:angular/src/facade/exception_handler.dart";
  var L7 = "org-dartlang-app:///packages/angular/src/di/errors.dart";
  var L1 = "package:angular/src/di/injector/hierarchical.dart";
  var L8 = "org-dartlang-app:///packages/angular/src/runtime/optimizations.dart";
  var L6 = "package:angular/src/di/errors.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: empty.EmptyInjector.prototype,
        [HierarchicalInjector_parent]: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C2() {
      return C2 = dart.constList([], ObjectL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: messages$.Messages.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: check_binding._DevModeEquality.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: IterableEqualityOfObjectL().prototype,
        [IterableEquality__elementEquality]: C5 || CT.C5
      });
    },
    get C6() {
      return C6 = dart.constList([], ListLOfObjectL());
    }
  }, false);
  var HierarchicalInjector_parent = dart.privateName(hierarchical, "HierarchicalInjector.parent");
  var C0;
  var C1;
  hierarchical.HierarchicalInjector = class HierarchicalInjector extends core.Object {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    provideUntyped(token, orElse = C1 || CT.C1) {
      errors.debugInjectorEnter(token);
      let result = this.injectFromSelfOptional(token, orElse);
      if (core.identical(result, orElse)) {
        result = this.injectFromAncestryOptional(token, orElse);
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    injectFromSelf(T, token) {
      let result = this.injectFromSelfOptional(token);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      return optimizations.unsafeCast(dart.legacy(T), result);
    }
    injectFromParent(T, token) {
      let result = this.injectFromParentOptional(token);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      return optimizations.unsafeCast(dart.legacy(T), result);
    }
    injectFromParentOptional(token, orElse = C1 || CT.C1) {
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestry(T, token) {
      let result = this.injectFromAncestryOptional(token);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      return optimizations.unsafeCast(dart.legacy(T), result);
    }
    injectFromAncestryOptional(token, orElse = C1 || CT.C1) {
      return this.parent.provideUntyped(token, orElse);
    }
    get(token, notFoundValue = C1 || CT.C1) {
      errors.debugInjectorEnter(token);
      let result = this.provideUntyped(token, notFoundValue);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    provideType(T, token) {
      if (!!dart.wrapType(dart.legacy(T))._equals(dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported", L0, 168, 12, "T != dynamic");
      return optimizations.unsafeCast(dart.legacy(T), this.get(token));
    }
    provideTypeOptional(T, token) {
      if (!!dart.wrapType(dart.legacy(T))._equals(dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported", L0, 182, 12, "T != dynamic");
      return optimizations.unsafeCast(dart.legacy(T), this.get(token, null));
    }
    provideToken(T, token) {
      return optimizations.unsafeCast(dart.legacy(T), this.get(token));
    }
    provideTokenOptional(T, token) {
      return optimizations.unsafeCast(dart.legacy(T), this.get(token, null));
    }
  };
  (hierarchical.HierarchicalInjector.new = function(parent = null) {
    let t0;
    this[parent$] = (t0 = parent, t0 == null ? C0 || CT.C0 : t0);
    ;
  }).prototype = hierarchical.HierarchicalInjector.prototype;
  (hierarchical.HierarchicalInjector.maybeEmpty = function(parent = null) {
    this[parent$] = parent;
    ;
  }).prototype = hierarchical.HierarchicalInjector.prototype;
  dart.addTypeTests(hierarchical.HierarchicalInjector);
  dart.addTypeCaches(hierarchical.HierarchicalInjector);
  const parent$ = HierarchicalInjector_parent;
  dart.setMethodSignature(hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getMethods(hierarchical.HierarchicalInjector.__proto__),
    provideUntyped: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    injectFromSelf: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Object)]]),
    injectFromParent: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Object)]]),
    injectFromParentOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    injectFromAncestry: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Object)]]),
    injectFromAncestryOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    get: dart.fnType(dart.dynamic, [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    provideType: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Type)]]),
    provideTypeOptional: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Type)]]),
    provideToken: dart.gFnType(T => [dart.legacy(T), [dart.legacy(di_tokens.OpaqueToken$(dart.legacy(T)))]]),
    provideTokenOptional: dart.gFnType(T => [dart.legacy(T), [dart.legacy(di_tokens.OpaqueToken$(dart.legacy(T)))]])
  }));
  dart.setLibraryUri(hierarchical.HierarchicalInjector, L1);
  dart.setFieldSignature(hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getFields(hierarchical.HierarchicalInjector.__proto__),
    parent: dart.finalFieldType(dart.legacy(hierarchical.HierarchicalInjector))
  }));
  injector.Injector = class Injector extends core.Object {};
  (injector.Injector.new = function() {
    ;
  }).prototype = injector.Injector.prototype;
  dart.addTypeTests(injector.Injector);
  dart.addTypeCaches(injector.Injector);
  injector.Injector[dart.implements] = () => [hierarchical.HierarchicalInjector];
  dart.setLibraryUri(injector.Injector, L2);
  injector.throwsNotFound = function throwsNotFound(injector, token) {
    dart.throw(errors.noProviderError(token));
  };
  dart.defineLazy(injector, {
    /*injector.throwIfNotFound*/get throwIfNotFound() {
      return C1 || CT.C1;
    }
  }, true);
  var _providers = dart.privateName(map, "_providers");
  var _providers$ = dart.privateName(map, "MapInjector._providers");
  map.MapInjector = class MapInjector extends hierarchical.HierarchicalInjector {
    get [_providers]() {
      return this[_providers$];
    }
    set [_providers](value) {
      super[_providers] = value;
    }
    injectFromSelfOptional(token, orElse = C1 || CT.C1) {
      let result = this[_providers][$_get](token);
      if (result == null) {
        if (!!dart.test(this[_providers][$containsKey](token))) dart.assertFailed("Value for " + dart.str(token) + " should not be null for Injector.map", L3, 27, 9, "!_providers.containsKey(token)");
        if (token === dart.wrapType(InjectorL())) {
          return this;
        }
        result = orElse;
      }
      return result;
    }
  };
  (map.MapInjector.new = function(_providers, parent = C0 || CT.C0) {
    this[_providers$] = _providers;
    map.MapInjector.__proto__.new.call(this, parent);
    ;
  }).prototype = map.MapInjector.prototype;
  dart.addTypeTests(map.MapInjector);
  dart.addTypeCaches(map.MapInjector);
  map.MapInjector[dart.implements] = () => [injector.Injector];
  dart.setMethodSignature(map.MapInjector, () => ({
    __proto__: dart.getMethods(map.MapInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(map.MapInjector, L4);
  dart.setFieldSignature(map.MapInjector, () => ({
    __proto__: dart.getFields(map.MapInjector.__proto__),
    [_providers]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(core.Object))))
  }));
  empty.EmptyInjector = class EmptyInjector extends hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse = C1 || CT.C1) {
      return token === dart.wrapType(InjectorL()) ? this : orElse;
    }
    injectFromParentOptional(token, orElse = C1 || CT.C1) {
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestryOptional(token, orElse = C1 || CT.C1) {
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.provideUntyped(token, orElse);
    }
  };
  (empty.EmptyInjector.new = function(parent = null) {
    empty.EmptyInjector.__proto__.maybeEmpty.call(this, parent);
    ;
  }).prototype = empty.EmptyInjector.prototype;
  dart.addTypeTests(empty.EmptyInjector);
  dart.addTypeCaches(empty.EmptyInjector);
  empty.EmptyInjector[dart.implements] = () => [injector.Injector];
  dart.setMethodSignature(empty.EmptyInjector, () => ({
    __proto__: dart.getMethods(empty.EmptyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(empty.EmptyInjector, L5);
  errors.InjectionError = class InjectionError extends core.AssertionError {};
  (errors.InjectionError.__ = function() {
    errors.InjectionError.__proto__.new.call(this);
    ;
  }).prototype = errors.InjectionError.prototype;
  dart.addTypeTests(errors.InjectionError);
  dart.addTypeCaches(errors.InjectionError);
  dart.setLibraryUri(errors.InjectionError, L6);
  var C2;
  var token$ = dart.privateName(errors, "NoProviderError.token");
  var path = dart.privateName(errors, "NoProviderError.path");
  errors.NoProviderError = class NoProviderError extends errors.InjectionError {
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      super.path = value;
    }
    static _withAdjacentDeduped(input, token) {
      if (input == null) {
        return C2 || CT.C2;
      }
      let output = JSArrayOfObjectL().of([]);
      let lastElement = new core.Object.new();
      for (let element of input) {
        if (!core.identical(lastElement, element)) {
          output[$add](lastElement = element);
        }
      }
      if (dart.test(output[$isNotEmpty])) {
        output[$removeLast]();
      }
      return output;
    }
    toString() {
      return dart.test(this.path[$isEmpty]) ? errors._noProviderError(this.token) : dart.notNull(errors._noProviderError(this.token)) + (":\n  " + dart.str(this.path[$join](" ->\n  ")) + " ->\n  " + dart.str(this.token) + ".\n" + "**NOTE**: This path is not exhaustive, and nodes may be missing " + "in between the \"->\" delimiters. There is ongoing work to improve " + "this error message and include all the nodes where possible. ");
    }
  };
  (errors.NoProviderError.__ = function(token, stack) {
    this[token$] = token;
    this[path] = errors.NoProviderError._withAdjacentDeduped(stack, token);
    errors.NoProviderError.__proto__.__.call(this);
    ;
  }).prototype = errors.NoProviderError.prototype;
  dart.addTypeTests(errors.NoProviderError);
  dart.addTypeCaches(errors.NoProviderError);
  dart.setMethodSignature(errors.NoProviderError, () => ({
    __proto__: dart.getMethods(errors.NoProviderError.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(errors.NoProviderError, L6);
  dart.setFieldSignature(errors.NoProviderError, () => ({
    __proto__: dart.getFields(errors.NoProviderError.__proto__),
    token: dart.finalFieldType(dart.legacy(core.Object)),
    path: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
  }));
  dart.defineExtensionMethods(errors.NoProviderError, ['toString']);
  errors.debugInjectorEnter = function debugInjectorEnter(token) {
    if (dart.test(optimizations.isDevMode)) {
      if (errors._tokenStack == null) {
        errors._tokenStack = JSArrayOfObjectL().of([token]);
      } else {
        errors._tokenStack[$add](token);
      }
    }
  };
  errors.debugInjectorLeave = function debugInjectorLeave(token) {
    if (dart.test(optimizations.isDevMode)) {
      let removed = errors._tokenStack[$removeLast]();
      if (!core.identical(removed, token)) dart.assertFailed(null, L7, 36, 12, "identical(removed, token)");
    }
  };
  errors.debugInjectorWrap = function debugInjectorWrap(T, token, wrap) {
    errors.debugInjectorEnter(token);
    let result = wrap();
    errors.debugInjectorLeave(token);
    return result;
  };
  errors.noProviderError = function noProviderError(token) {
    if (dart.test(optimizations.isDevMode)) {
      let error = new errors.NoProviderError.__(token, errors._tokenStack);
      errors._tokenStack = null;
      return error;
    }
    return new core.ArgumentError.new(errors._noProviderError(token));
  };
  errors._noProviderError = function _noProviderError(token) {
    return "No provider found for " + dart.str(token);
  };
  dart.defineLazy(errors, {
    /*errors._tokenStack*/get _tokenStack() {
      return null;
    },
    set _tokenStack(_) {}
  }, true);
  var C3;
  dart.defineLazy(runtime, {
    /*runtime.runtimeMessages*/get runtimeMessages() {
      return C3 || CT.C3;
    }
  }, true);
  optimizations.unsafeCast = function unsafeCast(T, any) {
    return dart.legacy(T).as(any);
  };
  dart.copyProperties(optimizations, {
    get _assertionsEnabled() {
      let enabled = false;
      if (!(enabled = true)) dart.assertFailed(null, L8, 11, 10, "enabled = true");
      return enabled;
    },
    get isDevMode() {
      return optimizations._assertionsEnabled;
    }
  });
  var expression$ = dart.privateName(check_binding, "UnstableExpressionError.expression");
  var location$ = dart.privateName(check_binding, "UnstableExpressionError.location");
  var oldValue$ = dart.privateName(check_binding, "UnstableExpressionError.oldValue");
  var newValue$ = dart.privateName(check_binding, "UnstableExpressionError.newValue");
  check_binding.UnstableExpressionError = class UnstableExpressionError extends core.Error {
    get expression() {
      return this[expression$];
    }
    set expression(value) {
      super.expression = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get oldValue() {
      return this[oldValue$];
    }
    set oldValue(value) {
      super.oldValue = value;
    }
    get newValue() {
      return this[newValue$];
    }
    set newValue(value) {
      super.newValue = value;
    }
    toString() {
      let t0, t0$;
      if (dart.test(check_binding._debugCheckAllExpressionsAndReportExpressionContext)) {
        let message = "An expression bound in an AngularDart template returned a different " + "value the second time it was evaluated.\n\n";
        return message + dart.str((t0 = this.expression, t0 == null ? "UNKNOWN" : t0)) + " in " + dart.str((t0$ = this.location, t0$ == null ? "UNKNOWN" : t0$)) + ":\n" + "  Previous: " + dart.str(this.oldValue) + "\n" + "  Current:  " + dart.str(this.newValue) + "\n\n" + dart.str(messages.runtimeMessages.unstableExpressionReadMore);
      }
      return "Expression has changed after it was checked. " + "Previous value: \"" + dart.str(this.oldValue) + "\". Current value: \"" + dart.str(this.newValue) + "\".";
    }
  };
  (check_binding.UnstableExpressionError.__ = function(opts) {
    let oldValue = opts && 'oldValue' in opts ? opts.oldValue : null;
    let newValue = opts && 'newValue' in opts ? opts.newValue : null;
    let expression = opts && 'expression' in opts ? opts.expression : null;
    let location = opts && 'location' in opts ? opts.location : null;
    this[oldValue$] = oldValue;
    this[newValue$] = newValue;
    this[expression$] = expression;
    this[location$] = location;
    check_binding.UnstableExpressionError.__proto__.new.call(this);
    ;
  }).prototype = check_binding.UnstableExpressionError.prototype;
  dart.addTypeTests(check_binding.UnstableExpressionError);
  dart.addTypeCaches(check_binding.UnstableExpressionError);
  dart.setMethodSignature(check_binding.UnstableExpressionError, () => ({
    __proto__: dart.getMethods(check_binding.UnstableExpressionError.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(check_binding.UnstableExpressionError, L9);
  dart.setFieldSignature(check_binding.UnstableExpressionError, () => ({
    __proto__: dart.getFields(check_binding.UnstableExpressionError.__proto__),
    expression: dart.finalFieldType(dart.legacy(core.String)),
    location: dart.finalFieldType(dart.legacy(core.String)),
    oldValue: dart.finalFieldType(dart.legacy(core.Object)),
    newValue: dart.finalFieldType(dart.legacy(core.Object))
  }));
  dart.defineExtensionMethods(check_binding.UnstableExpressionError, ['toString']);
  var C5;
  var IterableEquality__elementEquality = dart.privateName(equality, "IterableEquality._elementEquality");
  var C4;
  check_binding._DevModeEquality = class _DevModeEquality extends equality.DefaultEquality$(dart.legacy(core.Object)) {
    equals(a, b) {
      if (IterableLOfObjectL().is(a) && IterableLOfObjectL().is(b)) {
        return (C4 || CT.C4).equals(a, b);
      } else if (!IterableLOfObjectL().is(a) && !dart.test(check_binding._isPrimitive(a)) && !IterableLOfObjectL().is(b) && !dart.test(check_binding._isPrimitive(b))) {
        return true;
      } else {
        return core.identical(a, b);
      }
    }
  };
  (check_binding._DevModeEquality.new = function() {
    check_binding._DevModeEquality.__proto__.new.call(this);
    ;
  }).prototype = check_binding._DevModeEquality.prototype;
  dart.addTypeTests(check_binding._DevModeEquality);
  dart.addTypeCaches(check_binding._DevModeEquality);
  dart.setLibraryUri(check_binding._DevModeEquality, L9);
  check_binding.debugEnterThrowOnChanged = function debugEnterThrowOnChanged() {
    check_binding._debugThrowIfChanged = true;
  };
  check_binding.debugExitThrowOnChanged = function debugExitThrowOnChanged() {
    check_binding._debugThrowIfChanged = false;
  };
  check_binding.debugCheckBindings = function debugCheckBindings(enabled = true) {
    check_binding._debugCheckAllExpressionsAndReportExpressionContext = enabled;
    if (dart.test(optimizations.isDevMode) && dart.test(enabled)) {
      check_binding._warnAboutExperimentalFeature();
    }
  };
  check_binding._warnAboutExperimentalFeature = function _warnAboutExperimentalFeature() {
    core.print("WARNING: debugCheckBindings() is an experimental feature.");
    core.print(dart.str(messages.runtimeMessages.unstableExpressionReadMore));
  };
  check_binding.checkBinding = function checkBinding(oldValue, newValue, expression = null, location = null) {
    return dart.test(optimizations.isDevMode) && dart.test(check_binding._debugThrowIfChanged) ? !dart.test(check_binding._debugCheckBinding(oldValue, newValue, expression, location)) : !core.identical(oldValue, newValue);
  };
  check_binding._debugCheckBinding = function _debugCheckBinding(oldValue, newValue, expression = null, location = null) {
    let isIdentical = dart.test(check_binding._debugCheckAllExpressionsAndReportExpressionContext) ? core.identical(oldValue, newValue) : (C5 || CT.C5).equals(oldValue, newValue);
    if (!dart.test(isIdentical)) {
      dart.throw(new check_binding.UnstableExpressionError.__({expression: expression, location: location, oldValue: oldValue, newValue: newValue}));
    }
    return true;
  };
  check_binding._isPrimitive = function _isPrimitive(a) {
    return a == null || StringL().is(a) || numL().is(a) || boolL().is(a);
  };
  dart.copyProperties(check_binding, {
    get debugThrowIfChanged() {
      return dart.test(optimizations.isDevMode) && dart.test(check_binding._debugThrowIfChanged);
    }
  });
  dart.defineLazy(check_binding, {
    /*check_binding._debugThrowIfChanged*/get _debugThrowIfChanged() {
      return false;
    },
    set _debugThrowIfChanged(_) {},
    /*check_binding._debugCheckAllExpressionsAndReportExpressionContext*/get _debugCheckAllExpressionsAndReportExpressionContext() {
      return false;
    },
    set _debugCheckAllExpressionsAndReportExpressionContext(_) {}
  }, true);
  dart.defineLazy(messages, {
    /*messages.runtimeMessages*/get runtimeMessages() {
      return C3 || CT.C3;
    }
  }, true);
  messages$.Messages = class Messages extends core.Object {
    get unstableExpressionReadMore() {
      return "See https://github.com/dart-lang/angular/blob/master/" + "doc/advanced/debugging.md";
    }
  };
  (messages$.Messages.new = function() {
    ;
  }).prototype = messages$.Messages.prototype;
  dart.addTypeTests(messages$.Messages);
  dart.addTypeCaches(messages$.Messages);
  dart.setGetterSignature(messages$.Messages, () => ({
    __proto__: dart.getGetters(messages$.Messages.__proto__),
    unstableExpressionReadMore: dart.legacy(core.String)
  }));
  dart.setLibraryUri(messages$.Messages, L10);
  var _logger = dart.privateName(exception_handler, "_logger");
  var _logger$ = dart.privateName(exception_handler, "ExceptionHandler._logger");
  exception_handler.ExceptionHandler = class ExceptionHandler extends core.Object {
    get [_logger]() {
      return this[_logger$];
    }
    set [_logger](value) {
      super[_logger] = value;
    }
    static debugAsyncStackTraces(enabled = true) {
      exception_handler._debugAsyncStackTraces = enabled;
    }
    static _longStackTrace(stackTrace) {
      return IterableLOfObjectL().is(stackTrace) ? stackTrace[$join]("\n\n-----async gap-----\n") : dart.toString(stackTrace);
    }
    static exceptionToString(exception, stackTrace = null, reason = null) {
      let buffer = new core.StringBuffer.new();
      buffer.writeln("EXCEPTION: " + dart.str(exception));
      if (stackTrace != null) {
        buffer.writeln("STACKTRACE: ");
        buffer.writeln(exception_handler.ExceptionHandler._longStackTrace(stackTrace));
      }
      if (reason != null) {
        buffer.writeln("REASON: " + dart.str(reason));
      }
      return buffer.toString();
    }
    call(exception, stackTrace = null, reason = null) {
      this[_logger].severe(exception_handler.ExceptionHandler.exceptionToString(exception, stackTrace, reason));
    }
  };
  (exception_handler.ExceptionHandler.new = function(_logger) {
    this[_logger$] = _logger;
    ;
  }).prototype = exception_handler.ExceptionHandler.prototype;
  dart.addTypeTests(exception_handler.ExceptionHandler);
  dart.addTypeCaches(exception_handler.ExceptionHandler);
  dart.setMethodSignature(exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getMethods(exception_handler.ExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, dart.legacy(core.String)])
  }));
  dart.setLibraryUri(exception_handler.ExceptionHandler, L11);
  dart.setFieldSignature(exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getFields(exception_handler.ExceptionHandler.__proto__),
    [_logger]: dart.finalFieldType(dart.legacy(logger.Logger))
  }));
  dart.copyProperties(exception_handler, {
    get debugAsyncStackTraces() {
      return exception_handler._debugAsyncStackTraces;
    }
  });
  dart.defineLazy(exception_handler, {
    /*exception_handler._debugAsyncStackTraces*/get _debugAsyncStackTraces() {
      return false;
    },
    set _debugAsyncStackTraces(_) {}
  }, true);
  runtime$.ReflectiveInjector = class ReflectiveInjector extends core.Object {
    static resolveAndCreate(providersOrLists, parent = C0 || CT.C0) {
      let flatProviders = runtime$._flattenProviders(providersOrLists);
      if (dart.test(optimizations.isDevMode)) {
        runtime$._assertProviders(flatProviders.providers[$values]);
        runtime$._assertProviders(flatProviders.multiProviders);
      }
      return new runtime$._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, optimizations.unsafeCast(HierarchicalInjectorL(), parent), false);
    }
    static resolveStaticAndCreate(providersOrLists, parent = C0 || CT.C0) {
      let flatProviders = runtime$._flattenProviders(providersOrLists);
      if (dart.test(optimizations.isDevMode)) {
        runtime$._assertStaticProviders(flatProviders.providers[$values]);
        runtime$._assertStaticProviders(flatProviders.multiProviders);
      }
      return new runtime$._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, optimizations.unsafeCast(HierarchicalInjectorL(), parent), true);
    }
  };
  (runtime$.ReflectiveInjector.new = function() {
    ;
  }).prototype = runtime$.ReflectiveInjector.prototype;
  dart.addTypeTests(runtime$.ReflectiveInjector);
  dart.addTypeCaches(runtime$.ReflectiveInjector);
  runtime$.ReflectiveInjector[dart.implements] = () => [injector.Injector];
  dart.setLibraryUri(runtime$.ReflectiveInjector, L12);
  var _instances = dart.privateName(runtime$, "_instances");
  var _providers$0 = dart.privateName(runtime$, "_providers");
  var _multiProviders$ = dart.privateName(runtime$, "_multiProviders");
  var _staticOnlyResolveAndCreate$ = dart.privateName(runtime$, "_staticOnlyResolveAndCreate");
  var _resolveMulti = dart.privateName(runtime$, "_resolveMulti");
  var _resolveMeta = dart.privateName(runtime$, "_resolveMeta");
  var _resolveArgs = dart.privateName(runtime$, "_resolveArgs");
  runtime$._RuntimeInjector = class _RuntimeInjector extends hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse = C1 || CT.C1) {
      let t2, t1, t0;
      let instance = this[_instances][$_get](token);
      if (instance == null && !dart.test(this[_instances][$containsKey](token))) {
        let provider = this[_providers$0][$_get](token);
        if (provider == null) {
          return orElse;
        }
        if (dart.test(runtime$._isMultiProvider(provider))) {
          t0 = this[_instances];
          t1 = provider.token;
          t2 = this[_resolveMulti](provider);
          t0[$_set](t1, t2);
          return t2;
        }
        this[_instances][$_set](token, instance = di_providers.buildAtRuntime(provider, this));
      }
      return instance;
    }
    resolveAndCreateChild(providersOrLists) {
      if (dart.test(this[_staticOnlyResolveAndCreate$])) {
        return runtime$.ReflectiveInjector.resolveStaticAndCreate(providersOrLists, this);
      }
      return runtime$.ReflectiveInjector.resolveAndCreate(providersOrLists, this);
    }
    resolveAndInstantiate(providerOrType) {
      let provider = ProviderL().is(providerOrType) ? providerOrType : new di_providers.Provider.__(providerOrType, {useClass: optimizations.unsafeCast(TypeL(), providerOrType)});
      if (dart.test(this[_staticOnlyResolveAndCreate$])) {
        runtime$._assertStaticProviders(JSArrayOfProviderLOfvoid().of([provider]));
      }
      return di_providers.buildAtRuntime(provider, this);
    }
    [_resolveArgs](token, deps = null) {
      deps == null ? deps = reflector.getDependencies(token) : null;
      let resolved = ListOfObjectL().new(deps[$length]);
      for (let i = 0, l = resolved[$length]; i < dart.notNull(l); i = i + 1) {
        let dep = deps[$_get](i);
        let result = null;
        if (ListLOfObjectL().is(dep)) {
          result = this[_resolveMeta](dep);
        } else {
          errors.debugInjectorEnter(dep);
          result = this.get(dep);
          errors.debugInjectorLeave(dep);
        }
        if (core.identical(result, injector.throwIfNotFound)) {
          return injector.throwsNotFound(this, dep);
        }
        resolved[$_set](i, result);
      }
      return resolved;
    }
    [_resolveMulti](provider) {
      let results = di_providers.listOfMulti(provider);
      for (let other of this[_multiProviders$]) {
        if (core.identical(other.token, provider.token)) {
          results[$add](di_providers.buildAtRuntime(other, this));
        }
      }
      return results;
    }
    [_resolveMeta](metadata) {
      let token = null;
      let isOptional = false;
      let isSkipSelf = false;
      let isSelf = false;
      let isHost = false;
      for (let n = 0, l = metadata[$length]; n < dart.notNull(l); n = n + 1) {
        let annotation = metadata[$_get](n);
        if (InjectL().is(annotation)) {
          token = annotation.token;
        } else if (OptionalL().is(annotation)) {
          isOptional = true;
        } else if (SkipSelfL().is(annotation)) {
          isSkipSelf = true;
        } else if (SelfL().is(annotation)) {
          isSelf = true;
        } else if (HostL().is(annotation)) {
          isHost = true;
        } else {
          token = annotation;
        }
      }
      let result = null;
      errors.debugInjectorEnter(token);
      let orElse = isOptional ? null : injector.throwIfNotFound;
      if (isSkipSelf) {
        result = this.injectFromAncestryOptional(token, orElse);
      } else if (isSelf) {
        result = this.injectFromSelfOptional(token, orElse);
      } else if (isHost) {
        result = this.injectFromParentOptional(token, orElse);
      } else {
        result = this.provideUntyped(token, orElse);
      }
      if (core.identical(result, injector.throwIfNotFound)) {
        injector.throwsNotFound(this, token);
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    useClass(clazz, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let factory = reflector.getFactory(clazz);
      return core.Function.apply(factory, this[_resolveArgs](clazz, deps));
    }
    useExisting(to) {
      return this.get(to);
    }
    useFactory(factory, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let resolvedArgs = this[_resolveArgs](factory, deps);
      if (!(dart.test(runtime$._RuntimeInjector._functionHasNoRequiredArguments(factory)) || dart.test(resolvedArgs[$isNotEmpty]))) dart.assertFailed("Could not resolve dependencies for factory function " + dart.str(factory) + ". This " + "is is usually a sign of an omitted @Injectable. Consider migrating " + "to @GeneratedInjector (and \"runApp\") or add the missing annotation " + "for the time being.", L13, 256, 9, "_functionHasNoRequiredArguments(factory) || resolvedArgs.isNotEmpty");
      return core.Function.apply(factory, resolvedArgs);
    }
    static _functionHasNoRequiredArguments($function) {
      return VoidToLvoid().is($function);
    }
    useValue(value) {
      return value;
    }
  };
  (runtime$._RuntimeInjector.new = function(_providers, _multiProviders, parent, _staticOnlyResolveAndCreate) {
    this[_instances] = new _js_helper.IdentityMap.new();
    this[_providers$0] = _providers;
    this[_multiProviders$] = _multiProviders;
    this[_staticOnlyResolveAndCreate$] = _staticOnlyResolveAndCreate;
    runtime$._RuntimeInjector.__proto__.new.call(this, parent);
    if (!(parent != null)) dart.assertFailed("A parent injector is always required.", L13, 106, 12, "parent != null");
    this[_instances][$_set](dart.wrapType(InjectorL()), this);
  }).prototype = runtime$._RuntimeInjector.prototype;
  dart.addTypeTests(runtime$._RuntimeInjector);
  dart.addTypeCaches(runtime$._RuntimeInjector);
  runtime$._RuntimeInjector[dart.implements] = () => [runtime$.ReflectiveInjector, di_providers.RuntimeInjectorBuilder];
  dart.setMethodSignature(runtime$._RuntimeInjector, () => ({
    __proto__: dart.getMethods(runtime$._RuntimeInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    resolveAndCreateChild: dart.fnType(dart.legacy(runtime$.ReflectiveInjector), [dart.legacy(core.List$(dart.legacy(core.Object)))]),
    resolveAndInstantiate: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_resolveArgs]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Object))), [dart.legacy(core.Object)], [dart.legacy(core.List$(dart.legacy(core.Object)))]),
    [_resolveMulti]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Object))), [dart.legacy(di_providers.Provider$(dart.legacy(core.Object)))]),
    [_resolveMeta]: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.List$(dart.legacy(core.Object)))]),
    useClass: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Type)], {deps: dart.legacy(core.List$(dart.legacy(core.Object)))}, {}),
    useExisting: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)]),
    useFactory: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Function)], {deps: dart.legacy(core.List$(dart.legacy(core.Object)))}, {}),
    useValue: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(runtime$._RuntimeInjector, L12);
  dart.setFieldSignature(runtime$._RuntimeInjector, () => ({
    __proto__: dart.getFields(runtime$._RuntimeInjector.__proto__),
    [_instances]: dart.finalFieldType(dart.legacy(core.Map)),
    [_providers$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(di_providers.Provider$(dart.legacy(core.Object)))))),
    [_multiProviders$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(di_providers.Provider$(dart.legacy(core.Object)))))),
    [_staticOnlyResolveAndCreate$]: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var providers$ = dart.privateName(runtime$, "_FlatProviders.providers");
  var multiProviders$ = dart.privateName(runtime$, "_FlatProviders.multiProviders");
  runtime$._FlatProviders = class _FlatProviders extends core.Object {
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get multiProviders() {
      return this[multiProviders$];
    }
    set multiProviders(value) {
      super.multiProviders = value;
    }
  };
  (runtime$._FlatProviders.new = function(providers, multiProviders) {
    this[providers$] = providers;
    this[multiProviders$] = multiProviders;
    ;
  }).prototype = runtime$._FlatProviders.prototype;
  dart.addTypeTests(runtime$._FlatProviders);
  dart.addTypeCaches(runtime$._FlatProviders);
  dart.setLibraryUri(runtime$._FlatProviders, L12);
  dart.setFieldSignature(runtime$._FlatProviders, () => ({
    __proto__: dart.getFields(runtime$._FlatProviders.__proto__),
    providers: dart.finalFieldType(dart.legacy(core.Map$(dart.dynamic, dart.legacy(di_providers.Provider$(dart.legacy(core.Object)))))),
    multiProviders: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(di_providers.Provider$(dart.legacy(core.Object))))))
  }));
  runtime$._isMultiProvider = function _isMultiProvider(p) {
    return dart.equals(p.multi, true) || MultiTokenL().is(p.token);
  };
  runtime$._assertProviders = function _assertProviders(providers) {
    for (let provider of providers) {
      if (provider.useClass != null) {
        reflector.getFactory(provider.useClass);
      } else if (provider.useFactory != null && provider.deps == null) {
        reflector.getDependencies(provider.useFactory);
      } else if (provider.useFactory === "__noValueProvided__" && provider.useExisting == null && TypeL().is(provider.token)) {
        reflector.getFactory(optimizations.unsafeCast(TypeL(), provider.token));
      }
    }
  };
  runtime$._throwUnsupportedProvider = function _throwUnsupportedProvider(provider) {
    dart.throw(new core.UnsupportedError.new("Could not create a provider for token \"" + dart.str(provider.token) + "\"!\n\n" + "ReflectiveInjector.resolveStaticAndCreate only supports some providers.\n" + "\n" + "* FactoryProvider (or Provider(useFactory: ...)) with deps: [ ... ] set\n" + "* ValueProvider (or Provider(useValue: ...))\n" + "* ExistingProvider (or Provider(useExisting: ...))\n" + "\n" + "Specifically, any providers that require looking up factory functions or " + "argument information for factory functions at runtime are not supported " + "since they would defeat the tree-shaking improvements of \"runApp\".\n\n" + "See https://github.com/dart-lang/angular/issues/1426 for details"));
  };
  runtime$._assertStaticProviders = function _assertStaticProviders(providers) {
    for (let provider of providers) {
      if (provider.useValue !== "__noValueProvided__") {
        continue;
      }
      if (provider.useExisting != null) {
        continue;
      }
      if (provider.useFactory !== "__noValueProvided__") {
        if (provider.deps != null) {
          continue;
        }
      }
      runtime$._throwUnsupportedProvider(provider);
    }
  };
  runtime$._flattenProviders = function _flattenProviders(providersOrLists, allProviders = null, multiProviders = null) {
    allProviders == null ? allProviders = new (IdentityMapOfObjectL$ProviderLOfObjectL()).new() : null;
    multiProviders == null ? multiProviders = JSArrayOfProviderLOfObjectL().of([]) : null;
    for (let i = 0, len = providersOrLists[$length]; i < dart.notNull(len); i = i + 1) {
      let item = providersOrLists[$_get](i);
      if (ListLOfObjectL().is(item)) {
        runtime$._flattenProviders(item, allProviders, multiProviders);
      } else if (ProviderL().is(item)) {
        if (dart.test(runtime$._isMultiProvider(item))) {
          multiProviders[$add](item);
        }
        allProviders[$_set](item.token, item);
      } else if (TypeL().is(item)) {
        allProviders[$_set](item, new (ProviderOfObjectL()).__(item, {useClass: item}));
      } else if (ModuleL().is(item)) {
        let providers = di_modules.internalModuleToList(item);
        runtime$._flattenProviders(providers, allProviders, multiProviders);
      } else {
        if (!false) dart.assertFailed("Unsupported: " + dart.str(item), L13, 365, 14, "false");
      }
    }
    return new runtime$._FlatProviders.new(allProviders, multiProviders);
  };
  var C6;
  reflector.registerComponent = function registerComponent(type, component) {
    reflector._components[$_set](type, component);
  };
  reflector.getComponent = function getComponent(type) {
    let component = reflector._components[$_get](type);
    if (dart.test(optimizations.isDevMode) && component == null) {
      dart.throw(new core.StateError.new("Could not find a component factory for " + dart.str(type) + "."));
    }
    return component;
  };
  reflector.registerFactory = function registerFactory(typeOrFunc, factory) {
    reflector._factories[$_set](typeOrFunc, factory);
  };
  reflector.getFactory = function getFactory(type) {
    let factory = reflector._factories[$_get](type);
    if (dart.test(optimizations.isDevMode) && factory == null) {
      if (dart.test(reflector._factories[$isEmpty])) {
        dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ", there were no factories of any " + "type found. The likely causes is that you are using the newer " + "runApp() semantics, which does not support runtime lookups of " + "factories (and does not support ReflectiveInjector) *or* " + "AngularDart code generation was never invoked (either due to a " + "misconfiguration of Bazel or Build Runner or a missing invocation " + "of `initReflector()` in your `main.dart`)."));
      }
      dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ". Either a provider" + " was not set, *or* AngularDart code generation was never invoked on " + "the depending package (either due to a misconfiguration of Bazel or " + "Build Runner)."));
    }
    return factory;
  };
  reflector.registerDependencies = function registerDependencies(invokable, dependencies) {
    reflector._dependencies[$_set](invokable, dependencies);
  };
  reflector.getDependencies = function getDependencies(object) {
    let t0;
    t0 = reflector._dependencies[$_get](object);
    return t0 == null ? C6 || CT.C6 : t0;
  };
  dart.defineLazy(reflector, {
    /*reflector._components*/get _components() {
      return new (LinkedMapOfObjectL$dynamic()).new();
    },
    /*reflector._factories*/get _factories() {
      return new (LinkedMapOfObjectL$FunctionL()).new();
    },
    /*reflector._dependencies*/get _dependencies() {
      return new (LinkedMapOfObjectL$ListLOfListLOfObjectL()).new();
    }
  }, true);
  pipe_transform.PipeTransform = class PipeTransform extends core.Object {};
  (pipe_transform.PipeTransform.new = function() {
    ;
  }).prototype = pipe_transform.PipeTransform.prototype;
  dart.addTypeTests(pipe_transform.PipeTransform);
  dart.addTypeCaches(pipe_transform.PipeTransform);
  dart.setLibraryUri(pipe_transform.PipeTransform, L14);
  var _thisZoneKey = dart.privateName(ng_zone, "_thisZoneKey");
  var _onTurnStart = dart.privateName(ng_zone, "_onTurnStart");
  var _onMicrotaskEmpty = dart.privateName(ng_zone, "_onMicrotaskEmpty");
  var _onTurnDone = dart.privateName(ng_zone, "_onTurnDone");
  var _onError = dart.privateName(ng_zone, "_onError");
  var _outerZone = dart.privateName(ng_zone, "_outerZone");
  var _innerZone = dart.privateName(ng_zone, "_innerZone");
  var _hasPendingMicrotasks = dart.privateName(ng_zone, "_hasPendingMicrotasks");
  var _hasPendingMacrotasks = dart.privateName(ng_zone, "_hasPendingMacrotasks");
  var _isStable = dart.privateName(ng_zone, "_isStable");
  var _nesting = dart.privateName(ng_zone, "_nesting");
  var _isRunning = dart.privateName(ng_zone, "_isRunning");
  var _disposed = dart.privateName(ng_zone, "_disposed");
  var _pendingMicrotasks = dart.privateName(ng_zone, "_pendingMicrotasks");
  var _pendingTimers = dart.privateName(ng_zone, "_pendingTimers");
  var _onErrorWithoutLongStackTrace = dart.privateName(ng_zone, "_onErrorWithoutLongStackTrace");
  var _createInnerZone = dart.privateName(ng_zone, "_createInnerZone");
  var _onErrorWithLongStackTrace = dart.privateName(ng_zone, "_onErrorWithLongStackTrace");
  var _scheduleMicrotask = dart.privateName(ng_zone, "_scheduleMicrotask");
  var _run = dart.privateName(ng_zone, "_run");
  var _runUnary = dart.privateName(ng_zone, "_runUnary");
  var _runBinary = dart.privateName(ng_zone, "_runBinary");
  var _createTimer = dart.privateName(ng_zone, "_createTimer");
  var _setMicrotask = dart.privateName(ng_zone, "_setMicrotask");
  var _onEnter = dart.privateName(ng_zone, "_onEnter");
  var _onLeave = dart.privateName(ng_zone, "_onLeave");
  var _checkStable = dart.privateName(ng_zone, "_checkStable");
  var _setMacrotask = dart.privateName(ng_zone, "_setMacrotask");
  var _duration$ = dart.privateName(ng_zone, "_duration");
  var _longestPendingTimer = dart.privateName(ng_zone, "_longestPendingTimer");
  ng_zone.NgZone = class NgZone extends core.Object {
    static isInAngularZone() {
      return async.Zone.current._get(ng_zone.NgZone._anyZoneKey) === true;
    }
    static assertInAngularZone() {
      if (!dart.test(ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to be in Angular Zone, but it is not!"));
      }
    }
    static assertNotInAngularZone() {
      if (dart.test(ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to not be in Angular Zone, but it is!"));
      }
    }
    static new() {
      return dart.test(optimizations.isDevMode) && dart.test(exception_handler.debugAsyncStackTraces) ? new ng_zone.NgZone._debugAsyncStackTraces() : new ng_zone.NgZone.__();
    }
    get inInnerZone() {
      return dart.equals(async.Zone.current, this[_innerZone]);
    }
    get inOuterZone() {
      return dart.equals(async.Zone.current, this[_outerZone]);
    }
    [_createInnerZone](zone, opts) {
      let handleUncaughtError = opts && 'handleUncaughtError' in opts ? opts.handleUncaughtError : null;
      return zone.fork({specification: new async._ZoneSpecification.new({scheduleMicrotask: dart.bind(this, _scheduleMicrotask), run: dart.bind(this, _run), runUnary: dart.bind(this, _runUnary), runBinary: dart.bind(this, _runBinary), handleUncaughtError: handleUncaughtError, createTimer: dart.bind(this, _createTimer)}), zoneValues: new (LinkedMapOfObjectL$ObjectL()).from([this[_thisZoneKey], true, ng_zone.NgZone._anyZoneKey, true])});
    }
    [_scheduleMicrotask](self, parent, zone, fn) {
      if (this[_pendingMicrotasks] === 0) {
        this[_setMicrotask](true);
      }
      this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) + 1;
      let safeMicrotask = dart.fn(() => {
        try {
          fn();
        } finally {
          this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) - 1;
          if (this[_pendingMicrotasks] === 0) {
            this[_setMicrotask](false);
          }
        }
      }, VoidToNull());
      parent.scheduleMicrotask(zone, safeMicrotask);
    }
    [_run](R, self, parent, zone, fn) {
      return parent.run(dart.legacy(R), zone, dart.fn(() => {
        try {
          this[_onEnter]();
          return fn();
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(dart.legacy(R), [])));
    }
    [_runUnary](R, T, self, parent, zone, fn, arg) {
      return parent.runUnary(dart.legacy(R), dart.legacy(T), zone, dart.fn(arg => {
        try {
          this[_onEnter]();
          return fn(arg);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(dart.legacy(R), [dart.legacy(T)])), arg);
    }
    [_runBinary](R, T1, T2, self, parent, zone, fn, arg1, arg2) {
      return parent.runBinary(dart.legacy(R), dart.legacy(T1), dart.legacy(T2), zone, dart.fn((arg1, arg2) => {
        try {
          this[_onEnter]();
          return fn(arg1, arg2);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)])), arg1, arg2);
    }
    [_onEnter]() {
      this[_nesting] = dart.notNull(this[_nesting]) + 1;
      if (dart.test(this[_isStable])) {
        this[_isStable] = false;
        this[_isRunning] = true;
        this[_onTurnStart].add(null);
      }
    }
    [_onLeave]() {
      this[_nesting] = dart.notNull(this[_nesting]) - 1;
      this[_checkStable]();
    }
    [_onErrorWithLongStackTrace](error, chain) {
      let traces = chain.terse.traces[$map](StringL(), dart.fn(t => dart.toString(t), TraceLToStringL()))[$toList]();
      this[_onError].add(new ng_zone.NgZoneError.new(error, traces));
    }
    [_onErrorWithoutLongStackTrace](self, parent, zone, error, trace) {
      this[_onError].add(new ng_zone.NgZoneError.new(error, JSArrayOfObjectL().of([dart.toString(trace)])));
    }
    [_createTimer](self, parent, zone, duration, fn) {
      let wrappedTimer = null;
      let onDone = dart.fn(() => {
        this[_pendingTimers][$remove](wrappedTimer);
        this[_setMacrotask](this[_pendingTimers][$isNotEmpty]);
      }, VoidToNull());
      let callback = dart.fn(() => {
        try {
          fn();
        } finally {
          onDone();
        }
      }, VoidToNull());
      let timer = parent.createTimer(zone, duration, callback);
      wrappedTimer = new ng_zone._WrappedTimer.new(timer, duration, onDone);
      this[_pendingTimers][$add](wrappedTimer);
      this[_setMacrotask](true);
      return wrappedTimer;
    }
    get [_longestPendingTimer]() {
      let duration = core.Duration.zero;
      for (let timer of this[_pendingTimers]) {
        if (dart.test(timer[_duration$]['>'](duration))) {
          duration = timer[_duration$];
        }
      }
      return duration;
    }
    [_setMicrotask](hasMicrotasks) {
      this[_hasPendingMicrotasks] = hasMicrotasks;
      this[_checkStable]();
    }
    [_setMacrotask](hasMacrotasks) {
      this[_hasPendingMacrotasks] = hasMacrotasks;
    }
    [_checkStable]() {
      if (this[_nesting] === 0) {
        if (!dart.test(this[_hasPendingMicrotasks]) && !dart.test(this[_isStable])) {
          try {
            this[_nesting] = dart.notNull(this[_nesting]) + 1;
            this[_isRunning] = false;
            if (!dart.test(this[_disposed])) this[_onMicrotaskEmpty].add(null);
          } finally {
            this[_nesting] = dart.notNull(this[_nesting]) - 1;
            if (!dart.test(this[_hasPendingMicrotasks])) {
              try {
                this.runOutsideAngular(core.Null, dart.fn(() => {
                  if (!dart.test(this[_disposed])) {
                    this[_onTurnDone].add(null);
                  }
                }, VoidToNull()));
              } finally {
                this[_isStable] = true;
              }
            }
          }
        }
      }
    }
    get hasPendingMicrotasks() {
      return this[_hasPendingMicrotasks];
    }
    get hasPendingMacrotasks() {
      return this[_hasPendingMacrotasks];
    }
    run(R, callback) {
      return this[_innerZone].run(dart.legacy(R), callback);
    }
    runGuarded(callback) {
      return this[_innerZone].runGuarded(callback);
    }
    runOutsideAngular(R, callback) {
      return this[_outerZone].run(dart.legacy(R), callback);
    }
    get isRunning() {
      return this[_isRunning];
    }
    get onError() {
      return this[_onError].stream;
    }
    get onMicrotaskEmpty() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onEventDone() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onTurnStart() {
      return this[_onTurnStart].stream;
    }
    get onTurnDone() {
      return this[_onTurnDone].stream;
    }
    runAfterChangesObserved(callback) {
      if (dart.test(this.isRunning)) {
        this.onTurnDone.first.whenComplete(dart.fn(() => async.scheduleMicrotask(callback), VoidTovoid()));
      } else {
        async.scheduleMicrotask(callback);
      }
    }
    dispose() {
      this[_disposed] = true;
    }
  };
  (ng_zone.NgZone.__ = function() {
    this[_thisZoneKey] = new core.Object.new();
    this[_onTurnStart] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onMicrotaskEmpty] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onTurnDone] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onError] = StreamControllerOfNgZoneErrorL().broadcast({sync: true});
    this[_outerZone] = null;
    this[_innerZone] = null;
    this[_hasPendingMicrotasks] = false;
    this[_hasPendingMacrotasks] = false;
    this[_isStable] = true;
    this[_nesting] = 0;
    this[_isRunning] = false;
    this[_disposed] = false;
    this[_pendingMicrotasks] = 0;
    this[_pendingTimers] = JSArrayOf_WrappedTimerL().of([]);
    this[_outerZone] = async.Zone.current;
    this[_innerZone] = this[_createInnerZone](async.Zone.current, {handleUncaughtError: dart.bind(this, _onErrorWithoutLongStackTrace)});
  }).prototype = ng_zone.NgZone.prototype;
  (ng_zone.NgZone._debugAsyncStackTraces = function() {
    this[_thisZoneKey] = new core.Object.new();
    this[_onTurnStart] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onMicrotaskEmpty] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onTurnDone] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onError] = StreamControllerOfNgZoneErrorL().broadcast({sync: true});
    this[_outerZone] = null;
    this[_innerZone] = null;
    this[_hasPendingMicrotasks] = false;
    this[_hasPendingMacrotasks] = false;
    this[_isStable] = true;
    this[_nesting] = 0;
    this[_isRunning] = false;
    this[_disposed] = false;
    this[_pendingMicrotasks] = 0;
    this[_pendingTimers] = JSArrayOf_WrappedTimerL().of([]);
    this[_outerZone] = async.Zone.current;
    this[_innerZone] = chain.Chain.capture(ZoneL(), dart.fn(() => this[_createInnerZone](async.Zone.current), VoidToZoneL()), {onError: dart.bind(this, _onErrorWithLongStackTrace)});
  }).prototype = ng_zone.NgZone.prototype;
  dart.addTypeTests(ng_zone.NgZone);
  dart.addTypeCaches(ng_zone.NgZone);
  dart.setMethodSignature(ng_zone.NgZone, () => ({
    __proto__: dart.getMethods(ng_zone.NgZone.__proto__),
    [_createInnerZone]: dart.fnType(dart.legacy(async.Zone), [dart.legacy(async.Zone)], {handleUncaughtError: dart.legacy(dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(core.Object), dart.legacy(core.StackTrace)]))}, {}),
    [_scheduleMicrotask]: dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.void, []))]),
    [_run]: dart.gFnType(R => [dart.legacy(R), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    [_runUnary]: dart.gFnType((R, T) => [dart.legacy(R), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T)])), dart.legacy(T)]]),
    [_runBinary]: dart.gFnType((R, T1, T2) => [dart.legacy(R), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)])), dart.legacy(T1), dart.legacy(T2)]]),
    [_onEnter]: dart.fnType(dart.void, []),
    [_onLeave]: dart.fnType(dart.void, []),
    [_onErrorWithLongStackTrace]: dart.fnType(dart.void, [dart.dynamic, dart.legacy(chain.Chain)]),
    [_onErrorWithoutLongStackTrace]: dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.dynamic, dart.legacy(core.StackTrace)]),
    [_createTimer]: dart.fnType(dart.legacy(async.Timer), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.void, []))]),
    [_setMicrotask]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_setMacrotask]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_checkStable]: dart.fnType(dart.void, []),
    run: dart.gFnType(R => [dart.legacy(R), [dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    runGuarded: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    runOutsideAngular: dart.gFnType(R => [dart.legacy(R), [dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    runAfterChangesObserved: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ng_zone.NgZone, () => ({
    __proto__: dart.getGetters(ng_zone.NgZone.__proto__),
    inInnerZone: dart.legacy(core.bool),
    inOuterZone: dart.legacy(core.bool),
    [_longestPendingTimer]: dart.legacy(core.Duration),
    hasPendingMicrotasks: dart.legacy(core.bool),
    hasPendingMacrotasks: dart.legacy(core.bool),
    isRunning: dart.legacy(core.bool),
    onError: dart.legacy(async.Stream$(dart.legacy(ng_zone.NgZoneError))),
    onMicrotaskEmpty: dart.legacy(async.Stream$(dart.void)),
    onEventDone: dart.legacy(async.Stream$(dart.void)),
    onTurnStart: dart.legacy(async.Stream$(dart.void)),
    onTurnDone: dart.legacy(async.Stream$(dart.void))
  }));
  dart.setLibraryUri(ng_zone.NgZone, L15);
  dart.setFieldSignature(ng_zone.NgZone, () => ({
    __proto__: dart.getFields(ng_zone.NgZone.__proto__),
    [_thisZoneKey]: dart.finalFieldType(dart.legacy(core.Object)),
    [_onTurnStart]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onMicrotaskEmpty]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onTurnDone]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onError]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(ng_zone.NgZoneError)))),
    [_outerZone]: dart.fieldType(dart.legacy(async.Zone)),
    [_innerZone]: dart.fieldType(dart.legacy(async.Zone)),
    [_hasPendingMicrotasks]: dart.fieldType(dart.legacy(core.bool)),
    [_hasPendingMacrotasks]: dart.fieldType(dart.legacy(core.bool)),
    [_isStable]: dart.fieldType(dart.legacy(core.bool)),
    [_nesting]: dart.fieldType(dart.legacy(core.int)),
    [_isRunning]: dart.fieldType(dart.legacy(core.bool)),
    [_disposed]: dart.fieldType(dart.legacy(core.bool)),
    [_pendingMicrotasks]: dart.fieldType(dart.legacy(core.int)),
    [_pendingTimers]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(ng_zone._WrappedTimer))))
  }));
  dart.defineLazy(ng_zone.NgZone, {
    /*ng_zone.NgZone._anyZoneKey*/get _anyZoneKey() {
      return new core.Object.new();
    }
  }, true);
  var _timer$ = dart.privateName(ng_zone, "_timer");
  var _onCancel$ = dart.privateName(ng_zone, "_onCancel");
  ng_zone._WrappedTimer = class _WrappedTimer extends core.Object {
    cancel() {
      this[_onCancel$]();
      this[_timer$].cancel();
    }
    get isActive() {
      return this[_timer$].isActive;
    }
    get tick() {
      return this[_timer$].tick;
    }
  };
  (ng_zone._WrappedTimer.new = function(_timer, _duration, _onCancel) {
    this[_timer$] = _timer;
    this[_duration$] = _duration;
    this[_onCancel$] = _onCancel;
    ;
  }).prototype = ng_zone._WrappedTimer.prototype;
  dart.addTypeTests(ng_zone._WrappedTimer);
  dart.addTypeCaches(ng_zone._WrappedTimer);
  ng_zone._WrappedTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(ng_zone._WrappedTimer, () => ({
    __proto__: dart.getMethods(ng_zone._WrappedTimer.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ng_zone._WrappedTimer, () => ({
    __proto__: dart.getGetters(ng_zone._WrappedTimer.__proto__),
    isActive: dart.legacy(core.bool),
    tick: dart.legacy(core.int)
  }));
  dart.setLibraryUri(ng_zone._WrappedTimer, L15);
  dart.setFieldSignature(ng_zone._WrappedTimer, () => ({
    __proto__: dart.getFields(ng_zone._WrappedTimer.__proto__),
    [_timer$]: dart.finalFieldType(dart.legacy(async.Timer)),
    [_duration$]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_onCancel$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [])))
  }));
  var error$ = dart.privateName(ng_zone, "NgZoneError.error");
  var stackTrace$ = dart.privateName(ng_zone, "NgZoneError.stackTrace");
  ng_zone.NgZoneError = class NgZoneError extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
  };
  (ng_zone.NgZoneError.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    ;
  }).prototype = ng_zone.NgZoneError.prototype;
  dart.addTypeTests(ng_zone.NgZoneError);
  dart.addTypeCaches(ng_zone.NgZoneError);
  dart.setLibraryUri(ng_zone.NgZoneError, L15);
  dart.setFieldSignature(ng_zone.NgZoneError, () => ({
    __proto__: dart.getFields(ng_zone.NgZoneError.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
  }));
  ng_zone.debugAsyncStackTracesNgZone = function debugAsyncStackTracesNgZone() {
    return new ng_zone.NgZone._debugAsyncStackTraces();
  };
  ng_zone.longestPendingTimer = function longestPendingTimer(zone) {
    return zone[_longestPendingTimer];
  };
  ng_zone.hasPendingMacrotasks = function hasPendingMacrotasks(zone) {
    return zone[_hasPendingMacrotasks];
  };
  ng_zone.inAngularZone = function inAngularZone(ngZone, zone) {
    return zone._get(ngZone[_thisZoneKey]) === true;
  };
  dart.trackLibraries("packages/angular/src/core/change_detection/pipe_transform", {
    "package:angular/src/di/injector/hierarchical.dart": hierarchical,
    "package:angular/src/di/injector/injector.dart": injector,
    "package:angular/src/di/injector/map.dart": map,
    "package:angular/src/di/injector/empty.dart": empty,
    "package:angular/src/di/errors.dart": errors,
    "package:angular/src/runtime.dart": runtime,
    "package:angular/src/runtime/optimizations.dart": optimizations,
    "package:angular/src/runtime/check_binding.dart": check_binding,
    "package:angular/src/runtime/messages.dart": messages,
    "package:angular/src/runtime/messages/messages.dart": messages$,
    "package:angular/src/facade/exception_handler.dart": exception_handler,
    "package:angular/src/di/injector/runtime.dart": runtime$,
    "package:angular/src/di/reflector.dart": reflector,
    "package:angular/src/core/change_detection/pipe_transform.dart": pipe_transform,
    "package:angular/src/core/di.dart": di,
    "package:angular/src/core/zone/ng_zone.dart": ng_zone
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../di/injector/hierarchical.dart","../../di/injector/injector.dart","../../di/injector/map.dart","../../di/injector/empty.dart","../../di/errors.dart","../../runtime.dart","../../runtime/optimizations.dart","../../runtime/check_binding.dart","../../runtime/messages.dart","../../runtime/messages/messages.dart","../../facade/exception_handler.dart","../../di/injector/runtime.dart","../../di/reflector.dart","pipe_transform.dart","../zone/ng_zone.dart"],"names":[],"mappings":"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","file":"pipe_transform.unsound.ddc.js"}');
  // Exports:
  return {
    src__di__injector__hierarchical: hierarchical,
    src__di__injector__injector: injector,
    src__di__injector__map: map,
    src__di__injector__empty: empty,
    src__di__errors: errors,
    src__runtime: runtime,
    src__runtime__optimizations: optimizations,
    src__runtime__check_binding: check_binding,
    src__runtime__messages: messages,
    src__runtime__messages__messages: messages$,
    src__facade__exception_handler: exception_handler,
    src__di__injector__runtime: runtime$,
    src__di__reflector: reflector,
    src__core__change_detection__pipe_transform: pipe_transform,
    src__core__di: di,
    src__core__zone__ng_zone: ng_zone
  };
}));

//# sourceMappingURL=pipe_transform.unsound.ddc.js.map
