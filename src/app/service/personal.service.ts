import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  constructor(private http: HttpClient) { }

  private API_PERSONAL= 'https://randomuser.me/api/?results=16'

  getPersonal():Observable <any>{
    return this.http.get(this. API_PERSONAL)
  }

 

}
