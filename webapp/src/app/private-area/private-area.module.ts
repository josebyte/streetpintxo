import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PrivateAreaRoutingModule } from './private-area-routing.module';
import { PrivateAreaPageComponent } from './containers/private-area-page/private-area-page.component';
import { AuthGuard } from '../auth/auth.guard';
import { PrivateAreaServices } from './services/private-area.services';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);

@NgModule({
  declarations: [
    PrivateAreaPageComponent,
  ],
  providers: [
    AuthGuard,
    PrivateAreaServices,
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  imports: [
    SharedModule,
    PrivateAreaRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrivateAreaModule { }
