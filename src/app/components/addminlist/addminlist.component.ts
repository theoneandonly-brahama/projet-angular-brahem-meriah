import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addminlist',
  templateUrl: './addminlist.component.html',
  styleUrls: ['./addminlist.component.css']
})
export class AddminlistComponent implements OnInit {

  prodlist:Product[]

  constructor(public prod:ProductService) { }

  ngOnInit(): void {
    this.prodlist=this.prod.getall()

  }
  deleteProduct(i:number,id:string): void {
      this.prod.delete(id)
        .catch(err => console.log(err));
        this.prod.prodlist.splice(i, 1)
    
  }
  
}


