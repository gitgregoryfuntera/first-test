import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewRecipeComponent } from './view-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: ViewRecipeComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewRecipeRoutingModule { }
