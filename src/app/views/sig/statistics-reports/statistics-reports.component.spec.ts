import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsReportsComponent } from './statistics-reports.component';

describe('StatisticsReportsComponent', () => {
  let component: StatisticsReportsComponent;
  let fixture: ComponentFixture<StatisticsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
