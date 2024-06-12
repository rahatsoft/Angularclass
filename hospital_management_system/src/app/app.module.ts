import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeserviceService } from './service/employeeservice.service';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { FailComponent } from './fail/fail.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patientcomponent/patient/patient.component';
import { DatashowComponent } from './datashow/datashow.component';
import { MarqueeComponent } from './component/marquee/marquee.component';
import { HomeComponent } from './component/home/home.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { CaroselComponent } from './carosel/carosel.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SuccessComponent,
    LoginComponent,
    FailComponent,
    HeaderComponent,
    PatientComponent,
    DatashowComponent,
    MarqueeComponent,
    HomeComponent,
    DeshboardComponent,
    CaroselComponent,
    FooterComponent,
    SidebarComponent,
    EditComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
