define(['dart_sdk'], (function load__packages__angular_components__model__formatters__formatter(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var formatter = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/formatters/formatter.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], StringL());
    }
  }, false);
  const _is_Formatter_default = Symbol('_is_Formatter_default');
  formatter.Formatter$ = dart.generic(T => {
    class Formatter extends core.Object {}
    (Formatter.new = function() {
      ;
    }).prototype = Formatter.prototype;
    dart.addTypeTests(Formatter);
    Formatter.prototype[_is_Formatter_default] = true;
    dart.addTypeCaches(Formatter);
    dart.setLibraryUri(Formatter, L0);
    return Formatter;
  });
  formatter.Formatter = formatter.Formatter$();
  dart.addTypeTests(formatter.Formatter, _is_Formatter_default);
  var C0;
  const _is_StyleFormatter_default = Symbol('_is_StyleFormatter_default');
  formatter.StyleFormatter$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class StyleFormatter extends core.Object {
      computeStyle(value, parameters = null) {
        TL().as(value);
        return C0 || CT.C0;
      }
      get primaryStyle() {
        return null;
      }
    }
    (StyleFormatter.new = function() {
      ;
    }).prototype = StyleFormatter.prototype;
    dart.addTypeTests(StyleFormatter);
    StyleFormatter.prototype[_is_StyleFormatter_default] = true;
    dart.addTypeCaches(StyleFormatter);
    StyleFormatter[dart.implements] = () => [formatter.Formatter$(dart.legacy(T))];
    dart.setMethodSignature(StyleFormatter, () => ({
      __proto__: dart.getMethods(StyleFormatter.__proto__),
      computeStyle: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [dart.legacy(core.Object)], [dart.legacy(core.String)])
    }));
    dart.setGetterSignature(StyleFormatter, () => ({
      __proto__: dart.getGetters(StyleFormatter.__proto__),
      primaryStyle: dart.legacy(core.String)
    }));
    dart.setLibraryUri(StyleFormatter, L0);
    return StyleFormatter;
  });
  formatter.StyleFormatter = formatter.StyleFormatter$();
  dart.addTypeTests(formatter.StyleFormatter, _is_StyleFormatter_default);
  const _is_EntityFormatter_default = Symbol('_is_EntityFormatter_default');
  formatter.EntityFormatter$ = dart.generic(T => {
    class EntityFormatter extends core.Object {}
    (EntityFormatter.new = function() {
      ;
    }).prototype = EntityFormatter.prototype;
    dart.addTypeTests(EntityFormatter);
    EntityFormatter.prototype[_is_EntityFormatter_default] = true;
    dart.addTypeCaches(EntityFormatter);
    EntityFormatter[dart.implements] = () => [formatter.Formatter$(dart.legacy(T))];
    dart.setLibraryUri(EntityFormatter, L0);
    return EntityFormatter;
  });
  formatter.EntityFormatter = formatter.EntityFormatter$();
  dart.addTypeTests(formatter.EntityFormatter, _is_EntityFormatter_default);
  const _is_EntityStyleFormatter_default = Symbol('_is_EntityStyleFormatter_default');
  formatter.EntityStyleFormatter$ = dart.generic(T => {
    class EntityStyleFormatter extends core.Object {}
    (EntityStyleFormatter.new = function() {
      ;
    }).prototype = EntityStyleFormatter.prototype;
    dart.addTypeTests(EntityStyleFormatter);
    EntityStyleFormatter.prototype[_is_EntityStyleFormatter_default] = true;
    dart.addTypeCaches(EntityStyleFormatter);
    EntityStyleFormatter[dart.implements] = () => [formatter.StyleFormatter$(dart.legacy(T))];
    dart.setLibraryUri(EntityStyleFormatter, L0);
    return EntityStyleFormatter;
  });
  formatter.EntityStyleFormatter = formatter.EntityStyleFormatter$();
  dart.addTypeTests(formatter.EntityStyleFormatter, _is_EntityStyleFormatter_default);
  dart.trackLibraries("packages/angular_components/model/formatters/formatter", {
    "package:angular_components/model/formatters/formatter.dart": formatter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["formatter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAOA;;;;;;;;;;;;;;mBAK8B,OAAe;gBAAf;AAA+B;MAAQ;;AAIxC;MAAI;;;;IACjC;;;;;;;;;;;;;;;;;;;;;;;IAYA;;;;;;;;;;;;;;;IAQA","file":"formatter.unsound.ddc.js"}');
  // Exports:
  return {
    model__formatters__formatter: formatter
  };
}));

//# sourceMappingURL=formatter.unsound.ddc.js.map
