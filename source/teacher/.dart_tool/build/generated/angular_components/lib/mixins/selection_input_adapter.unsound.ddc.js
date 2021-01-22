define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/string_selection_options', 'packages/angular_components/model/selection/selection_container'], (function load__packages__angular_components__mixins__selection_input_adapter(dart_sdk, packages__angular_components__model__selection__selection_model, packages__angular_components__model__selection__selection_options, packages__angular_components__model__selection__string_selection_options, packages__angular_components__model__selection__selection_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const string_selection_options = packages__angular_components__model__selection__string_selection_options.model__selection__string_selection_options;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  var selection_input_adapter = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $runtimeType = dartx.runtimeType;
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/mixins/selection_input_adapter.dart";
  var L1 = "package:angular_components/mixins/selection_input_adapter.dart";
  var _selectionChangeController = dart.privateName(selection_input_adapter, "_selectionChangeController");
  var _initSelectionModel = dart.privateName(selection_input_adapter, "_initSelectionModel");
  const _is_SelectionInputAdapter_default = Symbol('_is_SelectionInputAdapter_default');
  selection_input_adapter.SelectionInputAdapter$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SingleSelectionModelOfTL = () => (SingleSelectionModelOfTL = dart.constFn(selection_model.SingleSelectionModel$(TL())))();
    var SingleSelectionModelLOfTL = () => (SingleSelectionModelLOfTL = dart.constFn(dart.legacy(SingleSelectionModelOfTL())))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    var StringSelectionOptionsOfTL = () => (StringSelectionOptionsOfTL = dart.constFn(string_selection_options.StringSelectionOptions$(TL())))();
    class SelectionInputAdapter extends core.Object {
      [_initSelectionModel]() {
        this.selection == null ? this.selection = SingleSelectionModelOfTL().new() : null;
      }
      get selectionChange() {
        if (this[_selectionChangeController] == null) {
          this[_selectionChangeController] = async.StreamController.new();
        }
        this[_initSelectionModel]();
        return this[_selectionChangeController].stream;
      }
      emitSelectionChange() {
        if (this[_selectionChangeController] == null) return;
        if (SingleSelectionModelLOfTL().is(this.selection)) {
          this[_selectionChangeController].add(dart.test(this.selection.selectedValues[$isNotEmpty]) ? this.selection.selectedValues[$first] : null);
        } else {
          this[_selectionChangeController].add(this.selection.selectedValues);
        }
      }
      set selectionInput(value) {
        if (SelectionModelLOfTL().is(value)) {
          this.selection = value;
          return;
        }
        this[_initSelectionModel]();
        if (value == null) {
          this.selection.clear();
        } else {
          if (!SingleSelectionModelLOfTL().is(this.selection)) dart.assertFailed("Passing selected value through `selection` input is only supported " + "for single select.", L0, 62, 11, "selection is SingleSelectionModel<T>");
          this.selection.select(TL().as(value));
        }
      }
      set optionsInput(value) {
        if (value == null || SelectionOptionsLOfTL().is(value)) {
          this.options = SelectionOptionsLOfTL().as(value);
        } else if (ListLOfTL().is(value)) {
          this.options = new (StringSelectionOptionsOfTL()).new(value, {toFilterableString: this.itemRenderer});
        } else {
          dart.throw(new core.ArgumentError.new("Unsupported selection options type; value must be null, " + "SelectionOptions<" + dart.str(dart.wrapType(TL())) + ">, or List<" + dart.str(dart.wrapType(TL())) + ">, but is " + dart.str(dart.runtimeType(value))));
        }
      }
    }
    (SelectionInputAdapter.new = function() {
      this[_selectionChangeController] = null;
      ;
    }).prototype = SelectionInputAdapter.prototype;
    dart.addTypeTests(SelectionInputAdapter);
    SelectionInputAdapter.prototype[_is_SelectionInputAdapter_default] = true;
    dart.addTypeCaches(SelectionInputAdapter);
    SelectionInputAdapter[dart.implements] = () => [selection_container.SelectionContainer$(dart.legacy(T))];
    dart.setMethodSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getMethods(SelectionInputAdapter.__proto__),
      [_initSelectionModel]: dart.fnType(dart.void, []),
      emitSelectionChange: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getGetters(SelectionInputAdapter.__proto__),
      selectionChange: dart.legacy(async.Stream)
    }));
    dart.setSetterSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getSetters(SelectionInputAdapter.__proto__),
      selectionInput: dart.dynamic,
      optionsInput: dart.dynamic
    }));
    dart.setLibraryUri(SelectionInputAdapter, L1);
    dart.setFieldSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getFields(SelectionInputAdapter.__proto__),
      [_selectionChangeController]: dart.fieldType(dart.legacy(async.StreamController))
    }));
    return SelectionInputAdapter;
  });
  selection_input_adapter.SelectionInputAdapter = selection_input_adapter.SelectionInputAdapter$();
  dart.addTypeTests(selection_input_adapter.SelectionInputAdapter, _is_SelectionInputAdapter_default);
  dart.trackLibraries("packages/angular_components/mixins/selection_input_adapter", {
    "package:angular_components/mixins/selection_input_adapter.dart": selection_input_adapter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_input_adapter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmByC,QAArC,AAAU,kBAAA,OAAV,iBAA6B,mCAAnB;MACZ;;AAQE,YAAI,AAA2B,oCAAG;AACe,UAA/C,mCAA6B;;AAEV,QAArB;AACA,cAAO,AAA2B;MACpC;;AAIE,YAAI,AAA2B,oCAAG,MAAM;AACxC,YAAc,+BAAV;AAGS,UAFX,AAA2B,+CAAI,AAAU,AAAe,8CAClD,AAAU,AAAe,wCACzB;;AAEkD,UAAxD,AAA2B,qCAAI,AAAU;;MAE7C;yBAM2B;AACzB,YAAU,yBAAN,KAAK;AACU,UAAjB,iBAAY,KAAK;AACjB;;AAEmB,QAArB;AACA,YAAI,AAAM,KAAD,IAAI;AACM,UAAjB,AAAU;;AAEV,eACc,+BAAV,mCAAoC,AACpC,wEACA;AACmB,UAAvB,AAAU,8BAAO,KAAK;;MAE1B;uBAOyB;AACvB,YAAI,AAAM,KAAD,IAAI,QAAc,2BAAN,KAAK;AACT,yBAAf,2BAAU,KAAK;cACV,KAAU,eAAN,KAAK;AAC2D,UAAzE,eAAU,uCAAuB,KAAK,uBAAsB;;AAIS,UAFrE,WAAM,2BAAa,AACf,6DACA,+BAAmB,uBAAC,yBAAY,uBAAC,wBAAkB,iBAAN,KAAK;;MAE1D;;;MAnEiB;;IAoEnB","file":"selection_input_adapter.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__selection_input_adapter: selection_input_adapter
  };
}));

//# sourceMappingURL=selection_input_adapter.unsound.ddc.js.map
