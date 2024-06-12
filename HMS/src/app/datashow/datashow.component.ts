import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-datashow',
  templateUrl: './datashow.component.html',
  styleUrls: ['./datashow.component.css']
})
export class DatashowComponent implements OnInit {
data:any
  constructor(private myservice:EmployeeserviceService, private router:Router) {
    this.myservice.show().subscribe((x) => {this.data=x });
    this.data=this.router.getCurrentNavigation()?.extras.state?.["responce"];
   }

  ngOnInit(): void {
  }
  
 
  emp_id: any;

  getData: any;
  

  edit(v:any) {
    this.emp_id=v;
    this.myservice.scearchbyid(this.emp_id).subscribe((x) => {
      this.getData = x
      this.router.navigateByUrl("update", { state: { response: this.getData } });
    });

  }


delete(id:any){
  if(confirm("are you sure")){
    console.log(
      this.myservice.delete(id).subscribe(()=>{
        alert("deleted");
        // this.myservice.show().subscribe((x)=>{
        //   this.data=x;
        //    this.router.navigateByUrl("/datashow",{state:{Response:this.data}});

        this.myservice.show().subscribe((x)=>{
            this.data=x;
          this.router.navigateByUrl("/datashow");


        })


      })
    )
  }
}



 


}

