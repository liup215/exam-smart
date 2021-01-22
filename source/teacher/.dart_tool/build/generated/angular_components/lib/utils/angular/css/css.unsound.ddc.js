define(['dart_sdk'], (function load__packages__angular_components__utils__angular__css__css(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var css = Object.create(dart.library);
  var $startsWith = dartx.startsWith;
  const CT = Object.create(null);
  css.constructEncapsulatedCss = function constructEncapsulatedCss(className, classes) {
    let t0;
    let result = (t0 = className, t0 == null ? "" : t0);
    for (let i of classes) {
      if (i[$startsWith]("_ngcontent")) result = dart.notNull(result) + (" " + dart.str(i));
    }
    return result;
  };
  dart.trackLibraries("packages/angular_components/utils/angular/css/css", {
    "package:angular_components/utils/angular/css/css.dart": css
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["css.dart"],"names":[],"mappings":";;;;;;;;mEAyBuC,WAAuB;;AACxD,kBAAmB,KAAV,SAAS,QAAT,OAAa;AAC1B,aAAW,IAAK,QAAO;AAErB,UAAI,AAAE,CAAD,cAAY,eAAe,AAAe,SAAR,aAAP,MAAM,KAAI,AAAK,eAAF,CAAC;;AAEhD,UAAO,OAAM;EACf","file":"css.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__css__css: css
  };
}));

//# sourceMappingURL=css.unsound.ddc.js.map
