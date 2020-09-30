import {Component, OnInit} from '@angular/core';
import { select, Store} from '@ngrx/store';
import * as fromCity from '../city/reducers/city.reducer';
import { Observable } from 'rxjs';
import { City } from '../city/city.model';
import { StylingService } from '../shared/services/styling.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
  };

  slides = [
    {
      id: 1,
      text: `Street pintxo is born to help bars to survive the pandemic by promoting
             serving pintxos on the street. Bars adhered to the program will offer a
             discount to the clients in exchange of being promoted in our website.`
    },
    {
      id: 2,
      text: `This is an ambitious project so we will offer this service per city, and we
             expect people from different countries to come and live this unique
             experience.`
    }
  ];

  cities$: Observable<City[]> = this.store.pipe(select(fromCity.getCities));

  constructor(
      private store: Store<fromCity.State>,
      private stylingService: StylingService
  ) {}

  ngOnInit(){
    this.stylingService.setTheme(null);
  }

}
