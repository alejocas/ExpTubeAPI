import { Component, OnInit, Input } from '@angular/core';

import { NavbarComponent, searchQuery } from "../navbar/navbar.component";

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  @Input() public videoSearched: String = searchQuery

  constructor() { }

  ngOnInit() {
  }

}
