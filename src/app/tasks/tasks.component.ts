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
    taskText: '',
    priority: false,
    selectSomething: '1',
  };

  copiedDefaultData: DefaultData = { ...this.defaultData };
  constructor() {}

  ngOnInit(): void {}
}
