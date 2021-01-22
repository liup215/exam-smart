define(['dart_sdk'], (function load__packages__angular_components__utils__comparators__comparators(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var comparators = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/comparators/comparators.dart";
  const _is_Comparators_default = Symbol('_is_Comparators_default');
  comparators.Comparators$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class Comparators extends core.Object {
      ['<'](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) < 0;
      }
      ['<='](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) <= 0;
      }
      ['>'](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) > 0;
      }
      ['>='](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) >= 0;
      }
      _equals(other) {
        if (other == null) return false;
        return TL().is(other) && dart.equals(this.runtimeType, dart.runtimeType(other)) && this.compareTo(other) === 0;
      }
    }
    (Comparators.new = function() {
      ;
    }).prototype = Comparators.prototype;
    dart.addTypeTests(Comparators);
    Comparators.prototype[_is_Comparators_default] = true;
    dart.addTypeCaches(Comparators);
    Comparators[dart.implements] = () => [core.Comparable$(dart.legacy(T))];
    dart.setMethodSignature(Comparators, () => ({
      __proto__: dart.getMethods(Comparators.__proto__),
      '<': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      '<=': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      '>': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      '>=': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setLibraryUri(Comparators, L0);
    dart.defineExtensionMethods(Comparators, ['_equals']);
    return Comparators;
  });
  comparators.Comparators = comparators.Comparators$();
  dart.addTypeTests(comparators.Comparators, _is_Comparators_default);
  const _is_ConstComparators_default = Symbol('_is_ConstComparators_default');
  comparators.ConstComparators$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ConstComparators extends core.Object {
      ['<'](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) < 0;
      }
      ['<='](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) <= 0;
      }
      ['>'](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) > 0;
      }
      ['>='](other) {
        TL().as(other);
        return dart.notNull(this.compareTo(other)) >= 0;
      }
      _equals(other) {
        if (other == null) return false;
        return TL().is(other) && dart.equals(this.runtimeType, dart.runtimeType(other)) && this.compareTo(other) === 0;
      }
    }
    (ConstComparators.new = function() {
      ;
    }).prototype = ConstComparators.prototype;
    dart.addTypeTests(ConstComparators);
    ConstComparators.prototype[_is_ConstComparators_default] = true;
    dart.addTypeCaches(ConstComparators);
    ConstComparators[dart.implements] = () => [core.Comparable$(dart.legacy(T))];
    dart.setMethodSignature(ConstComparators, () => ({
      __proto__: dart.getMethods(ConstComparators.__proto__),
      '<': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      '<=': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      '>': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      '>=': dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
    }));
    dart.setLibraryUri(ConstComparators, L0);
    dart.defineExtensionMethods(ConstComparators, ['_equals']);
    return ConstComparators;
  });
  comparators.ConstComparators = comparators.ConstComparators$();
  dart.addTypeTests(comparators.ConstComparators, _is_ConstComparators_default);
  dart.trackLibraries("packages/angular_components/utils/comparators/comparators", {
    "package:angular_components/utils/comparators/comparators.dart": comparators
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparators.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;gBAOoB;AAAU,cAAiB,cAAjB,eAAU,KAAK,KAAI;MAAC;;gBAE7B;AAAU,cAAiB,cAAjB,eAAU,KAAK,MAAK;MAAC;;gBAEhC;AAAU,cAAiB,cAAjB,eAAU,KAAK,KAAI;MAAC;;gBAE7B;AAAU,cAAiB,cAAjB,eAAU,KAAK,MAAK;MAAC;;YAGjC;AACb,cAAM,AAAyC,SAA/C,KAAK,KAAqB,YAAZ,kBAAqB,iBAAN,KAAK,MAAgB,AAAiB,eAAP,KAAK,MAAK;MAAC;;;;IAC7E;;;;;;;;;;;;;;;;;;;;;;;;;gBAKoB;AAAU,cAAiB,cAAjB,eAAU,KAAK,KAAI;MAAC;;gBAE7B;AAAU,cAAiB,cAAjB,eAAU,KAAK,MAAK;MAAC;;gBAEhC;AAAU,cAAiB,cAAjB,eAAU,KAAK,KAAI;MAAC;;gBAE7B;AAAU,cAAiB,cAAjB,eAAU,KAAK,MAAK;MAAC;;YAGjC;AACb,cAAM,AAAyC,SAA/C,KAAK,KAAqB,YAAZ,kBAAqB,iBAAN,KAAK,MAAgB,AAAiB,eAAP,KAAK,MAAK;MAAC;;;;IAXnD","file":"comparators.unsound.ddc.js"}');
  // Exports:
  return {
    utils__comparators__comparators: comparators
  };
}));

//# sourceMappingURL=comparators.unsound.ddc.js.map
