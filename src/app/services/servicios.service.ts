import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  getPartidos():Observable<any>{
    const url ="http://www.mocky.io/v2/59f08692310000b4130e9f71";
    return this.http.get(url);
  }

  getPartido(id:any):Observable<any>{
    const url ="http://www.mocky.io/v2/59f08692310000b4130e9f71/"+id;
    return this.http.get(url);
  }
}
