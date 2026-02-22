import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bootstrap', loadChildren: () => import('./ui/bootstrap.config').then((m) => m.appRoutes) },
      { path: 'material', loadChildren: () => import('./ui/material.config').then((m) => m.appRoutes) },
    ],
  },
];
