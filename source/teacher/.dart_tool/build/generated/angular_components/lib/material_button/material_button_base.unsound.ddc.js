define(['dart_sdk', 'packages/angular_components/button_decorator/button_decorator'], (function load__packages__angular_components__material_button__material_button_base(dart_sdk, packages__angular_components__button_decorator__button_decorator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  var material_button_base = Object.create(dart.library);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_button/material_button_base.dart";
  var _focused = dart.privateName(material_button_base, "_focused");
  var _clickFocused = dart.privateName(material_button_base, "_clickFocused");
  var _isMouseDown = dart.privateName(material_button_base, "_isMouseDown");
  var _setFocused = dart.privateName(material_button_base, "_setFocused");
  var raised = dart.privateName(material_button_base, "MaterialButtonBase.raised");
  material_button_base.MaterialButtonBase = class MaterialButtonBase extends button_decorator.ButtonDirective {
    get raised() {
      return this[raised];
    }
    set raised(value) {
      this[raised] = value;
    }
    get focused() {
      return dart.test(this[_focused]) || dart.test(this[_clickFocused]);
    }
    get visualFocus() {
      return this[_focused];
    }
    get isMouseDown() {
      return this[_isMouseDown];
    }
    get zElevation() {
      return dart.test(this[_isMouseDown]) || dart.test(this[_focused]) ? 4 : 1;
    }
    [_setFocused](newValue) {
      async.scheduleMicrotask(dart.fn(() => {
        if (!dart.equals(this[_focused], newValue)) {
          this[_focused] = newValue;
          this.focusedStateChanged();
        }
      }, VoidToNull()));
    }
    focusedStateChanged() {
    }
    onMouseDown(_) {
      this[_clickFocused] = true;
      this[_isMouseDown] = true;
    }
    onMouseUp(_) {
      this[_isMouseDown] = false;
    }
    onFocus(event) {
      if (dart.test(this[_clickFocused])) return;
      this[_setFocused](true);
    }
    onBlur(event) {
      if (dart.test(this[_clickFocused])) this[_clickFocused] = false;
      this[_setFocused](false);
    }
  };
  (material_button_base.MaterialButtonBase.new = function(element, role, opts) {
    let handleSpacePresses = opts && 'handleSpacePresses' in opts ? opts.handleSpacePresses : true;
    this[_focused] = false;
    this[_clickFocused] = false;
    this[_isMouseDown] = false;
    this[raised] = false;
    material_button_base.MaterialButtonBase.__proto__.new.call(this, element, role, {handleSpacePresses: handleSpacePresses});
    ;
  }).prototype = material_button_base.MaterialButtonBase.prototype;
  dart.addTypeTests(material_button_base.MaterialButtonBase);
  dart.addTypeCaches(material_button_base.MaterialButtonBase);
  dart.setMethodSignature(material_button_base.MaterialButtonBase, () => ({
    __proto__: dart.getMethods(material_button_base.MaterialButtonBase.__proto__),
    [_setFocused]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    focusedStateChanged: dart.fnType(dart.void, []),
    onMouseDown: dart.fnType(dart.void, [dart.dynamic]),
    onMouseUp: dart.fnType(dart.void, [dart.dynamic]),
    onFocus: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    onBlur: dart.fnType(dart.void, [dart.legacy(html.UIEvent)])
  }));
  dart.setGetterSignature(material_button_base.MaterialButtonBase, () => ({
    __proto__: dart.getGetters(material_button_base.MaterialButtonBase.__proto__),
    focused: dart.legacy(core.bool),
    visualFocus: dart.legacy(core.bool),
    isMouseDown: dart.legacy(core.bool),
    zElevation: dart.legacy(core.int)
  }));
  dart.setLibraryUri(material_button_base.MaterialButtonBase, L0);
  dart.setFieldSignature(material_button_base.MaterialButtonBase, () => ({
    __proto__: dart.getFields(material_button_base.MaterialButtonBase.__proto__),
    [_focused]: dart.fieldType(dart.legacy(core.bool)),
    [_clickFocused]: dart.fieldType(dart.legacy(core.bool)),
    [_isMouseDown]: dart.fieldType(dart.legacy(core.bool)),
    raised: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_button_base.MaterialButtonBase, {
    /*material_button_base.MaterialButtonBase.lowElevation*/get lowElevation() {
      return 1;
    },
    /*material_button_base.MaterialButtonBase.mediumElevation*/get mediumElevation() {
      return 4;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_button_base", {
    "package:angular_components/material_button/material_button_base.dart": material_button_base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_button_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAsBO;;;;;;;AAGe,YAAS,WAAT,6BAAY;IAAa;;AAGrB;IAAQ;;AAGR;IAAY;;AAMhC,YAAa,WAAb,iCAAgB;IAAyC;kBAQvC;AAMlB,MALF,wBAAkB;AAChB,yBAAI,gBAAY,QAAQ;AACH,UAAnB,iBAAW,QAAQ;AACE,UAArB;;;IAGN;;IAG4B;gBAIX;AACK,MAApB,sBAAgB;AACG,MAAnB,qBAAe;IACjB;cAIe;AACO,MAApB,qBAAe;IACjB;YAIqB;AACnB,oBAAI,sBAAe;AACF,MAAjB,kBAAY;IACd;WAIoB;AAClB,oBAAI,sBAAe,AAAqB,sBAAL;AAEjB,MAAlB,kBAAY;IACd;;0DA5C+B,SAAgB;QACrC;IAzBL,iBAAW;IACX,sBAAgB;IAChB,qBAAe;IAKf,eAAS;AAmBR,qEAAM,OAAO,EAAE,IAAI,uBAAsB,kBAAkB;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA7BrD,oDAAY;;;MACZ,uDAAe","file":"material_button_base.unsound.ddc.js"}');
  // Exports:
  return {
    material_button__material_button_base: material_button_base
  };
}));

//# sourceMappingURL=material_button_base.unsound.ddc.js.map
