import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BarActions} from '../../actions';
import {Store} from '@ngrx/store';
import * as fromBar from '../../reducers/bar.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    //date: new FormControl(''),
    veganFriendly: new FormControl(false),
  });

  constructor(
      private barStore: Store<fromBar.State>
  ) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      console.log(this.form.value);
    });
  }

  searchBars(){
    this.barStore.dispatch(BarActions.searchBars({pag: 1, filters: this.form.value}));
  }

}
