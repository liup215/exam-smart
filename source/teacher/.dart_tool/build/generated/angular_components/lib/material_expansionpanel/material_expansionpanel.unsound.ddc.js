define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/observable/observable', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/disposer/disposable_callback', 'packages/intl/intl', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/core/application_tokens', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__material_expansionpanel__material_expansionpanel(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__observable__observable, packages__angular_components__src__model__action__async_action, packages__angular_components__focus__focus, packages__angular_components__focus__focus_interface, packages__angular__src__bootstrap__modules, packages__angular_components__utils__disposer__disposable_callback, packages__intl__intl, packages__angular_components__content__deferred_content_aware, packages__angular_components__interfaces__has_disabled, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__button_decorator__button_decorator, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__core__application_tokens, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const async_action = packages__angular_components__src__model__action__async_action.src__model__action__async_action;
  const async_action_controller = packages__angular_components__src__model__action__async_action.src__model__action__async_action_controller;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const disposable_callback = packages__angular_components__utils__disposer__disposable_callback.utils__disposer__disposable_callback;
  const intl = packages__intl__intl.intl;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var material_expansionpanel = Object.create(dart.library);
  var $onTransitionEnd = dartx.onTransitionEnd;
  var $height = dartx.height;
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $scrollHeight = dartx.scrollHeight;
  var $add = dartx.add;
  var $marginTop = dartx.marginTop;
  var $getComputedStyle = dartx.getComputedStyle;
  var $transition = dartx.transition;
  var $contains = dartx.contains;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var CompleterOfStringL = () => (CompleterOfStringL = dart.constFn(async.Completer$(StringL())))();
  var CompleterLOfStringL = () => (CompleterLOfStringL = dart.constFn(dart.legacy(CompleterOfStringL())))();
  var JSArrayOfCompleterLOfStringL = () => (JSArrayOfCompleterLOfStringL = dart.constFn(_interceptors.JSArray$(CompleterLOfStringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ObservableReferenceOfboolL = () => (ObservableReferenceOfboolL = dart.constFn(observable.ObservableReference$(boolL())))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var AsyncActionOfboolL = () => (AsyncActionOfboolL = dart.constFn(async_action.AsyncAction$(boolL())))();
  var AsyncActionLOfboolL = () => (AsyncActionLOfboolL = dart.constFn(dart.legacy(AsyncActionOfboolL())))();
  var StreamControllerOfAsyncActionLOfboolL = () => (StreamControllerOfAsyncActionLOfboolL = dart.constFn(async.StreamController$(AsyncActionLOfboolL())))();
  var FocusMoveEventL = () => (FocusMoveEventL = dart.constFn(dart.legacy(focus.FocusMoveEvent)))();
  var StreamControllerOfFocusMoveEventL = () => (StreamControllerOfFocusMoveEventL = dart.constFn(async.StreamController$(FocusMoveEventL())))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var ElementRefL = () => (ElementRefL = dart.constFn(dart.legacy(element_ref.ElementRef)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var TransitionEventL = () => (TransitionEventL = dart.constFn(dart.legacy(html.TransitionEvent)))();
  var TransitionEventLToboolL = () => (TransitionEventLToboolL = dart.constFn(dart.fnType(boolL(), [TransitionEventL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var TransitionEventLToNull = () => (TransitionEventLToNull = dart.constFn(dart.fnType(core.Null, [TransitionEventL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var DisposableCallbackL = () => (DisposableCallbackL = dart.constFn(dart.legacy(disposable_callback.DisposableCallback)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [], [dart.void])))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var AsyncActionControllerOfboolL = () => (AsyncActionControllerOfboolL = dart.constFn(async_action_controller.AsyncActionController$(boolL())))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var boolLToboolL = () => (boolLToboolL = dart.constFn(dart.fnType(boolL(), [boolL()])))();
  var StringLToNull = () => (StringLToNull = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var numLToStringL = () => (numLToStringL = dart.constFn(dart.fnType(StringL(), [numL()])))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_expansionpanel/material_expansionpanel.dart";
  var L1 = "package:angular_components/material_expansionpanel/material_expansionpanel.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["panelName", "Conversions"]);
    }
  }, false);
  var _disposer = dart.privateName(material_expansionpanel, "_disposer");
  var _defaultExpandIcon = dart.privateName(material_expansionpanel, "_defaultExpandIcon");
  var _pendingExpandedPanelHeightReads = dart.privateName(material_expansionpanel, "_pendingExpandedPanelHeightReads");
  var _focusOnOpenChild = dart.privateName(material_expansionpanel, "_focusOnOpenChild");
  var _mainPanel = dart.privateName(material_expansionpanel, "_mainPanel");
  var _headerPanel = dart.privateName(material_expansionpanel, "_headerPanel");
  var _mainContent = dart.privateName(material_expansionpanel, "_mainContent");
  var _headerContent = dart.privateName(material_expansionpanel, "_headerContent");
  var _actionContent = dart.privateName(material_expansionpanel, "_actionContent");
  var _contentWrapper = dart.privateName(material_expansionpanel, "_contentWrapper");
  var _isExpanded = dart.privateName(material_expansionpanel, "_isExpanded");
  var _isExpandedChangeByUserAction = dart.privateName(material_expansionpanel, "_isExpandedChangeByUserAction");
  var _contentVisible = dart.privateName(material_expansionpanel, "_contentVisible");
  var _anotherExpanded = dart.privateName(material_expansionpanel, "_anotherExpanded");
  var _disabled = dart.privateName(material_expansionpanel, "_disabled");
  var _activeSaveCancelAction = dart.privateName(material_expansionpanel, "_activeSaveCancelAction");
  var _groupAriaLabel = dart.privateName(material_expansionpanel, "_groupAriaLabel");
  var _expandIcon = dart.privateName(material_expansionpanel, "_expandIcon");
  var _openController = dart.privateName(material_expansionpanel, "_openController");
  var _closeController = dart.privateName(material_expansionpanel, "_closeController");
  var _saveController = dart.privateName(material_expansionpanel, "_saveController");
  var _cancelController = dart.privateName(material_expansionpanel, "_cancelController");
  var _expandCollapseButton = dart.privateName(material_expansionpanel, "_expandCollapseButton");
  var _focusMoveCtrl = dart.privateName(material_expansionpanel, "_focusMoveCtrl");
  var _ngZone$ = dart.privateName(material_expansionpanel, "_ngZone");
  var _changeDetector$ = dart.privateName(material_expansionpanel, "_changeDetector");
  var _domService$ = dart.privateName(material_expansionpanel, "_domService");
  var _mainPanelHasHeightTransition = dart.privateName(material_expansionpanel, "_mainPanelHasHeightTransition");
  var _completeExpandedPanelHeightReadsIfPossible = dart.privateName(material_expansionpanel, "_completeExpandedPanelHeightReadsIfPossible");
  var _readMainContentHeight = dart.privateName(material_expansionpanel, "_readMainContentHeight");
  var _namedPanelMsg = dart.privateName(material_expansionpanel, "_namedPanelMsg");
  var C0;
  var _transitionHeightChange = dart.privateName(material_expansionpanel, "_transitionHeightChange");
  var _readExpandedPanelHeight = dart.privateName(material_expansionpanel, "_readExpandedPanelHeight");
  var _readExpandedHeaderHeight = dart.privateName(material_expansionpanel, "_readExpandedHeaderHeight");
  var shouldExpandOnLeft = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.shouldExpandOnLeft");
  var forceContentWhenClosed = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.forceContentWhenClosed");
  var initialized = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.initialized");
  var autoFocusChild = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.autoFocusChild");
  var closeOnSave = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.closeOnSave");
  var saveDisabled = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.saveDisabled");
  var hideExpandedHeader = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.hideExpandedHeader");
  var disableHeaderExpansion = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.disableHeaderExpansion");
  var name = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.name");
  var secondaryText = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.secondaryText");
  var headerAriaLevel = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.headerAriaLevel");
  var alwaysShowExpandIcon = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.alwaysShowExpandIcon");
  var alwaysHideExpandIcon = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.alwaysHideExpandIcon");
  var showSaveCancel = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.showSaveCancel");
  var cancelDisplayed = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.cancelDisplayed");
  var enterAccepts = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.enterAccepts");
  var saveText = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.saveText");
  var cancelText = dart.privateName(material_expansionpanel, "MaterialExpansionPanel.cancelText");
  material_expansionpanel.MaterialExpansionPanel = class MaterialExpansionPanel extends core.Object {
    get shouldExpandOnLeft() {
      return this[shouldExpandOnLeft];
    }
    set shouldExpandOnLeft(value) {
      super.shouldExpandOnLeft = value;
    }
    get forceContentWhenClosed() {
      return this[forceContentWhenClosed];
    }
    set forceContentWhenClosed(value) {
      super.forceContentWhenClosed = value;
    }
    get initialized() {
      return this[initialized];
    }
    set initialized(value) {
      this[initialized] = value;
    }
    get autoFocusChild() {
      return this[autoFocusChild];
    }
    set autoFocusChild(value) {
      this[autoFocusChild] = value;
    }
    get closeOnSave() {
      return this[closeOnSave];
    }
    set closeOnSave(value) {
      this[closeOnSave] = value;
    }
    get saveDisabled() {
      return this[saveDisabled];
    }
    set saveDisabled(value) {
      this[saveDisabled] = value;
    }
    get hideExpandedHeader() {
      return this[hideExpandedHeader];
    }
    set hideExpandedHeader(value) {
      this[hideExpandedHeader] = value;
    }
    get disableHeaderExpansion() {
      return this[disableHeaderExpansion];
    }
    set disableHeaderExpansion(value) {
      this[disableHeaderExpansion] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get secondaryText() {
      return this[secondaryText];
    }
    set secondaryText(value) {
      this[secondaryText] = value;
    }
    get headerAriaLevel() {
      return this[headerAriaLevel];
    }
    set headerAriaLevel(value) {
      this[headerAriaLevel] = value;
    }
    get alwaysShowExpandIcon() {
      return this[alwaysShowExpandIcon];
    }
    set alwaysShowExpandIcon(value) {
      this[alwaysShowExpandIcon] = value;
    }
    get alwaysHideExpandIcon() {
      return this[alwaysHideExpandIcon];
    }
    set alwaysHideExpandIcon(value) {
      this[alwaysHideExpandIcon] = value;
    }
    get showSaveCancel() {
      return this[showSaveCancel];
    }
    set showSaveCancel(value) {
      this[showSaveCancel] = value;
    }
    get cancelDisplayed() {
      return this[cancelDisplayed];
    }
    set cancelDisplayed(value) {
      this[cancelDisplayed] = value;
    }
    get enterAccepts() {
      return this[enterAccepts];
    }
    set enterAccepts(value) {
      this[enterAccepts] = value;
    }
    get saveText() {
      return this[saveText];
    }
    set saveText(value) {
      this[saveText] = value;
    }
    get cancelText() {
      return this[cancelText];
    }
    set cancelText(value) {
      this[cancelText] = value;
    }
    set focusOnOpenChild(element) {
      if (FocusableL().is(element)) {
        this[_focusOnOpenChild] = element;
      } else if (ElementRefL().is(element)) {
        this[_focusOnOpenChild] = new focus.RootFocusable.new(ElementL().as(element.nativeElement));
      } else {
        if (!(element == null)) dart.assertFailed("Warning expansion panel content has a #focus" + "child which is not an Element, or Focusable", L0, 129, 11, "element == null");
      }
    }
    set mainPanel(mainPanel) {
      let t0;
      this[_mainPanel] = mainPanel;
      this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
        this[_disposer].addStreamSubscription(TransitionEventL(), this[_mainPanel][$onTransitionEnd].where(dart.fn(e => e.eventPhase === 2, TransitionEventLToboolL())).listen(dart.fn(_ => {
          this[_mainPanel].style[$height] = "";
          if (!dart.test(this.isExpanded)) {
            this[_ngZone$].run(dart.void, dart.fn(() => this[_contentVisible].add(false), VoidTovoid()));
          }
        }, TransitionEventLToNull())));
      }, VoidToNull()));
      let transitionCheck = new disposable_callback.DisposableCallback.new(dart.fn(() => {
        if (!dart.test(this[_mainPanelHasHeightTransition])) {
          this[_disposer].addStreamSubscription(boolL(), this.isExpandedChange.listen(dart.fn(expanded => {
            if (!dart.test(expanded)) this[_contentVisible].add(false);
          }, boolLToNull())));
        }
      }, VoidToNull()));
      this[_domService$].scheduleRead((t0 = transitionCheck, t0 === null ? null : dart.bind(t0, 'call')));
      this[_disposer].addDisposable(DisposableCallbackL(), transitionCheck);
    }
    set headerPanel(headerPanel) {
      this[_headerPanel] = headerPanel;
      this[_ngZone$].runOutsideAngular(core.Null, dart.fn(() => {
        this[_disposer].addStreamSubscription(TransitionEventL(), this[_headerPanel][$onTransitionEnd].where(dart.fn(e => e.eventPhase === 2, TransitionEventLToboolL())).listen(dart.fn(_ => {
          this[_headerPanel].style[$height] = "";
        }, TransitionEventLToNull())));
      }, VoidToNull()));
    }
    set mainContent(mainContent) {
      this[_mainContent] = mainContent;
      if (this[_mainContent] == null) return;
      this[_completeExpandedPanelHeightReadsIfPossible]();
    }
    [_completeExpandedPanelHeightReadsIfPossible]() {
      if (this[_mainContent] == null || this[_contentWrapper] == null) return;
      if (dart.test(this[_pendingExpandedPanelHeightReads][$isNotEmpty])) {
        let height = this[_readMainContentHeight]();
        for (let completer of this[_pendingExpandedPanelHeightReads]) {
          completer.complete(height);
        }
        this[_pendingExpandedPanelHeightReads][$clear]();
      }
    }
    set headerContent(headerContent) {
      return this[_headerContent] = headerContent;
    }
    set actionContent(headerContent) {
      return this[_actionContent] = headerContent;
    }
    set contentWrapper(contentWrapper) {
      this[_contentWrapper] = contentWrapper;
      this[_completeExpandedPanelHeightReadsIfPossible]();
    }
    get isExpanded() {
      return this[_isExpanded].value;
    }
    set isExpanded(value) {
      if (dart.equals(value, this.isExpanded)) return;
      if (dart.test(value)) {
        this.expand({byUserAction: false});
      } else {
        this.collapse({byUserAction: false});
      }
    }
    get isExpandedChange() {
      return this[_isExpanded].stream;
    }
    get isExpandedChangeByUserAction() {
      return this[_isExpandedChangeByUserAction].stream;
    }
    get contentVisible() {
      return this[_contentVisible].stream;
    }
    get anotherExpanded() {
      return this[_anotherExpanded];
    }
    set anotherExpanded(anotherExpanded) {
      this[_anotherExpanded] = anotherExpanded;
      this[_changeDetector$].markForCheck();
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(value) {
      this[_disabled] = value;
      this[_changeDetector$].markForCheck();
    }
    get activeSaveCancelAction() {
      return this[_activeSaveCancelAction];
    }
    set groupAriaLabel(groupAriaLabel) {
      this[_groupAriaLabel] = groupAriaLabel;
    }
    get groupAriaLabel() {
      return this[_groupAriaLabel] == null ? this.name : this[_groupAriaLabel];
    }
    get headerRole() {
      return this.headerAriaLevel == null ? "none" : "heading";
    }
    set expandIcon(expandIcon) {
      return this[_expandIcon] = expandIcon;
    }
    get expandIcon() {
      let t0;
      t0 = this[_expandIcon];
      return t0 == null ? this[_defaultExpandIcon] : t0;
    }
    get hasCustomExpandIcon() {
      return this.expandIcon != this[_defaultExpandIcon];
    }
    get shouldShowExpandIcon() {
      if (dart.test(this.alwaysHideExpandIcon)) return false;
      return dart.test(this.hasCustomExpandIcon) && dart.test(this.isExpanded) ? this.alwaysShowExpandIcon : !dart.test(this.disabled);
    }
    get shouldFlipExpandIcon() {
      return dart.test(this.hasCustomExpandIcon) ? false : !dart.test(this.isExpanded);
    }
    get shouldShowHiddenHeaderExpandIcon() {
      return dart.test(this.hasCustomExpandIcon) || dart.test(this.alwaysHideExpandIcon) ? false : dart.test(this.hideExpandedHeader) && !dart.test(this.disabled);
    }
    get closePanelMsg() {
      return this.groupAriaLabel == null && this.name == null ? material_expansionpanel.MaterialExpansionPanel._closePanelMsg : this[_namedPanelMsg](this.groupAriaLabel);
    }
    get openPanelMsg() {
      return this.groupAriaLabel == null && this.name == null ? material_expansionpanel.MaterialExpansionPanel._openPanelMsg : this[_namedPanelMsg](this.groupAriaLabel);
    }
    get headerMsg() {
      if (dart.test(this.disabled) || this[_groupAriaLabel] != null) {
        return this.groupAriaLabel;
      } else {
        return dart.test(this.isExpanded) ? this.closePanelMsg : this.openPanelMsg;
      }
    }
    [_namedPanelMsg](panelName) {
      return intl.Intl.message(dart.str(panelName) + " panel", {name: "_namedPanelMsg", args: JSArrayOfObjectL().of([panelName]), desc: "ARIA label for a button that shows or hides the panel.", examples: C0 || CT.C0});
    }
    get close() {
      return this[_closeController].stream;
    }
    get open() {
      return this[_openController].stream;
    }
    get save() {
      return this[_saveController].stream;
    }
    get cancel() {
      return this[_cancelController].stream;
    }
    handleHeaderClick() {
      if (!dart.test(this.disableHeaderExpansion)) dart.test(this.isExpanded) ? this.collapse() : this.expand();
    }
    handleExpandIconClick() {
      if (dart.test(this.disableHeaderExpansion)) dart.test(this.isExpanded) ? this.collapse() : this.expand();
    }
    ngOnInit() {
      this[_disposer].addStreamSubscription(boolL(), this.isExpandedChangeByUserAction.listen(dart.fn(_ => {
        this[_ngZone$].onEventDone.first.then(core.Null, dart.fn((_ = null) => {
          let t0;
          t0 = this[_expandCollapseButton];
          t0 == null ? null : t0.focus();
        }, voidToNull()));
      }, boolLToNull())));
      this.initialized = true;
    }
    set expandCollapse(button) {
      this[_expandCollapseButton] = button;
    }
    focus() {
      let t0;
      t0 = this[_expandCollapseButton];
      t0 == null ? null : t0.focus();
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    keydown(event) {
      let focusEvent = focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent != null) {
        this[_focusMoveCtrl].add(focusEvent);
      }
    }
    set tabbable(value) {
    }
    expand(opts) {
      let byUserAction = opts && 'byUserAction' in opts ? opts.byUserAction : true;
      if (dart.test(this.disabled) && dart.test(byUserAction)) return FutureOfboolL().value(false);
      return this.changeState(true, byUserAction, this[_openController]);
    }
    collapse(opts) {
      let byUserAction = opts && 'byUserAction' in opts ? opts.byUserAction : true;
      if (dart.test(this.disabled) && dart.test(byUserAction)) return FutureOfboolL().value(false);
      return this.changeState(false, byUserAction, this[_closeController]);
    }
    doSave() {
      let actionCtrl = new (AsyncActionControllerOfboolL()).new();
      this[_saveController].add(actionCtrl.action);
      this[_activeSaveCancelAction] = true;
      this[_changeDetector$].markForCheck();
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        if (dart.test(this.closeOnSave)) {
          this[_isExpanded].value = false;
          this[_isExpandedChangeByUserAction].add(false);
          this[_changeDetector$].markForCheck();
          if (dart.test(stateWasInitialized)) this[_transitionHeightChange](false);
        }
        return true;
      }, VoidToboolL()), {valueOnCancel: false});
      return actionCtrl.action.onDone.then(boolL(), dart.fn(result => {
        this[_activeSaveCancelAction] = false;
        this[_changeDetector$].markForCheck();
        return result;
      }, boolLToboolL()));
    }
    doCancel() {
      let actionCtrl = new (AsyncActionControllerOfboolL()).new();
      this[_cancelController].add(actionCtrl.action);
      this[_activeSaveCancelAction] = true;
      this[_changeDetector$].markForCheck();
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        this[_isExpanded].value = false;
        this[_isExpandedChangeByUserAction].add(false);
        this[_changeDetector$].markForCheck();
        if (dart.test(stateWasInitialized)) this[_transitionHeightChange](false);
        return true;
      }, VoidToboolL()), {valueOnCancel: false});
      return actionCtrl.action.onDone.then(boolL(), dart.fn(result => {
        this[_activeSaveCancelAction] = false;
        this[_changeDetector$].markForCheck();
        return result;
      }, boolLToboolL()));
    }
    changeState(expand, byUserAction, stream) {
      if (dart.equals(this.isExpanded, expand)) {
        return FutureOfboolL().value(true);
      }
      let actionCtrl = new (AsyncActionControllerOfboolL()).new();
      stream.add(actionCtrl.action);
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        this[_isExpanded].value = expand;
        if (dart.test(expand)) this[_contentVisible].add(true);
        if (dart.test(byUserAction)) this[_isExpandedChangeByUserAction].add(expand);
        this[_changeDetector$].markForCheck();
        if (dart.test(expand)) {
          this[_domService$].scheduleWrite(dart.fn(() => {
            if (this.autoFocusChild != null) {
              this.autoFocusChild.focus();
            } else if (dart.test(byUserAction) && this[_focusOnOpenChild] != null) {
              this[_focusOnOpenChild].focus();
            }
          }, VoidToNull()));
        }
        if (dart.test(stateWasInitialized)) this[_transitionHeightChange](expand);
        return true;
      }, VoidToboolL()), {valueOnCancel: false});
      return actionCtrl.action.onDone;
    }
    get headerHidden() {
      return dart.test(this.isExpanded) && dart.test(this.hideExpandedHeader);
    }
    [_transitionHeightChange](expand) {
      this[_mainPanel].style[$height] = dart.str(this[_mainPanel][$scrollHeight]) + "px";
      if (dart.test(expand)) {
        this[_readExpandedPanelHeight]().then(core.Null, dart.fn(expandedPanelHeight => {
          this[_mainPanel].style[$height] = expandedPanelHeight;
        }, StringLToNull()));
      } else {
        this[_domService$].nextFrame.then(StringL(), dart.fn(_ => this[_mainPanel].style[$height] = "", numLToStringL()));
      }
      if (dart.test(this.hideExpandedHeader)) {
        this[_headerPanel].style[$height] = dart.str(this[_headerPanel][$scrollHeight]) + "px";
        if (dart.test(expand)) {
          this[_domService$].nextFrame.then(core.Null, dart.fn(_ => {
            this[_headerPanel].style[$height] = "";
          }, numLToNull()));
        } else {
          this[_readExpandedHeaderHeight]().then(core.Null, dart.fn(expandedHeaderHeight => {
            this[_headerPanel].style[$height] = expandedHeaderHeight;
          }, StringLToNull()));
        }
      }
    }
    [_readExpandedPanelHeight]() {
      let completeExpandedHeight = CompleterOfStringL().new();
      this[_domService$].scheduleRead(dart.fn(() => {
        if (this[_mainContent] != null && this[_contentWrapper] != null) {
          completeExpandedHeight.complete(this[_readMainContentHeight]());
        } else {
          this[_pendingExpandedPanelHeightReads][$add](completeExpandedHeight);
        }
      }, VoidToNull()));
      return completeExpandedHeight.future;
    }
    [_readMainContentHeight]() {
      let contentHeight = this[_mainContent][$scrollHeight];
      let expandedPanelHeight = "";
      let hasHeightTransition = dart.notNull(contentHeight) > 0 && dart.test(this[_mainPanelHasHeightTransition]);
      if (hasHeightTransition) {
        let topMargin = this[_contentWrapper][$getComputedStyle]()[$marginTop];
        expandedPanelHeight = "calc(" + dart.str(contentHeight) + "px + " + dart.str(topMargin) + ")";
      }
      return expandedPanelHeight;
    }
    get [_mainPanelHasHeightTransition]() {
      let mainPanelStyle = this[_mainPanel][$getComputedStyle]();
      return mainPanelStyle[$transition][$contains]("height");
    }
    [_readExpandedHeaderHeight]() {
      let completeExpandedHeight = CompleterOfStringL().new();
      this[_domService$].scheduleRead(dart.fn(() => {
        let t0, t0$;
        let contentHeight = math.max(intL(), this[_headerContent][$scrollHeight], (t0$ = (t0 = this[_actionContent], t0 == null ? null : t0[$scrollHeight]), t0$ == null ? 0 : t0$));
        let expandedHeaderHeight = "";
        let headerPanelStyle = this[_headerPanel][$getComputedStyle]();
        let hasHeightTransition = contentHeight > 0 && headerPanelStyle[$transition][$contains]("height");
        if (hasHeightTransition) expandedHeaderHeight = dart.str(contentHeight) + "px";
        completeExpandedHeight.complete(expandedHeaderHeight);
      }, VoidToNull()));
      return completeExpandedHeight.future;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_expansionpanel.MaterialExpansionPanel.new = function(_ngZone, _changeDetector, _domService, expandOnLeft, forceContent) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_defaultExpandIcon] = "expand_less";
    this[_pendingExpandedPanelHeightReads] = JSArrayOfCompleterLOfStringL().of([]);
    this[initialized] = false;
    this[autoFocusChild] = null;
    this[_focusOnOpenChild] = null;
    this[_mainPanel] = null;
    this[_headerPanel] = null;
    this[_mainContent] = null;
    this[_headerContent] = null;
    this[_actionContent] = null;
    this[_contentWrapper] = null;
    this[closeOnSave] = true;
    this[_isExpanded] = new (ObservableReferenceOfboolL()).new(false);
    this[_isExpandedChangeByUserAction] = StreamControllerOfboolL().broadcast({sync: true});
    this[_contentVisible] = StreamControllerOfboolL().broadcast({sync: true});
    this[_anotherExpanded] = false;
    this[_disabled] = false;
    this[saveDisabled] = false;
    this[_activeSaveCancelAction] = false;
    this[hideExpandedHeader] = false;
    this[disableHeaderExpansion] = false;
    this[name] = null;
    this[secondaryText] = null;
    this[_groupAriaLabel] = null;
    this[headerAriaLevel] = null;
    this[_expandIcon] = null;
    this[alwaysShowExpandIcon] = false;
    this[alwaysHideExpandIcon] = false;
    this[showSaveCancel] = true;
    this[cancelDisplayed] = true;
    this[enterAccepts] = false;
    this[saveText] = material_expansionpanel.MaterialExpansionPanel._msgSave;
    this[cancelText] = material_expansionpanel.MaterialExpansionPanel._msgCancel;
    this[_openController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[_closeController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[_saveController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[_cancelController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[_expandCollapseButton] = null;
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEventL().broadcast({sync: true});
    this[_ngZone$] = _ngZone;
    this[_changeDetector$] = _changeDetector;
    this[_domService$] = _domService;
    this[shouldExpandOnLeft] = expandOnLeft != null;
    this[forceContentWhenClosed] = forceContent != null;
    ;
  }).prototype = material_expansionpanel.MaterialExpansionPanel.prototype;
  dart.addTypeTests(material_expansionpanel.MaterialExpansionPanel);
  dart.addTypeCaches(material_expansionpanel.MaterialExpansionPanel);
  material_expansionpanel.MaterialExpansionPanel[dart.implements] = () => [deferred_content_aware.DeferredContentAware, has_disabled.HasDisabled, lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy, focus.FocusableItem];
  dart.setMethodSignature(material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getMethods(material_expansionpanel.MaterialExpansionPanel.__proto__),
    [_completeExpandedPanelHeightReadsIfPossible]: dart.fnType(dart.void, []),
    [_namedPanelMsg]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    handleHeaderClick: dart.fnType(dart.void, []),
    handleExpandIconClick: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    keydown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    expand: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [], {byUserAction: dart.legacy(core.bool)}, {}),
    collapse: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [], {byUserAction: dart.legacy(core.bool)}, {}),
    doSave: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    doCancel: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), []),
    changeState: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.bool), dart.legacy(core.bool), dart.legacy(async.StreamController)]),
    [_transitionHeightChange]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_readExpandedPanelHeight]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    [_readMainContentHeight]: dart.fnType(dart.legacy(core.String), []),
    [_readExpandedHeaderHeight]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getGetters(material_expansionpanel.MaterialExpansionPanel.__proto__),
    isExpanded: dart.legacy(core.bool),
    isExpandedChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    isExpandedChangeByUserAction: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    anotherExpanded: dart.legacy(core.bool),
    disabled: dart.legacy(core.bool),
    activeSaveCancelAction: dart.legacy(core.bool),
    groupAriaLabel: dart.legacy(core.String),
    headerRole: dart.legacy(core.String),
    expandIcon: dart.legacy(core.String),
    hasCustomExpandIcon: dart.legacy(core.bool),
    shouldShowExpandIcon: dart.legacy(core.bool),
    shouldFlipExpandIcon: dart.legacy(core.bool),
    shouldShowHiddenHeaderExpandIcon: dart.legacy(core.bool),
    closePanelMsg: dart.legacy(core.String),
    openPanelMsg: dart.legacy(core.String),
    headerMsg: dart.legacy(core.String),
    close: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    open: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    save: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    cancel: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    focusmove: dart.legacy(async.Stream$(dart.legacy(focus.FocusMoveEvent))),
    headerHidden: dart.legacy(core.bool),
    [_mainPanelHasHeightTransition]: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getSetters(material_expansionpanel.MaterialExpansionPanel.__proto__),
    focusOnOpenChild: dart.dynamic,
    mainPanel: dart.legacy(html.HtmlElement),
    headerPanel: dart.legacy(html.HtmlElement),
    mainContent: dart.legacy(html.HtmlElement),
    headerContent: dart.legacy(html.HtmlElement),
    actionContent: dart.legacy(html.HtmlElement),
    contentWrapper: dart.legacy(html.HtmlElement),
    isExpanded: dart.legacy(core.bool),
    anotherExpanded: dart.legacy(core.bool),
    disabled: dart.legacy(core.bool),
    groupAriaLabel: dart.legacy(core.String),
    expandIcon: dart.legacy(core.String),
    expandCollapse: dart.legacy(button_decorator.ButtonDirective),
    tabbable: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_expansionpanel.MaterialExpansionPanel, L1);
  dart.setFieldSignature(material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getFields(material_expansionpanel.MaterialExpansionPanel.__proto__),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_defaultExpandIcon]: dart.finalFieldType(dart.legacy(core.String)),
    shouldExpandOnLeft: dart.finalFieldType(dart.legacy(core.bool)),
    forceContentWhenClosed: dart.finalFieldType(dart.legacy(core.bool)),
    [_pendingExpandedPanelHeightReads]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(async.Completer$(dart.legacy(core.String)))))),
    initialized: dart.fieldType(dart.legacy(core.bool)),
    autoFocusChild: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_focusOnOpenChild]: dart.fieldType(dart.legacy(focus_interface.Focusable)),
    [_mainPanel]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_headerPanel]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_mainContent]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_headerContent]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_actionContent]: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_contentWrapper]: dart.fieldType(dart.legacy(html.HtmlElement)),
    closeOnSave: dart.fieldType(dart.legacy(core.bool)),
    [_isExpanded]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool)))),
    [_isExpandedChangeByUserAction]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_contentVisible]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_anotherExpanded]: dart.fieldType(dart.legacy(core.bool)),
    [_disabled]: dart.fieldType(dart.legacy(core.bool)),
    saveDisabled: dart.fieldType(dart.legacy(core.bool)),
    [_activeSaveCancelAction]: dart.fieldType(dart.legacy(core.bool)),
    hideExpandedHeader: dart.fieldType(dart.legacy(core.bool)),
    disableHeaderExpansion: dart.fieldType(dart.legacy(core.bool)),
    name: dart.fieldType(dart.legacy(core.String)),
    secondaryText: dart.fieldType(dart.legacy(core.String)),
    [_groupAriaLabel]: dart.fieldType(dart.legacy(core.String)),
    headerAriaLevel: dart.fieldType(dart.legacy(core.int)),
    [_expandIcon]: dart.fieldType(dart.legacy(core.String)),
    alwaysShowExpandIcon: dart.fieldType(dart.legacy(core.bool)),
    alwaysHideExpandIcon: dart.fieldType(dart.legacy(core.bool)),
    showSaveCancel: dart.fieldType(dart.legacy(core.bool)),
    cancelDisplayed: dart.fieldType(dart.legacy(core.bool)),
    enterAccepts: dart.fieldType(dart.legacy(core.bool)),
    saveText: dart.fieldType(dart.legacy(core.String)),
    cancelText: dart.fieldType(dart.legacy(core.String)),
    [_openController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    [_closeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    [_saveController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    [_cancelController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    [_expandCollapseButton]: dart.fieldType(dart.legacy(button_decorator.ButtonDirective)),
    [_focusMoveCtrl]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(focus.FocusMoveEvent))))
  }));
  dart.defineLazy(material_expansionpanel.MaterialExpansionPanel, {
    /*material_expansionpanel.MaterialExpansionPanel._closePanelMsg*/get _closePanelMsg() {
      return intl.Intl.message("Hide panel", {name: "_closePanelMsg", desc: "ARIA label for a button that hides the panel."});
    },
    /*material_expansionpanel.MaterialExpansionPanel._openPanelMsg*/get _openPanelMsg() {
      return intl.Intl.message("Show panel", {name: "_openPanelMsg", desc: "ARIA label for a button that shows the panel."});
    },
    /*material_expansionpanel.MaterialExpansionPanel.expandAriaMsg*/get expandAriaMsg() {
      return intl.Intl.message("Expand", {desc: "Aria label used for the button used to expand the panel."});
    },
    /*material_expansionpanel.MaterialExpansionPanel._msgSave*/get _msgSave() {
      return intl.Intl.message("Save", {name: "_msgSave", desc: "Text on save button.", meaning: "Text on save button."});
    },
    /*material_expansionpanel.MaterialExpansionPanel._msgCancel*/get _msgCancel() {
      return intl.Intl.message("Cancel", {name: "_msgCancel", desc: "Text on cancel button.", meaning: "Text on cancel button."});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.dart": material_expansionpanel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.unsound.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel: material_expansionpanel
  };
}));

//# sourceMappingURL=material_expansionpanel.unsound.ddc.js.map
