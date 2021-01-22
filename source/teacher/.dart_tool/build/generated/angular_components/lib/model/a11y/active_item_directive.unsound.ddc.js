define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy'], (function load__packages__angular_components__model__a11y__active_item_directive(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__components__modal__modal, packages__angular_components__src__laminate__popup__popup_hierarchy) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  var active_item_directive = Object.create(dart.library);
  var $scrollIntoView = dartx.scrollIntoView;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/a11y/active_item_directive.dart";
  var _active = dart.privateName(active_item_directive, "_active");
  var _initialized = dart.privateName(active_item_directive, "_initialized");
  var _visibilitySubscription = dart.privateName(active_item_directive, "_visibilitySubscription");
  var _hasHover = dart.privateName(active_item_directive, "_hasHover");
  var _element$ = dart.privateName(active_item_directive, "_element");
  var _domService$ = dart.privateName(active_item_directive, "_domService");
  var _modal$ = dart.privateName(active_item_directive, "_modal");
  var _popupRef$ = dart.privateName(active_item_directive, "_popupRef");
  var _scrollIntoViewIfNecessary = dart.privateName(active_item_directive, "_scrollIntoViewIfNecessary");
  var _shouldScrollIntoView = dart.privateName(active_item_directive, "_shouldScrollIntoView");
  var _scrollIntoView = dart.privateName(active_item_directive, "_scrollIntoView");
  active_item_directive.ActiveItemDirective = class ActiveItemDirective extends core.Object {
    get active() {
      return this[_active];
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_visibilitySubscription];
      t0 == null ? null : t0.cancel();
      this[_visibilitySubscription] = null;
    }
    ngAfterViewInit() {
      this[_initialized] = true;
      this[_scrollIntoViewIfNecessary]();
    }
    set itemActive(value) {
      if (dart.equals(value, this[_active])) return;
      this[_active] = value;
      this[_scrollIntoViewIfNecessary]();
    }
    get [_shouldScrollIntoView]() {
      return dart.test(this[_initialized]) && dart.test(this[_active]) && !dart.test(this[_hasHover]);
    }
    [_scrollIntoViewIfNecessary]() {
      let t0;
      t0 = this[_visibilitySubscription];
      t0 == null ? null : t0.cancel();
      if (dart.test(this[_shouldScrollIntoView])) {
        let isVisible = this[_popupRef$] != null ? this[_popupRef$].isVisible : this[_modal$] != null ? this[_modal$].visible : true;
        if (dart.test(isVisible)) {
          this[_scrollIntoView]();
        } else {
          let onVisibleChanged = this[_popupRef$] != null ? this[_popupRef$].onVisibleChanged : this[_modal$].onVisibleChanged;
          this[_visibilitySubscription] = onVisibleChanged.listen(dart.fn(isVisible => {
            let t0;
            if (dart.test(isVisible)) {
              t0 = this[_visibilitySubscription];
              t0 == null ? null : t0.cancel();
              if (dart.test(this[_shouldScrollIntoView])) {
                this[_scrollIntoView]();
              }
            }
          }, boolLToNull()));
        }
      }
    }
    [_scrollIntoView]() {
      this[_domService$].scheduleWrite(dart.fn(() => {
        try {
          let options = js_util.newObject();
          js_util.setProperty(options, "block", "nearest");
          js_util.setProperty(options, "inline", "nearest");
          js_util.callMethod(this[_element$], "scrollIntoView", JSArrayOfObjectL().of([options]));
        } catch (e) {
          let _ = dart.getThrown(e);
          this[_element$][$scrollIntoView]();
        }
      }, VoidToNull()));
    }
    onMouseEnter() {
      this[_hasHover] = true;
    }
    onMouseLeave() {
      this[_hasHover] = false;
    }
  };
  (active_item_directive.ActiveItemDirective.new = function(_element, _domService, _modal, _popupRef) {
    this[_active] = false;
    this[_initialized] = false;
    this[_visibilitySubscription] = null;
    this[_hasHover] = false;
    this[_element$] = _element;
    this[_domService$] = _domService;
    this[_modal$] = _modal;
    this[_popupRef$] = _popupRef;
    ;
  }).prototype = active_item_directive.ActiveItemDirective.prototype;
  dart.addTypeTests(active_item_directive.ActiveItemDirective);
  dart.addTypeCaches(active_item_directive.ActiveItemDirective);
  active_item_directive.ActiveItemDirective[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getMethods(active_item_directive.ActiveItemDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_scrollIntoViewIfNecessary]: dart.fnType(dart.void, []),
    [_scrollIntoView]: dart.fnType(dart.void, []),
    onMouseEnter: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getGetters(active_item_directive.ActiveItemDirective.__proto__),
    active: dart.legacy(core.bool),
    [_shouldScrollIntoView]: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getSetters(active_item_directive.ActiveItemDirective.__proto__),
    itemActive: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(active_item_directive.ActiveItemDirective, L0);
  dart.setFieldSignature(active_item_directive.ActiveItemDirective, () => ({
    __proto__: dart.getFields(active_item_directive.ActiveItemDirective.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_modal$]: dart.finalFieldType(dart.legacy(modal.Modal)),
    [_popupRef$]: dart.finalFieldType(dart.legacy(popup_ref.PopupRef)),
    [_active]: dart.fieldType(dart.legacy(core.bool)),
    [_initialized]: dart.fieldType(dart.legacy(core.bool)),
    [_visibilitySubscription]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_hasHover]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/model/a11y/active_item_directive", {
    "package:angular_components/model/a11y/active_item_directive.dart": active_item_directive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["active_item_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwCqB;IAAO;;;AAOS,WAAjC;0BAAyB;AACK,MAA9B,gCAA0B;IAC5B;;AAIqB,MAAnB,qBAAe;AACa,MAA5B;IACF;mBAIoB;AAClB,UAAU,YAAN,KAAK,EAAI,gBAAS;AACP,MAAf,gBAAU,KAAK;AACa,MAA5B;IACF;;AAEkC,YAAwB,WAAxB,iCAAgB,6BAAY;IAAS;;;AAGpC,WAAjC;0BAAyB;AAEzB,oBAAI;AACE,wBAAY,AAAU,oBAAG,OACvB,AAAU,6BACV,AAAO,iBAAG,OACN,AAAO,wBACP;AACV,sBAAI,SAAS;AACM,UAAjB;;AAEI,iCAAmB,AAAU,oBAAG,OAC9B,AAAU,oCACV,AAAO;AAQX,UAPF,gCAA0B,AAAiB,gBAAD,QAAQ,QAAC;;AACjD,0BAAI,SAAS;AACsB,mBAAjC;kCAAyB;AACzB,4BAAI;AACe,gBAAjB;;;;;;IAMZ;;AAYI,MATF,AAAY,iCAAc;AACxB;AACM,wBAAU;AACkC,UAAhD,oBAAoB,OAAO,EAAE,SAAS;AACW,UAAjD,oBAAoB,OAAO,EAAE,UAAU;AACkB,UAAzD,mBAAmB,iBAAU,kBAAkB,uBAAC,OAAO;;cAChD;AACkB,UAAzB,AAAS;;;IAGf;;AAOkB,MAAhB,kBAAY;IACd;;AAImB,MAAjB,kBAAY;IACd;;4DA5EyB,UAAe,aAA8B,QACjD;IAXhB,gBAAU;IAEV,qBAAe;IAED;IAwEd,kBAAY;IAlEQ;IAAe;IAA8B;IACjD;;EAAU","file":"active_item_directive.unsound.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item_directive: active_item_directive
  };
}));

//# sourceMappingURL=active_item_directive.unsound.ddc.js.map
