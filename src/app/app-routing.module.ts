// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project imports - Admin components
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { UserManagementComponent } from './views/admin/user-management/user-management.component';
import { SettingsComponent } from './views/admin/settings/settings.component'; // Exemple d'importation de SettingsComponent

// Project imports - SIG components
import { InteractiveMapComponent } from './views/sig/interactive-map/interactive-map.component';
import { CaseManagementComponent } from './views/sig/case-management/case-management.component';
import { StatisticsReportsComponent } from './views/sig/statistics-reports/statistics-reports.component';
import { NotificationsAlertsComponent } from './views/sig/notifications-alerts/notifications-alerts.component';

// Project imports - Demo components
import { DefaultComponent } from './demo/default/dashboard/dashboard.component';
//import { TypographyComponent } from './demo/ui-component/typography/typography.component';
//import { UiColorComponent } from './demo/ui-component/ui-color/ui-color.component';
//import { SamplePageComponent } from './demo/other/sample-page/sample-page.component';

// Project imports - Authentication components
//import { GuestComponent } from './theme/layouts/guest/guest.component';
//import { LoginComponent } from './demo/authentication/login/login.component';
//import { RegisterComponent } from './demo/authentication/register/register.component';

// Project imports - Other components
import { DocumentationComponent } from './views/documentation/documentation.component'; // Exemple d'importation de DocumentationComponent
import { LogoutComponent } from './views/logout/logout.component';
import { LoginComponent } from './views/login/login.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        component: DefaultComponent
      },
      
      
     
      // SIG Routes
      {
        path: 'sig/interactive-map',
        component: InteractiveMapComponent
      },
      {
        path: 'sig/case-management',
        component: CaseManagementComponent
      },
      {
        path: 'sig/statistics-reports',
        component: StatisticsReportsComponent
      },
      {
        path: 'sig/notifications-alerts',
        component: NotificationsAlertsComponent
      },
      // Admin Routes
      {
        path: 'admin/user-management',
        component: UserManagementComponent
      },
      {
        path: 'admin/settings',
        component: SettingsComponent
      },
      {
        path: 'documentation',
        component: DocumentationComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
