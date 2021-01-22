define(['dart_sdk', 'packages/protobuf/protobuf'], (function load__packages__angular_components__material_datepicker__proto__date_pb(dart_sdk, packages__protobuf__protobuf) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  var date$46pb = Object.create(dart.library);
  var DateL = () => (DateL = dart.constFn(dart.legacy(date$46pb.Date)))();
  var GeneratedMessageL = () => (GeneratedMessageL = dart.constFn(dart.legacy(protobuf.GeneratedMessage)))();
  var GeneratedMessageLTovoid = () => (GeneratedMessageLTovoid = dart.constFn(dart.fnType(dart.void, [GeneratedMessageL()])))();
  var PbListOfDateL = () => (PbListOfDateL = dart.constFn(protobuf.PbList$(DateL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/proto/date.pb.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "angular_components.lib.material_datepicker.proto"
      });
    }
  }, false);
  var C0;
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  var C1;
  date$46pb.Date = class Date extends protobuf.GeneratedMessage {
    clone() {
      let t0;
      t0 = new date$46pb.Date.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return DateL().as(super.copyWith(dart.fn(message => updates(DateL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return date$46pb.Date._i;
    }
    static create() {
      return new date$46pb.Date.new();
    }
    createEmptyInstance() {
      return date$46pb.Date.create();
    }
    static createRepeated() {
      return new (PbListOfDateL()).new();
    }
    static getDefault() {
      let t1, t0;
      t0 = date$46pb.Date._defaultInstance;
      return t0 == null ? date$46pb.Date._defaultInstance = (t1 = date$46pb.Date.create(), (() => {
        t1.freeze();
        return t1;
      })()) : t0;
    }
    get year() {
      return this.$_get(intL(), 0, 0);
    }
    set year(v) {
      this.$_setSignedInt32(0, v);
    }
    hasYear() {
      return this.$_has(0);
    }
    clearYear() {
      return this.clearField(1);
    }
    get month() {
      return this.$_get(intL(), 1, 0);
    }
    set month(v) {
      this.$_setSignedInt32(1, v);
    }
    hasMonth() {
      return this.$_has(1);
    }
    clearMonth() {
      return this.clearField(2);
    }
    get day() {
      return this.$_get(intL(), 2, 0);
    }
    set day(v) {
      this.$_setSignedInt32(2, v);
    }
    hasDay() {
      return this.$_has(2);
    }
    clearDay() {
      return this.clearField(3);
    }
  };
  (date$46pb.Date.new = function() {
    date$46pb.Date.__proto__.new.call(this);
    ;
  }).prototype = date$46pb.Date.prototype;
  (date$46pb.Date.fromBuffer = function(i, r = C0 || CT.C0) {
    date$46pb.Date.__proto__.fromBuffer.call(this, i, r);
    ;
  }).prototype = date$46pb.Date.prototype;
  (date$46pb.Date.fromJson = function(i, r = C0 || CT.C0) {
    date$46pb.Date.__proto__.fromJson.call(this, i, r);
    ;
  }).prototype = date$46pb.Date.prototype;
  dart.addTypeTests(date$46pb.Date);
  dart.addTypeCaches(date$46pb.Date);
  dart.setMethodSignature(date$46pb.Date, () => ({
    __proto__: dart.getMethods(date$46pb.Date.__proto__),
    clone: dart.fnType(dart.legacy(date$46pb.Date), []),
    copyWith: dart.fnType(dart.legacy(date$46pb.Date), [dart.legacy(dart.fnType(dart.void, [dart.legacy(date$46pb.Date)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(date$46pb.Date), []),
    hasYear: dart.fnType(dart.legacy(core.bool), []),
    clearYear: dart.fnType(dart.void, []),
    hasMonth: dart.fnType(dart.legacy(core.bool), []),
    clearMonth: dart.fnType(dart.void, []),
    hasDay: dart.fnType(dart.legacy(core.bool), []),
    clearDay: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(date$46pb.Date, () => ({
    __proto__: dart.getGetters(date$46pb.Date.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    year: dart.legacy(core.int),
    month: dart.legacy(core.int),
    day: dart.legacy(core.int)
  }));
  dart.setSetterSignature(date$46pb.Date, () => ({
    __proto__: dart.getSetters(date$46pb.Date.__proto__),
    year: dart.legacy(core.int),
    month: dart.legacy(core.int),
    day: dart.legacy(core.int)
  }));
  dart.setLibraryUri(date$46pb.Date, L0);
  dart.defineLazy(date$46pb.Date, {
    /*date$46pb.Date._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new("Date", {package: C1 || CT.C1}), (() => {
        t0.a(intL(), 1, "year", 2048);
        t0.a(intL(), 2, "month", 2048);
        t0.a(intL(), 3, "day", 2048);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*date$46pb.Date._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date.pb", {
    "package:angular_components/material_datepicker/proto/date.pb.dart": date$46pb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date.pb.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BkB;;AAAQ,4BAAiB;;;IAAK;aACZ;AAC9B,wBAAM,eAAS,QAAC,WAAY,AAAO,OAAA,CAAS,WAAR,OAAO;IAAU;;AAC5B;IAAE;;AACP;IAAM;;AACA;IAAQ;;AACM,YAAI;IAAc;;;AAClC;0BAAiB,iEAAI;AAAU;;;IAAQ;;AAG7C,gCAAM,GAAG;IAAE;aACd;AACK,MAAtB,sBAAiB,GAAG,CAAC;IACvB;;AAEwB,wBAAM;IAAE;;AACZ,6BAAW;IAAE;;AAEV,gCAAM,GAAG;IAAE;cACd;AACI,MAAtB,sBAAiB,GAAG,CAAC;IACvB;;AAEyB,wBAAM;IAAE;;AACZ,6BAAW;IAAE;;AAEb,gCAAM,GAAG;IAAE;YACd;AACM,MAAtB,sBAAiB,GAAG,CAAC;IACvB;;AAEuB,wBAAM;IAAE;;AACZ,6BAAW;IAAE;;;AAvCvB;;EAAO;wCACsB,GACX;AACf,mDAAW,CAAC,EAAE,CAAC;;EAAC;sCACD,GACA;AACf,iDAAS,CAAC,EAAE,CAAC;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAdG,iBAAE;;kBAAO,6BAAY,iCAAZ;AAGlC,qBAAa,GAAG;AAChB,qBAAa,GAAG;AAChB,qBAAa,GAAG;AAChB,+BAAoB;;;;MAiBZ,+BAAgB","file":"date.pb.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date$46pb: date$46pb
  };
}));

//# sourceMappingURL=date.pb.unsound.ddc.js.map
