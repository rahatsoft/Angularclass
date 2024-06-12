import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/login';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 

  ngOnInit(): void {
  }
  
  
  id: any;
 name: any;
  email: any;
 password: any;
 role: any;
 image: any;
  allData: any;
  

  data:any;
  constructor(private router:Router, private myservice:ServiceService) { 
    this.data=this.router.getCurrentNavigation()?.extras.state?.["response"];
   
    this.myservice.show().subscribe((x) => {this.data=x });

  this.id=this.data.id;
  this.name=this.data.name;
  this.email=this.data.email;
  this.password=this.data.password;
  this.role=this.data.role;
  this.image=this.data.image;



  }



//  edit() {
//     // this.allData = new Employee(this.id, this.emp_name, this.emp_email, this.emp_password);
//     // this.myservice.update(this.allData).subscribe();
//     // this.allData = new Login(this.id, this.name, this.email, this.password,this.role,this.image);
//     // this.myservice.update(this.allData).subscribe(() => { });
//     // alert ("Are you sure you want to update ?");
//     // this.router.navigateByUrl("/datashow");

//   }


}
