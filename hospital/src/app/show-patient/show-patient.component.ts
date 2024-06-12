import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { AppointmentTable } from '../models/appointment-table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  constructor(private myservice: AppointmentService, private route: ActivatedRoute) {
  }
  id: any;
  password:any;
  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];
    this.password = this.route.snapshot.params["password"];
    
    // this.myservice.getallstudents().subscribe((x) => { this.allstudent = x });
    this.myservice.getPatientByDoctorId(this.id,this.password).subscribe((x) => { this.allstudent = x });
  }
  // a_id: any;
  // p_name: any;
  // date: any;
  // phone: any;
  // problem: any;
  // dept_name: any;
  // email: any;
  // d_id: any;
  // appointment: any;

  allstudent: any = [];


  // save() {
  //   this.appointment = new AppointmentTable(this.a_id, this.p_name, this.date, this.phone, this.problem, this.dept_name, this.email, this.d_id);
  //   this.myservice.save(this.appointment).subscribe((x) => {this.allstudent = x });   
  // }

}
