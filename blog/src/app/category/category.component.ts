import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   category: any;

 blogBycategory: any;
 
  data:any;
  constructor(private service: ServiceService, private rout:ActivatedRoute) {

    this.category = this.rout.snapshot.params["category"];

    this.blogBycategory = this.service.getBlogByCategory(this.category).subscribe( (data: any) => {
      

        this.blogBycategory = data;
      })
   
  }



  ngOnInit(): void {

  }

}
