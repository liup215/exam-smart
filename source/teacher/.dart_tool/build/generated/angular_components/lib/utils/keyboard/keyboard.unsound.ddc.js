define(['dart_sdk'], (function load__packages__angular_components__utils__keyboard__keyboard(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var keyboard = Object.create(dart.library);
  const CT = Object.create(null);
  keyboard.modifiersKeysFor = function modifiersKeysFor(event, opts) {
    let shiftKey = opts && 'shiftKey' in opts ? opts.shiftKey : false;
    let ctrlKey = opts && 'ctrlKey' in opts ? opts.ctrlKey : false;
    let altKey = opts && 'altKey' in opts ? opts.altKey : false;
    let metaKey = opts && 'metaKey' in opts ? opts.metaKey : false;
    return dart.equals(event.shiftKey, shiftKey) && dart.equals(event.altKey, altKey) && dart.equals(event.ctrlKey, ctrlKey) && dart.equals(event.metaKey, metaKey);
  };
  dart.trackLibraries("packages/angular_components/utils/keyboard/keyboard", {
    "package:angular_components/utils/keyboard/keyboard.dart": keyboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard.dart"],"names":[],"mappings":";;;;;;;wDAWoC;QAC1B;QACD;QACA;QACA;AACP,UAAuB,AAEQ,aAFvB,AAAM,KAAD,WAAa,QAAQ,KAChB,YAAb,AAAM,KAAD,SAAW,MAAM,KACR,YAAd,AAAM,KAAD,UAAY,OAAO,KACV,YAAd,AAAM,KAAD,UAAY,OAAO;EAC/B","file":"keyboard.unsound.ddc.js"}');
  // Exports:
  return {
    utils__keyboard__keyboard: keyboard
  };
}));

//# sourceMappingURL=keyboard.unsound.ddc.js.map
