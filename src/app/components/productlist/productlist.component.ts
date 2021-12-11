import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CommentService } from 'src/app/services/comment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[]

  constructor(public prod:ProductService, private comm:CommentService) { 
    
  }
  
  ngOnInit(): void {

    this.productlist=this.prod.getall();
    
  }

  

  
}
