import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);

      // exibir uma msg amigavel aqui
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
