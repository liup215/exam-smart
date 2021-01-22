define(['dart_sdk', 'packages/angular_components/model/ui/highlighted_text_model'], (function load__packages__angular_components__model__ui__highlight_assistant(dart_sdk, packages__angular_components__model__ui__highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  var highlight_assistant = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $split = dartx.split;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var HighlightedTextSegmentL = () => (HighlightedTextSegmentL = dart.constFn(dart.legacy(highlighted_text_model.HighlightedTextSegment)))();
  var ListOfHighlightedTextSegmentL = () => (ListOfHighlightedTextSegmentL = dart.constFn(core.List$(HighlightedTextSegmentL())))();
  var ListLOfHighlightedTextSegmentL = () => (ListLOfHighlightedTextSegmentL = dart.constFn(dart.legacy(ListOfHighlightedTextSegmentL())))();
  var MapOfdynamic$ListLOfHighlightedTextSegmentL = () => (MapOfdynamic$ListLOfHighlightedTextSegmentL = dart.constFn(core.Map$(dart.dynamic, ListLOfHighlightedTextSegmentL())))();
  var MapLOfdynamic$ListLOfHighlightedTextSegmentL = () => (MapLOfdynamic$ListLOfHighlightedTextSegmentL = dart.constFn(dart.legacy(MapOfdynamic$ListLOfHighlightedTextSegmentL())))();
  var IdentityMapOfStringL$MapLOfdynamic$ListLOfHighlightedTextSegmentL = () => (IdentityMapOfStringL$MapLOfdynamic$ListLOfHighlightedTextSegmentL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapLOfdynamic$ListLOfHighlightedTextSegmentL())))();
  var LinkedMapOfdynamic$ListLOfHighlightedTextSegmentL = () => (LinkedMapOfdynamic$ListLOfHighlightedTextSegmentL = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, ListLOfHighlightedTextSegmentL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/highlight_assistant.dart";
  var _highlightCache = dart.privateName(highlight_assistant, "_highlightCache");
  var __textHighlighter = dart.privateName(highlight_assistant, "__textHighlighter");
  var _optionHighlighter = dart.privateName(highlight_assistant, "_optionHighlighter");
  var _matchFromStartOfWord = dart.privateName(highlight_assistant, "_matchFromStartOfWord");
  var _textHighlighter = dart.privateName(highlight_assistant, "_textHighlighter");
  highlight_assistant.HighlightAssistant = class HighlightAssistant extends core.Object {
    get [_textHighlighter]() {
      let t0;
      t0 = this[__textHighlighter];
      return t0 == null ? this[__textHighlighter] = new highlighted_text_model.TextHighlighter.new({matchFromStartOfWord: this[_matchFromStartOfWord]}) : t0;
    }
    highlightOption(T, _lastQuery, item, itemRenderer) {
      let t3, t2, t1, t0, t1$, t0$;
      let _queryHighlightCache = (t0 = this[_highlightCache], t1 = _lastQuery, t2 = t0[$_get](t1), t2 == null ? (t3 = new (LinkedMapOfdynamic$ListLOfHighlightedTextSegmentL()).new(), t0[$_set](t1, t3), t3) : t2);
      let value = _queryHighlightCache[$_get](item);
      if (value == null) {
        value = this[_optionHighlighter] != null ? (t0$ = _lastQuery, t1$ = item, this[_optionHighlighter](t0$, t1$)) : this[_textHighlighter].highlight(itemRenderer(dart.legacy(T).as(item)), _lastQuery[$split](highlight_assistant.HighlightAssistant._separatorRegex));
        _queryHighlightCache[$_set](item, value);
      }
      return value;
    }
  };
  (highlight_assistant.HighlightAssistant.new = function(opts) {
    let optionHighlighter = opts && 'optionHighlighter' in opts ? opts.optionHighlighter : null;
    let matchFromStartOfWord = opts && 'matchFromStartOfWord' in opts ? opts.matchFromStartOfWord : false;
    this[_highlightCache] = new (IdentityMapOfStringL$MapLOfdynamic$ListLOfHighlightedTextSegmentL()).new();
    this[__textHighlighter] = null;
    this[_optionHighlighter] = optionHighlighter;
    this[_matchFromStartOfWord] = matchFromStartOfWord;
    ;
  }).prototype = highlight_assistant.HighlightAssistant.prototype;
  dart.addTypeTests(highlight_assistant.HighlightAssistant);
  dart.addTypeCaches(highlight_assistant.HighlightAssistant);
  dart.setMethodSignature(highlight_assistant.HighlightAssistant, () => ({
    __proto__: dart.getMethods(highlight_assistant.HighlightAssistant.__proto__),
    highlightOption: dart.gFnType(T => [dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.dynamic, dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))]])
  }));
  dart.setGetterSignature(highlight_assistant.HighlightAssistant, () => ({
    __proto__: dart.getGetters(highlight_assistant.HighlightAssistant.__proto__),
    [_textHighlighter]: dart.legacy(highlighted_text_model.TextHighlighter)
  }));
  dart.setLibraryUri(highlight_assistant.HighlightAssistant, L0);
  dart.setFieldSignature(highlight_assistant.HighlightAssistant, () => ({
    __proto__: dart.getFields(highlight_assistant.HighlightAssistant.__proto__),
    [_highlightCache]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Map$(dart.dynamic, dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment)))))))),
    [_optionHighlighter]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.dynamic]))),
    [__textHighlighter]: dart.fieldType(dart.legacy(highlighted_text_model.TextHighlighter)),
    [_matchFromStartOfWord]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(highlight_assistant.HighlightAssistant, {
    /*highlight_assistant.HighlightAssistant._separatorRegex*/get _separatorRegex() {
      return core.RegExp.new("[,\\s]+");
    }
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/highlight_assistant", {
    "package:angular_components/model/ui/highlight_assistant.dart": highlight_assistant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqB0C;mBAAkB,OAAlB,0BACpC,sEAAsC;IAAsB;uBAarD,YAAoB,MAAsB;;AAC/C,kCAAmD,KAA5B,4BAAgB,UAAU,OAAX,qBAAa,aAAI,iEAAjB;AACtC,kBAAQ,AAAoB,oBAAA,QAAC,IAAI;AACrC,UAAI,AAAM,KAAD,IAAI;AAIoD,QAH/D,QAAS,AAAmB,4BAAG,cACN,UAAU,QAAE,IAAI,EAAnC,AAAkB,sCAClB,AAAiB,iCACf,AAAY,YAAA,mBAAC,IAAI,IAAG,AAAW,UAAD,SAAO;AACX,QAAlC,AAAoB,oBAAA,QAAC,IAAI,EAAI,KAAK;;AAEpC,YAAO,MAAK;IACd;;;QAhBiB;QAAwB;IAlBnC,wBACkD;IAKxC;IAaS,2BAAE,iBAAiB;IAChB,8BAAE,oBAAoB;;;;;;;;;;;;;;;;;;;;;;MAvB9B,sDAAe;YAAG,iBAAO","file":"highlight_assistant.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__highlight_assistant: highlight_assistant
  };
}));

//# sourceMappingURL=highlight_assistant.unsound.ddc.js.map
