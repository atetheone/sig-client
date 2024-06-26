// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CaseManagementComponent } from './views/sig/case-management/case-management.component';

@NgModule({
  declarations: [AppComponent, CaseManagementComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
