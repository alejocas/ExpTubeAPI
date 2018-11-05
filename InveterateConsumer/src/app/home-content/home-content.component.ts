import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  @Input() public active: Boolean;
  @Input() public collectionOfVideos: any;
  @Input() public videoSearched: String;
  public activeTitle: String;
  public activeDescription: String;
  public activeVideoUrl: String;
  public activeVideoContainer: Boolean;

  constructor() { }

  ngOnInit() {
  }

  playVideo(id, title, description) {
    this.activeTitle = title;
    this.activeDescription = description;
    this.activeVideoUrl = `http://www.youtube.com/embed/${id}?enablejsapi=1`;
    console.log(this.activeVideoUrl);
  }
}
