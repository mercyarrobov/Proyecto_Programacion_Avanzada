import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  url = "http://localhost:3000/"

  constructor(public http: HttpClient) { }
  

}

