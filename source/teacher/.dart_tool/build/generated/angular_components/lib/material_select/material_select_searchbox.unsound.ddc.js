define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/model/selection/select', 'packages/angular_components/material_input/material_input', 'packages/angular_components/src/utils/async/async_update_scheduler'], (function load__packages__angular_components__material_select__material_select_searchbox(dart_sdk, packages__angular_components__utils__browser__events__events, packages__angular_components__mixins__focusable_mixin, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__model__selection__select, packages__angular_components__material_input__material_input, packages__angular_components__src__utils__async__async_update_scheduler) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const select = packages__angular_components__model__selection__select.model__selection__select;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const disposable_future = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__disposable_future;
  var material_select_searchbox = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_searchbox.dart";
  var _filterable = dart.privateName(material_select_searchbox, "_filterable");
  var _inputText = dart.privateName(material_select_searchbox, "_inputText");
  var _lastFilterFuture = dart.privateName(material_select_searchbox, "_lastFilterFuture");
  var _filter = dart.privateName(material_select_searchbox, "_filter");
  var label = dart.privateName(material_select_searchbox, "MaterialSelectSearchboxComponent.label");
  material_select_searchbox.MaterialSelectSearchboxComponent = class MaterialSelectSearchboxComponent extends focusable_mixin.FocusableMixin {
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(text) {
      if (this[_inputText] != text) {
        this[_inputText] = text;
        this[_filter]();
      }
    }
    set filterable(callback) {
      if (!dart.equals(this[_filterable], callback)) {
        this[_filterable] = callback;
        this[_filter]();
      }
    }
    [_filter]() {
      let t0, t1, t0$;
      t0 = this[_lastFilterFuture];
      t0 == null ? null : t0.dispose();
      this[_lastFilterFuture] = (t0$ = this[_filterable], t0$ == null ? null : t0$.filter((t1 = this[_inputText], t1 == null ? "" : t1)));
    }
    set input(input) {
      this.focusable = input;
    }
    stopSpaceKeyPropagation(keyboardEvent) {
      if (dart.test(events.isSpaceKey(keyboardEvent))) {
        keyboardEvent.stopPropagation();
      }
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_lastFilterFuture];
      t0 == null ? null : t0.dispose();
      this[_lastFilterFuture] = null;
    }
  };
  (material_select_searchbox.MaterialSelectSearchboxComponent.new = function() {
    this[_filterable] = null;
    this[_inputText] = "";
    this[_lastFilterFuture] = null;
    this[label] = null;
    material_select_searchbox.MaterialSelectSearchboxComponent.__proto__.new.call(this);
    ;
  }).prototype = material_select_searchbox.MaterialSelectSearchboxComponent.prototype;
  dart.addTypeTests(material_select_searchbox.MaterialSelectSearchboxComponent);
  dart.addTypeCaches(material_select_searchbox.MaterialSelectSearchboxComponent);
  material_select_searchbox.MaterialSelectSearchboxComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getMethods(material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    [_filter]: dart.fnType(dart.void, []),
    stopSpaceKeyPropagation: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getGetters(material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    inputText: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getSetters(material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    inputText: dart.legacy(core.String),
    filterable: dart.legacy(select.Filterable),
    input: dart.legacy(material_input.MaterialInputComponent)
  }));
  dart.setLibraryUri(material_select_searchbox.MaterialSelectSearchboxComponent, L0);
  dart.setFieldSignature(material_select_searchbox.MaterialSelectSearchboxComponent, () => ({
    __proto__: dart.getFields(material_select_searchbox.MaterialSelectSearchboxComponent.__proto__),
    [_filterable]: dart.fieldType(dart.legacy(select.Filterable)),
    [_inputText]: dart.fieldType(dart.legacy(core.String)),
    [_lastFilterFuture]: dart.fieldType(dart.legacy(disposable_future.DisposableFuture)),
    label: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_select_searchbox", {
    "package:angular_components/material_select/material_select_searchbox.dart": material_select_searchbox
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_searchbox.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAoDS;;;;;;;AAlBiB;IAAU;kBACb;AACnB,UAAI,oBAAc,IAAI;AACH,QAAjB,mBAAa,IAAI;AACR,QAAT;;IAEJ;mBAI0B;AACxB,uBAAI,mBAAe,QAAQ;AACH,QAAtB,oBAAc,QAAQ;AACb,QAAT;;IAEJ;;;AAM8B,WAA5B;0BAAmB;AACsC,MAAzD,kEAAoB,OAAa,YAAkB,6BAAX,OAAc;IACxD;cAGiC;AACd,MAAjB,iBAAY,KAAK;IACnB;4BAI2C;AACzC,oBAAI,kBAAW,aAAa;AACK,QAA/B,AAAc,aAAD;;IAEjB;;;AAI8B,WAA5B;0BAAmB;AACK,MAAxB,0BAAoB;IACtB;;;IAjDW;IACJ,mBAAa;IAGH;IAqBV;;;EAyBT","file":"material_select_searchbox.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_searchbox: material_select_searchbox
  };
}));

//# sourceMappingURL=material_select_searchbox.unsound.ddc.js.map
