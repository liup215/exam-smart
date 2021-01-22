define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__utils__disposer__disposable_callback(dart_sdk, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var disposable_callback = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/disposer/disposable_callback.dart";
  var _callback = dart.privateName(disposable_callback, "_callback");
  disposable_callback.DisposableCallbackBase = class DisposableCallbackBase extends core.Object {
    dispose() {
      this[_callback] = null;
    }
  };
  (disposable_callback.DisposableCallbackBase.new = function() {
    this[_callback] = null;
    ;
  }).prototype = disposable_callback.DisposableCallbackBase.prototype;
  dart.addTypeTests(disposable_callback.DisposableCallbackBase);
  dart.addTypeCaches(disposable_callback.DisposableCallbackBase);
  disposable_callback.DisposableCallbackBase[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(disposable_callback.DisposableCallbackBase, () => ({
    __proto__: dart.getMethods(disposable_callback.DisposableCallbackBase.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(disposable_callback.DisposableCallbackBase, L0);
  dart.setFieldSignature(disposable_callback.DisposableCallbackBase, () => ({
    __proto__: dart.getFields(disposable_callback.DisposableCallbackBase.__proto__),
    [_callback]: dart.fieldType(dart.legacy(core.Function))
  }));
  disposable_callback.DisposableCallback = class DisposableCallback extends disposable_callback.DisposableCallbackBase {
    call() {
      if (this[_callback] != null) {
        dart.dsend(this, _callback, []);
      }
    }
  };
  (disposable_callback.DisposableCallback.new = function(callback) {
    disposable_callback.DisposableCallback.__proto__.new.call(this);
    this[_callback] = callback;
  }).prototype = disposable_callback.DisposableCallback.prototype;
  dart.addTypeTests(disposable_callback.DisposableCallback);
  dart.addTypeCaches(disposable_callback.DisposableCallback);
  dart.setMethodSignature(disposable_callback.DisposableCallback, () => ({
    __proto__: dart.getMethods(disposable_callback.DisposableCallback.__proto__),
    call: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(disposable_callback.DisposableCallback, L0);
  const _is_SingleValueCallback_default = Symbol('_is_SingleValueCallback_default');
  disposable_callback.SingleValueCallback$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class SingleValueCallback extends disposable_callback.DisposableCallbackBase {
      call(value) {
        let t0;
        TL().as(value);
        if (this[_callback] != null) {
          t0 = value;
          dart.dsend(this, _callback, [t0]);
        }
      }
    }
    (SingleValueCallback.new = function(callback) {
      SingleValueCallback.__proto__.new.call(this);
      this[_callback] = callback;
    }).prototype = SingleValueCallback.prototype;
    dart.addTypeTests(SingleValueCallback);
    SingleValueCallback.prototype[_is_SingleValueCallback_default] = true;
    dart.addTypeCaches(SingleValueCallback);
    dart.setMethodSignature(SingleValueCallback, () => ({
      __proto__: dart.getMethods(SingleValueCallback.__proto__),
      call: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(SingleValueCallback, L0);
    return SingleValueCallback;
  });
  disposable_callback.SingleValueCallback = disposable_callback.SingleValueCallback$();
  dart.addTypeTests(disposable_callback.SingleValueCallback, _is_SingleValueCallback_default);
  dart.trackLibraries("packages/angular_components/utils/disposer/disposable_callback", {
    "package:angular_components/utils/disposer/disposable_callback.dart": disposable_callback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["disposable_callback.dart"],"names":[],"mappings":";;;;;;;;;;;;AAqBoB,MAAhB,kBAAY;IACd;;;IALS;;EAMX;;;;;;;;;;;;;;;AAWI,UAAI,mBAAa;AACJ,QAAF,WAAT;;IAEJ;;yDARqC;AAArC;AACsB,IAApB,kBAAY,QAAQ;EACtB;;;;;;;;;;;;WAeY;;;AACV,YAAI,mBAAa;AACC,eAAN,KAAK;UAAN,WAAT;;MAEJ;;wCAR6C;AAA7C;AACsB,MAApB,kBAAY,QAAQ;IACtB","file":"disposable_callback.unsound.ddc.js"}');
  // Exports:
  return {
    utils__disposer__disposable_callback: disposable_callback
  };
}));

//# sourceMappingURL=disposable_callback.unsound.ddc.js.map
