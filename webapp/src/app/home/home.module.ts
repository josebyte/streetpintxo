import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCity from '../city/reducers/city.reducer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        StoreModule.forFeature(fromCity.cityFeatureKey, fromCity.reducer),
    ],
    exports: [],
    declarations: [HomePage]
})
export class HomePageModule {}
