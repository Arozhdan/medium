import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedReponseInterface } from '../types/get-feed-repsponse.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedReponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedReponseInterface>(fullUrl);
  }
}
