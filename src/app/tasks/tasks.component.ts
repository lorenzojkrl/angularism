import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { DefaultData } from '../data/default-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  defaultData: DefaultData = {
    task: 'Do X by Y  ',
    taskText: null,
    priority: false,
    selectSomething: null,
  };

  copiedDefaultData: DefaultData = { ...this.defaultData };

  // Give access to data service
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  // perform form validation here
  // private give access throughout the whole class
  onSubmit(form: NgForm) {
    console.log('In onSubmit: ', form.valid);

    if (form.valid) {
      // returns an observable
      // then subscribe to it
      this.dataService.postTasksForm(this.copiedDefaultData).subscribe(
        (result) => console.log('success: ', result),
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please, fix the error';
    }
  }
  postError = false;
  postErrorMessage = '';
  onHttpError(errorResponse: any): void {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
}
