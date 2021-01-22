define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__di_arguments(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var di_arguments = Object.create(dart.library);
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/di_arguments.dart";
  var token$ = dart.privateName(di_arguments, "Inject.token");
  di_arguments.Inject = class Inject extends core.Object {
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    toString() {
      return "@Inject(" + dart.str(this.token) + ")";
    }
  };
  (di_arguments.Inject.new = function(token) {
    this[token$] = token;
    ;
  }).prototype = di_arguments.Inject.prototype;
  dart.addTypeTests(di_arguments.Inject);
  dart.addTypeCaches(di_arguments.Inject);
  dart.setMethodSignature(di_arguments.Inject, () => ({
    __proto__: dart.getMethods(di_arguments.Inject.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(di_arguments.Inject, L0);
  dart.setFieldSignature(di_arguments.Inject, () => ({
    __proto__: dart.getFields(di_arguments.Inject.__proto__),
    token: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(di_arguments.Inject, ['toString']);
  di_arguments.Injectable = class Injectable extends core.Object {};
  (di_arguments.Injectable.new = function() {
    ;
  }).prototype = di_arguments.Injectable.prototype;
  dart.addTypeTests(di_arguments.Injectable);
  dart.addTypeCaches(di_arguments.Injectable);
  dart.setLibraryUri(di_arguments.Injectable, L0);
  di_arguments.Optional = class Optional extends core.Object {};
  (di_arguments.Optional.new = function() {
    ;
  }).prototype = di_arguments.Optional.prototype;
  dart.addTypeTests(di_arguments.Optional);
  dart.addTypeCaches(di_arguments.Optional);
  dart.setLibraryUri(di_arguments.Optional, L0);
  di_arguments.Self = class Self extends core.Object {};
  (di_arguments.Self.new = function() {
    ;
  }).prototype = di_arguments.Self.prototype;
  dart.addTypeTests(di_arguments.Self);
  dart.addTypeCaches(di_arguments.Self);
  dart.setLibraryUri(di_arguments.Self, L0);
  di_arguments.SkipSelf = class SkipSelf extends core.Object {};
  (di_arguments.SkipSelf.new = function() {
    ;
  }).prototype = di_arguments.SkipSelf.prototype;
  dart.addTypeTests(di_arguments.SkipSelf);
  dart.addTypeCaches(di_arguments.SkipSelf);
  dart.setLibraryUri(di_arguments.SkipSelf, L0);
  di_arguments.Host = class Host extends core.Object {};
  (di_arguments.Host.new = function() {
    ;
  }).prototype = di_arguments.Host.prototype;
  dart.addTypeTests(di_arguments.Host);
  dart.addTypeCaches(di_arguments.Host);
  dart.setLibraryUri(di_arguments.Host, L0);
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/di_arguments", {
    "package:angular_compiler/v1/src/metadata/di_arguments.dart": di_arguments
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["di_arguments.dart"],"names":[],"mappings":";;;;;;;;;;;IAwCQ;;;;;;;AAKe,YAAA,AAAiB,uBAAP,cAAK;IAAE;;;IAHpB;;EAAM;;;;;;;;;;;;;;;;;EA6DN;;;;;;;EAsBF;;;;;;;EA0BJ;;;;;;;EA0BI;;;;;;;EAyDJ","file":"di_arguments.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__di_arguments: di_arguments
  };
}));

//# sourceMappingURL=di_arguments.unsound.ddc.js.map
