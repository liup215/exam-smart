define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/annotations/rtl_annotation'], (function load__packages__angular_components__src__laminate__popup__dom_popup_source(dart_sdk, packages__angular_components__laminate__enums__alignment, packages__angular_components__focus__focus_interface, packages__angular_components__laminate__ruler__dom_ruler, packages__angular_components__annotations__rtl_annotation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const dom_ruler = packages__angular_components__laminate__ruler__dom_ruler.laminate__ruler__dom_ruler;
  const rtl_annotation = packages__angular_components__annotations__rtl_annotation.annotations__rtl_annotation;
  var popup_source = Object.create(dart.library);
  var dom_popup_source = Object.create(dart.library);
  var $setAttribute = dartx.setAttribute;
  var $toString = dartx.toString;
  var $attributes = dartx.attributes;
  var $remove = dartx.remove;
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  var StreamOfRectangleLOfnum = () => (StreamOfRectangleLOfnum = dart.constFn(async.Stream$(RectangleLOfnum())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var RectangleOfnumL = () => (RectangleOfnumL = dart.constFn(math.Rectangle$(numL())))();
  var RectangleLOfnumL = () => (RectangleLOfnumL = dart.constFn(dart.legacy(RectangleOfnumL())))();
  var JSArrayOfRectangleLOfnumL = () => (JSArrayOfRectangleLOfnumL = dart.constFn(_interceptors.JSArray$(RectangleLOfnumL())))();
  var PointOfnumL = () => (PointOfnumL = dart.constFn(math.Point$(numL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var AlignmentL = () => (AlignmentL = dart.constFn(dart.legacy(alignment.Alignment)))();
  var IdentityMapOfStringL$AlignmentL = () => (IdentityMapOfStringL$AlignmentL = dart.constFn(_js_helper.IdentityMap$(StringL(), AlignmentL())))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/src/laminate/popup/dom_popup_source.dart";
  var L0 = "package:angular_components/src/laminate/popup/popup_source.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: PointOfnumL().prototype,
        [Point_y]: 0,
        [Point_x]: 0
      });
    }
  }, false);
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var C0;
  popup_source.PopupSource = class PopupSource extends core.Object {
    static fromRectangle(rectangle, opts) {
      let alignX = opts && 'alignX' in opts ? opts.alignX : C0 || CT.C0;
      let alignY = opts && 'alignY' in opts ? opts.alignY : C0 || CT.C0;
      return new popup_source._RectanglePopupSource.new(rectangle, {alignOriginX: alignX, alignOriginY: alignY});
    }
  };
  (popup_source.PopupSource[dart.mixinNew] = function() {
  }).prototype = popup_source.PopupSource.prototype;
  dart.addTypeTests(popup_source.PopupSource);
  dart.addTypeCaches(popup_source.PopupSource);
  dart.setLibraryUri(popup_source.PopupSource, L0);
  popup_source.ElementPopupSource = class ElementPopupSource extends core.Object {
    get dimensions() {
      return this.sourceElement.getBoundingClientRect();
    }
  };
  (popup_source.ElementPopupSource.new = function() {
    ;
  }).prototype = popup_source.ElementPopupSource.prototype;
  dart.addTypeTests(popup_source.ElementPopupSource);
  dart.addTypeCaches(popup_source.ElementPopupSource);
  popup_source.ElementPopupSource[dart.implements] = () => [popup_source.PopupSource, focus_interface.Focusable];
  dart.setGetterSignature(popup_source.ElementPopupSource, () => ({
    __proto__: dart.getGetters(popup_source.ElementPopupSource.__proto__),
    dimensions: dart.legacy(math.Rectangle$(core.num))
  }));
  dart.setLibraryUri(popup_source.ElementPopupSource, L0);
  var _predefinedRectangle$ = dart.privateName(popup_source, "_predefinedRectangle");
  popup_source._RectanglePopupSource = class _RectanglePopupSource extends core.Object {
    onDimensionsChanged(opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return StreamOfRectangleLOfnum().fromIterable(JSArrayOfRectangleLOfnumL().of([this[_predefinedRectangle$]]));
    }
    get dimensions() {
      return this[_predefinedRectangle$];
    }
    set popupId(id) {
    }
    onOpen() {
    }
    onClose() {
    }
  };
  (popup_source._RectanglePopupSource.new = function(_predefinedRectangle, opts) {
    let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : null;
    let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : null;
    this.isRtl = false;
    this[_predefinedRectangle$] = _predefinedRectangle;
    this.alignOriginX = alignOriginX;
    this.alignOriginY = alignOriginY;
    ;
  }).prototype = popup_source._RectanglePopupSource.prototype;
  dart.addTypeTests(popup_source._RectanglePopupSource);
  dart.addTypeCaches(popup_source._RectanglePopupSource);
  popup_source._RectanglePopupSource[dart.implements] = () => [popup_source.PopupSource];
  dart.setMethodSignature(popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getMethods(popup_source._RectanglePopupSource.__proto__),
    onDimensionsChanged: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), [], {track: dart.legacy(core.bool)}, {}),
    onOpen: dart.fnType(dart.void, []),
    onClose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getGetters(popup_source._RectanglePopupSource.__proto__),
    dimensions: dart.legacy(math.Rectangle$(core.num))
  }));
  dart.setSetterSignature(popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getSetters(popup_source._RectanglePopupSource.__proto__),
    popupId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(popup_source._RectanglePopupSource, L0);
  dart.setFieldSignature(popup_source._RectanglePopupSource, () => ({
    __proto__: dart.getFields(popup_source._RectanglePopupSource.__proto__),
    alignOriginX: dart.finalFieldType(dart.legacy(alignment.Alignment)),
    alignOriginY: dart.finalFieldType(dart.legacy(alignment.Alignment)),
    [_predefinedRectangle$]: dart.finalFieldType(dart.legacy(math.Rectangle$(core.num))),
    isRtl: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _domRuler$ = dart.privateName(dom_popup_source, "_domRuler");
  var _asyncMeasureSize$ = dart.privateName(dom_popup_source, "_asyncMeasureSize");
  dom_popup_source.DomPopupSourceFactory = class DomPopupSourceFactory extends core.Object {
    createPopupSource(sourceElement, opts) {
      let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : C0 || CT.C0;
      let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : C0 || CT.C0;
      let initAriaAttributes = opts && 'initAriaAttributes' in opts ? opts.initAriaAttributes : true;
      return new dom_popup_source.DomPopupSource.new(dart.bind(this, _asyncMeasureSize$), sourceElement, {alignOriginX: alignOriginX, alignOriginY: alignOriginY, initAriaAttributes: initAriaAttributes});
    }
    [_asyncMeasureSize$](element, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      if (dart.test(track)) {
        return this[_domRuler$].track(element);
      } else {
        return this[_domRuler$].measure(element).asStream();
      }
    }
  };
  (dom_popup_source.DomPopupSourceFactory.new = function(_domRuler) {
    this[_domRuler$] = _domRuler;
    ;
  }).prototype = dom_popup_source.DomPopupSourceFactory.prototype;
  dart.addTypeTests(dom_popup_source.DomPopupSourceFactory);
  dart.addTypeCaches(dom_popup_source.DomPopupSourceFactory);
  dart.setMethodSignature(dom_popup_source.DomPopupSourceFactory, () => ({
    __proto__: dart.getMethods(dom_popup_source.DomPopupSourceFactory.__proto__),
    createPopupSource: dart.fnType(dart.legacy(dom_popup_source.DomPopupSource), [dart.legacy(html.HtmlElement)], {alignOriginX: dart.legacy(alignment.Alignment), alignOriginY: dart.legacy(alignment.Alignment), initAriaAttributes: dart.legacy(core.bool)}, {}),
    [_asyncMeasureSize$]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), [dart.legacy(html.HtmlElement)], {track: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(dom_popup_source.DomPopupSourceFactory, L1);
  dart.setFieldSignature(dom_popup_source.DomPopupSourceFactory, () => ({
    __proto__: dart.getFields(dom_popup_source.DomPopupSourceFactory.__proto__),
    [_domRuler$]: dart.finalFieldType(dart.legacy(dom_ruler.DomRuler))
  }));
  var Point_y = dart.privateName(math, "Point.y");
  var Point_x = dart.privateName(math, "Point.x");
  var C1;
  var _alignOriginX = dart.privateName(dom_popup_source, "_alignOriginX");
  var _alignOriginY = dart.privateName(dom_popup_source, "_alignOriginY");
  var _id = dart.privateName(dom_popup_source, "_id");
  var _initAriaAttributes = dart.privateName(dom_popup_source, "_initAriaAttributes");
  var sourceElement$ = dart.privateName(dom_popup_source, "DomPopupSource.sourceElement");
  dom_popup_source.DomPopupSource = class DomPopupSource extends core.Object {
    get sourceElement() {
      return this[sourceElement$];
    }
    set sourceElement(value) {
      super.sourceElement = value;
    }
    get alignOriginX() {
      return this[_alignOriginX];
    }
    get alignOriginY() {
      return this[_alignOriginY];
    }
    onDimensionsChanged(opts) {
      let t1, t0;
      let track = opts && 'track' in opts ? opts.track : false;
      t0 = this.sourceElement;
      t1 = track;
      return this[_asyncMeasureSize$](t0, {track: t1});
    }
    get dimensions() {
      return this.sourceElement.getBoundingClientRect();
    }
    get isRtl() {
      return dom_popup_source.DomPopupSource._isRtl;
    }
    set popupId(id) {
      this[_id] = id;
      if (this[_id] == null || !dart.test(this[_initAriaAttributes])) return;
      this.sourceElement[$setAttribute]("aria-haspopup", "true");
    }
    focus() {
      this.sourceElement.focus();
    }
    toString() {
      return "DomPopupSource " + dart.notNull(new (IdentityMapOfStringL$AlignmentL()).from(["alignOriginX", this.alignOriginX, "alignOriginY", this.alignOriginY])[$toString]());
    }
    onOpen() {
      if (this[_id] == null || !dart.test(this[_initAriaAttributes])) return;
      this.sourceElement[$setAttribute]("aria-owns", this[_id]);
    }
    onClose() {
      if (this[_id] == null || !dart.test(this[_initAriaAttributes])) return;
      this.sourceElement[$attributes][$remove]("aria-owns");
    }
  };
  (dom_popup_source.DomPopupSource.new = function(_asyncMeasureSize, sourceElement, opts) {
    let alignOriginX = opts && 'alignOriginX' in opts ? opts.alignOriginX : C0 || CT.C0;
    let alignOriginY = opts && 'alignOriginY' in opts ? opts.alignOriginY : C0 || CT.C0;
    let transform = opts && 'transform' in opts ? opts.transform : C1 || CT.C1;
    let initAriaAttributes = opts && 'initAriaAttributes' in opts ? opts.initAriaAttributes : true;
    this[_alignOriginX] = null;
    this[_alignOriginY] = null;
    this[_id] = null;
    this[_asyncMeasureSize$] = _asyncMeasureSize;
    this[sourceElement$] = sourceElement;
    this[_initAriaAttributes] = initAriaAttributes;
    this[_alignOriginX] = alignOriginX;
    this[_alignOriginY] = alignOriginY;
  }).prototype = dom_popup_source.DomPopupSource.prototype;
  dart.addTypeTests(dom_popup_source.DomPopupSource);
  dart.addTypeCaches(dom_popup_source.DomPopupSource);
  dom_popup_source.DomPopupSource[dart.implements] = () => [popup_source.ElementPopupSource];
  dart.setMethodSignature(dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getMethods(dom_popup_source.DomPopupSource.__proto__),
    onDimensionsChanged: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(dart.legacy(core.num))))), [], {track: dart.legacy(core.bool)}, {}),
    focus: dart.fnType(dart.void, []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    onOpen: dart.fnType(dart.void, []),
    onClose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getGetters(dom_popup_source.DomPopupSource.__proto__),
    alignOriginX: dart.legacy(alignment.Alignment),
    alignOriginY: dart.legacy(alignment.Alignment),
    dimensions: dart.legacy(math.Rectangle$(core.num)),
    isRtl: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getSetters(dom_popup_source.DomPopupSource.__proto__),
    popupId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(dom_popup_source.DomPopupSource, L1);
  dart.setFieldSignature(dom_popup_source.DomPopupSource, () => ({
    __proto__: dart.getFields(dom_popup_source.DomPopupSource.__proto__),
    [_asyncMeasureSize$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), [dart.legacy(html.HtmlElement)], {track: dart.legacy(core.bool)}, {}))),
    sourceElement: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_initAriaAttributes]: dart.finalFieldType(dart.legacy(core.bool)),
    [_alignOriginX]: dart.fieldType(dart.legacy(alignment.Alignment)),
    [_alignOriginY]: dart.fieldType(dart.legacy(alignment.Alignment)),
    [_id]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(dom_popup_source.DomPopupSource, ['toString']);
  dart.defineLazy(dom_popup_source.DomPopupSource, {
    /*dom_popup_source.DomPopupSource._isRtl*/get _isRtl() {
      return rtl_annotation.determineRtl(html.document);
    }
  }, true);
  dart.trackLibraries("packages/angular_components/src/laminate/popup/dom_popup_source", {
    "package:angular_components/src/laminate/popup/popup_source.dart": popup_source,
    "package:angular_components/src/laminate/popup/dom_popup_source.dart": dom_popup_source
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["popup_source.dart","dom_popup_source.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yBAkB8C;UAC7B;UACD;AACZ,YAAO,4CAAsB,SAAS,iBACpB,MAAM,gBAAgB,MAAM;IAChD;;;;;;;;;AAwD4B,YAAA,AAAc;IAAuB;;;;EACnE;;;;;;;;;;;;UAgB8C;AAI1C,YAAO,wCAA+B,gCAAC;IACzC;;AAG4B;IAAoB;gBAM7B;IAEnB;;IAGe;;IAGC;;qDA1BW;QACjB;QAAmB;IAclB,aAAQ;IAfQ;IACjB;IAAmB;;EAAc;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBChEE;UAC9B;UACD;UACL;AACP,YAAO,mDAAe,2BAAmB,aAAa,iBACpC,YAAY,gBACZ,YAAY,sBACN,kBAAkB;IAC5C;yBAOgD;UACtC;AACR,oBAAI,KAAK;AACP,cAAO,AAAU,wBAAM,OAAO;;AAE9B,cAAO,AAAU,AAAiB,0BAAT,OAAO;;IAEpC;;;IAzB2B;;EAAU;;;;;;;;;;;;;;;;;;;;;;IAiCnB;;;;;;;AA0BY;IAAa;;AAGb;IAAa;;;UAGM;AAC/C,WAAyB;WAAsB,KAAK;YAA7C,AAAiB;IAC1B;;AAG4B,YAAA,AAAc;IAAuB;;AAG/C;IAAM;gBAGL;AACT,MAAR,YAAM,EAAE;AACR,UAAI,AAAI,aAAG,mBAAS,4BAAqB;AACU,MAAnD,AAAc,kCAAa,iBAAiB;IAC9C;;AAIuB,MAArB,AAAc;IAChB;;AAII,YAAA,AAAkB,kCAClB,AAA6D,8CAA5D,gBAAgB,mBAAc,gBAAgB;IAAwB;;AAIzE,UAAI,AAAI,aAAG,mBAAS,4BAAqB;AACG,MAA5C,AAAc,kCAAa,aAAa;IAC1C;;AAIE,UAAI,AAAI,aAAG,mBAAS,4BAAqB;AACG,MAA5C,AAAc,AAAW,yCAAO;IAClC;;kDA1DoB,mBAAwB;QAC7B;QACD;QACJ;QACD;IAMC;IACA;IACH;IAZa;IAAwB;IAKlB,4BAAE,kBAAkB;AAChB,IAA5B,sBAAgB,YAAY;AACA,IAA5B,sBAAgB,YAAY;EAC9B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtBkB,sCAAM;YAAG,6BAAa","file":"dom_popup_source.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_source: popup_source,
    src__laminate__popup__dom_popup_source: dom_popup_source
  };
}));

//# sourceMappingURL=dom_popup_source.unsound.ddc.js.map
