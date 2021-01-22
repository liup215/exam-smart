define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform.template', 'packages/angular/src/core/application_tokens.template'], (function load__packages__angular__src__bootstrap__run_template(dart_sdk, packages__angular__core$46template, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform$46template, packages__angular__src__core__application_tokens$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = packages__angular__core$46template.core$46template;
  const component_factory$46template = packages__angular__src__bootstrap__modules.src__core__linker__component_factory$46template;
  const component_loader$46template = packages__angular__src__bootstrap__modules.src__core__linker__component_loader$46template;
  const dynamic_component_loader$46template = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader$46template;
  const element_ref$46template = packages__angular__src__bootstrap__modules.src__core__linker__element_ref$46template;
  const style_encapsulation$46template = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation$46template;
  const template_ref$46template = packages__angular__src__bootstrap__modules.src__core__linker__template_ref$46template;
  const view_container_ref$46template = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref$46template;
  const view_ref$46template = packages__angular__src__bootstrap__modules.src__core__linker__view_ref$46template;
  const host$46template = packages__angular__src__bootstrap__modules.src__core__change_detection__host$46template;
  const app_view_utils$46template = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils$46template;
  const component_resolver$46template = packages__angular__src__bootstrap__modules.src__core__linker__component_resolver$46template;
  const dom_events$46template = packages__angular__src__bootstrap__modules.src__runtime__dom_events$46template;
  const sanitization_service$46template = packages__angular__src__bootstrap__modules.src__security__sanitization_service$46template;
  const modules$46template = packages__angular__src__bootstrap__modules.src__bootstrap__modules$46template;
  const ng_zone$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__core__zone__ng_zone$46template;
  const runtime$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__runtime$46template;
  const exception_handler$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__facade__exception_handler$46template;
  const di$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__core__di$46template;
  const empty$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__di__injector__empty$46template;
  const hierarchical$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__di__injector__hierarchical$46template;
  const injector$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__di__injector__injector$46template;
  const default_iterable_differ$46template = packages__angular__src__core__application_tokens$46template.src__core__change_detection__differs__default_iterable_differ$46template;
  const application_tokens$46template = packages__angular__src__core__application_tokens$46template.src__core__application_tokens$46template;
  const default_keyvalue_differ$46template = packages__angular__src__core__application_tokens$46template.src__core__change_detection__differs__default_keyvalue_differ$46template;
  var ng_switch$46template = Object.create(dart.library);
  var linker$46template = Object.create(dart.library);
  var ng_template_outlet$46template = Object.create(dart.library);
  var testability$46template = Object.create(dart.library);
  var lowercase_pipe$46template = Object.create(dart.library);
  var invalid_pipe_argument_exception$46template = Object.create(dart.library);
  var ng_for$46template = Object.create(dart.library);
  var async_pipe$46template = Object.create(dart.library);
  var tools$46template = Object.create(dart.library);
  var common_tools$46template = Object.create(dart.library);
  var application_ref$46template = Object.create(dart.library);
  var js_api$46template = Object.create(dart.library);
  var number_pipe$46template = Object.create(dart.library);
  var testability$46template$ = Object.create(dart.library);
  var run$46template = Object.create(dart.library);
  var app_host$46template = Object.create(dart.library);
  var pipes$46template = Object.create(dart.library);
  var uppercase_pipe$46template = Object.create(dart.library);
  var slice_pipe$46template = Object.create(dart.library);
  var replace_pipe$46template = Object.create(dart.library);
  var date_pipe$46template = Object.create(dart.library);
  var common_pipes$46template = Object.create(dart.library);
  var common_directives$46template = Object.create(dart.library);
  var directives$46template = Object.create(dart.library);
  var ng_style$46template = Object.create(dart.library);
  var ng_if$46template = Object.create(dart.library);
  var ng_class$46template = Object.create(dart.library);
  var core_directives$46template = Object.create(dart.library);
  const CT = Object.create(null);
  ng_switch$46template.initReflector = function initReflector() {
    if (dart.test(ng_switch$46template._visited)) {
      return;
    }
    ng_switch$46template._visited = true;
    core$46template.initReflector();
    linker$46template.initReflector();
  };
  dart.defineLazy(ng_switch$46template, {
    /*ng_switch$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  linker$46template.initReflector = function initReflector$() {
    if (dart.test(linker$46template._visited)) {
      return;
    }
    linker$46template._visited = true;
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    dynamic_component_loader$46template.initReflector();
    element_ref$46template.initReflector();
    style_encapsulation$46template.initReflector();
    template_ref$46template.initReflector();
    view_container_ref$46template.initReflector();
    view_ref$46template.initReflector();
  };
  dart.defineLazy(linker$46template, {
    /*linker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  ng_template_outlet$46template.initReflector = function initReflector$0() {
    if (dart.test(ng_template_outlet$46template._visited)) {
      return;
    }
    ng_template_outlet$46template._visited = true;
    core$46template.initReflector();
    linker$46template.initReflector();
  };
  dart.defineLazy(ng_template_outlet$46template, {
    /*ng_template_outlet$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  testability$46template.initReflector = function initReflector$1() {
    if (dart.test(testability$46template._visited)) {
      return;
    }
    testability$46template._visited = true;
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(testability$46template, {
    /*testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  lowercase_pipe$46template.initReflector = function initReflector$2() {
    if (dart.test(lowercase_pipe$46template._visited)) {
      return;
    }
    lowercase_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
  };
  dart.defineLazy(lowercase_pipe$46template, {
    /*lowercase_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  invalid_pipe_argument_exception$46template.initReflector = function initReflector$3() {
  };
  ng_for$46template.initReflector = function initReflector$4() {
    if (dart.test(ng_for$46template._visited)) {
      return;
    }
    ng_for$46template._visited = true;
    default_iterable_differ$46template.initReflector();
    linker$46template.initReflector();
    core$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(ng_for$46template, {
    /*ng_for$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  async_pipe$46template.initReflector = function initReflector$5() {
    if (dart.test(async_pipe$46template._visited)) {
      return;
    }
    async_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
  };
  dart.defineLazy(async_pipe$46template, {
    /*async_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  tools$46template.initReflector = function initReflector$6() {
    if (dart.test(tools$46template._visited)) {
      return;
    }
    tools$46template._visited = true;
    common_tools$46template.initReflector();
    component_factory$46template.initReflector();
  };
  dart.defineLazy(tools$46template, {
    /*tools$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  common_tools$46template.initReflector = function initReflector$7() {
    if (dart.test(common_tools$46template._visited)) {
      return;
    }
    common_tools$46template._visited = true;
    application_ref$46template.initReflector();
    component_factory$46template.initReflector();
  };
  dart.defineLazy(common_tools$46template, {
    /*common_tools$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  application_ref$46template.initReflector = function initReflector$8() {
    if (dart.test(application_ref$46template._visited)) {
      return;
    }
    application_ref$46template._visited = true;
    exception_handler$46template.initReflector();
    host$46template.initReflector();
    di$46template.initReflector();
    component_factory$46template.initReflector();
    host$46template.initReflector();
    runtime$46template.initReflector();
    testability$46template.initReflector();
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(application_ref$46template, {
    /*application_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  js_api$46template.initReflector = function initReflector$9() {
  };
  number_pipe$46template.initReflector = function initReflector$10() {
    if (dart.test(number_pipe$46template._visited)) {
      return;
    }
    number_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
  };
  dart.defineLazy(number_pipe$46template, {
    /*number_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  testability$46template$.initReflector = function initReflector$11() {
    if (dart.test(testability$46template$._visited)) {
      return;
    }
    testability$46template$._visited = true;
    testability$46template.initReflector();
    runtime$46template.initReflector();
    js_api$46template.initReflector();
  };
  dart.defineLazy(testability$46template$, {
    /*testability$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  run$46template.initReflector = function initReflector$12() {
    if (dart.test(run$46template._visited)) {
      return;
    }
    run$46template._visited = true;
    app_host$46template.initReflector();
    application_ref$46template.initReflector();
    application_tokens$46template.initReflector();
    di$46template.initReflector();
    linker$46template.initReflector();
    app_view_utils$46template.initReflector();
    component_resolver$46template.initReflector();
    testability$46template.initReflector();
    ng_zone$46template.initReflector();
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
    dom_events$46template.initReflector();
    sanitization_service$46template.initReflector();
    modules$46template.initReflector();
  };
  dart.defineLazy(run$46template, {
    /*run$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  app_host$46template.initReflector = function initReflector$13() {
    if (dart.test(app_host$46template._visited)) {
      return;
    }
    app_host$46template._visited = true;
    di$46template.initReflector();
    testability$46template.initReflector();
    testability$46template$.initReflector();
  };
  dart.defineLazy(app_host$46template, {
    /*app_host$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  pipes$46template.initReflector = function initReflector$14() {
    if (dart.test(pipes$46template._visited)) {
      return;
    }
    pipes$46template._visited = true;
    async_pipe$46template.initReflector();
    common_pipes$46template.initReflector();
    date_pipe$46template.initReflector();
    lowercase_pipe$46template.initReflector();
    number_pipe$46template.initReflector();
    replace_pipe$46template.initReflector();
    slice_pipe$46template.initReflector();
    uppercase_pipe$46template.initReflector();
  };
  dart.defineLazy(pipes$46template, {
    /*pipes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  uppercase_pipe$46template.initReflector = function initReflector$15() {
    if (dart.test(uppercase_pipe$46template._visited)) {
      return;
    }
    uppercase_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
  };
  dart.defineLazy(uppercase_pipe$46template, {
    /*uppercase_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  slice_pipe$46template.initReflector = function initReflector$16() {
    if (dart.test(slice_pipe$46template._visited)) {
      return;
    }
    slice_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
  };
  dart.defineLazy(slice_pipe$46template, {
    /*slice_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  replace_pipe$46template.initReflector = function initReflector$17() {
    if (dart.test(replace_pipe$46template._visited)) {
      return;
    }
    replace_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
  };
  dart.defineLazy(replace_pipe$46template, {
    /*replace_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  date_pipe$46template.initReflector = function initReflector$18() {
    if (dart.test(date_pipe$46template._visited)) {
      return;
    }
    date_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(date_pipe$46template, {
    /*date_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  common_pipes$46template.initReflector = function initReflector$19() {
    if (dart.test(common_pipes$46template._visited)) {
      return;
    }
    common_pipes$46template._visited = true;
    async_pipe$46template.initReflector();
    date_pipe$46template.initReflector();
    lowercase_pipe$46template.initReflector();
    number_pipe$46template.initReflector();
    replace_pipe$46template.initReflector();
    slice_pipe$46template.initReflector();
    uppercase_pipe$46template.initReflector();
  };
  dart.defineLazy(common_pipes$46template, {
    /*common_pipes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  common_directives$46template.initReflector = function initReflector$20() {
    if (dart.test(common_directives$46template._visited)) {
      return;
    }
    common_directives$46template._visited = true;
    directives$46template.initReflector();
  };
  dart.defineLazy(common_directives$46template, {
    /*common_directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  directives$46template.initReflector = function initReflector$21() {
    if (dart.test(directives$46template._visited)) {
      return;
    }
    directives$46template._visited = true;
    core_directives$46template.initReflector();
    ng_class$46template.initReflector();
    ng_for$46template.initReflector();
    ng_if$46template.initReflector();
    ng_style$46template.initReflector();
    ng_switch$46template.initReflector();
    ng_template_outlet$46template.initReflector();
  };
  dart.defineLazy(directives$46template, {
    /*directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  ng_style$46template.initReflector = function initReflector$22() {
    if (dart.test(ng_style$46template._visited)) {
      return;
    }
    ng_style$46template._visited = true;
    default_keyvalue_differ$46template.initReflector();
    core$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(ng_style$46template, {
    /*ng_style$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  ng_if$46template.initReflector = function initReflector$23() {
    if (dart.test(ng_if$46template._visited)) {
      return;
    }
    ng_if$46template._visited = true;
    core$46template.initReflector();
    linker$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(ng_if$46template, {
    /*ng_if$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  ng_class$46template.initReflector = function initReflector$24() {
    if (dart.test(ng_class$46template._visited)) {
      return;
    }
    ng_class$46template._visited = true;
    core$46template.initReflector();
    default_iterable_differ$46template.initReflector();
    default_keyvalue_differ$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(ng_class$46template, {
    /*ng_class$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  core_directives$46template.initReflector = function initReflector$25() {
    if (dart.test(core_directives$46template._visited)) {
      return;
    }
    core_directives$46template._visited = true;
    ng_class$46template.initReflector();
    ng_for$46template.initReflector();
    ng_if$46template.initReflector();
    ng_style$46template.initReflector();
    ng_switch$46template.initReflector();
    ng_template_outlet$46template.initReflector();
  };
  dart.defineLazy(core_directives$46template, {
    /*core_directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular/src/bootstrap/run.template", {
    "package:angular/src/common/directives/ng_switch.template.dart": ng_switch$46template,
    "package:angular/src/core/linker.template.dart": linker$46template,
    "package:angular/src/common/directives/ng_template_outlet.template.dart": ng_template_outlet$46template,
    "package:angular/src/core/testability/testability.template.dart": testability$46template,
    "package:angular/src/common/pipes/lowercase_pipe.template.dart": lowercase_pipe$46template,
    "package:angular/src/common/pipes/invalid_pipe_argument_exception.template.dart": invalid_pipe_argument_exception$46template,
    "package:angular/src/common/directives/ng_for.template.dart": ng_for$46template,
    "package:angular/src/common/pipes/async_pipe.template.dart": async_pipe$46template,
    "package:angular/src/platform/browser/tools/tools.template.dart": tools$46template,
    "package:angular/src/platform/browser/tools/common_tools.template.dart": common_tools$46template,
    "package:angular/src/core/application_ref.template.dart": application_ref$46template,
    "package:angular/src/testability/js_api.template.dart": js_api$46template,
    "package:angular/src/common/pipes/number_pipe.template.dart": number_pipe$46template,
    "package:angular/src/platform/browser/testability.template.dart": testability$46template$,
    "package:angular/src/bootstrap/run.template.dart": run$46template,
    "package:angular/src/core/app_host.template.dart": app_host$46template,
    "package:angular/src/common/pipes.template.dart": pipes$46template,
    "package:angular/src/common/pipes/uppercase_pipe.template.dart": uppercase_pipe$46template,
    "package:angular/src/common/pipes/slice_pipe.template.dart": slice_pipe$46template,
    "package:angular/src/common/pipes/replace_pipe.template.dart": replace_pipe$46template,
    "package:angular/src/common/pipes/date_pipe.template.dart": date_pipe$46template,
    "package:angular/src/common/pipes/common_pipes.template.dart": common_pipes$46template,
    "package:angular/src/common/common_directives.template.dart": common_directives$46template,
    "package:angular/src/common/directives.template.dart": directives$46template,
    "package:angular/src/common/directives/ng_style.template.dart": ng_style$46template,
    "package:angular/src/common/directives/ng_if.template.dart": ng_if$46template,
    "package:angular/src/common/directives/ng_class.template.dart": ng_class$46template,
    "package:angular/src/common/directives/core_directives.template.dart": core_directives$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../common/directives/ng_switch.template.dart","../core/linker.template.dart","../common/directives/ng_template_outlet.template.dart","../core/testability/testability.template.dart","../common/pipes/lowercase_pipe.template.dart","../common/pipes/invalid_pipe_argument_exception.template.dart","../common/directives/ng_for.template.dart","../common/pipes/async_pipe.template.dart","../platform/browser/tools/tools.template.dart","../platform/browser/tools/common_tools.template.dart","../core/application_ref.template.dart","../testability/js_api.template.dart","../common/pipes/number_pipe.template.dart","../platform/browser/testability.template.dart","run.template.dart","../core/app_host.template.dart","../common/pipes.template.dart","../common/pipes/uppercase_pipe.template.dart","../common/pipes/slice_pipe.template.dart","../common/pipes/replace_pipe.template.dart","../common/pipes/date_pipe.template.dart","../common/pipes/common_pipes.template.dart","../common/common_directives.template.dart","../common/directives.template.dart","../common/directives/ng_style.template.dart","../common/directives/ng_if.template.dart","../common/directives/ng_class.template.dart","../common/directives/core_directives.template.dart"],"names":[],"mappings":"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","file":"run.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_switch$46template: ng_switch$46template,
    src__core__linker$46template: linker$46template,
    src__common__directives__ng_template_outlet$46template: ng_template_outlet$46template,
    src__core__testability__testability$46template: testability$46template,
    src__common__pipes__lowercase_pipe$46template: lowercase_pipe$46template,
    src__common__pipes__invalid_pipe_argument_exception$46template: invalid_pipe_argument_exception$46template,
    src__common__directives__ng_for$46template: ng_for$46template,
    src__common__pipes__async_pipe$46template: async_pipe$46template,
    src__platform__browser__tools__tools$46template: tools$46template,
    src__platform__browser__tools__common_tools$46template: common_tools$46template,
    src__core__application_ref$46template: application_ref$46template,
    src__testability__js_api$46template: js_api$46template,
    src__common__pipes__number_pipe$46template: number_pipe$46template,
    src__platform__browser__testability$46template: testability$46template$,
    src__bootstrap__run$46template: run$46template,
    src__core__app_host$46template: app_host$46template,
    src__common__pipes$46template: pipes$46template,
    src__common__pipes__uppercase_pipe$46template: uppercase_pipe$46template,
    src__common__pipes__slice_pipe$46template: slice_pipe$46template,
    src__common__pipes__replace_pipe$46template: replace_pipe$46template,
    src__common__pipes__date_pipe$46template: date_pipe$46template,
    src__common__pipes__common_pipes$46template: common_pipes$46template,
    src__common__common_directives$46template: common_directives$46template,
    src__common__directives$46template: directives$46template,
    src__common__directives__ng_style$46template: ng_style$46template,
    src__common__directives__ng_if$46template: ng_if$46template,
    src__common__directives__ng_class$46template: ng_class$46template,
    src__common__directives__core_directives$46template: core_directives$46template
  };
}));

//# sourceMappingURL=run.template.unsound.ddc.js.map
