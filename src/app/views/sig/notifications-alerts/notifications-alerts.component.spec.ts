import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NotificationsAlertsComponent } from './notifications-alerts.component';

describe('NotificationsAlertsComponent', () => {
  let component: NotificationsAlertsComponent;
  let fixture: ComponentFixture<NotificationsAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsAlertsComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add and remove alerts', () => {
    component.alertMessage = 'Test Alert';
    component.alertType = 'info';
    component.addAlert();
    expect(component.alerts.length).toBe(1);
    component.removeAlert(component.alerts[0]);
    expect(component.alerts.length).toBe(0);
  });
});
