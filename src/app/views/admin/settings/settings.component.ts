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
  formSubmitted: boolean = false;
  showNotification: boolean = false;
  notificationMessage: string = '';

  ngOnInit(): void {
    // Fetch initial user settings or perform any initialization
  }

  saveSettings(): void {
    this.formSubmitted = true;

    if (this.user.username && this.user.email && this.isValidEmail(this.user.email)) {
      // Logic to save settings (e.g., call a service)
      console.log('Saving settings...', this.user);
      // Simulating success notification
      this.showNotificationMessage('Paramètres enregistrés avec succès.');
    }
  }

  private showNotificationMessage(message: string): void {
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000); // Hide notification after 3 seconds
  }

  isValidEmail(email: string): boolean {
    // Basic email validation
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return pattern.test(email);
  }
}
