import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(public prod:ProductService) { 
    
  }
  

  productlist:Product[]

  ngOnInit(): void {
    
    this.productlist=  this.prod.getall()
    console.log(this.productlist)
  }
}
