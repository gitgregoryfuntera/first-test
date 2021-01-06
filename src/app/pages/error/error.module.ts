import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    AppMaterialModule
  ]
})
export class ErrorModule { }
