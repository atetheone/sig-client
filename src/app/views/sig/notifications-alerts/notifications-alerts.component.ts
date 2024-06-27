import { Component, OnInit } from '@angular/core';

interface Alert {
  message: string;
  type: string;
}

@Component({
  selector: 'app-notifications-alerts',
  templateUrl: './notifications-alerts.component.html',
  styleUrls: ['./notifications-alerts.component.scss']
})
export class NotificationsAlertsComponent implements OnInit {
  alertMessage: string = '';
  alertType: string = '';
  alerts: Alert[] = [];
  showNotification: boolean = false;
  notificationMessage: string = '';
  formSubmitted: boolean = false;

  ngOnInit(): void {
    // Load alerts from localStorage if available
    const storedAlerts = localStorage.getItem('alerts');
    if (storedAlerts) {
      this.alerts = JSON.parse(storedAlerts);
    }
  }

  addAlert(): void {
    this.formSubmitted = true;

    if (this.alertMessage && this.alertType) {
      this.alerts.push({ message: this.alertMessage, type: this.alertType });
      this.saveAlerts(); // Save alerts to localStorage
      this.alertMessage = '';
      this.alertType = '';
      this.showNotificationMessage('Alerte ajoutée avec succès.');
      this.formSubmitted = false; // Reset form submission flag
    }
  }

  removeAlert(alertToRemove: Alert): void {
    this.alerts = this.alerts.filter(alert => alert !== alertToRemove);
    this.saveAlerts(); // Save alerts to localStorage after removal
    this.showNotificationMessage('Alerte supprimée avec succès.');
  }

  private saveAlerts(): void {
    localStorage.setItem('alerts', JSON.stringify(this.alerts));
  }

  private showNotificationMessage(message: string): void {
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000); // Hide notification after 3 seconds
  }
}
