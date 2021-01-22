define(['dart_sdk', 'packages/angular_components/model/ui/highlighted_text_model'], (function load__packages__angular_components__highlighted_text__highlighted_text(dart_sdk, packages__angular_components__model__ui__highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  var highlighted_text = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/highlighted_text/highlighted_text.dart";
  var segments = dart.privateName(highlighted_text, "HighlightedTextComponent.segments");
  highlighted_text.HighlightedTextComponent = class HighlightedTextComponent extends core.Object {
    get segments() {
      return this[segments];
    }
    set segments(value) {
      this[segments] = value;
    }
  };
  (highlighted_text.HighlightedTextComponent.new = function() {
    this[segments] = null;
    ;
  }).prototype = highlighted_text.HighlightedTextComponent.prototype;
  dart.addTypeTests(highlighted_text.HighlightedTextComponent);
  dart.addTypeCaches(highlighted_text.HighlightedTextComponent);
  dart.setLibraryUri(highlighted_text.HighlightedTextComponent, L0);
  dart.setFieldSignature(highlighted_text.HighlightedTextComponent, () => ({
    __proto__: dart.getFields(highlighted_text.HighlightedTextComponent.__proto__),
    segments: dart.fieldType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))))
  }));
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text", {
    "package:angular_components/highlighted_text/highlighted_text.dart": highlighted_text
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.dart"],"names":[],"mappings":";;;;;;;;;;;IA8B+B;;;;;;;;;;EAC/B","file":"highlighted_text.unsound.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text: highlighted_text
  };
}));

//# sourceMappingURL=highlighted_text.unsound.ddc.js.map
