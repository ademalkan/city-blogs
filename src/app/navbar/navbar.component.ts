import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  navItems: any[] = [
    {cityName:'City Blogs', cityId: 0},
    {cityName:'About We', cityId: 1},
  ];
  ngOnInit(): void {
  }
  // ['Istanbul', 'New York', "Los Angeles", 'Barcelona', 'Osaka', 'Agra', 'Şangay', "Pattaya"]
}
