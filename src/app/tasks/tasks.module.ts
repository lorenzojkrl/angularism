import { NgModule } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms'; // to use ngForm
import { CommonModule } from '@angular/common'; // necessary to pipe json

import { LogPipe } from './log.pipe';

@NgModule({
  declarations: [TasksComponent, LogPipe],
  imports: [TasksRoutingModule, FormsModule, CommonModule],
})
export class TasksModule {}
