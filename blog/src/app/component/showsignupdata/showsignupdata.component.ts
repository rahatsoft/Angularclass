import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-showsignupdata',
  templateUrl: './showsignupdata.component.html',
  styleUrls: ['./showsignupdata.component.css']
})
export class ShowsignupdataComponent implements OnInit {
  data:any
  constructor(private myservice:ServiceService, private router:Router) {
    this.myservice.show().subscribe((x) => {this.data=x });
    // this.data=this.router.getCurrentNavigation()?.extras.state?.["responce"];
   }

  ngOnInit(): void {
  }
  
 
  name: any;

  getData: any;
  

  edit(v:any) {
    // this.name=v;
    // this.myservice.scearchbyname(this.name).subscribe((x) => {
    //   this.getData = x
    //   this.router.navigateByUrl("update", { state: { response: this.getData } });
    // });

  }


delete(id:any){
  // if(confirm("are you sure")){
  //   console.log(
  //     this.myservice.delete(id).subscribe(()=>{
  //       alert("deleted");
  //       // this.myservice.show().subscribe((x)=>{
  //       //   this.data=x;
  //       //    this.router.navigateByUrl("/datashow",{state:{Response:this.data}});

  //       this.myservice.show().subscribe((x)=>{
  //           this.data=x;
  //         this.router.navigateByUrl("/datashow");


  //       })


  //     })
  //   )
  // }
}


}
