import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

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
  public activeVideoUrl: string;
  public enableVideoContainer: Boolean;
  public sanitizedUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  playVideo(id, title, description) {
    this.activeTitle = title;
    this.activeDescription = description;
    this.activeVideoUrl = `http://www.youtube.com/embed/${id}?enablejsapi=1`;
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activeVideoUrl);
    this.enableVideoContainer = true;
    console.log(`Trying to play: ${title}`)
  }
}
