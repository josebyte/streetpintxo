import { Component, Input, OnInit } from '@angular/core';
import { Bar } from '../../bar.model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() bar: Bar;

  constructor() { }

  ngOnInit(): void {
  }

}
