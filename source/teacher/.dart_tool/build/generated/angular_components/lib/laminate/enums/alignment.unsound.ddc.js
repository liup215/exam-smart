define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base'], (function load__packages__angular_components__laminate__enums__alignment(dart_sdk, packages__angular_components__src__laminate__enums__base) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base = packages__angular_components__src__laminate__enums__base.src__laminate__enums__base;
  var alignment$ = Object.create(dart.library);
  var $left = dartx.left;
  var $width = dartx.width;
  var $top = dartx.top;
  var $height = dartx.height;
  var $toLowerCase = dartx.toLowerCase;
  var $toString = dartx.toString;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var AlignmentL = () => (AlignmentL = dart.constFn(dart.legacy(alignment$.Alignment)))();
  var IdentityMapOfStringL$AlignmentL = () => (IdentityMapOfStringL$AlignmentL = dart.constFn(_js_helper.IdentityMap$(StringL(), AlignmentL())))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment$.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/enums/alignment.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment$.BeforeCustomAlignment.prototype,
        [_cssPropertyValue$]: null,
        [_displayName$]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: alignment$.Alignment.prototype,
        [_cssPropertyValue$]: "flex-start",
        [_displayName$]: "Start"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: alignment$.Alignment.prototype,
        [_cssPropertyValue$]: "center",
        [_displayName$]: "Center"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment$.Alignment.prototype,
        [_cssPropertyValue$]: "flex-end",
        [_displayName$]: "End"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment$.AfterCustomAlignment.prototype,
        [_cssPropertyValue$]: null,
        [_displayName$]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top left",
        [originY$]: C1 || CT.C1,
        [originX$]: C1 || CT.C1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top right",
        [originY$]: C1 || CT.C1,
        [originX$]: C3 || CT.C3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom left",
        [originY$]: C3 || CT.C3,
        [originX$]: C1 || CT.C1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom right",
        [originY$]: C3 || CT.C3,
        [originX$]: C3 || CT.C3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top center",
        [originY$]: C1 || CT.C1,
        [originX$]: C2 || CT.C2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom center",
        [originY$]: C3 || CT.C3,
        [originX$]: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], RelativePositionL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top center",
        [originY$]: C1 || CT.C1,
        [originX$]: C1 || CT.C1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom center",
        [originY$]: C3 || CT.C3,
        [originX$]: C1 || CT.C1
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C7 || CT.C7, C6 || CT.C6, C14 || CT.C14, C9 || CT.C9, C8 || CT.C8], RelativePositionL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top left",
        [originY$]: C4 || CT.C4,
        [originX$]: C4 || CT.C4
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top right",
        [originY$]: C4 || CT.C4,
        [originX$]: C0 || CT.C0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom left",
        [originY$]: C0 || CT.C0,
        [originX$]: C4 || CT.C4
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom right",
        [originY$]: C0 || CT.C0,
        [originX$]: C0 || CT.C0
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], RelativePositionL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom center",
        [originY$]: C0 || CT.C0,
        [originX$]: C2 || CT.C2
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "center left",
        [originY$]: C2 || CT.C2,
        [originX$]: C4 || CT.C4
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top center",
        [originY$]: C4 || CT.C4,
        [originX$]: C2 || CT.C2
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "center right",
        [originY$]: C2 || CT.C2,
        [originX$]: C0 || CT.C0
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], RelativePositionL());
    },
    get C27() {
      return C27 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom left",
        [originY$]: C0 || CT.C0,
        [originX$]: C1 || CT.C1
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom right",
        [originY$]: C0 || CT.C0,
        [originX$]: C3 || CT.C3
      });
    },
    get C26() {
      return C26 = dart.constList([C22 || CT.C22, C27 || CT.C27, C28 || CT.C28], RelativePositionL());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top left",
        [originY$]: C1 || CT.C1,
        [originX$]: C4 || CT.C4
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom left",
        [originY$]: C3 || CT.C3,
        [originX$]: C4 || CT.C4
      });
    },
    get C29() {
      return C29 = dart.constList([C23 || CT.C23, C30 || CT.C30, C31 || CT.C31], RelativePositionL());
    },
    get C33() {
      return C33 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top left",
        [originY$]: C4 || CT.C4,
        [originX$]: C1 || CT.C1
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top right",
        [originY$]: C4 || CT.C4,
        [originX$]: C3 || CT.C3
      });
    },
    get C32() {
      return C32 = dart.constList([C24 || CT.C24, C33 || CT.C33, C34 || CT.C34], RelativePositionL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "top right",
        [originY$]: C1 || CT.C1,
        [originX$]: C0 || CT.C0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: alignment$.RelativePosition.prototype,
        [animationOrigin$]: "bottom right",
        [originY$]: C3 || CT.C3,
        [originX$]: C0 || CT.C0
      });
    },
    get C35() {
      return C35 = dart.constList([C25 || CT.C25, C36 || CT.C36, C37 || CT.C37], RelativePositionL());
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C26 || CT.C26, C29 || CT.C29, C32 || CT.C32, C35 || CT.C35, C15 || CT.C15], ListLOfRelativePositionL());
    },
    get C38() {
      return C38 = dart.constMap(StringL(), StringL(), ["bottom right", "bottom left", "bottom left", "bottom right", "center right", "center left", "center left", "center right", "top right", "top left", "top left", "top right"]);
    }
  }, false);
  var _displayName = dart.privateName(alignment$, "_displayName");
  var _cssPropertyValue = dart.privateName(alignment$, "_cssPropertyValue");
  var _displayName$ = dart.privateName(alignment$, "Alignment._displayName");
  var _cssPropertyValue$ = dart.privateName(alignment$, "Alignment._cssPropertyValue");
  var _CustomAlignment_cssClassY = dart.privateName(alignment$, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment$, "_CustomAlignment.cssClassX");
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment$, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C0;
  var C1;
  var C2;
  var C3;
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment$, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C4;
  alignment$.Alignment = class Alignment extends core.Object {
    get [_displayName]() {
      return this[_displayName$];
    }
    set [_displayName](value) {
      super[_displayName] = value;
    }
    get [_cssPropertyValue]() {
      return this[_cssPropertyValue$];
    }
    set [_cssPropertyValue](value) {
      super[_cssPropertyValue] = value;
    }
    static parse(displayName) {
      if (displayName == null || displayName === "start") {
        return alignment$.Alignment.Start;
      } else if (displayName === "center") {
        return alignment$.Alignment.Center;
      } else if (displayName === "end") {
        return alignment$.Alignment.End;
      } else if (displayName === "before") {
        return alignment$.Alignment.Before;
      } else if (displayName === "after") {
        return alignment$.Alignment.After;
      } else {
        dart.throw(new core.ArgumentError.value(displayName, "displayName"));
      }
    }
    apply(setProperty) {
      setProperty("align-items", this[_cssPropertyValue]);
    }
    get requiresContentSizeToPosition() {
      return !this._equals(alignment$.Alignment.Start);
    }
    calcLeft(sourceRect, contentRect = null) {
      if (dart.test(this.requiresContentSizeToPosition) && contentRect == null) {
        dart.throw(new core.ArgumentError.notNull("contentRect"));
      }
      let left = sourceRect[$left];
      if (this._equals(alignment$.Alignment.Center)) {
        left = dart.notNull(left) + (dart.notNull(sourceRect[$width]) / 2 - dart.notNull(contentRect[$width]) / 2);
      } else if (this._equals(alignment$.Alignment.End)) {
        left = dart.notNull(left) + (dart.notNull(sourceRect[$width]) - dart.notNull(contentRect[$width]));
      }
      return left;
    }
    calcTop(sourceRect, contentRect = null) {
      if (dart.test(this.requiresContentSizeToPosition) && contentRect == null) {
        dart.throw(new core.ArgumentError.notNull("contentRect"));
      }
      let top = sourceRect[$top];
      if (this._equals(alignment$.Alignment.Center)) {
        top = dart.notNull(top) + (dart.notNull(sourceRect[$height]) / 2 - dart.notNull(contentRect[$height]) / 2);
      } else if (this._equals(alignment$.Alignment.End)) {
        top = dart.notNull(top) + (dart.notNull(sourceRect[$height]) - dart.notNull(contentRect[$height]));
      }
      return top;
    }
    get cssClassX() {
      return "align-x-" + this[_displayName][$toLowerCase]();
    }
    get cssClassY() {
      return "align-y-" + this[_displayName][$toLowerCase]();
    }
    toString() {
      return "Alignment {" + dart.str(this[_displayName]) + "}";
    }
  };
  (alignment$.Alignment.new = function(_displayName, _cssPropertyValue) {
    this[_displayName$] = _displayName;
    this[_cssPropertyValue$] = _cssPropertyValue;
    ;
  }).prototype = alignment$.Alignment.prototype;
  dart.addTypeTests(alignment$.Alignment);
  dart.addTypeCaches(alignment$.Alignment);
  alignment$.Alignment[dart.implements] = () => [base.ElementStyleEnum];
  dart.setMethodSignature(alignment$.Alignment, () => ({
    __proto__: dart.getMethods(alignment$.Alignment.__proto__),
    apply: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.dynamic]))]),
    calcLeft: dart.fnType(dart.legacy(core.num), [dart.legacy(math.Rectangle$(core.num))], [dart.legacy(math.Rectangle$(core.num))]),
    calcTop: dart.fnType(dart.legacy(core.num), [dart.legacy(math.Rectangle$(core.num))], [dart.legacy(math.Rectangle$(core.num))]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(alignment$.Alignment, () => ({
    __proto__: dart.getGetters(alignment$.Alignment.__proto__),
    requiresContentSizeToPosition: dart.legacy(core.bool),
    cssClassX: dart.legacy(core.String),
    cssClassY: dart.legacy(core.String)
  }));
  dart.setLibraryUri(alignment$.Alignment, L0);
  dart.setFieldSignature(alignment$.Alignment, () => ({
    __proto__: dart.getFields(alignment$.Alignment.__proto__),
    [_displayName]: dart.finalFieldType(dart.legacy(core.String)),
    [_cssPropertyValue]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(alignment$.Alignment, ['toString']);
  dart.defineLazy(alignment$.Alignment, {
    /*alignment$.Alignment.Before*/get Before() {
      return C0 || CT.C0;
    },
    /*alignment$.Alignment.Start*/get Start() {
      return C1 || CT.C1;
    },
    /*alignment$.Alignment.Center*/get Center() {
      return C2 || CT.C2;
    },
    /*alignment$.Alignment.End*/get End() {
      return C3 || CT.C3;
    },
    /*alignment$.Alignment.After*/get After() {
      return C4 || CT.C4;
    }
  }, true);
  alignment$._CustomAlignment = class _CustomAlignment extends alignment$.Alignment {
    get cssClassX() {
      return this[cssClassX];
    }
    set cssClassX(value) {
      super.cssClassX = value;
    }
    get cssClassY() {
      return this[cssClassY];
    }
    set cssClassY(value) {
      super.cssClassY = value;
    }
    apply(setProperty) {
      dart.throw(new core.UnsupportedError.new("Cannot be reflected as a CSS style."));
    }
  };
  (alignment$._CustomAlignment.new = function(displayName) {
    this[cssClassX] = "";
    this[cssClassY] = "";
    alignment$._CustomAlignment.__proto__.new.call(this, displayName, null);
    ;
  }).prototype = alignment$._CustomAlignment.prototype;
  dart.addTypeTests(alignment$._CustomAlignment);
  dart.addTypeCaches(alignment$._CustomAlignment);
  const cssClassX = _CustomAlignment_cssClassX;
  const cssClassY = _CustomAlignment_cssClassY;
  dart.setLibraryUri(alignment$._CustomAlignment, L0);
  dart.setFieldSignature(alignment$._CustomAlignment, () => ({
    __proto__: dart.getFields(alignment$._CustomAlignment.__proto__),
    cssClassX: dart.finalFieldType(dart.legacy(core.String)),
    cssClassY: dart.finalFieldType(dart.legacy(core.String))
  }));
  alignment$.BeforeCustomAlignment = class BeforeCustomAlignment extends alignment$._CustomAlignment {
    get requiresContentSizeToPosition() {
      return this[requiresContentSizeToPosition];
    }
    set requiresContentSizeToPosition(value) {
      super.requiresContentSizeToPosition = value;
    }
    calcLeft(sourceRect, contentRect = null) {
      return dart.notNull(sourceRect[$left]) + -dart.notNull(contentRect[$width]);
    }
    calcTop(sourceRect, contentRect = null) {
      return dart.notNull(sourceRect[$top]) - dart.notNull(contentRect[$height]);
    }
  };
  (alignment$.BeforeCustomAlignment.new = function() {
    this[requiresContentSizeToPosition] = true;
    alignment$.BeforeCustomAlignment.__proto__.new.call(this, "Before");
    ;
  }).prototype = alignment$.BeforeCustomAlignment.prototype;
  dart.addTypeTests(alignment$.BeforeCustomAlignment);
  dart.addTypeCaches(alignment$.BeforeCustomAlignment);
  const requiresContentSizeToPosition = BeforeCustomAlignment_requiresContentSizeToPosition;
  dart.setLibraryUri(alignment$.BeforeCustomAlignment, L0);
  dart.setFieldSignature(alignment$.BeforeCustomAlignment, () => ({
    __proto__: dart.getFields(alignment$.BeforeCustomAlignment.__proto__),
    requiresContentSizeToPosition: dart.finalFieldType(dart.legacy(core.bool))
  }));
  alignment$.AfterCustomAlignment = class AfterCustomAlignment extends alignment$._CustomAlignment {
    get requiresContentSizeToPosition() {
      return this[requiresContentSizeToPosition$];
    }
    set requiresContentSizeToPosition(value) {
      super.requiresContentSizeToPosition = value;
    }
    calcLeft(sourceRect, contentRect = null) {
      return dart.notNull(sourceRect[$left]) + dart.notNull(sourceRect[$width]);
    }
    calcTop(sourceRect, contentRect = null) {
      return dart.notNull(sourceRect[$top]) + dart.notNull(sourceRect[$height]);
    }
  };
  (alignment$.AfterCustomAlignment.new = function() {
    this[requiresContentSizeToPosition$] = false;
    alignment$.AfterCustomAlignment.__proto__.new.call(this, "After");
    ;
  }).prototype = alignment$.AfterCustomAlignment.prototype;
  dart.addTypeTests(alignment$.AfterCustomAlignment);
  dart.addTypeCaches(alignment$.AfterCustomAlignment);
  const requiresContentSizeToPosition$ = AfterCustomAlignment_requiresContentSizeToPosition;
  dart.setLibraryUri(alignment$.AfterCustomAlignment, L0);
  dart.setFieldSignature(alignment$.AfterCustomAlignment, () => ({
    __proto__: dart.getFields(alignment$.AfterCustomAlignment.__proto__),
    requiresContentSizeToPosition: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _flipAlignment = dart.privateName(alignment$, "_flipAlignment");
  var _flipAnimation = dart.privateName(alignment$, "_flipAnimation");
  var originX$ = dart.privateName(alignment$, "RelativePosition.originX");
  var originY$ = dart.privateName(alignment$, "RelativePosition.originY");
  var animationOrigin$ = dart.privateName(alignment$, "RelativePosition.animationOrigin");
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C5;
  var C13;
  var C14;
  var C12;
  var C16;
  var C17;
  var C18;
  var C19;
  var C15;
  var C22;
  var C23;
  var C24;
  var C25;
  var C21;
  var C27;
  var C28;
  var C26;
  var C30;
  var C31;
  var C29;
  var C33;
  var C34;
  var C32;
  var C36;
  var C37;
  var C35;
  var C20;
  alignment$.RelativePosition = class RelativePosition extends core.Object {
    get originX() {
      return this[originX$];
    }
    set originX(value) {
      super.originX = value;
    }
    get originY() {
      return this[originY$];
    }
    set originY(value) {
      super.originY = value;
    }
    get animationOrigin() {
      return this[animationOrigin$];
    }
    set animationOrigin(value) {
      super.animationOrigin = value;
    }
    flipRelativePosition() {
      return new alignment$.RelativePosition.new({originX: this[_flipAlignment](this.originX), originY: this.originY, animationOrigin: this[_flipAnimation](this.animationOrigin)});
    }
    [_flipAlignment](alignment) {
      if (dart.equals(alignment, alignment$.Alignment.Start)) return alignment$.Alignment.End;
      if (dart.equals(alignment, alignment$.Alignment.End)) return alignment$.Alignment.Start;
      if (dart.equals(alignment, alignment$.Alignment.Before)) return alignment$.Alignment.After;
      if (dart.equals(alignment, alignment$.Alignment.After)) return alignment$.Alignment.Before;
      return alignment;
    }
    [_flipAnimation](animationOrigin) {
      return dart.test(alignment$._AnimationOrigins.flippedAnimationOrigins[$containsKey](animationOrigin)) ? alignment$._AnimationOrigins.flippedAnimationOrigins[$_get](animationOrigin) : animationOrigin;
    }
    toString() {
      return "RelativePosition " + dart.notNull(new (IdentityMapOfStringL$AlignmentL()).from(["originX", this.originX, "originY", this.originY])[$toString]());
    }
  };
  (alignment$.RelativePosition.new = function(opts) {
    let originX = opts && 'originX' in opts ? opts.originX : C1 || CT.C1;
    let originY = opts && 'originY' in opts ? opts.originY : C1 || CT.C1;
    let animationOrigin = opts && 'animationOrigin' in opts ? opts.animationOrigin : "top left";
    this[originX$] = originX;
    this[originY$] = originY;
    this[animationOrigin$] = animationOrigin;
    ;
  }).prototype = alignment$.RelativePosition.prototype;
  dart.addTypeTests(alignment$.RelativePosition);
  dart.addTypeCaches(alignment$.RelativePosition);
  dart.setMethodSignature(alignment$.RelativePosition, () => ({
    __proto__: dart.getMethods(alignment$.RelativePosition.__proto__),
    flipRelativePosition: dart.fnType(dart.legacy(alignment$.RelativePosition), []),
    [_flipAlignment]: dart.fnType(dart.legacy(alignment$.Alignment), [dart.legacy(alignment$.Alignment)]),
    [_flipAnimation]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(alignment$.RelativePosition, L0);
  dart.setFieldSignature(alignment$.RelativePosition, () => ({
    __proto__: dart.getFields(alignment$.RelativePosition.__proto__),
    originX: dart.finalFieldType(dart.legacy(alignment$.Alignment)),
    originY: dart.finalFieldType(dart.legacy(alignment$.Alignment)),
    animationOrigin: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(alignment$.RelativePosition, ['toString']);
  dart.defineLazy(alignment$.RelativePosition, {
    /*alignment$.RelativePosition.overlapAlignments*/get overlapAlignments() {
      return C5 || CT.C5;
    },
    /*alignment$.RelativePosition.InlinePositions*/get InlinePositions() {
      return C12 || CT.C12;
    },
    /*alignment$.RelativePosition.InlineBottom*/get InlineBottom() {
      return C13 || CT.C13;
    },
    /*alignment$.RelativePosition.InlineTop*/get InlineTop() {
      return C14 || CT.C14;
    },
    /*alignment$.RelativePosition.InlineBottomLeft*/get InlineBottomLeft() {
      return C7 || CT.C7;
    },
    /*alignment$.RelativePosition.InlineTopLeft*/get InlineTopLeft() {
      return C9 || CT.C9;
    },
    /*alignment$.RelativePosition.InlineBottomRight*/get InlineBottomRight() {
      return C6 || CT.C6;
    },
    /*alignment$.RelativePosition.InlineTopRight*/get InlineTopRight() {
      return C8 || CT.C8;
    },
    /*alignment$.RelativePosition.OffsetPositions*/get OffsetPositions() {
      return C15 || CT.C15;
    },
    /*alignment$.RelativePosition.OffsetBottomRight*/get OffsetBottomRight() {
      return C16 || CT.C16;
    },
    /*alignment$.RelativePosition.OffsetBottomLeft*/get OffsetBottomLeft() {
      return C17 || CT.C17;
    },
    /*alignment$.RelativePosition.OffsetTopRight*/get OffsetTopRight() {
      return C18 || CT.C18;
    },
    /*alignment$.RelativePosition.OffsetTopLeft*/get OffsetTopLeft() {
      return C19 || CT.C19;
    },
    /*alignment$.RelativePosition.ComprehensiveOffsetPositions*/get ComprehensiveOffsetPositions() {
      return C20 || CT.C20;
    },
    /*alignment$.RelativePosition.AdjacentCardinal*/get AdjacentCardinal() {
      return C21 || CT.C21;
    },
    /*alignment$.RelativePosition.AdjacentTopEdge*/get AdjacentTopEdge() {
      return C26 || CT.C26;
    },
    /*alignment$.RelativePosition.AdjacentTopLeft*/get AdjacentTopLeft() {
      return C27 || CT.C27;
    },
    /*alignment$.RelativePosition.AdjacentTop*/get AdjacentTop() {
      return C22 || CT.C22;
    },
    /*alignment$.RelativePosition.AdjacentTopRight*/get AdjacentTopRight() {
      return C28 || CT.C28;
    },
    /*alignment$.RelativePosition.AdjacentRightEdge*/get AdjacentRightEdge() {
      return C29 || CT.C29;
    },
    /*alignment$.RelativePosition.AdjacentRightTop*/get AdjacentRightTop() {
      return C30 || CT.C30;
    },
    /*alignment$.RelativePosition.AdjacentRight*/get AdjacentRight() {
      return C23 || CT.C23;
    },
    /*alignment$.RelativePosition.AdjacentRightBottom*/get AdjacentRightBottom() {
      return C31 || CT.C31;
    },
    /*alignment$.RelativePosition.AdjacentBottomEdge*/get AdjacentBottomEdge() {
      return C32 || CT.C32;
    },
    /*alignment$.RelativePosition.AdjacentBottomRight*/get AdjacentBottomRight() {
      return C34 || CT.C34;
    },
    /*alignment$.RelativePosition.AdjacentBottom*/get AdjacentBottom() {
      return C24 || CT.C24;
    },
    /*alignment$.RelativePosition.AdjacentBottomLeft*/get AdjacentBottomLeft() {
      return C33 || CT.C33;
    },
    /*alignment$.RelativePosition.AdjacentLeftEdge*/get AdjacentLeftEdge() {
      return C35 || CT.C35;
    },
    /*alignment$.RelativePosition.AdjacentLeftBottom*/get AdjacentLeftBottom() {
      return C37 || CT.C37;
    },
    /*alignment$.RelativePosition.AdjacentLeft*/get AdjacentLeft() {
      return C25 || CT.C25;
    },
    /*alignment$.RelativePosition.AdjacentLeftTop*/get AdjacentLeftTop() {
      return C36 || CT.C36;
    }
  }, true);
  var C38;
  alignment$._AnimationOrigins = class _AnimationOrigins extends core.Object {};
  (alignment$._AnimationOrigins.new = function() {
    ;
  }).prototype = alignment$._AnimationOrigins.prototype;
  dart.addTypeTests(alignment$._AnimationOrigins);
  dart.addTypeCaches(alignment$._AnimationOrigins);
  dart.setLibraryUri(alignment$._AnimationOrigins, L0);
  dart.defineLazy(alignment$._AnimationOrigins, {
    /*alignment$._AnimationOrigins.UP_LEFT*/get UP_LEFT() {
      return "bottom right";
    },
    /*alignment$._AnimationOrigins.UP*/get UP() {
      return "bottom center";
    },
    /*alignment$._AnimationOrigins.UP_RIGHT*/get UP_RIGHT() {
      return "bottom left";
    },
    /*alignment$._AnimationOrigins.LEFT*/get LEFT() {
      return "center right";
    },
    /*alignment$._AnimationOrigins.OUTWARD*/get OUTWARD() {
      return "center left";
    },
    /*alignment$._AnimationOrigins.RIGHT*/get RIGHT() {
      return "center left";
    },
    /*alignment$._AnimationOrigins.DOWN_LEFT*/get DOWN_LEFT() {
      return "top right";
    },
    /*alignment$._AnimationOrigins.DOWN*/get DOWN() {
      return "top center";
    },
    /*alignment$._AnimationOrigins.DOWN_RIGHT*/get DOWN_RIGHT() {
      return "top left";
    },
    /*alignment$._AnimationOrigins.flippedAnimationOrigins*/get flippedAnimationOrigins() {
      return C38 || CT.C38;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/enums/alignment", {
    "package:angular_components/laminate/enums/alignment.dart": alignment$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["alignment.dart"],"names":[],"mappings":"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","file":"alignment.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__enums__alignment: alignment$
  };
}));

//# sourceMappingURL=alignment.unsound.ddc.js.map
