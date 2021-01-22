define(['dart_sdk', 'packages/angular_components/utils/browser/events/events'], (function load__packages__angular_components__model__a11y__keyboard_handler_mixin(dart_sdk, packages__angular_components__utils__browser__events__events) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  var keyboard_handler_mixin = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/a11y/keyboard_handler_mixin.dart";
  var isRtl = dart.privateName(keyboard_handler_mixin, "KeyboardHandlerMixin.isRtl");
  keyboard_handler_mixin.KeyboardHandlerMixin = class KeyboardHandlerMixin extends core.Object {
    get isRtl() {
      return this[isRtl];
    }
    set isRtl(value) {
      this[isRtl] = value;
    }
    onKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnterKey(event);
      } else if (dart.test(events.isSpaceKey(event))) {
        this.handleSpaceKey(event);
      } else if (event.charCode !== 0) {
        this.handleCharCodeKey(event);
      }
    }
    onKeyDown(event) {
      switch (event.keyCode) {
        case 38:
        {
          this.handleUpKey(event);
          break;
        }
        case 40:
        {
          this.handleDownKey(event);
          break;
        }
        case 37:
        {
          if (dart.equals(this.isRtl, true)) {
            this.handleRightKey(event);
          } else {
            this.handleLeftKey(event);
          }
          break;
        }
        case 39:
        {
          if (dart.equals(this.isRtl, true)) {
            this.handleLeftKey(event);
          } else {
            this.handleRightKey(event);
          }
          break;
        }
        case 33:
        {
          this.handlePageUp(event);
          break;
        }
        case 34:
        {
          this.handlePageDown(event);
          break;
        }
        case 36:
        {
          this.handleHomeKey(event);
          break;
        }
        case 35:
        {
          this.handleEndKey(event);
          break;
        }
        case 8:
        {
          this.handleBackspaceKey(event);
          break;
        }
        case 46:
        {
          this.handleDeleteKey(event);
          break;
        }
      }
    }
    onKeyUp(event) {
      if (event.keyCode === 27) {
        this.handleEscapeKey(event);
      }
    }
    handleEnterKey(event) {
    }
    handleSpaceKey(event) {
    }
    handleEscapeKey(event) {
    }
    handleUpKey(event) {
    }
    handleDownKey(event) {
    }
    handleLeftKey(event) {
    }
    handleRightKey(event) {
    }
    handlePageUp(event) {
    }
    handlePageDown(event) {
    }
    handleHomeKey(event) {
    }
    handleEndKey(event) {
    }
    handleBackspaceKey(event) {
    }
    handleDeleteKey(event) {
    }
    handleCharCodeKey(event) {
    }
  };
  (keyboard_handler_mixin.KeyboardHandlerMixin.new = function() {
    this[isRtl] = null;
    ;
  }).prototype = keyboard_handler_mixin.KeyboardHandlerMixin.prototype;
  dart.addTypeTests(keyboard_handler_mixin.KeyboardHandlerMixin);
  dart.addTypeCaches(keyboard_handler_mixin.KeyboardHandlerMixin);
  dart.setMethodSignature(keyboard_handler_mixin.KeyboardHandlerMixin, () => ({
    __proto__: dart.getMethods(keyboard_handler_mixin.KeyboardHandlerMixin.__proto__),
    onKeyPress: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    onKeyDown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    onKeyUp: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleEnterKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleSpaceKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleEscapeKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleUpKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleDownKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleLeftKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleRightKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handlePageUp: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handlePageDown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleHomeKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleEndKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleBackspaceKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleDeleteKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleCharCodeKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setLibraryUri(keyboard_handler_mixin.KeyboardHandlerMixin, L0);
  dart.setFieldSignature(keyboard_handler_mixin.KeyboardHandlerMixin, () => ({
    __proto__: dart.getFields(keyboard_handler_mixin.KeyboardHandlerMixin.__proto__),
    isRtl: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/model/a11y/keyboard_handler_mixin", {
    "package:angular_components/model/a11y/keyboard_handler_mixin.dart": keyboard_handler_mixin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_handler_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;IA0CO;;;;;;eAGyB;AAC5B,UAAI,AAAM,AAAQ,KAAT;AACc,QAArB,oBAAe,KAAK;YACf,eAAI,kBAAW,KAAK;AACJ,QAArB,oBAAe,KAAK;YACf,KAAI,AAAM,KAAD,cAAa;AACH,QAAxB,uBAAkB,KAAK;;IAE3B;cAG6B;AAC3B,cAAQ,AAAM,KAAD;;;AAES,UAAlB,iBAAY,KAAK;AACjB;;;;AAEoB,UAApB,mBAAc,KAAK;AACnB;;;;AAEA,cAAU,YAAN,YAAS;AACU,YAArB,oBAAe,KAAK;;AAEA,YAApB,mBAAc,KAAK;;AAErB;;;;AAEA,cAAU,YAAN,YAAS;AACS,YAApB,mBAAc,KAAK;;AAEE,YAArB,oBAAe,KAAK;;AAEtB;;;;AAEmB,UAAnB,kBAAa,KAAK;AAClB;;;;AAEqB,UAArB,oBAAe,KAAK;AACpB;;;;AAEoB,UAApB,mBAAc,KAAK;AACnB;;;;AAEmB,UAAnB,kBAAa,KAAK;AAClB;;;;AAEyB,UAAzB,wBAAmB,KAAK;AACxB;;;;AAEsB,UAAtB,qBAAgB,KAAK;AACrB;;;IAEN;YAG2B;AACzB,UAAI,AAAM,AAAQ,KAAT;AACe,QAAtB,qBAAgB,KAAK;;IAEzB;mBAIkC;IAAQ;mBAER;IAAQ;oBAEP;IAAQ;gBAEZ;IAAQ;kBAEN;IAAQ;kBAER;IAAQ;mBAEP;IAAQ;iBAEV;IAAQ;mBAEN;IAAQ;kBAET;IAAQ;iBAET;IAAQ;uBAEF;IAAQ;oBAEX;IAAQ;sBAEN;IAAQ;;;IA5FxC;;EA6FP","file":"keyboard_handler_mixin.unsound.ddc.js"}');
  // Exports:
  return {
    model__a11y__keyboard_handler_mixin: keyboard_handler_mixin
  };
}));

//# sourceMappingURL=keyboard_handler_mixin.unsound.ddc.js.map
