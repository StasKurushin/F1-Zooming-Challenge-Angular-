import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DriverListService {

  constructor(private http: HttpClient ) { }

  getDriverList(): Observable<any> {
    return this.http.get('http://ergast.com/api/f1/drivers.json');
  }

  getDriver(id: string): Observable<any> {
    return this.http.get(`http://ergast.com/api/f1/drivers/${id}.json`);
  }
}
