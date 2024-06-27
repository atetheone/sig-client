import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.scss']
})
export class CaseManagementComponent implements OnInit {
  patientName: string = '';
  caseDate: string = '';
  location: string = '';
  cases: any[] = [];

  patientNameError: boolean = false;
  caseDateError: boolean = false;
  locationError: boolean = false;

  showNotification: boolean = false;
  showDeleteNotification: boolean = false;

  ngOnInit(): void {
    this.loadCases();
  }

  saveCase(): void {
    this.patientNameError = !this.patientName;
    this.locationError = !this.location;
    
    // Vérification de la date du cas
    const today = new Date().toISOString().split('T')[0];
    if (!this.caseDate || this.caseDate > today) {
      this.caseDateError = true;
      return;
    } else {
      this.caseDateError = false;
    }

    const caseData = {
      patientName: this.patientName,
      caseDate: this.caseDate,
      location: this.location
    };

    let savedCases = JSON.parse(localStorage.getItem('savedCases') || '[]');
    savedCases.push(caseData);

    localStorage.setItem('savedCases', JSON.stringify(savedCases));

    this.patientName = '';
    this.caseDate = '';
    this.location = '';

    this.loadCases();

    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000); // Cacher la notification après 3 secondes
  }

  deleteCase(index: number): void {
    let savedCases = JSON.parse(localStorage.getItem('savedCases') || '[]');
    savedCases.splice(index, 1);
    localStorage.setItem('savedCases', JSON.stringify(savedCases));
    this.loadCases();

    this.showDeleteNotification = true;
    setTimeout(() => {
      this.showDeleteNotification = false;
    }, 3000); // Cacher la notification de suppression après 3 secondes
  }

  loadCases(): void {
    this.cases = JSON.parse(localStorage.getItem('savedCases') || '[]');
  }
}
