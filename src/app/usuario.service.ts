import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  url = 'https://reqres.in/api/users'
  traerLista(){
    const params = new HttpParams().set('page','1')

   return this.http.get<any>(`${this.url}?`,{params} )
  }
  siguienteLista(page){
    const params = new HttpParams().set('page',page)

    return this.http.get<any>(`${this.url}?`,{params} )
  }
  traerUsuario(id){
    return this.http.get<any>(`${this.url}/${id}` )
  }
}
