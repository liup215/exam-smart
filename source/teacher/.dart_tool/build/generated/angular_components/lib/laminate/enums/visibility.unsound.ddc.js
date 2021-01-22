define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base'], (function load__packages__angular_components__laminate__enums__visibility(dart_sdk, packages__angular_components__src__laminate__enums__base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base = packages__angular_components__src__laminate__enums__base.src__laminate__enums__base;
  var visibility = Object.create(dart.library);
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/enums/visibility.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_propertyValue$]: "none",
        [_propertyName$]: "display",
        [displayName$]: "None"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_propertyValue$]: "hidden",
        [_propertyName$]: "visibility",
        [displayName$]: "Hidden"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_propertyValue$]: null,
        [_propertyName$]: null,
        [displayName$]: "Visible"
      });
    }
  }, false);
  var _propertyName = dart.privateName(visibility, "_propertyName");
  var _propertyValue = dart.privateName(visibility, "_propertyValue");
  var displayName$ = dart.privateName(visibility, "Visibility.displayName");
  var _propertyName$ = dart.privateName(visibility, "Visibility._propertyName");
  var _propertyValue$ = dart.privateName(visibility, "Visibility._propertyValue");
  var C0;
  var C1;
  var C2;
  visibility.Visibility = class Visibility extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get [_propertyName]() {
      return this[_propertyName$];
    }
    set [_propertyName](value) {
      super[_propertyName] = value;
    }
    get [_propertyValue]() {
      return this[_propertyValue$];
    }
    set [_propertyValue](value) {
      super[_propertyValue] = value;
    }
    static fromBoolean(visible) {
      return dart.test(visible) ? visibility.Visibility.Visible : visibility.Visibility.None;
    }
    apply(setProperty) {
      if (this[_propertyName] != null) {
        setProperty(this[_propertyName], this[_propertyValue]);
      }
    }
    toString() {
      return "Visibility {" + dart.str(this.displayName) + "}";
    }
  };
  (visibility.Visibility.__ = function(displayName, _propertyName = null, _propertyValue = null) {
    this[displayName$] = displayName;
    this[_propertyName$] = _propertyName;
    this[_propertyValue$] = _propertyValue;
    ;
  }).prototype = visibility.Visibility.prototype;
  dart.addTypeTests(visibility.Visibility);
  dart.addTypeCaches(visibility.Visibility);
  visibility.Visibility[dart.implements] = () => [base.ElementStyleEnum];
  dart.setMethodSignature(visibility.Visibility, () => ({
    __proto__: dart.getMethods(visibility.Visibility.__proto__),
    apply: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.dynamic]))]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(visibility.Visibility, L0);
  dart.setFieldSignature(visibility.Visibility, () => ({
    __proto__: dart.getFields(visibility.Visibility.__proto__),
    displayName: dart.finalFieldType(dart.legacy(core.String)),
    [_propertyName]: dart.finalFieldType(dart.legacy(core.String)),
    [_propertyValue]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(visibility.Visibility, ['toString']);
  dart.defineLazy(visibility.Visibility, {
    /*visibility.Visibility.None*/get None() {
      return C0 || CT.C0;
    },
    /*visibility.Visibility.Hidden*/get Hidden() {
      return C1 || CT.C1;
    },
    /*visibility.Visibility.Visible*/get Visible() {
      return C2 || CT.C2;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/enums/visibility", {
    "package:angular_components/laminate/enums/visibility.dart": visibility
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["visibility.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBe;;;;;;IAEA;;;;;;IACA;;;;;;uBAEuB;AAClC,uBAAO,OAAO,IAAG,gCAAU;IAC7B;UAMyB;AACvB,UAAI,uBAAiB;AACuB,QAA1C,AAAW,WAAA,CAAC,qBAAe;;IAE/B;;AAGqB,YAAA,AAA2B,2BAAb,oBAAW;IAAE;;uCAXxB,aACd,sBAAoB;IADN;IACd;IAAoB;;EAAgB;;;;;;;;;;;;;;;;;;;MAnBjC,0BAAI;;;MAGJ,4BAAM;;;MAGN,6BAAO","file":"visibility.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__enums__visibility: visibility
  };
}));

//# sourceMappingURL=visibility.unsound.ddc.js.map
