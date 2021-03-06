import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/auth.service';
import { MessagingService } from "./messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  
  title = 'Triathlon club';

  navLinks = [
    { path: '/events', label: 'Events' },
    { path: '/profile', label: 'Profile' }
  ]

  constructor(private auth: AuthService, private msgService: MessagingService) {}
  
  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
  }

}