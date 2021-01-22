define(['dart_sdk', 'packages/angular_components/laminate/enums/visibility', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/logging/logging', 'packages/angular_components/laminate/portal/portal', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/position', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/quiver/core'], (function load__packages__angular_components__src__laminate__overlay__overlay_ref(dart_sdk, packages__angular_components__laminate__enums__visibility, packages__angular__src__core__change_detection__pipe_transform, packages__logging__logging, packages__angular_components__laminate__portal__portal, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__angular__imperative_view__imperative_view, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__position, packages__angular_components__src__utils__async__async_update_scheduler, packages__quiver__core) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const visibility = packages__angular_components__laminate__enums__visibility.laminate__enums__visibility;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const logger = packages__logging__logging.src__logger;
  const portal = packages__angular_components__laminate__portal__portal.laminate__portal__portal;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const imperative_view = packages__angular_components__utils__angular__imperative_view__imperative_view.utils__angular__imperative_view__imperative_view;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const position = packages__angular_components__laminate__enums__position.laminate__enums__position;
  const async_update_scheduler = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__async_update_scheduler;
  const hash = packages__quiver__core.src__core__hash;
  var overlay_service = Object.create(dart.library);
  var overlay_dom_render_service = Object.create(dart.library);
  var overlay_style_config = Object.create(dart.library);
  var overlay_state = Object.create(dart.library);
  var overlay_ref = Object.create(dart.library);
  var $attributes = dartx.attributes;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $minWidth = dartx.minWidth;
  var $zIndex = dartx.zIndex;
  var $parent = dartx.parent;
  var $classes = dartx.classes;
  var $append = dartx.append;
  var $text = dartx.text;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $onMouseDown = dartx.onMouseDown;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $width = dartx.width;
  var $height = dartx.height;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var OverlayRefL = () => (OverlayRefL = dart.constFn(dart.legacy(overlay_ref.OverlayRef)))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var RectangleOfnumL = () => (RectangleOfnumL = dart.constFn(math.Rectangle$(numL())))();
  var RectangleLOfnumL = () => (RectangleLOfnumL = dart.constFn(dart.legacy(RectangleOfnumL())))();
  var StreamOfRectangleLOfnumL = () => (StreamOfRectangleLOfnumL = dart.constFn(async.Stream$(RectangleLOfnumL())))();
  var JSArrayOfRectangleLOfnumL = () => (JSArrayOfRectangleLOfnumL = dart.constFn(_interceptors.JSArray$(RectangleLOfnumL())))();
  var voidToRectangleLOfnumL = () => (voidToRectangleLOfnumL = dart.constFn(dart.fnType(RectangleLOfnumL(), [dart.void])))();
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  var FutureOfRectangleLOfnum = () => (FutureOfRectangleLOfnum = dart.constFn(async.Future$(RectangleLOfnum())))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var voidToHtmlElementL = () => (voidToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [dart.void])))();
  var FutureOfHtmlElementL = () => (FutureOfHtmlElementL = dart.constFn(async.Future$(HtmlElementL())))();
  var HeadElementL = () => (HeadElementL = dart.constFn(dart.legacy(html.HeadElement)))();
  var OverlayStateL = () => (OverlayStateL = dart.constFn(dart.legacy(overlay_state.OverlayState)))();
  var _EmptyStreamOfNull = () => (_EmptyStreamOfNull = dart.constFn(async._EmptyStream$(core.Null)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MutableOverlayStateL = () => (MutableOverlayStateL = dart.constFn(dart.legacy(overlay_state.MutableOverlayState)))();
  var FutureOfObjectL = () => (FutureOfObjectL = dart.constFn(async.Future$(ObjectL())))();
  var FutureLOfObjectL = () => (FutureLOfObjectL = dart.constFn(dart.legacy(FutureOfObjectL())))();
  var ObjectLToFutureLOfObjectL = () => (ObjectLToFutureLOfObjectL = dart.constFn(dart.fnType(FutureLOfObjectL(), [ObjectL()])))();
  var RectangleLOfnumAndRectangleLOfnumToboolL = () => (RectangleLOfnumAndRectangleLOfnumToboolL = dart.constFn(dart.fnType(boolL(), [RectangleLOfnum(), RectangleLOfnum()])))();
  var StreamLOfRectangleLOfnumL = () => (StreamLOfRectangleLOfnumL = dart.constFn(dart.legacy(StreamOfRectangleLOfnumL())))();
  var VoidToStreamLOfRectangleLOfnumL = () => (VoidToStreamLOfRectangleLOfnumL = dart.constFn(dart.fnType(StreamLOfRectangleLOfnumL(), [])))();
  var StreamOfRectangleLOfnum = () => (StreamOfRectangleLOfnum = dart.constFn(async.Stream$(RectangleLOfnum())))();
  var StreamLOfRectangleLOfnum = () => (StreamLOfRectangleLOfnum = dart.constFn(dart.legacy(StreamOfRectangleLOfnum())))();
  var _AsyncStarImplOfRectangleLOfnum = () => (_AsyncStarImplOfRectangleLOfnum = dart.constFn(async._AsyncStarImpl$(RectangleLOfnum())))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  const CT = Object.create(null);
  var L2 = "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart";
  var L4 = "package:angular_components/src/laminate/overlay/overlay_state.dart";
  var L1 = "package:angular_components/src/laminate/overlay/overlay_service.dart";
  var L3 = "package:angular_components/src/laminate/overlay/render/overlay_style_config.dart";
  var L5 = "package:angular_components/src/laminate/overlay/overlay_ref.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/src/laminate/overlay/overlay_service.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [Visibility__propertyValue]: "none",
        [Visibility__propertyName]: "display",
        [Visibility_displayName]: "None"
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: overlay_state._ImmutableOverlayState.prototype,
        [_ImmutableOverlayState_position]: null,
        [_ImmutableOverlayState_zIndex]: null,
        [_ImmutableOverlayState_visibility]: C1 || CT.C1,
        [_ImmutableOverlayState_height]: null,
        [_ImmutableOverlayState_minWidth]: null,
        [_ImmutableOverlayState_width]: null,
        [_ImmutableOverlayState_bottom]: null,
        [_ImmutableOverlayState_right]: null,
        [_ImmutableOverlayState_top]: null,
        [_ImmutableOverlayState_left]: null,
        [_ImmutableOverlayState_captureEvents]: false
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerName"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainer"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayContainerParent"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlaySyncDom"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: overlay_state._ImmutableOverlayState.prototype,
        [_ImmutableOverlayState_position]: null,
        [_ImmutableOverlayState_zIndex]: null,
        [_ImmutableOverlayState_visibility]: C1 || CT.C1,
        [_ImmutableOverlayState_height]: null,
        [_ImmutableOverlayState_minWidth]: null,
        [_ImmutableOverlayState_width]: null,
        [_ImmutableOverlayState_bottom]: 0,
        [_ImmutableOverlayState_right]: 0,
        [_ImmutableOverlayState_top]: 0,
        [_ImmutableOverlayState_left]: 0,
        [_ImmutableOverlayState_captureEvents]: true
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: _EmptyStreamOfNull().prototype
      });
    },
    get C10() {
      return C10 = dart.fn(overlay_ref.OverlayRef._isEqualSize, RectangleLOfnumAndRectangleLOfnumToboolL());
    }
  }, false);
  var _ngZone$ = dart.privateName(overlay_service, "_ngZone");
  var _useDomSynchronously$ = dart.privateName(overlay_service, "_useDomSynchronously");
  var _renderService$ = dart.privateName(overlay_service, "_renderService");
  var _ImmutableOverlayState_position = dart.privateName(overlay_state, "_ImmutableOverlayState.position");
  var _ImmutableOverlayState_zIndex = dart.privateName(overlay_state, "_ImmutableOverlayState.zIndex");
  var Visibility__propertyValue = dart.privateName(visibility, "Visibility._propertyValue");
  var Visibility__propertyName = dart.privateName(visibility, "Visibility._propertyName");
  var Visibility_displayName = dart.privateName(visibility, "Visibility.displayName");
  var C1;
  var _ImmutableOverlayState_visibility = dart.privateName(overlay_state, "_ImmutableOverlayState.visibility");
  var _ImmutableOverlayState_height = dart.privateName(overlay_state, "_ImmutableOverlayState.height");
  var _ImmutableOverlayState_minWidth = dart.privateName(overlay_state, "_ImmutableOverlayState.minWidth");
  var _ImmutableOverlayState_width = dart.privateName(overlay_state, "_ImmutableOverlayState.width");
  var _ImmutableOverlayState_bottom = dart.privateName(overlay_state, "_ImmutableOverlayState.bottom");
  var _ImmutableOverlayState_right = dart.privateName(overlay_state, "_ImmutableOverlayState.right");
  var _ImmutableOverlayState_top = dart.privateName(overlay_state, "_ImmutableOverlayState.top");
  var _ImmutableOverlayState_left = dart.privateName(overlay_state, "_ImmutableOverlayState.left");
  var _ImmutableOverlayState_captureEvents = dart.privateName(overlay_state, "_ImmutableOverlayState.captureEvents");
  var C0;
  var _createRef = dart.privateName(overlay_service, "_createRef");
  var _measurePane = dart.privateName(overlay_service, "_measurePane");
  overlay_service.OverlayService = class OverlayService extends core.Object {
    createOverlayRef(initialState = C0 || CT.C0) {
      return async.async(OverlayRefL(), (function* createOverlayRef() {
        let pane = (yield this[_renderService$].createOverlayPane(initialState));
        return this[_createRef](pane, initialState);
      }).bind(this));
    }
    createOverlayRefSync(initialState = C0 || CT.C0) {
      let pane = this[_renderService$].createOverlayPaneSync(initialState);
      return this[_createRef](pane, initialState);
    }
    measureContainer() {
      return this[_renderService$].measureContainer();
    }
    [_createRef](pane, state) {
      return new overlay_ref.OverlayRef.new(dart.bind(this[_renderService$], 'applyState'), dart.bind(this, _measurePane), this[_renderService$].createPortalHost(pane), this[_renderService$].containerElement, pane, dart.bind(this[_ngZone$], 'runOutsideAngular'), {state: state});
    }
    [_measurePane](pane, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return this[_renderService$].measureSize(pane, {track: track, sync: this[_useDomSynchronously$]});
    }
  };
  (overlay_service.OverlayService.new = function(_ngZone, _useDomSynchronously, _renderService, existingInstance) {
    this[_ngZone$] = _ngZone;
    this[_useDomSynchronously$] = _useDomSynchronously;
    this[_renderService$] = _renderService;
    if (!dart.test(dart.fn(() => {
      if (existingInstance != null) {
        overlay_service.OverlayService._logger.severe("OverlayService must be a singleton: " + "Remove nested OverlayService providers such as overlayBindings, " + "popupBindings, datepickerBindings or materialProviders");
      }
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L0, 76, 12, "() {\n      // Overlay service should not be injected if it is already available\n      if (existingInstance != null) {\n        _logger.severe('OverlayService must be a singleton: '\n            'Remove nested OverlayService providers such as overlayBindings, '\n            'popupBindings, datepickerBindings or materialProviders');\n      }\n      return true;\n    }()");
  }).prototype = overlay_service.OverlayService.prototype;
  dart.addTypeTests(overlay_service.OverlayService);
  dart.addTypeCaches(overlay_service.OverlayService);
  dart.setMethodSignature(overlay_service.OverlayService, () => ({
    __proto__: dart.getMethods(overlay_service.OverlayService.__proto__),
    createOverlayRef: dart.fnType(dart.legacy(async.Future$(dart.legacy(overlay_ref.OverlayRef))), [], [dart.legacy(overlay_state.OverlayState)]),
    createOverlayRefSync: dart.fnType(dart.legacy(overlay_ref.OverlayRef), [], [dart.legacy(overlay_state.OverlayState)]),
    measureContainer: dart.fnType(dart.legacy(async.Future$(dart.legacy(math.Rectangle$(dart.legacy(core.num))))), []),
    [_createRef]: dart.fnType(dart.legacy(overlay_ref.OverlayRef), [dart.legacy(html.HtmlElement), dart.legacy(overlay_state.OverlayState)]),
    [_measurePane]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(dart.legacy(core.num))))), [dart.legacy(html.HtmlElement)], {track: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(overlay_service.OverlayService, L1);
  dart.setFieldSignature(overlay_service.OverlayService, () => ({
    __proto__: dart.getFields(overlay_service.OverlayService.__proto__),
    [_useDomSynchronously$]: dart.finalFieldType(dart.legacy(core.bool)),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_renderService$]: dart.finalFieldType(dart.legacy(overlay_dom_render_service.OverlayDomRenderService))
  }));
  dart.defineLazy(overlay_service.OverlayService, {
    /*overlay_service.OverlayService._defaultState*/get _defaultState() {
      return C0 || CT.C0;
    },
    /*overlay_service.OverlayService._logger*/get _logger() {
      return logger.Logger.new("OverlayService");
    }
  }, true);
  var _lastZIndex = dart.privateName(overlay_dom_render_service, "_lastZIndex");
  var _uniqueId = dart.privateName(overlay_dom_render_service, "_uniqueId");
  var _containerName$ = dart.privateName(overlay_dom_render_service, "_containerName");
  var _domRuler$ = dart.privateName(overlay_dom_render_service, "_domRuler");
  var _domService$ = dart.privateName(overlay_dom_render_service, "_domService");
  var _imperativeViewUtils$ = dart.privateName(overlay_dom_render_service, "_imperativeViewUtils");
  var _useDomSynchronously$0 = dart.privateName(overlay_dom_render_service, "_useDomSynchronously");
  var _useRepositionLoop$ = dart.privateName(overlay_dom_render_service, "_useRepositionLoop");
  var _zIndexer$ = dart.privateName(overlay_dom_render_service, "_zIndexer");
  var _createUniqueId = dart.privateName(overlay_dom_render_service, "_createUniqueId");
  var containerElement$ = dart.privateName(overlay_dom_render_service, "OverlayDomRenderService.containerElement");
  overlay_dom_render_service.OverlayDomRenderService = class OverlayDomRenderService extends core.Object {
    get containerElement() {
      return this[containerElement$];
    }
    set containerElement(value) {
      super.containerElement = value;
    }
    [_createUniqueId]() {
      return dart.str(this[_containerName$]) + "-" + dart.str(this[_uniqueId] = dart.notNull(this[_uniqueId]) + 1);
    }
    applyState(state, pane) {
      return async.async(dart.void, (function* applyState() {
        if (!dart.test(this[_useDomSynchronously$0])) {
          return this[_domService$].onWrite().then(dart.void, dart.fn(_ => {
            this.applyStateSync(state, pane);
          }, voidToNull()));
        } else {
          this.applyStateSync(state, pane);
        }
      }).bind(this));
    }
    applyStateSync(state, pane) {
      let cssClasses = JSArrayOfStringL().of([]);
      if (dart.test(state.captureEvents)) {
        cssClasses[$add]("modal");
      }
      if (dart.equals(state.visibility, visibility.Visibility.Visible)) cssClasses[$add]("visible");
      this[_domRuler$].updateSync(pane, {cssClasses: cssClasses, width: state.width, height: state.height, top: state.top, left: state.left, bottom: state.bottom, right: state.right, visibility: state.visibility, position: state.position, useCssTransform: !dart.test(this[_useRepositionLoop$])});
      if (state.minWidth != null) {
        pane.style[$minWidth] = dart.str(state.minWidth) + "px";
      }
      if (state.zIndex != null) {
        pane.style[$zIndex] = dart.str(state.zIndex);
      }
      if (pane[$parent] != null) {
        if (this[_lastZIndex] != this[_zIndexer$].peek()) {
          this[_lastZIndex] = this[_zIndexer$].pop();
        }
        this[_domRuler$].updateSync(pane[$parent], {zIndex: this[_lastZIndex]});
      }
    }
    measureSize(pane, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      if (dart.test(track)) {
        return this[_domRuler$].track(pane);
      } else {
        if (!dart.test(sync)) {
          return this[_domRuler$].measure(pane).asStream();
        }
        return StreamOfRectangleLOfnumL().fromIterable(JSArrayOfRectangleLOfnumL().of([this[_domRuler$].measureSync(pane)]));
      }
    }
    measureContainer() {
      if (!dart.test(this[_useDomSynchronously$0])) {
        return this[_domService$].onWrite().then(RectangleLOfnumL(), dart.fn(_ => this.containerElement.getBoundingClientRect(), voidToRectangleLOfnumL()));
      } else {
        return FutureOfRectangleLOfnum().value(this.containerElement.getBoundingClientRect());
      }
    }
    createOverlayPane(state = C0 || CT.C0) {
      let t0;
      let pane = (t0 = html.DivElement.new(), (() => {
        t0[$attributes][$_set]("pane-id", this[_createUniqueId]());
        t0[$classes].add("pane");
        return t0;
      })());
      this.applyStateSync(state, pane);
      if (!dart.test(this[_useDomSynchronously$0])) {
        return this[_domService$].onWrite().then(HtmlElementL(), dart.fn(_ => {
          this.containerElement[$append](pane);
          return pane;
        }, voidToHtmlElementL()));
      } else {
        this.containerElement[$append](pane);
        return FutureOfHtmlElementL().value(pane);
      }
    }
    createOverlayPaneSync(state = C0 || CT.C0) {
      let t0;
      let pane = (t0 = html.DivElement.new(), (() => {
        t0[$attributes][$_set]("pane-id", this[_createUniqueId]());
        t0[$classes].add("pane");
        return t0;
      })());
      this.applyStateSync(state, pane);
      this.containerElement[$append](pane);
      return pane;
    }
    createPortalHost(hostContainer) {
      return new portal.DomPortalHost.new(hostContainer, this[_imperativeViewUtils$]);
    }
  };
  (overlay_dom_render_service.OverlayDomRenderService.new = function(styleConfig, containerElement, _containerName, _domRuler, _domService, _imperativeViewUtils, _useDomSynchronously, _useRepositionLoop, _zIndexer) {
    this[_lastZIndex] = null;
    this[_uniqueId] = 0;
    this[containerElement$] = containerElement;
    this[_containerName$] = _containerName;
    this[_domRuler$] = _domRuler;
    this[_domService$] = _domService;
    this[_imperativeViewUtils$] = _imperativeViewUtils;
    this[_useDomSynchronously$0] = _useDomSynchronously;
    this[_useRepositionLoop$] = _useRepositionLoop;
    this[_zIndexer$] = _zIndexer;
    this.containerElement[$attributes][$_set]("name", this[_containerName$]);
    styleConfig.registerStyles();
    this[_lastZIndex] = this[_zIndexer$].peek();
  }).prototype = overlay_dom_render_service.OverlayDomRenderService.prototype;
  dart.addTypeTests(overlay_dom_render_service.OverlayDomRenderService);
  dart.addTypeCaches(overlay_dom_render_service.OverlayDomRenderService);
  dart.setMethodSignature(overlay_dom_render_service.OverlayDomRenderService, () => ({
    __proto__: dart.getMethods(overlay_dom_render_service.OverlayDomRenderService.__proto__),
    [_createUniqueId]: dart.fnType(dart.legacy(core.String), []),
    applyState: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(overlay_state.OverlayState), dart.legacy(html.HtmlElement)]),
    applyStateSync: dart.fnType(dart.void, [dart.legacy(overlay_state.OverlayState), dart.legacy(html.HtmlElement)]),
    measureSize: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), [dart.legacy(html.HtmlElement)], {sync: dart.legacy(core.bool), track: dart.legacy(core.bool)}, {}),
    measureContainer: dart.fnType(dart.legacy(async.Future$(dart.legacy(math.Rectangle$(core.num)))), []),
    createOverlayPane: dart.fnType(dart.legacy(async.Future$(dart.legacy(html.HtmlElement))), [], [dart.legacy(overlay_state.OverlayState)]),
    createOverlayPaneSync: dart.fnType(dart.legacy(html.HtmlElement), [], [dart.legacy(overlay_state.OverlayState)]),
    createPortalHost: dart.fnType(dart.legacy(portal.PortalHost), [dart.legacy(html.HtmlElement)])
  }));
  dart.setLibraryUri(overlay_dom_render_service.OverlayDomRenderService, L2);
  dart.setFieldSignature(overlay_dom_render_service.OverlayDomRenderService, () => ({
    __proto__: dart.getFields(overlay_dom_render_service.OverlayDomRenderService.__proto__),
    containerElement: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_containerName$]: dart.finalFieldType(dart.legacy(core.String)),
    [_domRuler$]: dart.finalFieldType(dart.legacy(dom_ruler.DomRuler)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_imperativeViewUtils$]: dart.finalFieldType(dart.legacy(imperative_view.AcxImperativeViewUtils)),
    [_useDomSynchronously$0]: dart.finalFieldType(dart.legacy(core.bool)),
    [_useRepositionLoop$]: dart.finalFieldType(dart.legacy(core.bool)),
    [_zIndexer$]: dart.finalFieldType(dart.legacy(zindexer.ZIndexer)),
    [_lastZIndex]: dart.fieldType(dart.legacy(core.int)),
    [_uniqueId]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(overlay_dom_render_service.OverlayDomRenderService, {
    /*overlay_dom_render_service.OverlayDomRenderService._defaultConfig*/get _defaultConfig() {
      return C0 || CT.C0;
    },
    /*overlay_dom_render_service.OverlayDomRenderService._paneClassName*/get _paneClassName() {
      return "pane";
    }
  }, true);
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  dart.defineLazy(overlay_dom_render_service, {
    /*overlay_dom_render_service.overlayContainerName*/get overlayContainerName() {
      return C2 || CT.C2;
    },
    /*overlay_dom_render_service.overlayContainerToken*/get overlayContainerToken() {
      return C3 || CT.C3;
    },
    /*overlay_dom_render_service.overlayContainerParent*/get overlayContainerParent() {
      return C4 || CT.C4;
    },
    /*overlay_dom_render_service.overlaySyncDom*/get overlaySyncDom() {
      return C5 || CT.C5;
    },
    /*overlay_dom_render_service.overlayRepositionLoop*/get overlayRepositionLoop() {
      return C6 || CT.C6;
    },
    /*overlay_dom_render_service.overlayViewportBoundaries*/get overlayViewportBoundaries() {
      return C7 || CT.C7;
    }
  }, true);
  var _stylesRegistered = dart.privateName(overlay_style_config, "_stylesRegistered");
  var _styleHost = dart.privateName(overlay_style_config, "_styleHost");
  var _document = dart.privateName(overlay_style_config, "_document");
  overlay_style_config.OverlayStyleConfig = class OverlayStyleConfig extends core.Object {
    registerStyles() {
      let t0;
      if (dart.test(this.stylesRegistered)) return;
      this[_styleHost][$append]((t0 = html.StyleElement.new(), (() => {
        t0.id = "__overlay_styles";
        t0[$text] = overlay_style_config.OverlayStyleConfig.inlinedStyles;
        return t0;
      })()));
      this[_stylesRegistered] = true;
    }
    get stylesRegistered() {
      if (dart.test(this[_stylesRegistered])) return true;
      let styleNode = this[_document].querySelector("#" + "__overlay_styles");
      if (styleNode != null) this[_stylesRegistered] = true;
      return this[_stylesRegistered];
    }
  };
  (overlay_style_config.OverlayStyleConfig.new = function(document) {
    this[_stylesRegistered] = false;
    this[_styleHost] = HeadElementL().as(document.querySelector("head"));
    this[_document] = document;
    ;
  }).prototype = overlay_style_config.OverlayStyleConfig.prototype;
  dart.addTypeTests(overlay_style_config.OverlayStyleConfig);
  dart.addTypeCaches(overlay_style_config.OverlayStyleConfig);
  dart.setMethodSignature(overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getMethods(overlay_style_config.OverlayStyleConfig.__proto__),
    registerStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getGetters(overlay_style_config.OverlayStyleConfig.__proto__),
    stylesRegistered: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(overlay_style_config.OverlayStyleConfig, L3);
  dart.setFieldSignature(overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getFields(overlay_style_config.OverlayStyleConfig.__proto__),
    [_styleHost]: dart.finalFieldType(dart.legacy(html.HeadElement)),
    [_stylesRegistered]: dart.fieldType(dart.legacy(core.bool)),
    [_document]: dart.fieldType(dart.legacy(html.Document))
  }));
  dart.defineLazy(overlay_style_config.OverlayStyleConfig, {
    /*overlay_style_config.OverlayStyleConfig._styleId*/get _styleId() {
      return "__overlay_styles";
    },
    /*overlay_style_config.OverlayStyleConfig.inlinedStyles*/get inlinedStyles() {
      return "  #default-acx-overlay-container,\n  .acx-overlay-container {\n    position: absolute;\n\n    /* Disable event captures. This is an invisible container! */\n    pointer-events: none;\n\n    /* Make this full width and height in the viewport. */\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 10;\n  }\n\n  .acx-overlay-container > .pane {\n    display: flex;\n    /* TODO(google): verify prefixing flexbox fixes popups in IE */\n    display: -ms-flexbox;\n    position: absolute;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 11;\n\n    /* Disable event captures. This is an invisible container!\n       Panes that would like to capture events can enable this with .modal. */\n    pointer-events: none;\n  }\n\n  /* Children should have normal events. */\n  .acx-overlay-container > .pane > * { pointer-events: auto; }\n\n  .acx-overlay-container > .pane.modal {\n    justify-content: center;\n    align-items: center;\n    background: rgba(33,33,33,.4);\n    pointer-events: auto;\n\n    /* TODO(google): Pull out into a .fixed class instead. */\n    position: fixed;\n\n    /* Promote the .modal element to its own layer to fix scrolling issues.\n       will-change: transform is preferred, but not yet supported by Edge. */\n    -webkit-backface-visibility: hidden;  /* Safari 9/10 */\n    backface-visibility: hidden;\n  }\n\n  .acx-overlay-container > .pane,\n  .acx-overlay-container > .pane > * {\n    display: flex;\n    display: -ms-flexbox;\n  }\n\n  /* Optional debug mode that highlights the container and individual panes.\n     TODO(google): Pull this into a mixin so it won't get auto-exported. */\n  .acx-overlay-container.debug {\n    background: rgba(255, 0, 0, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane {\n    background: rgba(0, 0, 2555, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane.modal {\n    background: rgba(0, 0, 0, 0.30);\n  }\n";
    }
  }, true);
  var C8;
  overlay_state.OverlayState = class OverlayState extends core.Object {};
  (overlay_state.OverlayState[dart.mixinNew] = function() {
  }).prototype = overlay_state.OverlayState.prototype;
  dart.addTypeTests(overlay_state.OverlayState);
  dart.addTypeCaches(overlay_state.OverlayState);
  dart.setLibraryUri(overlay_state.OverlayState, L4);
  dart.defineLazy(overlay_state.OverlayState, {
    /*overlay_state.OverlayState.Dialog*/get Dialog() {
      return C8 || CT.C8;
    }
  }, true);
  var C9;
  overlay_state._ImmutableOverlayState = class _ImmutableOverlayState extends core.Object {
    get captureEvents() {
      return this[captureEvents$];
    }
    set captureEvents(value) {
      super.captureEvents = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get minWidth() {
      return this[minWidth$];
    }
    set minWidth(value) {
      super.minWidth = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
    get zIndex() {
      return this[zIndex$];
    }
    set zIndex(value) {
      super.zIndex = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    _equals(o) {
      if (o == null) return false;
      return OverlayStateL().is(o) && dart.test(overlay_state._stateEquals(this, o));
    }
    get hashCode() {
      return overlay_state._stateHashCode(this);
    }
    get onUpdate() {
      return C9 || CT.C9;
    }
    toString() {
      return "ImmutableOverlayState " + dart.notNull(new (IdentityMapOfStringL$ObjectL()).from(["captureEvents", this.captureEvents, "left", this.left, "top", this.top, "right", this.right, "bottom", this.bottom, "width", this.width, "height", this.height, "visibility", this.visibility, "zIndex", this.zIndex, "position", this.position])[$toString]());
    }
  };
  (overlay_state._ImmutableOverlayState.new = function(opts) {
    let captureEvents = opts && 'captureEvents' in opts ? opts.captureEvents : false;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C1 || CT.C1;
    let position = opts && 'position' in opts ? opts.position : null;
    this[captureEvents$] = captureEvents;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[width$] = width;
    this[minWidth$] = minWidth;
    this[height$] = height;
    this[zIndex$] = zIndex;
    this[visibility$] = visibility;
    this[position$] = position;
    ;
  }).prototype = overlay_state._ImmutableOverlayState.prototype;
  dart.addTypeTests(overlay_state._ImmutableOverlayState);
  dart.addTypeCaches(overlay_state._ImmutableOverlayState);
  const captureEvents$ = _ImmutableOverlayState_captureEvents;
  const left$ = _ImmutableOverlayState_left;
  const top$ = _ImmutableOverlayState_top;
  const right$ = _ImmutableOverlayState_right;
  const bottom$ = _ImmutableOverlayState_bottom;
  const width$ = _ImmutableOverlayState_width;
  const minWidth$ = _ImmutableOverlayState_minWidth;
  const height$ = _ImmutableOverlayState_height;
  const visibility$ = _ImmutableOverlayState_visibility;
  const zIndex$ = _ImmutableOverlayState_zIndex;
  const position$ = _ImmutableOverlayState_position;
  overlay_state._ImmutableOverlayState[dart.implements] = () => [overlay_state.OverlayState];
  dart.setMethodSignature(overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getMethods(overlay_state._ImmutableOverlayState.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getGetters(overlay_state._ImmutableOverlayState.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int),
    onUpdate: dart.legacy(async.Stream$(core.Null))
  }));
  dart.setLibraryUri(overlay_state._ImmutableOverlayState, L4);
  dart.setFieldSignature(overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getFields(overlay_state._ImmutableOverlayState.__proto__),
    captureEvents: dart.finalFieldType(dart.legacy(core.bool)),
    left: dart.finalFieldType(dart.legacy(core.num)),
    top: dart.finalFieldType(dart.legacy(core.num)),
    right: dart.finalFieldType(dart.legacy(core.num)),
    bottom: dart.finalFieldType(dart.legacy(core.num)),
    width: dart.finalFieldType(dart.legacy(core.num)),
    minWidth: dart.finalFieldType(dart.legacy(core.num)),
    height: dart.finalFieldType(dart.legacy(core.num)),
    visibility: dart.finalFieldType(dart.legacy(visibility.Visibility)),
    zIndex: dart.finalFieldType(dart.legacy(core.int)),
    position: dart.finalFieldType(dart.legacy(position.Position))
  }));
  dart.defineExtensionMethods(overlay_state._ImmutableOverlayState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(overlay_state._ImmutableOverlayState, ['hashCode']);
  var _asyncScheduler = dart.privateName(overlay_state, "_asyncScheduler");
  var _captureEvents = dart.privateName(overlay_state, "_captureEvents");
  var _left = dart.privateName(overlay_state, "_left");
  var _top = dart.privateName(overlay_state, "_top");
  var _right = dart.privateName(overlay_state, "_right");
  var _bottom = dart.privateName(overlay_state, "_bottom");
  var _width = dart.privateName(overlay_state, "_width");
  var _minWidth = dart.privateName(overlay_state, "_minWidth");
  var _height = dart.privateName(overlay_state, "_height");
  var _zIndex = dart.privateName(overlay_state, "_zIndex");
  var _visibility = dart.privateName(overlay_state, "_visibility");
  var _position = dart.privateName(overlay_state, "_position");
  overlay_state.MutableOverlayState = class MutableOverlayState extends core.Object {
    static from(other) {
      if (other == null) return new overlay_state.MutableOverlayState.new();
      if (MutableOverlayStateL().is(other)) return other;
      return new overlay_state.MutableOverlayState.new({captureEvents: other.captureEvents, left: other.left, top: other.top, right: other.right, bottom: other.bottom, width: other.width, minWidth: other.minWidth, height: other.height, zIndex: other.zIndex, visibility: other.visibility, position: other.position});
    }
    _equals(o) {
      if (o == null) return false;
      return OverlayStateL().is(o) && dart.test(overlay_state._stateEquals(this, o));
    }
    get hashCode() {
      return overlay_state._stateHashCode(this);
    }
    get onUpdate() {
      return this[_asyncScheduler].onUpdate;
    }
    get captureEvents() {
      return this[_captureEvents];
    }
    set captureEvents(captureEvents) {
      if (!dart.equals(this[_captureEvents], captureEvents)) {
        this[_captureEvents] = captureEvents;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get left() {
      return this[_left];
    }
    set left(left) {
      if (this[_left] != left) {
        this[_left] = left;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get top() {
      return this[_top];
    }
    set top(top) {
      if (this[_top] != top) {
        this[_top] = top;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get right() {
      return this[_right];
    }
    set right(right) {
      if (this[_right] != right) {
        this[_right] = right;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get bottom() {
      return this[_bottom];
    }
    set bottom(bottom) {
      if (this[_bottom] != bottom) {
        this[_bottom] = bottom;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get width() {
      return this[_width];
    }
    set width(width) {
      if (this[_width] != width) {
        this[_width] = width;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get minWidth() {
      return this[_minWidth];
    }
    set minWidth(minWidth) {
      if (this[_minWidth] != minWidth) {
        this[_minWidth] = minWidth;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get height() {
      return this[_height];
    }
    set height(height) {
      if (this[_height] != height) {
        this[_height] = height;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get zIndex() {
      return this[_zIndex];
    }
    set zIndex(zIndex) {
      if (this[_zIndex] != zIndex) {
        this[_zIndex] = zIndex;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get visibility() {
      return this[_visibility];
    }
    set visibility(visibility) {
      if (!dart.equals(this[_visibility], visibility)) {
        this[_visibility] = visibility;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (!dart.equals(this[_position], position)) {
        this[_position] = position;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    toString() {
      return "MutableOverlayState " + dart.notNull(new (IdentityMapOfStringL$ObjectL()).from(["captureEvents", this.captureEvents, "left", this.left, "top", this.top, "right", this.right, "bottom", this.bottom, "width", this.width, "minWidth", this.minWidth, "height", this.height, "zIndex", this.zIndex, "visibility", this.visibility, "position", this.position])[$toString]());
    }
  };
  (overlay_state.MutableOverlayState.new = function(opts) {
    let captureEvents = opts && 'captureEvents' in opts ? opts.captureEvents : false;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C1 || CT.C1;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_asyncScheduler] = new async_update_scheduler.AsyncUpdateScheduler.new();
    this[_captureEvents] = null;
    this[_left] = null;
    this[_top] = null;
    this[_right] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_minWidth] = null;
    this[_height] = null;
    this[_zIndex] = null;
    this[_visibility] = null;
    this[_position] = null;
    this[_captureEvents] = captureEvents;
    this[_left] = left;
    this[_top] = top;
    this[_right] = right;
    this[_bottom] = bottom;
    this[_width] = width;
    this[_minWidth] = minWidth;
    this[_height] = height;
    this[_zIndex] = zIndex;
    this[_visibility] = visibility;
  }).prototype = overlay_state.MutableOverlayState.prototype;
  dart.addTypeTests(overlay_state.MutableOverlayState);
  dart.addTypeCaches(overlay_state.MutableOverlayState);
  overlay_state.MutableOverlayState[dart.implements] = () => [overlay_state.OverlayState];
  dart.setMethodSignature(overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getMethods(overlay_state.MutableOverlayState.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getGetters(overlay_state.MutableOverlayState.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int),
    onUpdate: dart.legacy(async.Stream$(core.Null)),
    captureEvents: dart.legacy(core.bool),
    left: dart.legacy(core.num),
    top: dart.legacy(core.num),
    right: dart.legacy(core.num),
    bottom: dart.legacy(core.num),
    width: dart.legacy(core.num),
    minWidth: dart.legacy(core.num),
    height: dart.legacy(core.num),
    zIndex: dart.legacy(core.int),
    visibility: dart.legacy(visibility.Visibility),
    position: dart.legacy(position.Position)
  }));
  dart.setSetterSignature(overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getSetters(overlay_state.MutableOverlayState.__proto__),
    captureEvents: dart.legacy(core.bool),
    left: dart.legacy(core.num),
    top: dart.legacy(core.num),
    right: dart.legacy(core.num),
    bottom: dart.legacy(core.num),
    width: dart.legacy(core.num),
    minWidth: dart.legacy(core.num),
    height: dart.legacy(core.num),
    zIndex: dart.legacy(core.int),
    visibility: dart.legacy(visibility.Visibility),
    position: dart.legacy(position.Position)
  }));
  dart.setLibraryUri(overlay_state.MutableOverlayState, L4);
  dart.setFieldSignature(overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getFields(overlay_state.MutableOverlayState.__proto__),
    [_asyncScheduler]: dart.finalFieldType(dart.legacy(async_update_scheduler.AsyncUpdateScheduler)),
    [_captureEvents]: dart.fieldType(dart.legacy(core.bool)),
    [_left]: dart.fieldType(dart.legacy(core.num)),
    [_top]: dart.fieldType(dart.legacy(core.num)),
    [_right]: dart.fieldType(dart.legacy(core.num)),
    [_bottom]: dart.fieldType(dart.legacy(core.num)),
    [_width]: dart.fieldType(dart.legacy(core.num)),
    [_minWidth]: dart.fieldType(dart.legacy(core.num)),
    [_height]: dart.fieldType(dart.legacy(core.num)),
    [_zIndex]: dart.fieldType(dart.legacy(core.int)),
    [_visibility]: dart.fieldType(dart.legacy(visibility.Visibility)),
    [_position]: dart.fieldType(dart.legacy(position.Position))
  }));
  dart.defineExtensionMethods(overlay_state.MutableOverlayState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(overlay_state.MutableOverlayState, ['hashCode']);
  overlay_state._stateEquals = function _stateEquals(a, b) {
    if (a == b) return true;
    return dart.equals(a.captureEvents, b.captureEvents) && a.left == b.left && a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.width == b.width && a.minWidth == b.minWidth && a.height == b.height && a.zIndex == b.zIndex && dart.equals(a.position, b.position);
  };
  overlay_state._stateHashCode = function _stateHashCode(a) {
    return hash.hashObjects([a.captureEvents, a.left, a.top, a.right, a.bottom, a.width, a.minWidth, a.height, a.zIndex, a.position]);
  };
  var _lastVisible = dart.privateName(overlay_ref, "_lastVisible");
  var _onVisibleController = dart.privateName(overlay_ref, "_onVisibleController");
  var _stateUpdateListener = dart.privateName(overlay_ref, "_stateUpdateListener");
  var _asyncApplyState$ = dart.privateName(overlay_ref, "_asyncApplyState");
  var _asyncMeasureSize$ = dart.privateName(overlay_ref, "_asyncMeasureSize");
  var _delegatePortalHost$ = dart.privateName(overlay_ref, "_delegatePortalHost");
  var _runOutsideAngular$ = dart.privateName(overlay_ref, "_runOutsideAngular");
  var _applyChanges = dart.privateName(overlay_ref, "_applyChanges");
  var C10;
  var state$ = dart.privateName(overlay_ref, "OverlayRef.state");
  var containerElement$0 = dart.privateName(overlay_ref, "OverlayRef.containerElement");
  var overlayElement$ = dart.privateName(overlay_ref, "OverlayRef.overlayElement");
  overlay_ref.OverlayRef = class OverlayRef extends core.Object {
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    get containerElement() {
      return this[containerElement$0];
    }
    set containerElement(value) {
      super.containerElement = value;
    }
    get overlayElement() {
      return this[overlayElement$];
    }
    set overlayElement(value) {
      super.overlayElement = value;
    }
    get isVisible() {
      return !dart.equals(this.state.visibility, visibility.Visibility.None);
    }
    get onPanePressed() {
      return this.overlayElement[$onMouseDown];
    }
    measureSizeChanges() {
      return new (_AsyncStarImplOfRectangleLOfnum()).new((function* measureSizeChanges(stream) {
        let t0;
        if (dart.equals(this.state.visibility, visibility.Visibility.None)) {
          this.state.visibility = visibility.Visibility.Hidden;
        }
        yield this[_applyChanges]();
        if (stream.addStream(StreamLOfRectangleLOfnum().as((t0 = dart.fn(() => {
          let t1, t0;
          return (t0 = this.overlayElement, t1 = true, this[_asyncMeasureSize$](t0, {track: t1})).distinct(C10 || CT.C10);
        }, VoidToStreamLOfRectangleLOfnumL()), dart.dsend(this, _runOutsideAngular$, [t0]))))) return;
        yield;
      }).bind(this)).stream;
    }
    get onVisibleChanged() {
      this[_onVisibleController] == null ? this[_onVisibleController] = StreamControllerOfboolL().broadcast({sync: true}) : null;
      return this[_onVisibleController].stream;
    }
    setPreventInteraction(preventInteraction = null) {
      let t0;
      this.state.captureEvents = (t0 = preventInteraction, t0 == null ? true : t0);
    }
    setVisible(visible = null) {
      let t0;
      this.state.visibility = visibility.Visibility.fromBoolean((t0 = visible, t0 == null ? true : t0));
    }
    get uniqueId() {
      return this.overlayElement[$attributes][$_get]("pane-id");
    }
    attach(portal) {
      return this[_delegatePortalHost$].attach(portal);
    }
    detach() {
      return this[_delegatePortalHost$].detach();
    }
    get hasAttached() {
      return this[_delegatePortalHost$].hasAttached;
    }
    dispose() {
      this.overlayElement[$remove]();
      if (this[_onVisibleController] != null) {
        this[_onVisibleController].close();
      }
      if (dart.equals(this[_delegatePortalHost$].hasAttached, true)) {
        this[_delegatePortalHost$].dispose();
      }
      this[_stateUpdateListener].cancel();
    }
    static _isEqualSize(a, b) {
      return a[$width] == b[$width] && a[$height] == b[$height];
    }
    [_applyChanges]() {
      let t1, t0;
      if (!dart.equals(this[_lastVisible], this.isVisible)) {
        this[_lastVisible] = this.isVisible;
        if (this[_onVisibleController] != null) {
          this[_onVisibleController].add(this.isVisible);
        }
      }
      t0 = this.state;
      t1 = this.overlayElement;
      return this[_asyncApplyState$](t0, t1);
    }
  };
  (overlay_ref.OverlayRef.new = function(_asyncApplyState, _asyncMeasureSize, _delegatePortalHost, containerElement, overlayElement, _runOutsideAngular, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    this[_lastVisible] = false;
    this[_onVisibleController] = null;
    this[_stateUpdateListener] = null;
    this[_asyncApplyState$] = _asyncApplyState;
    this[_asyncMeasureSize$] = _asyncMeasureSize;
    this[_delegatePortalHost$] = _delegatePortalHost;
    this[containerElement$0] = containerElement;
    this[overlayElement$] = overlayElement;
    this[_runOutsideAngular$] = _runOutsideAngular;
    this[state$] = overlay_state.MutableOverlayState.from(state);
    this[_stateUpdateListener] = this.state.onUpdate.listen(dart.fn(_ => this[_applyChanges](), ObjectLToFutureLOfObjectL()));
  }).prototype = overlay_ref.OverlayRef.prototype;
  dart.addTypeTests(overlay_ref.OverlayRef);
  dart.addTypeCaches(overlay_ref.OverlayRef);
  overlay_ref.OverlayRef[dart.implements] = () => [portal.PortalHost];
  dart.setMethodSignature(overlay_ref.OverlayRef, () => ({
    __proto__: dart.getMethods(overlay_ref.OverlayRef.__proto__),
    measureSizeChanges: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), []),
    setPreventInteraction: dart.fnType(dart.void, [], [dart.legacy(core.bool)]),
    setVisible: dart.fnType(dart.void, [], [dart.legacy(core.bool)]),
    attach: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Object))), [dart.legacy(portal.Portal$(dart.legacy(core.Object)))]),
    detach: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    dispose: dart.fnType(dart.void, []),
    [_applyChanges]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Object))), [])
  }));
  dart.setGetterSignature(overlay_ref.OverlayRef, () => ({
    __proto__: dart.getGetters(overlay_ref.OverlayRef.__proto__),
    isVisible: dart.legacy(core.bool),
    onPanePressed: dart.legacy(async.Stream$(dart.legacy(html.MouseEvent))),
    onVisibleChanged: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    uniqueId: dart.legacy(core.String),
    hasAttached: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(overlay_ref.OverlayRef, L5);
  dart.setFieldSignature(overlay_ref.OverlayRef, () => ({
    __proto__: dart.getFields(overlay_ref.OverlayRef.__proto__),
    state: dart.finalFieldType(dart.legacy(overlay_state.MutableOverlayState)),
    containerElement: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    overlayElement: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_asyncApplyState$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Object))), [dart.legacy(overlay_state.OverlayState), dart.legacy(html.HtmlElement)]))),
    [_asyncMeasureSize$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), [dart.legacy(html.HtmlElement)], {track: dart.legacy(core.bool)}, {}))),
    [_delegatePortalHost$]: dart.finalFieldType(dart.legacy(portal.PortalHost)),
    [_runOutsideAngular$]: dart.finalFieldType(dart.legacy(core.Function)),
    [_lastVisible]: dart.fieldType(dart.legacy(core.bool)),
    [_onVisibleController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_stateUpdateListener]: dart.fieldType(dart.legacy(async.StreamSubscription$(core.Null)))
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_ref", {
    "package:angular_components/src/laminate/overlay/overlay_service.dart": overlay_service,
    "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart": overlay_dom_render_service,
    "package:angular_components/src/laminate/overlay/render/overlay_style_config.dart": overlay_style_config,
    "package:angular_components/src/laminate/overlay/overlay_state.dart": overlay_state,
    "package:angular_components/src/laminate/overlay/overlay_ref.dart": overlay_ref
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["overlay_service.dart","render/overlay_dom_render_service.dart","render/overlay_style_config.dart","overlay_state.dart","overlay_ref.dart"],"names":[],"mappings":"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","file":"overlay_ref.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_service: overlay_service,
    src__laminate__overlay__render__overlay_dom_render_service: overlay_dom_render_service,
    src__laminate__overlay__render__overlay_style_config: overlay_style_config,
    src__laminate__overlay__overlay_state: overlay_state,
    src__laminate__overlay__overlay_ref: overlay_ref
  };
}));

//# sourceMappingURL=overlay_ref.unsound.ddc.js.map
