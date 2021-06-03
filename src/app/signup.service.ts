import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

// private _registerUrl = "http://localhost/formalde/app_api/Api/register"

  constructor(private http: HttpClient) { }

  //  registerUser(){
  //   return this.http.post<any>(this._registerUrl)
  //  }

}
