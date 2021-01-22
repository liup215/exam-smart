define(['dart_sdk'], (function load__packages__angular_components__model__math__box(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var box = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/math/box.dart";
  var top$ = dart.privateName(box, "Box.top");
  var right$ = dart.privateName(box, "Box.right");
  var bottom$ = dart.privateName(box, "Box.bottom");
  var left$ = dart.privateName(box, "Box.left");
  box.Box = class Box extends core.Object {
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
  };
  (box.Box.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : 0;
    let right = opts && 'right' in opts ? opts.right : 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    let left = opts && 'left' in opts ? opts.left : 0;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[left$] = left;
    ;
  }).prototype = box.Box.prototype;
  dart.addTypeTests(box.Box);
  dart.addTypeCaches(box.Box);
  dart.setLibraryUri(box.Box, L0);
  dart.setFieldSignature(box.Box, () => ({
    __proto__: dart.getFields(box.Box.__proto__),
    top: dart.finalFieldType(dart.legacy(core.int)),
    right: dart.finalFieldType(dart.legacy(core.int)),
    bottom: dart.finalFieldType(dart.legacy(core.int)),
    left: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.trackLibraries("packages/angular_components/model/math/box", {
    "package:angular_components/model/math/box.dart": box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box.dart"],"names":[],"mappings":";;;;;;;;;;;;;IASY;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAEM;QAAc;QAAgB;QAAiB;IAA/C;IAAc;IAAgB;IAAiB;;EAAU","file":"box.unsound.ddc.js"}');
  // Exports:
  return {
    model__math__box: box
  };
}));

//# sourceMappingURL=box.unsound.ddc.js.map
