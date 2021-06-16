import { Injectable } from '@angular/core';
import { DefaultData } from './default-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  postTasksForm(defaultData: DefaultData) {}
}
