import { Component, OnInit } from '@angular/core';
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
}
