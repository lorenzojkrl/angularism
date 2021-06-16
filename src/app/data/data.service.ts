import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultData } from './default-data';

// dataService manages all HTTP access in the app

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // inject http client
  constructor(private http: HttpClient) {}

  postTasksForm(defaultData: DefaultData): Observable<any> {
    // of function of rsjx creates a new observable
    // passing back defaultData
    // return of(defaultData);

    // using http variable to post the form
    // HttpClient works with Observables so we can return the post request
    // See https://putsreq.com/gN8gga9FTCm8M7d5y9CI/inspect
    return this.http.post(
      'https://putsreq.com/gN8gga9FTCm8M7d5y9CI',
      defaultData
    );
  }
}
