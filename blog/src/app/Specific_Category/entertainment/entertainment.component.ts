import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  category:any="Entertainment";

  constructor(private service: ServiceService ) {

   

    this.category = this.service.getBlogByCategory(this.category).subscribe( (data: any) => {
      

        this.category = data;
      })
   
  }



  ngOnInit(): void {
  }

}
