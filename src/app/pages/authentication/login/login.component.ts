import { Authentication } from './../../../models/authentication';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: Authentication = {} as Authentication;

  constructor(
    private nav: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.nav.navigate(['/dashboard']);
  }

}
