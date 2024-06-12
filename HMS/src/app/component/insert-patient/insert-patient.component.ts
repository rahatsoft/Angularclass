import { Component, OnInit } from '@angular/core';
import { AppointmentTable } from 'src/app/model/appointment-table';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-insert-patient',
  templateUrl: './insert-patient.component.html',
  styleUrls: ['./insert-patient.component.css']
})
export class InsertPatientComponent implements OnInit {

  constructor(private myservice:PatientService) { }

  ngOnInit(): void {
  }
  a_id:any;
  p_name:any;
  date:any;
  phone:any;
  problem:any;
  dept_name:any;
  email:any;
  d_id:any;
  appointment:any;


  save(){
    this.appointment=new AppointmentTable(this.a_id,this.p_name,this.date,this.phone,this.problem,this.dept_name,this.email,this.d_id);
    this.myservice.save(this.appointment).subscribe(()=>{
    });
  }

}
