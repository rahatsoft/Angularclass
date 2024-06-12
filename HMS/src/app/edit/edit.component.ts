import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  ngOnInit(): void {
  }
  id: any;
  
  emp_id: any;
  emp_name: any;
  emp_email: any;
  emp_password: any;
  allData: any;
  

  data:any;
  constructor(private router:Router, private myservice: EmployeeserviceService) { 
    this.data=this.router.getCurrentNavigation()?.extras.state?.["response"];
   
   
  this.emp_id=this.data.emp_id;
  this.emp_name=this.data.emp_name;
  this.emp_email=this.data.emp_email;
  this.emp_password=this.data.emp_password;



  }



 edit() {
    // this.allData = new Employee(this.emp_id, this.emp_name, this.emp_email, this.emp_password);
    // this.myservice.update(this.allData).subscribe();
    this.allData = new Employee(this.emp_id, this.emp_name, this.emp_email, this.emp_password);
    this.myservice.update(this.allData).subscribe(() => { });
    alert ("Are you sure you want to update ?");
    this.router.navigateByUrl("/datashow");

  }


}
