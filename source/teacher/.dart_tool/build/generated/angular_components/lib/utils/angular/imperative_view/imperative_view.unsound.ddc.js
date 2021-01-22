define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__utils__angular__imperative_view__imperative_view(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const view_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_ref;
  const injector = packages__angular__src__core__change_detection__pipe_transform.src__di__injector__injector;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var imperative_view = Object.create(dart.library);
  var $append = dartx.append;
  var ImperativeViewRefL = () => (ImperativeViewRefL = dart.constFn(dart.legacy(imperative_view.ImperativeViewRef)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var voidToImperativeViewRefL = () => (voidToImperativeViewRefL = dart.constFn(dart.fnType(ImperativeViewRefL(), [dart.void])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/angular/imperative_view/imperative_view.dart";
  var _componentLoader$ = dart.privateName(imperative_view, "_componentLoader");
  var _domService$ = dart.privateName(imperative_view, "_domService");
  imperative_view.AcxImperativeViewUtils = class AcxImperativeViewUtils extends core.Object {
    insertComponent(T, componentFactory, viewContainer, intoDomElement, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return async.async(dart.legacy(component_factory.ComponentRef$(dart.legacy(T))), (function* insertComponent() {
        let t0;
        let ref = this[_componentLoader$].loadNextToLocation(dart.legacy(T), componentFactory, viewContainer, {injector: (t0 = injector, t0 == null ? viewContainer.parentInjector : t0)});
        yield this[_domService$].onWrite();
        intoDomElement[$append](ref.location);
        return ref;
      }).bind(this));
    }
    insertAngularView(intoDomElement, templateRef, viewContainer) {
      return this[_domService$].onWrite().then(ImperativeViewRefL(), dart.fn(_ => {
        let viewRef = viewContainer.createEmbeddedView(templateRef);
        for (let rootNode of viewRef.rootNodes) {
          intoDomElement[$append](rootNode);
        }
        return new imperative_view.ImperativeViewRef.__(viewRef, dart.fn(() => {
          let index = viewContainer.indexOf(viewRef);
          if (dart.notNull(index) > -1) viewContainer.remove(index);
        }, VoidToNull()));
      }, voidToImperativeViewRefL()));
    }
  };
  (imperative_view.AcxImperativeViewUtils.new = function(_componentLoader, _domService) {
    this[_componentLoader$] = _componentLoader;
    this[_domService$] = _domService;
    ;
  }).prototype = imperative_view.AcxImperativeViewUtils.prototype;
  dart.addTypeTests(imperative_view.AcxImperativeViewUtils);
  dart.addTypeCaches(imperative_view.AcxImperativeViewUtils);
  dart.setMethodSignature(imperative_view.AcxImperativeViewUtils, () => ({
    __proto__: dart.getMethods(imperative_view.AcxImperativeViewUtils.__proto__),
    insertComponent: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(component_factory.ComponentRef$(dart.legacy(T))))), [dart.legacy(component_factory.ComponentFactory$(dart.legacy(T))), dart.legacy(view_container_ref.ViewContainerRef), dart.legacy(html.HtmlElement)], {injector: dart.legacy(injector.Injector)}, {}]),
    insertAngularView: dart.fnType(dart.legacy(async.Future$(dart.legacy(imperative_view.ImperativeViewRef))), [dart.legacy(html.HtmlElement), dart.legacy(template_ref.TemplateRef), dart.legacy(view_container_ref.ViewContainerRef)])
  }));
  dart.setLibraryUri(imperative_view.AcxImperativeViewUtils, L0);
  dart.setFieldSignature(imperative_view.AcxImperativeViewUtils, () => ({
    __proto__: dart.getFields(imperative_view.AcxImperativeViewUtils.__proto__),
    [_componentLoader$]: dart.finalFieldType(dart.legacy(component_loader.ComponentLoader)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService))
  }));
  var _disposeFn$ = dart.privateName(imperative_view, "_disposeFn");
  var viewRef$ = dart.privateName(imperative_view, "ImperativeViewRef.viewRef");
  imperative_view.ImperativeViewRef = class ImperativeViewRef extends core.Object {
    get viewRef() {
      return this[viewRef$];
    }
    set viewRef(value) {
      super.viewRef = value;
    }
    dispose() {
      this[_disposeFn$]();
    }
  };
  (imperative_view.ImperativeViewRef.__ = function(viewRef, _disposeFn) {
    this[viewRef$] = viewRef;
    this[_disposeFn$] = _disposeFn;
    ;
  }).prototype = imperative_view.ImperativeViewRef.prototype;
  dart.addTypeTests(imperative_view.ImperativeViewRef);
  dart.addTypeCaches(imperative_view.ImperativeViewRef);
  imperative_view.ImperativeViewRef[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(imperative_view.ImperativeViewRef, () => ({
    __proto__: dart.getMethods(imperative_view.ImperativeViewRef.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(imperative_view.ImperativeViewRef, L0);
  dart.setFieldSignature(imperative_view.ImperativeViewRef, () => ({
    __proto__: dart.getFields(imperative_view.ImperativeViewRef.__proto__),
    [_disposeFn$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
    viewRef: dart.finalFieldType(dart.legacy(view_ref.EmbeddedViewRef))
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/imperative_view/imperative_view", {
    "package:angular_components/utils/angular/imperative_view/imperative_view.dart": imperative_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["imperative_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;uBAuE0B,kBACH,eACL;UACF;AAJ4B;;AAKlC,kBAAM,AAAiB,2DACzB,gBAAgB,EAAE,aAAa,cACZ,KAAT,QAAQ,QAAR,OAAY,AAAc,aAAD;AACZ,QAA3B,MAAM,AAAY;AACiB,QAAnC,AAAe,cAAD,UAAQ,AAAI,GAAD;AACzB,cAAO,IAAG;MACZ;;sBAQwD,gBACxC,aAA8B;AAC5C,YAAO,AAAY,AAAU,yDAAK,QAAC;AAC7B,sBAAU,AAAc,aAAD,oBAAoB,WAAW;AAC1D,iBAAW,WAAY,AAAQ,QAAD;AACG,UAA/B,AAAe,cAAD,UAAQ,QAAQ;;AAEhC,cAAyB,0CAAE,OAAO,EAAE;AAC9B,sBAAQ,AAAc,aAAD,SAAS,OAAO;AACzC,cAAU,aAAN,KAAK,IAAG,CAAC,GAAG,AAAc,AAAa,aAAd,QAAQ,KAAK;;;IAGhD;;yDAnC4B,kBAAuB;IAAvB;IAAuB;;EAAY;;;;;;;;;;;;;;;;;IAyCzC;;;;;;;AAMR,MAAZ,AAAU;IACZ;;mDALyB,SAAc;IAAd;IAAc;;EAAW","file":"imperative_view.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__imperative_view__imperative_view: imperative_view
  };
}));

//# sourceMappingURL=imperative_view.unsound.ddc.js.map
