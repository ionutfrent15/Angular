import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: any;
  username: string;
  constructor() { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.username = localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.reload();
  }
}
