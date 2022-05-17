import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    Email: '',
    Password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    try{
      const result = await this.accountService.login(this.login);
      console.log(result);

      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
