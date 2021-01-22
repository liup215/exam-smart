define(['dart_sdk', 'packages/quiver/core'], (function load__packages__angular_components__utils__color__color(dart_sdk, packages__quiver__core) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__core.src__core__hash;
  var color$ = Object.create(dart.library);
  var $toInt = dartx.toInt;
  var $split = dartx.split;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $truncate = dartx.truncate;
  var $last = dartx.last;
  var $modulo = dartx['%'];
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $abs = dartx.abs;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLTointL = () => (StringLTointL = dart.constFn(dart.fnType(intL(), [StringL()])))();
  var intLTointL = () => (intLTointL = dart.constFn(dart.fnType(intL(), [intL()])))();
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(color$.Color)))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/utils/color/color.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/utils/color/color.dart";
  var _relativeLuminance = dart.privateName(color$, "_relativeLuminance");
  var _alphaString = dart.privateName(color$, "_alphaString");
  var red$ = dart.privateName(color$, "Color.red");
  var green$ = dart.privateName(color$, "Color.green");
  var blue$ = dart.privateName(color$, "Color.blue");
  var alpha$ = dart.privateName(color$, "Color.alpha");
  color$.Color = class Color extends core.Object {
    get red() {
      return this[red$];
    }
    set red(value) {
      super.red = value;
    }
    get green() {
      return this[green$];
    }
    set green(value) {
      super.green = value;
    }
    get blue() {
      return this[blue$];
    }
    set blue(value) {
      super.blue = value;
    }
    get alpha() {
      return this[alpha$];
    }
    set alpha(value) {
      super.alpha = value;
    }
    static fromRgbString(rgb) {
      return color$.Color.parse(rgb);
    }
    static fromHex(hex) {
      return color$.Color.parse(hex);
    }
    static _luminanceChannel(v) {
      return dart.notNull(v) <= 0.03928 ? dart.notNull(v) / 12.92 : math.pow((dart.notNull(v) + 0.055) / 1.055, 2.4);
    }
    get [_relativeLuminance]() {
      return dart.notNull(color$.Color._luminanceChannel(dart.notNull(this.red) / 255)) * 0.2126 + dart.notNull(color$.Color._luminanceChannel(dart.notNull(this.green) / 255)) * 0.7152 + dart.notNull(color$.Color._luminanceChannel(dart.notNull(this.blue) / 255)) * 0.0722;
    }
    contrastRatio(background) {
      if (background.alpha !== 1) {
        dart.throw(new core.ArgumentError.value(background, "background", "Cannot calculate contrast against non-opaque backgrounds."));
      }
      let a = this.alpha === 1 ? this : this.withBackground(background);
      let la = a[_relativeLuminance];
      let lb = background[_relativeLuminance];
      return (math.max(numL(), la, lb) + 0.05) / (math.min(numL(), la, lb) + 0.05);
    }
    static _lerpNum(a, b, t) {
      if (dart.notNull(t) < 0.0 || dart.notNull(t) > 1.0) dart.throw(new core.ArgumentError.value(t, "t"));
      return dart.notNull(a) * (1.0 - dart.notNull(t)) + dart.notNull(b) * dart.notNull(t);
    }
    static lerp(a, b, t) {
      if (a == null && b == null) return null;
      if (a == null) return b.withAlpha(color$.Color._lerpNum(0, b.alpha, t));
      if (b == null) return a.withAlpha(color$.Color._lerpNum(a.alpha, 0, t));
      return new color$.Color.rgba(color$.Color._lerpNum(a.red, b.red, t)[$toInt](), color$.Color._lerpNum(a.green, b.green, t)[$toInt](), color$.Color._lerpNum(a.blue, b.blue, t)[$toInt](), color$.Color._lerpNum(a.alpha, b.alpha, t));
    }
    static _checkValues(r, g, b, a, s = null) {
      if (dart.notNull(r) < 0 || dart.notNull(r) > 255 || dart.notNull(g) < 0 || dart.notNull(g) > 255 || dart.notNull(b) < 0 || dart.notNull(b) > 255 || dart.notNull(a) < 0 || dart.notNull(a) > 1) {
        dart.throw(new core.FormatException.new("Invalid color format; value out of bounds.", s));
      }
    }
    static parse(s) {
      switch (s[$_get](0)) {
        case "r":
        {
          let match = color$.Color._rgbRE.firstMatch(s);
          if (match == null) break;
          let values = match._get(1)[$split](color$.Color._separatorRE);
          if (values[$length] !== 3 && values[$length] !== 4) break;
          function color(s) {
            let last = s.length - 1;
            return s[$_get](last) === "%" ? (255 * dart.notNull(core.int.parse(s[$substring](0, last))) / 100)[$truncate]() : core.int.parse(s);
          }
          dart.fn(color, StringLTointL());
          let r = color(values[$_get](0));
          let g = color(values[$_get](1));
          let b = color(values[$_get](2));
          let a = values[$length] === 4 ? core.num.parse(values[$last]) : 1;
          color$.Color._checkValues(r, g, b, a, s);
          return new color$.Color.rgba(r, g, b, a);
        }
        case "#":
        {
          s = s[$substring](1);
          let width = s.length === 6 || s.length === 8 ? 2 : s.length === 3 || s.length === 4 ? 1 : 0;
          if (width === 0) break;
          function hex(position) {
            let start = dart.notNull(position) * width;
            let value = core.int.parse(s[$substring](start, start + width), {radix: 16});
            return width === 1 ? dart.notNull(value) * 17 : value;
          }
          dart.fn(hex, intLTointL());
          let r = hex(0);
          let g = hex(1);
          let b = hex(2);
          let a = s.length[$modulo](4) === 0 ? dart.notNull(hex(3)) / 255 : 1;
          color$.Color._checkValues(r, g, b, a, s);
          return new color$.Color.rgba(r, g, b, a);
        }
      }
      dart.throw(new core.FormatException.new("Invalid color format", s));
    }
    withAlpha(a) {
      if (!(dart.notNull(a) >= 0 && dart.notNull(a) <= 1)) dart.assertFailed(null, L0, 183, 12, "a >= 0 && a <= 1");
      return new color$.Color.rgba(this.red, this.green, this.blue, a);
    }
    withBackground(background) {
      return this.alpha === 1 ? this : new color$.Color.rgba(color$.Color._lerpNum(background.red, this.red, this.alpha)[$toInt](), color$.Color._lerpNum(background.green, this.green, this.alpha)[$toInt](), color$.Color._lerpNum(background.blue, this.blue, this.alpha)[$toInt](), color$.Color._lerpNum(background.alpha, 1, this.alpha));
    }
    get [_alphaString]() {
      return dart.notNull(this.alpha) < 0.01 ? "0" : this.alpha[$toStringAsFixed](2);
    }
    get rgbString() {
      return this.alpha === 1 ? "rgb(" + dart.str(this.red) + "," + dart.str(this.green) + "," + dart.str(this.blue) + ")" : "rgba(" + dart.str(this.red) + "," + dart.str(this.green) + "," + dart.str(this.blue) + "," + dart.str(this[_alphaString]) + ")";
    }
    static _toHex(value) {
      return value[$toInt]()[$toRadixString](16)[$padLeft](2, "0");
    }
    get hexString() {
      return "#" + dart.str(color$.Color._toHex(this.red)) + dart.str(color$.Color._toHex(this.green)) + dart.str(color$.Color._toHex(this.blue)) + (this.alpha === 1 ? "" : dart.str(color$.Color._toHex(255 * dart.notNull(this.alpha))));
    }
    toString() {
      return this.rgbString;
    }
    _equals(o) {
      if (o == null) return false;
      return this === o || ColorL().is(o) && this.red == o.red && this.green == o.green && this.blue == o.blue && (dart.notNull(this.alpha) - dart.notNull(o.alpha))[$abs]() < 0.01;
    }
    get hashCode() {
      return hash.hash4(this.red, this.green, this.blue, this.alpha);
    }
    distanceFrom(other) {
      return dart.asNullableInt(math.pow(dart.notNull(other.red) - dart.notNull(this.red), 2) + math.pow(dart.notNull(other.blue) - dart.notNull(this.blue), 2) + math.pow(dart.notNull(other.green) - dart.notNull(this.green), 2));
    }
  };
  (color$.Color.fromRgb = function(r, g, b) {
    color$.Color.rgb.call(this, r, g, b);
  }).prototype = color$.Color.prototype;
  (color$.Color.rgb = function(r, g, b) {
    color$.Color.rgba.call(this, r, g, b, 1);
  }).prototype = color$.Color.prototype;
  (color$.Color.rgba = function(red, green, blue, alpha) {
    this[red$] = red;
    this[green$] = green;
    this[blue$] = blue;
    this[alpha$] = alpha;
    ;
  }).prototype = color$.Color.prototype;
  dart.addTypeTests(color$.Color);
  dart.addTypeCaches(color$.Color);
  dart.setMethodSignature(color$.Color, () => ({
    __proto__: dart.getMethods(color$.Color.__proto__),
    contrastRatio: dart.fnType(dart.legacy(core.num), [dart.legacy(color$.Color)]),
    withAlpha: dart.fnType(dart.legacy(color$.Color), [dart.legacy(core.num)]),
    withBackground: dart.fnType(dart.legacy(color$.Color), [dart.legacy(color$.Color)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    distanceFrom: dart.fnType(dart.legacy(core.int), [dart.legacy(color$.Color)])
  }));
  dart.setGetterSignature(color$.Color, () => ({
    __proto__: dart.getGetters(color$.Color.__proto__),
    [_relativeLuminance]: dart.legacy(core.num),
    [_alphaString]: dart.legacy(core.String),
    rgbString: dart.legacy(core.String),
    hexString: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(color$.Color, L1);
  dart.setFieldSignature(color$.Color, () => ({
    __proto__: dart.getFields(color$.Color.__proto__),
    red: dart.finalFieldType(dart.legacy(core.int)),
    green: dart.finalFieldType(dart.legacy(core.int)),
    blue: dart.finalFieldType(dart.legacy(core.int)),
    alpha: dart.finalFieldType(dart.legacy(core.num))
  }));
  dart.defineExtensionMethods(color$.Color, ['toString', '_equals']);
  dart.defineExtensionAccessors(color$.Color, ['hashCode']);
  dart.defineLazy(color$.Color, {
    /*color$.Color._alphaThreshold*/get _alphaThreshold() {
      return 0.01;
    },
    /*color$.Color._rgbRE*/get _rgbRE() {
      return core.RegExp.new("^rgba?\\((.*)\\)$");
    },
    /*color$.Color._separatorRE*/get _separatorRE() {
      return core.RegExp.new(" *, *");
    }
  }, true);
  dart.defineLazy(color$, {
    /*color$.minimumTextContrast*/get minimumTextContrast() {
      return 4.5;
    },
    /*color$.minimumLargeTextContrast*/get minimumLargeTextContrast() {
      return 3;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/color/color", {
    "package:angular_components/utils/color/color.dart": color$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["color.dart"],"names":[],"mappings":"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","file":"color.unsound.ddc.js"}');
  // Exports:
  return {
    utils__color__color: color$
  };
}));

//# sourceMappingURL=color.unsound.ddc.js.map
