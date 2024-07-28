import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _HttpClient: HttpClient) {}

  mainProducts():Observable <any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
   }
}
