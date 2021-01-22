define(['dart_sdk', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/focus/focus', 'packages/angular_components/content/deferred_content_aware'], (function load__packages__angular_components__material_tab__material_tab(dart_sdk, packages__angular_components__focus__focus_interface, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__focus__focus, packages__angular_components__content__deferred_content_aware) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  var material_tab = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/material_tab.dart";
  material_tab.Tab = class Tab extends focus_interface.Focusable {};
  (material_tab.Tab.new = function() {
    ;
  }).prototype = material_tab.Tab.prototype;
  dart.addTypeTests(material_tab.Tab);
  dart.addTypeCaches(material_tab.Tab);
  dart.setLibraryUri(material_tab.Tab, L0);
  var _visible = dart.privateName(material_tab, "_visible");
  var _active = dart.privateName(material_tab, "_active");
  var _uuid = dart.privateName(material_tab, "_uuid");
  var label = dart.privateName(material_tab, "MaterialTabComponent.label");
  material_tab.MaterialTabComponent = class MaterialTabComponent extends focus.RootFocusable {
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    deactivate() {
      this[_active] = false;
      this[_visible].add(false);
    }
    activate() {
      this[_active] = true;
      this[_visible].add(true);
    }
    get contentVisible() {
      return this[_visible].stream;
    }
    get active() {
      return this[_active];
    }
    get panelId() {
      return "panel-" + dart.str(this[_uuid]);
    }
    get tabId() {
      return "tab-" + dart.str(this[_uuid]);
    }
  };
  (material_tab.MaterialTabComponent.new = function(element, idGenerator) {
    let t0;
    this[_visible] = StreamControllerOfboolL().broadcast({sync: true});
    this[label] = null;
    this[_active] = false;
    this[_uuid] = (t0 = idGenerator, t0 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t0).nextId();
    material_tab.MaterialTabComponent.__proto__.new.call(this, element);
    ;
  }).prototype = material_tab.MaterialTabComponent.prototype;
  dart.addTypeTests(material_tab.MaterialTabComponent);
  dart.addTypeCaches(material_tab.MaterialTabComponent);
  material_tab.MaterialTabComponent[dart.implements] = () => [material_tab.Tab, deferred_content_aware.DeferredContentAware];
  dart.setMethodSignature(material_tab.MaterialTabComponent, () => ({
    __proto__: dart.getMethods(material_tab.MaterialTabComponent.__proto__),
    deactivate: dart.fnType(dart.void, []),
    activate: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_tab.MaterialTabComponent, () => ({
    __proto__: dart.getGetters(material_tab.MaterialTabComponent.__proto__),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    active: dart.legacy(core.bool),
    panelId: dart.legacy(core.String),
    tabId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(material_tab.MaterialTabComponent, L0);
  dart.setFieldSignature(material_tab.MaterialTabComponent, () => ({
    __proto__: dart.getFields(material_tab.MaterialTabComponent.__proto__),
    [_uuid]: dart.finalFieldType(dart.legacy(core.String)),
    [_visible]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    label: dart.fieldType(dart.legacy(core.String)),
    [_active]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_tab.MaterialTabComponent, {
    /*material_tab.MaterialTabComponent.hostRole*/get hostRole() {
      return "tabpanel";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/material_tab", {
    "package:angular_components/material_tab/material_tab.dart": material_tab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;EAyBA;;;;;;;;;IAoCS;;;;;;;AAIU,MAAf,gBAAU;AACS,MAAnB,AAAS,mBAAI;IACf;;AAIgB,MAAd,gBAAU;AACQ,MAAlB,AAAS,mBAAI;IACf;;AAGmC,YAAA,AAAS;IAAM;;AAI/B;IAAO;;AAKJ,YAAA,AAAc,qBAAN;IAAM;;AAKhB,YAAA,AAAY,mBAAN;IAAM;;oDApCC,SAAiC;;IAF5D,iBAAW,2CAAuC;IASjD;IAoBF,gBAAU;IA1BH,cAAoD,CAArC,KAAZ,WAAW,QAAX,OAAqC;AAC9C,+DAAM,OAAO;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;MAPP,0CAAQ","file":"material_tab.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab: material_tab
  };
}));

//# sourceMappingURL=material_tab.unsound.ddc.js.map
