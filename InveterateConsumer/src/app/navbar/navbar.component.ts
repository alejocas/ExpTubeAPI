import { Component, OnInit } from '@angular/core';

import { YoutubeService } from "../services/youtube.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public searchQuery: String = "";
  public activeSearch: Boolean = false;
  public resultingVideos: any = [];

  constructor(private youtubeConsumer: YoutubeService) { }

  ngOnInit() {
  }

  searchVideos() {
    this.activeSearch = true;
    this.youtubeConsumer.requestVideos(this.searchQuery).subscribe( response =>{
      this.resultingVideos = response.items
    });
  }

}
