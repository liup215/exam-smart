define(['dart_sdk'], (function load__packages__angular_components__model__ui__has_renderer(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var has_renderer = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ExpandoOfObjectL = () => (ExpandoOfObjectL = dart.constFn(core.Expando$(ObjectL())))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/has_renderer.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(has_renderer._nullRenderer, dynamicToStringL());
    }
  }, false);
  const _is_HasRenderer_default = Symbol('_is_HasRenderer_default');
  var itemRenderer = dart.privateName(has_renderer, "HasRenderer.itemRenderer");
  has_renderer.HasRenderer$ = dart.generic(T => {
    class HasRenderer extends core.Object {
      get itemRenderer() {
        return this[itemRenderer];
      }
      set itemRenderer(value) {
        this[itemRenderer] = value;
      }
    }
    (HasRenderer.new = function() {
      this[itemRenderer] = null;
      ;
    }).prototype = HasRenderer.prototype;
    dart.addTypeTests(HasRenderer);
    HasRenderer.prototype[_is_HasRenderer_default] = true;
    dart.addTypeCaches(HasRenderer);
    dart.setLibraryUri(HasRenderer, L0);
    dart.setFieldSignature(HasRenderer, () => ({
      __proto__: dart.getFields(HasRenderer.__proto__),
      itemRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])))
    }));
    return HasRenderer;
  });
  has_renderer.HasRenderer = has_renderer.HasRenderer$();
  dart.addTypeTests(has_renderer.HasRenderer, _is_HasRenderer_default);
  const _is_RendersValue_default = Symbol('_is_RendersValue_default');
  has_renderer.RendersValue$ = dart.generic(T => {
    class RendersValue extends core.Object {}
    (RendersValue.new = function() {
      ;
    }).prototype = RendersValue.prototype;
    dart.addTypeTests(RendersValue);
    RendersValue.prototype[_is_RendersValue_default] = true;
    dart.addTypeCaches(RendersValue);
    dart.setLibraryUri(RendersValue, L0);
    return RendersValue;
  });
  has_renderer.RendersValue = has_renderer.RendersValue$();
  dart.addTypeTests(has_renderer.RendersValue, _is_RendersValue_default);
  const _is_HasComponentRenderer_default = Symbol('_is_HasComponentRenderer_default');
  var componentRenderer = dart.privateName(has_renderer, "HasComponentRenderer.componentRenderer");
  has_renderer.HasComponentRenderer$ = dart.generic((T, I) => {
    class HasComponentRenderer extends core.Object {
      get componentRenderer() {
        return this[componentRenderer];
      }
      set componentRenderer(value) {
        this[componentRenderer] = value;
      }
    }
    (HasComponentRenderer.new = function() {
      this[componentRenderer] = null;
      ;
    }).prototype = HasComponentRenderer.prototype;
    dart.addTypeTests(HasComponentRenderer);
    HasComponentRenderer.prototype[_is_HasComponentRenderer_default] = true;
    dart.addTypeCaches(HasComponentRenderer);
    dart.setLibraryUri(HasComponentRenderer, L0);
    dart.setFieldSignature(HasComponentRenderer, () => ({
      __proto__: dart.getFields(HasComponentRenderer.__proto__),
      componentRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.legacy(I)])))
    }));
    return HasComponentRenderer;
  });
  has_renderer.HasComponentRenderer = has_renderer.HasComponentRenderer$();
  dart.addTypeTests(has_renderer.HasComponentRenderer, _is_HasComponentRenderer_default);
  has_renderer.newCachingItemRenderer = function newCachingItemRenderer(T, itemRenderer) {
    if (itemRenderer != null && has_renderer._rendererMarker._get(itemRenderer) != null) {
      return itemRenderer;
    }
    let _cache = new (_js_helper.LinkedMap$(dart.legacy(T), StringL())).new();
    let cachingItemRenderer = dart.fn(item => {
      let value = _cache[$_get](item);
      if (value == null) {
        value = itemRenderer(item);
        _cache[$_set](item, value);
      }
      return value;
    }, dart.fnType(StringL(), [dart.legacy(T)]));
    has_renderer._rendererMarker._set(cachingItemRenderer, cachingItemRenderer);
    return cachingItemRenderer;
  };
  has_renderer.defaultItemRenderer = function defaultItemRenderer(value) {
    return dart.str(value);
  };
  has_renderer._nullRenderer = function _nullRenderer(value) {
    return dart.throw(new core.StateError.new("nullRenderer should never be called"));
  };
  var C0;
  dart.defineLazy(has_renderer, {
    /*has_renderer._rendererMarker*/get _rendererMarker() {
      return new (ExpandoOfObjectL()).new("Renderer marker");
    },
    /*has_renderer.nullRenderer*/get nullRenderer() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/model/ui/has_renderer", {
    "package:angular_components/model/ui/has_renderer.dart": has_renderer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_renderer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MASkB;;;;;;;;;;IAClB;;;;;;;;;;;;;;;;;;IAkCA;;;;;;;;;;;;;MAW0B;;;;;;;;;;IAC1B;;;;;;;;;;;;;2EArC0D;AACxD,QAAI,YAAY,IAAI,QAAQ,AAAe,kCAAC,YAAY,KAAK;AAC3D,YAAO,aAAY;;AAEjB,iBAAoB;AACR,8BAAsB,QAAG;AAChC,kBAAQ,AAAM,MAAA,QAAC,IAAI;AAC1B,UAAI,AAAM,KAAD,IAAI;AACe,QAA1B,QAAQ,AAAY,YAAA,CAAC,IAAI;AACL,QAApB,AAAM,MAAA,QAAC,IAAI,EAAI,KAAK;;AAEtB,YAAO,MAAK;;AAE4C,IAA1D,AAAe,kCAAC,mBAAmB,EAAI,mBAAmB;AAE1D,UAAO,oBAAmB;EAC5B;kEAuBmC;AAAU,UAAQ,UAAN,KAAK;EAAC;sDAKxB;AACzB,sBAAM,wBAAW;EAAsC;;;MApDrD,4BAAe;YAAG,8BAAQ;;MAiDb,yBAAY","file":"has_renderer.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__has_renderer: has_renderer
  };
}));

//# sourceMappingURL=has_renderer.unsound.ddc.js.map
