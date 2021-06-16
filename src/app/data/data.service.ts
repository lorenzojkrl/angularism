import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultData } from './default-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  postTasksForm(defaultData: DefaultData): Observable<DefaultData> {
    // of function of rsjx creates a new observable
    // passing back defaultData
    return of(defaultData);
  }
}
