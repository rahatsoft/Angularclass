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
import { EditComponent } from './edit/edit.component';
import { ShowPatientComponent } from './component/show-patient/show-patient.component';
import { PatientSearchComponent } from './component/patient-search/patient-search.component';
import { InsertPatientComponent } from './component/insert-patient/insert-patient.component';

const routes: Routes = [
  // {path:'', component:HeaderComponent},
  {path:'', component:DeshboardComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:EmployeeComponent},
  {path:'success', component:SuccessComponent},
  {path:'edit', component:PatientComponent},
  {path:'fail', component:FailComponent},
  {path:'datashow', component:DatashowComponent},
  {path:'update', component:EditComponent},
  {path:'show_patient/:id/:password', component:ShowPatientComponent},
  {path:'searchPatient',component:PatientSearchComponent},
  {path:'InsertPatient', component:InsertPatientComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
