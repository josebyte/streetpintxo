import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { City } from '../../../city/city.model';
import { select, Store } from '@ngrx/store';
import * as fromCity from '../../../city/reducers/city.reducer';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cities$: Observable<City[]> = this.cityStore.pipe(select(fromCity.getCities));
  title = 'StreetPintxo';
  LANGS = ['en', 'es'];

  constructor(
    private cityStore: Store<fromCity.State>,
    private menu: MenuController,
    public authService: AuthService,
    public translate: TranslateService,
  ) {
    translate.addLangs(this.LANGS);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
  }

  changeLang(lang){
    this.translate.use(lang);
  }

  closeMenu(){
    this.menu.close();
  }

  logout(): void {
    this.authService.logout();
  }
}
