define(['dart_sdk'], (function load__packages__angular_components__utils__browser__feature_detector__feature_detector(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const html = dart_sdk.html;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var feature_detector = Object.create(dart.library);
  var $contains = dartx.contains;
  var $position = dartx.position;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  const CT = Object.create(null);
  feature_detector.supportsHover = function supportsHover(window) {
    let t0, t0$;
    return !(dart.test((t0$ = (t0 = window.matchMedia("(hover: none)"), t0 == null ? null : t0.matches), t0$ == null ? false : t0$)) || window.navigator.userAgent[$contains]("Nexus 9"));
  };
  feature_detector.isHammerLoaded = function isHammerLoaded() {
    return js.context.hasProperty("Hammer");
  };
  dart.defineLazy(feature_detector, {
    /*feature_detector.isTouchInterface*/get isTouchInterface() {
      let t0;
      return dart.test((t0 = html.window.matchMedia("(pointer: coarse)").matches, t0 == null ? false : t0)) || dart.test(js.context.hasProperty("__acxForceTouchEnabled"));
    },
    /*feature_detector.supportsAnimationApi*/get supportsAnimationApi() {
      return dart.test(js_util.hasProperty(html.DivElement.new(), "animate")) && !dart.test(js.context.hasProperty("__acxDisableWebAnimationsApi"));
    },
    /*feature_detector.supportsIntersectionObserver*/get supportsIntersectionObserver() {
      return js.context.hasProperty("IntersectionObserver");
    },
    /*feature_detector.supportsResizeObserver*/get supportsResizeObserver() {
      return js.context.hasProperty("ResizeObserver");
    },
    /*feature_detector.supportsPositionSticky*/get supportsPositionSticky() {
      return dart.fn(() => {
        let el = html.DivElement.new();
        el.style.cssText = "position: sticky";
        return el.style[$position] === "sticky";
      }, VoidToboolL())();
    },
    /*feature_detector.isFirefox*/get isFirefox() {
      return html.window.navigator.userAgent[$contains]("Firefox/");
    },
    /*feature_detector.isEdge*/get isEdge() {
      return html.window.navigator.userAgent[$contains]("Edge/");
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/feature_detector/feature_detector", {
    "package:angular_components/utils/browser/feature_detector/feature_detector.dart": feature_detector
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["feature_detector.dart"],"names":[],"mappings":";;;;;;;;;;;;;;0DAe0B;;AACtB,wBAA+C,YAA5C,AAAO,MAAD,YAAY,+BAAX,OAA6B,oBAA7B,OAAwC,iBAC9C,AAAO,AAAU,AAAU,MAArB,gCAA8B;EAAW;;AAqB9B,UAAG,AAAQ,wBAAY;EAAS;;MAV9C,iCAAgB;;YACmC,YAAV,KAA/C,AAAO,AAAgC,uBAArB,oCAAqB,OAAW,0BAC5C,AAAQ,uBAAY;;MAWpB,qCAAoB;YACkB,WAA7C,oBAAoB,uBAAc,0BAC1B,AAAQ,uBAAY;;MAGrB,6CAA4B;YAChC,AAAQ,wBAAY;;MAGhB,uCAAsB;YAAM,AAAQ,wBAAY;;MAGhD,uCAAsB;YAAG,AAInC;AAHK,iBAAK;AAC4B,QAArC,AAAG,AAAM,EAAP,iBAAiB;AACnB,cAAO,AAAG,AAAM,AAAS,GAAhB,sBAAmB;;;MAInB,0BAAS;YAAG,AAAO,AAAU,AAAU,4CAAS;;MAGhD,uBAAM;YAAG,AAAO,AAAU,AAAU,4CAAS","file":"feature_detector.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__feature_detector__feature_detector: feature_detector
  };
}));

//# sourceMappingURL=feature_detector.unsound.ddc.js.map
