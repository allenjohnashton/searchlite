import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

// generated using "ng generate service search"
@Injectable()
export class SearchService {
  constructor(private http: Http) {}
  // docker dns allows you to access the service through it's service name
  search(term: string): Observable<{}> {
    return this.http
      .get(`${environment.backendUrl}/search?q=${term}`)
      .map(response => response.json());
  }
}
