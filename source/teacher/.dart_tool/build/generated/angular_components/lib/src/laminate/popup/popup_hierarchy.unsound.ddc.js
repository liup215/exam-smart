define(['dart_sdk', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/observable/observable', 'packages/quiver/core', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface'], (function load__packages__angular_components__src__laminate__popup__popup_hierarchy(dart_sdk, packages__angular_components__src__laminate__popup__dom_popup_source, packages__observable__observable, packages__quiver__core, packages__angular_components__laminate__enums__alignment, packages__angular_components__utils__browser__events__events, packages__angular__src__bootstrap__modules, packages__angular_components__utils__angular__properties__properties, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__popup_source;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const observable_map = packages__observable__observable.src__observable_map;
  const records = packages__observable__observable.src__records;
  const observable = packages__observable__observable.src__observable;
  const hash = packages__quiver__core.src__core__hash;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  var popup_interface = Object.create(dart.library);
  var popup_state = Object.create(dart.library);
  var popup_size_provider_directive = Object.create(dart.library);
  var popup_size_provider = Object.create(dart.library);
  var popup_position_mixin = Object.create(dart.library);
  var popup_hierarchy = Object.create(dart.library);
  var popup_ref = Object.create(dart.library);
  var popup_source_directive = Object.create(dart.library);
  var $add = dartx.add;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $toLowerCase = dartx.toLowerCase;
  var $clear = dartx.clear;
  var $isEmpty = dartx.isEmpty;
  var $onKeyUp = dartx.onKeyUp;
  var $remove = dartx.remove;
  var $querySelectorAll = dartx.querySelectorAll;
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $contains = dartx.contains;
  var $target = dartx.target;
  var $length = dartx.length;
  var $_get = dartx._get;
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var SymbolL = () => (SymbolL = dart.constFn(dart.legacy(core.Symbol)))();
  var ObservableMapOfSymbolL$dynamic = () => (ObservableMapOfSymbolL$dynamic = dart.constFn(observable_map.ObservableMap$(SymbolL(), dart.dynamic)))();
  var LinkedMapOfSymbolL$dynamic = () => (LinkedMapOfSymbolL$dynamic = dart.constFn(_js_helper.LinkedMap$(SymbolL(), dart.dynamic)))();
  var ObservableMapOfSymbolL$ObjectL = () => (ObservableMapOfSymbolL$ObjectL = dart.constFn(observable_map.ObservableMap$(SymbolL(), ObjectL())))();
  var ChangeRecordL = () => (ChangeRecordL = dart.constFn(dart.legacy(records.ChangeRecord)))();
  var ListOfChangeRecordL = () => (ListOfChangeRecordL = dart.constFn(core.List$(ChangeRecordL())))();
  var ListLOfChangeRecordL = () => (ListLOfChangeRecordL = dart.constFn(dart.legacy(ListOfChangeRecordL())))();
  var JSArrayOfChangeRecordL = () => (JSArrayOfChangeRecordL = dart.constFn(_interceptors.JSArray$(ChangeRecordL())))();
  var MapChangeRecordOfObjectL$ObjectL = () => (MapChangeRecordOfObjectL$ObjectL = dart.constFn(records.MapChangeRecord$(ObjectL(), ObjectL())))();
  var MapChangeRecordLOfObjectL$ObjectL = () => (MapChangeRecordLOfObjectL$ObjectL = dart.constFn(dart.legacy(MapChangeRecordOfObjectL$ObjectL())))();
  var PropertyChangeRecordOfObjectL = () => (PropertyChangeRecordOfObjectL = dart.constFn(records.PropertyChangeRecord$(ObjectL())))();
  var ListLOfChangeRecordLToListLOfChangeRecordL = () => (ListLOfChangeRecordLToListLOfChangeRecordL = dart.constFn(dart.fnType(ListLOfChangeRecordL(), [ListLOfChangeRecordL()])))();
  var PopupSourceL = () => (PopupSourceL = dart.constFn(dart.legacy(popup_source.PopupSource)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var PopupStateL = () => (PopupStateL = dart.constFn(dart.legacy(popup_state.PopupState)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var PopupHierarchyElementL = () => (PopupHierarchyElementL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchyElement)))();
  var JSArrayOfPopupHierarchyElementL = () => (JSArrayOfPopupHierarchyElementL = dart.constFn(_interceptors.JSArray$(PopupHierarchyElementL())))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  const CT = Object.create(null);
  var L3 = "package:angular_components/src/laminate/popup/popup_size_provider.dart";
  var L4 = "package:angular_components/src/laminate/popup/popup_position_mixin.dart";
  var L0 = "package:angular_components/src/laminate/popup/popup_interface.dart";
  var L2 = "package:angular_components/src/laminate/popup/popup_size_provider_directive.dart";
  var L5 = "org-dartlang-app:///packages/angular_components/src/laminate/popup/popup_hierarchy.dart";
  var L6 = "package:angular_components/src/laminate/popup/popup_hierarchy.dart";
  var L7 = "package:angular_components/src/laminate/popup/popup_ref.dart";
  var L1 = "package:angular_components/src/laminate/popup/popup_state.dart";
  var L8 = "package:angular_components/src/laminate/popup/popup_source_directive.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], ObjectL());
    },
    get C1() {
      return C1 = dart.const(new _internal.Symbol.new('autoDismiss'));
    },
    get C2() {
      return C2 = dart.const(new _internal.Symbol.new('enforceSpaceConstraints'));
    },
    get C3() {
      return C3 = dart.const(new _internal.Symbol.new('matchMinSourceWidth'));
    },
    get C4() {
      return C4 = dart.const(new _internal.Symbol.new('offsetX'));
    },
    get C5() {
      return C5 = dart.const(new _internal.Symbol.new('offsetY'));
    },
    get C6() {
      return C6 = dart.const(new _internal.Symbol.new('preferredPositions'));
    },
    get C7() {
      return C7 = dart.const(new _internal.Symbol.new('source'));
    },
    get C8() {
      return C8 = dart.const(new _internal.Symbol.new('trackLayoutChanges'));
    },
    get C9() {
      return C9 = dart.const(new _internal.Symbol.new('constrainToViewport'));
    },
    get C10() {
      return C10 = dart.const({
        __proto__: popup_size_provider.FixedPopupSizeProvider.prototype,
        [_maxHeight$0]: null,
        [_maxWidth$0]: null,
        [_minHeight$0]: null,
        [_minWidth$0]: null
      });
    },
    get C11() {
      return C11 = dart.constList([], RelativePositionL());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: alignment.BeforeCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C14 || CT.C14,
        [RelativePosition_originX]: C15 || CT.C15
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-end",
        [Alignment__displayName]: "End"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C14 || CT.C14,
        [RelativePosition_originX]: C17 || CT.C17
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C16 || CT.C16], RelativePositionL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: alignment.AfterCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C20 || CT.C20,
        [RelativePosition_originX]: C15 || CT.C15
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C20 || CT.C20,
        [RelativePosition_originX]: C17 || CT.C17
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C21 || CT.C21], RelativePositionL());
    }
  }, false);
  popup_interface.PopupInterface = class PopupInterface extends core.Object {};
  (popup_interface.PopupInterface.new = function() {
    ;
  }).prototype = popup_interface.PopupInterface.prototype;
  dart.addTypeTests(popup_interface.PopupInterface);
  dart.addTypeCaches(popup_interface.PopupInterface);
  dart.setLibraryUri(popup_interface.PopupInterface, L0);
  var onOpenController = dart.privateName(popup_interface, "PopupEvents.onOpenController");
  var onCloseController = dart.privateName(popup_interface, "PopupEvents.onCloseController");
  var onVisibleController = dart.privateName(popup_interface, "PopupEvents.onVisibleController");
  popup_interface.PopupEvents = class PopupEvents extends core.Object {
    get onOpenController() {
      return this[onOpenController];
    }
    set onOpenController(value) {
      super.onOpenController = value;
    }
    get onCloseController() {
      return this[onCloseController];
    }
    set onCloseController(value) {
      super.onCloseController = value;
    }
    get onVisibleController() {
      return this[onVisibleController];
    }
    set onVisibleController(value) {
      super.onVisibleController = value;
    }
    get onOpen() {
      return this.onOpenController.stream;
    }
    get onClose() {
      return this.onCloseController.stream;
    }
    get onVisible() {
      return this.onVisibleController.stream;
    }
  };
  (popup_interface.PopupEvents.new = function() {
    this[onOpenController] = StreamControllerOfvoid().broadcast({sync: true});
    this[onCloseController] = StreamControllerOfvoid().broadcast({sync: true});
    this[onVisibleController] = StreamControllerOfboolL().broadcast({sync: true});
    ;
  }).prototype = popup_interface.PopupEvents.prototype;
  dart.addTypeTests(popup_interface.PopupEvents);
  dart.addTypeCaches(popup_interface.PopupEvents);
  dart.setGetterSignature(popup_interface.PopupEvents, () => ({
    __proto__: dart.getGetters(popup_interface.PopupEvents.__proto__),
    onOpen: dart.legacy(async.Stream$(dart.void)),
    onClose: dart.legacy(async.Stream$(dart.void)),
    onVisible: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setLibraryUri(popup_interface.PopupEvents, L0);
  dart.setFieldSignature(popup_interface.PopupEvents, () => ({
    __proto__: dart.getFields(popup_interface.PopupEvents.__proto__),
    onOpenController: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    onCloseController: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    onVisibleController: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool))))
  }));
  popup_interface.PopupBase = class PopupBase extends core.Object {
    set autoDismiss(autoDismiss) {
      this.state.autoDismiss = autoDismiss;
    }
    set enforceSpaceConstraints(enforceSpaceConstraints) {
      this.state.enforceSpaceConstraints = enforceSpaceConstraints;
    }
    set matchMinSourceWidth(matchMinSourceWidth) {
      this.state.matchMinSourceWidth = matchMinSourceWidth;
    }
    set offsetX(offsetX) {
      this.state.offsetX = offsetX;
    }
    set offsetY(offsetY) {
      this.state.offsetY = offsetY;
    }
    set preferredPositions(preferredPositions) {
      this.state.preferredPositions = preferredPositions;
    }
    set source(source) {
      this.state.source = source;
    }
    set trackLayoutChanges(trackLayoutChanges) {
      this.state.trackLayoutChanges = trackLayoutChanges;
    }
    set constrainToViewport(constrainToViewport) {
      this.state.constrainToViewport = constrainToViewport;
    }
  };
  (popup_interface.PopupBase.new = function() {
    ;
  }).prototype = popup_interface.PopupBase.prototype;
  dart.addTypeTests(popup_interface.PopupBase);
  dart.addTypeCaches(popup_interface.PopupBase);
  popup_interface.PopupBase[dart.implements] = () => [popup_interface.PopupInterface];
  dart.setSetterSignature(popup_interface.PopupBase, () => ({
    __proto__: dart.getSetters(popup_interface.PopupBase.__proto__),
    autoDismiss: dart.legacy(core.bool),
    enforceSpaceConstraints: dart.legacy(core.bool),
    matchMinSourceWidth: dart.legacy(core.bool),
    offsetX: dart.legacy(core.int),
    offsetY: dart.legacy(core.int),
    preferredPositions: dart.legacy(core.Iterable$(dart.legacy(core.Object))),
    source: dart.legacy(popup_source.PopupSource),
    trackLayoutChanges: dart.legacy(core.bool),
    constrainToViewport: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(popup_interface.PopupBase, L0);
  var C0;
  var autoDismiss = dart.privateName(popup_interface, "PopupComposite.autoDismiss");
  var enforceSpaceConstraints = dart.privateName(popup_interface, "PopupComposite.enforceSpaceConstraints");
  var matchMinSourceWidth = dart.privateName(popup_interface, "PopupComposite.matchMinSourceWidth");
  var offsetX = dart.privateName(popup_interface, "PopupComposite.offsetX");
  var offsetY = dart.privateName(popup_interface, "PopupComposite.offsetY");
  var preferredPositions = dart.privateName(popup_interface, "PopupComposite.preferredPositions");
  var source = dart.privateName(popup_interface, "PopupComposite.source");
  var trackLayoutChanges = dart.privateName(popup_interface, "PopupComposite.trackLayoutChanges");
  var constrainToViewport = dart.privateName(popup_interface, "PopupComposite.constrainToViewport");
  var visible = dart.privateName(popup_interface, "PopupComposite.visible");
  popup_interface.PopupComposite = class PopupComposite extends core.Object {
    get autoDismiss() {
      return this[autoDismiss];
    }
    set autoDismiss(value) {
      this[autoDismiss] = value;
    }
    get enforceSpaceConstraints() {
      return this[enforceSpaceConstraints];
    }
    set enforceSpaceConstraints(value) {
      this[enforceSpaceConstraints] = value;
    }
    get matchMinSourceWidth() {
      return this[matchMinSourceWidth];
    }
    set matchMinSourceWidth(value) {
      this[matchMinSourceWidth] = value;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      this[offsetX] = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      this[offsetY] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get source() {
      return this[source];
    }
    set source(value) {
      this[source] = value;
    }
    get trackLayoutChanges() {
      return this[trackLayoutChanges];
    }
    set trackLayoutChanges(value) {
      this[trackLayoutChanges] = value;
    }
    get constrainToViewport() {
      return this[constrainToViewport];
    }
    set constrainToViewport(value) {
      this[constrainToViewport] = value;
    }
    get visible() {
      return this[visible];
    }
    set visible(value) {
      this[visible] = value;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
  };
  (popup_interface.PopupComposite.new = function() {
    this[autoDismiss] = true;
    this[enforceSpaceConstraints] = false;
    this[matchMinSourceWidth] = true;
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[preferredPositions] = C0 || CT.C0;
    this[source] = null;
    this[trackLayoutChanges] = true;
    this[constrainToViewport] = true;
    this[visible] = false;
    ;
  }).prototype = popup_interface.PopupComposite.prototype;
  dart.addTypeTests(popup_interface.PopupComposite);
  dart.addTypeCaches(popup_interface.PopupComposite);
  popup_interface.PopupComposite[dart.implements] = () => [popup_interface.PopupInterface];
  dart.setMethodSignature(popup_interface.PopupComposite, () => ({
    __proto__: dart.getMethods(popup_interface.PopupComposite.__proto__),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(popup_interface.PopupComposite, L0);
  dart.setFieldSignature(popup_interface.PopupComposite, () => ({
    __proto__: dart.getFields(popup_interface.PopupComposite.__proto__),
    autoDismiss: dart.fieldType(dart.legacy(core.bool)),
    enforceSpaceConstraints: dart.fieldType(dart.legacy(core.bool)),
    matchMinSourceWidth: dart.fieldType(dart.legacy(core.bool)),
    offsetX: dart.fieldType(dart.legacy(core.int)),
    offsetY: dart.fieldType(dart.legacy(core.int)),
    preferredPositions: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(core.Object)))),
    source: dart.fieldType(dart.legacy(popup_source.PopupSource)),
    trackLayoutChanges: dart.fieldType(dart.legacy(core.bool)),
    constrainToViewport: dart.fieldType(dart.legacy(core.bool)),
    visible: dart.fieldType(dart.legacy(core.bool))
  }));
  var _backingMap$ = dart.privateName(popup_state, "_backingMap");
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  popup_state.PopupState = class PopupState extends observable.Observable$(dart.legacy(records.ChangeRecord)) {
    static new(opts) {
      let autoDismiss = opts && 'autoDismiss' in opts ? opts.autoDismiss : true;
      let enforceSpaceConstraints = opts && 'enforceSpaceConstraints' in opts ? opts.enforceSpaceConstraints : false;
      let matchMinSourceWidth = opts && 'matchMinSourceWidth' in opts ? opts.matchMinSourceWidth : false;
      let offsetX = opts && 'offsetX' in opts ? opts.offsetX : 0;
      let offsetY = opts && 'offsetY' in opts ? opts.offsetY : 0;
      let preferredPositions = opts && 'preferredPositions' in opts ? opts.preferredPositions : C0 || CT.C0;
      let source = opts && 'source' in opts ? opts.source : null;
      let trackLayoutChanges = opts && 'trackLayoutChanges' in opts ? opts.trackLayoutChanges : true;
      let constrainToViewport = opts && 'constrainToViewport' in opts ? opts.constrainToViewport : true;
      return new popup_state.PopupState.__(ObservableMapOfSymbolL$dynamic().from(new (LinkedMapOfSymbolL$dynamic()).from([C1 || CT.C1, autoDismiss, C2 || CT.C2, enforceSpaceConstraints, C3 || CT.C3, matchMinSourceWidth, C4 || CT.C4, offsetX, C5 || CT.C5, offsetY, C6 || CT.C6, preferredPositions, C7 || CT.C7, source, C8 || CT.C8, trackLayoutChanges, C9 || CT.C9, constrainToViewport])));
    }
    static from(other) {
      if (other == null) return popup_state.PopupState.new();
      return new popup_state.PopupState.__(ObservableMapOfSymbolL$ObjectL().from(other[_backingMap$]));
    }
    get changes() {
      return this[_backingMap$].changes.map(ListLOfChangeRecordL(), dart.fn(records => {
        let propertyRecords = JSArrayOfChangeRecordL().of([]);
        for (let record of records) {
          if (MapChangeRecordLOfObjectL$ObjectL().is(record)) {
            propertyRecords[$add](new (PropertyChangeRecordOfObjectL()).new(this, SymbolL().as(record.key), record.oldValue, record.newValue));
          }
        }
        return propertyRecords;
      }, ListLOfChangeRecordLToListLOfChangeRecordL()));
    }
    get autoDismiss() {
      return boolL().as(this[_backingMap$]._get(C1 || CT.C1));
    }
    set autoDismiss(autoDismiss) {
      this[_backingMap$]._set(C1 || CT.C1, autoDismiss);
    }
    get enforceSpaceConstraints() {
      return boolL().as(this[_backingMap$]._get(C2 || CT.C2));
    }
    set enforceSpaceConstraints(enforceSpaceConstraints) {
      this[_backingMap$]._set(C2 || CT.C2, enforceSpaceConstraints);
    }
    get matchMinSourceWidth() {
      return boolL().as(this[_backingMap$]._get(C3 || CT.C3));
    }
    set matchMinSourceWidth(matchMinSourceWidth) {
      this[_backingMap$]._set(C3 || CT.C3, matchMinSourceWidth);
    }
    get source() {
      return PopupSourceL().as(this[_backingMap$]._get(C7 || CT.C7));
    }
    set source(source) {
      this[_backingMap$]._set(C7 || CT.C7, source);
    }
    get offsetX() {
      return intL().as(this[_backingMap$]._get(C4 || CT.C4));
    }
    set offsetX(offsetX) {
      this[_backingMap$]._set(C4 || CT.C4, offsetX);
    }
    get offsetY() {
      return intL().as(this[_backingMap$]._get(C5 || CT.C5));
    }
    set offsetY(offsetY) {
      this[_backingMap$]._set(C5 || CT.C5, offsetY);
    }
    get preferredPositions() {
      return IterableLOfObjectL().as(this[_backingMap$]._get(C6 || CT.C6));
    }
    set preferredPositions(preferredPositions) {
      this[_backingMap$]._set(C6 || CT.C6, preferredPositions);
    }
    get trackLayoutChanges() {
      return boolL().as(this[_backingMap$]._get(C8 || CT.C8));
    }
    set trackLayoutChanges(trackLayoutChanges) {
      this[_backingMap$]._set(C8 || CT.C8, trackLayoutChanges);
    }
    get constrainToViewport() {
      return boolL().as(this[_backingMap$]._get(C9 || CT.C9));
    }
    set constrainToViewport(constrainToViewport) {
      this[_backingMap$]._set(C9 || CT.C9, constrainToViewport);
    }
    _equals(o) {
      if (o == null) return false;
      return PopupStateL().is(o) && dart.equals(o.autoDismiss, this.autoDismiss) && dart.equals(o.enforceSpaceConstraints, this.enforceSpaceConstraints) && dart.equals(o.matchMinSourceWidth, this.matchMinSourceWidth) && dart.equals(o.source, this.source) && o.offsetX == this.offsetX && o.offsetY == this.offsetY && dart.equals(o.preferredPositions, this.preferredPositions) && dart.equals(o.trackLayoutChanges, this.trackLayoutChanges) && dart.equals(o.constrainToViewport, this.constrainToViewport);
    }
    get hashCode() {
      return hash.hashObjects([this.autoDismiss, this.enforceSpaceConstraints, this.matchMinSourceWidth, this.source, this.offsetX, this.offsetY, this.preferredPositions, this.trackLayoutChanges, this.constrainToViewport]);
    }
    toString() {
      return "PopupState " + dart.notNull(dart.toString(this[_backingMap$]));
    }
  };
  (popup_state.PopupState.__ = function(_backingMap) {
    this[_backingMap$] = _backingMap;
    popup_state.PopupState.__proto__.new.call(this);
    ;
  }).prototype = popup_state.PopupState.prototype;
  dart.addTypeTests(popup_state.PopupState);
  dart.addTypeCaches(popup_state.PopupState);
  dart.setMethodSignature(popup_state.PopupState, () => ({
    __proto__: dart.getMethods(popup_state.PopupState.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(popup_state.PopupState, () => ({
    __proto__: dart.getGetters(popup_state.PopupState.__proto__),
    autoDismiss: dart.legacy(core.bool),
    enforceSpaceConstraints: dart.legacy(core.bool),
    matchMinSourceWidth: dart.legacy(core.bool),
    source: dart.legacy(popup_source.PopupSource),
    offsetX: dart.legacy(core.int),
    offsetY: dart.legacy(core.int),
    preferredPositions: dart.legacy(core.Iterable$(dart.legacy(core.Object))),
    trackLayoutChanges: dart.legacy(core.bool),
    constrainToViewport: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(popup_state.PopupState, () => ({
    __proto__: dart.getSetters(popup_state.PopupState.__proto__),
    autoDismiss: dart.legacy(core.bool),
    enforceSpaceConstraints: dart.legacy(core.bool),
    matchMinSourceWidth: dart.legacy(core.bool),
    source: dart.legacy(popup_source.PopupSource),
    offsetX: dart.legacy(core.int),
    offsetY: dart.legacy(core.int),
    preferredPositions: dart.legacy(core.Iterable$(dart.legacy(core.Object))),
    trackLayoutChanges: dart.legacy(core.bool),
    constrainToViewport: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(popup_state.PopupState, L1);
  dart.setFieldSignature(popup_state.PopupState, () => ({
    __proto__: dart.getFields(popup_state.PopupState.__proto__),
    [_backingMap$]: dart.finalFieldType(dart.legacy(observable_map.ObservableMap$(dart.legacy(core.Symbol), dart.legacy(core.Object))))
  }));
  dart.defineExtensionMethods(popup_state.PopupState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(popup_state.PopupState, ['hashCode']);
  var _minHeight = dart.privateName(popup_size_provider_directive, "_minHeight");
  var _minWidth = dart.privateName(popup_size_provider_directive, "_minWidth");
  var _maxHeight = dart.privateName(popup_size_provider_directive, "_maxHeight");
  var _maxWidth = dart.privateName(popup_size_provider_directive, "_maxWidth");
  var _parentPopupSizeProvider$ = dart.privateName(popup_size_provider_directive, "_parentPopupSizeProvider");
  popup_size_provider_directive.PopupSizeProviderDirective = class PopupSizeProviderDirective extends core.Object {
    getMinWidth(positionX, viewportWidth) {
      return this[_minWidth] == null ? this[_parentPopupSizeProvider$].getMinWidth(positionX, viewportWidth) : this[_minWidth].getPixels(viewportWidth);
    }
    getMinHeight(positionY, viewportHeight) {
      return this[_minHeight] == null ? this[_parentPopupSizeProvider$].getMinHeight(positionY, viewportHeight) : this[_minHeight].getPixels(viewportHeight);
    }
    getMaxWidth(positionX, viewportWidth) {
      return this[_maxWidth] == null ? this[_parentPopupSizeProvider$].getMaxWidth(positionX, viewportWidth) : this[_maxWidth].getPixels(viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      return this[_maxHeight] == null ? this[_parentPopupSizeProvider$].getMaxHeight(positionY, viewportHeight) : this[_maxHeight].getPixels(viewportHeight);
    }
  };
  (popup_size_provider_directive.PopupSizeProviderDirective.new = function(minHeight, minWidth, maxHeight, maxWidth, _parentPopupSizeProvider) {
    this[_minHeight] = null;
    this[_minWidth] = null;
    this[_maxHeight] = null;
    this[_maxWidth] = null;
    this[_parentPopupSizeProvider$] = _parentPopupSizeProvider;
    this[_minHeight] = minHeight == null ? null : popup_size_provider_directive._SizeDefinition.fromString(minHeight);
    this[_minWidth] = minWidth == null ? null : popup_size_provider_directive._SizeDefinition.fromString(minWidth);
    this[_maxHeight] = maxHeight == null ? null : popup_size_provider_directive._SizeDefinition.fromString(maxHeight);
    this[_maxWidth] = maxWidth == null ? null : popup_size_provider_directive._SizeDefinition.fromString(maxWidth);
    if ((this[_minHeight] == null || this[_minWidth] == null || this[_maxHeight] == null || this[_maxWidth] == null) && this[_parentPopupSizeProvider$] == null) {
      this[_parentPopupSizeProvider$] = new popup_size_provider.PercentagePopupSizeProvider.new(0.7, 0.5);
    }
  }).prototype = popup_size_provider_directive.PopupSizeProviderDirective.prototype;
  dart.addTypeTests(popup_size_provider_directive.PopupSizeProviderDirective);
  dart.addTypeCaches(popup_size_provider_directive.PopupSizeProviderDirective);
  popup_size_provider_directive.PopupSizeProviderDirective[dart.implements] = () => [popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(popup_size_provider_directive.PopupSizeProviderDirective, () => ({
    __proto__: dart.getMethods(popup_size_provider_directive.PopupSizeProviderDirective.__proto__),
    getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)])
  }));
  dart.setLibraryUri(popup_size_provider_directive.PopupSizeProviderDirective, L2);
  dart.setFieldSignature(popup_size_provider_directive.PopupSizeProviderDirective, () => ({
    __proto__: dart.getFields(popup_size_provider_directive.PopupSizeProviderDirective.__proto__),
    [_minHeight]: dart.fieldType(dart.legacy(popup_size_provider_directive._SizeDefinition)),
    [_minWidth]: dart.fieldType(dart.legacy(popup_size_provider_directive._SizeDefinition)),
    [_maxHeight]: dart.fieldType(dart.legacy(popup_size_provider_directive._SizeDefinition)),
    [_maxWidth]: dart.fieldType(dart.legacy(popup_size_provider_directive._SizeDefinition)),
    [_parentPopupSizeProvider$]: dart.fieldType(dart.legacy(popup_size_provider.PopupSizeProvider))
  }));
  popup_size_provider_directive._SizeDefinition = class _SizeDefinition extends core.Object {
    static fromString(attribute) {
      let match = popup_size_provider_directive._SizeDefinition._parseAttribute.firstMatch(attribute);
      if (match == null) dart.throw(new core.StateError.new("Invalid size string: " + dart.str(attribute)));
      let size = core.num.parse(match.group(1));
      let unit = match.group(2)[$toLowerCase]();
      switch (unit) {
        case "px":
        {
          return new popup_size_provider_directive._PixelSizeDefinition.new(size);
        }
        case "%":
        {
          return new popup_size_provider_directive._PercentSizeDefinition.new(size);
        }
        default:
        {
          dart.throw(new core.StateError.new("Invalid unit for size string: " + dart.str(attribute)));
        }
      }
    }
  };
  (popup_size_provider_directive._SizeDefinition[dart.mixinNew] = function() {
  }).prototype = popup_size_provider_directive._SizeDefinition.prototype;
  dart.addTypeTests(popup_size_provider_directive._SizeDefinition);
  dart.addTypeCaches(popup_size_provider_directive._SizeDefinition);
  dart.setLibraryUri(popup_size_provider_directive._SizeDefinition, L2);
  dart.defineLazy(popup_size_provider_directive._SizeDefinition, {
    /*popup_size_provider_directive._SizeDefinition._parseAttribute*/get _parseAttribute() {
      return core.RegExp.new("([\\d.]+)\\s*([^\\d\\s]+)");
    }
  }, true);
  var _size = dart.privateName(popup_size_provider_directive, "_size");
  var _size$ = dart.privateName(popup_size_provider_directive, "_PixelSizeDefinition._size");
  popup_size_provider_directive._PixelSizeDefinition = class _PixelSizeDefinition extends core.Object {
    get [_size]() {
      return this[_size$];
    }
    set [_size](value) {
      super[_size] = value;
    }
    getPixels(viewportSize) {
      return this[_size];
    }
  };
  (popup_size_provider_directive._PixelSizeDefinition.new = function(_size) {
    this[_size$] = _size;
    ;
  }).prototype = popup_size_provider_directive._PixelSizeDefinition.prototype;
  dart.addTypeTests(popup_size_provider_directive._PixelSizeDefinition);
  dart.addTypeCaches(popup_size_provider_directive._PixelSizeDefinition);
  popup_size_provider_directive._PixelSizeDefinition[dart.implements] = () => [popup_size_provider_directive._SizeDefinition];
  dart.setMethodSignature(popup_size_provider_directive._PixelSizeDefinition, () => ({
    __proto__: dart.getMethods(popup_size_provider_directive._PixelSizeDefinition.__proto__),
    getPixels: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num)])
  }));
  dart.setLibraryUri(popup_size_provider_directive._PixelSizeDefinition, L2);
  dart.setFieldSignature(popup_size_provider_directive._PixelSizeDefinition, () => ({
    __proto__: dart.getFields(popup_size_provider_directive._PixelSizeDefinition.__proto__),
    [_size]: dart.finalFieldType(dart.legacy(core.num))
  }));
  var _percent = dart.privateName(popup_size_provider_directive, "_percent");
  var _percent$ = dart.privateName(popup_size_provider_directive, "_PercentSizeDefinition._percent");
  popup_size_provider_directive._PercentSizeDefinition = class _PercentSizeDefinition extends core.Object {
    get [_percent]() {
      return this[_percent$];
    }
    set [_percent](value) {
      super[_percent] = value;
    }
    getPixels(viewportSize) {
      return dart.notNull(viewportSize) * dart.notNull(this[_percent]) / 100;
    }
  };
  (popup_size_provider_directive._PercentSizeDefinition.new = function(_percent) {
    this[_percent$] = _percent;
    ;
  }).prototype = popup_size_provider_directive._PercentSizeDefinition.prototype;
  dart.addTypeTests(popup_size_provider_directive._PercentSizeDefinition);
  dart.addTypeCaches(popup_size_provider_directive._PercentSizeDefinition);
  popup_size_provider_directive._PercentSizeDefinition[dart.implements] = () => [popup_size_provider_directive._SizeDefinition];
  dart.setMethodSignature(popup_size_provider_directive._PercentSizeDefinition, () => ({
    __proto__: dart.getMethods(popup_size_provider_directive._PercentSizeDefinition.__proto__),
    getPixels: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num)])
  }));
  dart.setLibraryUri(popup_size_provider_directive._PercentSizeDefinition, L2);
  dart.setFieldSignature(popup_size_provider_directive._PercentSizeDefinition, () => ({
    __proto__: dart.getFields(popup_size_provider_directive._PercentSizeDefinition.__proto__),
    [_percent]: dart.finalFieldType(dart.legacy(core.num))
  }));
  popup_size_provider_directive.PopupWithinViewportDirective = class PopupWithinViewportDirective extends core.Object {};
  (popup_size_provider_directive.PopupWithinViewportDirective.new = function() {
    ;
  }).prototype = popup_size_provider_directive.PopupWithinViewportDirective.prototype;
  dart.addTypeTests(popup_size_provider_directive.PopupWithinViewportDirective);
  dart.addTypeCaches(popup_size_provider_directive.PopupWithinViewportDirective);
  dart.setLibraryUri(popup_size_provider_directive.PopupWithinViewportDirective, L2);
  popup_size_provider.PopupSizeProvider = class PopupSizeProvider extends core.Object {};
  (popup_size_provider.PopupSizeProvider.new = function() {
    ;
  }).prototype = popup_size_provider.PopupSizeProvider.prototype;
  dart.addTypeTests(popup_size_provider.PopupSizeProvider);
  dart.addTypeCaches(popup_size_provider.PopupSizeProvider);
  dart.setLibraryUri(popup_size_provider.PopupSizeProvider, L3);
  var _minWidthPercentage = dart.privateName(popup_size_provider, "_minWidthPercentage");
  var _minHeightPercentage = dart.privateName(popup_size_provider, "_minHeightPercentage");
  var _maxWidthPercentage = dart.privateName(popup_size_provider, "_maxWidthPercentage");
  var _maxHeightPercentage = dart.privateName(popup_size_provider, "_maxHeightPercentage");
  var _minWidthPercentage$ = dart.privateName(popup_size_provider, "PercentagePopupSizeProvider._minWidthPercentage");
  var _minHeightPercentage$ = dart.privateName(popup_size_provider, "PercentagePopupSizeProvider._minHeightPercentage");
  var _maxWidthPercentage$ = dart.privateName(popup_size_provider, "PercentagePopupSizeProvider._maxWidthPercentage");
  var _maxHeightPercentage$ = dart.privateName(popup_size_provider, "PercentagePopupSizeProvider._maxHeightPercentage");
  popup_size_provider.PercentagePopupSizeProvider = class PercentagePopupSizeProvider extends core.Object {
    get [_minWidthPercentage]() {
      return this[_minWidthPercentage$];
    }
    set [_minWidthPercentage](value) {
      super[_minWidthPercentage] = value;
    }
    get [_minHeightPercentage]() {
      return this[_minHeightPercentage$];
    }
    set [_minHeightPercentage](value) {
      super[_minHeightPercentage] = value;
    }
    get [_maxWidthPercentage]() {
      return this[_maxWidthPercentage$];
    }
    set [_maxWidthPercentage](value) {
      super[_maxWidthPercentage] = value;
    }
    get [_maxHeightPercentage]() {
      return this[_maxHeightPercentage$];
    }
    set [_maxHeightPercentage](value) {
      super[_maxHeightPercentage] = value;
    }
    getMinHeight(positionY, viewportHeight) {
      return this[_minHeightPercentage] == null ? null : dart.notNull(viewportHeight) * dart.notNull(this[_minHeightPercentage]);
    }
    getMinWidth(positionX, viewportWidth) {
      return this[_minWidthPercentage] == null ? null : dart.notNull(viewportWidth) * dart.notNull(this[_minWidthPercentage]);
    }
    getMaxWidth(_, viewportWidth) {
      return dart.notNull(viewportWidth) * dart.notNull(this[_maxWidthPercentage]);
    }
    getMaxHeight(_, viewportHeight) {
      return dart.notNull(viewportHeight) * dart.notNull(this[_maxHeightPercentage]);
    }
  };
  (popup_size_provider.PercentagePopupSizeProvider.new = function(maxWidthPercentage = null, maxHeightPercentage = null, minWidthPercentage = null, minHeightPercentage = null) {
    let t0, t0$;
    this[_minWidthPercentage$] = minWidthPercentage;
    this[_minHeightPercentage$] = minHeightPercentage;
    this[_maxWidthPercentage$] = (t0 = maxWidthPercentage, t0 == null ? 0.7 : t0);
    this[_maxHeightPercentage$] = (t0$ = maxHeightPercentage, t0$ == null ? 0.5 : t0$);
    ;
  }).prototype = popup_size_provider.PercentagePopupSizeProvider.prototype;
  dart.addTypeTests(popup_size_provider.PercentagePopupSizeProvider);
  dart.addTypeCaches(popup_size_provider.PercentagePopupSizeProvider);
  popup_size_provider.PercentagePopupSizeProvider[dart.implements] = () => [popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(popup_size_provider.PercentagePopupSizeProvider, () => ({
    __proto__: dart.getMethods(popup_size_provider.PercentagePopupSizeProvider.__proto__),
    getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)])
  }));
  dart.setLibraryUri(popup_size_provider.PercentagePopupSizeProvider, L3);
  dart.setFieldSignature(popup_size_provider.PercentagePopupSizeProvider, () => ({
    __proto__: dart.getFields(popup_size_provider.PercentagePopupSizeProvider.__proto__),
    [_minWidthPercentage]: dart.finalFieldType(dart.legacy(core.num)),
    [_minHeightPercentage]: dart.finalFieldType(dart.legacy(core.num)),
    [_maxWidthPercentage]: dart.finalFieldType(dart.legacy(core.num)),
    [_maxHeightPercentage]: dart.finalFieldType(dart.legacy(core.num))
  }));
  popup_size_provider.WithinViewportPopupSizeProvider = class WithinViewportPopupSizeProvider extends core.Object {
    getMaxHeight(positionY, viewportHeight) {
      return dart.notNull(viewportHeight) - dart.notNull(positionY) - 8;
    }
    getMaxWidth(positionX, viewportWidth) {
      return dart.notNull(viewportWidth) - dart.notNull(positionX) - 8;
    }
    getMinHeight(positionY, viewportHeight) {
      return null;
    }
    getMinWidth(positionX, viewportWidth) {
      return null;
    }
  };
  (popup_size_provider.WithinViewportPopupSizeProvider.new = function() {
    ;
  }).prototype = popup_size_provider.WithinViewportPopupSizeProvider.prototype;
  dart.addTypeTests(popup_size_provider.WithinViewportPopupSizeProvider);
  dart.addTypeCaches(popup_size_provider.WithinViewportPopupSizeProvider);
  popup_size_provider.WithinViewportPopupSizeProvider[dart.implements] = () => [popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(popup_size_provider.WithinViewportPopupSizeProvider, () => ({
    __proto__: dart.getMethods(popup_size_provider.WithinViewportPopupSizeProvider.__proto__),
    getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)])
  }));
  dart.setLibraryUri(popup_size_provider.WithinViewportPopupSizeProvider, L3);
  dart.defineLazy(popup_size_provider.WithinViewportPopupSizeProvider, {
    /*popup_size_provider.WithinViewportPopupSizeProvider._paddingPixels*/get _paddingPixels() {
      return 8;
    }
  }, true);
  var _minWidth$ = dart.privateName(popup_size_provider, "_minWidth");
  var _minHeight$ = dart.privateName(popup_size_provider, "_minHeight");
  var _maxWidth$ = dart.privateName(popup_size_provider, "_maxWidth");
  var _maxHeight$ = dart.privateName(popup_size_provider, "_maxHeight");
  var _minWidth$0 = dart.privateName(popup_size_provider, "FixedPopupSizeProvider._minWidth");
  var _minHeight$0 = dart.privateName(popup_size_provider, "FixedPopupSizeProvider._minHeight");
  var _maxWidth$0 = dart.privateName(popup_size_provider, "FixedPopupSizeProvider._maxWidth");
  var _maxHeight$0 = dart.privateName(popup_size_provider, "FixedPopupSizeProvider._maxHeight");
  popup_size_provider.FixedPopupSizeProvider = class FixedPopupSizeProvider extends core.Object {
    get [_minWidth$]() {
      return this[_minWidth$0];
    }
    set [_minWidth$](value) {
      super[_minWidth$] = value;
    }
    get [_minHeight$]() {
      return this[_minHeight$0];
    }
    set [_minHeight$](value) {
      super[_minHeight$] = value;
    }
    get [_maxWidth$]() {
      return this[_maxWidth$0];
    }
    set [_maxWidth$](value) {
      super[_maxWidth$] = value;
    }
    get [_maxHeight$]() {
      return this[_maxHeight$0];
    }
    set [_maxHeight$](value) {
      super[_maxHeight$] = value;
    }
    getMinWidth(_, __) {
      return this[_minWidth$];
    }
    getMinHeight(_, __) {
      return this[_minHeight$];
    }
    getMaxWidth(_, __) {
      return this[_maxWidth$];
    }
    getMaxHeight(_, __) {
      return this[_maxHeight$];
    }
  };
  (popup_size_provider.FixedPopupSizeProvider.new = function(opts) {
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    this[_minWidth$0] = minWidth;
    this[_minHeight$0] = minHeight;
    this[_maxWidth$0] = maxWidth;
    this[_maxHeight$0] = maxHeight;
    ;
  }).prototype = popup_size_provider.FixedPopupSizeProvider.prototype;
  dart.addTypeTests(popup_size_provider.FixedPopupSizeProvider);
  dart.addTypeCaches(popup_size_provider.FixedPopupSizeProvider);
  popup_size_provider.FixedPopupSizeProvider[dart.implements] = () => [popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(popup_size_provider.FixedPopupSizeProvider, () => ({
    __proto__: dart.getMethods(popup_size_provider.FixedPopupSizeProvider.__proto__),
    getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)])
  }));
  dart.setLibraryUri(popup_size_provider.FixedPopupSizeProvider, L3);
  dart.setFieldSignature(popup_size_provider.FixedPopupSizeProvider, () => ({
    __proto__: dart.getFields(popup_size_provider.FixedPopupSizeProvider.__proto__),
    [_minWidth$]: dart.finalFieldType(dart.legacy(core.num)),
    [_minHeight$]: dart.finalFieldType(dart.legacy(core.num)),
    [_maxWidth$]: dart.finalFieldType(dart.legacy(core.num)),
    [_maxHeight$]: dart.finalFieldType(dart.legacy(core.num))
  }));
  var C10;
  dart.defineLazy(popup_size_provider, {
    /*popup_size_provider.unboundedPopupSize*/get unboundedPopupSize() {
      return C10 || CT.C10;
    }
  }, true);
  popup_position_mixin.PopupPosition = class PopupPosition extends core.Object {};
  (popup_position_mixin.PopupPosition.new = function() {
    ;
  }).prototype = popup_position_mixin.PopupPosition.prototype;
  dart.addTypeTests(popup_position_mixin.PopupPosition);
  dart.addTypeCaches(popup_position_mixin.PopupPosition);
  dart.setLibraryUri(popup_position_mixin.PopupPosition, L4);
  dart.defineLazy(popup_position_mixin.PopupPosition, {
    /*popup_position_mixin.PopupPosition.AUTO*/get AUTO() {
      return "";
    },
    /*popup_position_mixin.PopupPosition.ABOVE*/get ABOVE() {
      return "above";
    },
    /*popup_position_mixin.PopupPosition.BELOW*/get BELOW() {
      return "below";
    }
  }, true);
  var _popupPosition = dart.privateName(popup_position_mixin, "_popupPosition");
  var _popupPositions = dart.privateName(popup_position_mixin, "_popupPositions");
  var C11;
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var _CustomAlignment_cssClassY = dart.privateName(alignment, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment, "_CustomAlignment.cssClassX");
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C14;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var C15;
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C13;
  var C17;
  var C16;
  var C12;
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C20;
  var C19;
  var C21;
  var C18;
  var delegatePopupSizeProvider = dart.privateName(popup_position_mixin, "PopupPositionMixin.delegatePopupSizeProvider");
  popup_position_mixin.PopupPositionMixin = class PopupPositionMixin extends core.Object {
    get delegatePopupSizeProvider() {
      return this[delegatePopupSizeProvider];
    }
    set delegatePopupSizeProvider(value) {
      this[delegatePopupSizeProvider] = value;
    }
    getMinWidth(positionX, viewportWidth) {
      return this.delegatePopupSizeProvider.getMinWidth(positionX, viewportWidth);
    }
    getMinHeight(positionY, viewportHeight) {
      return this.delegatePopupSizeProvider.getMinHeight(positionY, viewportHeight);
    }
    getMaxWidth(positionX, viewportWidth) {
      return this.delegatePopupSizeProvider.getMaxHeight(positionX, viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      let maxHeight = this.delegatePopupSizeProvider.getMaxHeight(positionY, viewportHeight);
      if (this[_popupPosition] === "below") {
        return math.max(numL(), 40, math.min(numL(), dart.notNull(viewportHeight) - dart.notNull(positionY) - 4, maxHeight));
      } else {
        return maxHeight;
      }
    }
    get popupPositions() {
      return this[_popupPositions];
    }
    set popupPosition(position) {
      this[_popupPosition] = position;
      switch (this[_popupPosition]) {
        case "above":
        {
          this[_popupPositions] = C12 || CT.C12;
          break;
        }
        case "below":
        {
          this[_popupPositions] = C18 || CT.C18;
          break;
        }
        case "":
        default:
        {
          this[_popupPositions] = C11 || CT.C11;
        }
      }
    }
  };
  (popup_position_mixin.PopupPositionMixin.new = function() {
    this[delegatePopupSizeProvider] = new popup_size_provider.PercentagePopupSizeProvider.new();
    this[_popupPosition] = "";
    this[_popupPositions] = C11 || CT.C11;
    ;
  }).prototype = popup_position_mixin.PopupPositionMixin.prototype;
  dart.addTypeTests(popup_position_mixin.PopupPositionMixin);
  dart.addTypeCaches(popup_position_mixin.PopupPositionMixin);
  popup_position_mixin.PopupPositionMixin[dart.implements] = () => [popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getMethods(popup_position_mixin.PopupPositionMixin.__proto__),
    getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
    getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)])
  }));
  dart.setGetterSignature(popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getGetters(popup_position_mixin.PopupPositionMixin.__proto__),
    popupPositions: dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))
  }));
  dart.setSetterSignature(popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getSetters(popup_position_mixin.PopupPositionMixin.__proto__),
    popupPosition: dart.legacy(core.String)
  }));
  dart.setLibraryUri(popup_position_mixin.PopupPositionMixin, L4);
  dart.setFieldSignature(popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getFields(popup_position_mixin.PopupPositionMixin.__proto__),
    delegatePopupSizeProvider: dart.fieldType(dart.legacy(popup_size_provider.PopupSizeProvider)),
    [_popupPosition]: dart.fieldType(dart.legacy(core.String)),
    [_popupPositions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))))
  }));
  dart.defineLazy(popup_position_mixin.PopupPositionMixin, {
    /*popup_position_mixin.PopupPositionMixin._EDGE_SPACE_PX*/get _EDGE_SPACE_PX() {
      return 4;
    },
    /*popup_position_mixin.PopupPositionMixin._MIN_HEIGHT_PX*/get _MIN_HEIGHT_PX() {
      return 40;
    }
  }, true);
  var _visiblePopupStack = dart.privateName(popup_hierarchy, "_visiblePopupStack");
  var _rootPane = dart.privateName(popup_hierarchy, "_rootPane");
  var _triggerListener = dart.privateName(popup_hierarchy, "_triggerListener");
  var _keyUpListener = dart.privateName(popup_hierarchy, "_keyUpListener");
  var _lastTriggerEvent = dart.privateName(popup_hierarchy, "_lastTriggerEvent");
  var _disposeListeners = dart.privateName(popup_hierarchy, "_disposeListeners");
  var _onTrigger = dart.privateName(popup_hierarchy, "_onTrigger");
  var _onKeyUp = dart.privateName(popup_hierarchy, "_onKeyUp");
  var _attach = dart.privateName(popup_hierarchy, "_attach");
  var _detach = dart.privateName(popup_hierarchy, "_detach");
  var _isInHiddenModal = dart.privateName(popup_hierarchy, "_isInHiddenModal");
  popup_hierarchy.PopupHierarchy = class PopupHierarchy extends core.Object {
    get islastTriggerWithKeyboard() {
      return KeyboardEventL().is(this[_lastTriggerEvent]) || FocusEventL().is(this[_lastTriggerEvent]);
    }
    closeHierarchy() {
      for (let popup of this[_visiblePopupStack]) {
        popup.onDismiss();
      }
      this[_visiblePopupStack][$clear]();
      this[_disposeListeners]();
    }
    [_attach](child) {
      if (!(child != null)) dart.assertFailed(null, L5, 40, 12, "child != null");
      if (dart.test(this[_visiblePopupStack][$isEmpty])) {
        this[_rootPane] = events.closestWithClass(ElementL().as(child.elementRef.nativeElement), "pane");
      }
      this[_visiblePopupStack][$add](child);
      if (this[_triggerListener] == null) {
        this[_triggerListener] = events.triggersOutside(null).listen(dart.bind(this, _onTrigger));
      }
      if (this[_keyUpListener] == null) {
        this[_keyUpListener] = html.document[$onKeyUp].listen(dart.bind(this, _onKeyUp));
      }
    }
    [_disposeListeners]() {
      this[_triggerListener].cancel();
      this[_keyUpListener].cancel();
      this[_triggerListener] = null;
      this[_keyUpListener] = null;
    }
    [_detach](child) {
      if (dart.test(this[_visiblePopupStack][$remove](child)) && dart.test(this[_visiblePopupStack][$isEmpty])) {
        this[_rootPane] = null;
        this[_disposeListeners]();
      }
    }
    [_isInHiddenModal]() {
      let modalPanes = html.document[$querySelectorAll](ElementL(), "." + "acx-overlay-container" + " .pane.modal.visible");
      if (dart.test(modalPanes[$isNotEmpty])) {
        if (this[_rootPane] == null || !dart.equals(this[_rootPane], modalPanes[$last]) && dart.test(modalPanes[$contains](this[_rootPane]))) {
          return true;
        }
      }
      return false;
    }
    [_onTrigger](event) {
      let t0, t0$;
      if ((t0 = event, t0 == null ? null : t0[$target]) == null) return;
      this[_lastTriggerEvent] = event;
      if (dart.test(this[_isInHiddenModal]())) return;
      for (let i = dart.notNull(this[_visiblePopupStack][$length]) - 1; i >= 0; i = i - 1) {
        let current = this[_visiblePopupStack][$_get](i);
        if ((t0$ = current, t0$ == null ? null : t0$.container) == null) continue;
        if (dart.test(events.isParentOf(current.container, NodeL().as(event[$target])))) return;
        for (let blockerElement of current.autoDismissBlockers) {
          if (dart.test(events.isParentOf(blockerElement, NodeL().as(event[$target])))) return;
        }
        if (dart.test(current.autoDismiss)) current.onAutoDismiss(event);
      }
    }
    [_onKeyUp](event) {
      let t0, t0$;
      if ((t0 = event, t0 == null ? null : t0[$target]) == null) return;
      this[_lastTriggerEvent] = event;
      if (dart.test(this[_isInHiddenModal]())) return;
      if (event.keyCode === 27) {
        for (let i = dart.notNull(this[_visiblePopupStack][$length]) - 1; i >= 0; i = i - 1) {
          let current = this[_visiblePopupStack][$_get](i);
          if ((t0$ = current, t0$ == null ? null : t0$.container) == null) continue;
          if (dart.test(events.isParentOf(current.container, NodeL().as(event[$target])))) {
            event.stopPropagation();
            current.onDismiss();
            return;
          }
          for (let blockerElement of current.autoDismissBlockers) {
            if (dart.test(events.isParentOf(blockerElement, NodeL().as(event[$target])))) {
              event.stopPropagation();
              current.onDismiss();
              return;
            }
          }
        }
      }
    }
  };
  (popup_hierarchy.PopupHierarchy.new = function() {
    this[_visiblePopupStack] = JSArrayOfPopupHierarchyElementL().of([]);
    this[_rootPane] = null;
    this[_triggerListener] = null;
    this[_keyUpListener] = null;
    this[_lastTriggerEvent] = null;
    ;
  }).prototype = popup_hierarchy.PopupHierarchy.prototype;
  dart.addTypeTests(popup_hierarchy.PopupHierarchy);
  dart.addTypeCaches(popup_hierarchy.PopupHierarchy);
  dart.setMethodSignature(popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getMethods(popup_hierarchy.PopupHierarchy.__proto__),
    closeHierarchy: dart.fnType(dart.void, []),
    [_attach]: dart.fnType(dart.void, [dart.legacy(popup_hierarchy.PopupHierarchyElement)]),
    [_disposeListeners]: dart.fnType(dart.void, []),
    [_detach]: dart.fnType(dart.void, [dart.legacy(popup_hierarchy.PopupHierarchyElement)]),
    [_isInHiddenModal]: dart.fnType(dart.legacy(core.bool), []),
    [_onTrigger]: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    [_onKeyUp]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setGetterSignature(popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getGetters(popup_hierarchy.PopupHierarchy.__proto__),
    islastTriggerWithKeyboard: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(popup_hierarchy.PopupHierarchy, L6);
  dart.setFieldSignature(popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getFields(popup_hierarchy.PopupHierarchy.__proto__),
    [_visiblePopupStack]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(popup_hierarchy.PopupHierarchyElement)))),
    [_rootPane]: dart.fieldType(dart.legacy(html.Element)),
    [_triggerListener]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.Event)))),
    [_keyUpListener]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.Event)))),
    [_lastTriggerEvent]: dart.fieldType(dart.legacy(html.Event))
  }));
  popup_hierarchy.PopupHierarchyElement = class PopupHierarchyElement extends core.Object {
    get elementRef() {
      return null;
    }
    attachToVisibleHierarchy() {
      this.hierarchy[_attach](this);
    }
    detachFromVisibleHierarchy() {
      this.hierarchy[_detach](this);
    }
    onAutoDismiss(event) {
      this.onDismiss();
    }
  };
  (popup_hierarchy.PopupHierarchyElement.new = function() {
    ;
  }).prototype = popup_hierarchy.PopupHierarchyElement.prototype;
  dart.addTypeTests(popup_hierarchy.PopupHierarchyElement);
  dart.addTypeCaches(popup_hierarchy.PopupHierarchyElement);
  dart.setMethodSignature(popup_hierarchy.PopupHierarchyElement, () => ({
    __proto__: dart.getMethods(popup_hierarchy.PopupHierarchyElement.__proto__),
    attachToVisibleHierarchy: dart.fnType(dart.void, []),
    detachFromVisibleHierarchy: dart.fnType(dart.void, []),
    onAutoDismiss: dart.fnType(dart.void, [dart.legacy(html.Event)])
  }));
  dart.setGetterSignature(popup_hierarchy.PopupHierarchyElement, () => ({
    __proto__: dart.getGetters(popup_hierarchy.PopupHierarchyElement.__proto__),
    elementRef: dart.legacy(element_ref.ElementRef)
  }));
  dart.setLibraryUri(popup_hierarchy.PopupHierarchyElement, L6);
  popup_ref.PopupRef = class PopupRef extends core.Object {};
  (popup_ref.PopupRef.new = function() {
    ;
  }).prototype = popup_ref.PopupRef.prototype;
  dart.addTypeTests(popup_ref.PopupRef);
  dart.addTypeCaches(popup_ref.PopupRef);
  dart.setLibraryUri(popup_ref.PopupRef, L7);
  var _alignOriginX = dart.privateName(popup_source_directive, "_alignOriginX");
  var _alignOriginY = dart.privateName(popup_source_directive, "_alignOriginY");
  var _popupSource = dart.privateName(popup_source_directive, "_popupSource");
  var _popupId = dart.privateName(popup_source_directive, "_popupId");
  var _domPopupSourceFactory$ = dart.privateName(popup_source_directive, "_domPopupSourceFactory");
  var _element$ = dart.privateName(popup_source_directive, "_element");
  var _referenceDirective$ = dart.privateName(popup_source_directive, "_referenceDirective");
  var _focusable$ = dart.privateName(popup_source_directive, "_focusable");
  var _initAriaAttributes = dart.privateName(popup_source_directive, "_initAriaAttributes");
  var _updateSource = dart.privateName(popup_source_directive, "_updateSource");
  popup_source_directive.PopupSourceDirective = class PopupSourceDirective extends core.Object {
    ngOnDestroy() {
      this[_element$] = null;
      this[_popupSource] = null;
      this[_referenceDirective$] = null;
      this[_focusable$] = null;
    }
    ngAfterViewInit() {
      let t0, t0$, t0$0;
      this[_element$] = HtmlElementL().as((t0$0 = (t0$ = (t0 = this[_referenceDirective$], t0 == null ? null : t0.elementRef), t0$ == null ? null : t0$.nativeElement), t0$0 == null ? this[_element$] : t0$0));
      this[_updateSource]();
    }
    get sourceElement() {
      return this[_element$];
    }
    get alignOriginX() {
      return this[_popupSource].alignOriginX;
    }
    set alignX(align) {
      this[_alignOriginX] = alignment.Alignment.parse(align);
      this[_updateSource]();
    }
    get alignOriginY() {
      return this[_popupSource].alignOriginY;
    }
    set alignY(align) {
      this[_alignOriginY] = alignment.Alignment.parse(align);
      this[_updateSource]();
    }
    onDimensionsChanged(opts) {
      let t0, t0$;
      let track = opts && 'track' in opts ? opts.track : false;
      t0$ = (t0 = this[_popupSource], t0 == null ? null : t0.onDimensionsChanged({track: track}));
      return t0$ == null ? null : t0$.distinct();
    }
    get dimensions() {
      let t0;
      t0 = this[_popupSource];
      return t0 == null ? null : t0.dimensions;
    }
    get isRtl() {
      return this[_popupSource].isRtl;
    }
    set popupId(id) {
      let t0;
      this[_popupId] = id;
      t0 = this[_popupSource];
      t0 == null ? null : t0.popupId = id;
    }
    [_updateSource]() {
      this[_popupSource] = this[_domPopupSourceFactory$].createPopupSource(this[_element$], {alignOriginX: this[_alignOriginX], alignOriginY: this[_alignOriginY], initAriaAttributes: this[_initAriaAttributes]});
      if (this[_popupId] != null) {
        this[_popupSource].popupId = this[_popupId];
      }
    }
    focus() {
      let t0;
      if (this[_focusable$] != null) {
        this[_focusable$].focus();
      } else {
        t0 = this[_element$];
        t0 == null ? null : t0.focus();
      }
    }
    onOpen() {
      let t0;
      t0 = this[_popupSource];
      t0 == null ? null : t0.onOpen();
    }
    onClose() {
      let t0;
      t0 = this[_popupSource];
      t0 == null ? null : t0.onClose();
    }
  };
  (popup_source_directive.PopupSourceDirective.new = function(_domPopupSourceFactory, _element, _referenceDirective, _focusable, initAriaAttributes) {
    this[_alignOriginX] = alignment.Alignment.Start;
    this[_alignOriginY] = alignment.Alignment.Start;
    this[_popupSource] = null;
    this[_popupId] = null;
    this[_domPopupSourceFactory$] = _domPopupSourceFactory;
    this[_element$] = _element;
    this[_referenceDirective$] = _referenceDirective;
    this[_focusable$] = _focusable;
    this[_initAriaAttributes] = properties.attributeToBool(initAriaAttributes, {defaultValue: true});
    ;
  }).prototype = popup_source_directive.PopupSourceDirective.prototype;
  dart.addTypeTests(popup_source_directive.PopupSourceDirective);
  dart.addTypeCaches(popup_source_directive.PopupSourceDirective);
  popup_source_directive.PopupSourceDirective[dart.implements] = () => [popup_source.ElementPopupSource, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getMethods(popup_source_directive.PopupSourceDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    onDimensionsChanged: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(dart.legacy(core.num))))), [], {track: dart.legacy(core.bool)}, {}),
    [_updateSource]: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    onOpen: dart.fnType(dart.void, []),
    onClose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getGetters(popup_source_directive.PopupSourceDirective.__proto__),
    sourceElement: dart.legacy(html.HtmlElement),
    alignOriginX: dart.legacy(alignment.Alignment),
    alignOriginY: dart.legacy(alignment.Alignment),
    dimensions: dart.legacy(math.Rectangle$(core.num)),
    isRtl: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getSetters(popup_source_directive.PopupSourceDirective.__proto__),
    alignX: dart.legacy(core.String),
    alignY: dart.legacy(core.String),
    popupId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(popup_source_directive.PopupSourceDirective, L8);
  dart.setFieldSignature(popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getFields(popup_source_directive.PopupSourceDirective.__proto__),
    [_domPopupSourceFactory$]: dart.finalFieldType(dart.legacy(dom_popup_source.DomPopupSourceFactory)),
    [_initAriaAttributes]: dart.finalFieldType(dart.legacy(core.bool)),
    [_element$]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_referenceDirective$]: dart.fieldType(dart.legacy(reference.ReferenceDirective)),
    [_focusable$]: dart.fieldType(dart.legacy(focus_interface.Focusable)),
    [_alignOriginX]: dart.fieldType(dart.legacy(alignment.Alignment)),
    [_alignOriginY]: dart.fieldType(dart.legacy(alignment.Alignment)),
    [_popupSource]: dart.fieldType(dart.legacy(popup_source.PopupSource)),
    [_popupId]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_hierarchy", {
    "package:angular_components/src/laminate/popup/popup_interface.dart": popup_interface,
    "package:angular_components/src/laminate/popup/popup_state.dart": popup_state,
    "package:angular_components/src/laminate/popup/popup_size_provider_directive.dart": popup_size_provider_directive,
    "package:angular_components/src/laminate/popup/popup_size_provider.dart": popup_size_provider,
    "package:angular_components/src/laminate/popup/popup_position_mixin.dart": popup_position_mixin,
    "package:angular_components/src/laminate/popup/popup_hierarchy.dart": popup_hierarchy,
    "package:angular_components/src/laminate/popup/popup_ref.dart": popup_ref,
    "package:angular_components/src/laminate/popup/popup_source_directive.dart": popup_source_directive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["popup_interface.dart","popup_state.dart","popup_size_provider_directive.dart","popup_size_provider.dart","popup_position_mixin.dart","popup_hierarchy.dart","popup_ref.dart","popup_source_directive.dart"],"names":[],"mappings":"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","file":"popup_hierarchy.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_interface: popup_interface,
    src__laminate__popup__popup_state: popup_state,
    src__laminate__popup__popup_size_provider_directive: popup_size_provider_directive,
    src__laminate__popup__popup_size_provider: popup_size_provider,
    src__laminate__popup__popup_position_mixin: popup_position_mixin,
    src__laminate__popup__popup_hierarchy: popup_hierarchy,
    src__laminate__popup__popup_ref: popup_ref,
    src__laminate__popup__popup_source_directive: popup_source_directive
  };
}));

//# sourceMappingURL=popup_hierarchy.unsound.ddc.js.map
