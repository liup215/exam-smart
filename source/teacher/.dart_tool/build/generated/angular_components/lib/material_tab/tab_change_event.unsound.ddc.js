define(['dart_sdk'], (function load__packages__angular_components__material_tab__tab_change_event(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var tab_change_event = Object.create(dart.library);
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/tab_change_event.dart";
  var oldIndex$ = dart.privateName(tab_change_event, "TabChangeEvent.oldIndex");
  var oldSubIndex$ = dart.privateName(tab_change_event, "TabChangeEvent.oldSubIndex");
  var newIndex$ = dart.privateName(tab_change_event, "TabChangeEvent.newIndex");
  var newSubIndex$ = dart.privateName(tab_change_event, "TabChangeEvent.newSubIndex");
  var defaultPrevented = dart.privateName(tab_change_event, "TabChangeEvent.defaultPrevented");
  tab_change_event.TabChangeEvent = class TabChangeEvent extends core.Object {
    get oldIndex() {
      return this[oldIndex$];
    }
    set oldIndex(value) {
      super.oldIndex = value;
    }
    get oldSubIndex() {
      return this[oldSubIndex$];
    }
    set oldSubIndex(value) {
      super.oldSubIndex = value;
    }
    get newIndex() {
      return this[newIndex$];
    }
    set newIndex(value) {
      super.newIndex = value;
    }
    get newSubIndex() {
      return this[newSubIndex$];
    }
    set newSubIndex(value) {
      super.newSubIndex = value;
    }
    get defaultPrevented() {
      return this[defaultPrevented];
    }
    set defaultPrevented(value) {
      this[defaultPrevented] = value;
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
    get isDeEmphasizedTabChange() {
      return this.oldSubIndex !== -1 || this.newSubIndex !== -1;
    }
    toString() {
      return "TabChangeEvent: [" + dart.str(this.oldIndex) + ":" + dart.str(this.oldSubIndex) + "] => [" + dart.str(this.newIndex) + ":" + dart.str(this.newSubIndex) + "]";
    }
  };
  (tab_change_event.TabChangeEvent.new = function(oldIndex, newIndex, opts) {
    let oldSubIndex = opts && 'oldSubIndex' in opts ? opts.oldSubIndex : -1;
    let newSubIndex = opts && 'newSubIndex' in opts ? opts.newSubIndex : -1;
    this[defaultPrevented] = false;
    this[oldIndex$] = oldIndex;
    this[newIndex$] = newIndex;
    this[oldSubIndex$] = oldSubIndex;
    this[newSubIndex$] = newSubIndex;
    ;
  }).prototype = tab_change_event.TabChangeEvent.prototype;
  dart.addTypeTests(tab_change_event.TabChangeEvent);
  dart.addTypeCaches(tab_change_event.TabChangeEvent);
  dart.setMethodSignature(tab_change_event.TabChangeEvent, () => ({
    __proto__: dart.getMethods(tab_change_event.TabChangeEvent.__proto__),
    preventDefault: dart.fnType(dart.void, []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(tab_change_event.TabChangeEvent, () => ({
    __proto__: dart.getGetters(tab_change_event.TabChangeEvent.__proto__),
    isDeEmphasizedTabChange: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(tab_change_event.TabChangeEvent, L0);
  dart.setFieldSignature(tab_change_event.TabChangeEvent, () => ({
    __proto__: dart.getFields(tab_change_event.TabChangeEvent.__proto__),
    oldIndex: dart.finalFieldType(dart.legacy(core.int)),
    oldSubIndex: dart.finalFieldType(dart.legacy(core.int)),
    newIndex: dart.finalFieldType(dart.legacy(core.int)),
    newSubIndex: dart.finalFieldType(dart.legacy(core.int)),
    defaultPrevented: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(tab_change_event.TabChangeEvent, ['toString']);
  dart.defineLazy(tab_change_event, {
    /*tab_change_event.noSelectionIndex*/get noSelectionIndex() {
      return -1;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/tab_change_event", {
    "package:angular_components/material_tab/tab_change_event.dart": tab_change_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_change_event.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAeY;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACL;;;;;;;AAOoB,MAAvB,wBAAmB;IACrB;;AAII,YAAA,AAAgC,4BAAG;IAA+B;;AAIlE,YAAA,AAAsE,gCAAnD,iBAAQ,eAAE,oBAAW,oBAAO,iBAAQ,eAAE,oBAAW;IAAE;;kDAdtD,UAAe;QACzB;QACD;IAJJ,yBAAmB;IAEJ;IAAe;IACzB;IACD;;EAAgC;;;;;;;;;;;;;;;;;;;;;;;;MAnBjC,iCAAgB","file":"tab_change_event.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_change_event: tab_change_event
  };
}));

//# sourceMappingURL=tab_change_event.unsound.ddc.js.map
