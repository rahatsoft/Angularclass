import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-bangladesh',
  templateUrl: './bangladesh.component.html',
  styleUrls: ['./bangladesh.component.css']
})
export class BangladeshComponent implements OnInit {

  category:any="Bangladesh";

  constructor(private service: ServiceService , private route:ActivatedRoute, private router:Router) {

   

    this.category = this.service.getBlogByCategory(this.category).subscribe( (data: any) => {
      

        this.category = data;
      })
   
  }



  ngOnInit(): void {
    this.router.navigateByUrl("", { state: { response: this.category } });

  }

}
