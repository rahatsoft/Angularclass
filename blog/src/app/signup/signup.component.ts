import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Login } from '../Model/login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private myservice:ServiceService ) {

   
   
   }
id: any;
  name: any;
  email: any;
  password: any;
  role: any;
  iamge:any;
  file:any;
  ngOnInit(): void {
    
  }
  postData:any;





  insert() {
    this.postData= new Login(this.id,this.name,this.email,this.password,this.role,this.iamge);
    this.myservice.insert(this.postData).subscribe(() => {

   alert("success")
     });
    
    
  }

  fileName: any ;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const filePath = input.value;
      this.fileName = filePath.replace("C:\\fakepath\\", "assets\\");
    }
  }

}
