// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'icon_affix.dart';
export 'icon_affix.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/base_affix.template.dart' as _ref4;
import 'package:angular_components/material_menu/affix/icon_affix_model.template.dart' as _ref5;
import 'package:angular_components/material_menu/common/menu_root.template.dart' as _ref6;
import 'package:angular_components/model/ui/icon.template.dart' as _ref7;
import 'package:angular_components/material_menu/affix/icon_affix.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'icon_affix.dart' as import2;
import '../../material_icon/material_icon.template.dart' as import3;
import '../../button_decorator/button_decorator.template.dart' as import4;
import '../../material_icon/material_icon.dart' as import5;
import 'package:angular/src/common/directives/ng_class.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/views/view.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import '../../button_decorator/button_decorator.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../common/menu_root.dart' as import17;

final List<dynamic> styles$IconAffixComponent = [import0.styles];

class ViewIconAffixComponent0 extends import1.ComponentView<import2.IconAffixComponent> {
  import3.ViewMaterialIconComponent0 _compView_0;
  import4.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import5.MaterialIconComponent _MaterialIconComponent_0_6;
  import6.NgClass _NgClass_0_7;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_7;
  import7.Element _el_0;
  static import8.ComponentStyles _componentStyles;
  ViewIconAffixComponent0(import9.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('icon-affix');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_menu/affix/icon_affix.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    parentRenderNode.append(this._el_0);
    import12.setAttribute(this._el_0, 'baseline', '');
    import12.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(this._el_0, 'secondary-icon');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import4.ButtonDirectiveNgCd(import13.ButtonDirective(this._el_0, null));
    this._MaterialIconComponent_0_6 = import5.MaterialIconComponent(this._el_0);
    this._NgClass_0_7 = import6.NgClass(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_6);
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler1(_ctx.handleActionIconTrigger));
    this.initSubscriptions([subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.ButtonDirective) && (0 == nodeIndex))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final bool currVal_4 = (!_ctx.isActionIconAffix);
    if (import11.checkBinding(this._expr_4, currVal_4, '!isActionIconAffix', 'asset:angular_components/lib/material_menu/affix/icon_affix.dart')) {
      this._ButtonDirective_0_5.instance.disabled = currVal_4;
      this._expr_4 = currVal_4;
    }
    changed = false;
    final currVal_5 = _ctx.icon;
    if (import11.checkBinding(this._expr_5, currVal_5, 'icon', 'asset:angular_components/lib/material_menu/affix/icon_affix.dart')) {
      this._MaterialIconComponent_0_6.icon = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._NgClass_0_7.initialClasses = 'secondary-icon');
    }
    final currVal_7 = _ctx.affix.cssClass;
    if (import11.checkBinding(this._expr_7, currVal_7, 'affix.cssClass', 'asset:angular_components/lib/material_menu/affix/icon_affix.dart')) {
      this._NgClass_0_7.rawClass = currVal_7;
      this._expr_7 = currVal_7;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgClass_0_7.ngDoCheck();
    }
    if (firstCheck) {
      import12.updateClassBindingNonHtml(this._el_0, 'action-icon', false);
    }
    final currVal_0 = _ctx.actionIconAriaLabel;
    if (import11.checkBinding(this._expr_0, currVal_0, 'actionIconAriaLabel', 'asset:angular_components/lib/material_menu/affix/icon_affix.dart')) {
      import12.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final bool currVal_2 = (!_ctx.isActionIconAffix);
    if (import11.checkBinding(this._expr_2, currVal_2, '!isActionIconAffix', 'asset:angular_components/lib/material_menu/affix/icon_affix.dart')) {
      import12.updateClassBindingNonHtml(this._el_0, 'disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.affix.isVisibleOnHover;
    if (import11.checkBinding(this._expr_3, currVal_3, 'affix.isVisibleOnHover', 'asset:angular_components/lib/material_menu/affix/icon_affix.dart')) {
      import12.updateClassBindingNonHtml(this._el_0, 'hover-icon', currVal_3);
      this._expr_3 = currVal_3;
    }
    this._ButtonDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._NgClass_0_7.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import8.ComponentStyles.scoped(styles$IconAffixComponent, _debugComponentUrl));
      if (import11.isDevMode) {
        import8.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _IconAffixComponentNgFactory = ComponentFactory<import2.IconAffixComponent>('icon-affix', viewFactory_IconAffixComponentHost0);
ComponentFactory<import2.IconAffixComponent> get IconAffixComponentNgFactory {
  return _IconAffixComponentNgFactory;
}

ComponentFactory<import2.IconAffixComponent> createIconAffixComponentFactory() {
  return ComponentFactory('icon-affix', viewFactory_IconAffixComponentHost0);
}

final List<dynamic> styles$IconAffixComponentHost = const [];

class _ViewIconAffixComponentHost0 extends import15.HostView<import2.IconAffixComponent> {
  @override
  void build() {
    this.componentView = ViewIconAffixComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import11.isDevMode
        ? import16.debugInjectorWrap(import2.IconAffixComponent, () {
            return import2.IconAffixComponent(this.componentView, this.injectorGetOptional(import17.MenuRoot, this.parentIndex));
          })
        : import2.IconAffixComponent(this.componentView, this.injectorGetOptional(import17.MenuRoot, this.parentIndex)));
    this.initRootNode(_el_0);
  }
}

import15.HostView<import2.IconAffixComponent> viewFactory_IconAffixComponentHost0() {
  return _ViewIconAffixComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(IconAffixComponent, createIconAffixComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
