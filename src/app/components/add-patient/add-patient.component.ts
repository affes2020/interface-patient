import { Component, OnInit } from '@angular/core';
import { InterfacepatientService } from 'src/app/services/interfacepatient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {


  patient = {
    nom_patient: '',
    prenom_patient: '',
	date_naiss: '',
	sexe: '',
	n_sec_sociale: '',
	photo_id_patient: '',
	piece_id_patient:'',
	obj_consult:'',
	login:'',
	pwd:''
  };
  submitted = false;

  constructor(private interfacepatientService: InterfacepatientService, private route: Router) { }

  ngOnInit(): void {
  }
  
 savePatient(): void {
    const data = {
      nom_patient: this.patient.nom_patient,
	  prenom_patient: this.patient.prenom_patient,
      date_naiss: this.patient.date_naiss,
	  sexe: this.patient.sexe,
	  n_sec_sociale: this.patient.n_sec_sociale,
	  photo_id_patient: this.patient.photo_id_patient,
	  piece_id_patient:this.patient.piece_id_patient,
	  obj_consult:this.patient.obj_consult,
	  login:this.patient.login,
	  pwd:this.patient.pwd
    };

    this.interfacepatientService.create(data)
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

  newPatient(): void {
    this.patient = {
    nom_patient: '',
    prenom_patient: '',
	date_naiss: '',
	sexe: '',
	n_sec_sociale: '',
	photo_id_patient: '',
	piece_id_patient:'',
	obj_consult:'',
	login:'',
	pwd:''
    };
  }

}
