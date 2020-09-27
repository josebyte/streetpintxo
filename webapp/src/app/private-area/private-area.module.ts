import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import { PrivateAreaRoutingModule } from './private-area-routing.module';
import { BillComponent } from "./component/bill/bill.component";
import { PrivateAreaPageComponent } from "./containers/private-area-page/private-area-page.component";
import { AuthGuard } from "../auth/auth.guard";

@NgModule({
  declarations: [
    PrivateAreaPageComponent,
    BillComponent
  ],
  providers: [
    AuthGuard
  ],
  imports: [
    SharedModule,
    PrivateAreaRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrivateAreaModule { }
