import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  URL: string = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<any> {
    return this.httpClient.get<any>(this.URL);
  }
}
