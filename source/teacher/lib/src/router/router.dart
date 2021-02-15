import 'package:angular_router/angular_router.dart';
import 'router_path.dart';
import 'package:teacher/src/view/layout/layout_component.template.dart' as layoutComponent;
import 'package:teacher/src/view/layout/home/home_component.template.dart' as homeComponent;
import 'package:teacher/src/view/layout/test/test_component.template.dart' as testComponent;
import 'package:teacher/src/view/login/login_component.template.dart' as loginComponent;

final RouteDefinition layout = RouteDefinition(
  routePath: layoutRoutePath,
  component: layoutComponent.LayoutComponentNgFactory,
);

final RouteDefinition home = RouteDefinition(
  routePath: homeRoutePath,
  component: homeComponent.HomeComponentNgFactory,
);

final RouteDefinition test = RouteDefinition(
  routePath: testRoutePath,
  component: testComponent.TestComponentNgFactory,
);

final RouteDefinition login = RouteDefinition(
  routePath: loginRoutePath,
  component: loginComponent.LoginComponentNgFactory,
);

final List<RouteDefinition> routers = [
  layout,
  login,
];

