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

  /**
   * This method is responsible for enabling the component where the video 
   * will be displayed and for that it makes use of the video ID to build 
   * the URL that will bring the video from the Google servers
   * @param id Video id
   * @param title Video title
   * @param description Video description
   */
  playVideo(id, title, description) {
    this.activeTitle = title;
    this.activeDescription = description;
    this.activeVideoUrl = `http://www.youtube.com/embed/${id}?enablejsapi=1`;
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activeVideoUrl);
    this.enableVideoContainer = true;
    console.log(`Trying to play: ${title}`)
  }
}
