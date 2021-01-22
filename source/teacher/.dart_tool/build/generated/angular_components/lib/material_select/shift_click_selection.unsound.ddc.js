define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/material_select/activation_handler'], (function load__packages__angular_components__material_select__shift_click_selection(dart_sdk, packages__angular_components__model__selection__selection_model, packages__angular_components__material_select__activation_handler) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  var shift_click_selection = Object.create(dart.library);
  var $indexOf = dartx.indexOf;
  var $skip = dartx.skip;
  var $abs = dartx.abs;
  var $take = dartx.take;
  var $forEach = dartx.forEach;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var MultiSelectionModelL = () => (MultiSelectionModelL = dart.constFn(dart.legacy(selection_model.MultiSelectionModel)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/shift_click_selection.dart";
  var _pivot = dart.privateName(shift_click_selection, "_pivot");
  var _handleClick = dart.privateName(shift_click_selection, "_handleClick");
  const _is_ShiftClickSelectionMixin_default = Symbol('_is_ShiftClickSelectionMixin_default');
  shift_click_selection.ShiftClickSelectionMixin$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ShiftClickSelectionMixin extends core.Object {
      [_handleClick](e, value) {
        let toggleSelection = dart.test(this.selection.isSelected(value)) ? dart.bind(this.selection, 'deselect') : dart.bind(this.selection, 'select');
        if (this[_pivot] == null || !dart.test(e.shiftKey)) {
          toggleSelection(value);
        } else {
          let optionValues = this.options.optionsList;
          let clickedIndex = optionValues[$indexOf](value);
          let pivotIndex = optionValues[$indexOf](this[_pivot]);
          if (pivotIndex === -1) {
            dart.throw(new core.StateError.new("pivot item is no longer in the model: " + dart.str(this[_pivot])));
          }
          optionValues[$skip](math.min(intL(), pivotIndex, clickedIndex))[$take]((dart.notNull(pivotIndex) - dart.notNull(clickedIndex))[$abs]() + 1)[$forEach](toggleSelection);
        }
        this[_pivot] = value;
      }
      handle(event, activatedValue) {
        if (!MultiSelectionModelL().is(this.selection) || !MouseEventL().is(event)) return false;
        this[_handleClick](MouseEventL().as(event), TL().as(activatedValue));
        return true;
      }
    }
    (ShiftClickSelectionMixin.new = function() {
      this[_pivot] = null;
      ;
    }).prototype = ShiftClickSelectionMixin.prototype;
    dart.addTypeTests(ShiftClickSelectionMixin);
    ShiftClickSelectionMixin.prototype[_is_ShiftClickSelectionMixin_default] = true;
    dart.addTypeCaches(ShiftClickSelectionMixin);
    ShiftClickSelectionMixin[dart.implements] = () => [activation_handler.ActivationHandler];
    dart.setMethodSignature(ShiftClickSelectionMixin, () => ({
      __proto__: dart.getMethods(ShiftClickSelectionMixin.__proto__),
      [_handleClick]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent), dart.legacy(T)]),
      handle: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.UIEvent), dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(ShiftClickSelectionMixin, L0);
    dart.setFieldSignature(ShiftClickSelectionMixin, () => ({
      __proto__: dart.getFields(ShiftClickSelectionMixin.__proto__),
      [_pivot]: dart.fieldType(dart.legacy(T))
    }));
    return ShiftClickSelectionMixin;
  });
  shift_click_selection.ShiftClickSelectionMixin = shift_click_selection.ShiftClickSelectionMixin$();
  dart.addTypeTests(shift_click_selection.ShiftClickSelectionMixin, _is_ShiftClickSelectionMixin_default);
  dart.trackLibraries("packages/angular_components/material_select/shift_click_selection", {
    "package:angular_components/material_select/shift_click_selection.dart": shift_click_selection
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shift_click_selection.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;qBA6B+B,GAAK;AAC5B,wCACA,AAAU,0BAAW,KAAK,KAAc,UAAV,8BAA+B,UAAV;AACvD,YAAI,AAAO,gBAAG,mBAAS,AAAE,CAAD;AACA,UAAtB,AAAe,eAAA,CAAC,KAAK;;AAEf,6BAAe,AAAQ;AACvB,6BAAe,AAAa,YAAD,WAAS,KAAK;AACzC,2BAAa,AAAa,YAAD,WAAS;AACxC,cAAI,AAAW,UAAD,KAAI,CAAC;AACgD,YAAjE,WAAM,wBAAW,AAA+C,oDAAP;;AAK9B,UAH7B,AACK,AACA,AACA,YAHO,QACF,iBAAI,UAAU,EAAE,YAAY,UACA,AAAM,CAAtB,aAAX,UAAU,iBAAG,YAAY,aAAU,aACjC,eAAe;;AAEhB,QAAd,eAAS,KAAK;MAChB;aAOoB,OAAe;AACjC,aAAc,0BAAV,oBAA2C,iBAAN,KAAK,GAAiB,MAAO;AAG9B,QAAxC,oCAAa,KAAK,GAAiB,QAAf,cAAc;AAClC,cAAO;MACT;;;MA1CE;;IA2CJ","file":"shift_click_selection.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__shift_click_selection: shift_click_selection
  };
}));

//# sourceMappingURL=shift_click_selection.unsound.ddc.js.map
