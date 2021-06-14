import { Component, OnInit } from '@angular/core';
import { DefaultData } from '../data/default-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  defaultData: DefaultData = {
    task: 'Complete',
    taskText: '',
    priority: false,
    selectSomething: '1',
  };
  constructor() {}

  ngOnInit(): void {}
}
