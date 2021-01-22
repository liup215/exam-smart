define(['dart_sdk', 'packages/angular_components/src/laminate/ruler/ruler_interface', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__laminate__ruler__dom_ruler(dart_sdk, packages__angular_components__src__laminate__ruler__ruler_interface, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ruler_interface = packages__angular_components__src__laminate__ruler__ruler_interface.src__laminate__ruler__ruler_interface;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var dom_ruler = Object.create(dart.library);
  var $offset = dartx.offset;
  var $classes = dartx.classes;
  var $isNotEmpty = dartx.isNotEmpty;
  var $where = dartx.where;
  var $setProperty = dartx.setProperty;
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var HtmlDocumentL = () => (HtmlDocumentL = dart.constFn(dart.legacy(html.HtmlDocument)))();
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  var FutureOfRectangleLOfnum = () => (FutureOfRectangleLOfnum = dart.constFn(async.Future$(RectangleLOfnum())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var RectangleOfnumL = () => (RectangleOfnumL = dart.constFn(math.Rectangle$(numL())))();
  var StreamOfRectangleLOfnum = () => (StreamOfRectangleLOfnum = dart.constFn(async.Stream$(RectangleLOfnum())))();
  var RectangleLOfnumL = () => (RectangleLOfnumL = dart.constFn(dart.legacy(RectangleOfnumL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/ruler/dom_ruler.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: RectangleOfnumL().prototype,
        [Rectangle_height]: 0,
        [Rectangle_width]: 0,
        [Rectangle_top]: 0,
        [Rectangle_left]: 0
      });
    },
    get C1() {
      return C1 = dart.constList([C0 || CT.C0], RectangleLOfnumL());
    }
  }, false);
  dom_ruler.DomRuler = class DomRuler extends core.Object {};
  (dom_ruler.DomRuler[dart.mixinNew] = function() {
  }).prototype = dom_ruler.DomRuler.prototype;
  dart.addTypeTests(dom_ruler.DomRuler);
  dart.addTypeCaches(dom_ruler.DomRuler);
  dom_ruler.DomRuler[dart.implements] = () => [ruler_interface.Ruler$(dart.legacy(html.Element))];
  dart.setLibraryUri(dom_ruler.DomRuler, L0);
  var _document$ = dart.privateName(dom_ruler, "_document");
  var _domService$ = dart.privateName(dom_ruler, "_domService");
  var Rectangle_height = dart.privateName(math, "Rectangle.height");
  var Rectangle_width = dart.privateName(math, "Rectangle.width");
  var Rectangle_top = dart.privateName(math, "Rectangle.top");
  var Rectangle_left = dart.privateName(math, "Rectangle.left");
  var C0;
  var C1;
  dom_ruler.DomRulerImpl = class DomRulerImpl extends ruler_interface.RulerBase$(dart.legacy(html.Element)) {
    canSyncWrite(element) {
      ElementL().as(element);
      if (HtmlDocumentL().is(this[_document$])) {
        return !dart.test(HtmlDocumentL().as(this[_document$]).body.contains(element));
      }
      return !dart.test(this[_document$].contains(element));
    }
    get onLayoutChanged() {
      return this[_domService$].onLayoutChanged;
    }
    onRead() {
      return this[_domService$].onRead();
    }
    onWrite() {
      return this[_domService$].onWrite();
    }
    measure(element, opts) {
      ElementL().as(element);
      let offset = opts && 'offset' in opts ? opts.offset : false;
      if (dart.test(this.canSyncWrite(element))) {
        return FutureOfRectangleLOfnum().value(C0 || CT.C0);
      }
      return super.measure(element, {offset: offset});
    }
    measureSync(element, opts) {
      ElementL().as(element);
      let offset = opts && 'offset' in opts ? opts.offset : false;
      if (dart.test(offset)) {
        return element[$offset];
      }
      return element.getBoundingClientRect();
    }
    track(element) {
      ElementL().as(element);
      if (dart.test(this.canSyncWrite(element))) {
        return StreamOfRectangleLOfnum().fromIterable(C1 || CT.C1);
      }
      return super.track(element);
    }
    removeCssClassesSync(element, classes) {
      ElementL().as(element);
      element[$classes].removeAll(classes[$where](dart.fn(c => c[$isNotEmpty], StringLToboolL())));
    }
    addCssClassesSync(element, classes) {
      ElementL().as(element);
      element[$classes].addAll(classes[$where](dart.fn(c => c[$isNotEmpty], StringLToboolL())));
    }
    clearCssPropertiesSync(element) {
      ElementL().as(element);
      element.style.cssText = "";
    }
    setCssPropertySync(element, propertyName, propertyValue) {
      ElementL().as(element);
      element.style[$setProperty](propertyName, propertyValue);
    }
  };
  (dom_ruler.DomRulerImpl.new = function(_document, _domService) {
    this[_document$] = _document;
    this[_domService$] = _domService;
    dom_ruler.DomRulerImpl.__proto__.new.call(this);
    ;
  }).prototype = dom_ruler.DomRulerImpl.prototype;
  dart.addTypeTests(dom_ruler.DomRulerImpl);
  dart.addTypeCaches(dom_ruler.DomRulerImpl);
  dom_ruler.DomRulerImpl[dart.implements] = () => [dom_ruler.DomRuler];
  dart.setMethodSignature(dom_ruler.DomRulerImpl, () => ({
    __proto__: dart.getMethods(dom_ruler.DomRulerImpl.__proto__),
    canSyncWrite: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    onRead: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    onWrite: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    measureSync: dart.fnType(dart.legacy(math.Rectangle$(core.num)), [dart.legacy(core.Object)], {offset: dart.legacy(core.bool)}, {}),
    removeCssClassesSync: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.List$(dart.legacy(core.String)))]),
    addCssClassesSync: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.List$(dart.legacy(core.String)))]),
    clearCssPropertiesSync: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    setCssPropertySync: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.String), dart.legacy(core.String)])
  }));
  dart.setGetterSignature(dom_ruler.DomRulerImpl, () => ({
    __proto__: dart.getGetters(dom_ruler.DomRulerImpl.__proto__),
    onLayoutChanged: dart.legacy(async.Stream$(dart.legacy(dom_service.DomService)))
  }));
  dart.setLibraryUri(dom_ruler.DomRulerImpl, L0);
  dart.setFieldSignature(dom_ruler.DomRulerImpl, () => ({
    __proto__: dart.getFields(dom_ruler.DomRulerImpl.__proto__),
    [_document$]: dart.finalFieldType(dart.legacy(html.Document)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService))
  }));
  dart.trackLibraries("packages/angular_components/laminate/ruler/dom_ruler", {
    "package:angular_components/laminate/ruler/dom_ruler.dart": dom_ruler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_ruler.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2B4B;AACxB,UAAc,mBAAV;AACF,cAAO,YAAY,AAAiB,AAAK,mBAAhC,gCAAyC,OAAO;;AAE3D,YAAO,YAAC,AAAU,0BAAS,OAAO;IACpC;;AAG0C,YAAA,AAAY;IAAe;;AAG5C,YAAA,AAAY;IAAQ;;AAGnB,YAAA,AAAY;IAAS;;oBAGb;UAAe;AAC/C,oBAAI,kBAAa,OAAO;AAGtB,cAAO;;AAET,YAAa,eAAQ,OAAO,WAAU,MAAM;IAC9C;;oBAG8B;UAAe;AAG3C,oBAAI,MAAM;AACR,cAAO,AAAQ,QAAD;;AAEhB,YAAO,AAAQ,QAAD;IAChB;;oBAGgC;AAC9B,oBAAI,kBAAa,OAAO;AAGtB,cAAO;;AAET,YAAa,aAAM,OAAO;IAC5B;yBAGkC,SAAsB;oBAAtB;AAC6B,MAA7D,AAAQ,AAAQ,OAAT,qBAAmB,AAAQ,OAAD,SAAO,QAAC,KAAM,AAAE,CAAD;IAClD;sBAG+B,SAAsB;oBAAtB;AAC6B,MAA1D,AAAQ,AAAQ,OAAT,kBAAgB,AAAQ,OAAD,SAAO,QAAC,KAAM,AAAE,CAAD;IAC/C;;oBAGoC;AACR,MAA1B,AAAQ,AAAM,OAAP,iBAAiB;IAC1B;uBAIY,SAAgB,cAAqB;oBAArC;AAC4C,MAAtD,AAAQ,AAAM,OAAP,qBAAmB,YAAY,EAAE,aAAa;IACvD;;yCApEkB,WAAgB;IAAhB;IAAgB;AAAlC;;EAA8C","file":"dom_ruler.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__ruler__dom_ruler: dom_ruler
  };
}));

//# sourceMappingURL=dom_ruler.unsound.ddc.js.map
