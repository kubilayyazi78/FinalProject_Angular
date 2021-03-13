import { Category } from './../models/category';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:44378/api/categories/getall';
  constructor(private HttpClient: HttpClient) {}

  getCategories():Observable<ListResponseModel<Category>> {
   return this.HttpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
