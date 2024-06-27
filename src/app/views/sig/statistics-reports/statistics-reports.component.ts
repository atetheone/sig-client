import { Component } from '@angular/core';

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
export class StatisticsReportsComponent {
  reports: Report[] = [
    {
      title: 'Rapport Mensuel - Janvier 2024',
      date: '2024-01-31',
      description: 'Analyse des cas signalés en janvier.'
    },
    // Ajoutez d'autres rapports ici selon le même modèle
  ];

  constructor() {}

  addReport(title: string, date: string, description: string): void {
    this.reports.push({ title, date, description });
  }
}
