import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  navItems: any[] = [
    {cityName:'City Blogs', router: "header"},
    {cityName:'About We', router: 'about'},
  ];
  ngOnInit(): void {
  }
  // ['Istanbul', 'New York', "Los Angeles", 'Barcelona', 'Osaka', 'Agra', 'Şangay', "Pattaya"]
}
