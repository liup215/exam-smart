define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__model__selection__selection_container(dart_sdk, packages__angular_components__model__selection__selection_model, packages__angular_components__model__selection__selection_options, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__ui__has_factory, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  var selection_container = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/selection/selection_container.dart";
  const _is_SelectionContainer_default = Symbol('_is_SelectionContainer_default');
  var selection = dart.privateName(selection_container, "SelectionContainer.selection");
  var options = dart.privateName(selection_container, "SelectionContainer.options");
  var itemRenderer = dart.privateName(selection_container, "SelectionContainer.itemRenderer");
  var componentRenderer = dart.privateName(selection_container, "SelectionContainer.componentRenderer");
  var factoryRenderer = dart.privateName(selection_container, "SelectionContainer.factoryRenderer");
  selection_container.SelectionContainer$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    class SelectionContainer extends core.Object {
      get selection() {
        return this[selection];
      }
      set selection(value) {
        this[selection] = SelectionModelLOfTL().as(value);
      }
      get options() {
        return this[options];
      }
      set options(value) {
        this[options] = SelectionOptionsLOfTL().as(value);
      }
      get itemRenderer() {
        return this[itemRenderer];
      }
      set itemRenderer(value) {
        this[itemRenderer] = value;
      }
      get componentRenderer() {
        return this[componentRenderer];
      }
      set componentRenderer(value) {
        this[componentRenderer] = value;
      }
      get factoryRenderer() {
        return this[factoryRenderer];
      }
      set factoryRenderer(value) {
        this[factoryRenderer] = value;
      }
    }
    (SelectionContainer.new = function() {
      this[selection] = null;
      this[options] = null;
      this[itemRenderer] = null;
      this[componentRenderer] = null;
      this[factoryRenderer] = null;
      ;
    }).prototype = SelectionContainer.prototype;
    dart.addTypeTests(SelectionContainer);
    SelectionContainer.prototype[_is_SelectionContainer_default] = true;
    dart.addTypeCaches(SelectionContainer);
    SelectionContainer[dart.implements] = () => [has_renderer.HasRenderer$(dart.legacy(T)), has_renderer.HasComponentRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(core.Object)), has_factory.HasFactoryRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(T))];
    dart.setLibraryUri(SelectionContainer, L0);
    dart.setFieldSignature(SelectionContainer, () => ({
      __proto__: dart.getFields(SelectionContainer.__proto__),
      selection: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      options: dart.fieldType(dart.legacy(selection_options.SelectionOptions$(dart.legacy(T)))),
      itemRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))),
      componentRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic]))),
      factoryRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])))
    }));
    return SelectionContainer;
  });
  selection_container.SelectionContainer = selection_container.SelectionContainer$();
  dart.addTypeTests(selection_container.SelectionContainer, _is_SelectionContainer_default);
  const _is_SelectionItem_default = Symbol('_is_SelectionItem_default');
  var selection$ = dart.privateName(selection_container, "SelectionItem.selection");
  var value$ = dart.privateName(selection_container, "SelectionItem.value");
  var itemRenderer$ = dart.privateName(selection_container, "SelectionItem.itemRenderer");
  selection_container.SelectionItem$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    class SelectionItem extends core.Object {
      get selection() {
        return this[selection$];
      }
      set selection(value) {
        this[selection$] = SelectionModelLOfTL().as(value);
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = TL().as(value);
      }
      get itemRenderer() {
        return this[itemRenderer$];
      }
      set itemRenderer(value) {
        this[itemRenderer$] = value;
      }
    }
    (SelectionItem.new = function() {
      this[selection$] = null;
      this[value$] = null;
      this[itemRenderer$] = null;
      ;
    }).prototype = SelectionItem.prototype;
    dart.addTypeTests(SelectionItem);
    SelectionItem.prototype[_is_SelectionItem_default] = true;
    dart.addTypeCaches(SelectionItem);
    SelectionItem[dart.implements] = () => [has_renderer.HasRenderer$(dart.legacy(T))];
    dart.setLibraryUri(SelectionItem, L0);
    dart.setFieldSignature(SelectionItem, () => ({
      __proto__: dart.getFields(SelectionItem.__proto__),
      selection: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      value: dart.fieldType(dart.legacy(T)),
      itemRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])))
    }));
    return SelectionItem;
  });
  selection_container.SelectionItem = selection_container.SelectionItem$();
  dart.addTypeTests(selection_container.SelectionItem, _is_SelectionItem_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_container", {
    "package:angular_components/model/selection/selection_container.dart": selection_container
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_container.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;MAgBoB;;;;;;MAGE;;;;;;MAKJ;;;;;;MAOE;;;;;;MAKe;;;;;;;;MApBf;MAGE;MAKJ;MAOE;MAKe;;IACnC;;;;;;;;;;;;;;;;;;;;;;;;;;;MAKoB;;;;;;MAGhB;;;;;;MAIc;;;;;;;;MAPE;MAGhB;MAIc;;IAClB","file":"selection_container.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__selection_container: selection_container
  };
}));

//# sourceMappingURL=selection_container.unsound.ddc.js.map
