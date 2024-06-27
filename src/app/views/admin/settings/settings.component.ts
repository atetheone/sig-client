// settings.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user = {
    username: '',
    email: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Fetch initial user settings or perform any initialization
  }

  saveSettings(): void {
    // Implement logic to save user settings
    console.log('Saving settings...', this.user);
    // Example: Call a service to save data
  }
}
