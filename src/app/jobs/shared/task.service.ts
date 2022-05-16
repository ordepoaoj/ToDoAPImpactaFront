import { environment } from './../../../environments/environment';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from './Jobs';

@Injectable({
  providedIn: 'root'
})
export class jobservice {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>(`${environment.api}/job`);
  }

  postJob(Jobs: any) {
    return this.http.post(`${environment.api}/job`, { Jobs });
  }

  finalize(id: string) {
    return this.http.post(`${environment.api}/jobs/finalize/`, { id });
  }
}
