import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:teacher/src/router/router.dart';
import 'package:teacher/src/router/router_path.dart';

@Component(
  selector: 'layout',
  directives: [
    routerDirectives,
  ],
  templateUrl: 'layout_component.html',
  styleUrls: ['layout_component.css'],
)
class LayoutComponent{
  final String testUrl = test.toUrl();

  final String homeUrl = home.toUrl();
  List<RouteDefinition> rs = [
    RouteDefinition.redirect(
      routePath: layoutRoutePath,
      redirectTo: home.toUrl(),
    ),
    home,
    test,
  ];
}