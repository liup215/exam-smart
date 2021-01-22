define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform'], (function load__packages__angular__experimental(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const injector = packages__angular__src__core__change_detection__pipe_transform.src__di__injector__injector;
  const map = packages__angular__src__core__change_detection__pipe_transform.src__di__injector__map;
  const hierarchical = packages__angular__src__core__change_detection__pipe_transform.src__di__injector__hierarchical;
  var experimental = Object.create(dart.library);
  var InjectorL = () => (InjectorL = dart.constFn(dart.legacy(injector.Injector)))();
  var InjectorLToInjectorL = () => (InjectorLToInjectorL = dart.constFn(dart.fnType(InjectorL(), [], [InjectorL()])))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var LinkedMapOfObjectL$ObjectL = () => (LinkedMapOfObjectL$ObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ObjectL())))();
  var HierarchicalInjectorL = () => (HierarchicalInjectorL = dart.constFn(dart.legacy(hierarchical.HierarchicalInjector)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: component_loader.ComponentLoader.prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: dynamic_component_loader.SlowComponentLoader.prototype,
        [SlowComponentLoader__loader]: C1 || CT.C1
      });
    }
  }, false);
  var C1;
  var SlowComponentLoader__loader = dart.privateName(dynamic_component_loader, "SlowComponentLoader._loader");
  var C0;
  experimental.rootInjector = function rootInjector(userInjector) {
    return run.appInjector(dart.fn((parent = null) => optimizations.unsafeCast(InjectorL(), userInjector(parent)), InjectorLToInjectorL()));
  };
  experimental.rootLegacyInjector = function rootLegacyInjector(userInjector) {
    return run.appInjector(dart.fn((parent = null) => new map.MapInjector.new(new (LinkedMapOfObjectL$ObjectL()).from([dart.wrapType(SlowComponentLoaderL()), C0 || CT.C0]), optimizations.unsafeCast(HierarchicalInjectorL(), userInjector(parent))), InjectorLToInjectorL()));
  };
  experimental.isDomRenderDirty = function isDomRenderDirty() {
    return dom_helpers.domRootRendererIsDirty;
  };
  experimental.resetDomRenderDirty = function resetDomRenderDirty() {
    dom_helpers.domRootRendererIsDirty = false;
  };
  dart.trackLibraries("packages/angular/experimental", {
    "package:angular/experimental.dart": experimental
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["experimental.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oDAuCsC;AACpC,UAAO,iBAAY,SAAE,kBAAY,sCAAW,AAAY,YAAA,CAAC,MAAM;EACjE;gEAe4C;AAI1C,UAAO,iBAAY,SAAE,kBACH,wBAAI,yCAClB,sDAGC,kDAAW,AAAY,YAAA,CAAC,MAAM;EAErC;;AAU2B;EAAsB;;AAOjB,IAA9B,qCAAyB;EAC3B","file":"experimental.unsound.ddc.js"}');
  // Exports:
  return {
    experimental: experimental
  };
}));

//# sourceMappingURL=experimental.unsound.ddc.js.map
