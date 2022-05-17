import { environment } from './../../../environments/environment';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }



  getAll() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    })
    return this.http.get<Task[]>(`${environment.api}/api/Jobs`, { headers: new HttpHeaders({ 'Authorization': `Bearer ${window.localStorage.getItem('token')}` }) });
  }

  getById(id: string) {
    return this.http.get<Task>(`${environment.api}/tasks/${id}`, { headers: new HttpHeaders({ 'Authorization': `${window.localStorage.getItem('token')}` }) });
  }

  save(task: Task) {
    const taskBody = {
      description: task.name,
      completed: task.inOperation
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`});
    let options = { headers: headers };

    const bodySend =
    {
      string: task.name
    }

    if (task.id) {
      return this.http.put<Task[]>(`${environment.api}/api/Jobs/${task.id}`, { headers: new HttpHeaders({ 'Authorization': `Bearer ${window.localStorage.getItem('token')}` }) });
    } else {
      return this.http.post<Task[]>(`${environment.api}/api/Jobs/${task.name}`,  null , options);
    }
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/tasksg/${id}`);
  }
}
