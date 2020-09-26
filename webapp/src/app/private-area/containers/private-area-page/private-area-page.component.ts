import { Component, OnInit } from '@angular/core';
import {Bill} from "../../bill.model";

@Component({
  selector: 'app-private-area-page',
  templateUrl: './private-area-page.component.html',
  styleUrls: ['./private-area-page.component.scss'],
})
export class PrivateAreaPageComponent implements OnInit {

  bills: Bill[] = [
    { id: 1, bar: 'Antzoki', num: 3145, createdDate: new Date(), products: [], subtotal: 44.21, tax: 3.09, total: 47.3 },
    { id: 2, bar: 'Cafe-Iruá', num: 3146, createdDate: new Date(), products: [], subtotal: 44.21, tax: 3.09, total: 47.3 },
    { id: 3, bar: 'El Globo',  num: 3147, createdDate: new Date(), products: [], subtotal: 44.21, tax: 3.09, total: 47.3 },
    { id: 4, bar: 'Lepanto', num: 3148, createdDate: new Date(), products: [], subtotal: 44.21, tax: 3.09, total: 47.3 },
    { id: 5, bar: 'La viña del ensanche', num: 3149, createdDate: new Date(), products: [], subtotal: 44.21, tax: 3.09, total: 47.3 },
  ];

  columns = [
    { name: 'date' },
    { name: 'num' },
    { name: 'bar' },
    { name: 'subtotal' },
    { name: 'tax' },
    { name: 'total' },
  ];



  constructor() { }

  ngOnInit() {}

}
