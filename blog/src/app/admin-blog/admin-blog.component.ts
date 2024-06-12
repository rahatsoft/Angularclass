import { Component, OnInit } from '@angular/core';
import { Comments } from '../Model/comments';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  allComments: any
  data:any;

  constructor(
    private service: ServiceService, private router:Router
    
  ) {
    this.data=this.router.getCurrentNavigation()?.extras.state?.["response"];

    this.service.getAllComments().subscribe(
      (data) => {
        this.allComments = data;
      }
    )

  }

  ngOnInit(): void {
  }


  isPusblishable: any;
  published(value: any) {

  }


  updateComment(c: Comments) {
    c.publish = !c.publish;
    this.service.updatComment(c).subscribe(() => {
      this.service.getAllComments().subscribe((data: any) => {
        this.allComments = data;
      })
    })
  }


}
