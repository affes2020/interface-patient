import { Component, OnInit } from '@angular/core';
import { InterfacepatientService } from 'src/app/services/interfacepatient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor(private interfacepatientService: InterfacepatientService) { }
  patient : any;

  ngOnInit(): void {
	this.interfacepatientService.canAccess();
	this.readActivePatientDetails();  
  }
  
 readActivePatientDetails(): void {
    this.interfacepatientService.get(localStorage.getItem('currentUser'))
      .subscribe(
        patient => {
          this.patient = patient.data[0];
		  console.log(localStorage.getItem('currentUser'));
		  localStorage.setItem('patient',patient);
          console.log(patient);
        },
        error => {
          console.log(error);
        });
  }

}
