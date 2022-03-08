import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {
  title = 'Sign In';
  displayMode = 'signin';
  userName = '';
  password = '';
  firstName = '';
  lastName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onRegister() {
    this.title = 'Create New Member Account';
    this.displayMode = 'register'
  }

  onSignIn() {

  }

  onCreate() {

  }
}
