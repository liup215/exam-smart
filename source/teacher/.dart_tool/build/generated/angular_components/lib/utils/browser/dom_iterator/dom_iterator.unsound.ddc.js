define(['dart_sdk'], (function load__packages__angular_components__utils__browser__dom_iterator__dom_iterator(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dom_iterator = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $children = dartx.children;
  var $parent = dartx.parent;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $length = dartx.length;
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ListBaseOfElementL = () => (ListBaseOfElementL = dart.constFn(collection.ListBase$(ElementL())))();
  var ListBaseLOfElementL = () => (ListBaseLOfElementL = dart.constFn(dart.legacy(ListBaseOfElementL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/browser/dom_iterator/dom_iterator.dart";
  var _element = dart.privateName(dom_iterator, "_element");
  var _startingElement = dart.privateName(dom_iterator, "_startingElement");
  var _reverse = dart.privateName(dom_iterator, "_reverse");
  var _scope = dart.privateName(dom_iterator, "_scope");
  var _wraps = dart.privateName(dom_iterator, "_wraps");
  var _navigateBackward = dart.privateName(dom_iterator, "_navigateBackward");
  var _navigateForward = dart.privateName(dom_iterator, "_navigateForward");
  dom_iterator.DomTreeIterator = class DomTreeIterator extends core.Object {
    reversed(opts) {
      let t0;
      let wraps = opts && 'wraps' in opts ? opts.wraps : null;
      return new dom_iterator.DomTreeIterator.new(this[_element], {reverse: !dart.test(this[_reverse]), scope: this[_scope], wraps: boolL().as((t0 = wraps, t0 == null ? this[_wraps] : t0))});
    }
    get current() {
      return this[_element];
    }
    moveNext() {
      if (this[_element] == null) {
        return false;
      }
      if (dart.equals(this[_element], this[_scope]) && dart.test(this[_element][$children][$isEmpty])) {
        this[_element] = null;
        return false;
      }
      if (dart.test(this[_reverse])) {
        this[_navigateBackward]();
      } else {
        this[_navigateForward]();
      }
      if (dart.equals(this[_element], this[_startingElement])) {
        this[_element] = null;
      }
      return this[_element] != null;
    }
    [_navigateBackward]() {
      if (dart.equals(this[_element], this[_scope])) {
        if (dart.test(this[_wraps])) {
          this[_element] = dom_iterator.lastDescendant(this[_scope]);
        } else {
          this[_element] = null;
        }
      } else if (this[_element][$parent] == null) {
        this[_element] = null;
      } else if (dart.equals(this[_element], dom_iterator._firstChild(this[_element][$parent]))) {
        this[_element] = this[_element][$parent];
      } else {
        this[_element] = this[_element].previousElementSibling;
        while (dart.test(this[_element][$children][$isNotEmpty])) {
          this[_element] = dom_iterator._lastChild(this[_element]);
        }
      }
    }
    [_navigateForward]() {
      if (dart.test(this[_element][$children][$isNotEmpty])) {
        this[_element] = dom_iterator._firstChild(this[_element]);
      } else {
        while (this[_element][$parent] != null && !dart.equals(this[_element][$parent], this[_scope]) && dart.equals(this[_element], dom_iterator._lastChild(this[_element][$parent]))) {
          this[_element] = this[_element][$parent];
        }
        if (this[_element][$parent] == null || dart.equals(this[_element][$parent], this[_scope]) && dart.equals(this[_element], dom_iterator._lastChild(this[_element][$parent]))) {
          if (dart.test(this[_wraps])) {
            this[_element] = this[_scope];
          } else {
            this[_element] = null;
          }
        } else {
          this[_element] = this[_element].nextElementSibling;
        }
      }
    }
  };
  (dom_iterator.DomTreeIterator.new = function(element, opts) {
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let scope = opts && 'scope' in opts ? opts.scope : null;
    let wraps = opts && 'wraps' in opts ? opts.wraps : false;
    this[_element] = ElementL().as(element);
    this[_startingElement] = ElementL().as(element);
    this[_reverse] = reverse;
    this[_scope] = scope;
    this[_wraps] = wraps;
    if (dart.test(this[_wraps]) && this[_scope] == null) {
      dart.throw(core.Exception.new("global wrapping is disallowed, scope is required"));
    }
    if (this[_scope] != null && !dart.test(this[_scope].contains(this[_element]))) {
      dart.throw(core.Exception.new("if scope is set, " + "starting element should be inside of scope"));
    }
  }).prototype = dom_iterator.DomTreeIterator.prototype;
  dart.addTypeTests(dom_iterator.DomTreeIterator);
  dart.addTypeCaches(dom_iterator.DomTreeIterator);
  dom_iterator.DomTreeIterator[dart.implements] = () => [core.Iterator$(dart.legacy(html.Element))];
  dart.setMethodSignature(dom_iterator.DomTreeIterator, () => ({
    __proto__: dart.getMethods(dom_iterator.DomTreeIterator.__proto__),
    reversed: dart.fnType(dart.legacy(dom_iterator.DomTreeIterator), [], {wraps: dart.dynamic}, {}),
    moveNext: dart.fnType(dart.legacy(core.bool), []),
    [_navigateBackward]: dart.fnType(dart.void, []),
    [_navigateForward]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dom_iterator.DomTreeIterator, () => ({
    __proto__: dart.getGetters(dom_iterator.DomTreeIterator.__proto__),
    current: dart.legacy(html.Element)
  }));
  dart.setLibraryUri(dom_iterator.DomTreeIterator, L0);
  dart.setFieldSignature(dom_iterator.DomTreeIterator, () => ({
    __proto__: dart.getFields(dom_iterator.DomTreeIterator.__proto__),
    [_reverse]: dart.finalFieldType(dart.legacy(core.bool)),
    [_wraps]: dart.finalFieldType(dart.legacy(core.bool)),
    [_startingElement]: dart.finalFieldType(dart.legacy(html.Element)),
    [_scope]: dart.finalFieldType(dart.legacy(html.Element)),
    [_element]: dart.fieldType(dart.legacy(html.Element))
  }));
  dom_iterator.lastDescendant = function lastDescendant(scope) {
    let current = scope;
    while (dart.test(current[$children][$isNotEmpty])) {
      current = dom_iterator._lastChild(current);
    }
    return current;
  };
  dom_iterator._firstChild = function _firstChild(element) {
    return element[$children][$_get](0);
  };
  dom_iterator._lastChild = function _lastChild(element) {
    let children = ListBaseLOfElementL().as(element[$children]);
    return children[$_get](dart.notNull(children[$length]) - 1);
  };
  dart.trackLibraries("packages/angular_components/utils/browser/dom_iterator/dom_iterator", {
    "package:angular_components/utils/browser/dom_iterator/dom_iterator.dart": dom_iterator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_iterator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAkD4B;AACxB,YAAO,sCAAgB,0BACV,WAAC,wBAAiB,iCAAqB,KAAN,KAAK,QAAL,OAAS;IACzD;;AAIuB;IAAQ;;AAK7B,UAAI,AAAS,kBAAG;AACd,cAAO;;AAGT,UAAa,YAAT,gBAAY,2BAAU,AAAS,AAAS;AAC3B,QAAf,iBAAW;AACX,cAAO;;AAGT,oBAAI;AACiB,QAAnB;;AAEkB,QAAlB;;AAGF,UAAa,YAAT,gBAAY;AACC,QAAf,iBAAW;;AAGb,YAAQ,AAAS,mBAAG;IACtB;;AAqBE,UAAa,YAAT,gBAAY;AAEd,sBAAI;AAC+B,UAAjC,iBAAW,4BAAe;;AAEX,UAAf,iBAAW;;YAER,KAAI,AAAS,AAAO,2BAAG;AAEb,QAAf,iBAAW;YACN,KAAa,YAAT,gBAAY,yBAAY,AAAS;AAEhB,QAA1B,iBAAW,AAAS;;AAGsB,QAA1C,iBAAW,AAAS;AACpB,yBAAO,AAAS,AAAS;AACQ,UAA/B,iBAAW,wBAAW;;;IAG5B;;AAsBE,oBAAI,AAAS,AAAS;AAEY,QAAhC,iBAAW,yBAAY;;AAGvB,eAAO,AAAS,2BAAU,qBACtB,AAAS,yBAAU,iBACV,YAAT,gBAAY,wBAAW,AAAS;AACR,UAA1B,iBAAW,AAAS;;AAGtB,YAAI,AAAS,AAAO,2BAAG,QACF,YAAhB,AAAS,yBAAU,iBACP,YAAT,gBAAY,wBAAW,AAAS;AACtC,wBAAI;AACe,YAAjB,iBAAW;;AAEI,YAAf,iBAAW;;;AAGyB,UAAtC,iBAAW,AAAS;;;IAG1B;;+CA3IgB;QACN;QAAyB;QAAY;qBAChC,cAAE,OAAO;6BACD,cAAE,OAAO;IACjB,iBAAE,OAAO;IACX,eAAE,KAAK;IACP,eAAE,KAAK;AAClB,kBAAI,iBAAU,AAAO,gBAAG;AAC6C,MAAnE,WAAM,mBAAU;;AAElB,QAAI,gBAAU,mBAAS,AAAO,sBAAS;AAEY,MADjD,WAAM,mBAAS,AAAC,sBACZ;;EAER;;;;;;;;;;;;;;;;;;;;;;;;wDAiI6B;AACrB,kBAAU,KAAK;AACvB,qBAAO,AAAQ,AAAS,OAAV;AACiB,MAA7B,UAAU,wBAAW,OAAO;;AAE9B,UAAO,QAAO;EAChB;kDAE4B;AAAY,UAAA,AAAQ,AAAQ,QAAT,mBAAU;EAAE;gDAEhC;AACP,4CAAW,AAAQ,OAAD;AACpC,UAAO,AAAQ,SAAA,QAAiB,aAAhB,AAAS,QAAD,aAAU;EACpC","file":"dom_iterator.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_iterator__dom_iterator: dom_iterator
  };
}));

//# sourceMappingURL=dom_iterator.unsound.ddc.js.map
