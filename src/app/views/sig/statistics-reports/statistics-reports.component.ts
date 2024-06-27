import { Component, OnInit } from '@angular/core';

interface Report {
  title: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-statistics-reports',
  templateUrl: './statistics-reports.component.html',
  styleUrls: ['./statistics-reports.component.scss']
})
export class StatisticsReportsComponent implements OnInit {
  reports: Report[] = [];

  titleError: boolean = false;
  dateError: boolean = false;
  descriptionError: boolean = false;

  showAddNotification: boolean = false;
  showDeleteNotification: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const savedReports = localStorage.getItem('reports');
    if (savedReports) {
      this.reports = JSON.parse(savedReports);
    }
  }

  addReport(title: string, date: string, description: string): void {
    this.titleError = !title;
    this.dateError = !date;
    this.descriptionError = !description;

    // Vérification de la date du rapport
    const today = new Date().toISOString().split('T')[0];
    if (date > today) {
      this.dateError = true;
      return;
    } else {
      this.dateError = false;
    }

    if (this.titleError || this.dateError || this.descriptionError) {
      return;
    }

    const newReport = { title, date, description };
    this.reports.push(newReport);
    this.saveReports();

    this.showAddNotification = true;
    setTimeout(() => {
      this.showAddNotification = false;
    }, 3000); // Masquer la notification après 3 secondes

    // Réinitialiser les erreurs une fois le rapport ajouté avec succès
    this.resetErrors();
  }

  deleteReport(index: number): void {
    this.reports.splice(index, 1);
    this.saveReports();

    this.showDeleteNotification = true;
    setTimeout(() => {
      this.showDeleteNotification = false;
    }, 3000); // Masquer la notification après 3 secondes
  }

  private saveReports(): void {
    localStorage.setItem('reports', JSON.stringify(this.reports));
  }

  private resetErrors(): void {
    this.titleError = false;
    this.dateError = false;
    this.descriptionError = false;
  }
}
