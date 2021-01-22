define(['dart_sdk', 'packages/angular_components/laminate/portal/portal', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/src/laminate/overlay/overlay_ref'], (function load__packages__angular_components__src__laminate__components__modal__modal_controller_directive(dart_sdk, packages__angular_components__laminate__portal__portal, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__src__laminate__overlay__overlay_ref) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const portal = packages__angular_components__laminate__portal__portal.laminate__portal__portal;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const overlay_ref = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_ref;
  var modal_controller_directive = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/laminate/components/modal/modal_controller_directive.dart";
  modal_controller_directive.ModalControllerDirective = class ModalControllerDirective extends portal.TemplatePortal {
    ngOnDestroy() {
      if (dart.test(this.isAttached)) {
        this.detach();
      }
    }
    set overlay(overlayRef) {
      if (overlayRef == null) {
        if (dart.test(this.isAttached)) {
          this.detach();
        }
      } else {
        overlayRef.attach(this);
      }
    }
  };
  (modal_controller_directive.ModalControllerDirective.new = function(templateRef, viewContainerRef) {
    modal_controller_directive.ModalControllerDirective.__proto__.new.call(this, templateRef, viewContainerRef);
    ;
  }).prototype = modal_controller_directive.ModalControllerDirective.prototype;
  dart.addTypeTests(modal_controller_directive.ModalControllerDirective);
  dart.addTypeCaches(modal_controller_directive.ModalControllerDirective);
  modal_controller_directive.ModalControllerDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(modal_controller_directive.ModalControllerDirective, () => ({
    __proto__: dart.getMethods(modal_controller_directive.ModalControllerDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(modal_controller_directive.ModalControllerDirective, () => ({
    __proto__: dart.getSetters(modal_controller_directive.ModalControllerDirective.__proto__),
    overlay: dart.legacy(overlay_ref.OverlayRef)
  }));
  dart.setLibraryUri(modal_controller_directive.ModalControllerDirective, L0);
  dart.trackLibraries("packages/angular_components/src/laminate/components/modal/modal_controller_directive", {
    "package:angular_components/src/laminate/components/modal/modal_controller_directive.dart": modal_controller_directive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal_controller_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAmBI,oBAAI;AACM,QAAR;;IAEJ;gBAIuB;AACrB,UAAI,AAAW,UAAD,IAAI;AAChB,sBAAI;AACW,UAAb,AAAK;;;AAGgB,QAAvB,AAAW,UAAD,QAAQ;;IAEtB;;sEApBgB,aAA8B;AACxC,iFAAM,WAAW,EAAE,gBAAgB;;EAAC","file":"modal_controller_directive.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__components__modal__modal_controller_directive: modal_controller_directive
  };
}));

//# sourceMappingURL=modal_controller_directive.unsound.ddc.js.map
