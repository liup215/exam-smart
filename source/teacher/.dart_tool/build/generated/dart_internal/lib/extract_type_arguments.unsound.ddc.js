define(['dart_sdk'], (function load__packages__dart_internal__extract_type_arguments(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var extract_type_arguments = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/dart_internal/extract_type_arguments.dart";
  extract_type_arguments.extractIterableTypeArgument = function extractIterableTypeArgument(iterable, extract) {
    if (iterable == null) dart.nullFailed(L0, 26, 18, "iterable");
    if (extract == null) dart.nullFailed(L0, 26, 50, "extract");
    return _internal.extractTypeArguments(core.Iterable, iterable, extract);
  };
  extract_type_arguments.extractMapTypeArguments = function extractMapTypeArguments(map, extract) {
    if (map == null) dart.nullFailed(L0, 43, 37, "map");
    if (extract == null) dart.nullFailed(L0, 43, 67, "extract");
    return _internal.extractTypeArguments(core.Map, map, extract);
  };
  dart.trackLibraries("packages/dart_internal/extract_type_arguments", {
    "package:dart_internal/extract_type_arguments.dart": extract_type_arguments
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["extract_type_arguments.dart"],"names":[],"mappings":";;;;;;;;;4FAyBiB,UAAgC;QAAhC;QAAgC;AAC7C,yDAAwC,QAAQ,EAAE,OAAO;EAAC;oFAgB1B,KAA8B;QAA9B;QAA8B;AAC9D,oDAAmC,GAAG,EAAE,OAAO;EAAC","file":"extract_type_arguments.unsound.ddc.js"}');
  // Exports:
  return {
    extract_type_arguments: extract_type_arguments
  };
}));

//# sourceMappingURL=extract_type_arguments.unsound.ddc.js.map
