define(['dart_sdk'], (function load__packages__quiver__strings(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var strings = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $trim = dartx.trim;
  var $isNotEmpty = dartx.isNotEmpty;
  var $runes = dartx.runes;
  var $truncate = dartx.truncate;
  var $substring = dartx.substring;
  var $toLowerCase = dartx.toLowerCase;
  var $compareTo = dartx.compareTo;
  const CT = Object.create(null);
  strings.isBlank = function isBlank(s) {
    return s == null || s[$trim]()[$isEmpty];
  };
  strings.isNotBlank = function isNotBlank(s) {
    return s != null && s[$trim]()[$isNotEmpty];
  };
  strings.isEmpty = function isEmpty(s) {
    return s == null || s[$isEmpty];
  };
  strings.isNotEmpty = function isNotEmpty(s) {
    return s != null && s[$isNotEmpty];
  };
  strings._reverse = function _reverse(s) {
    let t0;
    if (s == null || s === "") return s;
    let sb = new core.StringBuffer.new();
    let runes = (t0 = s[$runes].iterator, (() => {
      t0.reset(s.length);
      return t0;
    })());
    while (dart.test(runes.movePrevious())) {
      sb.writeCharCode(runes.current);
    }
    return sb.toString();
  };
  strings.loop = function loop(s, from, to = null) {
    if (s == null || s === "") {
      dart.throw(new core.ArgumentError.new("Input string cannot be null or empty"));
    }
    if (to != null && dart.notNull(to) < dart.notNull(from)) {
      return strings.loop(strings._reverse(s), -dart.notNull(from), -dart.notNull(to));
    }
    let len = s.length;
    let leftFrag = dart.notNull(from) >= 0 ? (dart.notNull(from) / len)[$truncate]() : ((dart.notNull(from) - len) / len)[$truncate]();
    to == null ? to = (leftFrag + 1) * len : null;
    let rightFrag = dart.notNull(to) - 1 >= 0 ? (dart.notNull(to) / len)[$truncate]() : ((dart.notNull(to) - len) / len)[$truncate]();
    let fragOffset = rightFrag - leftFrag - 1;
    if (fragOffset === -1) {
      return s[$substring](dart.notNull(from) - leftFrag * len, dart.notNull(to) - rightFrag * len);
    }
    let sink = new core.StringBuffer.new(s[$substring](dart.notNull(from) - leftFrag * len));
    strings._repeat(sink, s, fragOffset);
    sink.write(s[$substring](0, dart.notNull(to) - rightFrag * len));
    return sink.toString();
  };
  strings._repeat = function _repeat(sink, s, times) {
    for (let i = 0; i < dart.notNull(times); i = i + 1) {
      sink.write(s);
    }
  };
  strings.isDigit = function isDigit(rune) {
    return (dart.notNull(rune) ^ 48) >>> 0 <= 9;
  };
  strings.isWhitespace = function isWhitespace(rune) {
    return dart.notNull(rune) >= 9 && dart.notNull(rune) <= 13 || rune === 32 || rune === 133 || rune === 160 || rune === 5760 || rune === 6158 || dart.notNull(rune) >= 8192 && dart.notNull(rune) <= 8202 || rune === 8232 || rune === 8233 || rune === 8239 || rune === 8287 || rune === 12288 || rune === 65279;
  };
  strings.center = function center(input, width, fill) {
    if (fill == null || fill[$isEmpty]) {
      dart.throw(new core.ArgumentError.new("fill cannot be null or empty"));
    }
    input == null ? input = "" : null;
    if (input.length >= dart.notNull(width)) return input;
    let padding = dart.notNull(width) - input.length;
    if ((padding / 2)[$truncate]() > 0) {
      input = dart.notNull(strings.loop(fill, 0, (padding / 2)[$truncate]())) + dart.notNull(input);
    }
    return dart.notNull(input) + dart.notNull(strings.loop(fill, input.length - dart.notNull(width), 0));
  };
  strings.equalsIgnoreCase = function equalsIgnoreCase(a, b) {
    return a == null && b == null || a != null && b != null && a[$toLowerCase]() === b[$toLowerCase]();
  };
  strings.compareIgnoreCase = function compareIgnoreCase(a, b) {
    return a[$toLowerCase]()[$compareTo](b[$toLowerCase]());
  };
  dart.trackLibraries("packages/quiver/strings", {
    "package:quiver/strings.dart": strings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["strings.dart"],"names":[],"mappings":"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","file":"strings.unsound.ddc.js"}');
  // Exports:
  return {
    strings: strings
  };
}));

//# sourceMappingURL=strings.unsound.ddc.js.map
