import { Component, OnInit } from '@angular/core';
import { InterfacepatientService } from 'src/app/services/interfacepatient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

   patient = {
    nom_patient: '',
    prenom_patient: '',
	date_naiss: '',
	sexe: '',
	n_sec_sociale: '',
	photo_id_patient: '',
	piece_id_patient:'',
	obj_consult:''
  };
  submitted = false;

  constructor(private interfacepatientService: InterfacepatientService, private route: Router) { }

  ngOnInit(): void {
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
  
 updatePatient(): void {
    const data = {
      nom_patient: this.patient.nom_patient,
	  prenom_patient: this.patient.prenom_patient,
      date_naiss: this.patient.date_naiss,
	  sexe: this.patient.sexe,
	  n_sec_sociale: this.patient.n_sec_sociale,
	  photo_id_patient: this.patient.photo_id_patient,
	  piece_id_patient:this.patient.piece_id_patient,
	  obj_consult:this.patient.obj_consult
    };

    this.interfacepatientService.update(localStorage.getItem('currentUserID'),data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

navigateToHome():void {
	this.route.navigate(['/']);
}


}