define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/ui/highlight_provider'], (function load__packages__angular_components__highlighted_text__highlighted_value(dart_sdk, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__ui__highlighted_text_model, packages__angular_components__model__ui__highlight_provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  const highlight_provider = packages__angular_components__model__ui__highlight_provider.model__ui__highlight_provider;
  var highlighted_value = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/highlighted_text/highlighted_value.dart";
  var _highLighter$ = dart.privateName(highlighted_value, "_highLighter");
  var value$ = dart.privateName(highlighted_value, "HighlightedValueComponent.value");
  highlighted_value.HighlightedValueComponent = class HighlightedValueComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get segments() {
      return this[_highLighter$].highlightOption(this.value);
    }
  };
  (highlighted_value.HighlightedValueComponent.new = function(_highLighter) {
    this[value$] = null;
    this[_highLighter$] = _highLighter;
    ;
  }).prototype = highlighted_value.HighlightedValueComponent.prototype;
  dart.addTypeTests(highlighted_value.HighlightedValueComponent);
  dart.addTypeCaches(highlighted_value.HighlightedValueComponent);
  highlighted_value.HighlightedValueComponent[dart.implements] = () => [has_renderer.RendersValue];
  dart.setGetterSignature(highlighted_value.HighlightedValueComponent, () => ({
    __proto__: dart.getGetters(highlighted_value.HighlightedValueComponent.__proto__),
    segments: dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment)))
  }));
  dart.setLibraryUri(highlighted_value.HighlightedValueComponent, L0);
  dart.setFieldSignature(highlighted_value.HighlightedValueComponent, () => ({
    __proto__: dart.getFields(highlighted_value.HighlightedValueComponent.__proto__),
    [_highLighter$]: dart.finalFieldType(dart.legacy(highlight_provider.HighlightProvider)),
    value: dart.fieldType(dart.legacy(core.Object))
  }));
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_value", {
    "package:angular_components/highlighted_text/highlighted_value.dart": highlighted_value
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_value.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAyBS;;;;;;;AAQL,YAAO,AAAa,qCAAgB;IACtC;;8DAP+B;IAFxB;IAEwB;;EAAa","file":"highlighted_value.unsound.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_value: highlighted_value
  };
}));

//# sourceMappingURL=highlighted_value.unsound.ddc.js.map
