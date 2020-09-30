import { Component, OnInit } from '@angular/core';
import { Bill } from '../../bill.model';
import { StylingService } from '../../../shared/services/styling.service';
import { PrivateAreaServices } from '../../services/private-area.services';

@Component({
  selector: 'app-private-area-page',
  templateUrl: './private-area-page.component.html',
  styleUrls: ['./private-area-page.component.scss'],
})
export class PrivateAreaPageComponent implements OnInit {

  bills: Bill[];

  constructor(
      private stylingService: StylingService,
      private privateAreaServices: PrivateAreaServices
  ) { }

  ngOnInit() {
    this.stylingService.setTheme(null);
    this.privateAreaServices.loadBills().subscribe( (bills) => {
      this.bills = bills;
    });
  }

  deleteBill(id){
    console.log("id a borrar" +id)
    this.privateAreaServices.deleteBill(id);
    this.bills = this.bills.filter(bill => bill.id !== id); // optimistic delete

    console.log(this.bills)
  }

}
