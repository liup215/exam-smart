define(['dart_sdk', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__laminate__components__modal__modal(dart_sdk, packages__angular_components__src__model__action__async_action, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__content__deferred_content_aware, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const async_action = packages__angular_components__src__model__action__async_action.src__model__action__async_action;
  const async_action_controller = packages__angular_components__src__model__action__async_action.src__model__action__async_action_controller;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const overlay_state = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_state;
  const overlay_ref = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_ref;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var modal = Object.create(dart.library);
  var $length = dartx.length;
  var $last = dartx.last;
  var $removeLast = dartx.removeLast;
  var $isNotEmpty = dartx.isNotEmpty;
  var $remove = dartx.remove;
  var $add = dartx.add;
  var $reversed = dartx.reversed;
  var $toList = dartx.toList;
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var JSArrayOfModalL = () => (JSArrayOfModalL = dart.constFn(_interceptors.JSArray$(ModalL())))();
  var AsyncActionL = () => (AsyncActionL = dart.constFn(dart.legacy(async_action.AsyncAction)))();
  var StreamControllerOfAsyncActionL = () => (StreamControllerOfAsyncActionL = dart.constFn(async.StreamController$(AsyncActionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var OverlayRefL = () => (OverlayRefL = dart.constFn(dart.legacy(overlay_ref.OverlayRef)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToboolL = () => (MouseEventLToboolL = dart.constFn(dart.fnType(boolL(), [MouseEventL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FutureOrOfboolL = () => (FutureOrOfboolL = dart.constFn(async.FutureOr$(boolL())))();
  var FutureOrLOfboolL = () => (FutureOrLOfboolL = dart.constFn(dart.legacy(FutureOrOfboolL())))();
  var dynamicToFutureOrLOfboolL = () => (dynamicToFutureOrLOfboolL = dart.constFn(dart.fnType(FutureOrLOfboolL(), [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/laminate/components/modal/modal.dart";
  var L1 = "package:angular_components/laminate/components/modal/modal.dart";
  var _stack$ = dart.privateName(modal, "_stack");
  modal.GlobalModalStack = class GlobalModalStack extends core.Object {
    get length() {
      return this[_stack$][$length];
    }
    onModalClosed(modal) {
      if (!dart.equals(this[_stack$][$last], modal)) dart.assertFailed(null, L0, 33, 12, "_stack.last == modal");
      if (dart.equals(this[_stack$][$last], modal)) {
        this[_stack$][$removeLast]();
        if (dart.test(this[_stack$][$isNotEmpty])) {
          this[_stack$][$last].hidden = false;
        }
      } else {
        this[_stack$][$remove](modal);
      }
    }
    onModalOpened(modal) {
      if (dart.test(this[_stack$][$isNotEmpty])) {
        this[_stack$][$last].hidden = true;
      }
      this[_stack$][$add](modal);
    }
    closeAll() {
      return async.async(dart.void, (function* closeAll() {
        for (let modal of this[_stack$][$reversed][$toList]()) {
          yield modal.close();
        }
      }).bind(this));
    }
  };
  (modal.GlobalModalStack.new = function() {
    this[_stack$] = JSArrayOfModalL().of([]);
    ;
  }).prototype = modal.GlobalModalStack.prototype;
  dart.addTypeTests(modal.GlobalModalStack);
  dart.addTypeCaches(modal.GlobalModalStack);
  dart.setMethodSignature(modal.GlobalModalStack, () => ({
    __proto__: dart.getMethods(modal.GlobalModalStack.__proto__),
    onModalClosed: dart.fnType(dart.void, [dart.legacy(modal.Modal)]),
    onModalOpened: dart.fnType(dart.void, [dart.legacy(modal.Modal)]),
    closeAll: dart.fnType(dart.legacy(async.Future$(dart.void)), [])
  }));
  dart.setGetterSignature(modal.GlobalModalStack, () => ({
    __proto__: dart.getGetters(modal.GlobalModalStack.__proto__),
    length: dart.legacy(core.int)
  }));
  dart.setLibraryUri(modal.GlobalModalStack, L1);
  dart.setFieldSignature(modal.GlobalModalStack, () => ({
    __proto__: dart.getFields(modal.GlobalModalStack.__proto__),
    [_stack$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(modal.Modal))))
  }));
  modal.Modal = class Modal extends core.Object {};
  (modal.Modal.new = function() {
    ;
  }).prototype = modal.Modal.prototype;
  dart.addTypeTests(modal.Modal);
  dart.addTypeCaches(modal.Modal);
  dart.setLibraryUri(modal.Modal, L1);
  var _onOpen = dart.privateName(modal, "_onOpen");
  var _onClose = dart.privateName(modal, "_onClose");
  var _onVisibleChanged = dart.privateName(modal, "_onVisibleChanged");
  var _disposer = dart.privateName(modal, "_disposer");
  var _isDestroyed = dart.privateName(modal, "_isDestroyed");
  var _isHidden = dart.privateName(modal, "_isHidden");
  var _isVisible = dart.privateName(modal, "_isVisible");
  var _lastFocusedElement = dart.privateName(modal, "_lastFocusedElement");
  var _pendingOpen = dart.privateName(modal, "_pendingOpen");
  var _pendingClose = dart.privateName(modal, "_pendingClose");
  var _element$ = dart.privateName(modal, "_element");
  var _domService$ = dart.privateName(modal, "_domService");
  var _parentModal$ = dart.privateName(modal, "_parentModal");
  var _resolvedOverlayRef = dart.privateName(modal, "_resolvedOverlayRef");
  var _onOverlayVisibleChanged = dart.privateName(modal, "_onOverlayVisibleChanged");
  var _hideModalOverlay = dart.privateName(modal, "_hideModalOverlay");
  var _saveFocus = dart.privateName(modal, "_saveFocus");
  var _showModalOverlay = dart.privateName(modal, "_showModalOverlay");
  var _restoreFocus = dart.privateName(modal, "_restoreFocus");
  var restoreFocus = dart.privateName(modal, "ModalComponent.restoreFocus");
  modal.ModalComponent = class ModalComponent extends core.Object {
    get restoreFocus() {
      return this[restoreFocus];
    }
    set restoreFocus(value) {
      this[restoreFocus] = value;
    }
    get onOpen() {
      return this[_onOpen].stream;
    }
    get onClose() {
      return this[_onClose].stream;
    }
    get onVisibleChanged() {
      return this[_onVisibleChanged].stream;
    }
    set preventInteraction(preventInteraction) {
      this[_resolvedOverlayRef].state.captureEvents = !dart.equals(preventInteraction, false);
    }
    ngAfterViewInit() {
      let t0;
      let hostClassName = this[_element$].className;
      t0 = this.resolvedOverlayRef.overlayElement;
      t0.className = dart.notNull(t0.className) + (" " + dart.str(hostClassName));
    }
    ngOnDestroy() {
      if (dart.test(this.visible)) {
        this[_hideModalOverlay]();
      }
      this[_isDestroyed] = true;
      this[_disposer].dispose();
    }
    [_onOverlayVisibleChanged](isVisible) {
      this[_isVisible] = isVisible;
      this[_onVisibleChanged].add(this[_isVisible]);
    }
    get shieldClick() {
      return this[_resolvedOverlayRef].onPanePressed.where(dart.fn(e => e.eventPhase === 2, MouseEventLToboolL()));
    }
    get contentVisible() {
      return this.onVisibleChanged;
    }
    get resolvedOverlayRef() {
      return this[_resolvedOverlayRef];
    }
    get uniquePaneId() {
      let t0;
      t0 = this[_resolvedOverlayRef];
      return t0 == null ? null : t0.uniqueId;
    }
    [_showModalOverlay](opts) {
      let temporary = opts && 'temporary' in opts ? opts.temporary : false;
      if (!dart.test(temporary)) {
        this[_saveFocus]();
        if (this[_stack$] != null) {
          this[_stack$].onModalOpened(this);
        } else if (this[_parentModal$] != null) {
          this[_parentModal$].hidden = true;
        }
      }
      this[_resolvedOverlayRef].setVisible(true);
    }
    [_hideModalOverlay](opts) {
      let temporary = opts && 'temporary' in opts ? opts.temporary : false;
      if (!dart.test(temporary)) {
        this[_restoreFocus]();
        if (this[_stack$] != null) {
          this[_stack$].onModalClosed(this);
        } else if (this[_parentModal$] != null) {
          this[_parentModal$].hidden = false;
        }
      }
      this[_resolvedOverlayRef].setVisible(false);
    }
    [_saveFocus]() {
      this[_lastFocusedElement] = dart.test(this.restoreFocus) ? html.document.activeElement : null;
    }
    [_restoreFocus]() {
      if (this[_lastFocusedElement] == null) return;
      if (this[_stack$] != null && dart.notNull(this[_stack$].length) > 1 || this[_parentModal$] != null) return;
      let elementToFocus = this[_lastFocusedElement];
      this[_domService$].scheduleWrite(dart.fn(() => {
        if (html.document.activeElement != null && (dart.test(this[_resolvedOverlayRef].overlayElement.contains(html.document.activeElement)) || dart.equals(html.document.activeElement, html.document.body))) {
          elementToFocus.focus();
        }
      }, VoidToNull()));
    }
    open() {
      if (this[_pendingOpen] == null) {
        let controller = new async_action_controller.AsyncActionController.new();
        controller.execute(dart.bind(this, _showModalOverlay));
        this[_pendingOpen] = controller.action.onDone.then(boolL(), dart.fn(completed => {
          this[_pendingOpen] = null;
          return FutureOrLOfboolL().as(completed);
        }, dynamicToFutureOrLOfboolL()));
        this[_onOpen].add(controller.action);
      }
      return this[_pendingOpen];
    }
    close() {
      if (this[_pendingClose] == null) {
        let controller = new async_action_controller.AsyncActionController.new();
        controller.execute(dart.bind(this, _hideModalOverlay));
        this[_pendingClose] = controller.action.onDone.then(boolL(), dart.fn(completed => {
          this[_pendingClose] = null;
          return FutureOrLOfboolL().as(completed);
        }, dynamicToFutureOrLOfboolL()));
        this[_onClose].add(controller.action);
      }
      return this[_pendingClose];
    }
    get visible() {
      return this[_isVisible];
    }
    set visible(visible) {
      if (dart.equals(this[_isVisible], visible) || dart.test(this[_isDestroyed])) return;
      if (dart.equals(visible, true)) {
        this.open();
      } else {
        this.close();
      }
    }
    get hidden() {
      return this[_isHidden];
    }
    set hidden(hidden) {
      this[_isHidden] = hidden;
      if (dart.test(this[_isHidden])) {
        this[_hideModalOverlay]({temporary: true});
      } else {
        this[_showModalOverlay]({temporary: true});
      }
    }
  };
  (modal.ModalComponent.new = function(overlayService, _element, _domService, _parentModal, _stack) {
    let t0;
    this[_onOpen] = StreamControllerOfAsyncActionL().broadcast({sync: true});
    this[_onClose] = StreamControllerOfAsyncActionL().broadcast({sync: true});
    this[_onVisibleChanged] = StreamControllerOfboolL().broadcast({sync: true});
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_isDestroyed] = false;
    this[_isHidden] = false;
    this[_isVisible] = false;
    this[_lastFocusedElement] = null;
    this[restoreFocus] = true;
    this[_pendingOpen] = null;
    this[_pendingClose] = null;
    this[_element$] = _element;
    this[_domService$] = _domService;
    this[_parentModal$] = _parentModal;
    this[_stack$] = _stack;
    this[_resolvedOverlayRef] = overlayService.createOverlayRefSync(overlay_state.OverlayState.Dialog);
    t0 = this[_disposer];
    (() => {
      t0.addDisposable(OverlayRefL(), this[_resolvedOverlayRef]);
      t0.addStreamSubscription(boolL(), this[_resolvedOverlayRef].onVisibleChanged.listen(dart.bind(this, _onOverlayVisibleChanged)));
      return t0;
    })();
  }).prototype = modal.ModalComponent.prototype;
  dart.addTypeTests(modal.ModalComponent);
  dart.addTypeCaches(modal.ModalComponent);
  modal.ModalComponent[dart.implements] = () => [deferred_content_aware.DeferredContentAware, modal.Modal, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(modal.ModalComponent, () => ({
    __proto__: dart.getMethods(modal.ModalComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onOverlayVisibleChanged]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_showModalOverlay]: dart.fnType(dart.void, [], {temporary: dart.legacy(core.bool)}, {}),
    [_hideModalOverlay]: dart.fnType(dart.void, [], {temporary: dart.legacy(core.bool)}, {}),
    [_saveFocus]: dart.fnType(dart.void, []),
    [_restoreFocus]: dart.fnType(dart.void, []),
    open: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    close: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [])
  }));
  dart.setGetterSignature(modal.ModalComponent, () => ({
    __proto__: dart.getGetters(modal.ModalComponent.__proto__),
    onOpen: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction))),
    onClose: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction))),
    onVisibleChanged: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    shieldClick: dart.legacy(async.Stream$(dart.void)),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    resolvedOverlayRef: dart.legacy(overlay_ref.OverlayRef),
    uniquePaneId: dart.legacy(core.String),
    visible: dart.legacy(core.bool),
    hidden: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(modal.ModalComponent, () => ({
    __proto__: dart.getSetters(modal.ModalComponent.__proto__),
    preventInteraction: dart.legacy(core.bool),
    visible: dart.legacy(core.bool),
    hidden: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(modal.ModalComponent, L1);
  dart.setFieldSignature(modal.ModalComponent, () => ({
    __proto__: dart.getFields(modal.ModalComponent.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_parentModal$]: dart.finalFieldType(dart.legacy(modal.Modal)),
    [_stack$]: dart.finalFieldType(dart.legacy(modal.GlobalModalStack)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_onOpen]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction)))),
    [_onClose]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction)))),
    [_onVisibleChanged]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_isDestroyed]: dart.fieldType(dart.legacy(core.bool)),
    [_isHidden]: dart.fieldType(dart.legacy(core.bool)),
    [_isVisible]: dart.fieldType(dart.legacy(core.bool)),
    [_resolvedOverlayRef]: dart.finalFieldType(dart.legacy(overlay_ref.OverlayRef)),
    [_lastFocusedElement]: dart.fieldType(dart.legacy(html.Element)),
    restoreFocus: dart.fieldType(dart.legacy(core.bool)),
    [_pendingOpen]: dart.fieldType(dart.legacy(async.Future$(dart.legacy(core.bool)))),
    [_pendingClose]: dart.fieldType(dart.legacy(async.Future$(dart.legacy(core.bool))))
  }));
  dart.trackLibraries("packages/angular_components/laminate/components/modal/modal", {
    "package:angular_components/laminate/components/modal/modal.dart": modal
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.dart"],"names":[],"mappings":"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","file":"modal.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__components__modal__modal: modal
  };
}));

//# sourceMappingURL=modal.unsound.ddc.js.map
