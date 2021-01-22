define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular_components/highlighted_text/highlighted_value.template', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/highlight_assistant', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular_components/model/ui/highlighted_text_model'], (function load__packages__angular_components__mixins__highlight_assistant_mixin(dart_sdk, packages__angular_components__highlighted_text__highlighted_value, packages__angular_components__highlighted_text__highlighted_value$46template, packages__angular__src__bootstrap__modules, packages__angular_components__model__selection__select, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__ui__highlight_assistant, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__highlight_provider, packages__angular_components__model__ui__highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_value = packages__angular_components__highlighted_text__highlighted_value.highlighted_text__highlighted_value;
  const highlighted_value$46template = packages__angular_components__highlighted_text__highlighted_value$46template.highlighted_text__highlighted_value$46template;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const select = packages__angular_components__model__selection__select.model__selection__select;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const highlight_assistant = packages__angular_components__model__ui__highlight_assistant.model__ui__highlight_assistant;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const highlight_provider = packages__angular_components__model__ui__highlight_provider.model__ui__highlight_provider;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  var highlight_assistant_mixin = Object.create(dart.library);
  var HighlightedValueComponentL = () => (HighlightedValueComponentL = dart.constFn(dart.legacy(highlighted_value.HighlightedValueComponent)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  var dynamicToTypeL = () => (dynamicToTypeL = dart.constFn(dart.fnType(TypeL(), [dart.dynamic])))();
  var ComponentFactoryOfHighlightedValueComponentL = () => (ComponentFactoryOfHighlightedValueComponentL = dart.constFn(component_factory.ComponentFactory$(HighlightedValueComponentL())))();
  var ComponentFactoryLOfHighlightedValueComponentL = () => (ComponentFactoryLOfHighlightedValueComponentL = dart.constFn(dart.legacy(ComponentFactoryOfHighlightedValueComponentL())))();
  var dynamicToComponentFactoryLOfHighlightedValueComponentL = () => (dynamicToComponentFactoryLOfHighlightedValueComponentL = dart.constFn(dart.fnType(ComponentFactoryLOfHighlightedValueComponentL(), [dart.dynamic])))();
  var FilterableL = () => (FilterableL = dart.constFn(dart.legacy(select.Filterable)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/mixins/highlight_assistant_mixin.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(has_renderer.defaultItemRenderer, dynamicToStringL());
    }
  }, false);
  var _highlightAssistant = dart.privateName(highlight_assistant_mixin, "_highlightAssistant");
  var _optionHighlighter = dart.privateName(highlight_assistant_mixin, "_optionHighlighter");
  var _highlightMatchFromStartOfWord = dart.privateName(highlight_assistant_mixin, "_highlightMatchFromStartOfWord");
  var C0;
  var _highlightRenderer = dart.privateName(highlight_assistant_mixin, "_highlightRenderer");
  const _is_HighlightAssistantMixin_default = Symbol('_is_HighlightAssistantMixin_default');
  var highlightComponentRenderer = dart.privateName(highlight_assistant_mixin, "HighlightAssistantMixin.highlightComponentRenderer");
  var highlightFactoryRenderer = dart.privateName(highlight_assistant_mixin, "HighlightAssistantMixin.highlightFactoryRenderer");
  highlight_assistant_mixin.HighlightAssistantMixin$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class HighlightAssistantMixin extends core.Object {
      get highlightComponentRenderer() {
        return this[highlightComponentRenderer];
      }
      set highlightComponentRenderer(value) {
        super.highlightComponentRenderer = value;
      }
      get highlightFactoryRenderer() {
        return this[highlightFactoryRenderer];
      }
      set highlightFactoryRenderer(value) {
        super.highlightFactoryRenderer = value;
      }
      get optionHighlighter() {
        return this[_optionHighlighter];
      }
      set optionHighlighter(value) {
        this[_optionHighlighter] = value;
        this[_highlightAssistant] = null;
      }
      set highlightMatchFromStartOfWord(value) {
        this[_highlightMatchFromStartOfWord] = value;
        this[_highlightAssistant] = null;
      }
      get highlightQuery() {
        let t0;
        return StringL().as(FilterableL().is(this.options) ? (t0 = FilterableL().as(this.options).currentQuery, t0 == null ? "" : t0) : "");
      }
      get [_highlightRenderer]() {
        let t0;
        if ((this.componentRenderer == null || dart.equals(this.componentRenderer, this.highlightComponentRenderer)) && (this.factoryRenderer == null || dart.equals(this.factoryRenderer, this.highlightFactoryRenderer))) {
          t0 = this.itemRenderer;
          return t0 == null ? C0 || CT.C0 : t0;
        }
        return C0 || CT.C0;
      }
      highlightOption(item) {
        this[_highlightAssistant] == null ? this[_highlightAssistant] = new highlight_assistant.HighlightAssistant.new({optionHighlighter: this.optionHighlighter, matchFromStartOfWord: this[_highlightMatchFromStartOfWord]}) : null;
        return this[_highlightAssistant].highlightOption(TL(), this.highlightQuery, item, this[_highlightRenderer]);
      }
    }
    (HighlightAssistantMixin.new = function() {
      this[highlightComponentRenderer] = dart.fn(_ => dart.wrapType(HighlightedValueComponentL()), dynamicToTypeL());
      this[highlightFactoryRenderer] = dart.fn(_ => highlighted_value$46template.HighlightedValueComponentNgFactory, dynamicToComponentFactoryLOfHighlightedValueComponentL());
      this[_highlightAssistant] = null;
      this[_optionHighlighter] = null;
      this[_highlightMatchFromStartOfWord] = false;
      ;
    }).prototype = HighlightAssistantMixin.prototype;
    dart.addTypeTests(HighlightAssistantMixin);
    HighlightAssistantMixin.prototype[_is_HighlightAssistantMixin_default] = true;
    dart.addTypeCaches(HighlightAssistantMixin);
    HighlightAssistantMixin[dart.implements] = () => [selection_container.SelectionContainer$(dart.legacy(T)), highlight_provider.HighlightProvider];
    dart.setMethodSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getMethods(HighlightAssistantMixin.__proto__),
      highlightOption: dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getGetters(HighlightAssistantMixin.__proto__),
      optionHighlighter: dart.legacy(dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.dynamic])),
      highlightQuery: dart.legacy(core.String),
      [_highlightRenderer]: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))
    }));
    dart.setSetterSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getSetters(HighlightAssistantMixin.__proto__),
      optionHighlighter: dart.legacy(dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.dynamic])),
      highlightMatchFromStartOfWord: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(HighlightAssistantMixin, L0);
    dart.setFieldSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getFields(HighlightAssistantMixin.__proto__),
      highlightComponentRenderer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic]))),
      highlightFactoryRenderer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.dynamic]))),
      [_highlightAssistant]: dart.fieldType(dart.legacy(highlight_assistant.HighlightAssistant)),
      [_optionHighlighter]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String), dart.dynamic]))),
      [_highlightMatchFromStartOfWord]: dart.fieldType(dart.legacy(core.bool))
    }));
    return HighlightAssistantMixin;
  });
  highlight_assistant_mixin.HighlightAssistantMixin = highlight_assistant_mixin.HighlightAssistantMixin$();
  dart.addTypeTests(highlight_assistant_mixin.HighlightAssistantMixin, _is_HighlightAssistantMixin_default);
  dart.trackLibraries("packages/angular_components/mixins/highlight_assistant_mixin", {
    "package:angular_components/mixins/highlight_assistant_mixin.dart": highlight_assistant_mixin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmB0B;;;;;;MAEF;;;;;;;AAMe;MAAkB;4BAQrB;AACN,QAA1B,2BAAqB,KAAK;AACA,QAA1B,4BAAsB;MACxB;wCAMuC;AACC,QAAtC,uCAAiC,KAAK;AACZ,QAA1B,4BAAsB;MACxB;;;AAII,4BAAQ,iBAAR,iBAA6D,KAA5B,AAAe,iBAAvB,kCAAuB,OAAgB,WAAK;MAAE;;;AAGzE,aAAK,AAAkB,0BAAG,QACA,YAAlB,wBAAqB,sCACxB,AAAgB,wBAAG,QACA,YAAhB,sBAAmB;AACzB,eAAO;;;AAET;MACF;sBAGoD;AAGO,QAFzD,AAAoB,6BAAA,OAApB,4BAAwB,mEACD,8CACG,yCAFN;AAGpB,cAAO,AAAoB,iDACvB,qBAAgB,IAAI,EAAE;MAC5B;;;MAnDwB,mCACpB,QAAC,KAAM;MACW,iCAClB,QAAC,KAAgB;MAEF;MAEP;MAcP,uCAAiC;;IA+BxC","file":"highlight_assistant_mixin.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__highlight_assistant_mixin: highlight_assistant_mixin
  };
}));

//# sourceMappingURL=highlight_assistant_mixin.unsound.ddc.js.map
