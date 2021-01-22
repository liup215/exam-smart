define(['dart_sdk', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy'], (function load__packages__angular_components__focus__focus(dart_sdk, packages__angular_components__focus__focus_interface, packages__angular_components__utils__disposer__disposer, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__components__modal__modal, packages__angular_components__src__laminate__popup__popup_hierarchy) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  var focus = Object.create(dart.library);
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus.dart";
  var L1 = "org-dartlang-app:///packages/angular_components/focus/focus.dart";
  var _root$ = dart.privateName(focus, "_root");
  focus.RootFocusable = class RootFocusable extends core.Object {
    focus() {
      if (this[_root$] == null) return;
      if (dart.notNull(this[_root$].tabIndex) < 0) {
        this[_root$].tabIndex = -1;
      }
      this[_root$].focus();
    }
    dispose() {
      this[_root$] = null;
    }
  };
  (focus.RootFocusable.new = function(_root) {
    this[_root$] = _root;
    ;
  }).prototype = focus.RootFocusable.prototype;
  dart.addTypeTests(focus.RootFocusable);
  dart.addTypeCaches(focus.RootFocusable);
  focus.RootFocusable[dart.implements] = () => [focus_interface.Focusable, disposer.Disposable];
  dart.setMethodSignature(focus.RootFocusable, () => ({
    __proto__: dart.getMethods(focus.RootFocusable.__proto__),
    focus: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(focus.RootFocusable, L0);
  dart.setFieldSignature(focus.RootFocusable, () => ({
    __proto__: dart.getFields(focus.RootFocusable.__proto__),
    [_root$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _resolvedFocusable = dart.privateName(focus, "_resolvedFocusable");
  focus.ProjectedFocus = class ProjectedFocus extends core.Object {
    focus() {
      if (this[_resolvedFocusable] != null) {
        this[_resolvedFocusable].focus();
        return;
      }
      this.focusDelegate.then(core.Null, dart.fn(delegate => {
        if (!(FocusableL().is(delegate) || ElementL().is(delegate))) dart.assertFailed(null, L1, 56, 14, "delegate is Focusable || delegate is Element");
        if (FocusableL().is(delegate)) {
          this[_resolvedFocusable] = delegate;
        } else {
          this[_resolvedFocusable] = new focus.RootFocusable.new(ElementL().as(delegate));
        }
        this[_resolvedFocusable].focus();
      }, dynamicToNull()));
    }
  };
  (focus.ProjectedFocus.new = function() {
    this[_resolvedFocusable] = null;
    ;
  }).prototype = focus.ProjectedFocus.prototype;
  dart.addTypeTests(focus.ProjectedFocus);
  dart.addTypeCaches(focus.ProjectedFocus);
  focus.ProjectedFocus[dart.implements] = () => [focus_interface.Focusable];
  dart.setMethodSignature(focus.ProjectedFocus, () => ({
    __proto__: dart.getMethods(focus.ProjectedFocus.__proto__),
    focus: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(focus.ProjectedFocus, L0);
  dart.setFieldSignature(focus.ProjectedFocus, () => ({
    __proto__: dart.getFields(focus.ProjectedFocus.__proto__),
    [_resolvedFocusable]: dart.fieldType(dart.legacy(focus_interface.Focusable))
  }));
  focus.FocusableItem = class FocusableItem extends core.Object {};
  (focus.FocusableItem.new = function() {
    ;
  }).prototype = focus.FocusableItem.prototype;
  dart.addTypeTests(focus.FocusableItem);
  dart.addTypeCaches(focus.FocusableItem);
  focus.FocusableItem[dart.implements] = () => [focus_interface.Focusable];
  dart.setLibraryUri(focus.FocusableItem, L0);
  var _preventDefaultDelegate$ = dart.privateName(focus, "_preventDefaultDelegate");
  var focusItem$ = dart.privateName(focus, "FocusMoveEvent.focusItem");
  var offset$ = dart.privateName(focus, "FocusMoveEvent.offset");
  var home = dart.privateName(focus, "FocusMoveEvent.home");
  var end = dart.privateName(focus, "FocusMoveEvent.end");
  var upDown = dart.privateName(focus, "FocusMoveEvent.upDown");
  focus.FocusMoveEvent = class FocusMoveEvent extends core.Object {
    get focusItem() {
      return this[focusItem$];
    }
    set focusItem(value) {
      super.focusItem = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get home() {
      return this[home];
    }
    set home(value) {
      super.home = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      super.end = value;
    }
    get upDown() {
      return this[upDown];
    }
    set upDown(value) {
      super.upDown = value;
    }
    preventDefault() {
      if (this[_preventDefaultDelegate$] != null) dart.dsend(this, _preventDefaultDelegate$, []);
    }
    static fromKeyboardEvent(item, kbEvent) {
      let keyCode = kbEvent.keyCode;
      let preventDefaultFn = dart.fn(() => {
        kbEvent.preventDefault();
      }, VoidToNull());
      if (dart.test(focus.FocusMoveEvent._isHomeKey(keyCode))) {
        return new focus.FocusMoveEvent.homeKey(item, preventDefaultFn);
      }
      if (dart.test(focus.FocusMoveEvent._isEndKey(keyCode))) {
        return new focus.FocusMoveEvent.endKey(item, preventDefaultFn);
      }
      if (!dart.test(focus.FocusMoveEvent._isNextKey(keyCode)) && !dart.test(focus.FocusMoveEvent._isPrevKey(keyCode))) return null;
      let offset = dart.test(focus.FocusMoveEvent._isNextKey(keyCode)) ? 1 : -1;
      if (keyCode === 38 || keyCode === 40) {
        return new focus.FocusMoveEvent.upDownKey(item, offset, preventDefaultFn);
      }
      return new focus.FocusMoveEvent.new(item, offset, preventDefaultFn);
    }
    static _isNextKey(keyCode) {
      return keyCode === 39 || keyCode === 40;
    }
    static _isPrevKey(keyCode) {
      return keyCode === 37 || keyCode === 38;
    }
    static _isHomeKey(keyCode) {
      return keyCode === 36;
    }
    static _isEndKey(keyCode) {
      return keyCode === 35;
    }
  };
  (focus.FocusMoveEvent.new = function(focusItem, offset, _preventDefaultDelegate = null) {
    this[focusItem$] = focusItem;
    this[offset$] = offset;
    this[_preventDefaultDelegate$] = _preventDefaultDelegate;
    this[home] = false;
    this[end] = false;
    this[upDown] = false;
    ;
  }).prototype = focus.FocusMoveEvent.prototype;
  (focus.FocusMoveEvent.homeKey = function(focusItem, _preventDefaultDelegate = null) {
    this[focusItem$] = focusItem;
    this[_preventDefaultDelegate$] = _preventDefaultDelegate;
    this[offset$] = 0;
    this[home] = true;
    this[end] = false;
    this[upDown] = false;
    ;
  }).prototype = focus.FocusMoveEvent.prototype;
  (focus.FocusMoveEvent.endKey = function(focusItem, _preventDefaultDelegate = null) {
    this[focusItem$] = focusItem;
    this[_preventDefaultDelegate$] = _preventDefaultDelegate;
    this[offset$] = 0;
    this[home] = false;
    this[end] = true;
    this[upDown] = false;
    ;
  }).prototype = focus.FocusMoveEvent.prototype;
  (focus.FocusMoveEvent.upDownKey = function(focusItem, offset, _preventDefaultDelegate = null) {
    this[focusItem$] = focusItem;
    this[offset$] = offset;
    this[_preventDefaultDelegate$] = _preventDefaultDelegate;
    this[home] = false;
    this[end] = false;
    this[upDown] = true;
    ;
  }).prototype = focus.FocusMoveEvent.prototype;
  dart.addTypeTests(focus.FocusMoveEvent);
  dart.addTypeCaches(focus.FocusMoveEvent);
  dart.setMethodSignature(focus.FocusMoveEvent, () => ({
    __proto__: dart.getMethods(focus.FocusMoveEvent.__proto__),
    preventDefault: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(focus.FocusMoveEvent, L0);
  dart.setFieldSignature(focus.FocusMoveEvent, () => ({
    __proto__: dart.getFields(focus.FocusMoveEvent.__proto__),
    focusItem: dart.finalFieldType(dart.legacy(focus.FocusableItem)),
    offset: dart.finalFieldType(dart.legacy(core.int)),
    home: dart.finalFieldType(dart.legacy(core.bool)),
    end: dart.finalFieldType(dart.legacy(core.bool)),
    upDown: dart.finalFieldType(dart.legacy(core.bool)),
    [_preventDefaultDelegate$]: dart.finalFieldType(dart.legacy(core.Function))
  }));
  var _disposer = dart.privateName(focus, "_disposer");
  var _autoFocus = dart.privateName(focus, "_autoFocus");
  var _domService$ = dart.privateName(focus, "_domService");
  var _focusable$ = dart.privateName(focus, "_focusable");
  var _modal$ = dart.privateName(focus, "_modal");
  var _popupRef$ = dart.privateName(focus, "_popupRef");
  var _onModalOrPopupVisibleChanged = dart.privateName(focus, "_onModalOrPopupVisibleChanged");
  focus.AutoFocusDirective = class AutoFocusDirective extends focus.RootFocusable {
    ngOnInit() {
      if (!dart.test(this[_autoFocus])) return;
      if (this[_modal$] != null || this[_popupRef$] != null) {
        let isVisible = this[_popupRef$] != null ? this[_popupRef$].isVisible : this[_modal$].resolvedOverlayRef.isVisible;
        this[_onModalOrPopupVisibleChanged](isVisible);
        let onVisibleChanged = this[_popupRef$] != null ? this[_popupRef$].onVisibleChanged : this[_modal$].resolvedOverlayRef.onVisibleChanged;
        this[_disposer].addStreamSubscription(boolL(), onVisibleChanged.listen(dart.bind(this, _onModalOrPopupVisibleChanged)));
      } else {
        this[_domService$].scheduleWrite(dart.bind(this, 'focus'));
      }
    }
    set autoFocus(value) {
      this[_autoFocus] = value;
    }
    focus() {
      if (!dart.test(this[_autoFocus])) return;
      if (this[_focusable$] != null) {
        this[_focusable$].focus();
      } else {
        super.focus();
      }
    }
    ngOnDestroy() {
      super.dispose();
      this[_disposer].dispose();
      this[_focusable$] = null;
      this[_domService$] = null;
      this[_modal$] = null;
      this[_popupRef$] = null;
    }
    [_onModalOrPopupVisibleChanged](isVisible) {
      if (dart.test(isVisible)) this[_domService$].scheduleWrite(dart.bind(this, 'focus'));
    }
  };
  (focus.AutoFocusDirective.new = function(node, _domService, _focusable, _modal, _popupRef) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_autoFocus] = null;
    this[_domService$] = _domService;
    this[_focusable$] = _focusable;
    this[_modal$] = _modal;
    this[_popupRef$] = _popupRef;
    focus.AutoFocusDirective.__proto__.new.call(this, node);
    ;
  }).prototype = focus.AutoFocusDirective.prototype;
  dart.addTypeTests(focus.AutoFocusDirective);
  dart.addTypeCaches(focus.AutoFocusDirective);
  focus.AutoFocusDirective[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus.AutoFocusDirective, () => ({
    __proto__: dart.getMethods(focus.AutoFocusDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onModalOrPopupVisibleChanged]: dart.fnType(dart.void, [dart.legacy(core.bool)])
  }));
  dart.setSetterSignature(focus.AutoFocusDirective, () => ({
    __proto__: dart.getSetters(focus.AutoFocusDirective.__proto__),
    autoFocus: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(focus.AutoFocusDirective, L0);
  dart.setFieldSignature(focus.AutoFocusDirective, () => ({
    __proto__: dart.getFields(focus.AutoFocusDirective.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_autoFocus]: dart.fieldType(dart.legacy(core.bool)),
    [_focusable$]: dart.fieldType(dart.legacy(focus_interface.Focusable)),
    [_domService$]: dart.fieldType(dart.legacy(dom_service.DomService)),
    [_modal$]: dart.fieldType(dart.legacy(modal.ModalComponent)),
    [_popupRef$]: dart.fieldType(dart.legacy(popup_ref.PopupRef))
  }));
  focus.FocusableDirective = class FocusableDirective extends focus.RootFocusable {};
  (focus.FocusableDirective.new = function(node) {
    focus.FocusableDirective.__proto__.new.call(this, node);
    ;
  }).prototype = focus.FocusableDirective.prototype;
  dart.addTypeTests(focus.FocusableDirective);
  dart.addTypeCaches(focus.FocusableDirective);
  dart.setLibraryUri(focus.FocusableDirective, L0);
  dart.trackLibraries("packages/angular_components/focus/focus", {
    "package:angular_components/focus/focus.dart": focus
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus.dart"],"names":[],"mappings":"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","file":"focus.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus: focus
  };
}));

//# sourceMappingURL=focus.unsound.ddc.js.map
