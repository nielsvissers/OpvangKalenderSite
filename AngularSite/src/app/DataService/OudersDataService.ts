import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Ouder } from 'src/Models/Ouder'  
import { ROOT_URL } from 'src/Models/Config'  
import { Observable } from 'rxjs';  
@Injectable()  
export class OuderDataService {  
  employees: Observable<Ouder[]>;  
  newemployee: Ouder;  
  constructor(private http: HttpClient) {  
  
  }  
  
  getOuder() {  
    return this.http.get<Ouder[]>(ROOT_URL + 'ouders');  
  }  
  AddOuder(emp: Ouder) {  
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    var body = {
      Naam: emp.naam, Schoolgaand: emp.schoolgaand
    }
    return this.http.post<Ouder>(ROOT_URL + 'ouders', body, { headers });  
  
  }  
  
  ///  
  EditOuder(emp: Ouder) {  
    console.log(emp);  
    const params = new HttpParams().set('ID', emp.id.toString());  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {
      Naam: emp.naam, Schoolgaand: emp.schoolgaand, ID: emp.id  
    }  
    return this.http.put<Ouder>(ROOT_URL + 'ouders/' + emp.id, body, { headers, params })  
  
  }  
  DeleteOuder(emp: Ouder) {  
    const params = new HttpParams().set('ID', emp.id.toString());  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    var body = {  
      Naam: emp.naam, Schoolgaand: emp.schoolgaand, ID: emp.id  
    }  
    return this.http.delete<Ouder>(ROOT_URL + 'ouders/' + emp.id)  
  
  }  
  
}  
