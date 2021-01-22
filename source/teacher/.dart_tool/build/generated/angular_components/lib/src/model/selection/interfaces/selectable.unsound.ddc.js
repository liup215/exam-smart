define(['dart_sdk'], (function load__packages__angular_components__src__model__selection__interfaces__selectable(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var selectable = Object.create(dart.library);
  var $toString = dartx.toString;
  var SelectableOptionL = () => (SelectableOptionL = dart.constFn(dart.legacy(selectable.SelectableOption)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/model/selection/interfaces/selectable.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: selectable.SelectableOption.prototype,
        [_name$]: "SelectableOption.Selectable",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: selectable.SelectableOption.prototype,
        [_name$]: "SelectableOption.Disabled",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: selectable.SelectableOption.prototype,
        [_name$]: "SelectableOption.Hidden",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], SelectableOptionL());
    }
  }, false);
  var _name$ = dart.privateName(selectable, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  selectable.SelectableOption = class SelectableOption extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (selectable.SelectableOption.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = selectable.SelectableOption.prototype;
  dart.addTypeTests(selectable.SelectableOption);
  dart.addTypeCaches(selectable.SelectableOption);
  dart.setMethodSignature(selectable.SelectableOption, () => ({
    __proto__: dart.getMethods(selectable.SelectableOption.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(selectable.SelectableOption, L0);
  dart.setFieldSignature(selectable.SelectableOption, () => ({
    __proto__: dart.getFields(selectable.SelectableOption.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(selectable.SelectableOption, ['toString']);
  selectable.SelectableOption.Selectable = C0 || CT.C0;
  selectable.SelectableOption.Disabled = C1 || CT.C1;
  selectable.SelectableOption.Hidden = C2 || CT.C2;
  selectable.SelectableOption.values = C3 || CT.C3;
  const _is_Selectable_default = Symbol('_is_Selectable_default');
  selectable.Selectable$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class Selectable extends core.Object {
      static _isOptionCheck(T, isMaybeModel, item, option, defaultIfMissingInterface) {
        if (dart.legacy(selectable.Selectable$(dart.legacy(T))).is(isMaybeModel)) {
          return isMaybeModel.getSelectable(item) == option;
        }
        return defaultIfMissingInterface;
      }
      static getOptionIn(T, isMaybeModel, item, defaultIfMissingInterface = C0 || CT.C0) {
        if (dart.legacy(selectable.Selectable$(dart.legacy(T))).is(isMaybeModel)) {
          return isMaybeModel.getSelectable(item);
        }
        return defaultIfMissingInterface;
      }
      static filterWhereSelectable(T, isMaybeModel, defaultIfMissingInterface = true) {
        let isSelectable = dart.fn(_ => defaultIfMissingInterface, dart.fnType(boolL(), [dart.legacy(T)]));
        if (dart.legacy(selectable.Selectable$(dart.legacy(T))).is(isMaybeModel)) {
          isSelectable = dart.fn(option => isMaybeModel.getSelectable(option) == selectable.SelectableOption.Selectable, dart.fnType(boolL(), [dart.legacy(T)]));
        }
        return isSelectable;
      }
      static isSelectableIn(T, model, item, defaultIfMissingInterface = true) {
        return selectable.Selectable._isOptionCheck(dart.legacy(T), model, item, selectable.SelectableOption.Selectable, defaultIfMissingInterface);
      }
      static isDisabledIn(T, model, item, defaultIfMissingInterface = false) {
        return selectable.Selectable._isOptionCheck(dart.legacy(T), model, item, selectable.SelectableOption.Disabled, defaultIfMissingInterface);
      }
      static isHiddenIn(T, model, item, defaultIfMissingInterface = false) {
        return selectable.Selectable._isOptionCheck(dart.legacy(T), model, item, selectable.SelectableOption.Hidden, defaultIfMissingInterface);
      }
      getSelectable(item) {
        TL().as(item);
        return selectable.SelectableOption.Selectable;
      }
    }
    (Selectable.new = function() {
      ;
    }).prototype = Selectable.prototype;
    dart.addTypeTests(Selectable);
    Selectable.prototype[_is_Selectable_default] = true;
    dart.addTypeCaches(Selectable);
    dart.setMethodSignature(Selectable, () => ({
      __proto__: dart.getMethods(Selectable.__proto__),
      getSelectable: dart.fnType(dart.legacy(selectable.SelectableOption), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(Selectable, L0);
    return Selectable;
  });
  selectable.Selectable = selectable.Selectable$();
  dart.addTypeTests(selectable.Selectable, _is_Selectable_default);
  const _is_HasSelectionRationale_default = Symbol('_is_HasSelectionRationale_default');
  selectable.HasSelectionRationale$ = dart.generic(T => {
    class HasSelectionRationale extends core.Object {}
    (HasSelectionRationale[dart.mixinNew] = function() {
    }).prototype = HasSelectionRationale.prototype;
    dart.addTypeTests(HasSelectionRationale);
    HasSelectionRationale.prototype[_is_HasSelectionRationale_default] = true;
    dart.addTypeCaches(HasSelectionRationale);
    dart.setLibraryUri(HasSelectionRationale, L0);
    return HasSelectionRationale;
  });
  selectable.HasSelectionRationale = selectable.HasSelectionRationale$();
  dart.addTypeTests(selectable.HasSelectionRationale, _is_HasSelectionRationale_default);
  const _is__NullHasSelectionRationale_default = Symbol('_is__NullHasSelectionRationale_default');
  selectable._NullHasSelectionRationale$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _NullHasSelectionRationale extends core.Object {
      getSelectableRationale(item, isSelectable = false) {
        TL().as(item);
        return null;
      }
    }
    (_NullHasSelectionRationale.new = function() {
      ;
    }).prototype = _NullHasSelectionRationale.prototype;
    dart.addTypeTests(_NullHasSelectionRationale);
    _NullHasSelectionRationale.prototype[_is__NullHasSelectionRationale_default] = true;
    dart.addTypeCaches(_NullHasSelectionRationale);
    _NullHasSelectionRationale[dart.implements] = () => [selectable.HasSelectionRationale$(dart.legacy(T))];
    dart.setMethodSignature(_NullHasSelectionRationale, () => ({
      __proto__: dart.getMethods(_NullHasSelectionRationale.__proto__),
      getSelectableRationale: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)], [dart.legacy(core.bool)])
    }));
    dart.setLibraryUri(_NullHasSelectionRationale, L0);
    return _NullHasSelectionRationale;
  });
  selectable._NullHasSelectionRationale = selectable._NullHasSelectionRationale$();
  dart.addTypeTests(selectable._NullHasSelectionRationale, _is__NullHasSelectionRationale_default);
  dart.trackLibraries("packages/angular_components/src/model/selection/interfaces/selectable", {
    "package:angular_components/src/model/selection/interfaces/selectable.dart": selectable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selectable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUqD;;qDAAhD;;;;EAAgD;;;;;;;;;;;;;;;;;;;;;;;+BAqB1C,cACL,MACe,QACZ;AAEL,YAAiB,uDAAb,YAAY;AACd,gBAAO,AAAU,AAAa,aAAD,eAAe,IAAI,KAAG,MAAM;;AAE3D,cAAO,0BAAyB;MAClC;4BAIS,cACL,MACe;AAEjB,YAAiB,uDAAb,YAAY;AACd,gBAAO,AAAa,aAAD,eAAe,IAAI;;AAExC,cAAO,0BAAyB;MAClC;sCAIS,cACF;AAEY,2BAAe,QAAC,KAAM,yBAAyB;AAChE,YAAiB,uDAAb,YAAY;AAMb,UALD,eAAe,QAAC,UACP,AACL,AAAa,YAAD,eAAe,MAAM,KAChB;;AAIvB,cAAO,aAAY;MACrB;+BAIS,OACL,MACG;AAEL,cAAO,sDACL,KAAK,EACL,IAAI,EACa,wCACjB,yBAAyB;MAE7B;6BAIS,OACL,MACG;AAEL,cAAO,sDACL,KAAK,EACL,IAAI,EACa,sCACjB,yBAAyB;MAE7B;2BAIS,OACL,MACG;AAEL,cAAO,sDACL,KAAK,EACL,IAAI,EACa,oCACjB,yBAAyB;MAE7B;;gBAGiC;AAAS,cAAiB;MAAU;;;;IACvE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6BAyCkC,MAAY;gBAAZ;AAAsC;MAAI;;;;IAHxC","file":"selectable.unsound.ddc.js"}');
  // Exports:
  return {
    src__model__selection__interfaces__selectable: selectable
  };
}));

//# sourceMappingURL=selectable.unsound.ddc.js.map
