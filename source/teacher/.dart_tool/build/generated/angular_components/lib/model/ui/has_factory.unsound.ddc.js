define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__model__ui__has_factory(dart_sdk, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  var has_factory = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/has_factory.dart";
  const _is_HasFactoryRenderer_default = Symbol('_is_HasFactoryRenderer_default');
  var factoryRenderer = dart.privateName(has_factory, "HasFactoryRenderer.factoryRenderer");
  has_factory.HasFactoryRenderer$ = dart.generic((T, I) => {
    class HasFactoryRenderer extends core.Object {
      get factoryRenderer() {
        return this[factoryRenderer];
      }
      set factoryRenderer(value) {
        this[factoryRenderer] = value;
      }
    }
    (HasFactoryRenderer.new = function() {
      this[factoryRenderer] = null;
      ;
    }).prototype = HasFactoryRenderer.prototype;
    dart.addTypeTests(HasFactoryRenderer);
    HasFactoryRenderer.prototype[_is_HasFactoryRenderer_default] = true;
    dart.addTypeCaches(HasFactoryRenderer);
    dart.setLibraryUri(HasFactoryRenderer, L0);
    dart.setFieldSignature(HasFactoryRenderer, () => ({
      __proto__: dart.getFields(HasFactoryRenderer.__proto__),
      factoryRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(I)])))
    }));
    return HasFactoryRenderer;
  });
  has_factory.HasFactoryRenderer = has_factory.HasFactoryRenderer$();
  dart.addTypeTests(has_factory.HasFactoryRenderer, _is_HasFactoryRenderer_default);
  dart.trackLibraries("packages/angular_components/model/ui/has_factory", {
    "package:angular_components/model/ui/has_factory.dart": has_factory
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_factory.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAqBwB;;;;;;;;;;IACxB","file":"has_factory.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__has_factory: has_factory
  };
}));

//# sourceMappingURL=has_factory.unsound.ddc.js.map
