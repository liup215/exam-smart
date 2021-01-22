define(['dart_sdk'], (function load__packages__meta__dart2js(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dart2js = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:meta/dart2js.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: dart2js._NoInline.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: dart2js._TryInline.prototype
      });
    }
  }, false);
  dart2js._NoInline = class _NoInline extends core.Object {};
  (dart2js._NoInline.new = function() {
    ;
  }).prototype = dart2js._NoInline.prototype;
  dart.addTypeTests(dart2js._NoInline);
  dart.addTypeCaches(dart2js._NoInline);
  dart.setLibraryUri(dart2js._NoInline, L0);
  dart2js._TryInline = class _TryInline extends core.Object {};
  (dart2js._TryInline.new = function() {
    ;
  }).prototype = dart2js._TryInline.prototype;
  dart.addTypeTests(dart2js._TryInline);
  dart.addTypeCaches(dart2js._TryInline);
  dart.setLibraryUri(dart2js._TryInline, L0);
  var C0;
  var C1;
  dart.defineLazy(dart2js, {
    /*dart2js.noInline*/get noInline() {
      return C0 || CT.C0;
    },
    /*dart2js.tryInline*/get tryInline() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/meta/dart2js", {
    "package:meta/dart2js.dart": dart2js
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dart2js.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;EAuCmB;;;;;;;EAIC;;;;;;;MAxBJ,gBAAQ;;;MAiBP,iBAAS","file":"dart2js.unsound.ddc.js"}');
  // Exports:
  return {
    dart2js: dart2js
  };
}));

//# sourceMappingURL=dart2js.unsound.ddc.js.map
