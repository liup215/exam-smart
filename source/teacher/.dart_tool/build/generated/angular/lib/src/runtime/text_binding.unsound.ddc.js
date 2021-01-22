define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/runtime/interpolate'], (function load__packages__angular__src__runtime__text_binding(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__runtime__interpolate) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  var text_binding = Object.create(dart.library);
  var $text = dartx.text;
  const CT = Object.create(null);
  var L0 = "package:angular/src/runtime/text_binding.dart";
  var _currentValue = dart.privateName(text_binding, "_currentValue");
  var element = dart.privateName(text_binding, "TextBinding.element");
  text_binding.TextBinding = class TextBinding extends core.Object {
    get element() {
      return this[element];
    }
    set element(value) {
      super.element = value;
    }
    updateText(newValue) {
      if (dart.test(check_binding.checkBinding(this[_currentValue], newValue))) {
        this.element[$text] = newValue;
        this[_currentValue] = newValue;
      }
    }
    updateTextWithPrimitive(newValue) {
      if (dart.test(check_binding.checkBinding(this[_currentValue], newValue))) {
        this.element[$text] = interpolate.toStringWithNull(newValue);
        this[_currentValue] = newValue;
      }
    }
  };
  (text_binding.TextBinding.new = function() {
    this[_currentValue] = "";
    this[element] = html.Text.new("");
    ;
  }).prototype = text_binding.TextBinding.prototype;
  dart.addTypeTests(text_binding.TextBinding);
  dart.addTypeCaches(text_binding.TextBinding);
  dart.setMethodSignature(text_binding.TextBinding, () => ({
    __proto__: dart.getMethods(text_binding.TextBinding.__proto__),
    updateText: dart.fnType(dart.void, [dart.legacy(core.String)]),
    updateTextWithPrimitive: dart.fnType(dart.void, [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(text_binding.TextBinding, L0);
  dart.setFieldSignature(text_binding.TextBinding, () => ({
    __proto__: dart.getFields(text_binding.TextBinding.__proto__),
    [_currentValue]: dart.fieldType(dart.legacy(core.Object)),
    element: dart.finalFieldType(dart.legacy(html.Text))
  }));
  dart.trackLibraries("packages/angular/src/runtime/text_binding", {
    "package:angular/src/runtime/text_binding.dart": text_binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAea;;;;;;eAUY;AACrB,oBAAI,2BAAa,qBAAe,QAAQ;AACf,QAAvB,AAAQ,sBAAO,QAAQ;AACC,QAAxB,sBAAgB,QAAQ;;IAE5B;4BAIoC;AAClC,oBAAI,2BAAa,qBAAe,QAAQ;AACG,QAAzC,AAAQ,sBAAO,6BAAiB,QAAQ;AAChB,QAAxB,sBAAgB,QAAQ;;IAE5B;;;IAzBO,sBAAgB;IACZ,gBAAU,cAAK;;EAOb","file":"text_binding.unsound.ddc.js"}');
  // Exports:
  return {
    src__runtime__text_binding: text_binding
  };
}));

//# sourceMappingURL=text_binding.unsound.ddc.js.map
