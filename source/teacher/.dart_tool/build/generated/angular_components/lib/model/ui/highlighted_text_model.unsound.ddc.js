define(['dart_sdk', 'packages/quiver/core'], (function load__packages__angular_components__model__ui__highlighted_text_model(dart_sdk, packages__quiver__core) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = packages__quiver__core.src__core__hash;
  var highlighted_text_model = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $toLowerCase = dartx.toLowerCase;
  var $isEmpty = dartx.isEmpty;
  var $indexOf = dartx.indexOf;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $codeUnitAt = dartx.codeUnitAt;
  var HighlightedTextSegmentL = () => (HighlightedTextSegmentL = dart.constFn(dart.legacy(highlighted_text_model.HighlightedTextSegment)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var JSArrayOfHighlightedTextSegmentL = () => (JSArrayOfHighlightedTextSegmentL = dart.constFn(_interceptors.JSArray$(HighlightedTextSegmentL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], {highlight: boolL()}, {})))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/highlighted_text_model.dart";
  var isHighlighted$ = dart.privateName(highlighted_text_model, "HighlightedTextSegment.isHighlighted");
  var text$ = dart.privateName(highlighted_text_model, "HighlightedTextSegment.text");
  highlighted_text_model.HighlightedTextSegment = class HighlightedTextSegment extends core.Object {
    get isHighlighted() {
      return this[isHighlighted$];
    }
    set isHighlighted(value) {
      super.isHighlighted = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    _equals(other) {
      if (other == null) return false;
      return HighlightedTextSegmentL().is(other) && dart.equals(this.isHighlighted, other.isHighlighted) && this.text == other.text;
    }
    get hashCode() {
      return hash.hash2(this.isHighlighted, this.text);
    }
    toString() {
      return dart.test(this.isHighlighted) ? "*" + dart.str(this.text) + "*" : this.text;
    }
  };
  (highlighted_text_model.HighlightedTextSegment.new = function(text, isHighlighted) {
    this[text$] = text;
    this[isHighlighted$] = isHighlighted;
    ;
  }).prototype = highlighted_text_model.HighlightedTextSegment.prototype;
  dart.addTypeTests(highlighted_text_model.HighlightedTextSegment);
  dart.addTypeCaches(highlighted_text_model.HighlightedTextSegment);
  dart.setMethodSignature(highlighted_text_model.HighlightedTextSegment, () => ({
    __proto__: dart.getMethods(highlighted_text_model.HighlightedTextSegment.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(highlighted_text_model.HighlightedTextSegment, () => ({
    __proto__: dart.getGetters(highlighted_text_model.HighlightedTextSegment.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(highlighted_text_model.HighlightedTextSegment, L0);
  dart.setFieldSignature(highlighted_text_model.HighlightedTextSegment, () => ({
    __proto__: dart.getFields(highlighted_text_model.HighlightedTextSegment.__proto__),
    isHighlighted: dart.finalFieldType(dart.legacy(core.bool)),
    text: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(highlighted_text_model.HighlightedTextSegment, ['_equals', 'toString']);
  dart.defineExtensionAccessors(highlighted_text_model.HighlightedTextSegment, ['hashCode']);
  var _applyMarkers = dart.privateName(highlighted_text_model, "_applyMarkers");
  var caseSensitive$ = dart.privateName(highlighted_text_model, "TextHighlighter.caseSensitive");
  var matchFromStartOfWord$ = dart.privateName(highlighted_text_model, "TextHighlighter.matchFromStartOfWord");
  highlighted_text_model.TextHighlighter = class TextHighlighter extends core.Object {
    get caseSensitive() {
      return this[caseSensitive$];
    }
    set caseSensitive(value) {
      super.caseSensitive = value;
    }
    get matchFromStartOfWord() {
      return this[matchFromStartOfWord$];
    }
    set matchFromStartOfWord(value) {
      super.matchFromStartOfWord = value;
    }
    highlight(text, tokens) {
      return this[_applyMarkers](text, this.getMarkers(text, tokens));
    }
    getMarkers(text, tokens) {
      let _matchText = dart.test(this.caseSensitive) ? text : text[$toLowerCase]();
      let markers = ListOfintL().filled(_matchText.length, 0);
      for (let token of tokens) {
        if (token[$isEmpty]) continue;
        if (!dart.test(this.caseSensitive)) {
          token = token[$toLowerCase]();
        }
        let index = 0;
        while (true) {
          index = _matchText[$indexOf](token, index);
          if (index === -1) {
            break;
          } else {
            let wrapperToken = index !== 0 ? _matchText[$_get](index - 1) : null;
            if (!dart.test(this.matchFromStartOfWord) || index === 0 || wrapperToken === "(" || wrapperToken === " " || wrapperToken === "[") {
              markers[$_set](index, math.max(intL(), markers[$_get](index), token.length));
            }
            index = index + token.length;
          }
        }
      }
      return markers;
    }
    [_applyMarkers](text, markers) {
      let segments = JSArrayOfHighlightedTextSegmentL().of([]);
      let currentSegment = new core.StringBuffer.new();
      function commitSegment(opts) {
        let highlight = opts && 'highlight' in opts ? opts.highlight : null;
        if (dart.test(currentSegment.isEmpty)) return;
        segments[$add](new highlighted_text_model.HighlightedTextSegment.new(currentSegment.toString(), highlight));
        currentSegment.clear();
      }
      dart.fn(commitSegment, __Tovoid());
      let ink = 0;
      let inkPrevious = 0;
      let i = 0;
      let caseOffset = 0;
      while (i < text.length) {
        ink = math.max(intL(), 0, dart.notNull(inkPrevious) - 1);
        if (ink === 0 && dart.notNull(inkPrevious) > 0) {
          commitSegment({highlight: true});
        }
        if (dart.notNull(ink) < dart.notNull(markers[$_get](i + caseOffset))) {
          ink = markers[$_get](i + caseOffset);
          if (i > 0) {
            commitSegment({highlight: dart.notNull(inkPrevious) > 0});
          }
        }
        currentSegment.writeCharCode(text[$codeUnitAt](i));
        let lowercaseChar = text[$_get](i)[$toLowerCase]();
        if (!dart.test(this.caseSensitive) && text[$_get](i) !== lowercaseChar && lowercaseChar.length > text[$_get](i).length) {
          let lengthDiff = lowercaseChar.length - text[$_get](i).length;
          caseOffset = caseOffset + lengthDiff;
          ink = dart.notNull(ink) - lengthDiff;
        }
        inkPrevious = ink;
        i = i + 1;
      }
      commitSegment({highlight: dart.notNull(inkPrevious) > 0});
      return segments;
    }
  };
  (highlighted_text_model.TextHighlighter.new = function(opts) {
    let caseSensitive = opts && 'caseSensitive' in opts ? opts.caseSensitive : false;
    let matchFromStartOfWord = opts && 'matchFromStartOfWord' in opts ? opts.matchFromStartOfWord : true;
    this[caseSensitive$] = caseSensitive;
    this[matchFromStartOfWord$] = matchFromStartOfWord;
    ;
  }).prototype = highlighted_text_model.TextHighlighter.prototype;
  dart.addTypeTests(highlighted_text_model.TextHighlighter);
  dart.addTypeCaches(highlighted_text_model.TextHighlighter);
  dart.setMethodSignature(highlighted_text_model.TextHighlighter, () => ({
    __proto__: dart.getMethods(highlighted_text_model.TextHighlighter.__proto__),
    highlight: dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String)))]),
    getMarkers: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String)))]),
    [_applyMarkers]: dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.int)))])
  }));
  dart.setLibraryUri(highlighted_text_model.TextHighlighter, L0);
  dart.setFieldSignature(highlighted_text_model.TextHighlighter, () => ({
    __proto__: dart.getFields(highlighted_text_model.TextHighlighter.__proto__),
    caseSensitive: dart.finalFieldType(dart.legacy(core.bool)),
    matchFromStartOfWord: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/model/ui/highlighted_text_model", {
    "package:angular_components/model/ui/highlighted_text_model.dart": highlighted_text_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBa;;;;;;IACE;;;;;;;UAKI;AACb,YAAM,AAC+B,8BADrC,KAAK,KACS,YAAd,oBAAiB,AAAM,KAAD,mBACtB,AAAK,aAAG,AAAM,KAAD;IAAK;;AAGF,wBAAM,oBAAe;IAAK;;AAGzB,6CAAgB,AAAU,eAAP,aAAI,MAAK;IAAI;;gEAZzB,MAAW;IAAX;IAAW;;EAAc;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmB1C;;;;;;IACA;;;;;;cAKmC,MAAmB;AAC7D,iCAAc,IAAI,EAAE,gBAAW,IAAI,EAAE,MAAM;IAAE;eAerB,MAAmB;AACzC,iCAAa,sBAAgB,IAAI,GAAG,AAAK,IAAD;AAClC,oBAAe,oBAAO,AAAW,UAAD,SAAS;AAEnD,eAAY,QAAS,OAAM;AAGzB,YAAI,AAAM,KAAD,YAAU;AACnB,uBAAK;AACwB,UAA3B,QAAQ,AAAM,KAAD;;AAEX,oBAAQ;AACZ,eAAO;AACmC,UAAxC,QAAQ,AAAW,UAAD,WAAS,KAAK,EAAE,KAAK;AACvC,cAAI,AAAM,KAAD,KAAI,CAAC;AACZ;;AAEO,+BAAe,AAAM,KAAD,KAAI,IAAI,AAAU,UAAA,QAAC,AAAM,KAAD,GAAG,KAAK;AAC3D,2BAAK,8BACA,AAAM,KAAD,KAAI,KAMN,AAAa,YAAD,KAAI,OAChB,AAAa,YAAD,KAAI,OAChB,AAAa,YAAD,KAAI;AAC4B,cAAlD,AAAO,OAAA,QAAC,KAAK,EAAI,iBAAI,AAAO,OAAA,QAAC,KAAK,GAAG,AAAM,KAAD;;AAEvB,YAArB,QAAA,AAAM,KAAD,GAAI,AAAM,KAAD;;;;AAIpB,YAAO,QAAO;IAChB;oBAIkD,MAAgB;AAC5D,qBAAmC;AACnC,2BAAiB;AAErB,eAAK;YAA8B;AACjC,sBAAI,AAAe,cAAD,WAAU;AAE0C,QADtE,AACK,QADG,OACC,sDAAuB,AAAe,cAAD,aAAa,SAAS;AAC9C,QAAtB,AAAe,cAAD;;;AAGZ,gBAAM;AAAG,wBAAc;AAAG,cAAI;AAAG,uBAAa;AAElD,aAAO,AAAE,CAAD,GAAG,AAAK,IAAD;AAEgB,QAA7B,MAAM,iBAAI,GAAe,aAAZ,WAAW,IAAG;AAC3B,YAAI,AAAI,GAAD,KAAI,KAAiB,aAAZ,WAAW,IAAG;AAEE,UAA9B,AAAa,aAAA,aAAY;;AAI3B,YAAQ,aAAJ,GAAG,iBAAG,AAAO,OAAA,QAAC,AAAE,CAAD,GAAG,UAAU;AACD,UAA7B,MAAM,AAAO,OAAA,QAAC,AAAE,CAAD,GAAG,UAAU;AAC5B,cAAI,AAAE,CAAD,GAAG;AAEmC,YAAzC,AAAa,aAAA,aAAwB,aAAZ,WAAW,IAAG;;;AAIK,QAAhD,AAAe,cAAD,eAAe,AAAK,IAAD,cAAY,CAAC;AAK1C,4BAAgB,AAAI,AAAI,IAAJ,QAAC,CAAC;AAC1B,uBAAK,uBACD,AAAI,IAAA,QAAC,CAAC,MAAK,aAAa,IACxB,AAAc,AAAO,aAAR,UAAU,AAAI,AAAI,IAAJ,QAAC,CAAC;AAC3B,2BAAa,AAAc,AAAO,aAAR,UAAU,AAAI,AAAI,IAAJ,QAAC,CAAC;AAMtB,UAAxB,aAAA,AAAW,UAAD,GAAI,UAAU;AAIP,UAAjB,MAAI,aAAJ,GAAG,IAAI,UAAU;;AAGF,QAAjB,cAAc,GAAG;AACd,QAAH,IAAA,AAAC,CAAA;;AAEsC,MAAzC,AAAa,aAAA,aAAwB,aAAZ,WAAW,IAAG;AAEvC,YAAO,SAAQ;IACjB;;;QAnHU;QAA4B;IAA5B;IAA4B;;EAA6B","file":"highlighted_text_model.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__highlighted_text_model: highlighted_text_model
  };
}));

//# sourceMappingURL=highlighted_text_model.unsound.ddc.js.map
