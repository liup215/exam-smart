define(['dart_sdk'], (function load__packages__angular_components__utils__id_generator__id_generator(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var id_generator = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $map = dartx.map;
  var $join = dartx.join;
  var $toUpperCase = dartx.toUpperCase;
  var $substring = dartx.substring;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var intLTointL = () => (intLTointL = dart.constFn(dart.fnType(intL(), [intL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var intLToStringL = () => (intLToStringL = dart.constFn(dart.fnType(StringL(), [intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/id_generator/id_generator.dart";
  id_generator.IdGenerator = class IdGenerator extends core.Object {};
  (id_generator.IdGenerator.new = function() {
    ;
  }).prototype = id_generator.IdGenerator.prototype;
  dart.addTypeTests(id_generator.IdGenerator);
  dart.addTypeCaches(id_generator.IdGenerator);
  dart.setLibraryUri(id_generator.IdGenerator, L0);
  var _seq = dart.privateName(id_generator, "_seq");
  var _prefix$ = dart.privateName(id_generator, "_prefix");
  id_generator.SequentialIdGenerator = class SequentialIdGenerator extends core.Object {
    nextId() {
      let t0;
      return dart.str(this[_prefix$]) + "--" + dart.str((t0 = this[_seq], this[_seq] = dart.notNull(t0) + 1, t0));
    }
    static _createUuid() {
      let bytes = ListOfintL().generate(16, dart.fn(_ => id_generator.SequentialIdGenerator._rnd.nextInt(256), intLTointL()));
      bytes[$_set](6, dart.notNull(bytes[$_get](6)) & 15 | 64);
      bytes[$_set](8, dart.notNull(bytes[$_get](8)) & 63 | 128);
      let chars = bytes[$map](StringL(), dart.fn(b => b[$toRadixString](16)[$padLeft](2, "0"), intLToStringL()))[$join]()[$toUpperCase]();
      return chars[$substring](0, 8) + "-" + chars[$substring](8, 12) + "-" + chars[$substring](12, 16) + "-" + chars[$substring](16, 20) + "-" + chars[$substring](20, 32);
    }
  };
  (id_generator.SequentialIdGenerator.new = function(_prefix) {
    this[_seq] = 0;
    this[_prefix$] = _prefix;
    ;
  }).prototype = id_generator.SequentialIdGenerator.prototype;
  (id_generator.SequentialIdGenerator.fromUUID = function() {
    id_generator.SequentialIdGenerator.new.call(this, id_generator.SequentialIdGenerator._createUuid());
  }).prototype = id_generator.SequentialIdGenerator.prototype;
  dart.addTypeTests(id_generator.SequentialIdGenerator);
  dart.addTypeCaches(id_generator.SequentialIdGenerator);
  id_generator.SequentialIdGenerator[dart.implements] = () => [id_generator.IdGenerator];
  dart.setMethodSignature(id_generator.SequentialIdGenerator, () => ({
    __proto__: dart.getMethods(id_generator.SequentialIdGenerator.__proto__),
    nextId: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(id_generator.SequentialIdGenerator, L0);
  dart.setFieldSignature(id_generator.SequentialIdGenerator, () => ({
    __proto__: dart.getFields(id_generator.SequentialIdGenerator.__proto__),
    [_prefix$]: dart.finalFieldType(dart.legacy(core.String)),
    [_seq]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(id_generator.SequentialIdGenerator, {
    /*id_generator.SequentialIdGenerator._rnd*/get _rnd() {
      return math.Random.new();
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/id_generator/id_generator", {
    "package:angular_components/utils/id_generator/id_generator.dart": id_generator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["id_generator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;EAUA;;;;;;;;;AA2BqB,YAAqB,UAAnB,kBAAO,iBAAQ,iBAAJ,gCAAI;IAAI;;AAQlC,kBAAQ,sBAAmB,IAAI,QAAC,KAAM,AAAK,gDAAQ;AACpB,MAAnC,AAAK,KAAA,QAAC,GAAe,AAAQ,aAAjB,AAAK,KAAA,QAAC,MAAK,KAAQ;AACI,MAAnC,AAAK,KAAA,QAAC,GAAe,AAAQ,aAAjB,AAAK,KAAA,QAAC,MAAK,KAAQ;AAE3B,kBAAQ,AACP,AACA,AACA,KAHY,kBACR,QAAC,KAAM,AAAE,AAAkB,CAAnB,iBAAe,cAAY,GAAG;AAI/C,YAAU,AAAM,MAAD,aAAW,GAAG,KAAG,MAAG,AAAM,KAAD,aAAW,GAAG,MAAI,MACnD,AAAM,KAAD,aAAW,IAAI,MAAI,MAAG,AAAM,KAAD,aAAW,IAAI,MAAI,MACnD,AAAM,KAAD,aAAW,IAAI;IAC7B;;qDAhC2B;IARvB,aAAO;IAQgB;;EAAQ;;sDASK;EAAc;;;;;;;;;;;;;;;MAnBzC,uCAAI;YAAQ","file":"id_generator.unsound.ddc.js"}');
  // Exports:
  return {
    utils__id_generator__id_generator: id_generator
  };
}));

//# sourceMappingURL=id_generator.unsound.ddc.js.map
