define(['dart_sdk'], (function load__packages__angular_components__material_ripple__material_ripple_scss_css(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var material_ripple$46scss$46css = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(material_ripple$46scss$46css, {
    /*material_ripple$46scss$46css.styles*/get styles() {
      return ["material-ripple {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: inherit;\n  contain: strict;\n  transform: translateX(0);\n}\n\n.__acx-ripple {\n  position: absolute;\n  width: 256px;\n  height: 256px;\n  background-color: currentColor;\n  border-radius: 50%;\n  pointer-events: none;\n  will-change: opacity, transform;\n  opacity: 0;\n}\n.__acx-ripple.fallback {\n  animation: __acx-ripple 300ms linear;\n  transform: translateZ(0);\n}\n\n@keyframes __acx-ripple {\n  from {\n    opacity: 0;\n    transform: translateZ(0) scale(0.125);\n  }\n  25%, 50% {\n    opacity: 0.16;\n  }\n  to {\n    opacity: 0;\n    transform: translateZ(0) scale(4);\n  }\n}\n"];
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_ripple/material_ripple.scss.css", {
    "package:angular_components/material_ripple/material_ripple.scss.css.dart": material_ripple$46scss$46css
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_ripple.scss.css.dart"],"names":[],"mappings":";;;;;;;;MAAoB,mCAAM;YAAG,EAAC","file":"material_ripple.scss.css.unsound.ddc.js"}');
  // Exports:
  return {
    material_ripple__material_ripple$46scss$46css: material_ripple$46scss$46css
  };
}));

//# sourceMappingURL=material_ripple.scss.css.unsound.ddc.js.map
