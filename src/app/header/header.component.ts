import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  headerTitle = "City Blogs"
  headerText = "City blogs aim to help people discover cities."
  headerPhoto = "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ngOnInit(): void {
  }

}
