import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { BarRoutingModule } from './bar-routing.module';

// Components:
import { BarPageComponent } from "./containers/bar-page/bar-page.component";
import { BarDetailComponent } from "./containers/bar-detail/bar-detail.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [
      BarPageComponent,
      BarDetailComponent,
      SearchComponent
  ],
  imports: [
    SharedModule,
    BarRoutingModule,
  ]
})
export class BarModule { }
