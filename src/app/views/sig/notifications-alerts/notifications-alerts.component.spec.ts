import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsAlertsComponent } from './notifications-alerts.component';

describe('NotificationsAlertsComponent', () => {
  let component: NotificationsAlertsComponent;
  let fixture: ComponentFixture<NotificationsAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
