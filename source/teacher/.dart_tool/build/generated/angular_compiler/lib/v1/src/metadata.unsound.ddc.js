define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/di_providers'], (function load__packages__angular_compiler__v1__src__metadata(dart_sdk, packages__angular_compiler__v1__src__metadata__di_providers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  var di_generate_injector = Object.create(dart.library);
  var di_modules = Object.create(dart.library);
  var metadata = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $add = dartx.add;
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ProviderOfObjectL = () => (ProviderOfObjectL = dart.constFn(di_providers.Provider$(ObjectL())))();
  var ProviderLOfObjectL = () => (ProviderLOfObjectL = dart.constFn(dart.legacy(ProviderOfObjectL())))();
  var JSArrayOfProviderLOfObjectL = () => (JSArrayOfProviderLOfObjectL = dart.constFn(_interceptors.JSArray$(ProviderLOfObjectL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/di_generate_injector.dart";
  var L1 = "package:angular_compiler/v1/src/metadata/di_modules.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], ModuleL());
    },
    get C1() {
      return C1 = dart.constList([], ProviderLOfObjectL());
    }
  }, false);
  var _providersOrModules = dart.privateName(di_generate_injector, "_providersOrModules");
  var _providersOrModules$ = dart.privateName(di_generate_injector, "GenerateInjector._providersOrModules");
  di_generate_injector.GenerateInjector = class GenerateInjector extends core.Object {
    get [_providersOrModules]() {
      return this[_providersOrModules$];
    }
    set [_providersOrModules](value) {
      super[_providersOrModules] = value;
    }
  };
  (di_generate_injector.GenerateInjector.new = function(_providersOrModules) {
    this[_providersOrModules$] = _providersOrModules;
    ;
  }).prototype = di_generate_injector.GenerateInjector.prototype;
  dart.addTypeTests(di_generate_injector.GenerateInjector);
  dart.addTypeCaches(di_generate_injector.GenerateInjector);
  dart.setLibraryUri(di_generate_injector.GenerateInjector, L0);
  dart.setFieldSignature(di_generate_injector.GenerateInjector, () => ({
    __proto__: dart.getFields(di_generate_injector.GenerateInjector.__proto__),
    [_providersOrModules]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
  }));
  var C0;
  var C1;
  var include$ = dart.privateName(di_modules, "Module.include");
  var provide$ = dart.privateName(di_modules, "Module.provide");
  di_modules.Module = class Module extends core.Object {
    get include() {
      return this[include$];
    }
    set include(value) {
      super.include = value;
    }
    get provide() {
      return this[provide$];
    }
    set provide(value) {
      super.provide = value;
    }
  };
  (di_modules.Module.__ = function(opts) {
    let include = opts && 'include' in opts ? opts.include : C0 || CT.C0;
    let provide = opts && 'provide' in opts ? opts.provide : C1 || CT.C1;
    this[include$] = include;
    this[provide$] = provide;
    ;
  }).prototype = di_modules.Module.prototype;
  dart.addTypeTests(di_modules.Module);
  dart.addTypeCaches(di_modules.Module);
  dart.setLibraryUri(di_modules.Module, L1);
  dart.setFieldSignature(di_modules.Module, () => ({
    __proto__: dart.getFields(di_modules.Module.__proto__),
    include: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(di_modules.Module)))),
    provide: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(di_providers.Provider$(dart.legacy(core.Object))))))
  }));
  di_modules.internalModuleToList = function internalModuleToList(module) {
    let result = JSArrayOfProviderLOfObjectL().of([]);
    let includes = module.include;
    for (let i = 0, l = includes[$length]; i < dart.notNull(l); i = i + 1) {
      result[$addAll](di_modules.internalModuleToList(includes[$_get](i)));
    }
    let provides = module.provide;
    for (let i = 0, l = provides[$length]; i < dart.notNull(l); i = i + 1) {
      result[$add](provides[$_get](i));
    }
    return result;
  };
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata", {
    "package:angular_compiler/v1/src/metadata/di_generate_injector.dart": di_generate_injector,
    "package:angular_compiler/v1/src/metadata/di_modules.dart": di_modules,
    "package:angular_compiler/v1/src/metadata.dart": metadata
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["metadata/di_generate_injector.dart","metadata/di_modules.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqBqB;;;;;;;;IAES;;EAAoB;;;;;;;;;;;;;ICmB7B;;;;;;IACU;;;;;;;;QAStB;QACA;IADA;IACA;;EACL;;;;;;;;;kEAM+C;AAC3C,iBAA2B;AAC3B,mBAAW,AAAO,MAAD;AACvB,aAAS,IAAI,GAAG,IAAI,AAAS,QAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACK,MAAhD,AAAO,MAAD,UAAQ,gCAAqB,AAAQ,QAAA,QAAC,CAAC;;AAEzC,mBAAW,AAAO,MAAD;AACvB,aAAS,IAAI,GAAG,IAAI,AAAS,QAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACpB,MAAvB,AAAO,MAAD,OAAK,AAAQ,QAAA,QAAC,CAAC;;AAEvB,UAAO,OAAM;EACf","file":"metadata.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__di_generate_injector: di_generate_injector,
    v1__src__metadata__di_modules: di_modules,
    v1__src__metadata: metadata
  };
}));

//# sourceMappingURL=metadata.unsound.ddc.js.map
