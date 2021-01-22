define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/model/ui/toggle', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/core/application_tokens', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/model/math/box', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/utils/id_generator/id_generator'], (function load__packages__angular_components__material_popup__material_popup(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__model__ui__toggle, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__src__utils__async__async_update_scheduler, packages__angular_components__laminate__enums__visibility, packages__angular_components__focus__focus_interface, packages__angular_components__laminate__enums__alignment, packages__angular_components__content__deferred_content_aware, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__core__application_tokens, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__model__math__box, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__utils__id_generator__id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const popup_state = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_state;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_interface = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_interface;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const toggle = packages__angular_components__model__ui__toggle.model__ui__toggle;
  const popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__popup_source;
  const throttle_stream = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__throttle_stream;
  const visibility = packages__angular_components__laminate__enums__visibility.laminate__enums__visibility;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const overlay_ref = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_ref;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const box = packages__angular_components__model__math__box.model__math__box;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  var material_popup = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $cancelAnimationFrame = dartx.cancelAnimationFrame;
  var $append = dartx.append;
  var $toList = dartx.toList;
  var $add = dartx.add;
  var $onResize = dartx.onResize;
  var $display = dartx.display;
  var $visibility = dartx.visibility;
  var $every = dartx.every;
  var $_get = dartx._get;
  var $document = dartx.document;
  var $left = dartx.left;
  var $round = dartx.round;
  var $top = dartx.top;
  var $width = dartx.width;
  var $height = dartx.height;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $transform = dartx.transform;
  var $topLeft = dartx.topLeft;
  var $first = dartx.first;
  var $bottomRight = dartx.bottomRight;
  var $containsRectangle = dartx.containsRectangle;
  var $intersection = dartx.intersection;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $right = dartx.right;
  var $bottom = dartx.bottom;
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var StreamControllerOfEventL = () => (StreamControllerOfEventL = dart.constFn(async.StreamController$(EventL())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var MutableRectangleOfnumL = () => (MutableRectangleOfnumL = dart.constFn(math.MutableRectangle$(numL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var voidTovoid = () => (voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))();
  var TogglerL = () => (TogglerL = dart.constFn(dart.legacy(toggle.Toggler)))();
  var ElementPopupSourceL = () => (ElementPopupSourceL = dart.constFn(dart.legacy(popup_source.ElementPopupSource)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  var CompleterOfRectangleLOfnum = () => (CompleterOfRectangleLOfnum = dart.constFn(async.Completer$(RectangleLOfnum())))();
  var RectangleOfnumL = () => (RectangleOfnumL = dart.constFn(math.Rectangle$(numL())))();
  var RectangleLOfnumL = () => (RectangleLOfnumL = dart.constFn(dart.legacy(RectangleOfnumL())))();
  var StreamOfRectangleLOfnumL = () => (StreamOfRectangleLOfnumL = dart.constFn(async.Stream$(RectangleLOfnumL())))();
  var StreamLOfRectangleLOfnumL = () => (StreamLOfRectangleLOfnumL = dart.constFn(dart.legacy(StreamOfRectangleLOfnumL())))();
  var JSArrayOfStreamLOfRectangleLOfnumL = () => (JSArrayOfStreamLOfRectangleLOfnumL = dart.constFn(_interceptors.JSArray$(StreamLOfRectangleLOfnumL())))();
  var ListOfRectangleLOfnumL = () => (ListOfRectangleLOfnumL = dart.constFn(core.List$(RectangleLOfnumL())))();
  var ListLOfRectangleLOfnumL = () => (ListLOfRectangleLOfnumL = dart.constFn(dart.legacy(ListOfRectangleLOfnumL())))();
  var RectangleLOfnumLToboolL = () => (RectangleLOfnumLToboolL = dart.constFn(dart.fnType(boolL(), [RectangleLOfnumL()])))();
  var ListLOfRectangleLOfnumLToNull = () => (ListLOfRectangleLOfnumLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfRectangleLOfnumL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_popup/material_popup.dart";
  var L1 = "package:angular_components/material_popup/material_popup.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    }
  }, false);
  var _onOpened = dart.privateName(material_popup, "_onOpened");
  var _onContentVisible = dart.privateName(material_popup, "_onContentVisible");
  var _onAutoDismissed = dart.privateName(material_popup, "_onAutoDismissed");
  var _disposer = dart.privateName(material_popup, "_disposer");
  var _visibleDisposer = dart.privateName(material_popup, "_visibleDisposer");
  var _alignmentPosition = dart.privateName(material_popup, "_alignmentPosition");
  var _overlayRef = dart.privateName(material_popup, "_overlayRef");
  var _uniqueId = dart.privateName(material_popup, "_uniqueId");
  var _resolvedPopupRef = dart.privateName(material_popup, "_resolvedPopupRef");
  var _viewInitialized = dart.privateName(material_popup, "_viewInitialized");
  var _animationTimer = dart.privateName(material_popup, "_animationTimer");
  var _viewportRect = dart.privateName(material_popup, "_viewportRect");
  var _isOpening = dart.privateName(material_popup, "_isOpening");
  var _initialSourceDimensions = dart.privateName(material_popup, "_initialSourceDimensions");
  var _repositionOffsetX = dart.privateName(material_popup, "_repositionOffsetX");
  var _repositionOffsetY = dart.privateName(material_popup, "_repositionOffsetY");
  var _repositionLoopId = dart.privateName(material_popup, "_repositionLoopId");
  var _autoDismissBlockers = dart.privateName(material_popup, "_autoDismissBlockers");
  var _zIndex = dart.privateName(material_popup, "_zIndex");
  var _slide = dart.privateName(material_popup, "_slide");
  var _matchMinSourceWidth = dart.privateName(material_popup, "_matchMinSourceWidth");
  var _isVisible = dart.privateName(material_popup, "_isVisible");
  var _hierarchy$ = dart.privateName(material_popup, "_hierarchy");
  var _ngZone$ = dart.privateName(material_popup, "_ngZone");
  var _overlayService$ = dart.privateName(material_popup, "_overlayService");
  var _domService$ = dart.privateName(material_popup, "_domService");
  var _zIndexer$ = dart.privateName(material_popup, "_zIndexer");
  var _defaultPreferredPositions$ = dart.privateName(material_popup, "_defaultPreferredPositions");
  var _useRepositionLoop$ = dart.privateName(material_popup, "_useRepositionLoop");
  var _viewportBoundaries$ = dart.privateName(material_popup, "_viewportBoundaries");
  var _popupSizeProvider$ = dart.privateName(material_popup, "_popupSizeProvider");
  var _changeDetector$ = dart.privateName(material_popup, "_changeDetector");
  var _viewContainer$ = dart.privateName(material_popup, "_viewContainer");
  var _updateOverlayCssClass = dart.privateName(material_popup, "_updateOverlayCssClass");
  var _initView = dart.privateName(material_popup, "_initView");
  var _open = dart.privateName(material_popup, "_open");
  var _close = dart.privateName(material_popup, "_close");
  var _updateViewportSize = dart.privateName(material_popup, "_updateViewportSize");
  var _updatePopupMinMaxSize = dart.privateName(material_popup, "_updatePopupMinMaxSize");
  var _onPopupOpened = dart.privateName(material_popup, "_onPopupOpened");
  var _schedulePositionUpdate = dart.privateName(material_popup, "_schedulePositionUpdate");
  var _startRepositionLoop = dart.privateName(material_popup, "_startRepositionLoop");
  var _stopRepositionLoop = dart.privateName(material_popup, "_stopRepositionLoop");
  var _onPopupClosed = dart.privateName(material_popup, "_onPopupClosed");
  var _sourceDimensions = dart.privateName(material_popup, "_sourceDimensions");
  var _reposition = dart.privateName(material_popup, "_reposition");
  var _preferredPositions = dart.privateName(material_popup, "_preferredPositions");
  var _getBestPosition = dart.privateName(material_popup, "_getBestPosition");
  var elementRef$ = dart.privateName(material_popup, "MaterialPopupComponent.elementRef");
  var role$ = dart.privateName(material_popup, "MaterialPopupComponent.role");
  var showPopup = dart.privateName(material_popup, "MaterialPopupComponent.showPopup");
  var z = dart.privateName(material_popup, "MaterialPopupComponent.z");
  var minHeight = dart.privateName(material_popup, "MaterialPopupComponent.minHeight");
  var minWidth = dart.privateName(material_popup, "MaterialPopupComponent.minWidth");
  var maxHeight = dart.privateName(material_popup, "MaterialPopupComponent.maxHeight");
  var maxWidth = dart.privateName(material_popup, "MaterialPopupComponent.maxWidth");
  var inkBackground = dart.privateName(material_popup, "MaterialPopupComponent.inkBackground");
  var hasBox = dart.privateName(material_popup, "MaterialPopupComponent.hasBox");
  var ariaLabel = dart.privateName(material_popup, "MaterialPopupComponent.ariaLabel");
  var state = dart.privateName(material_popup, "MaterialPopupComponent.state");
  var templateRef = dart.privateName(material_popup, "MaterialPopupComponent.templateRef");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var C1;
  const Object_PopupBase$36 = class Object_PopupBase extends core.Object {};
  (Object_PopupBase$36.new = function() {
  }).prototype = Object_PopupBase$36.prototype;
  dart.applyMixin(Object_PopupBase$36, popup_interface.PopupBase);
  const Object_PopupEvents$36 = class Object_PopupEvents extends Object_PopupBase$36 {};
  (Object_PopupEvents$36.new = function() {
    popup_interface.PopupEvents.new.call(this);
  }).prototype = Object_PopupEvents$36.prototype;
  dart.applyMixin(Object_PopupEvents$36, popup_interface.PopupEvents);
  const Object_PopupHierarchyElement$36 = class Object_PopupHierarchyElement extends Object_PopupEvents$36 {};
  (Object_PopupHierarchyElement$36.new = function() {
    Object_PopupHierarchyElement$36.__proto__.new.call(this);
  }).prototype = Object_PopupHierarchyElement$36.prototype;
  dart.applyMixin(Object_PopupHierarchyElement$36, popup_hierarchy.PopupHierarchyElement);
  material_popup.MaterialPopupComponent = class MaterialPopupComponent extends Object_PopupHierarchyElement$36 {
    get elementRef() {
      return this[elementRef$];
    }
    set elementRef(value) {
      super.elementRef = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get showPopup() {
      return this[showPopup];
    }
    set showPopup(value) {
      this[showPopup] = value;
    }
    get z() {
      return this[z];
    }
    set z(value) {
      this[z] = value;
    }
    get minHeight() {
      return this[minHeight];
    }
    set minHeight(value) {
      this[minHeight] = value;
    }
    get minWidth() {
      return this[minWidth];
    }
    set minWidth(value) {
      this[minWidth] = value;
    }
    get maxHeight() {
      return this[maxHeight];
    }
    set maxHeight(value) {
      this[maxHeight] = value;
    }
    get maxWidth() {
      return this[maxWidth];
    }
    set maxWidth(value) {
      this[maxWidth] = value;
    }
    get inkBackground() {
      return this[inkBackground];
    }
    set inkBackground(value) {
      this[inkBackground] = value;
    }
    get hasBox() {
      return this[hasBox];
    }
    set hasBox(value) {
      this[hasBox] = value;
    }
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      this[ariaLabel] = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      super.state = value;
    }
    get templateRef() {
      return this[templateRef];
    }
    set templateRef(value) {
      this[templateRef] = value;
    }
    get onOpened() {
      return this[_onOpened].stream;
    }
    get onAutoDismissed() {
      return this[_onAutoDismissed].stream;
    }
    get autoDismiss() {
      return this.state.autoDismiss;
    }
    set autoDismiss(value) {
      super.autoDismiss = value;
    }
    get transformOrigin() {
      let t0;
      t0 = this[_alignmentPosition];
      return t0 == null ? null : t0.animationOrigin;
    }
    get zIndex() {
      return this[_zIndex];
    }
    get slide() {
      return this[_slide];
    }
    set slide(value) {
      let t0, t0$;
      this[_slide] = dart.test((t0$ = (t0 = value, t0 == null ? null : t0[$isNotEmpty]), t0$ == null ? false : t0$)) ? value : null;
      if (!(this[_slide] == null || this.slide === "x" || this.slide === "y")) dart.assertFailed(null, L0, 191, 12, "_slide == null || (slide == 'x' || slide == 'y')");
    }
    set popupSizeProvider(value) {
      this[_popupSizeProvider$] = value;
    }
    get matchMinSourceWidth() {
      return this[_matchMinSourceWidth];
    }
    set matchMinSourceWidth(value) {
      this[_matchMinSourceWidth] = super.matchMinSourceWidth = value;
    }
    set autoDismissBlockers(elements) {
      this[_autoDismissBlockers] = elements;
    }
    get contentVisible() {
      return this[_onContentVisible].stream.distinct();
    }
    get hierarchy() {
      let t0;
      this[_hierarchy$] = (t0 = this[_hierarchy$], t0 == null ? new popup_hierarchy.PopupHierarchy.new() : t0);
      return this[_hierarchy$];
    }
    ngAfterViewInit() {
      this[_updateOverlayCssClass]();
    }
    [_updateOverlayCssClass]() {
      let t0;
      if (this[_overlayRef] == null) return;
      let hostClassName = dart.dload(this.elementRef.nativeElement, 'className');
      t0 = this[_overlayRef].overlayElement;
      t0.className = dart.notNull(t0.className) + (" " + dart.str(hostClassName));
    }
    ngOnDestroy() {
      let t0;
      if (this[_repositionLoopId] != null) {
        html.window[$cancelAnimationFrame](this[_repositionLoopId]);
      }
      this[_visibleDisposer].dispose();
      this[_disposer].dispose();
      t0 = this[_animationTimer];
      t0 == null ? null : t0.cancel();
      this[_isVisible] = false;
      this.onVisibleController.add(false);
    }
    get paneId() {
      let t0;
      t0 = this[_overlayRef];
      return t0 == null ? null : t0.uniqueId;
    }
    get uniqueId() {
      return this[_uniqueId];
    }
    [_initView]() {
      if (!dart.equals(this[_viewInitialized], false)) dart.assertFailed(null, L0, 325, 12, "_viewInitialized == false");
      this[_overlayRef] = this[_overlayService$].createOverlayRefSync();
      this[_disposer].addFunction(dart.bind(this[_overlayRef], 'dispose'));
      this[_zIndex] = this[_zIndexer$].pop();
      let view = this[_viewContainer$].createEmbeddedView(this.templateRef);
      for (let node of view.rootNodes) {
        this[_overlayRef].overlayElement[$append](node);
      }
      this[_updateOverlayCssClass]();
      this[_viewInitialized] = true;
    }
    set visible(visible) {
      if (dart.test(visible)) {
        if (!dart.test(this[_viewInitialized])) {
          this[_initView]();
          async.scheduleMicrotask(dart.bind(this, _open));
        } else {
          this[_open]();
        }
      } else if (dart.test(this[_viewInitialized])) {
        this[_close]();
      }
    }
    get isVisible() {
      return this[_isVisible];
    }
    toggle() {
      this.visible = !dart.test(this.isVisible);
    }
    open() {
      this.visible = true;
    }
    close() {
      this.visible = false;
    }
    get container() {
      let t0;
      t0 = this[_overlayRef];
      return t0 == null ? null : t0.overlayElement;
    }
    set source(source) {
      super.source = source;
      source.popupId = this.uniqueId;
      if (TogglerL().is(source)) {
        TogglerL().as(source).toggleable = new material_popup._DeferredToggleable.new(this);
      }
    }
    get autoDismissBlockers() {
      let t0;
      let sourceElement = ElementPopupSourceL().is(this.state.source) ? ElementPopupSourceL().as(this.state.source).sourceElement : null;
      return sourceElement != null ? (t0 = this[_autoDismissBlockers][$toList](), (() => {
        t0[$add](sourceElement);
        return t0;
      })()) : this[_autoDismissBlockers][$toList]();
    }
    onDismiss() {
      this.close();
    }
    onAutoDismiss(event) {
      this.close();
      this[_onAutoDismissed].add(event);
    }
    [_open]() {
      let t0, t0$;
      if (dart.test(this[_isOpening])) return async.Future.value();
      this[_isOpening] = true;
      t0 = this[_animationTimer];
      t0 == null ? null : t0.cancel();
      this.onOpenController.add(null);
      if (!dart.test(this[_isOpening])) return async.Future.value();
      if (!dart.test(this[_viewInitialized])) {
        dart.throw(new core.StateError.new("No content is attached."));
      } else if (this.state.source == null) {
        dart.throw(new core.StateError.new("Cannot open popup: no source set."));
      }
      this[_updateViewportSize]();
      this[_updatePopupMinMaxSize]();
      this[_visibleDisposer].addStreamSubscription(dart.dynamic, html.window[$onResize].transform(dart.dynamic, throttle_stream.throttleStream(EventL(), dart.dynamic, material_popup.MaterialPopupComponent._resizeThrottleDuration, {guaranteeLast: true})).listen(dart.fn(_ => {
        this[_updateViewportSize]();
        this[_updatePopupMinMaxSize]();
      }, dynamicToNull())));
      this[_overlayRef].state.visibility = visibility.Visibility.Hidden;
      t0$ = this[_overlayRef].overlayElement.style;
      (() => {
        t0$[$display] = "";
        t0$[$visibility] = "hidden";
        return t0$;
      })();
      this[_onContentVisible].add(true);
      this[_changeDetector$].markForCheck();
      let initialData = CompleterOfRectangleLOfnum().new();
      let popupContentsLayoutStream = this[_overlayRef].measureSizeChanges().asBroadcastStream({onListen: dart.gbind(dart.bind(this[_visibleDisposer], 'addStreamSubscription'), RectangleLOfnumL())});
      let popupSourceLayoutStream = this.state.source.onDimensionsChanged({track: this.state.trackLayoutChanges});
      if (!dart.test(this.state.trackLayoutChanges)) {
        popupContentsLayoutStream = popupContentsLayoutStream.take(1);
      }
      let mergedLayoutStream = material_popup._mergeStreams(RectangleLOfnumL(), JSArrayOfStreamLOfRectangleLOfnumL().of([popupContentsLayoutStream, popupSourceLayoutStream]));
      this[_visibleDisposer].addStreamSubscription(ListLOfRectangleLOfnumL(), mergedLayoutStream.listen(dart.fn(layoutRects => {
        if (dart.test(layoutRects[$every](dart.fn(r => r != null, RectangleLOfnumLToboolL())))) {
          if (!dart.test(initialData.isCompleted)) {
            this[_onPopupOpened]();
            initialData.complete(null);
          }
          this[_initialSourceDimensions] = null;
          this[_schedulePositionUpdate](layoutRects[$_get](0), layoutRects[$_get](1));
        }
      }, ListLOfRectangleLOfnumLToNull())));
      return initialData.future;
    }
    [_onPopupOpened]() {
      if (!dart.test(this[_isOpening])) return;
      this.showPopup = true;
      this[_changeDetector$].markForCheck();
      if (dart.test(this.state.trackLayoutChanges) && dart.test(this[_useRepositionLoop$])) {
        this[_startRepositionLoop]();
      }
      this.attachToVisibleHierarchy();
      this.state.source.onOpen();
      if (dart.test(this.hasBox)) {
        this[_animationTimer] = async.Timer.new(material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
          this[_animationTimer] = null;
          this[_isVisible] = true;
          this.onVisibleController.add(true);
          this[_onOpened].add(null);
        }, VoidToNull()));
      } else {
        async.Timer.run(dart.fn(() => {
          if (!dart.test(this[_isOpening])) return;
          this[_isVisible] = true;
          this.onVisibleController.add(true);
          this[_onOpened].add(null);
        }, VoidToNull()));
      }
    }
    [_close]() {
      let t0;
      if (!dart.test(this[_isOpening])) return;
      this[_isOpening] = false;
      t0 = this[_animationTimer];
      t0 == null ? null : t0.cancel();
      this.onCloseController.add(null);
      if (dart.test(this[_isOpening])) return;
      this[_visibleDisposer].dispose();
      if (this[_repositionLoopId] != null) {
        this[_stopRepositionLoop]();
      }
      if (FocusableL().is(this.state.source) && dart.test(this.hierarchy.islastTriggerWithKeyboard)) {
        this[_domService$].scheduleWrite(dart.fn(() => {
          if (dart.test(this[_overlayRef].overlayElement.contains(html.window[$document].activeElement))) {
            FocusableL().as(this.state.source).focus();
          }
        }, VoidToNull()));
      }
      this.detachFromVisibleHierarchy();
      this.showPopup = false;
      this[_changeDetector$].markForCheck();
      this.state.source.onClose();
      if (dart.test(this.hasBox)) {
        this[_animationTimer] = async.Timer.new(material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
          this[_animationTimer] = null;
          this[_onPopupClosed]();
        }, VoidToNull()));
      } else {
        this[_onPopupClosed]();
      }
    }
    [_onPopupClosed]() {
      this[_onContentVisible].add(false);
      this[_changeDetector$].markForCheck();
      this[_overlayRef].state.visibility = visibility.Visibility.None;
      this[_overlayRef].overlayElement.style[$display] = "none";
      this[_isVisible] = false;
      this.onVisibleController.add(false);
    }
    get [_sourceDimensions]() {
      let t0, t0$;
      let sourceDimensions = (t0 = this.state.source, t0 == null ? null : t0.dimensions);
      if (sourceDimensions == null) return null;
      let containerRect = (t0$ = this[_overlayRef].containerElement, t0$ == null ? null : t0$.getBoundingClientRect());
      if (containerRect == null) return null;
      return new (RectangleOfnumL()).new((dart.notNull(sourceDimensions[$left]) - dart.notNull(containerRect[$left]))[$round](), (dart.notNull(sourceDimensions[$top]) - dart.notNull(containerRect[$top]))[$round](), sourceDimensions[$width][$round](), sourceDimensions[$height][$round]());
    }
    [_startRepositionLoop]() {
      this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
        this[_repositionLoopId] = html.window[$requestAnimationFrame](dart.bind(this, _reposition));
      }, VoidToNull()));
    }
    [_stopRepositionLoop]() {
      let t1, t1$, t0;
      html.window[$cancelAnimationFrame](this[_repositionLoopId]);
      this[_repositionLoopId] = null;
      if (this[_repositionOffsetX] !== 0 || this[_repositionOffsetY] !== 0) {
        t0 = this[_overlayRef].state;
        (() => {
          t1 = t0;
          t1.left = dart.notNull(t1.left) + dart.notNull(this[_repositionOffsetX]);
          t1$ = t0;
          t1$.top = dart.notNull(t1$.top) + dart.notNull(this[_repositionOffsetY]);
          return t0;
        })();
        this[_repositionOffsetX] = this[_repositionOffsetY] = 0;
      }
    }
    [_reposition](_) {
      this[_repositionLoopId] = html.window[$requestAnimationFrame](dart.bind(this, _reposition));
      let sourceDimensions = this[_sourceDimensions];
      if (sourceDimensions == null) return;
      this[_initialSourceDimensions] == null ? this[_initialSourceDimensions] = sourceDimensions : null;
      let newOffsetX = (dart.notNull(sourceDimensions[$left]) - dart.notNull(this[_initialSourceDimensions][$left]))[$round]();
      let newOffsetY = (dart.notNull(sourceDimensions[$top]) - dart.notNull(this[_initialSourceDimensions][$top]))[$round]();
      let scrollShiftX = newOffsetX - dart.notNull(this[_repositionOffsetX]);
      let scrollShiftY = newOffsetY - dart.notNull(this[_repositionOffsetY]);
      this[_repositionOffsetX] = newOffsetX;
      this[_repositionOffsetY] = newOffsetY;
      if (dart.test(this.state.constrainToViewport)) {
        let popupRect = this[_overlayRef].overlayElement.getBoundingClientRect();
        popupRect = material_popup._shiftRectangle(popupRect, {left: scrollShiftX, top: scrollShiftY});
        let boundedViewportRect = material_popup._boundRectangle(this[_viewportRect], this[_viewportBoundaries$]);
        let viewportShift = material_popup._shiftRectangleToFitWithin(popupRect, boundedViewportRect);
        this[_repositionOffsetX] = dart.asNullableInt(dart.notNull(this[_repositionOffsetX]) + dart.notNull(viewportShift[$left]));
        this[_repositionOffsetY] = dart.asNullableInt(dart.notNull(this[_repositionOffsetY]) + dart.notNull(viewportShift[$top]));
      }
      this[_overlayRef].overlayElement.style[$transform] = "translate(" + dart.str(this[_repositionOffsetX]) + "px, " + dart.str(this[_repositionOffsetY]) + "px)";
    }
    [_updateViewportSize]() {
      this[_viewportRect].width = html.window.innerWidth;
      this[_viewportRect].height = html.window.innerHeight;
    }
    [_updatePopupMinMaxSize]() {
      let t0, t0$, t0$0, t0$1;
      if (this[_popupSizeProvider$] == null) return;
      let boundedViewportRect = material_popup._boundRectangle(this[_viewportRect], this[_viewportBoundaries$]);
      this.minHeight = this[_popupSizeProvider$].getMinHeight((t0 = this[_overlayRef].state.top, t0 == null ? 0 : t0), boundedViewportRect[$height]);
      this.minWidth = this[_popupSizeProvider$].getMinWidth((t0$ = this[_overlayRef].state.left, t0$ == null ? 0 : t0$), boundedViewportRect[$width]);
      this.maxHeight = this[_popupSizeProvider$].getMaxHeight((t0$0 = this[_overlayRef].state.top, t0$0 == null ? 0 : t0$0), boundedViewportRect[$height]);
      this.maxWidth = this[_popupSizeProvider$].getMaxWidth((t0$1 = this[_overlayRef].state.left, t0$1 == null ? 0 : t0$1), boundedViewportRect[$width]);
    }
    get [_preferredPositions]() {
      return dart.test(material_popup._flatten(this.state.preferredPositions)[$isNotEmpty]) ? this.state.preferredPositions : this[_defaultPreferredPositions$];
    }
    [_getBestPosition](contentRect, sourceRect, containerRect) {
      if (!dart.test(this.state.enforceSpaceConstraints)) dart.assertFailed(null, L0, 706, 12, "state.enforceSpaceConstraints");
      let containerOffset = containerRect[$topLeft];
      let positions = material_popup._flatten(this[_preferredPositions]);
      let bestPosition = positions[$first];
      let bestOverlap = 0.0;
      for (let position of positions) {
        if (dart.equals(this.state.source.isRtl, true)) {
          position = dart.dsend(position, 'flipRelativePosition', []);
        }
        let containerPos = new (RectangleOfnumL()).new(numL().as(dart.dsend(dart.dload(position, 'originX'), 'calcLeft', [sourceRect, contentRect])), numL().as(dart.dsend(dart.dload(position, 'originY'), 'calcTop', [sourceRect, contentRect])), contentRect[$width], contentRect[$height]);
        let screenPos = RectangleOfnumL().fromPoints(containerPos[$topLeft]['+'](containerOffset), containerPos[$bottomRight]['+'](containerOffset));
        if (dart.test(this[_viewportRect][$containsRectangle](screenPos))) {
          bestPosition = position;
          break;
        }
        let overlapRect = this[_viewportRect][$intersection](screenPos);
        if (overlapRect == null) continue;
        let overlap = dart.notNull(overlapRect[$width]) * dart.notNull(overlapRect[$height]);
        if (overlap > bestOverlap) {
          bestOverlap = overlap;
          bestPosition = position;
        }
      }
      return RelativePositionL().as(bestPosition);
    }
    [_schedulePositionUpdate](contentClientRect, sourceClientRect) {
      return async.async(dart.dynamic, (function* _schedulePositionUpdate() {
        let t0, t0$;
        let position = null;
        let containerRect = (yield this[_overlayService$].measureContainer());
        let isRtl = dart.equals(this.state.source.isRtl, true);
        this[_overlayRef].state.width = null;
        if (dart.test(this.state.matchMinSourceWidth)) {
          this[_overlayRef].state.minWidth = sourceClientRect[$width];
        }
        if (dart.test(this.state.matchMinSourceWidth)) {
          contentClientRect = material_popup._resizeRectangle(contentClientRect, {width: math.max(numL(), sourceClientRect[$width], contentClientRect[$width])});
        }
        if (dart.test(this.state.enforceSpaceConstraints)) {
          position = this[_getBestPosition](contentClientRect, sourceClientRect, containerRect);
        }
        if (position == null) {
          position = new alignment.RelativePosition.new({originX: this.state.source.alignOriginX, originY: this.state.source.alignOriginY});
          if (isRtl) {
            position = position.flipRelativePosition();
          }
        }
        let offsetX = isRtl ? dart.notNull(containerRect[$left]) - dart.notNull(this.state.offsetX) : dart.notNull(this.state.offsetX) - dart.notNull(containerRect[$left]);
        let offsetY = dart.notNull(this.state.offsetY) - dart.notNull(containerRect[$top]);
        t0 = this[_overlayRef].state;
        (() => {
          t0.left = dart.notNull(position.originX.calcLeft(sourceClientRect, contentClientRect)) + offsetX;
          t0.top = dart.notNull(position.originY.calcTop(sourceClientRect, contentClientRect)) + offsetY;
          t0.visibility = visibility.Visibility.Visible;
          return t0;
        })();
        t0$ = this[_overlayRef].overlayElement.style;
        (() => {
          t0$[$visibility] = "visible";
          t0$[$display] = "";
          return t0$;
        })();
        this[_alignmentPosition] = position;
        this[_updatePopupMinMaxSize]();
      }).bind(this));
    }
  };
  (material_popup.MaterialPopupComponent.new = function(_hierarchy, parentPopup, role, _ngZone, _overlayService, _domService, _zIndexer, _defaultPreferredPositions, _useRepositionLoop, _viewportBoundaries, _popupSizeProvider, _changeDetector, _viewContainer, elementRef) {
    let t0;
    this[_onOpened] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onContentVisible] = StreamControllerOfboolL().broadcast({sync: true});
    this[_onAutoDismissed] = StreamControllerOfEventL().broadcast({sync: true});
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_visibleDisposer] = new disposer.Disposer.multi();
    this[_alignmentPosition] = null;
    this[_overlayRef] = null;
    this[_uniqueId] = material_popup.MaterialPopupComponent._idGenerator.nextId();
    this[_resolvedPopupRef] = null;
    this[_viewInitialized] = false;
    this[_animationTimer] = null;
    this[_viewportRect] = new (MutableRectangleOfnumL()).new(0, 0, 0, 0);
    this[_isOpening] = false;
    this[_initialSourceDimensions] = null;
    this[_repositionOffsetX] = 0;
    this[_repositionOffsetY] = 0;
    this[_repositionLoopId] = null;
    this[_autoDismissBlockers] = JSArrayOfElementL().of([]);
    this[showPopup] = false;
    this[z] = 2;
    this[_zIndex] = null;
    this[_slide] = null;
    this[minHeight] = null;
    this[minWidth] = null;
    this[maxHeight] = null;
    this[maxWidth] = null;
    this[_matchMinSourceWidth] = false;
    this[inkBackground] = false;
    this[hasBox] = true;
    this[ariaLabel] = null;
    this[state] = popup_state.PopupState.new();
    this[templateRef] = null;
    this[_isVisible] = false;
    this[_hierarchy$] = _hierarchy;
    this[_ngZone$] = _ngZone;
    this[_overlayService$] = _overlayService;
    this[_domService$] = _domService;
    this[_zIndexer$] = _zIndexer;
    this[_defaultPreferredPositions$] = _defaultPreferredPositions;
    this[_useRepositionLoop$] = _useRepositionLoop;
    this[_viewportBoundaries$] = _viewportBoundaries;
    this[_popupSizeProvider$] = _popupSizeProvider;
    this[_changeDetector$] = _changeDetector;
    this[_viewContainer$] = _viewContainer;
    this[elementRef$] = elementRef;
    this[role$] = (t0 = role, t0 == null ? "dialog" : t0);
    material_popup.MaterialPopupComponent.__proto__.new.call(this);
    if (parentPopup != null) {
      this[_disposer].addStreamSubscription(dart.void, parentPopup.onClose.listen(dart.fn(_ => this.close(), voidTovoid())));
    }
    this[_resolvedPopupRef] = new material_popup.MaterialPopupRef.new(this);
  }).prototype = material_popup.MaterialPopupComponent.prototype;
  dart.addTypeTests(material_popup.MaterialPopupComponent);
  dart.addTypeCaches(material_popup.MaterialPopupComponent);
  material_popup.MaterialPopupComponent[dart.implements] = () => [popup_interface.PopupInterface, deferred_content_aware.DeferredContentAware, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy, material_dropdown_base.DropdownHandle];
  dart.setMethodSignature(material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getMethods(material_popup.MaterialPopupComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_updateOverlayCssClass]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_initView]: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    [_open]: dart.fnType(dart.legacy(async.Future), []),
    [_onPopupOpened]: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, []),
    [_onPopupClosed]: dart.fnType(dart.void, []),
    [_startRepositionLoop]: dart.fnType(dart.void, []),
    [_stopRepositionLoop]: dart.fnType(dart.void, []),
    [_reposition]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateViewportSize]: dart.fnType(dart.void, []),
    [_updatePopupMinMaxSize]: dart.fnType(dart.void, []),
    [_getBestPosition]: dart.fnType(dart.legacy(alignment.RelativePosition), [dart.legacy(math.Rectangle$(core.num)), dart.legacy(math.Rectangle$(core.num)), dart.legacy(math.Rectangle$(core.num))]),
    [_schedulePositionUpdate]: dart.fnType(dart.legacy(async.Future), [dart.legacy(math.Rectangle$(dart.legacy(core.num))), dart.legacy(math.Rectangle$(dart.legacy(core.num)))])
  }));
  dart.setGetterSignature(material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getGetters(material_popup.MaterialPopupComponent.__proto__),
    onOpened: dart.legacy(async.Stream$(dart.void)),
    onAutoDismissed: dart.legacy(async.Stream$(dart.legacy(html.Event))),
    autoDismiss: dart.legacy(core.bool),
    transformOrigin: dart.legacy(core.String),
    zIndex: dart.legacy(core.int),
    slide: dart.legacy(core.String),
    matchMinSourceWidth: dart.legacy(core.bool),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    hierarchy: dart.legacy(popup_hierarchy.PopupHierarchy),
    paneId: dart.legacy(core.String),
    uniqueId: dart.legacy(core.String),
    isVisible: dart.legacy(core.bool),
    container: dart.legacy(html.Element),
    autoDismissBlockers: dart.legacy(core.List$(dart.legacy(html.Element))),
    [_sourceDimensions]: dart.legacy(math.Rectangle$(core.num)),
    [_preferredPositions]: dart.legacy(core.Iterable)
  }));
  dart.setSetterSignature(material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getSetters(material_popup.MaterialPopupComponent.__proto__),
    slide: dart.legacy(core.String),
    popupSizeProvider: dart.legacy(popup_size_provider.PopupSizeProvider),
    autoDismissBlockers: dart.legacy(core.List$(dart.legacy(html.Element))),
    visible: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_popup.MaterialPopupComponent, L1);
  dart.setFieldSignature(material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getFields(material_popup.MaterialPopupComponent.__proto__),
    [_onOpened]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onContentVisible]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_onAutoDismissed]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.Event)))),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_viewContainer$]: dart.finalFieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_visibleDisposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_overlayService$]: dart.finalFieldType(dart.legacy(overlay_service.OverlayService)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_hierarchy$]: dart.fieldType(dart.legacy(popup_hierarchy.PopupHierarchy)),
    [_defaultPreferredPositions$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    [_alignmentPosition]: dart.fieldType(dart.legacy(alignment.RelativePosition)),
    [_overlayRef]: dart.fieldType(dart.legacy(overlay_ref.OverlayRef)),
    elementRef: dart.finalFieldType(dart.legacy(element_ref.ElementRef)),
    role: dart.finalFieldType(dart.legacy(core.String)),
    [_uniqueId]: dart.finalFieldType(dart.legacy(core.String)),
    [_resolvedPopupRef]: dart.fieldType(dart.legacy(popup_ref.PopupRef)),
    [_viewInitialized]: dart.fieldType(dart.legacy(core.bool)),
    [_animationTimer]: dart.fieldType(dart.legacy(async.Timer)),
    [_viewportRect]: dart.finalFieldType(dart.legacy(math.MutableRectangle$(core.num))),
    [_viewportBoundaries$]: dart.finalFieldType(dart.legacy(box.Box)),
    [_isOpening]: dart.fieldType(dart.legacy(core.bool)),
    [_useRepositionLoop$]: dart.finalFieldType(dart.legacy(core.bool)),
    [_initialSourceDimensions]: dart.fieldType(dart.legacy(math.Rectangle$(core.num))),
    [_repositionOffsetX]: dart.fieldType(dart.legacy(core.int)),
    [_repositionOffsetY]: dart.fieldType(dart.legacy(core.int)),
    [_repositionLoopId]: dart.fieldType(dart.legacy(core.int)),
    [_autoDismissBlockers]: dart.fieldType(dart.legacy(core.List$(dart.legacy(html.Element)))),
    showPopup: dart.fieldType(dart.legacy(core.bool)),
    z: dart.fieldType(dart.legacy(core.int)),
    [_zIndex]: dart.fieldType(dart.legacy(core.int)),
    [_zIndexer$]: dart.finalFieldType(dart.legacy(zindexer.ZIndexer)),
    [_slide]: dart.fieldType(dart.legacy(core.String)),
    [_popupSizeProvider$]: dart.fieldType(dart.legacy(popup_size_provider.PopupSizeProvider)),
    minHeight: dart.fieldType(dart.legacy(core.num)),
    minWidth: dart.fieldType(dart.legacy(core.num)),
    maxHeight: dart.fieldType(dart.legacy(core.num)),
    maxWidth: dart.fieldType(dart.legacy(core.num)),
    [_matchMinSourceWidth]: dart.fieldType(dart.legacy(core.bool)),
    inkBackground: dart.fieldType(dart.legacy(core.bool)),
    hasBox: dart.fieldType(dart.legacy(core.bool)),
    ariaLabel: dart.fieldType(dart.legacy(core.String)),
    state: dart.finalFieldType(dart.legacy(popup_state.PopupState)),
    templateRef: dart.fieldType(dart.legacy(template_ref.TemplateRef)),
    [_isVisible]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_popup.MaterialPopupComponent, {
    /*material_popup.MaterialPopupComponent.SLIDE_DELAY*/get SLIDE_DELAY() {
      return C0 || CT.C0;
    },
    /*material_popup.MaterialPopupComponent._idGenerator*/get _idGenerator() {
      return new id_generator.SequentialIdGenerator.fromUUID();
    },
    /*material_popup.MaterialPopupComponent._resizeThrottleDuration*/get _resizeThrottleDuration() {
      return C1 || CT.C1;
    }
  }, true);
  var _popupComponent$ = dart.privateName(material_popup, "_popupComponent");
  material_popup.MaterialPopupRef = class MaterialPopupRef extends core.Object {
    get isVisible() {
      return this[_popupComponent$].isVisible;
    }
    get onVisibleChanged() {
      return this[_popupComponent$].onVisible;
    }
  };
  (material_popup.MaterialPopupRef.new = function(_popupComponent) {
    this[_popupComponent$] = _popupComponent;
    ;
  }).prototype = material_popup.MaterialPopupRef.prototype;
  dart.addTypeTests(material_popup.MaterialPopupRef);
  dart.addTypeCaches(material_popup.MaterialPopupRef);
  material_popup.MaterialPopupRef[dart.implements] = () => [popup_ref.PopupRef];
  dart.setGetterSignature(material_popup.MaterialPopupRef, () => ({
    __proto__: dart.getGetters(material_popup.MaterialPopupRef.__proto__),
    isVisible: dart.legacy(core.bool),
    onVisibleChanged: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setLibraryUri(material_popup.MaterialPopupRef, L1);
  dart.setFieldSignature(material_popup.MaterialPopupRef, () => ({
    __proto__: dart.getFields(material_popup.MaterialPopupRef.__proto__),
    [_popupComponent$]: dart.finalFieldType(dart.legacy(material_popup.MaterialPopupComponent))
  }));
  material_popup._DeferredToggleable = class _DeferredToggleable extends toggle.Toggleable {
    get isOn() {
      return this[_popupComponent$].isVisible;
    }
    set isOn(state) {
      this[_popupComponent$].visible = state;
    }
  };
  (material_popup._DeferredToggleable.new = function(_popupComponent) {
    this[_popupComponent$] = _popupComponent;
    material_popup._DeferredToggleable.__proto__.new.call(this);
    ;
  }).prototype = material_popup._DeferredToggleable.prototype;
  dart.addTypeTests(material_popup._DeferredToggleable);
  dart.addTypeCaches(material_popup._DeferredToggleable);
  dart.setGetterSignature(material_popup._DeferredToggleable, () => ({
    __proto__: dart.getGetters(material_popup._DeferredToggleable.__proto__),
    isOn: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_popup._DeferredToggleable, () => ({
    __proto__: dart.getSetters(material_popup._DeferredToggleable.__proto__),
    isOn: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_popup._DeferredToggleable, L1);
  dart.setFieldSignature(material_popup._DeferredToggleable, () => ({
    __proto__: dart.getFields(material_popup._DeferredToggleable.__proto__),
    [_popupComponent$]: dart.finalFieldType(dart.legacy(material_popup.MaterialPopupComponent))
  }));
  material_popup.getHierarchy = function getHierarchy(c) {
    return c.hierarchy;
  };
  material_popup.getResolvedPopupRef = function getResolvedPopupRef(c) {
    return c[_resolvedPopupRef];
  };
  material_popup._mergeStreams = function _mergeStreams(T, streams) {
    let streamSubscriptions = core.List$(dart.legacy(async.StreamSubscription$(dart.legacy(T)))).new(streams[$length]);
    let cachedResults = core.List$(dart.legacy(T)).new(streams[$length]);
    let streamController = null;
    streamController = async.StreamController$(dart.legacy(core.List$(dart.legacy(T)))).broadcast({sync: true, onListen: dart.fn(() => {
        let i = 0;
        streams[$forEach](dart.fn(stream => {
          let t0;
          let n = (t0 = i, i = t0 + 1, t0);
          streamSubscriptions[$_set](n, stream.listen(dart.fn(result => {
            cachedResults[$_set](n, result);
            streamController.add(cachedResults);
          }, dart.fnType(core.Null, [dart.legacy(T)]))));
        }, dart.fnType(core.Null, [dart.legacy(async.Stream$(dart.legacy(T)))])));
      }, VoidToNull()), onCancel: dart.fn(() => {
        for (let sub of streamSubscriptions) {
          sub.cancel();
        }
      }, VoidToNull())});
    return streamController.stream;
  };
  material_popup._flatten = function _flatten(nested) {
    return new _js_helper.SyncIterable.new(function* _flatten() {
      for (let item of nested) {
        if (IterableL().is(item)) {
          yield* material_popup._flatten(item);
        } else {
          yield item;
        }
      }
    });
  };
  material_popup._resizeRectangle = function _resizeRectangle(rect, opts) {
    let t0, t0$;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    return new (RectangleOfnumL()).new(rect[$left], rect[$top], (t0 = width, t0 == null ? rect[$width] : t0), (t0$ = height, t0$ == null ? rect[$height] : t0$));
  };
  material_popup._shiftRectangle = function _shiftRectangle(rect, opts) {
    let top = opts && 'top' in opts ? opts.top : 0;
    let left = opts && 'left' in opts ? opts.left : 0;
    return new (RectangleOfnumL()).new(dart.notNull(rect[$left]) + dart.notNull(left), dart.notNull(rect[$top]) + dart.notNull(top), rect[$width], rect[$height]);
  };
  material_popup._boundRectangle = function _boundRectangle(rect, boundaries) {
    return new (RectangleOfnumL()).new(dart.notNull(rect[$left]) + dart.notNull(boundaries.left), dart.notNull(rect[$top]) + dart.notNull(boundaries.top), dart.notNull(rect[$width]) - dart.notNull(boundaries.left) - dart.notNull(boundaries.right), dart.notNull(rect[$height]) - dart.notNull(boundaries.top) - dart.notNull(boundaries.bottom));
  };
  material_popup._shiftRectangleToFitWithin = function _shiftRectangleToFitWithin(rect, container) {
    let x = 0;
    let y = 0;
    if (dart.notNull(rect[$left]) < dart.notNull(container[$left])) {
      x = dart.notNull(container[$left]) - dart.notNull(rect[$left]);
    } else if (dart.notNull(rect[$right]) > dart.notNull(container[$right])) {
      x = math.max(numL(), dart.notNull(container[$right]) - dart.notNull(rect[$right]), dart.notNull(container[$left]) - dart.notNull(rect[$left]));
    }
    if (dart.notNull(rect[$top]) < dart.notNull(container[$top])) {
      y = dart.notNull(container[$top]) - dart.notNull(rect[$top]);
    } else if (dart.notNull(rect[$bottom]) > dart.notNull(container[$bottom])) {
      y = math.max(numL(), dart.notNull(container[$bottom]) - dart.notNull(rect[$bottom]), dart.notNull(container[$top]) - dart.notNull(rect[$top]));
    }
    return new (RectangleOfnumL()).new(x[$round](), y[$round](), 0, 0);
  };
  dart.trackLibraries("packages/angular_components/material_popup/material_popup", {
    "package:angular_components/material_popup/material_popup.dart": material_popup
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.dart"],"names":[],"mappings":"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","file":"material_popup.unsound.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup: material_popup
  };
}));

//# sourceMappingURL=material_popup.unsound.ddc.js.map
