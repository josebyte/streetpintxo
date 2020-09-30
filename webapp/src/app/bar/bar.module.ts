import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BarRoutingModule } from './bar-routing.module';

// Components:
import { BarPageComponent } from './containers/bar-page/bar-page.component';
import { BarDetailComponent } from './containers/bar-detail/bar-detail.component';
import { SearchComponent } from './components/search/search.component';

// Services:
import { BarService } from './services/bar.services';
import { EffectsModule } from '@ngrx/effects';
import { BarEffects } from './effects/bar.effects';
import {PrivateAreaServices} from '../private-area/services/private-area.services';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [
      BarPageComponent,
      BarDetailComponent,
      SearchComponent,
      BarComponent
  ],
  imports: [
    SharedModule,
    BarRoutingModule,
    EffectsModule.forFeature([BarEffects]),
  ],
  providers: [
    BarService,
    PrivateAreaServices
  ]
})
export class BarModule { }
