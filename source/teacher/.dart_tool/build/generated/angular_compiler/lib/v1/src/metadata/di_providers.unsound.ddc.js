define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/runtime_shim', 'packages/angular_compiler/v1/src/metadata/di_tokens'], (function load__packages__angular_compiler__v1__src__metadata__di_providers(dart_sdk, packages__angular_compiler__v1__src__metadata__runtime_shim, packages__angular_compiler__v1__src__metadata__di_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const runtime_shim = packages__angular_compiler__v1__src__metadata__runtime_shim.v1__src__metadata__runtime_shim;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  var di_providers = Object.create(dart.library);
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  var MultiTokenL = () => (MultiTokenL = dart.constFn(dart.legacy(di_tokens.MultiToken)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/di_providers.dart";
  di_providers.RuntimeInjectorBuilder = class RuntimeInjectorBuilder extends core.Object {};
  (di_providers.RuntimeInjectorBuilder.new = function() {
    ;
  }).prototype = di_providers.RuntimeInjectorBuilder.prototype;
  dart.addTypeTests(di_providers.RuntimeInjectorBuilder);
  dart.addTypeCaches(di_providers.RuntimeInjectorBuilder);
  dart.setLibraryUri(di_providers.RuntimeInjectorBuilder, L0);
  var _buildAtRuntime = dart.privateName(di_providers, "_buildAtRuntime");
  var _listOfMulti = dart.privateName(di_providers, "_listOfMulti");
  const _is_Provider_default = Symbol('_is_Provider_default');
  var token$ = dart.privateName(di_providers, "Provider.token");
  var useClass$ = dart.privateName(di_providers, "Provider.useClass");
  var useValue$ = dart.privateName(di_providers, "Provider.useValue");
  var useExisting$ = dart.privateName(di_providers, "Provider.useExisting");
  var useFactory$ = dart.privateName(di_providers, "Provider.useFactory");
  var deps$ = dart.privateName(di_providers, "Provider.deps");
  var multi$ = dart.privateName(di_providers, "Provider.multi");
  di_providers.Provider$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    class Provider extends core.Object {
      get token() {
        return this[token$];
      }
      set token(value) {
        super.token = value;
      }
      get useClass() {
        return this[useClass$];
      }
      set useClass(value) {
        super.useClass = value;
      }
      get useValue() {
        return this[useValue$];
      }
      set useValue(value) {
        super.useValue = value;
      }
      get useExisting() {
        return this[useExisting$];
      }
      set useExisting(value) {
        super.useExisting = value;
      }
      get useFactory() {
        return this[useFactory$];
      }
      set useFactory(value) {
        super.useFactory = value;
      }
      get deps() {
        return this[deps$];
      }
      set deps(value) {
        super.deps = value;
      }
      get multi() {
        return this[multi$];
      }
      set multi(value) {
        super.multi = value;
      }
      [_buildAtRuntime](builder) {
        let t0;
        if (this.useValue !== "__noValueProvided__") {
          return builder.useValue(this.useValue);
        }
        if (this.useFactory != null) {
          return builder.useFactory(this.useFactory, {deps: this.deps});
        }
        if (this.useExisting != null) {
          return builder.useExisting(this.useExisting);
        }
        return builder.useClass((t0 = this.useClass, t0 == null ? runtime_shim.unsafeCast(TypeL(), this.token) : t0), {deps: this.deps});
      }
      [_listOfMulti]() {
        return JSArrayOfTL().of([]);
      }
    }
    (Provider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
      let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
      let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      this[token$] = token;
      this[useClass$] = useClass;
      this[useValue$] = useValue;
      this[useExisting$] = useExisting;
      this[useFactory$] = useFactory;
      this[deps$] = deps;
      this[multi$] = multi;
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      [_buildAtRuntime]: dart.fnType(dart.legacy(core.Object), [dart.legacy(di_providers.RuntimeInjectorBuilder)]),
      [_listOfMulti]: dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [])
    }));
    dart.setLibraryUri(Provider, L0);
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      token: dart.finalFieldType(dart.legacy(core.Object)),
      useClass: dart.finalFieldType(dart.legacy(core.Type)),
      useValue: dart.finalFieldType(dart.legacy(core.Object)),
      useExisting: dart.finalFieldType(dart.legacy(core.Object)),
      useFactory: dart.finalFieldType(dart.legacy(core.Function)),
      deps: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
      multi: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return Provider;
  });
  di_providers.Provider = di_providers.Provider$();
  dart.addTypeTests(di_providers.Provider, _is_Provider_default);
  const _is_ClassProvider_default = Symbol('_is_ClassProvider_default');
  di_providers.ClassProvider$ = dart.generic(T => {
    class ClassProvider extends di_providers.Provider$(dart.legacy(T)) {}
    (ClassProvider.__ = function(token, opts) {
      let t0;
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      ClassProvider.__proto__.__.call(this, token, {useClass: TypeL().as((t0 = useClass, t0 == null ? token : t0)), multi: multi});
      ;
    }).prototype = ClassProvider.prototype;
    dart.addTypeTests(ClassProvider);
    ClassProvider.prototype[_is_ClassProvider_default] = true;
    dart.addTypeCaches(ClassProvider);
    dart.setLibraryUri(ClassProvider, L0);
    return ClassProvider;
  });
  di_providers.ClassProvider = di_providers.ClassProvider$();
  dart.addTypeTests(di_providers.ClassProvider, _is_ClassProvider_default);
  const _is_ExistingProvider_default = Symbol('_is_ExistingProvider_default');
  di_providers.ExistingProvider$ = dart.generic(T => {
    class ExistingProvider extends di_providers.Provider$(dart.legacy(T)) {}
    (ExistingProvider.__ = function(token, useExisting, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ExistingProvider.__proto__.__.call(this, token, {useExisting: useExisting, multi: multi});
      ;
    }).prototype = ExistingProvider.prototype;
    dart.addTypeTests(ExistingProvider);
    ExistingProvider.prototype[_is_ExistingProvider_default] = true;
    dart.addTypeCaches(ExistingProvider);
    dart.setLibraryUri(ExistingProvider, L0);
    return ExistingProvider;
  });
  di_providers.ExistingProvider = di_providers.ExistingProvider$();
  dart.addTypeTests(di_providers.ExistingProvider, _is_ExistingProvider_default);
  const _is_FactoryProvider_default = Symbol('_is_FactoryProvider_default');
  di_providers.FactoryProvider$ = dart.generic(T => {
    class FactoryProvider extends di_providers.Provider$(dart.legacy(T)) {}
    (FactoryProvider.__ = function(token, useFactory, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      FactoryProvider.__proto__.__.call(this, token, {useFactory: useFactory, multi: multi, deps: deps});
      ;
    }).prototype = FactoryProvider.prototype;
    dart.addTypeTests(FactoryProvider);
    FactoryProvider.prototype[_is_FactoryProvider_default] = true;
    dart.addTypeCaches(FactoryProvider);
    dart.setLibraryUri(FactoryProvider, L0);
    return FactoryProvider;
  });
  di_providers.FactoryProvider = di_providers.FactoryProvider$();
  dart.addTypeTests(di_providers.FactoryProvider, _is_FactoryProvider_default);
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  di_providers.ValueProvider$ = dart.generic(T => {
    class ValueProvider extends di_providers.Provider$(dart.legacy(T)) {}
    (ValueProvider.__ = function(token, useValue, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ValueProvider.__proto__.__.call(this, token, {useValue: useValue, multi: multi});
      ;
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    dart.addTypeCaches(ValueProvider);
    dart.setLibraryUri(ValueProvider, L0);
    return ValueProvider;
  });
  di_providers.ValueProvider = di_providers.ValueProvider$();
  dart.addTypeTests(di_providers.ValueProvider, _is_ValueProvider_default);
  di_providers.provide = function provide(T, token, opts) {
    let useClass = opts && 'useClass' in opts ? opts.useClass : null;
    let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
    let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
    let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
    let deps = opts && 'deps' in opts ? opts.deps : null;
    let multi = opts && 'multi' in opts ? opts.multi : null;
    return new (di_providers.Provider$(dart.legacy(T))).__(token, {useClass: useClass, useValue: useValue, useExisting: useExisting, useFactory: useFactory, deps: deps, multi: multi});
  };
  di_providers.buildAtRuntime = function buildAtRuntime(provider, builder) {
    return provider[_buildAtRuntime](builder);
  };
  di_providers.listOfMulti = function listOfMulti(provider) {
    let token = provider.token;
    if (MultiTokenL().is(token)) {
      return di_tokens.listOfMultiToken(ObjectL(), token);
    }
    return provider[_listOfMulti]();
  };
  dart.defineLazy(di_providers, {
    /*di_providers.noValueProvided*/get noValueProvided() {
      return "__noValueProvided__";
    }
  }, true);
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/di_providers", {
    "package:angular_compiler/v1/src/metadata/di_providers.dart": di_providers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["di_providers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;EAyBA;;;;;;;;;;;;;;;;;;MAsCe;;;;;;MAUF;;;;;;MAcE;;;;;;MAKA;;;;;;MAYE;;;;;;MAGI;;;;;;MAOR;;;;;;wBAoCmC;;AAE5C,YAAe;AACb,gBAAO,AAAQ,QAAD,UAAU;;AAE1B,YAAI,mBAAc;AAChB,gBAAO,AAAQ,QAAD,YAAY,wBAAkB;;AAE9C,YAAI,oBAAe;AACjB,gBAAO,AAAQ,QAAD,aAAa;;AAE7B,cAAO,AAAQ,QAAD,WAAmB,0BAAT,OAAY,iCAAiB,0BAAc;MACrE;;AAG0B,cAAG;MAAE;;4BA5BxB;UACA;UACA;UACA;UACA;UACA;UACA;MANA;MACA;MACA;MACA;MACA;MACA;MACA;;IACL;;;;;;;;;;;;;;;;;;;;;;;;;;;iCAuEO;;UACF;UACA;AACI,4CACH,KAAK,yBAEc,KAAT,QAAQ,QAAR,OAAY,KAAK,gBACpB,KAAK;;IACb;;;;;;;;;;;;oCAwBE,OACA;UACgD;AAC9C,+CACH,KAAK,gBACQ,WAAW,SACjB,KAAK;;IACb;;;;;;;;;;;;mCA+BE,OACE;UACJ;UACQ;AACJ,8CACH,KAAK,eACO,UAAU,SACf,KAAK,QACN,IAAI;;IACX;;;;;;;;;;;;iCAgCE,OACL;UACG;AACI,4CACH,KAAK,aACK,QAAQ,SACX,KAAK;;IACb;;;;;;;;;6CA5SA;QACF;QACE;QACA;QACE;QACI;QAC0C;AAErD,2DACE,KAAK,aACK,QAAQ,YACR,QAAQ,eACL,WAAW,cACZ,UAAU,QAChB,IAAI,SACH,KAAK;EACb;wDAwH0B,UAAiC;AAC9D,UAAO,AAAS,SAAD,kBAAiB,OAAO;EACzC;kDAOkC;AAC1B,gBAAQ,AAAS,QAAD;AACtB,QAAU,iBAAN,KAAK;AACP,YAAO,uCAAiB,KAAK;;AAE/B,UAAO,AAAS,SAAD;EACjB;;MAlLa,4BAAe","file":"di_providers.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__di_providers: di_providers
  };
}));

//# sourceMappingURL=di_providers.unsound.ddc.js.map
