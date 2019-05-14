import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Comments} from './comments';

@Injectable({
  providedIn: 'root'
})
export class MyTitleService {

  constructor(private http: HttpClient) {}

  getTableData(): Observable<Comments[]> {
    return this.http.get<Comments[]>('../assets/comments.json');
  }

}
