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

  ngOnInit(): void {
    this.loadCases();
  }

  saveCase(): void {
    const caseData = {
      patientName: this.patientName,
      caseDate: this.caseDate,
      location: this.location
    };

    // Charger les cas existants depuis le localStorage
    let savedCases = JSON.parse(localStorage.getItem('savedCases') || '[]');
    savedCases.push(caseData);

    // Convertir le tableau en chaîne JSON et le stocker dans le localStorage
    localStorage.setItem('savedCases', JSON.stringify(savedCases));

    // Réinitialiser les champs du formulaire après sauvegarde
    this.patientName = '';
    this.caseDate = '';
    this.location = '';

    // Recharger les cas pour afficher la mise à jour
    this.loadCases();

    alert('Cas enregistré localement.');
  }

  loadCases(): void {
    this.cases = JSON.parse(localStorage.getItem('savedCases') || '[]');
  }
}
