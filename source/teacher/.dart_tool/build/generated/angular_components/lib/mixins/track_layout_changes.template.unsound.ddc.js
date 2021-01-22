define(['dart_sdk', 'packages/angular/angular.template'], (function load__packages__angular_components__mixins__track_layout_changes_template(dart_sdk, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var track_layout_changes$46template = Object.create(dart.library);
  const CT = Object.create(null);
  track_layout_changes$46template.initReflector = function initReflector() {
    if (dart.test(track_layout_changes$46template._visited)) {
      return;
    }
    track_layout_changes$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(track_layout_changes$46template, {
    /*track_layout_changes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/mixins/track_layout_changes.template", {
    "package:angular_components/mixins/track_layout_changes.template.dart": track_layout_changes$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["track_layout_changes.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;EACF;;MARI,wCAAQ;YAAG","file":"track_layout_changes.template.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__track_layout_changes$46template: track_layout_changes$46template
  };
}));

//# sourceMappingURL=track_layout_changes.template.unsound.ddc.js.map
