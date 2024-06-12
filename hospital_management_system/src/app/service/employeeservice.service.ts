import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  url:any="http://localhost:8080/";

  insert(s:Employee):Observable<Employee>{
    this.url="http://localhost:8080/insert";
    return this.http.post<Employee>(this.url,s);
  }
  


  loginById(id:any,password:any):Observable<Employee>{
    this.url="http://localhost:8080/";
    return this.http.get<Employee>(this.url+id+"/"+password);
  }
  scearchbyid(id:any):Observable<Employee>{
    this.url="http://localhost:8080/";
    return this.http.get<Employee>(this.url+id);
  }

delete(emp_id:any):Observable<Employee>{
  this.url="http://localhost:8080/delete/";
  return this.http.delete<Employee>(this.url+emp_id);
};
  // update(s:Employee):Observable<Employee>{
  //   this.url="http://localhost:8080/updated";
  //   return this.http.put<Employee>(this.url,s);
  // }
  // update(s:Employee):Observable<Employee>{
  //   alert("updated");
  //   this.url="http://localhost:8080/updated";
  //   return this.http.put<Employee>(this.url,s);
    
  // }
  update(s:Employee):Observable<Employee>{
    this.url="http://localhost:8080/update";
    return this.http.put<Employee>(this.url,s);
  }


  // datashow----------------------------------
  show():Observable<Employee>{
    this.url="http://localhost:8080/show";
    return this.http.get<Employee>(this.url );
  }

  

}