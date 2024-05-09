import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }

  private API_AUTOS= 'http://localhost:3000/autos'

  //get 

  getNosotros():Observable <any>{
    return this.http.get(this.API_AUTOS)
  }

  //get auto completado 

  getNosotrosId(id:any):Observable <any>{
    return this.http.get(`${this.API_AUTOS}/${id}`)
  }

  ////post 

  postNosotros(persona:JSON):Observable <any>{
    return this.http.post(this.API_AUTOS,persona)
  }

  //Actualizar 


  putNosotros(persona:any):Observable<any>{
    return this.http.put(`${this.API_AUTOS}/${persona.id}`,persona)
  }
  //elimar

  deleteNosotrosID(id:any):Observable<any>{
    return this.http.delete(`${this.API_AUTOS}/${id}`)
  }

  ////////////////////////
 


  getPersonal():Observable <any>{
    return this.http.get(this.API_AUTOS)
  }

  getPersonalUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_AUTOS}/${id}`)
    
  }




}
