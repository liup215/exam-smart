define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/date/date', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_datepicker/calendar'], (function load__packages__angular_components__src__material_datepicker__calendar_listener(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__date__date, packages__angular_components__model__observable__observable, packages__angular_components__material_datepicker__calendar) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const date = packages__angular_components__model__date__date.model__date__date;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  var calendar_listener = Object.create(dart.library);
  var enum_parsing = Object.create(dart.library);
  var $toString = dartx.toString;
  var $onMouseUp = dartx.onMouseUp;
  var $toUpperCase = dartx.toUpperCase;
  var $replaceAll = dartx.replaceAll;
  var $firstWhere = dartx.firstWhere;
  var _DragStateL = () => (_DragStateL = dart.constFn(dart.legacy(calendar_listener._DragState)))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var CalendarStateLToNull = () => (CalendarStateLToNull = dart.constFn(dart.fnType(core.Null, [CalendarStateL()])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToNull = () => (MouseEventLToNull = dart.constFn(dart.fnType(core.Null, [MouseEventL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/angular_components/src/material_datepicker/calendar_listener.dart";
  var L0 = "package:angular_components/src/material_datepicker/calendar_listener.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: calendar_listener._DragState.prototype,
        [_name$]: "_DragState.canPreview",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: calendar_listener._DragState.prototype,
        [_name$]: "_DragState.pendingGrabOrClick",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: calendar_listener._DragState.prototype,
        [_name$]: "_DragState.pendingDragOrClick",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: calendar_listener._DragState.prototype,
        [_name$]: "_DragState.dragging",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], _DragStateL());
    }
  }, false);
  calendar_listener.CalendarListener = class CalendarListener extends core.Object {
    onClick(day) {
    }
    onMouseDown(day) {
    }
    onMouseMove(day) {
    }
    onMouseLeave(day) {
    }
    onKeypress() {
    }
    dispose() {
    }
  };
  (calendar_listener.CalendarListener.noop = function() {
    ;
  }).prototype = calendar_listener.CalendarListener.prototype;
  dart.addTypeTests(calendar_listener.CalendarListener);
  dart.addTypeCaches(calendar_listener.CalendarListener);
  calendar_listener.CalendarListener[dart.implements] = () => [disposer.Disposable];
  dart.setMethodSignature(calendar_listener.CalendarListener, () => ({
    __proto__: dart.getMethods(calendar_listener.CalendarListener.__proto__),
    onClick: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseDown: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseMove: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseLeave: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onKeypress: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(calendar_listener.CalendarListener, L0);
  calendar_listener._DateListener = class _DateListener extends core.Object {
    onClick(day) {
      this.model.value = this.model.value.setCurrentSelection(day, day);
    }
    onMouseMove(day) {
      this.model.value = this.model.value.updateCurrentPreview(day);
    }
    onKeypress() {
    }
    onMouseDown(day) {
    }
    onMouseLeave(day) {
    }
    dispose() {
    }
  };
  (calendar_listener._DateListener.new = function(model) {
    this.model = model;
    ;
  }).prototype = calendar_listener._DateListener.prototype;
  dart.addTypeTests(calendar_listener._DateListener);
  dart.addTypeCaches(calendar_listener._DateListener);
  calendar_listener._DateListener[dart.implements] = () => [calendar_listener.CalendarListener];
  dart.setMethodSignature(calendar_listener._DateListener, () => ({
    __proto__: dart.getMethods(calendar_listener._DateListener.__proto__),
    onClick: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseMove: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onKeypress: dart.fnType(dart.void, []),
    onMouseDown: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseLeave: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(calendar_listener._DateListener, L0);
  dart.setFieldSignature(calendar_listener._DateListener, () => ({
    __proto__: dart.getFields(calendar_listener._DateListener.__proto__),
    model: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(calendar.CalendarState))))
  }));
  var _name$ = dart.privateName(calendar_listener, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  calendar_listener._DragState = class _DragState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (calendar_listener._DragState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = calendar_listener._DragState.prototype;
  dart.addTypeTests(calendar_listener._DragState);
  dart.addTypeCaches(calendar_listener._DragState);
  dart.setMethodSignature(calendar_listener._DragState, () => ({
    __proto__: dart.getMethods(calendar_listener._DragState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(calendar_listener._DragState, L0);
  dart.setFieldSignature(calendar_listener._DragState, () => ({
    __proto__: dart.getFields(calendar_listener._DragState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(calendar_listener._DragState, ['toString']);
  calendar_listener._DragState.canPreview = C0 || CT.C0;
  calendar_listener._DragState.pendingGrabOrClick = C1 || CT.C1;
  calendar_listener._DragState.pendingDragOrClick = C2 || CT.C2;
  calendar_listener._DragState.dragging = C3 || CT.C3;
  calendar_listener._DragState.values = C4 || CT.C4;
  var _disposer = dart.privateName(calendar_listener, "_disposer");
  var _consecutiveClicks = dart.privateName(calendar_listener, "_consecutiveClicks");
  var _initSelectionPreview = dart.privateName(calendar_listener, "_initSelectionPreview");
  var _datesEqual = dart.privateName(calendar_listener, "_datesEqual");
  var _grabExistingRange = dart.privateName(calendar_listener, "_grabExistingRange");
  calendar_listener._RangeListener = class _RangeListener extends core.Object {
    [_datesEqual](a, b) {
      return calendar.datesEqualAtResolution(a, b, this.model.value.resolution);
    }
    [_initSelectionPreview]() {
      this.previewedSelection = this.model.value.currentSelection;
      this[_consecutiveClicks] = 0;
    }
    [_grabExistingRange](d) {
      if (this.state != calendar_listener._DragState.canPreview) {
        return false;
      }
      for (let selection of this.model.value.selections) {
        if (selection.start == null || selection.end == null) {
          continue;
        }
        if (dart.test(this[_datesEqual](d, selection.start))) {
          this.state = calendar_listener._DragState.pendingGrabOrClick;
          this.dragAnchor = selection.end;
          this.selectionPendingGrab = selection.id;
          return true;
        }
        if (dart.test(this[_datesEqual](d, selection.end))) {
          this.state = calendar_listener._DragState.pendingGrabOrClick;
          this.dragAnchor = selection.start;
          this.selectionPendingGrab = selection.id;
          return true;
        }
      }
      return false;
    }
    confirmPreviewedSelection() {
      if (this.model.value.preview == null) return;
      this[_consecutiveClicks] = dart.notNull(this[_consecutiveClicks]) + 1;
      this.model.value = this.model.value.confirmPreview({confirmRange: dart.notNull(this[_consecutiveClicks]) >= 2, movingStartMaintainsLength: this.movingStartMaintainsLength});
    }
    onMouseDown(day) {
      if (!dart.test(this[_grabExistingRange](day))) {
        this.state = calendar_listener._DragState.pendingDragOrClick;
        this.dragAnchor = day;
      }
      this[_disposer].addStreamSubscription(MouseEventL(), html.document[$onMouseUp].take(1).listen(dart.fn(_ => {
        if (this.state == calendar_listener._DragState.dragging) {
          this.model.value = new calendar.CalendarState.new({selections: this.model.value.selections, currentSelection: this.model.value.currentSelection, cause: calendar.CausedBy.rangeConfirm, resolution: this.model.value.resolution});
        }
        this.state = calendar_listener._DragState.canPreview;
        this.dragAnchor = null;
      }, MouseEventLToNull())));
    }
    onClick(day) {
      if (dart.test(this.model.value.has(this.model.value.currentSelection))) {
        this.updateActiveDragOrPreview(day);
        this.confirmPreviewedSelection();
      } else {
        this.model.value = this.model.value.setCurrentSelection(day, day, {cause: calendar.CausedBy.endpointConfirm, previewAnchoredAtStart: true});
        this[_consecutiveClicks] = 1;
      }
      this.state = calendar_listener._DragState.canPreview;
      this.dragAnchor = null;
    }
    onMouseMove(day) {
      this.updateActiveDragOrPreview(day);
    }
    updateActiveDragOrPreview(day) {
      if (!dart.equals(day, this.dragAnchor) && this.state != calendar_listener._DragState.canPreview) {
        if (this.state == calendar_listener._DragState.pendingGrabOrClick && dart.test(this.model.value.has(this.model.value.currentSelection))) {
          if (!(this.selectionPendingGrab != null)) dart.assertFailed(null, L1, 225, 16, "selectionPendingGrab != null");
          this.model.value = this.model.value.select(this.selectionPendingGrab);
          this.selectionPendingGrab = null;
        }
        this.state = calendar_listener._DragState.dragging;
      }
      this.model.value = this.state == calendar_listener._DragState.dragging ? this.model.value.updateDrag(day, this.dragAnchor) : this.model.value.updateCurrentPreview(day);
    }
    onMouseLeave(day) {
      if (this.state == calendar_listener._DragState.canPreview) {
        this.model.value = this.model.value.cancelCurrentPreview();
      }
    }
    onKeypress() {
    }
    dispose() {
      return this[_disposer].dispose();
    }
  };
  (calendar_listener._RangeListener.new = function(model, opts) {
    let movingStartMaintainsLength = opts && 'movingStartMaintainsLength' in opts ? opts.movingStartMaintainsLength : null;
    this[_disposer] = new disposer.Disposer.multi();
    this.state = calendar_listener._DragState.canPreview;
    this.dragAnchor = null;
    this.previewedSelection = null;
    this.selectionPendingGrab = null;
    this[_consecutiveClicks] = 0;
    this.model = model;
    this.movingStartMaintainsLength = movingStartMaintainsLength;
    this[_initSelectionPreview]();
    this[_disposer].addStreamSubscription(CalendarStateL(), this.model.stream.listen(dart.fn(s => {
      if (s.currentSelection != this.previewedSelection) {
        this[_initSelectionPreview]();
        this[_consecutiveClicks] = 0;
      } else if (s.cause == calendar.CausedBy.external || s.cause == calendar.CausedBy.drag) {
        this[_consecutiveClicks] = 0;
      }
    }, CalendarStateLToNull())));
  }).prototype = calendar_listener._RangeListener.prototype;
  dart.addTypeTests(calendar_listener._RangeListener);
  dart.addTypeCaches(calendar_listener._RangeListener);
  calendar_listener._RangeListener[dart.implements] = () => [calendar_listener.CalendarListener];
  dart.setMethodSignature(calendar_listener._RangeListener, () => ({
    __proto__: dart.getMethods(calendar_listener._RangeListener.__proto__),
    [_datesEqual]: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date), dart.legacy(date.Date)]),
    [_initSelectionPreview]: dart.fnType(dart.void, []),
    [_grabExistingRange]: dart.fnType(dart.legacy(core.bool), [dart.legacy(date.Date)]),
    confirmPreviewedSelection: dart.fnType(dart.void, []),
    onMouseDown: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onClick: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseMove: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    updateActiveDragOrPreview: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onMouseLeave: dart.fnType(dart.void, [dart.legacy(date.Date)]),
    onKeypress: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(calendar_listener._RangeListener, L0);
  dart.setFieldSignature(calendar_listener._RangeListener, () => ({
    __proto__: dart.getFields(calendar_listener._RangeListener.__proto__),
    model: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(calendar.CalendarState)))),
    movingStartMaintainsLength: dart.finalFieldType(dart.legacy(core.bool)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    state: dart.fieldType(dart.legacy(calendar_listener._DragState)),
    dragAnchor: dart.fieldType(dart.legacy(date.Date)),
    previewedSelection: dart.fieldType(dart.legacy(core.String)),
    selectionPendingGrab: dart.fieldType(dart.legacy(core.String)),
    [_consecutiveClicks]: dart.fieldType(dart.legacy(core.int))
  }));
  enum_parsing.fuzzyParseEnum = function fuzzyParseEnum(T, values, val) {
    let valAsRegex = val[$toUpperCase]()[$replaceAll](".", "\\.")[$replaceAll](core.RegExp.new("[_-]"), "[-_]");
    let regex = core.RegExp.new(valAsRegex + "$");
    return values[$firstWhere](dart.fn(v => regex.hasMatch(dart.toString(v)[$toUpperCase]()), dart.fnType(boolL(), [dart.legacy(T)])));
  };
  dart.trackLibraries("packages/angular_components/src/material_datepicker/calendar_listener", {
    "package:angular_components/src/material_datepicker/calendar_listener.dart": calendar_listener,
    "package:angular_components/src/material_datepicker/enum_parsing.dart": enum_parsing
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["calendar_listener.dart","enum_parsing.dart"],"names":[],"mappings":"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","file":"calendar_listener.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__calendar_listener: calendar_listener,
    src__material_datepicker__enum_parsing: enum_parsing
  };
}));

//# sourceMappingURL=calendar_listener.unsound.ddc.js.map
