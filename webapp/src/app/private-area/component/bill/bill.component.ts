import {Component, Input, OnInit} from '@angular/core';
import { Bill } from "../../bill.model";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {

  @Input() bill: Bill;


  constructor() {
  }

  ngOnInit() {}

}
