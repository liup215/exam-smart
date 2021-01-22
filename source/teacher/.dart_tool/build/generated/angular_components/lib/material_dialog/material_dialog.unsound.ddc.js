define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/application_tokens', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/laminate/components/modal/modal'], (function load__packages__angular_components__material_dialog__material_dialog(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__src__model__action__async_action, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__src__core__application_tokens, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__laminate__components__modal__modal) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const async_action = packages__angular_components__src__model__action__async_action.src__model__action__async_action;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  var material_dialog = Object.create(dart.library);
  var $onScroll = dartx.onScroll;
  var $scrollTop = dartx.scrollTop;
  var $scrollHeight = dartx.scrollHeight;
  var $_equals = dartx._equals;
  var $onResize = dartx.onResize;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNull = () => (EventLToNull = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var AsyncActionL = () => (AsyncActionL = dart.constFn(dart.legacy(async_action.AsyncAction)))();
  var AsyncActionLToNull = () => (AsyncActionLToNull = dart.constFn(dart.fnType(core.Null, [AsyncActionL()])))();
  var DisposableL = () => (DisposableL = dart.constFn(dart.legacy(disposer.Disposable)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_dialog/material_dialog.dart";
  var _disposer = dart.privateName(material_dialog, "_disposer");
  var _uid = dart.privateName(material_dialog, "_uid");
  var _mainElement = dart.privateName(material_dialog, "_mainElement");
  var _shouldShowHeader = dart.privateName(material_dialog, "_shouldShowHeader");
  var _shouldShowFooter = dart.privateName(material_dialog, "_shouldShowFooter");
  var _isInFullscreenModeStreamController = dart.privateName(material_dialog, "_isInFullscreenModeStreamController");
  var _isInFullscreenMode = dart.privateName(material_dialog, "_isInFullscreenMode");
  var _shouldListenForFullscreenChanges = dart.privateName(material_dialog, "_shouldListenForFullscreenChanges");
  var _rootElement$ = dart.privateName(material_dialog, "_rootElement");
  var _domService$ = dart.privateName(material_dialog, "_domService");
  var _changeDetector$ = dart.privateName(material_dialog, "_changeDetector");
  var _ngZone$ = dart.privateName(material_dialog, "_ngZone");
  var _modal$ = dart.privateName(material_dialog, "_modal");
  var _defaultEscapeHandler = dart.privateName(material_dialog, "_defaultEscapeHandler");
  var _setHeaderFooterScrollBorder = dart.privateName(material_dialog, "_setHeaderFooterScrollBorder");
  var _listenForFullscreenChanges = dart.privateName(material_dialog, "_listenForFullscreenChanges");
  var _updateForFullscreenChangesInsideDomReadLoop = dart.privateName(material_dialog, "_updateForFullscreenChangesInsideDomReadLoop");
  var shouldShowTopScrollStroke = dart.privateName(material_dialog, "MaterialDialogComponent.shouldShowTopScrollStroke");
  var shouldShowBottomScrollStroke = dart.privateName(material_dialog, "MaterialDialogComponent.shouldShowBottomScrollStroke");
  var escapeHandler = dart.privateName(material_dialog, "MaterialDialogComponent.escapeHandler");
  var error = dart.privateName(material_dialog, "MaterialDialogComponent.error");
  var shouldShowScrollStrokes = dart.privateName(material_dialog, "MaterialDialogComponent.shouldShowScrollStrokes");
  const Object_KeyboardHandlerMixin$36 = class Object_KeyboardHandlerMixin extends core.Object {};
  (Object_KeyboardHandlerMixin$36.new = function() {
    keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$36.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
  material_dialog.MaterialDialogComponent = class MaterialDialogComponent extends Object_KeyboardHandlerMixin$36 {
    get shouldShowTopScrollStroke() {
      return this[shouldShowTopScrollStroke];
    }
    set shouldShowTopScrollStroke(value) {
      this[shouldShowTopScrollStroke] = value;
    }
    get shouldShowBottomScrollStroke() {
      return this[shouldShowBottomScrollStroke];
    }
    set shouldShowBottomScrollStroke(value) {
      this[shouldShowBottomScrollStroke] = value;
    }
    get escapeHandler() {
      return this[escapeHandler];
    }
    set escapeHandler(value) {
      this[escapeHandler] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get shouldShowScrollStrokes() {
      return this[shouldShowScrollStrokes];
    }
    set shouldShowScrollStrokes(value) {
      this[shouldShowScrollStrokes] = value;
    }
    get headerId() {
      return dart.test(this.shouldShowHeader) ? this[_uid] : null;
    }
    set main(element) {
      this[_mainElement] = element;
      this[_disposer].addStreamSubscription(EventL(), element[$onScroll].listen(dart.fn(_ => {
        this[_setHeaderFooterScrollBorder]();
      }, EventLToNull())));
      if (this[_modal$] == null) return;
      this[_disposer].addStreamSubscription(AsyncActionL(), this[_modal$].onOpen.listen(dart.fn(_ => {
        this[_setHeaderFooterScrollBorder]();
      }, AsyncActionLToNull())));
    }
    set hideHeader(shouldHideHeader) {
      return this[_shouldShowHeader] = !dart.test(shouldHideHeader);
    }
    set hideFooter(shouldHideFooter) {
      return this[_shouldShowFooter] = !dart.test(shouldHideFooter);
    }
    get shouldShowHeader() {
      return this[_shouldShowHeader];
    }
    get shouldShowFooter() {
      return this[_shouldShowFooter];
    }
    [_setHeaderFooterScrollBorder]() {
      if (!dart.test(this.shouldShowScrollStrokes)) return;
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.fn(() => {
        let shouldShowTopScrollStroke = dart.notNull(this[_mainElement][$scrollTop]) > 0 && this.error == null;
        let shouldShowBottomScrollStroke = dart.notNull(this[_mainElement].clientHeight) < dart.notNull(this[_mainElement][$scrollHeight]) && dart.notNull(this[_mainElement][$scrollTop]) < dart.notNull(this[_mainElement][$scrollHeight]) - dart.notNull(this[_mainElement].clientHeight);
        if (!shouldShowTopScrollStroke[$_equals](this.shouldShowTopScrollStroke) || !shouldShowBottomScrollStroke[$_equals](this.shouldShowBottomScrollStroke)) {
          this.shouldShowTopScrollStroke = shouldShowTopScrollStroke;
          this.shouldShowBottomScrollStroke = shouldShowBottomScrollStroke;
          this[_ngZone$].runAfterChangesObserved(dart.fn(() => {
            this[_changeDetector$].markForCheck();
          }, VoidToNull()));
        }
      }, VoidToNull())));
    }
    set shouldListenForFullscreenChanges(shouldListenForFullscreenChanges) {
      if (!dart.test(shouldListenForFullscreenChanges)) return;
      if (dart.test(this[_shouldListenForFullscreenChanges])) return;
      this[_shouldListenForFullscreenChanges] = shouldListenForFullscreenChanges;
      this[_disposer].addStreamSubscription(EventL(), html.window[$onResize].listen(dart.fn(_ => {
        this[_listenForFullscreenChanges]();
      }, EventLToNull())));
    }
    get isInFullscreenMode() {
      return this[_isInFullscreenModeStreamController].stream;
    }
    [_listenForFullscreenChanges]() {
      if (!dart.test(this[_shouldListenForFullscreenChanges])) return;
      this[_disposer].addDisposable(DisposableL(), this[_domService$].scheduleRead(dart.bind(this, _updateForFullscreenChangesInsideDomReadLoop)));
    }
    [_updateForFullscreenChangesInsideDomReadLoop]() {
      let isInFullscreenMode = dart.notNull(html.document.body.clientWidth) <= dart.notNull(this[_rootElement$].clientWidth) && dart.notNull(html.document.body.clientHeight) <= dart.notNull(this[_rootElement$].clientHeight);
      if (!dart.equals(this[_isInFullscreenMode], isInFullscreenMode)) {
        this[_isInFullscreenMode] = isInFullscreenMode;
        this[_isInFullscreenModeStreamController].add(isInFullscreenMode);
      }
    }
    handleEscapeKey(event) {
      let t0;
      if (this.escapeHandler != null) {
        t0 = event;
        this.escapeHandler(t0);
      }
    }
    [_defaultEscapeHandler](event) {
      if (this[_modal$] != null) {
        event.preventDefault();
        this[_modal$].close();
      }
    }
    ngAfterContentChecked() {
      if (dart.test(this[_shouldListenForFullscreenChanges])) {
        this[_updateForFullscreenChangesInsideDomReadLoop]();
      }
      this[_setHeaderFooterScrollBorder]();
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_dialog.MaterialDialogComponent.new = function(_rootElement, _domService, _changeDetector, _ngZone, _modal) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_uid] = new id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_mainElement] = null;
    this[_shouldShowHeader] = true;
    this[_shouldShowFooter] = true;
    this[shouldShowTopScrollStroke] = false;
    this[shouldShowBottomScrollStroke] = false;
    this[_isInFullscreenModeStreamController] = StreamControllerOfboolL().new();
    this[_isInFullscreenMode] = null;
    this[_shouldListenForFullscreenChanges] = false;
    this[escapeHandler] = null;
    this[error] = null;
    this[shouldShowScrollStrokes] = true;
    this[_rootElement$] = _rootElement;
    this[_domService$] = _domService;
    this[_changeDetector$] = _changeDetector;
    this[_ngZone$] = _ngZone;
    this[_modal$] = _modal;
    material_dialog.MaterialDialogComponent.__proto__.new.call(this);
    this.escapeHandler = dart.bind(this, _defaultEscapeHandler);
  }).prototype = material_dialog.MaterialDialogComponent.prototype;
  dart.addTypeTests(material_dialog.MaterialDialogComponent);
  dart.addTypeCaches(material_dialog.MaterialDialogComponent);
  material_dialog.MaterialDialogComponent[dart.implements] = () => [lifecycle_hooks.AfterContentChecked, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getMethods(material_dialog.MaterialDialogComponent.__proto__),
    [_setHeaderFooterScrollBorder]: dart.fnType(dart.void, []),
    [_listenForFullscreenChanges]: dart.fnType(dart.void, []),
    [_updateForFullscreenChangesInsideDomReadLoop]: dart.fnType(dart.void, []),
    [_defaultEscapeHandler]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    ngAfterContentChecked: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getGetters(material_dialog.MaterialDialogComponent.__proto__),
    headerId: dart.legacy(core.String),
    shouldShowHeader: dart.legacy(core.bool),
    shouldShowFooter: dart.legacy(core.bool),
    isInFullscreenMode: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setSetterSignature(material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getSetters(material_dialog.MaterialDialogComponent.__proto__),
    main: dart.legacy(html.HtmlElement),
    hideHeader: dart.legacy(core.bool),
    hideFooter: dart.legacy(core.bool),
    shouldListenForFullscreenChanges: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_dialog.MaterialDialogComponent, L0);
  dart.setFieldSignature(material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getFields(material_dialog.MaterialDialogComponent.__proto__),
    [_rootElement$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_modal$]: dart.finalFieldType(dart.legacy(modal.ModalComponent)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_uid]: dart.finalFieldType(dart.legacy(core.String)),
    [_mainElement]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_shouldShowHeader]: dart.fieldType(dart.legacy(core.bool)),
    [_shouldShowFooter]: dart.fieldType(dart.legacy(core.bool)),
    shouldShowTopScrollStroke: dart.fieldType(dart.legacy(core.bool)),
    shouldShowBottomScrollStroke: dart.fieldType(dart.legacy(core.bool)),
    [_isInFullscreenModeStreamController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_isInFullscreenMode]: dart.fieldType(dart.legacy(core.bool)),
    [_shouldListenForFullscreenChanges]: dart.fieldType(dart.legacy(core.bool)),
    escapeHandler: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]))),
    error: dart.fieldType(dart.legacy(core.String)),
    shouldShowScrollStrokes: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_dialog.MaterialDialogComponent, {
    /*material_dialog.MaterialDialogComponent.hostRole*/get hostRole() {
      return "dialog";
    },
    /*material_dialog.MaterialDialogComponent.ariaModel*/get ariaModel() {
      return "true";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog", {
    "package:angular_components/material_dialog/material_dialog.dart": material_dialog
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyDO;;;;;;IACA;;;;;;IA+BgB;;;;;;IAId;;;;;;IAoBF;;;;;;;AArEkB,gDAAmB,aAAO;IAAI;aA+BhC;AACG,MAAtB,qBAAe,OAAO;AAGnB,MAFH,AAAU,gDAAsB,AAAQ,AAAS,OAAV,mBAAiB,QAAC;AACzB,QAA9B;;AAEF,UAAI,AAAO,iBAAG,MAAM;AAGjB,MAFH,AAAU,sDAAsB,AAAO,AAAO,4BAAO,QAAC;AACtB,QAA9B;;IAEJ;mBAaoB;AAChB,uCAAoB,WAAC,gBAAgB;;mBAIrB;AAChB,uCAAoB,WAAC,gBAAgB;;;AAEZ;IAAiB;;AAEjB;IAAiB;;AAS5C,qBAAK,+BAAyB;AAiB3B,MAhBH,AAAU,6CAAc,AAAY,gCAAa;AAC3C,wCACuB,AAAI,aAA3B,AAAa,kCAAY,KAAK,AAAM,cAAG;AACvC,2CAC0B,AAA4B,aAAtD,AAAa,gDAAe,AAAa,sCACd,aAAvB,AAAa,kCACiB,aAA1B,AAAa,kDAAe,AAAa;AACrD,aAAI,yBAAyB,WAAS,oCAClC,4BAA4B,WAAS;AACmB,UAArD,iCAA4B,yBAAyB;AACM,UAA3D,oCAA+B,4BAA4B;AAI9D,UAFF,AAAQ,uCAAwB;AACA,YAA9B,AAAgB;;;;IAIxB;yCAK0C;AAExC,qBAAK,gCAAgC,GAAE;AAIvC,oBAAI,0CAAmC;AAE6B,MAApE,0CAAoC,gCAAgC;AAGjE,MAFH,AAAU,gDAAsB,AAAO,AAAS,8BAAO,QAAC;AACzB,QAA7B;;IAEJ;;AAKI,YAAA,AAAoC;IAAM;;AAG5C,qBAAK,0CAAmC;AAEmC,MAD3E,AAAU,6CACN,AAAY,0CAAa;IAC/B;;AAGQ,+BACwB,AAA4B,aAAtD,AAAS,AAAK,gDAAe,AAAa,oCACX,aAA3B,AAAS,AAAK,iDAAgB,AAAa;AACnD,uBAAI,2BAAuB,kBAAkB;AACH,QAAxC,4BAAsB,kBAAkB;AACmB,QAA3D,AAAoC,8CAAI,kBAAkB;;IAE9D;oBAGmC;;AACjC,UAAI,sBAAiB;AACC,aAAN,KAAK;QAAnB,AAAa;;IAEjB;4BAEyC;AACvC,UAAI,iBAAU;AACU,QAAtB,AAAM,KAAD;AACS,QAAd,AAAO;;IAEX;;AAIE,oBAAI;AAC4C,QAA9C;;AAK4B,MAA9B;IACF;;AAIqB,MAAnB,AAAU;IACZ;;0DAzIO,cACA,aACA,iBACA,SACY;IAlBb,kBAAqB;IACrB,aAA6B,AAAW;IAElC;IACP,0BAAoB;IACpB,0BAAoB;IACpB,kCAA4B;IAC5B,qCAA+B;IAE9B,4CAAsC;IACvC;IACA,0CAAoC;IA2BpB;IAId;IAoBF,gCAA0B;IAhDxB;IACA;IACA;IACA;IACY;AALnB;AAOuC,IAArC,+BAAgB;EAClB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlCa,gDAAQ;;;MAGR,iDAAS","file":"material_dialog.unsound.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog: material_dialog
  };
}));

//# sourceMappingURL=material_dialog.unsound.ddc.js.map
