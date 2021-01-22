define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/focus/focus'], (function load__packages__angular_components__focus__focus_trap(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__browser__dom_iterator__dom_iterator, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__focus__focus) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const dom_iterator = packages__angular_components__utils__browser__dom_iterator__dom_iterator.utils__browser__dom_iterator__dom_iterator;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const focus = packages__angular_components__focus__focus.focus__focus;
  var focus_trap = Object.create(dart.library);
  var $offsetWidth = dartx.offsetWidth;
  var $offsetHeight = dartx.offsetHeight;
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_trap.dart";
  var _disposer = dart.privateName(focus_trap, "_disposer");
  var _autoFocusDirective = dart.privateName(focus_trap, "_autoFocusDirective");
  var _content = dart.privateName(focus_trap, "_content");
  var _element = dart.privateName(focus_trap, "_element");
  var _focusFirstInOrder = dart.privateName(focus_trap, "_focusFirstInOrder");
  var _visible = dart.privateName(focus_trap, "_visible");
  var _focusDefault = dart.privateName(focus_trap, "_focusDefault");
  focus_trap.FocusTrapComponent = class FocusTrapComponent extends core.Object {
    set autoFocus(value) {
      this[_autoFocusDirective] = value;
    }
    set content(value) {
      this[_content] = value;
      if (this[_content] != null && this[_autoFocusDirective] == null) {
        this[_content][_element].focus();
      }
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    focusFirst() {
      this[_focusFirstInOrder](new dom_iterator.DomTreeIterator.new(this[_content].element, {scope: this[_content].element}));
    }
    focusLast() {
      this[_focusFirstInOrder](new dom_iterator.DomTreeIterator.new(this[_content].element, {scope: this[_content].element, reverse: true, wraps: true}));
    }
    [_focusFirstInOrder](iterator) {
      while (dart.test(iterator.moveNext())) {
        if (iterator.current.tabIndex === 0 && dart.test(this[_visible](iterator.current))) {
          iterator.current.focus();
          return;
        }
      }
      this[_focusDefault]();
    }
    [_visible](element) {
      return element[$offsetWidth] !== 0 && element[$offsetHeight] !== 0;
    }
    [_focusDefault]() {
      if (this[_autoFocusDirective] != null) {
        this[_autoFocusDirective].focus();
      } else if (this[_content] != null) {
        this[_content].element.focus();
      }
    }
  };
  (focus_trap.FocusTrapComponent.new = function() {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_autoFocusDirective] = null;
    this[_content] = null;
    ;
  }).prototype = focus_trap.FocusTrapComponent.prototype;
  dart.addTypeTests(focus_trap.FocusTrapComponent);
  dart.addTypeCaches(focus_trap.FocusTrapComponent);
  focus_trap.FocusTrapComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus_trap.FocusTrapComponent, () => ({
    __proto__: dart.getMethods(focus_trap.FocusTrapComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    focusFirst: dart.fnType(dart.void, []),
    focusLast: dart.fnType(dart.void, []),
    [_focusFirstInOrder]: dart.fnType(dart.void, [dart.legacy(core.Iterator$(dart.legacy(html.Element)))]),
    [_visible]: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.Element)]),
    [_focusDefault]: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(focus_trap.FocusTrapComponent, () => ({
    __proto__: dart.getSetters(focus_trap.FocusTrapComponent.__proto__),
    autoFocus: dart.legacy(focus.AutoFocusDirective),
    content: dart.legacy(focus_trap.FocusContentWrapper)
  }));
  dart.setLibraryUri(focus_trap.FocusTrapComponent, L0);
  dart.setFieldSignature(focus_trap.FocusTrapComponent, () => ({
    __proto__: dart.getFields(focus_trap.FocusTrapComponent.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_autoFocusDirective]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_content]: dart.fieldType(dart.legacy(focus_trap.FocusContentWrapper))
  }));
  focus_trap.FocusContentWrapper = class FocusContentWrapper extends focus.FocusableDirective {
    get element() {
      return this[_element];
    }
  };
  (focus_trap.FocusContentWrapper.new = function(element) {
    this[_element] = element;
    focus_trap.FocusContentWrapper.__proto__.new.call(this, element);
    ;
  }).prototype = focus_trap.FocusContentWrapper.prototype;
  dart.addTypeTests(focus_trap.FocusContentWrapper);
  dart.addTypeCaches(focus_trap.FocusContentWrapper);
  dart.setGetterSignature(focus_trap.FocusContentWrapper, () => ({
    __proto__: dart.getGetters(focus_trap.FocusContentWrapper.__proto__),
    element: dart.legacy(html.Element)
  }));
  dart.setLibraryUri(focus_trap.FocusContentWrapper, L0);
  dart.setFieldSignature(focus_trap.FocusContentWrapper, () => ({
    __proto__: dart.getFields(focus_trap.FocusContentWrapper.__proto__),
    [_element]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.trackLibraries("packages/angular_components/focus/focus_trap", {
    "package:angular_components/focus/focus_trap.dart": focus_trap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;kBA0BmC;AACJ,MAA3B,4BAAsB,KAAK;IAC7B;gBAIgC;AACd,MAAhB,iBAAW,KAAK;AAChB,UAAI,kBAAY,QAAQ,AAAoB,6BAAG;AACpB,QAAzB,AAAS,AAAS;;IAEtB;;AAIqB,MAAnB,AAAU;IACZ;;AAIiE,MAD/D,yBACI,qCAAgB,AAAS,gCAAgB,AAAS;IACxD;;AAI2D,MADzD,yBAAmB,qCAAgB,AAAS,gCACjC,AAAS,iCAAkB,aAAa;IACrD;yBAE0C;AACxC,uBAAO,AAAS,QAAD;AACb,YAAI,AAAS,AAAQ,AAAS,QAAlB,sBAAqB,eAAK,eAAS,AAAS,QAAD;AAC7B,UAAxB,AAAS,AAAQ,QAAT;AACR;;;AAGW,MAAf;IACF;eAEsB;AACpB,YAAQ,AAAQ,AAAiB,QAAlB,mBAAgB,KAAK,AAAQ,OAAD,oBAAiB;IAC9D;;AAGE,UAAI,6BAAuB;AACE,QAA3B,AAAoB;YACf,KAAI,kBAAY;AACG,QAAxB,AAAS,AAAQ;;IAErB;;;IApDM,kBAAqB;IAER;IAMC;;EA6CtB;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWyB;IAAQ;;iDAJC;IACjB,iBAAE,OAAO;AAClB,4DAAM,OAAO;;EAAC","file":"focus_trap.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap: focus_trap
  };
}));

//# sourceMappingURL=focus_trap.unsound.ddc.js.map
