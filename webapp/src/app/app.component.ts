import {Component, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService} from "@ngx-translate/core";
import { CityActions } from "./city/actions";
import { select, Store} from "@ngrx/store";
import * as fromCity from "./city/reducers/city.reducer";
import { Observable } from "rxjs";
import { City } from "./city/city.model";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  title = "StreetPintxo";
  cities$: Observable<City[]> = this.cityStore.pipe(select(fromCity.getCities));

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private cityStore: Store<fromCity.State>

  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    localStorage.setItem('currentUser', 'joseba'); // by-pass the authguard for task #5: al entrar por primera vez redirigir a lista naves

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.cityStore.dispatch(CityActions.loadCities());
  }
}
