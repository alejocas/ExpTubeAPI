import { Component, OnInit } from '@angular/core';

import { YoutubeService } from "../services/youtube.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public searchBarQuery: String = "";
  public querySearched: String = "";
  public enableContent: Boolean = false;
  public resultingVideos: any = [];

  constructor(private youtubeConsumer: YoutubeService) { }

  ngOnInit() {
  }

  /**
   * This method is responsible for using the YouTube service to bring videos 
   * according to the search determined in the search bar.
   */
  searchVideos() {
    this.enableContent = true;
    this.youtubeConsumer.requestVideos(this.searchBarQuery).subscribe(response => {
      this.resultingVideos = response.items;
    });
    this.querySearched = this.searchBarQuery;
  }

}
