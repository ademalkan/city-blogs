import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city.model';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  constructor(private http: HttpClient) { }
  citys: City[];
  filterText = ""
  show = 3
  ngOnInit() {
    this.http.get<City[]>("http://localhost:3000/city").subscribe(data => {
      this.citys = data
    })
  }
  showMore = false;
  increaseShow() {
    this.show += 3;
  }
}

