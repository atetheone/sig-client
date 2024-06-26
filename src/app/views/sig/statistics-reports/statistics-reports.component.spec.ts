import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsReportsComponent } from './statistics-reports.component';

describe('StatisticsReportsComponent', () => {
  let component: StatisticsReportsComponent;
  let fixture: ComponentFixture<StatisticsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the reports list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Rapports de Statistiques');
  });
});
