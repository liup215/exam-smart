define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__model__observable__observable(dart_sdk, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var observable = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var ChangeL = () => (ChangeL = dart.constFn(dart.legacy(observable.Change)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var dynamicToFutureL = () => (dynamicToFutureL = dart.constFn(dart.fnType(FutureL(), [dart.dynamic])))();
  var dynamicAnddynamicToboolL = () => (dynamicAnddynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic, dart.dynamic])))();
  var StreamL = () => (StreamL = dart.constFn(dart.legacy(async.Stream)))();
  var StreamSubscriptionL = () => (StreamSubscriptionL = dart.constFn(dart.legacy(async.StreamSubscription)))();
  var LinkedMapOfStreamL$StreamSubscriptionL = () => (LinkedMapOfStreamL$StreamSubscriptionL = dart.constFn(_js_helper.LinkedMap$(StreamL(), StreamSubscriptionL())))();
  var DisposableL = () => (DisposableL = dart.constFn(dart.legacy(disposer.Disposable)))();
  var ObserveAwareL = () => (ObserveAwareL = dart.constFn(dart.legacy(observable.ObserveAware)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var StreamSubscriptionLToFutureLOfvoid = () => (StreamSubscriptionLToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [StreamSubscriptionL()])))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/angular_components/model/observable/observable.dart";
  var L0 = "package:angular_components/model/observable/observable.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(observable.ObservableReference._defaultEq, dynamicAnddynamicToboolL());
    }
  }, false);
  const _is_ObserveAware_default = Symbol('_is_ObserveAware_default');
  observable.ObserveAware$ = dart.generic(T => {
    class ObserveAware extends core.Object {}
    (ObserveAware.new = function() {
      ;
    }).prototype = ObserveAware.prototype;
    dart.addTypeTests(ObserveAware);
    ObserveAware.prototype[_is_ObserveAware_default] = true;
    dart.addTypeCaches(ObserveAware);
    dart.setLibraryUri(ObserveAware, L0);
    return ObserveAware;
  });
  observable.ObserveAware = observable.ObserveAware$();
  dart.addTypeTests(observable.ObserveAware, _is_ObserveAware_default);
  const _is_Change_default = Symbol('_is_Change_default');
  var previous$ = dart.privateName(observable, "Change.previous");
  var next$ = dart.privateName(observable, "Change.next");
  observable.Change$ = dart.generic(T => {
    class Change extends core.Object {
      get previous() {
        return this[previous$];
      }
      set previous(value) {
        super.previous = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      _equals(other) {
        if (other == null) return false;
        return ChangeL().is(other) && dart.equals(this.previous, other.previous) && dart.equals(this.next, other.next);
      }
      get hashCode() {
        return this.next == null ? 0 : dart.hashCode(this.next);
      }
      toString() {
        return "Change(" + dart.str(this.previous) + " ==> " + dart.str(this.next) + ")";
      }
    }
    (Change.new = function(previous, next) {
      this[previous$] = previous;
      this[next$] = next;
      ;
    }).prototype = Change.prototype;
    dart.addTypeTests(Change);
    Change.prototype[_is_Change_default] = true;
    dart.addTypeCaches(Change);
    dart.setMethodSignature(Change, () => ({
      __proto__: dart.getMethods(Change.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(Change, () => ({
      __proto__: dart.getGetters(Change.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(Change, L0);
    dart.setFieldSignature(Change, () => ({
      __proto__: dart.getFields(Change.__proto__),
      previous: dart.finalFieldType(dart.legacy(T)),
      next: dart.finalFieldType(dart.legacy(T))
    }));
    dart.defineExtensionMethods(Change, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Change, ['hashCode']);
    return Change;
  });
  observable.Change = observable.Change$();
  dart.addTypeTests(observable.Change, _is_Change_default);
  const _is_ChangeAware_default = Symbol('_is_ChangeAware_default');
  observable.ChangeAware$ = dart.generic(T => {
    class ChangeAware extends observable.ObserveAware$(dart.legacy(T)) {}
    (ChangeAware.new = function() {
      ;
    }).prototype = ChangeAware.prototype;
    dart.addTypeTests(ChangeAware);
    ChangeAware.prototype[_is_ChangeAware_default] = true;
    dart.addTypeCaches(ChangeAware);
    dart.setLibraryUri(ChangeAware, L0);
    return ChangeAware;
  });
  observable.ChangeAware = observable.ChangeAware$();
  dart.addTypeTests(observable.ChangeAware, _is_ChangeAware_default);
  var _coalesceScheduled = dart.privateName(observable, "_coalesceScheduled");
  var _streamController = dart.privateName(observable, "_streamController");
  var _changeController = dart.privateName(observable, "_changeController");
  var _previous = dart.privateName(observable, "_previous");
  var _next = dart.privateName(observable, "_next");
  var _coalesce$ = dart.privateName(observable, "_coalesce");
  var _hasStreamListener = dart.privateName(observable, "_hasStreamListener");
  var _hasChangeListener = dart.privateName(observable, "_hasChangeListener");
  var _isInactive = dart.privateName(observable, "_isInactive");
  var _doCoalesce = dart.privateName(observable, "_doCoalesce");
  var _doNotifyChange = dart.privateName(observable, "_doNotifyChange");
  var _isActive = dart.privateName(observable, "_isActive");
  const _is_ChangeNotificationProvider_default = Symbol('_is_ChangeNotificationProvider_default');
  observable.ChangeNotificationProvider$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var StreamControllerOfTL = () => (StreamControllerOfTL = dart.constFn(async.StreamController$(TL())))();
    var ChangeOfTL = () => (ChangeOfTL = dart.constFn(observable.Change$(TL())))();
    var ChangeLOfTL = () => (ChangeLOfTL = dart.constFn(dart.legacy(ChangeOfTL())))();
    var StreamControllerOfChangeLOfTL = () => (StreamControllerOfChangeLOfTL = dart.constFn(async.StreamController$(ChangeLOfTL())))();
    class ChangeNotificationProvider extends core.Object {
      get stream() {
        if (this[_streamController] == null) {
          this[_streamController] = StreamControllerOfTL().broadcast({sync: true});
        }
        return this[_streamController].stream;
      }
      get changes() {
        if (this[_changeController] == null) {
          this[_changeController] = StreamControllerOfChangeLOfTL().broadcast({sync: true});
        }
        return this[_changeController].stream;
      }
      get hasListener() {
        return dart.test(this[_hasStreamListener]) || dart.test(this[_hasChangeListener]);
      }
      notifyChange(previous = null, next = null) {
        TL().as(previous);
        TL().as(next);
        if (dart.test(this[_isInactive])) return;
        if ((!dart.test(this[_hasStreamListener]) || dart.test(this[_streamController].isClosed)) && (!dart.test(this[_hasChangeListener]) || dart.test(this[_changeController].isClosed))) {
          return;
        }
        if (dart.test(this[_coalesce$])) {
          this[_doCoalesce](previous, next);
        } else {
          this[_doNotifyChange](previous, next);
        }
      }
      [_doCoalesce](previous, next) {
        if (dart.test(this[_coalesceScheduled])) {
          this[_next] = next;
        } else {
          this[_previous] = previous;
          this[_next] = next;
          this[_coalesceScheduled] = true;
          async.scheduleMicrotask(dart.fn(() => {
            let publishPrev = this[_previous];
            let publishNext = this[_next];
            this[_previous] = null;
            this[_next] = null;
            this[_coalesceScheduled] = false;
            if (dart.test(this[_isActive])) {
              this[_doNotifyChange](publishPrev, publishNext);
            }
          }, VoidToNull()));
        }
      }
      [_doNotifyChange](previous, next) {
        if (dart.test(this[_hasStreamListener])) {
          this[_streamController].add(next);
        }
        if (dart.test(this[_hasChangeListener])) {
          this[_changeController].add(new (ChangeOfTL()).new(previous, next));
        }
      }
      dispose() {
        if (this[_streamController] != null) {
          this[_streamController].close();
          this[_streamController] = null;
        }
        if (this[_changeController] != null) {
          this[_changeController].close();
          this[_changeController] = null;
        }
      }
      get [_hasStreamListener]() {
        return this[_streamController] != null && dart.test(this[_streamController].hasListener);
      }
      get [_hasChangeListener]() {
        return this[_changeController] != null && dart.test(this[_changeController].hasListener);
      }
      get [_isActive]() {
        return dart.test(this[_hasStreamListener]) || dart.test(this[_hasChangeListener]);
      }
      get [_isInactive]() {
        return !dart.test(this[_isActive]);
      }
    }
    (ChangeNotificationProvider.new = function(_coalesce) {
      this[_coalesceScheduled] = false;
      this[_streamController] = null;
      this[_changeController] = null;
      this[_previous] = null;
      this[_next] = null;
      this[_coalesce$] = _coalesce;
      ;
    }).prototype = ChangeNotificationProvider.prototype;
    dart.addTypeTests(ChangeNotificationProvider);
    ChangeNotificationProvider.prototype[_is_ChangeNotificationProvider_default] = true;
    dart.addTypeCaches(ChangeNotificationProvider);
    ChangeNotificationProvider[dart.implements] = () => [observable.ChangeAware$(dart.legacy(T)), disposer.Disposable];
    dart.setMethodSignature(ChangeNotificationProvider, () => ({
      __proto__: dart.getMethods(ChangeNotificationProvider.__proto__),
      notifyChange: dart.fnType(dart.void, [], [dart.legacy(core.Object), dart.legacy(core.Object)]),
      [_doCoalesce]: dart.fnType(dart.void, [dart.legacy(T), dart.legacy(T)]),
      [_doNotifyChange]: dart.fnType(dart.void, [dart.legacy(T), dart.legacy(T)]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ChangeNotificationProvider, () => ({
      __proto__: dart.getGetters(ChangeNotificationProvider.__proto__),
      stream: dart.legacy(async.Stream$(dart.legacy(T))),
      changes: dart.legacy(async.Stream$(dart.legacy(observable.Change$(dart.legacy(T))))),
      hasListener: dart.legacy(core.bool),
      [_hasStreamListener]: dart.legacy(core.bool),
      [_hasChangeListener]: dart.legacy(core.bool),
      [_isActive]: dart.legacy(core.bool),
      [_isInactive]: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(ChangeNotificationProvider, L0);
    dart.setFieldSignature(ChangeNotificationProvider, () => ({
      __proto__: dart.getFields(ChangeNotificationProvider.__proto__),
      [_coalesce$]: dart.finalFieldType(dart.legacy(core.bool)),
      [_coalesceScheduled]: dart.fieldType(dart.legacy(core.bool)),
      [_streamController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(T)))),
      [_changeController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(observable.Change$(dart.legacy(T)))))),
      [_previous]: dart.fieldType(dart.legacy(T)),
      [_next]: dart.fieldType(dart.legacy(T))
    }));
    return ChangeNotificationProvider;
  });
  observable.ChangeNotificationProvider = observable.ChangeNotificationProvider$();
  dart.addTypeTests(observable.ChangeNotificationProvider, _is_ChangeNotificationProvider_default);
  const _is_ObservableView_default = Symbol('_is_ObservableView_default');
  observable.ObservableView$ = dart.generic(T => {
    class ObservableView extends observable.ChangeAware$(dart.legacy(T)) {
      static fromStream(stream, opts) {
        let t0;
        let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
        t0 = new (observable.ObservableReference$(dart.legacy(T))).new(initialValue);
        return (() => {
          t0.listen(stream);
          return t0;
        })();
      }
    }
    dart.addTypeTests(ObservableView);
    ObservableView.prototype[_is_ObservableView_default] = true;
    dart.addTypeCaches(ObservableView);
    ObservableView[dart.implements] = () => [disposer.Disposable];
    dart.setLibraryUri(ObservableView, L0);
    return ObservableView;
  });
  observable.ObservableView = observable.ObservableView$();
  dart.addTypeTests(observable.ObservableView, _is_ObservableView_default);
  const _is_ObservableViewMixin_default = Symbol('_is_ObservableViewMixin_default');
  observable.ObservableViewMixin$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ChangeOfTL = () => (ChangeOfTL = dart.constFn(observable.Change$(TL())))();
    var ChangeLOfTL = () => (ChangeLOfTL = dart.constFn(dart.legacy(ChangeOfTL())))();
    var TLToChangeLOfTL = () => (TLToChangeLOfTL = dart.constFn(dart.fnType(ChangeLOfTL(), [TL()])))();
    var FutureOfTL = () => (FutureOfTL = dart.constFn(async.Future$(TL())))();
    var TLToboolL = () => (TLToboolL = dart.constFn(dart.fnType(boolL(), [TL()])))();
    var StreamControllerOfTL = () => (StreamControllerOfTL = dart.constFn(async.StreamController$(TL())))();
    class ObservableViewMixin extends core.Object {
      get changes() {
        let last = this.value;
        return this.stream.map(ChangeLOfTL(), dart.fn(v => {
          let change = new (ChangeOfTL()).new(last, v);
          last = v;
          return change;
        }, TLToChangeLOfTL()));
      }
      get firstNonNull() {
        return this.value != null ? FutureOfTL().value(this.value) : this.stream.firstWhere(dart.fn(value => value != null, TLToboolL()));
      }
      get values() {
        let controller = null;
        controller = StreamControllerOfTL().new({onListen: dart.fn(() => {
            controller.add(this.value);
            controller.addStream(this.stream).then(dart.dynamic, dart.fn(_ => controller.close(), dynamicToFutureL()));
          }, VoidToNull())});
        return controller.stream;
      }
      get nonNullValues() {
        return this.values.where(dart.fn(value => value != null, TLToboolL()));
      }
      map(M, mapper) {
        return new (observable._MappedView$(TL(), dart.legacy(M))).new(this, mapper);
      }
    }
    (ObservableViewMixin.new = function() {
      ;
    }).prototype = ObservableViewMixin.prototype;
    dart.addTypeTests(ObservableViewMixin);
    ObservableViewMixin.prototype[_is_ObservableViewMixin_default] = true;
    dart.addTypeCaches(ObservableViewMixin);
    ObservableViewMixin[dart.implements] = () => [observable.ObservableView$(dart.legacy(T))];
    dart.setMethodSignature(ObservableViewMixin, () => ({
      __proto__: dart.getMethods(ObservableViewMixin.__proto__),
      map: dart.gFnType(M => [dart.legacy(observable.ObservableView$(dart.legacy(M))), [dart.legacy(dart.fnType(dart.legacy(M), [dart.legacy(T)]))]])
    }));
    dart.setGetterSignature(ObservableViewMixin, () => ({
      __proto__: dart.getGetters(ObservableViewMixin.__proto__),
      changes: dart.legacy(async.Stream$(dart.legacy(observable.Change$(dart.legacy(T))))),
      firstNonNull: dart.legacy(async.Future$(dart.legacy(T))),
      values: dart.legacy(async.Stream$(dart.legacy(T))),
      nonNullValues: dart.legacy(async.Stream$(dart.legacy(T)))
    }));
    dart.setLibraryUri(ObservableViewMixin, L0);
    return ObservableViewMixin;
  });
  observable.ObservableViewMixin = observable.ObservableViewMixin$();
  dart.addTypeTests(observable.ObservableViewMixin, _is_ObservableViewMixin_default);
  var _delegate$ = dart.privateName(observable, "_delegate");
  var _mapper$ = dart.privateName(observable, "_mapper");
  const _is__MappedView_default = Symbol('_is__MappedView_default');
  observable._MappedView$ = dart.generic((I, O) => {
    var OL = () => (OL = dart.constFn(dart.legacy(O)))();
    class _MappedView extends observable.ObservableViewMixin$(dart.legacy(O)) {
      get value() {
        let t0;
        t0 = this[_delegate$].value;
        return this[_mapper$](t0);
      }
      get stream() {
        return this[_delegate$].stream.map(OL(), this[_mapper$]);
      }
      dispose() {
      }
    }
    (_MappedView.new = function(_delegate, _mapper) {
      this[_delegate$] = _delegate;
      this[_mapper$] = _mapper;
      ;
    }).prototype = _MappedView.prototype;
    dart.addTypeTests(_MappedView);
    _MappedView.prototype[_is__MappedView_default] = true;
    dart.addTypeCaches(_MappedView);
    dart.setMethodSignature(_MappedView, () => ({
      __proto__: dart.getMethods(_MappedView.__proto__),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_MappedView, () => ({
      __proto__: dart.getGetters(_MappedView.__proto__),
      value: dart.legacy(O),
      stream: dart.legacy(async.Stream$(dart.legacy(O)))
    }));
    dart.setLibraryUri(_MappedView, L0);
    dart.setFieldSignature(_MappedView, () => ({
      __proto__: dart.getFields(_MappedView.__proto__),
      [_delegate$]: dart.finalFieldType(dart.legacy(observable.ObservableView$(dart.legacy(I)))),
      [_mapper$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(O), [dart.legacy(I)])))
    }));
    return _MappedView;
  });
  observable._MappedView = observable._MappedView$();
  dart.addTypeTests(observable._MappedView, _is__MappedView_default);
  var C0;
  var _listenSub = dart.privateName(observable, "_listenSub");
  var _value$ = dart.privateName(observable, "_value");
  var _equalsFn = dart.privateName(observable, "_equalsFn");
  const _is_ObservableReference_default = Symbol('_is_ObservableReference_default');
  observable.ObservableReference$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var StreamOfTL = () => (StreamOfTL = dart.constFn(async.Stream$(TL())))();
    var StreamLOfTL = () => (StreamLOfTL = dart.constFn(dart.legacy(StreamOfTL())))();
    var TLToNull = () => (TLToNull = dart.constFn(dart.fnType(core.Null, [TL()])))();
    const ChangeNotificationProvider_ObservableViewMixin$36 = class ChangeNotificationProvider_ObservableViewMixin extends observable.ChangeNotificationProvider$(dart.legacy(T)) {};
    (ChangeNotificationProvider_ObservableViewMixin$36.new = function(_coalesce) {
      ChangeNotificationProvider_ObservableViewMixin$36.__proto__.new.call(this, _coalesce);
    }).prototype = ChangeNotificationProvider_ObservableViewMixin$36.prototype;
    dart.applyMixin(ChangeNotificationProvider_ObservableViewMixin$36, observable.ObservableViewMixin$(dart.legacy(T)));
    class ObservableReference extends ChangeNotificationProvider_ObservableViewMixin$36 {
      static _defaultEq(a, b) {
        return dart.equals(a, b);
      }
      get value() {
        return this[_value$];
      }
      set value(value) {
        let t1, t0;
        TL().as(value);
        if (dart.test((t0 = this[_value$], t1 = value, this[_equalsFn](t0, t1)))) return;
        let previous = this[_value$];
        this[_value$] = value;
        this.notifyChange(previous, value);
      }
      listen(stream) {
        let t0;
        StreamLOfTL().as(stream);
        t0 = this[_listenSub];
        t0 == null ? null : t0.cancel();
        this[_listenSub] = stream.listen(dart.fn(v => {
          this.value = v;
        }, TLToNull()));
        return this[_listenSub].asFuture(dart.dynamic);
      }
      get nonNullValues() {
        return super.nonNullValues.distinct(this[_equalsFn]);
      }
      dispose() {
        let t0;
        super.dispose();
        t0 = this[_listenSub];
        t0 == null ? null : t0.cancel();
        this[_value$] = null;
      }
    }
    (ObservableReference.new = function(_value, opts) {
      let equalsFn = opts && 'equalsFn' in opts ? opts.equalsFn : C0 || CT.C0;
      let coalesce = opts && 'coalesce' in opts ? opts.coalesce : false;
      this[_listenSub] = null;
      this[_value$] = _value;
      this[_equalsFn] = equalsFn;
      ObservableReference.__proto__.new.call(this, coalesce);
      ;
    }).prototype = ObservableReference.prototype;
    dart.addTypeTests(ObservableReference);
    ObservableReference.prototype[_is_ObservableReference_default] = true;
    dart.addTypeCaches(ObservableReference);
    dart.setMethodSignature(ObservableReference, () => ({
      __proto__: dart.getMethods(ObservableReference.__proto__),
      listen: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(ObservableReference, () => ({
      __proto__: dart.getGetters(ObservableReference.__proto__),
      value: dart.legacy(T)
    }));
    dart.setSetterSignature(ObservableReference, () => ({
      __proto__: dart.getSetters(ObservableReference.__proto__),
      value: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(ObservableReference, L0);
    dart.setFieldSignature(ObservableReference, () => ({
      __proto__: dart.getFields(ObservableReference.__proto__),
      [_equalsFn]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T), dart.legacy(T)]))),
      [_listenSub]: dart.fieldType(dart.legacy(async.StreamSubscription)),
      [_value$]: dart.fieldType(dart.legacy(T))
    }));
    return ObservableReference;
  });
  observable.ObservableReference = observable.ObservableReference$();
  dart.addTypeTests(observable.ObservableReference, _is_ObservableReference_default);
  var _subscriptions = dart.privateName(observable, "_subscriptions");
  var _disposer = dart.privateName(observable, "_disposer");
  var _withStackTrace = dart.privateName(observable, "_withStackTrace");
  const _is_ObservableComposite_default = Symbol('_is_ObservableComposite_default');
  observable.ObservableComposite$ = dart.generic(T => {
    class ObservableComposite extends observable.ChangeNotificationProvider$(dart.legacy(T)) {
      register(value, opts) {
        let replaces = opts && 'replaces' in opts ? opts.replaces : null;
        let initialNotification = opts && 'initialNotification' in opts ? opts.initialNotification : true;
        if (value == null) return null;
        let replacesStream = replaces == null ? null : replaces.stream;
        this.registerStream(value.stream, {replaces: replacesStream, initialNotification: initialNotification});
        if (DisposableL().is(value)) {
          this[_disposer].addDisposable(ObserveAwareL(), value);
        }
        return value;
      }
      unregister(value) {
        if (value == null) return;
        this.unregisterStream(value.stream);
      }
      registerStream(stream, opts) {
        let replaces = opts && 'replaces' in opts ? opts.replaces : null;
        let initialNotification = opts && 'initialNotification' in opts ? opts.initialNotification : true;
        if (dart.test(this[_subscriptions][$containsKey](stream))) {
          if (!(replaces == null)) dart.assertFailed(null, L1, 377, 14, "replaces == null");
          return stream;
        }
        if (replaces != null) {
          this.unregisterStream(replaces);
        }
        let stackTrace = null;
        if (!dart.test(dart.fn(() => {
          if (dart.test(this[_withStackTrace])) {
            stackTrace = core.StackTrace.current;
          }
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L1, 385, 12, "() {\n      // stackTrace is only used in debugging\n      if (_withStackTrace) {\n        stackTrace = StackTrace.current;\n      }\n      return true;\n    }()");
        this[_subscriptions][$_set](stream, stream.listen(dart.fn(_ => {
          if (stackTrace != null) {
            core.print("Coalescer notified from " + dart.str(stackTrace));
          }
          this.notifyChange();
        }, dynamicToNull())));
        if (dart.test(initialNotification)) {
          this.notifyChange();
        }
        return stream;
      }
      unregisterStream(stream) {
        if (stream == null) return;
        let subs = this[_subscriptions][$remove](stream);
        if (subs != null) {
          subs.cancel();
        }
      }
      dispose() {
        super.dispose();
        this[_subscriptions][$values][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionLToFutureLOfvoid()));
        this[_subscriptions][$clear]();
        this[_disposer].dispose();
      }
    }
    (ObservableComposite.new = function(opts) {
      let coalesce = opts && 'coalesce' in opts ? opts.coalesce : false;
      let values = opts && 'values' in opts ? opts.values : null;
      let withStackTrace = opts && 'withStackTrace' in opts ? opts.withStackTrace : false;
      this[_subscriptions] = new (LinkedMapOfStreamL$StreamSubscriptionL()).new();
      this[_disposer] = new disposer.Disposer.oneShot();
      this[_withStackTrace] = withStackTrace;
      ObservableComposite.__proto__.new.call(this, coalesce);
      if (values != null) {
        for (let ref of values) {
          this.register(ref);
        }
      }
    }).prototype = ObservableComposite.prototype;
    dart.addTypeTests(ObservableComposite);
    ObservableComposite.prototype[_is_ObservableComposite_default] = true;
    dart.addTypeCaches(ObservableComposite);
    dart.setMethodSignature(ObservableComposite, () => ({
      __proto__: dart.getMethods(ObservableComposite.__proto__),
      register: dart.fnType(dart.legacy(observable.ObserveAware), [dart.legacy(observable.ObserveAware)], {initialNotification: dart.legacy(core.bool), replaces: dart.legacy(observable.ObserveAware)}, {}),
      unregister: dart.fnType(dart.void, [dart.legacy(observable.ObserveAware)]),
      registerStream: dart.fnType(dart.legacy(async.Stream), [dart.legacy(async.Stream)], {initialNotification: dart.legacy(core.bool), replaces: dart.legacy(async.Stream)}, {}),
      unregisterStream: dart.fnType(dart.void, [dart.legacy(async.Stream)])
    }));
    dart.setLibraryUri(ObservableComposite, L0);
    dart.setFieldSignature(ObservableComposite, () => ({
      __proto__: dart.getFields(ObservableComposite.__proto__),
      [_subscriptions]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(async.Stream), dart.legacy(async.StreamSubscription)))),
      [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
      [_withStackTrace]: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return ObservableComposite;
  });
  observable.ObservableComposite = observable.ObservableComposite$();
  dart.addTypeTests(observable.ObservableComposite, _is_ObservableComposite_default);
  dart.trackLibraries("packages/angular_components/model/observable/observable", {
    "package:angular_components/model/observable/observable.dart": observable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["observable.dart"],"names":[],"mappings":"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","file":"observable.unsound.ddc.js"}');
  // Exports:
  return {
    model__observable__observable: observable
  };
}));

//# sourceMappingURL=observable.unsound.ddc.js.map
