define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__view_type(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var view_type = Object.create(dart.library);
  var $toString = dartx.toString;
  var ViewTypeL = () => (ViewTypeL = dart.constFn(dart.legacy(view_type.ViewType)))();
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/view_type.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: view_type.ViewType.prototype,
        [_name$]: "ViewType.host",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: view_type.ViewType.prototype,
        [_name$]: "ViewType.component",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: view_type.ViewType.prototype,
        [_name$]: "ViewType.embedded",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], ViewTypeL());
    }
  }, false);
  var _name$ = dart.privateName(view_type, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  view_type.ViewType = class ViewType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (view_type.ViewType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = view_type.ViewType.prototype;
  dart.addTypeTests(view_type.ViewType);
  dart.addTypeCaches(view_type.ViewType);
  dart.setMethodSignature(view_type.ViewType, () => ({
    __proto__: dart.getMethods(view_type.ViewType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(view_type.ViewType, L0);
  dart.setFieldSignature(view_type.ViewType, () => ({
    __proto__: dart.getFields(view_type.ViewType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(view_type.ViewType, ['toString']);
  view_type.ViewType.host = C0 || CT.C0;
  view_type.ViewType.component = C1 || CT.C1;
  view_type.ViewType.embedded = C2 || CT.C2;
  view_type.ViewType.values = C3 || CT.C3;
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/view_type", {
    "package:angular_compiler/v1/src/metadata/view_type.dart": view_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["view_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcA;;4CAbK;;;;EAaL","file":"view_type.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__view_type: view_type
  };
}));

//# sourceMappingURL=view_type.unsound.ddc.js.map
