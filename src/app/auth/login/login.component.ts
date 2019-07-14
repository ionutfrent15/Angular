import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from '../auth.service';
import {error} from '@angular/compiler/src/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  token: any;
  constructor(private authService: AuthService, private location: Location) { }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.token = localStorage.getItem('token');
    localStorage.setItem('user', this.username);
  }
}
