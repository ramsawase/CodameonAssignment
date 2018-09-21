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
} 
