import { jobservice } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jobservice: jobservice
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.jobservice.getById(id).subscribe(task => {
        this.task = task;
        this.title = 'Alterando tarefa';
      });
    }
  }

  onSubmit() {
    this.jobservice.save(this.task).subscribe(task => {
      console.log(task);
      this.router.navigate(['']);
    });
  }
}
