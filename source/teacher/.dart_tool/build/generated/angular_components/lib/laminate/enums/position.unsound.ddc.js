define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base'], (function load__packages__angular_components__laminate__enums__position(dart_sdk, packages__angular_components__src__laminate__enums__base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base = packages__angular_components__src__laminate__enums__base.src__laminate__enums__base;
  var position = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/enums/position.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: position.Position.prototype,
        [_cssPropertyValue$]: "static"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: position.Position.prototype,
        [_cssPropertyValue$]: "relative"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: position.Position.prototype,
        [_cssPropertyValue$]: "fixed"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: position.Position.prototype,
        [_cssPropertyValue$]: "absolute"
      });
    }
  }, false);
  var _cssPropertyValue = dart.privateName(position, "_cssPropertyValue");
  var _cssPropertyValue$ = dart.privateName(position, "Position._cssPropertyValue");
  var C0;
  var C1;
  var C2;
  var C3;
  position.Position = class Position extends core.Object {
    get [_cssPropertyValue]() {
      return this[_cssPropertyValue$];
    }
    set [_cssPropertyValue](value) {
      super[_cssPropertyValue] = value;
    }
    apply(setProperty) {
      setProperty("position", this[_cssPropertyValue]);
    }
  };
  (position.Position.__ = function(_cssPropertyValue) {
    this[_cssPropertyValue$] = _cssPropertyValue;
    ;
  }).prototype = position.Position.prototype;
  dart.addTypeTests(position.Position);
  dart.addTypeCaches(position.Position);
  position.Position[dart.implements] = () => [base.ElementStyleEnum];
  dart.setMethodSignature(position.Position, () => ({
    __proto__: dart.getMethods(position.Position.__proto__),
    apply: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.dynamic]))])
  }));
  dart.setLibraryUri(position.Position, L0);
  dart.setFieldSignature(position.Position, () => ({
    __proto__: dart.getFields(position.Position.__proto__),
    [_cssPropertyValue]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(position.Position, {
    /*position.Position.Static*/get Static() {
      return C0 || CT.C0;
    },
    /*position.Position.Relative*/get Relative() {
      return C1 || CT.C1;
    },
    /*position.Position.Fixed*/get Fixed() {
      return C2 || CT.C2;
    },
    /*position.Position.Absolute*/get Absolute() {
      return C3 || CT.C3;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/enums/position", {
    "package:angular_components/laminate/enums/position.dart": position
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["position.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAce;;;;;;UAKY;AACmB,MAA1C,AAAW,WAAA,CAAC,YAAY;IAC1B;;;IALsB;;EAAkB;;;;;;;;;;;;;;MAP3B,wBAAM;;;MACN,0BAAQ;;;MACR,uBAAK;;;MACL,0BAAQ","file":"position.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__enums__position: position
  };
}));

//# sourceMappingURL=position.unsound.ddc.js.map
