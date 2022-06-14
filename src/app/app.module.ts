import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponentComponent } from './pages/main-page-component/main-page-component.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddHabitButtonComponent } from './modules/layout/add-habit-button/add-habit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponentComponent,
    ProfilePageComponent,
    AddHabitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
