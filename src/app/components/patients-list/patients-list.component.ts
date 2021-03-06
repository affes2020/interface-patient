import { Component, OnInit } from '@angular/core';
import { InterfacepatientService } from 'src/app/services/interfacepatient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: any;
  currentPatient = null;
  currentIndex = -1;
  name = '';

  constructor(private interfacepatientService: InterfacepatientService) { }

  ngOnInit(): void {
    this.readPatients();
  }

  readPatients(): void {
    this.interfacepatientService.readAll()
      .subscribe(
        patients => {
          this.patients = patients;
		  console.log("lecture OK");
          console.log(patients);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readPatients();
    this.currentPatient = null;
    this.currentIndex = -1;
  }

  setCurrentPatient(patient, index): void {
    this.currentPatient = patient;
    this.currentIndex = index;
  }

  deleteAllPatients(): void {
    this.interfacepatientService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readPatients();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.interfacepatientService.searchByName(this.name)
      .subscribe(
        patients => {
          this.patients = patients;
          console.log(patients);
        },
        error => {
          console.log(error);
        });
  }

}
