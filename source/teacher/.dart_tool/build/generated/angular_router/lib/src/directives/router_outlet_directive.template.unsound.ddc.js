define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform.template', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_compiler/v1/src/metadata/di_arguments', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular/angular.template'], (function load__packages__angular_router__src__directives__router_outlet_directive_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform$46template, packages__angular__src__core__change_detection__pipe_transform, packages__angular_router__src__directives__router_outlet_directive, packages__angular_compiler__v1__src__metadata__di_arguments, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const runtime$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__runtime$46template;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const path_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__path_location_strategy;
  const platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__platform_location;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__location_strategy;
  const hash_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__hash_location_strategy;
  const browser_platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__browser_platform_location;
  const router_impl = packages__angular_router__src__directives__router_outlet_directive.src__router__router_impl;
  const router_hook = packages__angular_router__src__directives__router_outlet_directive.src__router_hook;
  const di_arguments = packages__angular_compiler__v1__src__metadata__di_arguments.v1__src__metadata__di_arguments;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var navigation_params$46template = Object.create(dart.library);
  var path_location_strategy$46template = Object.create(dart.library);
  var platform_location$46template = Object.create(dart.library);
  var location_strategy$46template = Object.create(dart.library);
  var location$46template = Object.create(dart.library);
  var hash_location_strategy$46template = Object.create(dart.library);
  var router$46template = Object.create(dart.library);
  var router_state$46template = Object.create(dart.library);
  var url$46template = Object.create(dart.library);
  var route_path$46template = Object.create(dart.library);
  var route_definition$46template = Object.create(dart.library);
  var location$46template$ = Object.create(dart.library);
  var browser_platform_location$46template = Object.create(dart.library);
  var base_href$46template = Object.create(dart.library);
  var router_outlet_directive$46template = Object.create(dart.library);
  var router_hook$46template = Object.create(dart.library);
  var router_outlet_token$46template = Object.create(dart.library);
  var lifecycle$46template = Object.create(dart.library);
  var router_impl$46template = Object.create(dart.library);
  var PathLocationStrategyL = () => (PathLocationStrategyL = dart.constFn(dart.legacy(path_location_strategy.PathLocationStrategy)))();
  var PlatformLocationL = () => (PlatformLocationL = dart.constFn(dart.legacy(platform_location.PlatformLocation)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var PlatformLocationLAndStringLToPathLocationStrategyL = () => (PlatformLocationLAndStringLToPathLocationStrategyL = dart.constFn(dart.fnType(PathLocationStrategyL(), [PlatformLocationL(), StringL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var OpaqueTokenOfStringL = () => (OpaqueTokenOfStringL = dart.constFn(di_tokens.OpaqueToken$(StringL())))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location.Location)))();
  var LocationStrategyL = () => (LocationStrategyL = dart.constFn(dart.legacy(location_strategy.LocationStrategy)))();
  var LocationStrategyLToLocationL = () => (LocationStrategyLToLocationL = dart.constFn(dart.fnType(LocationL(), [LocationStrategyL()])))();
  var HashLocationStrategyL = () => (HashLocationStrategyL = dart.constFn(dart.legacy(hash_location_strategy.HashLocationStrategy)))();
  var PlatformLocationLAndStringLToHashLocationStrategyL = () => (PlatformLocationLAndStringLToHashLocationStrategyL = dart.constFn(dart.fnType(HashLocationStrategyL(), [PlatformLocationL(), StringL()])))();
  var BrowserPlatformLocationL = () => (BrowserPlatformLocationL = dart.constFn(dart.legacy(browser_platform_location.BrowserPlatformLocation)))();
  var VoidToBrowserPlatformLocationL = () => (VoidToBrowserPlatformLocationL = dart.constFn(dart.fnType(BrowserPlatformLocationL(), [])))();
  var RouterImplL = () => (RouterImplL = dart.constFn(dart.legacy(router_impl.RouterImpl)))();
  var RouterHookL = () => (RouterHookL = dart.constFn(dart.legacy(router_hook.RouterHook)))();
  var LocationLAndRouterHookLToRouterImplL = () => (LocationLAndRouterHookLToRouterImplL = dart.constFn(dart.fnType(RouterImplL(), [LocationL(), RouterHookL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(PlatformLocationL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ObjectL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: OpaqueTokenOfStringL().prototype,
        [OpaqueToken__uniqueName]: "appBaseHref"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_arguments.Inject.prototype,
        [Inject_token]: C5 || CT.C5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_arguments.Optional.prototype
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C6 || CT.C6], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C3 || CT.C3], ListLOfObjectL());
    },
    get C9() {
      return C9 = dart.wrapType(LocationStrategyL());
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], ObjectL());
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], ListLOfObjectL());
    },
    get C12() {
      return C12 = dart.wrapType(LocationL());
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], ObjectL());
    },
    get C14() {
      return C14 = dart.wrapType(RouterHookL());
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C6 || CT.C6], ObjectL());
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C13 || CT.C13], ListLOfObjectL());
    }
  }, false);
  navigation_params$46template.initReflector = function initReflector() {
    if (dart.test(navigation_params$46template._visited)) {
      return;
    }
    navigation_params$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(navigation_params$46template, {
    /*navigation_params$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C2;
  var C1;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C5;
  var Inject_token = dart.privateName(di_arguments, "Inject.token");
  var C4;
  var C6;
  var C3;
  var C0;
  path_location_strategy$46template.initReflector = function initReflector$() {
    if (dart.test(path_location_strategy$46template._visited)) {
      return;
    }
    path_location_strategy$46template._visited = true;
    reflector.registerFactory(dart.wrapType(PathLocationStrategyL()), dart.fn((p0, p1) => new path_location_strategy.PathLocationStrategy.new(p0, p1), PlatformLocationLAndStringLToPathLocationStrategyL()));
    reflector.registerDependencies(dart.wrapType(PathLocationStrategyL()), C0 || CT.C0);
    location$46template.initReflector();
    location_strategy$46template.initReflector();
    angular$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(path_location_strategy$46template, {
    /*path_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  platform_location$46template.initReflector = function initReflector$0() {
  };
  location_strategy$46template.initReflector = function initReflector$1() {
    if (dart.test(location_strategy$46template._visited)) {
      return;
    }
    location_strategy$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(location_strategy$46template, {
    /*location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C9;
  var C8;
  var C7;
  location$46template.initReflector = function initReflector$2() {
    if (dart.test(location$46template._visited)) {
      return;
    }
    location$46template._visited = true;
    reflector.registerFactory(dart.wrapType(LocationL()), dart.fn(p0 => new location.Location.new(p0), LocationStrategyLToLocationL()));
    reflector.registerDependencies(dart.wrapType(LocationL()), C7 || CT.C7);
    location_strategy$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(location$46template, {
    /*location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  hash_location_strategy$46template.initReflector = function initReflector$3() {
    if (dart.test(hash_location_strategy$46template._visited)) {
      return;
    }
    hash_location_strategy$46template._visited = true;
    reflector.registerFactory(dart.wrapType(HashLocationStrategyL()), dart.fn((p0, p1) => new hash_location_strategy.HashLocationStrategy.new(p0, p1), PlatformLocationLAndStringLToHashLocationStrategyL()));
    reflector.registerDependencies(dart.wrapType(HashLocationStrategyL()), C0 || CT.C0);
    location$46template.initReflector();
    location_strategy$46template.initReflector();
    angular$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(hash_location_strategy$46template, {
    /*hash_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  router$46template.initReflector = function initReflector$4() {
    if (dart.test(router$46template._visited)) {
      return;
    }
    router$46template._visited = true;
    router_outlet_directive$46template.initReflector();
    navigation_params$46template.initReflector();
    router_state$46template.initReflector();
  };
  dart.defineLazy(router$46template, {
    /*router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  router_state$46template.initReflector = function initReflector$5() {
    if (dart.test(router_state$46template._visited)) {
      return;
    }
    router_state$46template._visited = true;
    route_definition$46template.initReflector();
    route_path$46template.initReflector();
    url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(router_state$46template, {
    /*router_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  url$46template.initReflector = function initReflector$6() {
  };
  route_path$46template.initReflector = function initReflector$7() {
    if (dart.test(route_path$46template._visited)) {
      return;
    }
    route_path$46template._visited = true;
    location$46template$.initReflector();
    route_definition$46template.initReflector();
    url$46template.initReflector();
  };
  dart.defineLazy(route_path$46template, {
    /*route_path$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  route_definition$46template.initReflector = function initReflector$8() {
    if (dart.test(route_definition$46template._visited)) {
      return;
    }
    route_definition$46template._visited = true;
    angular$46template.initReflector();
    runtime$46template.initReflector();
    route_path$46template.initReflector();
    router_state$46template.initReflector();
    url$46template.initReflector();
  };
  dart.defineLazy(route_definition$46template, {
    /*route_definition$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  location$46template$.initReflector = function initReflector$9() {
    if (dart.test(location$46template$._visited)) {
      return;
    }
    location$46template$._visited = true;
    browser_platform_location$46template.initReflector();
    hash_location_strategy$46template.initReflector();
    location$46template.initReflector();
    location_strategy$46template.initReflector();
    path_location_strategy$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(location$46template$, {
    /*location$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  browser_platform_location$46template.initReflector = function initReflector$10() {
    if (dart.test(browser_platform_location$46template._visited)) {
      return;
    }
    browser_platform_location$46template._visited = true;
    reflector.registerFactory(dart.wrapType(BrowserPlatformLocationL()), dart.fn(() => new browser_platform_location.BrowserPlatformLocation.new(), VoidToBrowserPlatformLocationL()));
    base_href$46template.initReflector();
    angular$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(browser_platform_location$46template, {
    /*browser_platform_location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  base_href$46template.initReflector = function initReflector$11() {
  };
  router_outlet_directive$46template.initReflector = function initReflector$12() {
    if (dart.test(router_outlet_directive$46template._visited)) {
      return;
    }
    router_outlet_directive$46template._visited = true;
    lifecycle$46template.initReflector();
    route_definition$46template.initReflector();
    router$46template.initReflector();
    router_outlet_token$46template.initReflector();
    router_state$46template.initReflector();
    router_hook$46template.initReflector();
    angular$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(router_outlet_directive$46template, {
    /*router_outlet_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  router_hook$46template.initReflector = function initReflector$13() {
    if (dart.test(router_hook$46template._visited)) {
      return;
    }
    router_hook$46template._visited = true;
    navigation_params$46template.initReflector();
    router_state$46template.initReflector();
  };
  dart.defineLazy(router_hook$46template, {
    /*router_hook$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  router_outlet_token$46template.initReflector = function initReflector$14() {
    if (dart.test(router_outlet_token$46template._visited)) {
      return;
    }
    router_outlet_token$46template._visited = true;
    router_outlet_directive$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(router_outlet_token$46template, {
    /*router_outlet_token$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  lifecycle$46template.initReflector = function initReflector$15() {
    if (dart.test(lifecycle$46template._visited)) {
      return;
    }
    lifecycle$46template._visited = true;
    router_state$46template.initReflector();
  };
  dart.defineLazy(lifecycle$46template, {
    /*lifecycle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C12;
  var C11;
  var C14;
  var C13;
  var C10;
  router_impl$46template.initReflector = function initReflector$16() {
    if (dart.test(router_impl$46template._visited)) {
      return;
    }
    router_impl$46template._visited = true;
    reflector.registerFactory(dart.wrapType(RouterImplL()), dart.fn((p0, p1) => new router_impl.RouterImpl.new(p0, p1), LocationLAndRouterHookLToRouterImplL()));
    reflector.registerDependencies(dart.wrapType(RouterImplL()), C10 || CT.C10);
    router_outlet_directive$46template.initReflector();
    lifecycle$46template.initReflector();
    location$46template$.initReflector();
    route_definition$46template.initReflector();
    router_hook$46template.initReflector();
    url$46template.initReflector();
    navigation_params$46template.initReflector();
    angular$46template.initReflector();
    router$46template.initReflector();
    router_outlet_token$46template.initReflector();
    router_state$46template.initReflector();
  };
  dart.defineLazy(router_impl$46template, {
    /*router_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.template", {
    "package:angular_router/src/router/navigation_params.template.dart": navigation_params$46template,
    "package:angular_router/src/location/path_location_strategy.template.dart": path_location_strategy$46template,
    "package:angular_router/src/location/platform_location.template.dart": platform_location$46template,
    "package:angular_router/src/location/location_strategy.template.dart": location_strategy$46template,
    "package:angular_router/src/location/location.template.dart": location$46template,
    "package:angular_router/src/location/hash_location_strategy.template.dart": hash_location_strategy$46template,
    "package:angular_router/src/router/router.template.dart": router$46template,
    "package:angular_router/src/router/router_state.template.dart": router_state$46template,
    "package:angular_router/src/url.template.dart": url$46template,
    "package:angular_router/src/route_path.template.dart": route_path$46template,
    "package:angular_router/src/route_definition.template.dart": route_definition$46template,
    "package:angular_router/src/location.template.dart": location$46template$,
    "package:angular_router/src/location/browser_platform_location.template.dart": browser_platform_location$46template,
    "package:angular_router/src/location/base_href.template.dart": base_href$46template,
    "package:angular_router/src/directives/router_outlet_directive.template.dart": router_outlet_directive$46template,
    "package:angular_router/src/router_hook.template.dart": router_hook$46template,
    "package:angular_router/src/router/router_outlet_token.template.dart": router_outlet_token$46template,
    "package:angular_router/src/lifecycle.template.dart": lifecycle$46template,
    "package:angular_router/src/router/router_impl.template.dart": router_impl$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../router/navigation_params.template.dart","../location/path_location_strategy.template.dart","../location/platform_location.template.dart","../location/location_strategy.template.dart","../location/location.template.dart","../location/hash_location_strategy.template.dart","../router/router.template.dart","../router/router_state.template.dart","../url.template.dart","../route_path.template.dart","../route_definition.template.dart","../location.template.dart","../location/browser_platform_location.template.dart","../location/base_href.template.dart","router_outlet_directive.template.dart","../router_hook.template.dart","../router/router_outlet_token.template.dart","../lifecycle.template.dart","../router/router_impl.template.dart"],"names":[],"mappings":"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","file":"router_outlet_directive.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__router__navigation_params$46template: navigation_params$46template,
    src__location__path_location_strategy$46template: path_location_strategy$46template,
    src__location__platform_location$46template: platform_location$46template,
    src__location__location_strategy$46template: location_strategy$46template,
    src__location__location$46template: location$46template,
    src__location__hash_location_strategy$46template: hash_location_strategy$46template,
    src__router__router$46template: router$46template,
    src__router__router_state$46template: router_state$46template,
    src__url$46template: url$46template,
    src__route_path$46template: route_path$46template,
    src__route_definition$46template: route_definition$46template,
    src__location$46template: location$46template$,
    src__location__browser_platform_location$46template: browser_platform_location$46template,
    src__location__base_href$46template: base_href$46template,
    src__directives__router_outlet_directive$46template: router_outlet_directive$46template,
    src__router_hook$46template: router_hook$46template,
    src__router__router_outlet_token$46template: router_outlet_token$46template,
    src__lifecycle$46template: lifecycle$46template,
    src__router__router_impl$46template: router_impl$46template
  };
}));

//# sourceMappingURL=router_outlet_directive.template.unsound.ddc.js.map
