import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  newUser: User = { name: '', email: '' };
  formSubmitted: boolean = false;
  showNotification: boolean = false;
  notificationMessage: string = '';

  ngOnInit(): void {
    // Load users from localStorage if available
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  addUser(): void {
    this.formSubmitted = true;

    if (this.newUser.name && this.newUser.email && this.isValidEmail(this.newUser.email)) {
      this.users.push({ ...this.newUser });
      this.saveUsers();
      this.newUser = { name: '', email: '' }; // Clear form fields after adding user
      this.showNotificationMessage('Utilisateur ajouté avec succès.');
      this.formSubmitted = false; // Reset form submission flag
    }
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    this.saveUsers();
    this.showNotificationMessage('Utilisateur supprimé avec succès.');
  }

  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
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
