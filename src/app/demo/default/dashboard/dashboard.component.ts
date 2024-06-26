// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import tableData from 'src/fake-data/default-data.json';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MonthlyBarChartComponent } from './monthly-bar-chart/monthly-bar-chart.component';
import { IncomeOverviewChartComponent } from './income-overview-chart/income-overview-chart.component';
import { AnalyticsChartComponent } from './analytics-chart/analytics-chart.component';
import { SalesReportChartComponent } from './sales-report-chart/sales-report-chart.component';

// icons
import { IconService } from '@ant-design/icons-angular';
import { FallOutline, GiftOutline, MessageOutline, RiseOutline, SettingOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MonthlyBarChartComponent,
    IncomeOverviewChartComponent,
    AnalyticsChartComponent,
    SalesReportChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DefaultComponent {
  // constructor
  constructor(private iconService: IconService) {
    this.iconService.addIcon(...[RiseOutline, FallOutline, SettingOutline, GiftOutline, MessageOutline]);
  }

  recentOrder = tableData;

  AnalyticEcommerce = [
    {
      title: 'Total des Cas',
      amount: '1,245',
      background: 'bg-light-success',
      border: 'border-success',
      icon: 'rise',
      percentage: '+4.5%',
      color: 'text-success',
      number: '45 cas'
    },
    {
      title: 'Nouveaux Cas',
      amount: '34',
      background: 'bg-light-danger',
      border: 'border-danger',
      icon: 'arrow_upward',
      percentage: '+1.2%',
      color: 'text-danger',
      number: '4 cas'
    },
    {
      title: 'Cas Actifs',
      amount: '123',
      background: 'bg-light-warning',
      border: 'border-warning',
      icon: 'warning',
      percentage: '-2.3%',
      color: 'text-warning',
      number: '3 cas'
    },
    {
      title: 'Cas Résolus',
      amount: '1,112',
      background: 'bg-light-info',
      border: 'border-info',
      icon: 'check_circle',
      percentage: '+5.6%',
      color: 'text-info',
      number: '59 cas'
    }
  ];

  transaction = [
    {
      background: 'text-success bg-light-success',
      icon: 'gift',
      title: 'Donation reçue',
      time: 'Aujourd\'hui, 2:00 AM',
      amount: '+ $500',
      percentage: '78%'
    },
    {
      background: 'text-primary bg-light-primary',
      icon: 'message',
      title: 'Téléchargement de rapport',
      time: '5 août, 1:45 PM',
      amount: '15 rapports',
      percentage: '8%'
    },
    {
      background: 'text-danger bg-light-danger',
      icon: 'setting',
      title: 'Alerte de sécurité',
      time: 'Il y a 7 heures',
      amount: '',
      percentage: '16%'
    }
  ];

  recentReports = [
    {
      date: '2024-06-15',
      title: 'Rapport Hebdomadaire',
      statusType: 'badge-success',
      status: 'Terminé'
    },
    {
      date: '2024-06-08',
      title: 'Rapport Mensuel',
      statusType: 'badge-warning',
      status: 'En cours'
    },
    {
      date: '2024-05-30',
      title: 'Rapport Trimestriel',
      statusType: 'badge-danger',
      status: 'En retard'
    }
  ];
}
