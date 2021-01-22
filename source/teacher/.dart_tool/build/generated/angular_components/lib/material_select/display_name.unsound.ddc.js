define(['dart_sdk', 'packages/angular_components/model/ui/display_name'], (function load__packages__angular_components__material_select__display_name(dart_sdk, packages__angular_components__model__ui__display_name) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const display_name = packages__angular_components__model__ui__display_name.model__ui__display_name;
  var display_name$ = Object.create(dart.library);
  var HasUIDisplayNameL = () => (HasUIDisplayNameL = dart.constFn(dart.legacy(display_name.HasUIDisplayName)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  const CT = Object.create(null);
  display_name$.displayNameRendererDirective = function displayNameRendererDirective(hasRenderer) {
    if (hasRenderer != null) hasRenderer.itemRenderer = display_name$._displayNameRenderer;
  };
  dart.defineLazy(display_name$, {
    /*display_name$._displayNameRenderer*/get _displayNameRenderer() {
      return dart.fn(item => HasUIDisplayNameL().as(item).uiDisplayName, dynamicToStringL());
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/display_name", {
    "package:angular_components/material_select/display_name.dart": display_name$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["display_name.dart"],"names":[],"mappings":";;;;;;;;;;;qFAW8C;AAC5C,QAAI,WAAW,IAAI,MAAM,AAAY,AAAmC,WAApC,gBAAgB;EACtD;;MAEM,kCAAoB;YACtB,SAAS,QAAe,AAAqB,uBAA1B,IAAI","file":"display_name.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__display_name: display_name$
  };
}));

//# sourceMappingURL=display_name.unsound.ddc.js.map
