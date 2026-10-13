import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DriverApi {
  private apiUrl = 'https://6ace0909f338359cf1c2eeb8.mockapi.io/api/Angularbatch3/';
  constructor(private http: HttpClient) {}

  getDrivers() {
    return this.http.get(this.apiUrl);
  }
}
