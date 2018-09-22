import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor( private http: HttpClient) { }

//api call
  getUsers(){
  	return this.http.get('https://data.cityofnewyork.us/resource/5scm-b38n.json');
  }

  getUsersByName(firstName, lastName){

    return this.http.get(`https://data.cityofnewyork.us/resource/5scm-b38n.json?first_name=${firstName}&last_name=${lastName}`);
  }

  getUsersByFirstName(firstName){

    return this.http.get(`https://data.cityofnewyork.us/resource/5scm-b38n.json?first_name=${firstName}`);
  }

  getUsersByLastName(lastName){
    lastName = lastName.toUppperCase();
    return this.http.get(`https://data.cityofnewyork.us/resource/5scm-b38n.json?last_name=${lastName}`);
  }

}
