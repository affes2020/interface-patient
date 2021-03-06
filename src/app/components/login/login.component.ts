import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	patient = {
		login:'',
		pwd:''
	}
	
	baseUrl = 'https://certificat-immunite.herokuapp.com/api/v1/authentification';

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
	  if(localStorage.getItem('currentUser')!== null){
		  this.navigateToHome();
		  //console.log(localStorage.getItem('currentUser'));
	  }
  }
  
  login(): void {
    const data = {
      login: this.patient.login,
	  pwd: this.patient.pwd,
	}
	  console.log(data);//return null;

	  this.http.post(this.baseUrl, data).subscribe(
        response => {
		// suite à une erreur, le format du Json retourné n'est pas correct: presence de :: au lieu de :
		// on remplace donc id_user:: par id_user: avant de parser le Json
		let message = JSON.stringify(response['success'].message).replace("id_user:","id_user");
		console.log(message);
          console.log(JSON.parse(message).id_user);
		  localStorage.setItem('currentUser', this.patient.login);
		  localStorage.setItem('currentUserID', JSON.parse(message).id_user);
		  console.log(localStorage.getItem('currentUser')); 
		  this.navigateToHome();		  
        },
        error => {
          console.log(error);
        });
    
  }
  
  registrer() : void {
	this.route.navigate(['/addpatient']);  
  }
  
  navigateToHome():void {
	this.route.navigate(['/moncompte']);
}

}
