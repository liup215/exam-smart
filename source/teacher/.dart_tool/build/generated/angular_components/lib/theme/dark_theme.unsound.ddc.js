define(['dart_sdk'], (function load__packages__angular_components__theme__dark_theme(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dark_theme = Object.create(dart.library);
  var $classes = dartx.classes;
  const CT = Object.create(null);
  var L0 = "package:angular_components/theme/dark_theme.dart";
  var isDarkTheme = dart.privateName(dark_theme, "AcxDarkTheme.isDarkTheme");
  dark_theme.AcxDarkTheme = class AcxDarkTheme extends core.Object {
    get isDarkTheme() {
      return this[isDarkTheme];
    }
    set isDarkTheme(value) {
      super.isDarkTheme = value;
    }
    theme(element) {
      if (dart.test(this.isDarkTheme)) {
        element[$classes].add("acx-theme-dark");
      }
    }
    themeElement(element) {
      if (dart.test(this.isDarkTheme)) {
        element[$classes].add("acx-theme-dark");
      }
    }
  };
  (dark_theme.AcxDarkTheme.new = function(dark) {
    let t0;
    this[isDarkTheme] = (t0 = dark, t0 == null ? false : t0);
    ;
  }).prototype = dark_theme.AcxDarkTheme.prototype;
  dart.addTypeTests(dark_theme.AcxDarkTheme);
  dart.addTypeCaches(dark_theme.AcxDarkTheme);
  dart.setMethodSignature(dark_theme.AcxDarkTheme, () => ({
    __proto__: dart.getMethods(dark_theme.AcxDarkTheme.__proto__),
    theme: dart.fnType(dart.void, [dart.legacy(html.HtmlElement)]),
    themeElement: dart.fnType(dart.void, [dart.legacy(html.HtmlElement)])
  }));
  dart.setLibraryUri(dark_theme.AcxDarkTheme, L0);
  dart.setFieldSignature(dark_theme.AcxDarkTheme, () => ({
    __proto__: dart.getFields(dark_theme.AcxDarkTheme.__proto__),
    isDarkTheme: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dark_theme.DarkThemeDirective = class DarkThemeDirective extends core.Object {};
  (dark_theme.DarkThemeDirective.new = function() {
    ;
  }).prototype = dark_theme.DarkThemeDirective.prototype;
  dart.addTypeTests(dark_theme.DarkThemeDirective);
  dart.addTypeCaches(dark_theme.DarkThemeDirective);
  dart.setLibraryUri(dark_theme.DarkThemeDirective, L0);
  dart.defineLazy(dark_theme, {
    /*dark_theme.darkThemeClass*/get darkThemeClass() {
      return "acx-theme-dark";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/theme/dark_theme", {
    "package:angular_components/theme/dark_theme.dart": dark_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dark_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;IAgCa;;;;;;UAKY;AACrB,oBAAI;AACiC,QAAnC,AAAQ,AAAQ,OAAT;;IAEX;iBAE8B;AAC5B,oBAAI;AACiC,QAAnC,AAAQ,AAAQ,OAAT;;IAEX;;0CAbsD;;IACpC,qBAAO,KAAL,IAAI,QAAJ,OAAQ;;EAAK;;;;;;;;;;;;;;;;EAoBT;;;;;MA5CpB,yBAAc","file":"dark_theme.unsound.ddc.js"}');
  // Exports:
  return {
    theme__dark_theme: dark_theme
  };
}));

//# sourceMappingURL=dark_theme.unsound.ddc.js.map
