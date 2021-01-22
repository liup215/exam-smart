define(['dart_sdk', 'packages/angular_components/model/ui/icon'], (function load__packages__angular_components__glyph__glyph(dart_sdk, packages__angular_components__model__ui__icon) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  var glyph = Object.create(dart.library);
  var $contains = dartx.contains;
  var $setAttribute = dartx.setAttribute;
  var IconL = () => (IconL = dart.constFn(dart.legacy(icon.Icon)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/glyph/glyph.dart";
  var L1 = "package:angular_components/glyph/glyph.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["arrow_back", "arrow_forward", "chevron_left", "chevron_right", "navigate_before", "navigate_next", "last_page", "first_page", "open_in_new", "star_half", "exit_to_app"], StringL());
    }
  }, false);
  var _icon = dart.privateName(glyph, "_icon");
  var _iconSet = dart.privateName(glyph, "_iconSet");
  var _useMaterialIconsExtended = dart.privateName(glyph, "_useMaterialIconsExtended");
  var _element$ = dart.privateName(glyph, "_element");
  var _isIconModel = dart.privateName(glyph, "_isIconModel");
  glyph.GlyphComponent = class GlyphComponent extends core.Object {
    set icon(value) {
      this[_icon] = value;
      if (dart.test(glyph._flippedIcons[$contains](this.iconName))) {
        this[_element$][$setAttribute]("flip", "");
      }
    }
    get icon() {
      return this[_icon];
    }
    get [_isIconModel]() {
      return IconL().is(this.icon);
    }
    get iconName() {
      return StringL().as(dart.test(this[_isIconModel]) ? dart.dload(this.icon, 'name') : this.icon);
    }
    get iconSet() {
      return this[_iconSet] == null ? "material-icons-extended" : this[_iconSet];
    }
    set iconSet(value) {
      if (!(value == null || value === "material-icons-extended")) dart.assertFailed(null, L0, 88, 12, "value == null || value == _materialIconsExtended");
      this[_iconSet] = value;
    }
    get useMaterialIconsExtended() {
      return this[_useMaterialIconsExtended];
    }
  };
  (glyph.GlyphComponent.new = function(_element) {
    this[_icon] = null;
    this[_iconSet] = null;
    this[_useMaterialIconsExtended] = true;
    this[_element$] = _element;
    ;
  }).prototype = glyph.GlyphComponent.prototype;
  dart.addTypeTests(glyph.GlyphComponent);
  dart.addTypeCaches(glyph.GlyphComponent);
  dart.setGetterSignature(glyph.GlyphComponent, () => ({
    __proto__: dart.getGetters(glyph.GlyphComponent.__proto__),
    icon: dart.dynamic,
    [_isIconModel]: dart.legacy(core.bool),
    iconName: dart.legacy(core.String),
    iconSet: dart.legacy(core.String),
    useMaterialIconsExtended: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(glyph.GlyphComponent, () => ({
    __proto__: dart.getSetters(glyph.GlyphComponent.__proto__),
    icon: dart.dynamic,
    iconSet: dart.legacy(core.String)
  }));
  dart.setLibraryUri(glyph.GlyphComponent, L1);
  dart.setFieldSignature(glyph.GlyphComponent, () => ({
    __proto__: dart.getFields(glyph.GlyphComponent.__proto__),
    [_icon]: dart.fieldType(dart.dynamic),
    [_iconSet]: dart.fieldType(dart.legacy(core.String)),
    [_useMaterialIconsExtended]: dart.finalFieldType(dart.legacy(core.bool)),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement))
  }));
  dart.defineLazy(glyph.GlyphComponent, {
    /*glyph.GlyphComponent._materialIconsExtended*/get _materialIconsExtended() {
      return "material-icons-extended";
    }
  }, true);
  glyph.GlyphSize = class GlyphSize extends core.Object {
    get values() {
      return JSArrayOfStringL().of(["", "x-small", "small", "medium", "large", "x-large"]);
    }
  };
  (glyph.GlyphSize.new = function() {
    ;
  }).prototype = glyph.GlyphSize.prototype;
  dart.addTypeTests(glyph.GlyphSize);
  dart.addTypeCaches(glyph.GlyphSize);
  dart.setGetterSignature(glyph.GlyphSize, () => ({
    __proto__: dart.getGetters(glyph.GlyphSize.__proto__),
    values: dart.legacy(core.List$(dart.legacy(core.String)))
  }));
  dart.setLibraryUri(glyph.GlyphSize, L1);
  dart.defineLazy(glyph.GlyphSize, {
    /*glyph.GlyphSize.DEFAULT*/get DEFAULT() {
      return "";
    },
    /*glyph.GlyphSize.X_SMALL*/get X_SMALL() {
      return "x-small";
    },
    /*glyph.GlyphSize.SMALL*/get SMALL() {
      return "small";
    },
    /*glyph.GlyphSize.MEDIUM*/get MEDIUM() {
      return "medium";
    },
    /*glyph.GlyphSize.LARGE*/get LARGE() {
      return "large";
    },
    /*glyph.GlyphSize.X_LARGE*/get X_LARGE() {
      return "x-large";
    }
  }, true);
  var C0;
  dart.defineLazy(glyph, {
    /*glyph._flippedIcons*/get _flippedIcons() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/glyph/glyph", {
    "package:angular_components/glyph/glyph.dart": glyph
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["glyph.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;aA+DmB;AACF,MAAb,cAAQ,KAAK;AACb,oBAAI,AAAc,+BAAS;AACQ,QAAjC,AAAS,+BAAa,QAAQ;;IAElC;;AAEoB;IAAK;;AAGA,YAAK,YAAL;IAAY;;AAEd,0DAAoB,WAAL,qBAAY;IAAI;;AAKhC,YAAA,AAAS,mBAAG,mCAAgC;IAAQ;gBAMvD;AACjB,YAAO,AAAM,AAAQ,KAAT,IAAI,QAAQ,AAAM,KAAD;AACb,MAAhB,iBAAW,KAAK;IAClB;;AAIqC;IAAyB;;uCAI1C;IA1BhB;IAOG;IAaI,kCAA4B;IAMnB;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;MAxCT,2CAAsB;;;;;;AAmDf;IAAiD;;;;EAC9E;;;;;;;;;MAPe,uBAAO;;;MACP,uBAAO;;;MACP,qBAAK;;;MACL,sBAAM;;;MACN,qBAAK;;;MACL,uBAAO;;;;;;MA/FH,mBAAa","file":"glyph.unsound.ddc.js"}');
  // Exports:
  return {
    glyph__glyph: glyph
  };
}));

//# sourceMappingURL=glyph.unsound.ddc.js.map
