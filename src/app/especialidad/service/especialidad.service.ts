import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Especialidad } from "../models/especialidad";



@Injectable({
providedIn: 'root'
})
export class EspecialidadService{
  private apiUrl = "http://localhost:8080/api/especialidad";

  constructor(private http:HttpClient) { }

  getEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(this.apiUrl);
  }
}
