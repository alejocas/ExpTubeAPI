import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl: String = 'https://www.googleapis.com/youtube/v3/search';
  private maxNumberOfVideos: String = "6";
  private typeOfContentSearched: String = "video";
  private youtubeApiKey: String = 'AIzaSyA5y_11RDLLjrQMOzWDm6ykqD4_oGRlrHs';

  constructor(private http: HttpClient) { }

  /**
   * This method calls a GET to a YouTube URL that is enabled by a key to bring a finite number of videos.
   * @param query Search query
   */
  requestVideos(query: String): Observable<any> {
    const requestUri = `${this.apiUrl}?part=snippet&maxResults=${this.maxNumberOfVideos}&q=${query}&type=${this.typeOfContentSearched}&key=${this.youtubeApiKey}`;
    return this.http.get<any>(requestUri);
  }
}