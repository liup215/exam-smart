define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/collection/src/comparators', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_compiler/v1/src/metadata'], (function load__packages__angular_router__src__constants(dart_sdk, packages__angular_router__src__directives__router_outlet_directive, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__change_detection__pipe_transform, packages__collection__src__comparators, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_compiler__v1__src__metadata) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url = packages__angular_router__src__directives__router_outlet_directive.src__url;
  const navigation_params = packages__angular_router__src__directives__router_outlet_directive.src__router__navigation_params;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const router_state = packages__angular_router__src__directives__router_outlet_directive.src__router__router_state;
  const router_outlet_directive = packages__angular_router__src__directives__router_outlet_directive.src__directives__router_outlet_directive;
  const path_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__path_location_strategy;
  const location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__location_strategy;
  const browser_platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__browser_platform_location;
  const platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__platform_location;
  const router_impl = packages__angular_router__src__directives__router_outlet_directive.src__router__router_impl;
  const hash_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__hash_location_strategy;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const equality = packages__collection__src__comparators.src__equality;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  var router_link_directive = Object.create(dart.library);
  var router_link_active_directive = Object.create(dart.library);
  var constants = Object.create(dart.library);
  var $onKeyPress = dartx.onKeyPress;
  var $isNotEmpty = dartx.isNotEmpty;
  var $classes = dartx.classes;
  var AnchorElementL = () => (AnchorElementL = dart.constFn(dart.legacy(html.AnchorElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var MapEqualityOfStringL$StringL = () => (MapEqualityOfStringL$StringL = dart.constFn(equality.MapEquality$(StringL(), StringL())))();
  var DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  var RouterOutletL = () => (RouterOutletL = dart.constFn(dart.legacy(router_outlet_directive.RouterOutlet)))();
  var RouterLinkL = () => (RouterLinkL = dart.constFn(dart.legacy(router_link_directive.RouterLink)))();
  var RouterLinkActiveL = () => (RouterLinkActiveL = dart.constFn(dart.legacy(router_link_active_directive.RouterLinkActive)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  var PathLocationStrategyL = () => (PathLocationStrategyL = dart.constFn(dart.legacy(path_location_strategy.PathLocationStrategy)))();
  var LocationStrategyL = () => (LocationStrategyL = dart.constFn(dart.legacy(location_strategy.LocationStrategy)))();
  var BrowserPlatformLocationL = () => (BrowserPlatformLocationL = dart.constFn(dart.legacy(browser_platform_location.BrowserPlatformLocation)))();
  var PlatformLocationL = () => (PlatformLocationL = dart.constFn(dart.legacy(platform_location.PlatformLocation)))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location.Location)))();
  var RouterImplL = () => (RouterImplL = dart.constFn(dart.legacy(router_impl.RouterImpl)))();
  var RouterL = () => (RouterL = dart.constFn(dart.legacy(router.Router)))();
  var ClassProviderL = () => (ClassProviderL = dart.constFn(dart.legacy(di_providers.ClassProvider)))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  var HashLocationStrategyL = () => (HashLocationStrategyL = dart.constFn(dart.legacy(hash_location_strategy.HashLocationStrategy)))();
  const CT = Object.create(null);
  var L0 = "package:angular_router/src/directives/router_link_directive.dart";
  var L1 = "package:angular_router/src/directives/router_link_active_directive.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: MapEqualityOfStringL$StringL().prototype,
        [MapEquality__valueEquality]: C1 || CT.C1,
        [MapEquality__keyEquality]: C1 || CT.C1
      });
    },
    get C3() {
      return C3 = dart.wrapType(RouterOutletL());
    },
    get C4() {
      return C4 = dart.wrapType(RouterLinkL());
    },
    get C5() {
      return C5 = dart.wrapType(RouterLinkActiveL());
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], TypeL());
    },
    get C8() {
      return C8 = dart.wrapType(PathLocationStrategyL());
    },
    get C9() {
      return C9 = dart.wrapType(LocationStrategyL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C8 || CT.C8,
        [Provider_token]: C9 || CT.C9
      });
    },
    get C11() {
      return C11 = dart.wrapType(BrowserPlatformLocationL());
    },
    get C12() {
      return C12 = dart.wrapType(PlatformLocationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C11 || CT.C11,
        [Provider_token]: C12 || CT.C12
      });
    },
    get C14() {
      return C14 = dart.wrapType(LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C14 || CT.C14,
        [Provider_token]: C14 || CT.C14
      });
    },
    get C16() {
      return C16 = dart.wrapType(RouterImplL());
    },
    get C17() {
      return C17 = dart.wrapType(RouterL());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C16 || CT.C16,
        [Provider_token]: C17 || CT.C17
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C10 || CT.C10, C13 || CT.C13, C15 || CT.C15], ClassProviderL());
    },
    get C19() {
      return C19 = dart.constList([], ModuleL());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C6 || CT.C6,
        [Module_include]: C19 || CT.C19
      });
    },
    get C22() {
      return C22 = dart.wrapType(HashLocationStrategyL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: di_providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C22 || CT.C22,
        [Provider_token]: C9 || CT.C9
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C10 || CT.C10, C13 || CT.C13, C15 || CT.C15], ClassProviderL());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C20 || CT.C20,
        [Module_include]: C19 || CT.C19
      });
    }
  }, false);
  var _keyPressSubscription = dart.privateName(router_link_directive, "_keyPressSubscription");
  var _routerLink = dart.privateName(router_link_directive, "_routerLink");
  var _cachedVisibleHref = dart.privateName(router_link_directive, "_cachedVisibleHref");
  var _cachedUrl = dart.privateName(router_link_directive, "_cachedUrl");
  var _router$ = dart.privateName(router_link_directive, "_router");
  var _location$ = dart.privateName(router_link_directive, "_location");
  var _target$ = dart.privateName(router_link_directive, "_target");
  var _onKeyPress = dart.privateName(router_link_directive, "_onKeyPress");
  var _trigger = dart.privateName(router_link_directive, "_trigger");
  router_link_directive.RouterLink = class RouterLink extends core.Object {
    set routerLink(routerLink) {
      this[_routerLink] = routerLink;
      this[_cachedVisibleHref] = null;
      this[_cachedUrl] = null;
    }
    get url() {
      if (this[_cachedUrl] == null) {
        let parsedUrl = url.Url.parse(this[_routerLink]);
        this[_cachedUrl] = new url.Url.new(this[_location$].normalizePath(parsedUrl.path), {fragment: parsedUrl.fragment, queryParameters: parsedUrl.queryParameters});
      }
      return this[_cachedUrl];
    }
    get visibleHref() {
      let t0;
      t0 = this[_cachedVisibleHref];
      return t0 == null ? this[_cachedVisibleHref] = this[_location$].prepareExternalUrl(this[_routerLink]) : t0;
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_keyPressSubscription];
      t0 == null ? null : t0.cancel();
    }
    onClick(event) {
      if (dart.test(event.ctrlKey) || dart.test(event.metaKey)) return;
      this[_trigger](event);
    }
    [_onKeyPress](event) {
      if (event.keyCode !== 13 || dart.test(event.ctrlKey) || dart.test(event.metaKey)) {
        return;
      }
      this[_trigger](event);
    }
    [_trigger](event) {
      if (this[_target$] == null || this[_target$] === "_self") {
        event.preventDefault();
        this[_router$].navigate(this.url.path, new navigation_params.NavigationParams.new({queryParameters: this.url.queryParameters, fragment: this.url.fragment}));
      }
    }
  };
  (router_link_directive.RouterLink.new = function(_router, _location, _target, element) {
    this[_keyPressSubscription] = null;
    this[_routerLink] = null;
    this[_cachedVisibleHref] = null;
    this[_cachedUrl] = null;
    this[_router$] = _router;
    this[_location$] = _location;
    this[_target$] = _target;
    if (!AnchorElementL().is(element)) {
      this[_keyPressSubscription] = element[$onKeyPress].listen(dart.bind(this, _onKeyPress));
    }
  }).prototype = router_link_directive.RouterLink.prototype;
  dart.addTypeTests(router_link_directive.RouterLink);
  dart.addTypeCaches(router_link_directive.RouterLink);
  router_link_directive.RouterLink[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getMethods(router_link_directive.RouterLink.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    onClick: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_onKeyPress]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    [_trigger]: dart.fnType(dart.void, [dart.legacy(html.Event)])
  }));
  dart.setGetterSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getGetters(router_link_directive.RouterLink.__proto__),
    url: dart.legacy(url.Url),
    visibleHref: dart.legacy(core.String)
  }));
  dart.setSetterSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getSetters(router_link_directive.RouterLink.__proto__),
    routerLink: dart.legacy(core.String)
  }));
  dart.setLibraryUri(router_link_directive.RouterLink, L0);
  dart.setFieldSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getFields(router_link_directive.RouterLink.__proto__),
    [_router$]: dart.finalFieldType(dart.legacy(router.Router)),
    [_location$]: dart.finalFieldType(dart.legacy(location.Location)),
    [_target$]: dart.finalFieldType(dart.legacy(core.String)),
    [_keyPressSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.KeyboardEvent)))),
    [_routerLink]: dart.fieldType(dart.legacy(core.String)),
    [_cachedVisibleHref]: dart.fieldType(dart.legacy(core.String)),
    [_cachedUrl]: dart.fieldType(dart.legacy(url.Url))
  }));
  var _routeChanged = dart.privateName(router_link_active_directive, "_routeChanged");
  var _classes = dart.privateName(router_link_active_directive, "_classes");
  var _element$ = dart.privateName(router_link_active_directive, "_element");
  var _router$0 = dart.privateName(router_link_active_directive, "_router");
  var _update = dart.privateName(router_link_active_directive, "_update");
  var C1;
  var MapEquality__valueEquality = dart.privateName(equality, "MapEquality._valueEquality");
  var MapEquality__keyEquality = dart.privateName(equality, "MapEquality._keyEquality");
  var C0;
  var links = dart.privateName(router_link_active_directive, "RouterLinkActive.links");
  router_link_active_directive.RouterLinkActive = class RouterLinkActive extends core.Object {
    get links() {
      return this[links];
    }
    set links(value) {
      this[links] = value;
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_routeChanged];
      return t0 == null ? null : t0.cancel();
    }
    ngAfterViewInit() {
      this[_routeChanged] = this[_router$0].stream.listen(dart.bind(this, _update));
      this[_update](this[_router$0].current);
    }
    set routerLinkActive(classes) {
      if (StringL().is(classes)) {
        this[_classes] = JSArrayOfStringL().of([classes]);
      } else if (ListLOfStringL().is(classes)) {
        this[_classes] = classes;
      } else if (dart.test(optimizations.isDevMode)) {
        dart.throw(new core.ArgumentError.new("Expected a string or list of strings. Got " + dart.str(classes) + "."));
      }
    }
    [_update](routerState) {
      let isActive = false;
      if (routerState != null) {
        for (let link of this.links) {
          let url = link.url;
          if (url.path != routerState.path) continue;
          if (dart.test(url.queryParameters[$isNotEmpty]) && !dart.test((C0 || CT.C0).equals(url.queryParameters, routerState.queryParameters))) {
            continue;
          }
          if (url.fragment[$isNotEmpty] && url.fragment != routerState.fragment) {
            continue;
          }
          isActive = true;
          break;
        }
      }
      this[_element$][$classes].toggleAll(this[_classes], isActive);
    }
  };
  (router_link_active_directive.RouterLinkActive.new = function(_element, _router) {
    this[_routeChanged] = null;
    this[_classes] = null;
    this[links] = null;
    this[_element$] = _element;
    this[_router$0] = _router;
    ;
  }).prototype = router_link_active_directive.RouterLinkActive.prototype;
  dart.addTypeTests(router_link_active_directive.RouterLinkActive);
  dart.addTypeCaches(router_link_active_directive.RouterLinkActive);
  router_link_active_directive.RouterLinkActive[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getMethods(router_link_active_directive.RouterLinkActive.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_update]: dart.fnType(dart.void, [dart.legacy(router_state.RouterState)])
  }));
  dart.setSetterSignature(router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getSetters(router_link_active_directive.RouterLinkActive.__proto__),
    routerLinkActive: dart.legacy(core.Object)
  }));
  dart.setLibraryUri(router_link_active_directive.RouterLinkActive, L1);
  dart.setFieldSignature(router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getFields(router_link_active_directive.RouterLinkActive.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_router$0]: dart.finalFieldType(dart.legacy(router.Router)),
    [_routeChanged]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(router_state.RouterState)))),
    [_classes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    links: dart.fieldType(dart.legacy(core.List$(dart.legacy(router_link_directive.RouterLink))))
  }));
  var C3;
  var C4;
  var C5;
  var C2;
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var C8;
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var C9;
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C7;
  var C11;
  var C12;
  var C10;
  var C14;
  var C13;
  var C16;
  var C17;
  var C15;
  var C6;
  var Module_provide = dart.privateName(di_modules, "Module.provide");
  var C19;
  var Module_include = dart.privateName(di_modules, "Module.include");
  var C18;
  var C22;
  var C21;
  var C20;
  var C23;
  dart.defineLazy(constants, {
    /*constants.routerDirectives*/get routerDirectives() {
      return C2 || CT.C2;
    },
    /*constants.routerProviders*/get routerProviders() {
      return C6 || CT.C6;
    },
    /*constants.routerModule*/get routerModule() {
      return C18 || CT.C18;
    },
    /*constants.routerProvidersHash*/get routerProvidersHash() {
      return C20 || CT.C20;
    },
    /*constants.routerHashModule*/get routerHashModule() {
      return C23 || CT.C23;
    }
  }, true);
  dart.trackLibraries("packages/angular_router/src/constants", {
    "package:angular_router/src/directives/router_link_directive.dart": router_link_directive,
    "package:angular_router/src/directives/router_link_active_directive.dart": router_link_active_directive,
    "package:angular_router/src/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["directives/router_link_directive.dart","directives/router_link_active_directive.dart","constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAkDwB;AACI,MAAxB,oBAAc,UAAU;AACC,MAAzB,2BAAqB;AACJ,MAAjB,mBAAa;IACf;;AAGE,UAAI,AAAW,oBAAG;AACV,wBAAgB,cAAM;AAK3B,QAJD,mBAAa,gBACX,AAAU,+BAAc,AAAU,SAAD,mBACvB,AAAU,SAAD,4BACF,AAAU,SAAD;;AAG9B,YAAO;IACT;;;AAME,WAAO;mBAAmB,OAAnB,2BAAuB,AAAU,oCAAmB;IAC7D;;;AAIiC,WAA/B;0BAAuB;IACzB;YAGwB;AAEtB,oBAAI,AAAM,KAAD,uBAAY,AAAM,KAAD,WAAU;AACrB,MAAf,eAAS,KAAK;IAChB;kBAE+B;AAE7B,UAAI,AAAM,KAAD,6BAA6B,AAAM,KAAD,uBAAY,AAAM,KAAD;AAC1D;;AAEa,MAAf,eAAS,KAAK;IAChB;eAEoB;AAElB,UAAI,AAAQ,kBAAG,QAAQ,AAAQ,mBAAG;AACV,QAAtB,AAAM,KAAD;AAIiE,QAHtE,AAAQ,wBACJ,AAAI,eACJ,6DACqB,AAAI,oCAA2B,AAAI;;IAEhE;;mDAjEgB,SAAc,WAAqC,SACvD;IANsB;IAC3B;IACA;IACH;IAEY;IAAc;IAAqC;AAKjE,SAAY,oBAAR,OAAO;AACqD,MAA9D,8BAAwB,AAAQ,AAAW,OAAZ,+BAAmB;;EAEtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICTiB;;;;;;;;AAKK;iCAAe;IAAQ;;AAIG,MAA9C,sBAAgB,AAAQ,AAAO,wCAAO;AACd,MAAxB,cAAQ,AAAQ;IAClB;yBAG4B;AAC1B,UAAY,aAAR,OAAO;AACW,QAApB,iBAAW,uBAAC,OAAO;YACd,KAAY,oBAAR,OAAO;AACE,QAAlB,iBAAW,OAAO;YACb,eAAI;AAGR,QAFD,WAAM,2BACJ,AAAqD,wDAAT,OAAO;;IAGzD;cAEyB;AACnB,qBAAW;AACf,UAAI,WAAW,IAAI;AACjB,iBAAS,OAAQ;AACT,oBAAM,AAAK,IAAD;AAChB,cAAI,AAAI,GAAD,SAAS,AAAY,WAAD,OAAO;AAElC,wBAAI,AAAI,AAAgB,GAAjB,6CAEE,qBAAO,AAAI,GAAD,kBAAkB,AAAY,WAAD;AAC9C;;AAGF,cAAI,AAAI,AAAS,GAAV,0BAAwB,AAAI,GAAD,aAAa,AAAY,WAAD;AACxD;;AAGa,UAAf,WAAW;AACX;;;AAG0C,MAA9C,AAAS,AAAQ,oCAAU,gBAAU,QAAQ;IAC/C;;gEA9CsB,UAAe;IANL;IACnB;IAGI;IAEK;IAAe;;EAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCfzC,0BAAgB;;;MAWhB,yBAAe;;;MAgBf,sBAAY;;;MAWZ,6BAAmB;;;MAgBnB,0BAAgB","file":"constants.unsound.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_directive: router_link_directive,
    src__directives__router_link_active_directive: router_link_active_directive,
    src__constants: constants
  };
}));

//# sourceMappingURL=constants.unsound.ddc.js.map
