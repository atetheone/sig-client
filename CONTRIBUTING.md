# Guide de Contribution

Merci de contribuer à notre projet ! Voici quelques instructions pour vous aider à démarrer.

## Prérequis

- Node.js (version 14 ou supérieure)
- Angular CLI (version 12 ou supérieure)
- Git
- Un compte GitHub avec accès au dépôt (vous recevrez une invitation par e-mail ou notification GitHub)

## Installation du Projet

1. **Accepter l'Invitation** :
   - Vous recevrez une invitation à rejoindre le dépôt via e-mail ou notification GitHub.
   - Acceptez l'invitation pour obtenir l'accès.

2. **Cloner le dépôt du projet** :
   Une fois que vous avez accepté l'invitation, vous pouvez cloner le dépôt :

   ```bash
   git clone https://github.com/atetheone/sig-client.git
   cd sig-client
   ```

3. **Installez les dépendances** :

   ```bash
   npm install --legacy-peer-deps
   ```

4. **Démarrez l'application** :

   ```bash
   ng serve
   ```

   L'application sera disponible à l'adresse `http://localhost:4200`.

## Structure du Projet

Voici un aperçu de la structure des dossiers du projet :

```
sig-client/
├── .angular/
├── .github/
│   └── workflows/
│       └── prod.yml
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── demo/
│   │   │   └── default/
│   │   │       └── dashboard/
│   │   │           └── dashboard.component.ts
│   │   └── views/
│   │       └── sig/
│   │           ├── interactive-map/
│   │           ├── case-management/
│   │           ├── statistics-reports/
│   │           └── notifications-alerts/
│   │       └── admin/
│   │           ├── user-management/
│   │           └── settings/
│   │       └── documentation/
│   │       └── logout/
│   ├── assets/
│   ├── environments/
│   ├── fake-data/
│   ├── scss/
│   └── test.ts
├── angular.json
├── karma.conf.js
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Ajout de Composants

Pour ajouter de nouveaux composants, utilisez les commandes Angular CLI suivantes :

```bash
ng generate component views/sig/interactive-map
ng generate component views/sig/case-management
ng generate component views/sig/statistics-reports
ng generate component views/sig/notifications-alerts
ng generate component views/admin/user-management
ng generate component views/admin/settings
ng generate component views/documentation
ng generate component views/logout
```

## Configuration des Routes

Assurez-vous de mettre à jour le fichier `app-routing.module.ts` pour inclure les nouvelles routes :

```typescript
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
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component').then((c) => c.TypographyComponent)
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component').then((c) => c.UiColorComponent)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
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
        loadComponent: () => import('./demo/authentication/login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component').then((c) => c.RegisterComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## Mise à Jour de la Navigation

Mettez à jour le fichier de navigation pour inclure les nouveaux liens :

```typescript
import { Component } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'sig',
    title: 'Système d\'Information Géographique',
    type: 'group',
    icon: 'icon-map',
    children: [
      {
        id: 'interactive-map',
        title: 'Carte Interactive',
        type: 'item',
        classes: 'nav-item',
        url: '/sig/interactive-map',
        icon: 'map',
        breadcrumbs: false
      },
      {
        id: 'case-management',
        title: 'Gestion des Cas',
        type: 'item',
        classes: 'nav-item',
        url: '/sig/case-management',
        icon: 'folder',
        breadcrumbs: false
      },
      {
        id: 'statistics-reports',
        title: 'Statistiques et Rapports',
        type: 'item',
        classes: 'nav-item',
        url: '/sig/statistics-reports',
        icon: 'bar-chart',
        breadcrumbs: false
      },
      {
        id: 'notifications-alerts',
        title: 'Notifications et Alertes',
        type: 'item',
        classes: 'nav-item',
        url: '/sig/notifications-alerts',
        icon: 'bell',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'administration',
    title: 'Administration',
    type: 'group',
    icon: 'icon-settings',
    children: [
      {
        id: 'user-management',
        title: 'Gestion des Utilisateurs',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/user-management',
        icon: 'user',
        breadcrumbs: false
      },
      {
        id: 'settings',
        title: 'Param

ètres',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/settings',
        icon: 'settings',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'help',
    title: 'Aide et Documentation',
    type: 'group',
    icon: 'icon-help',
    children: [
      {
        id: 'documentation',
        title: 'Documentation',
        type: 'item',
        classes: 'nav-item',
        url: '/documentation',
        icon: 'book',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'logout',
    title: 'Déconnexion',
    type: 'item',
    classes: 'nav-item',
    url: '/logout',
    icon: 'logout',
    breadcrumbs: false
  }
];
```

## Conventions de Code

- Utilisez des commits atomiques et descriptifs.
- Respectez les conventions de nommage du projet.
- Écrivez des tests pour tout nouveau code.
- Assurez-vous que votre code passe tous les tests avant de créer une pull request.

## Créer une Pull Request

1. Créez une nouvelle branche pour votre fonctionnalité ou bugfix :

   ```bash
   git checkout -b feature/nom-de-la-fonctionnalité
   ```

2. Ajoutez vos changements :

   ```bash
   git add .
   ```

3. Commitez vos changements :

   ```bash
   git commit -m "Ajout de la fonctionnalité X"
   ```

4. Poussez vos changements vers votre branche :

   ```bash
   git push origin feature/nom-de-la-fonctionnalité
   ```

5. Créez une pull request depuis GitHub.

Merci pour votre contribution !
