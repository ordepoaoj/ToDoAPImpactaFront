import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../shared/task';
import { jobservice } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  onDeleteTask = new EventEmitter()

  constructor(private jobservice: jobservice) { }

  ngOnInit() {
  }

  remove(task: Task) {
    this.jobservice.delete(task._id).subscribe(() => {
      this.onDeleteTask.emit(task);
    });
  }

  onCompletedCheckChange(task: Task) {
    this.jobservice.save(task).subscribe(task => {
      console.log(task);
    });
  }
}
