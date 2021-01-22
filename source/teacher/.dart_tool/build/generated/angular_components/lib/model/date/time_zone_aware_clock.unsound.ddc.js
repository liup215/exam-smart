define(['dart_sdk', 'packages/quiver/src/time/clock', 'packages/logging/logging', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_compiler/v1/src/metadata'], (function load__packages__angular_components__model__date__time_zone_aware_clock(dart_sdk, packages__quiver__src__time__clock, packages__logging__logging, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_compiler__v1__src__metadata) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const logger = packages__logging__logging.src__logger;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  var time_zone_aware_clock = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isNaN = dartx.isNaN;
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var CompleterOfNull = () => (CompleterOfNull = dart.constFn(async.Completer$(core.Null)))();
  var SettableTimeZoneL = () => (SettableTimeZoneL = dart.constFn(dart.legacy(time_zone_aware_clock.SettableTimeZone)))();
  var VoidToSettableTimeZoneL = () => (VoidToSettableTimeZoneL = dart.constFn(dart.fnType(SettableTimeZoneL(), [])))();
  var TimeZoneAwareClockL = () => (TimeZoneAwareClockL = dart.constFn(dart.legacy(time_zone_aware_clock.TimeZoneAwareClock)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(di_providers.Provider)))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/date/time_zone_aware_clock.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "timeZoneAwareClock"
      });
    },
    get C4() {
      return C4 = dart.fn(time_zone_aware_clock.settableTimeZoneFactory, VoidToSettableTimeZoneL());
    },
    get C5() {
      return C5 = dart.wrapType(SettableTimeZoneL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C4 || CT.C4,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C5 || CT.C5
      });
    },
    get C7() {
      return C7 = dart.wrapType(TimeZoneAwareClockL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C7 || CT.C7,
        [Provider_token]: C7 || CT.C7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: di_providers.ExistingProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C7 || CT.C7,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C6 || CT.C6, C8 || CT.C8], ProviderL());
    },
    get C10() {
      return C10 = dart.constList([], ModuleL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C2 || CT.C2,
        [Module_include]: C10 || CT.C10
      });
    }
  }, false);
  var _now = dart.privateName(time_zone_aware_clock, "_now");
  time_zone_aware_clock.TimeZoneAwareClock = class TimeZoneAwareClock extends clock.Clock {
    toString() {
      return "TimeZoneAwareClock";
    }
  };
  (time_zone_aware_clock.TimeZoneAwareClock.new = function(timeZone) {
    time_zone_aware_clock.TimeZoneAwareClock.__proto__.new.call(this, dart.bind(timeZone, _now));
    ;
  }).prototype = time_zone_aware_clock.TimeZoneAwareClock.prototype;
  (time_zone_aware_clock.TimeZoneAwareClock.fixed = function(time) {
    time_zone_aware_clock.TimeZoneAwareClock.__proto__.new.call(this, dart.fn(() => time, VoidToDateTimeL()));
    ;
  }).prototype = time_zone_aware_clock.TimeZoneAwareClock.prototype;
  dart.addTypeTests(time_zone_aware_clock.TimeZoneAwareClock);
  dart.addTypeCaches(time_zone_aware_clock.TimeZoneAwareClock);
  dart.setMethodSignature(time_zone_aware_clock.TimeZoneAwareClock, () => ({
    __proto__: dart.getMethods(time_zone_aware_clock.TimeZoneAwareClock.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(time_zone_aware_clock.TimeZoneAwareClock, L0);
  dart.defineExtensionMethods(time_zone_aware_clock.TimeZoneAwareClock, ['toString']);
  var C0;
  var _initialized = dart.privateName(time_zone_aware_clock, "_initialized");
  var _offsetFromUtc = dart.privateName(time_zone_aware_clock, "_offsetFromUtc");
  var _time = dart.privateName(time_zone_aware_clock, "_time");
  var _throwIfNotInitialized = dart.privateName(time_zone_aware_clock, "_throwIfNotInitialized");
  time_zone_aware_clock.SettableTimeZone = class SettableTimeZone extends core.Object {
    get offsetFromUtc() {
      return this[_offsetFromUtc];
    }
    set offsetFromUtc(newOffset) {
      if (newOffset != null && newOffset.inMicroseconds == null) {
        dart.throw(new core.ArgumentError.value(newOffset, "newOffset" + "holds a null or undefined value"));
      }
      if (newOffset != null && newOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.ArgumentError.value(newOffset, "newOffset" + "is NaN!"));
      }
      if (!dart.test(this[_initialized].isCompleted) && newOffset != null) {
        this[_initialized].complete();
      }
      this[_offsetFromUtc] = newOffset;
    }
    get isInitialized() {
      return this[_offsetFromUtc] != null;
    }
    get onInit() {
      return this[_initialized].future;
    }
    [_now]() {
      let systemTime = this[_time]();
      if (this.offsetFromUtc == null) {
        if (dart.test(this[_throwIfNotInitialized])) {
          dart.throw(new core.StateError.new("TimeZoneAwareClock not initialized with time zone data"));
        } else {
          time_zone_aware_clock._logger.severe("not initialized with time zone data");
          return systemTime;
        }
      } else if (systemTime.timeZoneOffset.inMicroseconds == null) {
        dart.throw(new core.StateError.new("System time has a null or undefined timezone offset! " + dart.str(systemTime)));
      } else if (systemTime.timeZoneOffset.inMicroseconds[$isNaN]) {
        dart.throw(new core.StateError.new("System time has a NaN timezone offset! " + dart.str(systemTime)));
      }
      let offset = this.offsetFromUtc['-'](systemTime.timeZoneOffset);
      if (offset.inMicroseconds == null) {
        dart.throw(new core.StateError.new("Computed time offset is null or undefined! " + dart.str(this.offsetFromUtc) + " - " + dart.str(systemTime.timeZoneOffset) + " = " + dart.str(offset)));
      }
      if (offset.inMicroseconds[$isNaN]) {
        dart.throw(new core.StateError.new("Computed time offset is NaN! " + dart.str(this.offsetFromUtc) + " - " + dart.str(systemTime.timeZoneOffset) + " = " + dart.str(offset)));
      }
      return systemTime.add(offset);
    }
  };
  (time_zone_aware_clock.SettableTimeZone.new = function(timeFunc = C0 || CT.C0, throwIfNotInitialized = false) {
    this[_initialized] = CompleterOfNull().new();
    this[_offsetFromUtc] = null;
    this[_time] = timeFunc;
    this[_throwIfNotInitialized] = throwIfNotInitialized;
    ;
  }).prototype = time_zone_aware_clock.SettableTimeZone.prototype;
  dart.addTypeTests(time_zone_aware_clock.SettableTimeZone);
  dart.addTypeCaches(time_zone_aware_clock.SettableTimeZone);
  dart.setMethodSignature(time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getMethods(time_zone_aware_clock.SettableTimeZone.__proto__),
    [_now]: dart.fnType(dart.legacy(core.DateTime), [])
  }));
  dart.setGetterSignature(time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getGetters(time_zone_aware_clock.SettableTimeZone.__proto__),
    offsetFromUtc: dart.legacy(core.Duration),
    isInitialized: dart.legacy(core.bool),
    onInit: dart.legacy(async.Future$(core.Null))
  }));
  dart.setSetterSignature(time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getSetters(time_zone_aware_clock.SettableTimeZone.__proto__),
    offsetFromUtc: dart.legacy(core.Duration)
  }));
  dart.setLibraryUri(time_zone_aware_clock.SettableTimeZone, L0);
  dart.setFieldSignature(time_zone_aware_clock.SettableTimeZone, () => ({
    __proto__: dart.getFields(time_zone_aware_clock.SettableTimeZone.__proto__),
    [_time]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.DateTime), []))),
    [_initialized]: dart.finalFieldType(dart.legacy(async.Completer$(core.Null))),
    [_throwIfNotInitialized]: dart.finalFieldType(dart.legacy(core.bool)),
    [_offsetFromUtc]: dart.fieldType(dart.legacy(core.Duration))
  }));
  time_zone_aware_clock.clockFactory = function clockFactory(timeZone) {
    return new time_zone_aware_clock.TimeZoneAwareClock.new(timeZone);
  };
  time_zone_aware_clock.settableTimeZoneFactory = function settableTimeZoneFactory() {
    return new time_zone_aware_clock.SettableTimeZone.new();
  };
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C1;
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var C4;
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var C5;
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C3;
  var C7;
  var C6;
  var C8;
  var C2;
  var Module_provide = dart.privateName(di_modules, "Module.provide");
  var C10;
  var Module_include = dart.privateName(di_modules, "Module.include");
  var C9;
  dart.defineLazy(time_zone_aware_clock, {
    /*time_zone_aware_clock._logger*/get _logger() {
      return logger.Logger.new("third_party.dart_src.acx.model.date.time_zone_aware_clock");
    },
    /*time_zone_aware_clock.timeZoneAwareClock*/get timeZoneAwareClock() {
      return C1 || CT.C1;
    },
    /*time_zone_aware_clock.timeZoneAwareClockProviders*/get timeZoneAwareClockProviders() {
      return C2 || CT.C2;
    },
    /*time_zone_aware_clock.timeZoneAwareClockModule*/get timeZoneAwareClockModule() {
      return C9 || CT.C9;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/model/date/time_zone_aware_clock", {
    "package:angular_components/model/date/time_zone_aware_clock.dart": time_zone_aware_clock
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["time_zone_aware_clock.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4DuB;IAAoB;;2DAPL;AAAY,sEAAe,UAAT,QAAQ;;EAAM;6DAIlC;AAAQ,sEAAM,cAAM,IAAI;;EAAC;;;;;;;;;;;;;;;;;AAyB7B;IAAc;sBACjB;AACzB,UAAI,SAAS,IAAI,QAAQ,AAAU,AAAe,SAAhB,mBAAmB;AAEU,QAD7D,WAAoB,6BAChB,SAAS,EAAE,cAAY;;AAE7B,UAAI,SAAS,IAAI,QAAQ,AAAU,AAAe,SAAhB;AAC2B,QAA3D,WAAoB,6BAAM,SAAS,EAAE,cAAY;;AAGnD,qBAAK,AAAa,mCAAe,SAAS,IAAI;AACrB,QAAvB,AAAa;;AAEW,MAA1B,uBAAiB,SAAS;IAC5B;;AAK0B,YAAA,AAAe,yBAAG;IAAI;;AAIrB,YAAA,AAAa;IAAM;;AAkBxC,uBAAa,AAAK;AACtB,UAAI,AAAc,sBAAG;AAEnB,sBAAI;AAE2D,UAD7D,WAAM,wBACF;;AAEiD,UAArD,AAAQ,qCAAO;AACf,gBAAO,WAAU;;YAEd,KAAI,AAAW,AAAe,AAAe,UAA/B,kCAAkC;AAEkB,QADvE,WAAM,wBACF,AAAkE,mEAAX,UAAU;YAChE,KAAI,AAAW,AAAe,AAAe,UAA/B;AACmD,QAAtE,WAAM,wBAAW,AAAoD,qDAAX,UAAU;;AAKlE,mBAAS,AAAc,wBAAE,AAAW,UAAD;AACvC,UAAI,AAAO,AAAe,MAAhB,mBAAmB;AAEmC,QAD9D,WAAM,wBAAU,AAAC,yDACX,sBAAa,iBAAK,AAAW,UAAD,mBAAgB,iBAAI,MAAM;;AAE9D,UAAI,AAAO,AAAe,MAAhB;AAEsD,QAD9D,WAAM,wBAAU,AAAC,2CACX,sBAAa,iBAAK,AAAW,UAAD,mBAAgB,iBAAI,MAAM;;AAE9D,YAAO,AAAW,WAAD,KAAK,MAAM;IAC9B;;yDArCkB,wBAA4B;IAxCxC,qBAAe;IAuBZ;IAkBG,cAAE,QAAQ;IACO,+BAAE,qBAAqB;;;;;;;;;;;;;;;;;;;;;;;;;;;6DArDlB;AAAa,4DAAmB,QAAQ;EAAC;;AAK/B;EAAkB;;;;;;;;;;;;;;;;;;;;;;MA1D1D,6BAAO;YACT,mBAAO;;MAOL,wCAAkB;;;MAIlB,iDAA2B;;;MAO3B,8CAAwB","file":"time_zone_aware_clock.unsound.ddc.js"}');
  // Exports:
  return {
    model__date__time_zone_aware_clock: time_zone_aware_clock
  };
}));

//# sourceMappingURL=time_zone_aware_clock.unsound.ddc.js.map
