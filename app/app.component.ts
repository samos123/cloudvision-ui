import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CloudsComponent } from './clouds/clouds.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {path:'/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path:'/clouds', name: 'Clouds', component: CloudsComponent}
])
export class AppComponent {
  public title = "CloudVision";
}
