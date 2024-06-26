// user-management.component.ts
import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  users: User[] = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' }
  ];

  newUser: User = { name: '', email: '' };

  addUser() {
    this.users.push({ ...this.newUser });
    this.newUser = { name: '', email: '' }; // Clear form fields after adding user
  }
}
