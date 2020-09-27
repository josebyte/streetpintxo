import { Component } from '@angular/core';
import { select, Store} from "@ngrx/store";
import * as fromCity from "../city/reducers/city.reducer";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  cities$ = this.store.pipe(select(fromCity.getCities));

  constructor(
      private store: Store<fromCity.State>
  ) {}

}
