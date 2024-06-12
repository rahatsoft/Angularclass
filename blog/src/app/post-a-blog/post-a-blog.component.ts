import { Component, OnInit } from '@angular/core';
import { Blog } from '../Model/blog';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-post-a-blog',
  templateUrl: './post-a-blog.component.html',
  styleUrls: ['./post-a-blog.component.css']
})
export class PostABlogComponent implements OnInit {

  constructor(
private service:ServiceService

  ) { }

  ngOnInit(): void {
  }


  blog_id:any;
  writer:any;
  title:any;
  description:any;
  publ_date:any;
  image:any;
  category:any;
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const filePath = input.value;
      this.image = filePath.replace("C:\\fakepath\\", "assets\\");
    }
  }

  blog_object:any
  submitBlog(){
    this.blog_object=new Blog(1,this.writer, this.title,this.description, "", this.image,this.category);
    this.service.saveBlog(this.blog_object).subscribe(
      (data:any)=>{
        
      }
    )
  }


  


}
