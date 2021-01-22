// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'scoreboard.dart';
export 'scoreboard.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref4;
import 'package:angular_components/utils/color/material_chart_colors.template.dart' as _ref5;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref6;
import 'scorecard.template.dart' as _ref7;
import 'scorecard_bar.template.dart' as _ref8;
import 'package:angular_components/scorecard/scoreboard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'scoreboard.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'scorecard_bar.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import13;
import '../utils/browser/dom_service/dom_service.dart' as import14;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import17;
import '../material_button/material_button.template.dart' as import18;
import '../material_button/material_button.dart' as import19;
import '../material_icon/material_icon.template.dart' as import20;
import '../material_icon/material_icon.dart' as import21;
import 'package:angular/src/core/linker/views/render_view.dart' as import22;
import '../theme/dark_theme.dart' as import23;
import '../button_decorator/button_decorator.dart' as import24;
import '../interfaces/has_disabled.dart' as import25;
import 'package:angular/src/core/linker/views/host_view.dart' as import26;

final List<dynamic> styles$ScoreboardComponent = [import0.styles];

class ViewScoreboardComponent0 extends import1.ComponentView<import2.ScoreboardComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import5.ScorecardBarDirective _ScorecardBarDirective_2_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import6.DivElement _el_0;
  static import7.ComponentStyles _componentStyles;
  ViewScoreboardComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('acx-scoreboard');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/scorecard/scoreboard.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    this._el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'acx-scoreboard');
    this.addShimC(this._el_0);
    final _anchor_1 = import11.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_ScoreboardComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _el_2 = import11.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_2, 'scorecard-bar');
    import11.setAttribute(_el_2, 'scorecardBar', '');
    this.addShimC(_el_2);
    this._ScorecardBarDirective_2_5 = (import10.isDevMode
        ? import13.debugInjectorWrap(import5.ScorecardBarDirective, () {
            return import5.ScorecardBarDirective(this.parentView.injectorGet(import14.DomService, this.parentIndex), _el_2, this.parentView.injectorGetOptional(const import15.OpaqueToken<dynamic>('isRtl'), this.parentIndex));
          })
        : import5.ScorecardBarDirective(this.parentView.injectorGet(import14.DomService, this.parentIndex), _el_2, this.parentView.injectorGetOptional(const import15.OpaqueToken<dynamic>('isRtl'), this.parentIndex)));
    this.project(_el_2, 0);
    final _anchor_3 = import11.appendAnchor(this._el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_ScoreboardComponent2);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    _ctx.scorecardBar = this._ScorecardBarDirective_2_5;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    this._NgIf_1_9.ngIf = _ctx.isScrollable;
    final currVal_2 = _ctx.isVertical;
    if (import10.checkBinding(this._expr_2, currVal_2, 'isVertical', 'package:angular_components/scorecard/scoreboard.html')) {
      this._ScorecardBarDirective_2_5.isVertical = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this._ScorecardBarDirective_2_5.ngOnInit();
    }
    this._NgIf_3_9.ngIf = _ctx.isScrollable;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    final bool currVal_0 = (!_ctx.isVertical);
    if (import10.checkBinding(this._expr_0, currVal_0, '!isVertical', 'package:angular_components/scorecard/scoreboard.html')) {
      import11.updateClassBinding(this._el_0, 'acx-scoreboard-horizontal', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isVertical;
    if (import10.checkBinding(this._expr_1, currVal_1, 'isVertical', 'package:angular_components/scorecard/scoreboard.html')) {
      import11.updateClassBinding(this._el_0, 'acx-scoreboard-vertical', currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((!import10.debugThrowIfChanged)) {
      this._ScorecardBarDirective_2_5.ngAfterViewChecked();
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._ScorecardBarDirective_2_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$ScoreboardComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ScoreboardComponentNgFactory = ComponentFactory<import2.ScoreboardComponent>('acx-scoreboard', viewFactory_ScoreboardComponentHost0);
ComponentFactory<import2.ScoreboardComponent> get ScoreboardComponentNgFactory {
  return _ScoreboardComponentNgFactory;
}

ComponentFactory<import2.ScoreboardComponent> createScoreboardComponentFactory() {
  return ComponentFactory('acx-scoreboard', viewFactory_ScoreboardComponentHost0);
}

class _ViewScoreboardComponent1 extends import17.EmbeddedView<import2.ScoreboardComponent> {
  import18.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import19.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import20.ViewMaterialIconComponent0 _compView_1;
  import21.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_0;
  var _expr_2;
  import6.Element _el_0;
  import6.Element _el_1;
  _ViewScoreboardComponent1(import22.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import18.ViewMaterialButtonComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'scroll-button scroll-back-button');
    this.addShimC(this._el_0);
    this._AcxDarkTheme_0_5 = (import10.isDevMode
        ? import13.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import15.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex));
          })
        : import23.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import15.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex)));
    this._MaterialButtonComponent_0_6 = import19.MaterialButtonComponent(this._el_0, this._AcxDarkTheme_0_5, this._compView_0, null);
    this._compView_1 = import20.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this.addShimC(this._el_1);
    this._MaterialIconComponent_1_5 = import21.MaterialIconComponent(this._el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    this._compView_0.createAndProject(this._MaterialButtonComponent_0_6, [
      [this._el_1]
    ]);
    final subscription_0 = this._MaterialButtonComponent_0_6.trigger.listen(this.eventHandler0(_ctx.scrollBack));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import23.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_5;
      }
      if (((identical(token, import19.MaterialButtonComponent) || identical(token, import24.ButtonDirective)) || identical(token, import25.HasDisabled))) {
        return this._MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.backIconType;
    if (import10.checkBinding(this._expr_2, currVal_2, 'backIconType', 'package:angular_components/scorecard/scoreboard.html')) {
      this._MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.atScorecardBarStart;
    if (import10.checkBinding(this._expr_0, currVal_0, 'atScorecardBarStart', 'package:angular_components/scorecard/scoreboard.html')) {
      import11.updateClassBindingNonHtml(this._el_0, 'hide', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectHostChanges(firstCheck);
    if (firstCheck) {
      if (!identical(import2.ScoreboardComponent.scrollScorecardBarBack, null)) {
        import11.updateAttribute(this._el_1, 'aria-label', import2.ScoreboardComponent.scrollScorecardBarBack);
      }
    }
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
  }
}

import17.EmbeddedView<void> viewFactory_ScoreboardComponent1(import22.RenderView parentView, int parentIndex) {
  return _ViewScoreboardComponent1(parentView, parentIndex);
}

class _ViewScoreboardComponent2 extends import17.EmbeddedView<import2.ScoreboardComponent> {
  import18.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import19.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import20.ViewMaterialIconComponent0 _compView_1;
  import21.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_0;
  var _expr_2;
  import6.Element _el_0;
  import6.Element _el_1;
  _ViewScoreboardComponent2(import22.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import18.ViewMaterialButtonComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'scroll-button scroll-forward-button');
    this.addShimC(this._el_0);
    this._AcxDarkTheme_0_5 = (import10.isDevMode
        ? import13.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import15.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex));
          })
        : import23.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import15.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex)));
    this._MaterialButtonComponent_0_6 = import19.MaterialButtonComponent(this._el_0, this._AcxDarkTheme_0_5, this._compView_0, null);
    this._compView_1 = import20.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this.addShimC(this._el_1);
    this._MaterialIconComponent_1_5 = import21.MaterialIconComponent(this._el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    this._compView_0.createAndProject(this._MaterialButtonComponent_0_6, [
      [this._el_1]
    ]);
    final subscription_0 = this._MaterialButtonComponent_0_6.trigger.listen(this.eventHandler0(_ctx.scrollForward));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import23.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_5;
      }
      if (((identical(token, import19.MaterialButtonComponent) || identical(token, import24.ButtonDirective)) || identical(token, import25.HasDisabled))) {
        return this._MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.forwardIconType;
    if (import10.checkBinding(this._expr_2, currVal_2, 'forwardIconType', 'package:angular_components/scorecard/scoreboard.html')) {
      this._MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.atScorecardBarEnd;
    if (import10.checkBinding(this._expr_0, currVal_0, 'atScorecardBarEnd', 'package:angular_components/scorecard/scoreboard.html')) {
      import11.updateClassBindingNonHtml(this._el_0, 'hide', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectHostChanges(firstCheck);
    if (firstCheck) {
      if (!identical(import2.ScoreboardComponent.scrollScorecardBarForward, null)) {
        import11.updateAttribute(this._el_1, 'aria-label', import2.ScoreboardComponent.scrollScorecardBarForward);
      }
    }
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
  }
}

import17.EmbeddedView<void> viewFactory_ScoreboardComponent2(import22.RenderView parentView, int parentIndex) {
  return _ViewScoreboardComponent2(parentView, parentIndex);
}

final List<dynamic> styles$ScoreboardComponentHost = const [];

class _ViewScoreboardComponentHost0 extends import26.HostView<import2.ScoreboardComponent> {
  @override
  void build() {
    this.componentView = ViewScoreboardComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import10.isDevMode
        ? import13.debugInjectorWrap(import2.ScoreboardComponent, () {
            return import2.ScoreboardComponent(null, this.injectorGet(import14.DomService, this.parentIndex), this.componentView);
          })
        : import2.ScoreboardComponent(null, this.injectorGet(import14.DomService, this.parentIndex), this.componentView));
    this.component.scoreCards = [];
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import26.HostView<import2.ScoreboardComponent> viewFactory_ScoreboardComponentHost0() {
  return _ViewScoreboardComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScoreboardComponent, createScoreboardComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
