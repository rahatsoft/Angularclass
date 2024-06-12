import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { FailComponent } from './fail/fail.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patientcomponent/patient/patient.component';
import { DatashowComponent } from './datashow/datashow.component';
import { DeshboardComponent } from './deshboard/deshboard.component';

const routes: Routes = [
  // {path:'', component:HeaderComponent},
  {path:'', component:DeshboardComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:EmployeeComponent},
  {path:'success', component:SuccessComponent},
  {path:'patient', component:PatientComponent},
  {path:'fail', component:FailComponent},
  {path:'datashow', component:DatashowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
