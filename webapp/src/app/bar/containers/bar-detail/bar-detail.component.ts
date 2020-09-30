import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BarService} from "../../services/bar.services";
import {PrivateAreaServices} from '../../../private-area/services/private-area.services';
import {Bar} from '../../bar.model';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss'],
})
export class BarDetailComponent implements OnInit {

  barId: number;
  bar: Bar;

  bar$;

  pintxos = [1, 2]; // todo: hardcoded available pintxos

  constructor(
      private route: ActivatedRoute,
      private barService: BarService,
      private privateAreaServices: PrivateAreaServices
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.barId = params.bar;
      this.bar$ = this.barService.getBar(params.bar);
      this.bar$.subscribe(bar => {
        this.bar = bar;
      });
    });
  }

  buy(){
    this.privateAreaServices.createBill(
        {
          name: this.bar.name,
          subtotal: 1.25,
          tax: 0.25,
          total: 1.5
        } // todo: mocked bill creation
    );
  }

}
