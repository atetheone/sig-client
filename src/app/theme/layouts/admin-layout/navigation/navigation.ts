export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
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
        url: '/dashboard/default',
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
        title: 'Paramètres',
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
        url: 'https://codedthemes.gitbook.io/mantis-angular/',
        icon: 'book',
        target: true,
        external: true
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
