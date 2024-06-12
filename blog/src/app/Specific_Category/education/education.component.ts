import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  category:any="Education";

  constructor(private service: ServiceService ) {

   

    this.category = this.service.getBlogByCategory(this.category).subscribe( (data: any) => {
      

        this.category = data;
      })
   
  }



  ngOnInit(): void {
  }

}
