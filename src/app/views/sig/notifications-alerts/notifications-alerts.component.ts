import { Component } from '@angular/core';

interface Alert {
  message: string;
  type: string;
}

@Component({
  selector: 'app-notifications-alerts',
  templateUrl: './notifications-alerts.component.html',
  styleUrls: ['./notifications-alerts.component.scss']
})
export class NotificationsAlertsComponent {
  alertMessage: string = '';
  alertType: string = 'info';
  alerts: Alert[] = [];

  addAlert(): void {
    if (this.alertMessage && this.alertType) {
      this.alerts.push({ message: this.alertMessage, type: this.alertType });
      this.alertMessage = '';
      this.alertType = 'info';
    }
  }

  removeAlert(alertToRemove: Alert): void {
    this.alerts = this.alerts.filter(alert => alert !== alertToRemove);
  }
}
