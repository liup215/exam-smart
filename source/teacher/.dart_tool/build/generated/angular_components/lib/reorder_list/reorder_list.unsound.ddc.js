define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/reorder_list/reorder_events', 'packages/angular_components/utils/keyboard/keyboard', 'packages/quiver/src/iterables/concat', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/pipe_transform'], (function load__packages__angular_components__reorder_list__reorder_list(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__reorder_list__reorder_events, packages__angular_components__utils__keyboard__keyboard, packages__quiver__src__iterables__concat, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__change_detection__pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const reorder_events = packages__angular_components__reorder_list__reorder_events.reorder_list__reorder_events;
  const keyboard = packages__angular_components__utils__keyboard__keyboard.utils__keyboard__keyboard;
  const range = packages__quiver__src__iterables__concat.src__iterables__range;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  var reorder_list = Object.create(dart.library);
  var $toSet = dartx.toSet;
  var $keys = dartx.keys;
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $first = dartx.first;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $transition = dartx.transition;
  var $transform = dartx.transform;
  var $height = dartx.height;
  var $borderEdge = dartx.borderEdge;
  var $width = dartx.width;
  var $top = dartx.top;
  var $left = dartx.left;
  var $offset = dartx.offset;
  var $right = dartx.right;
  var $sign = dartx.sign;
  var $onDragStart = dartx.onDragStart;
  var $dataTransfer = dartx.dataTransfer;
  var $add = dartx.add;
  var $onDragEnd = dartx.onDragEnd;
  var $onKeyDown = dartx.onKeyDown;
  var $onDragOver = dartx.onDragOver;
  var $onClick = dartx.onClick;
  var $remove = dartx.remove;
  var $toList = dartx.toList;
  var $values = dartx.values;
  var $currentTarget = dartx.currentTarget;
  var $contains = dartx.contains;
  var $classes = dartx.classes;
  var $indexOf = dartx.indexOf;
  var $getComputedStyle = dartx.getComputedStyle;
  var $marginBottom = dartx.marginBottom;
  var $marginTop = dartx.marginTop;
  var $marginLeft = dartx.marginLeft;
  var $marginRight = dartx.marginRight;
  var $replaceAll = dartx.replaceAll;
  var $target = dartx.target;
  var $isNotEmpty = dartx.isNotEmpty;
  var $sort = dartx.sort;
  var ReorderEventL = () => (ReorderEventL = dart.constFn(dart.legacy(reorder_events.ReorderEvent)))();
  var StreamControllerOfReorderEventL = () => (StreamControllerOfReorderEventL = dart.constFn(async.StreamController$(ReorderEventL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StreamControllerOfintL = () => (StreamControllerOfintL = dart.constFn(async.StreamController$(intL())))();
  var ItemSelectionEventL = () => (ItemSelectionEventL = dart.constFn(dart.legacy(reorder_events.ItemSelectionEvent)))();
  var StreamControllerOfItemSelectionEventL = () => (StreamControllerOfItemSelectionEventL = dart.constFn(async.StreamController$(ItemSelectionEventL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StreamSubscriptionL = () => (StreamSubscriptionL = dart.constFn(dart.legacy(async.StreamSubscription)))();
  var ListOfStreamSubscriptionL = () => (ListOfStreamSubscriptionL = dart.constFn(core.List$(StreamSubscriptionL())))();
  var ListLOfStreamSubscriptionL = () => (ListLOfStreamSubscriptionL = dart.constFn(dart.legacy(ListOfStreamSubscriptionL())))();
  var LinkedMapOfHtmlElementL$ListLOfStreamSubscriptionL = () => (LinkedMapOfHtmlElementL$ListLOfStreamSubscriptionL = dart.constFn(_js_helper.LinkedMap$(HtmlElementL(), ListLOfStreamSubscriptionL())))();
  var LinkedMapOfHtmlElementL$StreamSubscriptionL = () => (LinkedMapOfHtmlElementL$StreamSubscriptionL = dart.constFn(_js_helper.LinkedMap$(HtmlElementL(), StreamSubscriptionL())))();
  var LinkedHashMapOfHtmlElementL$HtmlElementL = () => (LinkedHashMapOfHtmlElementL$HtmlElementL = dart.constFn(collection.LinkedHashMap$(HtmlElementL(), HtmlElementL())))();
  var dynamicToHtmlElementL = () => (dynamicToHtmlElementL = dart.constFn(dart.fnType(HtmlElementL(), [dart.dynamic])))();
  var LinkedHashSetOfHtmlElementL = () => (LinkedHashSetOfHtmlElementL = dart.constFn(collection.LinkedHashSet$(HtmlElementL())))();
  var ListOfHtmlElementL = () => (ListOfHtmlElementL = dart.constFn(core.List$(HtmlElementL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToNull = () => (MouseEventLToNull = dart.constFn(dart.fnType(core.Null, [MouseEventL()])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var KeyboardEventLTovoid = () => (KeyboardEventLTovoid = dart.constFn(dart.fnType(dart.void, [KeyboardEventL()])))();
  var MouseEventLTovoid = () => (MouseEventLTovoid = dart.constFn(dart.fnType(dart.void, [MouseEventL()])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfStreamSubscriptionL = () => (JSArrayOfStreamSubscriptionL = dart.constFn(_interceptors.JSArray$(StreamSubscriptionL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/reorder_list/reorder_list.dart";
  var _disposer = dart.privateName(reorder_list, "_disposer");
  var _reorder = dart.privateName(reorder_list, "_reorder");
  var _reorderAttempt = dart.privateName(reorder_list, "_reorderAttempt");
  var _delete = dart.privateName(reorder_list, "_delete");
  var _itemSelectionChanged = dart.privateName(reorder_list, "_itemSelectionChanged");
  var _reorderProgress = dart.privateName(reorder_list, "_reorderProgress");
  var _items = dart.privateName(reorder_list, "_items");
  var _subscriptions = dart.privateName(reorder_list, "_subscriptions");
  var _dragSubscriptions = dart.privateName(reorder_list, "_dragSubscriptions");
  var _curTransformY = dart.privateName(reorder_list, "_curTransformY");
  var _itemSizes = dart.privateName(reorder_list, "_itemSizes");
  var _reorderActive = dart.privateName(reorder_list, "_reorderActive");
  var _moveSourceIndex = dart.privateName(reorder_list, "_moveSourceIndex");
  var _currentMoveIndex = dart.privateName(reorder_list, "_currentMoveIndex");
  var _dragSourceElement = dart.privateName(reorder_list, "_dragSourceElement");
  var _selectedElementIndexes = dart.privateName(reorder_list, "_selectedElementIndexes");
  var _pivotItemIndex = dart.privateName(reorder_list, "_pivotItemIndex");
  var _ngZone$ = dart.privateName(reorder_list, "_ngZone");
  var _refreshItems = dart.privateName(reorder_list, "_refreshItems");
  var _handleElements = dart.privateName(reorder_list, "_handleElements");
  var _unTrackAll = dart.privateName(reorder_list, "_unTrackAll");
  var _reorderElements = dart.privateName(reorder_list, "_reorderElements");
  var _horizontalTransformHandler = dart.privateName(reorder_list, "_horizontalTransformHandler");
  var _createReorderEvent = dart.privateName(reorder_list, "_createReorderEvent");
  var _moveItem = dart.privateName(reorder_list, "_moveItem");
  var _subscriptionsForElement = dart.privateName(reorder_list, "_subscriptionsForElement");
  var _onDragStart = dart.privateName(reorder_list, "_onDragStart");
  var _onDragEnd = dart.privateName(reorder_list, "_onDragEnd");
  var _onKeyDown = dart.privateName(reorder_list, "_onKeyDown");
  var _onDragOver = dart.privateName(reorder_list, "_onDragOver");
  var _onClick = dart.privateName(reorder_list, "_onClick");
  var _getIndex = dart.privateName(reorder_list, "_getIndex");
  var _clearSelection = dart.privateName(reorder_list, "_clearSelection");
  var _notifySelectionChange = dart.privateName(reorder_list, "_notifySelectionChange");
  var _computeItemSize = dart.privateName(reorder_list, "_computeItemSize");
  var _parsePx = dart.privateName(reorder_list, "_parsePx");
  var _resetChildren = dart.privateName(reorder_list, "_resetChildren");
  var _getNewIndex = dart.privateName(reorder_list, "_getNewIndex");
  var _handleShift = dart.privateName(reorder_list, "_handleShift");
  var _handleCtrl = dart.privateName(reorder_list, "_handleCtrl");
  var verticalItems = dart.privateName(reorder_list, "ReorderListComponent.verticalItems");
  var multiSelect = dart.privateName(reorder_list, "ReorderListComponent.multiSelect");
  var placeholder = dart.privateName(reorder_list, "ReorderListComponent.placeholder");
  reorder_list.ReorderListComponent = class ReorderListComponent extends core.Object {
    get verticalItems() {
      return this[verticalItems];
    }
    set verticalItems(value) {
      this[verticalItems] = value;
    }
    get multiSelect() {
      return this[multiSelect];
    }
    set multiSelect(value) {
      this[multiSelect] = value;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    get reorder() {
      return this[_reorder].stream;
    }
    get reorderAttempt() {
      return this[_reorderAttempt].stream;
    }
    get delete() {
      return this[_delete].stream;
    }
    get itemSelectionChanged() {
      return this[_itemSelectionChanged].stream;
    }
    get reorderProgress() {
      return this[_reorderProgress].stream;
    }
    set items(value) {
      this[_items] = LinkedHashMapOfHtmlElementL$HtmlElementL().fromIterable(value, {key: dart.fn(e => HtmlElementL().as(dart.dload(e, 'handleElement')), dynamicToHtmlElementL()), value: dart.fn(e => HtmlElementL().as(dart.dload(e, 'element')), dynamicToHtmlElementL())});
      this[_refreshItems]();
    }
    [_refreshItems]() {
      let newElements = this[_handleElements][$toSet]();
      let currentlyTracked = LinkedHashSetOfHtmlElementL().from(this[_subscriptions][$keys]);
      for (let tracked of currentlyTracked) {
        if (!dart.test(newElements.contains(tracked))) {
          this.unTrack(tracked);
        }
      }
      for (let newElement of newElements) {
        if (!dart.test(currentlyTracked.contains(newElement))) {
          this.track(newElement);
        }
      }
      if (dart.test(this.multiSelect)) this[_selectedElementIndexes][$clear]();
    }
    ngOnDestroy() {
      this[_unTrackAll]();
      this[_disposer].dispose();
    }
    [_unTrackAll]() {
      let keys = ListOfHtmlElementL().from(this[_subscriptions][$keys]);
      for (let element of keys) {
        this.unTrack(element);
      }
    }
    [_moveItem](fromIndex, toIndex) {
      let t0, t0$;
      let contents = this[_reorderElements];
      let leftSide = 0;
      let rightSide = 0;
      let childCount = contents[$length];
      if (dart.notNull(childCount) > 0) {
        leftSide = intL().as(dart.dload(dart.dload(dart.dload(contents[$first], 'parent'), 'offset'), 'left'));
        rightSide = intL().as(dart.dload(dart.dload(dart.dload(contents[$first], 'parent'), 'offset'), 'right'));
      }
      let nextOffset = null;
      let upperStackSize = 0;
      let moveRight = true;
      for (let i = 0; i < dart.notNull(childCount); i = i + 1) {
        let offset = 0;
        let e = HtmlElementL().as(contents[$_get](i));
        if (i === this[_moveSourceIndex]) {
          offset = -8000;
        } else if (dart.notNull(this[_moveSourceIndex]) < i && i <= dart.notNull(toIndex)) {
          offset = offset - dart.notNull(this[_itemSizes][$_get](this[_moveSourceIndex]));
        } else if (dart.notNull(toIndex) <= i && i < dart.notNull(this[_moveSourceIndex])) {
          offset = offset + dart.notNull(this[_itemSizes][$_get](this[_moveSourceIndex]));
        }
        if (i !== this[_moveSourceIndex] && i < dart.notNull(toIndex) || i === toIndex && dart.notNull(toIndex) > dart.notNull(this[_moveSourceIndex])) {
          upperStackSize = upperStackSize + dart.notNull(this[_itemSizes][$_get](i));
        }
        if (offset !== this[_curTransformY][$_get](i)) {
          this[_curTransformY][$_set](i, offset);
          if (e.style[$transition] !== "transform:all 0.2s ease-out") {
            e.style[$transition] = "all 0.2s ease-out";
          }
          if (!dart.test(this.verticalItems) && offset !== -8000) {
            nextOffset = this[_horizontalTransformHandler](e, ElementL().as(i === 0 ? null : contents[$_get](i - 1)), offset, nextOffset, leftSide, rightSide);
            if (i === toIndex) {
              moveRight = offset > 0;
            }
          } else {
            e.style[$transform] = offset === 0 ? "" : "translate(0," + dart.str(offset) + "px)";
          }
        }
      }
      let draggedElement = this[_items][$_get](this[_dragSourceElement]);
      if (dart.test(this.verticalItems)) {
        t0 = this.placeholder.style;
        (() => {
          t0[$height] = dart.str(draggedElement[$borderEdge].height) + "px";
          t0[$width] = dart.str(draggedElement[$borderEdge].width) + "px";
          t0[$top] = dart.str(upperStackSize) + "px";
          return t0;
        })();
      } else {
        let e = HtmlElementL().as(contents[$_get](toIndex));
        let left = moveRight ? e[$offset][$left] : dart.notNull(e[$offset][$right]) - dart.notNull(draggedElement[$borderEdge].width);
        t0$ = this.placeholder.style;
        (() => {
          t0$[$height] = dart.str(draggedElement[$borderEdge].height) + "px";
          t0$[$width] = dart.str(draggedElement[$borderEdge].width) + "px";
          t0$[$top] = dart.str(e[$offset][$top]) + "px";
          t0$[$left] = dart.str(left) + "px";
          return t0$;
        })();
      }
      this[_reorderAttempt].add(this[_createReorderEvent](this[_moveSourceIndex], toIndex));
    }
    [_horizontalTransformHandler](e, prev, offset, nextOffset, leftSide, rightSide) {
      if (nextOffset != null) {
        if (offset[$sign] === nextOffset[$sign]) {
          offset = nextOffset;
        } else {
          offset = dart.notNull(offset) + dart.notNull(nextOffset);
        }
      }
      if (dart.notNull(e[$offset][$right]) + dart.notNull(offset) > dart.notNull(rightSide)) {
        nextOffset = dart.asNullableInt(e[$offset][$width]);
        e.style[$transform] = "translate(" + dart.str(-dart.notNull(e[$offset][$left]) + dart.notNull(leftSide)) + "px," + dart.str(e[$offset][$height]) + "px)";
      } else if (dart.notNull(e[$offset][$left]) + dart.notNull(offset) < dart.notNull(leftSide)) {
        if (dart.notNull(e[$offset][$width]) < dart.notNull(prev[$offset][$right])) {
          nextOffset = dart.asNullableInt(-dart.notNull(e[$offset][$width]));
          e.style[$transform] = "translate(" + dart.str(dart.notNull(prev[$offset][$right]) - dart.notNull(leftSide) + dart.notNull(offset)) + "px," + dart.str(-dart.notNull(e[$offset][$height])) + "px)";
        } else {
          nextOffset = 0;
        }
      } else {
        e.style[$transform] = "translate(" + dart.str(offset) + "px,0px)";
      }
      return nextOffset;
    }
    track(element) {
      element.draggable = true;
      let subs = this[_subscriptionsForElement](element);
      subs[$add](element[$onDragStart].listen(dart.fn(e => {
        e[$dataTransfer].setData("Text", element.id);
        e[$dataTransfer].effectAllowed = "copyMove";
        this[_onDragStart](e);
      }, MouseEventLToNull())));
      subs[$add](element[$onDragEnd].listen(dart.bind(this, _onDragEnd)));
      subs[$add](element[$onKeyDown].listen(dart.fn(e => this[_onKeyDown](e, element), KeyboardEventLTovoid())));
      this[_dragSubscriptions][$_set](element, element[$onDragOver].listen(dart.fn(e => this[_onDragOver](e, element), MouseEventLTovoid())));
      if (dart.test(this.multiSelect)) {
        subs[$add](element[$onClick].listen(dart.fn(e => this[_onClick](e, element), MouseEventLTovoid())));
      }
    }
    unTrack(element) {
      let subs = this[_subscriptionsForElement](element);
      for (let s of subs) {
        s.cancel();
      }
      this[_subscriptions][$remove](element);
      if (this[_dragSubscriptions][$_get](element) != null) {
        this[_dragSubscriptions][$_get](element).cancel();
      }
      this[_dragSubscriptions][$remove](element);
    }
    get [_handleElements]() {
      return this[_items][$keys][$toList]();
    }
    get [_reorderElements]() {
      return this[_items][$values][$toList]();
    }
    [_onDragStart](e) {
      if (dart.test(this.multiSelect)) {
        let index = this[_getIndex](HtmlElementL().as(e[$currentTarget]));
        if (!dart.test(this[_selectedElementIndexes][$contains](index))) {
          this[_clearSelection]();
          this[_selectedElementIndexes][$add](index);
          this[_notifySelectionChange]();
        }
      }
      this[_dragSourceElement] = HtmlElementL().as(e[$currentTarget]);
      this[_dragSourceElement][$classes].add("reorder-list-dragging-active");
      let contents = this[_reorderElements];
      let childCount = contents[$length];
      this[_moveSourceIndex] = this[_handleElements][$indexOf](this[_dragSourceElement]);
      this[_curTransformY] = ListOfintL().filled(childCount, 0);
      this[_itemSizes] = ListOfintL().new(childCount);
      for (let i = 0; i < dart.notNull(childCount); i = i + 1) {
        this[_itemSizes][$_set](i, this[_computeItemSize](contents[$_get](i)));
      }
      this[_reorderActive] = true;
      this[_currentMoveIndex] = this[_moveSourceIndex];
      this[_moveItem](this[_currentMoveIndex], this[_currentMoveIndex]);
    }
    [_computeItemSize](elem) {
      let cssStyle = elem[$getComputedStyle]();
      if (dart.test(this.verticalItems)) {
        return dart.asNullableInt(dart.notNull(elem[$offset][$height]) + dart.notNull(this[_parsePx](cssStyle[$marginBottom])) + dart.notNull(this[_parsePx](cssStyle[$marginTop])));
      } else {
        return dart.asNullableInt(dart.notNull(elem[$offset][$width]) + dart.notNull(this[_parsePx](cssStyle[$marginLeft])) + dart.notNull(this[_parsePx](cssStyle[$marginRight])));
      }
    }
    [_parsePx](style) {
      return core.int.parse(style[$replaceAll]("px", ""));
    }
    [_onDragEnd](e) {
      e.stopPropagation();
      this[_reorderActive] = false;
      this[_dragSourceElement][$classes].remove("reorder-list-dragging-active");
      this[_reorderActive] = false;
      this[_resetChildren]();
      this[_reorder].add(this[_createReorderEvent](this[_moveSourceIndex], this[_currentMoveIndex]));
      if (dart.test(this.multiSelect)) {
        this[_clearSelection]();
        this[_notifySelectionChange]();
      }
    }
    [_onKeyDown](e, element) {
      if ((e.keyCode === 38 || e.keyCode === 40) && dart.test(keyboard.modifiersKeysFor(e))) {
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        let newIndex = this[_getNewIndex](e.keyCode, index);
        this[_reorderElements][$_get](newIndex).focus();
        e.preventDefault();
        e.stopPropagation();
      } else if ((e.keyCode === 38 || e.keyCode === 40) && dart.test(keyboard.modifiersKeysFor(e, {shiftKey: true}))) {
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        let newIndex = this[_getNewIndex](e.keyCode, index);
        if (newIndex != index) {
          this[_reorder].add(this[_createReorderEvent](index, newIndex));
          this[_ngZone$].onEventDone.first.then(core.Null, dart.fn(_ => {
            let element = this[_reorderElements][$_get](newIndex);
            if (dart.test(this.multiSelect)) {
              this[_clearSelection]();
              element[$classes].add(reorder_list.ReorderListComponent.itemSelectedCssClass);
              this[_selectedElementIndexes][$add](newIndex);
              this[_notifySelectionChange]();
            }
            element.focus();
          }, voidToNull()));
        }
        e.preventDefault();
        e.stopPropagation();
      } else if ((e.keyCode === 46 || e.keyCode === 46 || e.keyCode === 8) && dart.test(keyboard.modifiersKeysFor(e))) {
        if (!dart.equals(HtmlElementL().as(e[$target]), element)) return;
        let index = this[_getIndex](element);
        if (index === -1) {
          return;
        }
        this.removeAt(index);
        e.stopPropagation();
        e.preventDefault();
      }
    }
    [_onClick](e, element) {
      let index = this[_getIndex](element);
      if (index === -1) {
        return;
      }
      if (dart.test(e.shiftKey)) {
        this[_handleShift](index);
      } else if (dart.test(e.ctrlKey) || dart.test(e.metaKey)) {
        this[_handleCtrl](index, element);
      } else {
        if (!dart.test(this[_selectedElementIndexes][$contains](index))) {
          this[_clearSelection]();
          this[_selectedElementIndexes][$add](index);
        }
        this[_pivotItemIndex] = index;
      }
      this[_notifySelectionChange]();
    }
    removeAt(index) {
      this[_delete].add(index);
      this[_ngZone$].onEventDone.first.then(core.Null, dart.fn(_ => {
        if (dart.notNull(index) < dart.notNull(this[_reorderElements][$length])) {
          this[_reorderElements][$_get](index).focus();
        } else if (dart.test(this[_reorderElements][$isNotEmpty])) {
          this[_reorderElements][$_get](dart.notNull(this[_reorderElements][$length]) - 1).focus();
        }
      }, voidToNull()));
    }
    [_notifySelectionChange]() {
      let sources = ListOfintL().from(this[_selectedElementIndexes]);
      sources[$sort]();
      this[_itemSelectionChanged].add(new reorder_events.ItemSelectionEvent.new(sources));
    }
    [_handleCtrl](index, element) {
      this[_pivotItemIndex] = index;
      if (dart.test(element[$classes].contains(reorder_list.ReorderListComponent.itemSelectedCssClass))) {
        element[$classes].remove(reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$remove](index);
      } else {
        element[$classes].add(reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$add](index);
      }
    }
    [_handleShift](index) {
      if (this[_pivotItemIndex] == null) {
        this[_pivotItemIndex] = index;
      }
      let indexes = ListOfintL().from(range.range(math.min(numL(), this[_pivotItemIndex], index), math.max(numL(), this[_pivotItemIndex], index)));
      indexes[$add](math.max(intL(), this[_pivotItemIndex], index));
      this[_clearSelection]();
      let allElements = this[_reorderElements];
      for (let index of indexes) {
        allElements[$_get](index)[$classes].add(reorder_list.ReorderListComponent.itemSelectedCssClass);
        this[_selectedElementIndexes][$add](index);
      }
    }
    [_clearSelection]() {
      let allElements = this[_reorderElements];
      for (let index of this[_selectedElementIndexes]) {
        allElements[$_get](index)[$classes].remove(reorder_list.ReorderListComponent.itemSelectedCssClass);
      }
      this[_selectedElementIndexes][$clear]();
    }
    [_getNewIndex](keyCode, index) {
      if (keyCode === 38 && dart.notNull(index) > 0) {
        return dart.notNull(index) - 1;
      } else if (keyCode === 40 && dart.notNull(index) < dart.notNull(this[_reorderElements][$length]) - 1) {
        return dart.notNull(index) + 1;
      } else {
        return index;
      }
    }
    [_onDragOver](event, element) {
      if (dart.equals(this[_dragSourceElement], element)) {
        return;
      }
      let elementIndex = this[_getIndex](element);
      let moveTargetIndex = elementIndex;
      if (dart.notNull(this[_currentMoveIndex]) < dart.notNull(this[_moveSourceIndex]) && dart.notNull(elementIndex) >= dart.notNull(this[_currentMoveIndex]) && dart.notNull(elementIndex) < dart.notNull(this[_moveSourceIndex])) {
        moveTargetIndex = dart.notNull(moveTargetIndex) + 1;
      }
      if (dart.notNull(this[_currentMoveIndex]) > dart.notNull(this[_moveSourceIndex]) && dart.notNull(elementIndex) <= dart.notNull(this[_currentMoveIndex]) && dart.notNull(elementIndex) > dart.notNull(this[_moveSourceIndex])) {
        moveTargetIndex = dart.notNull(moveTargetIndex) - 1;
      }
      if (this[_currentMoveIndex] != moveTargetIndex && dart.test(this[_reorderActive]) && moveTargetIndex !== -1) {
        this[_moveItem](this[_currentMoveIndex], moveTargetIndex);
        this[_currentMoveIndex] = moveTargetIndex;
        this[_reorderProgress].add(this[_createReorderEvent](this[_moveSourceIndex], this[_currentMoveIndex]));
        this[_dragSubscriptions][$_get](element).cancel();
        this[_dragSubscriptions][$_get](element) == null;
        FutureOfNull().delayed(new core.Duration.new({milliseconds: 250}), dart.fn(() => {
          if (this[_subscriptions][$_get](element) != null) {
            this[_dragSubscriptions][$_set](element, element[$onDragOver].listen(dart.fn(e => this[_onDragOver](e, element), MouseEventLTovoid())));
          }
        }, VoidToNull()));
      }
    }
    [_getIndex](element) {
      let contents = this[_handleElements];
      let childCount = contents[$length];
      for (let i = 0; i < dart.notNull(childCount); i = i + 1) {
        if (dart.equals(element, contents[$_get](i))) {
          return i;
        }
      }
      return -1;
    }
    [_createReorderEvent](sourceIndex, destIndex) {
      if (dart.test(this.multiSelect)) {
        let sources = ListOfintL().from(this[_selectedElementIndexes]);
        sources[$sort]();
        return new reorder_events.MultiReorderEvent.new(sources, destIndex);
      } else {
        return new reorder_events.ReorderEvent.new(sourceIndex, destIndex);
      }
    }
    [_resetChildren]() {
      if (this[_currentMoveIndex] !== -1) {
        let contents = this[_reorderElements];
        let childCount = contents[$length];
        for (let i = 0; i < dart.notNull(childCount); i = i + 1) {
          let e = HtmlElementL().as(contents[$_get](i));
          e.style[$transition] = "";
          if (this[_curTransformY][$_get](i) !== 0) {
            e.style[$transform] = "";
          }
        }
      }
    }
    [_subscriptionsForElement](elm) {
      let l = this[_subscriptions][$_get](elm);
      if (l == null) {
        l = JSArrayOfStreamSubscriptionL().of([]);
        this[_subscriptions][$_set](elm, l);
      }
      return l;
    }
    get showPlaceholder() {
      return this[_reorderActive];
    }
  };
  (reorder_list.ReorderListComponent.new = function(_ngZone) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_reorder] = StreamControllerOfReorderEventL().broadcast({sync: true});
    this[_reorderAttempt] = StreamControllerOfReorderEventL().broadcast({sync: true});
    this[_delete] = StreamControllerOfintL().broadcast({sync: true});
    this[_itemSelectionChanged] = StreamControllerOfItemSelectionEventL().broadcast({sync: true});
    this[_reorderProgress] = StreamControllerOfReorderEventL().broadcast({sync: true});
    this[verticalItems] = true;
    this[multiSelect] = false;
    this[_items] = null;
    this[_subscriptions] = null;
    this[_dragSubscriptions] = null;
    this[_curTransformY] = null;
    this[_itemSizes] = null;
    this[_reorderActive] = false;
    this[_moveSourceIndex] = -1;
    this[_currentMoveIndex] = -1;
    this[_dragSourceElement] = null;
    this[_selectedElementIndexes] = JSArrayOfintL().of([]);
    this[_pivotItemIndex] = null;
    this[placeholder] = null;
    this[_ngZone$] = _ngZone;
    this[_subscriptions] = new (LinkedMapOfHtmlElementL$ListLOfStreamSubscriptionL()).new();
    this[_dragSubscriptions] = new (LinkedMapOfHtmlElementL$StreamSubscriptionL()).new();
  }).prototype = reorder_list.ReorderListComponent.prototype;
  dart.addTypeTests(reorder_list.ReorderListComponent);
  dart.addTypeCaches(reorder_list.ReorderListComponent);
  reorder_list.ReorderListComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getMethods(reorder_list.ReorderListComponent.__proto__),
    [_refreshItems]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_unTrackAll]: dart.fnType(dart.void, []),
    [_moveItem]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
    [_horizontalTransformHandler]: dart.fnType(dart.legacy(core.int), [dart.legacy(html.HtmlElement), dart.legacy(html.Element), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.int)]),
    track: dart.fnType(dart.void, [dart.legacy(html.HtmlElement)]),
    unTrack: dart.fnType(dart.void, [dart.legacy(html.HtmlElement)]),
    [_onDragStart]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_computeItemSize]: dart.fnType(dart.legacy(core.int), [dart.legacy(html.Element)]),
    [_parsePx]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    [_onDragEnd]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_onKeyDown]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent), dart.legacy(html.HtmlElement)]),
    [_onClick]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent), dart.legacy(html.HtmlElement)]),
    removeAt: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_notifySelectionChange]: dart.fnType(dart.void, []),
    [_handleCtrl]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(html.HtmlElement)]),
    [_handleShift]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_clearSelection]: dart.fnType(dart.void, []),
    [_getNewIndex]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int), dart.legacy(core.int)]),
    [_onDragOver]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent), dart.legacy(html.HtmlElement)]),
    [_getIndex]: dart.fnType(dart.legacy(core.int), [dart.legacy(html.HtmlElement)]),
    [_createReorderEvent]: dart.fnType(dart.legacy(reorder_events.ReorderEvent), [dart.legacy(core.int), dart.legacy(core.int)]),
    [_resetChildren]: dart.fnType(dart.void, []),
    [_subscriptionsForElement]: dart.fnType(dart.legacy(core.List$(dart.legacy(async.StreamSubscription))), [dart.legacy(html.HtmlElement)])
  }));
  dart.setGetterSignature(reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getGetters(reorder_list.ReorderListComponent.__proto__),
    reorder: dart.legacy(async.Stream$(dart.legacy(reorder_events.ReorderEvent))),
    reorderAttempt: dart.legacy(async.Stream$(dart.legacy(reorder_events.ReorderEvent))),
    delete: dart.legacy(async.Stream$(dart.legacy(core.int))),
    itemSelectionChanged: dart.legacy(async.Stream$(dart.legacy(reorder_events.ItemSelectionEvent))),
    reorderProgress: dart.legacy(async.Stream$(dart.legacy(reorder_events.ReorderEvent))),
    [_handleElements]: dart.legacy(core.List$(dart.legacy(html.HtmlElement))),
    [_reorderElements]: dart.legacy(core.List$(dart.legacy(html.HtmlElement))),
    showPlaceholder: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getSetters(reorder_list.ReorderListComponent.__proto__),
    items: dart.legacy(core.List$(dart.legacy(reorder_list.ReorderItemDirective)))
  }));
  dart.setLibraryUri(reorder_list.ReorderListComponent, L0);
  dart.setFieldSignature(reorder_list.ReorderListComponent, () => ({
    __proto__: dart.getFields(reorder_list.ReorderListComponent.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_reorder]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(reorder_events.ReorderEvent)))),
    [_reorderAttempt]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(reorder_events.ReorderEvent)))),
    [_delete]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.int)))),
    [_itemSelectionChanged]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(reorder_events.ItemSelectionEvent)))),
    [_reorderProgress]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(reorder_events.ReorderEvent)))),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    verticalItems: dart.fieldType(dart.legacy(core.bool)),
    multiSelect: dart.fieldType(dart.legacy(core.bool)),
    [_items]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(html.HtmlElement), dart.legacy(html.HtmlElement)))),
    [_subscriptions]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(html.HtmlElement), dart.legacy(core.List$(dart.legacy(async.StreamSubscription)))))),
    [_dragSubscriptions]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(html.HtmlElement), dart.legacy(async.StreamSubscription)))),
    [_curTransformY]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_itemSizes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_reorderActive]: dart.fieldType(dart.legacy(core.bool)),
    [_moveSourceIndex]: dart.fieldType(dart.legacy(core.int)),
    [_currentMoveIndex]: dart.fieldType(dart.legacy(core.int)),
    [_dragSourceElement]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_selectedElementIndexes]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_pivotItemIndex]: dart.fieldType(dart.legacy(core.int)),
    placeholder: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.defineLazy(reorder_list.ReorderListComponent, {
    /*reorder_list.ReorderListComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*reorder_list.ReorderListComponent.hostRole*/get hostRole() {
      return "list";
    },
    /*reorder_list.ReorderListComponent.itemSelectedCssClass*/get itemSelectedCssClass() {
      return "item-selected";
    }
  }, true);
  var _handleElement = dart.privateName(reorder_list, "_handleElement");
  var _handleProvider$ = dart.privateName(reorder_list, "_handleProvider");
  var _reorderHandle = dart.privateName(reorder_list, "_reorderHandle");
  var element$ = dart.privateName(reorder_list, "ReorderItemDirective.element");
  reorder_list.ReorderItemDirective = class ReorderItemDirective extends core.Object {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    get hostDraggable() {
      return this[_reorderHandle] == null ? "true" : null;
    }
    get [_reorderHandle]() {
      let t1, t1$, t0;
      t0 = this[_handleElement];
      return t0 == null ? (t1$ = (t1 = this[_handleProvider$], t1 == null ? null : t1.reorderHandle), t1$ == null ? null : t1$.element) : t0;
    }
    set useHandle(element) {
      this[_handleElement] = element;
    }
    get handleElement() {
      let t0;
      t0 = this[_reorderHandle];
      return t0 == null ? this.element : t0;
    }
  };
  (reorder_list.ReorderItemDirective.new = function(element, _handleProvider) {
    this[_handleElement] = null;
    this[element$] = element;
    this[_handleProvider$] = _handleProvider;
    ;
  }).prototype = reorder_list.ReorderItemDirective.prototype;
  dart.addTypeTests(reorder_list.ReorderItemDirective);
  dart.addTypeCaches(reorder_list.ReorderItemDirective);
  dart.setGetterSignature(reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getGetters(reorder_list.ReorderItemDirective.__proto__),
    hostDraggable: dart.legacy(core.String),
    [_reorderHandle]: dart.legacy(html.HtmlElement),
    handleElement: dart.legacy(html.HtmlElement)
  }));
  dart.setSetterSignature(reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getSetters(reorder_list.ReorderItemDirective.__proto__),
    useHandle: dart.legacy(html.HtmlElement)
  }));
  dart.setLibraryUri(reorder_list.ReorderItemDirective, L0);
  dart.setFieldSignature(reorder_list.ReorderItemDirective, () => ({
    __proto__: dart.getFields(reorder_list.ReorderItemDirective.__proto__),
    element: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_handleProvider$]: dart.finalFieldType(dart.legacy(reorder_list.ReorderHandleProvider)),
    [_handleElement]: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.defineLazy(reorder_list.ReorderItemDirective, {
    /*reorder_list.ReorderItemDirective.hostRole*/get hostRole() {
      return "listitem";
    },
    /*reorder_list.ReorderItemDirective.hostTabIndex*/get hostTabIndex() {
      return 0;
    }
  }, true);
  reorder_list.ReorderHandleProvider = class ReorderHandleProvider extends core.Object {};
  (reorder_list.ReorderHandleProvider.new = function() {
    ;
  }).prototype = reorder_list.ReorderHandleProvider.prototype;
  dart.addTypeTests(reorder_list.ReorderHandleProvider);
  dart.addTypeCaches(reorder_list.ReorderHandleProvider);
  dart.setLibraryUri(reorder_list.ReorderHandleProvider, L0);
  var element$0 = dart.privateName(reorder_list, "ReorderHandleDirective.element");
  reorder_list.ReorderHandleDirective = class ReorderHandleDirective extends core.Object {
    get element() {
      return this[element$0];
    }
    set element(value) {
      super.element = value;
    }
  };
  (reorder_list.ReorderHandleDirective.new = function(element) {
    this[element$0] = element;
    ;
  }).prototype = reorder_list.ReorderHandleDirective.prototype;
  dart.addTypeTests(reorder_list.ReorderHandleDirective);
  dart.addTypeCaches(reorder_list.ReorderHandleDirective);
  dart.setLibraryUri(reorder_list.ReorderHandleDirective, L0);
  dart.setFieldSignature(reorder_list.ReorderHandleDirective, () => ({
    __proto__: dart.getFields(reorder_list.ReorderHandleDirective.__proto__),
    element: dart.finalFieldType(dart.legacy(html.HtmlElement))
  }));
  dart.defineLazy(reorder_list.ReorderHandleDirective, {
    /*reorder_list.ReorderHandleDirective.hostDraggable*/get hostDraggable() {
      return "true";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list", {
    "package:angular_components/reorder_list/reorder_list.dart": reorder_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.dart"],"names":[],"mappings":"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","file":"reorder_list.unsound.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list: reorder_list
  };
}));

//# sourceMappingURL=reorder_list.unsound.ddc.js.map
