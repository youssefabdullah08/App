import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'cate', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'cate',
        loadComponent: () =>
          import('./category/category.component').then(
            (m) => m.CategoryComponent
          ),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
      {
        path: 'order',
        loadComponent: () =>
          import('./orders/orders.component').then((m) => m.OrdersComponent),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./userr/userr.component').then((m) => m.UserrComponent),
      },
    ],
  },
];
