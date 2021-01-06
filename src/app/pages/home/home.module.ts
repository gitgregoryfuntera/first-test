import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
