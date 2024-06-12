import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentTable } from 'src/app/model/appointment-table';


@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  id: any;
  password: any;

  login() {
    this.router.navigateByUrl("show_patient/" + this.id + "/" + this.password);
  }


}
