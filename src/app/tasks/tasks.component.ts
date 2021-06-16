import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor() {}

  ngOnInit(): void {}

  // perform form validation here
  onSubmit(form: NgForm) {
    console.log('In onSubmit: ', form.valid);
  }
}
