import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl = 'https://certificat-immunite.herokuapp.com/api/v1/patient';

@Injectable({
  providedIn: 'root'
})
export class InterfacepatientService {

  constructor(private http: HttpClient, private route: Router) { }

	
  canAccess(){
	  console.log(localStorage.getItem('currentUser'));
	  if(localStorage.getItem('currentUser')=== null){
		  this.route.navigate(['/login']); 
	  }	  
  }

  readAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
	  console.log(`${baseUrl}/${id}`);
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
	  console.log(data);
    return this.http.post(baseUrl+"/create", data);
  }

  update(id, data): Observable<any> {
    return this.http.post(baseUrl+"/update", data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  searchByName(name): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
