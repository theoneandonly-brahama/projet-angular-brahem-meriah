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

  public searchTerm : string='';
  searchKey:string ="";

  constructor(public prod:ProductService, private comm:CommentService) { 
    
  }
  
  ngOnInit(): void {

    this.productlist=this.prod.getall();
    this.prod.search.subscribe((val:any)=>{this.searchKey=val;})
    
  }

  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.prod.search.next(this.searchTerm);
  }

  

  
}
