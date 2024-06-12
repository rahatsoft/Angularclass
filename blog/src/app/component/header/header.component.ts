import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute,   private service: ServiceService, private router:Router ) { }

  ngOnInit(): void {
  }
  education:any;
  bblog_id:any


 
  

}
