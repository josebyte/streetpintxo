import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchComponent } from "../bar/components/search/search.component";
import {TranslateModule} from "@ngx-translate/core";
import { StoreModule } from '@ngrx/store';
import * as fromCity from '../city/reducers/city.reducer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TranslateModule,
        StoreModule.forFeature(fromCity.cityFeatureKey, fromCity.reducer),
    ],
    exports: [
        SearchComponent
    ],
    declarations: [HomePage, SearchComponent]
})
export class HomePageModule {}
