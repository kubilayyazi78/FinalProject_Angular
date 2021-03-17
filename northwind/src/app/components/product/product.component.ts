import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  filterText='';

  constructor(private productService:ProductService,private activetedRoute:ActivatedRoute,private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{

      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }
      else{
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    });
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    });
  }

  addToCart(product:Product){
  this.toastrService.success("Sepete Eklendi",product.productName);
  }
}
