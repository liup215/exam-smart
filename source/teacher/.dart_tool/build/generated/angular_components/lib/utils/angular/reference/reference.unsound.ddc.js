define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__utils__angular__reference__reference(dart_sdk, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  var reference = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/angular/reference/reference.dart";
  var elementRef$ = dart.privateName(reference, "ReferenceDirective.elementRef");
  reference.ReferenceDirective = class ReferenceDirective extends core.Object {
    get elementRef() {
      return this[elementRef$];
    }
    set elementRef(value) {
      super.elementRef = value;
    }
  };
  (reference.ReferenceDirective.new = function(elementRef) {
    this[elementRef$] = elementRef;
    ;
  }).prototype = reference.ReferenceDirective.prototype;
  dart.addTypeTests(reference.ReferenceDirective);
  dart.addTypeCaches(reference.ReferenceDirective);
  dart.setLibraryUri(reference.ReferenceDirective, L0);
  dart.setFieldSignature(reference.ReferenceDirective, () => ({
    __proto__: dart.getFields(reference.ReferenceDirective.__proto__),
    elementRef: dart.finalFieldType(dart.legacy(element_ref.ElementRef))
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/reference/reference", {
    "package:angular_components/utils/angular/reference/reference.dart": reference
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reference.dart"],"names":[],"mappings":";;;;;;;;;;;IAqBmB;;;;;;;;IAEO;;EAAW","file":"reference.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__reference__reference: reference
  };
}));

//# sourceMappingURL=reference.unsound.ddc.js.map
