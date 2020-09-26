import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarPageComponent } from "./containers/bar-page/bar-page.component";
import { BarDetailComponent } from "./containers/bar-detail/bar-detail.component";

const routes: Routes = [
  {
    path: ':city/:bar',
    component: BarDetailComponent
  },
  {
    path: ':city',
    component: BarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
