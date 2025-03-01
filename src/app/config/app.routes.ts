import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: (async () => await import('@views/layout/layout.component')),
    children: [
      {
        path: 'heroes',
        loadComponent: (async () => await import('@views/heroes/heroes.component'))
      },
      {
        path: 'heroe-detail/:id',
        loadComponent: (async () => await import('@views/heroes/views/heroe-detail/heroe-detail.component'))
      }
    ]
  },
];
