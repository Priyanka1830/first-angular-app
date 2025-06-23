import { Component , Input } from '@angular/core';
import { Task } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class Tasks {
  @Input({required: true})userid!: string;
  @Input() name?: string;
  tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'Master Angular',
      summary: 'learn all the basic and advanced features of angular & how to apply them',
      dueDate: '12-07-2025'
    },
    {
      id:'t2',
      userId:'u3',
      title:'Build first Prototype',
      summary: 'Build a first prototype of online shop website',
      dueDate: '31-07-2025'
    },
    {
      id:'t3',
      userId:'u3',
      title:'Prepare issue template',
      summary: 'Prepare and describe issue template which will help with project management',
      dueDate: '05-08-2025'
    },
  ];

  get selectedUsertasks() {
    return this.tasks.filter((task) => task.userId ===  this.userid);
    }
}
