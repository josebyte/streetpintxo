import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = "StreetPintxo";
  cities = [
    {name: "Bilbao", logo: "logoBilbao.svg", primary: "#ff0c0c", secondary: "#ff653f", tertiary: "#ffa6a6"  },
    {name: "Vitoria", logo: "logoBilbao.svg", primary: "#009c12", secondary: "rgba(75,220,95,0.94)", tertiary: "#c9ffb2"  },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
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
}
