import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  category:any="Features";

  constructor(private service: ServiceService ) {

   

    this.category = this.service.getBlogByCategory(this.category).subscribe( (data: any) => {
      

        this.category = data;
      })
   
  }

  

  ngOnInit(): void {
  }

}
