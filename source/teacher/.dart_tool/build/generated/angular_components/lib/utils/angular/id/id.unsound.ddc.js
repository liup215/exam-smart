define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator'], (function load__packages__angular_components__utils__angular__id__id(dart_sdk, packages__angular_components__utils__id_generator__id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  var id = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/angular/id/id.dart";
  var id$ = dart.privateName(id, "AutoIdDirective.id");
  id.AutoIdDirective = class AutoIdDirective extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
  };
  (id.AutoIdDirective.new = function(idGenerator, existingId) {
    let t1, t0;
    this[id$] = (t0 = existingId, t0 == null ? (t1 = idGenerator, t1 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t1).nextId() : t0);
    ;
  }).prototype = id.AutoIdDirective.prototype;
  dart.addTypeTests(id.AutoIdDirective);
  dart.addTypeCaches(id.AutoIdDirective);
  dart.setLibraryUri(id.AutoIdDirective, L0);
  dart.setFieldSignature(id.AutoIdDirective, () => ({
    __proto__: dart.getFields(id.AutoIdDirective.__proto__),
    id: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/id/id", {
    "package:angular_components/utils/angular/id/id.dart": id
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["id.dart"],"names":[],"mappings":";;;;;;;;;;;IAoBe;;;;;;;qCAGe,aAAqC;;IACxD,aAAa,KAAX,UAAU,QAAV,OACkD,CAArC,KAAZ,WAAW,QAAX,OAAqC;;EAAqB","file":"id.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__id__id: id
  };
}));

//# sourceMappingURL=id.unsound.ddc.js.map
