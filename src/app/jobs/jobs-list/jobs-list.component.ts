import { jobservice } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  jobs: Task[] = [];

  constructor(private jobservice: jobservice) { }

  ngOnInit() {
    this.jobservice.getAll().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  onTaskDeleted(task: Task) {
    if (task) {
      const index = this.jobs.findIndex((taskItem) => taskItem._id == task._id);
      this.jobs.splice(index, 1);
    }
  }
}
