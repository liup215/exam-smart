define(['dart_sdk'], (function load__packages__angular_components__mixins__track_layout_changes(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var track_layout_changes = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/mixins/track_layout_changes.dart";
  var trackLayoutChanges = dart.privateName(track_layout_changes, "TrackLayoutChangesMixin.trackLayoutChanges");
  track_layout_changes.TrackLayoutChangesMixin = class TrackLayoutChangesMixin extends core.Object {
    get trackLayoutChanges() {
      return this[trackLayoutChanges];
    }
    set trackLayoutChanges(value) {
      this[trackLayoutChanges] = value;
    }
  };
  (track_layout_changes.TrackLayoutChangesMixin.new = function() {
    this[trackLayoutChanges] = true;
    ;
  }).prototype = track_layout_changes.TrackLayoutChangesMixin.prototype;
  dart.addTypeTests(track_layout_changes.TrackLayoutChangesMixin);
  dart.addTypeCaches(track_layout_changes.TrackLayoutChangesMixin);
  dart.setLibraryUri(track_layout_changes.TrackLayoutChangesMixin, L0);
  dart.setFieldSignature(track_layout_changes.TrackLayoutChangesMixin, () => ({
    __proto__: dart.getFields(track_layout_changes.TrackLayoutChangesMixin.__proto__),
    trackLayoutChanges: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/mixins/track_layout_changes", {
    "package:angular_components/mixins/track_layout_changes.dart": track_layout_changes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["track_layout_changes.dart"],"names":[],"mappings":";;;;;;;;;;IAaO;;;;;;;;+BAAqB;;EAC5B","file":"track_layout_changes.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__track_layout_changes: track_layout_changes
  };
}));

//# sourceMappingURL=track_layout_changes.unsound.ddc.js.map
