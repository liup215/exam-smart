define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/enums/position'], (function load__packages__angular_components__src__laminate__ruler__ruler_interface(dart_sdk, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__enums__visibility, packages__angular_components__laminate__enums__position) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const visibility$ = packages__angular_components__laminate__enums__visibility.laminate__enums__visibility;
  const position = packages__angular_components__laminate__enums__position.laminate__enums__position;
  var ruler_interface = Object.create(dart.library);
  var $abs = dartx.abs;
  var $top = dartx.top;
  var $left = dartx.left;
  var $width = dartx.width;
  var $height = dartx.height;
  var $round = dartx.round;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var ExpandoOfListLOfStringL = () => (ExpandoOfListLOfStringL = dart.constFn(core.Expando$(ListLOfStringL())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var RectangleOfnumL = () => (RectangleOfnumL = dart.constFn(math.Rectangle$(numL())))();
  var RectangleLOfnumL = () => (RectangleLOfnumL = dart.constFn(dart.legacy(RectangleOfnumL())))();
  var voidToRectangleLOfnumL = () => (voidToRectangleLOfnumL = dart.constFn(dart.fnType(RectangleLOfnumL(), [dart.void])))();
  var RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  var RectangleLOfnum = () => (RectangleLOfnum = dart.constFn(dart.legacy(RectangleOfnum())))();
  var StreamControllerOfRectangleLOfnum = () => (StreamControllerOfRectangleLOfnum = dart.constFn(async.StreamController$(RectangleLOfnum())))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var DomServiceLToNull = () => (DomServiceLToNull = dart.constFn(dart.fnType(core.Null, [DomServiceL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var numLAndnumLToboolL = () => (numLAndnumLToboolL = dart.constFn(dart.fnType(boolL(), [numL(), numL()])))();
  var RectangleLOfnumAndRectangleLOfnumToboolL = () => (RectangleLOfnumAndRectangleLOfnumToboolL = dart.constFn(dart.fnType(boolL(), [RectangleLOfnum(), RectangleLOfnum()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var voidTovoid = () => (voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))();
  var StringLAnddynamicToNull = () => (StringLAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [StringL(), dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/laminate/ruler/ruler_interface.dart";
  const _is_Ruler_default = Symbol('_is_Ruler_default');
  ruler_interface.Ruler$ = dart.generic(E => {
    class Ruler extends core.Object {}
    (Ruler.new = function() {
      ;
    }).prototype = Ruler.prototype;
    dart.addTypeTests(Ruler);
    Ruler.prototype[_is_Ruler_default] = true;
    dart.addTypeCaches(Ruler);
    dart.setLibraryUri(Ruler, L0);
    return Ruler;
  });
  ruler_interface.Ruler = ruler_interface.Ruler$();
  dart.addTypeTests(ruler_interface.Ruler, _is_Ruler_default);
  var _addedCssClasses = dart.privateName(ruler_interface, "_addedCssClasses");
  const _is_RulerBase_default = Symbol('_is_RulerBase_default');
  ruler_interface.RulerBase$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    class RulerBase extends core.Object {
      measure(element, opts) {
        EL().as(element);
        let offset = opts && 'offset' in opts ? opts.offset : false;
        return this.onRead().then(RectangleLOfnumL(), dart.fn(_ => this.measureSync(element, {offset: offset}), voidToRectangleLOfnumL()));
      }
      track(element) {
        EL().as(element);
        let controller = null;
        let subscription = null;
        controller = StreamControllerOfRectangleLOfnum().new({sync: true, onListen: dart.fn(() => {
            this.measure(element).then(dart.void, dart.bind(controller, 'add'));
            subscription = this.onLayoutChanged.listen(dart.fn(_ => {
              controller.add(this.measureSync(element));
            }, DomServiceLToNull()), {onDone: dart.fn(() => {
                controller.close();
              }, VoidToNull())});
          }, VoidToNull()), onCancel: dart.fn(() => {
            subscription.cancel();
          }, VoidToNull())});
        return controller.stream.distinct(dart.fn((previous, next) => {
          if (previous == null || next == null) return previous == next;
          function withinEpsilon(a, b) {
            return (dart.notNull(a) - dart.notNull(b))[$abs]() < 0.01;
          }
          dart.fn(withinEpsilon, numLAndnumLToboolL());
          return dart.test(withinEpsilon(previous[$top], next[$top])) && dart.test(withinEpsilon(previous[$left], next[$left])) && dart.test(withinEpsilon(previous[$width], next[$width])) && dart.test(withinEpsilon(previous[$height], next[$height]));
        }, RectangleLOfnumAndRectangleLOfnumToboolL()));
      }
      update(element, opts) {
        EL().as(element);
        let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
        let visibility = opts && 'visibility' in opts ? opts.visibility : null;
        let position = opts && 'position' in opts ? opts.position : null;
        let width = opts && 'width' in opts ? opts.width : null;
        let height = opts && 'height' in opts ? opts.height : null;
        let left = opts && 'left' in opts ? opts.left : null;
        let top = opts && 'top' in opts ? opts.top : null;
        let right = opts && 'right' in opts ? opts.right : null;
        let bottom = opts && 'bottom' in opts ? opts.bottom : null;
        let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
        let useCssTransform = opts && 'useCssTransform' in opts ? opts.useCssTransform : true;
        const doSyncUpdate = () => {
          this.updateSync(element, {cssClasses: cssClasses, visibility: visibility, position: position, width: width, height: height, top: top, left: left, right: right, bottom: bottom, zIndex: zIndex, useCssTransform: useCssTransform});
        };
        dart.fn(doSyncUpdate, VoidTovoid());
        if (dart.test(this.canSyncWrite(element))) {
          doSyncUpdate();
          return FutureOfvoid().value();
        }
        return this.onWrite().then(dart.void, dart.fn(_ => doSyncUpdate(), voidTovoid()));
      }
      updateSync(element, opts) {
        let t0;
        EL().as(element);
        let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
        let visibility = opts && 'visibility' in opts ? opts.visibility : null;
        let position = opts && 'position' in opts ? opts.position : null;
        let width = opts && 'width' in opts ? opts.width : null;
        let height = opts && 'height' in opts ? opts.height : null;
        let left = opts && 'left' in opts ? opts.left : null;
        let top = opts && 'top' in opts ? opts.top : null;
        let right = opts && 'right' in opts ? opts.right : null;
        let bottom = opts && 'bottom' in opts ? opts.bottom : null;
        let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
        let useCssTransform = opts && 'useCssTransform' in opts ? opts.useCssTransform : true;
        let setProperty = dart.fn((name, value) => {
          this.setCssPropertySync(element, name, StringL().as(value));
        }, StringLAnddynamicToNull());
        setProperty("display", null);
        setProperty("visibility", null);
        if (visibility != null && !dart.equals(visibility, visibility$.Visibility.Visible)) {
          visibility.apply(setProperty);
        }
        if (cssClasses != null) {
          let lastCssClasses = this[_addedCssClasses]._get(element);
          if (lastCssClasses != null) {
            this.removeCssClassesSync(element, lastCssClasses);
          }
          this.addCssClassesSync(element, cssClasses);
          this[_addedCssClasses]._set(element, cssClasses);
        }
        if (width != null) {
          setProperty("width", width === 0 ? "0" : dart.str(width) + "px");
        } else {
          setProperty("width", null);
        }
        if (height != null) {
          setProperty("height", height === 0 ? "0" : dart.str(height) + "px");
        } else {
          setProperty("height", null);
        }
        t0 = position;
        t0 == null ? null : t0.apply(setProperty);
        if (dart.test(useCssTransform)) {
          let buffer = new core.StringBuffer.new();
          if (left != null) {
            setProperty("left", "0");
            buffer.write("translateX(" + dart.str(left[$round]()) + "px) ");
          } else {
            setProperty("left", null);
          }
          if (top != null) {
            setProperty("top", "0");
            buffer.write("translateY(" + dart.str(top[$round]()) + "px)");
          } else {
            setProperty("top", null);
          }
          setProperty("transform", buffer.toString());
          setProperty("-webkit-transform", buffer.toString());
          if (dart.test(buffer.isNotEmpty)) {
            setProperty("transform", buffer.toString());
            setProperty("-webkit-transform", buffer.toString());
          }
        } else {
          if (left != null) {
            setProperty("left", left === 0 ? "0" : dart.str(left) + "px");
          } else {
            setProperty("left", null);
          }
          if (top != null) {
            setProperty("top", top === 0 ? "0" : dart.str(top) + "px");
          } else {
            setProperty("top", null);
          }
          setProperty("transform", null);
          setProperty("-webkit-transform", null);
        }
        if (right != null) {
          setProperty("right", right === 0 ? "0" : dart.str(right) + "px");
        } else {
          setProperty("right", null);
        }
        if (bottom != null) {
          setProperty("bottom", bottom === 0 ? "0" : dart.str(bottom) + "px");
        } else {
          setProperty("bottom", null);
        }
        if (zIndex != null) {
          setProperty("z-index", dart.str(zIndex));
        } else {
          setProperty("z-index", null);
        }
        if (visibility != null && dart.equals(visibility, visibility$.Visibility.Visible)) {
          visibility.apply(setProperty);
        }
      }
    }
    (RulerBase.new = function() {
      this[_addedCssClasses] = new (ExpandoOfListLOfStringL()).new();
      ;
    }).prototype = RulerBase.prototype;
    dart.addTypeTests(RulerBase);
    RulerBase.prototype[_is_RulerBase_default] = true;
    dart.addTypeCaches(RulerBase);
    RulerBase[dart.implements] = () => [ruler_interface.Ruler$(dart.legacy(E))];
    dart.setMethodSignature(RulerBase, () => ({
      __proto__: dart.getMethods(RulerBase.__proto__),
      measure: dart.fnType(dart.legacy(async.Future$(dart.legacy(math.Rectangle$(core.num)))), [dart.legacy(core.Object)], {offset: dart.legacy(core.bool)}, {}),
      track: dart.fnType(dart.legacy(async.Stream$(dart.legacy(math.Rectangle$(core.num)))), [dart.legacy(core.Object)]),
      update: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Object)], {bottom: dart.legacy(core.num), cssClasses: dart.legacy(core.List$(dart.legacy(core.String))), height: dart.legacy(core.num), left: dart.legacy(core.num), position: dart.legacy(position.Position), right: dart.legacy(core.num), top: dart.legacy(core.num), useCssTransform: dart.legacy(core.bool), visibility: dart.legacy(visibility$.Visibility), width: dart.legacy(core.num), zIndex: dart.legacy(core.num)}, {}),
      updateSync: dart.fnType(dart.void, [dart.legacy(core.Object)], {bottom: dart.legacy(core.num), cssClasses: dart.legacy(core.List$(dart.legacy(core.String))), height: dart.legacy(core.num), left: dart.legacy(core.num), position: dart.legacy(position.Position), right: dart.legacy(core.num), top: dart.legacy(core.num), useCssTransform: dart.legacy(core.bool), visibility: dart.legacy(visibility$.Visibility), width: dart.legacy(core.num), zIndex: dart.legacy(core.num)}, {})
    }));
    dart.setLibraryUri(RulerBase, L0);
    dart.setFieldSignature(RulerBase, () => ({
      __proto__: dart.getFields(RulerBase.__proto__),
      [_addedCssClasses]: dart.finalFieldType(dart.legacy(core.Expando$(dart.legacy(core.List$(dart.legacy(core.String))))))
    }));
    return RulerBase;
  });
  ruler_interface.RulerBase = ruler_interface.RulerBase$();
  dart.addTypeTests(ruler_interface.RulerBase, _is_RulerBase_default);
  dart.trackLibraries("packages/angular_components/src/laminate/ruler/ruler_interface", {
    "package:angular_components/src/laminate/ruler/ruler_interface.dart": ruler_interface
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ruler_interface.dart"],"names":[],"mappings":"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","file":"ruler_interface.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__ruler__ruler_interface: ruler_interface
  };
}));

//# sourceMappingURL=ruler_interface.unsound.ddc.js.map
