// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      },
       // SIG Routes
       {
        path: 'sig/interactive-map',
        loadComponent: () => import('./views/sig/interactive-map/interactive-map.component').then((c) => c.InteractiveMapComponent)
      },
      {
        path: 'sig/case-management',
        loadComponent: () => import('./views/sig/case-management/case-management.component').then((c) => c.CaseManagementComponent)
      },
      {
        path: 'sig/statistics-reports',
        loadComponent: () => import('./views/sig/statistics-reports/statistics-reports.component').then((c) => c.StatisticsReportsComponent)
      },
      {
        path: 'sig/notifications-alerts',
        loadComponent: () => import('./views/sig/notifications-alerts/notifications-alerts.component').then((c) => c.NotificationsAlertsComponent)
      },
      // Admin Routes
      {
        path: 'admin/user-management',
        loadComponent: () => import('./views/admin/user-management/user-management.component').then((c) => c.UserManagementComponent)
      },
      {
        path: 'admin/settings',
        loadComponent: () => import('./views/admin/settings/settings.component').then((c) => c.SettingsComponent)
      },
      {
        path: 'documentation',
        loadComponent: () => import('./views/documentation/documentation.component').then((c) => c.DocumentationComponent)
      },
      {
        path: 'logout',
        loadComponent: () => import('./views/logout/logout.component').then((c) => c.LogoutComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
