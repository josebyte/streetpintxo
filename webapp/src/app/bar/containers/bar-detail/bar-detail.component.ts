import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BarService} from "../../services/bar.services";

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss'],
})
export class BarDetailComponent implements OnInit {

  barId;
  bar$;

  constructor(
      private route: ActivatedRoute,
      private barService: BarService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.barId = params.bar;
      this.bar$ = this.barService.getBar(params.bar);
    });
  }

}
