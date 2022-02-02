import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl ='https://restcountries.com/v2/regionalbloc/eu';
    
  }
  getall():Promise<any[]>{
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }
  getallclients(){
    return this.httpClient.get('http://localhost:3050/');

  }
  getfriends(){
    return this.httpClient.get('http://localhost:3050/friends');

  }
}
