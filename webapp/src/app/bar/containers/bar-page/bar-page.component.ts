import { Component, OnInit } from '@angular/core';
import { Bar } from "../../bar.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.scss'],
})
export class BarPageComponent implements OnInit {

  currentCity: string;

  bars: Bar[] = [
    { name: 'Antzoki', image: '1', desc: 'Cafe bar emblemático junto a Jardines de Albia', address: 'Done Bikendi Kalea, 2', city: 'Bilbao', veganFriendly: true, date: new Date() },
    { name: 'Cafe-Iruña', image: '2', desc: "Bar dsc", address: 'Colón de Larreátegui Kalea, 13', city: 'Bilbao', veganFriendly: false, date: new Date() },
    { name: 'El Globo', image: '3', desc: "Bar dsc3", address: 'Diputazio Kalea, 8', city: 'Bilbao', veganFriendly: true, date: new Date() },
    { name: 'El Globo', image: '3', desc: "Bar dsc3", address: 'Diputazio Kalea, 8', city: 'Bilbao', veganFriendly: true, date: new Date() },
    { name: 'El Globo', image: '3', desc: "Bar dsc3", address: 'Diputazio Kalea, 8', city: 'Bilbao', veganFriendly: true, date: new Date() },
    { name: 'El Globo', image: '3', desc: "Bar dsc3", address: 'Diputazio Kalea, 8', city: 'Bilbao', veganFriendly: true, date: new Date() },
    { name: 'El Globo', image: '3', desc: "Bar dsc3", address: 'Diputazio Kalea, 8', city: 'Bilbao', veganFriendly: true, date: new Date() },
  ] // todo: remove mock and use api

  constructor(private route: ActivatedRoute) {}

  ngOnInit(
  ) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.currentCity = params.city;
    });
  }

}
