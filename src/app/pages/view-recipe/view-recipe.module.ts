import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRecipeComponent } from './view-recipe.component';
import { ViewRecipeRoutingModule } from './view-recipe-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    ViewRecipeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ViewRecipeRoutingModule,
    AppMaterialModule,
  ]
})
export class ViewRecipeModule { }
