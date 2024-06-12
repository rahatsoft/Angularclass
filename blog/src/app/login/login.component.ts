import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../Model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private myservice: ServiceService,
    private router: Router,
    private rout: ActivatedRoute
  ) {}
  id: any;
  password: any;
  role: any;
  loginUser: any;

  ngOnInit(): void {}

  login(){

    this.myservice.login(this.id, this.password).subscribe((x) => {
      this.loginUser = x;
      if ((this.loginUser != null && this.loginUser.role =='Admin')) {
      //  this.router.navigateByUrl("admin", { state: { response: this.loginUser } });
        this.router.navigateByUrl("/admin");
      }
      else if ((this.loginUser != null) && this.loginUser.role == 'Visitor') {
        // this.router.navigateByUrl("home", { state: { response: this.loginUser } });
        this.router.navigateByUrl("/opinion");
      }
       else {
        alert('Incorrect user ID or password. Type the correct user ID and password, and try again.');

      }
    });
    

  }

  //----------------------
  // login() {
  //   this.myservice.login(this.id, this.password).subscribe((x) => {
  //     this.loginUser = x;
  //     if (this.loginUser != null) {
      
  //       this.router.navigateByUrl('/login');
        
  //     } else {
  //       alert('Incorrect user ID or password. Type the correct user ID and password, and try again.');
  //     }
  //   });
  // }
}
