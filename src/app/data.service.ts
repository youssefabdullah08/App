import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
const BaseURL = 'http://foodsystem.tryasp.net';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _HttpClient: HttpClient) {}

 AllCate(params:any=''):Observable<any>{
  return this._HttpClient.get(BaseURL+`/Category${params}`)
 }
}
