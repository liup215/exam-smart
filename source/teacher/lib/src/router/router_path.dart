import 'package:angular_router/angular_router.dart';

final RoutePath layoutRoutePath = RoutePath(
  path: '/',
);

final RoutePath homeRoutePath = RoutePath(
  parent: layoutRoutePath,
  path: 'index',
  useAsDefault: true,
);

final RoutePath testRoutePath = RoutePath(
  parent: layoutRoutePath,
  path: 'test',
);

final RoutePath loginRoutePath = RoutePath(
  path: '/login',
);