import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
private urlapi ="http://localhost:8080/api/greed"
  constructor(private http: HttpClient) { }
  getGreeting(): Observable<string> {
    return this.http.get(this.urlapi, { responseType: 'text' });
}
}