import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44378/api/products/getall';
  constructor(private HttpClient: HttpClient) {}

  getProducts():Observable<ProductResponseModel> {
   return this.HttpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
