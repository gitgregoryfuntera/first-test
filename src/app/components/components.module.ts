import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { ViewRecipeHeaderComponent } from './view-recipe-header/view-recipe-header.component';


@NgModule({
  declarations: [
    RecipeCardComponent,
    ViewRecipeHeaderComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: [
    RecipeCardComponent,
    ViewRecipeHeaderComponent,
  ]
})
export class ComponentsModule { }
