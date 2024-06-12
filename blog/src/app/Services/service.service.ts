import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Model/blog';
import { Comments } from '../Model/comments';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient
  ) { }

  // url:any="http://localhost:8080/";

  url:any="http://localhost:8080/getAllBlog";

  getAllBlog():Observable<Blog>{
    this.url="http://localhost:8080/getAllBlog";
    return this.http.get<Blog>(this.url);
  }

  getBlogById(blog_id:any):Observable<Blog>{
    this.url="http://localhost:8080/getBlogById/";
  

    return this.http.get<Blog>(this.url+blog_id);
  }

  getBlogByCategory(category:any):Observable<Blog>{ 
    this.url="http://localhost:8080/category/";
   
  
    return this.http.get<Blog>(this.url+category);
  }

  
  // getBlogByCategory(p:any):Observable<Blog>{ 
  //   this.url="http://localhost:8080/category/";
  //   return this.http.get<Blog>(this.url+p);
  // }


  saveComment(comment:Comments):Observable<Comments>{
    this.url="http://localhost:8080/saveComments";
    return this.http.post<Comments>(this.url,comment);
  }

  getAllComments():Observable<Comments>{
    this.url="http://localhost:8080/getAllComments";
    return this.http.get<Comments>(this.url);
  }

  updatComment(comment:Comments):Observable<Comments>{
    this.url="http://localhost:8080/updateComment";
    return this.http.put<Comments>(this.url,comment);
  }

  // saving blog 

  saveBlog(b:Blog):Observable<Blog>{

    alert("service")
    this.url="http://localhost:8080/saveBlog";
    return this.http.post<Blog>(this.url,b);

  }
  insert(s:Login):Observable<Login>{
    this.url="http://localhost:8080/insertdata";
    return this.http.post<Login>(this.url,s)

  }
  login(id:any,password:any):Observable<Login>{
    this.url="http://localhost:8080/";
    return this.http.get<Login>(this.url+id+"/"+password);
  }


  showbyid(id:any):Observable<Login[]>{
    this.url="http://localhost:8080/";
    return this.http.get<Login[]>(this.url+id);
  }


  // searchByName(name: string): Observable<Signup[]> {
  //   return this.http.get<Signup[]>(`${this.baseUrl}/${name}`);
// showsignup and login data

  show():Observable<Login>{
    this.url="http://localhost:8080/showalldata";
    return this.http.get<Login>(this.url );
  }


}
