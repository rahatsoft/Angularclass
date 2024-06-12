import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})
export class InternationalComponent implements OnInit {

  category:any="International";

  constructor(private service: ServiceService ) {

   

    this.category = this.service.getBlogByCategory(this.category).subscribe( (data: any) => {
      

        this.category = data;
      })
   
  }


  ngOnInit(): void {
  }

}
