import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';

// Components:
import { BarPageComponent } from "./containers/bar-page/bar-page.component";
import { BarDetailComponent } from "./containers/bar-detail/bar-detail.component";

@NgModule({
  declarations: [
      BarPageComponent,
      BarDetailComponent
  ],
  imports: [
    CommonModule,
    BarRoutingModule
  ]
})
export class BarModule { }
