define(['dart_sdk'], (function load__packages__angular_compiler__v1__src__metadata__change_detection_constants(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var change_detection_constants = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_compiler/v1/src/metadata/change_detection_constants.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(intL(), StringL(), [0, "Default", 5, "OnPush"]);
    }
  }, false);
  change_detection_constants.ChangeDetectorState = class ChangeDetectorState extends core.Object {};
  (change_detection_constants.ChangeDetectorState.new = function() {
    ;
  }).prototype = change_detection_constants.ChangeDetectorState.prototype;
  dart.addTypeTests(change_detection_constants.ChangeDetectorState);
  dart.addTypeCaches(change_detection_constants.ChangeDetectorState);
  dart.setLibraryUri(change_detection_constants.ChangeDetectorState, L0);
  dart.defineLazy(change_detection_constants.ChangeDetectorState, {
    /*change_detection_constants.ChangeDetectorState.NeverChecked*/get NeverChecked() {
      return 0;
    },
    /*change_detection_constants.ChangeDetectorState.CheckedBefore*/get CheckedBefore() {
      return 1;
    },
    /*change_detection_constants.ChangeDetectorState.Errored*/get Errored() {
      return 2;
    }
  }, true);
  var C0;
  change_detection_constants.ChangeDetectionStrategy = class ChangeDetectionStrategy extends core.Object {
    static toPrettyString(strategy) {
      if (dart.test(change_detection_constants.ChangeDetectionStrategy._prettyStrings[$containsKey](strategy))) {
        return change_detection_constants.ChangeDetectionStrategy._prettyStrings[$_get](strategy);
      }
      return "Internal";
    }
  };
  (change_detection_constants.ChangeDetectionStrategy.new = function() {
    ;
  }).prototype = change_detection_constants.ChangeDetectionStrategy.prototype;
  dart.addTypeTests(change_detection_constants.ChangeDetectionStrategy);
  dart.addTypeCaches(change_detection_constants.ChangeDetectionStrategy);
  dart.setLibraryUri(change_detection_constants.ChangeDetectionStrategy, L0);
  dart.defineLazy(change_detection_constants.ChangeDetectionStrategy, {
    /*change_detection_constants.ChangeDetectionStrategy.Default*/get Default() {
      return 0;
    },
    /*change_detection_constants.ChangeDetectionStrategy.CheckOnce*/get CheckOnce() {
      return 1;
    },
    /*change_detection_constants.ChangeDetectionStrategy.Checked*/get Checked() {
      return 2;
    },
    /*change_detection_constants.ChangeDetectionStrategy.CheckAlways*/get CheckAlways() {
      return 3;
    },
    /*change_detection_constants.ChangeDetectionStrategy.Detached*/get Detached() {
      return 4;
    },
    /*change_detection_constants.ChangeDetectionStrategy.OnPush*/get OnPush() {
      return 5;
    },
    /*change_detection_constants.ChangeDetectionStrategy._prettyStrings*/get _prettyStrings() {
      return C0 || CT.C0;
    }
  }, true);
  change_detection_constants.ChangeDetectionCheckedState = class ChangeDetectionCheckedState extends core.Object {};
  (change_detection_constants.ChangeDetectionCheckedState.new = function() {
    ;
  }).prototype = change_detection_constants.ChangeDetectionCheckedState.prototype;
  dart.addTypeTests(change_detection_constants.ChangeDetectionCheckedState);
  dart.addTypeCaches(change_detection_constants.ChangeDetectionCheckedState);
  dart.setLibraryUri(change_detection_constants.ChangeDetectionCheckedState, L0);
  dart.defineLazy(change_detection_constants.ChangeDetectionCheckedState, {
    /*change_detection_constants.ChangeDetectionCheckedState.checkOnce*/get checkOnce() {
      return 1;
    },
    /*change_detection_constants.ChangeDetectionCheckedState.waitingForMarkForCheck*/get waitingForMarkForCheck() {
      return 2;
    },
    /*change_detection_constants.ChangeDetectionCheckedState.checkAlways*/get checkAlways() {
      return 3;
    },
    /*change_detection_constants.ChangeDetectionCheckedState.waitingToBeAttached*/get waitingToBeAttached() {
      return 4;
    }
  }, true);
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/change_detection_constants", {
    "package:angular_compiler/v1/src/metadata/change_detection_constants.dart": change_detection_constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["change_detection_constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;EAeA;;;;;MAXmB,2DAAY;;;MAIZ,4DAAa;;;MAMb,sDAAO;;;;;;0BAgDS;AAC/B,oBAAI,AAAe,gFAAY,QAAQ;AACrC,cAAO,AAAc,0EAAC,QAAQ;;AAIhC,YAAO;IACT;;;;EACF;;;;;MA3Ce,0DAAO;;;MAGP,4DAAS;;;MAGT,0DAAO;;;MAGP,8DAAW;;;MAGX,2DAAQ;;;MAgBR,yDAAM;;;MAEN,iEAAc;;;;;;;EAsC7B;;;;;MAhBe,gEAAS;;;MAKT,6EAAsB;;;MAGtB,kEAAW;;;MAOX,0EAAmB","file":"change_detection_constants.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__change_detection_constants: change_detection_constants
  };
}));

//# sourceMappingURL=change_detection_constants.unsound.ddc.js.map
