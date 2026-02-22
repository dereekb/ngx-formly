import { Routes } from '@angular/router';

export const uiRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'bootstrap' },
      { path: 'bootstrap', loadChildren: () => import('./ui-bootstrap/app.routes').then((m) => m.appRoutes) },
      { path: 'material', loadChildren: () => import('./ui-material/app.routes').then((m) => m.appRoutes) },
    ],
  },
];
