import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Covid19Service {
  constructor(private http: HttpClient) {}

  getListWorldWide() {
    return this.http.get('http://localhost/jhu-edu/brief');
    // return this.http.get('http://localhost/jhu-edu/latest?onlyCountries=true');
  }
}
