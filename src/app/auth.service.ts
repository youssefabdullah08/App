import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BaseURL = 'http://foodsystem.tryasp.net';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  login(form: any): Observable<any> {
    return this._HttpClient.post(BaseURL + `/Auth/Login`, form);
  }

  register(form: any): Observable<any> {
    return this._HttpClient.post(BaseURL + `/Auth/Register`, form);
  }
}
