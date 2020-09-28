import { Component, OnInit } from '@angular/core';
import { Bar } from '../../bar.model';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromBar from '../../reducers/bar.reducer';
import { BarActions } from '../../actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.scss'],
})
export class BarPageComponent implements OnInit {
  currentCity: string;
  currentPag = 1;

  bars$: Observable<Bar[]> = this.barStore.pipe(select(fromBar.getResults));
  totalRows$ = this.barStore.pipe(select(fromBar.getTotalRow));
  form$ = this.barStore.pipe(select(fromBar.getForm));

  constructor(
      private route: ActivatedRoute,
      private barStore: Store<fromBar.State>
  ) {}

  ngOnInit(
  ) {
    this.route.params.subscribe(params => {
      this.currentCity = params.city;
      this.barStore.dispatch(BarActions.searchBars({pag: this.currentPag}));
    });
  }

  paginateTo(pag){
    this.barStore.dispatch(BarActions.searchBars({pag}));
    this.currentPag = pag;
  }

}
