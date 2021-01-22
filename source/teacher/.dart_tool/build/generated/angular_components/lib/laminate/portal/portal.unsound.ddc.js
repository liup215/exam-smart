define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/imperative_view/imperative_view'], (function load__packages__angular_components__laminate__portal__portal(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__angular__imperative_view__imperative_view) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  var portal$ = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var FutureOfMapLOfStringL$dynamic = () => (FutureOfMapLOfStringL$dynamic = dart.constFn(async.Future$(MapLOfStringL$dynamic())))();
  var FutureLOfMapLOfStringL$dynamic = () => (FutureLOfMapLOfStringL$dynamic = dart.constFn(dart.legacy(FutureOfMapLOfStringL$dynamic())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ComponentPortalOfObjectL = () => (ComponentPortalOfObjectL = dart.constFn(portal$.ComponentPortal$(ObjectL())))();
  var ComponentPortalLOfObjectL = () => (ComponentPortalLOfObjectL = dart.constFn(dart.legacy(ComponentPortalOfObjectL())))();
  var TemplatePortalL = () => (TemplatePortalL = dart.constFn(dart.legacy(portal$.TemplatePortal)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var ComponentRefOfObjectL = () => (ComponentRefOfObjectL = dart.constFn(component_factory.ComponentRef$(ObjectL())))();
  var ComponentRefLOfObjectL = () => (ComponentRefLOfObjectL = dart.constFn(dart.legacy(ComponentRefOfObjectL())))();
  var FutureOfComponentRefLOfObjectL = () => (FutureOfComponentRefLOfObjectL = dart.constFn(async.Future$(ComponentRefLOfObjectL())))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var ComponentRefLOfObjectLToComponentRefLOfObjectL = () => (ComponentRefLOfObjectLToComponentRefLOfObjectL = dart.constFn(dart.fnType(ComponentRefLOfObjectL(), [ComponentRefLOfObjectL()])))();
  var ImperativeViewRefL = () => (ImperativeViewRefL = dart.constFn(dart.legacy(imperative_view.ImperativeViewRef)))();
  var ImperativeViewRefLToMapLOfStringL$dynamic = () => (ImperativeViewRefLToMapLOfStringL$dynamic = dart.constFn(dart.fnType(MapLOfStringL$dynamic(), [ImperativeViewRefL()])))();
  var TemplatePortalDirectiveL = () => (TemplatePortalDirectiveL = dart.constFn(dart.legacy(portal$.TemplatePortalDirective)))();
  var StreamControllerOfTemplatePortalDirectiveL = () => (StreamControllerOfTemplatePortalDirectiveL = dart.constFn(async.StreamController$(TemplatePortalDirectiveL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/laminate/portal/portal.dart";
  var L1 = "package:angular_components/laminate/portal/portal.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), dart.dynamic, []);
    }
  }, false);
  var _attachedHost = dart.privateName(portal$, "_attachedHost");
  const _is_Portal_default = Symbol('_is_Portal_default');
  portal$.Portal$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var FutureOfTL = () => (FutureOfTL = dart.constFn(async.Future$(TL())))();
    var FutureLOfTL = () => (FutureLOfTL = dart.constFn(dart.legacy(FutureOfTL())))();
    class Portal extends core.Object {
      attach(host) {
        if (!(host != null)) dart.assertFailed(null, L0, 23, 12, "host != null");
        if (dart.test(this.isAttached)) {
          dart.throw(new core.StateError.new("Already attached to host!"));
        } else {
          this[_attachedHost] = host;
          return FutureLOfTL().as(host.attach(this));
        }
      }
      detach() {
        let currentHost = this[_attachedHost];
        if (!(currentHost != null)) dart.assertFailed(null, L0, 40, 12, "currentHost != null");
        this[_attachedHost] = null;
        return currentHost.detach();
      }
      get isAttached() {
        return this[_attachedHost] != null;
      }
      setAttachedHost(host) {
        this[_attachedHost] = host;
      }
    }
    (Portal.new = function() {
      this[_attachedHost] = null;
      ;
    }).prototype = Portal.prototype;
    dart.addTypeTests(Portal);
    Portal.prototype[_is_Portal_default] = true;
    dart.addTypeCaches(Portal);
    dart.setMethodSignature(Portal, () => ({
      __proto__: dart.getMethods(Portal.__proto__),
      attach: dart.fnType(dart.legacy(async.Future), [dart.legacy(portal$.PortalHost)]),
      detach: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
      setAttachedHost: dart.fnType(dart.void, [dart.legacy(portal$.PortalHost)])
    }));
    dart.setGetterSignature(Portal, () => ({
      __proto__: dart.getGetters(Portal.__proto__),
      isAttached: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(Portal, L1);
    dart.setFieldSignature(Portal, () => ({
      __proto__: dart.getFields(Portal.__proto__),
      [_attachedHost]: dart.fieldType(dart.legacy(portal$.PortalHost))
    }));
    return Portal;
  });
  portal$.Portal = portal$.Portal$();
  dart.addTypeTests(portal$.Portal, _is_Portal_default);
  const _is_ComponentPortal_default = Symbol('_is_ComponentPortal_default');
  var origin$ = dart.privateName(portal$, "ComponentPortal.origin");
  var componentFactory$ = dart.privateName(portal$, "ComponentPortal.componentFactory");
  portal$.ComponentPortal$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ComponentPortalOfTL = () => (ComponentPortalOfTL = dart.constFn(portal$.ComponentPortal$(TL())))();
    class ComponentPortal extends portal$.Portal$(dart.legacy(T)) {
      get origin() {
        return this[origin$];
      }
      set origin(value) {
        super.origin = value;
      }
      get componentFactory() {
        return this[componentFactory$];
      }
      set componentFactory(value) {
        super.componentFactory = value;
      }
      clone() {
        return new (ComponentPortalOfTL()).new(this.componentFactory, {origin: this.origin});
      }
      get component() {
        return dart.wrapType(TL());
      }
    }
    (ComponentPortal.new = function(componentFactory, opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      this[componentFactory$] = componentFactory;
      this[origin$] = origin;
      ComponentPortal.__proto__.new.call(this);
      ;
    }).prototype = ComponentPortal.prototype;
    dart.addTypeTests(ComponentPortal);
    ComponentPortal.prototype[_is_ComponentPortal_default] = true;
    dart.addTypeCaches(ComponentPortal);
    dart.setMethodSignature(ComponentPortal, () => ({
      __proto__: dart.getMethods(ComponentPortal.__proto__),
      clone: dart.fnType(dart.legacy(portal$.ComponentPortal$(dart.legacy(T))), [])
    }));
    dart.setGetterSignature(ComponentPortal, () => ({
      __proto__: dart.getGetters(ComponentPortal.__proto__),
      component: dart.legacy(core.Type)
    }));
    dart.setLibraryUri(ComponentPortal, L1);
    dart.setFieldSignature(ComponentPortal, () => ({
      __proto__: dart.getFields(ComponentPortal.__proto__),
      origin: dart.finalFieldType(dart.legacy(view_container_ref.ViewContainerRef)),
      componentFactory: dart.finalFieldType(dart.legacy(component_factory.ComponentFactory$(dart.legacy(core.Object))))
    }));
    return ComponentPortal;
  });
  portal$.ComponentPortal = portal$.ComponentPortal$();
  dart.addTypeTests(portal$.ComponentPortal, _is_ComponentPortal_default);
  var _locals = dart.privateName(portal$, "_locals");
  var C0;
  var template$ = dart.privateName(portal$, "TemplatePortal.template");
  var viewContainer$ = dart.privateName(portal$, "TemplatePortal.viewContainer");
  portal$.TemplatePortal = class TemplatePortal extends portal$.Portal$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))) {
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get viewContainer() {
      return this[viewContainer$];
    }
    set viewContainer(value) {
      super.viewContainer = value;
    }
    get origin() {
      return this.viewContainer;
    }
    clone() {
      return new portal$.TemplatePortal.new(this.template, this.viewContainer);
    }
    attach(host, locals = C0 || CT.C0) {
      this[_locals] = locals;
      return FutureLOfMapLOfStringL$dynamic().as(super.attach(host));
    }
    detach() {
      this[_locals] = C0 || CT.C0;
      return super.detach();
    }
    get locals() {
      return this[_locals];
    }
  };
  (portal$.TemplatePortal.new = function(template, viewContainer) {
    this[_locals] = C0 || CT.C0;
    this[template$] = template;
    this[viewContainer$] = viewContainer;
    portal$.TemplatePortal.__proto__.new.call(this);
    if (!(this.template != null)) dart.assertFailed(null, L0, 92, 12, "template != null");
    if (!(this.viewContainer != null)) dart.assertFailed(null, L0, 93, 12, "viewContainer != null");
  }).prototype = portal$.TemplatePortal.prototype;
  dart.addTypeTests(portal$.TemplatePortal);
  dart.addTypeCaches(portal$.TemplatePortal);
  dart.setMethodSignature(portal$.TemplatePortal, () => ({
    __proto__: dart.getMethods(portal$.TemplatePortal.__proto__),
    clone: dart.fnType(dart.legacy(portal$.TemplatePortal), []),
    attach: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))), [dart.legacy(portal$.PortalHost)], [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setGetterSignature(portal$.TemplatePortal, () => ({
    __proto__: dart.getGetters(portal$.TemplatePortal.__proto__),
    origin: dart.dynamic,
    locals: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))
  }));
  dart.setLibraryUri(portal$.TemplatePortal, L1);
  dart.setFieldSignature(portal$.TemplatePortal, () => ({
    __proto__: dart.getFields(portal$.TemplatePortal.__proto__),
    [_locals]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    template: dart.finalFieldType(dart.legacy(template_ref.TemplateRef)),
    viewContainer: dart.finalFieldType(dart.legacy(view_container_ref.ViewContainerRef))
  }));
  portal$.PortalHost = class PortalHost extends core.Object {};
  (portal$.PortalHost.new = function() {
    ;
  }).prototype = portal$.PortalHost.prototype;
  dart.addTypeTests(portal$.PortalHost);
  dart.addTypeCaches(portal$.PortalHost);
  portal$.PortalHost[dart.implements] = () => [disposer.Disposable];
  dart.setLibraryUri(portal$.PortalHost, L1);
  var _attachedPortal = dart.privateName(portal$, "_attachedPortal");
  var _detachPortal = dart.privateName(portal$, "_detachPortal");
  var _isDisposed = dart.privateName(portal$, "_isDisposed");
  portal$.BasePortalHost = class BasePortalHost extends core.Object {
    attach(portal) {
      if (!(portal != null)) dart.assertFailed(null, L0, 155, 12, "portal != null");
      if (dart.test(this[_isDisposed])) {
        dart.throw(new core.StateError.new("Already disposed."));
      }
      if (dart.test(this.hasAttached)) {
        dart.throw(new core.StateError.new("Already has attached portal!"));
      }
      if (ComponentPortalLOfObjectL().is(portal)) {
        this[_attachedPortal] = portal;
        portal.setAttachedHost(this);
        return this.attachComponentPortal(portal);
      } else if (TemplatePortalL().is(portal)) {
        this[_attachedPortal] = portal;
        portal.setAttachedHost(this);
        return this.attachTemplatePortal(portal);
      } else if (portal == null) {
        dart.throw(new core.ArgumentError.notNull("portal"));
      } else {
        dart.throw(new core.ArgumentError.value(portal, "portal"));
      }
    }
    static createLocalsMap(viewRef) {
      return new (IdentityMapOfStringL$dynamic()).new();
    }
    detach() {
      this[_attachedPortal].setAttachedHost(null);
      this[_attachedPortal] = null;
      if (this[_detachPortal] != null) {
        this[_detachPortal]();
        this[_detachPortal] = null;
      }
      return FutureOfvoid().value();
    }
    dispose() {
      if (dart.test(this.hasAttached)) {
        this.detach();
      }
      this[_isDisposed] = true;
    }
    get hasAttached() {
      return this[_attachedPortal] != null;
    }
    setPortalDisposer(fn) {
      if (!(this[_detachPortal] == null)) dart.assertFailed(null, L0, 208, 12, "_detachPortal == null");
      this[_detachPortal] = fn;
    }
  };
  (portal$.BasePortalHost.new = function() {
    this[_attachedPortal] = null;
    this[_detachPortal] = null;
    this[_isDisposed] = false;
    ;
  }).prototype = portal$.BasePortalHost.prototype;
  dart.addTypeTests(portal$.BasePortalHost);
  dart.addTypeCaches(portal$.BasePortalHost);
  portal$.BasePortalHost[dart.implements] = () => [portal$.PortalHost];
  dart.setMethodSignature(portal$.BasePortalHost, () => ({
    __proto__: dart.getMethods(portal$.BasePortalHost.__proto__),
    attach: dart.fnType(dart.legacy(async.Future), [dart.legacy(portal$.Portal$(dart.legacy(core.Object)))]),
    detach: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    dispose: dart.fnType(dart.void, []),
    setPortalDisposer: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))])
  }));
  dart.setGetterSignature(portal$.BasePortalHost, () => ({
    __proto__: dart.getGetters(portal$.BasePortalHost.__proto__),
    hasAttached: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(portal$.BasePortalHost, L1);
  dart.setFieldSignature(portal$.BasePortalHost, () => ({
    __proto__: dart.getFields(portal$.BasePortalHost.__proto__),
    [_attachedPortal]: dart.fieldType(dart.legacy(portal$.Portal$(dart.legacy(core.Object)))),
    [_detachPortal]: dart.fieldType(dart.legacy(dart.fnType(dart.void, []))),
    [_isDisposed]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _delegateHost$ = dart.privateName(portal$, "_delegateHost");
  portal$.DelegatingPortalHost = class DelegatingPortalHost extends core.Object {
    get hasAttached() {
      return this[_delegateHost$].hasAttached;
    }
    attach(portal) {
      return this[_delegateHost$].attach(portal);
    }
    detach() {
      return this[_delegateHost$].detach();
    }
    dispose() {
      this[_delegateHost$].dispose();
    }
  };
  (portal$.DelegatingPortalHost.new = function(_delegateHost) {
    this[_delegateHost$] = _delegateHost;
    ;
  }).prototype = portal$.DelegatingPortalHost.prototype;
  dart.addTypeTests(portal$.DelegatingPortalHost);
  dart.addTypeCaches(portal$.DelegatingPortalHost);
  portal$.DelegatingPortalHost[dart.implements] = () => [portal$.PortalHost];
  dart.setMethodSignature(portal$.DelegatingPortalHost, () => ({
    __proto__: dart.getMethods(portal$.DelegatingPortalHost.__proto__),
    attach: dart.fnType(dart.legacy(async.Future), [dart.legacy(portal$.Portal$(dart.legacy(core.Object)))]),
    detach: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(portal$.DelegatingPortalHost, () => ({
    __proto__: dart.getGetters(portal$.DelegatingPortalHost.__proto__),
    hasAttached: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(portal$.DelegatingPortalHost, L1);
  dart.setFieldSignature(portal$.DelegatingPortalHost, () => ({
    __proto__: dart.getFields(portal$.DelegatingPortalHost.__proto__),
    [_delegateHost$]: dart.finalFieldType(dart.legacy(portal$.PortalHost))
  }));
  var _componentLoader$ = dart.privateName(portal$, "_componentLoader");
  var _viewContainerRef$ = dart.privateName(portal$, "_viewContainerRef");
  portal$.PortalHostDirective = class PortalHostDirective extends portal$.BasePortalHost {
    attachComponentPortal(portal) {
      let viewContainerRef = this[_viewContainerRef$];
      if (portal.origin != null) {
        viewContainerRef = portal.origin;
      }
      let ref = this[_componentLoader$].loadNextToLocation(ObjectL(), portal.componentFactory, viewContainerRef);
      this.setPortalDisposer(dart.bind(ref, 'destroy'));
      return FutureOfComponentRefLOfObjectL().value(ref);
    }
    attachTemplatePortal(portal) {
      let viewRef = this[_viewContainerRef$].createEmbeddedView(portal.template);
      portal.locals[$forEach](dart.bind(viewRef, 'setLocal'));
      this.setPortalDisposer(dart.bind(this[_viewContainerRef$], 'clear'));
      return FutureOfMapLOfStringL$dynamic().value(portal$.BasePortalHost.createLocalsMap(viewRef));
    }
    set portal(portal) {
      if (dart.test(this.hasAttached)) {
        this.detach().then(core.Null, dart.fn(_ => {
          if (portal != null) {
            this.attach(portal);
          }
        }, voidToNull()));
      } else {
        if (portal != null) {
          this.attach(portal);
        }
      }
    }
  };
  (portal$.PortalHostDirective.new = function(_componentLoader, _viewContainerRef) {
    this[_componentLoader$] = _componentLoader;
    this[_viewContainerRef$] = _viewContainerRef;
    portal$.PortalHostDirective.__proto__.new.call(this);
    ;
  }).prototype = portal$.PortalHostDirective.prototype;
  dart.addTypeTests(portal$.PortalHostDirective);
  dart.addTypeCaches(portal$.PortalHostDirective);
  dart.setMethodSignature(portal$.PortalHostDirective, () => ({
    __proto__: dart.getMethods(portal$.PortalHostDirective.__proto__),
    attachComponentPortal: dart.fnType(dart.legacy(async.Future$(dart.legacy(component_factory.ComponentRef$(dart.legacy(core.Object))))), [dart.legacy(portal$.ComponentPortal$(dart.legacy(core.Object)))]),
    attachTemplatePortal: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))), [dart.legacy(portal$.TemplatePortal)])
  }));
  dart.setSetterSignature(portal$.PortalHostDirective, () => ({
    __proto__: dart.getSetters(portal$.PortalHostDirective.__proto__),
    portal: dart.legacy(portal$.Portal$(dart.legacy(core.Object)))
  }));
  dart.setLibraryUri(portal$.PortalHostDirective, L1);
  dart.setFieldSignature(portal$.PortalHostDirective, () => ({
    __proto__: dart.getFields(portal$.PortalHostDirective.__proto__),
    [_componentLoader$]: dart.finalFieldType(dart.legacy(component_loader.ComponentLoader)),
    [_viewContainerRef$]: dart.finalFieldType(dart.legacy(view_container_ref.ViewContainerRef))
  }));
  var _hostElement$ = dart.privateName(portal$, "_hostElement");
  var _imperativeViewUtils$ = dart.privateName(portal$, "_imperativeViewUtils");
  portal$.DomPortalHost = class DomPortalHost extends portal$.BasePortalHost {
    attachComponentPortal(portal) {
      if (portal.origin == null) {
        dart.throw(new core.StateError.new("A component hosted in a DomPortalHost must " + "have an `origin` set, since the DOM element itself " + "is not an Angular component."));
      }
      return this[_imperativeViewUtils$].insertComponent(ObjectL(), portal.componentFactory, portal.origin, this[_hostElement$]).then(ComponentRefLOfObjectL(), dart.fn(ref => {
        this.setPortalDisposer(dart.bind(ref, 'destroy'));
        return ref;
      }, ComponentRefLOfObjectLToComponentRefLOfObjectL()));
    }
    attachTemplatePortal(portal) {
      return this[_imperativeViewUtils$].insertAngularView(this[_hostElement$], portal.template, portal.viewContainer).then(MapLOfStringL$dynamic(), dart.fn(ref => {
        portal.locals[$forEach](dart.bind(ref.viewRef, 'setLocal'));
        this.setPortalDisposer(dart.bind(ref, 'dispose'));
        return portal$.BasePortalHost.createLocalsMap(ref.viewRef);
      }, ImperativeViewRefLToMapLOfStringL$dynamic()));
    }
  };
  (portal$.DomPortalHost.new = function(_hostElement, _imperativeViewUtils) {
    this[_hostElement$] = _hostElement;
    this[_imperativeViewUtils$] = _imperativeViewUtils;
    portal$.DomPortalHost.__proto__.new.call(this);
    ;
  }).prototype = portal$.DomPortalHost.prototype;
  dart.addTypeTests(portal$.DomPortalHost);
  dart.addTypeCaches(portal$.DomPortalHost);
  dart.setMethodSignature(portal$.DomPortalHost, () => ({
    __proto__: dart.getMethods(portal$.DomPortalHost.__proto__),
    attachComponentPortal: dart.fnType(dart.legacy(async.Future$(dart.legacy(component_factory.ComponentRef$(dart.legacy(core.Object))))), [dart.legacy(portal$.ComponentPortal$(dart.legacy(core.Object)))]),
    attachTemplatePortal: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))), [dart.legacy(portal$.TemplatePortal)])
  }));
  dart.setLibraryUri(portal$.DomPortalHost, L1);
  dart.setFieldSignature(portal$.DomPortalHost, () => ({
    __proto__: dart.getFields(portal$.DomPortalHost.__proto__),
    [_hostElement$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_imperativeViewUtils$]: dart.finalFieldType(dart.legacy(imperative_view.AcxImperativeViewUtils))
  }));
  var _ready = dart.privateName(portal$, "_ready");
  portal$.TemplatePortalDirective = class TemplatePortalDirective extends portal$.TemplatePortal {
    get ready() {
      return this[_ready].stream;
    }
  };
  (portal$.TemplatePortalDirective.new = function(templateRef, viewContainerRef) {
    this[_ready] = StreamControllerOfTemplatePortalDirectiveL().broadcast();
    portal$.TemplatePortalDirective.__proto__.new.call(this, templateRef, viewContainerRef);
    async.scheduleMicrotask(dart.fn(() => {
      this[_ready].add(this);
    }, VoidToNull()));
  }).prototype = portal$.TemplatePortalDirective.prototype;
  dart.addTypeTests(portal$.TemplatePortalDirective);
  dart.addTypeCaches(portal$.TemplatePortalDirective);
  dart.setGetterSignature(portal$.TemplatePortalDirective, () => ({
    __proto__: dart.getGetters(portal$.TemplatePortalDirective.__proto__),
    ready: dart.legacy(async.Stream$(dart.legacy(portal$.TemplatePortalDirective)))
  }));
  dart.setLibraryUri(portal$.TemplatePortalDirective, L1);
  dart.setFieldSignature(portal$.TemplatePortalDirective, () => ({
    __proto__: dart.getFields(portal$.TemplatePortalDirective.__proto__),
    [_ready]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(portal$.TemplatePortalDirective))))
  }));
  dart.trackLibraries("packages/angular_components/laminate/portal/portal", {
    "package:angular_components/laminate/portal/portal.dart": portal$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["portal.dart"],"names":[],"mappings":"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","file":"portal.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__portal__portal: portal$
  };
}));

//# sourceMappingURL=portal.unsound.ddc.js.map
