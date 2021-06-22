import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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
    completed: false,
  };

  todosArray: DefaultData[];
  optionTypes: Observable<string[]>;
  copiedDefaultData: DefaultData = { ...this.defaultData };

  // Give access to data service
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.optionTypes = this.dataService.getOptionTypes();
    this.todosArray = [
      {
        task: 'Task1',
        taskText: 'TBD',
        priority: false,
        selectSomething: '1',
        completed: false,
      },
      {
        task: 'Task2',
        taskText: 'TBD',
        priority: false,
        selectSomething: '1',
        completed: false,
      },
      {
        task: 'Task3',
        taskText: 'TBD',
        priority: false,
        selectSomething: '1',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todosArray.map((value, index) => {
      if (index === id) value.completed = !value.completed;
      return value;
    });
  }

  onDelete(id: number) {
    this.todosArray = this.todosArray.filter((value, index) => index !== id);
  }

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
