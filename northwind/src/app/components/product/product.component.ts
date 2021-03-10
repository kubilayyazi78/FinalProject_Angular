import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl="https://localhost:44378/api/products/getall";

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
   this.getProducts();
  }

  getProducts() {
    this.HttpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      this.products=response.data;
    });
  }
}
