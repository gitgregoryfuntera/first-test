import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'recipe/:id',
    loadChildren: () =>
      import('../app/pages/view-recipe/view-recipe.module').then(
        (m) => m.ViewRecipeModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('../app/pages/error/error.module').then(
        (m) => m.ErrorModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
