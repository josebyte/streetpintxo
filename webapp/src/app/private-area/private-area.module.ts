import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateAreaRoutingModule } from './private-area-routing.module';
import { BillComponent } from "./component/bill/bill.component";
import { PrivateAreaPageComponent } from "./containers/private-area-page/private-area-page.component";
import { AuthGuard } from "../auth/auth.guard";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    PrivateAreaPageComponent,
    BillComponent
  ],
  providers: [
    AuthGuard
  ],
  imports: [
    CommonModule,
    PrivateAreaRoutingModule,
    NgxDatatableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrivateAreaModule { }
