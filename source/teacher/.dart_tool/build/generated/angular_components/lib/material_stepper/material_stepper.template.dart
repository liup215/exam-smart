// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_stepper.dart';
export 'material_stepper.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/laminate/portal/portal.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_stepper/common.template.dart' as _ref4;
import 'package:angular_components/material_stepper/material_step.template.dart' as _ref5;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref6;
import 'package:angular_components/model/action/async_action.template.dart' as _ref7;
import 'package:angular_components/utils/angular/scroll_host/angular_2.template.dart' as _ref8;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref9;
import 'package:angular_components/material_stepper/material_stepper.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_stepper.dart' as import2;
import '../utils/angular/scroll_host/angular_2.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/views/view.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import '../src/utils/angular/scroll_host/scroll_host_interface.dart' as import14;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import17;
import 'package:angular/src/runtime/text_binding.dart' as import18;
import '../button_decorator/button_decorator.template.dart' as import19;
import 'package:angular/src/core/linker/views/render_view.dart' as import20;
import '../button_decorator/button_decorator.dart' as import21;
import 'material_step.dart' as import22;
import 'package:angular/src/runtime/interpolate.dart' as import23;
import '../material_icon/material_icon.template.dart' as import24;
import '../material_icon/material_icon.dart' as import25;
import '../laminate/portal/portal.dart' as import26;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import27;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import28;
import '../interfaces/has_disabled.dart' as import29;
import 'package:angular/src/core/linker/views/host_view.dart' as import30;

final List<dynamic> styles$MaterialStepperComponent = [import0.styles];

class ViewMaterialStepperComponent0 extends import1.ComponentView<import2.MaterialStepperComponent> {
  import3.StickyElementDirective _StickyElementDirective_1_5;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import7.DivElement _el_8;
  import7.DivElement _el_1;
  static import8.ComponentStyles _componentStyles;
  ViewMaterialStepperComponent0(import9.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('material-stepper');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialStepperComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_stepper/material_stepper.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import12.appendText(parentRenderNode, '\n');
    final doc = import7.document;
    this._el_1 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_1, 'stepper stepper-body mixin');
    this.addShimC(this._el_1);
    this._StickyElementDirective_1_5 = (import11.isDevMode
        ? import13.debugInjectorWrap(import3.StickyElementDirective, () {
            return import3.StickyElementDirective(this.parentView.injectorGet(import14.ScrollHost, this.parentIndex), this._el_1);
          })
        : import3.StickyElementDirective(this.parentView.injectorGet(import14.ScrollHost, this.parentIndex), this._el_1));
    final _text_2 = import12.appendText(this._el_1, '\n  ');
    final _anchor_3 = import12.appendAnchor(this._el_1);
    this._appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_MaterialStepperComponent1);
    this._NgFor_3_9 = import5.NgFor(this._appEl_3, _TemplateRef_3_8);
    final _text_4 = import12.appendText(this._el_1, '\n');
    final _text_5 = import12.appendText(parentRenderNode, '\n');
    final _anchor_6 = import12.appendAnchor(parentRenderNode);
    this._appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialStepperComponent12);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _text_7 = import12.appendText(parentRenderNode, '\n');
    this._el_8 = import12.appendDiv(doc, parentRenderNode);
    this.addShimC(this._el_8);
    final _text_9 = import12.appendText(parentRenderNode, '\n');
    final _anchor_10 = import12.appendAnchor(parentRenderNode);
    this._appEl_10 = ViewContainer(10, null, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(this._appEl_10, viewFactory_MaterialStepperComponent19);
    this._NgIf_10_9 = NgIf(this._appEl_10, _TemplateRef_10_8);
    final _text_11 = import12.appendText(parentRenderNode, '\n');
    _ctx.stepperNativeElement = this._el_1;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final local_afterStepperElement = this._el_8;
    final currVal_2 = local_afterStepperElement;
    if (import11.checkBinding(this._expr_2, currVal_2, 'afterStepperElement', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._StickyElementDirective_1_5.endElement = currVal_2;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.stickyHeader;
    if (import11.checkBinding(this._expr_3, currVal_3, 'stickyHeader', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._StickyElementDirective_1_5.sticky = currVal_3;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.steps;
    if (import11.checkBinding(this._expr_4, currVal_4, 'steps', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._NgFor_3_9.ngForOf = currVal_4;
      this._expr_4 = currVal_4;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgFor_3_9.ngDoCheck();
    }
    this._NgIf_6_9.ngIf = (((!_ctx.shouldInlineContent) && (!_ctx.stepperDone)) && (_ctx.steps.length > 0));
    this._NgIf_10_9.ngIf = _ctx.announceCurrentStep;
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_10.detectChangesInNestedViews();
    final currVal_0 = _ctx.orientation;
    if (import11.checkBinding(this._expr_0, currVal_0, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_1, 'orientation', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import11.checkBinding(this._expr_1, currVal_1, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_1, 'size', currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((!import11.debugThrowIfChanged)) {
      if (firstCheck) {
        this._StickyElementDirective_1_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_10.destroyNestedViews();
    this._StickyElementDirective_1_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import8.ComponentStyles.scoped(styles$MaterialStepperComponent, _debugComponentUrl));
      if (import11.isDevMode) {
        import8.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialStepperComponentNgFactory = ComponentFactory<import2.MaterialStepperComponent>('material-stepper', viewFactory_MaterialStepperComponentHost0);
ComponentFactory<import2.MaterialStepperComponent> get MaterialStepperComponentNgFactory {
  return _MaterialStepperComponentNgFactory;
}

ComponentFactory<import2.MaterialStepperComponent> createMaterialStepperComponentFactory() {
  return ComponentFactory('material-stepper', viewFactory_MaterialStepperComponentHost0);
}

class _ViewMaterialStepperComponent1 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  final import18.TextBinding _textBinding_5 = import18.TextBinding();
  final import18.TextBinding _textBinding_15 = import18.TextBinding();
  final import18.TextBinding _textBinding_20 = import18.TextBinding();
  import19.ButtonDirectiveNgCd _ButtonDirective_0_5;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_22;
  NgIf _NgIf_22_9;
  ViewContainer _appEl_26;
  NgIf _NgIf_26_9;
  ViewContainer _appEl_28;
  NgIf _NgIf_28_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_18;
  import7.DivElement _el_0;
  import7.Element _el_3;
  import7.DivElement _el_11;
  import7.Element _el_13;
  import7.DivElement _el_18;
  _ViewMaterialStepperComponent1(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    this._el_0 = doc.createElement('div');
    import12.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'stepper-step');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import19.ButtonDirectiveNgCd(import21.ButtonDirective(this._el_0, null));
    final _text_1 = import12.appendText(this._el_0, '\n    ');
    final _text_2 = import12.appendText(this._el_0, '\n        ');
    this._el_3 = import12.appendSpan(doc, this._el_0);
    this.updateChildClass(this._el_3, 'stepper-step-index');
    this.addShimE(this._el_3);
    final _text_4 = import12.appendText(this._el_3, '\n          ');
    this._el_3.append(this._textBinding_5.element);
    final _text_6 = import12.appendText(this._el_3, '\n          ');
    final _anchor_7 = import12.appendAnchor(this._el_3);
    this._appEl_7 = ViewContainer(7, 3, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_MaterialStepperComponent2);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _text_8 = import12.appendText(this._el_3, '\n        ');
    final _text_9 = import12.appendText(this._el_0, '\n    ');
    final _text_10 = import12.appendText(this._el_0, '\n    ');
    this._el_11 = import12.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_11, 'stepper-step-header');
    this.addShimC(this._el_11);
    final _text_12 = import12.appendText(this._el_11, '\n      ');
    this._el_13 = import12.appendSpan(doc, this._el_11);
    this.updateChildClass(this._el_13, 'stepper-step-name');
    this.addShimE(this._el_13);
    final _text_14 = import12.appendText(this._el_13, '\n        ');
    this._el_13.append(this._textBinding_15.element);
    final _text_16 = import12.appendText(this._el_13, '\n      ');
    final _text_17 = import12.appendText(this._el_11, '\n      ');
    this._el_18 = import12.appendDiv(doc, this._el_11);
    this.updateChildClass(this._el_18, 'stepper-step-optional');
    this.addShimC(this._el_18);
    final _text_19 = import12.appendText(this._el_18, '\n        ');
    this._el_18.append(this._textBinding_20.element);
    final _text_21 = import12.appendText(this._el_18, '\n          ');
    final _anchor_22 = import12.appendAnchor(this._el_18);
    this._appEl_22 = ViewContainer(22, 18, this, _anchor_22);
    TemplateRef _TemplateRef_22_8 = TemplateRef(this._appEl_22, viewFactory_MaterialStepperComponent3);
    this._NgIf_22_9 = NgIf(this._appEl_22, _TemplateRef_22_8);
    final _text_23 = import12.appendText(this._el_18, '\n      ');
    final _text_24 = import12.appendText(this._el_11, '\n    ');
    final _text_25 = import12.appendText(this._el_0, '\n    ');
    final _anchor_26 = import12.appendAnchor(this._el_0);
    this._appEl_26 = ViewContainer(26, 0, this, _anchor_26);
    TemplateRef _TemplateRef_26_8 = TemplateRef(this._appEl_26, viewFactory_MaterialStepperComponent4);
    this._NgIf_26_9 = NgIf(this._appEl_26, _TemplateRef_26_8);
    final _text_27 = import12.appendText(this._el_0, '\n    ');
    final _anchor_28 = import12.appendAnchor(this._el_0);
    this._appEl_28 = ViewContainer(28, 0, this, _anchor_28);
    TemplateRef _TemplateRef_28_8 = TemplateRef(this._appEl_28, viewFactory_MaterialStepperComponent5);
    this._NgIf_28_9 = NgIf(this._appEl_28, _TemplateRef_28_8);
    final _text_29 = import12.appendText(this._el_0, '\n  ');
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.ButtonDirective) && (nodeIndex <= 29))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_step = import11.unsafeCast<import22.StepDirective>(this.locals['\$implicit']);
    final currVal_6 = local_step.isNotSelectable;
    if (import11.checkBinding(this._expr_6, currVal_6, 'step.isNotSelectable', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._ButtonDirective_0_5.instance.disabled = currVal_6;
      this._expr_6 = currVal_6;
    }
    this._NgIf_7_9.ngIf = local_step.complete;
    this._NgIf_22_9.ngIf = local_step.isSelectable;
    this._NgIf_26_9.ngIf = (!local_step.isLast);
    this._NgIf_28_9.ngIf = (_ctx.shouldInlineContent && (!_ctx.stepperDone));
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_22.detectChangesInNestedViews();
    this._appEl_26.detectChangesInNestedViews();
    this._appEl_28.detectChangesInNestedViews();
    final currVal_0 = _ctx.stepAriaLabel(local_step);
    if (import11.checkBinding(this._expr_0, currVal_0, 'stepAriaLabel(step)', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.orientation;
    if (import11.checkBinding(this._expr_1, currVal_1, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'orientation', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.size;
    if (import11.checkBinding(this._expr_2, currVal_2, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'size', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = local_step.isSelectable;
    if (import11.checkBinding(this._expr_3, currVal_3, 'step.isSelectable', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateClassBinding(this._el_0, 'can-select', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = local_step.active;
    if (import11.checkBinding(this._expr_4, currVal_4, '{{step.active}}', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.setAttribute(this._el_0, 'active', import23.interpolate0(currVal_4));
      this._expr_4 = currVal_4;
    }
    final currVal_5 = local_step.isSelectable;
    if (import11.checkBinding(this._expr_5, currVal_5, '{{step.isSelectable}}', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.setAttribute(this._el_0, 'selectable', import23.interpolate0(currVal_5));
      this._expr_5 = currVal_5;
    }
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
    final currVal_7 = _ctx.orientation;
    if (import11.checkBinding(this._expr_7, currVal_7, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_3, 'orientation', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = local_step.active;
    if (import11.checkBinding(this._expr_8, currVal_8, 'step.active', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_3, 'active', currVal_8?.toString());
      this._expr_8 = currVal_8;
    }
    final currVal_9 = local_step.complete;
    if (import11.checkBinding(this._expr_9, currVal_9, 'step.complete', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_3, 'complete', currVal_9?.toString());
      this._expr_9 = currVal_9;
    }
    final currVal_10 = local_step.partiallyComplete;
    if (import11.checkBinding(this._expr_10, currVal_10, 'step.partiallyComplete', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateClassBinding(this._el_3, 'partially-complete', currVal_10);
      this._expr_10 = currVal_10;
    }
    final currVal_11 = local_step.isSelectable;
    if (import11.checkBinding(this._expr_11, currVal_11, 'step.isSelectable', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateClassBinding(this._el_3, 'can-select', currVal_11);
      this._expr_11 = currVal_11;
    }
    this._textBinding_5.updateText(import23.interpolate0((local_step.complete ? '' : (local_step.index + 1))));
    final currVal_12 = _ctx.orientation;
    if (import11.checkBinding(this._expr_12, currVal_12, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_11, 'orientation', currVal_12);
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.size;
    if (import11.checkBinding(this._expr_13, currVal_13, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_11, 'size', currVal_13);
      this._expr_13 = currVal_13;
    }
    final currVal_14 = local_step.active;
    if (import11.checkBinding(this._expr_14, currVal_14, 'step.active', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_13, 'active', currVal_14?.toString());
      this._expr_14 = currVal_14;
    }
    final currVal_15 = local_step.complete;
    if (import11.checkBinding(this._expr_15, currVal_15, 'step.complete', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_13, 'complete', currVal_15?.toString());
      this._expr_15 = currVal_15;
    }
    this._textBinding_15.updateText(import23.interpolateString0(local_step.name));
    final currVal_16 = _ctx.orientation;
    if (import11.checkBinding(this._expr_16, currVal_16, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_18, 'orientation', currVal_16);
      this._expr_16 = currVal_16;
    }
    final currVal_17 = local_step.isOptional;
    if (import11.checkBinding(this._expr_17, currVal_17, 'step.isOptional', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_18, 'optional', currVal_17?.toString());
      this._expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.size;
    if (import11.checkBinding(this._expr_18, currVal_18, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_18, 'size', currVal_18);
      this._expr_18 = currVal_18;
    }
    this._textBinding_20.updateText(import23.interpolate0((local_step.isOptional ? import2.MaterialStepperComponent.optionalMsg : '')));
  }

  @override
  void destroyInternal() {
    this._appEl_7.destroyNestedViews();
    this._appEl_22.destroyNestedViews();
    this._appEl_26.destroyNestedViews();
    this._appEl_28.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final local_step = import11.unsafeCast<import22.StepDirective>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.jumpStep(local_step.index);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent1(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent1(parentView, parentIndex);
}

class _ViewMaterialStepperComponent2 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  import24.ViewMaterialIconComponent0 _compView_2;
  import25.MaterialIconComponent _MaterialIconComponent_2_5;
  _ViewMaterialStepperComponent2(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n            ');
    this._compView_2 = import24.ViewMaterialIconComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    import12.setAttribute(_el_2, 'icon', 'check');
    this.addShimC(_el_2);
    this._MaterialIconComponent_2_5 = import25.MaterialIconComponent(_el_2);
    this._compView_2.create(this._MaterialIconComponent_2_5);
    final _text_3 = import12.appendText(_el_0, '\n          ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_2_5.icon = 'check';
      changed = true;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent2(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent2(parentView, parentIndex);
}

class _ViewMaterialStepperComponent3 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  import24.ViewMaterialIconComponent0 _compView_2;
  import25.MaterialIconComponent _MaterialIconComponent_2_5;
  var _expr_0;
  var _expr_1;
  import7.Element _el_2;
  _ViewMaterialStepperComponent3(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n            ');
    this._compView_2 = import24.ViewMaterialIconComponent0(this, 2);
    this._el_2 = this._compView_2.rootElement;
    _el_0.append(this._el_2);
    this.updateChildClassNonHtml(this._el_2, 'edit-icon');
    import12.setAttribute(this._el_2, 'icon', 'mode_edit');
    this.addShimC(this._el_2);
    this._MaterialIconComponent_2_5 = import25.MaterialIconComponent(this._el_2);
    this._compView_2.create(this._MaterialIconComponent_2_5);
    final _text_4 = import12.appendText(_el_0, '\n          ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_2_5.icon = 'mode_edit';
      changed = true;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    final currVal_0 = _ctx.orientation;
    if (import11.checkBinding(this._expr_0, currVal_0, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_2, 'orientation', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import11.checkBinding(this._expr_1, currVal_1, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_2, 'size', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent3(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent3(parentView, parentIndex);
}

class _ViewMaterialStepperComponent4 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent4(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'step-line');
    this.addShimC(this._el_0);
    final _text_1 = import12.appendText(this._el_0, '\n    ');
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.orientation;
    if (import11.checkBinding(this._expr_0, currVal_0, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'orientation', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import11.checkBinding(this._expr_1, currVal_1, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'size', currVal_1);
      this._expr_1 = currVal_1;
    }
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent4(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent4(parentView, parentIndex);
}

class _ViewMaterialStepperComponent5 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent5(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import7.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'stepper-content mixin');
    this.addShimC(this._el_0);
    final _text_1 = import12.appendText(this._el_0, '\n      ');
    final _anchor_2 = import12.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialStepperComponent6);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import12.appendText(this._el_0, '\n      ');
    final _anchor_4 = import12.appendAnchor(this._el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialStepperComponent9);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import12.appendText(this._el_0, '\n      ');
    final _anchor_6 = import12.appendAnchor(this._el_0);
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialStepperComponent11);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _text_7 = import12.appendText(this._el_0, '\n    ');
    this._el_0.addEventListener('keypress', this.eventHandler1(_ctx.stopPropagationOfEnterAndSpace));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_step = import11.unsafeCast<import22.StepDirective>(import11.unsafeCast<_ViewMaterialStepperComponent1>(this.parentView).locals['\$implicit']);
    this._NgIf_2_9.ngIf = (local_step.active || _ctx.keepInactiveStepsInDom);
    this._NgIf_4_9.ngIf = ((!local_step.active) && (local_step.summaryDirective != null));
    this._NgIf_6_9.ngIf = local_step.shouldShowSummary;
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.orientation;
    if (import11.checkBinding(this._expr_0, currVal_0, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'orientation', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import11.checkBinding(this._expr_1, currVal_1, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'size', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent5(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent5(parentView, parentIndex);
}

class _ViewMaterialStepperComponent6 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_3;
  import26.PortalHostDirective _PortalHostDirective_3_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_1;
  _ViewMaterialStepperComponent6(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _text_0 = import12.createText('\n        ');
    final doc = import7.document;
    this._el_1 = doc.createElement('div');
    this.updateChildClass(this._el_1, 'provided-content mixin');
    this.addShimC(this._el_1);
    final _text_2 = import12.appendText(this._el_1, '\n          ');
    final _anchor_3 = import12.appendAnchor(this._el_1);
    this._appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_MaterialStepperComponent7);
    this._PortalHostDirective_3_9 = import26.PortalHostDirective(this._appEl_3, this._appEl_3);
    final _text_4 = import12.appendText(this._el_1, '\n          ');
    final _anchor_5 = import12.appendAnchor(this._el_1);
    this._appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_MaterialStepperComponent8);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _text_6 = import12.appendText(this._el_1, '\n        ');
    final _text_7 = import12.createText('\n      ');
    this.initRootNodesAndSubscriptions([_text_0, this._el_1, _text_7], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_step = import11.unsafeCast<import22.StepDirective>(import11.unsafeCast<_ViewMaterialStepperComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_1 = _ctx.steps[local_step.index];
    if (import11.checkBinding(this._expr_1, currVal_1, 'steps[step.index]', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._PortalHostDirective_3_9.portal = currVal_1;
      this._expr_1 = currVal_1;
    }
    this._NgIf_5_9.ngIf = (!_ctx.activeStep.hideButtons);
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    final bool currVal_0 = ((!local_step.active) && _ctx.keepInactiveStepsInDom);
    if (import11.checkBinding(this._expr_0, currVal_0, '!step.active && keepInactiveStepsInDom', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateClassBinding(this._el_1, 'hidden', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent6(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent6(parentView, parentIndex);
}

class _ViewMaterialStepperComponent7 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent7(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNodesAndSubscriptions(const [], null);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent7(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent7(parentView, parentIndex);
}

class _ViewMaterialStepperComponent8 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  import27.ViewMaterialYesNoButtonsComponent0 _compView_2;
  import28.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  _ViewMaterialStepperComponent8(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-container');
    this.addShimE(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n            ');
    this._compView_2 = import27.ViewMaterialYesNoButtonsComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    this.updateChildClassNonHtml(_el_2, 'stepper-yes-no-buttons');
    import12.setAttribute(_el_2, 'raised', '');
    import12.setAttribute(_el_2, 'yesHighlighted', '');
    this.addShimC(_el_2);
    this._MaterialYesNoButtonsComponent_2_5 = import28.MaterialYesNoButtonsComponent();
    this._compView_2.create(this._MaterialYesNoButtonsComponent_2_5);
    final _text_4 = import12.appendText(_el_0, '\n          ');
    final subscription_0 = this._MaterialYesNoButtonsComponent_2_5.yes.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._MaterialYesNoButtonsComponent_2_5.no.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import29.HasDisabled) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return this._MaterialYesNoButtonsComponent_2_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialYesNoButtonsComponent_2_5.yesHighlighted = true;
      changed = true;
      this._MaterialYesNoButtonsComponent_2_5.raised = true;
      changed = true;
    }
    final currVal_0 = _ctx.yesText;
    if (import11.checkBinding(this._expr_0, currVal_0, 'yesText', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.yesText = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.noText;
    if (import11.checkBinding(this._expr_1, currVal_1, 'noText', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.noText = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_4 = _ctx.activeStep.busy;
    if (import11.checkBinding(this._expr_4, currVal_4, 'activeStep.busy', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.disabled = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final bool currVal_5 = (!_ctx.activeStep.canContinue);
    if (import11.checkBinding(this._expr_5, currVal_5, '!activeStep.canContinue', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.yesDisabled = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final bool currVal_6 = ((!_ctx.activeStep.cancelHidden) && (_ctx.activeStep.index != 0));
    if (import11.checkBinding(this._expr_6, currVal_6, '!activeStep.cancelHidden && activeStep.index != 0', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.noDisplayed = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.stepForward($event, _ctx.activeStep);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.stepBackward($event, _ctx.activeStep);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent8(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent8(parentView, parentIndex);
}

class _ViewMaterialStepperComponent9 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  import26.PortalHostDirective _PortalHostDirective_2_9;
  var _expr_0;
  _ViewMaterialStepperComponent9(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'step-summary-directive');
    this.addShimC(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n        ');
    final _anchor_2 = import12.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialStepperComponent10);
    this._PortalHostDirective_2_9 = import26.PortalHostDirective(this._appEl_2, this._appEl_2);
    final _text_3 = import12.appendText(_el_0, '\n      ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_step = import11.unsafeCast<import22.StepDirective>(import11.unsafeCast<_ViewMaterialStepperComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_step.summaryDirective;
    if (import11.checkBinding(this._expr_0, currVal_0, 'step.summaryDirective', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._PortalHostDirective_2_9.portal = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent9(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent9(parentView, parentIndex);
}

class _ViewMaterialStepperComponent10 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent10(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNodesAndSubscriptions(const [], null);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent10(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent10(parentView, parentIndex);
}

class _ViewMaterialStepperComponent11 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMaterialStepperComponent11(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'stepper-step-summary');
    this.addShimC(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n        ');
    _el_0.append(this._textBinding_2.element);
    final _text_3 = import12.appendText(_el_0, '\n      ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_step = import11.unsafeCast<import22.StepDirective>(import11.unsafeCast<_ViewMaterialStepperComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_2.updateText(import23.interpolateString0(local_step.completeSummary));
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent11(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent11(parentView, parentIndex);
}

class _ViewMaterialStepperComponent12 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent12(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'stepper-content mixin');
    this.addShimC(this._el_0);
    final _text_1 = import12.appendText(this._el_0, '\n  ');
    final _anchor_2 = import12.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialStepperComponent13);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import12.appendText(this._el_0, '\n  ');
    final _anchor_4 = import12.appendAnchor(this._el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialStepperComponent15);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import12.appendText(this._el_0, '\n    ');
    final _anchor_6 = import12.appendAnchor(this._el_0);
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialStepperComponent18);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _text_7 = import12.appendText(this._el_0, '\n');
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_2_9.ngIf = (!_ctx.keepInactiveStepsInDom);
    this._NgIf_4_9.ngIf = _ctx.keepInactiveStepsInDom;
    this._NgIf_6_9.ngIf = (!_ctx.activeStep.hideButtons);
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.orientation;
    if (import11.checkBinding(this._expr_0, currVal_0, 'orientation', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'orientation', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import11.checkBinding(this._expr_1, currVal_1, 'size', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateAttribute(this._el_0, 'size', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent12(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent12(parentView, parentIndex);
}

class _ViewMaterialStepperComponent13 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  import26.PortalHostDirective _PortalHostDirective_2_9;
  var _expr_0;
  _ViewMaterialStepperComponent13(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'provided-content mixin');
    this.addShimC(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n    ');
    final _anchor_2 = import12.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialStepperComponent14);
    this._PortalHostDirective_2_9 = import26.PortalHostDirective(this._appEl_2, this._appEl_2);
    final _text_3 = import12.appendText(_el_0, '\n  ');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.activeStep;
    if (import11.checkBinding(this._expr_0, currVal_0, 'activeStep', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._PortalHostDirective_2_9.portal = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent13(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent13(parentView, parentIndex);
}

class _ViewMaterialStepperComponent14 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent14(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNodesAndSubscriptions(const [], null);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent14(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent14(parentView, parentIndex);
}

class _ViewMaterialStepperComponent15 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_1;
  import5.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialStepperComponent15(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _text_0 = import12.createText('\n    ');
    final _anchor_1 = import12.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialStepperComponent16);
    this._NgFor_1_9 = import5.NgFor(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import12.createText('\n  ');
    this.initRootNodesAndSubscriptions([_text_0, this._appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.steps;
    if (import11.checkBinding(this._expr_0, currVal_0, 'steps', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent15(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent15(parentView, parentIndex);
}

class _ViewMaterialStepperComponent16 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  import26.PortalHostDirective _PortalHostDirective_2_9;
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent16(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'provided-content mixin');
    this.addShimC(this._el_0);
    final _text_1 = import12.appendText(this._el_0, '\n      ');
    final _anchor_2 = import12.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialStepperComponent17);
    this._PortalHostDirective_2_9 = import26.PortalHostDirective(this._appEl_2, this._appEl_2);
    final _text_3 = import12.appendText(this._el_0, '\n    ');
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_step = import11.unsafeCast<import22.StepDirective>(this.locals['\$implicit']);
    final currVal_1 = local_step;
    if (import11.checkBinding(this._expr_1, currVal_1, 'step', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._PortalHostDirective_2_9.portal = currVal_1;
      this._expr_1 = currVal_1;
    }
    this._appEl_2.detectChangesInNestedViews();
    final currVal_0 = (local_step != _ctx.activeStep);
    if (import11.checkBinding(this._expr_0, currVal_0, 'step != activeStep', 'package:angular_components/material_stepper/material_stepper.html')) {
      import12.updateClassBinding(this._el_0, 'hidden', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent16(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent16(parentView, parentIndex);
}

class _ViewMaterialStepperComponent17 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent17(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNodesAndSubscriptions(const [], null);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent17(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent17(parentView, parentIndex);
}

class _ViewMaterialStepperComponent18 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  import27.ViewMaterialYesNoButtonsComponent0 _compView_2;
  import28.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  _ViewMaterialStepperComponent18(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-container');
    this.addShimE(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n      ');
    this._compView_2 = import27.ViewMaterialYesNoButtonsComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    import12.setAttribute(_el_2, 'raised', '');
    import12.setAttribute(_el_2, 'yesHighlighted', '');
    this.addShimC(_el_2);
    this._MaterialYesNoButtonsComponent_2_5 = import28.MaterialYesNoButtonsComponent();
    this._compView_2.create(this._MaterialYesNoButtonsComponent_2_5);
    final _text_4 = import12.appendText(_el_0, '\n    ');
    final subscription_0 = this._MaterialYesNoButtonsComponent_2_5.yes.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._MaterialYesNoButtonsComponent_2_5.no.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import29.HasDisabled) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return this._MaterialYesNoButtonsComponent_2_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialYesNoButtonsComponent_2_5.yesHighlighted = true;
      changed = true;
      this._MaterialYesNoButtonsComponent_2_5.raised = true;
      changed = true;
    }
    final currVal_0 = _ctx.yesText;
    if (import11.checkBinding(this._expr_0, currVal_0, 'yesText', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.yesText = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.noText;
    if (import11.checkBinding(this._expr_1, currVal_1, 'noText', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.noText = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_4 = _ctx.activeStep.busy;
    if (import11.checkBinding(this._expr_4, currVal_4, 'activeStep.busy', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.disabled = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final bool currVal_5 = (!_ctx.activeStep.canContinue);
    if (import11.checkBinding(this._expr_5, currVal_5, '!activeStep.canContinue', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.yesDisabled = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final bool currVal_6 = ((!_ctx.activeStep.cancelHidden) && (_ctx.activeStep.index != 0));
    if (import11.checkBinding(this._expr_6, currVal_6, '!activeStep.cancelHidden && activeStep.index != 0', 'package:angular_components/material_stepper/material_stepper.html')) {
      this._MaterialYesNoButtonsComponent_2_5.noDisplayed = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.stepForward($event, _ctx.activeStep);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.stepBackward($event, _ctx.activeStep);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent18(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent18(parentView, parentIndex);
}

class _ViewMaterialStepperComponent19 extends import17.EmbeddedView<import2.MaterialStepperComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMaterialStepperComponent19(import20.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    import12.setAttribute(_el_0, 'aria-live', 'assertive');
    this.updateChildClass(_el_0, 'visible-to-screen-reader-only');
    this.addShimC(_el_0);
    final _text_1 = import12.appendText(_el_0, '\n  ');
    _el_0.append(this._textBinding_2.element);
    final _text_3 = import12.appendText(_el_0, '\n');
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_2.updateText(import23.interpolateString0(_ctx.stepAriaAnnounce));
  }
}

import17.EmbeddedView<void> viewFactory_MaterialStepperComponent19(import20.RenderView parentView, int parentIndex) {
  return _ViewMaterialStepperComponent19(parentView, parentIndex);
}

final List<dynamic> styles$MaterialStepperComponentHost = const [];

class _ViewMaterialStepperComponentHost0 extends import30.HostView<import2.MaterialStepperComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialStepperComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialStepperComponent();
    this.component.stepsQuery = [];
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialStepperComponent) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }
}

import30.HostView<import2.MaterialStepperComponent> viewFactory_MaterialStepperComponentHost0() {
  return _ViewMaterialStepperComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialStepperComponent, createMaterialStepperComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
}
