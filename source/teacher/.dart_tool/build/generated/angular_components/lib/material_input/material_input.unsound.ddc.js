define(['dart_sdk', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_forms/src/directives'], (function load__packages__angular_components__material_input__material_input(dart_sdk, packages__angular_components__material_input__base_material_input, packages__angular_components__focus__focus_interface, packages__angular_components__utils__angular__reference__reference, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__material_input_multiline, packages__angular_forms__src__directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input_multiline = packages__angular_components__material_input__material_input_multiline.material_input__material_input_multiline;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  var material_input = Object.create(dart.library);
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var MaterialInputDefaultValueAccessorL = () => (MaterialInputDefaultValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)))();
  var MaterialInputBlurValueAccessorL = () => (MaterialInputBlurValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputBlurValueAccessor)))();
  var MaterialInputChangeValueAccessorL = () => (MaterialInputChangeValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputChangeValueAccessor)))();
  var MaterialMultilineInputComponentL = () => (MaterialMultilineInputComponentL = dart.constFn(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_input.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.wrapType(MaterialInputComponentL());
    },
    get C2() {
      return C2 = dart.wrapType(MaterialInputDefaultValueAccessorL());
    },
    get C3() {
      return C3 = dart.wrapType(MaterialInputBlurValueAccessorL());
    },
    get C4() {
      return C4 = dart.wrapType(MaterialInputChangeValueAccessorL());
    },
    get C5() {
      return C5 = dart.wrapType(MaterialMultilineInputComponentL());
    },
    get C6() {
      return C6 = dart.wrapType(NgModelL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], TypeL());
    }
  }, false);
  material_input.MaterialInputComponent = class MaterialInputComponent extends base_material_input.BaseSingleLineInputComponent {};
  (material_input.MaterialInputComponent.new = function(type, multiple, cd, changeDetector, validator) {
    material_input.MaterialInputComponent.__proto__.new.call(this, type, multiple, cd, changeDetector, validator);
    ;
  }).prototype = material_input.MaterialInputComponent.prototype;
  dart.addTypeTests(material_input.MaterialInputComponent);
  dart.addTypeCaches(material_input.MaterialInputComponent);
  material_input.MaterialInputComponent[dart.implements] = () => [focus_interface.Focusable, reference.ReferenceDirective, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setLibraryUri(material_input.MaterialInputComponent, L0);
  dart.defineLazy(material_input.MaterialInputComponent, {
    /*material_input.MaterialInputComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_input.MaterialInputComponent.hostTabIndex*/get hostTabIndex() {
      return -1;
    }
  }, true);
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C0;
  dart.defineLazy(material_input, {
    /*material_input.materialInputDirectives*/get materialInputDirectives() {
      return C0 || CT.C0;
    },
    /*material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return "material-input-error";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_input", {
    "package:angular_components/material_input/material_input.dart": material_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wDAoFgC,MACI,UACA,IACZ,gBACA;AAChB,mEAAM,IAAI,EAAE,QAAQ,EAAE,EAAE,EAAE,cAAc,EAAE,SAAS;;EAAC;;;;;;MAX7C,+CAAS;;;MAGT,kDAAY;;;;;;;;;;;;MA1DrB,sCAAuB;;;MAUhB,oCAAqB","file":"material_input.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_input: material_input
  };
}));

//# sourceMappingURL=material_input.unsound.ddc.js.map
