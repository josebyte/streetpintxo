import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
/*
  form: FormGroup = new FormGroup({
    bar: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required]),
  });
*/

  constructor() {
  }

  ngOnInit() {}

  searchBars(){

  }

}
