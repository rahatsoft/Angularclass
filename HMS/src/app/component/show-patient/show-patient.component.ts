import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { AppointmentTable } from 'src/app/model/appointment-table';


@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  constructor(private myservice: PatientService, private route: ActivatedRoute) {
  }
  id: any;
  password:any;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.password = this.route.snapshot.params["password"];
    
    // this.myservice.getallstudents().subscribe((x) => { this.allstudent = x });
    this.myservice.getPatientByDoctorId(this.id,this.password).subscribe((x) => { this.allstudent = x });
  }
  allstudent: any = [];
}
