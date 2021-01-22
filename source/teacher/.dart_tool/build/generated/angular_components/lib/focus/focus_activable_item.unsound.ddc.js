define(['dart_sdk', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface'], (function load__packages__angular_components__focus__focus_activable_item(dart_sdk, packages__angular_components__focus__focus, packages__angular_components__focus__focus_interface) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  var focus_activable_item = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_activable_item.dart";
  var key = dart.privateName(focus_activable_item, "FocusActivableItemDirective.key");
  focus_activable_item.FocusActivableItemDirective = class FocusActivableItemDirective extends focus.RootFocusable {
    get key() {
      return this[key];
    }
    set key(value) {
      this[key] = value;
    }
  };
  (focus_activable_item.FocusActivableItemDirective.new = function(root) {
    this[key] = null;
    focus_activable_item.FocusActivableItemDirective.__proto__.new.call(this, root);
    ;
  }).prototype = focus_activable_item.FocusActivableItemDirective.prototype;
  dart.addTypeTests(focus_activable_item.FocusActivableItemDirective);
  dart.addTypeCaches(focus_activable_item.FocusActivableItemDirective);
  focus_activable_item.FocusActivableItemDirective[dart.implements] = () => [focus_activable_item.FocusableActivateItem];
  dart.setLibraryUri(focus_activable_item.FocusActivableItemDirective, L0);
  dart.setFieldSignature(focus_activable_item.FocusActivableItemDirective, () => ({
    __proto__: dart.getFields(focus_activable_item.FocusActivableItemDirective.__proto__),
    key: dart.fieldType(dart.legacy(core.String))
  }));
  focus_activable_item.FocusableActivateItem = class FocusableActivateItem extends core.Object {};
  (focus_activable_item.FocusableActivateItem.new = function() {
    ;
  }).prototype = focus_activable_item.FocusableActivateItem.prototype;
  dart.addTypeTests(focus_activable_item.FocusableActivateItem);
  dart.addTypeCaches(focus_activable_item.FocusableActivateItem);
  focus_activable_item.FocusableActivateItem[dart.implements] = () => [focus_interface.Focusable];
  dart.setLibraryUri(focus_activable_item.FocusableActivateItem, L0);
  dart.trackLibraries("packages/angular_components/focus/focus_activable_item", {
    "package:angular_components/focus/focus_activable_item.dart": focus_activable_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_activable_item.dart"],"names":[],"mappings":";;;;;;;;;;;;IAsBS;;;;;;;mEAEiC;IAFjC;AAEyC,8EAAM,IAAI;;EAAC;;;;;;;;;;;;EAM7D","file":"focus_activable_item.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_activable_item: focus_activable_item
  };
}));

//# sourceMappingURL=focus_activable_item.unsound.ddc.js.map
