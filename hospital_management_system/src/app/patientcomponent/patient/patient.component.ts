import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private myservice:EmployeeserviceService, private route:ActivatedRoute) {
    this.updatebyid=this.route.snapshot.params["response"];
    
   }
updatebyid:any
  ngOnInit(): void {
    
  }
  id: any;
  data:any;
  emp_id: any;
  emp_name: any;
  emp_email: any;
  emp_password: any;
  allData: any;
  scearchbyid() {
    this.myservice.scearchbyid(this.id).subscribe((x)=>{
      this.data=x;
  this.emp_id=this.data.emp_id;
  this.emp_name=this.data.emp_name;
  this.emp_email=this.data.emp_email;
  this.emp_password=this.data.emp_password;
    });
   


    
  }


  update() {
    // this.allData = new Employee(this.emp_id, this.emp_name, this.emp_email, this.emp_password);
    // this.myservice.update(this.allData).subscribe();
    this.allData = new Employee(this.emp_id, this.emp_name, this.emp_email, this.emp_password);
    this.myservice.update(this.allData).subscribe(() => { });
    alert ("success")
  }

}
