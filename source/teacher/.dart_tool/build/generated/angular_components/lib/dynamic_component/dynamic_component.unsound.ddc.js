define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__angular_components__dynamic_component__dynamic_component(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__model__ui__has_renderer, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var dynamic_component = Object.create(dart.library);
  var ComponentRefL = () => (ComponentRefL = dart.constFn(dart.legacy(component_factory.ComponentRef)))();
  var StreamControllerOfComponentRefL = () => (StreamControllerOfComponentRefL = dart.constFn(async.StreamController$(ComponentRefL())))();
  var ComponentRefLToNull = () => (ComponentRefLToNull = dart.constFn(dart.fnType(core.Null, [ComponentRefL()])))();
  var RendersValueL = () => (RendersValueL = dart.constFn(dart.legacy(has_renderer.RendersValue)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/dynamic_component/dynamic_component.dart";
  var _onLoadController = dart.privateName(dynamic_component, "_onLoadController");
  var _viewContainerRef = dart.privateName(dynamic_component, "_viewContainerRef");
  var _loadDeferred = dart.privateName(dynamic_component, "_loadDeferred");
  var _childComponent = dart.privateName(dynamic_component, "_childComponent");
  var _componentType = dart.privateName(dynamic_component, "_componentType");
  var _typeChanged = dart.privateName(dynamic_component, "_typeChanged");
  var _componentFactory = dart.privateName(dynamic_component, "_componentFactory");
  var _factoryChanged = dart.privateName(dynamic_component, "_factoryChanged");
  var _value = dart.privateName(dynamic_component, "_value");
  var _valueChanged = dart.privateName(dynamic_component, "_valueChanged");
  var _slowComponentLoader$ = dart.privateName(dynamic_component, "_slowComponentLoader");
  var _componentLoader$ = dart.privateName(dynamic_component, "_componentLoader");
  var _initialize = dart.privateName(dynamic_component, "_initialize");
  var _disposeChildComponent = dart.privateName(dynamic_component, "_disposeChildComponent");
  var _updateChildComponent = dart.privateName(dynamic_component, "_updateChildComponent");
  dynamic_component.DynamicComponent = class DynamicComponent extends core.Object {
    set viewContainerRef(value) {
      this[_viewContainerRef] = value;
      if (dart.test(this[_loadDeferred])) {
        this[_initialize]();
        this[_loadDeferred] = false;
      }
    }
    get onLoad() {
      return this[_onLoadController].stream;
    }
    get childComponent() {
      return this[_childComponent];
    }
    ngOnDestroy() {
      this[_disposeChildComponent]();
      this[_viewContainerRef] = null;
    }
    [_disposeChildComponent]() {
      let t0;
      t0 = this[_childComponent];
      t0 == null ? null : t0.destroy();
      this[_childComponent] = null;
    }
    set componentType(dartType) {
      if (!dart.equals(this[_componentType], dartType)) this[_typeChanged] = true;
      this[_componentType] = dartType;
    }
    set componentFactory(component) {
      if (!dart.equals(this[_componentFactory], component)) this[_factoryChanged] = true;
      this[_componentFactory] = component;
    }
    set value(s) {
      this[_value] = s;
      this[_valueChanged] = true;
    }
    ngAfterChanges() {
      if (dart.test(this[_factoryChanged]) || dart.test(this[_typeChanged])) {
        this[_disposeChildComponent]();
        if (this[_viewContainerRef] != null) {
          this[_initialize]();
        } else {
          this[_loadDeferred] = true;
        }
      } else if (dart.test(this[_valueChanged])) {
        this[_updateChildComponent]();
      }
      this[_valueChanged] = this[_factoryChanged] = this[_typeChanged] = false;
    }
    [_initialize]() {
      if (this[_componentFactory] != null) {
        if (this[_childComponent] != null) {
          dart.throw("Attempting to overwrite a dynamic component");
        }
        this[_childComponent] = this[_componentLoader$].loadNextToLocation(dart.dynamic, this[_componentFactory], this[_viewContainerRef]);
        this[_onLoadController].add(this[_childComponent]);
        this[_updateChildComponent]();
      } else if (this[_componentType] != null) {
        let loadType = this[_componentType];
        this[_slowComponentLoader$].loadNextToLocation(dart.dynamic, loadType, this[_viewContainerRef]).then(core.Null, dart.fn(componentRef => {
          if (!dart.equals(loadType, this[_componentType])) {
            componentRef.destroy();
            return;
          }
          if (this[_childComponent] != null) {
            dart.throw("Attempting to overwrite a dynamic component");
          }
          this[_childComponent] = componentRef;
          this[_onLoadController].add(componentRef);
          this[_updateChildComponent]();
        }, ComponentRefLToNull()));
      }
    }
    [_updateChildComponent]() {
      if (this[_childComponent] != null) {
        this[_childComponent].update(dart.fn(instance => {
          if (RendersValueL().is(instance)) {
            instance.value = this[_value];
          }
        }, dynamicToNull()));
      }
    }
  };
  (dynamic_component.DynamicComponent.new = function(_slowComponentLoader, _componentLoader) {
    this[_onLoadController] = StreamControllerOfComponentRefL().new();
    this[_viewContainerRef] = null;
    this[_loadDeferred] = false;
    this[_childComponent] = null;
    this[_componentType] = null;
    this[_typeChanged] = false;
    this[_componentFactory] = null;
    this[_factoryChanged] = false;
    this[_value] = null;
    this[_valueChanged] = false;
    this[_slowComponentLoader$] = _slowComponentLoader;
    this[_componentLoader$] = _componentLoader;
    ;
  }).prototype = dynamic_component.DynamicComponent.prototype;
  dart.addTypeTests(dynamic_component.DynamicComponent);
  dart.addTypeCaches(dynamic_component.DynamicComponent);
  dynamic_component.DynamicComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy, lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getMethods(dynamic_component.DynamicComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_disposeChildComponent]: dart.fnType(dart.void, []),
    ngAfterChanges: dart.fnType(dart.void, []),
    [_initialize]: dart.fnType(dart.void, []),
    [_updateChildComponent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getGetters(dynamic_component.DynamicComponent.__proto__),
    onLoad: dart.legacy(async.Stream$(dart.legacy(component_factory.ComponentRef))),
    childComponent: dart.legacy(component_factory.ComponentRef)
  }));
  dart.setSetterSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getSetters(dynamic_component.DynamicComponent.__proto__),
    viewContainerRef: dart.legacy(view_container_ref.ViewContainerRef),
    componentType: dart.legacy(core.Type),
    componentFactory: dart.legacy(component_factory.ComponentFactory),
    value: dart.dynamic
  }));
  dart.setLibraryUri(dynamic_component.DynamicComponent, L0);
  dart.setFieldSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getFields(dynamic_component.DynamicComponent.__proto__),
    [_slowComponentLoader$]: dart.finalFieldType(dart.legacy(dynamic_component_loader.SlowComponentLoader)),
    [_componentLoader$]: dart.finalFieldType(dart.legacy(component_loader.ComponentLoader)),
    [_onLoadController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(component_factory.ComponentRef)))),
    [_viewContainerRef]: dart.fieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_loadDeferred]: dart.fieldType(dart.legacy(core.bool)),
    [_childComponent]: dart.fieldType(dart.legacy(component_factory.ComponentRef)),
    [_componentType]: dart.fieldType(dart.legacy(core.Type)),
    [_typeChanged]: dart.fieldType(dart.legacy(core.bool)),
    [_componentFactory]: dart.fieldType(dart.legacy(component_factory.ComponentFactory)),
    [_factoryChanged]: dart.fieldType(dart.legacy(core.bool)),
    [_value]: dart.fieldType(dart.legacy(core.Object)),
    [_valueChanged]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component", {
    "package:angular_components/dynamic_component/dynamic_component.dart": dynamic_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yBA4BwC;AACX,MAAzB,0BAAoB,KAAK;AACzB,oBAAI;AACW,QAAb;AACqB,QAArB,sBAAgB;;IAEpB;;AAamC,YAAA,AAAkB;IAAM;;AAKxB;IAAe;;AAIxB,MAAxB;AACwB,MAAxB,0BAAoB;IACtB;;;AAG4B,WAA1B;0BAAiB;AACK,MAAtB,wBAAkB;IACpB;sBAKuB;AACrB,uBAAI,sBAAkB,QAAQ,GAAE,AAAmB,qBAAJ;AACtB,MAAzB,uBAAiB,QAAQ;IAC3B;yBAIsC;AACpC,uBAAI,yBAAqB,SAAS,GAAE,AAAsB,wBAAJ;AACzB,MAA7B,0BAAoB,SAAS;IAC/B;cAKkB;AACN,MAAV,eAAS,CAAC;AACU,MAApB,sBAAgB;IAClB;;AAIE,oBAAI,oCAAmB;AACG,QAAxB;AACA,YAAI,2BAAqB;AACV,UAAb;;AAEoB,UAApB,sBAAgB;;YAEb,eAAI;AAGc,QAAvB;;AAEoD,MAAtD,sBAAgB,wBAAkB,qBAAe;IACnD;;AAGE,UAAI,2BAAqB;AACvB,YAAI,yBAAmB;AAC8B,UAAnD,WAAM;;AAIiC,QADzC,wBAAkB,AAAiB,yDAC/B,yBAAmB;AACe,QAAtC,AAAkB,4BAAI;AACC,QAAvB;YACK,KAAI,wBAAkB;AAEtB,uBAAW;AAgBd,QAfF,AACK,AACA,6DADmB,QAAQ,EAAE,yCACxB,QAAc;AACtB,2BAAI,QAAQ,EAAI;AAGQ,YAAtB,AAAa,YAAD;AACZ;;AAEF,cAAI,yBAAmB;AAC8B,YAAnD,WAAM;;AAEsB,UAA9B,wBAAkB,YAAY;AACK,UAAnC,AAAkB,4BAAI,YAAY;AACX,UAAvB;;;IAGN;;AAGE,UAAI,yBAAmB;AAKnB,QAJF,AAAgB,6BAAO,QAAC;AACtB,cAAa,mBAAT,QAAQ;AACa,YAAvB,AAAS,QAAD,SAAS;;;;IAIzB;;qDAhGsB,sBAA2B;IA3B3C,0BAAoB;IAET;IACZ,sBAAgB;IAWR;IACR;IACA,qBAAe;IACH;IACZ,wBAAkB;IAChB;IACF,sBAAgB;IAOC;IAA2B;;EAAiB","file":"dynamic_component.unsound.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component: dynamic_component
  };
}));

//# sourceMappingURL=dynamic_component.unsound.ddc.js.map
