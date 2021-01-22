define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__visibility(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var visibility = Object.create(dart.library);
  var $toString = dartx.toString;
  var VisibilityL = () => (VisibilityL = dart.constFn(dart.legacy(visibility.Visibility)))();
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/visibility.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name$]: "Visibility.local",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name$]: "Visibility.all",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], VisibilityL());
    }
  }, false);
  var _name$ = dart.privateName(visibility, "_name");
  var C0;
  var C1;
  var C2;
  visibility.Visibility = class Visibility extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (visibility.Visibility.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = visibility.Visibility.prototype;
  dart.addTypeTests(visibility.Visibility);
  dart.addTypeCaches(visibility.Visibility);
  dart.setMethodSignature(visibility.Visibility, () => ({
    __proto__: dart.getMethods(visibility.Visibility.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(visibility.Visibility, L0);
  dart.setFieldSignature(visibility.Visibility, () => ({
    __proto__: dart.getFields(visibility.Visibility.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(visibility.Visibility, ['toString']);
  visibility.Visibility.local = C0 || CT.C0;
  visibility.Visibility.all = C1 || CT.C1;
  visibility.Visibility.values = C2 || CT.C2;
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/visibility", {
    "package:angular_compiler/v1/src/metadata/visibility.dart": visibility
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["visibility.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6HA;;+CA1HK;;;;EA0HL","file":"visibility.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__visibility: visibility
  };
}));

//# sourceMappingURL=visibility.unsound.ddc.js.map
