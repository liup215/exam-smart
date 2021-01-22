define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__view(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var view = Object.create(dart.library);
  var $toString = dartx.toString;
  var ViewEncapsulationL = () => (ViewEncapsulationL = dart.constFn(dart.legacy(view.ViewEncapsulation)))();
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/view.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: view.ViewEncapsulation.prototype,
        [_name$]: "ViewEncapsulation.Emulated",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: view.ViewEncapsulation.prototype,
        [_name$]: "ViewEncapsulation.None",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], ViewEncapsulationL());
    }
  }, false);
  var _name$ = dart.privateName(view, "_name");
  var C0;
  var C1;
  var C2;
  view.ViewEncapsulation = class ViewEncapsulation extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (view.ViewEncapsulation.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = view.ViewEncapsulation.prototype;
  dart.addTypeTests(view.ViewEncapsulation);
  dart.addTypeCaches(view.ViewEncapsulation);
  dart.setMethodSignature(view.ViewEncapsulation, () => ({
    __proto__: dart.getMethods(view.ViewEncapsulation.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(view.ViewEncapsulation, L0);
  dart.setFieldSignature(view.ViewEncapsulation, () => ({
    __proto__: dart.getFields(view.ViewEncapsulation.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(view.ViewEncapsulation, ['toString']);
  view.ViewEncapsulation.Emulated = C0 || CT.C0;
  view.ViewEncapsulation.None = C1 || CT.C1;
  view.ViewEncapsulation.values = C2 || CT.C2;
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/view", {
    "package:angular_compiler/v1/src/metadata/view.dart": view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAeA;;gDAXK;;;;EAWL","file":"view.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__view: view
  };
}));

//# sourceMappingURL=view.unsound.ddc.js.map
