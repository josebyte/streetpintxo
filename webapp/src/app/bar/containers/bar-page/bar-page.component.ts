import { Component, OnInit } from '@angular/core';
import { Bar } from '../../bar.model';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromBar from '../../reducers/bar.reducer';
import { BarActions } from '../../actions';
import { Observable } from 'rxjs';
import { StylingService } from '../../../shared/services/styling.service';
import { City } from '../../../city/city.model';
import * as fromCity from '../../../city/reducers/city.reducer';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.scss'],
})
export class BarPageComponent implements OnInit {
  currentCity: string;
  currentPag = 1;
  filters;
  pageParams = {pag: 1, limit: 10};

  city$: Observable<City[]> = this.cityStore.pipe(select(fromCity.getCities));
  bars$: Observable<Bar[]> = this.barStore.pipe(select(fromBar.getResults));
  totalRows$ = this.barStore.pipe(select(fromBar.getTotalRow));

  constructor(
      private route: ActivatedRoute,
      private barStore: Store<fromBar.State>,
      private stylingService: StylingService,
      private cityStore: Store<fromCity.State>
  ) {}

  ngOnInit(
  ) {
    this.route.params.subscribe(params => {
      this.currentCity = params.city;

      this.city$.subscribe(cities => {
        const currentCity = cities.find(city => city.name === this.currentCity);
        this.setCustomStyles(currentCity);
        this.search();
      });

    });
  }

  getFilters(event){
    this.filters = event;
    this.search();
  }

  search(){
    const searchData = {
      ...this.pageParams,
      filters: {
        ...this.filters,
        city: this.currentCity
      }
    };
    this.barStore.dispatch(BarActions.searchBars(searchData));
  }

  paginateTo(event){
    this.pageParams = event;
    this.currentPag = event.pag;
    this.search();
  }

  setCustomStyles(city){
    this.stylingService.setTheme(city);
  }

}
