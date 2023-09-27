import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{
 InsertedSuccess,
 UniqueConstraintError,
  Read,
  Academic
} from './academic';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AcademicService {

  constructor(private http: HttpClient) { }
  headers=new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer'+localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';
  Getflower(p_type: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}plants/Read${p_type}`);
  }
  Insert(
    Details:Academic
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'events/Insert',
      Details,
      { headers: this.headers }
    );

  }
  Read2(e_type: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/Read${e_type}`);
  }
}
