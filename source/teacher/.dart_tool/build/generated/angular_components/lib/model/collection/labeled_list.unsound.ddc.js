define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/angular_components/model/ui/display_name'], (function load__packages__angular_components__model__collection__labeled_list(dart_sdk, packages__collection__src__canonicalized_map, packages__angular_components__model__ui__display_name) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const wrappers = packages__collection__src__canonicalized_map.src__wrappers;
  const display_name = packages__angular_components__model__ui__display_name.model__ui__display_name;
  var labeled_list = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/collection/labeled_list.dart";
  var _labelFcn$ = dart.privateName(labeled_list, "_labelFcn");
  const _is_LabeledList_default = Symbol('_is_LabeledList_default');
  labeled_list.LabeledList$ = dart.generic(T => {
    class LabeledList extends wrappers.DelegatingList$(dart.legacy(T)) {
      get hasLabel() {
        return this[_labelFcn$] != null;
      }
      get uiDisplayName() {
        return this[_labelFcn$] != null ? this[_labelFcn$]() : null;
      }
    }
    (LabeledList.new = function(items, _labelFcn = null) {
      this[_labelFcn$] = _labelFcn;
      LabeledList.__proto__.new.call(this, items);
      ;
    }).prototype = LabeledList.prototype;
    (LabeledList.withLabelFunction = function(items, labelFcn = null) {
      LabeledList.new.call(this, items, labelFcn);
    }).prototype = LabeledList.prototype;
    (LabeledList.withLabel = function(items, label = null) {
      LabeledList.new.call(this, items, label != null ? dart.fn(() => label, VoidToStringL()) : null);
    }).prototype = LabeledList.prototype;
    dart.addTypeTests(LabeledList);
    LabeledList.prototype[_is_LabeledList_default] = true;
    dart.addTypeCaches(LabeledList);
    LabeledList[dart.implements] = () => [display_name.HasUIDisplayName];
    dart.setGetterSignature(LabeledList, () => ({
      __proto__: dart.getGetters(LabeledList.__proto__),
      hasLabel: dart.legacy(core.bool),
      uiDisplayName: dart.legacy(core.String)
    }));
    dart.setLibraryUri(LabeledList, L0);
    dart.setFieldSignature(LabeledList, () => ({
      __proto__: dart.getFields(LabeledList.__proto__),
      [_labelFcn$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [])))
    }));
    return LabeledList;
  });
  labeled_list.LabeledList = labeled_list.LabeledList$();
  dart.addTypeTests(labeled_list.LabeledList, _is_LabeledList_default);
  dart.trackLibraries("packages/angular_components/model/collection/labeled_list", {
    "package:angular_components/model/collection/labeled_list.dart": labeled_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["labeled_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAeuB,cAAA,AAAU,qBAAG;MAAI;;AAGV,cAAA,AAAU,qBAAG,OAAO,AAAS,qBAAK;MAAI;;gCAE9C;MAAa;AAAc,2CAAM,KAAK;;IAAC;8CAErB,OAAsB;iCACjD,KAAK,EAAE,QAAQ;IAAC;sCAEG,OAAe;iCAClC,KAAK,EAAE,AAAM,KAAD,IAAI,OAAQ,cAAM,KAAK,qBAAI;IAAK","file":"labeled_list.unsound.ddc.js"}');
  // Exports:
  return {
    model__collection__labeled_list: labeled_list
  };
}));

//# sourceMappingURL=labeled_list.unsound.ddc.js.map
