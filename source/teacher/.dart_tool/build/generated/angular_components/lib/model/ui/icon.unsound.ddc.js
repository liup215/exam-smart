define(['dart_sdk'], (function load__packages__angular_components__model__ui__icon(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var icon = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/ui/icon.dart";
  icon.HasIcon = class HasIcon extends core.Object {};
  (icon.HasIcon.new = function() {
    ;
  }).prototype = icon.HasIcon.prototype;
  dart.addTypeTests(icon.HasIcon);
  dart.addTypeCaches(icon.HasIcon);
  dart.setLibraryUri(icon.HasIcon, L0);
  icon.HasHoverIcon = class HasHoverIcon extends core.Object {};
  (icon.HasHoverIcon.new = function() {
    ;
  }).prototype = icon.HasHoverIcon.prototype;
  dart.addTypeTests(icon.HasHoverIcon);
  dart.addTypeCaches(icon.HasHoverIcon);
  dart.setLibraryUri(icon.HasHoverIcon, L0);
  var name$ = dart.privateName(icon, "Icon.name");
  icon.Icon = class Icon extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
  };
  (icon.Icon.new = function(name) {
    this[name$] = name;
    ;
  }).prototype = icon.Icon.prototype;
  (icon.Icon.blank = function() {
    this[name$] = "";
    ;
  }).prototype = icon.Icon.prototype;
  dart.addTypeTests(icon.Icon);
  dart.addTypeCaches(icon.Icon);
  dart.setLibraryUri(icon.Icon, L0);
  dart.setFieldSignature(icon.Icon, () => ({
    __proto__: dart.getFields(icon.Icon.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/model/ui/icon", {
    "package:angular_components/model/ui/icon.dart": icon
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon.dart"],"names":[],"mappings":";;;;;;;;;;;EAOA;;;;;;;EAMA;;;;;;IAKe;;;;;;;;IAEG;;EAAK;;IAWK,cAAE;;EAAE","file":"icon.unsound.ddc.js"}');
  // Exports:
  return {
    model__ui__icon: icon
  };
}));

//# sourceMappingURL=icon.unsound.ddc.js.map
