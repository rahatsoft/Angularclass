import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  head:any
  allBlog: any
bangladesh:any;
  constructor(
    private blogservice: ServiceService,private route:ActivatedRoute
   
  ) {
    this.blogservice.getAllBlog().subscribe(
      (data: any) => {
        this.allBlog = data.slice(-7, -1);  
      }
    );
  }


  // this.allBlog = data.slice(0, 3);  



  ngOnInit(): void {
    // this.bangladesh = this.route.snapshot.params["category"];
 

    this.blogservice.getAllBlog().subscribe(
      (data: any) => {
        this.head = data.slice(- 1);  
      }
    );
  }

  

}
