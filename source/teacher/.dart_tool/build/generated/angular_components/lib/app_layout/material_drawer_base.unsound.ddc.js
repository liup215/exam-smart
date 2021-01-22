define(['dart_sdk', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__app_layout__material_drawer_base(dart_sdk, packages__angular_components__content__deferred_content_aware, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var material_drawer_base = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_drawer_base.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    }
  }, false);
  var _visibleChange = dart.privateName(material_drawer_base, "_visibleChange");
  var _visible = dart.privateName(material_drawer_base, "_visible");
  material_drawer_base.MaterialDrawerBase = class MaterialDrawerBase extends core.Object {
    get visible() {
      return this[_visible];
    }
    set visible(value) {
      if (dart.equals(value, this[_visible])) return;
      this[_visible] = value;
      if (!dart.test(this[_visible])) {
        async.Timer.new(material_drawer_base.animationDuration, dart.fn(() => {
          if (!dart.test(this[_visible])) this[_visibleChange].add(this[_visible]);
        }, VoidToNull()));
      } else {
        this[_visibleChange].add(this[_visible]);
      }
    }
    get contentVisible() {
      return this[_visibleChange].stream;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
    ngOnInit() {
      this[_visibleChange].add(this[_visible]);
    }
  };
  (material_drawer_base.MaterialDrawerBase.new = function(opts) {
    let visible = opts && 'visible' in opts ? opts.visible : true;
    this[_visibleChange] = StreamControllerOfboolL().broadcast({sync: true});
    this[_visible] = visible;
    ;
  }).prototype = material_drawer_base.MaterialDrawerBase.prototype;
  dart.addTypeTests(material_drawer_base.MaterialDrawerBase);
  dart.addTypeCaches(material_drawer_base.MaterialDrawerBase);
  material_drawer_base.MaterialDrawerBase[dart.implements] = () => [deferred_content_aware.DeferredContentAware, lifecycle_hooks.OnInit];
  dart.setMethodSignature(material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getMethods(material_drawer_base.MaterialDrawerBase.__proto__),
    toggle: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getGetters(material_drawer_base.MaterialDrawerBase.__proto__),
    visible: dart.legacy(core.bool),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setSetterSignature(material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getSetters(material_drawer_base.MaterialDrawerBase.__proto__),
    visible: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_drawer_base.MaterialDrawerBase, L0);
  dart.setFieldSignature(material_drawer_base.MaterialDrawerBase, () => ({
    __proto__: dart.getFields(material_drawer_base.MaterialDrawerBase.__proto__),
    [_visible]: dart.fieldType(dart.legacy(core.bool)),
    [_visibleChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool))))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  dart.defineLazy(material_drawer_base, {
    /*material_drawer_base.animationDuration*/get animationDuration() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_drawer_base", {
    "package:angular_components/app_layout/material_drawer_base.dart": material_drawer_base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_drawer_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAkBsB;IAAQ;gBAIX;AACf,UAAU,YAAN,KAAK,EAAI,iBAAU;AACP,MAAhB,iBAAW,KAAK;AAEhB,qBAAK;AAMD,QAJF,gBAAM,wCAAmB;AAGvB,yBAAK,iBAAU,AAAe,AAAa,yBAAT;;;AAIR,QAA5B,AAAe,yBAAI;;IAEvB;;AASmC,YAAA,AAAe;IAAM;;AAIpC,MAAlB,eAAU,WAAC;IACb;;AAI8B,MAA5B,AAAe,yBAAI;IACrB;;;QA1CyB;IAyBnB,uBAAiB,2CAAuC;IAzBT,iBAAE,OAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAH1D,sCAAiB","file":"material_drawer_base.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_drawer_base: material_drawer_base
  };
}));

//# sourceMappingURL=material_drawer_base.unsound.ddc.js.map
