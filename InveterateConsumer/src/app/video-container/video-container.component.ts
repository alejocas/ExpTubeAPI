import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {

  @Input() public active: Boolean = false;
  @Input() public activeVideoUrl: String = "";
  constructor() { }

  ngOnInit() {
  }

}
