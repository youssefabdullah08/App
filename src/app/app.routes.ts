import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'graph',
        loadComponent: () =>
          import('./graph/graph.component').then((m) => m.GraphComponent),
      }
    ],
  },
];
