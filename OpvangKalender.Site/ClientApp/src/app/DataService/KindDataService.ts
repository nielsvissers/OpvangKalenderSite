import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Kind } from 'src/Models/Kind'  
import { ROOT_URL } from 'src/Models/Config'  
import { Observable } from 'rxjs';  
@Injectable()  
export class KindDataService {  
  employees: Observable<Kind[]>;  
  newemployee: Kind;  
  constructor(private http: HttpClient) {  
  
  }  
  
  getKind() {  
    return this.http.get<Kind[]>(ROOT_URL + 'Kinderen');  
  }  
  AddKind(emp: Kind) {  
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    var body = {
      Naam: emp.naam, Schoolgaand: emp.schoolgaand
    }
    return this.http.post<Kind>(ROOT_URL + 'Kinderen', body, { headers });  
  
  }  
  
  ///  
  EditKind(emp: Kind) {  
    console.log(emp);  
    const params = new HttpParams().set('ID', emp.id.toString());  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {
      Naam: emp.naam, Schoolgaand: emp.schoolgaand, ID: emp.id  
    }  
    return this.http.put<Kind>(ROOT_URL + 'Kinderen/' + emp.id, body, { headers, params })  
  
  }  
  DeleteKind(emp: Kind) {  
    const params = new HttpParams().set('ID', emp.id.toString());  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    var body = {  
      Naam: emp.naam, Schoolgaand: emp.schoolgaand, ID: emp.id  
    }  
    return this.http.delete<Kind>(ROOT_URL + 'Kinderen/' + emp.id)  
  
  }  
  
}  
