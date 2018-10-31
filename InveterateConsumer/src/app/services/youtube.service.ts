import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl: String = 'https://www.googleapis.com/youtube/v3/search'
  private maxNumberOfVideos: String = "6";
  private typeOfContentSearched: String = "video";
  private youtubeApiKey: String = 'AIzaSyA5y_11RDLLjrQMOzWDm6ykqD4_oGRlrHs';

  constructor(private http: HttpClient) { }

  requestVideos(query: String): Observable<any> {
    const requestUri = `${this.apiUrl}/part=snippet&maxResults=${this.maxNumberOfVideos}&q=${query}&type=${this.typeOfContentSearched}&key=${this.youtubeApiKey}`;
    return this.http.get<any>(requestUri);
  }
}
