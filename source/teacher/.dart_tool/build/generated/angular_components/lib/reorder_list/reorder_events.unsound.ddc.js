define(['dart_sdk'], (function load__packages__angular_components__reorder_list__reorder_events(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var reorder_events = Object.create(dart.library);
  var $_get = dartx._get;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/reorder_list/reorder_events.dart";
  var sourceIndex$ = dart.privateName(reorder_events, "ReorderEvent.sourceIndex");
  var destIndex$ = dart.privateName(reorder_events, "ReorderEvent.destIndex");
  reorder_events.ReorderEvent = class ReorderEvent extends core.Object {
    get sourceIndex() {
      return this[sourceIndex$];
    }
    set sourceIndex(value) {
      super.sourceIndex = value;
    }
    get destIndex() {
      return this[destIndex$];
    }
    set destIndex(value) {
      super.destIndex = value;
    }
  };
  (reorder_events.ReorderEvent.new = function(sourceIndex, destIndex) {
    this[sourceIndex$] = sourceIndex;
    this[destIndex$] = destIndex;
    ;
  }).prototype = reorder_events.ReorderEvent.prototype;
  dart.addTypeTests(reorder_events.ReorderEvent);
  dart.addTypeCaches(reorder_events.ReorderEvent);
  dart.setLibraryUri(reorder_events.ReorderEvent, L0);
  dart.setFieldSignature(reorder_events.ReorderEvent, () => ({
    __proto__: dart.getFields(reorder_events.ReorderEvent.__proto__),
    sourceIndex: dart.finalFieldType(dart.legacy(core.int)),
    destIndex: dart.finalFieldType(dart.legacy(core.int))
  }));
  var sourceIndexes$ = dart.privateName(reorder_events, "MultiReorderEvent.sourceIndexes");
  reorder_events.MultiReorderEvent = class MultiReorderEvent extends reorder_events.ReorderEvent {
    get sourceIndexes() {
      return this[sourceIndexes$];
    }
    set sourceIndexes(value) {
      super.sourceIndexes = value;
    }
  };
  (reorder_events.MultiReorderEvent.new = function(sourceIndexes, destIndex) {
    this[sourceIndexes$] = sourceIndexes;
    reorder_events.MultiReorderEvent.__proto__.new.call(this, sourceIndexes[$_get](0), destIndex);
    ;
  }).prototype = reorder_events.MultiReorderEvent.prototype;
  dart.addTypeTests(reorder_events.MultiReorderEvent);
  dart.addTypeCaches(reorder_events.MultiReorderEvent);
  dart.setLibraryUri(reorder_events.MultiReorderEvent, L0);
  dart.setFieldSignature(reorder_events.MultiReorderEvent, () => ({
    __proto__: dart.getFields(reorder_events.MultiReorderEvent.__proto__),
    sourceIndexes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int))))
  }));
  var selectedIndexes = dart.privateName(reorder_events, "ItemSelectionEvent.selectedIndexes");
  reorder_events.ItemSelectionEvent = class ItemSelectionEvent extends core.Object {
    get selectedIndexes() {
      return this[selectedIndexes];
    }
    set selectedIndexes(value) {
      super.selectedIndexes = value;
    }
  };
  (reorder_events.ItemSelectionEvent.new = function(indexes) {
    this[selectedIndexes] = ListOfintL().unmodifiable(indexes);
    ;
  }).prototype = reorder_events.ItemSelectionEvent.prototype;
  dart.addTypeTests(reorder_events.ItemSelectionEvent);
  dart.addTypeCaches(reorder_events.ItemSelectionEvent);
  dart.setLibraryUri(reorder_events.ItemSelectionEvent, L0);
  dart.setFieldSignature(reorder_events.ItemSelectionEvent, () => ({
    __proto__: dart.getFields(reorder_events.ItemSelectionEvent.__proto__),
    selectedIndexes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int))))
  }));
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_events", {
    "package:angular_components/reorder_list/reorder_events.dart": reorder_events
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorder_events.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAMY;;;;;;IACA;;;;;;;8CAEQ,aAAkB;IAAlB;IAAkB;;EAAU;;;;;;;;;;;IAQ9B;;;;;;;mDAEO,eAAmB;IAAnB;AACjB,8DAAM,AAAa,aAAA,QAAC,IAAI,SAAS;;EAAC;;;;;;;;;;IAMxB;;;;;;;oDAEa;IACP,wBAAE,0BAAuB,OAAO;;EAAC","file":"reorder_events.unsound.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_events: reorder_events
  };
}));

//# sourceMappingURL=reorder_events.unsound.ddc.js.map
