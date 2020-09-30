import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})

export class StylingService {

  private defaultStyle = [
    { cssvar: '--ion-color-primary', value: '#3880ff'},
    { cssvar: '--ion-color-secondary', value: '#3dc2ff'},
    { cssvar: '--ion-color-tertiary', value: '#5260ff'},
    { cssvar: '--logo', value: 'url(assets/img/logos/logo.png)'},
  ];

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
  }

  private setColors(colors){
    this.domCtrl.write(() => {
      colors.forEach(style => {
        document.documentElement.style.setProperty(style.cssvar, style.value);
      });

    });
  }

  setTheme(colors): void {
    let styles = this.defaultStyle;
    if (colors){
      styles = [
        { cssvar: '--ion-color-primary', value: colors.primary},
        { cssvar: '--ion-color-secondary', value: colors.secondary},
        { cssvar: '--ion-color-tertiary', value: colors.tertiary},
        { cssvar: '--logo', value: 'url(assets/img/logos/logo' + colors.name + '.png)'},
      ];
    }

    this.setColors(styles);
  }


}
