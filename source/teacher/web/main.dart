import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:teacher/app_component.template.dart' as app;
import 'main.template.dart' as ng;

@GenerateInjector([
  routerProvidersHash
])
final InjectorFactory appInjector = ng.appInjector$Injector;

void main() {
  runApp(
      app.AppComponentNgFactory,
      createInjector: ng.appInjector
  );
}
