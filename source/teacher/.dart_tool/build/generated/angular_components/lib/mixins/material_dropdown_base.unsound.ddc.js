define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/src/laminate/popup/popup_hierarchy'], (function load__packages__angular_components__mixins__material_dropdown_base(dart_sdk, packages__angular_components__laminate__enums__alignment, packages__angular_components__content__deferred_content_aware, packages__angular_components__src__laminate__popup__popup_hierarchy) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  var material_dropdown_base = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/mixins/material_dropdown_base.dart";
  var autoDismiss = dart.privateName(material_dropdown_base, "DropdownHandle.autoDismiss");
  material_dropdown_base.DropdownHandle = class DropdownHandle extends core.Object {
    get autoDismiss() {
      return this[autoDismiss];
    }
    set autoDismiss(value) {
      this[autoDismiss] = value;
    }
  };
  (material_dropdown_base.DropdownHandle.new = function() {
    this[autoDismiss] = null;
    ;
  }).prototype = material_dropdown_base.DropdownHandle.prototype;
  dart.addTypeTests(material_dropdown_base.DropdownHandle);
  dart.addTypeCaches(material_dropdown_base.DropdownHandle);
  dart.setLibraryUri(material_dropdown_base.DropdownHandle, L0);
  dart.setFieldSignature(material_dropdown_base.DropdownHandle, () => ({
    __proto__: dart.getFields(material_dropdown_base.DropdownHandle.__proto__),
    autoDismiss: dart.fieldType(dart.legacy(core.bool))
  }));
  var _visibleStream = dart.privateName(material_dropdown_base, "_visibleStream");
  var _contentVisible = dart.privateName(material_dropdown_base, "_contentVisible");
  var _visible = dart.privateName(material_dropdown_base, "_visible");
  var enforceSpaceConstraints = dart.privateName(material_dropdown_base, "MaterialDropdownBase.enforceSpaceConstraints");
  var constrainToViewport = dart.privateName(material_dropdown_base, "MaterialDropdownBase.constrainToViewport");
  var popupMatchInputWidth = dart.privateName(material_dropdown_base, "MaterialDropdownBase.popupMatchInputWidth");
  var slide = dart.privateName(material_dropdown_base, "MaterialDropdownBase.slide");
  var autoDismiss$ = dart.privateName(material_dropdown_base, "MaterialDropdownBase.autoDismiss");
  var preferredPositions = dart.privateName(material_dropdown_base, "MaterialDropdownBase.preferredPositions");
  material_dropdown_base.MaterialDropdownBase = class MaterialDropdownBase extends core.Object {
    get enforceSpaceConstraints() {
      return this[enforceSpaceConstraints];
    }
    set enforceSpaceConstraints(value) {
      this[enforceSpaceConstraints] = value;
    }
    get constrainToViewport() {
      return this[constrainToViewport];
    }
    set constrainToViewport(value) {
      this[constrainToViewport] = value;
    }
    get popupMatchInputWidth() {
      return this[popupMatchInputWidth];
    }
    set popupMatchInputWidth(value) {
      this[popupMatchInputWidth] = value;
    }
    get slide() {
      return this[slide];
    }
    set slide(value) {
      this[slide] = value;
    }
    get autoDismiss() {
      return this[autoDismiss$];
    }
    set autoDismiss(value) {
      this[autoDismiss$] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get visibleStream() {
      return this[_visibleStream].stream;
    }
    get visible() {
      return this[_visible];
    }
    set visible(value) {
      let vis = value;
      if (dart.test(vis) && !dart.equals(this[_visible], vis)) {
        this[_contentVisible].add(true);
      }
      this[_visible] = vis;
    }
    onVisible(vis) {
      this[_visibleStream].add(vis);
      this.visible = vis;
      if (!dart.test(vis)) {
        this[_contentVisible].add(false);
      }
    }
    close() {
      this.visible = false;
    }
    open() {
      this.visible = true;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
    get contentVisible() {
      return this[_contentVisible].stream;
    }
    get isVisible() {
      return this.visible;
    }
    get onVisibleChanged() {
      return this.visibleStream;
    }
  };
  (material_dropdown_base.MaterialDropdownBase.new = function() {
    this[_visibleStream] = StreamControllerOfboolL().broadcast({sync: true});
    this[_contentVisible] = StreamControllerOfboolL().broadcast({sync: true});
    this[enforceSpaceConstraints] = false;
    this[constrainToViewport] = false;
    this[popupMatchInputWidth] = true;
    this[slide] = null;
    this[autoDismiss$] = true;
    this[_visible] = false;
    this[preferredPositions] = alignment.RelativePosition.InlinePositions;
    ;
  }).prototype = material_dropdown_base.MaterialDropdownBase.prototype;
  dart.addTypeTests(material_dropdown_base.MaterialDropdownBase);
  dart.addTypeCaches(material_dropdown_base.MaterialDropdownBase);
  material_dropdown_base.MaterialDropdownBase[dart.implements] = () => [material_dropdown_base.DropdownHandle, deferred_content_aware.DeferredContentAware, popup_ref.PopupRef];
  dart.setMethodSignature(material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getMethods(material_dropdown_base.MaterialDropdownBase.__proto__),
    onVisible: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getGetters(material_dropdown_base.MaterialDropdownBase.__proto__),
    visibleStream: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    visible: dart.legacy(core.bool),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    isVisible: dart.legacy(core.bool),
    onVisibleChanged: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setSetterSignature(material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getSetters(material_dropdown_base.MaterialDropdownBase.__proto__),
    visible: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_dropdown_base.MaterialDropdownBase, L0);
  dart.setFieldSignature(material_dropdown_base.MaterialDropdownBase, () => ({
    __proto__: dart.getFields(material_dropdown_base.MaterialDropdownBase.__proto__),
    [_visibleStream]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_contentVisible]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    enforceSpaceConstraints: dart.fieldType(dart.legacy(core.bool)),
    constrainToViewport: dart.fieldType(dart.legacy(core.bool)),
    popupMatchInputWidth: dart.fieldType(dart.legacy(core.bool)),
    slide: dart.fieldType(dart.legacy(core.String)),
    autoDismiss: dart.fieldType(dart.legacy(core.bool)),
    [_visible]: dart.fieldType(dart.legacy(core.bool)),
    preferredPositions: dart.fieldType(dart.legacy(core.List))
  }));
  dart.trackLibraries("packages/angular_components/mixins/material_dropdown_base", {
    "package:angular_components/mixins/material_dropdown_base.dart": material_dropdown_base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAmBO;;;;;;;;;;EACP;;;;;;;;;;;;;;;;;;IA2BO;;;;;;IAIA;;;;;;IAIA;;;;;;IAME;;;;;;IAGF;;;;;;IAmBS;;;;;;;AA1CoB,YAAA,AAAe;IAAM;;AA2BnC;IAAQ;gBAIX;AACV,gBAAM,KAAK;AAEhB,oBAAI,GAAG,kBAAI,gBAAY,GAAG;AACC,QAAzB,AAAgB,0BAAI;;AAER,MAAd,iBAAW,GAAG;IAChB;cAMoB;AACK,MAAvB,AAAe,yBAAI,GAAG;AACT,MAAb,eAAU,GAAG;AAGb,qBAAK,GAAG;AACoB,QAA1B,AAAgB,0BAAI;;IAExB;;AAGiB,MAAf,eAAU;IACZ;;AAGgB,MAAd,eAAU;IACZ;;AAGoB,MAAlB,eAAU,WAAC;IACb;;AAGmC,YAAA,AAAgB;IAAM;;AAGnC;IAAO;;AAGQ;IAAa;;;IAxE5C,uBAAiB,2CAAuC;IACxD,wBAAkB,2CAAuC;IAI1D,gCAA0B;IAI1B,4BAAsB;IAItB,6BAAuB;IAMrB;IAGF,qBAAc;IAEd,iBAAW;IAiBF,2BAAsC;;EAgCtD","file":"material_dropdown_base.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__material_dropdown_base: material_dropdown_base
  };
}));

//# sourceMappingURL=material_dropdown_base.unsound.ddc.js.map
