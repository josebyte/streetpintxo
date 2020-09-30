import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() pag: number;
  @Input() total: number;
  @Input() limit = 10;
  @Output() response = new EventEmitter<{ pag: number, limit: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  paginateTo(pag) {
    this.response.emit({pag, limit: this.limit});
  }

}
